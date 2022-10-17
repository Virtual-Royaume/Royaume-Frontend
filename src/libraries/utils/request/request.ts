import type { Response } from "./request.type";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import axios, { AxiosError } from "axios";
import { print } from "graphql";
import { getStringEnv } from "../env-variables";

export const gqlRequest = async<D, V>(document: string, variables?: V): Promise<Response<D>> => {
  try {
    const response = await axios(getStringEnv("API_LINK"), {
        method: "post",
        headers: {
            "authorization": getStringEnv("API_TOKEN"),
            "content-type": "application/json"
        },
        data: {
            query: document,
            variables
        }
    });

    return {
        success: true,
        data: response.data.data
    }
  } catch (error) {
    console.log(error instanceof AxiosError ? error.response?.data.errors ?? error : error);
    return { success: false };
  }
}