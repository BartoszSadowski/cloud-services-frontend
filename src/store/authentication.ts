import { Store } from ".";

// TODO: Implement properly
interface User extends Object {
  isLoggedIn: boolean;
}

class AuthenticationStore extends Store<User> {
  protected data(): User {
    return {
      isLoggedIn: false,
    };
  }

  // TODO: Implement properly
  authenticate(email: string, password: string) {
    if (email && password) {
      this.state.isLoggedIn = true;
    }

    return new Promise((res) => res(this.state.isLoggedIn));
  }
}

export const authenticationStore = new AuthenticationStore();
