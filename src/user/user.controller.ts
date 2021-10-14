import {Body, Controller, Post} from '@nestjs/common'

import {UserCreateInterface} from '@/user/types/user-create.interface'
import {UserResponseType} from '@/user/types/user-response.type'

@Controller('user')
export class UserController {
  @Post('create')
  createUser(@Body('user') payload: UserCreateInterface): UserResponseType {
    return payload
  }
}
