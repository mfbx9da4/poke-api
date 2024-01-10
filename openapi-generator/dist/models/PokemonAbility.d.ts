import { Ability } from '../models/Ability';
export declare class PokemonAbility {
    'isHidden'?: boolean;
    'slot'?: number;
    'ability'?: Ability;
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
