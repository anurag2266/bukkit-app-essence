import axios from 'axios';
import { config } from '../constants';

class Auth {
  private axios = axios.create({
    baseURL: config.authUrl
  });

  public async getUserColleges(email: string) {
    const res = await this.axios.post('/get-user-colleges', {
      email
    });
    return res.data;
  }

  public async sendOneTimePassword(email: string, slug: string) {
    const res = await this.axios.post('/auth/send-one-time-password', {
      email,
      slug
    });
    return res.data;
  }

  public async signIn(email: string, slug: string, password: string) {
    const res = await this.axios.post('/auth/sign-in', {
      email,
      slug,
      password
    });
    return res.data;
  }
}

export default Auth;
