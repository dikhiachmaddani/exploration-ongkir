import z from "zod";

export const envClientSchemaObj = {
  NEXT_PUBLIC_API_BASE_URL: z.string(),
  API_KEY: z.string(),
};
export const envClientCollectionObj = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  API_KEY: process.env.API_KEY,
};

export const envClientSchema = z.object(envClientSchemaObj);
export const envClient = envClientSchema.parse(envClientCollectionObj);
