import { z } from "zod";

export const postSchema = z.object({
   origin: z.string().min(1, "Origin is required"),
   destination: z.string().min(1, "Destination is required"),
   weight: z
     .number({ invalid_type_error: "Weight must be a number" })
     .positive("Weight must be greater than zero"),
   courier: z.string().min(1, "Courier is required"),
 });

export type PostFormData = z.infer<typeof postSchema>;