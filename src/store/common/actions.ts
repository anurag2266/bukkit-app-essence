import { USER_LOGIN, UserLoginAction } from './types';
import { UserFullRole } from 'constants/types';

export const userLogin = (fullRole: UserFullRole): UserLoginAction => ({
  type: USER_LOGIN,
  payload: {
    fullRole
  }
});
