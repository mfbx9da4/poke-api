import * as z from "zod";
import { APIResource } from "./APIResource";
import { NamedAPIResource } from "./NamedAPIResource";
import { Name } from "./Name";

export const Stat = z.object({
  /* The identifier for this resource */
  id: z.number(),
  /* The name for this resource */
  name: z.string(),
  /* ID the games use for this stat */
  game_index: z.number(),
  /* Whether this stat only exists within a battle */
  is_battle_only: z.boolean(),
  /* A detail of moves which affect this stat positively or negatively */
  affecting_moves: z.object({
    /* A list of moves and how they change the referenced stat */
    increase: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The move causing the change */
        move: NamedAPIResource,
      })
    ),
    /* A list of moves and how they change the referenced stat */
    decrease: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The move causing the change */
        move: NamedAPIResource,
      })
    ),
  }),
  /* A detail of natures which affect this stat positively or negatively */
  affecting_natures: z.object({
    /* A list of natures and how they change the referenced stat */
    increase: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The nature causing the change */
        nature: NamedAPIResource,
      })
    ),
    /* A list of nature sand how they change the referenced stat */
    decrease: z.array(
      z.object({
        /* The maximum amount of change to the referenced stat */
        change: z.number(),
        /* The nature causing the change */
        nature: NamedAPIResource,
      })
    ),
  }),
  /* A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
  characteristics: z.array(APIResource),
  /* The class of damage this stat is directly related to */
  move_damage_class: NamedAPIResource.nullable(),
  /* The name of this resource listed in different languages */
  names: z.array(Name),
});

export type Stat = z.infer<typeof Stat>;
