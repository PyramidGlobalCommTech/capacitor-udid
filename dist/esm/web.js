import { WebPlugin } from '@capacitor/core';
export class UdidWeb extends WebPlugin {
    async getUdid() {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map