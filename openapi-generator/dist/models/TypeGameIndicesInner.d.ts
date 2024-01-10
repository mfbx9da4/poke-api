import { TypeGameIndicesInnerGeneration } from '../models/TypeGameIndicesInnerGeneration';
export declare class TypeGameIndicesInner {
    'gameIndex'?: number;
    'generation'?: TypeGameIndicesInnerGeneration;
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
