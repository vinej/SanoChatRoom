import { initTRPC } from "@trpc/server";
import { User } from "./model/user.js";
import superjson from 'superjson';

const t = initTRPC.create({
  transformer: superjson,
});

import { z } from "zod";
 
const publicProcedure = t.procedure;
 
export const appRouter = t.router({
  userLogin : publicProcedure
    .input(
        z.object({ email: z.string().email(), password: z.string() }))
    .mutation(async (opts: any) => {
      const { input } = opts;
      const user: User = {
        id: 1, name: 'jyv Katt',
        token: "fake jyv",
        dateCreated: new Date(),
        email: input.email,
        password: input.password,
        authenticated: true,
        errorMessage: "",
        isAutorizationInit: false,
        authorizations: [],
        language: ""
      };
      console.log("trpc userLogin", user);
      return user;
    }),
  userList: publicProcedure
    .query(async () => {
      const users: User[] = [{
        id: 1, name: 'Katt',
        token: "",
        dateCreated: new Date(),
        email: "",
        password: "",
        authenticated: false,
        errorMessage: "",
        isAutorizationInit: false,
        authorizations: [],
        language: ""
      }];
      return users;
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts: any) => {
      const { input } = opts;
      const user: User = {
        id: input, name: 'Katt',
        token: "",
        dateCreated: new Date(),
        email: "",
        password: "",
        authenticated: false,
        errorMessage: "",
        isAutorizationInit: false,
        authorizations: [],
        language: ""
      };
      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts: any) => {
      const { input } = opts;
      const user: User = { id: '1', ...input };
      return user;
    }),
});
 
export type AppRouter = typeof appRouter;
