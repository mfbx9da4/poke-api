import { EvolutionChainChainEvolutionDetailsInner } from '../models/EvolutionChainChainEvolutionDetailsInner';
import { PokemonSpecies } from '../models/PokemonSpecies';
export declare class EvolutionChainChain {
    'isBaby'?: boolean;
    'species'?: PokemonSpecies;
    'evolutionDetails'?: Array<EvolutionChainChainEvolutionDetailsInner> | null;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
