// typescript error where it though the env variables 
// were undefined


const requiredEnv = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
};

export const env = {
    MYSQL_HOST: requiredEnv("MYSQL_HOST"),
    MYSQL_USER: requiredEnv("MYSQL_USER"),
    MYSQL_PASSWORD: requiredEnv("MYSQL_PASSWORD"),
    MYSQL_DATABASE: requiredEnv("MYSQL_DATABASE"),
    MYSQL_PORT: requiredEnv("MYSQL_PORT"),
};
