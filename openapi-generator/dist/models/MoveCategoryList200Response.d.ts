import { MoveCategory } from '../models/MoveCategory';
export declare class MoveCategoryList200Response {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<MoveCategory>;
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
