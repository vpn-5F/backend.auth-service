import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail,
  IsEnum,
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  Min,
  IsDate,
  IsOptional,
} from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ unique: true, length: 255 })
  @IsString()
  @MinLength(2, { message: 'Name is too short (minimum 2 characters)' })
  @MaxLength(30, { message: 'Name is too long (maximum 30 characters)' })
  name: string;

  @Column({ unique: true, length: 255 })
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(255, { message: 'Email is too long' })
  email: string;

  @Column({ length: 255 })
  @IsString()
  @MinLength(8, { message: 'Password is too short (minimum 8 characters)' })
  @MaxLength(72, { message: 'Password is too long (maximum 72 characters)' })
  password: string;

  @Column({
    type: 'enum',
    enum: ['lite', 'standart'],
    default: 'lite',
  })
  @IsEnum(['lite', 'standart'], {
    message: 'Mode must be either lite or standart',
  })
  mode: 'lite' | 'standart';

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  @IsNumber()
  @Min(0, { message: 'Spent amount cannot be negative' })
  spent: number;

  @Column({ type: 'timestamp', nullable: true, name: 'day_from' })
  @IsOptional()
  @IsDate()
  dayFrom: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'day_to' })
  @IsOptional()
  @IsDate()
  dayTo: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
