import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class User extends Model {
  static table = 'users';

  @field('userId')
  userId: string;

  @field('name')
  name: string;

  @field('email')
  email: string;

  @field('token')
  token: string;

  @field('refreshToken')
  refreshToken: string;
}

export { User };
