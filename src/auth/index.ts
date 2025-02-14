import { AuthService } from './services/auth.service';
import { AuthController } from './controllers';
import { JwtAuthGuard } from './guards';

export const controllers = [AuthController];

export const services = [AuthService];

export const guards = [JwtAuthGuard];
