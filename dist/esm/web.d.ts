import { WebPlugin } from '@capacitor/core';
import type { UdidPlugin } from './definitions';
export declare class UdidWeb extends WebPlugin implements UdidPlugin {
    getUdid(): Promise<{
        value: string;
    }>;
}
