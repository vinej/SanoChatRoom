import axios from 'axios'
import { ROOT_URL, HEADERS, PARAMETERS } from './config_service'
import { Service } from '../interfaces/service'
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@ltrpc/router/router';

//     👆 **type-only** imports are stripped acd ..t build time
 
// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
const ltrpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({ url: 'http://localhost:3000/trpc' }),
  ],
}) ;

export default class AuthService implements Service {
  private static instanceService: AuthService | null = null

  constructor() {
    // Constructor doesn't need to set static property
  }

  static setInstance(instanceService: AuthService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new AuthService()
    }
    return this.instanceService
  }

  refresh({ token }: { token: string }, next: (token: string, name:string ) => void, err: (error: any) => void) {
    axios.post(`${ROOT_URL}/auth/refresh?${PARAMETERS()}`, { token })
      .then(response => {
        console.log(response.data.token)
        next(response.data.token, response.data.name);
      })
      .catch(response => {
        err(response.data)
      });
  }

  async login({ email, password }: { email: string; password: string }, next: (token: string, name: string) => void, err: (error: any) => void) {
       const user = await ltrpc.userLogin.mutate({ email, password })
       if (user) {
        console.log("fake-token", user.name);
         next('fake-token', user.name)
       } else {
         err('User not found')
       }
      //axios.post(`${ROOT_URL}/auth/login?${PARAMETERS()}`, { email, password })
      //  .then(response => {
      //    console.log(response.data.token)
      //    next(response.data.token, response.data.name);
      //  })
      //  .catch(response => {
      //    err(response.data)
      //  });
  }

  signUp({ name, email, password }: { name: string; email: string; password: string; }, next: (token: string, name: string) => void, err: (error: any) => void) {
    axios.post(`${ROOT_URL}/auth/signup?${PARAMETERS()}`, { name, email, password })
      .then(response => {
        console.log(response.data.token)
        next(response.data.token, name);
      })
      .catch(response => err(response.data));
  }

  getAuthorizations(next: (authorizations: string[]) => void, err: (error: string) => void) {
    axios.get(`${ROOT_URL}/api/actions?${PARAMETERS()}`, HEADERS())
      .then(response => {
        next(response.data)
      })
      .catch(response => {
        err(response.data)
      })
  }
}
