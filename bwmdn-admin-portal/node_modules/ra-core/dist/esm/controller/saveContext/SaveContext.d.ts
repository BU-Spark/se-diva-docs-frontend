/// <reference types="react" />
import { RaRecord, onError, OnSuccess, TransformData, MutationMode } from '../../types';
import { Middleware } from './useMutationMiddlewares';
export interface SaveContextValue<RecordType extends RaRecord = any, MutateFunc extends (...args: any[]) => any = (...args: any[]) => any> {
    save?: SaveHandler<RecordType>;
    saving?: boolean;
    mutationMode?: MutationMode;
    registerMutationMiddleware?: (callback: Middleware<MutateFunc>) => void;
    unregisterMutationMiddleware?: (callback: Middleware<MutateFunc>) => void;
}
export declare type SaveHandler<RecordType> = (record: Partial<RecordType>, callbacks?: {
    onSuccess?: OnSuccess;
    onError?: onError;
    transform?: TransformData;
}) => Promise<void | RecordType> | Record<string, string>;
export declare const SaveContext: import("react").Context<SaveContextValue<any, (...args: any[]) => any>>;
//# sourceMappingURL=SaveContext.d.ts.map