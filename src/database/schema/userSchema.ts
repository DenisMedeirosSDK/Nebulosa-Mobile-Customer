import { tableSchema } from '@nozbe/watermelondb';

const userSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'userId',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'token',
      type: 'string',
    },
    {
      name: 'refreshToken',
      type: 'string',
    },
  ],
});

export { userSchema };
