/*!
 * State-based routing for AngularJS 1.x
 * @version v1.0.0-beta.4
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("angular"));
    else if(typeof define === 'function' && define.amd)
        define("angular-ui-router", ["angular"], factory);
    else if(typeof exports === 'object')
        exports["angular-ui-router"] = factory(require("angular"));
    else
        root["angular-ui-router"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_56__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId])
            /******/ 			return installedModules[moduleId].exports;
            /******/
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			exports: {},
                /******/ 			id: moduleId,
                /******/ 			loaded: false
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.loaded = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(0);
        /******/ })
    /************************************************************************/
    /******/ ({

        /***/ 0:
        /***/ function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Provides implementation of the UI-Router 0.2.x state events.
             *
             * The 0.2.x state events are deprecated.  We recommend moving to Transition Hooks instead, as they
             * provide much more flexibility, support async, and provide the context (the Transition, etc) necessary
             * to implement meaningful application behaviors.
             *
             * To enable these state events, include the `stateEvents.js` file in your project, e.g.,
             * ```
             * <script src="stateEvents.js"></script>
             * ```
             * and also make sure you depend on the `ui.router.state.events` angular module, e.g.,
             * ```
             * angular.module("myApplication", ['ui.router', 'ui.router.state.events']
             * ```
             *
             * @module ng1_state_events
             */ /** */
            var angular_1 = __webpack_require__(55);
            (function () {
                var isFunction = angular_1.ng.isFunction, isString = angular_1.ng.isString;
                function applyPairs(memo, keyValTuple) {
                    var key, value;
                    if (Array.isArray(keyValTuple))
                        key = keyValTuple[0], value = keyValTuple[1];
                    if (!isString(key))
                        throw new Error("invalid parameters to applyPairs");
                    memo[key] = value;
                    return memo;
                }
                function stateChangeStartHandler($transition$) {
                    if (!$transition$.options().notify || !$transition$.valid() || $transition$.ignored())
                        return;
                    var $injector = $transition$.injector();
                    var $stateEvents = $injector.get('$stateEvents');
                    var $rootScope = $injector.get('$rootScope');
                    var $state = $injector.get('$state');
                    var $urlRouter = $injector.get('$urlRouter');
                    var enabledEvents = $stateEvents.provider.enabled();
                    var toParams = $transition$.params("to");
                    var fromParams = $transition$.params("from");
                    if (enabledEvents.$stateChangeSuccess) {
                        var startEvent = $rootScope.$broadcast('$stateChangeStart', $transition$.to(), toParams, $transition$.from(), fromParams, $transition$.options(), $transition$);
                        if (startEvent.defaultPrevented) {
                            if (enabledEvents.$stateChangeCancel) {
                                $rootScope.$broadcast('$stateChangeCancel', $transition$.to(), toParams, $transition$.from(), fromParams, $transition$.options(), $transition$);
                            }
                            //Don't update and resync url if there's been a new transition started. see issue #2238, #600
                            if ($state.transition == null)
                                $urlRouter.update();
                            return false;
                        }
                        // right after global state is updated
                        var successOpts = { priority: 9999 };
                        $transition$.onSuccess({}, function () {
                            $rootScope.$broadcast('$stateChangeSuccess', $transition$.to(), toParams, $transition$.from(), fromParams, $transition$.options(), $transition$);
                        }, successOpts);
                    }
                    if (enabledEvents.$stateChangeError) {
                        $transition$.promise["catch"](function (error) {
                            if (error && (error.type === 2 /* RejectType.SUPERSEDED */ || error.type === 3 /* RejectType.ABORTED */))
                                return;
                            var evt = $rootScope.$broadcast('$stateChangeError', $transition$.to(), toParams, $transition$.from(), fromParams, error, $transition$.options(), $transition$);
                            if (!evt.defaultPrevented) {
                                $urlRouter.update();
                            }
                        });
                    }
                }
                stateNotFoundHandler.$inject = ['$to$', '$from$', '$state', '$rootScope', '$urlRouter'];
                function stateNotFoundHandler($to$, $from$, injector) {
                    var $state = injector.get('$state');
                    var $rootScope = injector.get('$rootScope');
                    var $urlRouter = injector.get('$urlRouter');
                    var redirect = { to: $to$.identifier(), toParams: $to$.params(), options: $to$.options() };
                    var e = $rootScope.$broadcast('$stateNotFound', redirect, $from$.state(), $from$.params());
                    if (e.defaultPrevented || e.retry)
                        $urlRouter.update();
                    function redirectFn() {
                        return $state.target(redirect.to, redirect.toParams, redirect.options);
                    }
                    if (e.defaultPrevented) {
                        return false;
                    }
                    else if (e.retry || !!$state.get(redirect.to)) {
                        return e.retry && isFunction(e.retry.then) ? e.retry.then(redirectFn) : redirectFn();
                    }
                }
                $StateEventsProvider.$inject = ['$stateProvider'];
                function $StateEventsProvider($stateProvider) {
                    $StateEventsProvider.prototype.instance = this;
                    var runtime = false;
                    var allEvents = ['$stateChangeStart', '$stateNotFound', '$stateChangeSuccess', '$stateChangeError'];
                    var enabledStateEvents = allEvents.map(function (e) { return [e, true]; }).reduce(applyPairs, {});
                    function assertNotRuntime() {
                        if (runtime)
                            throw new Error("Cannot enable events at runtime (use $stateEventsProvider");
                    }
                    /**
                     * Enables the deprecated UI-Router 0.2.x State Events
                     * [ '$stateChangeStart', '$stateNotFound', '$stateChangeSuccess', '$stateChangeError' ]
                     */
                    this.enable = function () {
                        var events = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            events[_i - 0] = arguments[_i];
                        }
                        assertNotRuntime();
                        if (!events || !events.length)
                            events = allEvents;
                        events.forEach(function (event) { return enabledStateEvents[event] = true; });
                    };
                    /**
                     * Disables the deprecated UI-Router 0.2.x State Events
                     * [ '$stateChangeStart', '$stateNotFound', '$stateChangeSuccess', '$stateChangeError' ]
                     */
                    this.disable = function () {
                        var events = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            events[_i - 0] = arguments[_i];
                        }
                        assertNotRuntime();
                        if (!events || !events.length)
                            events = allEvents;
                        events.forEach(function (event) { return delete enabledStateEvents[event]; });
                    };
                    this.enabled = function () { return enabledStateEvents; };
                    this.$get = $get;
                    $get.$inject = ['$transitions'];
                    function $get($transitions) {
                        runtime = true;
                        if (enabledStateEvents["$stateNotFound"])
                            $stateProvider.onInvalid(stateNotFoundHandler);
                        if (enabledStateEvents.$stateChangeStart)
                            $transitions.onBefore({}, stateChangeStartHandler, { priority: 1000 });
                        return {
                            provider: $StateEventsProvider.prototype.instance
                        };
                    }
                }
                angular_1.ng.module('ui.router.state.events', ['ui.router.state'])
                    .provider("$stateEvents", $StateEventsProvider)
                    .run(['$stateEvents', function ($stateEvents) {
                    }]);
            })();


            /***/ },

        /***/ 55:
        /***/ function(module, exports, __webpack_require__) {

            "use strict";
            var ng_from_import = __webpack_require__(56);
            var ng_from_global = angular;
            exports.ng = (ng_from_import && ng_from_import.module) ? ng_from_import : ng_from_global;


            /***/ },

        /***/ 56:
        /***/ function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

            /***/ }

        /******/ })
});
;
//# sourceMappingURL=stateEvents.js.map