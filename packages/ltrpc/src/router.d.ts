import { User } from "./model/user";
export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    userLogin: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            email: string;
            password: string;
        };
        output: User;
        meta: object;
    }>;
    userList: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: User[];
        meta: object;
    }>;
    userById: import("@trpc/server").TRPCQueryProcedure<{
        input: string;
        output: User;
        meta: object;
    }>;
    userCreate: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
        };
        output: User;
        meta: object;
    }>;
}>>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=router.d.ts.map