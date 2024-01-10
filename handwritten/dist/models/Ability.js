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
exports.Ability = void 0;
const z = __importStar(require("zod"));
const Name_1 = require("./Name");
const VerboseEffect_1 = require("./VerboseEffect");
const AbilityEffectChange_1 = require("./AbilityEffectChange");
const AbilityFlavorText_1 = require("./AbilityFlavorText");
exports.Ability = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The name for this resource */
    name: z.string(),
    /* Whether or not this is a hidden ability */
    is_hidden: z.boolean(),
    /* The slot this ability occupies in this Pokémon species */
    slot: z.number(),
    /* The name of this ability listed in different languages */
    names: z.array(Name_1.Name),
    /* The effect of this ability listed in different languages */
    effect_entries: z.array(VerboseEffect_1.VerboseEffect),
    /* The list of previous effects this ability has had across version groups */
    effect_changes: z.array(AbilityEffectChange_1.AbilityEffectChange),
    /* The flavor text of this ability listed in different languages */
    flavor_text_entries: z.array(AbilityFlavorText_1.AbilityFlavorText),
});
//# sourceMappingURL=Ability.js.map