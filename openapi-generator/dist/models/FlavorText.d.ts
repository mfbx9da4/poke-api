import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class FlavorText {
    'flavorText'?: string;
    'language'?: NamedAPIResource;
    'version'?: NamedAPIResource;
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
