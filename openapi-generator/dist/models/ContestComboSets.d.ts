import { ContestComboDetail } from '../models/ContestComboDetail';
export declare class ContestComboSets {
    'normal'?: ContestComboDetail;
    '_super'?: ContestComboDetail;
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
