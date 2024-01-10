"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = void 0;
const z = __importStar(require("zod"));
const APIResource_1 = require("./APIResource");
const NamedAPIResource_1 = require("./NamedAPIResource");
const Name_1 = require("./Name");
exports.Stat = z.object({
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
        increase: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The move causing the change */
            move: NamedAPIResource_1.NamedAPIResource,
        })),
        /* A list of moves and how they change the referenced stat */
        decrease: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The move causing the change */
            move: NamedAPIResource_1.NamedAPIResource,
        })),
    }),
    /* A detail of natures which affect this stat positively or negatively */
    affecting_natures: z.object({
        /* A list of natures and how they change the referenced stat */
        increase: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The nature causing the change */
            nature: NamedAPIResource_1.NamedAPIResource,
        })),
        /* A list of nature sand how they change the referenced stat */
        decrease: z.array(z.object({
            /* The maximum amount of change to the referenced stat */
            change: z.number(),
            /* The nature causing the change */
            nature: NamedAPIResource_1.NamedAPIResource,
        })),
    }),
    /* A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
    characteristics: z.array(APIResource_1.APIResource),
    /* The class of damage this stat is directly related to */
    move_damage_class: NamedAPIResource_1.NamedAPIResource.nullable(),
    /* The name of this resource listed in different languages */
    names: z.array(Name_1.Name),
});
//# sourceMappingURL=Stat.js.map