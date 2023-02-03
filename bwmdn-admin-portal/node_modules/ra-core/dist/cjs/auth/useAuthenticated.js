"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthenticated = void 0;
var react_1 = require("react");
var useCheckAuth_1 = require("./useCheckAuth");
/**
 * Restrict access to authenticated users.
 * Redirect anonymous users to the login page.
 *
 * Use it in your custom page components to require
 * authentication.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { Admin, CustomRoutes, useAuthenticated } from 'react-admin';
 *     const FooPage = () => {
 *         useAuthenticated();
 *         return <Foo />;
 *     }
 *     const customRoutes = [
 *         <Route path="/foo" element={<FooPage />} />
 *     ];
 *     const App = () => (
 *         <Admin>
 *             <CustomRoutes>{customRoutes}</CustomRoutes>
 *         </Admin>
 *     );
 */
var useAuthenticated = function (options) {
    if (options === void 0) { options = {}; }
    var _a = options.enabled, enabled = _a === void 0 ? true : _a, _b = options.params, params = _b === void 0 ? emptyParams : _b;
    var checkAuth = (0, useCheckAuth_1.useCheckAuth)();
    (0, react_1.useEffect)(function () {
        if (enabled) {
            checkAuth(params).catch(function () { });
        }
    }, [checkAuth, enabled, params]);
};
exports.useAuthenticated = useAuthenticated;
var emptyParams = {};
//# sourceMappingURL=useAuthenticated.js.map