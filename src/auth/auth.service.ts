import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity';
import { SignInDto, SignUpDto } from './dto';
import { hash, verify } from 'argon2';
import { RedisService } from '@/infra/redis';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private redisService: RedisService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password, name, mode } = signUpDto;

    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await hash(password);
    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
      name,
      mode,
    });
    await this.usersRepository.save(user);

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
    });

    await this.redisService.set(user.id, token);

    return { token };
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await verify(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    await this.redisService.set(`auth_${user.id}`, token);

    return { token };
  }

  async signOut(userId: string): Promise<void> {
    await this.redisService.delete(userId);
  }
}
