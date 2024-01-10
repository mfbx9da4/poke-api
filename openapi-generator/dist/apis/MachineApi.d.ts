import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Machine } from '../models/Machine';
import { MachineList200Response } from '../models/MachineList200Response';
export declare class MachineApiRequestFactory extends BaseAPIRequestFactory {
    machineList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    machineRead(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class MachineApiResponseProcessor {
    machineListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MachineList200Response>>;
    machineReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Machine>>;
}
