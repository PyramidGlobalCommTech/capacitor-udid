'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Udid = core.registerPlugin('Udid', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.UdidWeb()),
});

class UdidWeb extends core.WebPlugin {
    async getUdid() {
        throw this.unimplemented('Not implemented on web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UdidWeb: UdidWeb
});

exports.Udid = Udid;
//# sourceMappingURL=plugin.cjs.js.map
