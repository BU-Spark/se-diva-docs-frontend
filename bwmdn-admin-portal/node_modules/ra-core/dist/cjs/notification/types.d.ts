export declare type NotificationType = 'success' | 'info' | 'warning' | 'error';
export interface NotificationOptions {
    autoHideDuration?: number;
    messageArgs?: any;
    multiLine?: boolean;
    undoable?: boolean;
}
export interface NotificationPayload {
    readonly message: string;
    readonly type: NotificationType;
    readonly notificationOptions?: NotificationOptions;
}
//# sourceMappingURL=types.d.ts.map