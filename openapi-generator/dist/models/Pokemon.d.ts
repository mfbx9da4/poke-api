import { NamedAPIResource } from '../models/NamedAPIResource';
import { PokemonAbility } from '../models/PokemonAbility';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonHeldItem } from '../models/PokemonHeldItem';
import { PokemonMove } from '../models/PokemonMove';
import { PokemonSprites } from '../models/PokemonSprites';
import { PokemonStat } from '../models/PokemonStat';
import { PokemonType } from '../models/PokemonType';
import { VersionGameIndex } from '../models/VersionGameIndex';
export declare class Pokemon {
    'id': number;
    'name': string;
    'baseExperience': number;
    'height': number;
    'isDefault': boolean;
    'order': number;
    'weight': number;
    'abilities': Array<PokemonAbility>;
    'forms': Array<PokemonForm>;
    'gameIndices': Array<VersionGameIndex>;
    'heldItems': Array<PokemonHeldItem>;
    'locationAreaEncounters': string;
    'moves': Array<PokemonMove>;
    'sprites': PokemonSprites;
    'species': NamedAPIResource;
    'stats': Array<PokemonStat>;
    'types': Array<PokemonType>;
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
