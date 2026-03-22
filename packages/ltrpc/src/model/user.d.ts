declare class User {
    id: number;
    token: string;
    dateCreated: Date;
    name: string;
    email: string;
    password: string;
    authenticated: boolean;
    errorMessage: string;
    isAutorizationInit: boolean;
    authorizations: string[];
    language: string;
    constructor();
}
export { User };
//# sourceMappingURL=user.d.ts.map