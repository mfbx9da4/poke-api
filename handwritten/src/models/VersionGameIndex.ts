import * as z from "zod";
import { NamedAPIResource } from "./NamedAPIResource";

export const VersionGameIndex = z.object({
  /* The internal id of an API resource within game data */
  game_index: z.number(),
  /* The version relevent to this game index */
  version: NamedAPIResource,
});
export type VersionGameIndex = z.infer<typeof VersionGameIndex>;
