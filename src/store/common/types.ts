import { UserFullRole } from 'constants/types';

export const USER_LOGIN = '@common/user-login';

export type UserLoginAction = {
  type: typeof USER_LOGIN;
  payload: {
    fullRole: UserFullRole;
  };
};
