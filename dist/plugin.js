var capacitorUdid = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
