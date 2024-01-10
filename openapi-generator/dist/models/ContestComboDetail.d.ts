import { Move } from '../models/Move';
export declare class ContestComboDetail {
    'useBefore'?: Array<Move>;
    'useAfter'?: Array<Move>;
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
