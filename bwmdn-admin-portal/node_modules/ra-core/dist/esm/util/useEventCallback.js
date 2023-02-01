var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { useCallback } from 'react';
// allow the hook to work in SSR
var useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/**
 * Alternative to useCallback that doesn't update the callback when dependencies change
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export var useEventCallback = function (fn, dependencies) {
    var ref = React.useRef(function () {
        throw new Error('Cannot call an event handler while rendering.');
    });
    useLayoutEffect(function () {
        ref.current = fn;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArray([fn], dependencies, true));
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ref.current.apply(ref, args);
    }, []);
};
//# sourceMappingURL=useEventCallback.js.map