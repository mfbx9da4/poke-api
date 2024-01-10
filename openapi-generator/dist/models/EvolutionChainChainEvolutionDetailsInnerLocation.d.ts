import { GenerationGameIndex } from '../models/GenerationGameIndex';
import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class EvolutionChainChainEvolutionDetailsInnerLocation {
    'id'?: number;
    'name'?: string;
    'region'?: NamedAPIResource;
    'names'?: Array<Name>;
    'gameIndices'?: Array<GenerationGameIndex>;
    'areas'?: Array<NamedAPIResource>;
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
