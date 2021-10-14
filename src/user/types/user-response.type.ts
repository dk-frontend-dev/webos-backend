import {UserCreateInterface} from '@/user/types/user-create.interface'

export type UserResponseType = Omit<UserCreateInterface, 'password'>
