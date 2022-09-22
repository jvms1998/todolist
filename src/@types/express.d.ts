declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-covention
    export interface Request {

        user: {
            id: string;
            name: string;
            email: string;
        };
    }
}