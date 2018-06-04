!function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 46);
}([ function(e, t, n) {
    var r = n(1);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e;
    };
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
    };
}, function(e, t, n) {
    var r = n(26)("wks"), o = n(17), i = n(4).Symbol, s = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e));
    }).store = r;
}, function(e, t, n) {
    var r = n(81), o = n(21), i = n(26)("metadata"), s = i.store || (i.store = new (n(63))()), u = function(e, t, n) {
        var o = s.get(e);
        if (!o) {
            if (!n) return;
            s.set(e, o = new r());
        }
        var i = o.get(t);
        if (!i) {
            if (!n) return;
            o.set(t, i = new r());
        }
        return i;
    };
    e.exports = {
        store: s,
        map: u,
        has: function(e, t, n) {
            var r = u(t, n, !1);
            return void 0 !== r && r.has(e);
        },
        get: function(e, t, n) {
            var r = u(t, n, !1);
            return void 0 === r ? void 0 : r.get(e);
        },
        set: function(e, t, n, r) {
            u(n, r, !0).set(e, t);
        },
        keys: function(e, t) {
            var n = u(e, t, !1), r = [];
            return n && n.forEach(function(e, t) {
                r.push(t);
            }), r;
        },
        key: function(e) {
            return void 0 === e || "symbol" == typeof e ? e : String(e);
        },
        exp: function(e) {
            o(o.S, "Reflect", e);
        }
    };
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t);
    };
}, function(e, t, n) {
    e.exports = !n(7)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    };
}, function(e, t, n) {
    var r = n(0), o = n(44), i = n(42), s = Object.defineProperty;
    t.f = n(6) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return s(e, t, n);
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e;
    };
}, function(e, t, n) {
    var r = n(1);
    e.exports = function(e, t) {
        if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e;
    };
}, function(e, t, n) {
    var r = n(35);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };

          case 2:
            return function(n, r) {
                return e.call(t, n, r);
            };

          case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    };
}, function(e, t, n) {
    var r = n(4), o = n(16), i = n(5), s = n(17)("src"), u = Function.toString, a = ("" + u).split("toString");
    n(12).inspectSource = function(e) {
        return u.call(e);
    }, (e.exports = function(e, t, n, u) {
        var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", t)), e[t] !== n && (c && (i(n, s) || o(n, s, e[t] ? "" + e[t] : a.join(String(t)))), 
        e === r ? e[t] = n : u ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)));
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[s] || u.call(this);
    });
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n);
}, function(e, t, n) {
    var r = n(17)("meta"), o = n(1), i = n(5), s = n(8).f, u = 0, a = Object.isExtensible || function() {
        return !0;
    }, c = !n(7)(function() {
        return a(Object.preventExtensions({}));
    }), l = function(e) {
        s(e, r, {
            value: {
                i: "O" + ++u,
                w: {}
            }
        });
    }, p = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!a(e)) return "F";
                if (!t) return "E";
                l(e);
            }
            return e[r].i;
        },
        getWeak: function(e, t) {
            if (!i(e, r)) {
                if (!a(e)) return !0;
                if (!t) return !1;
                l(e);
            }
            return e[r].w;
        },
        onFreeze: function(e) {
            return c && p.NEED && a(e) && !i(e, r) && l(e), e;
        }
    };
}, function(e, t, n) {
    var r = n(5), o = n(19), i = n(27)("IE_PROTO"), s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
    };
}, function(e, t, n) {
    var r = n(10), o = n(75), i = n(74), s = n(0), u = n(28), a = n(73), c = {}, l = {};
    (t = e.exports = function(e, t, n, p, f) {
        var d, h, y, v, m = f ? function() {
            return e;
        } : a(e), g = r(n, p, t ? 2 : 1), w = 0;
        if ("function" != typeof m) throw TypeError(e + " is not iterable!");
        if (i(m)) {
            for (d = u(e.length); d > w; w++) if ((v = t ? g(s(h = e[w])[0], h[1]) : g(e[w])) === c || v === l) return v;
        } else for (y = m.call(e); !(h = y.next()).done; ) if ((v = o(y, g, h.value, t)) === c || v === l) return v;
    }).BREAK = c, t.RETURN = l;
}, function(e, t, n) {
    var r = n(8), o = n(24);
    e.exports = n(6) ? function(e, t, n) {
        return r.f(e, t, o(1, n));
    } : function(e, t, n) {
        return e[t] = n, e;
    };
}, function(e, t) {
    var n = 0, r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
    };
}, function(e, t, n) {
    "use strict";
    var r = n(4), o = n(21), i = n(11), s = n(25), u = n(13), a = n(15), c = n(23), l = n(1), p = n(7), f = n(67), d = n(20), h = n(66);
    e.exports = function(e, t, n, y, v, m) {
        var g = r[e], w = g, _ = v ? "set" : "add", b = w && w.prototype, C = {}, D = function(e) {
            var t = b[e];
            i(b, e, "delete" == e ? function(e) {
                return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
            } : "has" == e ? function(e) {
                return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
            } : "get" == e ? function(e) {
                return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
            } : "add" == e ? function(e) {
                return t.call(this, 0 === e ? 0 : e), this;
            } : function(e, n) {
                return t.call(this, 0 === e ? 0 : e, n), this;
            });
        };
        if ("function" == typeof w && (m || b.forEach && !p(function() {
            new w().entries().next();
        }))) {
            var E = new w(), x = E[_](m ? {} : -0, 1) != E, A = p(function() {
                E.has(1);
            }), k = f(function(e) {
                new w(e);
            }), S = !m && p(function() {
                for (var e = new w(), t = 5; t--; ) e[_](t, t);
                return !e.has(-0);
            });
            k || ((w = t(function(t, n) {
                c(t, w, e);
                var r = h(new g(), t, w);
                return void 0 != n && a(n, v, r[_], r), r;
            })).prototype = b, b.constructor = w), (A || S) && (D("delete"), D("has"), v && D("get")), 
            (S || x) && D(_), m && b.clear && delete b.clear;
        } else w = y.getConstructor(t, e, v, _), s(w.prototype, n), u.NEED = !0;
        return d(w, e), C[e] = w, o(o.G + o.W + o.F * (w != g), C), m || y.setStrong(w, e, v), 
        w;
    };
}, function(e, t, n) {
    var r = n(39);
    e.exports = function(e) {
        return Object(r(e));
    };
}, function(e, t, n) {
    var r = n(8).f, o = n(5), i = n(2)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        });
    };
}, function(e, t, n) {
    var r = n(4), o = n(12), i = n(16), s = n(11), u = n(10), a = function(e, t, n) {
        var c, l, p, f, d = e & a.F, h = e & a.G, y = e & a.S, v = e & a.P, m = e & a.B, g = h ? r : y ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, w = h ? o : o[t] || (o[t] = {}), _ = w.prototype || (w.prototype = {});
        for (c in h && (n = t), n) p = ((l = !d && g && void 0 !== g[c]) ? g : n)[c], f = m && l ? u(p, r) : v && "function" == typeof p ? u(Function.call, p) : p, 
        g && s(g, c, p, e & a.U), w[c] != p && i(w, c, f), v && _[c] != p && (_[c] = p);
    };
    r.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, 
    e.exports = a;
}, function(e, t) {
    e.exports = {};
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e;
    };
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    };
}, function(e, t, n) {
    var r = n(11);
    e.exports = function(e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e;
    };
}, function(e, t, n) {
    var r = n(12), o = n(4), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: r.version,
        mode: n(37) ? "pure" : "global",
        copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)"
    });
}, function(e, t, n) {
    var r = n(26)("keys"), o = n(17);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e));
    };
}, function(e, t, n) {
    var r = n(38), o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0;
    };
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1);
    };
}, function(e, t, n) {
    var r = n(29);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e);
    };
}, function(e, t, n) {
    var r = n(30), o = n(39);
    e.exports = function(e) {
        return r(o(e));
    };
}, function(e, t) {
    function n(e) {
        return Promise.resolve().then(function() {
            var t = new Error('Cannot find module "' + e + '".');
            throw t.code = "MODULE_NOT_FOUND", t;
        });
    }
    n.keys = function() {
        return [];
    }, n.resolve = n, e.exports = n, n.id = 32;
}, function(e, t, n) {
    var r = n(10), o = n(30), i = n(19), s = n(28), u = n(62);
    e.exports = function(e, t) {
        var n = 1 == e, a = 2 == e, c = 3 == e, l = 4 == e, p = 6 == e, f = 5 == e || p, d = t || u;
        return function(t, u, h) {
            for (var y, v, m = i(t), g = o(m), w = r(u, h, 3), _ = s(g.length), b = 0, C = n ? d(t, _) : a ? d(t, 0) : void 0; _ > b; b++) if ((f || b in g) && (v = w(y = g[b], b, m), 
            e)) if (n) C[b] = v; else if (v) switch (e) {
              case 3:
                return !0;

              case 5:
                return y;

              case 6:
                return b;

              case 2:
                C.push(y);
            } else if (l) return !1;
            return p ? -1 : c || l ? l : C;
        };
    };
}, function(e, t) {
    t.f = {}.propertyIsEnumerable;
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
    };
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(e, t) {
    e.exports = !1;
}, function(e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
    };
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e;
    };
}, function(e, t, n) {
    var r = n(79), o = n(36);
    e.exports = Object.keys || function(e) {
        return r(e, o);
    };
}, function(e, t, n) {
    var r = n(0), o = n(80), i = n(36), s = n(27)("IE_PROTO"), u = function() {}, a = function() {
        var e, t = n(43)("iframe"), r = i.length;
        for (t.style.display = "none", n(76).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
        e.write("<script>document.F=Object<\/script>"), e.close(), a = e.F; r--; ) delete a.prototype[i[r]];
        return a();
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (u.prototype = r(e), n = new u(), u.prototype = null, n[s] = e) : n = a(), 
        void 0 === t ? n : o(n, t);
    };
}, function(e, t, n) {
    var r = n(1);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(e, t, n) {
    var r = n(1), o = n(4).document, i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {};
    };
}, function(e, t, n) {
    e.exports = !n(6) && !n(7)(function() {
        return 7 != Object.defineProperty(n(43)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(e, t, n) {
    "use strict";
    var r = n(8).f, o = n(41), i = n(25), s = n(10), u = n(23), a = n(15), c = n(71), l = n(69), p = n(68), f = n(6), d = n(13).fastKey, h = n(9), y = f ? "_s" : "size", v = function(e, t) {
        var n, r = d(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
    };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var l = e(function(e, r) {
                u(e, l, t, "_i"), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[y] = 0, 
                void 0 != r && a(r, n, e[c], e);
            });
            return i(l.prototype, {
                clear: function() {
                    for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), 
                    delete n[r.i];
                    e._f = e._l = void 0, e[y] = 0;
                },
                delete: function(e) {
                    var n = h(this, t), r = v(n, e);
                    if (r) {
                        var o = r.n, i = r.p;
                        delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), 
                        n._l == r && (n._l = i), n[y]--;
                    }
                    return !!r;
                },
                forEach: function(e) {
                    h(this, t);
                    for (var n, r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                },
                has: function(e) {
                    return !!v(h(this, t), e);
                }
            }), f && r(l.prototype, "size", {
                get: function() {
                    return h(this, t)[y];
                }
            }), l;
        },
        def: function(e, t, n) {
            var r, o, i = v(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = d(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = i), r && (r.n = i), e[y]++, "F" !== o && (e._i[o] = i)), e;
        },
        getEntry: v,
        setStrong: function(e, t, n) {
            c(e, t, function(e, n) {
                this._t = h(e, t), this._k = n, this._l = void 0;
            }, function() {
                for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [ t.k, t.v ]) : (this._t = void 0, 
                l(1));
            }, n ? "entries" : "values", !n, !0), p(t);
        }
    };
}, function(e, t, n) {
    "use strict";
    n.r(t), n(83);
    var r = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    function o(e, t) {
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n());
    }
    var i = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    };
    function s(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator], n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                };
            }
        };
    }
    function u(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), s = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return s;
    }
    function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
        return e;
    }
    function c(e) {
        return "function" == typeof e;
    }
    var l = !1, p = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
            e && new Error().stack, l = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return l;
        }
    };
    function f(e) {
        setTimeout(function() {
            throw e;
        });
    }
    var d = {
        closed: !0,
        next: function(e) {},
        error: function(e) {
            if (p.useDeprecatedSynchronousErrorHandling) throw e;
            f(e);
        },
        complete: function() {}
    }, h = Array.isArray || function(e) {
        return e && "number" == typeof e.length;
    };
    function y(e) {
        return null != e && "object" == typeof e;
    }
    var v, m = {
        e: {}
    };
    function g() {
        try {
            return v.apply(this, arguments);
        } catch (e) {
            return m.e = e, m;
        }
    }
    function w(e) {
        return v = e, g;
    }
    var _ = function(e) {
        function t(n) {
            var r = e.call(this, n ? n.length + " errors occurred during unsubscription:\n  " + n.map(function(e, t) {
                return t + 1 + ") " + e.toString();
            }).join("\n  ") : "") || this;
            return r.errors = n, r.name = "UnsubscriptionError", Object.setPrototypeOf(r, t.prototype), 
            r;
        }
        return o(t, e), t;
    }(Error), b = function() {
        function e(e) {
            this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, 
            e && (this._unsubscribe = e);
        }
        var t;
        return e.prototype.unsubscribe = function() {
            var e, t = !1;
            if (!this.closed) {
                var n = this._parent, r = this._parents, o = this._unsubscribe, i = this._subscriptions;
                this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                for (var s = -1, u = r ? r.length : 0; n; ) n.remove(this), n = ++s < u && r[s] || null;
                if (c(o) && w(o).call(this) === m && (t = !0, e = e || (m.e instanceof _ ? C(m.e.errors) : [ m.e ])), 
                h(i)) for (s = -1, u = i.length; ++s < u; ) {
                    var a = i[s];
                    if (y(a) && w(a.unsubscribe).call(a) === m) {
                        t = !0, e = e || [];
                        var l = m.e;
                        l instanceof _ ? e = e.concat(C(l.errors)) : e.push(l);
                    }
                }
                if (t) throw new _(e);
            }
        }, e.prototype.add = function(t) {
            if (!t || t === e.EMPTY) return e.EMPTY;
            if (t === this) return this;
            var n = t;
            switch (typeof t) {
              case "function":
                n = new e(t);

              case "object":
                if (n.closed || "function" != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if ("function" != typeof n._addParent) {
                    var r = n;
                    (n = new e())._subscriptions = [ r ];
                }
                break;

              default:
                throw new Error("unrecognized teardown " + t + " added to Subscription.");
            }
            return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), 
            n;
        }, e.prototype.remove = function(e) {
            var t = this._subscriptions;
            if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
            }
        }, e.prototype._addParent = function(e) {
            var t = this._parent, n = this._parents;
            t && t !== e ? n ? -1 === n.indexOf(e) && n.push(e) : this._parents = [ e ] : this._parent = e;
        }, e.EMPTY = ((t = new e()).closed = !0, t), e;
    }();
    function C(e) {
        return e.reduce(function(e, t) {
            return e.concat(t instanceof _ ? t.errors : t);
        }, []);
    }
    var D = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber", E = function(e) {
        function t(t, n, r) {
            var o, i = e.call(this) || this;
            switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, 
            i.isStopped = !1, arguments.length) {
              case 0:
                i.destination = d;
                break;

              case 1:
                if (!t) {
                    i.destination = d;
                    break;
                }
                if ("object" == typeof t) {
                    if ((o = t) instanceof E || "syncErrorThrowable" in o && o[D]) {
                        var s = t[D]();
                        i.syncErrorThrowable = s.syncErrorThrowable, i.destination = s, s.add(i);
                    } else i.syncErrorThrowable = !0, i.destination = new x(i, t);
                    break;
                }

              default:
                i.syncErrorThrowable = !0, i.destination = new x(i, t, n, r);
            }
            return i;
        }
        return o(t, e), t.prototype[D] = function() {
            return this;
        }, t.create = function(e, n, r) {
            var o = new t(e, n, r);
            return o.syncErrorThrowable = !1, o;
        }, t.prototype.next = function(e) {
            this.isStopped || this._next(e);
        }, t.prototype.error = function(e) {
            this.isStopped || (this.isStopped = !0, this._error(e));
        }, t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete());
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this));
        }, t.prototype._next = function(e) {
            this.destination.next(e);
        }, t.prototype._error = function(e) {
            this.destination.error(e), this.unsubscribe();
        }, t.prototype._complete = function() {
            this.destination.complete(), this.unsubscribe();
        }, t.prototype._unsubscribeAndRecycle = function() {
            var e = this._parent, t = this._parents;
            return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, 
            this.isStopped = !1, this._parent = e, this._parents = t, this;
        }, t;
    }(b), x = function(e) {
        function t(t, n, r, o) {
            var i, s = e.call(this) || this;
            s._parentSubscriber = t;
            var u = s;
            return c(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== d && (c((u = Object.create(n)).unsubscribe) && s.add(u.unsubscribe.bind(u)), 
            u.unsubscribe = s.unsubscribe.bind(s))), s._context = u, s._next = i, s._error = r, 
            s._complete = o, s;
        }
        return o(t, e), t.prototype.next = function(e) {
            if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                p.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e);
            }
        }, t.prototype.error = function(e) {
            if (!this.isStopped) {
                var t = this._parentSubscriber, n = p.useDeprecatedSynchronousErrorHandling;
                if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), 
                this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe()); else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, 
                t.syncErrorThrown = !0) : f(e), this.unsubscribe(); else {
                    if (this.unsubscribe(), n) throw e;
                    f(e);
                }
            }
        }, t.prototype.complete = function() {
            var e = this;
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                    var n = function() {
                        return e._complete.call(e._context);
                    };
                    p.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), 
                    this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
            }
        }, t.prototype.__tryOrUnsub = function(e, t) {
            try {
                e.call(this._context, t);
            } catch (e) {
                if (this.unsubscribe(), p.useDeprecatedSynchronousErrorHandling) throw e;
                f(e);
            }
        }, t.prototype.__tryOrSetError = function(e, t, n) {
            if (!p.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
                t.call(this._context, n);
            } catch (t) {
                return p.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, 
                !0) : (f(t), !0);
            }
            return !1;
        }, t.prototype._unsubscribe = function() {
            var e = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, e.unsubscribe();
        }, t;
    }(E), A = "function" == typeof Symbol && Symbol.observable || "@@observable";
    function k() {}
    var S = function() {
        function e(e) {
            this._isScalar = !1, e && (this._subscribe = e);
        }
        return e.prototype.lift = function(t) {
            var n = new e();
            return n.source = this, n.operator = t, n;
        }, e.prototype.subscribe = function(e, t, n) {
            var r = this.operator, o = function(e, t, n) {
                if (e) {
                    if (e instanceof E) return e;
                    if (e[D]) return e[D]();
                }
                return e || t || n ? new E(e, t, n) : new E(d);
            }(e, t, n);
            if (r ? r.call(o, this.source) : o.add(this.source || !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), 
            p.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, 
            o.syncErrorThrown)) throw o.syncErrorValue;
            return o;
        }, e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e);
            } catch (t) {
                p.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), 
                e.error(t);
            }
        }, e.prototype.forEach = function(e, t) {
            var n = this;
            return new (t = O(t))(function(t, r) {
                var o;
                o = n.subscribe(function(t) {
                    try {
                        e(t);
                    } catch (e) {
                        r(e), o && o.unsubscribe();
                    }
                }, r, t);
            });
        }, e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e);
        }, e.prototype[A] = function() {
            return this;
        }, e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return 0 === e.length ? this : ((n = e) ? 1 === n.length ? n[0] : function(e) {
                return n.reduce(function(e, t) {
                    return t(e);
                }, e);
            } : k)(this);
            var n;
        }, e.prototype.toPromise = function(e) {
            var t = this;
            return new (e = O(e))(function(e, n) {
                var r;
                t.subscribe(function(e) {
                    return r = e;
                }, function(e) {
                    return n(e);
                }, function() {
                    return e(r);
                });
            });
        }, e.create = function(t) {
            return new e(t);
        }, e;
    }();
    function O(e) {
        if (e || (e = p.Promise || Promise), !e) throw new Error("no Promise impl found");
        return e;
    }
    function F(e) {
        return e && "function" == typeof e.schedule;
    }
    var T = function(e) {
        function t(t, n, r) {
            var o = e.call(this) || this;
            return o.parent = t, o.outerValue = n, o.outerIndex = r, o.index = 0, o;
        }
        return o(t, e), t.prototype._next = function(e) {
            this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
        }, t.prototype._error = function(e) {
            this.parent.notifyError(e, this), this.unsubscribe();
        }, t.prototype._complete = function() {
            this.parent.notifyComplete(this), this.unsubscribe();
        }, t;
    }(E), P = function(e) {
        return function(t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.closed || t.complete();
        };
    }, N = function(e) {
        return function(t) {
            return e.then(function(e) {
                t.closed || (t.next(e), t.complete());
            }, function(e) {
                return t.error(e);
            }).then(null, f), t;
        };
    }, M = function() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }(), I = function(e) {
        return function(t) {
            for (var n = e[M](); ;) {
                var r = n.next();
                if (r.done) {
                    t.complete();
                    break;
                }
                if (t.next(r.value), t.closed) break;
            }
            return "function" == typeof n.return && t.add(function() {
                n.return && n.return();
            }), t;
        };
    }, R = function(e) {
        return function(t) {
            var n = e[A]();
            if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return n.subscribe(t);
        };
    }, j = function(e) {
        return e && "number" == typeof e.length && "function" != typeof e;
    };
    function B(e) {
        return e && "function" != typeof e.subscribe && "function" == typeof e.then;
    }
    var V = function(e) {
        if (e instanceof S) return function(t) {
            return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        };
        if (j(e)) return P(e);
        if (B(e)) return N(e);
        if (e && "function" == typeof e[M]) return I(e);
        if (e && "function" == typeof e[A]) return R(e);
        var t = y(e) ? "an invalid object" : "'" + e + "'";
        throw new TypeError("You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
    };
    function L(e, t, n, r) {
        var o = new T(e, n, r);
        return V(t)(o);
    }
    var z = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
        }, t.prototype.notifyError = function(e, t) {
            this.destination.error(e);
        }, t.prototype.notifyComplete = function(e) {
            this.destination.complete();
        }, t;
    }(E);
    function H(e, t) {
        return function(n) {
            if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new U(e, t));
        };
    }
    var U = function() {
        function e(e, t) {
            this.project = e, this.thisArg = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new W(e, this.project, this.thisArg));
        }, e;
    }(), W = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.project = n, o.count = 0, o.thisArg = r || o, o;
        }
        return o(t, e), t.prototype._next = function(e) {
            var t;
            try {
                t = this.project.call(this.thisArg, e, this.count++);
            } catch (e) {
                return void this.destination.error(e);
            }
            this.destination.next(t);
        }, t;
    }(E);
    function Z(e, t) {
        return new S(t ? function(n) {
            var r = new b(), o = 0;
            return r.add(t.schedule(function() {
                o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete();
            })), r;
        } : P(e));
    }
    function K(e, t, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function(r) {
            return r.pipe(K(function(n, r) {
                return (o = e(n, r), o instanceof S ? o : new S(V(o))).pipe(H(function(e, o) {
                    return t(n, e, r, o);
                }));
                var o;
            }, n));
        } : ("number" == typeof t && (n = t), function(t) {
            return t.lift(new G(e, n));
        });
    }
    var G = function() {
        function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new q(e, this.project, this.concurrent));
        }, e;
    }(), q = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = e.call(this, t) || this;
            return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, 
            o.index = 0, o;
        }
        return o(t, e), t.prototype._next = function(e) {
            this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
        }, t.prototype._tryNext = function(e) {
            var t, n = this.index++;
            try {
                t = this.project(e, n);
            } catch (e) {
                return void this.destination.error(e);
            }
            this.active++, this._innerSub(t, e, n);
        }, t.prototype._innerSub = function(e, t, n) {
            this.add(L(this, e, t, n));
        }, t.prototype._complete = function() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete();
        }, t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
        }, t.prototype.notifyComplete = function(e) {
            var t = this.buffer;
            this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
        }, t;
    }(z);
    function $(e) {
        return e;
    }
    var Y = function(e) {
        function t() {
            var n = e.call(this, "object unsubscribed") || this;
            return n.name = "ObjectUnsubscribedError", Object.setPrototypeOf(n, t.prototype), 
            n;
        }
        return o(t, e), t;
    }(Error), J = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.subject = t, r.subscriber = n, r.closed = !1, r;
        }
        return o(t, e), t.prototype.unsubscribe = function() {
            if (!this.closed) {
                this.closed = !0;
                var e = this.subject, t = e.observers;
                if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                    var n = t.indexOf(this.subscriber);
                    -1 !== n && t.splice(n, 1);
                }
            }
        }, t;
    }(b), X = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.destination = t, n;
        }
        return o(t, e), t;
    }(E), Q = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, 
            t;
        }
        return o(t, e), t.prototype[D] = function() {
            return new X(this);
        }, t.prototype.lift = function(e) {
            var t = new ee(this, this);
            return t.operator = e, t;
        }, t.prototype.next = function(e) {
            if (this.closed) throw new Y();
            if (!this.isStopped) for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e);
        }, t.prototype.error = function(e) {
            if (this.closed) throw new Y();
            this.hasError = !0, this.thrownError = e, this.isStopped = !0;
            for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
            this.observers.length = 0;
        }, t.prototype.complete = function() {
            if (this.closed) throw new Y();
            this.isStopped = !0;
            for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
        }, t.prototype.unsubscribe = function() {
            this.isStopped = !0, this.closed = !0, this.observers = null;
        }, t.prototype._trySubscribe = function(t) {
            if (this.closed) throw new Y();
            return e.prototype._trySubscribe.call(this, t);
        }, t.prototype._subscribe = function(e) {
            if (this.closed) throw new Y();
            return this.hasError ? (e.error(this.thrownError), b.EMPTY) : this.isStopped ? (e.complete(), 
            b.EMPTY) : (this.observers.push(e), new J(this, e));
        }, t.prototype.asObservable = function() {
            var e = new S();
            return e.source = this, e;
        }, t.create = function(e, t) {
            return new ee(e, t);
        }, t;
    }(S), ee = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.destination = t, r.source = n, r;
        }
        return o(t, e), t.prototype.next = function(e) {
            var t = this.destination;
            t && t.next && t.next(e);
        }, t.prototype.error = function(e) {
            var t = this.destination;
            t && t.error && this.destination.error(e);
        }, t.prototype.complete = function() {
            var e = this.destination;
            e && e.complete && this.destination.complete();
        }, t.prototype._subscribe = function(e) {
            return this.source ? this.source.subscribe(e) : b.EMPTY;
        }, t;
    }(Q);
    function te() {
        return function(e) {
            return e.lift(new ne(e));
        };
    }
    var ne = function() {
        function e(e) {
            this.connectable = e;
        }
        return e.prototype.call = function(e, t) {
            var n = this.connectable;
            n._refCount++;
            var r = new re(e, n), o = t.subscribe(r);
            return r.closed || (r.connection = n.connect()), o;
        }, e;
    }(), re = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.connectable = n, r;
        }
        return o(t, e), t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._refCount;
                if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
                    var n = this.connection, r = e._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe();
                }
            } else this.connection = null;
        }, t;
    }(E), oe = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, 
            r;
        }
        return o(t, e), t.prototype._subscribe = function(e) {
            return this.getSubject().subscribe(e);
        }, t.prototype.getSubject = function() {
            var e = this._subject;
            return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject;
        }, t.prototype.connect = function() {
            var e = this._connection;
            return e || (this._isComplete = !1, (e = this._connection = new b()).add(this.source.subscribe(new se(this.getSubject(), this))), 
            e.closed ? (this._connection = null, e = b.EMPTY) : this._connection = e), e;
        }, t.prototype.refCount = function() {
            return te()(this);
        }, t;
    }(S).prototype, ie = {
        operator: {
            value: null
        },
        _refCount: {
            value: 0,
            writable: !0
        },
        _subject: {
            value: null,
            writable: !0
        },
        _connection: {
            value: null,
            writable: !0
        },
        _subscribe: {
            value: oe._subscribe
        },
        _isComplete: {
            value: oe._isComplete,
            writable: !0
        },
        getSubject: {
            value: oe.getSubject
        },
        connect: {
            value: oe.connect
        },
        refCount: {
            value: oe.refCount
        }
    }, se = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.connectable = n, r;
        }
        return o(t, e), t.prototype._error = function(t) {
            this._unsubscribe(), e.prototype._error.call(this, t);
        }, t.prototype._complete = function() {
            this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this);
        }, t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._connection;
                e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe();
            }
        }, t;
    }(X);
    function ue() {
        return new Q();
    }
    function ae(e) {
        return {
            providedIn: e.providedIn || null,
            factory: e.factory,
            value: void 0
        };
    }
    var ce = function() {
        function e(e, t) {
            this._desc = e, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== t ? ae({
                providedIn: t.providedIn || "root",
                factory: t.factory
            }) : void 0;
        }
        return e.prototype.toString = function() {
            return "InjectionToken " + this._desc;
        }, e;
    }(), le = "__annotations__", pe = "__parameters__", fe = "__prop__metadata__";
    function de(e, t, n, r, o) {
        var i = he(t);
        function s() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (this instanceof s) return i.call.apply(i, a([ this ], e)), this;
            var n, u = new ((n = s).bind.apply(n, a([ void 0 ], e)))(), c = function(t) {
                return o && o.apply(void 0, a([ t ], e)), (t.hasOwnProperty(le) ? t[le] : Object.defineProperty(t, le, {
                    value: []
                })[le]).push(u), t;
            };
            return r && r(c), c;
        }
        return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, 
        s.annotationCls = s, s;
    }
    function he(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            if (e) {
                var r = e.apply(void 0, a(t));
                for (var o in r) this[o] = r[o];
            }
        };
    }
    function ye(e, t, n) {
        var r = he(t);
        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (this instanceof o) return r.apply(this, e), this;
            var n, i = new ((n = o).bind.apply(n, a([ void 0 ], e)))();
            return s.annotation = i, s;
            function s(e, t, n) {
                for (var r = e.hasOwnProperty(pe) ? e[pe] : Object.defineProperty(e, pe, {
                    value: []
                })[pe]; r.length <= n; ) r.push(null);
                return (r[n] = r[n] || []).push(i), e;
            }
        }
        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, 
        o.annotationCls = o, o;
    }
    function ve(e, t, n) {
        var r = he(t);
        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (this instanceof o) return r.apply(this, e), this;
            var n, i = new ((n = o).bind.apply(n, a([ void 0 ], e)))();
            return function(e, t) {
                var n = e.constructor, r = n.hasOwnProperty(fe) ? n[fe] : Object.defineProperty(n, fe, {
                    value: {}
                })[fe];
                r[t] = r.hasOwnProperty(t) && r[t] || [], r[t].unshift(i);
            };
        }
        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, 
        o.annotationCls = o, o;
    }
    new ce("AnalyzeForEntryComponents");
    var me, ge, we = ye("Attribute", function(e) {
        return {
            attributeName: e
        };
    }), _e = function() {};
    ve("ContentChildren", function(e, t) {
        return void 0 === t && (t = {}), i({
            selector: e,
            first: !1,
            isViewQuery: !1,
            descendants: !1
        }, t);
    }, _e), ve("ContentChild", function(e, t) {
        return void 0 === t && (t = {}), i({
            selector: e,
            first: !0,
            isViewQuery: !1,
            descendants: !0
        }, t);
    }, _e), ve("ViewChildren", function(e, t) {
        return void 0 === t && (t = {}), i({
            selector: e,
            first: !1,
            isViewQuery: !0,
            descendants: !0
        }, t);
    }, _e), ve("ViewChild", function(e, t) {
        return i({
            selector: e,
            first: !0,
            isViewQuery: !0,
            descendants: !0
        }, t);
    }, _e), function(e) {
        e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default";
    }(me || (me = {})), function(e) {
        e[e.CheckOnce = 0] = "CheckOnce", e[e.Checked = 1] = "Checked", e[e.CheckAlways = 2] = "CheckAlways", 
        e[e.Detached = 3] = "Detached", e[e.Errored = 4] = "Errored", e[e.Destroyed = 5] = "Destroyed";
    }(ge || (ge = {}));
    var be = de("Directive", function(e) {
        return void 0 === e && (e = {}), e;
    }), Ce = (de("Component", function(e) {
        return void 0 === e && (e = {}), i({
            changeDetection: me.Default
        }, e);
    }, be), de("Pipe", function(e) {
        return i({
            pure: !0
        }, e);
    })), De = ve("Input", function(e) {
        return {
            bindingPropertyName: e
        };
    }), Ee = (ve("Output", function(e) {
        return {
            bindingPropertyName: e
        };
    }), ve("HostBinding", function(e) {
        return {
            hostPropertyName: e
        };
    }), ve("HostListener", function(e, t) {
        return {
            eventName: e,
            args: t
        };
    }), Function);
    function xe(e) {
        return "function" == typeof e;
    }
    var Ae = "undefined" != typeof window && window, ke = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, Se = "undefined" != typeof global && global, Oe = Ae || Se || ke, Fe = Promise.resolve(0), Te = null;
    function Pe() {
        if (!Te) {
            var e = Oe.Symbol;
            if (e && e.iterator) Te = e.iterator; else for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
                var r = t[n];
                "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Te = r);
            }
        }
        return Te;
    }
    function Ne(e) {
        "undefined" == typeof Zone ? Fe.then(function() {
            e && e.apply(null, null);
        }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
    }
    function Me(e, t) {
        return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t);
    }
    function Ie(e) {
        if ("string" == typeof e) return e;
        if (e instanceof Array) return "[" + e.map(Ie).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "" + e.overriddenName;
        if (e.name) return "" + e.name;
        var t = e.toString();
        if (null == t) return "" + t;
        var n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
    }
    var Re = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/, je = /^class\s+[A-Za-z\d$_]*\s*extends\s+[A-Za-z\d$_]+\s*{/, Be = /^class\s+[A-Za-z\d$_]*\s*extends\s+[A-Za-z\d$_]+\s*{[\s\S]*constructor\s*\(/, Ve = function() {
        function e(e) {
            this._reflect = e || Oe.Reflect;
        }
        return e.prototype.isReflectionEnabled = function() {
            return !0;
        }, e.prototype.factory = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new (e.bind.apply(e, a([ void 0 ], t)))();
            };
        }, e.prototype._zipTypesAndAnnotations = function(e, t) {
            var n;
            n = void 0 === e ? new Array(t.length) : new Array(e.length);
            for (var r = 0; r < n.length; r++) void 0 === e ? n[r] = [] : e[r] != Object ? n[r] = [ e[r] ] : n[r] = [], 
            t && null != t[r] && (n[r] = n[r].concat(t[r]));
            return n;
        }, e.prototype._ownParameters = function(e, t) {
            var n = e.toString();
            if (Re.exec(n) || je.exec(n) && !Be.exec(n)) return null;
            if (e.parameters && e.parameters !== t.parameters) return e.parameters;
            var r = e.ctorParameters;
            if (r && r !== t.ctorParameters) {
                var o = "function" == typeof r ? r() : r, i = o.map(function(e) {
                    return e && e.type;
                }), s = o.map(function(e) {
                    return e && Le(e.decorators);
                });
                return this._zipTypesAndAnnotations(i, s);
            }
            var u = e.hasOwnProperty(pe) && e[pe], a = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", e);
            return a || u ? this._zipTypesAndAnnotations(a, u) : new Array(e.length).fill(void 0);
        }, e.prototype.parameters = function(e) {
            if (!xe(e)) return [];
            var t = ze(e), n = this._ownParameters(e, t);
            return n || t === Object || (n = this.parameters(t)), n || [];
        }, e.prototype._ownAnnotations = function(e, t) {
            if (e.annotations && e.annotations !== t.annotations) {
                var n = e.annotations;
                return "function" == typeof n && n.annotations && (n = n.annotations), n;
            }
            return e.decorators && e.decorators !== t.decorators ? Le(e.decorators) : e.hasOwnProperty(le) ? e[le] : null;
        }, e.prototype.annotations = function(e) {
            if (!xe(e)) return [];
            var t = ze(e), n = this._ownAnnotations(e, t) || [];
            return (t !== Object ? this.annotations(t) : []).concat(n);
        }, e.prototype._ownPropMetadata = function(e, t) {
            if (e.propMetadata && e.propMetadata !== t.propMetadata) {
                var n = e.propMetadata;
                return "function" == typeof n && n.propMetadata && (n = n.propMetadata), n;
            }
            if (e.propDecorators && e.propDecorators !== t.propDecorators) {
                var r = e.propDecorators, o = {};
                return Object.keys(r).forEach(function(e) {
                    o[e] = Le(r[e]);
                }), o;
            }
            return e.hasOwnProperty(fe) ? e[fe] : null;
        }, e.prototype.propMetadata = function(e) {
            if (!xe(e)) return {};
            var t = ze(e), n = {};
            if (t !== Object) {
                var r = this.propMetadata(t);
                Object.keys(r).forEach(function(e) {
                    n[e] = r[e];
                });
            }
            var o = this._ownPropMetadata(e, t);
            return o && Object.keys(o).forEach(function(e) {
                var t = [];
                n.hasOwnProperty(e) && t.push.apply(t, a(n[e])), t.push.apply(t, a(o[e])), n[e] = t;
            }), n;
        }, e.prototype.hasLifecycleHook = function(e, t) {
            return e instanceof Ee && t in e.prototype;
        }, e.prototype.guards = function(e) {
            return {};
        }, e.prototype.getter = function(e) {
            return new Function("o", "return o." + e + ";");
        }, e.prototype.setter = function(e) {
            return new Function("o", "v", "return o." + e + " = v;");
        }, e.prototype.method = function(e) {
            return new Function("o", "args", "if (!o." + e + ") throw new Error('\"" + e + "\" is undefined');\n        return o." + e + ".apply(o, args);");
        }, e.prototype.importUri = function(e) {
            return "object" == typeof e && e.filePath ? e.filePath : "./" + Ie(e);
        }, e.prototype.resourceUri = function(e) {
            return "./" + Ie(e);
        }, e.prototype.resolveIdentifier = function(e, t, n, r) {
            return r;
        }, e.prototype.resolveEnum = function(e, t) {
            return e[t];
        }, e;
    }();
    function Le(e) {
        return e ? e.map(function(e) {
            var t = e.type.annotationCls, n = e.args ? e.args : [];
            return new (t.bind.apply(t, a([ void 0 ], n)))();
        }) : [];
    }
    function ze(e) {
        var t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
        return (t ? t.constructor : null) || Object;
    }
    function He(e) {
        return e.__forward_ref__ = He, e.toString = function() {
            return Ie(this());
        }, e;
    }
    function Ue(e) {
        return "function" == typeof e && e.hasOwnProperty("__forward_ref__") && e.__forward_ref__ === He ? e() : e;
    }
    var We = ye("Inject", function(e) {
        return {
            token: e
        };
    }), Ze = ye("Optional"), Ke = ye("Self"), Ge = ye("SkipSelf"), qe = ye("Host"), $e = "__source", Ye = new Object(), Je = Ye, Xe = new ce("INJECTOR"), Qe = function() {
        function e() {}
        return e.prototype.get = function(e, t) {
            if (void 0 === t && (t = Ye), t === Ye) throw new Error("NullInjectorError: No provider for " + Ie(e) + "!");
            return t;
        }, e;
    }(), et = function() {
        function e() {}
        return e.create = function(e, t) {
            return Array.isArray(e) ? new lt(e, t) : new lt(e.providers, e.parent, e.name || null);
        }, e.THROW_IF_NOT_FOUND = Ye, e.NULL = new Qe(), e.ngInjectableDef = ae({
            providedIn: "any",
            factory: function() {
                return vt(Xe);
            }
        }), e;
    }(), tt = function(e) {
        return e;
    }, nt = [], rt = tt, ot = function() {
        return Array.prototype.slice.call(arguments);
    }, it = {}, st = function(e) {
        for (var t in e) if (e[t] === it) return t;
        throw Error("!prop");
    }({
        provide: String,
        useValue: it
    }), ut = et.NULL, at = /\n/gm, ct = "\u0275", lt = function() {
        function e(e, t, n) {
            void 0 === t && (t = ut), void 0 === n && (n = null), this.parent = t, this.source = n;
            var r = this._records = new Map();
            r.set(et, {
                token: et,
                fn: tt,
                deps: nt,
                value: this,
                useNew: !1
            }), r.set(Xe, {
                token: Xe,
                fn: tt,
                deps: nt,
                value: this,
                useNew: !1
            }), function e(t, n) {
                if (n) if ((n = Ue(n)) instanceof Array) for (var r = 0; r < n.length; r++) e(t, n[r]); else {
                    if ("function" == typeof n) throw dt("Function/Class not supported", n);
                    if (!n || "object" != typeof n || !n.provide) throw dt("Unexpected provider", n);
                    var o = Ue(n.provide), i = function(e) {
                        var t = function(e) {
                            var t = nt, n = e.deps;
                            if (n && n.length) {
                                t = [];
                                for (var r = 0; r < n.length; r++) {
                                    var o = 6;
                                    if ((a = Ue(n[r])) instanceof Array) for (var i = 0, s = a; i < s.length; i++) {
                                        var u = s[i];
                                        u instanceof Ze || u == Ze ? o |= 1 : u instanceof Ge || u == Ge ? o &= -3 : u instanceof Ke || u == Ke ? o &= -5 : a = u instanceof We ? u.token : Ue(u);
                                    }
                                    t.push({
                                        token: a,
                                        options: o
                                    });
                                }
                            } else if (e.useExisting) {
                                var a;
                                t = [ {
                                    token: a = Ue(e.useExisting),
                                    options: 6
                                } ];
                            } else if (!(n || st in e)) throw dt("'deps' required", e);
                            return t;
                        }(e), n = tt, r = nt, o = !1, i = Ue(e.provide);
                        if (st in e) r = e.useValue; else if (e.useFactory) n = e.useFactory; else if (e.useExisting) ; else if (e.useClass) o = !0, 
                        n = Ue(e.useClass); else {
                            if ("function" != typeof i) throw dt("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                            o = !0, n = i;
                        }
                        return {
                            deps: t,
                            fn: n,
                            useNew: o,
                            value: r
                        };
                    }(n);
                    if (!0 === n.multi) {
                        var s = t.get(o);
                        if (s) {
                            if (s.fn !== ot) throw pt(o);
                        } else t.set(o, s = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: ot,
                            value: nt
                        });
                        o = n, s.deps.push({
                            token: o,
                            options: 6
                        });
                    }
                    var u = t.get(o);
                    if (u && u.fn == ot) throw pt(o);
                    t.set(o, i);
                }
            }(r, e);
        }
        return e.prototype.get = function(e, t, n) {
            void 0 === n && (n = 0);
            var r = this._records.get(e);
            try {
                return function e(t, n, r, o, i, s) {
                    try {
                        return function(t, n, r, o, i, s) {
                            var u, c;
                            if (!n || 4 & s) 2 & s || (u = o.get(t, i, 0)); else {
                                if ((u = n.value) == rt) throw Error(ct + "Circular dependency");
                                if (u === nt) {
                                    n.value = rt;
                                    var l = n.useNew, p = n.fn, f = n.deps, d = nt;
                                    if (f.length) {
                                        d = [];
                                        for (var h = 0; h < f.length; h++) {
                                            var y = f[h], v = y.options, m = 2 & v ? r.get(y.token) : void 0;
                                            d.push(e(y.token, m, r, m || 4 & v ? o : ut, 1 & v ? null : et.THROW_IF_NOT_FOUND, 0));
                                        }
                                    }
                                    n.value = u = l ? new ((c = p).bind.apply(c, a([ void 0 ], d)))() : p.apply(void 0, d);
                                }
                            }
                            return u;
                        }(t, n, r, o, i, s);
                    } catch (e) {
                        throw e instanceof Error || (e = new Error(e)), (e.ngTempTokenPath = e.ngTempTokenPath || []).unshift(t), 
                        n && n.value == rt && (n.value = nt), e;
                    }
                }(e, r, this._records, this.parent, t, n);
            } catch (t) {
                var o = t.ngTempTokenPath;
                throw e[$e] && o.unshift(e[$e]), t.message = ft("\n" + t.message, o, this.source), 
                t.ngTokenPath = o, t.ngTempTokenPath = null, t;
            }
        }, e.prototype.toString = function() {
            var e = [];
            return this._records.forEach(function(t, n) {
                return e.push(Ie(n));
            }), "StaticInjector[" + e.join(", ") + "]";
        }, e;
    }();
    function pt(e) {
        return dt("Cannot mix multi providers and regular providers", e);
    }
    function ft(e, t, n) {
        void 0 === n && (n = null), e = e && "\n" === e.charAt(0) && e.charAt(1) == ct ? e.substr(2) : e;
        var r = Ie(t);
        if (t instanceof Array) r = t.map(Ie).join(" -> "); else if ("object" == typeof t) {
            var o = [];
            for (var i in t) if (t.hasOwnProperty(i)) {
                var s = t[i];
                o.push(i + ":" + ("string" == typeof s ? JSON.stringify(s) : Ie(s)));
            }
            r = "{" + o.join(", ") + "}";
        }
        return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + e.replace(at, "\n  ");
    }
    function dt(e, t) {
        return new Error(ft(e, t));
    }
    var ht = void 0;
    function yt(e) {
        var t = ht;
        return ht = e, t;
    }
    function vt(e, t) {
        if (void 0 === t && (t = 0), void 0 === ht) throw new Error("inject() must be called from an injection context");
        if (null === ht) {
            var n = e.ngInjectableDef;
            if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
            throw new Error("Injector: NOT_FOUND [" + Ie(e) + "]");
        }
        return ht.get(e, 8 & t ? null : void 0, t);
    }
    function mt(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            if (Array.isArray(r)) {
                if (0 === r.length) throw new Error("Arguments array must have arguments.");
                for (var o = void 0, i = 0, s = 0; s < r.length; s++) {
                    var u = r[s];
                    u instanceof Ze || "Optional" === u.__proto__.ngMetadataName ? i |= 8 : u instanceof Ge || "SkipSelf" === u.__proto__.ngMetadataName ? i |= 4 : u instanceof Ke || "Self" === u.__proto__.ngMetadataName ? i |= 2 : o = u instanceof We ? u.token : u;
                }
                t.push(vt(o, i));
            } else t.push(vt(r));
        }
        return t;
    }
    var gt = {}, wt = function(e, t) {
        for (var n in e) if (e[n] === t) return n;
        throw Error("Could not find renamed property on target object.");
    }({
        provide: String,
        useValue: gt
    }, gt), _t = [];
    function bt(e, t) {
        if (!t) {
            var n = (c = new Ve()).parameters(e);
            return function() {
                return new (e.bind.apply(e, a([ void 0 ], mt(n))))();
            };
        }
        if (wt in t) {
            var r = t;
            return function() {
                return r.useValue;
            };
        }
        if (t.useExisting) {
            var o = t;
            return function() {
                return vt(o.useExisting);
            };
        }
        if (t.useFactory) {
            var i = t;
            return function() {
                return i.useFactory.apply(i, a(mt(i.deps || _t)));
            };
        }
        if (t.useClass) {
            var s = t, u = t.deps;
            if (!u) {
                var c = new Ve();
                u = c.parameters(e);
            }
            return function() {
                return new ((e = s.useClass).bind.apply(e, a([ void 0 ], mt(u))))();
                var e;
            };
        }
        var l = t.deps;
        return l || (c = new Ve(), l = c.parameters(e)), function() {
            return new (e.bind.apply(e, a([ void 0 ], mt(l))))();
        };
    }
    var Ct, Dt = de("Injectable", void 0, void 0, void 0, function(e, t) {
        t && void 0 !== t.providedIn && void 0 === e.ngInjectableDef && (e.ngInjectableDef = ae({
            providedIn: t.providedIn,
            factory: bt(e, t)
        }));
    }), Et = de("NgModule", function(e) {
        return e;
    }, void 0, void 0, function(e, t) {
        var n, r = t && t.imports || [];
        t && t.exports && (r = a(r, [ t.exports ])), e.ngInjectorDef = {
            factory: (n = {
                factory: bt(e, {
                    useClass: e
                }),
                providers: t && t.providers,
                imports: r
            }).factory,
            providers: n.providers || [],
            imports: n.imports || []
        };
    });
    !function(e) {
        e[e.Emulated = 0] = "Emulated", e[e.Native = 1] = "Native", e[e.None = 2] = "None";
    }(Ct || (Ct = {}));
    var xt = function(e) {
        this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".");
    }, At = new xt("6.0.3"), kt = "ngDebugContext", St = "ngOriginalError", Ot = "ngErrorLogger";
    function Ft(e) {
        return e[kt];
    }
    function Tt(e) {
        return e[St];
    }
    function Pt(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        e.error.apply(e, a(t));
    }
    var Nt = function() {
        function e() {
            this._console = console;
        }
        return e.prototype.handleError = function(e) {
            var t = this._findOriginalError(e), n = this._findContext(e), r = function(e) {
                return e[Ot] || Pt;
            }(e);
            r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n);
        }, e.prototype._findContext = function(e) {
            return e ? Ft(e) ? Ft(e) : this._findContext(Tt(e)) : null;
        }, e.prototype._findOriginalError = function(e) {
            for (var t = Tt(e); t && Tt(t); ) t = Tt(t);
            return t;
        }, e;
    }();
    function Mt(e) {
        return e.length > 1 ? " (" + function(e) {
            for (var t = [], n = 0; n < e.length; ++n) {
                if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                t.push(e[n]);
            }
            return t;
        }(e.slice().reverse()).map(function(e) {
            return Ie(e.token);
        }).join(" -> ") + ")" : "";
    }
    function It(e, t, n, r) {
        var o = [ t ], i = n(o), s = r ? function(e, t) {
            var n = i + " caused by: " + (t instanceof Error ? t.message : t), r = Error(n);
            return r[St] = t, r;
        }(0, r) : Error(i);
        return s.addKey = Rt, s.keys = o, s.injectors = [ e ], s.constructResolvingMessage = n, 
        s[St] = r, s;
    }
    function Rt(e, t) {
        this.injectors.push(e), this.keys.push(t), this.message = this.constructResolvingMessage(this.keys);
    }
    function jt(e, t) {
        for (var n = [], r = 0, o = t.length; r < o; r++) {
            var i = t[r];
            i && 0 != i.length ? n.push(i.map(Ie).join(" ")) : n.push("?");
        }
        return Error("Cannot resolve all parameters for '" + Ie(e) + "'(" + n.join(", ") + "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + Ie(e) + "' is decorated with Injectable.");
    }
    var Bt = function() {
        function e(e, t) {
            if (this.token = e, this.id = t, !e) throw new Error("Token must be defined!");
            this.displayName = Ie(this.token);
        }
        return e.get = function(e) {
            return Vt.get(Ue(e));
        }, Object.defineProperty(e, "numberOfKeys", {
            get: function() {
                return Vt.numberOfKeys;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(), Vt = new (function() {
        function e() {
            this._allKeys = new Map();
        }
        return e.prototype.get = function(e) {
            if (e instanceof Bt) return e;
            if (this._allKeys.has(e)) return this._allKeys.get(e);
            var t = new Bt(e, Bt.numberOfKeys);
            return this._allKeys.set(e, t), t;
        }, Object.defineProperty(e.prototype, "numberOfKeys", {
            get: function() {
                return this._allKeys.size;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }())(), Lt = new (function() {
        function e(e) {
            this.reflectionCapabilities = e;
        }
        return e.prototype.updateCapabilities = function(e) {
            this.reflectionCapabilities = e;
        }, e.prototype.factory = function(e) {
            return this.reflectionCapabilities.factory(e);
        }, e.prototype.parameters = function(e) {
            return this.reflectionCapabilities.parameters(e);
        }, e.prototype.annotations = function(e) {
            return this.reflectionCapabilities.annotations(e);
        }, e.prototype.propMetadata = function(e) {
            return this.reflectionCapabilities.propMetadata(e);
        }, e.prototype.hasLifecycleHook = function(e, t) {
            return this.reflectionCapabilities.hasLifecycleHook(e, t);
        }, e.prototype.getter = function(e) {
            return this.reflectionCapabilities.getter(e);
        }, e.prototype.setter = function(e) {
            return this.reflectionCapabilities.setter(e);
        }, e.prototype.method = function(e) {
            return this.reflectionCapabilities.method(e);
        }, e.prototype.importUri = function(e) {
            return this.reflectionCapabilities.importUri(e);
        }, e.prototype.resourceUri = function(e) {
            return this.reflectionCapabilities.resourceUri(e);
        }, e.prototype.resolveIdentifier = function(e, t, n, r) {
            return this.reflectionCapabilities.resolveIdentifier(e, t, n, r);
        }, e.prototype.resolveEnum = function(e, t) {
            return this.reflectionCapabilities.resolveEnum(e, t);
        }, e;
    }())(new Ve()), zt = function() {
        function e(e, t, n) {
            this.key = e, this.optional = t, this.visibility = n;
        }
        return e.fromKey = function(t) {
            return new e(t, !1, null);
        }, e;
    }(), Ht = [], Ut = function(e, t, n) {
        this.key = e, this.resolvedFactories = t, this.multiProvider = n, this.resolvedFactory = this.resolvedFactories[0];
    }, Wt = function(e, t) {
        this.factory = e, this.dependencies = t;
    };
    function Zt(e) {
        return new Ut(Bt.get(e.provide), [ function(e) {
            var t, n;
            if (e.useClass) {
                var r = Ue(e.useClass);
                t = Lt.factory(r), n = Kt(r);
            } else e.useExisting ? (t = function(e) {
                return e;
            }, n = [ zt.fromKey(Bt.get(e.useExisting)) ]) : e.useFactory ? (t = e.useFactory, 
            n = function(e, t) {
                if (t) {
                    var n = t.map(function(e) {
                        return [ e ];
                    });
                    return t.map(function(t) {
                        return Gt(e, t, n);
                    });
                }
                return Kt(e);
            }(e.useFactory, e.deps)) : (t = function() {
                return e.useValue;
            }, n = Ht);
            return new Wt(t, n);
        }(e) ], e.multi || !1);
    }
    function Kt(e) {
        var t = Lt.parameters(e);
        if (!t) return [];
        if (t.some(function(e) {
            return null == e;
        })) throw jt(e, t);
        return t.map(function(n) {
            return Gt(e, n, t);
        });
    }
    function Gt(e, t, n) {
        var r = null, o = !1;
        if (!Array.isArray(t)) return qt(t instanceof We ? t.token : t, o, null);
        for (var i = null, s = 0; s < t.length; ++s) {
            var u = t[s];
            u instanceof Ee ? r = u : u instanceof We ? r = u.token : u instanceof Ze ? o = !0 : u instanceof Ke || u instanceof Ge ? i = u : u instanceof ce && (r = u);
        }
        if (null != (r = Ue(r))) return qt(r, o, i);
        throw jt(e, n);
    }
    function qt(e, t, n) {
        return new zt(Bt.get(e), t, n);
    }
    var $t = new Object(), Yt = function() {
        function e() {}
        return e.resolve = function(e) {
            return function(e) {
                var t = function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n], o = t.get(r.key.id);
                        if (o) {
                            if (r.multiProvider !== o.multiProvider) throw Error("Cannot mix multi providers and regular providers, got: " + o + " " + r);
                            if (r.multiProvider) for (var i = 0; i < r.resolvedFactories.length; i++) o.resolvedFactories.push(r.resolvedFactories[i]); else t.set(r.key.id, r);
                        } else {
                            var s;
                            s = r.multiProvider ? new Ut(r.key, r.resolvedFactories.slice(), r.multiProvider) : r, 
                            t.set(r.key.id, s);
                        }
                    }
                    return t;
                }(function e(t, n) {
                    return t.forEach(function(t) {
                        if (t instanceof Ee) n.push({
                            provide: t,
                            useClass: t
                        }); else if (t && "object" == typeof t && void 0 !== t.provide) n.push(t); else {
                            if (!(t instanceof Array)) throw Error("Invalid provider - only instances of Provider and Type are allowed, got: " + t);
                            e(t, n);
                        }
                    }), n;
                }(e, []).map(Zt), new Map());
                return Array.from(t.values());
            }(e);
        }, e.resolveAndCreate = function(t, n) {
            var r = e.resolve(t);
            return e.fromResolvedProviders(r, n);
        }, e.fromResolvedProviders = function(e, t) {
            return new Jt(e, t);
        }, e;
    }(), Jt = function() {
        function e(e, t) {
            this._constructionCounter = 0, this._providers = e, this.parent = t || null;
            var n = e.length;
            this.keyIds = new Array(n), this.objs = new Array(n);
            for (var r = 0; r < n; r++) this.keyIds[r] = e[r].key.id, this.objs[r] = $t;
        }
        return e.prototype.get = function(e, t) {
            return void 0 === t && (t = Je), this._getByKey(Bt.get(e), null, t);
        }, e.prototype.resolveAndCreateChild = function(e) {
            var t = Yt.resolve(e);
            return this.createChildFromResolved(t);
        }, e.prototype.createChildFromResolved = function(t) {
            var n = new e(t);
            return n.parent = this, n;
        }, e.prototype.resolveAndInstantiate = function(e) {
            return this.instantiateResolved(Yt.resolve([ e ])[0]);
        }, e.prototype.instantiateResolved = function(e) {
            return this._instantiateProvider(e);
        }, e.prototype.getProviderAtIndex = function(e) {
            if (e < 0 || e >= this._providers.length) throw function(e) {
                return Error("Index " + e + " is out-of-bounds.");
            }(e);
            return this._providers[e];
        }, e.prototype._new = function(e) {
            if (this._constructionCounter++ > this._getMaxNumberOfObjects()) throw It(this, e.key, function(e) {
                return "Cannot instantiate cyclic dependency!" + Mt(e);
            });
            return this._instantiateProvider(e);
        }, e.prototype._getMaxNumberOfObjects = function() {
            return this.objs.length;
        }, e.prototype._instantiateProvider = function(e) {
            if (e.multiProvider) {
                for (var t = new Array(e.resolvedFactories.length), n = 0; n < e.resolvedFactories.length; ++n) t[n] = this._instantiate(e, e.resolvedFactories[n]);
                return t;
            }
            return this._instantiate(e, e.resolvedFactories[0]);
        }, e.prototype._instantiate = function(e, t) {
            var n, r, o, i, s = this, u = t.factory;
            try {
                n = t.dependencies.map(function(e) {
                    return s._getByReflectiveDependency(e);
                });
            } catch (t) {
                throw t.addKey && t.addKey(this, e.key), t;
            }
            try {
                r = u.apply(void 0, a(n));
            } catch (t) {
                throw o = this, i = t, t.stack, It(o, e.key, function(e) {
                    var t = Ie(e[0].token);
                    return i.message + ": Error during instantiation of " + t + "!" + Mt(e) + ".";
                }, i);
            }
            return r;
        }, e.prototype._getByReflectiveDependency = function(e) {
            return this._getByKey(e.key, e.visibility, e.optional ? null : Je);
        }, e.prototype._getByKey = function(t, n, r) {
            return t === e.INJECTOR_KEY ? this : n instanceof Ke ? this._getByKeySelf(t, r) : this._getByKeyDefault(t, r, n);
        }, e.prototype._getObjByKeyId = function(e) {
            for (var t = 0; t < this.keyIds.length; t++) if (this.keyIds[t] === e) return this.objs[t] === $t && (this.objs[t] = this._new(this._providers[t])), 
            this.objs[t];
            return $t;
        }, e.prototype._throwOrNull = function(e, t) {
            if (t !== Je) return t;
            throw function(e, t) {
                return It(e, t, function(e) {
                    return "No provider for " + Ie(e[0].token) + "!" + Mt(e);
                });
            }(this, e);
        }, e.prototype._getByKeySelf = function(e, t) {
            var n = this._getObjByKeyId(e.id);
            return n !== $t ? n : this._throwOrNull(e, t);
        }, e.prototype._getByKeyDefault = function(t, n, r) {
            var o;
            for (o = r instanceof Ge ? this.parent : this; o instanceof e; ) {
                var i = o, s = i._getObjByKeyId(t.id);
                if (s !== $t) return s;
                o = i.parent;
            }
            return null !== o ? o.get(t.token, n) : this._throwOrNull(t, n);
        }, Object.defineProperty(e.prototype, "displayName", {
            get: function() {
                return "ReflectiveInjector(providers: [" + function(e, t) {
                    for (var n = new Array(e._providers.length), r = 0; r < e._providers.length; ++r) n[r] = ' "' + e.getProviderAtIndex(r).key.displayName + '" ';
                    return n;
                }(this).join(", ") + "])";
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.toString = function() {
            return this.displayName;
        }, e.INJECTOR_KEY = Bt.get(et), e;
    }(), Xt = new ce("The presence of this token marks an injector as being the root injector."), Qt = {}, en = {}, tn = [], nn = void 0;
    function rn(e) {
        var t = e.ngInjectableDef;
        if (void 0 === t) throw new Error("Type " + Ie(e) + " is missing an ngInjectableDef definition.");
        return on(t.factory);
    }
    function on(e, t, n) {
        return void 0 === t && (t = Qt), void 0 === n && (n = !1), {
            factory: e,
            value: t,
            multi: n ? [] : void 0
        };
    }
    function sn(e, t) {
        e.forEach(function(e) {
            return Array.isArray(e) ? sn(e, t) : t(e);
        });
    }
    function un(e) {
        return "function" == typeof e;
    }
    function an(e) {
        return !!e && "function" == typeof e.then;
    }
    !function() {
        function e(e, t) {
            var n = this;
            this.parent = t, this.records = new Map(), this.injectorDefTypes = new Set(), this.onDestroy = new Set(), 
            this.destroyed = !1, sn([ e ], function(e) {
                return n.processInjectorType(e, new Set());
            }), this.records.set(Xe, on(void 0, this)), this.isRootInjector = this.records.has(Xt), 
            this.injectorDefTypes.forEach(function(e) {
                return n.get(e);
            });
        }
        e.prototype.destroy = function() {
            this.assertNotDestroyed(), this.destroyed = !0;
            try {
                this.onDestroy.forEach(function(e) {
                    return e.ngOnDestroy();
                });
            } finally {
                this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
            }
        }, e.prototype.get = function(e, t, n) {
            void 0 === t && (t = Je), void 0 === n && (n = 0), this.assertNotDestroyed();
            var r, o = yt(this);
            try {
                if (!(4 & n)) {
                    var i = this.records.get(e);
                    if (void 0 === i) {
                        var s = ("function" == typeof (r = e) || "object" == typeof r && r instanceof ce) && e.ngInjectableDef || void 0;
                        void 0 !== s && this.injectableDefInScope(s) && (i = rn(e), this.records.set(e, i));
                    }
                    if (void 0 !== i) return this.hydrate(e, i);
                }
                return 2 & n ? void 0 === nn && (nn = new Qe()) : this.parent, this.parent.get(e, t);
            } finally {
                yt(o);
            }
        }, e.prototype.assertNotDestroyed = function() {
            if (this.destroyed) throw new Error("Injector has already been destroyed.");
        }, e.prototype.processInjectorType = function(e, t) {
            var n = this, r = (e = Ue(e)).ngInjectorDef, o = null == r && e.ngModule || void 0, i = void 0 === o ? e : o, s = void 0 !== o && e.providers || tn;
            if (void 0 !== o && (r = o.ngInjectorDef), null == r) throw new Error("Type " + Ie(i) + " is missing an ngInjectorDef definition.");
            if (t.has(i)) throw new Error("Circular dependency: type " + Ie(i) + " ends up importing itself.");
            if (this.injectorDefTypes.add(i), this.records.set(i, on(r.factory)), null != r.imports) {
                t.add(i);
                try {
                    sn(r.imports, function(e) {
                        return n.processInjectorType(e, t);
                    });
                } finally {
                    t.delete(i);
                }
            }
            null != r.providers && sn(r.providers, function(e) {
                return n.processProvider(e);
            }), sn(s, function(e) {
                return n.processProvider(e);
            });
        }, e.prototype.processProvider = function(e) {
            var t = un(e = Ue(e)) ? e : Ue(e.provide), n = function(e) {
                var t = Ue(e), n = Qt, r = void 0;
                if (un(e)) return rn(e);
                if (t = Ue(e.provide), st in e) n = e.useValue; else if (e.useExisting) r = function() {
                    return vt(e.useExisting);
                }; else if (e.useFactory) r = function() {
                    return e.useFactory.apply(e, a(mt(e.deps || [])));
                }; else {
                    var o = e.useClass || t;
                    if (!e.deps) return rn(o);
                    r = function() {
                        return new (o.bind.apply(o, a([ void 0 ], mt(e.deps))))();
                    };
                }
                return on(r, n);
            }(e);
            if (!un(e) && !0 === e.multi) {
                var r = this.records.get(t);
                if (r) {
                    if (void 0 === r.multi) throw new Error("Mixed multi-provider for " + t + ".");
                } else t = e, (r = on(void 0, Qt, !0)).factory = function() {
                    return mt(r.multi);
                }, this.records.set(t, r);
                t = e, r.multi.push(e);
            }
            var o = this.records.get(t);
            if (o && void 0 !== o.multi) throw new Error("Mixed multi-provider for " + t);
            this.records.set(t, n);
        }, e.prototype.hydrate = function(e, t) {
            if (t.value === en) throw new Error("Circular dep for " + Ie(e));
            var n;
            return t.value === Qt && (t.value = en, t.value = t.factory()), "object" == typeof t.value && t.value && "object" == typeof (n = t.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), 
            t.value;
        }, e.prototype.injectableDefInScope = function(e) {
            return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || "root" === e.providedIn && this.isRootInjector : this.injectorDefTypes.has(e.providedIn));
        };
    }();
    var cn = new ce("Application Initializer"), ln = function() {
        function e(e) {
            var t = this;
            this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(e, n) {
                t.resolve = e, t.reject = n;
            });
        }
        return e.prototype.runInitializers = function() {
            var e = this;
            if (!this.initialized) {
                var t = [], n = function() {
                    e.done = !0, e.resolve();
                };
                if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    an(o) && t.push(o);
                }
                Promise.all(t).then(function() {
                    n();
                }).catch(function(t) {
                    e.reject(t);
                }), 0 === t.length && n(), this.initialized = !0;
            }
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Array,
                decorators: [ {
                    type: We,
                    args: [ cn ]
                }, {
                    type: Ze
                } ]
            } ];
        }, e;
    }(), pn = new ce("AppId");
    function fn() {
        return "" + hn() + hn() + hn();
    }
    var dn = {
        provide: pn,
        useFactory: fn,
        deps: []
    };
    function hn() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }
    var yn = new ce("Platform Initializer"), vn = new ce("Platform ID"), mn = new ce("appBootstrapListener"), gn = (new ce("Application Packages Root URL"), 
    function() {
        function e() {}
        return e.prototype.log = function(e) {
            console.log(e);
        }, e.prototype.warn = function(e) {
            console.warn(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }());
    function wn() {
        throw new Error("Runtime compiler is not loaded");
    }
    var _n = function() {
        function e() {}
        return e.prototype.compileModuleSync = function(e) {
            throw wn();
        }, e.prototype.compileModuleAsync = function(e) {
            throw wn();
        }, e.prototype.compileModuleAndAllComponentsSync = function(e) {
            throw wn();
        }, e.prototype.compileModuleAndAllComponentsAsync = function(e) {
            throw wn();
        }, e.prototype.clearCache = function() {}, e.prototype.clearCacheFor = function(e) {}, 
        e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), bn = (new ce("compilerOptions"), function() {}), Cn = function() {};
    function Dn(e) {
        var t = Error("No component factory found for " + Ie(e) + ". Did you add it to @NgModule.entryComponents?");
        return t[kn] = e, t;
    }
    var En, xn, An, kn = "ngComponent", Sn = function() {
        function e() {}
        return e.prototype.resolveComponentFactory = function(e) {
            throw Dn(e);
        }, e;
    }(), On = function() {
        function e() {}
        return e.NULL = new Sn(), e;
    }(), Fn = function() {
        function e(e, t, n) {
            this._parent = t, this._ngModule = n, this._factories = new Map();
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                this._factories.set(o.componentType, o);
            }
        }
        return e.prototype.resolveComponentFactory = function(e) {
            var t = this._factories.get(e);
            if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw Dn(e);
            return new Tn(t, this._ngModule);
        }, e;
    }(), Tn = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.factory = t, r.ngModule = n, r.selector = t.selector, r.componentType = t.componentType, 
            r.ngContentSelectors = t.ngContentSelectors, r.inputs = t.inputs, r.outputs = t.outputs, 
            r;
        }
        return o(t, e), t.prototype.create = function(e, t, n, r) {
            return this.factory.create(e, t, n, r || this.ngModule);
        }, t;
    }(Cn), Pn = function() {}, Nn = !(!(An = Oe.wtf) || !(En = An.trace) || (xn = En.events, 
    0));
    function Mn(e, t) {
        return null;
    }
    var In = Nn ? function(e, t) {
        return void 0 === t && (t = null), xn.createScope(e, t);
    } : function(e, t) {
        return Mn;
    }, Rn = Nn ? function(e, t) {
        return En.leaveScope(e, t), t;
    } : function(e, t) {
        return t;
    }, jn = function(e) {
        function t(t) {
            void 0 === t && (t = !1);
            var n = e.call(this) || this;
            return n.__isAsync = t, n;
        }
        return o(t, e), t.prototype.emit = function(t) {
            e.prototype.next.call(this, t);
        }, t.prototype.subscribe = function(t, n, r) {
            var o, i = function(e) {
                return null;
            }, s = function() {
                return null;
            };
            t && "object" == typeof t ? (o = this.__isAsync ? function(e) {
                setTimeout(function() {
                    return t.next(e);
                });
            } : function(e) {
                t.next(e);
            }, t.error && (i = this.__isAsync ? function(e) {
                setTimeout(function() {
                    return t.error(e);
                });
            } : function(e) {
                t.error(e);
            }), t.complete && (s = this.__isAsync ? function() {
                setTimeout(function() {
                    return t.complete();
                });
            } : function() {
                t.complete();
            })) : (o = this.__isAsync ? function(e) {
                setTimeout(function() {
                    return t(e);
                });
            } : function(e) {
                t(e);
            }, n && (i = this.__isAsync ? function(e) {
                setTimeout(function() {
                    return n(e);
                });
            } : function(e) {
                n(e);
            }), r && (s = this.__isAsync ? function() {
                setTimeout(function() {
                    return r();
                });
            } : function() {
                r();
            }));
            var u = e.prototype.subscribe.call(this, o, i, s);
            return t instanceof b && t.add(u), u;
        }, t;
    }(Q), Bn = function() {
        function e(e) {
            var t, n = e.enableLongStackTrace, r = void 0 !== n && n;
            if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, 
            this.onUnstable = new jn(!1), this.onMicrotaskEmpty = new jn(!1), this.onStable = new jn(!1), 
            this.onError = new jn(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, 
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())), 
            r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), 
            (t = this)._inner = t._inner.fork({
                name: "angular",
                properties: {
                    isAngularZone: !0
                },
                onInvokeTask: function(e, n, r, o, i, s) {
                    try {
                        return Hn(t), e.invokeTask(r, o, i, s);
                    } finally {
                        Un(t);
                    }
                },
                onInvoke: function(e, n, r, o, i, s, u) {
                    try {
                        return Hn(t), e.invoke(r, o, i, s, u);
                    } finally {
                        Un(t);
                    }
                },
                onHasTask: function(e, n, r, o) {
                    e.hasTask(r, o), n === r && ("microTask" == o.change ? (t.hasPendingMicrotasks = o.microTask, 
                    zn(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: function(e, n, r, o) {
                    return e.handleError(r, o), t.runOutsideAngular(function() {
                        return t.onError.emit(o);
                    }), !1;
                }
            });
        }
        return e.isInAngularZone = function() {
            return !0 === Zone.current.get("isAngularZone");
        }, e.assertInAngularZone = function() {
            if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!");
        }, e.assertNotInAngularZone = function() {
            if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!");
        }, e.prototype.run = function(e, t, n) {
            return this._inner.run(e, t, n);
        }, e.prototype.runTask = function(e, t, n, r) {
            var o = this._inner, i = o.scheduleEventTask("NgZoneEvent: " + r, e, Ln, Vn, Vn);
            try {
                return o.runTask(i, t, n);
            } finally {
                o.cancelTask(i);
            }
        }, e.prototype.runGuarded = function(e, t, n) {
            return this._inner.runGuarded(e, t, n);
        }, e.prototype.runOutsideAngular = function(e) {
            return this._outer.run(e);
        }, e;
    }();
    function Vn() {}
    var Ln = {};
    function zn(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
        } finally {
            if (e._nesting--, !e.hasPendingMicrotasks) try {
                e.runOutsideAngular(function() {
                    return e.onStable.emit(null);
                });
            } finally {
                e.isStable = !0;
            }
        }
    }
    function Hn(e) {
        e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
    }
    function Un(e) {
        e._nesting--, zn(e);
    }
    var Wn, Zn = function() {
        function e() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, 
            this.onUnstable = new jn(), this.onMicrotaskEmpty = new jn(), this.onStable = new jn(), 
            this.onError = new jn();
        }
        return e.prototype.run = function(e) {
            return e();
        }, e.prototype.runGuarded = function(e) {
            return e();
        }, e.prototype.runOutsideAngular = function(e) {
            return e();
        }, e.prototype.runTask = function(e) {
            return e();
        }, e;
    }(), Kn = function() {
        function e(e) {
            var t = this;
            this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, 
            this._callbacks = [], this._watchAngularEvents(), e.run(function() {
                t.taskTrackingZone = Zone.current.get("TaskTrackingZone");
            });
        }
        return e.prototype._watchAngularEvents = function() {
            var e = this;
            this._ngZone.onUnstable.subscribe({
                next: function() {
                    e._didWork = !0, e._isZoneStable = !1;
                }
            }), this._ngZone.runOutsideAngular(function() {
                e._ngZone.onStable.subscribe({
                    next: function() {
                        Bn.assertNotInAngularZone(), Ne(function() {
                            e._isZoneStable = !0, e._runCallbacksIfReady();
                        });
                    }
                });
            });
        }, e.prototype.increasePendingRequestCount = function() {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
        }, e.prototype.decreasePendingRequestCount = function() {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
        }, e.prototype.isStable = function() {
            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
        }, e.prototype._runCallbacksIfReady = function() {
            var e = this;
            if (this.isStable()) Ne(function() {
                for (;0 !== e._callbacks.length; ) {
                    var t = e._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                }
                e._didWork = !1;
            }); else {
                var t = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(function(e) {
                    return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1);
                }), this._didWork = !0;
            }
        }, e.prototype.getPendingTasks = function() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function(e) {
                return {
                    source: e.source,
                    isPeriodic: e.data.isPeriodic,
                    delay: e.data.delay,
                    creationLocation: e.creationLocation,
                    xhr: e.data.target
                };
            }) : [];
        }, e.prototype.addCallback = function(e, t, n) {
            var r = this, o = -1;
            t && t > 0 && (o = setTimeout(function() {
                r._callbacks = r._callbacks.filter(function(e) {
                    return e.timeoutId !== o;
                }), e(r._didWork, r.getPendingTasks());
            }, t)), this._callbacks.push({
                doneCb: e,
                timeoutId: o,
                updateCb: n
            });
        }, e.prototype.whenStable = function(e, t, n) {
            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
            this.addCallback(e, t, n), this._runCallbacksIfReady();
        }, e.prototype.getPendingRequestCount = function() {
            return this._pendingCount;
        }, e.prototype.findProviders = function(e, t, n) {
            return [];
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Bn
            } ];
        }, e;
    }(), Gn = function() {
        function e() {
            this._applications = new Map(), qn.addToWindow(this);
        }
        return e.prototype.registerApplication = function(e, t) {
            this._applications.set(e, t);
        }, e.prototype.unregisterApplication = function(e) {
            this._applications.delete(e);
        }, e.prototype.unregisterAllApplications = function() {
            this._applications.clear();
        }, e.prototype.getTestability = function(e) {
            return this._applications.get(e) || null;
        }, e.prototype.getAllTestabilities = function() {
            return Array.from(this._applications.values());
        }, e.prototype.getAllRootElements = function() {
            return Array.from(this._applications.keys());
        }, e.prototype.findTestabilityInTree = function(e, t) {
            return void 0 === t && (t = !0), qn.findTestabilityInTree(this, e, t);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), qn = new (function() {
        function e() {}
        return e.prototype.addToWindow = function(e) {}, e.prototype.findTestabilityInTree = function(e, t, n) {
            return null;
        }, e;
    }())(), $n = !0, Yn = !1, Jn = new ce("AllowMultipleToken");
    function Xn() {
        return Yn = !0, $n;
    }
    function Qn(e, t, n) {
        void 0 === n && (n = []);
        var r = "Platform: " + t, o = new ce(r);
        return function(t) {
            void 0 === t && (t = []);
            var i = er();
            if (!i || i.injector.get(Jn, !1)) if (e) e(n.concat(t).concat({
                provide: o,
                useValue: !0
            })); else {
                var s = n.concat(t).concat({
                    provide: o,
                    useValue: !0
                });
                !function(e) {
                    if (Wn && !Wn.destroyed && !Wn.injector.get(Jn, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                    Wn = e.get(tr);
                    var t = e.get(yn, null);
                    t && t.forEach(function(e) {
                        return e();
                    });
                }(et.create({
                    providers: s,
                    name: r
                }));
            }
            return function(e) {
                var t = er();
                if (!t) throw new Error("No platform exists!");
                if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                return t;
            }(o);
        };
    }
    function er() {
        return Wn && !Wn.destroyed ? Wn : null;
    }
    var tr = function() {
        function e(e) {
            this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
        }
        return e.prototype.bootstrapModuleFactory = function(e, t) {
            var n, r = this, o = "noop" === (n = t ? t.ngZone : void 0) ? new Zn() : ("zone.js" === n ? void 0 : n) || new Bn({
                enableLongStackTrace: Xn()
            }), i = [ {
                provide: Bn,
                useValue: o
            } ];
            return o.run(function() {
                var t = et.create({
                    providers: i,
                    parent: r.injector,
                    name: e.moduleType.name
                }), n = e.create(t), s = n.injector.get(Nt, null);
                if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return n.onDestroy(function() {
                    return or(r._modules, n);
                }), o.runOutsideAngular(function() {
                    return o.onError.subscribe({
                        next: function(e) {
                            s.handleError(e);
                        }
                    });
                }), function(e, t, o) {
                    try {
                        var i = ((s = n.injector.get(ln)).runInitializers(), s.donePromise.then(function() {
                            return r._moduleDoBootstrap(n), n;
                        }));
                        return an(i) ? i.catch(function(n) {
                            throw t.runOutsideAngular(function() {
                                return e.handleError(n);
                            }), n;
                        }) : i;
                    } catch (n) {
                        throw t.runOutsideAngular(function() {
                            return e.handleError(n);
                        }), n;
                    }
                    var s;
                }(s, o);
            });
        }, e.prototype.bootstrapModule = function(e, t) {
            var n = this;
            void 0 === t && (t = []);
            var r = this.injector.get(bn), o = nr({}, t);
            return r.createCompiler([ o ]).compileModuleAsync(e).then(function(e) {
                return n.bootstrapModuleFactory(e, o);
            });
        }, e.prototype._moduleDoBootstrap = function(e) {
            var t = e.injector.get(rr);
            if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(function(e) {
                return t.bootstrap(e);
            }); else {
                if (!e.instance.ngDoBootstrap) throw new Error("The module " + Ie(e.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
        }, e.prototype.onDestroy = function(e) {
            this._destroyListeners.push(e);
        }, Object.defineProperty(e.prototype, "injector", {
            get: function() {
                return this._injector;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.destroy = function() {
            if (this._destroyed) throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(function(e) {
                return e.destroy();
            }), this._destroyListeners.forEach(function(e) {
                return e();
            }), this._destroyed = !0;
        }, Object.defineProperty(e.prototype, "destroyed", {
            get: function() {
                return this._destroyed;
            },
            enumerable: !0,
            configurable: !0
        }), e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: et
            } ];
        }, e;
    }();
    function nr(e, t) {
        return Array.isArray(t) ? t.reduce(nr, e) : i({}, e, t);
    }
    var rr = function() {
        function e(e, t, n, r, o, i) {
            var s = this;
            this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = r, 
            this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], 
            this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, 
            this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Xn(), 
            this._zone.onMicrotaskEmpty.subscribe({
                next: function() {
                    s._zone.run(function() {
                        s.tick();
                    });
                }
            });
            var u = new S(function(e) {
                s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, 
                s._zone.runOutsideAngular(function() {
                    e.next(s._stable), e.complete();
                });
            }), a = new S(function(e) {
                var t;
                s._zone.runOutsideAngular(function() {
                    t = s._zone.onStable.subscribe(function() {
                        Bn.assertNotInAngularZone(), Ne(function() {
                            s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, 
                            e.next(!0));
                        });
                    });
                });
                var n = s._zone.onUnstable.subscribe(function() {
                    Bn.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular(function() {
                        e.next(!1);
                    }));
                });
                return function() {
                    t.unsubscribe(), n.unsubscribe();
                };
            });
            this.isStable = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Number.POSITIVE_INFINITY, r = null, o = e[e.length - 1];
                return F(o) ? (r = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof o && (n = e.pop()), 
                null === r && 1 === e.length && e[0] instanceof S ? e[0] : function(e) {
                    return void 0 === e && (e = Number.POSITIVE_INFINITY), K($, e);
                }(n)(Z(e, r));
            }(u, a.pipe(function(e) {
                return te()((t = ue, function(e) {
                    var n;
                    n = "function" == typeof t ? t : function() {
                        return t;
                    };
                    var r = Object.create(e, ie);
                    return r.source = e, r.subjectFactory = n, r;
                })(e));
                var t;
            }));
        }
        return e.prototype.bootstrap = function(e, t) {
            var n, r = this;
            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
            n = e instanceof Cn ? e : this._componentFactoryResolver.resolveComponentFactory(e), 
            this.componentTypes.push(n.componentType);
            var o = n instanceof Tn ? null : this._injector.get(Pn), i = t || n.selector, s = n.create(et.NULL, [], i, o);
            s.onDestroy(function() {
                r._unloadComponent(s);
            });
            var u = s.injector.get(Kn, null);
            return u && s.injector.get(Gn).registerApplication(s.location.nativeElement, u), 
            this._loadComponent(s), Xn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), 
            s;
        }, e.prototype.tick = function() {
            var t = this;
            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
            var n = e._tickScope();
            try {
                this._runningTick = !0, this._views.forEach(function(e) {
                    return e.detectChanges();
                }), this._enforceNoNewChanges && this._views.forEach(function(e) {
                    return e.checkNoChanges();
                });
            } catch (e) {
                this._zone.runOutsideAngular(function() {
                    return t._exceptionHandler.handleError(e);
                });
            } finally {
                this._runningTick = !1, Rn(n);
            }
        }, e.prototype.attachView = function(e) {
            var t = e;
            this._views.push(t), t.attachToAppRef(this);
        }, e.prototype.detachView = function(e) {
            var t = e;
            or(this._views, t), t.detachFromAppRef();
        }, e.prototype._loadComponent = function(e) {
            this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(mn, []).concat(this._bootstrapListeners).forEach(function(t) {
                return t(e);
            });
        }, e.prototype._unloadComponent = function(e) {
            this.detachView(e.hostView), or(this.components, e);
        }, e.prototype.ngOnDestroy = function() {
            this._views.slice().forEach(function(e) {
                return e.destroy();
            });
        }, Object.defineProperty(e.prototype, "viewCount", {
            get: function() {
                return this._views.length;
            },
            enumerable: !0,
            configurable: !0
        }), e._tickScope = In("ApplicationRef#tick()"), e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Bn
            }, {
                type: gn
            }, {
                type: et
            }, {
                type: Nt
            }, {
                type: On
            }, {
                type: ln
            } ];
        }, e;
    }();
    function or(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    }
    var ir, sr = function(e, t, n, r, o, i) {
        this.id = e, this.templateUrl = t, this.slotCount = n, this.encapsulation = r, this.styles = o, 
        this.animations = i;
    }, ur = (new ce("Renderer2Interceptor"), function() {});
    !function(e) {
        e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase";
    }(ir || (ir = {}));
    var ar = function() {}, cr = function(e) {
        this.nativeElement = e;
    };
    new Map();
    var lr = function() {
        function e() {
            this.dirty = !0, this._results = [], this.changes = new jn(), this.length = 0;
        }
        return e.prototype.map = function(e) {
            return this._results.map(e);
        }, e.prototype.filter = function(e) {
            return this._results.filter(e);
        }, e.prototype.find = function(e) {
            return this._results.find(e);
        }, e.prototype.reduce = function(e, t) {
            return this._results.reduce(e, t);
        }, e.prototype.forEach = function(e) {
            this._results.forEach(e);
        }, e.prototype.some = function(e) {
            return this._results.some(e);
        }, e.prototype.toArray = function() {
            return this._results.slice();
        }, e.prototype[Pe()] = function() {
            return this._results[Pe()]();
        }, e.prototype.toString = function() {
            return this._results.toString();
        }, e.prototype.reset = function(e) {
            this._results = function e(t) {
                return t.reduce(function(t, n) {
                    var r = Array.isArray(n) ? e(n) : n;
                    return t.concat(r);
                }, []);
            }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], 
            this.first = this._results[0];
        }, e.prototype.notifyOnChanges = function() {
            this.changes.emit(this);
        }, e.prototype.setDirty = function() {
            this.dirty = !0;
        }, e.prototype.destroy = function() {
            this.changes.complete(), this.changes.unsubscribe();
        }, e;
    }(), pr = function() {}, fr = {
        factoryPathPrefix: "",
        factoryPathSuffix: ".ngfactory"
    };
    function dr(e, t, n) {
        if (!e) throw new Error("Cannot find '" + n + "' in '" + t + "'");
        return e;
    }
    !function() {
        function e(e, t) {
            this._compiler = e, this._config = t || fr;
        }
        e.prototype.load = function(e) {
            return this._compiler instanceof _n ? this.loadFactory(e) : this.loadAndCompile(e);
        }, e.prototype.loadAndCompile = function(e) {
            var t = this, r = u(e.split("#"), 2), o = r[0], i = r[1];
            return void 0 === i && (i = "default"), n(32)(o).then(function(e) {
                return e[i];
            }).then(function(e) {
                return dr(e, o, i);
            }).then(function(e) {
                return t._compiler.compileModuleAsync(e);
            });
        }, e.prototype.loadFactory = function(e) {
            var t = u(e.split("#"), 2), r = t[0], o = t[1], i = "NgFactory";
            return void 0 === o && (o = "default", i = ""), n(32)(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function(e) {
                return e[o + i];
            }).then(function(e) {
                return dr(e, r, o);
            });
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: _n
            }, {
                type: pr,
                decorators: [ {
                    type: Ze
                } ]
            } ];
        };
    }();
    var hr, yr = function() {}, vr = function() {}, mr = function() {}, gr = (o(function() {
        return null !== hr && hr.apply(this, arguments) || this;
    }, hr = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t;
    }(mr)), function(e, t) {
        this.name = e, this.callback = t;
    }), wr = function() {
        function e(e, t, n) {
            this._debugContext = n, this.nativeNode = e, t && t instanceof _r ? t.addChild(this) : this.parent = null, 
            this.listeners = [];
        }
        return Object.defineProperty(e.prototype, "injector", {
            get: function() {
                return this._debugContext.injector;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "componentInstance", {
            get: function() {
                return this._debugContext.component;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "context", {
            get: function() {
                return this._debugContext.context;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "references", {
            get: function() {
                return this._debugContext.references;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "providerTokens", {
            get: function() {
                return this._debugContext.providerTokens;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(), _r = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t, n, r) || this;
            return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], 
            o.nativeElement = t, o;
        }
        return o(t, e), t.prototype.addChild = function(e) {
            e && (this.childNodes.push(e), e.parent = this);
        }, t.prototype.removeChild = function(e) {
            var t = this.childNodes.indexOf(e);
            -1 !== t && (e.parent = null, this.childNodes.splice(t, 1));
        }, t.prototype.insertChildrenAfter = function(e, t) {
            var n, r = this, o = this.childNodes.indexOf(e);
            -1 !== o && ((n = this.childNodes).splice.apply(n, a([ o + 1, 0 ], t)), t.forEach(function(e) {
                e.parent && e.parent.removeChild(e), e.parent = r;
            }));
        }, t.prototype.insertBefore = function(e, t) {
            var n = this.childNodes.indexOf(e);
            -1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, 
            this.childNodes.splice(n, 0, t));
        }, t.prototype.query = function(e) {
            return this.queryAll(e)[0] || null;
        }, t.prototype.queryAll = function(e) {
            var t = [];
            return function e(t, n, r) {
                t.childNodes.forEach(function(t) {
                    t instanceof _r && (n(t) && r.push(t), e(t, n, r));
                });
            }(this, e, t), t;
        }, t.prototype.queryAllNodes = function(e) {
            var t = [];
            return function e(t, n, r) {
                t instanceof _r && t.childNodes.forEach(function(t) {
                    n(t) && r.push(t), t instanceof _r && e(t, n, r);
                });
            }(this, e, t), t;
        }, Object.defineProperty(t.prototype, "children", {
            get: function() {
                return this.childNodes.filter(function(e) {
                    return e instanceof t;
                });
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.triggerEventHandler = function(e, t) {
            this.listeners.forEach(function(n) {
                n.name == e && n.callback(t);
            });
        }, t;
    }(wr), br = new Map();
    function Cr(e) {
        return br.get(e) || null;
    }
    function Dr(e) {
        br.set(e.nativeNode, e);
    }
    function Er(e, t) {
        var n = kr(e), r = kr(t);
        return n && r ? function(e, t, n) {
            for (var r = e[Pe()](), o = t[Pe()](); ;) {
                var i = r.next(), s = o.next();
                if (i.done && s.done) return !0;
                if (i.done || s.done) return !1;
                if (!n(i.value, s.value)) return !1;
            }
        }(e, t, Er) : !(n || !e || "object" != typeof e && "function" != typeof e || r || !t || "object" != typeof t && "function" != typeof t) || Me(e, t);
    }
    var xr = function() {
        function e(e) {
            this.wrapped = e;
        }
        return e.wrap = function(t) {
            return new e(t);
        }, e.unwrap = function(t) {
            return e.isWrapped(t) ? t.wrapped : t;
        }, e.isWrapped = function(t) {
            return t instanceof e;
        }, e;
    }(), Ar = function() {
        function e(e, t, n) {
            this.previousValue = e, this.currentValue = t, this.firstChange = n;
        }
        return e.prototype.isFirstChange = function() {
            return this.firstChange;
        }, e;
    }();
    function kr(e) {
        return !!Sr(e) && (Array.isArray(e) || !(e instanceof Map) && Pe() in e);
    }
    function Sr(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
    }
    var Or = function() {
        function e() {}
        return e.prototype.supports = function(e) {
            return kr(e);
        }, e.prototype.create = function(e) {
            return new Tr(e);
        }, e;
    }(), Fr = function(e, t) {
        return t;
    }, Tr = function() {
        function e(e) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, 
            this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, 
            this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, 
            this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Fr;
        }
        return e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._itHead; null !== t; t = t._next) e(t);
        }, e.prototype.forEachOperation = function(e) {
            for (var t = this._itHead, n = this._removalsHead, r = 0, o = null; t || n; ) {
                var i = !n || t && t.currentIndex < Ir(n, r, o) ? t : n, s = Ir(i, r, o), u = i.currentIndex;
                if (i === n) r--, n = n._nextRemoved; else if (t = t._next, null == i.previousIndex) r++; else {
                    o || (o = []);
                    var a = s - r, c = u - r;
                    if (a != c) {
                        for (var l = 0; l < a; l++) {
                            var p = l < o.length ? o[l] : o[l] = 0, f = p + l;
                            c <= f && f < a && (o[l] = p + 1);
                        }
                        o[i.previousIndex] = c - a;
                    }
                }
                s !== u && e(i, s, u);
            }
        }, e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }, e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }, e.prototype.forEachMovedItem = function(e) {
            var t;
            for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }, e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }, e.prototype.forEachIdentityChange = function(e) {
            var t;
            for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t);
        }, e.prototype.diff = function(e) {
            if (null == e && (e = []), !kr(e)) throw new Error("Error trying to diff '" + Ie(e) + "'. Only arrays and iterables are allowed");
            return this.check(e) ? this : null;
        }, e.prototype.onDestroy = function() {}, e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n, r, o, i = this._itHead, s = !1;
            if (Array.isArray(e)) {
                this.length = e.length;
                for (var u = 0; u < this.length; u++) r = e[u], o = this._trackByFn(u, r), null !== i && Me(i.trackById, o) ? (s && (i = this._verifyReinsertion(i, r, o, u)), 
                Me(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, u), 
                s = !0), i = i._next;
            } else n = 0, function(e, t) {
                if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n]); else for (var r = e[Pe()](), o = void 0; !(o = r.next()).done; ) t(o.value);
            }(e, function(e) {
                o = t._trackByFn(n, e), null !== i && Me(i.trackById, o) ? (s && (i = t._verifyReinsertion(i, e, o, n)), 
                Me(i.item, e) || t._addIdentityChange(i, e)) : (i = t._mismatch(i, e, o, n), s = !0), 
                i = i._next, n++;
            }), this.length = n;
            return this._truncate(i), this.collection = e, this.isDirty;
        }, Object.defineProperty(e.prototype, "isDirty", {
            get: function() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._reset = function() {
            if (this.isDirty) {
                var e = void 0, t = void 0;
                for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, 
                t = e._nextMoved;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, 
                this._identityChangesHead = this._identityChangesTail = null;
            }
        }, e.prototype._mismatch = function(e, t, n, r) {
            var o;
            return null === e ? o = this._itTail : (o = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Me(e.item, t) || this._addIdentityChange(e, t), 
            this._moveAfter(e, o, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Me(e.item, t) || this._addIdentityChange(e, t), 
            this._reinsertAfter(e, o, r)) : e = this._addAfter(new Pr(t, n), o, r), e;
        }, e.prototype._verifyReinsertion = function(e, t, n, r) {
            var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== o ? e = this._reinsertAfter(o, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, 
            this._addToMoves(e, r)), e;
        }, e.prototype._truncate = function(e) {
            for (;null !== e; ) {
                var t = e._next;
                this._addToRemovals(this._unlink(e)), e = t;
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), 
            null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), 
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }, e.prototype._reinsertAfter = function(e, t, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
            var r = e._prevRemoved, o = e._nextRemoved;
            return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, 
            this._insertAfter(e, t, n), this._addToMoves(e, n), e;
        }, e.prototype._moveAfter = function(e, t, n) {
            return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e;
        }, e.prototype._addAfter = function(e, t, n) {
            return this._insertAfter(e, t, n), null === this._additionsTail ? this._additionsTail = this._additionsHead = e : this._additionsTail = this._additionsTail._nextAdded = e, 
            e;
        }, e.prototype._insertAfter = function(e, t, n) {
            var r = null === t ? this._itHead : t._next;
            return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, 
            null === this._linkedRecords && (this._linkedRecords = new Mr()), this._linkedRecords.put(e), 
            e.currentIndex = n, e;
        }, e.prototype._remove = function(e) {
            return this._addToRemovals(this._unlink(e));
        }, e.prototype._unlink = function(e) {
            null !== this._linkedRecords && this._linkedRecords.remove(e);
            var t = e._prev, n = e._next;
            return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, 
            e;
        }, e.prototype._addToMoves = function(e, t) {
            return e.previousIndex === t ? e : (null === this._movesTail ? this._movesTail = this._movesHead = e : this._movesTail = this._movesTail._nextMoved = e, 
            e);
        }, e.prototype._addToRemovals = function(e) {
            return null === this._unlinkedRecords && (this._unlinkedRecords = new Mr()), this._unlinkedRecords.put(e), 
            e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, 
            e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), 
            e;
        }, e.prototype._addIdentityChange = function(e, t) {
            return e.item = t, null === this._identityChangesTail ? this._identityChangesTail = this._identityChangesHead = e : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = e, 
            e;
        }, e;
    }(), Pr = function(e, t) {
        this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, 
        this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, 
        this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, 
        this._nextMoved = null, this._nextIdentityChange = null;
    }, Nr = function() {
        function e() {
            this._head = null, this._tail = null;
        }
        return e.prototype.add = function(e) {
            null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, 
            e._prevDup = this._tail, e._nextDup = null, this._tail = e);
        }, e.prototype.get = function(e, t) {
            var n;
            for (n = this._head; null !== n; n = n._nextDup) if ((null === t || t <= n.currentIndex) && Me(n.trackById, e)) return n;
            return null;
        }, e.prototype.remove = function(e) {
            var t = e._prevDup, n = e._nextDup;
            return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, 
            null === this._head;
        }, e;
    }(), Mr = function() {
        function e() {
            this.map = new Map();
        }
        return e.prototype.put = function(e) {
            var t = e.trackById, n = this.map.get(t);
            n || (n = new Nr(), this.map.set(t, n)), n.add(e);
        }, e.prototype.get = function(e, t) {
            var n = e, r = this.map.get(n);
            return r ? r.get(e, t) : null;
        }, e.prototype.remove = function(e) {
            var t = e.trackById;
            return this.map.get(t).remove(e) && this.map.delete(t), e;
        }, Object.defineProperty(e.prototype, "isEmpty", {
            get: function() {
                return 0 === this.map.size;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.clear = function() {
            this.map.clear();
        }, e;
    }();
    function Ir(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
    }
    var Rr, jr = function() {
        function e() {}
        return e.prototype.supports = function(e) {
            return e instanceof Map || Sr(e);
        }, e.prototype.create = function() {
            return new Br();
        }, e;
    }(), Br = function() {
        function e() {
            this._records = new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, 
            this._changesHead = null, this._changesTail = null, this._additionsHead = null, 
            this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
        }
        return Object.defineProperty(e.prototype, "isDirty", {
            get: function() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._mapHead; null !== t; t = t._next) e(t);
        }, e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }, e.prototype.forEachChangedItem = function(e) {
            var t;
            for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }, e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }, e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }, e.prototype.diff = function(e) {
            if (e) {
                if (!(e instanceof Map || Sr(e))) throw new Error("Error trying to diff '" + Ie(e) + "'. Only maps and objects are allowed");
            } else e = new Map();
            return this.check(e) ? this : null;
        }, e.prototype.onDestroy = function() {}, e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n = this._mapHead;
            if (this._appendAfter = null, this._forEach(e, function(e, r) {
                if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next; else {
                    var o = t._getOrCreateRecordForKey(r, e);
                    n = t._insertBeforeOrAppend(n, o);
                }
            }), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), 
                this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, 
                r.currentValue = null, r._prev = null, r._next = null;
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), 
            this.isDirty;
        }, e.prototype._insertBeforeOrAppend = function(e, t) {
            if (e) {
                var n = e._prev;
                return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), 
                this._appendAfter = e, e;
            }
            return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, 
            this._appendAfter = t, null;
        }, e.prototype._getOrCreateRecordForKey = function(e, t) {
            if (this._records.has(e)) {
                var n = this._records.get(e);
                this._maybeAddToChanges(n, t);
                var r = n._prev, o = n._next;
                return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n;
            }
            var i = new Vr(e);
            return this._records.set(e, i), i.currentValue = t, this._addToAdditions(i), i;
        }, e.prototype._reset = function() {
            if (this.isDirty) {
                var e = void 0;
                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, 
                this._removalsHead = null;
            }
        }, e.prototype._maybeAddToChanges = function(e, t) {
            Me(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, 
            this._addToChanges(e));
        }, e.prototype._addToAdditions = function(e) {
            null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, 
            this._additionsTail = e);
        }, e.prototype._addToChanges = function(e) {
            null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, 
            this._changesTail = e);
        }, e.prototype._forEach = function(e, t) {
            e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(function(n) {
                return t(e[n], n);
            });
        }, e;
    }(), Vr = function(e) {
        this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, 
        this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, 
        this._nextChanged = null;
    }, Lr = function() {
        function e(e) {
            this.factories = e;
        }
        return e.create = function(t, n) {
            if (null != n) {
                var r = n.factories.slice();
                t = t.concat(r);
            }
            return new e(t);
        }, e.extend = function(t) {
            return {
                provide: e,
                useFactory: function(n) {
                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                    return e.create(t, n);
                },
                deps: [ [ e, new Ge(), new Ze() ] ]
            };
        }, e.prototype.find = function(e) {
            var t, n = this.factories.find(function(t) {
                return t.supports(e);
            });
            if (null != n) return n;
            throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + ((t = e).name || typeof t) + "'");
        }, e.ngInjectableDef = ae({
            providedIn: "root",
            factory: function() {
                return new e([ new Or() ]);
            }
        }), e;
    }(), zr = function() {
        function e(e) {
            this.factories = e;
        }
        return e.create = function(t, n) {
            if (n) {
                var r = n.factories.slice();
                t = t.concat(r);
            }
            return new e(t);
        }, e.extend = function(t) {
            return {
                provide: e,
                useFactory: function(n) {
                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                    return e.create(t, n);
                },
                deps: [ [ e, new Ge(), new Ze() ] ]
            };
        }, e.prototype.find = function(e) {
            var t = this.factories.find(function(t) {
                return t.supports(e);
            });
            if (t) return t;
            throw new Error("Cannot find a differ supporting object '" + e + "'");
        }, e;
    }(), Hr = [ new jr() ], Ur = [ new Or() ], Wr = new Lr(Ur), Zr = new zr(Hr), Kr = Qn(null, "core", [ {
        provide: vn,
        useValue: "unknown"
    }, {
        provide: tr,
        deps: [ et ]
    }, {
        provide: Gn,
        deps: []
    }, {
        provide: gn,
        deps: []
    } ]), Gr = new ce("LocaleId");
    function qr() {
        return Wr;
    }
    function $r() {
        return Zr;
    }
    function Yr(e) {
        return e || "en-US";
    }
    new ce("Translations"), new ce("TranslationsFormat"), function(e) {
        e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore";
    }(Rr || (Rr = {}));
    var Jr = function() {
        function e(e) {}
        return e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ rr, ln, _n, dn, {
                    provide: Lr,
                    useFactory: qr
                }, {
                    provide: zr,
                    useFactory: $r
                }, {
                    provide: Gr,
                    useFactory: Yr,
                    deps: [ [ new We(Gr), new Ze(), new Ge() ] ]
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: rr
            } ];
        }, e;
    }(), Xr = function() {
        function e(e) {
            if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), 
            this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                var t = this.inertDocument.createElement("html");
                this.inertDocument.appendChild(t), this.inertBodyElement = this.inertDocument.createElement("body"), 
                t.appendChild(this.inertBodyElement);
            }
            this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', 
            !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', 
            this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() {
                try {
                    return !!window.DOMParser;
                } catch (e) {
                    return !1;
                }
            }() ? this.getInertBodyElement = this.getInertBodyElement_DOMParser : this.getInertBodyElement = this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR;
        }
        return e.prototype.getInertBodyElement_XHR = function(e) {
            e = "<body><remove></remove>" + e + "</body>";
            try {
                e = encodeURI(e);
            } catch (e) {
                return null;
            }
            var t = new XMLHttpRequest();
            t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), 
            t.send(null);
            var n = t.response.body;
            return n.removeChild(n.firstChild), n;
        }, e.prototype.getInertBodyElement_DOMParser = function(e) {
            e = "<body><remove></remove>" + e + "</body>";
            try {
                var t = new window.DOMParser().parseFromString(e, "text/html").body;
                return t.removeChild(t.firstChild), t;
            } catch (e) {
                return null;
            }
        }, e.prototype.getInertBodyElement_InertDocument = function(e) {
            var t = this.inertDocument.createElement("template");
            return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, 
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), 
            this.inertBodyElement);
        }, e.prototype.stripCustomNsAttrs = function(e) {
            for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
                var r = t.item(n).name;
                "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r);
            }
            for (var o = e.firstChild; o; ) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), 
            o = o.nextSibling;
        }, e;
    }(), Qr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, eo = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function to(e) {
        return (e = String(e)).match(Qr) || e.match(eo) ? e : (Xn() && console.warn("WARNING: sanitizing unsafe URL value " + e + " (see http://g.co/ng/security#xss)"), 
        "unsafe:" + e);
    }
    function no(e) {
        var t, n, r = {};
        try {
            for (var o = s(e.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0;
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o);
            } finally {
                if (t) throw t.error;
            }
        }
        return r;
    }
    function ro() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n, r, o = {};
        try {
            for (var i = s(e), u = i.next(); !u.done; u = i.next()) {
                var a = u.value;
                for (var c in a) a.hasOwnProperty(c) && (o[c] = !0);
            }
        } catch (e) {
            n = {
                error: e
            };
        } finally {
            try {
                u && !u.done && (r = i.return) && r.call(i);
            } finally {
                if (n) throw n.error;
            }
        }
        return o;
    }
    var oo, io = no("area,br,col,hr,img,wbr"), so = no("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), uo = no("rp,rt"), ao = ro(uo, so), co = ro(so, no("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), lo = ro(uo, no("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), po = ro(io, co, lo, ao), fo = no("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), ho = no("srcset"), yo = no("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), vo = ro(fo, ho, yo), mo = function() {
        function e() {
            this.sanitizedSomething = !1, this.buf = [];
        }
        return e.prototype.sanitizeChildren = function(e) {
            for (var t = e.firstChild; t; ) if (t.nodeType === Node.ELEMENT_NODE ? this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, 
            t.firstChild) t = t.firstChild; else for (;t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                var n = this.checkClobberedElement(t, t.nextSibling);
                if (n) {
                    t = n;
                    break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
            }
            return this.buf.join("");
        }, e.prototype.startElement = function(e) {
            var t = e.nodeName.toLowerCase();
            if (po.hasOwnProperty(t)) {
                this.buf.push("<"), this.buf.push(t);
                for (var n, r = e.attributes, o = 0; o < r.length; o++) {
                    var i = r.item(o), s = i.name, u = s.toLowerCase();
                    if (vo.hasOwnProperty(u)) {
                        var a = i.value;
                        fo[u] && (a = to(a)), ho[u] && (n = a, a = (n = String(n)).split(",").map(function(e) {
                            return to(e.trim());
                        }).join(", ")), this.buf.push(" ", s, '="', _o(a), '"');
                    } else this.sanitizedSomething = !0;
                }
                this.buf.push(">");
            } else this.sanitizedSomething = !0;
        }, e.prototype.endElement = function(e) {
            var t = e.nodeName.toLowerCase();
            po.hasOwnProperty(t) && !io.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), 
            this.buf.push(">"));
        }, e.prototype.chars = function(e) {
            this.buf.push(_o(e));
        }, e.prototype.checkClobberedElement = function(e, t) {
            if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + e.outerHTML);
            return t;
        }, e;
    }(), go = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, wo = /([^\#-~ |!])/g;
    function _o(e) {
        return e.replace(/&/g, "&amp;").replace(go, function(e) {
            return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";";
        }).replace(wo, function(e) {
            return "&#" + e.charCodeAt(0) + ";";
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function bo(e) {
        return "content" in e && function(e) {
            return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName;
        }(e) ? e.content : null;
    }
    var Co, Do = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"), Eo = /^url\(([^)]+)\)$/;
    !function(e) {
        e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", 
        e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL";
    }(Co || (Co = {}));
    var xo = function() {};
    function Ao(e, t, n) {
        var r = e.state, o = 1792 & r;
        return o === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : o === n;
    }
    function ko(e, t, n) {
        return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0);
    }
    function So(e, t) {
        return e.nodes[t];
    }
    function Oo(e, t) {
        return e.nodes[t];
    }
    function Fo(e, t) {
        return e.nodes[t];
    }
    function To(e, t) {
        return e.nodes[t];
    }
    function Po(e, t) {
        return e.nodes[t];
    }
    var No = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0
    };
    function Mo(e, t, n, r) {
        var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + t + "'. Current value: '" + n + "'.";
        return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), 
        function(e, t) {
            var n = new Error(e);
            return Io(n, t), n;
        }(o, e);
    }
    function Io(e, t) {
        e[kt] = t, e[Ot] = t.logError.bind(t);
    }
    function Ro(e) {
        return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + e);
    }
    var jo = function() {}, Bo = new Map();
    function Vo(e) {
        var t = Bo.get(e);
        return t || (t = Ie(e) + "_" + Bo.size, Bo.set(e, t)), t;
    }
    function Lo(e, t, n, r) {
        var o = e.oldValues;
        return !(!(2 & e.state) && Me(o[t.bindingIndex + n], r));
    }
    function zo(e, t, n, r) {
        return !!Lo(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0);
    }
    function Ho(e, t, n, r) {
        var o = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Er(o, r)) {
            var i = t.bindings[n].name;
            throw Mo(No.createDebugContext(e, t.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & e.state));
        }
    }
    function Uo(e) {
        for (var t = e; t; ) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent;
    }
    function Wo(e, t) {
        for (var n = e; n && n !== t; ) n.state |= 64, n = n.viewContainerParent || n.parent;
    }
    function Zo(e, t, n, r) {
        try {
            return Uo(33554432 & e.def.nodes[t].flags ? Oo(e, t).componentView : e), No.handleEvent(e, t, n, r);
        } catch (t) {
            e.root.errorHandler.handleError(t);
        }
    }
    function Ko(e) {
        return e.parent ? Oo(e.parent, e.parentNodeDef.nodeIndex) : null;
    }
    function Go(e) {
        return e.parent ? e.parentNodeDef.parent : null;
    }
    function qo(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Oo(e, t.nodeIndex).renderElement;

          case 2:
            return So(e, t.nodeIndex).renderText;
        }
    }
    function $o(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
    }
    function Yo(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
    }
    function Jo(e, t) {
        return e.map(function(e) {
            var n, r, o;
            return Array.isArray(e) ? (r = (o = u(e, 2))[0], n = o[1]) : (r = 0, n = e), n && ("function" == typeof n || "object" == typeof n) && t && Object.defineProperty(n, $e, {
                value: t,
                configurable: !0
            }), {
                flags: r,
                token: n,
                tokenKey: Vo(n)
            };
        });
    }
    function Xo(e, t, n) {
        var r = n.renderParent;
        return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Ct.Native ? Oo(e, n.renderParent.nodeIndex).renderElement : void 0 : t;
    }
    var Qo = new WeakMap();
    function ei(e) {
        var t = Qo.get(e);
        return t || ((t = e(function() {
            return jo;
        })).factory = e, Qo.set(e, t)), t;
    }
    function ti(e, t, n, r, o) {
        3 === t && (n = e.renderer.parentNode(qo(e, e.def.lastRenderRootNode))), ni(e, t, 0, e.def.nodes.length - 1, n, r, o);
    }
    function ni(e, t, n, r, o, i, s) {
        for (var u = n; u <= r; u++) {
            var a = e.def.nodes[u];
            11 & a.flags && oi(e, a, t, o, i, s), u += a.childCount;
        }
    }
    function ri(e, t, n, r, o, i) {
        for (var s = e; s && !$o(s); ) s = s.parent;
        for (var u = s.parent, a = Go(s), c = a.nodeIndex + 1, l = a.nodeIndex + a.childCount, p = c; p <= l; p++) {
            var f = u.def.nodes[p];
            f.ngContentIndex === t && oi(u, f, n, r, o, i), p += f.childCount;
        }
        if (!u.parent) {
            var d = e.root.projectableNodes[t];
            if (d) for (p = 0; p < d.length; p++) ii(e, d[p], n, r, o, i);
        }
    }
    function oi(e, t, n, r, o, i) {
        if (8 & t.flags) ri(e, t.ngContent.index, n, r, o, i); else {
            var s = qo(e, t);
            if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && ii(e, s, n, r, o, i), 
            32 & t.bindingFlags && ii(Oo(e, t.nodeIndex).componentView, s, n, r, o, i)) : ii(e, s, n, r, o, i), 
            16777216 & t.flags) for (var u = Oo(e, t.nodeIndex).viewContainer._embeddedViews, a = 0; a < u.length; a++) ti(u[a], n, r, o, i);
            1 & t.flags && !t.element.name && ni(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
        }
    }
    function ii(e, t, n, r, o, i) {
        var s = e.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, t);
            break;

          case 2:
            s.insertBefore(r, t, o);
            break;

          case 3:
            s.removeChild(r, t);
            break;

          case 0:
            i.push(t);
        }
    }
    var si = /^:([^:]+):(.+)$/;
    function ui(e) {
        if (":" === e[0]) {
            var t = e.match(si);
            return [ t[1], t[2] ];
        }
        return [ "", e ];
    }
    function ai(e, t, n) {
        var r, o = n.element, i = e.root.selectorOrNode, s = e.renderer;
        if (e.parent || !i) {
            r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
            var a = Xo(e, t, n);
            a && s.appendChild(a, r);
        } else r = s.selectRootElement(i);
        if (o.attrs) for (var c = 0; c < o.attrs.length; c++) {
            var l = u(o.attrs[c], 3), p = l[0], f = l[1], d = l[2];
            s.setAttribute(r, f, d, p);
        }
        return r;
    }
    function ci(e, t, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
            var i = n.outputs[o], s = li(e, n.nodeIndex, (l = i.target, p = i.eventName, l ? l + ":" + p : p)), u = i.target, a = e;
            "component" === i.target && (u = null, a = t);
            var c = a.renderer.listen(u || r, i.eventName, s);
            e.disposables[n.outputIndex + o] = c;
        }
        var l, p;
    }
    function li(e, t, n) {
        return function(r) {
            return Zo(e, t, n, r);
        };
    }
    function pi(e, t, n, r) {
        if (!zo(e, t, n, r)) return !1;
        var o = t.bindings[n], i = Oo(e, t.nodeIndex), s = i.renderElement, u = o.name;
        switch (15 & o.flags) {
          case 1:
            !function(e, t, n, r, o, i) {
                var s = t.securityContext, u = s ? e.root.sanitizer.sanitize(s, i) : i;
                u = null != u ? u.toString() : null;
                var a = e.renderer;
                null != i ? a.setAttribute(n, o, u, r) : a.removeAttribute(n, o, r);
            }(e, o, s, o.ns, u, r);
            break;

          case 2:
            !function(e, t, n, r) {
                var o = e.renderer;
                r ? o.addClass(t, n) : o.removeClass(t, n);
            }(e, s, u, r);
            break;

          case 4:
            !function(e, t, n, r, o) {
                var i = e.root.sanitizer.sanitize(Co.STYLE, o);
                if (null != i) {
                    i = i.toString();
                    var s = t.suffix;
                    null != s && (i += s);
                } else i = null;
                var u = e.renderer;
                null != i ? u.setStyle(n, r, i) : u.removeStyle(n, r);
            }(e, o, s, u, r);
            break;

          case 8:
            !function(e, t, n, r, o) {
                var i = t.securityContext, s = i ? e.root.sanitizer.sanitize(i, o) : o;
                e.renderer.setProperty(n, r, s);
            }(33554432 & t.flags && 32 & o.flags ? i.componentView : e, o, s, u, r);
        }
        return !0;
    }
    var fi = new Object(), di = Vo(et), hi = Vo(Xe), yi = Vo(Pn);
    function vi(e, t, n, r) {
        return n = Ue(n), {
            index: -1,
            deps: Jo(r, Ie(t)),
            flags: e,
            token: t,
            value: n
        };
    }
    function mi(e, t, n) {
        void 0 === n && (n = et.THROW_IF_NOT_FOUND);
        var r, o, i = yt(e);
        try {
            if (8 & t.flags) return t.token;
            if (2 & t.flags && (n = null), 1 & t.flags) return e._parent.get(t.token, n);
            var s = t.tokenKey;
            switch (s) {
              case di:
              case hi:
              case yi:
                return e;
            }
            var u = e._def.providersByKey[s];
            if (u) {
                var a = e._providers[u.index];
                return void 0 === a && (a = e._providers[u.index] = gi(e, u)), a === fi ? void 0 : a;
            }
            if (t.token.ngInjectableDef && (r = e, null != (o = t.token.ngInjectableDef).providedIn && (function(e, t) {
                return e._def.modules.indexOf(t) > -1;
            }(r, o.providedIn) || "root" === o.providedIn && r._def.isRoot))) {
                var c = t.token.ngInjectableDef, l = e._providers.length;
                return e._def.providersByKey[t.tokenKey] = {
                    flags: 5120,
                    value: c.factory,
                    deps: [],
                    index: l,
                    token: t.token
                }, e._providers[l] = fi, e._providers[l] = gi(e, e._def.providersByKey[t.tokenKey]);
            }
            return e._parent.get(t.token, n);
        } finally {
            yt(i);
        }
    }
    function gi(e, t) {
        var n;
        switch (201347067 & t.flags) {
          case 512:
            n = function(e, t, n) {
                var r = n.length;
                switch (r) {
                  case 0:
                    return new t();

                  case 1:
                    return new t(mi(e, n[0]));

                  case 2:
                    return new t(mi(e, n[0]), mi(e, n[1]));

                  case 3:
                    return new t(mi(e, n[0]), mi(e, n[1]), mi(e, n[2]));

                  default:
                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = mi(e, n[i]);
                    return new (t.bind.apply(t, a([ void 0 ], o)))();
                }
            }(e, t.value, t.deps);
            break;

          case 1024:
            n = function(e, t, n) {
                var r = n.length;
                switch (r) {
                  case 0:
                    return t();

                  case 1:
                    return t(mi(e, n[0]));

                  case 2:
                    return t(mi(e, n[0]), mi(e, n[1]));

                  case 3:
                    return t(mi(e, n[0]), mi(e, n[1]), mi(e, n[2]));

                  default:
                    for (var o = Array(r), i = 0; i < r; i++) o[i] = mi(e, n[i]);
                    return t.apply(void 0, a(o));
                }
            }(e, t.value, t.deps);
            break;

          case 2048:
            n = mi(e, t.deps[0]);
            break;

          case 256:
            n = t.value;
        }
        return n === fi || null == n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), 
        void 0 === n ? fi : n;
    }
    function wi(e, t) {
        var n = e.viewContainer._embeddedViews;
        if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null;
        var r = n[t];
        return r.viewContainerParent = null, Di(n, t), No.dirtyParentQueries(r), bi(r), 
        r;
    }
    function _i(e, t, n) {
        var r = t ? qo(t, t.def.lastRenderRootNode) : e.renderElement;
        ti(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0);
    }
    function bi(e) {
        ti(e, 3, null, null, void 0);
    }
    function Ci(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
    }
    function Di(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
    }
    var Ei = new Object();
    !function(e) {
        function t(t, n, r, o, i, s) {
            var u = e.call(this) || this;
            return u.selector = t, u.componentType = n, u._inputs = o, u._outputs = i, u.ngContentSelectors = s, 
            u.viewDefFactory = r, u;
        }
        o(t, e), Object.defineProperty(t.prototype, "inputs", {
            get: function() {
                var e = [], t = this._inputs;
                for (var n in t) {
                    var r = t[n];
                    e.push({
                        propName: n,
                        templateName: r
                    });
                }
                return e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "outputs", {
            get: function() {
                var e = [];
                for (var t in this._outputs) {
                    var n = this._outputs[t];
                    e.push({
                        propName: t,
                        templateName: n
                    });
                }
                return e;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.create = function(e, t, n, r) {
            if (!r) throw new Error("ngModule should be provided");
            var o = ei(this.viewDefFactory), i = o.nodes[0].element.componentProvider.nodeIndex, s = No.createRootView(e, t || [], n, o, r, Ei), u = Fo(s, i).instance;
            return n && s.renderer.setAttribute(Oo(s, 0).renderElement, "ng-version", At.full), 
            new xi(s, new Oi(s), u);
        };
    }(Cn);
    var xi = function(e) {
        function t(t, n, r) {
            var o = e.call(this) || this;
            return o._view = t, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], 
            o.hostView = n, o.changeDetectorRef = n, o.instance = r, o;
        }
        return o(t, e), Object.defineProperty(t.prototype, "location", {
            get: function() {
                return new cr(Oo(this._view, this._elDef.nodeIndex).renderElement);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "injector", {
            get: function() {
                return new Ni(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "componentType", {
            get: function() {
                return this._component.constructor;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.destroy = function() {
            this._viewRef.destroy();
        }, t.prototype.onDestroy = function(e) {
            this._viewRef.onDestroy(e);
        }, t;
    }(function() {});
    function Ai(e, t, n) {
        return new ki(e, t, n);
    }
    var ki = function() {
        function e(e, t, n) {
            this._view = e, this._elDef = t, this._data = n, this._embeddedViews = [];
        }
        return Object.defineProperty(e.prototype, "element", {
            get: function() {
                return new cr(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "injector", {
            get: function() {
                return new Ni(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "parentInjector", {
            get: function() {
                for (var e = this._view, t = this._elDef.parent; !t && e; ) t = Go(e), e = e.parent;
                return e ? new Ni(e, t) : new Ni(this._view, null);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.clear = function() {
            for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
                var t = wi(this._data, e);
                No.destroyView(t);
            }
        }, e.prototype.get = function(e) {
            var t = this._embeddedViews[e];
            if (t) {
                var n = new Oi(t);
                return n.attachToViewContainerRef(this), n;
            }
            return null;
        }, Object.defineProperty(e.prototype, "length", {
            get: function() {
                return this._embeddedViews.length;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.createEmbeddedView = function(e, t, n) {
            var r = e.createEmbeddedView(t || {});
            return this.insert(r, n), r;
        }, e.prototype.createComponent = function(e, t, n, r, o) {
            var i = n || this.parentInjector;
            o || e instanceof Tn || (o = i.get(Pn));
            var s = e.create(i, r, void 0, o);
            return this.insert(s.hostView, t), s;
        }, e.prototype.insert = function(e, t) {
            if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
            var n, r, o, i, s, u = e, a = u._view;
            return n = this._view, o = t, i = a, s = (r = this._data).viewContainer._embeddedViews, 
            null !== o && void 0 !== o || (o = s.length), i.viewContainerParent = n, Ci(s, o, i), 
            function(e, t) {
                var n = Ko(t);
                if (n && n !== e && !(16 & t.state)) {
                    t.state |= 16;
                    var r = n.template._projectedViews;
                    r || (r = n.template._projectedViews = []), r.push(t), function(e, t) {
                        if (!(4 & t.flags)) {
                            e.nodeFlags |= 4, t.flags |= 4;
                            for (var n = t.parent; n; ) n.childFlags |= 4, n = n.parent;
                        }
                    }(t.parent.def, t.parentNodeDef);
                }
            }(r, i), No.dirtyParentQueries(i), _i(r, o > 0 ? s[o - 1] : null, i), u.attachToViewContainerRef(this), 
            e;
        }, e.prototype.move = function(e, t) {
            if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
            var n, r, o, i, s;
            return r = this._embeddedViews.indexOf(e._view), o = t, s = (i = (n = this._data).viewContainer._embeddedViews)[r], 
            Di(i, r), null == o && (o = i.length), Ci(i, o, s), No.dirtyParentQueries(s), bi(s), 
            _i(n, o > 0 ? i[o - 1] : null, s), e;
        }, e.prototype.indexOf = function(e) {
            return this._embeddedViews.indexOf(e._view);
        }, e.prototype.remove = function(e) {
            var t = wi(this._data, e);
            t && No.destroyView(t);
        }, e.prototype.detach = function(e) {
            var t = wi(this._data, e);
            return t ? new Oi(t) : null;
        }, e;
    }();
    function Si(e) {
        return new Oi(e);
    }
    var Oi = function() {
        function e(e) {
            this._view = e, this._viewContainerRef = null, this._appRef = null;
        }
        return Object.defineProperty(e.prototype, "rootNodes", {
            get: function() {
                return ti(this._view, 0, void 0, void 0, e = []), e;
                var e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "context", {
            get: function() {
                return this._view.context;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "destroyed", {
            get: function() {
                return 0 != (128 & this._view.state);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.markForCheck = function() {
            Uo(this._view);
        }, e.prototype.detach = function() {
            this._view.state &= -5;
        }, e.prototype.detectChanges = function() {
            var e = this._view.root.rendererFactory;
            e.begin && e.begin();
            try {
                No.checkAndUpdateView(this._view);
            } finally {
                e.end && e.end();
            }
        }, e.prototype.checkNoChanges = function() {
            No.checkNoChangesView(this._view);
        }, e.prototype.reattach = function() {
            this._view.state |= 4;
        }, e.prototype.onDestroy = function(e) {
            this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e);
        }, e.prototype.destroy = function() {
            this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), 
            No.destroyView(this._view);
        }, e.prototype.detachFromAppRef = function() {
            this._appRef = null, bi(this._view), No.dirtyParentQueries(this._view);
        }, e.prototype.attachToAppRef = function(e) {
            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = e;
        }, e.prototype.attachToViewContainerRef = function(e) {
            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = e;
        }, e;
    }();
    function Fi(e, t) {
        return new Ti(e, t);
    }
    var Ti = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r._parentView = t, r._def = n, r;
        }
        return o(t, e), t.prototype.createEmbeddedView = function(e) {
            return new Oi(No.createEmbeddedView(this._parentView, this._def, this._def.element.template, e));
        }, Object.defineProperty(t.prototype, "elementRef", {
            get: function() {
                return new cr(Oo(this._parentView, this._def.nodeIndex).renderElement);
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }(yr);
    function Pi(e, t) {
        return new Ni(e, t);
    }
    var Ni = function() {
        function e(e, t) {
            this.view = e, this.elDef = t;
        }
        return e.prototype.get = function(e, t) {
            void 0 === t && (t = et.THROW_IF_NOT_FOUND);
            var n = !!this.elDef && 0 != (33554432 & this.elDef.flags);
            return No.resolveDep(this.view, this.elDef, n, {
                flags: 0,
                token: e,
                tokenKey: Vo(e)
            }, t);
        }, e;
    }();
    function Mi(e) {
        return new Ii(e.renderer);
    }
    var Ii = function() {
        function e(e) {
            this.delegate = e;
        }
        return e.prototype.selectRootElement = function(e) {
            return this.delegate.selectRootElement(e);
        }, e.prototype.createElement = function(e, t) {
            var n = u(ui(t), 2), r = n[0], o = n[1], i = this.delegate.createElement(o, r);
            return e && this.delegate.appendChild(e, i), i;
        }, e.prototype.createViewRoot = function(e) {
            return e;
        }, e.prototype.createTemplateAnchor = function(e) {
            var t = this.delegate.createComment("");
            return e && this.delegate.appendChild(e, t), t;
        }, e.prototype.createText = function(e, t) {
            var n = this.delegate.createText(t);
            return e && this.delegate.appendChild(e, n), n;
        }, e.prototype.projectNodes = function(e, t) {
            for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }, e.prototype.attachViewAfter = function(e, t) {
            for (var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), o = 0; o < t.length; o++) this.delegate.insertBefore(n, t[o], r);
        }, e.prototype.detachView = function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], r = this.delegate.parentNode(n);
                this.delegate.removeChild(r, n);
            }
        }, e.prototype.destroyView = function(e, t) {
            for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }, e.prototype.listen = function(e, t, n) {
            return this.delegate.listen(e, t, n);
        }, e.prototype.listenGlobal = function(e, t, n) {
            return this.delegate.listen(e, t, n);
        }, e.prototype.setElementProperty = function(e, t, n) {
            this.delegate.setProperty(e, t, n);
        }, e.prototype.setElementAttribute = function(e, t, n) {
            var r = u(ui(t), 2), o = r[0], i = r[1];
            null != n ? this.delegate.setAttribute(e, i, n, o) : this.delegate.removeAttribute(e, i, o);
        }, e.prototype.setBindingDebugInfo = function(e, t, n) {}, e.prototype.setElementClass = function(e, t, n) {
            n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }, e.prototype.setElementStyle = function(e, t, n) {
            null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t);
        }, e.prototype.invokeElementMethod = function(e, t, n) {
            e[t].apply(e, n);
        }, e.prototype.setText = function(e, t) {
            this.delegate.setValue(e, t);
        }, e.prototype.animate = function() {
            throw new Error("Renderer.animate is no longer supported!");
        }, e;
    }();
    function Ri(e, t, n, r) {
        return new ji(e, t, n, r);
    }
    var ji = function() {
        function e(e, t, n, r) {
            this._moduleType = e, this._parent = t, this._bootstrapComponents = n, this._def = r, 
            this._destroyListeners = [], this._destroyed = !1, this.injector = this, function(e) {
                for (var t = e._def, n = e._providers = new Array(t.providers.length), r = 0; r < t.providers.length; r++) {
                    var o = t.providers[r];
                    4096 & o.flags || void 0 === n[r] && (n[r] = gi(e, o));
                }
            }(this);
        }
        return e.prototype.get = function(e, t, n) {
            void 0 === t && (t = et.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
            var r = 0;
            return 4 & n ? r |= 1 : 2 & n && (r |= 4), mi(this, {
                token: e,
                tokenKey: Vo(e),
                flags: r
            }, t);
        }, Object.defineProperty(e.prototype, "instance", {
            get: function() {
                return this.get(this._moduleType);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "componentFactoryResolver", {
            get: function() {
                return this.get(On);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.destroy = function() {
            if (this._destroyed) throw new Error("The ng module " + Ie(this.instance.constructor) + " has already been destroyed.");
            this._destroyed = !0, function(e, t) {
                for (var n = e._def, r = new Set(), o = 0; o < n.providers.length; o++) if (131072 & n.providers[o].flags) {
                    var i = e._providers[o];
                    if (i && i !== fi) {
                        var s = i.ngOnDestroy;
                        "function" != typeof s || r.has(i) || (s.apply(i), r.add(i));
                    }
                }
            }(this), this._destroyListeners.forEach(function(e) {
                return e();
            });
        }, e.prototype.onDestroy = function(e) {
            this._destroyListeners.push(e);
        }, e;
    }(), Bi = Vo(function() {}), Vi = Vo(ar), Li = Vo(cr), zi = Vo(vr), Hi = Vo(yr), Ui = Vo(mr), Wi = Vo(et), Zi = Vo(Xe);
    function Ki(e, t) {
        return Yi(e, t);
    }
    function Gi(e, t) {
        for (var n = e; n.parent && !$o(n); ) n = n.parent;
        return Ji(n.parent, Go(n), !0, t.provider.value, t.provider.deps);
    }
    function qi(e, t) {
        var n = (32768 & t.flags) > 0, r = Ji(e, t.parent, n, t.provider.value, t.provider.deps);
        if (t.outputs.length) for (var o = 0; o < t.outputs.length; o++) {
            var i = t.outputs[o], s = r[i.propName].subscribe($i(e, t.parent.nodeIndex, i.eventName));
            e.disposables[t.outputIndex + o] = s.unsubscribe.bind(s);
        }
        return r;
    }
    function $i(e, t, n) {
        return function(r) {
            return Zo(e, t, n, r);
        };
    }
    function Yi(e, t) {
        var n = (8192 & t.flags) > 0, r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return Ji(e, t.parent, n, r.value, r.deps);

          case 1024:
            return function(e, t, n, r, o) {
                var i = o.length;
                switch (i) {
                  case 0:
                    return r();

                  case 1:
                    return r(es(e, t, n, o[0]));

                  case 2:
                    return r(es(e, t, n, o[0]), es(e, t, n, o[1]));

                  case 3:
                    return r(es(e, t, n, o[0]), es(e, t, n, o[1]), es(e, t, n, o[2]));

                  default:
                    for (var s = Array(i), u = 0; u < i; u++) s[u] = es(e, t, n, o[u]);
                    return r.apply(void 0, a(s));
                }
            }(e, t.parent, n, r.value, r.deps);

          case 2048:
            return es(e, t.parent, n, r.deps[0]);

          case 256:
            return r.value;
        }
    }
    function Ji(e, t, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();

          case 1:
            return new r(es(e, t, n, o[0]));

          case 2:
            return new r(es(e, t, n, o[0]), es(e, t, n, o[1]));

          case 3:
            return new r(es(e, t, n, o[0]), es(e, t, n, o[1]), es(e, t, n, o[2]));

          default:
            for (var s = new Array(i), u = 0; u < i; u++) s[u] = es(e, t, n, o[u]);
            return new (r.bind.apply(r, a([ void 0 ], s)))();
        }
    }
    var Xi, Qi = {};
    function es(e, t, n, r, o) {
        if (void 0 === o && (o = et.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
        var i = e;
        2 & r.flags && (o = null);
        var s = r.tokenKey;
        s === Ui && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, 
        t = t.parent);
        for (var u = e; u; ) {
            if (t) switch (s) {
              case Bi:
                return Mi(ts(u, t, n));

              case Vi:
                return ts(u, t, n).renderer;

              case Li:
                return new cr(Oo(u, t.nodeIndex).renderElement);

              case zi:
                return Oo(u, t.nodeIndex).viewContainer;

              case Hi:
                if (t.element.template) return Oo(u, t.nodeIndex).template;
                break;

              case Ui:
                return Si(ts(u, t, n));

              case Wi:
              case Zi:
                return Pi(u, t);

              default:
                var a = (n ? t.element.allProviders : t.element.publicProviders)[s];
                if (a) {
                    var c = Fo(u, a.nodeIndex);
                    return c || (c = {
                        instance: Yi(u, a)
                    }, u.nodes[a.nodeIndex] = c), c.instance;
                }
            }
            n = $o(u), t = Go(u), u = u.parent, 4 & r.flags && (u = null);
        }
        var l = i.root.injector.get(r.token, Qi);
        return l !== Qi || o === Qi ? l : i.root.ngModule.injector.get(r.token, o);
    }
    function ts(e, t, n) {
        var r;
        if (n) r = Oo(e, t.nodeIndex).componentView; else for (r = e; r.parent && !$o(r); ) r = r.parent;
        return r;
    }
    function ns(e, t, n, r, o, i) {
        if (32768 & n.flags) {
            var s = Oo(e, n.parent.nodeIndex).componentView;
            2 & s.def.flags && (s.state |= 8);
        }
        var u = n.bindings[r].name;
        if (t.instance[u] = o, 524288 & n.flags) {
            i = i || {};
            var a = xr.unwrap(e.oldValues[n.bindingIndex + r]);
            i[n.bindings[r].nonMinifiedName] = new Ar(a, o, 0 != (2 & e.state));
        }
        return e.oldValues[n.bindingIndex + r] = o, i;
    }
    function rs(e, t) {
        if (e.def.nodeFlags & t) for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o], s = i.parent;
            for (!s && i.flags & t && is(e, o, i.flags & t, r++), 0 == (i.childFlags & t) && (o += i.childCount); s && 1 & s.flags && o === s.nodeIndex + s.childCount; ) s.directChildFlags & t && (r = os(e, s, t, r)), 
            s = s.parent;
        }
    }
    function os(e, t, n, r) {
        for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
            var i = e.def.nodes[o];
            i.flags & n && is(e, o, i.flags & n, r++), o += i.childCount;
        }
        return r;
    }
    function is(e, t, n, r) {
        var o = Fo(e, t);
        if (o) {
            var i = o.instance;
            i && (No.setCurrentNode(e, t), 1048576 & n && ko(e, 512, r) && i.ngAfterContentInit(), 
            2097152 & n && i.ngAfterContentChecked(), 4194304 & n && ko(e, 768, r) && i.ngAfterViewInit(), 
            8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy());
        }
    }
    function ss(e) {
        for (var t = e.def.nodeMatchedQueries; e.parent && Yo(e); ) {
            var n = e.parentNodeDef;
            e = e.parent;
            for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & t) === i.query.filterId && Po(e, o).setDirty(), 
            !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount);
        }
        if (134217728 & e.def.nodeFlags) for (o = 0; o < e.def.nodes.length; o++) {
            var i;
            134217728 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && Po(e, o).setDirty(), 
            o += i.childCount;
        }
    }
    function us(e, t) {
        var n = Po(e, t.nodeIndex);
        if (n.dirty) {
            var r, o = void 0;
            if (67108864 & t.flags) {
                var i = t.parent.parent;
                o = as(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, []), r = Fo(e, t.parent.nodeIndex).instance;
            } else 134217728 & t.flags && (o = as(e, 0, e.def.nodes.length - 1, t.query, []), 
            r = e.component);
            n.reset(o);
            for (var s = t.query.bindings, u = !1, a = 0; a < s.length; a++) {
                var c = s[a], l = void 0;
                switch (c.bindingType) {
                  case 0:
                    l = n.first;
                    break;

                  case 1:
                    l = n, u = !0;
                }
                r[c.propName] = l;
            }
            u && n.notifyOnChanges();
        }
    }
    function as(e, t, n, r, o) {
        for (var i = t; i <= n; i++) {
            var s = e.def.nodes[i], u = s.matchedQueries[r.id];
            if (null != u && o.push(cs(e, s, u)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                var a = Oo(e, i);
                if ((s.childMatchedQueries & r.filterId) === r.filterId && (as(e, i + 1, i + s.childCount, r, o), 
                i += s.childCount), 16777216 & s.flags) for (var c = a.viewContainer._embeddedViews, l = 0; l < c.length; l++) {
                    var p = c[l], f = Ko(p);
                    f && f === a && as(p, 0, p.def.nodes.length - 1, r, o);
                }
                var d = a.template._projectedViews;
                if (d) for (l = 0; l < d.length; l++) {
                    var h = d[l];
                    as(h, 0, h.def.nodes.length - 1, r, o);
                }
            }
            (s.childMatchedQueries & r.filterId) !== r.filterId && (i += s.childCount);
        }
        return o;
    }
    function cs(e, t, n) {
        if (null != n) switch (n) {
          case 1:
            return Oo(e, t.nodeIndex).renderElement;

          case 0:
            return new cr(Oo(e, t.nodeIndex).renderElement);

          case 2:
            return Oo(e, t.nodeIndex).template;

          case 3:
            return Oo(e, t.nodeIndex).viewContainer;

          case 4:
            return Fo(e, t.nodeIndex).instance;
        }
    }
    function ls(e, t, n) {
        var r = Xo(e, t, n);
        r && ri(e, n.ngContent.index, 1, r, null, void 0);
    }
    function ps(e, t, n) {
        var r, o = e.renderer;
        r = o.createText(n.text.prefix);
        var i = Xo(e, t, n);
        return i && o.appendChild(i, r), {
            renderText: r
        };
    }
    function fs(e, t) {
        return (null != e ? e.toString() : "") + t.suffix;
    }
    function ds(e, t, n, r) {
        var o = vs(e.root, e.renderer, e, t, n);
        return ms(o, e.component, r), gs(o), o;
    }
    function hs(e, t, n) {
        var r = vs(e, e.renderer, null, null, t);
        return ms(r, n, n), gs(r), r;
    }
    function ys(e, t, n, r) {
        var o, i = t.element.componentRendererType;
        return o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer, vs(e.root, o, e, t.element.componentProvider, n);
    }
    function vs(e, t, n, r, o) {
        var i = new Array(o.nodes.length), s = o.outputCount ? new Array(o.outputCount) : null;
        return {
            def: o,
            parent: n,
            viewContainerParent: null,
            parentNodeDef: r,
            context: null,
            component: null,
            nodes: i,
            state: 13,
            root: e,
            renderer: t,
            oldValues: new Array(o.bindingCount),
            disposables: s,
            initIndex: -1
        };
    }
    function ms(e, t, n) {
        e.component = t, e.context = n;
    }
    function gs(e) {
        var t;
        if ($o(e)) {
            var n = e.parentNodeDef;
            t = Oo(e.parent, n.parent.nodeIndex).renderElement;
        }
        for (var r = e.def, o = e.nodes, i = 0; i < r.nodes.length; i++) {
            var s = r.nodes[i];
            No.setCurrentNode(e, i);
            var u = void 0;
            switch (201347067 & s.flags) {
              case 1:
                var a = ai(e, t, s), c = void 0;
                if (33554432 & s.flags) {
                    var l = ei(s.element.componentView);
                    c = No.createComponentView(e, s, l, a);
                }
                ci(e, c, s, a), u = {
                    renderElement: a,
                    componentView: c,
                    viewContainer: null,
                    template: s.element.template ? Fi(e, s) : void 0
                }, 16777216 & s.flags && (u.viewContainer = Ai(e, s, u));
                break;

              case 2:
                u = ps(e, t, s);
                break;

              case 512:
              case 1024:
              case 2048:
              case 256:
                (u = o[i]) || 4096 & s.flags || (u = {
                    instance: Ki(e, s)
                });
                break;

              case 16:
                u = {
                    instance: Gi(e, s)
                };
                break;

              case 16384:
                (u = o[i]) || (u = {
                    instance: qi(e, s)
                }), 32768 & s.flags && ms(Oo(e, s.parent.nodeIndex).componentView, u.instance, u.instance);
                break;

              case 32:
              case 64:
              case 128:
                u = {
                    value: void 0
                };
                break;

              case 67108864:
              case 134217728:
                u = new lr();
                break;

              case 8:
                ls(e, t, s), u = void 0;
            }
            o[i] = u;
        }
        As(e, Xi.CreateViewNodes), Fs(e, 201326592, 268435456, 0);
    }
    function ws(e) {
        Cs(e), No.updateDirectives(e, 1), ks(e, Xi.CheckNoChanges), No.updateRenderer(e, 1), 
        As(e, Xi.CheckNoChanges), e.state &= -97;
    }
    function _s(e) {
        1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, Ao(e, 0, 256), Cs(e), 
        No.updateDirectives(e, 0), ks(e, Xi.CheckAndUpdate), Fs(e, 67108864, 536870912, 0);
        var t = Ao(e, 256, 512);
        rs(e, 2097152 | (t ? 1048576 : 0)), No.updateRenderer(e, 0), As(e, Xi.CheckAndUpdate), 
        Fs(e, 134217728, 536870912, 0), rs(e, 8388608 | ((t = Ao(e, 512, 768)) ? 4194304 : 0)), 
        2 & e.def.flags && (e.state &= -9), e.state &= -97, Ao(e, 768, 1024);
    }
    function bs(e, t, n, r, o, i, s, u, c, l, p, f, d) {
        return 0 === n ? function(e, t, n, r, o, i, s, u, a, c, l, p) {
            switch (201347067 & t.flags) {
              case 1:
                return function(e, t, n, r, o, i, s, u, a, c, l, p) {
                    var f = t.bindings.length, d = !1;
                    return f > 0 && pi(e, t, 0, n) && (d = !0), f > 1 && pi(e, t, 1, r) && (d = !0), 
                    f > 2 && pi(e, t, 2, o) && (d = !0), f > 3 && pi(e, t, 3, i) && (d = !0), f > 4 && pi(e, t, 4, s) && (d = !0), 
                    f > 5 && pi(e, t, 5, u) && (d = !0), f > 6 && pi(e, t, 6, a) && (d = !0), f > 7 && pi(e, t, 7, c) && (d = !0), 
                    f > 8 && pi(e, t, 8, l) && (d = !0), f > 9 && pi(e, t, 9, p) && (d = !0), d;
                }(e, t, n, r, o, i, s, u, a, c, l, p);

              case 2:
                return function(e, t, n, r, o, i, s, u, a, c, l, p) {
                    var f = !1, d = t.bindings, h = d.length;
                    if (h > 0 && zo(e, t, 0, n) && (f = !0), h > 1 && zo(e, t, 1, r) && (f = !0), h > 2 && zo(e, t, 2, o) && (f = !0), 
                    h > 3 && zo(e, t, 3, i) && (f = !0), h > 4 && zo(e, t, 4, s) && (f = !0), h > 5 && zo(e, t, 5, u) && (f = !0), 
                    h > 6 && zo(e, t, 6, a) && (f = !0), h > 7 && zo(e, t, 7, c) && (f = !0), h > 8 && zo(e, t, 8, l) && (f = !0), 
                    h > 9 && zo(e, t, 9, p) && (f = !0), f) {
                        var y = t.text.prefix;
                        h > 0 && (y += fs(n, d[0])), h > 1 && (y += fs(r, d[1])), h > 2 && (y += fs(o, d[2])), 
                        h > 3 && (y += fs(i, d[3])), h > 4 && (y += fs(s, d[4])), h > 5 && (y += fs(u, d[5])), 
                        h > 6 && (y += fs(a, d[6])), h > 7 && (y += fs(c, d[7])), h > 8 && (y += fs(l, d[8])), 
                        h > 9 && (y += fs(p, d[9]));
                        var v = So(e, t.nodeIndex).renderText;
                        e.renderer.setValue(v, y);
                    }
                    return f;
                }(e, t, n, r, o, i, s, u, a, c, l, p);

              case 16384:
                return function(e, t, n, r, o, i, s, u, a, c, l, p) {
                    var f = Fo(e, t.nodeIndex), d = f.instance, h = !1, y = void 0, v = t.bindings.length;
                    return v > 0 && Lo(e, t, 0, n) && (h = !0, y = ns(e, f, t, 0, n, y)), v > 1 && Lo(e, t, 1, r) && (h = !0, 
                    y = ns(e, f, t, 1, r, y)), v > 2 && Lo(e, t, 2, o) && (h = !0, y = ns(e, f, t, 2, o, y)), 
                    v > 3 && Lo(e, t, 3, i) && (h = !0, y = ns(e, f, t, 3, i, y)), v > 4 && Lo(e, t, 4, s) && (h = !0, 
                    y = ns(e, f, t, 4, s, y)), v > 5 && Lo(e, t, 5, u) && (h = !0, y = ns(e, f, t, 5, u, y)), 
                    v > 6 && Lo(e, t, 6, a) && (h = !0, y = ns(e, f, t, 6, a, y)), v > 7 && Lo(e, t, 7, c) && (h = !0, 
                    y = ns(e, f, t, 7, c, y)), v > 8 && Lo(e, t, 8, l) && (h = !0, y = ns(e, f, t, 8, l, y)), 
                    v > 9 && Lo(e, t, 9, p) && (h = !0, y = ns(e, f, t, 9, p, y)), y && d.ngOnChanges(y), 
                    65536 & t.flags && ko(e, 256, t.nodeIndex) && d.ngOnInit(), 262144 & t.flags && d.ngDoCheck(), 
                    h;
                }(e, t, n, r, o, i, s, u, a, c, l, p);

              case 32:
              case 64:
              case 128:
                return function(e, t, n, r, o, i, s, u, a, c, l, p) {
                    var f = t.bindings, d = !1, h = f.length;
                    if (h > 0 && zo(e, t, 0, n) && (d = !0), h > 1 && zo(e, t, 1, r) && (d = !0), h > 2 && zo(e, t, 2, o) && (d = !0), 
                    h > 3 && zo(e, t, 3, i) && (d = !0), h > 4 && zo(e, t, 4, s) && (d = !0), h > 5 && zo(e, t, 5, u) && (d = !0), 
                    h > 6 && zo(e, t, 6, a) && (d = !0), h > 7 && zo(e, t, 7, c) && (d = !0), h > 8 && zo(e, t, 8, l) && (d = !0), 
                    h > 9 && zo(e, t, 9, p) && (d = !0), d) {
                        var y = To(e, t.nodeIndex), v = void 0;
                        switch (201347067 & t.flags) {
                          case 32:
                            v = new Array(f.length), h > 0 && (v[0] = n), h > 1 && (v[1] = r), h > 2 && (v[2] = o), 
                            h > 3 && (v[3] = i), h > 4 && (v[4] = s), h > 5 && (v[5] = u), h > 6 && (v[6] = a), 
                            h > 7 && (v[7] = c), h > 8 && (v[8] = l), h > 9 && (v[9] = p);
                            break;

                          case 64:
                            v = {}, h > 0 && (v[f[0].name] = n), h > 1 && (v[f[1].name] = r), h > 2 && (v[f[2].name] = o), 
                            h > 3 && (v[f[3].name] = i), h > 4 && (v[f[4].name] = s), h > 5 && (v[f[5].name] = u), 
                            h > 6 && (v[f[6].name] = a), h > 7 && (v[f[7].name] = c), h > 8 && (v[f[8].name] = l), 
                            h > 9 && (v[f[9].name] = p);
                            break;

                          case 128:
                            var m = n;
                            switch (h) {
                              case 1:
                                v = m.transform(n);
                                break;

                              case 2:
                                v = m.transform(r);
                                break;

                              case 3:
                                v = m.transform(r, o);
                                break;

                              case 4:
                                v = m.transform(r, o, i);
                                break;

                              case 5:
                                v = m.transform(r, o, i, s);
                                break;

                              case 6:
                                v = m.transform(r, o, i, s, u);
                                break;

                              case 7:
                                v = m.transform(r, o, i, s, u, a);
                                break;

                              case 8:
                                v = m.transform(r, o, i, s, u, a, c);
                                break;

                              case 9:
                                v = m.transform(r, o, i, s, u, a, c, l);
                                break;

                              case 10:
                                v = m.transform(r, o, i, s, u, a, c, l, p);
                            }
                        }
                        y.value = v;
                    }
                    return d;
                }(e, t, n, r, o, i, s, u, a, c, l, p);

              default:
                throw "unreachable";
            }
        }(e, t, r, o, i, s, u, c, l, p, f, d) : function(e, t, n) {
            switch (201347067 & t.flags) {
              case 1:
                return function(e, t, n) {
                    for (var r = !1, o = 0; o < n.length; o++) pi(e, t, o, n[o]) && (r = !0);
                    return r;
                }(e, t, n);

              case 2:
                return function(e, t, n) {
                    for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) zo(e, t, i, n[i]) && (o = !0);
                    if (o) {
                        var s = "";
                        for (i = 0; i < n.length; i++) s += fs(n[i], r[i]);
                        s = t.text.prefix + s;
                        var u = So(e, t.nodeIndex).renderText;
                        e.renderer.setValue(u, s);
                    }
                    return o;
                }(e, t, n);

              case 16384:
                return function(e, t, n) {
                    for (var r = Fo(e, t.nodeIndex), o = r.instance, i = !1, s = void 0, u = 0; u < n.length; u++) Lo(e, t, u, n[u]) && (i = !0, 
                    s = ns(e, r, t, u, n[u], s));
                    return s && o.ngOnChanges(s), 65536 & t.flags && ko(e, 256, t.nodeIndex) && o.ngOnInit(), 
                    262144 & t.flags && o.ngDoCheck(), i;
                }(e, t, n);

              case 32:
              case 64:
              case 128:
                return function(e, t, n) {
                    for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) zo(e, t, i, n[i]) && (o = !0);
                    if (o) {
                        var s = To(e, t.nodeIndex), u = void 0;
                        switch (201347067 & t.flags) {
                          case 32:
                            u = n;
                            break;

                          case 64:
                            for (u = {}, i = 0; i < n.length; i++) u[r[i].name] = n[i];
                            break;

                          case 128:
                            var c = n[0], l = n.slice(1);
                            u = c.transform.apply(c, a(l));
                        }
                        s.value = u;
                    }
                    return o;
                }(e, t, n);

              default:
                throw "unreachable";
            }
        }(e, t, r);
    }
    function Cs(e) {
        var t = e.def;
        if (4 & t.nodeFlags) for (var n = 0; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (4 & r.flags) {
                var o = Oo(e, n).template._projectedViews;
                if (o) for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    s.state |= 32, Wo(s, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
        }
    }
    function Ds(e, t, n, r, o, i, s, u, a, c, l, p, f) {
        return 0 === n ? function(e, t, n, r, o, i, s, u, a, c, l, p) {
            var f = t.bindings.length;
            f > 0 && Ho(e, t, 0, n), f > 1 && Ho(e, t, 1, r), f > 2 && Ho(e, t, 2, o), f > 3 && Ho(e, t, 3, i), 
            f > 4 && Ho(e, t, 4, s), f > 5 && Ho(e, t, 5, u), f > 6 && Ho(e, t, 6, a), f > 7 && Ho(e, t, 7, c), 
            f > 8 && Ho(e, t, 8, l), f > 9 && Ho(e, t, 9, p);
        }(e, t, r, o, i, s, u, a, c, l, p, f) : function(e, t, n) {
            for (var r = 0; r < n.length; r++) Ho(e, t, r, n[r]);
        }(e, t, r), !1;
    }
    function Es(e, t) {
        if (Po(e, t.nodeIndex).dirty) throw Mo(No.createDebugContext(e, t.nodeIndex), "Query " + t.query.id + " not dirty", "Query " + t.query.id + " dirty", 0 != (1 & e.state));
    }
    function xs(e) {
        if (!(128 & e.state)) {
            if (ks(e, Xi.Destroy), As(e, Xi.Destroy), rs(e, 131072), e.disposables) for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
            !function(e) {
                if (16 & e.state) {
                    var t = Ko(e);
                    if (t) {
                        var n = t.template._projectedViews;
                        n && (Di(n, n.indexOf(e)), No.dirtyParentQueries(e));
                    }
                }
            }(e), e.renderer.destroyNode && function(e) {
                for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                    var r = e.def.nodes[n];
                    1 & r.flags ? e.renderer.destroyNode(Oo(e, n).renderElement) : 2 & r.flags ? e.renderer.destroyNode(So(e, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Po(e, n).destroy();
                }
            }(e), $o(e) && e.renderer.destroy(), e.state |= 128;
        }
    }
    function As(e, t) {
        var n = e.def;
        if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags ? Ss(Oo(e, r).componentView, t) : 0 == (33554432 & o.childFlags) && (r += o.childCount);
        }
    }
    function ks(e, t) {
        var n = e.def;
        if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags) for (var i = Oo(e, r).viewContainer._embeddedViews, s = 0; s < i.length; s++) Ss(i[s], t); else 0 == (16777216 & o.childFlags) && (r += o.childCount);
        }
    }
    function Ss(e, t) {
        var n = e.state;
        switch (t) {
          case Xi.CheckNoChanges:
            0 == (128 & n) && (12 == (12 & n) ? ws(e) : 64 & n && Os(e, Xi.CheckNoChangesProjectedViews));
            break;

          case Xi.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? ws(e) : 64 & n && Os(e, t));
            break;

          case Xi.CheckAndUpdate:
            0 == (128 & n) && (12 == (12 & n) ? _s(e) : 64 & n && Os(e, Xi.CheckAndUpdateProjectedViews));
            break;

          case Xi.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? _s(e) : 64 & n && Os(e, t));
            break;

          case Xi.Destroy:
            xs(e);
            break;

          case Xi.CreateViewNodes:
            gs(e);
        }
    }
    function Os(e, t) {
        ks(e, t), As(e, t);
    }
    function Fs(e, t, n, r) {
        if (e.def.nodeFlags & t && e.def.nodeFlags & n) for (var o = e.def.nodes.length, i = 0; i < o; i++) {
            var s = e.def.nodes[i];
            if (s.flags & t && s.flags & n) switch (No.setCurrentNode(e, s.nodeIndex), r) {
              case 0:
                us(e, s);
                break;

              case 1:
                Es(e, s);
            }
            s.childFlags & t && s.childFlags & n || (i += s.childCount);
        }
    }
    !function(e) {
        e[e.CreateViewNodes = 0] = "CreateViewNodes", e[e.CheckNoChanges = 1] = "CheckNoChanges", 
        e[e.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate = 3] = "CheckAndUpdate", 
        e[e.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", e[e.Destroy = 5] = "Destroy";
    }(Xi || (Xi = {}));
    var Ts = !1;
    function Ps(e, t, n, r, o, i) {
        return hs(Ms(e, o, o.injector.get(ur), t, n), r, i);
    }
    function Ns(e, t, n, r, o, i) {
        var s = o.injector.get(ur), u = Ms(e, o, new yu(s), t, n), a = qs(r);
        return fu(Bs.create, hs, null, [ u, a, i ]);
    }
    function Ms(e, t, n, r, o) {
        var i = t.injector.get(xo), s = t.injector.get(Nt);
        return {
            ngModule: t,
            injector: e,
            projectableNodes: r,
            selectorOrNode: o,
            sanitizer: i,
            rendererFactory: n,
            renderer: n.createRenderer(null, null),
            errorHandler: s
        };
    }
    function Is(e, t, n, r) {
        var o = qs(n);
        return fu(Bs.create, ds, null, [ e, t, o, r ]);
    }
    function Rs(e, t, n, r) {
        return n = Ws.get(t.element.componentProvider.provider.token) || qs(n), fu(Bs.create, ys, null, [ e, t, n, r ]);
    }
    function js(e, t, n, r) {
        return Ri(e, t, n, function(e) {
            var t = function(e) {
                var t = !1, n = !1;
                return 0 === Hs.size ? {
                    hasOverrides: t,
                    hasDeprecatedOverrides: n
                } : (e.providers.forEach(function(e) {
                    var r = Hs.get(e.token);
                    3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior);
                }), e.modules.forEach(function(e) {
                    Us.forEach(function(r, o) {
                        o.ngInjectableDef.providedIn === e && (t = !0, n = n || r.deprecatedBehavior);
                    });
                }), {
                    hasOverrides: t,
                    hasDeprecatedOverrides: n
                });
            }(e), n = t.hasOverrides, r = t.hasDeprecatedOverrides;
            return n ? (function(e) {
                for (var t = 0; t < e.providers.length; t++) {
                    var n = e.providers[t];
                    r && (n.flags |= 4096);
                    var o = Hs.get(n.token);
                    o && (n.flags = -3841 & n.flags | o.flags, n.deps = Jo(o.deps), n.value = o.value);
                }
                if (Us.size > 0) {
                    var i = new Set(e.modules);
                    Us.forEach(function(t, n) {
                        if (i.has(n.ngInjectableDef.providedIn)) {
                            var o = {
                                token: n,
                                flags: t.flags | (r ? 4096 : 0),
                                deps: Jo(t.deps),
                                value: t.value,
                                index: e.providers.length
                            };
                            e.providers.push(o), e.providersByKey[Vo(n)] = o;
                        }
                    });
                }
            }(e = e.factory(function() {
                return jo;
            })), e) : e;
        }(r));
    }
    var Bs, Vs, Ls, zs, Hs = new Map(), Us = new Map(), Ws = new Map();
    function Zs(e) {
        Hs.set(e.token, e), "function" == typeof e.token && e.token.ngInjectableDef && "function" == typeof e.token.ngInjectableDef.providedIn && Us.set(e.token, e);
    }
    function Ks(e, t) {
        var n = ei(ei(t.viewDefFactory).nodes[0].element.componentView);
        Ws.set(e, n);
    }
    function Gs() {
        Hs.clear(), Us.clear(), Ws.clear();
    }
    function qs(e) {
        if (0 === Hs.size) return e;
        var t = function(e) {
            for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
                var o = e.nodes[r];
                1 & o.flags && (n = o), n && 3840 & o.flags && Hs.has(o.provider.token) && (t.push(n.nodeIndex), 
                n = null);
            }
            return t;
        }(e);
        if (0 === t.length) return e;
        e = e.factory(function() {
            return jo;
        });
        for (var n = 0; n < t.length; n++) r(e, t[n]);
        return e;
        function r(e, t) {
            for (var n = t + 1; n < e.nodes.length; n++) {
                var r = e.nodes[n];
                if (1 & r.flags) return;
                if (3840 & r.flags) {
                    var o = r.provider, i = Hs.get(o.token);
                    i && (r.flags = -3841 & r.flags | i.flags, o.deps = Jo(i.deps), o.value = i.value);
                }
            }
        }
    }
    function $s(e, t, n, r, o, i, s, u, a, c, l, p, f) {
        var d = e.def.nodes[t];
        return bs(e, d, n, r, o, i, s, u, a, c, l, p, f), 224 & d.flags ? To(e, t).value : void 0;
    }
    function Ys(e, t, n, r, o, i, s, u, a, c, l, p, f) {
        var d = e.def.nodes[t];
        return Ds(e, d, n, r, o, i, s, u, a, c, l, p, f), 224 & d.flags ? To(e, t).value : void 0;
    }
    function Js(e) {
        return fu(Bs.detectChanges, _s, null, [ e ]);
    }
    function Xs(e) {
        return fu(Bs.checkNoChanges, ws, null, [ e ]);
    }
    function Qs(e) {
        return fu(Bs.destroy, xs, null, [ e ]);
    }
    function eu(e, t) {
        Ls = e, zs = t;
    }
    function tu(e, t, n, r) {
        return eu(e, t), fu(Bs.handleEvent, e.def.handleEvent, null, [ e, t, n, r ]);
    }
    function nu(e, t) {
        if (128 & e.state) throw Ro(Bs[Vs]);
        return eu(e, au(e, 0)), e.def.updateDirectives(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            var s = e.def.nodes[n];
            return 0 === t ? ou(e, s, r, o) : iu(e, s, r, o), 16384 & s.flags && eu(e, au(e, n)), 
            224 & s.flags ? To(e, s.nodeIndex).value : void 0;
        }, e);
    }
    function ru(e, t) {
        if (128 & e.state) throw Ro(Bs[Vs]);
        return eu(e, cu(e, 0)), e.def.updateRenderer(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            var s = e.def.nodes[n];
            return 0 === t ? ou(e, s, r, o) : iu(e, s, r, o), 3 & s.flags && eu(e, cu(e, n)), 
            224 & s.flags ? To(e, s.nodeIndex).value : void 0;
        }, e);
    }
    function ou(e, t, n, r) {
        if (bs.apply(void 0, a([ e, t, n ], r))) {
            var o = 1 === n ? r[0] : r;
            if (16384 & t.flags) {
                for (var i = {}, s = 0; s < t.bindings.length; s++) {
                    var u = t.bindings[s], c = o[s];
                    8 & u.flags && (i[(d = u.nonMinifiedName, "ng-reflect-" + (d = d.replace(/[$@]/g, "_").replace(su, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return "-" + e[1].toLowerCase();
                    })))] = uu(c));
                }
                var l = t.parent, p = Oo(e, l.nodeIndex).renderElement;
                if (l.element.name) for (var f in i) null != (c = i[f]) ? e.renderer.setAttribute(p, f, c) : e.renderer.removeAttribute(p, f); else e.renderer.setValue(p, "bindings=" + JSON.stringify(i, null, 2));
            }
        }
        var d;
    }
    function iu(e, t, n, r) {
        Ds.apply(void 0, a([ e, t, n ], r));
    }
    !function(e) {
        e[e.create = 0] = "create", e[e.detectChanges = 1] = "detectChanges", e[e.checkNoChanges = 2] = "checkNoChanges", 
        e[e.destroy = 3] = "destroy", e[e.handleEvent = 4] = "handleEvent";
    }(Bs || (Bs = {}));
    var su = /([A-Z])/g;
    function uu(e) {
        try {
            return null != e ? e.toString().slice(0, 30) : e;
        } catch (e) {
            return "[ERROR] Exception while trying to serialize the value";
        }
    }
    function au(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
            var r = e.def.nodes[n];
            if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
    }
    function cu(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
            var r = e.def.nodes[n];
            if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
    }
    var lu = function() {
        function e(e, t) {
            this.view = e, this.nodeIndex = t, null == t && (this.nodeIndex = t = 0), this.nodeDef = e.def.nodes[t];
            for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags); ) n = n.parent;
            if (!n) for (;!n && r; ) n = Go(r), r = r.parent;
            this.elDef = n, this.elView = r;
        }
        return Object.defineProperty(e.prototype, "elOrCompView", {
            get: function() {
                return Oo(this.elView, this.elDef.nodeIndex).componentView || this.view;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "injector", {
            get: function() {
                return Pi(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "component", {
            get: function() {
                return this.elOrCompView.component;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "context", {
            get: function() {
                return this.elOrCompView.context;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "providerTokens", {
            get: function() {
                var e = [];
                if (this.elDef) for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                    var n = this.elView.def.nodes[t];
                    20224 & n.flags && e.push(n.provider.token), t += n.childCount;
                }
                return e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "references", {
            get: function() {
                var e = {};
                if (this.elDef) {
                    pu(this.elView, this.elDef, e);
                    for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                        var n = this.elView.def.nodes[t];
                        20224 & n.flags && pu(this.elView, n, e), t += n.childCount;
                    }
                }
                return e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "componentRenderElement", {
            get: function() {
                var e = function(e) {
                    for (;e && !$o(e); ) e = e.parent;
                    return e.parent ? Oo(e.parent, Go(e).nodeIndex) : null;
                }(this.elOrCompView);
                return e ? e.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "renderNode", {
            get: function() {
                return 2 & this.nodeDef.flags ? qo(this.view, this.nodeDef) : qo(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.logError = function(e) {
            for (var t, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
            2 & this.nodeDef.flags ? (t = this.view.def, n = this.nodeDef.nodeIndex) : (t = this.elView.def, 
            n = this.elDef.nodeIndex);
            var i = function(e, t) {
                for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
                return n;
            }(t, n), s = -1;
            t.factory(function() {
                return ++s === i ? (t = e.error).bind.apply(t, a([ e ], r)) : jo;
                var t;
            }), s < i && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), 
            e.error.apply(e, a(r)));
        }, e;
    }();
    function pu(e, t, n) {
        for (var r in t.references) n[r] = cs(e, t, t.references[r]);
    }
    function fu(e, t, n, r) {
        var o = Vs, i = Ls, s = zs;
        try {
            Vs = e;
            var u = t.apply(n, r);
            return Ls = i, zs = s, Vs = o, u;
        } catch (e) {
            if (Ft(e) || !Ls) throw e;
            throw function(e, t) {
                return e instanceof Error || (e = new Error(e.toString())), Io(e, t), e;
            }(e, du());
        }
    }
    function du() {
        return Ls ? new lu(Ls, zs) : null;
    }
    var hu, yu = function() {
        function e(e) {
            this.delegate = e;
        }
        return e.prototype.createRenderer = function(e, t) {
            return new vu(this.delegate.createRenderer(e, t));
        }, e.prototype.begin = function() {
            this.delegate.begin && this.delegate.begin();
        }, e.prototype.end = function() {
            this.delegate.end && this.delegate.end();
        }, e.prototype.whenRenderingDone = function() {
            return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
        }, e;
    }(), vu = function() {
        function e(e) {
            this.delegate = e, this.data = this.delegate.data;
        }
        return e.prototype.destroyNode = function(e) {
            !function(e) {
                br.delete(e.nativeNode);
            }(Cr(e)), this.delegate.destroyNode && this.delegate.destroyNode(e);
        }, e.prototype.destroy = function() {
            this.delegate.destroy();
        }, e.prototype.createElement = function(e, t) {
            var n = this.delegate.createElement(e, t), r = du();
            if (r) {
                var o = new _r(n, null, r);
                o.name = e, Dr(o);
            }
            return n;
        }, e.prototype.createComment = function(e) {
            var t = this.delegate.createComment(e), n = du();
            return n && Dr(new wr(t, null, n)), t;
        }, e.prototype.createText = function(e) {
            var t = this.delegate.createText(e), n = du();
            return n && Dr(new wr(t, null, n)), t;
        }, e.prototype.appendChild = function(e, t) {
            var n = Cr(e), r = Cr(t);
            n && r && n instanceof _r && n.addChild(r), this.delegate.appendChild(e, t);
        }, e.prototype.insertBefore = function(e, t, n) {
            var r = Cr(e), o = Cr(t), i = Cr(n);
            r && o && r instanceof _r && r.insertBefore(i, o), this.delegate.insertBefore(e, t, n);
        }, e.prototype.removeChild = function(e, t) {
            var n = Cr(e), r = Cr(t);
            n && r && n instanceof _r && n.removeChild(r), this.delegate.removeChild(e, t);
        }, e.prototype.selectRootElement = function(e) {
            var t = this.delegate.selectRootElement(e), n = du();
            return n && Dr(new _r(t, null, n)), t;
        }, e.prototype.setAttribute = function(e, t, n, r) {
            var o = Cr(e);
            if (o && o instanceof _r) {
                var i = r ? r + ":" + t : t;
                o.attributes[i] = n;
            }
            this.delegate.setAttribute(e, t, n, r);
        }, e.prototype.removeAttribute = function(e, t, n) {
            var r = Cr(e);
            if (r && r instanceof _r) {
                var o = n ? n + ":" + t : t;
                r.attributes[o] = null;
            }
            this.delegate.removeAttribute(e, t, n);
        }, e.prototype.addClass = function(e, t) {
            var n = Cr(e);
            n && n instanceof _r && (n.classes[t] = !0), this.delegate.addClass(e, t);
        }, e.prototype.removeClass = function(e, t) {
            var n = Cr(e);
            n && n instanceof _r && (n.classes[t] = !1), this.delegate.removeClass(e, t);
        }, e.prototype.setStyle = function(e, t, n, r) {
            var o = Cr(e);
            o && o instanceof _r && (o.styles[t] = n), this.delegate.setStyle(e, t, n, r);
        }, e.prototype.removeStyle = function(e, t, n) {
            var r = Cr(e);
            r && r instanceof _r && (r.styles[t] = null), this.delegate.removeStyle(e, t, n);
        }, e.prototype.setProperty = function(e, t, n) {
            var r = Cr(e);
            r && r instanceof _r && (r.properties[t] = n), this.delegate.setProperty(e, t, n);
        }, e.prototype.listen = function(e, t, n) {
            if ("string" != typeof e) {
                var r = Cr(e);
                r && r.listeners.push(new gr(t, n));
            }
            return this.delegate.listen(e, t, n);
        }, e.prototype.parentNode = function(e) {
            return this.delegate.parentNode(e);
        }, e.prototype.nextSibling = function(e) {
            return this.delegate.nextSibling(e);
        }, e.prototype.setValue = function(e, t) {
            return this.delegate.setValue(e, t);
        }, e;
    }(), mu = function(e) {
        function t(t, n, r) {
            var o = e.call(this) || this;
            return o.moduleType = t, o._bootstrapComponents = n, o._ngModuleDefFactory = r, 
            o;
        }
        return o(t, e), t.prototype.create = function(e) {
            !function() {
                if (!Ts) {
                    Ts = !0;
                    var e = Xn() ? {
                        setCurrentNode: eu,
                        createRootView: Ns,
                        createEmbeddedView: Is,
                        createComponentView: Rs,
                        createNgModuleRef: js,
                        overrideProvider: Zs,
                        overrideComponentView: Ks,
                        clearOverrides: Gs,
                        checkAndUpdateView: Js,
                        checkNoChangesView: Xs,
                        destroyView: Qs,
                        createDebugContext: function(e, t) {
                            return new lu(e, t);
                        },
                        handleEvent: tu,
                        updateDirectives: nu,
                        updateRenderer: ru
                    } : {
                        setCurrentNode: function() {},
                        createRootView: Ps,
                        createEmbeddedView: ds,
                        createComponentView: ys,
                        createNgModuleRef: Ri,
                        overrideProvider: jo,
                        overrideComponentView: jo,
                        clearOverrides: jo,
                        checkAndUpdateView: _s,
                        checkNoChangesView: ws,
                        destroyView: xs,
                        createDebugContext: function(e, t) {
                            return new lu(e, t);
                        },
                        handleEvent: function(e, t, n, r) {
                            return e.def.handleEvent(e, t, n, r);
                        },
                        updateDirectives: function(e, t) {
                            return e.def.updateDirectives(0 === t ? $s : Ys, e);
                        },
                        updateRenderer: function(e, t) {
                            return e.def.updateRenderer(0 === t ? $s : Ys, e);
                        }
                    };
                    No.setCurrentNode = e.setCurrentNode, No.createRootView = e.createRootView, No.createEmbeddedView = e.createEmbeddedView, 
                    No.createComponentView = e.createComponentView, No.createNgModuleRef = e.createNgModuleRef, 
                    No.overrideProvider = e.overrideProvider, No.overrideComponentView = e.overrideComponentView, 
                    No.clearOverrides = e.clearOverrides, No.checkAndUpdateView = e.checkAndUpdateView, 
                    No.checkNoChangesView = e.checkNoChangesView, No.destroyView = e.destroyView, No.resolveDep = es, 
                    No.createDebugContext = e.createDebugContext, No.handleEvent = e.handleEvent, No.updateDirectives = e.updateDirectives, 
                    No.updateRenderer = e.updateRenderer, No.dirtyParentQueries = ss;
                }
            }();
            var t = ei(this._ngModuleDefFactory);
            return No.createNgModuleRef(this.moduleType, e || et.NULL, this._bootstrapComponents, t);
        }, t;
    }(function() {});
    function gu(e, t, n) {
        e != t && Cu(n);
    }
    function wu(e, t, n) {
        e >= t && Cu(n);
    }
    function _u(e, t) {
        null != e && Cu(t);
    }
    function bu(e, t) {
        null == e && Cu(t);
    }
    function Cu(e) {
        throw new Error("ASSERTION ERROR: " + e);
    }
    function Du(e, t, n, r) {
        var o = r ? t : n;
        o && Eu(e, o);
    }
    function Eu(e, t) {
        for (var n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]]);
    }
    function xu(e, t) {
        bu(e, "should be called with a node"), gu(e.type, t, "should be a " + Au(t));
    }
    function Au(e) {
        return 1 == e ? "Projection" : 0 == e ? "Container" : 2 == e ? "View" : 3 == e ? "Element" : "<unknown>";
    }
    function ku(e) {
        return !!e.listen;
    }
    function Su(e) {
        return "function" == typeof e ? e.name || e : "string" == typeof e ? e : null == e ? "" : "" + e;
    }
    function Ou(e, t) {
        for (var n = e; n && n !== t; ) {
            var r = n.pNextOrParent;
            if (r) {
                for (;1 !== r.type; ) {
                    if (i = Pu(r)) return i;
                    r = r.pNextOrParent;
                }
                n = r;
            } else {
                for (var o = n.next; o; ) {
                    var i;
                    if (i = Pu(o)) return i;
                    o = o.next;
                }
                var s = n.parent;
                if (n = null, s) {
                    var u = s.type;
                    0 !== u && 2 !== u || (n = s);
                }
            }
        }
        return null;
    }
    function Fu(e) {
        var t = e.pNextOrParent;
        return t ? 1 === t.type ? null : t : e.next;
    }
    function Tu(e, t) {
        for (var n = e, r = Fu(n); n && !r; ) {
            if ((n = n.pNextOrParent || n.parent) === t) return null;
            r = n && Fu(n);
        }
        return r;
    }
    function Pu(e) {
        for (var t = e; t; ) {
            var n = null;
            if (3 === t.type) return t.native;
            if (0 === t.type) {
                var r = t, o = r.dynamicLContainerNode ? r.dynamicLContainerNode.data : r.data;
                n = o.views.length ? o.views[0].child : null;
            } else n = 1 === t.type ? t.data.head : t.child;
            t = null === n ? Tu(t, e) : n;
        }
        return null;
    }
    function Nu(e, t) {
        return ku(t) ? t.createText(Su(e)) : t.createTextNode(Su(e));
    }
    function Mu(e, t, n, r) {
        ngDevMode && xu(e, 0), ngDevMode && xu(t, 2);
        var o = e.data.renderParent, i = o ? o.native : null, s = t.child;
        if (i) for (;s; ) {
            var u = null, a = e.view.renderer;
            if (3 === s.type) n ? (s.native || (s.native = Nu("", a)), ku(a) ? a.insertBefore(i, s.native, r) : i.insertBefore(s.native, r, !0)) : ku(a) ? a.removeChild(i, s.native) : i.removeChild(s.native), 
            u = s.next; else if (0 === s.type) {
                var c = s.data;
                c.renderParent = o, u = c.views.length ? c.views[0].child : null;
            } else u = 1 === s.type ? s.data.head : s.child;
            s = null === u ? Tu(s, t) : u;
        }
    }
    function Iu(e, t) {
        e.next = t, e.data.next = t ? t.data : null;
    }
    function Ru(e, t) {
        var n;
        return (n = e.node) && 2 === n.type ? n.parent.data : e.parent === t ? null : e.parent;
    }
    function ju(e) {
        !function(e) {
            var t = e.cleanup;
            if (null != t) {
                for (var n = 0; n < t.length - 1; n += 2) "string" == typeof t[n] ? (t[n + 1].removeEventListener(t[n], t[n + 2], t[n + 3]), 
                n += 2) : t[n].call(t[n + 1]);
                e.cleanup = null;
            }
        }(e), function(e) {
            var t, n = e.tView;
            null != n && null != (t = n.destroyHooks) && Eu(e.directives, t);
        }(e), function(e) {
            var t = e.tView && e.tView.pipeDestroyHooks;
            t && Eu(e.data, t);
        }(e);
    }
    "undefined" == typeof ngDevMode && ("undefined" != typeof window && (window.ngDevMode = !0), 
    "undefined" != typeof self && (self.ngDevMode = !0), "undefined" != typeof global && (global.ngDevMode = !0)), 
    function(e) {
        e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase";
    }(hu || (hu = {}));
    var Bu, Vu, Lu, zu, Hu, Uu, Wu, Zu, Ku, Gu = "__ngHostLNode__", qu = Promise.resolve(null), $u = [ 0, 0 ], Yu = null, Ju = !1;
    function Xu(e, t) {
        var n = Yu;
        return Zu = e && e.data, Ku = e && e.directives, Hu = e && e.tView.data, Wu = e && 1 == (1 & e.flags), 
        e && e.tView.firstTemplatePass, e && e.cleanup, Bu = e && e.renderer, e && e.bindingIndex < 0 && (e.bindingIndex = e.bindingStartIndex), 
        null != t && (Lu = t, zu = !0), Yu = e, Uu = e && e.queries, n;
    }
    function Qu(e) {
        Ju || Du(Ku, Yu.tView.viewHooks, Yu.tView.viewCheckHooks, Wu), Yu.flags &= -6, Yu.lifecycleStage = 1, 
        Yu.bindingIndex = -1, Xu(e, null);
    }
    function ea() {
        na();
        var e = Yu.tView;
        e.firstTemplatePass = !1, ta(e.hostBindings), function(e) {
            if (null != e) for (var t = 0; t < e.length; t += 2) ia(e[t], e[t + 1]);
        }(e.components);
    }
    function ta(e) {
        if (null != e) for (var t = Yu.tView.directives, n = 0; n < e.length; n += 2) {
            var r = e[n], o = t[r];
            o.hostBindings && o.hostBindings(r, e[n + 1]);
        }
    }
    function na() {
        if (!Ju) {
            var e = Yu.tView;
            (function(e, t, n) {
                1 === e.lifecycleStage && (Du(e.directives, t.initHooks, t.checkHooks, n), e.lifecycleStage = 2);
            })(Yu, e, Wu), Du(Ku, e.contentHooks, e.contentCheckHooks, Wu);
        }
    }
    function ra(e, t, n, r, o, i) {
        var s, u, a, c, l, p, f, d, h, y = zu, v = Lu;
        try {
            zu = !0, Lu = null;
            var m = 2;
            null == e && (u = null, a = 2, c = null, l = function(e, t, n, r, o, i) {
                return {
                    parent: Yu,
                    id: -1,
                    flags: 11,
                    node: null,
                    data: [],
                    directives: null,
                    tView: n,
                    cleanup: null,
                    renderer: t,
                    child: null,
                    tail: null,
                    next: null,
                    bindingStartIndex: -1,
                    bindingIndex: -1,
                    template: r,
                    context: o,
                    dynamicViewCount: 0,
                    lifecycleStage: 1,
                    queries: null,
                    injector: Yu && Yu.injector
                };
            }(0, r, function(e, t, n) {
                return e.ngPrivateData || (e.ngPrivateData = function(e, t) {
                    return {
                        data: [],
                        directives: null,
                        firstTemplatePass: !0,
                        initHooks: null,
                        checkHooks: null,
                        contentHooks: null,
                        contentCheckHooks: null,
                        viewHooks: null,
                        viewCheckHooks: null,
                        destroyHooks: null,
                        pipeDestroyHooks: null,
                        hostBindings: null,
                        components: null,
                        directiveRegistry: "function" == typeof e ? e() : e,
                        pipeRegistry: "function" == typeof t ? t() : t,
                        currentMatches: null
                    };
                }(t, n));
            }(t, o || null, i || null), t, n), p = zu ? Lu : Lu && Lu.parent, f = (zu ? Uu : Lu && Lu.queries) || p && p.queries && p.queries.child(), 
            h = function(e, t, n, r, o, i) {
                return {
                    type: e,
                    native: r,
                    view: t,
                    parent: n,
                    child: null,
                    next: null,
                    nodeInjector: n ? n.nodeInjector : null,
                    data: o,
                    queries: i,
                    tNode: null,
                    pNextOrParent: null,
                    dynamicLContainerNode: null
                };
            }(a, Yu, p, c, (d = null != l) ? l : null, f), 2 == (2 & a) && d && (ngDevMode && _u(l.node, "LView.node should not have been initialized"), 
            l.node = h), null != u && (ngDevMode && function(e, t) {
                null == t && (t = Zu), gu(t.length, e, "index " + e + " expected to be at the end of arr (length " + t.length + ")");
            }(u), Zu[u] = h, u >= Hu.length ? Hu[u] = null : h.tNode = Hu[u], zu ? (Uu = null, 
            Lu.view !== Yu && 2 !== Lu.type || (ngDevMode && _u(Lu.child, "previousOrParentNode's child should not have been set."), 
            Lu.child = h)) : Lu && (ngDevMode && _u(Lu.next, "previousOrParentNode's next property should not have been set " + u + "."), 
            Lu.next = h, Lu.dynamicLContainerNode && (Lu.dynamicLContainerNode.next = h))), 
            Lu = h, zu = !0, e = h, m = 1), s = Xu(e.data, e), t(m, n), ea(), oa();
        } finally {
            Qu(s), zu = y, Lu = v;
        }
        return e;
    }
    function oa() {
        for (var e = Yu.child; null !== e; e = e.next) if (0 !== e.dynamicViewCount && e.views) for (var t = e, n = 0; n < t.views.length; n++) {
            var r = t.views[n];
            ra(r, r.data.template, r.data.context, Bu);
        }
    }
    function ia(e, t) {
        ngDevMode && aa(t);
        var n = Zu[t];
        ngDevMode && xu(n, 3), ngDevMode && bu(n.data, "Component's host node should have an LView attached.");
        var r, o = n.data;
        8 == (8 & o.flags) && 6 & o.flags && (ngDevMode && aa(e, Ku), ua(o, n, Yu.tView.directives[e], (r = Ku[e], 
        Array.isArray(r) ? r[0] : r)));
    }
    function sa(e) {
        var t = ca(e);
        ngDevMode && bu(t.data, "Component host node should be attached to an LView");
        var n = t.tNode.flags >> 13, r = t.view.tView.directives[n];
        ua(t.data, t, r, e);
    }
    function ua(e, t, n, r) {
        var o = Xu(e, t), i = n.template;
        try {
            i(1 & e.flags ? 3 : 2, r), ea(), oa();
        } finally {
            Qu(o);
        }
    }
    function aa(e, t) {
        null == t && (t = Zu), wu(e, t ? t.length : 0, "index expected to be a valid data index");
    }
    function ca(e) {
        ngDevMode && bu(e, "expecting component got null");
        var t = e[Gu];
        return ngDevMode && bu(e, "object is not a component"), t;
    }
    !function(e) {
        o(function(t, n, r) {
            var o = e.call(this, t.data, r) || this;
            return o._lViewNode = t, o;
        }, e);
    }(function() {
        function e(e, t) {
            this._view = e, this.context = t;
        }
        return e.prototype._setComponentContext = function(e, t) {
            this._view = e, this.context = t;
        }, e.prototype.destroy = function() {}, e.prototype.onDestroy = function(e) {}, 
        e.prototype.markForCheck = function() {
            !function(e) {
                for (var t = e; null != t.parent; ) t.flags |= 4, t = t.parent;
                var n, r;
                t.flags |= 4, ngDevMode && bu(t.context, "rootContext"), (n = t.context).clean == qu && (n.clean = new Promise(function(e) {
                    return r = e;
                }), n.scheduler(function() {
                    var e, t;
                    t = ca((e = function(e) {
                        ngDevMode && bu(e, "component");
                        for (var t = ca(e).view; t.parent; ) t = t.parent;
                        return t;
                    }(n.component)).context.component), ngDevMode && bu(t.data, "Component host node should be attached to an LView"), 
                    function(n, r, o, i) {
                        var s = Xu(e, t);
                        try {
                            Vu.begin && Vu.begin(), na(), ta($u), ia(0, 0);
                        } finally {
                            Vu.end && Vu.end(), Qu(s);
                        }
                    }(), r(null), n.clean = qu;
                }));
            }(this._view);
        }, e.prototype.detach = function() {
            this._view.flags &= -9;
        }, e.prototype.reattach = function() {
            this._view.flags |= 8;
        }, e.prototype.detectChanges = function() {
            sa(this.context);
        }, e.prototype.checkNoChanges = function() {
            !function(e) {
                Ju = !0;
                try {
                    sa(e);
                } finally {
                    Ju = !1;
                }
            }(this.context);
        }, e;
    }());
    var la = function(e) {
        this.read = e;
    };
    function pa(e, t) {
        var n = e.localNames;
        if (n) for (var r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
    }
    function fa(e, t) {
        for (var n = e.view.tView.directives, r = e.tNode.flags, o = r >> 13, i = o + (4095 & r), s = o; s < i; s++) {
            var u = n[s];
            if (u.type === t && u.diPublic) return s;
        }
        return null;
    }
    function da(e, t, n, r) {
        if (n instanceof la) return n.read(e, t, r);
        var o = fa(t, n);
        return null !== o ? t.view.directives[o] : null;
    }
    function ha(e, t) {
        for (var n = function(e) {
            var t = e.nodeInjector, n = e.parent && e.parent.nodeInjector;
            return t != n ? t : e.nodeInjector = {
                parent: n,
                node: e,
                bf0: 0,
                bf1: 0,
                bf2: 0,
                bf3: 0,
                bf4: 0,
                bf5: 0,
                bf6: 0,
                bf7: 0,
                cbf0: null == n ? 0 : n.cbf0 | n.bf0,
                cbf1: null == n ? 0 : n.cbf1 | n.bf1,
                cbf2: null == n ? 0 : n.cbf2 | n.bf2,
                cbf3: null == n ? 0 : n.cbf3 | n.bf3,
                cbf4: null == n ? 0 : n.cbf4 | n.bf4,
                cbf5: null == n ? 0 : n.cbf5 | n.bf5,
                cbf6: null == n ? 0 : n.cbf6 | n.bf6,
                cbf7: null == n ? 0 : n.cbf7 | n.bf7,
                templateRef: null,
                viewContainerRef: null,
                elementRef: null,
                changeDetectorRef: null
            };
        }(t); e; ) {
            var r = e.predicate, o = r.type;
            if (o) null !== (u = fa(t, o)) && null !== (a = da(n, t, r.read || o, u)) && ya(e, a); else for (var i = r.selector, s = 0; s < i.length; s++) {
                var u, a;
                ngDevMode && bu(t.tNode, "node.tNode"), null !== (u = pa(t.tNode, i[s])) && (ngDevMode && bu(r.read, "the node should have a predicate"), 
                null !== (a = da(n, t, r.read, u)) && ya(e, a));
            }
            e = e.next;
        }
    }
    function ya(e, t) {
        e.values.push(t), e.list.setDirty();
    }
    function va(e, t, n, r) {
        return {
            next: e,
            list: t,
            predicate: function(e, t) {
                var n = Array.isArray(e);
                return {
                    type: n ? null : e,
                    selector: n ? e : null,
                    read: t
                };
            }(n, r),
            values: t._valuesTree
        };
    }
    !function() {
        function e(e) {
            this._lContainerNode = e, this._viewRefs = [];
        }
        e.prototype.clear = function() {
            for (var e = this._lContainerNode.data; e.views.length; ) this.remove(0);
        }, e.prototype.get = function(e) {
            return this._viewRefs[e] || null;
        }, Object.defineProperty(e.prototype, "length", {
            get: function() {
                return this._lContainerNode.data.views.length;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.createEmbeddedView = function(e, t, n) {
            var r = e.createEmbeddedView(t || {});
            return this.insert(r, n), r;
        }, e.prototype.createComponent = function(e, t, n, r, o) {
            throw new Error("NotImplemented");
        }, e.prototype.insert = function(e, t) {
            var n = e._lViewNode, r = this._adjustIndex(t);
            return function(e, t, n) {
                var r = e.data.views;
                if (n > 0 && Iu(r[n - 1], t), n < r.length ? (Iu(t, r[n]), r.splice(n, 0, t)) : r.push(t), 
                null !== e.data.renderParent) {
                    var o = Ou(t, e);
                    if (!o) {
                        var i = e.native;
                        void 0 === i && (i = e.native = Ou(e, null)), o = i;
                    }
                    Mu(e, t, !0, o);
                }
            }(this._lContainerNode, n, r), this._lContainerNode.native = void 0, this._viewRefs.splice(r, 0, e), 
            n.parent = this._lContainerNode, null !== n.data.template && (this._lContainerNode.data.dynamicViewCount++, 
            null !== this._lContainerNode.parent && null !== this._lContainerNode.parent.data && (ngDevMode && function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                bu(e, "should be called with a node"), gu(t.some(function(t) {
                    return e.type === t;
                }), !0, "Should be one of " + t.map(Au).join(", "));
            }(this._lContainerNode.parent, 2, 3), this._lContainerNode.parent.data.dynamicViewCount++)), 
            e;
        }, e.prototype.move = function(e, t) {
            var n = this.indexOf(e);
            return this.detach(n), this.insert(e, this._adjustIndex(t)), e;
        }, e.prototype.indexOf = function(e) {
            return this._viewRefs.indexOf(e);
        }, e.prototype.remove = function(e) {
            this.detach(e);
        }, e.prototype.detach = function(e) {
            var t, n, r, o, i = this._adjustIndex(e, -1);
            return n = i, o = (r = (t = this._lContainerNode).data.views)[n], n > 0 && Iu(r[n - 1], o.next), 
            r.splice(n, 1), o.next = null, function(e) {
                for (var t = e; t; ) {
                    var n = null;
                    if (t.views && t.views.length ? n = t.views[0].data : t.child ? n = t.child : t.next && (ju(t), 
                    n = t.next), null == n) {
                        for (;t && !t.next && t !== e; ) ju(t), t = Ru(t, e);
                        ju(t || e), n = t && t.next;
                    }
                    t = n;
                }
            }(o.data), Mu(t, o, !1), t.data.queries && t.data.queries.removeView(n), this._viewRefs.splice(i, 1)[0] || null;
        }, e.prototype._adjustIndex = function(e, t) {
            return void 0 === t && (t = 0), null == e ? this._lContainerNode.data.views.length + t : (ngDevMode && (e <= -1 && Cu("index must be positive"), 
            wu(e, this._lContainerNode.data.views.length + 1 + t, "index")), e);
        };
    }(), function() {
        function e(e) {
            this.shallow = null, this.deep = null, this.deep = null == e ? null : e;
        }
        e.prototype.track = function(e, t, n, r) {
            n ? this.deep = va(this.deep, e, t, null != r ? r : null) : this.shallow = va(this.shallow, e, t, null != r ? r : null);
        }, e.prototype.child = function() {
            return null === this.deep ? null : null === this.shallow ? this : new e(this.deep);
        }, e.prototype.container = function() {
            for (var t = null, n = this.deep; n; ) {
                var r = [];
                n.values.push(r);
                var o = {
                    next: null,
                    list: n.list,
                    predicate: n.predicate,
                    values: r
                };
                o.next = t, t = o, n = n.next;
            }
            return t ? new e(t) : null;
        }, e.prototype.enterView = function(t) {
            for (var n = null, r = this.deep; r; ) {
                var o = [];
                r.values.splice(t, 0, o);
                var i = {
                    next: null,
                    list: r.list,
                    predicate: r.predicate,
                    values: o
                };
                i.next = n, n = i, r = r.next;
            }
            return n ? new e(n) : null;
        }, e.prototype.addNode = function(e) {
            ha(this.shallow, e), ha(this.deep, e);
        }, e.prototype.removeView = function(e) {
            for (var t = this.deep; t; ) {
                var n = t.values.splice(e, 1);
                ngDevMode && gu(n.length, 1, "removed.length"), n[0].length && t.list.setDirty(), 
                t = t.next;
            }
        };
    }(), function() {
        function e() {
            this.dirty = !0, this.changes = new jn(), this._values = [], this._valuesTree = [];
        }
        Object.defineProperty(e.prototype, "length", {
            get: function() {
                return this._values.length;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "first", {
            get: function() {
                var e = this._values;
                return e.length ? e[0] : null;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "last", {
            get: function() {
                var e = this._values;
                return e.length ? e[e.length - 1] : null;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.map = function(e) {
            return this._values.map(e);
        }, e.prototype.filter = function(e) {
            return this._values.filter(e);
        }, e.prototype.find = function(e) {
            return this._values.find(e);
        }, e.prototype.reduce = function(e, t) {
            return this._values.reduce(e, t);
        }, e.prototype.forEach = function(e) {
            this._values.forEach(e);
        }, e.prototype.some = function(e) {
            return this._values.some(e);
        }, e.prototype.toArray = function() {
            return this._values.slice(0);
        }, e.prototype[Pe()] = function() {
            return this._values[Pe()]();
        }, e.prototype.toString = function() {
            return this._values.toString();
        }, e.prototype.reset = function(e) {
            this._values = function(e) {
                for (var t = [], n = 0; n < e.length; ) {
                    var r = e[n];
                    Array.isArray(r) ? r.length > 0 ? (e = r.concat(e.slice(n + 1)), n = 0) : n++ : (t.push(r), 
                    n++);
                }
                return t;
            }(e), this.dirty = !1;
        }, e.prototype.notifyOnChanges = function() {
            this.changes.emit(this);
        }, e.prototype.setDirty = function() {
            this.dirty = !0;
        }, e.prototype.destroy = function() {
            this.changes.complete(), this.changes.unsubscribe();
        };
    }();
    var ma = function() {
        function e(e) {
            e.start();
        }
        return e.prototype.ngDoBootstrap = function() {}, e;
    }(), ga = function() {}, wa = (new ce("Location Initialized"), function() {}), _a = new ce("appBaseHref"), ba = function() {
        function e(t) {
            var n = this;
            this._subject = new jn(), this._platformStrategy = t;
            var r = this._platformStrategy.getBaseHref();
            this._baseHref = e.stripTrailingSlash(Ca(r)), this._platformStrategy.onPopState(function(e) {
                n._subject.emit({
                    url: n.path(!0),
                    pop: !0,
                    state: e.state,
                    type: e.type
                });
            });
        }
        return e.prototype.path = function(e) {
            return void 0 === e && (e = !1), this.normalize(this._platformStrategy.path(e));
        }, e.prototype.isCurrentPathEqualTo = function(t, n) {
            return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n));
        }, e.prototype.normalize = function(t) {
            return e.stripTrailingSlash(function(e, t) {
                return e && t.startsWith(e) ? t.substring(e.length) : t;
            }(this._baseHref, Ca(t)));
        }, e.prototype.prepareExternalUrl = function(e) {
            return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e);
        }, e.prototype.go = function(e, t, n) {
            void 0 === t && (t = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", e, t);
        }, e.prototype.replaceState = function(e, t, n) {
            void 0 === t && (t = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", e, t);
        }, e.prototype.forward = function() {
            this._platformStrategy.forward();
        }, e.prototype.back = function() {
            this._platformStrategy.back();
        }, e.prototype.subscribe = function(e, t, n) {
            return this._subject.subscribe({
                next: e,
                error: t,
                complete: n
            });
        }, e.normalizeQueryParams = function(e) {
            return e && "?" !== e[0] ? "?" + e : e;
        }, e.joinWithSlash = function(e, t) {
            if (0 == e.length) return t;
            if (0 == t.length) return e;
            var n = 0;
            return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t;
        }, e.stripTrailingSlash = function(e) {
            var t = e.match(/#|\?|$/), n = t && t.index || e.length, r = n - ("/" === e[n - 1] ? 1 : 0);
            return e.slice(0, r) + e.slice(n);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: wa
            } ];
        }, e;
    }();
    function Ca(e) {
        return e.replace(/\/index.html$/, "");
    }
    (function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r._platformLocation = t, r._baseHref = "", null != n && (r._baseHref = n), 
            r;
        }
        o(t, e), t.prototype.onPopState = function(e) {
            this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
        }, t.prototype.getBaseHref = function() {
            return this._baseHref;
        }, t.prototype.path = function(e) {
            void 0 === e && (e = !1);
            var t = this._platformLocation.hash;
            return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t;
        }, t.prototype.prepareExternalUrl = function(e) {
            var t = ba.joinWithSlash(this._baseHref, e);
            return t.length > 0 ? "#" + t : t;
        }, t.prototype.pushState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(e, t, o);
        }, t.prototype.replaceState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, o);
        }, t.prototype.forward = function() {
            this._platformLocation.forward();
        }, t.prototype.back = function() {
            this._platformLocation.back();
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: ga
            }, {
                type: void 0,
                decorators: [ {
                    type: Ze
                }, {
                    type: We,
                    args: [ _a ]
                } ]
            } ];
        };
    })(wa), function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            if (r._platformLocation = t, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), 
            null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            return r._baseHref = n, r;
        }
        o(t, e), t.prototype.onPopState = function(e) {
            this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
        }, t.prototype.getBaseHref = function() {
            return this._baseHref;
        }, t.prototype.prepareExternalUrl = function(e) {
            return ba.joinWithSlash(this._baseHref, e);
        }, t.prototype.path = function(e) {
            void 0 === e && (e = !1);
            var t = this._platformLocation.pathname + ba.normalizeQueryParams(this._platformLocation.search), n = this._platformLocation.hash;
            return n && e ? "" + t + n : t;
        }, t.prototype.pushState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
            this._platformLocation.pushState(e, t, o);
        }, t.prototype.replaceState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + ba.normalizeQueryParams(r));
            this._platformLocation.replaceState(e, t, o);
        }, t.prototype.forward = function() {
            this._platformLocation.forward();
        }, t.prototype.back = function() {
            this._platformLocation.back();
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: ga
            }, {
                type: void 0,
                decorators: [ {
                    type: Ze
                }, {
                    type: We,
                    args: [ _a ]
                } ]
            } ];
        };
    }(wa);
    var Da, Ea, xa, Aa, ka, Sa, Oa, Fa = void 0, Ta = [ "en", [ [ "a", "p" ], [ "AM", "PM" ], Fa ], [ [ "AM", "PM" ], Fa, Fa ], [ [ "S", "M", "T", "W", "T", "F", "S" ], [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ] ], Fa, [ [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ], [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] ], Fa, [ [ "B", "A" ], [ "BC", "AD" ], [ "Before Christ", "Anno Domini" ] ], 0, [ 6, 0 ], [ "M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y" ], [ "h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz" ], [ "{1}, {0}", Fa, "{1} 'at' {0}", Fa ], [ ".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":" ], [ "#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0" ], "$", "US Dollar", {}, function(e) {
        var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
        return 1 === t && 0 === n ? 1 : 5;
    } ], Pa = {}, Na = {
        ADP: [ void 0, void 0, 0 ],
        AFN: [ void 0, void 0, 0 ],
        ALL: [ void 0, void 0, 0 ],
        AMD: [ void 0, void 0, 0 ],
        AOA: [ void 0, "Kz" ],
        ARS: [ void 0, "$" ],
        AUD: [ "A$", "$" ],
        BAM: [ void 0, "KM" ],
        BBD: [ void 0, "$" ],
        BDT: [ void 0, "\u09f3" ],
        BHD: [ void 0, void 0, 3 ],
        BIF: [ void 0, void 0, 0 ],
        BMD: [ void 0, "$" ],
        BND: [ void 0, "$" ],
        BOB: [ void 0, "Bs" ],
        BRL: [ "R$" ],
        BSD: [ void 0, "$" ],
        BWP: [ void 0, "P" ],
        BYN: [ void 0, "\u0440.", 2 ],
        BYR: [ void 0, void 0, 0 ],
        BZD: [ void 0, "$" ],
        CAD: [ "CA$", "$", 2 ],
        CHF: [ void 0, void 0, 2 ],
        CLF: [ void 0, void 0, 4 ],
        CLP: [ void 0, "$", 0 ],
        CNY: [ "CN\xa5", "\xa5" ],
        COP: [ void 0, "$", 0 ],
        CRC: [ void 0, "\u20a1", 2 ],
        CUC: [ void 0, "$" ],
        CUP: [ void 0, "$" ],
        CZK: [ void 0, "K\u010d", 2 ],
        DJF: [ void 0, void 0, 0 ],
        DKK: [ void 0, "kr", 2 ],
        DOP: [ void 0, "$" ],
        EGP: [ void 0, "E\xa3" ],
        ESP: [ void 0, "\u20a7", 0 ],
        EUR: [ "\u20ac" ],
        FJD: [ void 0, "$" ],
        FKP: [ void 0, "\xa3" ],
        GBP: [ "\xa3" ],
        GEL: [ void 0, "\u20be" ],
        GIP: [ void 0, "\xa3" ],
        GNF: [ void 0, "FG", 0 ],
        GTQ: [ void 0, "Q" ],
        GYD: [ void 0, "$", 0 ],
        HKD: [ "HK$", "$" ],
        HNL: [ void 0, "L" ],
        HRK: [ void 0, "kn" ],
        HUF: [ void 0, "Ft", 2 ],
        IDR: [ void 0, "Rp", 0 ],
        ILS: [ "\u20aa" ],
        INR: [ "\u20b9" ],
        IQD: [ void 0, void 0, 0 ],
        IRR: [ void 0, void 0, 0 ],
        ISK: [ void 0, "kr", 0 ],
        ITL: [ void 0, void 0, 0 ],
        JMD: [ void 0, "$" ],
        JOD: [ void 0, void 0, 3 ],
        JPY: [ "\xa5", void 0, 0 ],
        KHR: [ void 0, "\u17db" ],
        KMF: [ void 0, "CF", 0 ],
        KPW: [ void 0, "\u20a9", 0 ],
        KRW: [ "\u20a9", void 0, 0 ],
        KWD: [ void 0, void 0, 3 ],
        KYD: [ void 0, "$" ],
        KZT: [ void 0, "\u20b8" ],
        LAK: [ void 0, "\u20ad", 0 ],
        LBP: [ void 0, "L\xa3", 0 ],
        LKR: [ void 0, "Rs" ],
        LRD: [ void 0, "$" ],
        LTL: [ void 0, "Lt" ],
        LUF: [ void 0, void 0, 0 ],
        LVL: [ void 0, "Ls" ],
        LYD: [ void 0, void 0, 3 ],
        MGA: [ void 0, "Ar", 0 ],
        MGF: [ void 0, void 0, 0 ],
        MMK: [ void 0, "K", 0 ],
        MNT: [ void 0, "\u20ae", 0 ],
        MRO: [ void 0, void 0, 0 ],
        MUR: [ void 0, "Rs", 0 ],
        MXN: [ "MX$", "$" ],
        MYR: [ void 0, "RM" ],
        NAD: [ void 0, "$" ],
        NGN: [ void 0, "\u20a6" ],
        NIO: [ void 0, "C$" ],
        NOK: [ void 0, "kr", 2 ],
        NPR: [ void 0, "Rs" ],
        NZD: [ "NZ$", "$" ],
        OMR: [ void 0, void 0, 3 ],
        PHP: [ void 0, "\u20b1" ],
        PKR: [ void 0, "Rs", 0 ],
        PLN: [ void 0, "z\u0142" ],
        PYG: [ void 0, "\u20b2", 0 ],
        RON: [ void 0, "lei" ],
        RSD: [ void 0, void 0, 0 ],
        RUB: [ void 0, "\u20bd" ],
        RUR: [ void 0, "\u0440." ],
        RWF: [ void 0, "RF", 0 ],
        SBD: [ void 0, "$" ],
        SEK: [ void 0, "kr", 2 ],
        SGD: [ void 0, "$" ],
        SHP: [ void 0, "\xa3" ],
        SLL: [ void 0, void 0, 0 ],
        SOS: [ void 0, void 0, 0 ],
        SRD: [ void 0, "$" ],
        SSP: [ void 0, "\xa3" ],
        STD: [ void 0, void 0, 0 ],
        STN: [ void 0, "Db" ],
        SYP: [ void 0, "\xa3", 0 ],
        THB: [ void 0, "\u0e3f" ],
        TMM: [ void 0, void 0, 0 ],
        TND: [ void 0, void 0, 3 ],
        TOP: [ void 0, "T$" ],
        TRL: [ void 0, void 0, 0 ],
        TRY: [ void 0, "\u20ba" ],
        TTD: [ void 0, "$" ],
        TWD: [ "NT$", "$", 2 ],
        TZS: [ void 0, void 0, 0 ],
        UAH: [ void 0, "\u20b4" ],
        UGX: [ void 0, void 0, 0 ],
        USD: [ "$" ],
        UYI: [ void 0, void 0, 0 ],
        UYU: [ void 0, "$" ],
        UZS: [ void 0, void 0, 0 ],
        VEF: [ void 0, "Bs" ],
        VND: [ "\u20ab", void 0, 0 ],
        VUV: [ void 0, void 0, 0 ],
        XAF: [ "FCFA", void 0, 0 ],
        XCD: [ "EC$", "$" ],
        XOF: [ "CFA", void 0, 0 ],
        XPF: [ "CFPF", void 0, 0 ],
        YER: [ void 0, void 0, 0 ],
        ZAR: [ void 0, "R" ],
        ZMK: [ void 0, void 0, 0 ],
        ZMW: [ void 0, "ZK" ],
        ZWD: [ void 0, void 0, 0 ]
    };
    function Ma(e, t) {
        return La(Ha(e)[10], t);
    }
    function Ia(e, t) {
        return La(Ha(e)[11], t);
    }
    function Ra(e, t) {
        return La(Ha(e)[12], t);
    }
    function ja(e, t) {
        var n = Ha(e), r = n[13][t];
        if (void 0 === r) {
            if (t === Sa.CurrencyDecimal) return n[13][Sa.Decimal];
            if (t === Sa.CurrencyGroup) return n[13][Sa.Group];
        }
        return r;
    }
    function Ba(e, t) {
        return Ha(e)[14][t];
    }
    function Va(e) {
        if (!e[19]) throw new Error('Missing extra locale data for the locale "' + e[0] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.');
    }
    function La(e, t) {
        for (var n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
        throw new Error("Locale data API: locale data undefined");
    }
    function za(e) {
        var t = u(e.split(":"), 2);
        return {
            hours: +t[0],
            minutes: +t[1]
        };
    }
    function Ha(e) {
        var t = e.toLowerCase().replace(/_/g, "-"), n = Pa[t];
        if (n) return n;
        var r = t.split("-")[0];
        if (n = Pa[r]) return n;
        if ("en" === r) return Ta;
        throw new Error('Missing locale data for the locale "' + e + '".');
    }
    !function(e) {
        e[e.Decimal = 0] = "Decimal", e[e.Percent = 1] = "Percent", e[e.Currency = 2] = "Currency", 
        e[e.Scientific = 3] = "Scientific";
    }(Da || (Da = {})), function(e) {
        e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", 
        e[e.Many = 4] = "Many", e[e.Other = 5] = "Other";
    }(Ea || (Ea = {})), function(e) {
        e[e.Format = 0] = "Format", e[e.Standalone = 1] = "Standalone";
    }(xa || (xa = {})), function(e) {
        e[e.Narrow = 0] = "Narrow", e[e.Abbreviated = 1] = "Abbreviated", e[e.Wide = 2] = "Wide", 
        e[e.Short = 3] = "Short";
    }(Aa || (Aa = {})), function(e) {
        e[e.Short = 0] = "Short", e[e.Medium = 1] = "Medium", e[e.Long = 2] = "Long", e[e.Full = 3] = "Full";
    }(ka || (ka = {})), function(e) {
        e[e.Decimal = 0] = "Decimal", e[e.Group = 1] = "Group", e[e.List = 2] = "List", 
        e[e.PercentSign = 3] = "PercentSign", e[e.PlusSign = 4] = "PlusSign", e[e.MinusSign = 5] = "MinusSign", 
        e[e.Exponential = 6] = "Exponential", e[e.SuperscriptingExponent = 7] = "SuperscriptingExponent", 
        e[e.PerMille = 8] = "PerMille", e[e[1 / 0] = 9] = "Infinity", e[e.NaN = 10] = "NaN", 
        e[e.TimeSeparator = 11] = "TimeSeparator", e[e.CurrencyDecimal = 12] = "CurrencyDecimal", 
        e[e.CurrencyGroup = 13] = "CurrencyGroup";
    }(Sa || (Sa = {})), function(e) {
        e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", 
        e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", 
        e[e.Saturday = 6] = "Saturday";
    }(Oa || (Oa = {}));
    var Ua, Wa, Za, Ka = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, Ga = {}, qa = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    function $a(e, t) {
        return t && (e = e.replace(/\{([^}]+)}/g, function(e, n) {
            return null != t && n in t ? t[n] : e;
        })), e;
    }
    function Ya(e, t, n, r, o) {
        void 0 === n && (n = "-");
        var i = "";
        (e < 0 || o && e <= 0) && (o ? e = 1 - e : (e = -e, i = n));
        for (var s = String(e); s.length < t; ) s = "0" + s;
        return r && (s = s.substr(s.length - t)), i + s;
    }
    function Ja(e, t, n, r, o) {
        return void 0 === n && (n = 0), void 0 === r && (r = !1), void 0 === o && (o = !1), 
        function(i, s) {
            var u = function(e, t, n) {
                switch (e) {
                  case Wa.FullYear:
                    return t.getFullYear();

                  case Wa.Month:
                    return t.getMonth();

                  case Wa.Date:
                    return t.getDate();

                  case Wa.Hours:
                    return t.getHours();

                  case Wa.Minutes:
                    return t.getMinutes();

                  case Wa.Seconds:
                    return t.getSeconds();

                  case Wa.Milliseconds:
                    var r = 1 === n ? 100 : 2 === n ? 10 : 1;
                    return Math.round(t.getMilliseconds() / r);

                  case Wa.Day:
                    return t.getDay();

                  default:
                    throw new Error('Unknown DateType value "' + e + '".');
                }
            }(e, i, t);
            return (n > 0 || u > -n) && (u += n), e === Wa.Hours && 0 === u && -12 === n && (u = 12), 
            Ya(u, t, ja(s, Sa.MinusSign), r, o);
        };
    }
    function Xa(e, t, n, r) {
        return void 0 === n && (n = xa.Format), void 0 === r && (r = !1), function(o, i) {
            return function(e, t, n, r, o, i) {
                switch (n) {
                  case Za.Months:
                    return function(e, t, n) {
                        var r = Ha(e);
                        return La(La([ r[5], r[6] ], t), n);
                    }(t, o, r)[e.getMonth()];

                  case Za.Days:
                    return function(e, t, n) {
                        var r = Ha(e);
                        return La(La([ r[3], r[4] ], t), n);
                    }(t, o, r)[e.getDay()];

                  case Za.DayPeriods:
                    var s = e.getHours(), u = e.getMinutes();
                    if (i) {
                        var a, c = function(e) {
                            var t = Ha(e);
                            return Va(t), (t[19][2] || []).map(function(e) {
                                return "string" == typeof e ? za(e) : [ za(e[0]), za(e[1]) ];
                            });
                        }(t), l = function(e, t, n) {
                            var r = Ha(e);
                            return Va(r), La(La([ r[19][0], r[19][1] ], t) || [], n) || [];
                        }(t, o, r);
                        if (c.forEach(function(e, t) {
                            if (Array.isArray(e)) {
                                var n = e[0], r = n.hours, o = n.minutes, i = e[1], c = i.hours, p = i.minutes;
                                s >= r && u >= o && (s < c || s === c && u < p) && (a = l[t]);
                            } else {
                                var f = e.hours, d = e.minutes;
                                f === s && d === u && (a = l[t]);
                            }
                        }), a) return a;
                    }
                    return function(e, t, n) {
                        var r = Ha(e);
                        return La(La([ r[1], r[2] ], t), n);
                    }(t, o, r)[s < 12 ? 0 : 1];

                  case Za.Eras:
                    return function(e, t) {
                        return La(Ha(e)[7], t);
                    }(t, r)[e.getFullYear() <= 0 ? 0 : 1];

                  default:
                    throw new Error("unexpected translation type " + n);
                }
            }(o, i, e, t, n, r);
        };
    }
    function Qa(e) {
        return function(t, n, r) {
            var o = -1 * r, i = ja(n, Sa.MinusSign), s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
            switch (e) {
              case Ua.Short:
                return (o >= 0 ? "+" : "") + Ya(s, 2, i) + Ya(Math.abs(o % 60), 2, i);

              case Ua.ShortGMT:
                return "GMT" + (o >= 0 ? "+" : "") + Ya(s, 1, i);

              case Ua.Long:
                return "GMT" + (o >= 0 ? "+" : "") + Ya(s, 2, i) + ":" + Ya(Math.abs(o % 60), 2, i);

              case Ua.Extended:
                return 0 === r ? "Z" : (o >= 0 ? "+" : "") + Ya(s, 2, i) + ":" + Ya(Math.abs(o % 60), 2, i);

              default:
                throw new Error('Unknown zone width "' + e + '"');
            }
        };
    }
    !function(e) {
        e[e.Short = 0] = "Short", e[e.ShortGMT = 1] = "ShortGMT", e[e.Long = 2] = "Long", 
        e[e.Extended = 3] = "Extended";
    }(Ua || (Ua = {})), function(e) {
        e[e.FullYear = 0] = "FullYear", e[e.Month = 1] = "Month", e[e.Date = 2] = "Date", 
        e[e.Hours = 3] = "Hours", e[e.Minutes = 4] = "Minutes", e[e.Seconds = 5] = "Seconds", 
        e[e.Milliseconds = 6] = "Milliseconds", e[e.Day = 7] = "Day";
    }(Wa || (Wa = {})), function(e) {
        e[e.DayPeriods = 0] = "DayPeriods", e[e.Days = 1] = "Days", e[e.Months = 2] = "Months", 
        e[e.Eras = 3] = "Eras";
    }(Za || (Za = {}));
    var ec = 0, tc = 4;
    function nc(e, t) {
        return void 0 === t && (t = !1), function(n, r) {
            var o, i, s, u;
            if (t) {
                var a = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1, c = n.getDate();
                o = 1 + Math.floor((c + a) / 7);
            } else {
                var l = (s = n.getFullYear(), u = new Date(s, ec, 1).getDay(), new Date(s, 0, 1 + (u <= tc ? tc : tc + 7) - u)), p = (i = n, 
                new Date(i.getFullYear(), i.getMonth(), i.getDate() + (tc - i.getDay()))).getTime() - l.getTime();
                o = 1 + Math.round(p / 6048e5);
            }
            return Ya(o, e, ja(r, Sa.MinusSign));
        };
    }
    var rc = {};
    function oc(e, t) {
        e = e.replace(/:/g, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n;
    }
    function ic(e) {
        var t = new Date(0), n = 0, r = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, i = e[8] ? t.setUTCHours : t.setHours;
        e[9] && (n = Number(e[9] + e[10]), r = Number(e[9] + e[11])), o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
        var s = Number(e[4] || 0) - n, u = Number(e[5] || 0) - r, a = Number(e[6] || 0), c = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
        return i.call(t, s, u, a, c), t;
    }
    function sc(e) {
        return e instanceof Date && !isNaN(e.valueOf());
    }
    var uc = /^(\d+)?\.((\d+)(-(\d+))?)?$/, ac = 22, cc = ".", lc = "0", pc = ";", fc = ",", dc = "#";
    function hc(e, t, n, r, o, i, s) {
        void 0 === s && (s = !1);
        var u = "", a = !1;
        if (isFinite(e)) {
            var c = function(e) {
                var t, n, r, o, i, s = Math.abs(e) + "", u = 0;
                for ((n = s.indexOf(cc)) > -1 && (s = s.replace(cc, "")), (r = s.search(/e/i)) > 0 ? (n < 0 && (n = r), 
                n += +s.slice(r + 1), s = s.substring(0, r)) : n < 0 && (n = s.length), r = 0; s.charAt(r) === lc; r++) ;
                if (r === (i = s.length)) t = [ 0 ], n = 1; else {
                    for (i--; s.charAt(i) === lc; ) i--;
                    for (n -= r, t = [], o = 0; r <= i; r++, o++) t[o] = Number(s.charAt(r));
                }
                return n > ac && (t = t.splice(0, ac - 1), u = n - 1, n = 1), {
                    digits: t,
                    exponent: u,
                    integerLen: n
                };
            }(e);
            s && (c = function(e) {
                if (0 === e.digits[0]) return e;
                var t = e.digits.length - e.integerLen;
                return e.exponent ? e.exponent += 2 : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0), 
                e.integerLen += 2), e;
            }(c));
            var l = t.minInt, p = t.minFrac, f = t.maxFrac;
            if (i) {
                var d = i.match(uc);
                if (null === d) throw new Error(i + " is not a valid digit info");
                var h = d[1], y = d[3], v = d[5];
                null != h && (l = vc(h)), null != y && (p = vc(y)), null != v ? f = vc(v) : null != y && p > f && (f = p);
            }
            !function(e, t, n) {
                if (t > n) throw new Error("The minimum number of digits after fraction (" + t + ") is higher than the maximum (" + n + ").");
                var r = e.digits, o = r.length - e.integerLen, i = Math.min(Math.max(t, o), n), s = i + e.integerLen, u = r[s];
                if (s > 0) {
                    r.splice(Math.max(e.integerLen, s));
                    for (var a = s; a < r.length; a++) r[a] = 0;
                } else {
                    o = Math.max(0, o), e.integerLen = 1, r.length = Math.max(1, s = i + 1), r[0] = 0;
                    for (var c = 1; c < s; c++) r[c] = 0;
                }
                if (u >= 5) if (s - 1 < 0) {
                    for (var l = 0; l > s; l--) r.unshift(0), e.integerLen++;
                    r.unshift(1), e.integerLen++;
                } else r[s - 1]++;
                for (;o < Math.max(0, i); o++) r.push(0);
                var p = 0 !== i, f = t + e.integerLen, d = r.reduceRight(function(e, t, n, r) {
                    return t += e, r[n] = t < 10 ? t : t - 10, p && (0 === r[n] && n >= f ? r.pop() : p = !1), 
                    t >= 10 ? 1 : 0;
                }, 0);
                d && (r.unshift(d), e.integerLen++);
            }(c, p, f);
            var m = c.digits, g = c.integerLen, w = c.exponent, _ = [];
            for (a = m.every(function(e) {
                return !e;
            }); g < l; g++) m.unshift(0);
            for (;g < 0; g++) m.unshift(0);
            g > 0 ? _ = m.splice(g, m.length) : (_ = m, m = [ 0 ]);
            var b = [];
            for (m.length >= t.lgSize && b.unshift(m.splice(-t.lgSize, m.length).join("")); m.length > t.gSize; ) b.unshift(m.splice(-t.gSize, m.length).join(""));
            m.length && b.unshift(m.join("")), u = b.join(ja(n, r)), _.length && (u += ja(n, o) + _.join("")), 
            w && (u += ja(n, Sa.Exponential) + "+" + w);
        } else u = ja(n, Sa.Infinity);
        return e < 0 && !a ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf;
    }
    function yc(e, t) {
        void 0 === t && (t = "-");
        var n = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: "",
            posSuf: "",
            negPre: "",
            negSuf: "",
            gSize: 0,
            lgSize: 0
        }, r = e.split(pc), o = r[0], i = r[1], s = -1 !== o.indexOf(cc) ? o.split(cc) : [ o.substring(0, o.lastIndexOf(lc) + 1), o.substring(o.lastIndexOf(lc) + 1) ], u = s[0], a = s[1] || "";
        n.posPre = u.substr(0, u.indexOf(dc));
        for (var c = 0; c < a.length; c++) {
            var l = a.charAt(c);
            l === lc ? n.minFrac = n.maxFrac = c + 1 : l === dc ? n.maxFrac = c + 1 : n.posSuf += l;
        }
        var p = u.split(fc);
        if (n.gSize = p[1] ? p[1].length : 0, n.lgSize = p[2] || p[1] ? (p[2] || p[1]).length : 0, 
        i) {
            var f = o.length - n.posPre.length - n.posSuf.length, d = i.indexOf(dc);
            n.negPre = i.substr(0, d).replace(/'/g, ""), n.negSuf = i.substr(d + f).replace(/'/g, "");
        } else n.negPre = t + n.posPre, n.negSuf = n.posSuf;
        return n;
    }
    function vc(e) {
        var t = parseInt(e);
        if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
        return t;
    }
    var mc = new ce("UseV4Plurals"), gc = function() {};
    function wc(e, t, n, r) {
        var o = "=" + e;
        if (t.indexOf(o) > -1) return o;
        if (o = n.getPluralCategory(e, r), t.indexOf(o) > -1) return o;
        if (t.indexOf("other") > -1) return "other";
        throw new Error('No plural message found for value "' + e + '"');
    }
    var _c = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.locale = t, r.deprecatedPluralFn = n, r;
        }
        return o(t, e), t.prototype.getPluralCategory = function(e, t) {
            switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : function(e) {
                return Ha(e)[18];
            }(t || this.locale)(e)) {
              case Ea.Zero:
                return "zero";

              case Ea.One:
                return "one";

              case Ea.Two:
                return "two";

              case Ea.Few:
                return "few";

              case Ea.Many:
                return "many";

              default:
                return "other";
            }
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            }, {
                type: void 0,
                decorators: [ {
                    type: Ze
                }, {
                    type: We,
                    args: [ mc ]
                } ]
            } ];
        }, t;
    }(gc);
    function bc(e, t) {
        t = encodeURIComponent(t);
        try {
            for (var n = s(e.split(";")), r = n.next(); !r.done; r = n.next()) {
                var o = r.value, i = o.indexOf("="), a = u(-1 == i ? [ o, "" ] : [ o.slice(0, i), o.slice(i + 1) ], 2), c = a[0], l = a[1];
                if (c.trim() === t) return decodeURIComponent(l);
            }
        } catch (e) {
            p = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (f = n.return) && f.call(n);
            } finally {
                if (p) throw p.error;
            }
        }
        return null;
        var p, f;
    }
    var Cc = function() {
        function e(e, t, n, r) {
            this._iterableDiffers = e, this._keyValueDiffers = t, this._ngEl = n, this._renderer = r, 
            this._initialClasses = [];
        }
        return Object.defineProperty(e.prototype, "klass", {
            set: function(e) {
                this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], 
                this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClass", {
            set: function(e) {
                this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, 
                this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, 
                this._rawClass && (kr(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create());
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.ngDoCheck = function() {
            if (this._iterableDiffer) {
                var e = this._iterableDiffer.diff(this._rawClass);
                e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
                var t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t);
            }
        }, e.prototype._applyKeyValueChanges = function(e) {
            var t = this;
            e.forEachAddedItem(function(e) {
                return t._toggleClass(e.key, e.currentValue);
            }), e.forEachChangedItem(function(e) {
                return t._toggleClass(e.key, e.currentValue);
            }), e.forEachRemovedItem(function(e) {
                e.previousValue && t._toggleClass(e.key, !1);
            });
        }, e.prototype._applyIterableChanges = function(e) {
            var t = this;
            e.forEachAddedItem(function(e) {
                if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Ie(e.item));
                t._toggleClass(e.item, !0);
            }), e.forEachRemovedItem(function(e) {
                return t._toggleClass(e.item, !1);
            });
        }, e.prototype._applyClasses = function(e) {
            var t = this;
            e && (Array.isArray(e) || e instanceof Set ? e.forEach(function(e) {
                return t._toggleClass(e, !0);
            }) : Object.keys(e).forEach(function(n) {
                return t._toggleClass(n, !!e[n]);
            }));
        }, e.prototype._removeClasses = function(e) {
            var t = this;
            e && (Array.isArray(e) || e instanceof Set ? e.forEach(function(e) {
                return t._toggleClass(e, !1);
            }) : Object.keys(e).forEach(function(e) {
                return t._toggleClass(e, !1);
            }));
        }, e.prototype._toggleClass = function(e, t) {
            var n = this;
            (e = e.trim()) && e.split(/\s+/g).forEach(function(e) {
                t ? n._renderer.addClass(n._ngEl.nativeElement, e) : n._renderer.removeClass(n._ngEl.nativeElement, e);
            });
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngClass]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: Lr
            }, {
                type: zr
            }, {
                type: cr
            }, {
                type: ar
            } ];
        }, e.propDecorators = {
            klass: [ {
                type: De,
                args: [ "class" ]
            } ],
            ngClass: [ {
                type: De
            } ]
        }, e;
    }(), Dc = function() {
        function e(e) {
            this._viewContainerRef = e, this._componentRef = null, this._moduleRef = null;
        }
        return e.prototype.ngOnChanges = function(e) {
            if (this._viewContainerRef.clear(), this._componentRef = null, this.ngComponentOutlet) {
                var t = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (e.ngComponentOutletNgModuleFactory) if (this._moduleRef && this._moduleRef.destroy(), 
                this.ngComponentOutletNgModuleFactory) {
                    var n = t.get(Pn);
                    this._moduleRef = this.ngComponentOutletNgModuleFactory.create(n.injector);
                } else this._moduleRef = null;
                var r = (this._moduleRef ? this._moduleRef.componentFactoryResolver : t.get(On)).resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(r, this._viewContainerRef.length, t, this.ngComponentOutletContent);
            }
        }, e.prototype.ngOnDestroy = function() {
            this._moduleRef && this._moduleRef.destroy();
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngComponentOutlet]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            } ];
        }, e.propDecorators = {
            ngComponentOutlet: [ {
                type: De
            } ],
            ngComponentOutletInjector: [ {
                type: De
            } ],
            ngComponentOutletContent: [ {
                type: De
            } ],
            ngComponentOutletNgModuleFactory: [ {
                type: De
            } ]
        }, e;
    }(), Ec = function() {
        function e(e, t, n, r) {
            this.$implicit = e, this.ngForOf = t, this.index = n, this.count = r;
        }
        return Object.defineProperty(e.prototype, "first", {
            get: function() {
                return 0 === this.index;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "last", {
            get: function() {
                return this.index === this.count - 1;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "even", {
            get: function() {
                return this.index % 2 == 0;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "odd", {
            get: function() {
                return !this.even;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(), xc = function() {
        function e(e, t, n) {
            this._viewContainer = e, this._template = t, this._differs = n, this._differ = null;
        }
        return Object.defineProperty(e.prototype, "ngForTrackBy", {
            get: function() {
                return this._trackByFn;
            },
            set: function(e) {
                Xn() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(e) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), 
                this._trackByFn = e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngForTemplate", {
            set: function(e) {
                e && (this._template = e);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.ngOnChanges = function(e) {
            if ("ngForOf" in e) {
                var t = e.ngForOf.currentValue;
                if (!this._differ && t) try {
                    this._differ = this._differs.find(t).create(this.ngForTrackBy);
                } catch (e) {
                    throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((n = t).name || typeof n) + "'. NgFor only supports binding to Iterables such as Arrays.");
                }
            }
            var n;
        }, e.prototype.ngDoCheck = function() {
            if (this._differ) {
                var e = this._differ.diff(this.ngForOf);
                e && this._applyChanges(e);
            }
        }, e.prototype._applyChanges = function(e) {
            var t = this, n = [];
            e.forEachOperation(function(e, r, o) {
                if (null == e.previousIndex) {
                    var i = t._viewContainer.createEmbeddedView(t._template, new Ec(null, t.ngForOf, -1, -1), o), s = new Ac(e, i);
                    n.push(s);
                } else null == o ? t._viewContainer.remove(r) : (i = t._viewContainer.get(r), t._viewContainer.move(i, o), 
                s = new Ac(e, i), n.push(s));
            });
            for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
            r = 0;
            for (var o = this._viewContainer.length; r < o; r++) {
                var i = this._viewContainer.get(r);
                i.context.index = r, i.context.count = o;
            }
            e.forEachIdentityChange(function(e) {
                t._viewContainer.get(e.currentIndex).context.$implicit = e.item;
            });
        }, e.prototype._perViewChange = function(e, t) {
            e.context.$implicit = t.item;
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngFor][ngForOf]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            }, {
                type: yr
            }, {
                type: Lr
            } ];
        }, e.propDecorators = {
            ngForOf: [ {
                type: De
            } ],
            ngForTrackBy: [ {
                type: De
            } ],
            ngForTemplate: [ {
                type: De
            } ]
        }, e;
    }(), Ac = function(e, t) {
        this.record = e, this.view = t;
    }, kc = function() {
        function e(e, t) {
            this._viewContainer = e, this._context = new Sc(), this._thenTemplateRef = null, 
            this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, 
            this._thenTemplateRef = t;
        }
        return Object.defineProperty(e.prototype, "ngIf", {
            set: function(e) {
                this._context.$implicit = this._context.ngIf = e, this._updateView();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngIfThen", {
            set: function(e) {
                Oc("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngIfElse", {
            set: function(e) {
                Oc("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView();
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._updateView = function() {
            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, 
            this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), 
            this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngIf]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            }, {
                type: yr
            } ];
        }, e.propDecorators = {
            ngIf: [ {
                type: De
            } ],
            ngIfThen: [ {
                type: De
            } ],
            ngIfElse: [ {
                type: De
            } ]
        }, e;
    }(), Sc = function() {
        this.$implicit = null, this.ngIf = null;
    };
    function Oc(e, t) {
        if (t && !t.createEmbeddedView) throw new Error(e + " must be a TemplateRef, but received '" + Ie(t) + "'.");
    }
    var Fc = function() {
        function e(e, t) {
            this._viewContainerRef = e, this._templateRef = t, this._created = !1;
        }
        return e.prototype.create = function() {
            this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef);
        }, e.prototype.destroy = function() {
            this._created = !1, this._viewContainerRef.clear();
        }, e.prototype.enforceState = function(e) {
            e && !this._created ? this.create() : !e && this._created && this.destroy();
        }, e;
    }(), Tc = function() {
        function e() {
            this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1;
        }
        return Object.defineProperty(e.prototype, "ngSwitch", {
            set: function(e) {
                this._ngSwitch = e, 0 === this._caseCount && this._updateDefaultCases(!0);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._addCase = function() {
            return this._caseCount++;
        }, e.prototype._addDefault = function(e) {
            this._defaultViews || (this._defaultViews = []), this._defaultViews.push(e);
        }, e.prototype._matchCase = function(e) {
            var t = e == this._ngSwitch;
            return this._lastCasesMatched = this._lastCasesMatched || t, this._lastCaseCheckIndex++, 
            this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), 
            this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), t;
        }, e.prototype._updateDefaultCases = function(e) {
            if (this._defaultViews && e !== this._defaultUsed) {
                this._defaultUsed = e;
                for (var t = 0; t < this._defaultViews.length; t++) this._defaultViews[t].enforceState(e);
            }
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngSwitch]"
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e.propDecorators = {
            ngSwitch: [ {
                type: De
            } ]
        }, e;
    }(), Pc = function() {
        function e(e, t, n) {
            this.ngSwitch = n, n._addCase(), this._view = new Fc(e, t);
        }
        return e.prototype.ngDoCheck = function() {
            this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngSwitchCase]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            }, {
                type: yr
            }, {
                type: Tc,
                decorators: [ {
                    type: qe
                } ]
            } ];
        }, e.propDecorators = {
            ngSwitchCase: [ {
                type: De
            } ]
        }, e;
    }(), Nc = function() {
        function e(e, t, n) {
            n._addDefault(new Fc(e, t));
        }
        return e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngSwitchDefault]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            }, {
                type: yr
            }, {
                type: Tc,
                decorators: [ {
                    type: qe
                } ]
            } ];
        }, e;
    }(), Mc = function() {
        function e(e) {
            this._localization = e, this._caseViews = {};
        }
        return Object.defineProperty(e.prototype, "ngPlural", {
            set: function(e) {
                this._switchValue = e, this._updateView();
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addCase = function(e, t) {
            this._caseViews[e] = t;
        }, e.prototype._updateView = function() {
            this._clearViews();
            var e = Object.keys(this._caseViews), t = wc(this._switchValue, e, this._localization);
            this._activateView(this._caseViews[t]);
        }, e.prototype._clearViews = function() {
            this._activeView && this._activeView.destroy();
        }, e.prototype._activateView = function(e) {
            e && (this._activeView = e, this._activeView.create());
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngPlural]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: gc
            } ];
        }, e.propDecorators = {
            ngPlural: [ {
                type: De
            } ]
        }, e;
    }(), Ic = function() {
        function e(e, t, n, r) {
            this.value = e;
            var o = !isNaN(Number(e));
            r.addCase(o ? "=" + e : e, new Fc(n, t));
        }
        return e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngPluralCase]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: we,
                    args: [ "ngPluralCase" ]
                } ]
            }, {
                type: yr
            }, {
                type: vr
            }, {
                type: Mc,
                decorators: [ {
                    type: qe
                } ]
            } ];
        }, e;
    }(), Rc = function() {
        function e(e, t, n) {
            this._differs = e, this._ngEl = t, this._renderer = n;
        }
        return Object.defineProperty(e.prototype, "ngStyle", {
            set: function(e) {
                this._ngStyle = e, !this._differ && e && (this._differ = this._differs.find(e).create());
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.ngDoCheck = function() {
            if (this._differ) {
                var e = this._differ.diff(this._ngStyle);
                e && this._applyChanges(e);
            }
        }, e.prototype._applyChanges = function(e) {
            var t = this;
            e.forEachRemovedItem(function(e) {
                return t._setStyle(e.key, null);
            }), e.forEachAddedItem(function(e) {
                return t._setStyle(e.key, e.currentValue);
            }), e.forEachChangedItem(function(e) {
                return t._setStyle(e.key, e.currentValue);
            });
        }, e.prototype._setStyle = function(e, t) {
            var n = u(e.split("."), 2), r = n[0], o = n[1];
            null != (t = null != t && o ? "" + t + o : t) ? this._renderer.setStyle(this._ngEl.nativeElement, r, t) : this._renderer.removeStyle(this._ngEl.nativeElement, r);
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngStyle]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: zr
            }, {
                type: cr
            }, {
                type: ar
            } ];
        }, e.propDecorators = {
            ngStyle: [ {
                type: De
            } ]
        }, e;
    }(), jc = [ Cc, Dc, xc, kc, function() {
        function e(e) {
            this._viewContainerRef = e;
        }
        return e.prototype.ngOnChanges = function(e) {
            this._shouldRecreateView(e) ? (this._viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)), 
            this.ngTemplateOutlet && (this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext))) : this._viewRef && this.ngTemplateOutletContext && this._updateExistingContext(this.ngTemplateOutletContext);
        }, e.prototype._shouldRecreateView = function(e) {
            var t = e.ngTemplateOutletContext;
            return !!e.ngTemplateOutlet || t && this._hasContextShapeChanged(t);
        }, e.prototype._hasContextShapeChanged = function(e) {
            var t, n, r = Object.keys(e.previousValue || {}), o = Object.keys(e.currentValue || {});
            if (r.length === o.length) {
                try {
                    for (var i = s(o), u = i.next(); !u.done; u = i.next()) {
                        var a = u.value;
                        if (-1 === r.indexOf(a)) return !0;
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally {
                    try {
                        u && !u.done && (n = i.return) && n.call(i);
                    } finally {
                        if (t) throw t.error;
                    }
                }
                return !1;
            }
            return !0;
        }, e.prototype._updateExistingContext = function(e) {
            try {
                for (var t = s(Object.keys(e)), n = t.next(); !n.done; n = t.next()) {
                    var r = n.value;
                    this._viewRef.context[r] = this.ngTemplateOutletContext[r];
                }
            } catch (e) {
                o = {
                    error: e
                };
            } finally {
                try {
                    n && !n.done && (i = t.return) && i.call(t);
                } finally {
                    if (o) throw o.error;
                }
            }
            var o, i;
        }, e.decorators = [ {
            type: be,
            args: [ {
                selector: "[ngTemplateOutlet]"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: vr
            } ];
        }, e.propDecorators = {
            ngTemplateOutletContext: [ {
                type: De
            } ],
            ngTemplateOutlet: [ {
                type: De
            } ]
        }, e;
    }(), Rc, Tc, Pc, Nc, Mc, Ic ];
    function Bc(e, t) {
        return Error("InvalidPipeArgument: '" + t + "' for pipe '" + Ie(e) + "'");
    }
    var Vc, Lc = function() {
        function e() {}
        return e.format = function(e, t, n, r) {
            void 0 === r && (r = {});
            var o = r.minimumIntegerDigits, i = r.minimumFractionDigits, s = r.maximumFractionDigits, u = r.currency, a = r.currencyAsSymbol, c = void 0 !== a && a, l = {
                minimumIntegerDigits: o,
                minimumFractionDigits: i,
                maximumFractionDigits: s,
                style: Da[n].toLowerCase()
            };
            return n == Da.Currency && (l.currency = "string" == typeof u ? u : void 0, l.currencyDisplay = c ? "symbol" : "code"), 
            new Intl.NumberFormat(t, l).format(e);
        }, e;
    }(), zc = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/, Hc = {
        yMMMdjms: Xc(Jc([ $c("year", 1), Yc("month", 3), $c("day", 1), $c("hour", 1), $c("minute", 1), $c("second", 1) ])),
        yMdjm: Xc(Jc([ $c("year", 1), $c("month", 1), $c("day", 1), $c("hour", 1), $c("minute", 1) ])),
        yMMMMEEEEd: Xc(Jc([ $c("year", 1), Yc("month", 4), Yc("weekday", 4), $c("day", 1) ])),
        yMMMMd: Xc(Jc([ $c("year", 1), Yc("month", 4), $c("day", 1) ])),
        yMMMd: Xc(Jc([ $c("year", 1), Yc("month", 3), $c("day", 1) ])),
        yMd: Xc(Jc([ $c("year", 1), $c("month", 1), $c("day", 1) ])),
        jms: Xc(Jc([ $c("hour", 1), $c("second", 1), $c("minute", 1) ])),
        jm: Xc(Jc([ $c("hour", 1), $c("minute", 1) ]))
    }, Uc = {
        yyyy: Xc($c("year", 4)),
        yy: Xc($c("year", 2)),
        y: Xc($c("year", 1)),
        MMMM: Xc(Yc("month", 4)),
        MMM: Xc(Yc("month", 3)),
        MM: Xc($c("month", 2)),
        M: Xc($c("month", 1)),
        LLLL: Xc(Yc("month", 4)),
        L: Xc(Yc("month", 1)),
        dd: Xc($c("day", 2)),
        d: Xc($c("day", 1)),
        HH: Wc(Zc(Xc(qc($c("hour", 2), !1)))),
        H: Zc(Xc(qc($c("hour", 1), !1))),
        hh: Wc(Zc(Xc(qc($c("hour", 2), !0)))),
        h: Zc(Xc(qc($c("hour", 1), !0))),
        jj: Xc($c("hour", 2)),
        j: Xc($c("hour", 1)),
        mm: Wc(Xc($c("minute", 2))),
        m: Xc($c("minute", 1)),
        ss: Wc(Xc($c("second", 2))),
        s: Xc($c("second", 1)),
        sss: Xc($c("second", 3)),
        EEEE: Xc(Yc("weekday", 4)),
        EEE: Xc(Yc("weekday", 3)),
        EE: Xc(Yc("weekday", 2)),
        E: Xc(Yc("weekday", 1)),
        a: (Vc = Xc(qc($c("hour", 1), !0)), function(e, t) {
            return Vc(e, t).split(" ")[1];
        }),
        Z: Gc("short"),
        z: Gc("long"),
        ww: Xc({}),
        w: Xc({}),
        G: Xc(Yc("era", 1)),
        GG: Xc(Yc("era", 2)),
        GGG: Xc(Yc("era", 3)),
        GGGG: Xc(Yc("era", 4))
    };
    function Wc(e) {
        return function(t, n) {
            var r = e(t, n);
            return 1 == r.length ? "0" + r : r;
        };
    }
    function Zc(e) {
        return function(t, n) {
            return e(t, n).split(" ")[0];
        };
    }
    function Kc(e, t, n) {
        return new Intl.DateTimeFormat(t, n).format(e).replace(/[\u200e\u200f]/g, "");
    }
    function Gc(e) {
        var t = {
            hour: "2-digit",
            hour12: !1,
            timeZoneName: e
        };
        return function(e, n) {
            var r = Kc(e, n, t);
            return r ? r.substring(3) : "";
        };
    }
    function qc(e, t) {
        return e.hour12 = t, e;
    }
    function $c(e, t) {
        var n = {};
        return n[e] = 2 === t ? "2-digit" : "numeric", n;
    }
    function Yc(e, t) {
        var n = {};
        return n[e] = t < 4 ? t > 1 ? "short" : "narrow" : "long", n;
    }
    function Jc(e) {
        return e.reduce(function(e, t) {
            return i({}, e, t);
        }, {});
    }
    function Xc(e) {
        return function(t, n) {
            return Kc(t, n, e);
        };
    }
    var Qc = new Map(), el = function() {
        function e() {}
        return e.format = function(e, t, n) {
            return function(e, t, n) {
                var r = Hc[e];
                if (r) return r(t, n);
                var o = e, i = Qc.get(o);
                if (!i) {
                    i = [];
                    var s = void 0;
                    zc.exec(e);
                    for (var u = e; u; ) (s = zc.exec(u)) ? u = (i = i.concat(s.slice(1))).pop() : (i.push(u), 
                    u = null);
                    Qc.set(o, i);
                }
                return i.reduce(function(e, r) {
                    var o = Uc[r];
                    return e + (o ? o(t, n) : function(e) {
                        return "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                    }(r));
                }, "");
            }(n, e, t);
        }, e;
    }(), tl = function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n) {
            if (void 0 === n && (n = "mediumDate"), null == t || "" === t || t != t) return null;
            var r;
            if ("string" == typeof t && (t = t.trim()), nl(t)) r = t; else if (isNaN(t - parseFloat(t))) if ("string" == typeof t && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                var o = u(t.split("-").map(function(e) {
                    return parseInt(e, 10);
                }), 3), i = o[0], s = o[1], a = o[2];
                r = new Date(i, s - 1, a);
            } else r = new Date(t); else r = new Date(parseFloat(t));
            if (!nl(r)) {
                var c = void 0;
                if ("string" != typeof t || !(c = t.match(Ka))) throw Bc(e, t);
                r = ic(c);
            }
            return el.format(r, this._locale, e._ALIASES[n] || n);
        }, e._ALIASES = {
            medium: "yMMMdjms",
            short: "yMdjm",
            fullDate: "yMMMMEEEEd",
            longDate: "yMMMMd",
            mediumDate: "yMMMd",
            shortDate: "yMd",
            mediumTime: "jms",
            shortTime: "jm"
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "date",
                pure: !0
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }();
    function nl(e) {
        return e instanceof Date && !isNaN(e.valueOf());
    }
    function rl(e, t, n, r, o, i, s) {
        if (void 0 === i && (i = null), void 0 === s && (s = !1), null == n) return null;
        if ("number" != typeof (n = "string" != typeof n || isNaN(+n - parseFloat(n)) ? n : +n)) throw Bc(e, n);
        var u, a, c;
        if (r !== Da.Currency && (u = 1, a = 0, c = 3), o) {
            var l = o.match(uc);
            if (null === l) throw new Error(o + " is not a valid digit info for number pipes");
            null != l[1] && (u = vc(l[1])), null != l[3] && (a = vc(l[3])), null != l[5] && (c = vc(l[5]));
        }
        return Lc.format(n, t, r, {
            minimumIntegerDigits: u,
            minimumFractionDigits: a,
            maximumFractionDigits: c,
            currency: i,
            currencyAsSymbol: s
        });
    }
    var ol = [ function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n) {
            return rl(e, this._locale, t, Da.Decimal, n);
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "number"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n) {
            return rl(e, this._locale, t, Da.Percent, n);
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "percent"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n, r, o) {
            return void 0 === n && (n = "USD"), void 0 === r && (r = !1), rl(e, this._locale, t, Da.Currency, o, n, r);
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "currency"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), tl ], il = function() {
        function e() {}
        return e.prototype.createSubscription = function(e, t) {
            return e.subscribe({
                next: t,
                error: function(e) {
                    throw e;
                }
            });
        }, e.prototype.dispose = function(e) {
            e.unsubscribe();
        }, e.prototype.onDestroy = function(e) {
            e.unsubscribe();
        }, e;
    }(), sl = new (function() {
        function e() {}
        return e.prototype.createSubscription = function(e, t) {
            return e.then(t, function(e) {
                throw e;
            });
        }, e.prototype.dispose = function(e) {}, e.prototype.onDestroy = function(e) {}, 
        e;
    }())(), ul = new il(), al = function() {
        function e(e) {
            this._ref = e, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, 
            this._obj = null, this._strategy = null;
        }
        return e.prototype.ngOnDestroy = function() {
            this._subscription && this._dispose();
        }, e.prototype.transform = function(e) {
            return this._obj ? e !== this._obj ? (this._dispose(), this.transform(e)) : this._latestValue === this._latestReturnedValue ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, 
            xr.wrap(this._latestValue)) : (e && this._subscribe(e), this._latestReturnedValue = this._latestValue, 
            this._latestValue);
        }, e.prototype._subscribe = function(e) {
            var t = this;
            this._obj = e, this._strategy = this._selectStrategy(e), this._subscription = this._strategy.createSubscription(e, function(n) {
                return t._updateLatestValue(e, n);
            });
        }, e.prototype._selectStrategy = function(t) {
            if (an(t)) return sl;
            if (function(e) {
                return !!e && "function" == typeof e.subscribe;
            }(t)) return ul;
            throw Bc(e, t);
        }, e.prototype._dispose = function() {
            this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, 
            this._subscription = null, this._obj = null;
        }, e.prototype._updateLatestValue = function(e, t) {
            e === this._obj && (this._latestValue = t, this._ref.markForCheck());
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "async",
                pure: !1
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: mr
            } ];
        }, e;
    }(), cl = function() {
        function e() {}
        return e.prototype.transform = function(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Bc(e, t);
            return t.toLowerCase();
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "lowercase"
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), ll = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g, pl = function() {
        function e() {}
        return e.prototype.transform = function(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Bc(e, t);
            return t.replace(ll, function(e) {
                return e[0].toUpperCase() + e.substr(1).toLowerCase();
            });
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "titlecase"
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), fl = function() {
        function e() {}
        return e.prototype.transform = function(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Bc(e, t);
            return t.toUpperCase();
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "uppercase"
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), dl = function() {
        function e(e) {
            this.locale = e;
        }
        return e.prototype.transform = function(t, n, r, o) {
            if (void 0 === n && (n = "mediumDate"), null == t || "" === t || t != t) return null;
            try {
                return function(e, t, n, r) {
                    var o = function(e) {
                        if (sc(e)) return e;
                        if ("number" == typeof e && !isNaN(e)) return new Date(e);
                        if ("string" == typeof e) {
                            e = e.trim();
                            var t, n = parseFloat(e);
                            if (!isNaN(e - n)) return new Date(n);
                            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                                var r = u(e.split("-").map(function(e) {
                                    return +e;
                                }), 3), o = r[0], i = r[1], s = r[2];
                                return new Date(o, i - 1, s);
                            }
                            if (t = e.match(Ka)) return ic(t);
                        }
                        var a = new Date(e);
                        if (!sc(a)) throw new Error('Unable to convert "' + e + '" into a date');
                        return a;
                    }(e);
                    t = function e(t, n) {
                        var r = function(e) {
                            return Ha(e)[0];
                        }(t);
                        if (Ga[r] = Ga[r] || {}, Ga[r][n]) return Ga[r][n];
                        var o = "";
                        switch (n) {
                          case "shortDate":
                            o = Ma(t, ka.Short);
                            break;

                          case "mediumDate":
                            o = Ma(t, ka.Medium);
                            break;

                          case "longDate":
                            o = Ma(t, ka.Long);
                            break;

                          case "fullDate":
                            o = Ma(t, ka.Full);
                            break;

                          case "shortTime":
                            o = Ia(t, ka.Short);
                            break;

                          case "mediumTime":
                            o = Ia(t, ka.Medium);
                            break;

                          case "longTime":
                            o = Ia(t, ka.Long);
                            break;

                          case "fullTime":
                            o = Ia(t, ka.Full);
                            break;

                          case "short":
                            var i = e(t, "shortTime"), s = e(t, "shortDate");
                            o = $a(Ra(t, ka.Short), [ i, s ]);
                            break;

                          case "medium":
                            var u = e(t, "mediumTime"), a = e(t, "mediumDate");
                            o = $a(Ra(t, ka.Medium), [ u, a ]);
                            break;

                          case "long":
                            var c = e(t, "longTime"), l = e(t, "longDate");
                            o = $a(Ra(t, ka.Long), [ c, l ]);
                            break;

                          case "full":
                            var p = e(t, "fullTime"), f = e(t, "fullDate");
                            o = $a(Ra(t, ka.Full), [ p, f ]);
                        }
                        return o && (Ga[r][n] = o), o;
                    }(n, t) || t;
                    for (var i, s = []; t; ) {
                        if (!(i = qa.exec(t))) {
                            s.push(t);
                            break;
                        }
                        var a = (s = s.concat(i.slice(1))).pop();
                        if (!a) break;
                        t = a;
                    }
                    var c = o.getTimezoneOffset();
                    r && (c = oc(r, c), o = function(e, t, n) {
                        var r = e.getTimezoneOffset();
                        return function(e, t) {
                            return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e;
                        }(e, -1 * (oc(t, r) - r));
                    }(o, r));
                    var l = "";
                    return s.forEach(function(e) {
                        var t = function(e) {
                            if (rc[e]) return rc[e];
                            var t;
                            switch (e) {
                              case "G":
                              case "GG":
                              case "GGG":
                                t = Xa(Za.Eras, Aa.Abbreviated);
                                break;

                              case "GGGG":
                                t = Xa(Za.Eras, Aa.Wide);
                                break;

                              case "GGGGG":
                                t = Xa(Za.Eras, Aa.Narrow);
                                break;

                              case "y":
                                t = Ja(Wa.FullYear, 1, 0, !1, !0);
                                break;

                              case "yy":
                                t = Ja(Wa.FullYear, 2, 0, !0, !0);
                                break;

                              case "yyy":
                                t = Ja(Wa.FullYear, 3, 0, !1, !0);
                                break;

                              case "yyyy":
                                t = Ja(Wa.FullYear, 4, 0, !1, !0);
                                break;

                              case "M":
                              case "L":
                                t = Ja(Wa.Month, 1, 1);
                                break;

                              case "MM":
                              case "LL":
                                t = Ja(Wa.Month, 2, 1);
                                break;

                              case "MMM":
                                t = Xa(Za.Months, Aa.Abbreviated);
                                break;

                              case "MMMM":
                                t = Xa(Za.Months, Aa.Wide);
                                break;

                              case "MMMMM":
                                t = Xa(Za.Months, Aa.Narrow);
                                break;

                              case "LLL":
                                t = Xa(Za.Months, Aa.Abbreviated, xa.Standalone);
                                break;

                              case "LLLL":
                                t = Xa(Za.Months, Aa.Wide, xa.Standalone);
                                break;

                              case "LLLLL":
                                t = Xa(Za.Months, Aa.Narrow, xa.Standalone);
                                break;

                              case "w":
                                t = nc(1);
                                break;

                              case "ww":
                                t = nc(2);
                                break;

                              case "W":
                                t = nc(1, !0);
                                break;

                              case "d":
                                t = Ja(Wa.Date, 1);
                                break;

                              case "dd":
                                t = Ja(Wa.Date, 2);
                                break;

                              case "E":
                              case "EE":
                              case "EEE":
                                t = Xa(Za.Days, Aa.Abbreviated);
                                break;

                              case "EEEE":
                                t = Xa(Za.Days, Aa.Wide);
                                break;

                              case "EEEEE":
                                t = Xa(Za.Days, Aa.Narrow);
                                break;

                              case "EEEEEE":
                                t = Xa(Za.Days, Aa.Short);
                                break;

                              case "a":
                              case "aa":
                              case "aaa":
                                t = Xa(Za.DayPeriods, Aa.Abbreviated);
                                break;

                              case "aaaa":
                                t = Xa(Za.DayPeriods, Aa.Wide);
                                break;

                              case "aaaaa":
                                t = Xa(Za.DayPeriods, Aa.Narrow);
                                break;

                              case "b":
                              case "bb":
                              case "bbb":
                                t = Xa(Za.DayPeriods, Aa.Abbreviated, xa.Standalone, !0);
                                break;

                              case "bbbb":
                                t = Xa(Za.DayPeriods, Aa.Wide, xa.Standalone, !0);
                                break;

                              case "bbbbb":
                                t = Xa(Za.DayPeriods, Aa.Narrow, xa.Standalone, !0);
                                break;

                              case "B":
                              case "BB":
                              case "BBB":
                                t = Xa(Za.DayPeriods, Aa.Abbreviated, xa.Format, !0);
                                break;

                              case "BBBB":
                                t = Xa(Za.DayPeriods, Aa.Wide, xa.Format, !0);
                                break;

                              case "BBBBB":
                                t = Xa(Za.DayPeriods, Aa.Narrow, xa.Format, !0);
                                break;

                              case "h":
                                t = Ja(Wa.Hours, 1, -12);
                                break;

                              case "hh":
                                t = Ja(Wa.Hours, 2, -12);
                                break;

                              case "H":
                                t = Ja(Wa.Hours, 1);
                                break;

                              case "HH":
                                t = Ja(Wa.Hours, 2);
                                break;

                              case "m":
                                t = Ja(Wa.Minutes, 1);
                                break;

                              case "mm":
                                t = Ja(Wa.Minutes, 2);
                                break;

                              case "s":
                                t = Ja(Wa.Seconds, 1);
                                break;

                              case "ss":
                                t = Ja(Wa.Seconds, 2);
                                break;

                              case "S":
                                t = Ja(Wa.Milliseconds, 1);
                                break;

                              case "SS":
                                t = Ja(Wa.Milliseconds, 2);
                                break;

                              case "SSS":
                                t = Ja(Wa.Milliseconds, 3);
                                break;

                              case "Z":
                              case "ZZ":
                              case "ZZZ":
                                t = Qa(Ua.Short);
                                break;

                              case "ZZZZZ":
                                t = Qa(Ua.Extended);
                                break;

                              case "O":
                              case "OO":
                              case "OOO":
                              case "z":
                              case "zz":
                              case "zzz":
                                t = Qa(Ua.ShortGMT);
                                break;

                              case "OOOO":
                              case "ZZZZ":
                              case "zzzz":
                                t = Qa(Ua.Long);
                                break;

                              default:
                                return null;
                            }
                            return rc[e] = t, t;
                        }(e);
                        l += t ? t(o, n, c) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                    }), l;
                }(t, n, o || this.locale, r);
            } catch (t) {
                throw Bc(e, t.message);
            }
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "date",
                pure: !0
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), hl = /#/g, yl = function() {
        function e(e) {
            this._localization = e;
        }
        return e.prototype.transform = function(t, n, r) {
            if (null == t) return "";
            if ("object" != typeof n || null === n) throw Bc(e, n);
            return n[wc(t, Object.keys(n), this._localization, r)].replace(hl, t.toString());
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "i18nPlural",
                pure: !0
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: gc
            } ];
        }, e;
    }(), vl = function() {
        function e() {}
        return e.prototype.transform = function(t, n) {
            if (null == t) return "";
            if ("object" != typeof n || "string" != typeof t) throw Bc(e, n);
            return n.hasOwnProperty(t) ? n[t] : n.hasOwnProperty("other") ? n.other : "";
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "i18nSelect",
                pure: !0
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), ml = function() {
        function e() {}
        return e.prototype.transform = function(e) {
            return JSON.stringify(e, null, 2);
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "json",
                pure: !1
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), gl = function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n, r) {
            if (bl(t)) return null;
            r = r || this._locale;
            try {
                return function(e, t, n) {
                    return hc(e, yc(Ba(t, Da.Decimal), ja(t, Sa.MinusSign)), t, Sa.Group, Sa.Decimal, n);
                }(Cl(t), r, n);
            } catch (t) {
                throw Bc(e, t.message);
            }
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "number"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), wl = function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n, r) {
            if (bl(t)) return null;
            r = r || this._locale;
            try {
                return function(e, t, n) {
                    return hc(e, yc(Ba(t, Da.Percent), ja(t, Sa.MinusSign)), t, Sa.Group, Sa.Decimal, n, !0).replace(new RegExp("%", "g"), ja(t, Sa.PercentSign));
                }(Cl(t), r, n);
            } catch (t) {
                throw Bc(e, t.message);
            }
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "percent"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }(), _l = function() {
        function e(e) {
            this._locale = e;
        }
        return e.prototype.transform = function(t, n, r, o, i) {
            if (void 0 === r && (r = "symbol"), bl(t)) return null;
            i = i || this._locale, "boolean" == typeof r && (console && console.warn && console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'), 
            r = r ? "symbol" : "code");
            var s = n || "USD";
            "code" !== r && (s = "symbol" === r || "symbol-narrow" === r ? function(e, t, n) {
                void 0 === n && (n = "en");
                var r = function(e) {
                    return Ha(e)[17];
                }(n)[e] || Na[e] || [], o = r[1];
                return "narrow" === t && "string" == typeof o ? o : r[0] || e;
            }(s, "symbol" === r ? "wide" : "narrow", i) : r);
            try {
                return function(e, t, n, r, o) {
                    var i = yc(Ba(t, Da.Currency), ja(t, Sa.MinusSign));
                    return i.minFrac = function(e) {
                        var t, n = Na[r];
                        return n && (t = n[2]), "number" == typeof t ? t : 2;
                    }(), i.maxFrac = i.minFrac, hc(e, i, t, Sa.CurrencyGroup, Sa.CurrencyDecimal, o).replace("\xa4", n).replace("\xa4", "");
                }(Cl(t), i, s, n, o);
            } catch (t) {
                throw Bc(e, t.message);
            }
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "currency"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Gr ]
                } ]
            } ];
        }, e;
    }();
    function bl(e) {
        return null == e || "" === e || e != e;
    }
    function Cl(e) {
        if ("string" == typeof e && !isNaN(Number(e) - parseFloat(e))) return Number(e);
        if ("number" != typeof e) throw new Error(e + " is not a number");
        return e;
    }
    var Dl = [ al, fl, cl, ml, function() {
        function e() {}
        return e.prototype.transform = function(t, n, r) {
            if (null == t) return t;
            if (!this.supports(t)) throw Bc(e, t);
            return t.slice(n, r);
        }, e.prototype.supports = function(e) {
            return "string" == typeof e || Array.isArray(e);
        }, e.decorators = [ {
            type: Ce,
            args: [ {
                name: "slice",
                pure: !1
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), gl, wl, pl, _l, dl, yl, vl ], El = function() {
        function e() {}
        return e.decorators = [ {
            type: Et,
            args: [ {
                declarations: [ jc, Dl ],
                exports: [ jc, Dl ],
                providers: [ {
                    provide: gc,
                    useClass: _c
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), xl = function(e, t) {
        "string" == typeof t && (t = parseInt(t, 10));
        var n = t, r = n.toString().replace(/^[^.]*\.?/, ""), o = Math.floor(Math.abs(n)), i = r.length, s = parseInt(r, 10), u = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ""), 10) || 0;
        switch (e.split("-")[0].toLowerCase()) {
          case "af":
          case "asa":
          case "az":
          case "bem":
          case "bez":
          case "bg":
          case "brx":
          case "ce":
          case "cgg":
          case "chr":
          case "ckb":
          case "ee":
          case "el":
          case "eo":
          case "es":
          case "eu":
          case "fo":
          case "fur":
          case "gsw":
          case "ha":
          case "haw":
          case "hu":
          case "jgo":
          case "jmc":
          case "ka":
          case "kk":
          case "kkj":
          case "kl":
          case "ks":
          case "ksb":
          case "ky":
          case "lb":
          case "lg":
          case "mas":
          case "mgo":
          case "ml":
          case "mn":
          case "nb":
          case "nd":
          case "ne":
          case "nn":
          case "nnh":
          case "nyn":
          case "om":
          case "or":
          case "os":
          case "ps":
          case "rm":
          case "rof":
          case "rwk":
          case "saq":
          case "seh":
          case "sn":
          case "so":
          case "sq":
          case "ta":
          case "te":
          case "teo":
          case "tk":
          case "tr":
          case "ug":
          case "uz":
          case "vo":
          case "vun":
          case "wae":
          case "xog":
            return 1 === n ? Ea.One : Ea.Other;

          case "ak":
          case "ln":
          case "mg":
          case "pa":
          case "ti":
            return n === Math.floor(n) && n >= 0 && n <= 1 ? Ea.One : Ea.Other;

          case "am":
          case "as":
          case "bn":
          case "fa":
          case "gu":
          case "hi":
          case "kn":
          case "mr":
          case "zu":
            return 0 === o || 1 === n ? Ea.One : Ea.Other;

          case "ar":
            return 0 === n ? Ea.Zero : 1 === n ? Ea.One : 2 === n ? Ea.Two : n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10 ? Ea.Few : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99 ? Ea.Many : Ea.Other;

          case "ast":
          case "ca":
          case "de":
          case "en":
          case "et":
          case "fi":
          case "fy":
          case "gl":
          case "it":
          case "nl":
          case "sv":
          case "sw":
          case "ur":
          case "yi":
            return 1 === o && 0 === i ? Ea.One : Ea.Other;

          case "be":
            return n % 10 == 1 && n % 100 != 11 ? Ea.One : n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? Ea.Few : n % 10 == 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14 ? Ea.Many : Ea.Other;

          case "br":
            return n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91 ? Ea.One : n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92 ? Ea.Two : n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 == 9) && !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 || n % 100 >= 90 && n % 100 <= 99) ? Ea.Few : 0 !== n && n % 1e6 == 0 ? Ea.Many : Ea.Other;

          case "bs":
          case "hr":
          case "sr":
            return 0 === i && o % 10 == 1 && o % 100 != 11 || s % 10 == 1 && s % 100 != 11 ? Ea.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) || s % 10 === Math.floor(s % 10) && s % 10 >= 2 && s % 10 <= 4 && !(s % 100 >= 12 && s % 100 <= 14) ? Ea.Few : Ea.Other;

          case "cs":
          case "sk":
            return 1 === o && 0 === i ? Ea.One : o === Math.floor(o) && o >= 2 && o <= 4 && 0 === i ? Ea.Few : 0 !== i ? Ea.Many : Ea.Other;

          case "cy":
            return 0 === n ? Ea.Zero : 1 === n ? Ea.One : 2 === n ? Ea.Two : 3 === n ? Ea.Few : 6 === n ? Ea.Many : Ea.Other;

          case "da":
            return 1 === n || 0 !== u && (0 === o || 1 === o) ? Ea.One : Ea.Other;

          case "dsb":
          case "hsb":
            return 0 === i && o % 100 == 1 || s % 100 == 1 ? Ea.One : 0 === i && o % 100 == 2 || s % 100 == 2 ? Ea.Two : 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 3 && o % 100 <= 4 || s % 100 === Math.floor(s % 100) && s % 100 >= 3 && s % 100 <= 4 ? Ea.Few : Ea.Other;

          case "ff":
          case "fr":
          case "hy":
          case "kab":
            return 0 === o || 1 === o ? Ea.One : Ea.Other;

          case "fil":
            return 0 === i && (1 === o || 2 === o || 3 === o) || 0 === i && o % 10 != 4 && o % 10 != 6 && o % 10 != 9 || 0 !== i && s % 10 != 4 && s % 10 != 6 && s % 10 != 9 ? Ea.One : Ea.Other;

          case "ga":
            return 1 === n ? Ea.One : 2 === n ? Ea.Two : n === Math.floor(n) && n >= 3 && n <= 6 ? Ea.Few : n === Math.floor(n) && n >= 7 && n <= 10 ? Ea.Many : Ea.Other;

          case "gd":
            return 1 === n || 11 === n ? Ea.One : 2 === n || 12 === n ? Ea.Two : n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19) ? Ea.Few : Ea.Other;

          case "gv":
            return 0 === i && o % 10 == 1 ? Ea.One : 0 === i && o % 10 == 2 ? Ea.Two : 0 !== i || o % 100 != 0 && o % 100 != 20 && o % 100 != 40 && o % 100 != 60 && o % 100 != 80 ? 0 !== i ? Ea.Many : Ea.Other : Ea.Few;

          case "he":
            return 1 === o && 0 === i ? Ea.One : 2 === o && 0 === i ? Ea.Two : 0 !== i || n >= 0 && n <= 10 || n % 10 != 0 ? Ea.Other : Ea.Many;

          case "is":
            return 0 === u && o % 10 == 1 && o % 100 != 11 || 0 !== u ? Ea.One : Ea.Other;

          case "ksh":
            return 0 === n ? Ea.Zero : 1 === n ? Ea.One : Ea.Other;

          case "kw":
          case "naq":
          case "se":
          case "smn":
            return 1 === n ? Ea.One : 2 === n ? Ea.Two : Ea.Other;

          case "lag":
            return 0 === n ? Ea.Zero : 0 !== o && 1 !== o || 0 === n ? Ea.Other : Ea.One;

          case "lt":
            return n % 10 != 1 || n % 100 >= 11 && n % 100 <= 19 ? n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19) ? Ea.Few : 0 !== s ? Ea.Many : Ea.Other : Ea.One;

          case "lv":
          case "prg":
            return n % 10 == 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 || 2 === i && s % 100 === Math.floor(s % 100) && s % 100 >= 11 && s % 100 <= 19 ? Ea.Zero : n % 10 == 1 && n % 100 != 11 || 2 === i && s % 10 == 1 && s % 100 != 11 || 2 !== i && s % 10 == 1 ? Ea.One : Ea.Other;

          case "mk":
            return 0 === i && o % 10 == 1 || s % 10 == 1 ? Ea.One : Ea.Other;

          case "mt":
            return 1 === n ? Ea.One : 0 === n || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10 ? Ea.Few : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ? Ea.Many : Ea.Other;

          case "pl":
            return 1 === o && 0 === i ? Ea.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) ? Ea.Few : 0 === i && 1 !== o && o % 10 === Math.floor(o % 10) && o % 10 >= 0 && o % 10 <= 1 || 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 5 && o % 10 <= 9 || 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 12 && o % 100 <= 14 ? Ea.Many : Ea.Other;

          case "pt":
            return n === Math.floor(n) && n >= 0 && n <= 2 && 2 !== n ? Ea.One : Ea.Other;

          case "ro":
            return 1 === o && 0 === i ? Ea.One : 0 !== i || 0 === n || 1 !== n && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19 ? Ea.Few : Ea.Other;

          case "ru":
          case "uk":
            return 0 === i && o % 10 == 1 && o % 100 != 11 ? Ea.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) ? Ea.Few : 0 === i && o % 10 == 0 || 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 5 && o % 10 <= 9 || 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 11 && o % 100 <= 14 ? Ea.Many : Ea.Other;

          case "shi":
            return 0 === o || 1 === n ? Ea.One : n === Math.floor(n) && n >= 2 && n <= 10 ? Ea.Few : Ea.Other;

          case "si":
            return 0 === n || 1 === n || 0 === o && 1 === s ? Ea.One : Ea.Other;

          case "sl":
            return 0 === i && o % 100 == 1 ? Ea.One : 0 === i && o % 100 == 2 ? Ea.Two : 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 3 && o % 100 <= 4 || 0 !== i ? Ea.Few : Ea.Other;

          case "tzm":
            return n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99 ? Ea.One : Ea.Other;

          default:
            return Ea.Other;
        }
    }, Al = (function() {
        function e() {}
        e.decorators = [ {
            type: Et,
            args: [ {
                declarations: [ ol ],
                exports: [ ol ],
                providers: [ {
                    provide: mc,
                    useValue: xl
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        };
    }(), new ce("DocumentToken"));
    new xt("6.0.3");
    var kl = null;
    function Sl() {
        return kl;
    }
    function Ol(e) {
        kl || (kl = e);
    }
    var Fl, Tl = function() {
        function e() {
            this.resourceLoaderType = null;
        }
        return Object.defineProperty(e.prototype, "attrToPropMap", {
            get: function() {
                return this._attrToPropMap;
            },
            set: function(e) {
                this._attrToPropMap = e;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(), Pl = function(e) {
        function t() {
            var t = e.call(this) || this;
            t._animationPrefix = null, t._transitionEnd = null;
            try {
                var n = t.createElement("div", document);
                if (null != t.getStyle(n, "animationName")) t._animationPrefix = ""; else for (var r = [ "Webkit", "Moz", "O", "ms" ], o = 0; o < r.length; o++) if (null != t.getStyle(n, r[o] + "AnimationName")) {
                    t._animationPrefix = "-" + r[o].toLowerCase() + "-";
                    break;
                }
                var i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                Object.keys(i).forEach(function(e) {
                    null != t.getStyle(n, e) && (t._transitionEnd = i[e]);
                });
            } catch (e) {
                t._animationPrefix = null, t._transitionEnd = null;
            }
            return t;
        }
        return o(t, e), t.prototype.getDistributedNodes = function(e) {
            return e.getDistributedNodes();
        }, t.prototype.resolveAndSetHref = function(e, t, n) {
            e.href = null == n ? t : t + "/../" + n;
        }, t.prototype.supportsDOMEvents = function() {
            return !0;
        }, t.prototype.supportsNativeShadowDOM = function() {
            return "function" == typeof document.body.createShadowRoot;
        }, t.prototype.getAnimationPrefix = function() {
            return this._animationPrefix ? this._animationPrefix : "";
        }, t.prototype.getTransitionEnd = function() {
            return this._transitionEnd ? this._transitionEnd : "";
        }, t.prototype.supportsAnimation = function() {
            return null != this._animationPrefix && null != this._transitionEnd;
        }, t;
    }(Tl), Nl = {
        class: "className",
        innerHtml: "innerHTML",
        readonly: "readOnly",
        tabindex: "tabIndex"
    }, Ml = {
        "\b": "Backspace",
        "\t": "Tab",
        "\x7f": "Delete",
        "\x1b": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
    }, Il = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "*",
        K: "+",
        M: "-",
        N: ".",
        O: "/",
        "`": "0",
        "\x90": "NumLock"
    };
    Oe.Node && (Fl = Oe.Node.prototype.contains || function(e) {
        return !!(16 & this.compareDocumentPosition(e));
    });
    var Rl, jl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.parse = function(e) {
            throw new Error("parse not implemented");
        }, t.makeCurrent = function() {
            Ol(new t());
        }, t.prototype.hasProperty = function(e, t) {
            return t in e;
        }, t.prototype.setProperty = function(e, t, n) {
            e[t] = n;
        }, t.prototype.getProperty = function(e, t) {
            return e[t];
        }, t.prototype.invoke = function(e, t, n) {
            var r;
            (r = e)[t].apply(r, a(n));
        }, t.prototype.logError = function(e) {
            window.console && (console.error ? console.error(e) : console.log(e));
        }, t.prototype.log = function(e) {
            window.console && window.console.log && window.console.log(e);
        }, t.prototype.logGroup = function(e) {
            window.console && window.console.group && window.console.group(e);
        }, t.prototype.logGroupEnd = function() {
            window.console && window.console.groupEnd && window.console.groupEnd();
        }, Object.defineProperty(t.prototype, "attrToPropMap", {
            get: function() {
                return Nl;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.contains = function(e, t) {
            return Fl.call(e, t);
        }, t.prototype.querySelector = function(e, t) {
            return e.querySelector(t);
        }, t.prototype.querySelectorAll = function(e, t) {
            return e.querySelectorAll(t);
        }, t.prototype.on = function(e, t, n) {
            e.addEventListener(t, n, !1);
        }, t.prototype.onAndCancel = function(e, t, n) {
            return e.addEventListener(t, n, !1), function() {
                e.removeEventListener(t, n, !1);
            };
        }, t.prototype.dispatchEvent = function(e, t) {
            e.dispatchEvent(t);
        }, t.prototype.createMouseEvent = function(e) {
            var t = this.getDefaultDocument().createEvent("MouseEvent");
            return t.initEvent(e, !0, !0), t;
        }, t.prototype.createEvent = function(e) {
            var t = this.getDefaultDocument().createEvent("Event");
            return t.initEvent(e, !0, !0), t;
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault(), e.returnValue = !1;
        }, t.prototype.isPrevented = function(e) {
            return e.defaultPrevented || null != e.returnValue && !e.returnValue;
        }, t.prototype.getInnerHTML = function(e) {
            return e.innerHTML;
        }, t.prototype.getTemplateContent = function(e) {
            return "content" in e && this.isTemplateElement(e) ? e.content : null;
        }, t.prototype.getOuterHTML = function(e) {
            return e.outerHTML;
        }, t.prototype.nodeName = function(e) {
            return e.nodeName;
        }, t.prototype.nodeValue = function(e) {
            return e.nodeValue;
        }, t.prototype.type = function(e) {
            return e.type;
        }, t.prototype.content = function(e) {
            return this.hasProperty(e, "content") ? e.content : e;
        }, t.prototype.firstChild = function(e) {
            return e.firstChild;
        }, t.prototype.nextSibling = function(e) {
            return e.nextSibling;
        }, t.prototype.parentElement = function(e) {
            return e.parentNode;
        }, t.prototype.childNodes = function(e) {
            return e.childNodes;
        }, t.prototype.childNodesAsList = function(e) {
            for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++) n[r] = t[r];
            return n;
        }, t.prototype.clearNodes = function(e) {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
        }, t.prototype.appendChild = function(e, t) {
            e.appendChild(t);
        }, t.prototype.removeChild = function(e, t) {
            e.removeChild(t);
        }, t.prototype.replaceChild = function(e, t, n) {
            e.replaceChild(t, n);
        }, t.prototype.remove = function(e) {
            return e.parentNode && e.parentNode.removeChild(e), e;
        }, t.prototype.insertBefore = function(e, t, n) {
            e.insertBefore(n, t);
        }, t.prototype.insertAllBefore = function(e, t, n) {
            n.forEach(function(n) {
                return e.insertBefore(n, t);
            });
        }, t.prototype.insertAfter = function(e, t, n) {
            e.insertBefore(n, t.nextSibling);
        }, t.prototype.setInnerHTML = function(e, t) {
            e.innerHTML = t;
        }, t.prototype.getText = function(e) {
            return e.textContent;
        }, t.prototype.setText = function(e, t) {
            e.textContent = t;
        }, t.prototype.getValue = function(e) {
            return e.value;
        }, t.prototype.setValue = function(e, t) {
            e.value = t;
        }, t.prototype.getChecked = function(e) {
            return e.checked;
        }, t.prototype.setChecked = function(e, t) {
            e.checked = t;
        }, t.prototype.createComment = function(e) {
            return this.getDefaultDocument().createComment(e);
        }, t.prototype.createTemplate = function(e) {
            var t = this.getDefaultDocument().createElement("template");
            return t.innerHTML = e, t;
        }, t.prototype.createElement = function(e, t) {
            return (t = t || this.getDefaultDocument()).createElement(e);
        }, t.prototype.createElementNS = function(e, t, n) {
            return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }, t.prototype.createTextNode = function(e, t) {
            return (t = t || this.getDefaultDocument()).createTextNode(e);
        }, t.prototype.createScriptTag = function(e, t, n) {
            var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
            return r.setAttribute(e, t), r;
        }, t.prototype.createStyleElement = function(e, t) {
            var n = (t = t || this.getDefaultDocument()).createElement("style");
            return this.appendChild(n, this.createTextNode(e, t)), n;
        }, t.prototype.createShadowRoot = function(e) {
            return e.createShadowRoot();
        }, t.prototype.getShadowRoot = function(e) {
            return e.shadowRoot;
        }, t.prototype.getHost = function(e) {
            return e.host;
        }, t.prototype.clone = function(e) {
            return e.cloneNode(!0);
        }, t.prototype.getElementsByClassName = function(e, t) {
            return e.getElementsByClassName(t);
        }, t.prototype.getElementsByTagName = function(e, t) {
            return e.getElementsByTagName(t);
        }, t.prototype.classList = function(e) {
            return Array.prototype.slice.call(e.classList, 0);
        }, t.prototype.addClass = function(e, t) {
            e.classList.add(t);
        }, t.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
        }, t.prototype.hasClass = function(e, t) {
            return e.classList.contains(t);
        }, t.prototype.setStyle = function(e, t, n) {
            e.style[t] = n;
        }, t.prototype.removeStyle = function(e, t) {
            e.style[t] = "";
        }, t.prototype.getStyle = function(e, t) {
            return e.style[t];
        }, t.prototype.hasStyle = function(e, t, n) {
            var r = this.getStyle(e, t) || "";
            return n ? r == n : r.length > 0;
        }, t.prototype.tagName = function(e) {
            return e.tagName;
        }, t.prototype.attributeMap = function(e) {
            for (var t = new Map(), n = e.attributes, r = 0; r < n.length; r++) {
                var o = n.item(r);
                t.set(o.name, o.value);
            }
            return t;
        }, t.prototype.hasAttribute = function(e, t) {
            return e.hasAttribute(t);
        }, t.prototype.hasAttributeNS = function(e, t, n) {
            return e.hasAttributeNS(t, n);
        }, t.prototype.getAttribute = function(e, t) {
            return e.getAttribute(t);
        }, t.prototype.getAttributeNS = function(e, t, n) {
            return e.getAttributeNS(t, n);
        }, t.prototype.setAttribute = function(e, t, n) {
            e.setAttribute(t, n);
        }, t.prototype.setAttributeNS = function(e, t, n, r) {
            e.setAttributeNS(t, n, r);
        }, t.prototype.removeAttribute = function(e, t) {
            e.removeAttribute(t);
        }, t.prototype.removeAttributeNS = function(e, t, n) {
            e.removeAttributeNS(t, n);
        }, t.prototype.templateAwareRoot = function(e) {
            return this.isTemplateElement(e) ? this.content(e) : e;
        }, t.prototype.createHtmlDocument = function() {
            return document.implementation.createHTMLDocument("fakeTitle");
        }, t.prototype.getDefaultDocument = function() {
            return document;
        }, t.prototype.getBoundingClientRect = function(e) {
            try {
                return e.getBoundingClientRect();
            } catch (e) {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
        }, t.prototype.getTitle = function(e) {
            return e.title;
        }, t.prototype.setTitle = function(e, t) {
            e.title = t || "";
        }, t.prototype.elementMatches = function(e, t) {
            return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t));
        }, t.prototype.isTemplateElement = function(e) {
            return this.isElementNode(e) && "TEMPLATE" === e.nodeName;
        }, t.prototype.isTextNode = function(e) {
            return e.nodeType === Node.TEXT_NODE;
        }, t.prototype.isCommentNode = function(e) {
            return e.nodeType === Node.COMMENT_NODE;
        }, t.prototype.isElementNode = function(e) {
            return e.nodeType === Node.ELEMENT_NODE;
        }, t.prototype.hasShadowRoot = function(e) {
            return null != e.shadowRoot && e instanceof HTMLElement;
        }, t.prototype.isShadowRoot = function(e) {
            return e instanceof DocumentFragment;
        }, t.prototype.importIntoDoc = function(e) {
            return document.importNode(this.templateAwareRoot(e), !0);
        }, t.prototype.adoptNode = function(e) {
            return document.adoptNode(e);
        }, t.prototype.getHref = function(e) {
            return e.getAttribute("href");
        }, t.prototype.getEventKey = function(e) {
            var t = e.key;
            if (null == t) {
                if (null == (t = e.keyIdentifier)) return "Unidentified";
                t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Il.hasOwnProperty(t) && (t = Il[t]));
            }
            return Ml[t] || t;
        }, t.prototype.getGlobalEventTarget = function(e, t) {
            return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null;
        }, t.prototype.getHistory = function() {
            return window.history;
        }, t.prototype.getLocation = function() {
            return window.location;
        }, t.prototype.getBaseHref = function(e) {
            var t, n = Bl || (Bl = document.querySelector("base")) ? Bl.getAttribute("href") : null;
            return null == n ? null : (t = n, Rl || (Rl = document.createElement("a")), Rl.setAttribute("href", t), 
            "/" === Rl.pathname.charAt(0) ? Rl.pathname : "/" + Rl.pathname);
        }, t.prototype.resetBaseElement = function() {
            Bl = null;
        }, t.prototype.getUserAgent = function() {
            return window.navigator.userAgent;
        }, t.prototype.setData = function(e, t, n) {
            this.setAttribute(e, "data-" + t, n);
        }, t.prototype.getData = function(e, t) {
            return this.getAttribute(e, "data-" + t);
        }, t.prototype.getComputedStyle = function(e) {
            return getComputedStyle(e);
        }, t.prototype.supportsWebAnimation = function() {
            return "function" == typeof Element.prototype.animate;
        }, t.prototype.performanceNow = function() {
            return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }, t.prototype.supportsCookies = function() {
            return !0;
        }, t.prototype.getCookie = function(e) {
            return bc(document.cookie, e);
        }, t.prototype.setCookie = function(e, t) {
            document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        }, t;
    }(Pl), Bl = null, Vl = Al;
    function Ll() {
        return !!window.history.pushState;
    }
    var zl = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._doc = t, n._init(), n;
        }
        return o(t, e), t.prototype._init = function() {
            this.location = Sl().getLocation(), this._history = Sl().getHistory();
        }, t.prototype.getBaseHrefFromDOM = function() {
            return Sl().getBaseHref(this._doc);
        }, t.prototype.onPopState = function(e) {
            Sl().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1);
        }, t.prototype.onHashChange = function(e) {
            Sl().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1);
        }, Object.defineProperty(t.prototype, "pathname", {
            get: function() {
                return this.location.pathname;
            },
            set: function(e) {
                this.location.pathname = e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "search", {
            get: function() {
                return this.location.search;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hash", {
            get: function() {
                return this.location.hash;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.pushState = function(e, t, n) {
            Ll() ? this._history.pushState(e, t, n) : this.location.hash = n;
        }, t.prototype.replaceState = function(e, t, n) {
            Ll() ? this._history.replaceState(e, t, n) : this.location.hash = n;
        }, t.prototype.forward = function() {
            this._history.forward();
        }, t.prototype.back = function() {
            this._history.back();
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, t;
    }(ga), Hl = function() {
        function e(e) {
            this._doc = e, this._dom = Sl();
        }
        return e.prototype.addTag = function(e, t) {
            return void 0 === t && (t = !1), e ? this._getOrCreateElement(e, t) : null;
        }, e.prototype.addTags = function(e, t) {
            var n = this;
            return void 0 === t && (t = !1), e ? e.reduce(function(e, r) {
                return r && e.push(n._getOrCreateElement(r, t)), e;
            }, []) : [];
        }, e.prototype.getTag = function(e) {
            return e && this._dom.querySelector(this._doc, "meta[" + e + "]") || null;
        }, e.prototype.getTags = function(e) {
            if (!e) return [];
            var t = this._dom.querySelectorAll(this._doc, "meta[" + e + "]");
            return t ? [].slice.call(t) : [];
        }, e.prototype.updateTag = function(e, t) {
            if (!e) return null;
            t = t || this._parseSelector(e);
            var n = this.getTag(t);
            return n ? this._setMetaElementAttributes(e, n) : this._getOrCreateElement(e, !0);
        }, e.prototype.removeTag = function(e) {
            this.removeTagElement(this.getTag(e));
        }, e.prototype.removeTagElement = function(e) {
            e && this._dom.remove(e);
        }, e.prototype._getOrCreateElement = function(e, t) {
            if (void 0 === t && (t = !1), !t) {
                var n = this._parseSelector(e), r = this.getTag(n);
                if (r && this._containsAttributes(e, r)) return r;
            }
            var o = this._dom.createElement("meta");
            this._setMetaElementAttributes(e, o);
            var i = this._dom.getElementsByTagName(this._doc, "head")[0];
            return this._dom.appendChild(i, o), o;
        }, e.prototype._setMetaElementAttributes = function(e, t) {
            var n = this;
            return Object.keys(e).forEach(function(r) {
                return n._dom.setAttribute(t, r, e[r]);
            }), t;
        }, e.prototype._parseSelector = function(e) {
            var t = e.name ? "name" : "property";
            return t + '="' + e[t] + '"';
        }, e.prototype._containsAttributes = function(e, t) {
            var n = this;
            return Object.keys(e).every(function(r) {
                return n._dom.getAttribute(t, r) === e[r];
            });
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, e;
    }(), Ul = new ce("TRANSITION_ID"), Wl = [ {
        provide: cn,
        useFactory: function(e, t, n) {
            return function() {
                n.get(ln).donePromise.then(function() {
                    var n = Sl();
                    Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter(function(t) {
                        return n.getAttribute(t, "ng-transition") === e;
                    }).forEach(function(e) {
                        return n.remove(e);
                    });
                });
            };
        },
        deps: [ Ul, Vl, et ],
        multi: !0
    } ], Zl = function() {
        function e() {}
        return e.init = function() {
            var t;
            t = new e(), qn = t;
        }, e.prototype.addToWindow = function(e) {
            Oe.getAngularTestability = function(t, n) {
                void 0 === n && (n = !0);
                var r = e.findTestabilityInTree(t, n);
                if (null == r) throw new Error("Could not find testability for element.");
                return r;
            }, Oe.getAllAngularTestabilities = function() {
                return e.getAllTestabilities();
            }, Oe.getAllAngularRootElements = function() {
                return e.getAllRootElements();
            }, Oe.frameworkStabilizers || (Oe.frameworkStabilizers = []), Oe.frameworkStabilizers.push(function(e) {
                var t = Oe.getAllAngularTestabilities(), n = t.length, r = !1, o = function(t) {
                    r = r || t, 0 == --n && e(r);
                };
                t.forEach(function(e) {
                    e.whenStable(o);
                });
            });
        }, e.prototype.findTestabilityInTree = function(e, t, n) {
            if (null == t) return null;
            var r = e.getTestability(t);
            return null != r ? r : n ? Sl().isShadowRoot(t) ? this.findTestabilityInTree(e, Sl().getHost(t), !0) : this.findTestabilityInTree(e, Sl().parentElement(t), !0) : null;
        }, e;
    }(), Kl = function() {
        function e(e) {
            this._doc = e;
        }
        return e.prototype.getTitle = function() {
            return Sl().getTitle(this._doc);
        }, e.prototype.setTitle = function(e) {
            Sl().setTitle(this._doc, e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, e;
    }();
    function Gl(e, t) {
        "undefined" != typeof COMPILED && COMPILED || ((Oe.ng = Oe.ng || {})[e] = t);
    }
    var ql = {
        ApplicationRef: rr,
        NgZone: Bn
    };
    function $l(e) {
        return Cr(e);
    }
    var Yl = [ {
        provide: cn,
        useFactory: function(e) {
            return Gl("probe", $l), Gl("coreTokens", i({}, ql, (e || []).reduce(function(e, t) {
                return e[t.name] = t.token, e;
            }, {}))), function() {
                return $l;
            };
        },
        deps: [ [ function(e, t) {
            this.name = e, this.token = t;
        }, new Ze() ] ],
        multi: !0
    } ], Jl = new ce("EventManagerPlugins"), Xl = function() {
        function e(e, t) {
            var n = this;
            this._zone = t, this._eventNameToPlugin = new Map(), e.forEach(function(e) {
                return e.manager = n;
            }), this._plugins = e.slice().reverse();
        }
        return e.prototype.addEventListener = function(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
        }, e.prototype.addGlobalEventListener = function(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }, e.prototype.getZone = function() {
            return this._zone;
        }, e.prototype._findPluginFor = function(e) {
            var t = this._eventNameToPlugin.get(e);
            if (t) return t;
            for (var n = this._plugins, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
            }
            throw new Error("No event manager plugin found for event " + e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Array,
                decorators: [ {
                    type: We,
                    args: [ Jl ]
                } ]
            }, {
                type: Bn
            } ];
        }, e;
    }(), Ql = function() {
        function e(e) {
            this._doc = e;
        }
        return e.prototype.addGlobalEventListener = function(e, t, n) {
            var r = Sl().getGlobalEventTarget(this._doc, e);
            if (!r) throw new Error("Unsupported event target " + r + " for event " + t);
            return this.addEventListener(r, t, n);
        }, e;
    }(), ep = function() {
        function e() {
            this._stylesSet = new Set();
        }
        return e.prototype.addStyles = function(e) {
            var t = this, n = new Set();
            e.forEach(function(e) {
                t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
            }), this.onStylesAdded(n);
        }, e.prototype.onStylesAdded = function(e) {}, e.prototype.getAllStyles = function() {
            return Array.from(this._stylesSet);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), tp = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._doc = t, n._hostNodes = new Set(), n._styleNodes = new Set(), n._hostNodes.add(t.head), 
            n;
        }
        return o(t, e), t.prototype._addStylesToHost = function(e, t) {
            var n = this;
            e.forEach(function(e) {
                var r = n._doc.createElement("style");
                r.textContent = e, n._styleNodes.add(t.appendChild(r));
            });
        }, t.prototype.addHost = function(e) {
            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }, t.prototype.removeHost = function(e) {
            this._hostNodes.delete(e);
        }, t.prototype.onStylesAdded = function(e) {
            var t = this;
            this._hostNodes.forEach(function(n) {
                return t._addStylesToHost(e, n);
            });
        }, t.prototype.ngOnDestroy = function() {
            this._styleNodes.forEach(function(e) {
                return Sl().remove(e);
            });
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, t;
    }(ep), np = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }, rp = /%COMP%/g, op = "_nghost-%COMP%", ip = "_ngcontent-%COMP%";
    function sp(e, t, n) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            Array.isArray(o) ? sp(e, o, n) : (o = o.replace(rp, e), n.push(o));
        }
        return n;
    }
    function up(e) {
        return function(t) {
            !1 === e(t) && (t.preventDefault(), t.returnValue = !1);
        };
    }
    var ap = function() {
        function e(e, t) {
            this.eventManager = e, this.sharedStylesHost = t, this.rendererByCompId = new Map(), 
            this.defaultRenderer = new cp(e);
        }
        return e.prototype.createRenderer = function(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case Ct.Emulated:
                var n = this.rendererByCompId.get(t.id);
                return n || (n = new dp(this.eventManager, this.sharedStylesHost, t), this.rendererByCompId.set(t.id, n)), 
                n.applyToHost(e), n;

              case Ct.Native:
                return new hp(this.eventManager, this.sharedStylesHost, e, t);

              default:
                if (!this.rendererByCompId.has(t.id)) {
                    var r = sp(t.id, t.styles, []);
                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }, e.prototype.begin = function() {}, e.prototype.end = function() {}, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Xl
            }, {
                type: tp
            } ];
        }, e;
    }(), cp = function() {
        function e(e) {
            this.eventManager = e, this.data = Object.create(null);
        }
        return e.prototype.destroy = function() {}, e.prototype.createElement = function(e, t) {
            return t ? document.createElementNS(np[t], e) : document.createElement(e);
        }, e.prototype.createComment = function(e) {
            return document.createComment(e);
        }, e.prototype.createText = function(e) {
            return document.createTextNode(e);
        }, e.prototype.appendChild = function(e, t) {
            e.appendChild(t);
        }, e.prototype.insertBefore = function(e, t, n) {
            e && e.insertBefore(t, n);
        }, e.prototype.removeChild = function(e, t) {
            e && e.removeChild(t);
        }, e.prototype.selectRootElement = function(e) {
            var t = "string" == typeof e ? document.querySelector(e) : e;
            if (!t) throw new Error('The selector "' + e + '" did not match any elements');
            return t.textContent = "", t;
        }, e.prototype.parentNode = function(e) {
            return e.parentNode;
        }, e.prototype.nextSibling = function(e) {
            return e.nextSibling;
        }, e.prototype.setAttribute = function(e, t, n, r) {
            if (r) {
                t = r + ":" + t;
                var o = np[r];
                o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
            } else e.setAttribute(t, n);
        }, e.prototype.removeAttribute = function(e, t, n) {
            if (n) {
                var r = np[n];
                r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ":" + t);
            } else e.removeAttribute(t);
        }, e.prototype.addClass = function(e, t) {
            e.classList.add(t);
        }, e.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
        }, e.prototype.setStyle = function(e, t, n, r) {
            r & ir.DashCase ? e.style.setProperty(t, n, r & ir.Important ? "important" : "") : e.style[t] = n;
        }, e.prototype.removeStyle = function(e, t, n) {
            n & ir.DashCase ? e.style.removeProperty(t) : e.style[t] = "";
        }, e.prototype.setProperty = function(e, t, n) {
            pp(t, "property"), e[t] = n;
        }, e.prototype.setValue = function(e, t) {
            e.nodeValue = t;
        }, e.prototype.listen = function(e, t, n) {
            return pp(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, up(n)) : this.eventManager.addEventListener(e, t, up(n));
        }, e;
    }(), lp = "@".charCodeAt(0);
    function pp(e, t) {
        if (e.charCodeAt(0) === lp) throw new Error("Found the synthetic " + t + " " + e + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
    }
    var fp, dp = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            o.component = r;
            var i, s = sp(r.id, r.styles, []);
            return n.addStyles(s), o.contentAttr = (i = r.id, ip.replace(rp, i)), o.hostAttr = function(e) {
                return op.replace(rp, e);
            }(r.id), o;
        }
        return o(t, e), t.prototype.applyToHost = function(t) {
            e.prototype.setAttribute.call(this, t, this.hostAttr, "");
        }, t.prototype.createElement = function(t, n) {
            var r = e.prototype.createElement.call(this, t, n);
            return e.prototype.setAttribute.call(this, r, this.contentAttr, ""), r;
        }, t;
    }(cp), hp = function(e) {
        function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = r.createShadowRoot(), 
            i.sharedStylesHost.addHost(i.shadowRoot);
            for (var s = sp(o.id, o.styles, []), u = 0; u < s.length; u++) {
                var a = document.createElement("style");
                a.textContent = s[u], i.shadowRoot.appendChild(a);
            }
            return i;
        }
        return o(t, e), t.prototype.nodeOrShadowRoot = function(e) {
            return e === this.hostEl ? this.shadowRoot : e;
        }, t.prototype.destroy = function() {
            this.sharedStylesHost.removeHost(this.shadowRoot);
        }, t.prototype.appendChild = function(t, n) {
            return e.prototype.appendChild.call(this, this.nodeOrShadowRoot(t), n);
        }, t.prototype.insertBefore = function(t, n, r) {
            return e.prototype.insertBefore.call(this, this.nodeOrShadowRoot(t), n, r);
        }, t.prototype.removeChild = function(t, n) {
            return e.prototype.removeChild.call(this, this.nodeOrShadowRoot(t), n);
        }, t.prototype.parentNode = function(t) {
            return this.nodeOrShadowRoot(e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t)));
        }, t;
    }(cp), yp = "undefined" != typeof Zone && Zone.__symbol__ || function(e) {
        return "__zone_symbol__" + e;
    }, vp = yp("addEventListener"), mp = yp("removeEventListener"), gp = {}, wp = "__zone_symbol__propagationStopped", _p = "undefined" != typeof Zone && Zone[yp("BLACK_LISTED_EVENTS")];
    _p && (fp = {}, _p.forEach(function(e) {
        fp[e] = e;
    }));
    var bp = function(e) {
        return !!fp && fp.hasOwnProperty(e);
    }, Cp = function(e) {
        var t = gp[e.type];
        if (t) {
            var n = this[t];
            if (n) {
                var r = [ e ];
                if (1 === n.length) return (s = n[0]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r);
                for (var o = n.slice(), i = 0; i < o.length && !0 !== e[wp]; i++) {
                    var s;
                    (s = o[i]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r);
                }
            }
        }
    }, Dp = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.ngZone = n, r.patchEvent(), r;
        }
        return o(t, e), t.prototype.patchEvent = function() {
            if (Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                var e = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                Event.prototype.stopImmediatePropagation = function() {
                    this && (this[wp] = !0), e && e.apply(this, arguments);
                };
            }
        }, t.prototype.supports = function(e) {
            return !0;
        }, t.prototype.addEventListener = function(e, t, n) {
            var r = this, o = n;
            if (!e[vp] || Bn.isInAngularZone() && !bp(t)) e.addEventListener(t, o, !1); else {
                var i = gp[t];
                i || (i = gp[t] = yp("ANGULAR" + t + "FALSE"));
                var s = e[i], u = s && s.length > 0;
                s || (s = e[i] = []);
                var a = bp(t) ? Zone.root : Zone.current;
                if (0 === s.length) s.push({
                    zone: a,
                    handler: o
                }); else {
                    for (var c = !1, l = 0; l < s.length; l++) if (s[l].handler === o) {
                        c = !0;
                        break;
                    }
                    c || s.push({
                        zone: a,
                        handler: o
                    });
                }
                u || e[vp](t, Cp, !1);
            }
            return function() {
                return r.removeEventListener(e, t, o);
            };
        }, t.prototype.removeEventListener = function(e, t, n) {
            var r = e[mp];
            if (!r) return e.removeEventListener.apply(e, [ t, n, !1 ]);
            var o = gp[t], i = o && e[o];
            if (!i) return e.removeEventListener.apply(e, [ t, n, !1 ]);
            for (var s = !1, u = 0; u < i.length; u++) if (i[u].handler === n) {
                s = !0, i.splice(u, 1);
                break;
            }
            s ? 0 === i.length && r.apply(e, [ t, Cp, !1 ]) : e.removeEventListener.apply(e, [ t, n, !1 ]);
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            }, {
                type: Bn
            } ];
        }, t;
    }(Ql), Ep = {
        pan: !0,
        panstart: !0,
        panmove: !0,
        panend: !0,
        pancancel: !0,
        panleft: !0,
        panright: !0,
        panup: !0,
        pandown: !0,
        pinch: !0,
        pinchstart: !0,
        pinchmove: !0,
        pinchend: !0,
        pinchcancel: !0,
        pinchin: !0,
        pinchout: !0,
        press: !0,
        pressup: !0,
        rotate: !0,
        rotatestart: !0,
        rotatemove: !0,
        rotateend: !0,
        rotatecancel: !0,
        swipe: !0,
        swipeleft: !0,
        swiperight: !0,
        swipeup: !0,
        swipedown: !0,
        tap: !0
    }, xp = new ce("HammerGestureConfig"), Ap = function() {
        function e() {
            this.events = [], this.overrides = {};
        }
        return e.prototype.buildHammer = function(e) {
            var t = new Hammer(e, this.options);
            for (var n in t.get("pinch").set({
                enable: !0
            }), t.get("rotate").set({
                enable: !0
            }), this.overrides) t.get(n).set(this.overrides[n]);
            return t;
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), kp = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o._config = n, o.console = r, o;
        }
        return o(t, e), t.prototype.supports = function(e) {
            return !(!Ep.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && (this.console.warn("Hammer.js is not loaded, can not bind '" + e + "' event."), 
            1));
        }, t.prototype.addEventListener = function(e, t, n) {
            var r = this, o = this.manager.getZone();
            return t = t.toLowerCase(), o.runOutsideAngular(function() {
                var i = r._config.buildHammer(e), s = function(e) {
                    o.runGuarded(function() {
                        n(e);
                    });
                };
                return i.on(t, s), function() {
                    return i.off(t, s);
                };
            });
        }, t.prototype.isCustomEvent = function(e) {
            return this._config.events.indexOf(e) > -1;
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            }, {
                type: Ap,
                decorators: [ {
                    type: We,
                    args: [ xp ]
                } ]
            }, {
                type: gn
            } ];
        }, t;
    }(Ql), Sp = [ "alt", "control", "meta", "shift" ], Op = {
        alt: function(e) {
            return e.altKey;
        },
        control: function(e) {
            return e.ctrlKey;
        },
        meta: function(e) {
            return e.metaKey;
        },
        shift: function(e) {
            return e.shiftKey;
        }
    }, Fp = function(e) {
        function t(t) {
            return e.call(this, t) || this;
        }
        return o(t, e), t.prototype.supports = function(e) {
            return null != t.parseEventName(e);
        }, t.prototype.addEventListener = function(e, n, r) {
            var o = t.parseEventName(n), i = t.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function() {
                return Sl().onAndCancel(e, o.domEventName, i);
            });
        }, t.parseEventName = function(e) {
            var n = e.toLowerCase().split("."), r = n.shift();
            if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
            var o = t._normalizeKey(n.pop()), i = "";
            if (Sp.forEach(function(e) {
                var t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), i += e + ".");
            }), i += o, 0 != n.length || 0 === o.length) return null;
            var s = {};
            return s.domEventName = r, s.fullKey = i, s;
        }, t.getEventFullKey = function(e) {
            var t = "", n = Sl().getEventKey(e);
            return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Sp.forEach(function(r) {
                r != n && (0, Op[r])(e) && (t += r + ".");
            }), t += n;
        }, t.eventCallback = function(e, n, r) {
            return function(o) {
                t.getEventFullKey(o) === e && r.runGuarded(function() {
                    return n(o);
                });
            };
        }, t._normalizeKey = function(e) {
            switch (e) {
              case "esc":
                return "escape";

              default:
                return e;
            }
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, t;
    }(Ql), Tp = function() {}, Pp = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._doc = t, n;
        }
        return o(t, e), t.prototype.sanitize = function(e, t) {
            if (null == t) return null;
            switch (e) {
              case Co.NONE:
                return t;

              case Co.HTML:
                return t instanceof Mp ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), 
                function(e, t) {
                    var n = null;
                    try {
                        oo = oo || new Xr(e);
                        var r = t ? String(t) : "";
                        n = oo.getInertBodyElement(r);
                        var o = 5, i = r;
                        do {
                            if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                            o--, r = i, i = n.innerHTML, n = oo.getInertBodyElement(r);
                        } while (r !== i);
                        var s = new mo(), u = s.sanitizeChildren(bo(n) || n);
                        return Xn() && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), 
                        u;
                    } finally {
                        if (n) for (var a = bo(n) || n; a.firstChild; ) a.removeChild(a.firstChild);
                    }
                }(this._doc, String(t)));

              case Co.STYLE:
                return t instanceof Ip ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), 
                function(e) {
                    if (!(e = String(e).trim())) return "";
                    var t = e.match(Eo);
                    return t && to(t[1]) === t[1] || e.match(Do) && function(e) {
                        for (var t = !0, n = !0, r = 0; r < e.length; r++) {
                            var o = e.charAt(r);
                            "'" === o && n ? t = !t : '"' === o && t && (n = !n);
                        }
                        return t && n;
                    }(e) ? e : (Xn() && console.warn("WARNING: sanitizing unsafe style value " + e + " (see http://g.co/ng/security#xss)."), 
                    "unsafe");
                }(t));

              case Co.SCRIPT:
                if (t instanceof Rp) return t.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");

              case Co.URL:
                return t instanceof Bp || t instanceof jp ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), 
                to(String(t)));

              case Co.RESOURCE_URL:
                if (t instanceof Bp) return t.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");

              default:
                throw new Error("Unexpected SecurityContext " + e + " (see http://g.co/ng/security#xss)");
            }
        }, t.prototype.checkNotSafeValue = function(e, t) {
            if (e instanceof Np) throw new Error("Required a safe " + t + ", got a " + e.getTypeName() + " (see http://g.co/ng/security#xss)");
        }, t.prototype.bypassSecurityTrustHtml = function(e) {
            return new Mp(e);
        }, t.prototype.bypassSecurityTrustStyle = function(e) {
            return new Ip(e);
        }, t.prototype.bypassSecurityTrustScript = function(e) {
            return new Rp(e);
        }, t.prototype.bypassSecurityTrustUrl = function(e) {
            return new jp(e);
        }, t.prototype.bypassSecurityTrustResourceUrl = function(e) {
            return new Bp(e);
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Vl ]
                } ]
            } ];
        }, t;
    }(Tp), Np = function() {
        function e(e) {
            this.changingThisBreaksApplicationSecurity = e;
        }
        return e.prototype.toString = function() {
            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)";
        }, e;
    }(), Mp = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.getTypeName = function() {
            return "HTML";
        }, t;
    }(Np), Ip = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.getTypeName = function() {
            return "Style";
        }, t;
    }(Np), Rp = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.getTypeName = function() {
            return "Script";
        }, t;
    }(Np), jp = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.getTypeName = function() {
            return "URL";
        }, t;
    }(Np), Bp = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.prototype.getTypeName = function() {
            return "ResourceURL";
        }, t;
    }(Np), Vp = [ {
        provide: xo,
        useExisting: Tp
    }, {
        provide: Tp,
        useClass: Pp,
        deps: [ Vl ]
    } ], Lp = Qn(Kr, "browser", [ {
        provide: vn,
        useValue: "browser"
    }, {
        provide: yn,
        useValue: function() {
            jl.makeCurrent(), Zl.init();
        },
        multi: !0
    }, {
        provide: ga,
        useClass: zl,
        deps: [ Vl ]
    }, {
        provide: Vl,
        useFactory: function() {
            return document;
        },
        deps: []
    } ]);
    function zp() {
        return new Nt();
    }
    !function() {
        function e(e) {
            if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }
        e.withServerTransition = function(t) {
            return {
                ngModule: e,
                providers: [ {
                    provide: pn,
                    useValue: t.appId
                }, {
                    provide: Ul,
                    useExisting: pn
                }, Wl ]
            };
        }, e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ Vp, {
                    provide: Xt,
                    useValue: !0
                }, {
                    provide: Nt,
                    useFactory: zp,
                    deps: []
                }, {
                    provide: Jl,
                    useClass: Dp,
                    multi: !0
                }, {
                    provide: Jl,
                    useClass: Fp,
                    multi: !0
                }, {
                    provide: Jl,
                    useClass: kp,
                    multi: !0
                }, {
                    provide: xp,
                    useClass: Ap
                }, ap, {
                    provide: ur,
                    useExisting: ap
                }, {
                    provide: ep,
                    useExisting: tp
                }, tp, Kn, Xl, Yl, Hl, Kl ],
                exports: [ El, Jr ]
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: e,
                decorators: [ {
                    type: Ze
                }, {
                    type: Ge
                } ]
            } ];
        };
    }(), "undefined" != typeof window && window;
    var Hp = function() {
        function e() {
            this.store = {}, this.onSerializeCallbacks = {};
        }
        return e.init = function(t) {
            var n = new e();
            return n.store = t, n;
        }, e.prototype.get = function(e, t) {
            return void 0 !== this.store[e] ? this.store[e] : t;
        }, e.prototype.set = function(e, t) {
            this.store[e] = t;
        }, e.prototype.remove = function(e) {
            delete this.store[e];
        }, e.prototype.hasKey = function(e) {
            return this.store.hasOwnProperty(e);
        }, e.prototype.onSerialize = function(e, t) {
            this.onSerializeCallbacks[e] = t;
        }, e.prototype.toJson = function() {
            for (var e in this.onSerializeCallbacks) if (this.onSerializeCallbacks.hasOwnProperty(e)) try {
                this.store[e] = this.onSerializeCallbacks[e]();
            } catch (e) {
                console.warn("Exception in onSerialize callback: ", e);
            }
            return JSON.stringify(this.store);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }();
    function Up(e, t) {
        var n, r, o = e.getElementById(t + "-state"), i = {};
        if (o && o.textContent) try {
            i = JSON.parse((n = o.textContent, r = {
                "&a;": "&",
                "&q;": '"',
                "&s;": "'",
                "&l;": "<",
                "&g;": ">"
            }, n.replace(/&[^;]+;/g, function(e) {
                return r[e];
            })));
        } catch (e) {
            console.warn("Exception while restoring TransferState for app " + t, e);
        }
        return Hp.init(i);
    }
    (function() {
        function e() {}
        e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ {
                    provide: Hp,
                    useFactory: Up,
                    deps: [ Vl, pn ]
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        };
    })(), function() {
        function e() {}
        e.all = function() {
            return function(e) {
                return !0;
            };
        }, e.css = function(e) {
            return function(t) {
                return null != t.nativeElement && Sl().elementMatches(t.nativeElement, e);
            };
        }, e.directive = function(e) {
            return function(t) {
                return -1 !== t.providerTokens.indexOf(e);
            };
        };
    }(), new xt("6.0.3");
    var Wp = new ce("WebWorker.onWebWorker"), Zp = function() {}, Kp = function() {
        function e() {
            this._nextIndex = 0, this._lookupById = new Map(), this._lookupByObject = new Map();
        }
        return e.prototype.allocateId = function() {
            return this._nextIndex++;
        }, e.prototype.store = function(e, t) {
            null != t && (this._lookupById.set(t, e), this._lookupByObject.set(e, t));
        }, e.prototype.remove = function(e) {
            var t = this._lookupByObject.get(e);
            null != t && (this._lookupByObject.delete(e), this._lookupById.delete(t));
        }, e.prototype.deserialize = function(e) {
            return this._lookupById.has(e) ? this._lookupById.get(e) : null;
        }, e.prototype.serialize = function(e) {
            return null == e ? null : this._lookupByObject.get(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), Gp = function(e, t, n, r, o, i, s, u, a) {
        this.href = e, this.protocol = t, this.host = n, this.hostname = r, this.port = o, 
        this.pathname = i, this.search = s, this.hash = u, this.origin = a;
    }, qp = function() {
        function e(e) {
            this._renderStore = e;
        }
        return e.prototype.serialize = function(e, t) {
            var n = this;
            if (void 0 === t && (t = 1), null == e || 1 === t) return e;
            if (Array.isArray(e)) return e.map(function(e) {
                return n.serialize(e, t);
            });
            if (2 === t) return this._renderStore.serialize(e);
            if (t === sr) return this._serializeRenderComponentType(e);
            if (0 === t) return this._serializeRendererType2(e);
            if (t === Gp) return this._serializeLocation(e);
            throw new Error("No serializer for type " + Ie(t));
        }, e.prototype.deserialize = function(e, t, n) {
            var r = this;
            if (void 0 === t && (t = 1), null == e || 1 === t) return e;
            if (Array.isArray(e)) return e.map(function(e) {
                return r.deserialize(e, t, n);
            });
            if (2 === t) return this._renderStore.deserialize(e);
            if (t === sr) return this._deserializeRenderComponentType(e);
            if (0 === t) return this._deserializeRendererType2(e);
            if (t === Gp) return this._deserializeLocation(e);
            throw new Error("No deserializer for type " + Ie(t));
        }, e.prototype._serializeLocation = function(e) {
            return {
                href: e.href,
                protocol: e.protocol,
                host: e.host,
                hostname: e.hostname,
                port: e.port,
                pathname: e.pathname,
                search: e.search,
                hash: e.hash,
                origin: e.origin
            };
        }, e.prototype._deserializeLocation = function(e) {
            return new Gp(e.href, e.protocol, e.host, e.hostname, e.port, e.pathname, e.search, e.hash, e.origin);
        }, e.prototype._serializeRenderComponentType = function(e) {
            return {
                id: e.id,
                templateUrl: e.templateUrl,
                slotCount: e.slotCount,
                encapsulation: this.serialize(e.encapsulation),
                styles: this.serialize(e.styles)
            };
        }, e.prototype._deserializeRenderComponentType = function(e) {
            return new sr(e.id, e.templateUrl, e.slotCount, this.deserialize(e.encapsulation), this.deserialize(e.styles), {});
        }, e.prototype._serializeRendererType2 = function(e) {
            return {
                id: e.id,
                encapsulation: this.serialize(e.encapsulation),
                styles: this.serialize(e.styles),
                data: this.serialize(e.data)
            };
        }, e.prototype._deserializeRendererType2 = function(e) {
            return {
                id: e.id,
                encapsulation: e.encapsulation,
                styles: this.deserialize(e.styles),
                data: this.deserialize(e.data)
            };
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Kp
            } ];
        }, e;
    }(), $p = function() {
        function e(e, t) {
            this._messageBus = e, this._serializer = t;
        }
        return e.prototype.createMessageBroker = function(e, t) {
            return void 0 === t && (t = !0), this._messageBus.initChannel(e, t), new Yp(this._messageBus, this._serializer, e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Zp
            }, {
                type: qp
            } ];
        }, e;
    }(), Yp = function() {
        function e(e, t, n) {
            var r = this;
            this.channel = n, this._pending = new Map(), this._sink = e.to(n), this._serializer = t, 
            e.from(n).subscribe({
                next: function(e) {
                    return r._handleMessage(e);
                }
            });
        }
        return e.prototype._generateMessageId = function(e) {
            for (var t = Ie(new Date().getTime()), n = 0, r = e + t + Ie(n); this._pending.has(r); ) r = "" + e + t + n, 
            n++;
            return r;
        }, e.prototype.runOnService = function(e, t) {
            var n, r = this, o = [];
            e.args && e.args.forEach(function(e) {
                null != e.type ? o.push(r._serializer.serialize(e.value, e.type)) : o.push(e.value);
            });
            var i = null;
            if (null != t) {
                var s = void 0;
                n = new Promise(function(e, t) {
                    s = {
                        resolve: e,
                        reject: t
                    };
                }), i = this._generateMessageId(e.method), this._pending.set(i, s), n.catch(function(e) {
                    console && console.error && console.error(e), s.reject(e);
                }), n = n.then(function(e) {
                    return r._serializer ? r._serializer.deserialize(e, t) : e;
                });
            } else n = null;
            var u = {
                method: e.method,
                args: o
            };
            return null != i && (u.id = i), this._sink.emit(u), n;
        }, e.prototype._handleMessage = function(e) {
            if ("result" === e.type || "error" === e.type) {
                var t = e.id;
                this._pending.has(t) && ("result" === e.type ? this._pending.get(t).resolve(e.value) : this._pending.get(t).reject(e.value), 
                this._pending.delete(t));
            }
        }, e;
    }(), Jp = function(e, t) {
        void 0 === t && (t = 1), this.value = e, this.type = t;
    }, Xp = function(e, t) {
        this.method = e, this.args = t;
    }, Qp = function() {
        function e(e) {
            this._postMessageTarget = e, this._channels = {}, this._messageBuffer = [];
        }
        return e.prototype.attachToZone = function(e) {
            var t = this;
            this._zone = e, this._zone.runOutsideAngular(function() {
                t._zone.onStable.subscribe({
                    next: function() {
                        t._handleOnEventDone();
                    }
                });
            });
        }, e.prototype.initChannel = function(e, t) {
            var n = this;
            if (void 0 === t && (t = !0), this._channels.hasOwnProperty(e)) throw new Error(e + " has already been initialized");
            var r = new jn(!1), o = new nf(r, t);
            this._channels[e] = o, r.subscribe(function(r) {
                var o = {
                    channel: e,
                    message: r
                };
                t ? n._messageBuffer.push(o) : n._sendMessages([ o ]);
            });
        }, e.prototype.to = function(e) {
            if (this._channels.hasOwnProperty(e)) return this._channels[e].emitter;
            throw new Error(e + " is not set up. Did you forget to call initChannel?");
        }, e.prototype._handleOnEventDone = function() {
            this._messageBuffer.length > 0 && (this._sendMessages(this._messageBuffer), this._messageBuffer = []);
        }, e.prototype._sendMessages = function(e) {
            this._postMessageTarget.postMessage(e);
        }, e;
    }(), ef = function() {
        function e(e) {
            var t = this;
            this._channels = {}, e ? e.addEventListener("message", function(e) {
                return t._handleMessages(e);
            }) : self.addEventListener("message", function(e) {
                return t._handleMessages(e);
            });
        }
        return e.prototype.attachToZone = function(e) {
            this._zone = e;
        }, e.prototype.initChannel = function(e, t) {
            if (void 0 === t && (t = !0), this._channels.hasOwnProperty(e)) throw new Error(e + " has already been initialized");
            var n = new jn(!1), r = new nf(n, t);
            this._channels[e] = r;
        }, e.prototype.from = function(e) {
            if (this._channels.hasOwnProperty(e)) return this._channels[e].emitter;
            throw new Error(e + " is not set up. Did you forget to call initChannel?");
        }, e.prototype._handleMessages = function(e) {
            for (var t = e.data, n = 0; n < t.length; n++) this._handleMessage(t[n]);
        }, e.prototype._handleMessage = function(e) {
            var t = e.channel;
            if (this._channels.hasOwnProperty(t)) {
                var n = this._channels[t];
                n.runInZone ? this._zone.run(function() {
                    n.emitter.emit(e.message);
                }) : n.emitter.emit(e.message);
            }
        }, e;
    }(), tf = function() {
        function e(e, t) {
            this.sink = e, this.source = t;
        }
        return e.prototype.attachToZone = function(e) {
            this.source.attachToZone(e), this.sink.attachToZone(e);
        }, e.prototype.initChannel = function(e, t) {
            void 0 === t && (t = !0), this.source.initChannel(e, t), this.sink.initChannel(e, t);
        }, e.prototype.from = function(e) {
            return this.source.from(e);
        }, e.prototype.to = function(e) {
            return this.sink.to(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Qp
            }, {
                type: ef
            } ];
        }, e;
    }(), nf = function(e, t) {
        this.emitter = e, this.runInZone = t;
    }, rf = function() {
        function e(e, t) {
            this._messageBus = e, this._serializer = t;
        }
        return e.prototype.createMessageBroker = function(e, t) {
            return void 0 === t && (t = !0), this._messageBus.initChannel(e, t), new of(this._messageBus, this._serializer, e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Zp
            }, {
                type: qp
            } ];
        }, e;
    }(), of = function() {
        function e(e, t, n) {
            var r = this;
            this._serializer = t, this.channel = n, this._methods = new Map(), this._sink = e.to(n), 
            e.from(n).subscribe({
                next: function(e) {
                    return r._handleMessage(e);
                }
            });
        }
        return e.prototype.registerMethod = function(e, t, n, r) {
            var o = this;
            this._methods.set(e, function(e) {
                for (var i = e.args, s = t ? t.length : 0, u = new Array(s), c = 0; c < s; c++) {
                    var l = i[c];
                    u[c] = o._serializer.deserialize(l, t[c]);
                }
                var p = n.apply(void 0, a(u));
                r && p && o._wrapWebWorkerPromise(e.id, p, r);
            });
        }, e.prototype._handleMessage = function(e) {
            this._methods.has(e.method) && this._methods.get(e.method)(e);
        }, e.prototype._wrapWebWorkerPromise = function(e, t, n) {
            var r = this;
            t.then(function(t) {
                r._sink.emit({
                    type: "result",
                    value: r._serializer.serialize(t, n),
                    id: e
                });
            });
        }, e;
    }(), sf = "v2.ng-Renderer", uf = "v2.ng-Events", af = "ng-Router", cf = [ "altKey", "button", "clientX", "clientY", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "region", "screenX", "screenY", "shiftKey" ], lf = [ "altkey", "charCode", "code", "ctrlKey", "isComposing", "key", "keyCode", "location", "metaKey", "repeat", "shiftKey", "which" ], pf = [ "propertyName", "elapsedTime", "pseudoElement" ], ff = [ "type", "bubbles", "cancelable" ], df = new Set([ "input", "select", "option", "button", "li", "meter", "progress", "param", "textarea" ]);
    function hf(e, t) {
        if (df.has(e.target.tagName.toLowerCase())) {
            var n = e.target;
            t.target = {
                value: n.value
            }, n.files && (t.target.files = n.files);
        }
        return t;
    }
    function yf(e, t) {
        for (var n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            n[o] = e[o];
        }
        return n;
    }
    var vf = function() {
        function e(e, t) {
            this._sink = e, this._serializer = t;
        }
        return e.prototype.dispatchAnimationEvent = function(e, t, n) {
            return this._sink.emit({
                element: this._serializer.serialize(n, 2),
                animationPlayer: this._serializer.serialize(e, 2),
                phaseName: t
            }), !0;
        }, e.prototype.dispatchRenderEvent = function(e, t, n, r) {
            var o;
            switch (r.type) {
              case "click":
              case "mouseup":
              case "mousedown":
              case "dblclick":
              case "contextmenu":
              case "mouseenter":
              case "mouseleave":
              case "mousemove":
              case "mouseout":
              case "mouseover":
              case "show":
                o = yf(r, cf);
                break;

              case "keydown":
              case "keypress":
              case "keyup":
                o = hf(r, yf(r, lf));
                break;

              case "input":
              case "change":
              case "blur":
                o = hf(r, yf(r, ff));
                break;

              case "abort":
              case "afterprint":
              case "beforeprint":
              case "cached":
              case "canplay":
              case "canplaythrough":
              case "chargingchange":
              case "chargingtimechange":
              case "close":
              case "dischargingtimechange":
              case "DOMContentLoaded":
              case "downloading":
              case "durationchange":
              case "emptied":
              case "ended":
              case "error":
              case "fullscreenchange":
              case "fullscreenerror":
              case "invalid":
              case "languagechange":
              case "levelfchange":
              case "loadeddata":
              case "loadedmetadata":
              case "obsolete":
              case "offline":
              case "online":
              case "open":
              case "orientatoinchange":
              case "pause":
              case "pointerlockchange":
              case "pointerlockerror":
              case "play":
              case "playing":
              case "ratechange":
              case "readystatechange":
              case "reset":
              case "scroll":
              case "seeked":
              case "seeking":
              case "stalled":
              case "submit":
              case "success":
              case "suspend":
              case "timeupdate":
              case "updateready":
              case "visibilitychange":
              case "volumechange":
              case "waiting":
                o = yf(r, ff);
                break;

              case "transitionend":
                o = hf(r, yf(r, pf));
                break;

              default:
                throw new Error(n + " not supported on WebWorkers");
            }
            return this._sink.emit({
                element: this._serializer.serialize(e, 2),
                eventName: n,
                eventTarget: t,
                event: o
            }), !1;
        }, e;
    }(), mf = function() {
        function e(e, t, n, r, o) {
            this._brokerFactory = e, this._bus = t, this._serializer = n, this._renderStore = r, 
            this._rendererFactory = o;
        }
        return e.prototype.start = function() {
            var e = this, t = this._brokerFactory.createMessageBroker(sf);
            this._bus.initChannel(uf), this._eventDispatcher = new vf(this._bus.to(uf), this._serializer);
            var n = u([ 2, 1, 0 ], 3), r = n[0], o = n[1], i = n[2];
            [ [ "createRenderer", this.createRenderer, r, i, o ], [ "createElement", this.createElement, r, o, o, o ], [ "createComment", this.createComment, r, o, o ], [ "createText", this.createText, r, o, o ], [ "appendChild", this.appendChild, r, r, r ], [ "insertBefore", this.insertBefore, r, r, r, r ], [ "removeChild", this.removeChild, r, r, r ], [ "selectRootElement", this.selectRootElement, r, o, o ], [ "parentNode", this.parentNode, r, r, o ], [ "nextSibling", this.nextSibling, r, r, o ], [ "setAttribute", this.setAttribute, r, r, o, o, o ], [ "removeAttribute", this.removeAttribute, r, r, o, o ], [ "addClass", this.addClass, r, r, o ], [ "removeClass", this.removeClass, r, r, o ], [ "setStyle", this.setStyle, r, r, o, o, o ], [ "removeStyle", this.removeStyle, r, r, o, o ], [ "setProperty", this.setProperty, r, r, o, o ], [ "setValue", this.setValue, r, r, o ], [ "listen", this.listen, r, r, o, o, o ], [ "unlisten", this.unlisten, r, r ], [ "destroy", this.destroy, r ], [ "destroyNode", this.destroyNode, r, o ] ].forEach(function(n) {
                var r = u(n), o = r[0], i = r[1], s = r.slice(2);
                t.registerMethod(o, s, i.bind(e));
            });
        }, e.prototype.destroy = function(e) {
            e.destroy();
        }, e.prototype.destroyNode = function(e, t) {
            e.destroyNode && e.destroyNode(t), this._renderStore.remove(t);
        }, e.prototype.createRenderer = function(e, t, n) {
            this._renderStore.store(this._rendererFactory.createRenderer(e, t), n);
        }, e.prototype.createElement = function(e, t, n, r) {
            this._renderStore.store(e.createElement(t, n), r);
        }, e.prototype.createComment = function(e, t, n) {
            this._renderStore.store(e.createComment(t), n);
        }, e.prototype.createText = function(e, t, n) {
            this._renderStore.store(e.createText(t), n);
        }, e.prototype.appendChild = function(e, t, n) {
            e.appendChild(t, n);
        }, e.prototype.insertBefore = function(e, t, n, r) {
            e.insertBefore(t, n, r);
        }, e.prototype.removeChild = function(e, t, n) {
            e.removeChild(t, n);
        }, e.prototype.selectRootElement = function(e, t, n) {
            this._renderStore.store(e.selectRootElement(t), n);
        }, e.prototype.parentNode = function(e, t, n) {
            this._renderStore.store(e.parentNode(t), n);
        }, e.prototype.nextSibling = function(e, t, n) {
            this._renderStore.store(e.nextSibling(t), n);
        }, e.prototype.setAttribute = function(e, t, n, r, o) {
            e.setAttribute(t, n, r, o);
        }, e.prototype.removeAttribute = function(e, t, n, r) {
            e.removeAttribute(t, n, r);
        }, e.prototype.addClass = function(e, t, n) {
            e.addClass(t, n);
        }, e.prototype.removeClass = function(e, t, n) {
            e.removeClass(t, n);
        }, e.prototype.setStyle = function(e, t, n, r, o) {
            e.setStyle(t, n, r, o);
        }, e.prototype.removeStyle = function(e, t, n, r) {
            e.removeStyle(t, n, r);
        }, e.prototype.setProperty = function(e, t, n, r) {
            e.setProperty(t, n, r);
        }, e.prototype.setValue = function(e, t, n) {
            e.setValue(t, n);
        }, e.prototype.listen = function(e, t, n, r, o) {
            var i = this, s = e.listen(t || n, r, function(e) {
                return i._eventDispatcher.dispatchRenderEvent(t, n, r, e);
            });
            this._renderStore.store(s, o);
        }, e.prototype.unlisten = function(e, t) {
            t();
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: rf
            }, {
                type: Zp
            }, {
                type: qp
            }, {
                type: Kp
            }, {
                type: ur
            } ];
        }, e;
    }(), gf = function() {
        function e() {}
        return e.prototype.init = function(e, t) {
            this.worker = e, this.bus = t;
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), wf = new ce("WebWorkerScript"), _f = new ce("WorkerRenderStartableMsgService");
    Qn(Kr, "workerUi", [ {
        provide: Bn,
        useFactory: function() {
            return new Bn({
                enableLongStackTrace: Xn()
            });
        },
        deps: []
    }, {
        provide: mf,
        deps: [ rf, Zp, qp, Kp, ur ]
    }, {
        provide: _f,
        useExisting: mf,
        multi: !0
    }, Vp, {
        provide: Nt,
        useFactory: function() {
            return new Nt();
        },
        deps: []
    }, {
        provide: Vl,
        useFactory: function() {
            return document;
        },
        deps: []
    }, {
        provide: Jl,
        useClass: Dp,
        deps: [ Vl, Bn ],
        multi: !0
    }, {
        provide: Jl,
        useClass: Fp,
        deps: [ Vl ],
        multi: !0
    }, {
        provide: Jl,
        useClass: kp,
        deps: [ Vl, xp ],
        multi: !0
    }, {
        provide: xp,
        useClass: Ap,
        deps: []
    }, dn, {
        provide: ap,
        deps: [ Xl, tp ]
    }, {
        provide: ur,
        useExisting: ap
    }, {
        provide: ep,
        useExisting: tp
    }, {
        provide: rf,
        useClass: rf,
        deps: [ Zp, qp ]
    }, {
        provide: $p,
        useClass: $p,
        deps: [ Zp, qp ]
    }, {
        provide: qp,
        deps: [ Kp ]
    }, {
        provide: Wp,
        useValue: !1
    }, {
        provide: Kp,
        deps: []
    }, {
        provide: tp,
        deps: [ Vl ]
    }, {
        provide: Kn,
        deps: [ Bn ]
    }, {
        provide: Xl,
        deps: [ Jl, Bn ]
    }, {
        provide: gf,
        deps: []
    }, {
        provide: yn,
        useFactory: function(e) {
            return function() {
                var t;
                jl.makeCurrent(), Zl.init();
                try {
                    t = e.get(wf);
                } catch (e) {
                    throw new Error("You must provide your WebWorker's initialization script with the WORKER_SCRIPT token");
                }
                !function(e, n) {
                    var r = new Worker(t), o = new Qp(r), i = new ef(r), s = new tf(o, i);
                    n.init(r, s);
                }(0, e.get(gf)), function(e) {
                    var t = e.get(Zp), n = e.get(Bn);
                    t.attachToZone(n);
                    var r = e.get(_f);
                    n.runGuarded(function() {
                        r.forEach(function(e) {
                            e.start();
                        });
                    });
                }(e);
            };
        },
        multi: !0,
        deps: [ et ]
    }, {
        provide: vn,
        useValue: "browserWorkerUi"
    }, {
        provide: Zp,
        useFactory: function(e) {
            return e.bus;
        },
        deps: [ gf ]
    } ]), new xt("6.0.3"), function() {
        function e(e, t, n, r) {
            this._brokerFactory = e, this._platformLocation = t, this._serializer = r, this._platformLocation.onPopState(this._sendUrlChangeEvent.bind(this)), 
            this._platformLocation.onHashChange(this._sendUrlChangeEvent.bind(this)), this._broker = this._brokerFactory.createMessageBroker(af), 
            this._channelSink = n.to(af);
        }
        e.prototype.start = function() {
            this._broker.registerMethod("getLocation", null, this._getLocation.bind(this), Gp), 
            this._broker.registerMethod("setPathname", [ 1 ], this._setPathname.bind(this)), 
            this._broker.registerMethod("pushState", [ 1, 1, 1 ], this._platformLocation.pushState.bind(this._platformLocation)), 
            this._broker.registerMethod("replaceState", [ 1, 1, 1 ], this._platformLocation.replaceState.bind(this._platformLocation)), 
            this._broker.registerMethod("forward", null, this._platformLocation.forward.bind(this._platformLocation)), 
            this._broker.registerMethod("back", null, this._platformLocation.back.bind(this._platformLocation));
        }, e.prototype._getLocation = function() {
            return Promise.resolve(this._platformLocation.location);
        }, e.prototype._sendUrlChangeEvent = function(e) {
            this._channelSink.emit({
                event: {
                    type: e.type
                },
                location: this._serializer.serialize(this._platformLocation.location, Gp)
            });
        }, e.prototype._setPathname = function(e) {
            this._platformLocation.pathname = e;
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: rf
            }, {
                type: zl
            }, {
                type: Zp
            }, {
                type: qp
            } ];
        };
    }(), function(e) {
        function t(t, n, r) {
            var o = e.call(this) || this;
            return o._serializer = r, o._popStateListeners = [], o._hashChangeListeners = [], 
            o._location = null, o._broker = t.createMessageBroker(af), o._channelSource = n.from(af), 
            o._channelSource.subscribe({
                next: function(e) {
                    var t = null;
                    if (e.hasOwnProperty("event")) {
                        var n = e.event.type;
                        "popstate" === n ? t = o._popStateListeners : "hashchange" === n && (t = o._hashChangeListeners), 
                        t && (o._location = o._serializer.deserialize(e.location, Gp), t.forEach(function(t) {
                            return t(e.event);
                        }));
                    }
                }
            }), o.initialized = new Promise(function(e) {
                return o.initializedResolve = e;
            }), o;
        }
        o(t, e), t.prototype.init = function() {
            var e = this, t = new Xp("getLocation");
            return this._broker.runOnService(t, Gp).then(function(t) {
                return e._location = t, e.initializedResolve(), !0;
            }, function(e) {
                throw new Error(e);
            });
        }, t.prototype.getBaseHrefFromDOM = function() {
            throw new Error("Attempt to get base href from DOM from WebWorker. You must either provide a value for the APP_BASE_HREF token through DI or use the hash location strategy.");
        }, t.prototype.onPopState = function(e) {
            this._popStateListeners.push(e);
        }, t.prototype.onHashChange = function(e) {
            this._hashChangeListeners.push(e);
        }, Object.defineProperty(t.prototype, "pathname", {
            get: function() {
                return this._location ? this._location.pathname : "<unknown>";
            },
            set: function(e) {
                if (null === this._location) throw new Error("Attempt to set pathname before value is obtained from UI");
                this._location.pathname = e;
                var t = [ new Jp(e, 1) ], n = new Xp("setPathname", t);
                this._broker.runOnService(n, null);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "search", {
            get: function() {
                return this._location ? this._location.search : "<unknown>";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hash", {
            get: function() {
                return this._location ? this._location.hash : "<unknown>";
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.pushState = function(e, t, n) {
            var r = [ new Jp(e, 1), new Jp(t, 1), new Jp(n, 1) ], o = new Xp("pushState", r);
            this._broker.runOnService(o, null);
        }, t.prototype.replaceState = function(e, t, n) {
            var r = [ new Jp(e, 1), new Jp(t, 1), new Jp(n, 1) ], o = new Xp("replaceState", r);
            this._broker.runOnService(o, null);
        }, t.prototype.forward = function() {
            var e = new Xp("forward");
            this._broker.runOnService(e, null);
        }, t.prototype.back = function() {
            var e = new Xp("back");
            this._broker.runOnService(e, null);
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: $p
            }, {
                type: Zp
            }, {
                type: qp
            } ];
        };
    }(ga);
    var bf = function() {
        function e() {}
        return e.prototype.listen = function(e, t) {
            this._getListeners(e).push(t);
        }, e.prototype.unlisten = function(e, t) {
            var n = this._getListeners(e), r = n.indexOf(t);
            r > -1 && n.splice(r, 1);
        }, e.prototype.dispatchEvent = function(e, t) {
            for (var n = this._getListeners(e), r = 0; r < n.length; r++) n[r](t);
        }, e.prototype._getListeners = function(e) {
            this._listeners || (this._listeners = new Map());
            var t = this._listeners.get(e);
            return t || (t = [], this._listeners.set(e, t)), t;
        }, e;
    }(), Cf = function() {
        function e(e, t, n, r) {
            var o = this;
            this._serializer = n, this.renderStore = r, this.globalEvents = new bf(), this._messageBroker = e.createMessageBroker(sf), 
            t.initChannel(uf), t.from(uf).subscribe({
                next: function(e) {
                    return o._dispatchEvent(e);
                }
            });
        }
        return e.prototype.createRenderer = function(e, t) {
            var n = new Df(this), r = this.renderStore.allocateId();
            return this.renderStore.store(n, r), this.callUI("createRenderer", [ new Jp(e, 2), new Jp(t, 0), new Jp(n, 2) ]), 
            n;
        }, e.prototype.begin = function() {}, e.prototype.end = function() {}, e.prototype.callUI = function(e, t) {
            var n = new Xp(e, t);
            this._messageBroker.runOnService(n, null);
        }, e.prototype.allocateNode = function() {
            var e = new Ef(), t = this.renderStore.allocateId();
            return this.renderStore.store(e, t), e;
        }, e.prototype.freeNode = function(e) {
            this.renderStore.remove(e);
        }, e.prototype.allocateId = function() {
            return this.renderStore.allocateId();
        }, e.prototype._dispatchEvent = function(e) {
            var t = this._serializer.deserialize(e.element, 2), n = e.eventName, r = e.eventTarget, o = e.event;
            r ? this.globalEvents.dispatchEvent(function(e, t) {
                return e + ":" + t;
            }(r, n), o) : t.events.dispatchEvent(n, o);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: $p
            }, {
                type: Zp
            }, {
                type: qp
            }, {
                type: Kp
            } ];
        }, e;
    }(), Df = function() {
        function e(e) {
            this._rendererFactory = e, this.data = Object.create(null), this.asFnArg = new Jp(this, 2);
        }
        return e.prototype.destroy = function() {
            this.callUIWithRenderer("destroy");
        }, e.prototype.destroyNode = function(e) {
            this.callUIWithRenderer("destroyNode", [ new Jp(e, 2) ]), this._rendererFactory.freeNode(e);
        }, e.prototype.createElement = function(e, t) {
            var n = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("createElement", [ new Jp(e), new Jp(t), new Jp(n, 2) ]), 
            n;
        }, e.prototype.createComment = function(e) {
            var t = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("createComment", [ new Jp(e), new Jp(t, 2) ]), t;
        }, e.prototype.createText = function(e) {
            var t = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("createText", [ new Jp(e), new Jp(t, 2) ]), t;
        }, e.prototype.appendChild = function(e, t) {
            this.callUIWithRenderer("appendChild", [ new Jp(e, 2), new Jp(t, 2) ]);
        }, e.prototype.insertBefore = function(e, t, n) {
            e && this.callUIWithRenderer("insertBefore", [ new Jp(e, 2), new Jp(t, 2), new Jp(n, 2) ]);
        }, e.prototype.removeChild = function(e, t) {
            this.callUIWithRenderer("removeChild", [ new Jp(e, 2), new Jp(t, 2) ]);
        }, e.prototype.selectRootElement = function(e) {
            var t = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("selectRootElement", [ new Jp(e), new Jp(t, 2) ]), 
            t;
        }, e.prototype.parentNode = function(e) {
            var t = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("parentNode", [ new Jp(e, 2), new Jp(t, 2) ]), t;
        }, e.prototype.nextSibling = function(e) {
            var t = this._rendererFactory.allocateNode();
            return this.callUIWithRenderer("nextSibling", [ new Jp(e, 2), new Jp(t, 2) ]), t;
        }, e.prototype.setAttribute = function(e, t, n, r) {
            this.callUIWithRenderer("setAttribute", [ new Jp(e, 2), new Jp(t), new Jp(n), new Jp(r) ]);
        }, e.prototype.removeAttribute = function(e, t, n) {
            this.callUIWithRenderer("removeAttribute", [ new Jp(e, 2), new Jp(t), new Jp(n) ]);
        }, e.prototype.addClass = function(e, t) {
            this.callUIWithRenderer("addClass", [ new Jp(e, 2), new Jp(t) ]);
        }, e.prototype.removeClass = function(e, t) {
            this.callUIWithRenderer("removeClass", [ new Jp(e, 2), new Jp(t) ]);
        }, e.prototype.setStyle = function(e, t, n, r) {
            this.callUIWithRenderer("setStyle", [ new Jp(e, 2), new Jp(t), new Jp(n), new Jp(r) ]);
        }, e.prototype.removeStyle = function(e, t, n) {
            this.callUIWithRenderer("removeStyle", [ new Jp(e, 2), new Jp(t), new Jp(n) ]);
        }, e.prototype.setProperty = function(e, t, n) {
            this.callUIWithRenderer("setProperty", [ new Jp(e, 2), new Jp(t), new Jp(n) ]);
        }, e.prototype.setValue = function(e, t) {
            this.callUIWithRenderer("setValue", [ new Jp(e, 2), new Jp(t) ]);
        }, e.prototype.listen = function(e, t, n) {
            var r = this, o = this._rendererFactory.allocateId(), i = u("string" == typeof e ? [ null, e, e + ":" + t ] : [ e, null, null ], 3), s = i[0], a = i[1], c = i[2];
            return c ? this._rendererFactory.globalEvents.listen(c, n) : s.events.listen(t, n), 
            this.callUIWithRenderer("listen", [ new Jp(s, 2), new Jp(a), new Jp(t), new Jp(o) ]), 
            function() {
                c ? r._rendererFactory.globalEvents.unlisten(c, n) : s.events.unlisten(t, n), r.callUIWithRenderer("unlisten", [ new Jp(o) ]);
            };
        }, e.prototype.callUIWithRenderer = function(e, t) {
            void 0 === t && (t = []), this._rendererFactory.callUI(e, a([ this.asFnArg ], t));
        }, e;
    }(), Ef = function() {
        this.events = new bf();
    }, xf = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t.makeCurrent = function() {
            Ol(new t());
        }, t.prototype.logError = function(e) {
            console.error ? console.error(e) : console.log(e);
        }, t.prototype.log = function(e) {
            console.log(e);
        }, t.prototype.logGroup = function(e) {
            console.group ? (console.group(e), this.logError(e)) : console.log(e);
        }, t.prototype.logGroupEnd = function() {
            console.groupEnd && console.groupEnd();
        }, t.prototype.contains = function(e, t) {
            throw "not implemented";
        }, t.prototype.hasProperty = function(e, t) {
            throw "not implemented";
        }, t.prototype.setProperty = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.getProperty = function(e, t) {
            throw "not implemented";
        }, t.prototype.invoke = function(e, t, n) {
            throw "not implemented";
        }, Object.defineProperty(t.prototype, "attrToPropMap", {
            get: function() {
                throw "not implemented";
            },
            set: function(e) {
                throw "not implemented";
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.parse = function(e) {
            throw "not implemented";
        }, t.prototype.querySelector = function(e, t) {
            throw "not implemented";
        }, t.prototype.querySelectorAll = function(e, t) {
            throw "not implemented";
        }, t.prototype.on = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.onAndCancel = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.dispatchEvent = function(e, t) {
            throw "not implemented";
        }, t.prototype.createMouseEvent = function(e) {
            throw "not implemented";
        }, t.prototype.createEvent = function(e) {
            throw "not implemented";
        }, t.prototype.preventDefault = function(e) {
            throw "not implemented";
        }, t.prototype.isPrevented = function(e) {
            throw "not implemented";
        }, t.prototype.getInnerHTML = function(e) {
            throw "not implemented";
        }, t.prototype.getTemplateContent = function(e) {
            throw "not implemented";
        }, t.prototype.getOuterHTML = function(e) {
            throw "not implemented";
        }, t.prototype.nodeName = function(e) {
            throw "not implemented";
        }, t.prototype.nodeValue = function(e) {
            throw "not implemented";
        }, t.prototype.type = function(e) {
            throw "not implemented";
        }, t.prototype.content = function(e) {
            throw "not implemented";
        }, t.prototype.firstChild = function(e) {
            throw "not implemented";
        }, t.prototype.nextSibling = function(e) {
            throw "not implemented";
        }, t.prototype.parentElement = function(e) {
            throw "not implemented";
        }, t.prototype.childNodes = function(e) {
            throw "not implemented";
        }, t.prototype.childNodesAsList = function(e) {
            throw "not implemented";
        }, t.prototype.clearNodes = function(e) {
            throw "not implemented";
        }, t.prototype.appendChild = function(e, t) {
            throw "not implemented";
        }, t.prototype.removeChild = function(e, t) {
            throw "not implemented";
        }, t.prototype.replaceChild = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.remove = function(e) {
            throw "not implemented";
        }, t.prototype.insertBefore = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.insertAllBefore = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.insertAfter = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.setInnerHTML = function(e, t) {
            throw "not implemented";
        }, t.prototype.getText = function(e) {
            throw "not implemented";
        }, t.prototype.setText = function(e, t) {
            throw "not implemented";
        }, t.prototype.getValue = function(e) {
            throw "not implemented";
        }, t.prototype.setValue = function(e, t) {
            throw "not implemented";
        }, t.prototype.getChecked = function(e) {
            throw "not implemented";
        }, t.prototype.setChecked = function(e, t) {
            throw "not implemented";
        }, t.prototype.createComment = function(e) {
            throw "not implemented";
        }, t.prototype.createTemplate = function(e) {
            throw "not implemented";
        }, t.prototype.createElement = function(e, t) {
            throw "not implemented";
        }, t.prototype.createElementNS = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.createTextNode = function(e, t) {
            throw "not implemented";
        }, t.prototype.createScriptTag = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.createStyleElement = function(e, t) {
            throw "not implemented";
        }, t.prototype.createShadowRoot = function(e) {
            throw "not implemented";
        }, t.prototype.getShadowRoot = function(e) {
            throw "not implemented";
        }, t.prototype.getHost = function(e) {
            throw "not implemented";
        }, t.prototype.getDistributedNodes = function(e) {
            throw "not implemented";
        }, t.prototype.clone = function(e) {
            throw "not implemented";
        }, t.prototype.getElementsByClassName = function(e, t) {
            throw "not implemented";
        }, t.prototype.getElementsByTagName = function(e, t) {
            throw "not implemented";
        }, t.prototype.classList = function(e) {
            throw "not implemented";
        }, t.prototype.addClass = function(e, t) {
            throw "not implemented";
        }, t.prototype.removeClass = function(e, t) {
            throw "not implemented";
        }, t.prototype.hasClass = function(e, t) {
            throw "not implemented";
        }, t.prototype.setStyle = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.removeStyle = function(e, t) {
            throw "not implemented";
        }, t.prototype.getStyle = function(e, t) {
            throw "not implemented";
        }, t.prototype.hasStyle = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.tagName = function(e) {
            throw "not implemented";
        }, t.prototype.attributeMap = function(e) {
            throw "not implemented";
        }, t.prototype.hasAttribute = function(e, t) {
            throw "not implemented";
        }, t.prototype.hasAttributeNS = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.getAttribute = function(e, t) {
            throw "not implemented";
        }, t.prototype.getAttributeNS = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.setAttribute = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.setAttributeNS = function(e, t, n, r) {
            throw "not implemented";
        }, t.prototype.removeAttribute = function(e, t) {
            throw "not implemented";
        }, t.prototype.removeAttributeNS = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.templateAwareRoot = function(e) {
            throw "not implemented";
        }, t.prototype.createHtmlDocument = function() {
            throw "not implemented";
        }, t.prototype.getDefaultDocument = function() {
            throw "not implemented";
        }, t.prototype.getBoundingClientRect = function(e) {
            throw "not implemented";
        }, t.prototype.getTitle = function(e) {
            throw "not implemented";
        }, t.prototype.setTitle = function(e, t) {
            throw "not implemented";
        }, t.prototype.elementMatches = function(e, t) {
            throw "not implemented";
        }, t.prototype.isTemplateElement = function(e) {
            throw "not implemented";
        }, t.prototype.isTextNode = function(e) {
            throw "not implemented";
        }, t.prototype.isCommentNode = function(e) {
            throw "not implemented";
        }, t.prototype.isElementNode = function(e) {
            throw "not implemented";
        }, t.prototype.hasShadowRoot = function(e) {
            throw "not implemented";
        }, t.prototype.isShadowRoot = function(e) {
            throw "not implemented";
        }, t.prototype.importIntoDoc = function(e) {
            throw "not implemented";
        }, t.prototype.adoptNode = function(e) {
            throw "not implemented";
        }, t.prototype.getHref = function(e) {
            throw "not implemented";
        }, t.prototype.getEventKey = function(e) {
            throw "not implemented";
        }, t.prototype.resolveAndSetHref = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.supportsDOMEvents = function() {
            throw "not implemented";
        }, t.prototype.supportsNativeShadowDOM = function() {
            throw "not implemented";
        }, t.prototype.getGlobalEventTarget = function(e, t) {
            throw "not implemented";
        }, t.prototype.getHistory = function() {
            throw "not implemented";
        }, t.prototype.getLocation = function() {
            throw "not implemented";
        }, t.prototype.getBaseHref = function(e) {
            throw "not implemented";
        }, t.prototype.resetBaseElement = function() {
            throw "not implemented";
        }, t.prototype.getUserAgent = function() {
            return "Fake user agent";
        }, t.prototype.setData = function(e, t, n) {
            throw "not implemented";
        }, t.prototype.getComputedStyle = function(e) {
            throw "not implemented";
        }, t.prototype.getData = function(e, t) {
            throw "not implemented";
        }, t.prototype.performanceNow = function() {
            throw "not implemented";
        }, t.prototype.getAnimationPrefix = function() {
            throw "not implemented";
        }, t.prototype.getTransitionEnd = function() {
            throw "not implemented";
        }, t.prototype.supportsAnimation = function() {
            throw "not implemented";
        }, t.prototype.supportsWebAnimation = function() {
            throw "not implemented";
        }, t.prototype.supportsCookies = function() {
            return !1;
        }, t.prototype.getCookie = function(e) {
            throw "not implemented";
        }, t.prototype.setCookie = function(e, t) {
            throw "not implemented";
        }, t;
    }(Tl);
    function Af() {
        return new Nt();
    }
    Qn(Kr, "workerApp", [ {
        provide: vn,
        useValue: "browserWorkerApp"
    } ]);
    var kf = {
        postMessage: function(e, t) {
            postMessage(e, t);
        }
    };
    function Sf(e) {
        var t = new Qp(kf), n = new ef(), r = new tf(t, n);
        return r.attachToZone(e), r;
    }
    function Of() {
        xf.makeCurrent();
    }
    var Ff = function() {
        function e() {}
        return e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ Vp, qp, {
                    provide: Vl,
                    useValue: null
                }, $p, rf, Cf, {
                    provide: ur,
                    useExisting: Cf
                }, {
                    provide: Wp,
                    useValue: !0
                }, Kp, {
                    provide: Nt,
                    useFactory: Af,
                    deps: []
                }, {
                    provide: Zp,
                    useFactory: Sf,
                    deps: [ Bn ]
                }, {
                    provide: cn,
                    useValue: Of,
                    multi: !0
                } ],
                exports: [ El, Jr ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), Tf = new S(function(e) {
        return e.complete();
    });
    function Pf(e) {
        return e ? function(e) {
            return new S(function(t) {
                return e.schedule(function() {
                    return t.complete();
                });
            });
        }(e) : Tf;
    }
    function Nf() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n, r, o = e[e.length - 1];
        switch (F(o) ? e.pop() : o = void 0, e.length) {
          case 0:
            return Pf(o);

          case 1:
            return o ? Z(e, o) : (n = e[0], (r = new S(function(e) {
                e.next(n), e.complete();
            }))._isScalar = !0, r.value = n, r);

          default:
            return Z(e, o);
        }
    }
    var Mf = function() {
        function e(e, t) {
            this.predicate = e, this.thisArg = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new If(e, this.predicate, this.thisArg));
        }, e;
    }(), If = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.predicate = n, o.thisArg = r, o.count = 0, o;
        }
        return o(t, e), t.prototype._next = function(e) {
            var t;
            try {
                t = this.predicate.call(this.thisArg, e, this.count++);
            } catch (e) {
                return void this.destination.error(e);
            }
            t && this.destination.next(e);
        }, t;
    }(E), Rf = function() {}, jf = function() {}, Bf = function() {
        function e(e) {
            var t = this;
            this.normalizedNames = new Map(), this.lazyUpdate = null, e ? this.lazyInit = "string" == typeof e ? function() {
                t.headers = new Map(), e.split("\n").forEach(function(e) {
                    var n = e.indexOf(":");
                    if (n > 0) {
                        var r = e.slice(0, n), o = r.toLowerCase(), i = e.slice(n + 1).trim();
                        t.maybeSetNormalizedName(r, o), t.headers.has(o) ? t.headers.get(o).push(i) : t.headers.set(o, [ i ]);
                    }
                });
            } : function() {
                t.headers = new Map(), Object.keys(e).forEach(function(n) {
                    var r = e[n], o = n.toLowerCase();
                    "string" == typeof r && (r = [ r ]), r.length > 0 && (t.headers.set(o, r), t.maybeSetNormalizedName(n, o));
                });
            } : this.headers = new Map();
        }
        return e.prototype.has = function(e) {
            return this.init(), this.headers.has(e.toLowerCase());
        }, e.prototype.get = function(e) {
            this.init();
            var t = this.headers.get(e.toLowerCase());
            return t && t.length > 0 ? t[0] : null;
        }, e.prototype.keys = function() {
            return this.init(), Array.from(this.normalizedNames.values());
        }, e.prototype.getAll = function(e) {
            return this.init(), this.headers.get(e.toLowerCase()) || null;
        }, e.prototype.append = function(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "a"
            });
        }, e.prototype.set = function(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "s"
            });
        }, e.prototype.delete = function(e, t) {
            return this.clone({
                name: e,
                value: t,
                op: "d"
            });
        }, e.prototype.maybeSetNormalizedName = function(e, t) {
            this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }, e.prototype.init = function() {
            var t = this;
            this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), 
            this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(function(e) {
                return t.applyUpdate(e);
            }), this.lazyUpdate = null));
        }, e.prototype.copyFrom = function(e) {
            var t = this;
            e.init(), Array.from(e.headers.keys()).forEach(function(n) {
                t.headers.set(n, e.headers.get(n)), t.normalizedNames.set(n, e.normalizedNames.get(n));
            });
        }, e.prototype.clone = function(t) {
            var n = new e();
            return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, 
            n.lazyUpdate = (this.lazyUpdate || []).concat([ t ]), n;
        }, e.prototype.applyUpdate = function(e) {
            var t = e.name.toLowerCase();
            switch (e.op) {
              case "a":
              case "s":
                var n = e.value;
                if ("string" == typeof n && (n = [ n ]), 0 === n.length) return;
                this.maybeSetNormalizedName(e.name, t);
                var r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                r.push.apply(r, a(n)), this.headers.set(t, r);
                break;

              case "d":
                var o = e.value;
                if (o) {
                    var i = this.headers.get(t);
                    if (!i) return;
                    0 === (i = i.filter(function(e) {
                        return -1 === o.indexOf(e);
                    })).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, i);
                } else this.headers.delete(t), this.normalizedNames.delete(t);
            }
        }, e.prototype.forEach = function(e) {
            var t = this;
            this.init(), Array.from(this.normalizedNames.keys()).forEach(function(n) {
                return e(t.normalizedNames.get(n), t.headers.get(n));
            });
        }, e;
    }(), Vf = function() {
        function e() {}
        return e.prototype.encodeKey = function(e) {
            return Lf(e);
        }, e.prototype.encodeValue = function(e) {
            return Lf(e);
        }, e.prototype.decodeKey = function(e) {
            return decodeURIComponent(e);
        }, e.prototype.decodeValue = function(e) {
            return decodeURIComponent(e);
        }, e;
    }();
    function Lf(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/");
    }
    var zf = function() {
        function e(e) {
            void 0 === e && (e = {});
            var t, n, r, o = this;
            if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new Vf(), 
            e.fromString) {
                if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                this.map = (t = e.fromString, n = this.encoder, r = new Map(), t.length > 0 && t.split("&").forEach(function(e) {
                    var t = e.indexOf("="), o = u(-1 == t ? [ n.decodeKey(e), "" ] : [ n.decodeKey(e.slice(0, t)), n.decodeValue(e.slice(t + 1)) ], 2), i = o[0], s = o[1], a = r.get(i) || [];
                    a.push(s), r.set(i, a);
                }), r);
            } else e.fromObject ? (this.map = new Map(), Object.keys(e.fromObject).forEach(function(t) {
                var n = e.fromObject[t];
                o.map.set(t, Array.isArray(n) ? n : [ n ]);
            })) : this.map = null;
        }
        return e.prototype.has = function(e) {
            return this.init(), this.map.has(e);
        }, e.prototype.get = function(e) {
            this.init();
            var t = this.map.get(e);
            return t ? t[0] : null;
        }, e.prototype.getAll = function(e) {
            return this.init(), this.map.get(e) || null;
        }, e.prototype.keys = function() {
            return this.init(), Array.from(this.map.keys());
        }, e.prototype.append = function(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "a"
            });
        }, e.prototype.set = function(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "s"
            });
        }, e.prototype.delete = function(e, t) {
            return this.clone({
                param: e,
                value: t,
                op: "d"
            });
        }, e.prototype.toString = function() {
            var e = this;
            return this.init(), this.keys().map(function(t) {
                var n = e.encoder.encodeKey(t);
                return e.map.get(t).map(function(t) {
                    return n + "=" + e.encoder.encodeValue(t);
                }).join("&");
            }).join("&");
        }, e.prototype.clone = function(t) {
            var n = new e({
                encoder: this.encoder
            });
            return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([ t ]), 
            n;
        }, e.prototype.init = function() {
            var e = this;
            null === this.map && (this.map = new Map()), null !== this.cloneFrom && (this.cloneFrom.init(), 
            this.cloneFrom.keys().forEach(function(t) {
                return e.map.set(t, e.cloneFrom.map.get(t));
            }), this.updates.forEach(function(t) {
                switch (t.op) {
                  case "a":
                  case "s":
                    var n = ("a" === t.op ? e.map.get(t.param) : void 0) || [];
                    n.push(t.value), e.map.set(t.param, n);
                    break;

                  case "d":
                    if (void 0 === t.value) {
                        e.map.delete(t.param);
                        break;
                    }
                    var r = e.map.get(t.param) || [], o = r.indexOf(t.value);
                    -1 !== o && r.splice(o, 1), r.length > 0 ? e.map.set(t.param, r) : e.map.delete(t.param);
                }
            }), this.cloneFrom = null);
        }, e;
    }();
    function Hf(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
    }
    function Uf(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
    }
    function Wf(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
    }
    var Zf, Kf = function() {
        function e(e, t, n, r) {
            var o;
            if (this.url = t, this.body = null, this.reportProgress = !1, this.withCredentials = !1, 
            this.responseType = "json", this.method = e.toUpperCase(), function(e) {
                switch (e) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;

                  default:
                    return !0;
                }
            }(this.method) || r ? (this.body = void 0 !== n ? n : null, o = r) : o = n, o && (this.reportProgress = !!o.reportProgress, 
            this.withCredentials = !!o.withCredentials, o.responseType && (this.responseType = o.responseType), 
            o.headers && (this.headers = o.headers), o.params && (this.params = o.params)), 
            this.headers || (this.headers = new Bf()), this.params) {
                var i = this.params.toString();
                if (0 === i.length) this.urlWithParams = t; else {
                    var s = t.indexOf("?"), u = -1 === s ? "?" : s < t.length - 1 ? "&" : "";
                    this.urlWithParams = t + u + i;
                }
            } else this.params = new zf(), this.urlWithParams = t;
        }
        return e.prototype.serializeBody = function() {
            return null === this.body ? null : Hf(this.body) || Uf(this.body) || Wf(this.body) || "string" == typeof this.body ? this.body : this.body instanceof zf ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString();
        }, e.prototype.detectContentTypeHeader = function() {
            return null === this.body ? null : Wf(this.body) ? null : Uf(this.body) ? this.body.type || null : Hf(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof zf ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null;
        }, e.prototype.clone = function(t) {
            void 0 === t && (t = {});
            var n = t.method || this.method, r = t.url || this.url, o = t.responseType || this.responseType, i = void 0 !== t.body ? t.body : this.body, s = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials, u = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress, a = t.headers || this.headers, c = t.params || this.params;
            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce(function(e, n) {
                return e.set(n, t.setHeaders[n]);
            }, a)), t.setParams && (c = Object.keys(t.setParams).reduce(function(e, n) {
                return e.set(n, t.setParams[n]);
            }, c)), new e(n, r, i, {
                params: c,
                headers: a,
                reportProgress: u,
                responseType: o,
                withCredentials: s
            });
        }, e;
    }();
    !function(e) {
        e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", 
        e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", 
        e[e.User = 5] = "User";
    }(Zf || (Zf = {}));
    var Gf = function(e, t, n) {
        void 0 === t && (t = 200), void 0 === n && (n = "OK"), this.headers = e.headers || new Bf(), 
        this.status = void 0 !== e.status ? e.status : t, this.statusText = e.statusText || n, 
        this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300;
    }, qf = function(e) {
        function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, t) || this;
            return n.type = Zf.ResponseHeader, n;
        }
        return o(t, e), t.prototype.clone = function(e) {
            return void 0 === e && (e = {}), new t({
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            });
        }, t;
    }(Gf), $f = function(e) {
        function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, t) || this;
            return n.type = Zf.Response, n.body = void 0 !== t.body ? t.body : null, n;
        }
        return o(t, e), t.prototype.clone = function(e) {
            return void 0 === e && (e = {}), new t({
                body: void 0 !== e.body ? e.body : this.body,
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            });
        }, t;
    }(Gf), Yf = function(e) {
        function t(t) {
            var n = e.call(this, t, 0, "Unknown Error") || this;
            return n.name = "HttpErrorResponse", n.ok = !1, n.status >= 200 && n.status < 300 ? n.message = "Http failure during parsing for " + (t.url || "(unknown url)") : n.message = "Http failure response for " + (t.url || "(unknown url)") + ": " + t.status + " " + t.statusText, 
            n.error = t.error || null, n;
        }
        return o(t, e), t;
    }(Gf);
    function Jf(e, t) {
        return {
            body: t,
            headers: e.headers,
            observe: e.observe,
            params: e.params,
            reportProgress: e.reportProgress,
            responseType: e.responseType,
            withCredentials: e.withCredentials
        };
    }
    var Xf = function() {
        function e(e) {
            this.handler = e;
        }
        return e.prototype.request = function(e, t, n) {
            var r, o = this;
            if (void 0 === n && (n = {}), e instanceof Kf) r = e; else {
                var i;
                i = n.headers instanceof Bf ? n.headers : new Bf(n.headers);
                var s = void 0;
                n.params && (s = n.params instanceof zf ? n.params : new zf({
                    fromObject: n.params
                })), r = new Kf(e, t, void 0 !== n.body ? n.body : null, {
                    headers: i,
                    params: s,
                    reportProgress: n.reportProgress,
                    responseType: n.responseType || "json",
                    withCredentials: n.withCredentials
                });
            }
            var u = Nf(r).pipe(K(function(e) {
                return o.handler.handle(e);
            }, void 0, 1));
            if (e instanceof Kf || "events" === n.observe) return u;
            var a, c = u.pipe((a = function(e) {
                return e instanceof $f;
            }, function(e) {
                return e.lift(new Mf(a, void 0));
            }));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return c.pipe(H(function(e) {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return e.body;
                    }));

                  case "blob":
                    return c.pipe(H(function(e) {
                        if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return e.body;
                    }));

                  case "text":
                    return c.pipe(H(function(e) {
                        if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                        return e.body;
                    }));

                  case "json":
                  default:
                    return c.pipe(H(function(e) {
                        return e.body;
                    }));
                }

              case "response":
                return c;

              default:
                throw new Error("Unreachable: unhandled observe type " + n.observe + "}");
            }
        }, e.prototype.delete = function(e, t) {
            return void 0 === t && (t = {}), this.request("DELETE", e, t);
        }, e.prototype.get = function(e, t) {
            return void 0 === t && (t = {}), this.request("GET", e, t);
        }, e.prototype.head = function(e, t) {
            return void 0 === t && (t = {}), this.request("HEAD", e, t);
        }, e.prototype.jsonp = function(e, t) {
            return this.request("JSONP", e, {
                params: new zf().append(t, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            });
        }, e.prototype.options = function(e, t) {
            return void 0 === t && (t = {}), this.request("OPTIONS", e, t);
        }, e.prototype.patch = function(e, t, n) {
            return void 0 === n && (n = {}), this.request("PATCH", e, Jf(n, t));
        }, e.prototype.post = function(e, t, n) {
            return void 0 === n && (n = {}), this.request("POST", e, Jf(n, t));
        }, e.prototype.put = function(e, t, n) {
            return void 0 === n && (n = {}), this.request("PUT", e, Jf(n, t));
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: Rf
            } ];
        }, e;
    }(), Qf = function() {
        function e(e, t) {
            this.next = e, this.interceptor = t;
        }
        return e.prototype.handle = function(e) {
            return this.interceptor.intercept(e, this.next);
        }, e;
    }(), ed = new ce("HTTP_INTERCEPTORS"), td = function() {
        function e() {}
        return e.prototype.intercept = function(e, t) {
            return t.handle(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), nd = 0, rd = function() {}, od = function() {
        function e(e, t) {
            this.callbackMap = e, this.document = t;
        }
        return e.prototype.nextCallback = function() {
            return "ng_jsonp_callback_" + nd++;
        }, e.prototype.handle = function(e) {
            var t = this;
            if ("JSONP" !== e.method) throw new Error("JSONP requests must use JSONP request method.");
            if ("json" !== e.responseType) throw new Error("JSONP requests must use Json response type.");
            return new S(function(n) {
                var r = t.nextCallback(), o = e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + r + "$1"), i = t.document.createElement("script");
                i.src = o;
                var s = null, u = !1, a = !1;
                t.callbackMap[r] = function(e) {
                    delete t.callbackMap[r], a || (s = e, u = !0);
                };
                var c = function() {
                    i.parentNode && i.parentNode.removeChild(i), delete t.callbackMap[r];
                }, l = function(e) {
                    a || (c(), u ? (n.next(new $f({
                        body: s,
                        status: 200,
                        statusText: "OK",
                        url: o
                    })), n.complete()) : n.error(new Yf({
                        url: o,
                        status: 0,
                        statusText: "JSONP Error",
                        error: new Error("JSONP injected script did not invoke callback.")
                    })));
                }, p = function(e) {
                    a || (c(), n.error(new Yf({
                        error: e,
                        status: 0,
                        statusText: "JSONP Error",
                        url: o
                    })));
                };
                return i.addEventListener("load", l), i.addEventListener("error", p), t.document.body.appendChild(i), 
                n.next({
                    type: Zf.Sent
                }), function() {
                    a = !0, i.removeEventListener("load", l), i.removeEventListener("error", p), c();
                };
            });
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: rd
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Al ]
                } ]
            } ];
        }, e;
    }(), id = function() {
        function e(e) {
            this.jsonp = e;
        }
        return e.prototype.intercept = function(e, t) {
            return "JSONP" === e.method ? this.jsonp.handle(e) : t.handle(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: od
            } ];
        }, e;
    }(), sd = /^\)\]\}',?\n/, ud = function() {}, ad = function() {
        function e() {}
        return e.prototype.build = function() {
            return new XMLHttpRequest();
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), cd = function() {
        function e(e) {
            this.xhrFactory = e;
        }
        return e.prototype.handle = function(e) {
            var t = this;
            if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
            return new S(function(n) {
                var r = t.xhrFactory.build();
                if (r.open(e.method, e.urlWithParams), e.withCredentials && (r.withCredentials = !0), 
                e.headers.forEach(function(e, t) {
                    return r.setRequestHeader(e, t.join(","));
                }), e.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"), 
                !e.headers.has("Content-Type")) {
                    var o = e.detectContentTypeHeader();
                    null !== o && r.setRequestHeader("Content-Type", o);
                }
                if (e.responseType) {
                    var i = e.responseType.toLowerCase();
                    r.responseType = "json" !== i ? i : "text";
                }
                var s = e.serializeBody(), u = null, a = function() {
                    if (null !== u) return u;
                    var t = 1223 === r.status ? 204 : r.status, n = r.statusText || "OK", o = new Bf(r.getAllResponseHeaders()), i = function(e) {
                        return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null;
                    }(r) || e.url;
                    return u = new qf({
                        headers: o,
                        status: t,
                        statusText: n,
                        url: i
                    });
                }, c = function() {
                    var t = a(), o = t.headers, i = t.status, s = t.statusText, u = t.url, c = null;
                    204 !== i && (c = void 0 === r.response ? r.responseText : r.response), 0 === i && (i = c ? 200 : 0);
                    var l = i >= 200 && i < 300;
                    if ("json" === e.responseType && "string" == typeof c) {
                        var p = c;
                        c = c.replace(sd, "");
                        try {
                            c = "" !== c ? JSON.parse(c) : null;
                        } catch (e) {
                            c = p, l && (l = !1, c = {
                                error: e,
                                text: c
                            });
                        }
                    }
                    l ? (n.next(new $f({
                        body: c,
                        headers: o,
                        status: i,
                        statusText: s,
                        url: u || void 0
                    })), n.complete()) : n.error(new Yf({
                        error: c,
                        headers: o,
                        status: i,
                        statusText: s,
                        url: u || void 0
                    }));
                }, l = function(e) {
                    var t = new Yf({
                        error: e,
                        status: r.status || 0,
                        statusText: r.statusText || "Unknown Error"
                    });
                    n.error(t);
                }, p = !1, f = function(t) {
                    p || (n.next(a()), p = !0);
                    var o = {
                        type: Zf.DownloadProgress,
                        loaded: t.loaded
                    };
                    t.lengthComputable && (o.total = t.total), "text" === e.responseType && r.responseText && (o.partialText = r.responseText), 
                    n.next(o);
                }, d = function(e) {
                    var t = {
                        type: Zf.UploadProgress,
                        loaded: e.loaded
                    };
                    e.lengthComputable && (t.total = e.total), n.next(t);
                };
                return r.addEventListener("load", c), r.addEventListener("error", l), e.reportProgress && (r.addEventListener("progress", f), 
                null !== s && r.upload && r.upload.addEventListener("progress", d)), r.send(s), 
                n.next({
                    type: Zf.Sent
                }), function() {
                    r.removeEventListener("error", l), r.removeEventListener("load", c), e.reportProgress && (r.removeEventListener("progress", f), 
                    null !== s && r.upload && r.upload.removeEventListener("progress", d)), r.abort();
                };
            });
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: ud
            } ];
        }, e;
    }(), ld = new ce("XSRF_COOKIE_NAME"), pd = new ce("XSRF_HEADER_NAME"), fd = function() {}, dd = function() {
        function e(e, t, n) {
            this.doc = e, this.platform = t, this.cookieName = n, this.lastCookieString = "", 
            this.lastToken = null, this.parseCount = 0;
        }
        return e.prototype.getToken = function() {
            if ("server" === this.platform) return null;
            var e = this.doc.cookie || "";
            return e !== this.lastCookieString && (this.parseCount++, this.lastToken = bc(e, this.cookieName), 
            this.lastCookieString = e), this.lastToken;
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Al ]
                } ]
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ vn ]
                } ]
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ ld ]
                } ]
            } ];
        }, e;
    }(), hd = function() {
        function e(e, t) {
            this.tokenService = e, this.headerName = t;
        }
        return e.prototype.intercept = function(e, t) {
            var n = e.url.toLowerCase();
            if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
            var r = this.tokenService.getToken();
            return null === r || e.headers.has(this.headerName) || (e = e.clone({
                headers: e.headers.set(this.headerName, r)
            })), t.handle(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: fd
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ pd ]
                } ]
            } ];
        }, e;
    }(), yd = function() {
        function e(e, t) {
            this.backend = e, this.injector = t, this.chain = null;
        }
        return e.prototype.handle = function(e) {
            if (null === this.chain) {
                var t = this.injector.get(ed, []);
                this.chain = t.reduceRight(function(e, t) {
                    return new Qf(e, t);
                }, this.backend);
            }
            return this.chain.handle(e);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: jf
            }, {
                type: et
            } ];
        }, e;
    }();
    function vd() {
        return "object" == typeof window ? window : {};
    }
    var md = function() {
        function e() {}
        return e.disable = function() {
            return {
                ngModule: e,
                providers: [ {
                    provide: hd,
                    useClass: td
                } ]
            };
        }, e.withOptions = function(t) {
            return void 0 === t && (t = {}), {
                ngModule: e,
                providers: [ t.cookieName ? {
                    provide: ld,
                    useValue: t.cookieName
                } : [], t.headerName ? {
                    provide: pd,
                    useValue: t.headerName
                } : [] ]
            };
        }, e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ hd, {
                    provide: ed,
                    useExisting: hd,
                    multi: !0
                }, {
                    provide: fd,
                    useClass: dd
                }, {
                    provide: ld,
                    useValue: "XSRF-TOKEN"
                }, {
                    provide: pd,
                    useValue: "X-XSRF-TOKEN"
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), gd = function() {
        function e() {}
        return e.decorators = [ {
            type: Et,
            args: [ {
                imports: [ md.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN"
                }) ],
                providers: [ Xf, {
                    provide: Rf,
                    useClass: yd
                }, cd, {
                    provide: jf,
                    useExisting: cd
                }, ad, {
                    provide: ud,
                    useExisting: ad
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        }, e;
    }(), wd = (function() {
        function e() {}
        e.decorators = [ {
            type: Et,
            args: [ {
                providers: [ od, {
                    provide: rd,
                    useFactory: vd
                }, {
                    provide: ed,
                    useClass: id,
                    multi: !0
                } ]
            } ]
        } ], e.ctorParameters = function() {
            return [];
        };
    }(), function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._value = t, n;
        }
        return o(t, e), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this.getValue();
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._subscribe = function(t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value), n;
        }, t.prototype.getValue = function() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new Y();
            return this._value;
        }, t.prototype.next = function(t) {
            e.prototype.next.call(this, this._value = t);
        }, t;
    }(Q)), _d = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r.pending = !1, r;
        }
        return o(t, e), t.prototype.schedule = function(e, t) {
            if (void 0 === t && (t = 0), this.closed) return this;
            this.state = e;
            var n = this.id, r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, 
            this.delay = t, this.id = this.id || this.requestAsyncId(r, this.id, t), this;
        }, t.prototype.requestAsyncId = function(e, t, n) {
            return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n);
        }, t.prototype.recycleAsyncId = function(e, t, n) {
            if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return t;
            clearInterval(t);
        }, t.prototype.execute = function(e, t) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(e, t);
            if (n) return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, t.prototype._execute = function(e, t) {
            var n = !1, r = void 0;
            try {
                this.work(e);
            } catch (e) {
                n = !0, r = !!e && e || new Error(e);
            }
            if (n) return this.unsubscribe(), r;
        }, t.prototype._unsubscribe = function() {
            var e = this.id, t = this.scheduler, n = t.actions, r = n.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), 
            null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null;
        }, t;
    }(function(e) {
        function t(t, n) {
            return e.call(this) || this;
        }
        return o(t, e), t.prototype.schedule = function(e, t) {
            return void 0 === t && (t = 0), this;
        }, t;
    }(b)), bd = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r;
        }
        return o(t, e), t.prototype.schedule = function(t, n) {
            return void 0 === n && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, 
            this.state = t, this.scheduler.flush(this), this);
        }, t.prototype.execute = function(t, n) {
            return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n);
        }, t.prototype.requestAsyncId = function(t, n, r) {
            return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, r) : t.flush(this);
        }, t;
    }(_d), Cd = function() {
        function e(t, n) {
            void 0 === n && (n = e.now), this.SchedulerAction = t, this.now = n;
        }
        return e.prototype.schedule = function(e, t, n) {
            return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t);
        }, e.now = Date.now ? Date.now : function() {
            return +new Date();
        }, e;
    }(), Dd = function(e) {
        function t(n, r) {
            void 0 === r && (r = Cd.now);
            var o = e.call(this, n, function() {
                return t.delegate && t.delegate !== o ? t.delegate.now() : r();
            }) || this;
            return o.actions = [], o.active = !1, o.scheduled = void 0, o;
        }
        return o(t, e), t.prototype.schedule = function(n, r, o) {
            return void 0 === r && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(n, r, o) : e.prototype.schedule.call(this, n, r, o);
        }, t.prototype.flush = function(e) {
            var t = this.actions;
            if (this.active) t.push(e); else {
                var n;
                this.active = !0;
                do {
                    if (n = e.execute(e.state, e.delay)) break;
                } while (e = t.shift());
                if (this.active = !1, n) {
                    for (;e = t.shift(); ) e.unsubscribe();
                    throw n;
                }
            }
        }, t;
    }(Cd), Ed = new (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(t, e), t;
    }(Dd))(bd), xd = function() {
        function e(e, t, n) {
            this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e;
        }
        return e.prototype.observe = function(e) {
            switch (this.kind) {
              case "N":
                return e.next && e.next(this.value);

              case "E":
                return e.error && e.error(this.error);

              case "C":
                return e.complete && e.complete();
            }
        }, e.prototype.do = function(e, t, n) {
            switch (this.kind) {
              case "N":
                return e && e(this.value);

              case "E":
                return t && t(this.error);

              case "C":
                return n && n();
            }
        }, e.prototype.accept = function(e, t, n) {
            return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n);
        }, e.prototype.toObservable = function() {
            var e;
            switch (this.kind) {
              case "N":
                return Nf(this.value);

              case "E":
                return e = this.error, new S(function(t) {
                    return t.error(e);
                });

              case "C":
                return Pf();
            }
            throw new Error("unexpected notification kind value");
        }, e.createNext = function(t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification;
        }, e.createError = function(t) {
            return new e("E", void 0, t);
        }, e.createComplete = function() {
            return e.completeNotification;
        }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), 
        e;
    }(), Ad = function() {
        function e(e, t) {
            void 0 === t && (t = 0), this.scheduler = e, this.delay = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new kd(e, this.scheduler, this.delay));
        }, e;
    }(), kd = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = 0);
            var o = e.call(this, t) || this;
            return o.scheduler = n, o.delay = r, o;
        }
        return o(t, e), t.dispatch = function(e) {
            var t = e.notification, n = e.destination;
            t.observe(n), this.unsubscribe();
        }, t.prototype.scheduleMessage = function(e) {
            this.add(this.scheduler.schedule(t.dispatch, this.delay, new Sd(e, this.destination)));
        }, t.prototype._next = function(e) {
            this.scheduleMessage(xd.createNext(e));
        }, t.prototype._error = function(e) {
            this.scheduleMessage(xd.createError(e));
        }, t.prototype._complete = function() {
            this.scheduleMessage(xd.createComplete());
        }, t;
    }(E), Sd = function(e, t) {
        this.notification = e, this.destination = t;
    }, Od = function() {
        function e(e, t) {
            this.observables = e, this.project = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Fd(e, this.observables, this.project));
        }, e;
    }(), Fd = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            o.observables = n, o.project = r, o.toRespond = [];
            var i = n.length;
            o.values = new Array(i);
            for (var s = 0; s < i; s++) o.toRespond.push(s);
            for (s = 0; s < i; s++) {
                var u = n[s];
                o.add(L(o, u, u, s));
            }
            return o;
        }
        return o(t, e), t.prototype.notifyNext = function(e, t, n, r, o) {
            this.values[n] = t;
            var i = this.toRespond;
            if (i.length > 0) {
                var s = i.indexOf(n);
                -1 !== s && i.splice(s, 1);
            }
        }, t.prototype.notifyComplete = function() {}, t.prototype._next = function(e) {
            if (0 === this.toRespond.length) {
                var t = [ e ].concat(this.values);
                this.project ? this._tryProject(t) : this.destination.next(t);
            }
        }, t.prototype._tryProject = function(e) {
            var t;
            try {
                t = this.project.apply(this, e);
            } catch (e) {
                return void this.destination.error(e);
            }
            this.destination.next(t);
        }, t;
    }(z), Td = function() {
        function e(e, t, n) {
            void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Pd(e, this.accumulator, this.seed, this.hasSeed));
        }, e;
    }(), Pd = function(e) {
        function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i;
        }
        return o(t, e), Object.defineProperty(t.prototype, "seed", {
            get: function() {
                return this._seed;
            },
            set: function(e) {
                this.hasSeed = !0, this._seed = e;
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._next = function(e) {
            if (this.hasSeed) return this._tryNext(e);
            this.seed = e, this.destination.next(e);
        }, t.prototype._tryNext = function(e) {
            var t, n = this.index++;
            try {
                t = this.accumulator(this.seed, e, n);
            } catch (e) {
                this.destination.error(e);
            }
            this.seed = t, this.destination.next(t);
        }, t;
    }(E), Nd = function() {
        function e(e, t) {
            this.compare = e, this.keySelector = t;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Md(e, this.compare, this.keySelector));
        }, e;
    }(), Md = function(e) {
        function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.keySelector = r, o.hasKey = !1, "function" == typeof n && (o.compare = n), 
            o;
        }
        return o(t, e), t.prototype.compare = function(e, t) {
            return e === t;
        }, t.prototype._next = function(e) {
            var t = e;
            if (this.keySelector && (t = w(this.keySelector)(e)) === m) return this.destination.error(m.e);
            var n = !1;
            if (this.hasKey) {
                if ((n = w(this.compare)(this.key, t)) === m) return this.destination.error(m.e);
            } else this.hasKey = !0;
            !1 === Boolean(n) && (this.key = t, this.destination.next(e));
        }, t;
    }(E), Id = function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
        return function(t, n) {
            function r() {
                this.constructor = t;
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
        };
    }(), Rd = "@ngrx/store/init", jd = function(e) {
        function t() {
            return e.call(this, {
                type: Rd
            }) || this;
        }
        return Id(t, e), t.prototype.next = function(t) {
            if (void 0 === t) throw new TypeError("Actions must be objects");
            if (void 0 === t.type) throw new TypeError("Actions must have a type property");
            e.prototype.next.call(this, t);
        }, t.prototype.complete = function() {}, t.prototype.ngOnDestroy = function() {
            e.prototype.complete.call(this);
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [];
        }, t;
    }(wd), Bd = [ jd ], Vd = new ce("@ngrx/store Internal Initial State"), Ld = new ce("@ngrx/store Initial State"), zd = new ce("@ngrx/store Reducer Factory"), Hd = new ce("@ngrx/store Reducer Factory Provider"), Ud = new ce("@ngrx/store Initial Reducers"), Wd = new ce("@ngrx/store Internal Initial Reducers"), Zd = new ce("@ngrx/store Meta Reducers"), Kd = new ce("@ngrx/store Store Features"), Gd = new ce("@ngrx/store Internal Store Reducers"), qd = new ce("@ngrx/store Internal Feature Reducers"), $d = new ce("@ngrx/store Internal Feature Reducers Token"), Yd = new ce("@ngrx/store Feature Reducers"), Jd = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), s = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return s;
    }, Xd = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Jd(arguments[t]));
        return e;
    };
    function Qd(e, t) {
        void 0 === t && (t = {});
        for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
            var i = n[o];
            "function" == typeof e[i] && (r[i] = e[i]);
        }
        var s = Object.keys(r);
        return function(e, n) {
            e = void 0 === e ? t : e;
            for (var o = !1, i = {}, u = 0; u < s.length; u++) {
                var a = s[u], c = r[a], l = e[a], p = c(l, n);
                i[a] = p, o = o || p !== l;
            }
            return o ? i : e;
        };
    }
    function eh() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            if (0 === e.length) return t;
            var n = e[e.length - 1];
            return e.slice(0, -1).reduceRight(function(e, t) {
                return t(e);
            }, n(t));
        };
    }
    function th(e, t) {
        return Array.isArray(t) && t.length > 0 ? eh.apply(null, Xd(t, [ e ])) : e;
    }
    var nh = function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
        return function(t, n) {
            function r() {
                this.constructor = t;
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
        };
    }(), rh = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    }, oh = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return nh(t, e), t;
    }(S), ih = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return nh(t, e), t;
    }(jd), sh = function(e) {
        function t(t, n, r, o) {
            var i = e.call(this, o(r, n)) || this;
            return i.dispatcher = t, i.initialState = n, i.reducers = r, i.reducerFactory = o, 
            i;
        }
        return nh(t, e), t.prototype.addFeature = function(e) {
            var t = e.reducers, n = e.reducerFactory, r = e.metaReducers, o = e.initialState, i = e.key, s = "function" == typeof t ? function(e) {
                var t = Array.isArray(e) && e.length > 0 ? eh.apply(void 0, Xd(e)) : function(e) {
                    return e;
                };
                return function(e, n) {
                    return e = t(e), function(t, r) {
                        return e(t = void 0 === t ? n : t, r);
                    };
                };
            }(r)(t, o) : th(n, r)(t, o);
            this.addReducer(i, s);
        }, t.prototype.removeFeature = function(e) {
            var t = e.key;
            this.removeReducer(t);
        }, t.prototype.addReducer = function(e, t) {
            var n;
            this.reducers = rh({}, this.reducers, ((n = {})[e] = t, n)), this.updateReducers(e);
        }, t.prototype.removeReducer = function(e) {
            var t, n;
            this.reducers = (t = this.reducers, n = e, Object.keys(t).filter(function(e) {
                return e !== n;
            }).reduce(function(e, n) {
                return Object.assign(e, ((r = {})[n] = t[n], r));
                var r;
            }, {})), this.updateReducers(e);
        }, t.prototype.updateReducers = function(e) {
            this.next(this.reducerFactory(this.reducers, this.initialState)), this.dispatcher.next({
                type: "@ngrx/store/update-reducers",
                feature: e
            });
        }, t.prototype.ngOnDestroy = function() {
            this.complete();
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: ih
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Ld ]
                } ]
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Ud ]
                } ]
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ zd ]
                } ]
            } ];
        }, t;
    }(wd), uh = [ sh, {
        provide: oh,
        useExisting: sh
    }, {
        provide: ih,
        useExisting: jd
    } ], ah = function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
        return function(t, n) {
            function r() {
                this.constructor = t;
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
        };
    }(), ch = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return ah(t, e), t.prototype.ngOnDestroy = function() {
            this.complete();
        }, t.decorators = [ {
            type: Dt
        } ], t;
    }(Q), lh = [ ch ], ph = function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
        return function(t, n) {
            function r() {
                this.constructor = t;
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
        };
    }(), fh = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), s = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return s;
    }, dh = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return ph(t, e), t;
    }(S), hh = function(e) {
        function t(t, n, r, o) {
            var i, s, u = e.call(this, o) || this, a = {
                state: o
            }, c = t.pipe((i = Ed, void 0 === s && (s = 0), function(e) {
                return e.lift(new Ad(i, s));
            })).pipe(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return function(t) {
                    var n;
                    "function" == typeof e[e.length - 1] && (n = e.pop());
                    var r = e;
                    return t.lift(new Od(r, n));
                };
            }(n)).pipe(function(e, t) {
                var n = !1;
                return arguments.length >= 2 && (n = !0), function(r) {
                    return r.lift(new Td(e, t, n));
                };
            }(yh, a));
            return u.stateSubscription = c.subscribe(function(e) {
                var t = e.state, n = e.action;
                u.next(t), r.next(n);
            }), u;
        }
        return ph(t, e), t.prototype.ngOnDestroy = function() {
            this.stateSubscription.unsubscribe(), this.complete();
        }, t.INIT = Rd, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: jd
            }, {
                type: oh
            }, {
                type: ch
            }, {
                type: void 0,
                decorators: [ {
                    type: We,
                    args: [ Ld ]
                } ]
            } ];
        }, t;
    }(wd);
    function yh(e, t) {
        void 0 === e && (e = {
            state: void 0
        });
        var n = fh(t, 2), r = n[0];
        return {
            state: (0, n[1])(e.state, r),
            action: r
        };
    }
    var vh = [ hh, {
        provide: dh,
        useExisting: hh
    } ], mh = function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
        return function(t, n) {
            function r() {
                this.constructor = t;
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
            new r());
        };
    }(), gh = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), s = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return s;
    }, wh = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(gh(arguments[t]));
        return e;
    }, _h = function(e) {
        function t(t, n, r) {
            var o = e.call(this) || this;
            return o.actionsObserver = n, o.reducerManager = r, o.source = t, o;
        }
        return mh(t, e), t.prototype.select = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return Ch.call.apply(Ch, wh([ null, e ], t))(this);
        }, t.prototype.lift = function(e) {
            var n = new t(this, this.actionsObserver, this.reducerManager);
            return n.operator = e, n;
        }, t.prototype.dispatch = function(e) {
            this.actionsObserver.next(e);
        }, t.prototype.next = function(e) {
            this.actionsObserver.next(e);
        }, t.prototype.error = function(e) {
            this.actionsObserver.error(e);
        }, t.prototype.complete = function() {
            this.actionsObserver.complete();
        }, t.prototype.addReducer = function(e, t) {
            this.reducerManager.addReducer(e, t);
        }, t.prototype.removeReducer = function(e) {
            this.reducerManager.removeReducer(e);
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: dh
            }, {
                type: jd
            }, {
                type: sh
            } ];
        }, t;
    }(S), bh = [ _h ];
    function Ch(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return function(n) {
            var r;
            if ("string" == typeof e) r = n.pipe((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.length;
                if (0 === n) throw new Error("list of properties cannot be empty.");
                return function(t) {
                    return H(function(e, t) {
                        return function(n) {
                            for (var r = n, o = 0; o < t; o++) {
                                var i = r[e[o]];
                                if (void 0 === i) return;
                                r = i;
                            }
                            return r;
                        };
                    }(e, n))(t);
                };
            }).apply(void 0, wh([ e ], t))); else {
                if ("function" != typeof e) throw new TypeError("Unexpected type '" + typeof e + "' in select operator, expected 'string' or 'function'");
                r = n.pipe(H(e));
            }
            return r.pipe(function(e) {
                return e.lift(new Nd(void 0, void 0));
            });
        };
    }
    var Dh = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), s = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
            o = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return s;
    }, Eh = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Dh(arguments[t]));
        return e;
    };
    function xh(e, t) {
        return e === t;
    }
    function Ah(e, t) {
        void 0 === t && (t = xh);
        var n = null, r = null;
        return {
            memoized: function() {
                if (!n) return r = e.apply(null, arguments), n = arguments, r;
                for (var o = 0; o < arguments.length; o++) if (!t(arguments[o], n[o])) return r = e.apply(null, arguments), 
                n = arguments, r;
                return r;
            },
            reset: function() {
                n = null, r = null;
            }
        };
    }
    function kh() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (n = Ah, void 0 === r && (r = {
            stateFn: Sh
        }), function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var o = e;
            if (Array.isArray(o[0])) {
                var i = Dh(o), s = i[0], u = i.slice(1);
                o = Eh(s, u);
            }
            var a = o.slice(0, o.length - 1), c = o[o.length - 1], l = a.filter(function(e) {
                return e.release && "function" == typeof e.release;
            }), p = n(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return c.apply(null, e);
            }), f = Ah(function(e) {
                return r.stateFn.apply(null, [ e, a, p ]);
            });
            return Object.assign(f.memoized, {
                release: function() {
                    f.reset(), p.reset(), l.forEach(function(e) {
                        return e.release();
                    });
                },
                projector: p.memoized
            });
        }).apply(void 0, Eh(e));
        var n, r;
    }
    function Sh(e, t, n) {
        var r = t.map(function(t) {
            return t(e);
        });
        return n.memoized.apply(null, r);
    }
    var Oh = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    }, Fh = function() {
        function e(e, t, n, r) {}
        return e.decorators = [ {
            type: Et,
            args: [ {} ]
        } ], e.ctorParameters = function() {
            return [ {
                type: jd
            }, {
                type: oh
            }, {
                type: ch
            }, {
                type: _h
            } ];
        }, e;
    }(), Th = function() {
        function e(e, t, n, r) {
            this.features = e, this.featureReducers = t, this.reducerManager = n, e.map(function(e, n) {
                var r = t.shift()[n];
                return Oh({}, e, {
                    reducers: r,
                    initialState: Ih(e.initialState)
                });
            }).forEach(function(e) {
                return n.addFeature(e);
            });
        }
        return e.prototype.ngOnDestroy = function() {
            var e = this;
            this.features.forEach(function(t) {
                return e.reducerManager.removeFeature(t);
            });
        }, e.decorators = [ {
            type: Et,
            args: [ {} ]
        } ], e.ctorParameters = function() {
            return [ {
                type: Array,
                decorators: [ {
                    type: We,
                    args: [ Kd ]
                } ]
            }, {
                type: Array,
                decorators: [ {
                    type: We,
                    args: [ Yd ]
                } ]
            }, {
                type: sh
            }, {
                type: Fh
            } ];
        }, e;
    }(), Ph = function() {
        function e() {}
        return e.forRoot = function(e, t) {
            return void 0 === t && (t = {}), {
                ngModule: Fh,
                providers: [ {
                    provide: Vd,
                    useValue: t.initialState
                }, {
                    provide: Ld,
                    useFactory: Ih,
                    deps: [ Vd ]
                }, {
                    provide: Wd,
                    useValue: e
                }, {
                    provide: Gd,
                    useExisting: e instanceof ce ? e : Wd
                }, {
                    provide: Ud,
                    deps: [ et, Wd, [ new We(Gd) ] ],
                    useFactory: Nh
                }, {
                    provide: Zd,
                    useValue: t.metaReducers ? t.metaReducers : []
                }, {
                    provide: Hd,
                    useValue: t.reducerFactory ? t.reducerFactory : Qd
                }, {
                    provide: zd,
                    deps: [ Hd, Zd ],
                    useFactory: th
                }, Bd, uh, lh, vh, bh ]
            };
        }, e.forFeature = function(e, t, n) {
            return void 0 === n && (n = {}), {
                ngModule: Th,
                providers: [ {
                    provide: Kd,
                    multi: !0,
                    useValue: {
                        key: e,
                        reducerFactory: n.reducerFactory ? n.reducerFactory : Qd,
                        metaReducers: n.metaReducers ? n.metaReducers : [],
                        initialState: n.initialState
                    }
                }, {
                    provide: qd,
                    multi: !0,
                    useValue: t
                }, {
                    provide: $d,
                    multi: !0,
                    useExisting: t instanceof ce ? t : qd
                }, {
                    provide: Yd,
                    multi: !0,
                    deps: [ et, qd, [ new We($d) ] ],
                    useFactory: Mh
                } ]
            };
        }, e.decorators = [ {
            type: Et,
            args: [ {} ]
        } ], e;
    }();
    function Nh(e, t, n) {
        return t instanceof ce ? e.get(t) : t;
    }
    function Mh(e, t, n) {
        return t.map(function(t, n) {
            return t instanceof ce ? e.get(t) : t;
        });
    }
    function Ih(e) {
        return "function" == typeof e ? e() : e;
    }
    var Rh = new Dd(_d);
    function jh(e) {
        return !h(e) && e - parseFloat(e) + 1 >= 0;
    }
    function Bh(e) {
        var t = e.index, n = e.period, r = e.subscriber;
        if (r.next(t), !r.closed) {
            if (-1 === n) return r.complete();
            e.index = t + 1, this.schedule(e, n);
        }
    }
    var Vh = function() {
        function e(e) {
            this.durationSelector = e;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Lh(e, this.durationSelector));
        }, e;
    }(), Lh = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.durationSelector = n, r.hasValue = !1, r.durationSubscription = null, r;
        }
        return o(t, e), t.prototype._next = function(e) {
            try {
                var t = this.durationSelector.call(this, e);
                t && this._tryNext(e, t);
            } catch (e) {
                this.destination.error(e);
            }
        }, t.prototype._complete = function() {
            this.emitValue(), this.destination.complete();
        }, t.prototype._tryNext = function(e, t) {
            var n = this.durationSubscription;
            this.value = e, this.hasValue = !0, n && (n.unsubscribe(), this.remove(n)), (n = L(this, t)) && !n.closed && this.add(this.durationSubscription = n);
        }, t.prototype.notifyNext = function(e, t, n, r, o) {
            this.emitValue();
        }, t.prototype.notifyComplete = function() {
            this.emitValue();
        }, t.prototype.emitValue = function() {
            if (this.hasValue) {
                var t = this.value, n = this.durationSubscription;
                n && (this.durationSubscription = null, n.unsubscribe(), this.remove(n)), this.value = null, 
                this.hasValue = !1, e.prototype._next.call(this, t);
            }
        }, t;
    }(z), zh = function() {
        function e(e, t, n) {
            this.nextOrObserver = e, this.error = t, this.complete = n;
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Hh(e, this.nextOrObserver, this.error, this.complete));
        }, e;
    }(), Hh = function(e) {
        function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            return i._tapNext = k, i._tapError = k, i._tapComplete = k, i._tapError = r || k, 
            i._tapComplete = o || k, c(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, 
            i._tapNext = n.next || k, i._tapError = n.error || k, i._tapComplete = n.complete || k), 
            i;
        }
        return o(t, e), t.prototype._next = function(e) {
            try {
                this._tapNext.call(this._context, e);
            } catch (e) {
                return void this.destination.error(e);
            }
            this.destination.next(e);
        }, t.prototype._error = function(e) {
            try {
                this._tapError.call(this._context, e);
            } catch (e) {
                return void this.destination.error(e);
            }
            this.destination.error(e);
        }, t.prototype._complete = function() {
            try {
                this._tapComplete.call(this._context);
            } catch (e) {
                return void this.destination.error(e);
            }
            return this.destination.complete();
        }, t;
    }(E), Uh = function(e) {
        switch (e.action) {
          case "listen":
            return (t = e).reducer;

          case "execute":
            var t;
            return (t = e).key + "-" + t.uniqueRef;

          default:
            return "";
        }
    }, Wh = function(e) {
        this.action = "unsubscribe", this.key = Uh(e);
    }, Zh = function() {}, Kh = function() {
        function e(e) {
            var t, n = this;
            this.workerService = e, this.subs = {}, this.subWatcher = new Q(), this.workerService.listen().subscribe(function(e) {
                void 0 !== e && void 0 !== n.subs[e.reducer] && (n.subs[e.reducer].next(e.payload), 
                n.subWatcher.next());
            }), this.subWatcher.pipe((t = function() {
                return function(e, t, n) {
                    void 0 === e && (e = 0);
                    var r = -1;
                    return jh(void 0) ? r = Number(void 0) < 1 ? 1 : Number(void 0) : F(void 0) && (n = void 0), 
                    F(n) || (n = Rh), new S(function(t) {
                        var o = jh(e) ? e : +e - n.now();
                        return n.schedule(Bh, o, {
                            index: 0,
                            period: r,
                            subscriber: t
                        });
                    });
                }(1e3);
            }, function(e) {
                return e.lift(new Vh(t));
            })).subscribe(function() {
                Object.keys(n.subs).forEach(function(e) {
                    var t = n.subs[e];
                    1 === t.observers.length && (t.complete(), delete n.subs[e], console.log("Unscribing " + e));
                });
            });
        }
        return e.prototype.select = function(e) {
            var t = new function(e) {
                this.action = "listen", this.reducer = e;
            }(e), n = new Wh(t);
            return this.createInnerSub(t, n);
        }, e.prototype.dispatch = function(e) {
            this.workerService.send({
                action: "reducer",
                payload: e
            });
        }, e.prototype.execute = function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            var o = new function(e, t, n) {
                this.action = "execute", this.key = e, this.uniqueRef = t, this.args = n;
            }(e, t, n), i = new Wh(o);
            return this.createInnerSub(o, i);
        }, e.prototype.createInnerSub = function(e, t) {
            var n = this;
            return void 0 === this.subs[t.key] && (this.subs[t.key] = new wd(void 0), this.workerService.send(e), 
            this.subs[t.key].subscribe(function(e) {}, null, function() {
                n.workerService.send(t);
            })), this.subs[t.key].asObservable();
        }, e.decorators = [ {
            type: Dt,
            args: [ {
                providedIn: "root"
            } ]
        } ], e.ctorParameters = function() {
            return [ {
                type: Zh
            } ];
        }, e.ngInjectableDef = ae({
            factory: function() {
                return new e(vt(Zh));
            },
            token: e,
            providedIn: "root"
        }), e;
    }(), Gh = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.listnerSubject = new wd(void 0), t;
        }
        return o(t, e), t.prototype.start = function(e) {
            var t = this;
            this.worker = new Worker(e), this.worker.addEventListener("message", function(e) {
                t.listnerSubject.next(e.data);
            });
        }, t.prototype.listen = function() {
            return this.listnerSubject.asObservable();
        }, t.prototype.send = function(e) {
            this.worker && this.worker.postMessage(e);
        }, t.prototype.stop = function() {
            this.worker.terminate(), this.worker = void 0;
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [];
        }, t;
    }(Zh), qh = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.listnerSubject = new wd(void 0), t;
        }
        return o(t, e), t.prototype.start = function(e) {
            var t = this;
            this.worker = new SharedWorker(e, "Reducer Worker"), this.worker.port.addEventListener("message", function(e) {
                t.listnerSubject.next(e.data);
            }), this.worker.port.start();
        }, t.prototype.listen = function() {
            return this.listnerSubject.asObservable();
        }, t.prototype.send = function(e) {
            this.worker && this.worker.port.postMessage(e);
        }, t.prototype.stop = function() {
            this.worker.port.close(), this.worker = void 0;
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [];
        }, t;
    }(Zh), $h = new ce("SERVICE_WITH_INDEX"), Yh = function(e) {
        this.key = Uh(e);
    }, Jh = function() {
        var e = this;
        this.methodGetProductByCode = "ProductService.getProductByCode", this.methodGetProducts = "ProductService.getProducts", 
        this.methodGetRecentProducts = "ProductService.getRecentProducts", this.methods = {}, 
        this.methods[this.methodGetProductByCode] = function(t) {
            return e.getProductByCode(t[0]);
        }, this.methods[this.methodGetProducts] = function(t) {
            return e.getProducts();
        }, this.methods[this.methodGetRecentProducts] = function(t) {
            return e.getRecentProducts();
        };
    }, Xh = function(e, t) {
        switch (e) {
          case "AUD":
            return t;

          case "USD":
            return .75 * t;

          case "EUR":
            return .64 * t;

          case "MYR":
            return 3 * t;

          default:
            return 0;
        }
    }, Qh = function() {
        function e() {
            var e = this;
            this.methodIsAuthencated = "UserService.isAuthencated", this.methodGetCurrency = "UserService.getCurrency", 
            this.methods = {}, this.methods[this.methodIsAuthencated] = function(t) {
                return e.isAuthencated();
            }, this.methods[this.methodGetCurrency] = function(t) {
                return e.getCurrency();
            };
        }
        return e.prototype.getAvaliableCurrencys = function() {
            return [ "AUD", "USD", "EUR", "MYR" ];
        }, e;
    }(), ey = function(e) {
        return e.user;
    }, ty = kh(ey, function(e) {
        return !(!e || !e.username);
    }), ny = kh(ey, function(e) {
        return e && e.currency ? e.currency : "AUD";
    }), ry = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.store = t, n;
        }
        return o(t, e), t.prototype.isAuthencated = function() {
            return this.store.pipe(Ch(ty));
        }, t.prototype.getCurrency = function() {
            return this.store.pipe(Ch(ny));
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: _h
            } ];
        }, t;
    }(Qh), oy = function(e) {
        return e.products;
    }, iy = kh(ny, oy, function(e, t) {
        var n = [], r = e || "AUD";
        return t.forEach(function(e) {
            var t = {
                code: e.code,
                name: e.name,
                img: e.img,
                price: Xh(r, e.unitPrice),
                currency: r
            };
            n.push(t);
        }), n;
    }), sy = kh(kh(function(e) {
        return e.user;
    }, function(e) {
        return e && e.viewedProducts ? e.viewedProducts : [];
    }), oy, function(e, t) {
        var n = [], r = {}, o = {};
        t.forEach(function(e) {
            o[e.code] = e;
        });
        for (var i = e.length; i >= 0; i--) {
            var s = e[i], u = o[s];
            if (u && !r[s]) {
                var a = {
                    code: s,
                    name: u.name,
                    img: u.img
                };
                n.push(a), r[s] = !0;
            }
            if (n.length > 3) break;
        }
        return n;
    }), uy = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.store = t, r.http = n, r;
        }
        return o(t, e), t.prototype.loadProducts = function() {
            var e = this;
            this.http.get("products.json").subscribe(function(t) {
                e.store.dispatch(new function(e) {
                    this.payload = e, this.type = "LOAD_PRODUCTS";
                }({
                    products: t
                }));
            });
        }, t.prototype.getProductByCode = function(e) {
            var t, n = this;
            return this.store.pipe(Ch(iy), H(function(t) {
                return t.filter(function(t) {
                    return t.code === e;
                })[0];
            }), (t = function(t) {
                n.store.dispatch(new function(e) {
                    this.payload = e, this.type = "USER_VIEWED_PRODUCT";
                }({
                    productCode: e
                }));
            }, function(e) {
                return e.lift(new zh(t, void 0, void 0));
            }));
        }, t.prototype.getProducts = function() {
            return this.store.pipe(Ch(iy));
        }, t.prototype.getRecentProducts = function() {
            return this.store.pipe(Ch(sy));
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: _h
            }, {
                type: Xf
            } ];
        }, t;
    }(Jh), ay = function() {
        function e(e, t, n) {
            this.productsService = e, this.serviceWithIndex = t, this.store = n, this.ports = [], 
            this.subs = [], this.isSharedWorker = !1, this.listnerSubject = new wd(void 0);
        }
        return e.prototype.start = function() {
            var e = this;
            console.log("start"), this.productsService.loadProducts(), "undefined" != typeof onmessage && void 0 !== typeof onmessage ? onmessage = function(t) {
                if (t.data) {
                    var n = t.data;
                    e.processMessage(n);
                }
            } : console.warn("Not a web Worker"), "undefined" != typeof onconnect && void 0 !== typeof onconnect ? (this.isSharedWorker = !0, 
            onconnect = function(t) {
                console.log("portCont", t.ports.length), e.ports.push(t.ports[0]), t.ports[0].onmessage = function(t) {
                    if (t.data) {
                        var n = t.data;
                        e.processMessage(n);
                    }
                };
            }) : console.warn("Not a shared Worker");
        }, e.prototype.listen = function() {
            return this.listnerSubject.asObservable();
        }, e.prototype.send = function(e) {
            console.log("Sending Message to Client:", e), this.ports && this.ports.length ? this.ports.forEach(function(t) {
                return t.postMessage(e);
            }) : postMessage(e);
        }, e.prototype.stop = function() {
            this.worker.terminate(), this.worker = void 0;
        }, e.prototype.processMessage = function(e) {
            var t, n = this;
            switch (console.log("Received Message from Client:", e), e.action) {
              case "reducer":
                var r = e;
                this.store.dispatch(r.payload);
                break;

              case "listen":
                (t = new Yh(r = e)).subscription = this.store.select(r.reducer).subscribe(function(e) {
                    n.send({
                        reducer: t.key,
                        payload: e
                    });
                });
                break;

              case "execute":
                var o = e;
                t = new Yh(o), this.serviceWithIndex.forEach(function(e) {
                    e.methods[o.key] && (t.subscription = e.methods[o.key](o.args).subscribe(function(e) {
                        n.send({
                            reducer: t.key,
                            payload: e
                        });
                    }));
                });
                break;

              case "unsubscribe":
                if (!this.isSharedWorker) {
                    r = e;
                    for (var i = this.subs.length; i--; ) this.subs[i].key === r.key && (this.subs[i].subscription.unsubscribe(), 
                    this.subs.splice(i, 1));
                }
            }
            t && this.subs.push(t);
        }, e.decorators = [ {
            type: Dt
        } ], e.ctorParameters = function() {
            return [ {
                type: uy
            }, {
                type: Array,
                decorators: [ {
                    type: We,
                    args: [ $h ]
                } ]
            }, {
                type: _h
            } ];
        }, e;
    }(), cy = function() {
        var e = this;
        this.methodGetCartTotal = "CartService.getCartTotal", this.methodGetCartSummary = "CartService.getCartSummary", 
        this.methods = {}, this.methods[this.methodGetCartTotal] = function(t) {
            return e.getCartTotal();
        }, this.methods[this.methodGetCartSummary] = function(t) {
            return e.getCartSummary();
        };
    }, ly = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.stateProxyService = t, n;
        }
        return o(t, e), t.prototype.getCartTotal = function() {
            return this.stateProxyService.execute(this.methodGetCartTotal, "");
        }, t.prototype.getCartSummary = function() {
            return this.stateProxyService.execute(this.methodGetCartSummary, "");
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: Kh
            } ];
        }, t;
    }(cy), py = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.stateProxyService = t, n;
        }
        return o(t, e), t.prototype.getProductByCode = function(e) {
            return this.stateProxyService.execute(this.methodGetProductByCode, e, e);
        }, t.prototype.getProducts = function() {
            return this.stateProxyService.execute(this.methodGetProducts, "");
        }, t.prototype.getRecentProducts = function() {
            return this.stateProxyService.execute(this.methodGetRecentProducts, "");
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: Kh
            } ];
        }, t;
    }(Jh), fy = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.stateProxyService = t, n;
        }
        return o(t, e), t.prototype.isAuthencated = function() {
            return this.stateProxyService.execute(this.methodIsAuthencated, "");
        }, t.prototype.getCurrency = function() {
            return this.stateProxyService.execute(this.methodGetCurrency, "");
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: Kh
            } ];
        }, t;
    }(Qh);
    !function() {
        function e() {}
        e.forRoot = function(t) {
            return {
                ngModule: e,
                providers: [ t ? {
                    provide: Zh,
                    useClass: Gh
                } : {
                    provide: Zh,
                    useClass: qh
                }, Kh, {
                    provide: Jh,
                    useClass: py
                }, {
                    provide: Qh,
                    useClass: fy
                }, {
                    provide: cy,
                    useClass: ly
                } ]
            };
        }, e.decorators = [ {
            type: Et,
            args: [ {
                imports: [],
                declarations: [],
                exports: [],
                providers: []
            } ]
        } ];
    }();
    var dy = {
        cart: function(e, t) {
            switch (void 0 === e && (e = {
                items: []
            }), t.type) {
              case "CART_ADD":
                return function(e, t) {
                    var n = [], r = !1;
                    return e.items.forEach(function(e) {
                        e.productCode === t.productCode ? (r = !0, n.push({
                            productCode: e.productCode,
                            qty: e.qty + t.qty
                        })) : n.push(e);
                    }), r || n.push({
                        productCode: t.productCode,
                        qty: t.qty
                    }), {
                        items: n
                    };
                }(e, t.payload);

              case "CART_REMOVE":
                return function(e, t) {
                    var n = [];
                    return e.items.forEach(function(e) {
                        e.productCode === t.productCode ? n.push({
                            productCode: e.productCode,
                            qty: e.qty - t.qty
                        }) : n.push(e);
                    }), {
                        items: n
                    };
                }(e, t.payload);

              default:
                return e;
            }
        },
        counter: function(e, t) {
            switch (void 0 === e && (e = 0), t.type) {
              case "INCREMENT":
                return e + 1;

              case "DECREMENT":
                return e - 1;

              default:
                return e;
            }
        },
        products: function(e, t) {
            switch (void 0 === e && (e = []), t.type) {
              case "LOAD_PRODUCTS":
                return function(e, t) {
                    return (e || []).concat(t);
                }(e, t.payload.products);

              default:
                return e;
            }
        },
        user: function(e, t) {
            switch (void 0 === e && (e = {
                currency: "AUD"
            }), t.type) {
              case "USER_LOGIN":
                return function(e, n) {
                    return {
                        username: t.payload.username,
                        currency: e.currency,
                        viewedProducts: e.viewedProducts
                    };
                }(e);

              case "USER_LOGOFF":
                return function(e) {
                    return {
                        currency: e.currency,
                        viewedProducts: e.viewedProducts
                    };
                }(e);

              case "USER_SET_CURRENCY":
                return function(e, t) {
                    return {
                        username: e.username,
                        currency: t,
                        viewedProducts: e.viewedProducts
                    };
                }(e, t.payload.currency);

              case "USER_VIEWED_PRODUCT":
                return function(e, t) {
                    var n = (e.viewedProducts || []).slice();
                    return n.push(t), {
                        username: e.username,
                        currency: e.currency,
                        viewedProducts: n
                    };
                }(e, t.payload.productCode);

              default:
                return e;
            }
        }
    }, hy = function(e) {
        return e.cart;
    }, yy = kh(ny, function(e) {
        return e.products;
    }, function(e, t) {
        var n = {}, r = e;
        return t.forEach(function(e) {
            n[e.code] = {
                name: e.name,
                price: Xh(r, e.unitPrice),
                currency: r
            };
        }), n;
    }), vy = kh(yy, hy, function(e, t) {
        var n = 0;
        return t.items.forEach(function(t) {
            n += e[t.productCode].price * t.qty;
        }), n;
    }), my = kh(yy, hy, function(e, t) {
        var n = [];
        return t.items.forEach(function(t) {
            n.push({
                productCode: t.productCode,
                name: e[t.productCode].name,
                qty: t.qty,
                itemPrice: e[t.productCode].price,
                totalPrice: e[t.productCode].price * t.qty,
                currency: e[t.productCode].currency
            });
        }), n;
    }), gy = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.store = t, n;
        }
        return o(t, e), t.prototype.getCartTotal = function() {
            return this.store.pipe(Ch(vy));
        }, t.prototype.getCartSummary = function() {
            return this.store.pipe(Ch(my));
        }, t.decorators = [ {
            type: Dt
        } ], t.ctorParameters = function() {
            return [ {
                type: _h
            } ];
        }, t;
    }(cy), wy = new ce("Registered Reducers"), _y = dy, by = function() {
        function e() {}
        return e.forRoot = function() {
            return {
                ngModule: e,
                providers: [ ay, uy, {
                    provide: $h,
                    useExisting: uy,
                    multi: !0
                }, {
                    provide: $h,
                    useClass: ry,
                    multi: !0
                }, {
                    provide: $h,
                    useClass: gy,
                    multi: !0
                } ]
            };
        }, e.decorators = [ {
            type: Et,
            args: [ {
                imports: [ Ph.forRoot(wy) ],
                declarations: [],
                exports: [],
                providers: [ {
                    provide: wy,
                    useValue: _y
                } ]
            } ]
        } ], e;
    }(), Cy = new mu(ma, [], function(e) {
        return function(e) {
            for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
                var i = e[o];
                i.token === Xt && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, 
                t[Vo(i.token)] = i;
            }
            return {
                factory: null,
                providersByKey: t,
                providers: e,
                modules: n,
                isRoot: r
            };
        }([ vi(512, On, Fn, [ [ 8, [] ], [ 3, On ], Pn ]), vi(5120, Gr, Yr, [ [ 3, Gr ] ]), vi(4608, gc, _c, [ Gr, [ 2, mc ] ]), vi(4608, _n, _n, []), vi(5120, pn, fn, []), vi(5120, Lr, qr, []), vi(5120, zr, $r, []), vi(4608, Tp, Pp, [ Al ]), vi(6144, xo, null, [ Tp ]), vi(4608, Kp, Kp, []), vi(4608, qp, qp, [ Kp ]), vi(5120, Zp, Sf, [ Bn ]), vi(4608, $p, $p, [ Zp, qp ]), vi(4608, rf, rf, [ Zp, qp ]), vi(4608, Cf, Cf, [ $p, Zp, qp, Kp ]), vi(6144, ur, null, [ Cf ]), vi(4608, fd, dd, [ Al, vn, ld ]), vi(4608, hd, hd, [ fd, pd ]), vi(5120, ed, function(e) {
            return [ e ];
        }, [ hd ]), vi(1073742336, El, El, []), vi(1024, Nt, Af, []), vi(1024, cn, function() {
            return [ Of ];
        }, []), vi(512, ln, ln, [ [ 2, cn ] ]), vi(131584, rr, rr, [ Bn, gn, et, Nt, On, ln ]), vi(1073742336, Jr, Jr, [ rr ]), vi(1073742336, Ff, Ff, []), vi(1073742336, md, md, []), vi(1073742336, gd, gd, []), vi(131584, jd, jd, []), vi(2048, ih, null, [ jd ]), vi(256, Vd, void 0, []), vi(1024, Ld, Ih, [ Vd ]), vi(256, Wd, wy, []), vi(2048, Gd, null, [ Wd ]), vi(1024, Ud, Nh, [ et, Wd, Gd ]), vi(256, Hd, Qd, []), vi(256, Zd, [], []), vi(1024, zd, th, [ Hd, Zd ]), vi(131584, sh, sh, [ ih, Ld, Ud, zd ]), vi(2048, oh, null, [ sh ]), vi(131584, ch, ch, []), vi(131584, hh, hh, [ jd, oh, ch, Ld ]), vi(2048, dh, null, [ hh ]), vi(512, _h, _h, [ dh, jd, sh ]), vi(1073742336, Fh, Fh, [ jd, oh, ch, _h ]), vi(1073742336, by, by, []), vi(512, ad, ad, []), vi(2048, ud, null, [ ad ]), vi(512, cd, cd, [ ud ]), vi(2048, jf, null, [ cd ]), vi(512, Rf, yd, [ jf, et ]), vi(512, Xf, Xf, [ Rf ]), vi(512, uy, uy, [ _h, Xf ]), vi(1024, $h, function(e, t, n) {
            return [ e, new ry(t), new gy(n) ];
        }, [ uy, _h, _h ]), vi(512, ay, ay, [ uy, $h, _h ]), vi(1073742336, ma, ma, [ ay ]), vi(256, Vl, null, []), vi(256, Wp, !0, []), vi(256, ld, "XSRF-TOKEN", []), vi(256, pd, "X-XSRF-TOKEN", []), vi(256, wy, dy, []) ]);
    });
    !function() {
        if (Yn) throw new Error("Cannot enable prod mode after platform setup.");
        $n = !1;
    }(), Lp().bootstrapModuleFactory(Cy, {
        ngZone: "noop"
    }).catch(function(e) {
        return console.log(e);
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = n(35), s = r.key, u = r.set;
    r.exp({
        metadata: function(e, t) {
            return function(n, r) {
                u(e, t, (void 0 !== r ? o : i)(n), s(r));
            };
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = r.has, s = r.key;
    r.exp({
        hasOwnMetadata: function(e, t) {
            return i(e, o(t), arguments.length < 3 ? void 0 : s(arguments[2]));
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = n(14), s = r.has, u = r.key, a = function(e, t, n) {
        if (s(e, t, n)) return !0;
        var r = i(t);
        return null !== r && a(e, r, n);
    };
    r.exp({
        hasMetadata: function(e, t) {
            return a(e, o(t), arguments.length < 3 ? void 0 : u(arguments[2]));
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = r.keys, s = r.key;
    r.exp({
        getOwnMetadataKeys: function(e) {
            return i(o(e), arguments.length < 2 ? void 0 : s(arguments[1]));
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = r.get, s = r.key;
    r.exp({
        getOwnMetadata: function(e, t) {
            return i(e, o(t), arguments.length < 3 ? void 0 : s(arguments[2]));
        }
    });
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t), n;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(45), o = n(9);
    e.exports = n(18)("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, {
        add: function(e) {
            return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e);
        }
    }, r);
}, function(e, t, n) {
    var r = n(53), o = n(52), i = n(3), s = n(0), u = n(14), a = i.keys, c = i.key, l = function(e, t) {
        var n = a(e, t), i = u(e);
        if (null === i) return n;
        var s = l(i, t);
        return s.length ? n.length ? o(new r(n.concat(s))) : s : n;
    };
    i.exp({
        getMetadataKeys: function(e) {
            return l(s(e), arguments.length < 2 ? void 0 : c(arguments[1]));
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = n(14), s = r.has, u = r.get, a = r.key, c = function(e, t, n) {
        if (s(e, t, n)) return u(e, t, n);
        var r = i(t);
        return null !== r ? c(e, r, n) : void 0;
    };
    r.exp({
        getMetadata: function(e, t) {
            return c(e, o(t), arguments.length < 3 ? void 0 : a(arguments[2]));
        }
    });
}, function(e, t, n) {
    var r = n(3), o = n(0), i = r.key, s = r.map, u = r.store;
    r.exp({
        deleteMetadata: function(e, t) {
            var n = arguments.length < 3 ? void 0 : i(arguments[2]), r = s(o(t), n, !1);
            if (void 0 === r || !r.delete(e)) return !1;
            if (r.size) return !0;
            var a = u.get(t);
            return a.delete(n), !!a.size || u.delete(t);
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(25), o = n(13).getWeak, i = n(0), s = n(1), u = n(23), a = n(15), c = n(33), l = n(5), p = n(9), f = c(5), d = c(6), h = 0, y = function(e) {
        return e._l || (e._l = new v());
    }, v = function() {
        this.a = [];
    }, m = function(e, t) {
        return f(e.a, function(e) {
            return e[0] === t;
        });
    };
    v.prototype = {
        get: function(e) {
            var t = m(this, e);
            if (t) return t[1];
        },
        has: function(e) {
            return !!m(this, e);
        },
        set: function(e, t) {
            var n = m(this, e);
            n ? n[1] = t : this.a.push([ e, t ]);
        },
        delete: function(e) {
            var t = d(this.a, function(t) {
                return t[0] === e;
            });
            return ~t && this.a.splice(t, 1), !!~t;
        }
    }, e.exports = {
        getConstructor: function(e, t, n, i) {
            var c = e(function(e, r) {
                u(e, c, t, "_i"), e._t = t, e._i = h++, e._l = void 0, void 0 != r && a(r, n, e[i], e);
            });
            return r(c.prototype, {
                delete: function(e) {
                    if (!s(e)) return !1;
                    var n = o(e);
                    return !0 === n ? y(p(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i];
                },
                has: function(e) {
                    if (!s(e)) return !1;
                    var n = o(e);
                    return !0 === n ? y(p(this, t)).has(e) : n && l(n, this._i);
                }
            }), c;
        },
        def: function(e, t, n) {
            var r = o(i(t), !0);
            return !0 === r ? y(e).set(t, n) : r[e._i] = n, e;
        },
        ufstore: y
    };
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols;
}, function(e, t, n) {
    "use strict";
    var r = n(40), o = n(58), i = n(34), s = n(19), u = n(30), a = Object.assign;
    e.exports = !a || n(7)(function() {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e;
        }), 7 != a({}, e)[n] || Object.keys(a({}, t)).join("") != r;
    }) ? function(e, t) {
        for (var n = s(e), a = arguments.length, c = 1, l = o.f, p = i.f; a > c; ) for (var f, d = u(arguments[c++]), h = l ? r(d).concat(l(d)) : r(d), y = h.length, v = 0; y > v; ) p.call(d, f = h[v++]) && (n[f] = d[f]);
        return n;
    } : a;
}, function(e, t, n) {
    var r = n(29);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e);
    };
}, function(e, t, n) {
    var r = n(1), o = n(60), i = n(2)("species");
    e.exports = function(e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0), 
        r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t;
    };
}, function(e, t, n) {
    var r = n(61);
    e.exports = function(e, t) {
        return new (r(e))(t);
    };
}, function(e, t, n) {
    "use strict";
    var r, o = n(33)(0), i = n(11), s = n(13), u = n(59), a = n(57), c = n(1), l = n(7), p = n(9), f = s.getWeak, d = Object.isExtensible, h = a.ufstore, y = {}, v = function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, m = {
        get: function(e) {
            if (c(e)) {
                var t = f(e);
                return !0 === t ? h(p(this, "WeakMap")).get(e) : t ? t[this._i] : void 0;
            }
        },
        set: function(e, t) {
            return a.def(p(this, "WeakMap"), e, t);
        }
    }, g = e.exports = n(18)("WeakMap", v, m, a, !0, !0);
    l(function() {
        return 7 != new g().set((Object.freeze || Object)(y), 7).get(y);
    }) && (u((r = a.getConstructor(v, "WeakMap")).prototype, m), s.NEED = !0, o([ "delete", "has", "get", "set" ], function(e) {
        var t = g.prototype, n = t[e];
        i(t, e, function(t, o) {
            if (c(t) && !d(t)) {
                this._f || (this._f = new r());
                var i = this._f[e](t, o);
                return "set" == e ? this : i;
            }
            return n.call(this, t, o);
        });
    }));
}, function(e, t, n) {
    var r = n(34), o = n(24), i = n(31), s = n(42), u = n(5), a = n(44), c = Object.getOwnPropertyDescriptor;
    t.f = n(6) ? c : function(e, t) {
        if (e = i(e), t = s(t, !0), a) try {
            return c(e, t);
        } catch (e) {}
        if (u(e, t)) return o(!r.f.call(e, t), e[t]);
    };
}, function(e, t, n) {
    var r = n(1), o = n(0), i = function(e, t) {
        if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
            try {
                (r = n(10)(Function.call, n(64).f(Object.prototype, "__proto__").set, 2))(e, []), 
                t = !(e instanceof Array);
            } catch (e) {
                t = !0;
            }
            return function(e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e;
            };
        }({}, !1) : void 0),
        check: i
    };
}, function(e, t, n) {
    var r = n(1), o = n(65).set;
    e.exports = function(e, t, n) {
        var i, s = t.constructor;
        return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && o && o(e, i), 
        e;
    };
}, function(e, t, n) {
    var r = n(2)("iterator"), o = !1;
    try {
        var i = [ 7 ][r]();
        i.return = function() {
            o = !0;
        }, Array.from(i, function() {
            throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [ 7 ], s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                };
            }, i[r] = function() {
                return s;
            }, e(i);
        } catch (e) {}
        return n;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(4), o = n(8), i = n(6), s = n(2)("species");
    e.exports = function(e) {
        var t = r[e];
        i && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    };
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = n(41), o = n(24), i = n(20), s = {};
    n(16)(s, n(2)("iterator"), function() {
        return this;
    }), e.exports = function(e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }), i(e, t + " Iterator");
    };
}, function(e, t, n) {
    "use strict";
    var r = n(37), o = n(21), i = n(11), s = n(16), u = n(22), a = n(70), c = n(20), l = n(14), p = n(2)("iterator"), f = !([].keys && "next" in [].keys()), d = function() {
        return this;
    };
    e.exports = function(e, t, n, h, y, v, m) {
        a(n, t, h);
        var g, w, _, b = function(e) {
            if (!f && e in x) return x[e];
            switch (e) {
              case "keys":
              case "values":
                return function() {
                    return new n(this, e);
                };
            }
            return function() {
                return new n(this, e);
            };
        }, C = t + " Iterator", D = "values" == y, E = !1, x = e.prototype, A = x[p] || x["@@iterator"] || y && x[y], k = A || b(y), S = y ? D ? b("entries") : k : void 0, O = "Array" == t && x.entries || A;
        if (O && (_ = l(O.call(new e()))) !== Object.prototype && _.next && (c(_, C, !0), 
        r || "function" == typeof _[p] || s(_, p, d)), D && A && "values" !== A.name && (E = !0, 
        k = function() {
            return A.call(this);
        }), r && !m || !f && !E && x[p] || s(x, p, k), u[t] = k, u[C] = d, y) if (g = {
            values: D ? k : b("values"),
            keys: v ? k : b("keys"),
            entries: S
        }, m) for (w in g) w in x || i(x, w, g[w]); else o(o.P + o.F * (f || E), t, g);
        return g;
    };
}, function(e, t, n) {
    var r = n(29), o = n(2)("toStringTag"), i = "Arguments" == r(function() {
        return arguments;
    }());
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t];
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s;
    };
}, function(e, t, n) {
    var r = n(72), o = n(2)("iterator"), i = n(22);
    e.exports = n(12).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
}, function(e, t, n) {
    var r = n(22), o = n(2)("iterator"), i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e);
    };
}, function(e, t, n) {
    var r = n(0);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n);
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t;
        }
    };
}, function(e, t, n) {
    var r = n(4).document;
    e.exports = r && r.documentElement;
}, function(e, t, n) {
    var r = n(38), o = Math.max, i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
    };
}, function(e, t, n) {
    var r = n(31), o = n(28), i = n(77);
    e.exports = function(e) {
        return function(t, n, s) {
            var u, a = r(t), c = o(a.length), l = i(s, c);
            if (e && n != n) {
                for (;c > l; ) if ((u = a[l++]) != u) return !0;
            } else for (;c > l; l++) if ((e || l in a) && a[l] === n) return e || l || 0;
            return !e && -1;
        };
    };
}, function(e, t, n) {
    var r = n(5), o = n(31), i = n(78)(!1), s = n(27)("IE_PROTO");
    e.exports = function(e, t) {
        var n, u = o(e), a = 0, c = [];
        for (n in u) n != s && r(u, n) && c.push(n);
        for (;t.length > a; ) r(u, n = t[a++]) && (~i(c, n) || c.push(n));
        return c;
    };
}, function(e, t, n) {
    var r = n(8), o = n(0), i = n(40);
    e.exports = n(6) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, s = i(t), u = s.length, a = 0; u > a; ) r.f(e, n = s[a++], t[n]);
        return e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(45), o = n(9);
    e.exports = n(18)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, {
        get: function(e) {
            var t = r.getEntry(o(this, "Map"), e);
            return t && t.v;
        },
        set: function(e, t) {
            return r.def(o(this, "Map"), 0 === e ? 0 : e, t);
        }
    }, r, !0);
}, function(e, t, n) {
    var r = n(3), o = n(0), i = r.key, s = r.set;
    r.exp({
        defineMetadata: function(e, t, n, r) {
            s(e, t, o(n), i(r));
        }
    });
}, function(e, t, n) {
    n(82), n(56), n(55), n(54), n(51), n(50), n(49), n(48), n(47), e.exports = n(12).Reflect;
} ]);