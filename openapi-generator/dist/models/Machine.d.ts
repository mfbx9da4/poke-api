import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class Machine {
    'id'?: number;
    'item'?: NamedAPIResource;
    'move'?: NamedAPIResource;
    'versionGroup'?: NamedAPIResource;
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
