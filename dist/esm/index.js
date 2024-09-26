import { registerPlugin } from '@capacitor/core';
const Udid = registerPlugin('Udid', {
    web: () => import('./web').then(m => new m.UdidWeb()),
});
export * from './definitions';
export { Udid };
//# sourceMappingURL=index.js.map