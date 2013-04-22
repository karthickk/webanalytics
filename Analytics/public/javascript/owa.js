/* OWA owa.tracker package file created Fri, 11 May 12 01:56:46 -0400 */
/* Start of json2 */
if (!this.JSON) {
    this.JSON = {};
}(function () {
    "use strict";

    function f(n) {
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case 'string':
            return quote(value);
        case 'number':
            return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
            return String(value);
        case 'object':
            if (!value) {
                return 'null';
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        };
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function' ? walk({
                    '': j
                }, '') : j;
            }
            throw new SyntaxError('JSON.parse');
        };
    }
}());

/* End of json2 */

/* Start of lazyload */

LazyLoad = function () {
    var f = document,
        g, b = {},
        e = {
            css: [],
            js: []
        },
        a;

    function j(l, k) {
        var m = f.createElement(l),
            d;
        for (d in k) {
            if (k.hasOwnProperty(d)) {
                m.setAttribute(d, k[d])
            }
        }
        return m
    }
    function h(d) {
        var l = b[d];
        if (!l) {
            return
        }
        var m = l.callback,
            k = l.urls;
        k.shift();
        if (!k.length) {
            if (m) {
                m.call(l.scope || window, l.obj)
            }
            b[d] = null;
            if (e[d].length) {
                i(d)
            }
        }
    }
    function c() {
        if (a) {
            return
        }
        var k = navigator.userAgent,
            l = parseFloat,
            d;
        a = {
            gecko: 0,
            ie: 0,
            opera: 0,
            webkit: 0
        };
        d = k.match(/AppleWebKit\/(\S*)/);
        if (d && d[1]) {
            a.webkit = l(d[1])
        } else {
            d = k.match(/MSIE\s([^;]*)/);
            if (d && d[1]) {
                a.ie = l(d[1])
            } else {
                if ((/Gecko\/(\S*)/).test(k)) {
                    a.gecko = 1;
                    d = k.match(/rv:([^\s\)]*)/);
                    if (d && d[1]) {
                        a.gecko = l(d[1])
                    }
                } else {
                    if (d = k.match(/Opera\/(\S*)/)) {
                        a.opera = l(d[1])
                    }
                }
            }
        }
    }
    function i(r, q, s, m, t) {
        var n, o, l, k, d;
        c();
        if (q) {
            q = q.constructor === Array ? q : [q];
            if (r === "css" || a.gecko || a.opera) {
                e[r].push({
                    urls: [].concat(q),
                    callback: s,
                    obj: m,
                    scope: t
                })
            } else {
                for (n = 0, o = q.length; n < o; ++n) {
                    e[r].push({
                        urls: [q[n]],
                        callback: n === o - 1 ? s : null,
                        obj: m,
                        scope: t
                    })
                }
            }
        }
        if (b[r] || !(k = b[r] = e[r].shift())) {
            return
        }
        g = g || f.getElementsByTagName("head")[0];
        q = k.urls;
        for (n = 0, o = q.length; n < o; ++n) {
            d = q[n];
            if (r === "css") {
                l = j("link", {
                    href: d,
                    rel: "stylesheet",
                    type: "text/css"
                })
            } else {
                l = j("script", {
                    src: d
                })
            }
            if (a.ie) {
                l.onreadystatechange = function () {
                    var p = this.readyState;
                    if (p === "loaded" || p === "complete") {
                        this.onreadystatechange = null;
                        h(r)
                    }
                }
            } else {
                if (r === "css" && (a.gecko || a.webkit)) {
                    setTimeout(function () {
                        h(r)
                    }, 50 * o)
                } else {
                    l.onload = l.onerror = function () {
                        h(r)
                    }
                }
            }
            g.appendChild(l)
        }
    }
    return {
        css: function (l, m, k, d) {
            i("css", l, m, k, d)
        },
        js: function (l, m, k, d) {
            i("js", l, m, k, d)
        }
    }
}();

/* End of lazyload */

/* Start of owa */


var OWA = {
    items: {},
    loadedJsLibs: {},
    overlay: '',
    config: {
        ns: 'owa_',
        baseUrl: '',
        hashCookiesToDomain: true
    },
    state: {},
    overlayActive: false,
    setSetting: function (name, value) {
        return this.setOption(name, value);
    },
    getSetting: function (name) {
        return this.getOption(name);
    },
    setOption: function (name, value) {
        this.config[name] = value;
    },
    getOption: function (name) {
        return this.config[name];
    },
    l: function (string) {
        return string;
    },
    requireJs: function (name, url, callback) {
        if (!this.isJsLoaded(name)) {
            OWA.util.loadScript(url, callback);
        }
        this.loadedJsLibs[name] = url;
    },
    isJsLoaded: function (name) {
        if (this.loadedJsLibs.hasOwnProperty(name)) {
            return true;
        }
    },
    initializeStateManager: function () {
        if (!this.state.hasOwnProperty('init')) {
            OWA.debug('initializing state manager...');
            this.state = new OWA.stateManager();
        }
    },
    registerStateStore: function (name, expiration, length, format) {
        this.initializeStateManager();
        return this.state.registerStore(name, expiration, length, format);
    },
    checkForState: function (store_name) {
        this.initializeStateManager();
        return this.state.isPresent(store_name);
    },
    setState: function (store_name, key, value, is_perminant, format, expiration_days) {
        this.initializeStateManager();
        return this.state.set(store_name, key, value, is_perminant, format, expiration_days);
    },
    replaceState: function (store_name, value, is_perminant, format, expiration_days) {
        this.initializeStateManager();
        return this.state.replaceStore(store_name, value, is_perminant, format, expiration_days);
    },
    getStateFromCookie: function (store_name) {
        this.initializeStateManager();
        return this.state.getStateFromCookie(store_name);
    },
    getState: function (store_name, key) {
        this.initializeStateManager();
        return this.state.get(store_name, key);
    },
    clearState: function (store_name, key) {
        this.initializeStateManager();
        return this.state.clear(store_name, key);
    },
    getStateStoreFormat: function (store_name) {
        this.initializeStateManager();
        return this.state.getStoreFormat(store_name);
    },
    setStateStoreFormat: function (store_name, format) {
        this.initializeStateManager();
        return this.state.setStoreFormat(store_name, format);
    },
    debug: function () {
        var debugging = OWA.getSetting('debug') || false;
        if (debugging) {
            if (window.console) {
                if (console.log.apply) {
                    if (window.console.firebug) {
                        console.log.apply(this, arguments);
                    } else {
                        console.log.apply(console, arguments);
                    }
                }
            }
        }
    },
    setApiEndpoint: function (endpoint) {
        this.config['api_endpoint'] = endpoint;
    },
    getApiEndpoint: function () {
        return this.config['api_endpoint'] || this.getSetting('baseUrl') + 'api.php';
    },
    loadHeatmap: function (p) {
        var that = this;
        OWA.util.loadScript(OWA.getSetting('baseUrl') + '/modules/base/js/includes/jquery/jquery-1.6.4.min.js', function () {});
        OWA.util.loadCss(OWA.getSetting('baseUrl') + '/modules/base/css/owa.overlay.css', function () {});
        OWA.util.loadScript(OWA.getSetting('baseUrl') + '/modules/base/js/owa.heatmap.js', function () {
            that.overlay = new OWA.heatmap();
            that.overlay.options.liveMode = true;
            that.overlay.generate();
        });
    },
    loadPlayer: function () {
        var that = this;
        OWA.debug("Loading Domstream Player");
        OWA.util.loadScript(OWA.getSetting('baseUrl') + '/modules/base/js/includes/jquery/jquery-1.6.4.min.js', function () {});
        OWA.util.loadCss(OWA.getSetting('baseUrl') + '/modules/base/css/owa.overlay.css', function () {});
        OWA.util.loadScript(OWA.getSetting('baseUrl') + '/modules/base/js/owa.player.js', function () {
            that.overlay = new OWA.player();
        });
    },
    startOverlaySession: function (p) {
        OWA.overlayActive = true;
        if (p.hasOwnProperty('api_url')) {
            OWA.setApiEndpoint(p.api_url);
        }
        var params = p;
        if (params.action === 'loadHeatmap') {
            this.loadHeatmap(p);
        } else if (params.action === 'loadPlayer') {
            this.loadPlayer(p);
        }
    },
    endOverlaySession: function () {
        OWA.util.eraseCookie(OWA.getSetting('ns') + 'overlay', document.domain);
        OWA.overlayActive = false;
    }
}
OWA.stateManager = function () {
    this.cookies = OWA.util.readAllCookies();
    this.init = true;
};
OWA.stateManager.prototype = {
    init: false,
    cookies: '',
    stores: {},
    storeFormats: {},
    storeMeta: {},
    registerStore: function (name, expiration, length, format) {
        this.storeMeta[name] = {
            'expiration': expiration,
            'length': length,
            'format': format
        };
    },
    getExpirationDays: function (store_name) {
        if (this.storeMeta.hasOwnProperty(store_name)) {
            return this.storeMeta[store_name].expiration;
        }
    },
    getFormat: function (store_name) {
        if (this.storeMeta.hasOwnProperty(store_name)) {
            return this.storeMeta[store_name].format;
        }
    },
    isPresent: function (store_name) {
        if (this.stores.hasOwnProperty(store_name)) {
            return true;
        }
    },
    set: function (store_name, key, value, is_perminant, format, expiration_days) {
        if (!this.isPresent(store_name)) {
            this.load(store_name);
        }
        if (!this.isPresent(store_name)) {
            OWA.debug('Creating state store (%s)', store_name);
            this.stores[store_name] = {};
            if (OWA.getSetting('hashCookiesToDomain')) {
                this.stores[store_name].cdh = OWA.util.getCookieDomainHash(OWA.getSetting('cookie_domain'));
            }
        }
        if (key) {
            this.stores[store_name][key] = value;
        } else {
            this.stores[store_name] = value;
        }
        format = this.getFormat(store_name);
        if (!format) {
            if (this.storeFormats.hasOwnProperty(store_name)) {
                format = this.storeFormats[store_name];
            }
        }
        var state_value = '';
        if (format === 'json') {
            state_value = JSON.stringify(this.stores[store_name]);
        } else {
            state_value = OWA.util.assocStringFromJson(this.stores[store_name]);
        }
        expiration_days = this.getExpirationDays(store_name);
        if (!expiration_days) {
            if (is_perminant) {
                expiration_days = 3600;
            }
        }
        OWA.debug('Populating state store (%s) with value: %s', store_name, state_value);
        var domain = OWA.getSetting('cookie_domain') || document.domain;
        OWA.util.setCookie(OWA.getSetting('ns') + store_name, state_value, expiration_days, '/', domain);
    },
    replaceStore: function (store_name, value, is_perminant, format, expiration_days) {
        OWA.debug('replace state format: %s, value: %s', format, JSON.stringify(value));
        if (store_name) {
            if (value) {
                format = this.getFormat(store_name);
                this.stores[store_name] = value;
                this.storeFormats[store_name] = format;
                if (format === 'json') {
                    cookie_value = JSON.stringify(value);
                } else {
                    cookie_value = OWA.util.assocStringFromJson(value);
                }
            }
            var domain = OWA.getSetting('cookie_domain') || document.domain;
            expiration_days = this.getExpirationDays(store_name);
            OWA.debug('About to replace state store (%s) with: %s', store_name, cookie_value);
            OWA.util.setCookie(OWA.getSetting('ns') + store_name, cookie_value, expiration_days, '/', domain);
        }
    },
    getStateFromCookie: function (store_name) {
        var store = unescape(OWA.util.readCookie(OWA.getSetting('ns') + store_name));
        if (store) {
            return store;
        }
    },
    get: function (store_name, key) {
        if (!this.isPresent(store_name)) {
            this.load(store_name);
        }
        if (this.isPresent(store_name)) {
            if (key) {
                if (this.stores[store_name].hasOwnProperty(key)) {
                    return this.stores[store_name][key];
                }
            } else {
                return this.stores[store_name];
            }
        } else {
            OWA.debug('No state store (%s) was found', store_name);
            return '';
        }
    },
    getCookieValues: function (cookie_name) {
        if (this.cookies.hasOwnProperty(cookie_name)) {
            return this.cookies[cookie_name];
        }
    },
    load: function (store_name) {
        var state = '';
        var cookie_values = this.getCookieValues(OWA.getSetting('ns') + store_name);
        if (cookie_values) {
            for (var i = 0; i < cookie_values.length; i++) {
                var raw_cookie_value = unescape(cookie_values[i]);
                var cookie_value = OWA.util.decodeCookieValue(raw_cookie_value);
                var format = OWA.util.getCookieValueFormat(raw_cookie_value);
                if (OWA.getSetting('hashCookiesToDomain')) {
                    var domain = OWA.getSetting('cookie_domain');
                    var dhash = OWA.util.getCookieDomainHash(domain);
                    if (cookie_value.hasOwnProperty('cdh')) {
                        OWA.debug('Cookie value cdh: %s, domain hash: %s', cookie_value.cdh, dhash);
                        if (cookie_value.cdh == dhash) {
                            OWA.debug('Cookie: %s, index: %s domain hash matches current cookie domain. Loading...', store_name, i);
                            state = cookie_value;
                            break;
                        } else {
                            OWA.debug('Cookie: %s, index: %s domain hash does not match current cookie domain. Not loading.', store_name, i);
                        }
                    } else {
                        OWA.debug('Cookie: %s, index: %s has no domain hash. Not going to Load it.', store_name, i);
                    }
                } else {
                    var lastIndex = cookie_values.length - 1;
                    if (i === lastIndex) {
                        state = cookie_value;
                    }
                }
            }
        }
        if (state) {
            this.stores[store_name] = state;
            this.storeFormats[store_name] = format;
            OWA.debug('Loaded state store: %s with: %s', store_name, JSON.stringify(state));
        } else {
            OWA.debug('No state for store: %s was found. Nothing to Load.', store_name);
        }
    },
    clear: function (store_name, key) {
        if (!key) {
            delete this.stores[store_name];
            OWA.util.eraseCookie(OWA.getSetting('ns') + store_name);
            this.cookies = OWA.util.readAllCookies();
        } else {
            var state = this.get(store_name);
            if (state && state.hasOwnProperty(key)) {
                delete state['key'];
                this.replaceStore(store_name, state, true, this.getFormat(store_name), this.getExpirationDays(store_name));
            }
        }
    },
    getStoreFormat: function (store_name) {
        return this.getFormat(store_name);
    },
    setStoreFormat: function (store_name, format) {
        this.storeFormats[store_name] = format;
    }
};
OWA.uri = function (str) {
    this.components = {};
    this.dirty = false;
    this.options = {
        strictMode: false,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    if (str) {
        this.components = this.parseUri(str);
    }
};
OWA.uri.prototype = {
    parseUri: function (str) {
        var o = this.options;
        var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str);
        var uri = {};
        var i = 14;
        while (i--) uri[o.key[i]] = m[i] || "";
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) uri[o.q.name][$1] = $2;
        });
        return uri;
    },
    getHost: function () {
        if (this.components.hasOwnProperty('host')) {
            return this.components.host;
        }
    },
    getQueryParam: function (name) {
        if (this.components.hasOwnProperty('queryKey') && this.components.queryKey.hasOwnProperty(name)) {
            return OWA.util.urldecode(this.components.queryKey[name]);
        }
    },
    isQueryParam: function (name) {
        if (this.components.hasOwnProperty('queryKey') && this.components.queryKey.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    },
    getComponent: function (name) {
        if (this.components.hasOwnProperty(name)) {
            return this.components[name];
        }
    },
    getProtocol: function () {
        return this.getComponent('protocol');
    },
    getAnchor: function () {
        return this.getComponent('anchor');
    },
    getQuery: function () {
        return this.getComponent('query');
    },
    getFile: function () {
        return this.getComponent('file');
    },
    getRelative: function () {
        return this.getComponent('relative');
    },
    getDirectory: function () {
        return this.getComponent('directory');
    },
    getPath: function () {
        return this.getComponent('path');
    },
    getPort: function () {
        return this.getComponent('port');
    },
    getPassword: function () {
        return this.getComponent('password');
    },
    getUser: function () {
        return this.getComponent('user');
    },
    getUserInfo: function () {
        return this.getComponent('userInfo');
    },
    getQueryParams: function () {
        return this.getComponent('queryKey');
    },
    getSource: function () {
        return this.getComponent('source');
    },
    setQueryParam: function (name, value) {
        if (!this.components.hasOwnProperty('queryKey')) {
            this.components.queryKey = {};
        }
        this.components.queryKey[name] = OWA.util.urlEncode(value);
        this.resetQuery();
    },
    removeQueryParam: function (name) {
        if (this.components.hasOwnProperty('queryKey') && this.components.queryKey.hasOwnProperty(name)) {
            delete this.components.queryKey[name];
            this.resetQuery();
        }
    },
    resetSource: function () {
        this.components.source = this.assembleUrl();
    },
    resetQuery: function () {
        var qp = this.getQueryParams();
        if (qp) {
            var query = '';
            var count = OWA.util.countObjectProperties(qp);
            var i = 1;
            for (var name in qp) {
                query += name + '=' + qp[name];
                if (i < count) {
                    query += '&';
                }
            }
            this.components.query = query;
            this.resetSource();
        }
    },
    isDirty: function () {
        return this.dirty;
    },
    setPath: function (path) {},
    assembleUrl: function () {
        var url = '';
        url += this.getProtocol();
        url += '://';
        if (this.getUser()) {
            url += this.getUser();
        }
        if (this.getUser() && this.getPassword()) {
            url += ':' + this.password();
        }
        url += this.getHost();
        if (this.getPort()) {
            url += ':' + this.getPort();
        }
        url += this.getDirectory();
        url += this.getFile();
        var query = this.getQuery();
        if (query) {
            url += '?' + query;
        }
        var anchor = this.getAnchor();
        if (anchor) {
            url += '#' + anchor;
        }
        url += this.getAnchor();
        return url;
    }
};
OWA.util = {
    ns: function (string) {
        return OWA.config.ns + string;
    },
    nsAll: function (obj) {
        var nsObj = new Object();
        for (param in obj) {
            if (obj.hasOwnProperty(param)) {
                nsObj[OWA.config.ns + param] = obj[param];
            }
        }
        return nsObj;
    },
    getScript: function (file, path) {
        jQuery.getScript(path + file);
        return;
    },
    makeUrl: function (template, uri, params) {
        var url = jQuery.sprintf(template, uri, jQuery.param(OWA.util.nsAll(params)));
        return url;
    },
    createCookie: function (name, value, days, domain) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    setCookie: function (name, value, days, path, domain, secure) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + escape(value) + ((days) ? "; expires=" + date.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
    },
    readAllCookies: function () {
        OWA.debug('Reading all cookies...');
        var jar = {};
        var ca = document.cookie.split(';');
        if (ca) {
            OWA.debug(document.cookie);
            for (var i = 0; i < ca.length; i++) {
                var cat = OWA.util.trim(ca[i]);
                var pos = OWA.util.strpos(cat, '=');
                var key = cat.substring(0, pos);
                var value = cat.substring(pos + 1, cat.length);
                if (!jar.hasOwnProperty(key)) {
                    jar[key] = [];
                }
                jar[key].push(value);
            }
            OWA.debug(JSON.stringify(jar));
            return jar;
        }
    },
    readCookie: function (name) {
        OWA.debug('Attempting to read cookie: %s', name);
        var jar = OWA.util.readAllCookies();
        if (jar) {
            if (jar.hasOwnProperty(name)) {
                return jar[name];
            } else {
                return '';
            }
        }
    },
    eraseCookie: function (name, domain) {
        OWA.debug(document.cookie);
        if (!domain) {
            domain = OWA.getSetting('cookie_domain') || document.domain;
        }
        OWA.debug("erasing cookie: " + name + " in domain: " + domain);
        this.setCookie(name, "", -1, "/", domain);
        var test = OWA.util.readCookie(name);
        if (test) {
            var period = domain.substr(0, 1);
            OWA.debug('period: ' + period);
            if (period === '.') {
                var domain2 = domain.substr(1);
                OWA.debug("erasing " + name + " in domain2: " + domain2);
                this.setCookie(name, "", -2, "/", domain2);
            } else {
                OWA.debug("erasing " + name + " in domain3: " + domain);
                this.setCookie(name, "", -2, "/", domain);
            }
        }
    },
    eraseMultipleCookies: function (names, domain) {
        for (var i = 0; i < names.length; i++) {
            this.eraseCookie(names[i], domain);
        }
    },
    loadScript: function (url, callback) {
        return LazyLoad.js(url, callback);
    },
    loadCss: function (url, callback) {
        return LazyLoad.css(url, callback);
    },
    parseCookieString: function parseQuery(v) {
        var queryAsAssoc = new Array();
        var queryString = unescape(v);
        var keyValues = queryString.split("|||");
        for (var i in keyValues) {
            if (keyValues.hasOwnProperty(i)) {
                var key = keyValues[i].split("=>");
                queryAsAssoc[key[0]] = key[1];
            }
        }
        return queryAsAssoc;
    },
    parseCookieStringToJson: function parseQuery(v) {
        var queryAsObj = new Object;
        var queryString = unescape(v);
        var keyValues = queryString.split("|||");
        for (var i in keyValues) {
            if (keyValues.hasOwnProperty(i)) {
                var key = keyValues[i].split("=>");
                queryAsObj[key[0]] = key[1];
            }
        }
        return queryAsObj;
    },
    nsParams: function (obj) {
        var new_obj = new Object;
        for (param in obj) {
            if (obj.hasOwnProperty(param)) {
                new_obj[OWA.getSetting('ns') + param] = obj[param];
            }
        }
        return new_obj;
    },
    urlEncode: function (str) {
        str = (str + '').toString();
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    },
    urldecode: function (str) {
        return decodeURIComponent(str.replace(/\+/g, '%20'));
    },
    parseUrlParams: function (url) {
        var _GET = {};
        for (var i, a, m, n, o, v, p = location.href.split(/[?&]/), l = p.length, k = 1; k < l; k++)
        if ((m = p[k].match(/(.*?)(\..*?|\[.*?\])?=([^#]*)/)) && m.length == 4) {
            n = decodeURI(m[1]).toLowerCase(), o = _GET, v = decodeURI(m[3]);
            if (m[2]) for (a = decodeURI(m[2]).replace(/\[\s*\]/g, "[-1]").split(/[\.\[\]]/), i = 0; i < a.length; i++)
            o = o[n] ? o[n] : o[n] = (parseInt(a[i]) == a[i]) ? [] : {}, n = a[i].replace(/^["\'](.*)["\']$/, "$1");
            n != '-1' ? o[n] = v : o[o.length] = v;
        }
        return _GET;
    },
    strpos: function (haystack, needle, offset) {
        var i = (haystack + '').indexOf(needle, (offset || 0));
        return i === -1 ? false : i;
    },
    strCountOccurances: function (haystack, needle) {
        return haystack.split(needle).length - 1;
    },
    implode: function (glue, pieces) {
        var i = '',
            retVal = '',
            tGlue = '';
        if (arguments.length === 1) {
            pieces = glue;
            glue = '';
        }
        if (typeof (pieces) === 'object') {
            if (pieces instanceof Array) {
                return pieces.join(glue);
            } else {
                for (i in pieces) {
                    retVal += tGlue + pieces[i];
                    tGlue = glue;
                }
                return retVal;
            }
        } else {
            return pieces;
        }
    },
    checkForState: function (store_name) {
        return OWA.checkForState(store_name);
    },
    setState: function (store_name, key, value, is_perminant, format, expiration_days) {
        return OWA.setState(store_name, key, value, is_perminant, format, expiration_days);
    },
    replaceState: function (store_name, value, is_perminant, format, expiration_days) {
        return OWA.replaceState(store_name, value, is_perminant, format, expiration_days);
    },
    getRawState: function (store_name) {
        return OWA.getStateFromCookie(store_name);
    },
    getState: function (store_name, key) {
        return OWA.getState(store_name, key);
    },
    clearState: function (store_name, key) {
        return OWA.clearState(store_name, key);
    },
    getCookieValueFormat: function (cstring) {
        var format = '';
        var check = cstring.substr(0, 1);
        if (check === '{') {
            format = 'json';
        } else {
            format = 'assoc';
        }
        return format;
    },
    decodeCookieValue: function (string) {
        var format = OWA.util.getCookieValueFormat(string);
        var value = '';
        if (format === 'json') {
            value = JSON.parse(string);
        } else {
            value = OWA.util.jsonFromAssocString(string);
        }
        OWA.debug('decodeCookieValue - string: %s, format: %s, value: %s', string, format, JSON.stringify(value));
        return value;
    },
    encodeJsonForCookie: function (json_obj, format) {
        format = format || 'assoc';
        if (format === 'json') {
            return JSON.stringify(json_obj);
        } else {
            return OWA.util.assocStringFromJson(json_obj);
        }
    },
    getCookieDomainHash: function (domain) {
        return OWA.util.dechex(OWA.util.crc32(domain));
    },
    loadStateJson: function (store_name) {
        var store = unescape(OWA.util.readCookie(OWA.getSetting('ns') + store_name));
        if (store) {
            state = JSON.parse(store);
        }
        OWA.state[store_name] = state;
        OWA.debug('state store %s: %s', store_name, JSON.stringify(state));
    },
    is_array: function (input) {
        return typeof (input) == 'object' && (input instanceof Array);
    },
    str_pad: function (input, pad_length, pad_string, pad_type) {
        var half = '',
            pad_to_go;
        var str_pad_repeater = function (s, len) {
                var collect = '',
                    i;
                while (collect.length < len) {
                    collect += s;
                }
                collect = collect.substr(0, len);
                return collect;
            };
        input += '';
        pad_string = pad_string !== undefined ? pad_string : ' ';
        if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') {
            pad_type = 'STR_PAD_RIGHT';
        }
        if ((pad_to_go = pad_length - input.length) > 0) {
            if (pad_type == 'STR_PAD_LEFT') {
                input = str_pad_repeater(pad_string, pad_to_go) + input;
            } else if (pad_type == 'STR_PAD_RIGHT') {
                input = input + str_pad_repeater(pad_string, pad_to_go);
            } else if (pad_type == 'STR_PAD_BOTH') {
                half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
                input = half + input + half;
                input = input.substr(0, pad_length);
            }
        }
        return input;
    },
    zeroFill: function (number, length) {
        return OWA.util.str_pad(number, length, '0', 'STR_PAD_LEFT');
    },
    is_object: function (mixed_var) {
        if (mixed_var instanceof Array) {
            return false;
        } else {
            return (mixed_var !== null) && (typeof (mixed_var) == 'object');
        }
    },
    countObjectProperties: function (obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    },
    jsonFromAssocString: function (str, inner, outer) {
        inner = inner || '=>';
        outer = outer || '|||';
        if (str) {
            if (!this.strpos(str, inner)) {
                return str;
            } else {
                var assoc = {};
                var outer_array = str.split(outer);
                for (var i = 0, n = outer_array.length; i < n; i++) {
                    var inside_array = outer_array[i].split(inner);
                    assoc[inside_array[0]] = inside_array[1];
                }
            }
            return assoc;
        }
    },
    assocStringFromJson: function (obj) {
        var string = '';
        var i = 0;
        var count = OWA.util.countObjectProperties(obj);
        for (var prop in obj) {
            i++;
            string += prop + '=>' + obj[prop];
            if (i < count) {
                string += '|||';
            }
        }
        return string;
    },
    getDomainFromUrl: function (url, strip_www) {
        var domain = url.split(/\/+/g)[1];
        if (strip_www === true) {
            return OWA.util.stripWwwFromDomain(domain);
        } else {
            return domain;
        }
    },
    stripWwwFromDomain: function (domain) {
        var fp = domain.split('.')[0];
        if (fp === 'www') {
            return domain.substring(4);
        } else {
            return domain;
        }
    },
    getCurrentUnixTimestamp: function () {
        return Math.round(new Date().getTime() / 1000);
    },
    generateHash: function (value) {
        return this.crc32(value);
    },
    generateRandomGuid: function () {
        var time = this.getCurrentUnixTimestamp() + '';
        var random = OWA.util.zeroFill(this.rand(0, 999999) + '', 6);
        var client = OWA.util.zeroFill(this.rand(0, 999) + '', 3);
        return time + random + client;
    },
    crc32: function (str) {
        str = this.utf8_encode(str);
        var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
        var crc = 0;
        var x = 0;
        var y = 0;
        crc = crc ^ (-1);
        for (var i = 0, iTop = str.length; i < iTop; i++) {
            y = (crc ^ str.charCodeAt(i)) & 0xFF;
            x = "0x" + table.substr(y * 9, 8);
            crc = (crc >>> 8) ^ x;
        }
        return crc ^ (-1);
    },
    utf8_encode: function (argString) {
        var string = (argString + '');
        var utftext = "";
        var start, end;
        var stringl = 0;
        start = end = 0;
        stringl = string.length;
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;
            if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
            } else {
                enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.substring(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }
        if (end > start) {
            utftext += string.substring(start, string.length);
        }
        return utftext;
    },
    utf8_decode: function (str_data) {
        var tmp_arr = [],
            i = 0,
            ac = 0,
            c1 = 0,
            c2 = 0,
            c3 = 0;
        str_data += '';
        while (i < str_data.length) {
            c1 = str_data.charCodeAt(i);
            if (c1 < 128) {
                tmp_arr[ac++] = String.fromCharCode(c1);
                i++;
            } else if ((c1 > 191) && (c1 < 224)) {
                c2 = str_data.charCodeAt(i + 1);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = str_data.charCodeAt(i + 1);
                c3 = str_data.charCodeAt(i + 2);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return tmp_arr.join('');
    },
    trim: function (str, charlist) {
        var whitespace, l = 0,
            i = 0;
        str += '';
        if (!charlist) {
            whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
        } else {
            charlist += '';
            whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
        }
        l = str.length;
        for (i = 0; i < l; i++) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(i);
                break;
            }
        }
        l = str.length;
        for (i = l - 1; i >= 0; i--) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(0, i + 1);
                break;
            }
        }
        return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
    },
    rand: function (min, max) {
        var argc = arguments.length;
        if (argc === 0) {
            min = 0;
            max = 2147483647;
        } else if (argc === 1) {
            throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    base64_encode: function (data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];
        if (!data) {
            return data;
        }
        data = this.utf8_encode(data + '');
        do {
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);
            bits = o1 << 16 | o2 << 8 | o3;
            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);
        enc = tmp_arr.join('');
        switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
            break;
        case 2:
            enc = enc.slice(0, -1) + '=';
            break;
        }
        return enc;
    },
    base64_decode: function (data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            dec = "",
            tmp_arr = [];
        if (!data) {
            return data;
        }
        data += '';
        do {
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;
            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);
        dec = tmp_arr.join('');
        dec = this.utf8_decode(dec);
        return dec;
    },
    sprintf: function () {
        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
        var a = arguments,
            i = 0,
            format = a[i++];
        var pad = function (str, len, chr, leftJustify) {
                if (!chr) {
                    chr = ' ';
                }
                var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                return leftJustify ? str + padding : padding + str;
            };
        var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;
                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            };
        var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                var number = value >>> 0;
                prefix = prefix && number && {
                    '2': '0b',
                    '8': '0',
                    '16': '0x'
                }[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            };
        var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision != null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };
        var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                var number;
                var prefix;
                var method;
                var textTransform;
                var value;
                if (substring == '%%') {
                    return '%';
                }
                var leftJustify = false,
                    positivePrefix = '',
                    zeroPad = false,
                    prefixBaseX = false,
                    customPadChar = ' ';
                var flagsl = flags.length;
                for (var j = 0; flags && j < flagsl; j++) {
                    switch (flags.charAt(j)) {
                    case ' ':
                        positivePrefix = ' ';
                        break;
                    case '+':
                        positivePrefix = '+';
                        break;
                    case '-':
                        leftJustify = true;
                        break;
                    case "'":
                        customPadChar = flags.charAt(j + 1);
                        break;
                    case '0':
                        zeroPad = true;
                        break;
                    case '#':
                        prefixBaseX = true;
                        break;
                    }
                }
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth == '*') {
                    minWidth = +a[i++];
                } else if (minWidth.charAt(0) == '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }
                if (!isFinite(minWidth)) {
                    throw new Error('sprintf: (minimum-)width must be finite');
                }
                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
                } else if (precision == '*') {
                    precision = +a[i++];
                } else if (precision.charAt(0) == '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }
                value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
                switch (type) {
                case 's':
                    return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                case 'c':
                    return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                case 'b':
                    return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'o':
                    return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'x':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'X':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                case 'u':
                    return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'i':
                case 'd':
                    number = parseInt(+value, 10);
                    prefix = number < 0 ? '-' : positivePrefix;
                    value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad);
                case 'e':
                case 'E':
                case 'f':
                case 'F':
                case 'g':
                case 'G':
                    number = +value;
                    prefix = number < 0 ? '-' : positivePrefix;
                    method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                default:
                    return substring;
                }
            };
        return format.replace(regex, doFormat);
    },
    clone: function (mixed) {
        var newObj = (mixed instanceof Array) ? [] : {};
        for (var i in mixed) {
            if (mixed[i] && (typeof mixed[i] == "object")) {
                newObj[i] = OWA.util.clone(mixed[i]);
            } else {
                newObj[i] = mixed[i];
            }
        }
        return newObj;
    },
    strtolower: function (str) {
        return (str + '').toLowerCase();
    },
    in_array: function (needle, haystack, argStrict) {
        var key = '',
            strict = !! argStrict;
        if (strict) {
            for (key in haystack) {
                if (haystack[key] === needle) {
                    return true;
                }
            }
        } else {
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
        }
        return false;
    },
    dechex: function (number) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return parseInt(number, 10).toString(16);
    },
    explode: function (delimiter, string, limit) {
        var emptyArray = {
            0: ''
        };
        if (arguments.length < 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') {
            return null;
        }
        if (delimiter === '' || delimiter === false || delimiter === null) {
            return false;
        }
        if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') {
            return emptyArray;
        }
        if (delimiter === true) {
            delimiter = '1';
        }
        if (!limit) {
            return string.toString().split(delimiter.toString());
        } else {
            var splitted = string.toString().split(delimiter.toString());
            var partA = splitted.splice(0, limit - 1);
            var partB = splitted.join(delimiter.toString());
            partA.push(partB);
            return partA;
        }
    },
    isIE: function () {
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            return true;
        }
    },
    getInternetExplorerVersion: function () {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
        }
        return rv;
    },
    isBrowserTrackable: function () {
        var dntProperties = ['doNotTrack', 'msDoNotTrack'];
        for (var i = 0, l = dntProperties.length; i < l; i++) {
            if (navigator[dntProperties[i]] === 'yes') {
                return false;
            }
        }
        return true;
    }
};

/* End of owa */

/* Start of owa.tracker */


OWA.event = function () {
    this.properties = {};
    this.id = '';
    this.siteId = '';
    this.set('timestamp', OWA.util.getCurrentUnixTimestamp());
}
OWA.event.prototype = {
    get: function (name) {
        if (this.properties.hasOwnProperty(name)) {
            return this.properties[name];
        }
    },
    set: function (name, value) {
        this.properties[name] = value;
    },
    setEventType: function (event_type) {
        this.set("event_type", event_type);
    },
    getProperties: function () {
        return this.properties;
    },
    merge: function (properties) {
        for (param in properties) {
            if (properties.hasOwnProperty(param)) {
                this.set(param, properties[param]);
            }
        }
    },
    isSet: function (name) {
        if (this.properties.hasOwnProperty(name)) {
            return true;
        }
    }
}
OWA.commandQueue = function () {
    OWA.debug('Command Queue object created');
    var asyncCmds = [];
}
OWA.commandQueue.prototype = {
    push: function (cmd, callback) {
        var args = Array.prototype.slice.call(cmd, 1);
        var obj_name = '';
        var method = '';
        var check = OWA.util.strpos(cmd[0], '.');
        if (!check) {
            obj_name = 'OWATracker';
            method = cmd[0];
        } else {
            var parts = cmd[0].split('.');
            obj_name = parts[0];
            method = parts[1];
        }
        OWA.debug('cmd queue object name %s', obj_name);
        OWA.debug('cmd queue object method name %s', method);
        if (typeof window[obj_name] == "undefined") {
            OWA.debug('making global object named: %s', obj_name);
            window[obj_name] = new OWA.tracker({
                globalObjectName: obj_name
            });
        }
        window[obj_name][method].apply(window[obj_name], args);
        if (callback && (typeof callback == 'function')) {
            callback();
        }
    },
    loadCmds: function (cmds) {
        this.asyncCmds = cmds;
    },
    process: function () {
        var that = this;
        var callback = function () {
                if (that.asyncCmds.length > 0) {
                    that.process();
                }
            }
        this.push(this.asyncCmds.shift(), callback);
    }
};
OWA.tracker = function (options) {
    this.startTime = this.getTimestamp();
    OWA.registerStateStore('v', 3600, '', 'assoc');
    OWA.registerStateStore('s', 3600, '', 'assoc');
    OWA.registerStateStore('c', 3600, '', 'json');
    OWA.registerStateStore('b', '', '', 'json');
    this.options = {
        logClicks: true,
        logPage: true,
        logMovement: false,
        encodeProperties: false,
        movementInterval: 100,
        logDomStreamPercentage: 100,
        domstreamLoggingInterval: 3000,
        domstreamEventThreshold: 10,
        maxPriorCampaigns: 5,
        campaignAttributionWindow: 60,
        trafficAttributionMode: 'direct',
        sessionLength: 1800,
        thirdParty: false,
        cookie_domain: false,
        campaignKeys: [{
            public: 'owa_medium',
            private: 'md',
            full: 'medium'
        }, {
            public: 'owa_campaign',
            private: 'cn',
            full: 'campaign'
        }, {
            public: 'owa_source',
            private: 'sr',
            full: 'source'
        }, {
            public: 'owa_search_terms',
            private: 'tr',
            full: 'search_terms'
        }, {
            public: 'owa_ad',
            private: 'ad',
            full: 'ad'
        }, {
            public: 'owa_ad_type',
            private: 'at',
            full: 'ad_type'
        }],
        logger_endpoint: '',
        api_endpoint: '',
        maxCustomVars: 5,
        getRequestCharacterLimit: 2000
    };
    var endpoint = window.owa_baseUrl || OWA.config.baseUrl;
    if (endpoint) {
        this.setEndpoint(endpoint);
    } else {
        OWA.debug('no global endpoint url found.');
    }
    this.endpoint = OWA.config.baseUrl;
    this.active = true;
    if (options) {
        for (var opt in options) {
            this.options[opt] = options[opt];
        }
    }
    this.ecommerce_transaction = '';
    this.isClickTrackingEnabled = false;
    this.domstream_guid = '';
    this.checkForOverlaySession();
    this.page = new OWA.event();
    if (typeof owa_params != 'undefined') {
        if (owa_params.length > 0) {
            this.page.merge(owa_params);
        }
    }
}
OWA.tracker.prototype = {
    id: '',
    siteId: '',
    init: 0,
    stateInit: false,
    globalEventProperties: {},
    sharableStateStores: ['v', 's', 'c', 'b'],
    startTime: null,
    endTime: null,
    campaignState: [],
    isNewCampaign: false,
    isNewSessionFlag: false,
    isTrafficAttributed: false,
    linkedStateSet: false,
    hashCookiesToDomain: true,
    organicSearchEngines: [{
        d: 'google',
        q: 'q'
    }, {
        d: 'yahoo',
        q: 'p'
    }, {
        d: 'yahoo',
        q: 'q'
    }, {
        d: 'msn',
        q: 'q'
    }, {
        d: 'bing',
        q: 'q'
    }, {
        d: 'images.google',
        q: 'q'
    }, {
        d: 'images.search.yahoo.com',
        q: 'p'
    }, {
        d: 'aol',
        q: 'query'
    }, {
        d: 'aol',
        q: 'encquery'
    }, {
        d: 'aol',
        q: 'q'
    }, {
        d: 'lycos',
        q: 'query'
    }, {
        d: 'ask',
        q: 'q'
    }, {
        d: 'altavista',
        q: 'q'
    }, {
        d: 'netscape',
        q: 'query'
    }, {
        d: 'cnn',
        q: 'query'
    }, {
        d: 'about',
        q: 'terms'
    }, {
        d: 'mamma',
        q: 'q'
    }, {
        d: 'daum',
        q: 'q'
    }, {
        d: 'eniro',
        q: 'search_word'
    }, {
        d: 'naver',
        q: 'query'
    }, {
        d: 'pchome',
        q: 'q'
    }, {
        d: 'alltheweb',
        q: 'q'
    }, {
        d: 'voila',
        q: 'rdata'
    }, {
        d: 'virgilio',
        q: 'qs'
    }, {
        d: 'live',
        q: 'q'
    }, {
        d: 'baidu',
        q: 'wd'
    }, {
        d: 'alice',
        q: 'qs'
    }, {
        d: 'yandex',
        q: 'text'
    }, {
        d: 'najdi',
        q: 'q'
    }, {
        d: 'mama',
        q: 'query'
    }, {
        d: 'seznam',
        q: 'q'
    }, {
        d: 'search',
        q: 'q'
    }, {
        d: 'wp',
        q: 'szukaj'
    }, {
        d: 'onet',
        q: 'qt'
    }, {
        d: 'szukacz',
        q: 'q'
    }, {
        d: 'yam',
        q: 'k'
    }, {
        d: 'kvasir',
        q: 'q'
    }, {
        d: 'sesam',
        q: 'q'
    }, {
        d: 'ozu',
        q: 'q'
    }, {
        d: 'terra',
        q: 'query'
    }, {
        d: 'mynet',
        q: 'q'
    }, {
        d: 'ekolay',
        q: 'q'
    }, {
        d: 'rambler',
        q: 'query'
    }, {
        d: 'rambler',
        q: 'words'
    }],
    urlParams: {},
    streamBindings: ['bindMovementEvents', 'bindScrollEvents', 'bindKeypressEvents', 'bindClickEvents'],
    click: '',
    domstream: '',
    movement: '',
    keystroke: '',
    hover: '',
    last_event: '',
    last_movement: '',
    event_queue: [],
    player: '',
    overlay: '',
    setDebug: function (bool) {
        OWA.setSetting('debug', bool);
    },
    checkForLinkedState: function () {
        if (this.linkedStateSet != true) {
            var ls = this.getUrlParam(OWA.getSetting('ns') + 'state');
            if (!ls) {
                ls = this.getAnchorParam(OWA.getSetting('ns') + 'state');
            }
            if (ls) {
                OWA.debug('Shared OWA state detected...');
                ls = OWA.util.base64_decode(OWA.util.urldecode(ls));
                OWA.debug('linked state: %s', ls);
                var state = ls.split('.');
                OWA.debug('linked state: %s', JSON.stringify(state));
                if (state) {
                    for (var i = 0; state.length > i; i++) {
                        var pair = state[i].split('=');
                        OWA.debug('pair: %s', pair);
                        var value = OWA.util.urldecode(pair[1]);
                        OWA.debug('pair: %s', value);
                        decodedvalue = OWA.util.decodeCookieValue(value);
                        var format = OWA.util.getCookieValueFormat(value);
                        decodedvalue.cdh = OWA.util.getCookieDomainHash(this.getCookieDomain());
                        OWA.replaceState(pair[0], decodedvalue, true, format);
                    }
                }
            }
            this.linkedStateSet = true;
        }
    },
    shareStateByLink: function (url) {
        OWA.debug('href of link: ' + url);
        if (url) {
            var state = this.createSharedStateValue();
            var anchor = this.getUrlAnchorValue();
            if (!anchor) {
                OWA.debug('shared state: %s', state);
                document.location.href = url + '#' + OWA.getSetting('ns') + 'state.' + state;
            } else {}
        }
    },
    createSharedStateValue: function () {
        var state = '';
        for (var i = 0; this.sharableStateStores.length > i; i++) {
            var value = OWA.getState(this.sharableStateStores[i]);
            value = OWA.util.encodeJsonForCookie(value, OWA.getStateStoreFormat(this.sharableStateStores[i]));
            if (value) {
                state += OWA.util.sprintf('%s=%s', this.sharableStateStores[i], OWA.util.urlEncode(value));
                if (this.sharableStateStores.length != (i + 1)) {
                    state += '.';
                }
            }
        }
        if (state) {
            OWA.debug('linked state to send: %s', state);
            state = OWA.util.base64_encode(state);
            state = OWA.util.urlEncode(state);
            return state;
        }
    },
    shareStateByPost: function (form) {
        var state = this.createSharedStateValue();
        form.action += '#' + OWA.getSetting('ns') + 'state.' + state;
        form.submit();
    },
    getCookieDomain: function () {
        return this.getOption('cookie_domain') || OWA.getSetting('cookie_domain') || document.domain;
    },
    setCookieDomain: function (domain) {
        var not_passed = false;
        if (!domain) {
            domain = document.domain;
            not_passed = true;
        }
        var period = domain.substr(0, 1);
        if (period === '.') {
            domain = domain.substr(1);
        }
        var contains_www = false;
        var www = domain.substr(0, 4);
        if (www === 'www.') {
            if (not_passed) {
                domain = domain.substr(4);
            }
            contains_www = true;
        }
        var match = false;
        if (document.domain === domain) {
            match = true;
        }
        domain = '.' + domain;
        this.setOption('cookie_domain', domain);
        this.setOption('cookie_domain_set', true);
        OWA.setSetting('cookie_domain', domain);
        OWA.debug('Cookie domain is: %s', domain);
    },
    getCookieDomainHash: function (domain) {
        return OWA.util.crc32(domain);
    },
    setCookieDomainHashing: function (value) {
        this.hashCookiesToDomain = value;
        OWA.setSetting('hashCookiesToDomain', value);
    },
    checkForOverlaySession: function () {
        var a = this.getAnchorParam(OWA.getSetting('ns') + 'overlay');
        if (a) {
            a = OWA.util.base64_decode(OWA.util.urldecode(a));
            a = OWA.util.urldecode(a);
            OWA.debug('overlay anchor value: ' + a);
            OWA.util.setCookie(OWA.getSetting('ns') + 'overlay', a, '', '/', document.domain);
            this.pause();
            OWA.startOverlaySession(OWA.util.decodeCookieValue(a));
        }
    },
    getUrlAnchorValue: function () {
        var anchor = self.document.location.hash.substring(1);
        OWA.debug('anchor value: ' + anchor);
        return anchor;
    },
    getAnchorParam: function (name) {
        var anchor = this.getUrlAnchorValue();
        if (anchor) {
            OWA.debug('anchor is: %s', anchor);
            var pairs = anchor.split(',');
            OWA.debug('anchor pairs: %s', JSON.stringify(pairs));
            if (pairs.length > 0) {
                var values = {};
                for (var i = 0; pairs.length > i; i++) {
                    var pieces = pairs[i].split('.');
                    OWA.debug('anchor pieces: %s', JSON.stringify(pieces));
                    values[pieces[0]] = pieces[1];
                }
                OWA.debug('anchor values: %s', JSON.stringify(values));
                if (values.hasOwnProperty(name)) {
                    return values[name];
                }
            }
        }
    },
    getUrlParam: function (name) {
        this.urlParams = this.urlParams || OWA.util.parseUrlParams();
        if (this.urlParams.hasOwnProperty(name)) {
            return this.urlParams[name];
        } else {
            return false;
        }
    },
    dynamicFunc: function (func) {
        var args = Array.prototype.slice.call(func, 1);
        this[func[0]].apply(this, args);
    },
    setPageTitle: function (title) {
        this.setGlobalEventProperty("page_title", title);
    },
    setPageType: function (type) {
        this.setGlobalEventProperty("page_type", type);
    },
    setUserName: function (value) {
        this.setGlobalEventProperty('user_name', value);
    },
    setSiteId: function (site_id) {
        this.siteId = site_id;
    },
    getSiteId: function () {
        return this.siteId;
    },
    setEndpoint: function (endpoint) {
        endpoint = ('https:' == document.location.protocol ? window.owa_baseSecUrl || endpoint.replace(/http:/, 'https:') : endpoint);
        this.setOption('baseUrl', endpoint);
        OWA.config.baseUrl = endpoint;
    },
    setLoggerEndpoint: function (url) {
        this.setOption('logger_endpoint', this.forceUrlProtocol(url));
    },
    getLoggerEndpoint: function () {
        var url = this.getOption('logger_endpoint') || this.getEndpoint() || OWA.getSetting('baseUrl');
        return url + 'log.php';
    },
    setApiEndpoint: function (url) {
        this.setOption('api_endpoint', this.forceUrlProtocol(url));
        OWA.setApiEndpoint(url);
    },
    getApiEndpoint: function () {
        return this.getOption('api_endpoint') || this.getEndpoint() + 'api.php';
    },
    forceUrlProtocol: function (url) {
        url = ('https:' == document.location.protocol ? url.replace(/http:/, 'https:') : url);
        return url;
    },
    getEndpoint: function () {
        return this.getOption('baseUrl');
    },
    getCurrentUrl: function () {
        return document.URL
    },
    bindClickEvents: function () {
        if (!this.isClickTrackingEnabled) {
            var that = this;
            if (window.addEventListener) {
                window.addEventListener('click', function (e) {
                    that.clickEventHandler(e);
                }, false);
            } else if (window.attachEvent) {
                document.attachEvent('onclick', function (e) {
                    that.clickEventHandler(e);
                });
            }
            this.isClickTrackingEnabled = true;
        }
    },
    setDomstreamSampleRate: function (value) {
        this.setOption('logDomStreamPercentage', value);
    },
    startDomstreamTimer: function () {
        var interval = this.getOption('domstreamLoggingInterval')
        var that = this;
        var domstreamTimer = setInterval(function () {
            that.logDomStream()
        }, interval);
    },
    log: function () {
        this.page.setEventType("base.page_request");
        return this.logEvent(this.page);
    },
    isObjectType: function (obj, type) {
        return !!(obj && type && type.prototype && obj.constructor == type.prototype.constructor);
    },
    logEvent: function (properties, block, callback) {
        if (this.active) {
            properties.site_id = this.getSiteId();
            var url = this._assembleRequestUrl(properties);
            var limit = this.getOption('getRequestCharacterLimit');
            if (url.length > limit) {
                var data = this.prepareRequestData(properties);
                this.cdPost(data);
            } else {
                OWA.debug('url : %s', url);
                var image = new Image(1, 1);
                image.onLoad = function () {};
                image.src = url;
                if (block) {}
                OWA.debug('Inserted web bug for %s', properties['event_type']);
            }
            if (callback && (typeof (callback) === "function")) {
                callback();
            }
        }
    },
    _assembleRequestUrl: function (properties) {
        var get = this.prepareRequestDataForGet(properties);
        var log_url = this.getLoggerEndpoint();
        if (log_url.indexOf('?') === -1) {
            log_url += '?';
        } else {
            log_url += '&';
        }
        var full_url = log_url + get;
        return full_url;
    },
    prepareRequestData: function (properties) {
        var data = {};
        for (var param in properties) {
            var value = '';
            if (properties.hasOwnProperty(param)) {
                if (OWA.util.is_array(properties[param])) {
                    var n = properties[param].length;
                    for (var i = 0; i < n; i++) {
                        if (OWA.util.is_object(properties[param][i])) {
                            for (var o_param in properties[param][i]) {
                                data[OWA.util.sprintf(OWA.getSetting('ns') + '%s[%s][%s]', param, i, o_param)] = OWA.util.urlEncode(properties[param][i][o_param]);
                            }
                        } else {
                            data[OWA.util.sprintf(OWA.getSetting('ns') + '%s[%s]', param, i)] = OWA.util.urlEncode(properties[param][i]);
                        }
                    }
                } else {
                    data[OWA.util.sprintf(OWA.getSetting('ns') + '%s', param)] = OWA.util.urlEncode(properties[param]);
                }
            }
        }
        return data;
    },
    prepareRequestDataForGet: function (properties) {
        var properties = this.prepareRequestData(properties);
        var get = '';
        for (var param in properties) {
            if (properties.hasOwnProperty(param)) {
                var kvp = '';
                kvp = OWA.util.sprintf('%s=%s&', param, properties[param]);
                get += kvp;
            }
        }
        return get;
    },
    cdPost: function (data) {
        var container_id = "owa-tracker-post-container";
        var post_url = this.getLoggerEndpoint();
        var iframe_container = document.getElementById(container_id);
        if (!iframe_container) {
            var div = document.createElement('div');
            div.setAttribute('id', container_id);
            document.body.appendChild(div);
            iframe_container = document.getElementById(container_id);
        }
        this.generateHiddenIframe(iframe_container, data);
    },
    generateHiddenIframe: function (parentElement, data) {
        var iframe_name = 'owa-tracker-post-iframe';
        if (OWA.util.isIE() && OWA.util.getInternetExplorerVersion() < 9.0) {
            var iframe = document.createElement('<iframe name="' + iframe_name + '" scr="about:blank" width="1" height="1"></iframe>');
        } else {
            var iframe = document.createElement("iframe");
            iframe.setAttribute('name', iframe_name);
            iframe.setAttribute('src', 'about:blank');
            iframe.setAttribute('width', 1);
            iframe.setAttribute('height', 1);
        }
        iframe.setAttribute('class', iframe_name);
        iframe.setAttribute('style', 'border: none;');
        var that = this;
        if (parentElement == null) {
            parentElement = document.body;
        }
        parentElement.appendChild(iframe);
        var timer = setInterval(function () {
            var doc = that.getIframeDocument(iframe);
            if (doc) {
                that.postFromIframe(iframe, data);
                clearInterval(timer);
            }
        }, 1);
        var cleanuptimer = setInterval(function () {
            parentElement.removeChild(iframe);
            clearInterval(cleanuptimer);
        }, 1000);
    },
    postFromIframe: function (ifr, data) {
        var post_url = this.getLoggerEndpoint();
        var doc = this.getIframeDocument(ifr);
        var form_name = 'post_form' + Math.random();
        if (OWA.util.isIE() && OWA.util.getInternetExplorerVersion() < 9.0) {
            var frm = doc.createElement('<form name="' + form_name + '"></form>');
        } else {
            var frm = doc.createElement('form');
            frm.setAttribute('name', form_name);
        }
        frm.setAttribute('id', form_name);
        frm.setAttribute("action", post_url);
        frm.setAttribute("method", "POST");
        for (var param in data) {
            if (data.hasOwnProperty(param)) {
                if (OWA.util.isIE() && OWA.util.getInternetExplorerVersion() < 9.0) {
                    var input = doc.createElement("<input type='hidden' name='" + param + "' />");
                } else {
                    var input = document.createElement("input");
                    input.setAttribute("name", param);
                    input.setAttribute("type", "hidden");
                }
                input.setAttribute("value", data[param]);
                frm.appendChild(input);
            }
        }
        doc.body.appendChild(frm);
        doc.forms[form_name].submit();
        doc.body.removeChild(frm);
    },
    createPostForm: function () {
        var post_url = this.getLoggerEndpoint();
        var form_name = 'post_form' + Math.random();
        if (OWA.util.isIE() && OWA.util.getInternetExplorerVersion() < 9.0) {
            var frm = doc.createElement('<form name="' + form_name + '"></form>');
        } else {
            var frm = doc.createElement('form');
            frm.setAttribute('name', form_name);
        }
        frm.setAttribute('id', form_name);
        frm.setAttribute("action", post_url);
        frm.setAttribute("method", "POST");
        return frm;
    },
    getIframeDocument: function (iframe) {
        var doc = null;
        if (iframe.contentDocument) {
            doc = iframe.contentDocument;
        } else if (iframe.contentWindow && iframe.contentWindow.document) {
            doc = iframe.contentWindow.document;
        } else if (iframe.document) {
            doc = iframe.document;
        }
        if (doc == null) {
            OWA.debug("Document not found, append the parent element to the DOM before creating the IFrame");
        }
        doc.open();
        doc.close();
        return doc;
    },
    getViewportDimensions: function () {
        var viewport = new Object();
        viewport.width = window.innerWidth ? window.innerWidth : document.body.offsetWidth;
        viewport.height = window.innerHeight ? window.innerHeight : document.body.offsetHeight;
        return viewport;
    },
    findPosX: function (obj) {
        var curleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curleft += obj.offsetLeft
                obj = obj.offsetParent;
            }
        } else if (obj.x) curleft += obj.x;
        return curleft;
    },
    findPosY: function (obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curtop += obj.offsetTop
                obj = obj.offsetParent;
            }
        } else if (obj.y) curtop += obj.y;
        return curtop;
    },
    _getTarget: function (e) {
        var targ = e.target || e.srcElement;
        if (typeof targ == 'undefined' || targ == null) {
            return null;
        }
        if (targ.nodeType == 3) {
            targ = target.parentNode;
        }
        return targ;
    },
    getCoords: function (e) {
        var coords = new Object();
        if (typeof (e.pageX) == 'number') {
            coords.x = e.pageX + '';
            coords.y = e.pageY + '';
        } else {
            coords.x = e.clientX + '';
            coords.y = e.clientY + '';
        }
        return coords;
    },
    getDomElementProperties: function (targ) {
        var properties = new Object();
        properties.dom_element_tag = targ.tagName;
        if (targ.tagName == "A") {
            if (targ.textContent != undefined) {
                properties.dom_element_text = targ.textContent;
            } else {
                properties.dom_element_text = targ.innerText;
            }
            properties.target_url = targ.href;
        } else if (targ.tagName == "INPUT") {
            properties.dom_element_text = targ.value;
        } else if (targ.tagName == "IMG") {
            properties.target_url = targ.parentNode.href;
            properties.dom_element_text = targ.alt;
        } else {
            if (targ.textContent != undefined) {
                properties.html_element_text = '';
            } else {
                properties.html_element_text = '';
            }
        }
        return properties;
    },
    clickEventHandler: function (e) {
        e = e || window.event;
        var click = new OWA.event();
        click.setEventType("dom.click");
        var targ = this._getTarget(e);
        var dom_name = '(not set)';
        if (targ.hasOwnProperty && targ.hasOwnProperty('name') && targ.name.length > 0) {
            dom_name = targ.name;
        }
        click.set("dom_element_name", dom_name);
        var dom_value = '(not set)';
        if (targ.hasOwnProperty && targ.hasOwnProperty('value') && targ.value.length > 0) {
            dom_value = targ.value;
        }
        click.set("dom_element_value", dom_value);
        var dom_id = '(not set)';
        if (targ.hasOwnProperty && !targ.hasOwnProperty('id') && targ.id.length > 0) {
            dom_id = targ.id;
        }
        click.set("dom_element_id", dom_id);
        var dom_class = '(not set)';
        if (targ.hasOwnProperty && targ.hasOwnProperty('className') && targ.className.length > 0) {
            dom_class = targ.className;
        }
        click.set("dom_element_class", dom_class);
        click.set("dom_element_tag", OWA.util.strtolower(targ.tagName));
        click.set("page_url", window.location.href);
        var viewport = this.getViewportDimensions();
        click.set("page_width", viewport.width);
        click.set("page_height", viewport.height);
        var properties = this.getDomElementProperties(targ);
        click.merge(this.filterDomProperties(properties));
        click.set("dom_element_x", this.findPosX(targ) + '');
        click.set("dom_element_y", this.findPosY(targ) + '');
        var coords = this.getCoords(e);
        click.set('click_x', coords.x);
        click.set('click_y', coords.y);
        if (this.getOption('trackDomStream')) {
            this.addToEventQueue(click)
        }
        var full_click = OWA.util.clone(click);
        if (this.getOption('logClicksAsTheyHappen')) {
            this.trackEvent(full_click);
        }
        this.click = full_click;
    },
    filterDomProperties: function (properties) {
        return properties;
    },
    callMethod: function (string, data) {
        return this[string](data);
    },
    addDomStreamEventBinding: function (method_name) {
        this.streamBindings.push(method_name);
    },
    bindMovementEvents: function () {
        var that = this;
        document.onmousemove = function (e) {
            that.movementEventHandler(e);
        }
    },
    movementEventHandler: function (e) {
        e = e || window.event;
        var now = this.getTime();
        if (now > this.last_movement + this.getOption('movementInterval')) {
            this.movement = new OWA.event();
            this.movement.setEventType("dom.movement");
            var coords = this.getCoords(e);
            this.movement.set('cursor_x', coords.x);
            this.movement.set('cursor_y', coords.y);
            this.addToEventQueue(this.movement);
            this.last_movement = now;
        }
    },
    bindScrollEvents: function () {
        var that = this;
        window.onscroll = function (e) {
            that.scrollEventHandler(e);
        }
    },
    scrollEventHandler: function (e) {
        var e = e || window.event;
        var now = this.getTimestamp();
        var event = new OWA.event();
        event.setEventType('dom.scroll');
        var coords = this.getScrollingPosition();
        event.set('x', coords.x);
        event.set('y', coords.y);
        this.addToEventQueue(event);
        this.last_scroll = now;
    },
    getScrollingPosition: function () {
        var position = [0, 0];
        if (typeof window.pageYOffset != 'undefined') {
            position = {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        } else if (typeof document.documentElement.scrollTop != 'undefined' && document.documentElement.scrollTop > 0) {
            position = {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            };
        } else if (typeof document.body.scrollTop != 'undefined') {
            position = {
                x: document.body.scrollLeft,
                y: document.body.scrollTop
            };
        }
        return position;
    },
    bindHoverEvents: function () {},
    bindFocusEvents: function () {
        var that = this;
    },
    bindKeypressEvents: function () {
        var that = this;
        document.onkeypress = function (e) {
            that.keypressEventHandler(e);
        }
    },
    keypressEventHandler: function (e) {
        e = e || window.event;
        var targ = this._getTarget(e);
        if (targ.tagName === 'INPUT' && targ.type === 'password') {
            return;
        }
        var key_code = e.keyCode ? e.keyCode : e.charCode
        var key_value = String.fromCharCode(key_code);
        var event = new OWA.event();
        event.setEventType('dom.keypress');
        event.set('key_value', key_value);
        event.set('key_code', key_code);
        event.set("dom_element_name", targ.name);
        event.set("dom_element_value", targ.value);
        event.set("dom_element_id", targ.id);
        event.set("dom_element_tag", targ.tagName);
        this.addToEventQueue(event);
    },
    getTimestamp: function () {
        return OWA.util.getCurrentUnixTimestamp();
    },
    getTime: function () {
        return Math.round(new Date().getTime());
    },
    getElapsedTime: function () {
        return this.getTimestamp() - this.startTime;
    },
    getOption: function (name) {
        if (this.options.hasOwnProperty(name)) {
            return this.options[name];
        }
    },
    setOption: function (name, value) {
        this.options[name] = value;
    },
    setLastEvent: function (event) {
        return;
    },
    addToEventQueue: function (event) {
        if (this.active && !this.isPausedBySibling()) {
            var now = this.getTimestamp();
            if (event != undefined) {
                this.event_queue.push(event.getProperties());
            } else {}
        }
    },
    isPausedBySibling: function () {
        return OWA.getSetting('loggerPause');
    },
    sleep: function (delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    },
    pause: function () {
        this.active = false;
    },
    restart: function () {
        this.active = true;
    },
    makeEvent: function () {
        return new OWA.event();
    },
    addStreamEventBinding: function (name) {
        this.streamBindings.push(name);
    },
    getCampaignProperties: function () {
        if (!this.urlParams.length > 0) {
            this.urlParams = OWA.util.parseUrlParams(document.URL);
            OWA.debug('GET: ' + JSON.stringify(this.urlParams));
        }
        var campaignKeys = this.getOption('campaignKeys');
        var campaign_params = {};
        for (var i = 0, n = campaignKeys.length; i < n; i++) {
            if (this.urlParams.hasOwnProperty(campaignKeys[i].public)) {
                campaign_params[campaignKeys[i].private] = this.urlParams[campaignKeys[i].public];
                this.isNewCampaign = true;
            }
        }
        if (campaign_params['at'] && !campaign_params['ad']) {
            campaign_params['ad'] = '(not set)';
        }
        if (campaign_params['ad'] && !campaign_params['at']) {
            campaign_params['at'] = '(not set)';
        }
        if (this.isNewCampaign) {}
        return campaign_params;
    },
    setCampaignSessionState: function (properties) {
        var campaignKeys = this.getOption('campaignKeys');
        for (var i = 0, n = campaignKeys.length; i < n; i++) {
            if (properties.hasOwnProperty(campaignKeys[i].private)) {
                OWA.setState('s', campaignKeys[i].full, properties[campaignKeys[i].private]);
            }
        }
    },
    setCampaignRelatedProperties: function (event) {
        var properties = this.getCampaignProperties();
        OWA.debug('campaign properties: %s', JSON.stringify(properties));
        var campaignKeys = this.getOption('campaignKeys');
        for (var i = 0, n = campaignKeys.length; i < n; i++) {
            if (properties.hasOwnProperty(campaignKeys[i].private)) {
                this.setGlobalEventProperty(campaignKeys[i].full, properties[campaignKeys[i].private]);
            }
        }
    },
    directAttributionModel: function (campaign_params) {
        if (this.isNewCampaign) {
            OWA.debug('campaign state length: %s', this.campaignState.length);
            this.campaignState.push(campaign_params);
            if (this.campaignState.length > this.options.maxPriorCampaigns) {
                var removed = this.campaignState.splice(0, 1);
                OWA.debug('Too many prior campaigns in state store. Dropping oldest to make room.');
            }
            this.setCampaignCookie(this.campaignState);
            this.isTrafficAttributed = true;
            this.setCampaignSessionState(campaign_params);
            return campaign_params;
        }
    },
    originalAttributionModel: function (campaign_params) {
        if (this.campaignState.length > 0) {
            OWA.debug('Original attribution detected.');
            campaign_params = this.campaignState[0];
            this.isTrafficAttributed = true;
        } else {
            OWA.debug('Setting Original Campaign touch.');
            if (this.isNewCampaign) {
                this.campaignState.push(campaign_params);
                this.setCampaignCookie(this.campaignState);
                this.isTrafficAttributed = true;
            }
        }
        this.setCampaignSessionState(campaign_params);
        return campaign_params;
    },
    setCampaignMediumKey: function (key) {
        this.options.campaignKeys[0].public = key;
    },
    setCampaignNameKey: function (key) {
        this.options.campaignKeys[1].public = key;
    },
    setCampaignSourceKey: function (key) {
        this.options.campaignKeys[2].public = key;
    },
    setCampaignSearchTermsKey: function (key) {
        this.options.campaignKeys[3].public = key;
    },
    setCampaignAdKey: function (key) {
        this.options.campaignKeys[4].public = key;
    },
    setCampaignAdTypeKey: function (key) {
        this.options.campaignKeys[5].public = key;
    },
    setTrafficAttribution: function (event, callback) {
        var campaignState = OWA.getState('c', 'attribs');
        if (campaignState) {
            this.campaignState = campaignState;
        }
        var campaign_params = this.getCampaignProperties();
        switch (this.options.trafficAttributionMode) {
        case 'direct':
            OWA.debug('Applying "Direct" Traffic Attribution Model');
            campaign_params = this.directAttributionModel(campaign_params);
            break;
        case 'original':
            OWA.debug('Applying "Original" Traffic Attribution Model');
            campaign_params = this.originalAttributionModel(campaign_params);
            break;
        default:
            OWA.debug('Applying Default (Direct) Traffic Attribution Model');
            this.directAttributionModel(campaign_params);
        }
        if (this.isTrafficAttributed) {
            OWA.debug('Attributed Traffic to: %s', JSON.stringify(campaign_params));
        } else {
            if (this.isNewSessionFlag === true) {
                OWA.debug('Infering traffic attribution.');
                this.inferTrafficAttribution();
            }
        }
        var campaignKeys = this.getOption('campaignKeys');
        for (var i = 0, n = campaignKeys.length; i < n; i++) {
            var value = OWA.getState('s', campaignKeys[i].full);
            if (value) {
                this.setGlobalEventProperty(campaignKeys[i].full, value);
            }
        }
        var session_referer = OWA.getState('s', 'referer');
        if (session_referer) {
            this.setGlobalEventProperty('session_referer', session_referer);
        }
        if (this.campaignState.length > 0) {
            this.setGlobalEventProperty('attribs', JSON.stringify(this.campaignState));
        }
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    inferTrafficAttribution: function () {
        var ref = document.referrer;
        var medium = 'direct';
        var source = '(none)';
        var search_terms = '(none)';
        var session_referer = '(none)';
        if (ref) {
            var uri = new OWA.uri(ref);
            if (document.domain != uri.getHost()) {
                medium = 'referral';
                session_referer = ref;
                source = OWA.util.stripWwwFromDomain(uri.getHost());
                var engine = this.isRefererSearchEngine(uri);
                if (engine) {
                    medium = 'organic-search';
                    search_terms = engine.t || '(not provided)';
                }
            }
        }
        OWA.setState('s', 'referer', session_referer);
        OWA.setState('s', 'medium', medium);
        OWA.setState('s', 'source', source);
        OWA.setState('s', 'search_terms', search_terms);
    },
    setCampaignCookie: function (values) {
        OWA.setState('c', 'attribs', values, '', 'json', this.options.campaignAttributionWindow);
    },
    isRefererSearchEngine: function (uri) {
        for (var i = 0, n = this.organicSearchEngines.length; i < n; i++) {
            var domain = this.organicSearchEngines[i].d;
            var query_param = this.organicSearchEngines[i].q
            var host = uri.getHost();
            var term = uri.getQueryParam(query_param);
            if (OWA.util.strpos(host, domain) && uri.isQueryParam(query_param)) {
                OWA.debug('Found search engine: %s with query param %s:, query term: %s', domain, query_param, term);
                return {
                    d: domain,
                    q: query_param,
                    t: term
                };
            }
        }
    },
    addOrganicSearchEngine: function (domain, query_param, prepend) {
        var engine = {
            d: domain,
            q: query_param
        };
        if (prepend) {
            this.organicSearchEngines.unshift(engine);
        } else {
            this.organicSearchEngines.push(engine);
        }
    },
    addTransaction: function (order_id, order_source, total, tax, shipping, gateway, city, state, country) {
        this.ecommerce_transaction = new OWA.event();
        this.ecommerce_transaction.setEventType('ecommerce.transaction');
        this.ecommerce_transaction.set('ct_order_id', order_id);
        this.ecommerce_transaction.set('ct_order_source', order_source);
        this.ecommerce_transaction.set('ct_total', total);
        this.ecommerce_transaction.set('ct_tax', tax);
        this.ecommerce_transaction.set('ct_shipping', shipping);
        this.ecommerce_transaction.set('ct_gateway', gateway);
        this.ecommerce_transaction.set('page_url', this.getCurrentUrl());
        this.ecommerce_transaction.set('city', city);
        this.ecommerce_transaction.set('state', state);
        this.ecommerce_transaction.set('country', country);
        OWA.debug('setting up ecommerce transaction');
        this.ecommerce_transaction.set('ct_line_items', []);
        OWA.debug('completed setting up ecommerce transaction');
    },
    addTransactionLineItem: function (order_id, sku, product_name, category, unit_price, quantity) {
        if (!this.ecommerce_transaction) {
            this.addTransaction('none set');
        }
        var li = {};
        li.li_order_id = order_id;
        li.li_sku = sku;
        li.li_product_name = product_name;
        li.li_category = category;
        li.li_unit_price = unit_price;
        li.li_quantity = quantity;
        var items = this.ecommerce_transaction.get('ct_line_items');
        items.push(li);
        this.ecommerce_transaction.set('ct_line_items', items);
    },
    trackTransaction: function () {
        if (this.ecommerce_transaction) {
            this.trackEvent(this.ecommerce_transaction);
            this.ecommerce_transaction = '';
        }
    },
    setNumberPriorSessions: function (event, callback) {
        OWA.debug('setting number of prior sessions');
        var nps = OWA.getState('v', 'nps');
        if (!nps) {
            nps = '0';
        }
        if (this.isNewSessionFlag === true) {
            nps = nps * 1;
            nps++;
            OWA.setState('v', 'nps', nps, true);
        }
        this.setGlobalEventProperty('nps', nps);
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    setDaysSinceLastSession: function (event, callback) {
        OWA.debug('setting days since last session.');
        var dsps = '';
        if (this.getGlobalEventProperty('is_new_session')) {
            OWA.debug('timestamp: %s', event.get('timestamp'));
            var last_req = this.getGlobalEventProperty('last_req') || event.get('timestamp');
            OWA.debug('last_req: %s', last_req);
            dsps = Math.round((event.get('timestamp') - last_req) / (3600 * 24));
            OWA.setState('s', 'dsps', dsps);
        }
        if (!dsps) {
            dsps = OWA.getState('s', 'dsps') || 0;
        }
        this.setGlobalEventProperty('dsps', dsps);
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    setVisitorId: function (event, callback) {
        var visitor_id = OWA.getState('v', 'vid');
        if (!visitor_id) {
            var old_vid_test = OWA.getState('v');
            if (!OWA.util.is_object(old_vid_test)) {
                visitor_id = old_vid_test;
                OWA.clearState('v');
                OWA.setState('v', 'vid', visitor_id, true);
            }
        }
        if (!visitor_id) {
            visitor_id = OWA.util.generateRandomGuid(this.siteId);
            this.globalEventProperties.is_new_visitor = true;
            OWA.setState('v', 'vid', visitor_id, true);
            OWA.debug('Creating new visitor id');
        }
        this.setGlobalEventProperty('visitor_id', visitor_id);
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    setFirstSessionTimestamp: function (event, callback) {
        var fsts = OWA.getState('v', 'fsts');
        if (!fsts) {
            fsts = event.get('timestamp');
            OWA.debug('setting fsts value: %s', fsts);
            OWA.setState('v', 'fsts', fsts, true);
        }
        this.setGlobalEventProperty('fsts', fsts);
        var dsfs = Math.round((event.get('timestamp') - fsts) / (3600 * 24));
        OWA.setState('v', 'dsfs', dsfs);
        this.setGlobalEventProperty('dsfs', dsfs);
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    setLastRequestTime: function (event, callback) {
        var last_req = OWA.getState('s', 'last_req');
        OWA.debug('last_req from cookie: %s', last_req);
        if (!last_req) {
            var state_store_name = OWA.util.sprintf('%s_%s', 'ss', this.siteId);
            last_req = OWA.getState(state_store_name, 'last_req');
        }
        OWA.debug('setting last_req global property of %s', last_req);
        this.setGlobalEventProperty('last_req', last_req);
        OWA.setState('s', 'last_req', event.get('timestamp'), true);
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    setSessionId: function (event, callback) {
        var session_id = '';
        var state_store_name = '';
        var is_new_session = this.isNewSession(event.get('timestamp'), this.getGlobalEventProperty('last_req'));
        if (is_new_session) {
            var prior_session_id = OWA.getState('s', 'sid');
            if (!prior_session_id) {
                state_store_name = OWA.util.sprintf('%s_%s', 'ss', this.getSiteId());
                prior_session_id = OWA.getState(state_store_name, 's');
            }
            if (prior_session_id) {
                this.globalEventProperties.prior_session_id = prior_session_id;
            }
            this.resetSessionState();
            session_id = OWA.util.generateRandomGuid(this.getSiteId());
            this.globalEventProperties.session_id = session_id;
            this.globalEventProperties.is_new_session = true;
            this.isNewSessionFlag = true;
            OWA.setState('s', 'sid', session_id, true);
        } else {
            session_id = OWA.getState('s', 'sid');
            if (!session_id) {
                state_store_name = OWA.util.sprintf('%s_%s', 'ss', this.getSiteId());
                session_id = OWA.getState(state_store_name, 's');
                OWA.setState('s', 'sid', session_id, true);
            }
            this.globalEventProperties.session_id = session_id;
        }
        if (!this.getGlobalEventProperty('session_id')) {
            session_id = OWA.util.generateRandomGuid(this.getSiteId());
            this.globalEventProperties.session_id = session_id;
            this.globalEventProperties.is_new_session = true;
            this.isNewSessionFlag = true;
            OWA.setState('s', 'sid', session_id, true);
        }
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    resetSessionState: function () {
        var last_req = OWA.getState('s', 'last_req');
        OWA.clearState('s');
        OWA.setState('s', 'last_req', last_req);
    },
    isNewSession: function (timestamp, last_req) {
        var is_new_session = false;
        if (!timestamp) {
            timestamp = OWA.util.getCurrentUnixTimestamp();
        }
        if (!last_req) {
            last_req = 0;
        }
        var time_since_lastreq = timestamp - last_req;
        var len = this.options.sessionLength;
        if (time_since_lastreq < len) {
            OWA.debug("This request is part of a active session.");
            return false;
        } else {
            OWA.debug("This request is the start of a new session. Prior session expired.");
            return true;
        }
    },
    getGlobalEventProperty: function (name) {
        if (this.globalEventProperties.hasOwnProperty(name)) {
            return this.globalEventProperties[name];
        }
    },
    setGlobalEventProperty: function (name, value) {
        this.globalEventProperties[name] = value;
    },
    deleteGlobalEventProperty: function (name) {
        if (this.globalEventProperties.hasOwnProperty(name)) {
            delete this.globalEventProperties[name];
        }
    },
    setPageProperties: function (properties) {
        for (var prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                this.page.set(prop, properties[prop]);
            }
        }
    },
    setCustomVar: function (slot, name, value, scope) {
        var cv_param_name = 'cv' + slot;
        var cv_param_value = name + '=' + value;
        if (cv_param_value.length > 65) {
            OWA.debug('Custom variable name + value is too large. Must be less than 64 characters.');
            return;
        }
        switch (scope) {
        case 'session':
            OWA.util.setState('b', cv_param_name, cv_param_value);
            OWA.debug('just set custom var on session.');
            break;
        case 'visitor':
            OWA.util.setState('v', cv_param_name, cv_param_value);
            OWA.util.clearState('b', cv_param_name);
            break;
        }
        this.setGlobalEventProperty(cv_param_name, cv_param_value);
    },
    getCustomVar: function (slot) {
        var cv_param_name = 'cv' + slot;
        var cv = '';
        cv = this.getGlobalEventProperty(cv_param_name);
        if (!cv) {
            cv = OWA.util.getState('b', cv_param_name);
        }
        if (!cv) {
            cv = OWA.util.getState('v', cv_param_name);
        }
        return cv;
    },
    deleteCustomVar: function (slot) {
        var cv_param_name = 'cv' + slot;
        OWA.util.clearState('b', cv_param_name);
        OWA.util.clearState('v', cv_param_name);
        this.deleteGlobalEventProperty(cv_param_name)
    },
    addDefaultsToEvent: function (event, callback) {
        if (!event.get('page_url')) {
            event.set('page_url', this.getCurrentUrl());
        }
        if (!event.get('HTTP_REFERER')) {
            event.set('HTTP_REFERER', document.referrer);
        }
        if (!event.get('page_title')) {
            event.set('page_title', OWA.util.trim(document.title));
        }
        if (callback && (typeof (callback) == 'function')) {
            callback(event);
        }
    },
    addGlobalPropertiesToEvent: function (event, callback) {
        for (var i = 1; i <= this.getOption('maxCustomVars'); i++) {
            var cv_param_name = 'cv' + i;
            var cv_value = '';
            if (!this.globalEventProperties.hasOwnProperty(cv_param_name)) {
                cv_value = this.getCustomVar(i);
                if (cv_value) {
                    this.setGlobalEventProperty(cv_param_name, cv_value);
                }
            }
        }
        OWA.debug('Adding global properties to event: %s', JSON.stringify(this.globalEventProperties));
        for (var prop in this.globalEventProperties) {
            if (this.globalEventProperties.hasOwnProperty(prop) && !event.isSet(prop)) {
                event.set(prop, this.globalEventProperties[prop]);
            }
        }
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    manageState: function (event, callback) {
        var that = this;
        if (!this.stateInit) {
            this.setVisitorId(event, function (event) {
                that.setFirstSessionTimestamp(event, function (event) {
                    that.setLastRequestTime(event, function (event) {
                        that.setSessionId(event, function (event) {
                            that.setNumberPriorSessions(event, function (event) {
                                that.setDaysSinceLastSession(event, function (event) {
                                    that.setTrafficAttribution(event, function (event) {
                                        that.stateInit = true;
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
        if (callback && (typeof (callback) === "function")) {
            callback(event);
        }
    },
    trackEvent: function (event, block) {
        if (this.getOption('cookie_domain_set') != true) {
            this.setCookieDomain();
        }
        var block_flag = false;
        if (this.active) {
            if (block) {
                block_flag = true;
            }
            if (this.getOption('thirdParty')) {
                this.globalEventProperties.thirdParty = true;
                this.setCampaignRelatedProperties(event);
            } else {
                var that = this;
                this.manageState(event, function (event) {
                    that.addGlobalPropertiesToEvent(event, function (event) {
                        that.addDefaultsToEvent(event, function (event) {
                            return that.logEvent(event.getProperties(), block_flag);
                        });
                    });
                });
            }
        }
    },
    trackPageView: function (url) {
        if (url) {
            this.page.set('page_url', url);
        }
        this.page.set('timestamp', this.startTime);
        this.page.setEventType("base.page_request");
        return this.trackEvent(this.page);
    },
    trackAction: function (action_group, action_name, action_label, numeric_value) {
        var event = new OWA.event;
        event.setEventType('track.action');
        event.set('site_id', this.getSiteId());
        event.set('page_url', this.getCurrentUrl());
        event.set('action_group', action_group);
        event.set('action_name', action_name);
        event.set('action_label', action_label);
        event.set('numeric_value', numeric_value);
        this.trackEvent(event);
        OWA.debug("Action logged");
    },
    trackClicks: function (handler) {
        this.setOption('logClicksAsTheyHappen', true);
        this.bindClickEvents();
    },
    logDomStream: function () {
        var domstream = new OWA.event;
        if (this.event_queue.length > this.options.domstreamEventThreshold) {
            if (!this.domstream_guid) {
                var salt = 'domstream' + this.getCurrentUrl() + this.getSiteId();
                this.domstream_guid = OWA.util.generateRandomGuid(salt);
            }
            domstream.setEventType('dom.stream');
            domstream.set('domstream_guid', this.domstream_guid);
            domstream.set('site_id', this.getSiteId());
            domstream.set('page_url', this.getCurrentUrl());
            domstream.set('timestamp', OWA.util.getCurrentUnixTimestamp());
            domstream.set('duration', this.getElapsedTime());
            domstream.set('stream_events', JSON.stringify(this.event_queue));
            domstream.set('stream_length', this.event_queue.length);
            this.event_queue = [];
            return this.trackEvent(domstream);
        } else {
            OWA.debug("Domstream had too few events to log.");
        }
    },
    trackDomStream: function () {
        if (this.active) {
            var rand = Math.floor(Math.random() * 100 + 1);
            if (rand <= this.getOption('logDomStreamPercentage')) {
                this.setOption('trackDomStream', true);
                var len = this.streamBindings.length;
                for (var i = 0; i < len; i++) {
                    this.callMethod(this.streamBindings[i]);
                }
                this.startDomstreamTimer();
            } else {
                OWA.debug("not tracking domstream for this user.");
            }
        }
    }
};
(function () {
    if (OWA.util.isBrowserTrackable()) {
        if (typeof owa_cmds === 'undefined') {
            var q = new OWA.commandQueue();
        } else {
            if (OWA.util.is_array(owa_cmds)) {
                var q = new OWA.commandQueue();
                q.loadCmds(owa_cmds);
            }
        }
        window['owa_cmds'] = q;
        window['owa_cmds'].process();
    }
})();

/* End of owa.tracker */