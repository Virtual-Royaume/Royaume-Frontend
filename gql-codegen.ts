import type { CodegenConfig } from "@graphql-codegen/cli";
import { getStringEnv } from "./src/libraries/utils/env-variables";

const apiLink = getStringEnv("API_LINK");
const apiToken = getStringEnv("API_TOKEN");

const config: CodegenConfig = {
    schema: [
        { [apiLink]: { headers: { authorization: apiToken } } }
    ],
    documents: "./src/**/*.ts",
    generates: {
        "./src/libraries/utils/request/graphql": {
            preset: "client",
            plugins: []
        }
    }
};

export default config;