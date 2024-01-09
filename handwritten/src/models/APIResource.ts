import * as z from "zod";

export const APIResource = z.object({
  /* The URL of the referenced resource */
  url: z.string(),
});

export type APIResource = z.infer<typeof APIResource>;
