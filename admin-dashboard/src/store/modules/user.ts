import {
  VuexModule,
  getModule,
  Module,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "./../index";

export interface LoginParams {
  userName: string;
  password: string;
}

@Module({ namespaced: true, name: "userModule", dynamic: true, store })
class User extends VuexModule {
  token = "";

  get getToken(): string {
    return this.token || "";
  }

  @Mutation
  updateToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  @Action({ commit: "updateToken" })
  async login(params: LoginParams): Promise<string | null> {
    try {
      // todo call api
      const userInfo = params.userName;
      this.updateToken(userInfo);
      return userInfo;
    } catch {
      return null;
    }
  }

  @Action({ commit: "updateToken" })
  async logout(): Promise<void> {
    // todo call api
    this.updateToken("");
  }
}

export const userStore = getModule<User>(User);
