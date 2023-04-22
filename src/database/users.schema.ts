import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  ADMIN = 'admin',
  ADVISOR = 'advisor',
  AGENT = 'agent',
  HOST = 'host',
}

@Schema({ timestamps: true })
export class Users {
  @Prop()
  id?: string;

  @Prop({ unique: [true, 'Duplicate email'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  location?: string;

  @Prop()
  googleId?: string;

  @Prop()
  googleAccessToken?: string;

  @Prop()
  googleRefreshToken?: string;

  @Prop()
  userRole?: UserRole;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
