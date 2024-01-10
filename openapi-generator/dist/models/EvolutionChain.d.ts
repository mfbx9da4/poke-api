import { EvolutionChainBabyTriggerItem } from '../models/EvolutionChainBabyTriggerItem';
import { EvolutionChainChain } from '../models/EvolutionChainChain';
export declare class EvolutionChain {
    'id': number;
    'babyTriggerItem'?: EvolutionChainBabyTriggerItem | null;
    'chain': EvolutionChainChain;
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
