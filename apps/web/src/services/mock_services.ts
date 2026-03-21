export class MockAuthService {
  signIn({ email, password }: { email: string; password: string }, next: (token: string, name: string) => void, err: (error: any) => void) {
    next('token', 'Jean-Yves')
  }

  signUp({ email, password, name }: { email: string; password: string; name: string }, next: (token: string, name: string) => void, err: (error: any) => void) {
    next('token', 'Jean-Yves')
  }

  setAuthorizations(next: (auth: any[]) => void, err: (error: any) => void) {
    next([])
  }
}

export class MockTodoService {
  getAll(next: any, err: any) {
    let todos = [{ id: 1, desc: 'test', done: false },
    { id: 2, desc: 'test 2', done: true }]
    // simulate a service call
    next(todos)
  }
}
