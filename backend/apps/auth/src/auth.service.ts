import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from './users/schemas/user.schema';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserRequest } from './users/dto/create-user.request';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(createUserRequest: CreateUserRequest) {
    // Validate the request object
    // const errors = await validateCreateUserRequest(createUserRequest);
    // if (errors.length > 0) {
    //   throw new Error('Validation failed!');
    // }
  
    const hashedPassword = await bcrypt.hash(createUserRequest.password, 10);
  
    const user = await this.usersService.createUser({
      email: createUserRequest.email,
      password: hashedPassword,
    });
  
    return user;
  }

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user._id.toHexString(),
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  logout(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}