import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(
    username: string,
    id: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: id, username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
