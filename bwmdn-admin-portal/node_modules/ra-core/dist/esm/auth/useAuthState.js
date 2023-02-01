import { useEffect } from 'react';
import { useCheckAuth } from './useCheckAuth';
import { useSafeSetState } from '../util/hooks';
var emptyParams = {};
/**
 * Hook for getting the authentication status
 *
 * Calls the authProvider.checkAuth() method asynchronously.
 *
 * The return value updates according to the authProvider request state:
 *
 * - isLoading: true just after mount, while the authProvider is being called. false once the authProvider has answered.
 * - authenticated: true while loading. then true or false depending on the authProvider response.
 *
 * To avoid rendering a component and force waiting for the authProvider response, use the useAuthState() hook
 * instead of the useAuthenticated() hook.
 *
 * You can render different content depending on the authenticated status.
 *
 * @see useAuthenticated()
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @param {Boolean} logoutOnFailure: Optional. Whether the user should be logged out if the authProvider fails to authenticate them. False by default.
 *
 * @returns The current auth check state. Destructure as { authenticated, error, isLoading }.
 *
 * @example
 * import { useAuthState, Loading } from 'react-admin';
 *
 * const MyPage = () => {
 *     const { isLoading, authenticated } = useAuthState();
 *     if (isLoading) {
 *         return <Loading />;
 *     }
 *     if (authenticated) {
 *        return <AuthenticatedContent />;
 *     }
 *     return <AnonymousContent />;
 * };
 */
var useAuthState = function (params, logoutOnFailure) {
    if (params === void 0) { params = emptyParams; }
    if (logoutOnFailure === void 0) { logoutOnFailure = false; }
    var _a = useSafeSetState({
        isLoading: true,
        authenticated: true, // optimistic
    }), state = _a[0], setState = _a[1];
    var checkAuth = useCheckAuth();
    useEffect(function () {
        checkAuth(params, logoutOnFailure)
            .then(function () { return setState({ isLoading: false, authenticated: true }); })
            .catch(function () { return setState({ isLoading: false, authenticated: false }); });
    }, [checkAuth, params, logoutOnFailure, setState]);
    return state;
};
export default useAuthState;
//# sourceMappingURL=useAuthState.js.map