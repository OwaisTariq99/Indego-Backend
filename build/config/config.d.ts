declare const config: {
    mongo: {
        username: string;
        options: {
            useUnifiedTopology: boolean;
            useNewUrlParser: boolean;
            socketTimeoutMS: number;
            keepAlive: boolean;
            poolSize: number;
            autoIndex: boolean;
            retryWrites: boolean;
        };
        url: string;
    };
    server: {
        hostname: string;
        port: string | number;
    };
    auth: {
        ENCRYPTION_KEY: string;
        ENCRYPTION_ALGORITHM: string;
        SECRET_KEY: string;
        STATIC_JWT: string;
        UNAUTHORIZE_JWT: string;
        ID: string;
        API_KEY: string;
    };
};
export default config;
//# sourceMappingURL=config.d.ts.map