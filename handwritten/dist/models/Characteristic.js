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
exports.Characteristic = void 0;
const z = __importStar(require("zod"));
const NamedAPIResource_1 = require("./NamedAPIResource");
const Description_1 = require("./Description");
exports.Characteristic = z.object({
    /* The identifier for this resource */
    id: z.number(),
    /* The remainder of the highest stat/IV divided by 5 */
    gene_modulo: z.number(),
    /* The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
    possible_values: z.array(z.number()),
    /* The highest stat of this characteristic */
    highest_stat: NamedAPIResource_1.NamedAPIResource,
    /* The descriptions of this characteristic listed in different languages */
    descriptions: z.array(Description_1.Description),
});
//# sourceMappingURL=Characteristic.js.map