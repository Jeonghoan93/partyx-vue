import { IsOptional, IsString } from 'class-validator';
import { UserRole } from '../../database/users.schema';

export class updateUsersDto {
  @IsOptional()
  @IsString()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly firstName: string;

  @IsOptional()
  @IsString()
  readonly lastName: string;

  @IsOptional()
  @IsString()
  readonly location?: string;

  @IsOptional()
  @IsString()
  readonly googleId?: string;

  @IsOptional()
  @IsString()
  readonly googleAccessToken?: string;

  @IsOptional()
  @IsString()
  readonly googleRefreshToken?: string;

  @IsOptional()
  @IsString()
  readonly userRole?: UserRole;
}
