import { AbilityNamesInnerLanguage } from '../models/AbilityNamesInnerLanguage';
export declare class AbilityNamesInner {
    'name'?: string;
    'language'?: AbilityNamesInnerLanguage;
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
