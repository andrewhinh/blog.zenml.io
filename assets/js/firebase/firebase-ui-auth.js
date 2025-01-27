/*! Terms: https://developers.google.com/terms */
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    ig: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.ig;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da;

    function p(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.$ = b.prototype
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };

    function ka(a) {
        a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var la = ka(this);

    function na(a, b) {
        if (b) {
            var c = la;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }

    function oa() {
        oa = function() {};
        la.Symbol || (la.Symbol = pa)
    }

    function qa(a, b) {
        this.Of = a;
        ja(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    qa.prototype.toString = function() {
        return this.Of
    };
    var pa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new qa("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();

    function ra() {
        oa();
        var a = la.Symbol.iterator;
        a || (a = la.Symbol.iterator = la.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ja(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ta(aa(this))
            }
        });
        ra = function() {}
    }

    function ta(a) {
        ra();
        a = {
            next: a
        };
        a[la.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ua(a, b) {
        ra();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    }
    na("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    });
    na("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    });
    na("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    na("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    na("Promise", function(a) {
        function b(g) {
            this.B = 0;
            this.na = void 0;
            this.Ib = [];
            var h = this.Gd();
            try {
                g(h.resolve, h.reject)
            } catch (m) {
                h.reject(m)
            }
        }

        function c() {
            this.Xa = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.ue = function(g) {
            if (null == this.Xa) {
                this.Xa = [];
                var h = this;
                this.ve(function() {
                    h.Kg()
                })
            }
            this.Xa.push(g)
        };
        var e = la.setTimeout;
        c.prototype.ve = function(g) {
            e(g, 0)
        };
        c.prototype.Kg = function() {
            for (; this.Xa && this.Xa.length;) {
                var g = this.Xa;
                this.Xa = [];
                for (var h = 0; h <
                    g.length; ++h) {
                    var m = g[h];
                    g[h] = null;
                    try {
                        m()
                    } catch (n) {
                        this.mg(n)
                    }
                }
            }
            this.Xa = null
        };
        c.prototype.mg = function(g) {
            this.ve(function() {
                throw g;
            })
        };
        b.prototype.Gd = function() {
            function g(n) {
                return function(l) {
                    m || (m = !0, n.call(h, l))
                }
            }
            var h = this,
                m = !1;
            return {
                resolve: g(this.Dh),
                reject: g(this.ae)
            }
        };
        b.prototype.Dh = function(g) {
            if (g === this) this.ae(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Jh(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Ch(g) : this.Qe(g)
            }
        };
        b.prototype.Ch = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (m) {
                this.ae(m);
                return
            }
            "function" == typeof h ? this.Kh(h, g) : this.Qe(g)
        };
        b.prototype.ae = function(g) {
            this.wf(2, g)
        };
        b.prototype.Qe = function(g) {
            this.wf(1, g)
        };
        b.prototype.wf = function(g, h) {
            if (0 != this.B) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.B);
            this.B = g;
            this.na = h;
            this.Mg()
        };
        b.prototype.Mg = function() {
            if (null != this.Ib) {
                for (var g = 0; g < this.Ib.length; ++g) f.ue(this.Ib[g]);
                this.Ib =
                    null
            }
        };
        var f = new c;
        b.prototype.Jh = function(g) {
            var h = this.Gd();
            g.Dc(h.resolve, h.reject)
        };
        b.prototype.Kh = function(g, h) {
            var m = this.Gd();
            try {
                g.call(h, m.resolve, m.reject)
            } catch (n) {
                m.reject(n)
            }
        };
        b.prototype.then = function(g, h) {
            function m(y, F) {
                return "function" == typeof y ? function(sa) {
                    try {
                        n(y(sa))
                    } catch (Z) {
                        l(Z)
                    }
                } : F
            }
            var n, l, t = new b(function(y, F) {
                n = y;
                l = F
            });
            this.Dc(m(g, n), m(h, l));
            return t
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Dc = function(g, h) {
            function m() {
                switch (n.B) {
                    case 1:
                        g(n.na);
                        break;
                    case 2:
                        h(n.na);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.B);
                }
            }
            var n = this;
            null == this.Ib ? f.ue(m) : this.Ib.push(m)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, m) {
                m(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, m) {
                for (var n = ba(g), l = n.next(); !l.done; l = n.next()) d(l.value).Dc(h, m)
            })
        };
        b.all = function(g) {
            var h = ba(g),
                m = h.next();
            return m.done ? d([]) : new b(function(n, l) {
                function t(sa) {
                    return function(Z) {
                        y[sa] = Z;
                        F--;
                        0 == F && n(y)
                    }
                }
                var y = [],
                    F = 0;
                do y.push(void 0), F++, d(m.value).Dc(t(y.length -
                    1), l), m = h.next(); while (!m.done)
            })
        };
        return b
    });
    var q = this || self,
        va = /^[\w+/_-]+[=]{0,2}$/,
        wa = null;

    function xa() {}

    function ya(a) {
        a.Na = void 0;
        a.Jd = function() {
            return a.Na ? a.Na : a.Na = new a
        }
    }

    function za(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function Aa(a) {
        return "array" == za(a)
    }

    function Ba(a) {
        var b = za(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ca(a) {
        return "function" == za(a)
    }

    function r(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function u(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Da : Ea;
        return u.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function v(a, b) {
        for (var c in b) a[c] = b[c]
    }
    var Ga = Date.now || function() {
        return +new Date
    };

    function w(a, b) {
        a = a.split(".");
        var c = q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }

    function x(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.$ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function Ha(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ha);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    x(Ha, Error);
    Ha.prototype.name = "CustomError";
    var Ia;

    function Ja(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ha.call(this, c + a[d])
    }
    x(Ja, Ha);
    Ja.prototype.name = "AssertionError";

    function Ka(a, b) {
        throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var La = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ma = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };

    function Na(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var Oa = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Pa = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Qa = Array.prototype.some ? function(a,
            b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Ra(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Sa(a, b) {
        return 0 <= La(a, b)
    }

    function Ta(a, b) {
        b = La(a, b);
        var c;
        (c = 0 <= b) && Ua(a, b);
        return c
    }

    function Ua(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }

    function Va(a, b) {
        b = Ra(a, b, void 0);
        0 <= b && Ua(a, b)
    }

    function Wa(a, b) {
        var c = 0;
        Na(a, function(d, e) {
            b.call(void 0, d, e, a) && Ua(a, e) && c++
        })
    }

    function Xa(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Za(a, b, c, d) {
        return Array.prototype.splice.apply(a, $a(arguments, 1))
    }

    function $a(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function ab(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function bb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function cb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function eb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < db.length; f++) c = db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function fb(a, b) {
        this.je = a === gb && b || "";
        this.gg = hb
    }
    fb.prototype.Ma = !0;
    fb.prototype.Aa = function() {
        return this.je
    };
    fb.prototype.toString = function() {
        return "Const{" + this.je + "}"
    };

    function ib(a) {
        if (a instanceof fb && a.constructor === fb && a.gg === hb) return a.je;
        Ka("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
    var hb = {},
        gb = {},
        jb = new fb(gb, "");

    function kb() {
        this.Yd = ""
    }
    kb.prototype.Ma = !0;
    kb.prototype.Aa = function() {
        return this.Yd.toString()
    };
    kb.prototype.toString = function() {
        return "SafeScript{" + this.Yd + "}"
    };
    kb.prototype.pb = function(a) {
        this.Yd = a;
        return this
    };
    (new kb).pb("");

    function lb(a, b) {
        this.$d = a === mb && b || "";
        this.hg = nb
    }
    k = lb.prototype;
    k.Ma = !0;
    k.Aa = function() {
        return this.$d.toString()
    };
    k.Rd = !0;
    k.Kc = function() {
        return 1
    };
    k.toString = function() {
        return "TrustedResourceUrl{" + this.$d + "}"
    };

    function ob(a) {
        if (a instanceof lb && a.constructor === lb && a.hg === nb) return a.$d;
        Ka("expected object of type TrustedResourceUrl, got '" + a + "' of type " + za(a));
        return "type_error:TrustedResourceUrl"
    }
    var nb = {},
        mb = {};
    var pb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function qb(a, b) {
        if (b) a = a.replace(rb, "&amp;").replace(sb, "&lt;").replace(tb, "&gt;").replace(ub, "&quot;").replace(vb, "&#39;").replace(wb, "&#0;");
        else {
            if (!xb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(rb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(tb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ub, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(vb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(wb, "&#0;"))
        }
        return a
    }
    var rb = /&/g,
        sb = /</g,
        tb = />/g,
        ub = /"/g,
        vb = /'/g,
        wb = /\x00/g,
        xb = /[\x00&<>"']/;

    function yb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function zb(a, b) {
        this.Zd = a === Ab && b || "";
        this.fg = Bb
    }
    k = zb.prototype;
    k.Ma = !0;
    k.Aa = function() {
        return this.Zd.toString()
    };
    k.Rd = !0;
    k.Kc = function() {
        return 1
    };
    k.toString = function() {
        return "SafeUrl{" + this.Zd + "}"
    };

    function Cb(a) {
        if (a instanceof zb && a.constructor === zb && a.fg === Bb) return a.Zd;
        Ka("expected object of type SafeUrl, got '" + a + "' of type " + za(a));
        return "type_error:SafeUrl"
    }
    var Db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Eb(a) {
        if (a instanceof zb) return a;
        a = "object" == typeof a && a.Ma ? a.Aa() : String(a);
        Db.test(a) || (a = "about:invalid#zClosurez");
        return new zb(Ab, a)
    }

    function Fb(a) {
        if (a instanceof zb) return a;
        a = "object" == typeof a && a.Ma ? a.Aa() : String(a);
        Db.test(a) || (a = "about:invalid#zClosurez");
        return new zb(Ab, a)
    }
    var Bb = {},
        Ab = {};

    function Gb() {
        this.gd = "";
        this.eg = Hb
    }
    Gb.prototype.Ma = !0;
    var Hb = {};
    Gb.prototype.Aa = function() {
        return this.gd
    };
    Gb.prototype.toString = function() {
        return "SafeStyle{" + this.gd + "}"
    };
    Gb.prototype.pb = function(a) {
        this.gd = a;
        return this
    };
    (new Gb).pb("");

    function Ib() {
        this.fd = "";
        this.dg = Jb
    }
    Ib.prototype.Ma = !0;
    var Jb = {};
    Ib.prototype.Aa = function() {
        return this.fd
    };
    Ib.prototype.toString = function() {
        return "SafeStyleSheet{" + this.fd + "}"
    };
    Ib.prototype.pb = function(a) {
        this.fd = a;
        return this
    };
    (new Ib).pb("");
    var Kb;
    a: {
        var Lb = q.navigator;
        if (Lb) {
            var Nb = Lb.userAgent;
            if (Nb) {
                Kb = Nb;
                break a
            }
        }
        Kb = ""
    }

    function z(a) {
        return -1 != Kb.indexOf(a)
    };

    function Ob() {
        return (z("Chrome") || z("CriOS")) && !z("Edge")
    };

    function Pb() {
        this.ed = "";
        this.cg = Qb;
        this.Je = null
    }
    k = Pb.prototype;
    k.Rd = !0;
    k.Kc = function() {
        return this.Je
    };
    k.Ma = !0;
    k.Aa = function() {
        return this.ed.toString()
    };
    k.toString = function() {
        return "SafeHtml{" + this.ed + "}"
    };

    function Rb(a) {
        if (a instanceof Pb && a.constructor === Pb && a.cg === Qb) return a.ed;
        Ka("expected object of type SafeHtml, got '" + a + "' of type " + za(a));
        return "type_error:SafeHtml"
    }

    function Sb(a) {
        if (a instanceof Pb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Rd && (c = a.Kc());
        return Tb(qb(b && a.Ma ? a.Aa() : String(a)), c)
    }
    var Qb = {};

    function Tb(a, b) {
        return (new Pb).pb(a, b)
    }
    Pb.prototype.pb = function(a, b) {
        this.ed = a;
        this.Je = b;
        return this
    };
    Tb("<!DOCTYPE html>", 0);
    var Ub = Tb("", 0);
    Tb("<br>", 0);

    function Vb(a, b) {
        var c = Wb(a);
        c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || Ka("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Xb(a)))
    }

    function Xb(a) {
        if (r(a)) try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        } else return void 0 === a ? "undefined" : null === a ? "null" : typeof a
    }

    function Wb(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || q;
            if (c.Element && c.Location) return c
        } catch (d) {}
        return null
    };
    var Yb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Rb(Ub);
        return !b.parentElement
    });

    function Zb(a) {
        var b = new lb(mb, ib(jb));
        Vb(a, "HTMLIFrameElement");
        a.src = ob(b).toString()
    }

    function $b(a, b) {
        Vb(a, "HTMLScriptElement");
        a.src = ob(b);
        if (null === wa) b: {
            b = q.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && va.test(b)) {
                wa = b;
                break b
            }
            wa = ""
        }
        b = wa;
        b && a.setAttribute("nonce", b)
    }

    function ac(a, b) {
        var c = Wb(a);
        c && (!a || !(a instanceof c.Location) && a instanceof c.Element) && Ka("Argument is not a Location (or a non-Element mock); got: %s", Xb(a));
        b = b instanceof zb ? b : Fb(b);
        a.assign(Cb(b))
    };

    function bc(a) {
        return a = qb(a, void 0)
    };

    function cc() {
        this.ea = ("undefined" == typeof document ? null : document) || {
            cookie: ""
        }
    }
    k = cc.prototype;
    k.isEnabled = function() {
        return navigator.cookieEnabled
    };
    k.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Di;
            d = c.Eh || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.df
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Ga() + 1E3 * h)).toUTCString();
        this.ea.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.ea.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = pb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = function(a, b, c) {
        var d = this.Za(a);
        this.set(a, "", {
            df: 0,
            path: b,
            domain: c
        });
        return d
    };
    k.Ka = function() {
        return dc(this).keys
    };
    k.qa = function() {
        return dc(this).values
    };
    k.ic = function() {
        return !this.ea.cookie
    };
    k.Za = function(a) {
        return void 0 !== this.get(a)
    };
    k.clear = function() {
        for (var a = dc(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function dc(a) {
        a = (a.ea.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = pb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var ec = new cc;

    function fc(a) {
        fc[" "](a);
        return a
    }
    fc[" "] = xa;

    function gc(a, b) {
        var c = hc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ic = z("Opera"),
        A = z("Trident") || z("MSIE"),
        jc = z("Edge"),
        kc = jc || A,
        lc = z("Gecko") && !(-1 != Kb.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        mc = -1 != Kb.toLowerCase().indexOf("webkit") && !z("Edge"),
        nc = mc && z("Mobile"),
        oc = z("Macintosh");

    function pc() {
        var a = q.document;
        return a ? a.documentMode : void 0
    }
    var qc;
    a: {
        var rc = "",
            sc = function() {
                var a = Kb;
                if (lc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (jc) return /Edge\/([\d\.]+)/.exec(a);
                if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (mc) return /WebKit\/(\S+)/.exec(a);
                if (ic) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();sc && (rc = sc ? sc[1] : "");
        if (A) {
            var tc = pc();
            if (null != tc && tc > parseFloat(rc)) {
                qc = String(tc);
                break a
            }
        }
        qc = rc
    }
    var uc = qc,
        hc = {};

    function vc(a) {
        return gc(a, function() {
            for (var b = 0, c = pb(String(uc)).split("."), d = pb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = yb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || yb(0 == g[2].length, 0 == h[2].length) || yb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var wc;
    if (q.document && A) {
        var xc = pc();
        wc = xc ? xc : parseInt(uc, 10) || void 0
    } else wc = void 0;
    var yc = wc;
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var zc = !A || 9 <= Number(yc),
        Ac = !lc && !A || A && 9 <= Number(yc) || lc && vc("1.9.1");

    function Bc(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    k = Bc.prototype;
    k.clone = function() {
        return new Bc(this.x, this.y)
    };
    k.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.translate = function(a, b) {
        a instanceof Bc ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Cc(a, b) {
        this.width = a;
        this.height = b
    }
    k = Cc.prototype;
    k.clone = function() {
        return new Cc(this.width, this.height)
    };
    k.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.ic = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function Dc(a) {
        return a ? new Ec(Fc(a)) : Ia || (Ia = new Ec)
    }

    function Gc(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Hc(document, a, b)
    }

    function Ic(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Hc(c, a, b)[0] || null
        }
        return a || null
    }

    function Hc(a, b, c) {
        var d;
        a = c || a;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className;
                "function" == typeof g.split && Sa(g.split(/\s+/), b) && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function Jc(a, b) {
        ab(b, function(c, d) {
            c && "object" == typeof c && c.Ma && (c = c.Aa());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Kc.hasOwnProperty(d) ? a.setAttribute(Kc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Kc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Lc(a) {
        return a.scrollingElement ? a.scrollingElement : mc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Mc(a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !Ba(f) || r(f) && 0 < f.nodeType ? e(f) : Ma(Nc(f) ? Ya(f) : f, e)
        }
    }

    function Oc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Pc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Fc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Qc(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else {
            for (var c; c = a.firstChild;) a.removeChild(c);
            a.appendChild(Fc(a).createTextNode(String(b)))
        }
    }

    function Nc(a) {
        if (a && "number" == typeof a.length) {
            if (r(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (Ca(a)) return "function" == typeof a.item
        }
        return !1
    }

    function Rc(a, b) {
        return b ? Sc(a, function(c) {
            return !b || "string" === typeof c.className && Sa(c.className.split(/\s+/), b)
        }) : null
    }

    function Sc(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Ec(a) {
        this.ea = a || q.document || document
    }
    k = Ec.prototype;
    k.Cb = Dc;
    k.fa = function() {};
    k.getElementsByTagName = function(a, b) {
        return (b || this.ea).getElementsByTagName(String(a))
    };
    k.Lc = function(a, b) {
        return Gc(a, b || this.ea)
    };
    k.u = function(a, b) {
        return Ic(a, b || this.ea)
    };
    k.Fd = function(a, b, c) {
        var d = this.ea,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!zc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', bc(g.name), '"');
            if (g.type) {
                f.push(' type="', bc(g.type), '"');
                var h = {};
                eb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = Oc(d, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Jc(f, g));
        2 < e.length && Mc(d, f, e, 2)
    };
    k.createElement = function(a) {
        return Oc(this.ea, a)
    };
    k.createTextNode = function(a) {
        return this.ea.createTextNode(String(a))
    };
    k.getWindow = function() {
        var a = this.ea;
        return a.parentWindow || a.defaultView
    };
    k.appendChild = function(a, b) {
        a.appendChild(b)
    };
    k.append = function(a, b) {
        Mc(Fc(a), a, arguments, 1)
    };
    k.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    k.removeNode = Pc;
    k.Re = function() {
        return Ac && void 0 != (void 0).children ? (void 0).children : Oa((void 0).childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    k.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Tc(a, b) {
        this.gh = 100;
        this.Cg = a;
        this.Bh = b;
        this.ad = 0;
        this.Tc = null
    }
    Tc.prototype.get = function() {
        if (0 < this.ad) {
            this.ad--;
            var a = this.Tc;
            this.Tc = a.next;
            a.next = null
        } else a = this.Cg();
        return a
    };
    Tc.prototype.put = function(a) {
        this.Bh(a);
        this.ad < this.gh && (this.ad++, a.next = this.Tc, this.Tc = a)
    };

    function Uc(a) {
        q.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Vc;

    function Wc() {
        var a = q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = Oc(document, "IFRAME");
            e.style.display = "none";
            Zb(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Rb(Ub));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = u(function(m) {
                    if (("*" == h || m.origin == h) && m.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Ce;
                    c.Ce = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ce: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            q.setTimeout(e, 0)
        }
    };

    function Xc() {
        this.rd = this.Sb = null
    }
    var Zc = new Tc(function() {
        return new Yc
    }, function(a) {
        a.reset()
    });
    Xc.prototype.add = function(a, b) {
        var c = Zc.get();
        c.set(a, b);
        this.rd ? this.rd.next = c : this.Sb = c;
        this.rd = c
    };
    Xc.prototype.remove = function() {
        var a = null;
        this.Sb && (a = this.Sb, this.Sb = this.Sb.next, this.Sb || (this.rd = null), a.next = null);
        return a
    };

    function Yc() {
        this.next = this.scope = this.Id = null
    }
    Yc.prototype.set = function(a, b) {
        this.Id = a;
        this.scope = b;
        this.next = null
    };
    Yc.prototype.reset = function() {
        this.next = this.scope = this.Id = null
    };

    function $c(a, b) {
        ad || bd();
        cd || (ad(), cd = !0);
        dd.add(a, b)
    }
    var ad;

    function bd() {
        if (q.Promise && q.Promise.resolve) {
            var a = q.Promise.resolve(void 0);
            ad = function() {
                a.then(ed)
            }
        } else ad = function() {
            var b = ed;
            !Ca(q.setImmediate) || q.Window && q.Window.prototype && !z("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (Vc || (Vc = Wc()), Vc(b)) : q.setImmediate(b)
        }
    }
    var cd = !1,
        dd = new Xc;

    function ed() {
        for (var a; a = dd.remove();) {
            try {
                a.Id.call(a.scope)
            } catch (b) {
                Uc(b)
            }
            Zc.put(a)
        }
        cd = !1
    };

    function fd(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function B(a) {
        this.B = 0;
        this.na = void 0;
        this.yb = this.Ya = this.G = null;
        this.Nc = this.Hd = !1;
        if (a != xa) try {
            var b = this;
            a.call(void 0, function(c) {
                gd(b, 2, c)
            }, function(c) {
                if (!(c instanceof hd)) try {
                    if (c instanceof Error) throw c;
                    throw Error("Promise rejected.");
                } catch (d) {}
                gd(b, 3, c)
            })
        } catch (c) {
            gd(this, 3, c)
        }
    }

    function id() {
        this.next = this.context = this.Hb = this.nc = this.child = null;
        this.Ub = !1
    }
    id.prototype.reset = function() {
        this.context = this.Hb = this.nc = this.child = null;
        this.Ub = !1
    };
    var jd = new Tc(function() {
        return new id
    }, function(a) {
        a.reset()
    });

    function kd(a, b, c) {
        var d = jd.get();
        d.nc = a;
        d.Hb = b;
        d.context = c;
        return d
    }

    function C(a) {
        if (a instanceof B) return a;
        var b = new B(xa);
        gd(b, 2, a);
        return b
    }

    function ld(a) {
        return new B(function(b, c) {
            c(a)
        })
    }
    B.prototype.then = function(a, b, c) {
        return md(this, Ca(a) ? a : null, Ca(b) ? b : null, c)
    };
    B.prototype.$goog_Thenable = !0;
    k = B.prototype;
    k.Zh = function(a, b) {
        a = kd(a, a, b);
        a.Ub = !0;
        nd(this, a);
        return this
    };
    k.Ob = function(a, b) {
        return md(this, null, a, b)
    };
    k.cancel = function(a) {
        if (0 == this.B) {
            var b = new hd(a);
            $c(function() {
                od(this, b)
            }, this)
        }
    };

    function od(a, b) {
        if (0 == a.B)
            if (a.G) {
                var c = a.G;
                if (c.Ya) {
                    for (var d = 0, e = null, f = null, g = c.Ya; g && (g.Ub || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.B && 1 == d ? od(c, b) : (f ? (d = f, d.next == c.yb && (c.yb = d), d.next = d.next.next) : pd(c), qd(c, e, 3, b)))
                }
                a.G = null
            } else gd(a, 3, b)
    }

    function nd(a, b) {
        a.Ya || 2 != a.B && 3 != a.B || rd(a);
        a.yb ? a.yb.next = b : a.Ya = b;
        a.yb = b
    }

    function md(a, b, c, d) {
        var e = kd(null, null, null);
        e.child = new B(function(f, g) {
            e.nc = b ? function(h) {
                try {
                    var m = b.call(d, h);
                    f(m)
                } catch (n) {
                    g(n)
                }
            } : f;
            e.Hb = c ? function(h) {
                try {
                    var m = c.call(d, h);
                    void 0 === m && h instanceof hd ? g(h) : f(m)
                } catch (n) {
                    g(n)
                }
            } : g
        });
        e.child.G = a;
        nd(a, e);
        return e.child
    }
    k.bi = function(a) {
        this.B = 0;
        gd(this, 2, a)
    };
    k.ci = function(a) {
        this.B = 0;
        gd(this, 3, a)
    };

    function gd(a, b, c) {
        if (0 == a.B) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.B = 1;
            a: {
                var d = c,
                    e = a.bi,
                    f = a.ci;
                if (d instanceof B) {
                    nd(d, kd(e || xa, f || null, a));
                    var g = !0
                } else if (fd(d)) d.then(e, f, a),
                g = !0;
                else {
                    if (r(d)) try {
                        var h = d.then;
                        if (Ca(h)) {
                            sd(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (m) {
                        f.call(a, m);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.na = c, a.B = b, a.G = null, rd(a), 3 != b || c instanceof hd || td(a, c))
        }
    }

    function sd(a, b, c, d, e) {
        function f(m) {
            h || (h = !0, d.call(e, m))
        }

        function g(m) {
            h || (h = !0, c.call(e, m))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (m) {
            f(m)
        }
    }

    function rd(a) {
        a.Hd || (a.Hd = !0, $c(a.Lg, a))
    }

    function pd(a) {
        var b = null;
        a.Ya && (b = a.Ya, a.Ya = b.next, b.next = null);
        a.Ya || (a.yb = null);
        return b
    }
    k.Lg = function() {
        for (var a; a = pd(this);) qd(this, a, this.B, this.na);
        this.Hd = !1
    };

    function qd(a, b, c, d) {
        if (3 == c && b.Hb && !b.Ub)
            for (; a && a.Nc; a = a.G) a.Nc = !1;
        if (b.child) b.child.G = null, ud(b, c, d);
        else try {
            b.Ub ? b.nc.call(b.context) : ud(b, c, d)
        } catch (e) {
            vd.call(null, e)
        }
        jd.put(b)
    }

    function ud(a, b, c) {
        2 == b ? a.nc.call(a.context, c) : a.Hb && a.Hb.call(a.context, c)
    }

    function td(a, b) {
        a.Nc = !0;
        $c(function() {
            a.Nc && vd.call(null, b)
        })
    }
    var vd = Uc;

    function hd(a) {
        Ha.call(this, a)
    }
    x(hd, Ha);
    hd.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function wd(a) {
        var b = xd;
        this.nd = [];
        this.ff = b;
        this.Ge = a || null;
        this.dc = this.Bb = !1;
        this.na = void 0;
        this.ie = this.og = this.yd = !1;
        this.pd = 0;
        this.G = null;
        this.zd = 0
    }
    wd.prototype.cancel = function(a) {
        if (this.Bb) this.na instanceof wd && this.na.cancel();
        else {
            if (this.G) {
                var b = this.G;
                delete this.G;
                a ? b.cancel(a) : (b.zd--, 0 >= b.zd && b.cancel())
            }
            this.ff ? this.ff.call(this.Ge, this) : this.ie = !0;
            this.Bb || (a = new yd(this), zd(this), Ad(this, !1, a))
        }
    };
    wd.prototype.Ee = function(a, b) {
        this.yd = !1;
        Ad(this, a, b)
    };

    function Ad(a, b, c) {
        a.Bb = !0;
        a.na = c;
        a.dc = !b;
        Bd(a)
    }

    function zd(a) {
        if (a.Bb) {
            if (!a.ie) throw new Cd(a);
            a.ie = !1
        }
    }
    wd.prototype.callback = function(a) {
        zd(this);
        Ad(this, !0, a)
    };

    function Dd(a, b, c) {
        a.nd.push([b, c, void 0]);
        a.Bb && Bd(a)
    }
    wd.prototype.then = function(a, b, c) {
        var d, e, f = new B(function(g, h) {
            d = g;
            e = h
        });
        Dd(this, d, function(g) {
            g instanceof yd ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    wd.prototype.$goog_Thenable = !0;

    function Ed(a) {
        return Qa(a.nd, function(b) {
            return Ca(b[1])
        })
    }

    function Bd(a) {
        if (a.pd && a.Bb && Ed(a)) {
            var b = a.pd,
                c = Fd[b];
            c && (q.clearTimeout(c.nb), delete Fd[b]);
            a.pd = 0
        }
        a.G && (a.G.zd--, delete a.G);
        b = a.na;
        for (var d = c = !1; a.nd.length && !a.yd;) {
            var e = a.nd.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.dc ? g : f) try {
                var h = f.call(e || a.Ge, b);
                void 0 !== h && (a.dc = a.dc && (h == b || h instanceof Error), a.na = b = h);
                if (fd(b) || "function" === typeof q.Promise && b instanceof q.Promise) d = !0, a.yd = !0
            } catch (m) {
                b = m, a.dc = !0, Ed(a) || (c = !0)
            }
        }
        a.na = b;
        d && (h = u(a.Ee, a, !0), d = u(a.Ee, a, !1), b instanceof wd ? (Dd(b, h, d), b.og = !0) : b.then(h, d));
        c && (b = new Gd(b), Fd[b.nb] = b, a.pd = b.nb)
    }

    function Cd() {
        Ha.call(this)
    }
    x(Cd, Ha);
    Cd.prototype.message = "Deferred has already fired";
    Cd.prototype.name = "AlreadyCalledError";

    function yd() {
        Ha.call(this)
    }
    x(yd, Ha);
    yd.prototype.message = "Deferred was canceled";
    yd.prototype.name = "CanceledError";

    function Gd(a) {
        this.nb = q.setTimeout(u(this.$h, this), 0);
        this.Jg = a
    }
    Gd.prototype.$h = function() {
        delete Fd[this.nb];
        throw this.Jg;
    };
    var Fd = {};

    function Hd(a) {
        var b = {},
            c = b.document || document,
            d = ob(a).toString(),
            e = Oc(document, "SCRIPT"),
            f = {
                uf: e,
                Ef: void 0
            },
            g = new wd(f),
            h = null,
            m = null != b.timeout ? b.timeout : 5E3;
        0 < m && (h = window.setTimeout(function() {
            Id(e, !0);
            var n = new Jd(1, "Timeout reached for loading script " + d);
            zd(g);
            Ad(g, !1, n)
        }, m), f.Ef = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Id(e, b.vi || !1, h), g.callback(null))
        };
        e.onerror = function() {
            Id(e, !0, h);
            var n = new Jd(0, "Error while loading script " +
                d);
            zd(g);
            Ad(g, !1, n)
        };
        f = b.attributes || {};
        eb(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        Jc(e, f);
        $b(e, a);
        Kd(c).appendChild(e);
        return g
    }

    function Kd(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function xd() {
        if (this && this.uf) {
            var a = this.uf;
            a && "SCRIPT" == a.tagName && Id(a, !0, this.Ef)
        }
    }

    function Id(a, b, c) {
        null != c && q.clearTimeout(c);
        a.onload = xa;
        a.onerror = xa;
        a.onreadystatechange = xa;
        b && window.setTimeout(function() {
            Pc(a)
        }, 0)
    }

    function Jd(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ha.call(this, c);
        this.code = a
    }
    x(Jd, Ha);

    function Ld() {}
    ya(Ld);
    Ld.prototype.oh = 0;
    Ld.prototype.Yg = "";

    function Md() {
        this.Ab = this.Ab;
        this.sb = this.sb
    }
    Md.prototype.Ab = !1;
    Md.prototype.isDisposed = function() {
        return this.Ab
    };
    Md.prototype.i = function() {
        this.Ab || (this.Ab = !0, this.h())
    };

    function Nd(a, b) {
        a.Ab ? b() : (a.sb || (a.sb = []), a.sb.push(b))
    }
    Md.prototype.h = function() {
        if (this.sb)
            for (; this.sb.length;) this.sb.shift()()
    };

    function Od(a) {
        a && "function" == typeof a.i && a.i()
    };
    var Pd = Object.freeze || function(a) {
        return a
    };
    var Qd = !A || 9 <= Number(yc),
        Rd = A && !vc("9"),
        Sd = function() {
            if (!q.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                q.addEventListener("test", xa, b), q.removeEventListener("test", xa, b)
            } catch (c) {}
            return a
        }();

    function Td(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.tb = !1
    }
    Td.prototype.stopPropagation = function() {
        this.tb = !0
    };
    Td.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function Ud(a, b) {
        Td.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ja = null;
        a && this.init(a, b)
    }
    x(Ud, Td);
    var Vd = Pd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    Ud.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (lc) {
                a: {
                    try {
                        fc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = mc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = mc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Vd[a.pointerType] || "";
        this.state = a.state;
        this.Ja = a;
        a.defaultPrevented && this.preventDefault()
    };
    Ud.prototype.stopPropagation = function() {
        Ud.$.stopPropagation.call(this);
        this.Ja.stopPropagation ? this.Ja.stopPropagation() : this.Ja.cancelBubble = !0
    };
    Ud.prototype.preventDefault = function() {
        Ud.$.preventDefault.call(this);
        var a = this.Ja;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Rd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Wd = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Xd(a) {
        return !(!a || !a[Wd])
    }
    var Yd = 0;

    function Zd(a, b, c, d, e) {
        this.listener = a;
        this.jd = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Sc = e;
        this.key = ++Yd;
        this.Kb = this.Cc = !1
    }

    function $d(a) {
        a.Kb = !0;
        a.listener = null;
        a.jd = null;
        a.src = null;
        a.Sc = null
    };

    function ae(a) {
        this.src = a;
        this.ba = {};
        this.wc = 0
    }
    k = ae.prototype;
    k.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.ba[f];
        a || (a = this.ba[f] = [], this.wc++);
        var g = be(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Cc = !1)) : (b = new Zd(b, this.src, f, !!d, e), b.Cc = c, a.push(b));
        return b
    };
    k.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.ba)) return !1;
        var e = this.ba[a];
        b = be(e, b, c, d);
        return -1 < b ? ($d(e[b]), Ua(e, b), 0 == e.length && (delete this.ba[a], this.wc--), !0) : !1
    };

    function ce(a, b) {
        var c = b.type;
        c in a.ba && Ta(a.ba[c], b) && ($d(b), 0 == a.ba[c].length && (delete a.ba[c], a.wc--))
    }
    k.kd = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.ba)
            if (!a || c == a) {
                for (var d = this.ba[c], e = 0; e < d.length; e++) ++b, $d(d[e]);
                delete this.ba[c];
                this.wc--
            }
    };
    k.ac = function(a, b, c, d) {
        a = this.ba[a.toString()];
        var e = -1;
        a && (e = be(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    k.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return bb(this.ba, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };

    function be(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Kb && f.listener == b && f.capture == !!c && f.Sc == d) return e
        }
        return -1
    };
    var de = "closure_lm_" + (1E6 * Math.random() | 0),
        ee = {},
        fe = 0;

    function ge(a, b, c, d, e) {
        if (d && d.once) return he(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) ge(a, b[f], c, d, e);
            return null
        }
        c = ie(c);
        return Xd(a) ? a.listen(b, c, r(d) ? !!d.capture : !!d, e) : je(a, b, c, !1, d, e)
    }

    function je(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = r(e) ? !!e.capture : !!e,
            h = ke(a);
        h || (a[de] = h = new ae(a));
        c = h.add(b, c, d, g, f);
        if (c.jd) return c;
        d = le();
        c.jd = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Sd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(me(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        fe++;
        return c
    }

    function le() {
        var a = ne,
            b = Qd ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function he(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) he(a, b[f], c, d, e);
            return null
        }
        c = ie(c);
        return Xd(a) ? a.bf(b, c, r(d) ? !!d.capture : !!d, e) : je(a, b, c, !0, d, e)
    }

    function oe(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) oe(a, b[f], c, d, e);
        else d = r(d) ? !!d.capture : !!d, c = ie(c), Xd(a) ? a.le(b, c, d, e) : a && (a = ke(a)) && (b = a.ac(b, c, d, e)) && pe(b)
    }

    function pe(a) {
        if ("number" !== typeof a && a && !a.Kb) {
            var b = a.src;
            if (Xd(b)) ce(b.Ia, a);
            else {
                var c = a.type,
                    d = a.jd;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(me(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                fe--;
                (c = ke(b)) ? (ce(c, a), 0 == c.wc && (c.src = null, b[de] = null)) : $d(a)
            }
        }
    }

    function me(a) {
        return a in ee ? ee[a] : ee[a] = "on" + a
    }

    function qe(a, b, c, d) {
        var e = !0;
        if (a = ke(a))
            if (b = a.ba[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Kb && (f = re(f, d), e = e && !1 !== f)
                }
            return e
    }

    function re(a, b) {
        var c = a.listener,
            d = a.Sc || a.src;
        a.Cc && pe(a);
        return c.call(d, b)
    }

    function ne(a, b) {
        if (a.Kb) return !0;
        if (!Qd) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = q, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    }
                b = c
            }
            d = b;
            b = new Ud(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.tb && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = qe(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.tb && e < d.length; e++) b.currentTarget =
                    d[e],
                f = qe(d[e], a, !1, b),
                c = c && f
            }
            return c
        }
        return re(a, new Ud(b, this))
    }

    function ke(a) {
        a = a[de];
        return a instanceof ae ? a : null
    }
    var se = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function ie(a) {
        if (Ca(a)) return a;
        a[se] || (a[se] = function(b) {
            return a.handleEvent(b)
        });
        return a[se]
    };

    function te(a) {
        Md.call(this);
        this.Qd = a;
        this.J = {}
    }
    x(te, Md);
    var ue = [];
    k = te.prototype;
    k.listen = function(a, b, c, d) {
        Array.isArray(b) || (b && (ue[0] = b.toString()), b = ue);
        for (var e = 0; e < b.length; e++) {
            var f = ge(a, b[e], c || this.handleEvent, d || !1, this.Qd || this);
            if (!f) break;
            this.J[f.key] = f
        }
        return this
    };
    k.bf = function(a, b, c, d) {
        return ve(this, a, b, c, d)
    };

    function ve(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) ve(a, b, c[g], d, e, f);
        else {
            b = he(b, c, d || a.handleEvent, e, f || a.Qd || a);
            if (!b) return a;
            a.J[b.key] = b
        }
        return a
    }
    k.le = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.le(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = r(d) ? !!d.capture : !!d, e = e || this.Qd || this, c = ie(c), d = !!d, b = Xd(a) ? a.ac(b, c, d, e) : a ? (a = ke(a)) ? a.ac(b, c, d, e) : null : null, b && (pe(b), delete this.J[b.key])
    };
    k.kd = function() {
        ab(this.J, function(a, b) {
            this.J.hasOwnProperty(b) && pe(a)
        }, this);
        this.J = {}
    };
    k.h = function() {
        te.$.h.call(this);
        this.kd()
    };
    k.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function we() {
        Md.call(this);
        this.Ia = new ae(this);
        this.jg = this;
        this.dd = null
    }
    x(we, Md);
    we.prototype[Wd] = !0;
    k = we.prototype;
    k.ge = function(a) {
        this.dd = a
    };
    k.addEventListener = function(a, b, c, d) {
        ge(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        oe(this, a, b, c, d)
    };
    k.dispatchEvent = function(a) {
        var b, c = this.dd;
        if (c)
            for (b = []; c; c = c.dd) b.push(c);
        c = this.jg;
        var d = a.type || a;
        if ("string" === typeof a) a = new Td(a, c);
        else if (a instanceof Td) a.target = a.target || c;
        else {
            var e = a;
            a = new Td(d, c);
            eb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.tb && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = xe(g, d, !0, a) && e
            }
        a.tb || (g = a.currentTarget = c, e = xe(g, d, !0, a) && e, a.tb || (e = xe(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.tb && f < b.length; f++) g = a.currentTarget = b[f], e = xe(g, d, !1, a) && e;
        return e
    };
    k.h = function() {
        we.$.h.call(this);
        this.Ia && this.Ia.kd(void 0);
        this.dd = null
    };
    k.listen = function(a, b, c, d) {
        return this.Ia.add(String(a), b, !1, c, d)
    };
    k.bf = function(a, b, c, d) {
        return this.Ia.add(String(a), b, !0, c, d)
    };
    k.le = function(a, b, c, d) {
        this.Ia.remove(String(a), b, c, d)
    };

    function xe(a, b, c, d) {
        b = a.Ia.ba[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Kb && g.capture == c) {
                var h = g.listener,
                    m = g.Sc || g.src;
                g.Cc && ce(a.Ia, g);
                e = !1 !== h.call(m, d) && e
            }
        }
        return e && !d.defaultPrevented
    }
    k.ac = function(a, b, c, d) {
        return this.Ia.ac(String(a), b, c, d)
    };
    k.hasListener = function(a, b) {
        return this.Ia.hasListener(void 0 !== a ? String(a) : void 0, b)
    };

    function ye(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = ye.prototype;
    k.clone = function() {
        return new ye(this.top, this.right, this.bottom, this.left)
    };
    k.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    k.contains = function(a) {
        return this && a ? a instanceof ye ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.expand = function(a, b, c, d) {
        r(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    k.translate = function(a, b) {
        a instanceof Bc ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    k.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function ze(a, b) {
        var c = Fc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Ae(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Be(a, b) {
        b = b || Lc(document);
        var c = b || Lc(document);
        var d = Ce(a),
            e = Ce(c);
        if (!A || 9 <= Number(yc)) {
            g = ze(c, "borderLeftWidth");
            var f = ze(c, "borderRightWidth");
            h = ze(c, "borderTopWidth");
            m = ze(c, "borderBottomWidth");
            f = new ye(parseFloat(h), parseFloat(f), parseFloat(m), parseFloat(g))
        } else {
            var g = De(c, "borderLeft");
            f = De(c, "borderRight");
            var h = De(c, "borderTop"),
                m = De(c, "borderBottom");
            f = new ye(h, f, m, g)
        }
        c == Lc(document) ? (g = d.x - c.scrollLeft, d = d.y - c.scrollTop, !A || 10 <= Number(yc) || (g += f.left, d += f.top)) : (g = d.x - e.x - f.left,
            d = d.y - e.y - f.top);
        e = a.offsetWidth;
        f = a.offsetHeight;
        h = mc && !e && !f;
        (void 0 === e || h) && a.getBoundingClientRect ? (a = Ae(a), a = new Cc(a.right - a.left, a.bottom - a.top)) : a = new Cc(e, f);
        e = c.clientHeight - a.height;
        f = c.scrollLeft;
        h = c.scrollTop;
        f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        h += Math.min(d, Math.max(d - e, 0));
        c = new Bc(f, h);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }

    function Ce(a) {
        var b = Fc(a),
            c = new Bc(0, 0);
        var d = b ? Fc(b) : document;
        d = !A || 9 <= Number(yc) || "CSS1Compat" == Dc(d).ea.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ae(a);
        d = Dc(b).ea;
        b = Lc(d);
        d = d.parentWindow || d.defaultView;
        b = A && vc("10") && d.pageYOffset != b.scrollTop ? new Bc(b.scrollLeft, b.scrollTop) : new Bc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    var Ee = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function De(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        if (c in Ee) a = Ee[c];
        else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
        else {
            b = a.style.left;
            var d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = b;
            a.runtimeStyle.left = d;
            a = +c
        }
        return a
    };

    function Fe(a) {
        we.call(this);
        this.Xb = a || Dc();
        this.nb = null;
        this.ob = !1;
        this.f = null;
        this.bb = void 0;
        this.Fc = this.Ha = this.G = null;
        this.fi = !1
    }
    x(Fe, we);
    k = Fe.prototype;
    k.Xg = Ld.Jd();
    k.getId = function() {
        var a;
        (a = this.nb) || (a = this.Xg, a = this.nb = a.Yg + ":" + (a.oh++).toString(36));
        return a
    };
    k.fa = function() {
        return this.f
    };
    k.Lc = function(a) {
        return this.f ? this.Xb.Lc(a, this.f) : []
    };
    k.u = function(a) {
        return this.f ? this.Xb.u(a, this.f) : null
    };

    function Ge(a) {
        a.bb || (a.bb = new te(a));
        return a.bb
    }
    k.getParent = function() {
        return this.G
    };
    k.ge = function(a) {
        if (this.G && this.G != a) throw Error("Method not supported");
        Fe.$.ge.call(this, a)
    };
    k.Cb = function() {
        return this.Xb
    };
    k.Fd = function() {
        this.f = this.Xb.createElement("DIV")
    };
    k.render = function(a) {
        if (this.ob) throw Error("Component already rendered");
        this.f || this.Fd();
        a ? a.insertBefore(this.f, null) : this.Xb.ea.body.appendChild(this.f);
        this.G && !this.G.ob || this.l()
    };
    k.l = function() {
        this.ob = !0;
        He(this, function(a) {
            !a.ob && a.fa() && a.l()
        })
    };
    k.$b = function() {
        He(this, function(a) {
            a.ob && a.$b()
        });
        this.bb && this.bb.kd();
        this.ob = !1
    };
    k.h = function() {
        this.ob && this.$b();
        this.bb && (this.bb.i(), delete this.bb);
        He(this, function(a) {
            a.i()
        });
        !this.fi && this.f && Pc(this.f);
        this.G = this.f = this.Fc = this.Ha = null;
        Fe.$.h.call(this)
    };
    k.hasChildren = function() {
        return !!this.Ha && 0 != this.Ha.length
    };

    function He(a, b) {
        a.Ha && Ma(a.Ha, b, void 0)
    }
    k.removeChild = function(a, b) {
        if (a) {
            var c = "string" === typeof a ? a : a.getId();
            this.Fc && c ? (a = this.Fc, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.Fc;
                c in d && delete d[c];
                Ta(this.Ha, a);
                b && (a.$b(), a.f && Pc(a.f));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.G = null;
                Fe.$.ge.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Ie = "StopIteration" in q ? q.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Je() {}
    Je.prototype.next = function() {
        throw Ie;
    };
    Je.prototype.gb = function() {
        return this
    };

    function Ke(a) {
        if (a instanceof Je) return a;
        if ("function" == typeof a.gb) return a.gb(!1);
        if (Ba(a)) {
            var b = 0,
                c = new Je;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Ie;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Le(a, b) {
        if (Ba(a)) try {
            Ma(a, b, void 0)
        } catch (c) {
            if (c !== Ie) throw c;
        } else {
            a = Ke(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Ie) throw c;
            }
        }
    }

    function Me(a) {
        if (Ba(a)) return Ya(a);
        a = Ke(a);
        var b = [];
        Le(a, function(c) {
            b.push(c)
        });
        return b
    };

    function Ne(a, b) {
        this.Ca = {};
        this.J = [];
        this.Rb = this.L = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    }
    k = Ne.prototype;
    k.qa = function() {
        Oe(this);
        for (var a = [], b = 0; b < this.J.length; b++) a.push(this.Ca[this.J[b]]);
        return a
    };
    k.Ka = function() {
        Oe(this);
        return this.J.concat()
    };
    k.Za = function(a) {
        return Pe(this.Ca, a)
    };
    k.ic = function() {
        return 0 == this.L
    };
    k.clear = function() {
        this.Ca = {};
        this.Rb = this.L = this.J.length = 0
    };
    k.remove = function(a) {
        return Pe(this.Ca, a) ? (delete this.Ca[a], this.L--, this.Rb++, this.J.length > 2 * this.L && Oe(this), !0) : !1
    };

    function Oe(a) {
        if (a.L != a.J.length) {
            for (var b = 0, c = 0; b < a.J.length;) {
                var d = a.J[b];
                Pe(a.Ca, d) && (a.J[c++] = d);
                b++
            }
            a.J.length = c
        }
        if (a.L != a.J.length) {
            var e = {};
            for (c = b = 0; b < a.J.length;) d = a.J[b], Pe(e, d) || (a.J[c++] = d, e[d] = 1), b++;
            a.J.length = c
        }
    }
    k.get = function(a, b) {
        return Pe(this.Ca, a) ? this.Ca[a] : b
    };
    k.set = function(a, b) {
        Pe(this.Ca, a) || (this.L++, this.J.push(a), this.Rb++);
        this.Ca[a] = b
    };
    k.addAll = function(a) {
        if (a instanceof Ne)
            for (var b = a.Ka(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    k.forEach = function(a, b) {
        for (var c = this.Ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new Ne(this)
    };
    k.gb = function(a) {
        Oe(this);
        var b = 0,
            c = this.Rb,
            d = this,
            e = new Je;
        e.next = function() {
            if (c != d.Rb) throw Error("The map has changed since the iterator was created");
            if (b >= d.J.length) throw Ie;
            var f = d.J[b++];
            return a ? f : d.Ca[f]
        };
        return e
    };

    function Pe(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Qe(a) {
        if (a.qa && "function" == typeof a.qa) return a.qa();
        if ("string" === typeof a) return a.split("");
        if (Ba(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Re(a) {
        if (a.Ka && "function" == typeof a.Ka) return a.Ka();
        if (!a.qa || "function" != typeof a.qa) {
            if (Ba(a) || "string" === typeof a) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            b = [];
            c = 0;
            for (var d in a) b[c++] = d;
            return b
        }
    }

    function Se(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (Ba(a) || "string" === typeof a) Ma(a, b, c);
        else
            for (var d = Re(a), e = Qe(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    };
    var Te = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ue(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }

    function Ve(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var We = /#|$/;

    function Xe(a, b) {
        var c = a.search(We),
            d = Ve(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ye = /[?&]($|#)/;

    function Ze(a, b) {
        this.pa = this.wb = this.fb = "";
        this.Jb = null;
        this.jb = this.la = "";
        this.ra = this.fh = !1;
        if (a instanceof Ze) {
            this.ra = void 0 !== b ? b : a.ra;
            $e(this, a.fb);
            var c = a.wb;
            af(this);
            this.wb = c;
            c = a.pa;
            af(this);
            this.pa = c;
            bf(this, a.Jb);
            c = a.la;
            af(this);
            this.la = c;
            df(this, a.V.clone());
            a = a.jb;
            af(this);
            this.jb = a
        } else a && (c = String(a).match(Te)) ? (this.ra = !!b, $e(this, c[1] || "", !0), a = c[2] || "", af(this), this.wb = ef(a), a = c[3] || "", af(this), this.pa = ef(a, !0), bf(this, c[4]), a = c[5] || "", af(this), this.la = ef(a, !0), df(this, c[6] || "", !0), a = c[7] || "", af(this), this.jb = ef(a)) : (this.ra = !!b, this.V = new ff(null, this.ra))
    }
    k = Ze.prototype;
    k.toString = function() {
        var a = [],
            b = this.fb;
        b && a.push(gf(b, hf, !0), ":");
        var c = this.pa;
        if (c || "file" == b) a.push("//"), (b = this.wb) && a.push(gf(b, hf, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Jb, null != c && a.push(":", String(c));
        if (c = this.la) this.pa && "/" != c.charAt(0) && a.push("/"), a.push(gf(c, "/" == c.charAt(0) ? jf : kf, !0));
        (c = this.V.toString()) && a.push("?", c);
        (c = this.jb) && a.push("#", gf(c, lf));
        return a.join("")
    };
    k.resolve = function(a) {
        var b = this.clone(),
            c = !!a.fb;
        c ? $e(b, a.fb) : c = !!a.wb;
        if (c) {
            var d = a.wb;
            af(b);
            b.wb = d
        } else c = !!a.pa;
        c ? (d = a.pa, af(b), b.pa = d) : c = null != a.Jb;
        d = a.la;
        if (c) bf(b, a.Jb);
        else if (c = !!a.la) {
            if ("/" != d.charAt(0))
                if (this.pa && !this.la) d = "/" + d;
                else {
                    var e = b.la.lastIndexOf("/"); - 1 != e && (d = b.la.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") :
                        ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (af(b), b.la = d) : c = "" !== a.V.toString();
        c ? df(b, a.V.clone()) : c = !!a.jb;
        c && (a = a.jb, af(b), b.jb = a);
        return b
    };
    k.clone = function() {
        return new Ze(this)
    };

    function $e(a, b, c) {
        af(a);
        a.fb = c ? ef(b, !0) : b;
        a.fb && (a.fb = a.fb.replace(/:$/, ""))
    }

    function bf(a, b) {
        af(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.Jb = b
        } else a.Jb = null
    }

    function df(a, b, c) {
        af(a);
        b instanceof ff ? (a.V = b, a.V.ee(a.ra)) : (c || (b = gf(b, mf)), a.V = new ff(b, a.ra))
    }
    k.getQuery = function() {
        return this.V.toString()
    };

    function nf(a, b, c) {
        af(a);
        a.V.set(b, c)
    }
    k.removeParameter = function(a) {
        af(this);
        this.V.remove(a);
        return this
    };

    function af(a) {
        if (a.fh) throw Error("Tried to modify a read-only Uri");
    }
    k.ee = function(a) {
        this.ra = a;
        this.V && this.V.ee(a)
    };

    function of(a) {
        return a instanceof Ze ? a.clone() : new Ze(a, void 0)
    }

    function pf(a, b) {
        a instanceof Ze || (a = of(a));
        b instanceof Ze || (b = of(b));
        return a.resolve(b)
    }

    function ef(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function gf(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, qf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function qf(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var hf = /[#\/\?@]/g,
        kf = /[#\?:]/g,
        jf = /[#\?]/g,
        mf = /[#\?@]/g,
        lf = /#/g;

    function ff(a, b) {
        this.L = this.P = null;
        this.ka = a || null;
        this.ra = !!b
    }

    function rf(a) {
        a.P || (a.P = new Ne, a.L = 0, a.ka && Ue(a.ka, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    k = ff.prototype;
    k.add = function(a, b) {
        rf(this);
        this.ka = null;
        a = sf(this, a);
        var c = this.P.get(a);
        c || this.P.set(a, c = []);
        c.push(b);
        this.L += 1;
        return this
    };
    k.remove = function(a) {
        rf(this);
        a = sf(this, a);
        return this.P.Za(a) ? (this.ka = null, this.L -= this.P.get(a).length, this.P.remove(a)) : !1
    };
    k.clear = function() {
        this.P = this.ka = null;
        this.L = 0
    };
    k.ic = function() {
        rf(this);
        return 0 == this.L
    };
    k.Za = function(a) {
        rf(this);
        a = sf(this, a);
        return this.P.Za(a)
    };
    k.forEach = function(a, b) {
        rf(this);
        this.P.forEach(function(c, d) {
            Ma(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.Ka = function() {
        rf(this);
        for (var a = this.P.qa(), b = this.P.Ka(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.qa = function(a) {
        rf(this);
        var b = [];
        if ("string" === typeof a) this.Za(a) && (b = Xa(b, this.P.get(sf(this, a))));
        else {
            a = this.P.qa();
            for (var c = 0; c < a.length; c++) b = Xa(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        rf(this);
        this.ka = null;
        a = sf(this, a);
        this.Za(a) && (this.L -= this.P.get(a).length);
        this.P.set(a, [b]);
        this.L += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.qa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.ka) return this.ka;
        if (!this.P) return "";
        for (var a = [], b = this.P.Ka(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.qa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.ka = a.join("&")
    };
    k.clone = function() {
        var a = new ff;
        a.ka = this.ka;
        this.P && (a.P = this.P.clone(), a.L = this.L);
        return a
    };

    function sf(a, b) {
        b = String(b);
        a.ra && (b = b.toLowerCase());
        return b
    }
    k.ee = function(a) {
        a && !this.ra && (rf(this), this.ka = null, this.P.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.ka = null, this.P.set(sf(this, d), Ya(b)), this.L += b.length))
        }, this));
        this.ra = a
    };
    k.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Se(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var tf = {
            Fi: !0
        },
        uf = {
            Hi: !0
        },
        vf = {
            Gi: !0
        },
        wf = {
            Ei: !0
        };

    function xf() {
        throw Error("Do not instantiate directly");
    }
    xf.prototype.Wb = null;
    xf.prototype.toString = function() {
        return this.content
    };

    function yf() {
        xf.call(this)
    }
    x(yf, xf);
    yf.prototype.ib = tf;

    function zf() {
        xf.call(this)
    }
    x(zf, xf);
    zf.prototype.ib = uf;
    zf.prototype.Wb = 1;

    function Af(a, b) {
        return null != a && a.ib === b
    };

    function Bf(a) {
        if (null != a) switch (a.Wb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function D(a) {
        return Af(a, tf) ? a : a instanceof Pb ? E(Rb(a).toString(), a.Kc()) : E(bc(String(String(a))), Bf(a))
    }
    var E = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Wb = d);
                return c
            }
        }(yf),
        Cf = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }(zf);

    function Df(a, b) {
        return a && b && a.eh && b.eh ? a.ib !== b.ib ? !1 : a.toString() === b.toString() : a instanceof xf && b instanceof xf ? a.ib != b.ib ? !1 : a.toString() == b.toString() : a == b
    }

    function Ef(a) {
        return a instanceof xf ? !!a.content : !!a
    }
    var Ff = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = String(c);
            if (!c) return "";
            c = new b(c);
            void 0 !== d && (c.Wb = d);
            return c
        }
    }(yf);

    function Gf(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Hf(a) {
        return Af(a, tf) ? String(String(a.content).replace(If, "").replace(Jf, "&lt;")).replace(Kf, Lf) : bc(String(a))
    }

    function Mf(a) {
        Af(a, uf) || Af(a, vf) ? a = Nf(a) : a instanceof zb ? a = Nf(Cb(a)) : a instanceof lb ? a = Nf(ob(a).toString()) : (a = String(a), Of.test(a) ? a = a.replace(Pf, Qf) : (Ka("Bad value `%s` for |filterNormalizeUri", [a]), a = "about:invalid#zSoyz"));
        return a
    }

    function Rf(a) {
        Af(a, uf) || Af(a, vf) ? a = Nf(a) : a instanceof zb ? a = Nf(Cb(a)) : a instanceof lb ? a = Nf(ob(a).toString()) : (a = String(a), Sf.test(a) ? a = a.replace(Pf, Qf) : (Ka("Bad value `%s` for |filterNormalizeMediaUri", [a]), a = "about:invalid#zSoyz"));
        return a
    }

    function Tf(a) {
        Af(a, wf) ? a = Gf(a.content) : null == a ? a = "" : a instanceof Gb ? (a instanceof Gb && a.constructor === Gb && a.eg === Hb ? a = a.gd : (Ka("expected object of type SafeStyle, got '" + a + "' of type " + za(a)), a = "type_error:SafeStyle"), a = Gf(a)) : a instanceof Ib ? (a instanceof Ib && a.constructor === Ib && a.dg === Jb ? a = a.fd : (Ka("expected object of type SafeStyleSheet, got '" + a + "' of type " + za(a)), a = "type_error:SafeStyleSheet"), a = Gf(a)) : (a = String(a), Uf.test(a) || (Ka("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
        return a
    }

    function G(a, b, c, d) {
        a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c, Ka("expected param " + b + " of type " + d + (", but got " + a) + "."));
        return c
    }
    var Vf = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Lf(a) {
        return Vf[a]
    }
    var Wf = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Qf(a) {
        return Wf[a]
    }
    var Kf = /[\x00\x22\x27\x3c\x3e]/g,
        Pf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Uf = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Of = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Sf = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Nf(a) {
        return String(a).replace(Pf, Qf)
    }
    var If = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Jf = /</g;

    function Xf(a) {
        this.ja = void 0;
        this.X = {};
        if (a) {
            var b = Re(a);
            a = Qe(a);
            for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
        }
    }
    k = Xf.prototype;
    k.set = function(a, b) {
        Yf(this, a, b, !1)
    };
    k.add = function(a, b) {
        Yf(this, a, b, !0)
    };

    function Yf(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.X[f] || (a.X[f] = new Xf);
            a = a.X[f]
        }
        if (d && void 0 !== a.ja) throw Error('The collection already contains the key "' + b + '"');
        a.ja = c
    }
    k.get = function(a) {
        a: {
            for (var b = this, c = 0; c < a.length; c++)
                if (b = b.X[a.charAt(c)], !b) {
                    a = void 0;
                    break a
                }
            a = b
        }
        return a ? a.ja : void 0
    };
    k.qa = function() {
        var a = [];
        Zf(this, a);
        return a
    };

    function Zf(a, b) {
        void 0 !== a.ja && b.push(a.ja);
        for (var c in a.X) Zf(a.X[c], b)
    }
    k.Ka = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.X[e]) return [];
                c = c.X[e]
            }
            $f(c, a, b)
        } else $f(this, "", b);
        return b
    };

    function $f(a, b, c) {
        void 0 !== a.ja && c.push(b);
        for (var d in a.X) $f(a.X[d], b + d, c)
    }
    k.Za = function(a) {
        return void 0 !== this.get(a)
    };
    k.clear = function() {
        this.X = {};
        this.ja = void 0
    };
    k.remove = function(a) {
        for (var b = this, c = [], d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!b.X[e]) throw Error('The collection does not have the key "' + a + '"');
            c.push([b, e]);
            b = b.X[e]
        }
        a = b.ja;
        for (delete b.ja; 0 < c.length;)
            if (e = c.pop(), b = e[0], e = e[1], b.X[e].ic()) delete b.X[e];
            else break;
        return a
    };
    k.clone = function() {
        return new Xf(this)
    };
    k.ic = function() {
        var a;
        if (a = void 0 === this.ja) a: {
            for (var b in this.X) {
                a = !1;
                break a
            }
            a = !0
        }
        return a
    };

    function ag(a) {
        this.Ta = a;
        this.ke = new Xf;
        for (a = 0; a < this.Ta.length; a++) {
            var b = this.ke.get("+" + this.Ta[a].a);
            b ? b.push(this.Ta[a]) : this.ke.add("+" + this.Ta[a].a, [this.Ta[a]])
        }
    }
    ag.prototype.search = function(a) {
        var b = this.ke,
            c = {},
            d = 0;
        void 0 !== b.ja && (c[d] = b.ja);
        for (; d < a.length; d++) {
            var e = a.charAt(d);
            if (!(e in b.X)) break;
            b = b.X[e];
            void 0 !== b.ja && (c[d] = b.ja)
        }
        for (var f in c)
            if (c.hasOwnProperty(f)) return c[f];
        return []
    };

    function bg(a) {
        for (var b = 0; b < cg.length; b++)
            if (cg[b].b === a) return cg[b];
        return null
    }

    function dg(a) {
        a = a.toUpperCase();
        for (var b = [], c = 0; c < cg.length; c++) cg[c].c === a && b.push(cg[c]);
        return b
    }

    function eg(a) {
        if (0 < a.length && "+" == a.charAt(0)) {
            a = a.substring(1);
            for (var b = [], c = 0; c < cg.length; c++) cg[c].a == a && b.push(cg[c]);
            a = b
        } else a = dg(a);
        return a
    }

    function fg(a) {
        a.sort(function(b, c) {
            return b.name.localeCompare(c.name, "en")
        })
    }
    var cg = [{
        name: "Afghanistan",
        b: "93-AF-0",
        a: "93",
        c: "AF"
    }, {
        name: "\u00c5land Islands",
        b: "358-AX-0",
        a: "358",
        c: "AX"
    }, {
        name: "Albania",
        b: "355-AL-0",
        a: "355",
        c: "AL"
    }, {
        name: "Algeria",
        b: "213-DZ-0",
        a: "213",
        c: "DZ"
    }, {
        name: "American Samoa",
        b: "1-AS-0",
        a: "1",
        c: "AS"
    }, {
        name: "Andorra",
        b: "376-AD-0",
        a: "376",
        c: "AD"
    }, {
        name: "Angola",
        b: "244-AO-0",
        a: "244",
        c: "AO"
    }, {
        name: "Anguilla",
        b: "1-AI-0",
        a: "1",
        c: "AI"
    }, {
        name: "Antigua and Barbuda",
        b: "1-AG-0",
        a: "1",
        c: "AG"
    }, {
        name: "Argentina",
        b: "54-AR-0",
        a: "54",
        c: "AR"
    }, {
        name: "Armenia",
        b: "374-AM-0",
        a: "374",
        c: "AM"
    }, {
        name: "Aruba",
        b: "297-AW-0",
        a: "297",
        c: "AW"
    }, {
        name: "Ascension Island",
        b: "247-AC-0",
        a: "247",
        c: "AC"
    }, {
        name: "Australia",
        b: "61-AU-0",
        a: "61",
        c: "AU"
    }, {
        name: "Austria",
        b: "43-AT-0",
        a: "43",
        c: "AT"
    }, {
        name: "Azerbaijan",
        b: "994-AZ-0",
        a: "994",
        c: "AZ"
    }, {
        name: "Bahamas",
        b: "1-BS-0",
        a: "1",
        c: "BS"
    }, {
        name: "Bahrain",
        b: "973-BH-0",
        a: "973",
        c: "BH"
    }, {
        name: "Bangladesh",
        b: "880-BD-0",
        a: "880",
        c: "BD"
    }, {
        name: "Barbados",
        b: "1-BB-0",
        a: "1",
        c: "BB"
    }, {
        name: "Belarus",
        b: "375-BY-0",
        a: "375",
        c: "BY"
    }, {
        name: "Belgium",
        b: "32-BE-0",
        a: "32",
        c: "BE"
    }, {
        name: "Belize",
        b: "501-BZ-0",
        a: "501",
        c: "BZ"
    }, {
        name: "Benin",
        b: "229-BJ-0",
        a: "229",
        c: "BJ"
    }, {
        name: "Bermuda",
        b: "1-BM-0",
        a: "1",
        c: "BM"
    }, {
        name: "Bhutan",
        b: "975-BT-0",
        a: "975",
        c: "BT"
    }, {
        name: "Bolivia",
        b: "591-BO-0",
        a: "591",
        c: "BO"
    }, {
        name: "Bosnia and Herzegovina",
        b: "387-BA-0",
        a: "387",
        c: "BA"
    }, {
        name: "Botswana",
        b: "267-BW-0",
        a: "267",
        c: "BW"
    }, {
        name: "Brazil",
        b: "55-BR-0",
        a: "55",
        c: "BR"
    }, {
        name: "British Indian Ocean Territory",
        b: "246-IO-0",
        a: "246",
        c: "IO"
    }, {
        name: "British Virgin Islands",
        b: "1-VG-0",
        a: "1",
        c: "VG"
    }, {
        name: "Brunei",
        b: "673-BN-0",
        a: "673",
        c: "BN"
    }, {
        name: "Bulgaria",
        b: "359-BG-0",
        a: "359",
        c: "BG"
    }, {
        name: "Burkina Faso",
        b: "226-BF-0",
        a: "226",
        c: "BF"
    }, {
        name: "Burundi",
        b: "257-BI-0",
        a: "257",
        c: "BI"
    }, {
        name: "Cambodia",
        b: "855-KH-0",
        a: "855",
        c: "KH"
    }, {
        name: "Cameroon",
        b: "237-CM-0",
        a: "237",
        c: "CM"
    }, {
        name: "Canada",
        b: "1-CA-0",
        a: "1",
        c: "CA"
    }, {
        name: "Cape Verde",
        b: "238-CV-0",
        a: "238",
        c: "CV"
    }, {
        name: "Caribbean Netherlands",
        b: "599-BQ-0",
        a: "599",
        c: "BQ"
    }, {
        name: "Cayman Islands",
        b: "1-KY-0",
        a: "1",
        c: "KY"
    }, {
        name: "Central African Republic",
        b: "236-CF-0",
        a: "236",
        c: "CF"
    }, {
        name: "Chad",
        b: "235-TD-0",
        a: "235",
        c: "TD"
    }, {
        name: "Chile",
        b: "56-CL-0",
        a: "56",
        c: "CL"
    }, {
        name: "China",
        b: "86-CN-0",
        a: "86",
        c: "CN"
    }, {
        name: "Christmas Island",
        b: "61-CX-0",
        a: "61",
        c: "CX"
    }, {
        name: "Cocos [Keeling] Islands",
        b: "61-CC-0",
        a: "61",
        c: "CC"
    }, {
        name: "Colombia",
        b: "57-CO-0",
        a: "57",
        c: "CO"
    }, {
        name: "Comoros",
        b: "269-KM-0",
        a: "269",
        c: "KM"
    }, {
        name: "Democratic Republic Congo",
        b: "243-CD-0",
        a: "243",
        c: "CD"
    }, {
        name: "Republic of Congo",
        b: "242-CG-0",
        a: "242",
        c: "CG"
    }, {
        name: "Cook Islands",
        b: "682-CK-0",
        a: "682",
        c: "CK"
    }, {
        name: "Costa Rica",
        b: "506-CR-0",
        a: "506",
        c: "CR"
    }, {
        name: "C\u00f4te d'Ivoire",
        b: "225-CI-0",
        a: "225",
        c: "CI"
    }, {
        name: "Croatia",
        b: "385-HR-0",
        a: "385",
        c: "HR"
    }, {
        name: "Cuba",
        b: "53-CU-0",
        a: "53",
        c: "CU"
    }, {
        name: "Cura\u00e7ao",
        b: "599-CW-0",
        a: "599",
        c: "CW"
    }, {
        name: "Cyprus",
        b: "357-CY-0",
        a: "357",
        c: "CY"
    }, {
        name: "Czech Republic",
        b: "420-CZ-0",
        a: "420",
        c: "CZ"
    }, {
        name: "Denmark",
        b: "45-DK-0",
        a: "45",
        c: "DK"
    }, {
        name: "Djibouti",
        b: "253-DJ-0",
        a: "253",
        c: "DJ"
    }, {
        name: "Dominica",
        b: "1-DM-0",
        a: "1",
        c: "DM"
    }, {
        name: "Dominican Republic",
        b: "1-DO-0",
        a: "1",
        c: "DO"
    }, {
        name: "East Timor",
        b: "670-TL-0",
        a: "670",
        c: "TL"
    }, {
        name: "Ecuador",
        b: "593-EC-0",
        a: "593",
        c: "EC"
    }, {
        name: "Egypt",
        b: "20-EG-0",
        a: "20",
        c: "EG"
    }, {
        name: "El Salvador",
        b: "503-SV-0",
        a: "503",
        c: "SV"
    }, {
        name: "Equatorial Guinea",
        b: "240-GQ-0",
        a: "240",
        c: "GQ"
    }, {
        name: "Eritrea",
        b: "291-ER-0",
        a: "291",
        c: "ER"
    }, {
        name: "Estonia",
        b: "372-EE-0",
        a: "372",
        c: "EE"
    }, {
        name: "Ethiopia",
        b: "251-ET-0",
        a: "251",
        c: "ET"
    }, {
        name: "Falkland Islands [Islas Malvinas]",
        b: "500-FK-0",
        a: "500",
        c: "FK"
    }, {
        name: "Faroe Islands",
        b: "298-FO-0",
        a: "298",
        c: "FO"
    }, {
        name: "Fiji",
        b: "679-FJ-0",
        a: "679",
        c: "FJ"
    }, {
        name: "Finland",
        b: "358-FI-0",
        a: "358",
        c: "FI"
    }, {
        name: "France",
        b: "33-FR-0",
        a: "33",
        c: "FR"
    }, {
        name: "French Guiana",
        b: "594-GF-0",
        a: "594",
        c: "GF"
    }, {
        name: "French Polynesia",
        b: "689-PF-0",
        a: "689",
        c: "PF"
    }, {
        name: "Gabon",
        b: "241-GA-0",
        a: "241",
        c: "GA"
    }, {
        name: "Gambia",
        b: "220-GM-0",
        a: "220",
        c: "GM"
    }, {
        name: "Georgia",
        b: "995-GE-0",
        a: "995",
        c: "GE"
    }, {
        name: "Germany",
        b: "49-DE-0",
        a: "49",
        c: "DE"
    }, {
        name: "Ghana",
        b: "233-GH-0",
        a: "233",
        c: "GH"
    }, {
        name: "Gibraltar",
        b: "350-GI-0",
        a: "350",
        c: "GI"
    }, {
        name: "Greece",
        b: "30-GR-0",
        a: "30",
        c: "GR"
    }, {
        name: "Greenland",
        b: "299-GL-0",
        a: "299",
        c: "GL"
    }, {
        name: "Grenada",
        b: "1-GD-0",
        a: "1",
        c: "GD"
    }, {
        name: "Guadeloupe",
        b: "590-GP-0",
        a: "590",
        c: "GP"
    }, {
        name: "Guam",
        b: "1-GU-0",
        a: "1",
        c: "GU"
    }, {
        name: "Guatemala",
        b: "502-GT-0",
        a: "502",
        c: "GT"
    }, {
        name: "Guernsey",
        b: "44-GG-0",
        a: "44",
        c: "GG"
    }, {
        name: "Guinea Conakry",
        b: "224-GN-0",
        a: "224",
        c: "GN"
    }, {
        name: "Guinea-Bissau",
        b: "245-GW-0",
        a: "245",
        c: "GW"
    }, {
        name: "Guyana",
        b: "592-GY-0",
        a: "592",
        c: "GY"
    }, {
        name: "Haiti",
        b: "509-HT-0",
        a: "509",
        c: "HT"
    }, {
        name: "Heard Island and McDonald Islands",
        b: "672-HM-0",
        a: "672",
        c: "HM"
    }, {
        name: "Honduras",
        b: "504-HN-0",
        a: "504",
        c: "HN"
    }, {
        name: "Hong Kong",
        b: "852-HK-0",
        a: "852",
        c: "HK"
    }, {
        name: "Hungary",
        b: "36-HU-0",
        a: "36",
        c: "HU"
    }, {
        name: "Iceland",
        b: "354-IS-0",
        a: "354",
        c: "IS"
    }, {
        name: "India",
        b: "91-IN-0",
        a: "91",
        c: "IN"
    }, {
        name: "Indonesia",
        b: "62-ID-0",
        a: "62",
        c: "ID"
    }, {
        name: "Iran",
        b: "98-IR-0",
        a: "98",
        c: "IR"
    }, {
        name: "Iraq",
        b: "964-IQ-0",
        a: "964",
        c: "IQ"
    }, {
        name: "Ireland",
        b: "353-IE-0",
        a: "353",
        c: "IE"
    }, {
        name: "Isle of Man",
        b: "44-IM-0",
        a: "44",
        c: "IM"
    }, {
        name: "Israel",
        b: "972-IL-0",
        a: "972",
        c: "IL"
    }, {
        name: "Italy",
        b: "39-IT-0",
        a: "39",
        c: "IT"
    }, {
        name: "Jamaica",
        b: "1-JM-0",
        a: "1",
        c: "JM"
    }, {
        name: "Japan",
        b: "81-JP-0",
        a: "81",
        c: "JP"
    }, {
        name: "Jersey",
        b: "44-JE-0",
        a: "44",
        c: "JE"
    }, {
        name: "Jordan",
        b: "962-JO-0",
        a: "962",
        c: "JO"
    }, {
        name: "Kazakhstan",
        b: "7-KZ-0",
        a: "7",
        c: "KZ"
    }, {
        name: "Kenya",
        b: "254-KE-0",
        a: "254",
        c: "KE"
    }, {
        name: "Kiribati",
        b: "686-KI-0",
        a: "686",
        c: "KI"
    }, {
        name: "Kosovo",
        b: "377-XK-0",
        a: "377",
        c: "XK"
    }, {
        name: "Kosovo",
        b: "381-XK-0",
        a: "381",
        c: "XK"
    }, {
        name: "Kosovo",
        b: "386-XK-0",
        a: "386",
        c: "XK"
    }, {
        name: "Kuwait",
        b: "965-KW-0",
        a: "965",
        c: "KW"
    }, {
        name: "Kyrgyzstan",
        b: "996-KG-0",
        a: "996",
        c: "KG"
    }, {
        name: "Laos",
        b: "856-LA-0",
        a: "856",
        c: "LA"
    }, {
        name: "Latvia",
        b: "371-LV-0",
        a: "371",
        c: "LV"
    }, {
        name: "Lebanon",
        b: "961-LB-0",
        a: "961",
        c: "LB"
    }, {
        name: "Lesotho",
        b: "266-LS-0",
        a: "266",
        c: "LS"
    }, {
        name: "Liberia",
        b: "231-LR-0",
        a: "231",
        c: "LR"
    }, {
        name: "Libya",
        b: "218-LY-0",
        a: "218",
        c: "LY"
    }, {
        name: "Liechtenstein",
        b: "423-LI-0",
        a: "423",
        c: "LI"
    }, {
        name: "Lithuania",
        b: "370-LT-0",
        a: "370",
        c: "LT"
    }, {
        name: "Luxembourg",
        b: "352-LU-0",
        a: "352",
        c: "LU"
    }, {
        name: "Macau",
        b: "853-MO-0",
        a: "853",
        c: "MO"
    }, {
        name: "Macedonia",
        b: "389-MK-0",
        a: "389",
        c: "MK"
    }, {
        name: "Madagascar",
        b: "261-MG-0",
        a: "261",
        c: "MG"
    }, {
        name: "Malawi",
        b: "265-MW-0",
        a: "265",
        c: "MW"
    }, {
        name: "Malaysia",
        b: "60-MY-0",
        a: "60",
        c: "MY"
    }, {
        name: "Maldives",
        b: "960-MV-0",
        a: "960",
        c: "MV"
    }, {
        name: "Mali",
        b: "223-ML-0",
        a: "223",
        c: "ML"
    }, {
        name: "Malta",
        b: "356-MT-0",
        a: "356",
        c: "MT"
    }, {
        name: "Marshall Islands",
        b: "692-MH-0",
        a: "692",
        c: "MH"
    }, {
        name: "Martinique",
        b: "596-MQ-0",
        a: "596",
        c: "MQ"
    }, {
        name: "Mauritania",
        b: "222-MR-0",
        a: "222",
        c: "MR"
    }, {
        name: "Mauritius",
        b: "230-MU-0",
        a: "230",
        c: "MU"
    }, {
        name: "Mayotte",
        b: "262-YT-0",
        a: "262",
        c: "YT"
    }, {
        name: "Mexico",
        b: "52-MX-0",
        a: "52",
        c: "MX"
    }, {
        name: "Micronesia",
        b: "691-FM-0",
        a: "691",
        c: "FM"
    }, {
        name: "Moldova",
        b: "373-MD-0",
        a: "373",
        c: "MD"
    }, {
        name: "Monaco",
        b: "377-MC-0",
        a: "377",
        c: "MC"
    }, {
        name: "Mongolia",
        b: "976-MN-0",
        a: "976",
        c: "MN"
    }, {
        name: "Montenegro",
        b: "382-ME-0",
        a: "382",
        c: "ME"
    }, {
        name: "Montserrat",
        b: "1-MS-0",
        a: "1",
        c: "MS"
    }, {
        name: "Morocco",
        b: "212-MA-0",
        a: "212",
        c: "MA"
    }, {
        name: "Mozambique",
        b: "258-MZ-0",
        a: "258",
        c: "MZ"
    }, {
        name: "Myanmar [Burma]",
        b: "95-MM-0",
        a: "95",
        c: "MM"
    }, {
        name: "Namibia",
        b: "264-NA-0",
        a: "264",
        c: "NA"
    }, {
        name: "Nauru",
        b: "674-NR-0",
        a: "674",
        c: "NR"
    }, {
        name: "Nepal",
        b: "977-NP-0",
        a: "977",
        c: "NP"
    }, {
        name: "Netherlands",
        b: "31-NL-0",
        a: "31",
        c: "NL"
    }, {
        name: "New Caledonia",
        b: "687-NC-0",
        a: "687",
        c: "NC"
    }, {
        name: "New Zealand",
        b: "64-NZ-0",
        a: "64",
        c: "NZ"
    }, {
        name: "Nicaragua",
        b: "505-NI-0",
        a: "505",
        c: "NI"
    }, {
        name: "Niger",
        b: "227-NE-0",
        a: "227",
        c: "NE"
    }, {
        name: "Nigeria",
        b: "234-NG-0",
        a: "234",
        c: "NG"
    }, {
        name: "Niue",
        b: "683-NU-0",
        a: "683",
        c: "NU"
    }, {
        name: "Norfolk Island",
        b: "672-NF-0",
        a: "672",
        c: "NF"
    }, {
        name: "North Korea",
        b: "850-KP-0",
        a: "850",
        c: "KP"
    }, {
        name: "Northern Mariana Islands",
        b: "1-MP-0",
        a: "1",
        c: "MP"
    }, {
        name: "Norway",
        b: "47-NO-0",
        a: "47",
        c: "NO"
    }, {
        name: "Oman",
        b: "968-OM-0",
        a: "968",
        c: "OM"
    }, {
        name: "Pakistan",
        b: "92-PK-0",
        a: "92",
        c: "PK"
    }, {
        name: "Palau",
        b: "680-PW-0",
        a: "680",
        c: "PW"
    }, {
        name: "Palestinian Territories",
        b: "970-PS-0",
        a: "970",
        c: "PS"
    }, {
        name: "Panama",
        b: "507-PA-0",
        a: "507",
        c: "PA"
    }, {
        name: "Papua New Guinea",
        b: "675-PG-0",
        a: "675",
        c: "PG"
    }, {
        name: "Paraguay",
        b: "595-PY-0",
        a: "595",
        c: "PY"
    }, {
        name: "Peru",
        b: "51-PE-0",
        a: "51",
        c: "PE"
    }, {
        name: "Philippines",
        b: "63-PH-0",
        a: "63",
        c: "PH"
    }, {
        name: "Poland",
        b: "48-PL-0",
        a: "48",
        c: "PL"
    }, {
        name: "Portugal",
        b: "351-PT-0",
        a: "351",
        c: "PT"
    }, {
        name: "Puerto Rico",
        b: "1-PR-0",
        a: "1",
        c: "PR"
    }, {
        name: "Qatar",
        b: "974-QA-0",
        a: "974",
        c: "QA"
    }, {
        name: "R\u00e9union",
        b: "262-RE-0",
        a: "262",
        c: "RE"
    }, {
        name: "Romania",
        b: "40-RO-0",
        a: "40",
        c: "RO"
    }, {
        name: "Russia",
        b: "7-RU-0",
        a: "7",
        c: "RU"
    }, {
        name: "Rwanda",
        b: "250-RW-0",
        a: "250",
        c: "RW"
    }, {
        name: "Saint Barth\u00e9lemy",
        b: "590-BL-0",
        a: "590",
        c: "BL"
    }, {
        name: "Saint Helena",
        b: "290-SH-0",
        a: "290",
        c: "SH"
    }, {
        name: "St. Kitts",
        b: "1-KN-0",
        a: "1",
        c: "KN"
    }, {
        name: "St. Lucia",
        b: "1-LC-0",
        a: "1",
        c: "LC"
    }, {
        name: "Saint Martin",
        b: "590-MF-0",
        a: "590",
        c: "MF"
    }, {
        name: "Saint Pierre and Miquelon",
        b: "508-PM-0",
        a: "508",
        c: "PM"
    }, {
        name: "St. Vincent",
        b: "1-VC-0",
        a: "1",
        c: "VC"
    }, {
        name: "Samoa",
        b: "685-WS-0",
        a: "685",
        c: "WS"
    }, {
        name: "San Marino",
        b: "378-SM-0",
        a: "378",
        c: "SM"
    }, {
        name: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        b: "239-ST-0",
        a: "239",
        c: "ST"
    }, {
        name: "Saudi Arabia",
        b: "966-SA-0",
        a: "966",
        c: "SA"
    }, {
        name: "Senegal",
        b: "221-SN-0",
        a: "221",
        c: "SN"
    }, {
        name: "Serbia",
        b: "381-RS-0",
        a: "381",
        c: "RS"
    }, {
        name: "Seychelles",
        b: "248-SC-0",
        a: "248",
        c: "SC"
    }, {
        name: "Sierra Leone",
        b: "232-SL-0",
        a: "232",
        c: "SL"
    }, {
        name: "Singapore",
        b: "65-SG-0",
        a: "65",
        c: "SG"
    }, {
        name: "Sint Maarten",
        b: "1-SX-0",
        a: "1",
        c: "SX"
    }, {
        name: "Slovakia",
        b: "421-SK-0",
        a: "421",
        c: "SK"
    }, {
        name: "Slovenia",
        b: "386-SI-0",
        a: "386",
        c: "SI"
    }, {
        name: "Solomon Islands",
        b: "677-SB-0",
        a: "677",
        c: "SB"
    }, {
        name: "Somalia",
        b: "252-SO-0",
        a: "252",
        c: "SO"
    }, {
        name: "South Africa",
        b: "27-ZA-0",
        a: "27",
        c: "ZA"
    }, {
        name: "South Georgia and the South Sandwich Islands",
        b: "500-GS-0",
        a: "500",
        c: "GS"
    }, {
        name: "South Korea",
        b: "82-KR-0",
        a: "82",
        c: "KR"
    }, {
        name: "South Sudan",
        b: "211-SS-0",
        a: "211",
        c: "SS"
    }, {
        name: "Spain",
        b: "34-ES-0",
        a: "34",
        c: "ES"
    }, {
        name: "Sri Lanka",
        b: "94-LK-0",
        a: "94",
        c: "LK"
    }, {
        name: "Sudan",
        b: "249-SD-0",
        a: "249",
        c: "SD"
    }, {
        name: "Suriname",
        b: "597-SR-0",
        a: "597",
        c: "SR"
    }, {
        name: "Svalbard and Jan Mayen",
        b: "47-SJ-0",
        a: "47",
        c: "SJ"
    }, {
        name: "Swaziland",
        b: "268-SZ-0",
        a: "268",
        c: "SZ"
    }, {
        name: "Sweden",
        b: "46-SE-0",
        a: "46",
        c: "SE"
    }, {
        name: "Switzerland",
        b: "41-CH-0",
        a: "41",
        c: "CH"
    }, {
        name: "Syria",
        b: "963-SY-0",
        a: "963",
        c: "SY"
    }, {
        name: "Taiwan",
        b: "886-TW-0",
        a: "886",
        c: "TW"
    }, {
        name: "Tajikistan",
        b: "992-TJ-0",
        a: "992",
        c: "TJ"
    }, {
        name: "Tanzania",
        b: "255-TZ-0",
        a: "255",
        c: "TZ"
    }, {
        name: "Thailand",
        b: "66-TH-0",
        a: "66",
        c: "TH"
    }, {
        name: "Togo",
        b: "228-TG-0",
        a: "228",
        c: "TG"
    }, {
        name: "Tokelau",
        b: "690-TK-0",
        a: "690",
        c: "TK"
    }, {
        name: "Tonga",
        b: "676-TO-0",
        a: "676",
        c: "TO"
    }, {
        name: "Trinidad/Tobago",
        b: "1-TT-0",
        a: "1",
        c: "TT"
    }, {
        name: "Tunisia",
        b: "216-TN-0",
        a: "216",
        c: "TN"
    }, {
        name: "Turkey",
        b: "90-TR-0",
        a: "90",
        c: "TR"
    }, {
        name: "Turkmenistan",
        b: "993-TM-0",
        a: "993",
        c: "TM"
    }, {
        name: "Turks and Caicos Islands",
        b: "1-TC-0",
        a: "1",
        c: "TC"
    }, {
        name: "Tuvalu",
        b: "688-TV-0",
        a: "688",
        c: "TV"
    }, {
        name: "U.S. Virgin Islands",
        b: "1-VI-0",
        a: "1",
        c: "VI"
    }, {
        name: "Uganda",
        b: "256-UG-0",
        a: "256",
        c: "UG"
    }, {
        name: "Ukraine",
        b: "380-UA-0",
        a: "380",
        c: "UA"
    }, {
        name: "United Arab Emirates",
        b: "971-AE-0",
        a: "971",
        c: "AE"
    }, {
        name: "United Kingdom",
        b: "44-GB-0",
        a: "44",
        c: "GB"
    }, {
        name: "United States",
        b: "1-US-0",
        a: "1",
        c: "US"
    }, {
        name: "Uruguay",
        b: "598-UY-0",
        a: "598",
        c: "UY"
    }, {
        name: "Uzbekistan",
        b: "998-UZ-0",
        a: "998",
        c: "UZ"
    }, {
        name: "Vanuatu",
        b: "678-VU-0",
        a: "678",
        c: "VU"
    }, {
        name: "Vatican City",
        b: "379-VA-0",
        a: "379",
        c: "VA"
    }, {
        name: "Venezuela",
        b: "58-VE-0",
        a: "58",
        c: "VE"
    }, {
        name: "Vietnam",
        b: "84-VN-0",
        a: "84",
        c: "VN"
    }, {
        name: "Wallis and Futuna",
        b: "681-WF-0",
        a: "681",
        c: "WF"
    }, {
        name: "Western Sahara",
        b: "212-EH-0",
        a: "212",
        c: "EH"
    }, {
        name: "Yemen",
        b: "967-YE-0",
        a: "967",
        c: "YE"
    }, {
        name: "Zambia",
        b: "260-ZM-0",
        a: "260",
        c: "ZM"
    }, {
        name: "Zimbabwe",
        b: "263-ZW-0",
        a: "263",
        c: "ZW"
    }];
    fg(cg);
    var gg = new ag(cg);

    function hg(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function ig(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function jg(a, b) {
        return a.classList ? a.classList.contains(b) : Sa(a.classList ? a.classList : hg(a).match(/\S+/g) || [], b)
    }

    function kg(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!jg(a, b)) {
            var c = hg(a);
            ig(a, c + (0 < c.length ? " " + b : b))
        }
    }

    function lg(a, b) {
        a.classList ? a.classList.remove(b) : jg(a, b) && ig(a, Oa(a.classList ? a.classList : hg(a).match(/\S+/g) || [], function(c) {
            return c != b
        }).join(" "))
    };

    function mg(a, b, c) {
        b || (b = {});
        c = c || window;
        var d = a instanceof zb ? a : Eb("undefined" != typeof a.href ? a.href : String(a));
        a = b.target || a.target;
        var e = [];
        for (f in b) switch (f) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(f + "=" + b[f]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (b[f] ? 1 : 0))
        }
        var f = e.join(",");
        if ((z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod")) && c.navigator && c.navigator.standalone && a && "_self" != a) f = Oc(document, "A"), Vb(f, "HTMLAnchorElement"),
            d = d instanceof zb ? d : Fb(d), f.href = Cb(d), f.setAttribute("target", a), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"), b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b), c = {};
        else if (b.noreferrer) {
            if (c = c.open("", a, f), b = Cb(d), c && (kc && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, b = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + bc(b) + '">', b = Tb(b, null), d = c.document)) d.write(Rb(b)), d.close()
        } else(c = c.open(Cb(d),
            a, f)) && b.noopener && (c.opener = null);
        return c
    };

    function ng(a) {
        var b = a.type;
        if ("string" === typeof b) switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : null;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
            case "select-multiple":
                b = [];
                for (var c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
                return b.length ? b : null
        }
        return null != a.value ? a.value : null
    }

    function og(a, b) {
        var c = a.type;
        switch ("string" === typeof c && c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if ("string" === typeof b)
                    for (var d = 0; c = a.options[d]; d++)
                        if (c.value == b) {
                            c.selected = !0;
                            break
                        }
                break;
            case "select-multiple":
                "string" === typeof b && (b = [b]);
                for (d = 0; c = a.options[d]; d++)
                    if (c.selected = !1, b)
                        for (var e, f = 0; e = b[f]; f++) c.value == e && (c.selected = !0);
                break;
            default:
                a.value = null != b ? b : ""
        }
    };

    function pg(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (qg(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !lc;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function rg(a, b, c, d, e, f) {
        if (mc && !vc("525")) return !0;
        if (oc && e) return qg(a);
        if (e && !d) return !1;
        if (!lc) {
            "number" === typeof b && (b = sg(b));
            var g = 17 == b || 18 == b || oc && 91 == b;
            if ((!c || oc) && g || oc && 16 == b && (d || f)) return !1
        }
        if ((mc || jc) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (A && d && b == a) return !1;
        switch (a) {
            case 13:
                return lc ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(mc || jc || lc)
        }
        return lc && (d || e || f) ? !1 : qg(a)
    }

    function qg(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (mc || jc) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return lc;
            default:
                return !1
        }
    }

    function sg(a) {
        if (lc) a = tg(a);
        else if (oc && mc) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function tg(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function ug(a) {
        we.call(this);
        this.f = a;
        ge(a, "keydown", this.Pc, !1, this);
        ge(a, "click", this.Ve, !1, this)
    }
    x(ug, we);
    ug.prototype.Pc = function(a) {
        (13 == a.keyCode || mc && 3 == a.keyCode) && vg(this, a)
    };
    ug.prototype.Ve = function(a) {
        vg(this, a)
    };

    function vg(a, b) {
        var c = new wg(b);
        if (a.dispatchEvent(c)) {
            c = new xg(b);
            try {
                a.dispatchEvent(c)
            } finally {
                b.stopPropagation()
            }
        }
    }
    ug.prototype.h = function() {
        ug.$.h.call(this);
        oe(this.f, "keydown", this.Pc, !1, this);
        oe(this.f, "click", this.Ve, !1, this);
        delete this.f
    };

    function xg(a) {
        Ud.call(this, a.Ja);
        this.type = "action"
    }
    x(xg, Ud);

    function wg(a) {
        Ud.call(this, a.Ja);
        this.type = "beforeaction"
    }
    x(wg, Ud);

    function yg(a) {
        we.call(this);
        this.f = a;
        a = A ? "focusout" : "blur";
        this.hh = ge(this.f, A ? "focusin" : "focus", this, !A);
        this.ih = ge(this.f, a, this, !A)
    }
    x(yg, we);
    yg.prototype.handleEvent = function(a) {
        var b = new Ud(a.Ja);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    yg.prototype.h = function() {
        yg.$.h.call(this);
        pe(this.hh);
        pe(this.ih);
        delete this.f
    };

    function zg(a, b) {
        we.call(this);
        this.Wc = a || 1;
        this.vc = b || q;
        this.Ae = u(this.ai, this);
        this.af = Ga()
    }
    x(zg, we);
    k = zg.prototype;
    k.enabled = !1;
    k.aa = null;
    k.setInterval = function(a) {
        this.Wc = a;
        this.aa && this.enabled ? (this.stop(), this.start()) : this.aa && this.stop()
    };
    k.ai = function() {
        if (this.enabled) {
            var a = Ga() - this.af;
            0 < a && a < .8 * this.Wc ? this.aa = this.vc.setTimeout(this.Ae, this.Wc - a) : (this.aa && (this.vc.clearTimeout(this.aa), this.aa = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.enabled = !0;
        this.aa || (this.aa = this.vc.setTimeout(this.Ae, this.Wc), this.af = Ga())
    };
    k.stop = function() {
        this.enabled = !1;
        this.aa && (this.vc.clearTimeout(this.aa), this.aa = null)
    };
    k.h = function() {
        zg.$.h.call(this);
        this.stop();
        delete this.vc
    };

    function Ag(a, b) {
        if (Ca(a)) b && (a = u(a, b));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(0) ? -1 : q.setTimeout(a, 0)
    };

    function Bg(a) {
        we.call(this);
        this.aa = null;
        this.f = a;
        a = A || jc || mc && !vc("531") && "TEXTAREA" == a.tagName;
        this.Oe = new te(this);
        this.Oe.listen(this.f, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    }
    x(Bg, we);
    Bg.prototype.handleEvent = function(a) {
        if ("input" == a.type) A && vc(10) && 0 == a.keyCode && 0 == a.charCode || (Cg(this), this.dispatchEvent(Dg(a)));
        else if ("keydown" != a.type || pg(a)) {
            var b = "keydown" == a.type ? this.f.value : null;
            A && 229 == a.keyCode && (b = null);
            var c = Dg(a);
            Cg(this);
            this.aa = Ag(function() {
                this.aa = null;
                this.f.value != b && this.dispatchEvent(c)
            }, this)
        }
    };

    function Cg(a) {
        null != a.aa && (q.clearTimeout(a.aa), a.aa = null)
    }

    function Dg(a) {
        a = new Ud(a.Ja);
        a.type = "input";
        return a
    }
    Bg.prototype.h = function() {
        Bg.$.h.call(this);
        this.Oe.i();
        Cg(this);
        delete this.f
    };

    function Eg(a, b) {
        we.call(this);
        a && (this.Yc && this.detach(), this.f = a, this.Xc = ge(this.f, "keypress", this, b), this.Vd = ge(this.f, "keydown", this.Pc, b, this), this.Yc = ge(this.f, "keyup", this.Vg, b, this))
    }
    x(Eg, we);
    k = Eg.prototype;
    k.f = null;
    k.Xc = null;
    k.Vd = null;
    k.Yc = null;
    k.ia = -1;
    k.Oa = -1;
    k.xd = !1;
    var Fg = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Gg = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Hg = !mc || vc("525"),
        Ig = oc && lc;
    k = Eg.prototype;
    k.Pc = function(a) {
        if (mc || jc)
            if (17 == this.ia && !a.ctrlKey || 18 == this.ia && !a.altKey || oc && 91 == this.ia && !a.metaKey) this.Oa = this.ia = -1; - 1 == this.ia && (a.ctrlKey && 17 != a.keyCode ? this.ia = 17 : a.altKey && 18 != a.keyCode ? this.ia = 18 : a.metaKey && 91 != a.keyCode && (this.ia = 91));
        Hg && !rg(a.keyCode, this.ia, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Oa = sg(a.keyCode), Ig && (this.xd = a.altKey))
    };
    k.Vg = function(a) {
        this.Oa = this.ia = -1;
        this.xd = a.altKey
    };
    k.handleEvent = function(a) {
        var b = a.Ja,
            c = b.altKey;
        if (A && "keypress" == a.type) {
            var d = this.Oa;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else(mc || jc) && "keypress" == a.type ? (d = this.Oa, e = 0 <= b.charCode && 63232 > b.charCode && qg(d) ? b.charCode : 0) : ic && !mc ? (d = this.Oa, e = qg(d) ? b.keyCode : 0) : ("keypress" == a.type ? (Ig && (c = this.xd), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.Oa, e = b.charCode) : (d = b.keyCode || this.Oa, e = b.charCode || 0)) : (d = b.keyCode || this.Oa, e = b.charCode || 0), oc && 63 == e && 224 == d && (d = 191));
        var f = d = sg(d);
        d ? 63232 <=
            d && d in Fg ? f = Fg[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Gg && (f = Gg[b.keyIdentifier]);
        lc && Hg && "keypress" == a.type && !rg(f, this.ia, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.ia, this.ia = f, b = new Jg(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    k.fa = function() {
        return this.f
    };
    k.detach = function() {
        this.Xc && (pe(this.Xc), pe(this.Vd), pe(this.Yc), this.Yc = this.Vd = this.Xc = null);
        this.f = null;
        this.Oa = this.ia = -1
    };
    k.h = function() {
        Eg.$.h.call(this);
        this.detach()
    };

    function Jg(a, b, c, d) {
        Ud.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    }
    x(Jg, Ud);

    function H(a, b) {
        var c = Rc(a, "firebaseui-textfield");
        b ? (lg(a, "firebaseui-input-invalid"), kg(a, "firebaseui-input"), c && lg(c, "firebaseui-textfield-invalid")) : (lg(a, "firebaseui-input"), kg(a, "firebaseui-input-invalid"), c && kg(c, "firebaseui-textfield-invalid"))
    }

    function Kg(a, b, c) {
        b = new Bg(b);
        Nd(a, Fa(Od, b));
        Ge(a).listen(b, "input", c)
    }

    function Lg(a, b, c) {
        b = new Eg(b);
        Nd(a, Fa(Od, b));
        Ge(a).listen(b, "key", function(d) {
            13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d))
        })
    }

    function Mg(a, b, c) {
        b = new yg(b);
        Nd(a, Fa(Od, b));
        Ge(a).listen(b, "focusin", c)
    }

    function Ng(a, b, c) {
        b = new yg(b);
        Nd(a, Fa(Od, b));
        Ge(a).listen(b, "focusout", c)
    }

    function I(a, b, c) {
        b = new ug(b);
        Nd(a, Fa(Od, b));
        Ge(a).listen(b, "action", function(d) {
            d.stopPropagation();
            d.preventDefault();
            c(d)
        })
    }

    function Og(a) {
        kg(a, "firebaseui-hidden")
    }

    function Pg(a, b) {
        b && Qc(a, b);
        lg(a, "firebaseui-hidden")
    }

    function Qg(a) {
        return !jg(a, "firebaseui-hidden") && "none" != a.style.display
    };

    function Rg(a) {
        Sg(a, "upgradeElement")
    }

    function Tg(a) {
        Sg(a, "downgradeElements")
    }
    var Ug = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-spinner", "mdl-js-button"];

    function Sg(a, b) {
        a && window.componentHandler && window.componentHandler[b] && Ma(Ug, function(c) {
            if (jg(a, c)) window.componentHandler[b](a);
            Ma(Gc(c, a), function(d) {
                window.componentHandler[b](d)
            })
        })
    };

    function Vg(a, b, c) {
        Wg.call(this);
        document.body.appendChild(a);
        a.showModal || window.dialogPolyfill.registerDialog(a);
        a.showModal();
        Rg(a);
        b && I(this, a, function(f) {
            var g = a.getBoundingClientRect();
            (f.clientX < g.left || g.left + g.width < f.clientX || f.clientY < g.top || g.top + g.height < f.clientY) && Wg.call(this)
        });
        if (!c) {
            var d = this.fa().parentElement || this.fa().parentNode;
            if (d) {
                var e = this;
                this.tc = function() {
                    if (a.open) {
                        var f = a.getBoundingClientRect().height,
                            g = d.getBoundingClientRect().height,
                            h = d.getBoundingClientRect().top -
                            document.body.getBoundingClientRect().top,
                            m = d.getBoundingClientRect().left - document.body.getBoundingClientRect().left,
                            n = a.getBoundingClientRect().width,
                            l = d.getBoundingClientRect().width;
                        a.style.top = (h + (g - f) / 2).toString() + "px";
                        f = m + (l - n) / 2;
                        a.style.left = f.toString() + "px";
                        a.style.right = (document.body.getBoundingClientRect().width - f - n).toString() + "px"
                    } else window.removeEventListener("resize", e.tc)
                };
                this.tc();
                window.addEventListener("resize", this.tc, !1)
            }
        }
    }

    function Wg() {
        var a = Xg.call(this);
        a && (Tg(a), a.open && a.close(), Pc(a), this.tc && window.removeEventListener("resize", this.tc))
    }

    function Xg() {
        return Ic("firebaseui-id-dialog")
    };

    function Zg() {
        return "Enter a valid phone number"
    }

    function $g() {
        return "Unable to send password reset code to specified email"
    }

    function ah() {
        return "Something went wrong. Please try again."
    }

    function bh() {
        return "This email already exists without any means of sign-in. Please reset the password to recover."
    }

    function ch(a) {
        a = a || {};
        var b = "";
        a = G(null == a.code || "string" === typeof a.code, "code", a.code, "null|string|undefined");
        switch (r(a) ? a.toString() : a) {
            case "invalid-argument":
                b += "Client specified an invalid argument.";
                break;
            case "invalid-configuration":
                b += "Client specified an invalid project configuration.";
                break;
            case "failed-precondition":
                b += "Request can not be executed in the current system state.";
                break;
            case "out-of-range":
                b += "Client specified an invalid range.";
                break;
            case "unauthenticated":
                b += "Request not authenticated due to missing, invalid, or expired OAuth token.";
                break;
            case "permission-denied":
                b += "Client does not have sufficient permission.";
                break;
            case "not-found":
                b += "Specified resource is not found.";
                break;
            case "aborted":
                b += "Concurrency conflict, such as read-modify-write conflict.";
                break;
            case "already-exists":
                b += "The resource that a client tried to create already exists.";
                break;
            case "resource-exhausted":
                b += "Either out of resource quota or reaching rate limiting.";
                break;
            case "cancelled":
                b += "Request cancelled by the client.";
                break;
            case "data-loss":
                b += "Unrecoverable data loss or data corruption.";
                break;
            case "unknown":
                b += "Unknown server error.";
                break;
            case "internal":
                b += "Internal server error.";
                break;
            case "not-implemented":
                b += "API method not implemented by the server.";
                break;
            case "unavailable":
                b += "Service unavailable.";
                break;
            case "deadline-exceeded":
                b += "Request deadline exceeded.";
                break;
            case "auth/user-disabled":
                b += "The user account has been disabled by an administrator.";
                break;
            case "auth/timeout":
                b += "The operation has timed out.";
                break;
            case "auth/too-many-requests":
                b += "We have blocked all requests from this device due to unusual activity. Try again later.";
                break;
            case "auth/quota-exceeded":
                b += "The quota for this operation has been exceeded. Try again later.";
                break;
            case "auth/network-request-failed":
                b += "A network error has occurred. Try again later.";
                break;
            case "restart-process":
                b += "An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";
                break;
            case "no-matching-tenant-for-email":
                b += "No sign-in provider is available for the given email, please try with a different email."
        }
        return b
    }

    function dh() {
        return "Please login again to perform this operation"
    };
    var eh = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function fh() {
        return this.u("firebaseui-id-email")
    }

    function gh() {
        return this.u("firebaseui-id-email-error")
    }

    function hh(a) {
        var b = fh.call(this),
            c = gh.call(this);
        Kg(this, b, function() {
            Qg(c) && (H(b, !0), Og(c))
        });
        a && Lg(this, b, function() {
            a()
        })
    }

    function ih() {
        return pb(ng(fh.call(this)) || "")
    }

    function jh() {
        var a = fh.call(this);
        var b = gh.call(this);
        var c = ng(a) || "";
        c ? eh.test(c) ? (H(a, !0), Og(b), b = !0) : (H(a, !1), Pg(b, "That email address isn't correct".toString()), b = !1) : (H(a, !1), Pg(b, "Enter your email address to continue".toString()), b = !1);
        return b ? pb(ng(a)) : null
    };

    function J() {
        return this.u("firebaseui-id-submit")
    }

    function K() {
        return this.u("firebaseui-id-secondary-link")
    }

    function kh(a, b) {
        I(this, J.call(this), function(d) {
            a(d)
        });
        var c = K.call(this);
        c && b && I(this, c, function(d) {
            b(d)
        })
    };
    var lh = !A && !(z("Safari") && !(Ob() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || z("Firefox") || z("FxiOS") || z("Silk") || z("Android")));

    function mh(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (lh && a.dataset) {
            if (!(!z("Android") || Ob() || z("Firefox") || z("FxiOS") || z("Opera") || z("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function nh(a, b, c, d) {
        a = a(b || oh, void 0, c);
        d = (d || Dc()).createElement("DIV");
        if (r(a))
            if (a instanceof xf) {
                if (a.ib !== tf) throw Error("Sanitized content was not of kind HTML.");
                a = Tb(a.toString(), a.Wb || null)
            } else Ka("Soy template output is unsafe for use as HTML: " + a), a = Sb("zSoyz");
        else a = Sb(String(a));
        a.Aa().match(ph);
        if (Yb())
            for (; d.lastChild;) d.removeChild(d.lastChild);
        d.innerHTML = Rb(a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    }
    var ph = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        oh = {};

    function qh(a) {
        a = a || {};
        var b = G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined"),
            c = G(null == a.disabled || "boolean" === typeof a.disabled || 1 === a.disabled || 0 === a.disabled, "disabled", a.disabled, "boolean|null|undefined"),
            d = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="email">';
        d = G(null == a.Ec || "boolean" === typeof a.Ec || 1 === a.Ec || 0 === a.Ec, "changeEmail", a.Ec, "boolean|null|undefined") ?
            d + "Enter new email address" : d + "Email";
        d += '</label><input type="email" name="email" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' + Hf(null != b ? b : "") + '"' + (c ? " disabled" : "") + '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';
        return E(d)
    }

    function rh(a) {
        a = a || {};
        a = G(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';
        b = a ? b + D(a) : b + "Next";
        return E(b + "</button>")
    }

    function sh() {
        var a = "" + rh({
            label: "Sign In"
        });
        return E(a)
    }

    function th() {
        var a = "" + rh({
            label: "Save"
        });
        return E(a)
    }

    function uh() {
        var a = "" + rh({
            label: "Continue"
        });
        return E(a)
    }

    function vh(a) {
        a = a || {};
        a = G(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">';
        b = a ? b + D(a) : b + "Choose password";
        return E(b + '</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')
    }

    function wh() {
        var a = {};
        var b = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="password">';
        b = G(null == a.current || "boolean" === typeof a.current || 1 === a.current || 0 === a.current, "current", a.current, "boolean|null|undefined") ? b + "Current password" : b + "Password";
        return E(b + '</label><input type="password" name="password" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')
    }

    function xh() {
        return E('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')
    }

    function yh(a) {
        a = a || {};
        a = G(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';
        b = a ? b + D(a) : b + "Cancel";
        return E(b + "</button>")
    }

    function zh(a) {
        var b = a.R,
            c = "";
        Ef(a.S) && Ef(b) && (c += '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
        return E(c)
    }

    function Ah(a) {
        var b = a.R,
            c = "";
        Ef(a.S) && Ef(b) && (c += '<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');
        return E(c)
    }

    function Bh(a) {
        a = G("string" === typeof a.message, "message", a.message, "string");
        a = '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' + D(a) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">';
        return E(a + "Dismiss</a></p></div>")
    }
    Bh.m = "firebaseui.auth.soy2.element.infoBar";

    function Ch(a) {
        var b = a.content;
        b = G("string" === typeof b || b instanceof yf || b instanceof Pb, "content", a.content, "!goog.html.SafeHtml|!goog.soy.data.SanitizedHtml|!soydata.$$EMPTY_STRING_|string");
        a = G(null == a.Ed || "string" === typeof a.Ed, "classes", a.Ed, "null|string|undefined");
        return E('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' + (a ? " " + Hf(a) : "") + '">' + D(b) + "</dialog>")
    }

    function Dh(a) {
        var b = G("string" === typeof a.fc, "iconClass", a.fc, "string");
        a = G("string" === typeof a.message, "message", a.message, "string");
        return E(Ch({
            content: Ff('<div class="firebaseui-dialog-icon-wrapper"><div class="' + Hf(b) + ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' + D(a) + "</div>")
        }))
    }
    Dh.m = "firebaseui.auth.soy2.element.progressDialog";

    function Eh(a) {
        a = G(Aa(a.items), "items", a.items, "!Array<{id: string, iconClass: string, label: string,}>");
        for (var b = '<div class="firebaseui-list-box-actions">', c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            b += '<button type="button" data-listboxid="' + Hf(e.id) + '" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">' + (e.fc ? '<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon ' + Hf(e.fc) + '"></div></div>' : "") + '<div class="firebaseui-list-box-label-wrapper">' +
                D(e.label) + "</div></button>"
        }
        a = "" + Ch({
            Ed: "firebaseui-list-box-dialog",
            content: Ff(b + "</div>")
        });
        return E(a)
    }
    Eh.m = "firebaseui.auth.soy2.element.listBoxDialog";

    function Fh(a) {
        a = a || {};
        a = G(null == a.Qb || "boolean" === typeof a.Qb || 1 === a.Qb || 0 === a.Qb, "useSpinner", a.Qb, "boolean|null|undefined");
        return E(a ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>' : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')
    }
    Fh.m = "firebaseui.auth.soy2.element.busyIndicator";

    function Gh(a, b) {
        a = a || {};
        a = G(null == a.H || r(a.H), "providerConfig", a.H, "null|undefined|{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        b = b.Fg;
        return a.rf ? "" + a.rf : b[a.providerId] ? "" + b[a.providerId] : 0 == ("" + a.providerId).indexOf("saml.") ? "" + ("" + a.providerId).substring(5) : 0 == ("" + a.providerId).indexOf("oidc.") ? "" + ("" + a.providerId).substring(5) : "" + a.providerId
    };

    function Hh() {
        Pc(Ih.call(this))
    }

    function Ih() {
        return this.u("firebaseui-id-info-bar")
    }

    function Jh() {
        return this.u("firebaseui-id-dismiss-info-bar")
    };

    function Kh(a, b, c) {
        var d = this;
        a = nh(Eh, {
            items: a
        }, null, this.Cb());
        Vg.call(this, a, !0, !0);
        c && (c = Lh(a, c)) && (c.focus(), Be(c, a));
        I(this, a, function(e) {
            if (e = (e = Rc(e.target, "firebaseui-id-list-box-dialog-button")) && mh(e, "listboxid")) Wg.call(d), b(e)
        })
    }

    function Lh(a, b) {
        a = (a || document).getElementsByTagName("BUTTON");
        for (var c = 0; c < a.length; c++)
            if (mh(a[c], "listboxid") === b) return a[c];
        return null
    };

    function Mh() {
        return this.u("firebaseui-id-name")
    }

    function Nh() {
        return this.u("firebaseui-id-name-error")
    };

    function Oh() {
        return this.u("firebaseui-id-new-password")
    }

    function Ph() {
        return this.u("firebaseui-id-password-toggle")
    }

    function Qh() {
        this.Ud = !this.Ud;
        var a = Ph.call(this),
            b = Oh.call(this);
        this.Ud ? (b.type = "text", kg(a, "firebaseui-input-toggle-off"), lg(a, "firebaseui-input-toggle-on")) : (b.type = "password", kg(a, "firebaseui-input-toggle-on"), lg(a, "firebaseui-input-toggle-off"));
        b.focus()
    }

    function Rh() {
        return this.u("firebaseui-id-new-password-error")
    }

    function Sh() {
        this.Ud = !1;
        var a = Oh.call(this);
        a.type = "password";
        var b = Rh.call(this);
        Kg(this, a, function() {
            Qg(b) && (H(a, !0), Og(b))
        });
        var c = Ph.call(this);
        kg(c, "firebaseui-input-toggle-on");
        lg(c, "firebaseui-input-toggle-off");
        Mg(this, a, function() {
            kg(c, "firebaseui-input-toggle-focus");
            lg(c, "firebaseui-input-toggle-blur")
        });
        Ng(this, a, function() {
            kg(c, "firebaseui-input-toggle-blur");
            lg(c, "firebaseui-input-toggle-focus")
        });
        I(this, c, u(Qh, this))
    }

    function Th() {
        var a = Oh.call(this);
        var b = Rh.call(this);
        ng(a) ? (H(a, !0), Og(b), b = !0) : (H(a, !1), Pg(b, "Enter your password".toString()), b = !1);
        return b ? ng(a) : null
    };

    function Uh() {
        return this.u("firebaseui-id-password")
    }

    function Vh() {
        return this.u("firebaseui-id-password-error")
    }

    function Wh() {
        var a = Uh.call(this),
            b = Vh.call(this);
        Kg(this, a, function() {
            Qg(b) && (H(a, !0), Og(b))
        })
    }

    function Xh() {
        var a = Uh.call(this);
        var b = Vh.call(this);
        ng(a) ? (H(a, !0), Og(b), b = !0) : (H(a, !1), Pg(b, "Enter your password".toString()), b = !1);
        return b ? ng(a) : null
    };

    function Yh() {
        return this.u("firebaseui-id-phone-confirmation-code")
    }

    function Zh() {
        return this.u("firebaseui-id-phone-confirmation-code-error")
    };

    function $h(a, b) {
        this.Gc = a;
        this.Pa = b
    }

    function ai(a) {
        a = pb(a);
        var b = gg.search(a);
        return 0 < b.length ? new $h("1" == b[0].a ? "1-US-0" : b[0].b, pb(a.substr(b[0].a.length + 1))) : null
    }

    function bi(a) {
        var b = bg(a.Gc);
        if (!b) throw Error("Country ID " + a.Gc + " not found.");
        return "+" + b.a + a.Pa
    };

    function ci() {
        return this.u("firebaseui-id-phone-number")
    }

    function di() {
        return this.u("firebaseui-id-country-selector")
    }

    function ei() {
        return this.u("firebaseui-id-phone-number-error")
    }

    function fi(a, b) {
        var c = a.Ta,
            d = gi("1-US-0", c);
        b = b && gi(b, c) ? b : d ? "1-US-0" : 0 < c.length ? c[0].b : null;
        if (!b) throw Error("No available default country");
        hi.call(this, b, a)
    }

    function gi(a, b) {
        a = bg(a);
        return !(!a || !Sa(b, a))
    }

    function ii(a) {
        return Pa(a, function(b) {
            return {
                id: b.b,
                fc: "firebaseui-flag " + ji(b),
                label: b.name + " \u200e+" + b.a
            }
        })
    }

    function ji(a) {
        return "firebaseui-flag-" + a.c
    }

    function ki(a) {
        var b = this;
        Kh.call(this, ii(a.Ta), function(c) {
            hi.call(b, c, a, !0);
            b.kb().focus()
        }, this.sc)
    }

    function hi(a, b, c) {
        var d = bg(a);
        d && (c && (c = pb(ng(ci.call(this)) || ""), b = b.search(c), b.length && b[0].a != d.a && (c = "+" + d.a + c.substr(b[0].a.length + 1), og(ci.call(this), c))), b = bg(this.sc), this.sc = a, a = this.u("firebaseui-id-country-selector-flag"), b && lg(a, ji(b)), kg(a, ji(d)), Qc(this.u("firebaseui-id-country-selector-code"), "\u200e+" + d.a))
    };

    function li() {
        return this.u("firebaseui-id-resend-countdown")
    };
    var mi = {},
        ni = 0;

    function oi(a, b) {
        if (!a) throw Error("Event target element must be provided!");
        a = pi(a);
        if (mi[a] && mi[a].length)
            for (var c = 0; c < mi[a].length; c++) mi[a][c].dispatchEvent(b)
    }

    function qi(a) {
        var b = pi(a.fa());
        mi[b] && mi[b].length && (Va(mi[b], function(c) {
            return c == a
        }), mi[b].length || delete mi[b])
    }

    function pi(a) {
        "undefined" === typeof a.Ke && (a.Ke = ni, ni++);
        return a.Ke
    }

    function ri(a) {
        if (!a) throw Error("Event target element must be provided!");
        we.call(this);
        this.Gg = a
    }
    p(ri, we);
    ri.prototype.fa = function() {
        return this.Gg
    };
    ri.prototype.register = function() {
        var a = pi(this.fa());
        mi[a] ? Sa(mi[a], this) || mi[a].push(this) : mi[a] = [this]
    };
    ri.prototype.unregister = function() {
        qi(this)
    };
    var si = {
        Eg: {
            "google.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
            "github.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
            "facebook.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
            "twitter.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
            password: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",
            phone: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",
            anonymous: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png",
            "microsoft.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg",
            "yahoo.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
            "apple.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",
            saml: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",
            oidc: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"
        },
        Dg: {
            "google.com": "#ffffff",
            "github.com": "#333333",
            "facebook.com": "#3b5998",
            "twitter.com": "#55acee",
            password: "#db4437",
            phone: "#02bd7e",
            anonymous: "#f4b400",
            "microsoft.com": "#2F2F2F",
            "yahoo.com": "#720E9E",
            "apple.com": "#000000",
            saml: "#007bff",
            oidc: "#007bff"
        },
        Fg: {
            "google.com": "Google",
            "github.com": "GitHub",
            "facebook.com": "Facebook",
            "twitter.com": "Twitter",
            password: "Password",
            phone: "Phone",
            anonymous: "Guest",
            "microsoft.com": "Microsoft",
            "yahoo.com": "Yahoo",
            "apple.com": "Apple"
        }
    };

    function ti(a, b, c) {
        Td.call(this, a, b);
        for (var d in c) this[d] = c[d]
    }
    x(ti, Td);

    function L(a, b, c, d, e) {
        Fe.call(this, c);
        this.Af = a;
        this.zf = b;
        this.Vc = !1;
        this.cd = d || null;
        this.Sa = this.Fa = null;
        this.Eb = cb(si);
        eb(this.Eb, e || {})
    }
    x(L, Fe);
    k = L.prototype;
    k.Fd = function() {
        var a = nh(this.Af, this.zf, this.Eb, this.Cb());
        Rg(a);
        this.f = a
    };
    k.l = function() {
        L.$.l.call(this);
        oi(M(this), new ti("pageEnter", M(this), {
            pageId: this.cd
        }));
        if (this.Ue() && this.Eb.S) {
            var a = this.Eb.S;
            I(this, this.Ue(), function() {
                a()
            })
        }
        if (this.Te() && this.Eb.R) {
            var b = this.Eb.R;
            I(this, this.Te(), function() {
                b()
            })
        }
    };
    k.$b = function() {
        oi(M(this), new ti("pageExit", M(this), {
            pageId: this.cd
        }));
        L.$.$b.call(this)
    };
    k.h = function() {
        window.clearTimeout(this.Fa);
        this.zf = this.Af = this.Fa = null;
        this.Vc = !1;
        this.Sa = null;
        Tg(this.fa());
        L.$.h.call(this)
    };

    function ui(a) {
        a.Vc = !0;
        var b = jg(a.fa(), "firebaseui-use-spinner");
        a.Fa = window.setTimeout(function() {
            a.fa() && null === a.Sa && (a.Sa = nh(Fh, {
                Qb: b
            }, null, a.Cb()), a.fa().appendChild(a.Sa), Rg(a.Sa))
        }, 500)
    }
    k.Y = function(a, b, c, d) {
        function e() {
            if (f.isDisposed()) return null;
            f.Vc = !1;
            window.clearTimeout(f.Fa);
            f.Fa = null;
            f.Sa && (Tg(f.Sa), Pc(f.Sa), f.Sa = null)
        }
        var f = this;
        if (f.Vc) return null;
        ui(f);
        return a.apply(null, b).then(c, d).then(e, e)
    };

    function M(a) {
        return a.fa().parentElement || a.fa().parentNode
    }

    function vi(a, b, c) {
        Lg(a, b, function() {
            c.focus()
        })
    }

    function wi(a, b, c) {
        Lg(a, b, function() {
            c()
        })
    }
    v(L.prototype, {
        F: function(a) {
            Hh.call(this);
            var b = nh(Bh, {
                message: a
            }, null, this.Cb());
            this.fa().appendChild(b);
            I(this, Jh.call(this), function() {
                Pc(b)
            })
        },
        wi: Hh,
        zi: Ih,
        yi: Jh,
        Mb: function(a, b) {
            a = nh(Dh, {
                fc: a,
                message: b
            }, null, this.Cb());
            Vg.call(this, a)
        },
        da: Wg,
        Pg: Xg,
        Bi: function() {
            return this.u("firebaseui-tos")
        },
        Ue: function() {
            return this.u("firebaseui-tos-link")
        },
        Te: function() {
            return this.u("firebaseui-pp-link")
        },
        Ci: function() {
            return this.u("firebaseui-tos-list")
        }
    });

    function xi(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        c = G(null == a.ya || "boolean" === typeof a.ya || 1 === a.ya || 0 === a.ya, "displayCancelButton", a.ya, "boolean|null|undefined");
        var d = G(null == a.M || "boolean" === typeof a.M || 1 === a.M || 0 === a.M, "displayFullTosPpMessage", a.M, "boolean|null|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign up with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' +
            (D(qh(a)) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (c ? D(yh(null)) : "") + D(rh(null)) + '</div></div><div class="firebaseui-card-footer">' + (d ? D(Ah(b)) : D(zh(b))) + "</div></form></div>");
        return E(a)
    }
    xi.m = "firebaseui.auth.soy2.page.signIn";

    function yi(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        c = G(null == a.M || "boolean" === typeof a.M || 1 === a.M || 0 === a.M, "displayFullTosPpMessage", a.M, "boolean|null|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in' + ('</h1></div><div class="firebaseui-card-content">' + D(qh(a)) + D(wh()) +
            '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + D(xh()) + '</div><div class="firebaseui-form-actions">' + D(sh()) + '</div></div><div class="firebaseui-card-footer">' + (c ? D(Ah(b)) : D(zh(b))) + "</div></form></div>");
        return E(a)
    }
    yi.m = "firebaseui.auth.soy2.page.passwordSignIn";

    function zi(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var d = G(null == a.uc || "boolean" === typeof a.uc || 1 === a.uc || 0 === a.uc, "requireDisplayName", a.uc, "boolean|null|undefined");
        G(null == a.name || "string" === typeof a.name, "name", a.name, "null|string|undefined");
        c = G(null == a.ua || "boolean" === typeof a.ua || 1 === a.ua || 0 === a.ua, "allowCancel", a.ua, "boolean|null|undefined");
        var e = G(null == a.M || "boolean" === typeof a.M || 1 === a.M || 0 === a.M, "displayFullTosPpMessage",
                a.M, "boolean|null|undefined"),
            f = '</h1></div><div class="firebaseui-card-content">' + D(qh(a));
        d ? (a = a || {}, a = G(null == a.name || "string" === typeof a.name, "name", a.name, "null|string|undefined"), a = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="name">First &amp; last name</label><input type="text" name="name" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' +
            (Hf(null != a ? a : "") + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>'), a = E(a), a = D(a)) : a = "";
        b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account' + (f + a + D(vh(null)) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            (c ? D(yh(null)) : "") + D(th()) + '</div></div><div class="firebaseui-card-footer">' + (e ? D(Ah(b)) : D(zh(b))) + "</div></form></div>");
        return E(b)
    }
    zi.m = "firebaseui.auth.soy2.page.passwordSignUp";

    function Ai(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        c = G(null == a.ua || "boolean" === typeof a.ua || 1 === a.ua || 0 === a.ua, "allowCancel", a.ua, "boolean|null|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' + (D(qh(a)) +
            '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (c ? D(yh(null)) : ""));
        a += D(rh({
            label: "Send"
        }));
        a += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(a)
    }
    Ai.m = "firebaseui.auth.soy2.page.passwordRecovery";

    function Bi(a, b, c) {
        b = c || b;
        c = G("string" === typeof a.email, "email", a.email, "string");
        a = G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "Follow the instructions sent to <strong>" +
            (D(c) + "</strong> to recover your password");
        d = d + c + '</p></div><div class="firebaseui-card-actions">';
        a && (d = d + '<div class="firebaseui-form-actions">' + D(rh({
            label: "Done"
        })), d += "</div>");
        d += '</div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></div>";
        return E(d)
    }
    Bi.m = "firebaseui.auth.soy2.page.passwordRecoveryEmailSent";

    function Ci(a, b, c) {
        return E('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + D(Fh(null, c || b)) + "</div></div>")
    }
    Ci.m = "firebaseui.auth.soy2.page.callback";

    function Di(a, b, c) {
        return E('<div class="firebaseui-container firebaseui-id-page-spinner">' + D(Fh({
            Qb: !0
        }, c || b)) + "</div>")
    }
    Di.m = "firebaseui.auth.soy2.page.spinner";

    function Ei() {
        return E('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')
    }
    Ei.m = "firebaseui.auth.soy2.page.blank";

    function Fi(a, b, c) {
        b = c || b;
        c = G("string" === typeof a.email, "email", a.email, "string");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">';
        c = "A sign-in email with additional instructions was sent to <strong>" + (D(c) + "</strong>. Check your email to complete sign-in.");
        a += c;
        c = E('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
        a += '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + D(c) + '</div><div class="firebaseui-form-actions">';
        a += D(yh({
            label: "Back"
        }));
        a += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(a)
    }
    Fi.m = "firebaseui.auth.soy2.page.emailLinkSignInSent";

    function Gi(a, b, c) {
        b = c || b;
        a = E('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>');
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' +
            (D(a) + '</div><div class="firebaseui-form-actions">');
        a += D(yh({
            label: "Back"
        }));
        a += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(a)
    }
    Gi.m = "firebaseui.auth.soy2.page.emailNotReceived";

    function Hi(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">' + (D(qh(a)) +
            '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(yh(null)) + D(rh(null)) + '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>");
        return E(a)
    }
    Hi.m = "firebaseui.auth.soy2.page.emailLinkSignInConfirmation";

    function Ii() {
        var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(yh({
            label: "Dismiss"
        }));
        return E(a +
            "</div></div></div>")
    }
    Ii.m = "firebaseui.auth.soy2.page.differentDeviceError";

    function Ji() {
        var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(yh({
            label: "Dismiss"
        }));
        return E(a + "</div></div></div>")
    }
    Ji.m = "firebaseui.auth.soy2.page.anonymousUserMismatch";

    function Ki(a, b, c) {
        b = c || b;
        c = G("string" === typeof a.email, "email", a.email, "string");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        c = "You\u2019ve already used <strong>" + (D(c) + "</strong> to sign in. Enter your password for that account.");
        a = a + c + ("</p>" + D(wh()) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + D(xh()) + '</div><div class="firebaseui-form-actions">' + D(sh()) + '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>");
        return E(a)
    }
    Ki.m = "firebaseui.auth.soy2.page.passwordLinking";

    function Li(a, b, c) {
        b = c || b;
        var d = G("string" === typeof a.email, "email", a.email, "string");
        G(null == a.H || r(a.H), "providerConfig", a.H, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        c = "";
        a = "" + Gh(a, b);
        c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">';
        d = "You\u2019ve already used <strong>" + (D(d) + ("</strong>. You can connect your <strong>" + (D(a) + ("</strong> account with <strong>" + (D(d) + "</strong> by signing in with email link below.")))));
        c = c + d + '<p class="firebaseui-text firebaseui-text-justify">';
        a = "For this flow to successfully connect your " + (D(a) + " account with this email, you have to open the link on the same device or browser.");
        c = c + a + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(sh()) + '</div></div><div class="firebaseui-card-footer">' +
            D(zh(b)) + "</div></form></div>");
        return E(c)
    }
    Li.m = "firebaseui.auth.soy2.page.emailLinkSignInLinking";

    function Mi(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.H || r(a.H), "providerConfig", a.H, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        c = "";
        a = "" + Gh(a, b);
        c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">';
        var d =
            "You originally intended to connect <strong>" + (D(a) + "</strong> to your email account but have opened the link on a different device where you are not signed in.");
        c = c + d + '</p><p class="firebaseui-text firebaseui-text-justify">';
        a = "If you still want to connect your <strong>" + (D(a) + "</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");
        c = c + a + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            D(uh()) + '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>");
        return E(c)
    }
    Mi.m = "firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";

    function Ni(a, b, c) {
        b = c || b;
        var d = G("string" === typeof a.email, "email", a.email, "string");
        G(null == a.H || r(a.H), "providerConfig", a.H, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        c = "";
        a = "" + Gh(a, b);
        c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        d =
            "You\u2019ve already used <strong>" + (D(d) + ("</strong>. Sign in with " + (D(a) + " to continue.")));
        c = c + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(rh({
            label: "Sign in with " + a
        }));
        c += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(c)
    }
    Ni.m = "firebaseui.auth.soy2.page.federatedLinking";

    function Oi(a, b, c) {
        b = c || b;
        c = G("string" === typeof a.email, "email", a.email, "string");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "To continue sign in with <strong>" + (D(c) + "</strong> on this device, you have to recover the password.");
        a = a + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            D(yh(null)));
        a += D(rh({
            label: "Recover password"
        }));
        a += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(a)
    }
    Oi.m = "firebaseui.auth.soy2.page.unsupportedProvider";

    function Pi(a) {
        var b = G("string" === typeof a.email, "email", a.email, "string");
        var c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">';
        b = '<p class="firebaseui-text">for <strong>' + (D(b) + "</strong></p>");
        var d = {
                label: "New password"
            },
            e;
        for (e in a) e in d || (d[e] = a[e]);
        c = c + b + D(vh(d));
        c += '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            D(th()) + "</div></div></form></div>";
        return E(c)
    }
    Pi.m = "firebaseui.auth.soy2.page.passwordReset";

    function Qi(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' + ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' +
            D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Qi.m = "firebaseui.auth.soy2.page.passwordResetSuccess";

    function Ri(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue",
            a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Ri.m = "firebaseui.auth.soy2.page.passwordResetFailure";

    function Si(a) {
        var b = G("string" === typeof a.email, "email", a.email, "string");
        a = G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined");
        var c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        b = "Your sign-in email address has been changed back to <strong>" +
            (D(b) + "</strong>.");
        c = c + b + '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.';
        c += '</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></form></div>";
        return E(c)
    }
    Si.m = "firebaseui.auth.soy2.page.emailChangeRevokeSuccess";

    function Ti(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">' +
            ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Ti.m = "firebaseui.auth.soy2.page.emailChangeRevokeFailure";

    function Ui(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' + ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' +
            D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Ui.m = "firebaseui.auth.soy2.page.emailVerificationSuccess";

    function Vi(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue",
            a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Vi.m = "firebaseui.auth.soy2.page.emailVerificationFailure";

    function Wi(a) {
        var b = G("string" === typeof a.email, "email", a.email, "string");
        a = G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined");
        var c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        b = "You can now sign in with your new email <strong>" +
            (D(b) + "</strong>.");
        c = c + b + ('</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(c)
    }
    Wi.m = "firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";

    function Xi(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' + ((G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j,
            "allowContinue", a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Xi.m = "firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";

    function Yi(a) {
        var b = G("string" === typeof a.factorId, "factorId", a.factorId, "string"),
            c = G(null == a.phoneNumber || "string" === typeof a.phoneNumber, "phoneNumber", a.phoneNumber, "null|string|undefined");
        a = G(null == a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        switch (r(b) ?
            b.toString() : b) {
            case "phone":
                b = "The <strong>" + (D(b) + (" " + (D(c) + "</strong> was removed as a second authentication step.")));
                d += b;
                break;
            default:
                d += "The device or app was removed as a second authentication step."
        }
        d = d + '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' +
            ((a ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></form></div>");
        return E(d)
    }
    Yi.m = "firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";

    function Zi(a) {
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' + ((G(null ==
            a.j || "boolean" === typeof a.j || 1 === a.j || 0 === a.j, "allowContinue", a.j, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + D(uh()) + "</div>" : "") + "</div></div>");
        return E(a)
    }
    Zi.m = "firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";

    function $i(a) {
        var b = G("string" === typeof a.errorMessage, "errorMessage", a.errorMessage, "string");
        a = G(null == a.Tb || "boolean" === typeof a.Tb || 1 === a.Tb || 0 === a.Tb, "allowRetry", a.Tb, "boolean|null|undefined");
        b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + (D(b) + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">');
        a && (b += D(rh({
            label: "Retry"
        })));
        return E(b + "</div></div></div>")
    }
    $i.m = "firebaseui.auth.soy2.page.recoverableError";

    function aj(a) {
        a = G("string" === typeof a.errorMessage, "errorMessage", a.errorMessage, "string");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + (D(a) + "</p></div></div>");
        return E(a)
    }
    aj.m = "firebaseui.auth.soy2.page.unrecoverableError";

    function bj(a, b, c) {
        b = c || b;
        c = G("string" === typeof a.Lf, "userEmail", a.Lf, "string");
        var d = G("string" === typeof a.mf, "pendingEmail", a.mf, "string");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">';
        c = "Continue with " + (D(c) + "?");
        a = a + c + '</h2><p class="firebaseui-text">';
        c = "You originally wanted to sign in with " +
            D(d);
        a = a + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(yh(null)));
        a += D(rh({
            label: "Continue"
        }));
        a += '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form></div>";
        return E(a)
    }
    bj.m = "firebaseui.auth.soy2.page.emailMismatch";

    function cj(a, b, c) {
        b = c || b;
        a = G(Aa(a.pf), "providerConfigs", a.pf, "!Array<{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}>");
        var d = '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';
        c = a.length;
        for (var e = 0; e < c; e++) {
            var f = {
                H: a[e]
            };
            var g = b;
            f = f || {};
            var h = G(null == f.H || r(f.H), "providerConfig", f.H, "null|undefined|{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"),
                m = f;
            m = m || {};
            var n = "";
            m = G(null == m.H || r(m.H), "providerConfig", m.H, "null|undefined|{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}").providerId;
            switch (r(m) ? m.toString() : m) {
                case "google.com":
                    n += "firebaseui-idp-google";
                    break;
                case "github.com":
                    n += "firebaseui-idp-github";
                    break;
                case "facebook.com":
                    n += "firebaseui-idp-facebook";
                    break;
                case "twitter.com":
                    n += "firebaseui-idp-twitter";
                    break;
                case "phone":
                    n += "firebaseui-idp-phone";
                    break;
                case "anonymous":
                    n += "firebaseui-idp-anonymous";
                    break;
                case "password":
                    n += "firebaseui-idp-password";
                    break;
                default:
                    n += "firebaseui-idp-generic"
            }
            n = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + Hf(n) + ' firebaseui-id-idp-button" data-provider-id="' + Hf(h.providerId) +
                '" style="background-color:';
            var l = f;
            m = g;
            l = l || {};
            l = G(null == l.H || r(l.H), "providerConfig", l.H, "null|undefined|{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
            m = m.Dg;
            n = n + Hf(Tf(l.Bc ? "" + l.Bc : m[l.providerId] ? "" + m[l.providerId] : 0 == ("" + l.providerId).indexOf("saml.") ? "" + m.saml : 0 == ("" + l.providerId).indexOf("oidc.") ? "" + m.oidc : "" + m.password)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
            l = f;
            m = g;
            l = l || {};
            l = G(null == l.H || r(l.H), "providerConfig", l.H, "null|undefined|{providerId: string, providerName: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
            m = m.Eg;
            m = l.Uc ? Mf(l.Uc) : m[l.providerId] ? Mf(m[l.providerId]) : 0 == ("" + l.providerId).indexOf("saml.") ? Mf(m.saml) : 0 == ("" + l.providerId).indexOf("oidc.") ? Mf(m.oidc) : Mf(m.password);
            m = Cf(m);
            n = n + Hf(Rf(m)) + '"></span>';
            Df(h.providerId, "password") ? n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign up with email</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Email</span>' :
                Df(h.providerId, "phone") ? n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign up with phone</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Phone</span>' : Df(h.providerId, "anonymous") ? n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Continue as guest</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Guest</span>' : (n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">', h = "Sign up with " + D(Gh(f, g)), n = n + h + ('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' +
                    D(Gh(f, g)) + "</span>"));
            n += "</button>";
            f = E(n);
            d += '<li class="firebaseui-list-item">' + D(f) + "</li>"
        }
        d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + D(Ah(b)) + "</div></div>";
        return E(d)
    }
    cj.m = "firebaseui.auth.soy2.page.providerSignIn";

    function dj(a, b, c) {
        b = c || b;
        a = a || {};
        G(null == a.Pa || "string" === typeof a.Pa, "nationalNumber", a.Pa, "null|string|undefined");
        var d = G(null == a.Zb || "boolean" === typeof a.Zb || 1 === a.Zb || 0 === a.Zb, "enableVisibleRecaptcha", a.Zb, "boolean|null|undefined"),
            e = G(null == a.ya || "boolean" === typeof a.ya || 1 === a.ya || 0 === a.ya, "displayCancelButton", a.ya, "boolean|null|undefined");
        c = G(null == a.M || "boolean" === typeof a.M || 1 === a.M || 0 === a.M, "displayFullTosPpMessage", a.M, "boolean|null|undefined");
        a = a || {};
        a = G(null == a.Pa || "string" === typeof a.Pa,
            "nationalNumber", a.Pa, "null|string|undefined");
        a = '<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="phoneNumber">Phone number</label><input type="tel" name="phoneNumber" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="' +
            (Hf(null != a ? a : "") + '"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>');
        a = E(a);
        a = '</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + D(a);
        d ? (d = E('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'),
            d = D(d)) : d = "";
        e = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number' + (a + d + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (e ? D(yh(null)) : ""));
        e += D(rh({
            label: "Verify"
        }));
        c ? (c = b.R, d = '<p class="firebaseui-tos firebaseui-phone-tos">', d = Ef(b.S) && Ef(c) ? d + 'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.' :
            d + "By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.", b = E(d + "</p>"), b = D(b)) : (c = E('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>'), b = D(c) + D(zh(b)));
        return E(e + ('</div></div><div class="firebaseui-card-footer">' + b + "</div></form></div>"))
    }
    dj.m = "firebaseui.auth.soy2.page.phoneSignInStart";

    function ej(a, b, c) {
        b = c || b;
        a = a || {};
        a = G(null == a.phoneNumber || "string" === typeof a.phoneNumber, "phoneNumber", a.phoneNumber, "null|string|undefined");
        c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        var d = 'Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;' +
            (D(a) + "</a>");
        D(a);
        a = c + d;
        c = E('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="phoneConfirmationCode">6-digit code</label><input type="number" name="phoneConfirmationCode" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
        c = a + ("</p>" + D(c) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(yh(null)));
        a = c += D(rh({
            label: "Continue"
        }));
        b = '</div></div><div class="firebaseui-card-footer">' + D(zh(b)) + "</div></form>";
        c = E('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');
        c = a + (b + D(c) + "</div>");
        return E(c)
    }
    ej.m = "firebaseui.auth.soy2.page.phoneSignInFinish";

    function fj() {
        return E('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')
    }
    fj.m = "firebaseui.auth.soy2.page.signOut";

    function gj(a, b, c) {
        b = c || b;
        a = G(Aa(a.Bf), "tenantConfigs", a.Bf, "!Array<{tenantId: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}>");
        var d = '<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';
        c = a.length;
        for (var e = 0; e < c; e++) {
            var f = a[e];
            var g = G(r(f), "tenantConfig", f, "{tenantId: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}");
            f = '<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-' + Hf(g.tenantId ? "" + g.tenantId : "top-level-project") + ' firebaseui-id-tenant-selection-button"' + (g.tenantId ? ' data-tenant-id="' + Hf(g.tenantId) + '"' : "") + ' style="background-color:' + Hf(Tf(g.Bc)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="' + Hf(Rf(g.Uc)) + '"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">';
            var h = "Sign in to " + D(g.displayName);
            f = f + h + '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">';
            g = D(g.displayName);
            f += g;
            f += "</span></button>";
            f = E(f);
            d += '<li class="firebaseui-list-item">' + D(f) + "</li>"
        }
        d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + D(Ah(b)) + "</div></div>";
        return E(d)
    }
    gj.m = "firebaseui.auth.soy2.page.selectTenant";

    function hj(a, b, c) {
        b = c || b;
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + (D(qh(null)) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + D(rh(null)) + '</div></div><div class="firebaseui-card-footer">' + D(Ah(b)) + "</div></form></div>");
        return E(a)
    }
    hj.m = "firebaseui.auth.soy2.page.providerMatchByEmail";

    function ij(a, b) {
        L.call(this, Ji, void 0, b, "anonymousUserMismatch");
        this.mc = a
    }
    p(ij, L);
    ij.prototype.l = function() {
        var a = this;
        I(this, this.I(), function() {
            a.mc()
        });
        this.I().focus();
        L.prototype.l.call(this)
    };
    ij.prototype.h = function() {
        this.mc = null;
        L.prototype.h.call(this)
    };
    v(ij.prototype, {
        I: K
    });

    function jj(a) {
        L.call(this, Ei, void 0, a, "blank")
    }
    p(jj, L);

    function kj(a) {
        L.call(this, Ci, void 0, a, "callback")
    }
    p(kj, L);
    kj.prototype.Y = function(a, b, c, d) {
        return a.apply(null, b).then(c, d)
    };

    function lj(a, b) {
        L.call(this, Ii, void 0, b, "differentDeviceError");
        this.mc = a
    }
    p(lj, L);
    lj.prototype.l = function() {
        var a = this;
        I(this, this.I(), function() {
            a.mc()
        });
        this.I().focus();
        L.prototype.l.call(this)
    };
    lj.prototype.h = function() {
        this.mc = null;
        L.prototype.h.call(this)
    };
    v(lj.prototype, {
        I: K
    });

    function mj(a, b, c, d) {
        L.call(this, Si, {
            email: a,
            j: !!c
        }, d, "emailChangeRevoke");
        this.pc = b;
        this.ca = c || null
    }
    p(mj, L);
    mj.prototype.l = function() {
        var a = this;
        I(this, nj(this), function() {
            a.pc()
        });
        this.ca && (this.v(this.ca), this.C().focus());
        L.prototype.l.call(this)
    };
    mj.prototype.h = function() {
        this.pc = this.ca = null;
        L.prototype.h.call(this)
    };

    function nj(a) {
        return a.u("firebaseui-id-reset-password-link")
    }
    v(mj.prototype, {
        C: J,
        I: K,
        v: kh
    });

    function oj(a, b) {
        try {
            var c = "number" == typeof a.selectionStart
        } catch (d) {
            c = !1
        }
        c ? (a.selectionStart = b, a.selectionEnd = b) : A && !vc("9") && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select())
    };

    function pj(a, b, c, d, e, f) {
        L.call(this, Hi, {
            email: c
        }, f, "emailLinkSignInConfirmation", {
            S: d,
            R: e
        });
        this.Da = a;
        this.D = b
    }
    p(pj, L);
    pj.prototype.l = function() {
        this.Ba(this.Da);
        this.v(this.Da, this.D);
        this.Ea();
        L.prototype.l.call(this)
    };
    pj.prototype.h = function() {
        this.D = this.Da = null;
        L.prototype.h.call(this)
    };
    pj.prototype.Ea = function() {
        this.w().focus();
        oj(this.w(), (this.w().value || "").length)
    };
    v(pj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        C: J,
        I: K,
        v: kh
    });

    function qj(a, b, c, d, e, f) {
        L.call(this, Li, {
            email: a,
            H: b
        }, f, "emailLinkSignInLinking", {
            S: d,
            R: e
        });
        this.s = c
    }
    p(qj, L);
    qj.prototype.l = function() {
        this.v(this.s);
        this.C().focus();
        L.prototype.l.call(this)
    };
    qj.prototype.h = function() {
        this.s = null;
        L.prototype.h.call(this)
    };
    v(qj.prototype, {
        C: J,
        v: kh
    });

    function rj(a, b, c, d, e) {
        L.call(this, Mi, {
            H: a
        }, e, "emailLinkSignInLinkingDifferentDevice", {
            S: c,
            R: d
        });
        this.ca = b
    }
    p(rj, L);
    rj.prototype.l = function() {
        this.v(this.ca);
        this.C().focus();
        L.prototype.l.call(this)
    };
    rj.prototype.h = function() {
        this.ca = null;
        L.prototype.h.call(this)
    };
    v(rj.prototype, {
        C: J,
        v: kh
    });

    function sj(a, b, c, d, e, f) {
        L.call(this, Fi, {
            email: a
        }, f, "emailLinkSignInSent", {
            S: d,
            R: e
        });
        this.kf = b;
        this.D = c
    }
    p(sj, L);
    sj.prototype.l = function() {
        var a = this;
        I(this, this.I(), function() {
            a.D()
        });
        I(this, this.u("firebaseui-id-trouble-getting-email-link"), function() {
            a.kf()
        });
        this.I().focus();
        L.prototype.l.call(this)
    };
    sj.prototype.h = function() {
        this.D = this.kf = null;
        L.prototype.h.call(this)
    };
    v(sj.prototype, {
        I: K
    });

    function tj(a, b, c, d, e, f, g) {
        L.call(this, bj, {
            Lf: a,
            mf: b
        }, g, "emailMismatch", {
            S: e,
            R: f
        });
        this.ca = c;
        this.D = d
    }
    p(tj, L);
    tj.prototype.l = function() {
        this.v(this.ca, this.D);
        this.C().focus();
        L.prototype.l.call(this)
    };
    tj.prototype.h = function() {
        this.D = this.s = null;
        L.prototype.h.call(this)
    };
    v(tj.prototype, {
        C: J,
        I: K,
        v: kh
    });

    function uj(a, b, c, d, e) {
        L.call(this, Gi, void 0, e, "emailNotReceived", {
            S: c,
            R: d
        });
        this.oc = a;
        this.D = b
    }
    p(uj, L);
    uj.prototype.l = function() {
        var a = this;
        I(this, this.I(), function() {
            a.D()
        });
        I(this, this.Mc(), function() {
            a.oc()
        });
        this.I().focus();
        L.prototype.l.call(this)
    };
    uj.prototype.Mc = function() {
        return this.u("firebaseui-id-resend-email-link")
    };
    uj.prototype.h = function() {
        this.D = this.oc = null;
        L.prototype.h.call(this)
    };
    v(uj.prototype, {
        I: K
    });

    function vj(a, b, c, d, e, f) {
        L.call(this, Ni, {
            email: a,
            H: b
        }, f, "federatedLinking", {
            S: d,
            R: e
        });
        this.s = c
    }
    p(vj, L);
    vj.prototype.l = function() {
        this.v(this.s);
        this.C().focus();
        L.prototype.l.call(this)
    };
    vj.prototype.h = function() {
        this.s = null;
        L.prototype.h.call(this)
    };
    v(vj.prototype, {
        C: J,
        v: kh
    });

    function N(a, b, c, d, e, f) {
        L.call(this, a, b, d, e || "notice", f);
        this.ca = c || null
    }
    x(N, L);
    N.prototype.l = function() {
        this.ca && (this.v(this.ca), this.C().focus());
        N.$.l.call(this)
    };
    N.prototype.h = function() {
        this.ca = null;
        N.$.h.call(this)
    };
    v(N.prototype, {
        C: J,
        I: K,
        v: kh
    });

    function wj(a, b, c, d, e) {
        N.call(this, Bi, {
            email: a,
            j: !!b
        }, b, e, "passwordRecoveryEmailSent", {
            S: c,
            R: d
        })
    }
    x(wj, N);

    function xj(a, b) {
        N.call(this, Ui, {
            j: !!a
        }, a, b, "emailVerificationSuccess")
    }
    x(xj, N);

    function yj(a, b) {
        N.call(this, Vi, {
            j: !!a
        }, a, b, "emailVerificationFailure")
    }
    x(yj, N);

    function zj(a, b, c) {
        N.call(this, Wi, {
            email: a,
            j: !!b
        }, b, c, "verifyAndChangeEmailSuccess")
    }
    x(zj, N);

    function Aj(a, b) {
        N.call(this, Xi, {
            j: !!a
        }, a, b, "verifyAndChangeEmailFailure")
    }
    x(Aj, N);

    function Bj(a, b) {
        N.call(this, Zi, {
            j: !!a
        }, a, b, "revertSecondFactorAdditionFailure")
    }
    x(Bj, N);

    function Cj(a) {
        N.call(this, fj, void 0, void 0, a, "signOut")
    }
    x(Cj, N);

    function Dj(a, b) {
        N.call(this, Qi, {
            j: !!a
        }, a, b, "passwordResetSuccess")
    }
    x(Dj, N);

    function Ej(a, b) {
        N.call(this, Ri, {
            j: !!a
        }, a, b, "passwordResetFailure")
    }
    x(Ej, N);

    function Fj(a, b) {
        N.call(this, Ti, {
            j: !!a
        }, a, b, "emailChangeRevokeFailure")
    }
    x(Fj, N);

    function Gj(a, b, c) {
        N.call(this, $i, {
            errorMessage: a,
            Tb: !!b
        }, b, c, "recoverableError")
    }
    x(Gj, N);

    function Hj(a, b) {
        N.call(this, aj, {
            errorMessage: a
        }, void 0, b, "unrecoverableError")
    }
    x(Hj, N);

    function Ij(a, b, c, d, e, f) {
        L.call(this, Ki, {
            email: a
        }, f, "passwordLinking", {
            S: d,
            R: e
        });
        this.s = b;
        this.bd = c
    }
    p(Ij, L);
    Ij.prototype.l = function() {
        this.Td();
        this.v(this.s, this.bd);
        wi(this, this.La(), this.s);
        this.La().focus();
        L.prototype.l.call(this)
    };
    Ij.prototype.h = function() {
        this.s = null;
        L.prototype.h.call(this)
    };
    Ij.prototype.oa = function() {
        return ng(this.u("firebaseui-id-email"))
    };
    v(Ij.prototype, {
        La: Uh,
        Ld: Vh,
        Td: Wh,
        Cd: Xh,
        C: J,
        I: K,
        v: kh
    });

    function Jj(a, b, c, d, e, f) {
        L.call(this, Ai, {
            email: c,
            ua: !!b
        }, f, "passwordRecovery", {
            S: d,
            R: e
        });
        this.s = a;
        this.D = b
    }
    p(Jj, L);
    Jj.prototype.l = function() {
        this.Ba();
        this.v(this.s, this.D);
        ng(this.w()) || this.w().focus();
        wi(this, this.w(), this.s);
        L.prototype.l.call(this)
    };
    Jj.prototype.h = function() {
        this.D = this.s = null;
        L.prototype.h.call(this)
    };
    v(Jj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        C: J,
        I: K,
        v: kh
    });

    function Kj(a, b, c) {
        L.call(this, Pi, {
            email: a
        }, c, "passwordReset");
        this.s = b
    }
    p(Kj, L);
    Kj.prototype.l = function() {
        this.Sd();
        this.v(this.s);
        wi(this, this.za(), this.s);
        this.za().focus();
        L.prototype.l.call(this)
    };
    Kj.prototype.h = function() {
        this.s = null;
        L.prototype.h.call(this)
    };
    v(Kj.prototype, {
        za: Oh,
        Kd: Rh,
        Qg: Ph,
        Sd: Sh,
        Bd: Th,
        C: J,
        I: K,
        v: kh
    });

    function Lj(a, b, c, d, e, f, g) {
        L.call(this, yi, {
            email: c,
            M: !!f
        }, g, "passwordSignIn", {
            S: d,
            R: e
        });
        this.s = a;
        this.bd = b
    }
    p(Lj, L);
    Lj.prototype.l = function() {
        this.Ba();
        this.Td();
        this.v(this.s, this.bd);
        vi(this, this.w(), this.La());
        wi(this, this.La(), this.s);
        ng(this.w()) ? this.La().focus() : this.w().focus();
        L.prototype.l.call(this)
    };
    Lj.prototype.h = function() {
        this.bd = this.s = null;
        L.prototype.h.call(this)
    };
    v(Lj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        La: Uh,
        Ld: Vh,
        Td: Wh,
        Cd: Xh,
        C: J,
        I: K,
        v: kh
    });

    function Mj(a, b, c, d, e, f, g, h, m) {
        L.call(this, zi, {
            email: d,
            uc: a,
            name: e,
            ua: !!c,
            M: !!h
        }, m, "passwordSignUp", {
            S: f,
            R: g
        });
        this.s = b;
        this.D = c;
        this.be = a
    }
    p(Mj, L);
    Mj.prototype.l = function() {
        this.Ba();
        this.be && this.$g();
        this.Sd();
        this.v(this.s, this.D);
        this.Ea();
        L.prototype.l.call(this)
    };
    Mj.prototype.h = function() {
        this.D = this.s = null;
        L.prototype.h.call(this)
    };
    Mj.prototype.Ea = function() {
        this.be ? (vi(this, this.w(), this.bc()), vi(this, this.bc(), this.za())) : vi(this, this.w(), this.za());
        this.s && wi(this, this.za(), this.s);
        ng(this.w()) ? this.be && !ng(this.bc()) ? this.bc().focus() : this.za().focus() : this.w().focus()
    };
    v(Mj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        bc: Mh,
        Ai: Nh,
        $g: function() {
            var a = Mh.call(this),
                b = Nh.call(this);
            Kg(this, a, function() {
                Qg(b) && (H(a, !0), Og(b))
            })
        },
        wg: function() {
            var a = Mh.call(this);
            var b = Nh.call(this);
            var c = ng(a);
            c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
            H(a, c);
            c ? (Og(b), b = !0) : (Pg(b, "Enter your account name".toString()), b = !1);
            return b ? pb(ng(a)) : null
        },
        za: Oh,
        Kd: Rh,
        Qg: Ph,
        Sd: Sh,
        Bd: Th,
        C: J,
        I: K,
        v: kh
    });

    function Nj(a, b, c, d, e, f, g, h, m) {
        L.call(this, ej, {
            phoneNumber: e
        }, m, "phoneSignInFinish", {
            S: g,
            R: h
        });
        this.Ah = f;
        this.ub = new zg(1E3);
        this.de = f;
        this.gf = a;
        this.s = b;
        this.D = c;
        this.oc = d
    }
    p(Nj, L);
    Nj.prototype.l = function() {
        var a = this;
        this.Gf(this.Ah);
        ge(this.ub, "tick", this.Pd, !1, this);
        this.ub.start();
        I(this, this.u("firebaseui-id-change-phone-number-link"), function() {
            a.gf()
        });
        I(this, this.Mc(), function() {
            a.oc()
        });
        this.ah(this.s);
        this.v(this.s, this.D);
        this.Ea();
        L.prototype.l.call(this)
    };
    Nj.prototype.h = function() {
        this.oc = this.D = this.s = this.gf = null;
        this.ub.stop();
        oe(this.ub, "tick", this.Pd);
        this.ub = null;
        L.prototype.h.call(this)
    };
    Nj.prototype.Pd = function() {
        --this.de;
        0 < this.de ? this.Gf(this.de) : (this.ub.stop(), oe(this.ub, "tick", this.Pd), this.Wg(), this.Oh())
    };
    Nj.prototype.Ea = function() {
        this.Md().focus()
    };
    v(Nj.prototype, {
        Md: Yh,
        Rg: Zh,
        ah: function(a) {
            var b = Yh.call(this),
                c = Zh.call(this);
            Kg(this, b, function() {
                Qg(c) && (H(b, !0), Og(c))
            });
            a && Lg(this, b, function() {
                a()
            })
        },
        xg: function() {
            var a = pb(ng(Yh.call(this)) || "");
            return /^\d{6}$/.test(a) ? a : null
        },
        Ug: li,
        Gf: function(a) {
            var b = li.call(this);
            a = (9 < a ? "0:" : "0:0") + a;
            a = "Resend code in " + G("string" === typeof a, "timeRemaining", a, "string");
            Qc(b, a.toString())
        },
        Wg: function() {
            Og(this.Ug())
        },
        Mc: function() {
            return this.u("firebaseui-id-resend-link")
        },
        Oh: function() {
            Pg(this.Mc())
        },
        C: J,
        I: K,
        v: kh
    });

    function Oj(a, b, c, d, e, f, g, h, m, n) {
        L.call(this, dj, {
            Zb: b,
            Pa: m || null,
            ya: !!c,
            M: !!f
        }, n, "phoneSignInStart", {
            S: d,
            R: e
        });
        this.Bg = h || null;
        this.Hg = b;
        this.s = a;
        this.D = c || null;
        this.kh = g || null
    }
    p(Oj, L);
    Oj.prototype.l = function() {
        this.bh(this.kh, this.Bg);
        this.v(this.s, this.D || void 0);
        this.Ea();
        L.prototype.l.call(this)
    };
    Oj.prototype.h = function() {
        this.D = this.s = null;
        L.prototype.h.call(this)
    };
    Oj.prototype.Ea = function() {
        this.Hg || vi(this, this.kb(), this.C());
        wi(this, this.C(), this.s);
        this.kb().focus();
        oj(this.kb(), (this.kb().value || "").length)
    };
    v(Oj.prototype, {
        Pg: Xg,
        kb: ci,
        Se: ei,
        bh: function(a, b, c) {
            var d = this,
                e = ci.call(this),
                f = di.call(this),
                g = ei.call(this),
                h = a || gg,
                m = h.Ta;
            if (0 == m.length) throw Error("No available countries provided.");
            fi.call(d, h, b);
            I(this, f, function() {
                ki.call(d, h)
            });
            Kg(this, e, function() {
                Qg(g) && (H(e, !0), Og(g));
                var n = pb(ng(e) || ""),
                    l = bg(this.sc),
                    t = h.search(n);
                n = gi("1-US-0", m);
                t.length && t[0].a != l.a && (l = t[0], hi.call(d, "1" == l.a && n ? "1-US-0" : l.b, h))
            });
            c && Lg(this, e, function() {
                c()
            })
        },
        Sg: function(a) {
            var b = pb(ng(ci.call(this)) || "");
            a =
                a || gg;
            var c = a.Ta,
                d = gg.search(b);
            if (d.length && !Sa(c, d[0])) throw og(ci.call(this)), ci.call(this).focus(), Pg(ei.call(this), "The country code provided is not supported.".toString()), Error("The country code provided is not supported.");
            c = bg(this.sc);
            d.length && d[0].a != c.a && hi.call(this, d[0].b, a);
            d.length && (b = b.substr(d[0].a.length + 1));
            return b ? new $h(this.sc, b) : null
        },
        xi: di,
        Tg: function() {
            return this.u("firebaseui-recaptcha-container")
        },
        Nd: function() {
            return this.u("firebaseui-id-recaptcha-error")
        },
        C: J,
        I: K,
        v: kh
    });

    function Pj(a, b, c, d) {
        L.call(this, hj, void 0, d, "providerMatchByEmail", {
            S: b,
            R: c
        });
        this.Da = a
    }
    p(Pj, L);
    Pj.prototype.l = function() {
        this.Ba(this.Da);
        this.v(this.Da);
        this.Ea();
        L.prototype.l.call(this)
    };
    Pj.prototype.h = function() {
        this.Da = null;
        L.prototype.h.call(this)
    };
    Pj.prototype.Ea = function() {
        this.w().focus();
        oj(this.w(), (this.w().value || "").length)
    };
    v(Pj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        C: J,
        v: kh
    });

    function Qj(a, b, c, d, e) {
        L.call(this, cj, {
            pf: b
        }, e, "providerSignIn", {
            S: c,
            R: d
        });
        this.hf = a
    }
    p(Qj, L);
    Qj.prototype.l = function() {
        this.Zg(this.hf);
        L.prototype.l.call(this)
    };
    Qj.prototype.h = function() {
        this.hf = null;
        L.prototype.h.call(this)
    };
    v(Qj.prototype, {
        Zg: function(a) {
            function b(g) {
                a(g)
            }
            for (var c = this.Lc("firebaseui-id-idp-button"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = mh(e, "providerId");
                I(this, e, Fa(b, f))
            }
        }
    });

    function Rj(a, b, c, d, e) {
        L.call(this, Yi, {
            factorId: a,
            phoneNumber: c || null,
            j: !!d
        }, e, "revertSecondFactorAdditionSuccess");
        this.pc = b;
        this.ca = d || null
    }
    p(Rj, L);
    Rj.prototype.l = function() {
        var a = this;
        I(this, nj(this), function() {
            a.pc()
        });
        this.ca && (this.v(this.ca), this.C().focus());
        L.prototype.l.call(this)
    };
    Rj.prototype.h = function() {
        this.pc = this.ca = null;
        L.prototype.h.call(this)
    };
    v(Rj.prototype, {
        C: J,
        I: K,
        v: kh
    });

    function Sj(a, b, c, d, e) {
        L.call(this, gj, {
            Bf: b
        }, e, "selectTenant", {
            S: c,
            R: d
        });
        this.jf = a
    }
    p(Sj, L);
    Sj.prototype.l = function() {
        Tj(this, this.jf);
        L.prototype.l.call(this)
    };
    Sj.prototype.h = function() {
        this.jf = null;
        L.prototype.h.call(this)
    };

    function Tj(a, b) {
        function c(h) {
            b(h)
        }
        for (var d = a.Lc("firebaseui-id-tenant-selection-button"), e = 0; e < d.length; e++) {
            var f = d[e],
                g = mh(f, "tenantId");
            I(a, f, Fa(c, g))
        }
    };

    function Uj(a, b, c, d, e, f, g) {
        L.call(this, xi, {
            email: c,
            ya: !!b,
            M: !!f
        }, g, "signIn", {
            S: d,
            R: e
        });
        this.Da = a;
        this.D = b
    }
    p(Uj, L);
    Uj.prototype.l = function() {
        this.Ba(this.Da);
        this.v(this.Da, this.D || void 0);
        this.Ea();
        L.prototype.l.call(this)
    };
    Uj.prototype.h = function() {
        this.D = this.Da = null;
        L.prototype.h.call(this)
    };
    Uj.prototype.Ea = function() {
        this.w().focus();
        oj(this.w(), (this.w().value || "").length)
    };
    v(Uj.prototype, {
        w: fh,
        ab: gh,
        Ba: hh,
        getEmail: ih,
        oa: jh,
        C: J,
        I: K,
        v: kh
    });

    function Vj(a) {
        L.call(this, Di, void 0, a, "spinner")
    }
    p(Vj, L);

    function Wj(a, b, c, d, e, f) {
        L.call(this, Oi, {
            email: a
        }, f, "unsupportedProvider", {
            S: d,
            R: e
        });
        this.s = b;
        this.D = c
    }
    p(Wj, L);
    Wj.prototype.l = function() {
        this.v(this.s, this.D);
        this.C().focus();
        L.prototype.l.call(this)
    };
    Wj.prototype.h = function() {
        this.D = this.s = null;
        L.prototype.h.call(this)
    };
    v(Wj.prototype, {
        C: J,
        I: K,
        v: kh
    });

    function Xj(a, b, c, d) {
        this.Yb = a;
        this.Le = b || null;
        this.th = c || null;
        this.qf = d || null
    }
    Xj.prototype.getEmail = function() {
        return this.Yb
    };
    Xj.prototype.cc = function() {
        return this.qf || null
    };
    Xj.prototype.Ua = function() {
        return {
            email: this.Yb,
            displayName: this.Le,
            photoUrl: this.th,
            providerId: this.qf
        }
    };

    function Yj(a) {
        return a.email ? new Xj(a.email, a.displayName, a.photoUrl, a.providerId) : null
    };
    var Zj = null;

    function ak(a) {
        return !(!a || -32E3 != a.code || "Service unavailable" != a.message)
    }

    function bk(a, b, c, d) {
        Zj || (a = {
            callbacks: {
                empty: a,
                select: function(e, f) {
                    e && e.account && b ? b(Yj(e.account)) : c && c(!ak(f))
                },
                store: a,
                update: a
            },
            language: "en",
            providers: void 0,
            ui: d
        }, "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? Zj = accountchooser.Api.init(a) : (Zj = new ck(a), dk()))
    }

    function ek(a, b, c) {
        function d() {
            var e = pf(window.location.href, c).toString();
            Zj.select(Pa(b || [], function(f) {
                return f.Ua()
            }), {
                clientCallbackUrl: e
            })
        }
        b && b.length ? d() : Zj.checkEmpty(function(e, f) {
            e || f ? a(!ak(f)) : d()
        })
    }

    function ck(a) {
        this.g = a;
        this.g.callbacks = this.g.callbacks || {}
    }

    function dk() {
        var a = Zj;
        Ca(a.g.callbacks.empty) && a.g.callbacks.empty()
    }
    k = ck.prototype;
    k.store = function() {
        Ca(this.g.callbacks.store) && this.g.callbacks.store(void 0, fk)
    };
    k.select = function() {
        Ca(this.g.callbacks.select) && this.g.callbacks.select(void 0, fk)
    };
    k.update = function() {
        Ca(this.g.callbacks.update) && this.g.callbacks.update(void 0, fk)
    };
    k.checkDisabled = function(a) {
        a(!0)
    };
    k.checkEmpty = function(a) {
        a(void 0, fk)
    };
    k.checkAccountExist = function(a, b) {
        b(void 0, fk)
    };
    k.checkShouldUpdate = function(a, b) {
        b(void 0, fk)
    };
    var fk = {
        code: -32E3,
        message: "Service unavailable",
        data: "Service is unavailable."
    };

    function gk(a) {
        this.W = of(a)
    }

    function hk(a, b) {
        b ? nf(a.W, O.vd, b) : a.W.removeParameter(O.vd)
    }
    gk.prototype.he = function(a) {
        a ? nf(this.W, O.wd, a) : this.W.removeParameter(O.wd)
    };
    gk.prototype.mb = function() {
        return this.W.V.get(O.wd) || null
    };

    function ik(a, b) {
        null !== b ? nf(a.W, O.td, b ? "1" : "0") : a.W.removeParameter(O.td)
    }

    function jk(a) {
        return a.W.V.get(O.sd) || null
    }

    function kk(a, b) {
        b ? nf(a.W, O.PROVIDER_ID, b) : a.W.removeParameter(O.PROVIDER_ID)
    }
    gk.prototype.cc = function() {
        return this.W.V.get(O.PROVIDER_ID) || null
    };
    gk.prototype.toString = function() {
        return this.W.toString()
    };
    var O = {
        sd: "ui_auid",
        ii: "apiKey",
        td: "ui_sd",
        Zf: "mode",
        se: "oobCode",
        PROVIDER_ID: "ui_pid",
        vd: "ui_sid",
        wd: "tenantId"
    };

    function lk() {
        this.Na = {}
    }
    lk.prototype.define = function(a, b) {
        if (a.toLowerCase() in this.Na) throw Error("Configuration " + a + " has already been defined.");
        this.Na[a.toLowerCase()] = b
    };
    lk.prototype.update = function(a, b) {
        if (!(a.toLowerCase() in this.Na)) throw Error("Configuration " + a + " is not defined.");
        this.Na[a.toLowerCase()] = b
    };
    lk.prototype.get = function(a) {
        if (!(a.toLowerCase() in this.Na)) throw Error("Configuration " + a + " is not defined.");
        return this.Na[a.toLowerCase()]
    };

    function mk(a, b) {
        a = a.get(b);
        if (!a) throw Error("Configuration " + b + " is required.");
        return a
    };

    function nk() {};

    function ok(a, b, c, d) {
        this.lh = "undefined" !== typeof a && null !== a ? a : -1;
        this.la = b || null;
        this.pa = c || null;
        this.Fh = !!d
    }
    p(ok, nk);
    ok.prototype.set = function(a, b) {
        ec.set(a, b, {
            df: this.lh,
            path: this.la,
            domain: this.pa,
            Eh: this.Fh
        })
    };
    ok.prototype.get = function(a) {
        return ec.get(a) || null
    };
    ok.prototype.remove = function(a) {
        ec.remove(a, this.la, this.pa)
    };

    function pk(a) {
        this.jc = a;
        this.ha = this.jc.length / 4;
        this.rb = this.ha + 6;
        this.B = [
            [],
            [],
            [],
            []
        ];
        this.Nb = [
            [],
            [],
            [],
            []
        ];
        this.ga = Array(qk * (this.rb + 1));
        for (a = 0; a < this.ha; a++) this.ga[a] = [this.jc[4 * a], this.jc[4 * a + 1], this.jc[4 * a + 2], this.jc[4 * a + 3]];
        var b = Array(4);
        for (a = this.ha; a < qk * (this.rb + 1); a++) {
            b[0] = this.ga[a - 1][0];
            b[1] = this.ga[a - 1][1];
            b[2] = this.ga[a - 1][2];
            b[3] = this.ga[a - 1][3];
            if (0 == a % this.ha) {
                var c = b,
                    d = c[0];
                c[0] = c[1];
                c[1] = c[2];
                c[2] = c[3];
                c[3] = d;
                rk(b);
                b[0] ^= sk[a / this.ha][0];
                b[1] ^= sk[a / this.ha][1];
                b[2] ^= sk[a /
                    this.ha][2];
                b[3] ^= sk[a / this.ha][3]
            } else 6 < this.ha && 4 == a % this.ha && rk(b);
            this.ga[a] = Array(4);
            this.ga[a][0] = this.ga[a - this.ha][0] ^ b[0];
            this.ga[a][1] = this.ga[a - this.ha][1] ^ b[1];
            this.ga[a][2] = this.ga[a - this.ha][2] ^ b[2];
            this.ga[a][3] = this.ga[a - this.ha][3] ^ b[3]
        }
    }
    pk.prototype.Pf = 16;
    var qk = pk.prototype.Pf / 4;
    pk.prototype.encrypt = function(a) {
        tk(this, a);
        uk(this, 0);
        for (a = 1; a < this.rb; ++a) {
            vk(this, wk);
            xk(this);
            for (var b = this.B, c = this.Nb[0], d = 0; 4 > d; d++) c[0] = b[0][d], c[1] = b[1][d], c[2] = b[2][d], c[3] = b[3][d], b[0][d] = yk[c[0]] ^ zk[c[1]] ^ c[2] ^ c[3], b[1][d] = c[0] ^ yk[c[1]] ^ zk[c[2]] ^ c[3], b[2][d] = c[0] ^ c[1] ^ yk[c[2]] ^ zk[c[3]], b[3][d] = zk[c[0]] ^ c[1] ^ c[2] ^ yk[c[3]];
            uk(this, a)
        }
        vk(this, wk);
        xk(this);
        uk(this, this.rb);
        return Ak(this)
    };
    pk.prototype.decrypt = function(a) {
        tk(this, a);
        uk(this, this.rb);
        for (a = 1; a < this.rb; ++a) {
            Bk(this);
            vk(this, Ck);
            uk(this, this.rb - a);
            for (var b = this.B, c = this.Nb[0], d = 0; 4 > d; d++) c[0] = b[0][d], c[1] = b[1][d], c[2] = b[2][d], c[3] = b[3][d], b[0][d] = Dk[c[0]] ^ Ek[c[1]] ^ Fk[c[2]] ^ Gk[c[3]], b[1][d] = Gk[c[0]] ^ Dk[c[1]] ^ Ek[c[2]] ^ Fk[c[3]], b[2][d] = Fk[c[0]] ^ Gk[c[1]] ^ Dk[c[2]] ^ Ek[c[3]], b[3][d] = Ek[c[0]] ^ Fk[c[1]] ^ Gk[c[2]] ^ Dk[c[3]]
        }
        Bk(this);
        vk(this, Ck);
        uk(this, 0);
        return Ak(this)
    };

    function tk(a, b) {
        for (var c, d = 0; d < qk; d++)
            for (var e = 0; 4 > e; e++) c = 4 * e + d, c = b[c], a.B[d][e] = c
    }

    function Ak(a) {
        for (var b = [], c = 0; c < qk; c++)
            for (var d = 0; 4 > d; d++) b[4 * d + c] = a.B[c][d];
        return b
    }

    function uk(a, b) {
        for (var c = 0; 4 > c; c++)
            for (var d = 0; 4 > d; d++) a.B[c][d] ^= a.ga[4 * b + d][c]
    }

    function vk(a, b) {
        for (var c = 0; 4 > c; c++)
            for (var d = 0; 4 > d; d++) a.B[c][d] = b[a.B[c][d]]
    }

    function xk(a) {
        for (var b = 1; 4 > b; b++)
            for (var c = 0; 4 > c; c++) a.Nb[b][c] = a.B[b][c];
        for (b = 1; 4 > b; b++)
            for (c = 0; 4 > c; c++) a.B[b][c] = a.Nb[b][(c + b) % qk]
    }

    function Bk(a) {
        for (var b = 1; 4 > b; b++)
            for (var c = 0; 4 > c; c++) a.Nb[b][(c + b) % qk] = a.B[b][c];
        for (b = 1; 4 > b; b++)
            for (c = 0; 4 > c; c++) a.B[b][c] = a.Nb[b][c]
    }

    function rk(a) {
        a[0] = wk[a[0]];
        a[1] = wk[a[1]];
        a[2] = wk[a[2]];
        a[3] = wk[a[3]]
    }
    var wk = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126,
            61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22
        ],
        Ck = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47,
            255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241,
            26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125
        ],
        sk = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
            [32, 0, 0, 0],
            [64, 0, 0, 0],
            [128, 0, 0, 0],
            [27, 0, 0, 0],
            [54, 0, 0, 0]
        ],
        yk = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
            32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39,
            37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229
        ],
        zk = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123,
            126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230,
            239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26
        ],
        Gk = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199,
            206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165,
            210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70
        ],
        Ek = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77,
            80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 128, 233, 226, 255, 244, 197, 206, 211, 216, 122,
            113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163
        ],
        Fk = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164,
            169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185,
            174, 163, 128, 141, 154, 151
        ],
        Dk = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121,
            119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141
        ];

    function Hk(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    }

    function Ik(a) {
        return Pa(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };

    function Jk(a, b) {
        a = new pk(Kk(a));
        b = Hk(b);
        for (var c = Za(b, 0, 16), d = "", e; c.length;) {
            e = 16 - c.length;
            for (var f = 0; f < e; f++) c.push(0);
            d += Ik(a.encrypt(c));
            c = Za(b, 0, 16)
        }
        return d
    }

    function Lk(a, b) {
        a = new pk(Kk(a));
        for (var c = [], d = 0; d < b.length; d += 2) c.push(parseInt(b.substring(d, d + 2), 16));
        d = Za(c, 0, 16);
        for (b = ""; d.length;) {
            d = a.decrypt(d);
            if (8192 >= d.length) d = String.fromCharCode.apply(null, d);
            else {
                for (var e = "", f = 0; f < d.length; f += 8192) e += String.fromCharCode.apply(null, $a(d, f, f + 8192));
                d = e
            }
            b += d;
            d = Za(c, 0, 16)
        }
        return b.replace(/(\x00)+$/, "")
    }

    function Kk(a) {
        a = Hk(a.substring(0, 32));
        for (var b = 32 - a.length, c = 0; c < b; c++) a.push(0);
        return a
    };

    function Mk() {
        try {
            return !(!window.opener || !window.opener.location || window.opener.location.hostname !== window.location.hostname || window.opener.location.protocol !== window.location.protocol)
        } catch (a) {}
        return !1
    }

    function Nk(a) {
        mg(a, {
            target: window.cordova && window.cordova.InAppBrowser ? "_system" : "_blank"
        }, void 0)
    }

    function Ok(a, b) {
        a = r(a) && 1 == a.nodeType ? a : document.querySelector(String(a));
        if (null == a) throw Error(b || "Cannot find element.");
        return a
    }

    function Pk() {
        return window.location.href
    }

    function Qk() {
        var a = null;
        return (new B(function(b) {
            "complete" == q.document.readyState ? b() : (a = function() {
                b()
            }, he(window, "load", a))
        })).Ob(function(b) {
            oe(window, "load", a);
            throw b;
        })
    }

    function Rk() {
        for (var a = 32, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
        return b.join("")
    }

    function Sk(a, b, c) {
        c = void 0 === c ? {} : c;
        return Object.keys(a).filter(function(d) {
            return b.includes(d)
        }).reduce(function(d, e) {
            d[e] = a[e];
            return d
        }, c)
    };

    function Tk(a) {
        this.Db = a || q.googleyolo;
        this.Zc = null;
        this.Xe = !1
    }
    Tk.prototype.cancel = function() {
        this.Db && this.Xe && (this.Zc = this.Db.cancelLastOperation().catch(function() {}))
    };
    Tk.prototype.show = function(a, b) {
        var c = this;
        if (this.Db && a) {
            var d = function() {
                c.Xe = !0;
                var e = Promise.resolve(null);
                b || (e = c.Db.retrieve(a).catch(function(f) {
                    if ("userCanceled" === f.type || "illegalConcurrentRequest" === f.type) throw f;
                    return null
                }));
                return e.then(function(f) {
                    return f ? f : c.Db.hint(a)
                }).catch(function(f) {
                    if ("userCanceled" === f.type) c.Zc = Promise.resolve();
                    else if ("illegalConcurrentRequest" === f.type) return c.cancel(), c.show(a, b);
                    return null
                })
            };
            return this.Zc ? this.Zc.then(d) : d()
        }
        if (a) return d = Uk.Jd().load().then(function() {
            c.Db =
                q.googleyolo;
            return c.show(a, b)
        }).Ob(function() {
            return null
        }), Promise.resolve(d);
        if ("undefined" !== typeof Promise) return Promise.resolve(null);
        throw Error("One-Tap sign in not supported in the current browser!");
    };
    ya(Tk);
    var Vk = new fb(gb, "https://smartlock.google.com/client");

    function Uk() {
        this.Fb = null
    }
    Uk.prototype.load = function() {
        var a = this;
        if (this.Fb) return this.Fb;
        var b = new lb(mb, ib(Vk));
        return q.googleyolo ? C() : this.Fb = Qk().then(function() {
            if (!q.googleyolo) return new B(function(c, d) {
                var e = setTimeout(function() {
                    a.Fb = null;
                    d(Error("Network error!"))
                }, 1E4);
                q.onGoogleYoloLoad = function() {
                    clearTimeout(e);
                    c()
                };
                C(Hd(b)).Ob(function(f) {
                    clearTimeout(e);
                    a.Fb = null;
                    d(f)
                })
            })
        })
    };
    ya(Uk);

    function Wk(a, b) {
        for (var c = 0; c < a.length; c++)
            if (!Sa(Xk, a[c]) && (null !== Yk && a[c] in Yk || Sa(b, a[c]))) return a[c];
        return null
    }
    var Xk = ["emailLink", "password", "phone"],
        Yk = {
            "facebook.com": "FacebookAuthProvider",
            "github.com": "GithubAuthProvider",
            "google.com": "GoogleAuthProvider",
            password: "EmailAuthProvider",
            "twitter.com": "TwitterAuthProvider",
            phone: "PhoneAuthProvider"
        };

    function Zk(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    }
    Zk.prototype.Ic = null;
    var $k = 0;
    Zk.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || $k++;
        this.Df = d || Ga();
        this.qb = a;
        this.mh = b;
        this.cf = c;
        delete this.Ic
    };
    Zk.prototype.vf = function(a) {
        this.qb = a
    };

    function al(a) {
        this.ef = a;
        this.ec = this.Ha = this.qb = this.G = null
    }

    function bl(a, b) {
        this.name = a;
        this.value = b
    }
    bl.prototype.toString = function() {
        return this.name
    };
    var cl = new bl("SEVERE", 1E3),
        dl = new bl("WARNING", 900),
        el = new bl("INFO", 800),
        fl = new bl("CONFIG", 700);
    k = al.prototype;
    k.getName = function() {
        return this.ef
    };
    k.getParent = function() {
        return this.G
    };
    k.Re = function() {
        this.Ha || (this.Ha = {});
        return this.Ha
    };
    k.vf = function(a) {
        this.qb = a
    };

    function gl(a) {
        if (a.qb) return a.qb;
        if (a.G) return gl(a.G);
        Ka("Root logger has no level set.");
        return null
    }
    k.log = function(a, b, c) {
        if (a.value >= gl(this).value)
            for (Ca(b) && (b = b()), a = new Zk(a, String(b), this.ef), c && (a.Ic = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.ec)
                    for (var f = 0; b = d.ec[f]; f++) b(e);
                c = c.getParent()
            }
    };
    k.info = function(a, b) {
        this.log(el, a, b)
    };
    k.config = function(a, b) {
        this.log(fl, a, b)
    };
    var hl = {},
        il = null;

    function jl() {
        il || (il = new al(""), hl[""] = il, il.vf(fl))
    }

    function kl(a) {
        jl();
        var b;
        if (!(b = hl[a])) {
            b = new al(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = kl(a.substr(0, c));
            c.Re()[d] = b;
            b.G = c;
            hl[a] = b
        }
        return b
    };

    function ll() {
        this.tf = Ga()
    }
    var ml = null;
    ll.prototype.set = function(a) {
        this.tf = a
    };
    ll.prototype.reset = function() {
        this.set(Ga())
    };
    ll.prototype.get = function() {
        return this.tf
    };

    function nl(a) {
        this.eb = a || "";
        ml || (ml = new ll);
        this.Yh = ml
    }
    k = nl.prototype;
    k.te = !0;
    k.xf = !0;
    k.Nh = !0;
    k.Lh = !0;
    k.yf = !1;
    k.Ph = !1;

    function ol(a) {
        return 10 > a ? "0" + a : String(a)
    }

    function pl(a, b) {
        a = (a.Df - b) / 1E3;
        b = a.toFixed(3);
        var c = 0;
        if (1 > a) c = 2;
        else
            for (; 100 > a;) c++, a *= 10;
        for (; 0 < c--;) b = " " + b;
        return b
    }

    function ql(a) {
        nl.call(this, a)
    }
    x(ql, nl);

    function rl(a, b) {
        var c = [];
        c.push(a.eb, " ");
        if (a.xf) {
            var d = new Date(b.Df);
            c.push("[", ol(d.getFullYear() - 2E3) + ol(d.getMonth() + 1) + ol(d.getDate()) + " " + ol(d.getHours()) + ":" + ol(d.getMinutes()) + ":" + ol(d.getSeconds()) + "." + ol(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        a.Nh && c.push("[", pl(b, a.Yh.get()), "s] ");
        a.Lh && c.push("[", b.cf, "] ");
        a.Ph && c.push("[", b.qb.name, "] ");
        c.push(b.mh);
        a.yf && (b = b.Ic) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.te && c.push("\n");
        return c.join("")
    };

    function sl() {
        this.vh = u(this.kg, this);
        this.Jc = new ql;
        this.Jc.xf = !1;
        this.Jc.yf = !1;
        this.Ye = this.Jc.te = !1;
        this.Ng = {}
    }
    sl.prototype.kg = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= cl.value) return "error";
                if (f.value >= dl.value) return "warn";
                if (f.value >= fl.value) return "log"
            }
            return "debug"
        }
        if (!this.Ng[a.cf]) {
            var c = rl(this.Jc, a),
                d = tl;
            if (d) {
                var e = b(a.qb);
                ul(d, e, c, a.Ic)
            }
        }
    };
    var tl = q.console;

    function ul(a, b, c, d) {
        if (a[b]) a[b](c, d || "");
        else a.log(c, d || "")
    };

    function vl(a, b) {
        var c = wl;
        c && c.log(cl, a, b)
    };
    var wl;
    wl = kl("firebaseui");
    var xl = new sl;
    if (1 != xl.Ye) {
        var yl;
        jl();
        yl = il;
        var zl = xl.vh;
        yl.ec || (yl.ec = []);
        yl.ec.push(zl);
        xl.Ye = !0
    }

    function Al(a) {
        var b = wl;
        b && b.log(dl, a, void 0)
    };

    function Bl(a, b) {
        this.Yb = a;
        this.wa = b || null
    }
    Bl.prototype.getEmail = function() {
        return this.Yb
    };
    Bl.prototype.Ua = function() {
        return {
            email: this.Yb,
            credential: this.wa && this.wa.toJSON()
        }
    };

    function Cl(a) {
        if (a && a.email) {
            var b = a.credential && firebase.auth.AuthCredential.fromJSON(a.credential);
            return new Bl(a.email, b)
        }
        return null
    };

    function Dl(a, b) {
        this.Ag = a;
        this.Ig = b || function(c) {
            throw c;
        };
        this.verificationId = a.verificationId
    }
    Dl.prototype.confirm = function(a) {
        return C(this.Ag.confirm(a)).Ob(this.Ig)
    };

    function El(a) {
        this.Cf = a || null
    }
    El.prototype.mb = function() {
        return this.Cf
    };
    El.prototype.Ua = function() {
        return {
            tenantId: this.Cf
        }
    };
    var Fl = /MSIE ([\d.]+).*Windows NT ([\d.]+)/,
        Gl = /Firefox\/([\d.]+)/,
        Hl = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,
        Il = /Chrome\/([\d.]+)/,
        Jl = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,
        Kl = /Mac OS X;.*(?!(Version)).*Safari/,
        Ll = /Android ([\d.]+).*Safari/,
        Ml = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,
        Nl = /Konqueror\/([\d.]+)/,
        Ol = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;

    function Pl(a, b) {
        this.Rb = a;
        a = a.split(b || ".");
        this.Vb = [];
        for (b = 0; b < a.length; b++) this.Vb.push(parseInt(a[b], 10))
    }
    Pl.prototype.compare = function(a) {
        a instanceof Pl || (a = new Pl(String(a)));
        for (var b = Math.max(this.Vb.length, a.Vb.length), c = 0; c < b; c++) {
            var d = this.Vb[c],
                e = a.Vb[c];
            if (void 0 !== d && void 0 !== e && d !== e) return d - e;
            if (void 0 === d) return -1;
            if (void 0 === e) return 1
        }
        return 0
    };

    function Ql(a, b) {
        return 0 <= a.compare(b)
    }

    function Rl() {
        var a = window.navigator && window.navigator.userAgent;
        if (a) {
            var b;
            if (b = a.match(Hl)) {
                var c = new Pl(b[3] || b[1]);
                return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && Ql(c, "10.1") : Ql(c, "8.0")
            }
            if (b = a.match(Gl)) return Ql(new Pl(b[1]), "2.0");
            if (b = a.match(Il)) return Ql(new Pl(b[1]), "6.0");
            if (b = a.match(Jl)) return c = new Pl(b[6]), a = b[3] && new Pl(b[3]), b = b[5] && new Pl(b[5], "_"), (!(!a || !Ql(a, "6.0")) || !(!b || !Ql(b, "10.5.6"))) && Ql(c, "3.0");
            if (b = a.match(Ll)) return Ql(new Pl(b[1]),
                "3.0");
            if (b = a.match(Ml)) return Ql(new Pl(b[1], "_"), "4.0");
            if (b = a.match(Nl)) return Ql(new Pl(b[1]), "4.7");
            if (b = a.match(Ol)) return c = new Pl(b[1]), a = new Pl(b[2]), Ql(c, "7.0") && Ql(a, "7.0");
            if (b = a.match(Fl)) return c = new Pl(b[1]), a = new Pl(b[2]), Ql(c, "7.0") && Ql(a, "6.0");
            if (a.match(Kl)) return !1
        }
        return !0
    };

    function Sl() {}
    x(Sl, nk);
    Sl.prototype.clear = function() {
        var a = Me(this.gb(!0)),
            b = this;
        Ma(a, function(c) {
            b.remove(c)
        })
    };

    function Tl(a) {
        this.ta = a
    }
    x(Tl, Sl);

    function Ul(a) {
        if (!a.ta) return !1;
        try {
            return a.ta.setItem("__sak", "1"), a.ta.removeItem("__sak"), !0
        } catch (b) {
            return !1
        }
    }
    k = Tl.prototype;
    k.set = function(a, b) {
        try {
            this.ta.setItem(a, b)
        } catch (c) {
            if (0 == this.ta.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    k.get = function(a) {
        a = this.ta.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    k.remove = function(a) {
        this.ta.removeItem(a)
    };
    k.gb = function(a) {
        var b = 0,
            c = this.ta,
            d = new Je;
        d.next = function() {
            if (b >= c.length) throw Ie;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    k.clear = function() {
        this.ta.clear()
    };
    k.key = function(a) {
        return this.ta.key(a)
    };

    function Vl() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.ta = a
    }
    x(Vl, Tl);

    function Wl() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.ta = a
    }
    x(Wl, Tl);

    function Xl(a, b) {
        this.lc = a;
        this.eb = b + "::"
    }
    x(Xl, Sl);
    Xl.prototype.set = function(a, b) {
        this.lc.set(this.eb + a, b)
    };
    Xl.prototype.get = function(a) {
        return this.lc.get(this.eb + a)
    };
    Xl.prototype.remove = function(a) {
        this.lc.remove(this.eb + a)
    };
    Xl.prototype.gb = function(a) {
        var b = this.lc.gb(!0),
            c = this,
            d = new Je;
        d.next = function() {
            for (var e = b.next(); e.substr(0, c.eb.length) != c.eb;) e = b.next();
            return a ? e.substr(c.eb.length) : c.lc.get(e)
        };
        return d
    };

    function Yl(a) {
        var b = [];
        Zl(new $l, a, b);
        return b.join("")
    }

    function $l() {
        this.md = void 0
    }

    function Zl(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Zl(a, a.md ? a.md.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), am(d, c), c.push(":"), Zl(a, a.md ? a.md.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    am(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var bm = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        cm = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function am(a, b) {
        b.push('"', a.replace(cm, function(c) {
            var d = bm[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), bm[c] = d);
            return d
        }), '"')
    };

    function dm(a) {
        this.$c = a
    }
    dm.prototype.set = function(a, b) {
        void 0 === b ? this.$c.remove(a) : this.$c.set(a, Yl(b))
    };
    dm.prototype.get = function(a) {
        try {
            var b = this.$c.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    dm.prototype.remove = function(a) {
        this.$c.remove(a)
    };
    var em, fm = new Vl;
    em = Ul(fm) ? new Xl(fm, "firebaseui") : null;
    var gm = new dm(em),
        hm, im = new Wl;
    hm = Ul(im) ? new Xl(im, "firebaseui") : null;
    var jm = new dm(hm),
        km = {
            name: "pendingEmailCredential",
            storage: jm
        },
        lm = {
            name: "redirectStatus",
            storage: jm
        },
        mm = {
            name: "redirectUrl",
            storage: jm
        },
        nm = {
            name: "rememberAccount",
            storage: jm
        },
        om = {
            name: "rememberedAccounts",
            storage: gm
        },
        pm = {
            name: "emailForSignIn",
            storage: new dm(new ok(3600, "/"))
        },
        qm = {
            name: "pendingEncryptedCredential",
            storage: new dm(new ok(3600, "/"))
        };

    function rm(a, b) {
        return a.storage.get(b ? a.name + ":" + b : a.name)
    }

    function sm(a, b) {
        a.storage.remove(b ? a.name + ":" + b : a.name)
    }

    function tm(a, b, c) {
        a.storage.set(c ? a.name + ":" + c : a.name, b)
    }

    function um(a) {
        return rm(mm, a) || null
    }

    function vm(a, b) {
        tm(mm, a, b)
    }

    function wm(a, b) {
        tm(nm, a, b)
    }

    function xm(a) {
        a = rm(om, a) || [];
        a = Pa(a, function(b) {
            return Yj(b)
        });
        return Oa(a, function(b) {
            return null != b
        })
    }

    function ym(a, b) {
        var c = xm(b),
            d = Ra(c, function(e) {
                return e.getEmail() == a.getEmail() && e.cc() == a.cc()
            }); - 1 < d && Ua(c, d);
        c.unshift(a);
        tm(om, Pa(c, function(e) {
            return e.Ua()
        }), b)
    }

    function zm(a) {
        a = rm(km, a) || null;
        return Cl(a)
    }

    function Am(a) {
        sm(km, a)
    }

    function Bm(a, b) {
        tm(km, a.Ua(), b)
    }

    function Cm(a) {
        return (a = rm(lm, a) || null) && "undefined" !== typeof a.tenantId ? new El(a.tenantId) : null
    }

    function Dm(a, b) {
        tm(lm, a.Ua(), b)
    }

    function Em(a, b) {
        b = rm(pm, b);
        var c = null;
        if (b) try {
            var d = Lk(a, b),
                e = JSON.parse(d);
            c = e && e.email || null
        } catch (f) {}
        return c
    }

    function Fm(a, b) {
        b = rm(qm, b);
        var c = null;
        if (b) try {
            var d = Lk(a, b);
            c = JSON.parse(d)
        } catch (e) {}
        return Cl(c || null)
    }

    function Gm(a, b, c) {
        tm(qm, Jk(a, JSON.stringify(b.Ua())), c)
    };

    function Hm(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.code = "firebaseui/" + a;
        if (!(a = b)) {
            b = this.code;
            a = "";
            b = G("string" === typeof b, "code", b, "string");
            switch (r(b) ? b.toString() : b) {
                case "firebaseui/merge-conflict":
                    a += "The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
                    break;
                default:
                    a += ah()
            }
            a = a.toString()
        }
        this.message = a || "";
        this.credential = c || null
    }
    p(Hm, Error);
    Hm.prototype.Ua = function() {
        return {
            code: this.code,
            message: this.message
        }
    };
    Hm.prototype.toJSON = function() {
        return this.Ua()
    };

    function Im() {
        this.g = new lk;
        this.g.define("acUiConfig");
        this.g.define("autoUpgradeAnonymousUsers");
        this.g.define("callbacks");
        this.g.define("credentialHelper", "accountchooser.com");
        this.g.define("immediateFederatedRedirect", !1);
        this.g.define("popupMode", !1);
        this.g.define("privacyPolicyUrl");
        this.g.define("queryParameterForSignInSuccessUrl", "signInSuccessUrl");
        this.g.define("queryParameterForWidgetMode", "mode");
        this.g.define("signInFlow");
        this.g.define("signInOptions");
        this.g.define("signInSuccessUrl");
        this.g.define("siteName");
        this.g.define("tosUrl");
        this.g.define("widgetUrl")
    }

    function Jm(a) {
        return a.g.get("acUiConfig") || null
    }

    function Km(a) {
        var b = a.g.get("widgetUrl") || Pk();
        return Lm(a, b)
    }

    function Lm(a, b) {
        a = Mm(a);
        for (var c = b.search(We), d = 0, e, f = []; 0 <= (e = Ve(b, d, a, c));) f.push(b.substring(d, e)), d = Math.min(b.indexOf("&", e) + 1 || c, c);
        f.push(b.substr(d));
        b = f.join("").replace(Ye, "$1");
        c = "=" + encodeURIComponent("select");
        (a += c) ? (c = b.indexOf("#"), 0 > c && (c = b.length), d = b.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = b.substring(d + 1, c), b = [b.substr(0, d), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
        return a
    }

    function Nm(a) {
        var b = !!a.g.get("autoUpgradeAnonymousUsers");
        b && !Om(a) && vl('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.', void 0);
        return b
    }

    function Pm(a) {
        a = a.g.get("signInOptions") || [];
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c];
            d = r(d) ? d : {
                provider: d
            };
            d.provider && b.push(d)
        }
        return b
    }

    function Qm(a, b) {
        a = Pm(a);
        for (var c = 0; c < a.length; c++)
            if (a[c].provider === b) return a[c];
        return null
    }

    function Rm(a) {
        return Pa(Pm(a), function(b) {
            return b.provider
        })
    }

    function Sm(a, b) {
        a = Tm(a);
        for (var c = 0; c < a.length; c++)
            if (a[c].providerId === b) return a[c];
        return null
    }

    function Tm(a) {
        return Pa(Pm(a), function(b) {
            return Yk[b.provider] || Sa(Um, b.provider) ? {
                providerId: b.provider
            } : {
                providerId: b.provider,
                rf: b.providerName || null,
                Bc: b.buttonColor || null,
                Uc: b.iconUrl ? Cb(Eb(b.iconUrl)) : null,
                jh: b.loginHintKey || null
            }
        })
    }

    function Vm(a) {
        var b = [],
            c = [];
        Ma(Pm(a), function(e) {
            e.authMethod && (b.push(e.authMethod), e.clientId && c.push({
                uri: e.authMethod,
                clientId: e.clientId
            }))
        });
        var d = null;
        "googleyolo" === Wm(a) && b.length && (d = {
            supportedIdTokenProviders: c,
            supportedAuthMethods: b
        });
        return d
    }

    function Xm(a, b) {
        var c = null;
        Ma(Pm(a), function(d) {
            d.authMethod === b && (c = d.provider)
        });
        return c
    }

    function Ym(a) {
        var b = null;
        Ma(Pm(a), function(d) {
            d.provider == firebase.auth.PhoneAuthProvider.PROVIDER_ID && r(d.recaptchaParameters) && !Aa(d.recaptchaParameters) && (b = cb(d.recaptchaParameters))
        });
        if (b) {
            var c = [];
            Ma(Zm, function(d) {
                "undefined" !== typeof b[d] && (c.push(d), delete b[d])
            });
            c.length && Al('The following provided "recaptchaParameters" keys are not allowed: ' + c.join(", "))
        }
        return b
    }

    function $m(a, b) {
        a = (a = Qm(a, b)) && a.scopes;
        return Aa(a) ? a : []
    }

    function an(a, b) {
        a = (a = Qm(a, b)) && a.customParameters;
        return r(a) ? (a = cb(a), b === firebase.auth.GoogleAuthProvider.PROVIDER_ID && delete a.login_hint, b === firebase.auth.GithubAuthProvider.PROVIDER_ID && delete a.login, a) : null
    }

    function bn(a) {
        a = Qm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        var b = null;
        a && "string" === typeof a.loginHint && (b = ai(a.loginHint));
        return a && a.defaultNationalNumber || b && b.Pa || null
    }

    function cn(a) {
        var b = (a = Qm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID)) && a.defaultCountry || null;
        b = b && dg(b);
        var c = null;
        a && "string" === typeof a.loginHint && (c = ai(a.loginHint));
        return b && b[0] || c && bg(c.Gc) || null
    }

    function dn(a) {
        a = Qm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        if (!a) return null;
        var b = a.whitelistedCountries,
            c = a.blacklistedCountries;
        if ("undefined" !== typeof b && (!Aa(b) || 0 == b.length)) throw Error("WhitelistedCountries must be a non-empty array.");
        if ("undefined" !== typeof c && !Aa(c)) throw Error("BlacklistedCountries must be an array.");
        if (b && c) throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
        if (!b && !c) return cg;
        a = [];
        if (b) {
            c = {};
            for (var d = 0; d < b.length; d++) {
                var e = eg(b[d]);
                for (var f = 0; f < e.length; f++) c[e[f].b] = e[f]
            }
            for (var g in c) c.hasOwnProperty(g) && a.push(c[g])
        } else {
            g = {};
            for (b = 0; b < c.length; b++)
                for (e = eg(c[b]), d = 0; d < e.length; d++) g[e[d].b] = e[d];
            for (e = 0; e < cg.length; e++) null !== g && cg[e].b in g || a.push(cg[e])
        }
        return a
    }

    function Mm(a) {
        return mk(a.g, "queryParameterForWidgetMode")
    }
    Im.prototype.O = function() {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        a && !b && Al("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) {
            if (Ca(a)) return a;
            if ("string" === typeof a) return function() {
                Nk(a)
            }
        }
        return null
    };
    Im.prototype.N = function() {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        b && !a && Al("Term of Service URL is missing, the link will not be displayed.");
        if (a && b) {
            if (Ca(b)) return b;
            if ("string" === typeof b) return function() {
                Nk(b)
            }
        }
        return null
    };

    function en(a) {
        return (a = Qm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "undefined" !== typeof a.requireDisplayName ? !!a.requireDisplayName : !0
    }

    function fn(a) {
        a = Qm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
        return !(!a || a.signInMethod !== firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)
    }

    function gn(a) {
        a = Qm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
        return !(!a || !a.forceSameDevice)
    }

    function hn(a) {
        if (fn(a)) {
            var b = {
                url: Pk(),
                handleCodeInApp: !0
            };
            (a = Qm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "function" === typeof a.emailLinkSignIn && eb(b, a.emailLinkSignIn());
            b.url = pf(Pk(), b.url).toString();
            return b
        }
        return null
    }

    function jn(a) {
        var b = !!a.g.get("immediateFederatedRedirect"),
            c = Rm(a);
        a = kn(a);
        return b && 1 == c.length && !Sa(Xk, c[0]) && "redirect" == a
    }

    function kn(a) {
        a = a.g.get("signInFlow");
        for (var b in ln)
            if (ln[b] == a) return ln[b];
        return "redirect"
    }

    function mn(a) {
        return nn(a).uiShown || null
    }

    function on(a) {
        return nn(a).signInSuccess || null
    }

    function pn(a) {
        return nn(a).signInSuccessWithAuthResult || null
    }

    function Om(a) {
        return nn(a).signInFailure || null
    }

    function nn(a) {
        return a.g.get("callbacks") || {}
    }

    function qn(a) {
        return "accountchooser.com" == Wm(a)
    }

    function Wm(a) {
        if ("http:" !== (window.location && window.location.protocol) && "https:" !== (window.location && window.location.protocol)) return "none";
        a = a.g.get("credentialHelper");
        for (var b in rn)
            if (rn[b] == a) return rn[b];
        return "accountchooser.com"
    }
    Im.prototype.Lb = function(a) {
        for (var b in a) try {
            this.g.update(b, a[b])
        } catch (c) {
            vl('Invalid config: "' + b + '"', void 0)
        }
        nc && this.g.update("popupMode", !1);
        dn(this)
    };
    Im.prototype.update = function(a, b) {
        this.g.update(a, b);
        dn(this)
    };
    var rn = {
            hi: "accountchooser.com",
            ki: "googleyolo",
            NONE: "none"
        },
        ln = {
            oi: "popup",
            pi: "redirect"
        },
        sn = {
            ji: "callback",
            RECOVER_EMAIL: "recoverEmail",
            ri: "resetPassword",
            REVERT_SECOND_FACTOR_ADDITION: "revertSecondFactorAddition",
            si: "select",
            ti: "signIn",
            VERIFY_AND_CHANGE_EMAIL: "verifyAndChangeEmail",
            VERIFY_EMAIL: "verifyEmail"
        },
        Um = ["anonymous"],
        Zm = ["sitekey", "tabindex", "callback", "expired-callback"];
    var tn, un, vn, wn, P = {};

    function Q(a, b, c, d) {
        P[a].apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var xn = !1,
        yn = null;

    function zn(a, b) {
        xn = !!b;
        yn || ("undefined" == typeof accountchooser && Rl() ? (b = new lb(mb, ib(new fb(gb, "//www.gstatic.com/accountchooser/client.js"))), yn = C(Hd(b)).Ob(function() {})) : yn = C());
        yn.then(a, a)
    }

    function An(a, b) {
        a = R(a);
        (a = nn(a).accountChooserInvoked || null) ? a(b): b()
    }

    function Bn(a, b, c) {
        a = R(a);
        (a = nn(a).accountChooserResult || null) ? a(b, c): c()
    }

    function Cn(a, b, c, d, e) {
        d ? (Q("callback", a, b), xn && c()) : An(a, function() {
            var f = new El(a.mb());
            Dm(f, S(a));
            ek(function(g) {
                sm(lm, S(a));
                Bn(a, g ? "empty" : "unavailable", function() {
                    Q("signIn", a, b);
                    (g || xn) && c()
                })
            }, xm(S(a)), e)
        })
    }

    function Dn(a, b, c, d) {
        function e(f) {
            f = T(f);
            U(b, c, void 0, f);
            d()
        }
        Bn(b, "accountSelected", function() {
            wm(!1, S(b));
            var f = En(b);
            V(b, b.o().fetchSignInMethodsForEmail(a.getEmail()).then(function(g) {
                Fn(b, c, g, a.getEmail(), a.Le || void 0, void 0, f);
                d()
            }, e))
        })
    }

    function Gn(a, b, c, d) {
        Bn(b, a ? "addAccount" : "unavailable", function() {
            Q("signIn", b, c);
            (a || xn) && d()
        })
    }

    function Hn(a, b, c, d) {
        function e() {
            var f = a();
            f && (f = mn(R(f))) && f()
        }
        bk(function() {
            var f = a();
            f && Cn(f, b, e, c, d)
        }, function(f) {
            var g = a();
            g && Dn(f, g, b, e)
        }, function(f) {
            var g = a();
            g && Gn(f, g, b, e)
        }, a() && Jm(R(a())))
    }

    function In(a, b, c, d) {
        function e(g) {
            if (!g.name || "cancel" != g.name) {
                a: {
                    var h = g.message;
                    try {
                        var m = ((JSON.parse(h).error || {}).message || "").toLowerCase().match(/invalid.+(access|id)_token/);
                        if (m && m.length) {
                            var n = !0;
                            break a
                        }
                    } catch (l) {}
                    n = !1
                }
                if (n) g = M(b),
                b.i(),
                U(a, g, void 0, "Your sign-in session has expired. Please try again.".toString());
                else {
                    n = g && g.message || "";
                    if (g.code) {
                        if ("auth/email-already-in-use" == g.code || "auth/credential-already-in-use" == g.code) return;
                        n = T(g)
                    }
                    b.F(n)
                }
            }
        }
        Jn(a);
        if (d) return Kn(a, c), C();
        if (!c.credential) throw Error("No credential found!");
        d = a.o().currentUser || c.user;
        if (!d) throw Error("User not logged in.");
        d = new Xj(d.email, d.displayName, d.photoURL, "password" == c.credential.providerId ? null : c.credential.providerId);
        null != rm(nm, S(a)) && !rm(nm, S(a)) || ym(d, S(a));
        sm(nm, S(a));
        try {
            var f = Ln(a, c)
        } catch (g) {
            return vl(g.code || g.message, g), b.F(g.code || g.message), C()
        }
        c = f.then(function(g) {
            Kn(a, g)
        }, e).then(void 0, e);
        V(a, f);
        return C(c)
    }

    function Kn(a, b) {
        if (!b.user) throw Error("No user found");
        var c = pn(R(a));
        on(R(a)) && c && Al("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");
        if (c) {
            c = pn(R(a));
            var d = um(S(a)) || void 0;
            sm(mm, S(a));
            var e = !1;
            if (Mk()) {
                if (!c || c(b, d)) e = !0, ac(window.opener.location, Mn(a, d));
                c || window.close()
            } else if (!c || c(b, d)) e = !0, ac(window.location, Mn(a, d));
            e || a.reset()
        } else {
            c = b.user;
            b = b.credential;
            d = on(R(a));
            e = um(S(a)) || void 0;
            sm(mm, S(a));
            var f = !1;
            if (Mk()) {
                if (!d || d(c, b, e)) f = !0, ac(window.opener.location, Mn(a, e));
                d || window.close()
            } else if (!d || d(c, b, e)) f = !0, ac(window.location, Mn(a, e));
            f || a.reset()
        }
    }

    function Mn(a, b) {
        a = b || R(a).g.get("signInSuccessUrl");
        if (!a) throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");
        return a
    }

    function T(a) {
        var b = {
            code: a.code
        };
        b = b || {};
        var c = "";
        b = G(null == b.code || "string" === typeof b.code, "code", b.code, "null|string|undefined");
        switch (r(b) ? b.toString() : b) {
            case "auth/email-already-in-use":
                c += "The email address is already used by another account";
                break;
            case "auth/requires-recent-login":
                c += dh();
                break;
            case "auth/too-many-requests":
                c += "You have entered an incorrect password too many times. Please try again in a few minutes.";
                break;
            case "auth/user-cancelled":
                c += "Please authorize the required permissions to sign in to the application";
                break;
            case "auth/user-not-found":
                c += "That email address doesn't match an existing account";
                break;
            case "auth/user-token-expired":
                c += dh();
                break;
            case "auth/weak-password":
                c += "Strong passwords have at least 6 characters and a mix of letters and numbers";
                break;
            case "auth/wrong-password":
                c += "The email and password you entered don't match";
                break;
            case "auth/network-request-failed":
                c += "A network error has occurred";
                break;
            case "auth/invalid-phone-number":
                c += Zg();
                break;
            case "auth/invalid-verification-code":
                c +=
                    "Wrong code. Try again.";
                break;
            case "auth/code-expired":
                c += "This code is no longer valid";
                break;
            case "auth/expired-action-code":
                c += "This code has expired.";
                break;
            case "auth/invalid-action-code":
                c += "The action code is invalid. This can happen if the code is malformed, expired, or has already been used."
        }
        if (c = c.toString()) return c;
        try {
            return JSON.parse(a.message), vl("Internal error: " + a.message, void 0), ah().toString()
        } catch (d) {
            return a.message
        }
    }

    function Nn(a, b, c) {
        var d = Yk[b] && firebase.auth[Yk[b]] ? new firebase.auth[Yk[b]] : 0 == b.indexOf("saml.") ? new firebase.auth.SAMLAuthProvider(b) : new firebase.auth.OAuthProvider(b);
        if (!d) throw Error("Invalid Firebase Auth provider!");
        var e = $m(R(a), b);
        if (d.addScope)
            for (var f = 0; f < e.length; f++) d.addScope(e[f]);
        e = an(R(a), b) || {};
        c && (a = b == firebase.auth.GoogleAuthProvider.PROVIDER_ID ? "login_hint" : b == firebase.auth.GithubAuthProvider.PROVIDER_ID ? "login" : (a = Sm(R(a), b)) && a.jh, a && (e[a] = c));
        d.setCustomParameters && d.setCustomParameters(e);
        return d
    }

    function On(a, b, c, d) {
        function e() {
            var n = new El(a.mb());
            Dm(n, S(a));
            V(a, b.Y(u(a.Xh, a), [m], function() {
                if ("file:" === (window.location && window.location.protocol)) return V(a, a.getRedirectResult().then(function(l) {
                    b.i();
                    sm(lm, S(a));
                    Q("callback", a, h, C(l))
                }, f))
            }, g))
        }

        function f(n) {
            sm(lm, S(a));
            if (!n.name || "cancel" != n.name) switch (n.code) {
                case "auth/popup-blocked":
                    e();
                    break;
                case "auth/popup-closed-by-user":
                case "auth/cancelled-popup-request":
                    break;
                case "auth/credential-already-in-use":
                    break;
                case "auth/network-request-failed":
                case "auth/too-many-requests":
                case "auth/user-cancelled":
                    b.F(T(n));
                    break;
                default:
                    b.i(), Q("callback", a, h, ld(n))
            }
        }

        function g(n) {
            sm(lm, S(a));
            n.name && "cancel" == n.name || (vl("signInWithRedirect: " + n.code, void 0), n = T(n), "blank" == b.cd && jn(R(a)) ? (b.i(), Q("providerSignIn", a, h, n)) : b.F(n))
        }
        var h = M(b),
            m = Nn(a, c, d);
        "redirect" == kn(R(a)) ? e() : V(a, Pn(a, m).then(function(n) {
            b.i();
            Q("callback", a, h, C(n))
        }, f))
    }

    function Qn(a, b) {
        V(a, b.Y(u(a.Th, a), [], function(c) {
            b.i();
            return In(a, b, c, !0)
        }, function(c) {
            c.name && "cancel" == c.name || (vl("ContinueAsGuest: " + c.code, void 0), c = T(c), b.F(c))
        }))
    }

    function Rn(a, b, c) {
        function d(f) {
            var g = !1;
            f = b.Y(u(a.Uh, a), [f], function(h) {
                var m = M(b);
                b.i();
                Q("callback", a, m, C(h));
                g = !0
            }, function(h) {
                if (!h.name || "cancel" != h.name)
                    if (!h || "auth/credential-already-in-use" != h.code)
                        if (h && "auth/email-already-in-use" == h.code && h.email && h.credential) {
                            var m = M(b);
                            b.i();
                            Q("callback", a, m, ld(h))
                        } else h = T(h), b.F(h)
            });
            V(a, f);
            return f.then(function() {
                return g
            }, function() {
                return !1
            })
        }
        var e = Xm(R(a), c && c.authMethod || null);
        if (c && c.idToken && e === firebase.auth.GoogleAuthProvider.PROVIDER_ID) return $m(R(a),
            firebase.auth.GoogleAuthProvider.PROVIDER_ID).length ? (On(a, b, e, c.id), c = C(!0)) : c = d(firebase.auth.GoogleAuthProvider.credential(c.idToken)), c;
        c && b.F("The selected credential for the authentication provider is not supported!".toString());
        return C(!1)
    }

    function Sn(a, b) {
        var c = b.oa(),
            d = b.Cd();
        if (c)
            if (d) {
                var e = firebase.auth.EmailAuthProvider.credential(c, d);
                V(a, b.Y(u(a.Vh, a), [c, d], function(f) {
                    return In(a, b, {
                        user: f.user,
                        credential: e,
                        operationType: f.operationType,
                        additionalUserInfo: f.additionalUserInfo
                    })
                }, function(f) {
                    if (!f.name || "cancel" != f.name) switch (f.code) {
                        case "auth/email-already-in-use":
                            break;
                        case "auth/email-exists":
                            H(b.w(), !1);
                            Pg(b.ab(), T(f));
                            break;
                        case "auth/too-many-requests":
                        case "auth/wrong-password":
                            H(b.La(), !1);
                            Pg(b.Ld(), T(f));
                            break;
                        default:
                            vl("verifyPassword: " +
                                f.message, void 0), b.F(T(f))
                    }
                }))
            } else b.La().focus();
        else b.w().focus()
    }

    function En(a) {
        a = Rm(R(a));
        return 1 == a.length && a[0] == firebase.auth.EmailAuthProvider.PROVIDER_ID
    }

    function Tn(a) {
        a = Rm(R(a));
        return 1 == a.length && a[0] == firebase.auth.PhoneAuthProvider.PROVIDER_ID
    }

    function U(a, b, c, d) {
        En(a) ? d ? Q("signIn", a, b, c, d) : Un(a, b, c) : a && Tn(a) && !d ? Q("phoneSignInStart", a, b) : a && jn(R(a)) && !d ? Q("federatedRedirect", a, b, c) : Q("providerSignIn", a, b, d, c)
    }

    function Vn(a, b, c, d) {
        var e = M(b);
        V(a, b.Y(u(a.o().fetchSignInMethodsForEmail, a.o()), [c], function(f) {
            wm(qn(R(a)), S(a));
            b.i();
            Fn(a, e, f, c, void 0, d)
        }, function(f) {
            f = T(f);
            b.F(f)
        }))
    }

    function Fn(a, b, c, d, e, f, g) {
        c.length || fn(R(a)) ? !c.length && fn(R(a)) ? Q("sendEmailLinkForSignIn", a, b, d, function() {
            Q("signIn", a, b)
        }) : Sa(c, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? Q("passwordSignIn", a, b, d, g) : 1 == c.length && c[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? Q("sendEmailLinkForSignIn", a, b, d, function() {
            Q("signIn", a, b)
        }) : (c = Wk(c, Rm(R(a)))) ? (Bm(new Bl(d), S(a)), Q("federatedSignIn", a, b, d, c, f)) : Q("unsupportedProvider", a, b, d) : Q("passwordSignUp", a, b, d, e, void 0, g)
    }

    function Wn(a, b, c, d, e, f) {
        var g = M(b);
        V(a, b.Y(u(a.sendSignInLinkToEmail, a), [c, f], function() {
            b.i();
            Q("emailLinkSignInSent", a, g, c, d, f)
        }, e))
    }

    function Un(a, b, c) {
        qn(R(a)) ? zn(function() {
            Zj ? An(a, function() {
                var d = new El(a.mb());
                Dm(d, S(a));
                ek(function(e) {
                    sm(lm, S(a));
                    Bn(a, e ? "empty" : "unavailable", function() {
                        c ? Q("prefilledEmailSignIn", a, b, c) : Q("signIn", a, b)
                    })
                }, xm(S(a)), Km(R(a)))
            }) : (W(a), Hn(Xn, b, !1, Km(R(a))))
        }, !1) : (xn = !1, An(a, function() {
            Bn(a, "unavailable", function() {
                c ? Q("prefilledEmailSignIn", a, b, c) : Q("signIn", a, b)
            })
        }))
    };

    function Yn(a) {
        var b = Pk();
        a = Mm(R(a));
        b = Xe(b, a) || "";
        for (var c in sn)
            if (sn[c].toLowerCase() == b.toLowerCase()) return sn[c];
        return "callback"
    }

    function Zn(a) {
        var b = Pk();
        a = mk(R(a).g, "queryParameterForSignInSuccessUrl");
        return (b = Xe(b, a)) ? Cb(Eb(b)) : null
    }

    function $n() {
        return Xe(Pk(), "oobCode")
    }

    function ao() {
        var a = Xe(Pk(), "continueUrl");
        return a ? function() {
            ac(window.location, a)
        } : null
    }

    function bo(a, b) {
        var c = Ok(b, "Could not find the FirebaseUI widget element on the page.");
        b = Zn(a);
        switch (Yn(a)) {
            case "callback":
                b && vm(b, S(a));
                a.Ze() ? Q("callback", a, c) : U(a, c, co(a));
                break;
            case "resetPassword":
                Q("passwordReset", a, c, $n(), ao());
                break;
            case "recoverEmail":
                Q("emailChangeRevocation", a, c, $n());
                break;
            case "revertSecondFactorAddition":
                Q("revertSecondFactorAddition", a, c, $n());
                break;
            case "verifyEmail":
                Q("emailVerification", a, c, $n(), ao());
                break;
            case "verifyAndChangeEmail":
                Q("verifyAndChangeEmail",
                    a, c, $n(), ao());
                break;
            case "signIn":
                Q("emailLinkSignInCallback", a, c, Pk());
                eo();
                break;
            case "select":
                if (b && vm(b, S(a)), Zj) {
                    U(a, c);
                    break
                } else {
                    zn(function() {
                        W(a);
                        Hn(Xn, c, !0)
                    }, !0);
                    return
                }
            default:
                throw Error("Unhandled widget operation.");
        }(b = mn(R(a))) && b()
    };

    function fo(a, b, c, d, e) {
        var f = c.Bd();
        f && V(a, c.Y(u(a.o().confirmPasswordReset, a.o()), [d, f], function() {
            c.i();
            var g = new Dj(e);
            g.render(b);
            X(a, g)
        }, function(g) {
            go(a, b, c, g)
        }))
    }

    function go(a, b, c, d) {
        "auth/weak-password" == (d && d.code) ? (a = T(d), H(c.za(), !1), Pg(c.Kd(), a), c.za().focus()) : (c && c.i(), c = new Ej, c.render(b), X(a, c))
    }

    function ho(a, b, c) {
        var d = new mj(c, function() {
            V(a, d.Y(u(a.o().sendPasswordResetEmail, a.o()), [c], function() {
                d.i();
                d = new wj(c, void 0, R(a).O(), R(a).N());
                d.render(b);
                X(a, d)
            }, function() {
                d.F($g().toString())
            }))
        });
        d.render(b);
        X(a, d)
    }

    function io(a, b, c, d) {
        var e = new Rj(d.factorId, function() {
            e.Y(u(a.o().sendPasswordResetEmail, a.o()), [c], function() {
                e.i();
                e = new wj(c, void 0, R(a).O(), R(a).N());
                e.render(b);
                X(a, e)
            }, function() {
                e.F($g().toString())
            })
        }, d.phoneNumber);
        e.render(b);
        X(a, e)
    }
    P.passwordReset = function(a, b, c, d) {
        V(a, a.o().verifyPasswordResetCode(c).then(function(e) {
            var f = new Kj(e, function() {
                fo(a, b, f, c, d)
            });
            f.render(b);
            X(a, f)
        }, function() {
            go(a, b)
        }))
    };
    P.emailChangeRevocation = function(a, b, c) {
        var d = null;
        V(a, a.o().checkActionCode(c).then(function(e) {
            d = e.data.email;
            return a.o().applyActionCode(c)
        }).then(function() {
            ho(a, b, d)
        }, function() {
            var e = new Fj;
            e.render(b);
            X(a, e)
        }))
    };
    P.emailVerification = function(a, b, c, d) {
        V(a, a.o().applyActionCode(c).then(function() {
            var e = new xj(d);
            e.render(b);
            X(a, e)
        }, function() {
            var e = new yj;
            e.render(b);
            X(a, e)
        }))
    };
    P.revertSecondFactorAddition = function(a, b, c) {
        var d = null,
            e = null;
        V(a, a.o().checkActionCode(c).then(function(f) {
            d = f.data.email;
            e = f.data.multiFactorInfo;
            return a.o().applyActionCode(c)
        }).then(function() {
            io(a, b, d, e)
        }, function() {
            var f = new Bj;
            f.render(b);
            X(a, f)
        }))
    };
    P.verifyAndChangeEmail = function(a, b, c, d) {
        var e = null;
        V(a, a.o().checkActionCode(c).then(function(f) {
            e = f.data.email;
            return a.o().applyActionCode(c)
        }).then(function() {
            var f = new zj(e, d);
            f.render(b);
            X(a, f)
        }, function() {
            var f = new Aj;
            f.render(b);
            X(a, f)
        }))
    };
    P.anonymousUserMismatch = function(a, b) {
        var c = new ij(function() {
            c.i();
            U(a, b)
        });
        c.render(b);
        X(a, c)
    };

    function jo(a, b, c) {
        if (c.user) {
            var d = {
                    user: c.user,
                    credential: c.credential,
                    operationType: c.operationType,
                    additionalUserInfo: c.additionalUserInfo
                },
                e = zm(S(a)),
                f = e && e.getEmail();
            if (f && !ko(c.user, f)) lo(a, b, d);
            else {
                var g = e && e.wa;
                g ? V(a, c.user.linkWithCredential(g).then(function(h) {
                    d = {
                        user: h.user,
                        credential: g,
                        operationType: h.operationType,
                        additionalUserInfo: h.additionalUserInfo
                    };
                    mo(a, b, d)
                }, function(h) {
                    no(a, b, h)
                })) : mo(a, b, d)
            }
        } else c = M(b), b.i(), Am(S(a)), U(a, c)
    }

    function mo(a, b, c) {
        Am(S(a));
        In(a, b, c)
    }

    function no(a, b, c) {
        var d = M(b);
        Am(S(a));
        c = T(c);
        b.i();
        U(a, d, void 0, c)
    }

    function oo(a, b, c, d) {
        var e = M(b);
        V(a, a.o().fetchSignInMethodsForEmail(c).then(function(f) {
            b.i();
            f.length ? Sa(f, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? Q("passwordLinking", a, e, c) : 1 == f.length && f[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? Q("emailLinkSignInLinking", a, e, c) : (f = Wk(f, Rm(R(a)))) ? Q("federatedLinking", a, e, c, f, d) : (Am(S(a)), Q("unsupportedProvider", a, e, c)) : (Am(S(a)), Q("passwordRecovery", a, e, c, !1, bh().toString()))
        }, function(f) {
            no(a, b, f)
        }))
    }

    function lo(a, b, c) {
        var d = M(b);
        V(a, po(a).then(function() {
            b.i();
            Q("emailMismatch", a, d, c)
        }, function(e) {
            e.name && "cancel" == e.name || (e = T(e.code), b.F(e))
        }))
    }

    function ko(a, b) {
        if (b == a.email) return !0;
        if (a.providerData)
            for (var c = 0; c < a.providerData.length; c++)
                if (b == a.providerData[c].email) return !0;
        return !1
    }
    P.callback = function(a, b, c) {
        var d = new kj;
        d.render(b);
        X(a, d);
        b = c || a.getRedirectResult();
        V(a, b.then(function(e) {
            jo(a, d, e)
        }, function(e) {
            if (e && ("auth/account-exists-with-different-credential" == e.code || "auth/email-already-in-use" == e.code) && e.email && e.credential) Bm(new Bl(e.email, e.credential), S(a)), oo(a, d, e.email);
            else if (e && "auth/user-cancelled" == e.code) {
                var f = zm(S(a)),
                    g = T(e);
                f && f.wa ? oo(a, d, f.getEmail(), g) : f ? Vn(a, d, f.getEmail(), g) : no(a, d, e)
            } else e && "auth/credential-already-in-use" == e.code || (e && "auth/operation-not-supported-in-this-environment" ==
                e.code && En(a) ? jo(a, d, {
                    user: null,
                    credential: null
                }) : no(a, d, e))
        }))
    };
    P.differentDeviceError = function(a, b) {
        var c = new lj(function() {
            c.i();
            U(a, b)
        });
        c.render(b);
        X(a, c)
    };
    P.emailLinkConfirmation = function(a, b, c, d, e, f) {
        var g = new pj(function() {
            var h = g.oa();
            h ? (g.i(), d(a, b, h, c)) : g.w().focus()
        }, function() {
            g.i();
            U(a, b, e || void 0)
        }, e || void 0, R(a).O(), R(a).N());
        g.render(b);
        X(a, g);
        f && g.F(f)
    };
    P.emailLinkNewDeviceLinking = function(a, b, c, d) {
        var e = new gk(c);
        c = e.cc();
        kk(e, null);
        if (c) {
            var f = new rj(Sm(R(a), c), function() {
                f.i();
                d(a, b, e.toString())
            }, R(a).O(), R(a).N());
            f.render(b);
            X(a, f)
        } else U(a, b)
    };

    function qo(a, b, c, d, e) {
        var f = new jj,
            g = new gk(c),
            h = g.W.V.get(O.se) || "",
            m = g.W.V.get(O.vd) || "",
            n = "1" === g.W.V.get(O.td),
            l = jk(g),
            t = g.cc();
        g = g.mb();
        a.he(g);
        var y = !rm(pm, S(a)),
            F = d || Em(m, S(a)),
            sa = (d = Fm(m, S(a))) && d.wa;
        t && sa && sa.providerId !== t && (sa = null);
        f.render(b);
        X(a, f);
        V(a, f.Y(function() {
            var Z = C(null);
            Z = l && y || y && n ? ld(Error("anonymous-user-not-found")) : ro(a, c).then(function(Mb) {
                if (t && !sa) throw Error("pending-credential-not-found");
                return Mb
            });
            var ma = null;
            return Z.then(function(Mb) {
                ma = Mb;
                return e ? null : a.o().checkActionCode(h)
            }).then(function() {
                return ma
            })
        }, [], function(Z) {
            F ? so(a, f, F, c, sa, Z) : n ? (f.i(), Q("differentDeviceError", a, b)) : (f.i(), Q("emailLinkConfirmation", a, b, c, to))
        }, function(Z) {
            var ma = void 0;
            if (!Z || !Z.name || "cancel" != Z.name) switch (f.i(), Z && Z.message) {
                case "anonymous-user-not-found":
                    Q("differentDeviceError", a, b);
                    break;
                case "anonymous-user-mismatch":
                    Q("anonymousUserMismatch", a, b);
                    break;
                case "pending-credential-not-found":
                    Q("emailLinkNewDeviceLinking", a, b, c, uo);
                    break;
                default:
                    Z && (ma = T(Z)), U(a, b, void 0, ma)
            }
        }))
    }

    function to(a, b, c, d) {
        qo(a, b, d, c, !0)
    }

    function uo(a, b, c) {
        qo(a, b, c)
    }

    function so(a, b, c, d, e, f) {
        var g = M(b);
        b.Mb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Signing in...".toString());
        var h = null;
        e = (f ? vo(a, f, c, d, e) : a.signInWithEmailLink(c, d, e)).then(function(m) {
            sm(qm, S(a));
            sm(pm, S(a));
            b.da();
            b.Mb("firebaseui-icon-done", "Signed in!".toString());
            h = setTimeout(function() {
                b.da();
                In(a, b, m, !0)
            }, 1E3);
            V(a, function() {
                b && (b.da(), b.i());
                clearTimeout(h)
            })
        }, function(m) {
            b.da();
            b.i();
            if (!m.name || "cancel" != m.name) {
                var n = T(m);
                "auth/email-already-in-use" == m.code || "auth/credential-already-in-use" == m.code ? (sm(qm, S(a)), sm(pm, S(a))) : "auth/invalid-email" == m.code ? (n = "The email provided does not match the current sign-in session.".toString(), Q("emailLinkConfirmation", a, g, d, to, null, n)) : U(a, g, c, n)
            }
        });
        V(a, e)
    }
    P.emailLinkSignInCallback = qo;

    function wo(a, b, c, d) {
        var e = M(b);
        Wn(a, b, c, function() {
            U(a, e, c)
        }, function(f) {
            if (!f.name || "cancel" != f.name) {
                var g = T(f);
                f && "auth/network-request-failed" == f.code ? b.F(g) : (b.i(), U(a, e, c, g))
            }
        }, d)
    }
    P.emailLinkSignInLinking = function(a, b, c) {
        var d = zm(S(a));
        Am(S(a));
        if (d) {
            var e = d.wa.providerId,
                f = new qj(c, Sm(R(a), e), function() {
                    wo(a, f, c, d)
                }, R(a).O(), R(a).N());
            f.render(b);
            X(a, f)
        } else U(a, b)
    };
    P.emailLinkSignInSent = function(a, b, c, d, e) {
        var f = new sj(c, function() {
            f.i();
            Q("emailNotReceived", a, b, c, d, e)
        }, function() {
            f.i();
            d()
        }, R(a).O(), R(a).N());
        f.render(b);
        X(a, f)
    };
    P.emailMismatch = function(a, b, c) {
        var d = zm(S(a));
        if (d) {
            var e = new tj(c.user.email, d.getEmail(), function() {
                var f = e;
                Am(S(a));
                In(a, f, c)
            }, function() {
                var f = c.credential.providerId,
                    g = M(e);
                e.i();
                d.wa ? Q("federatedLinking", a, g, d.getEmail(), f) : Q("federatedSignIn", a, g, d.getEmail(), f)
            }, R(a).O(), R(a).N());
            e.render(b);
            X(a, e)
        } else U(a, b)
    };
    P.emailNotReceived = function(a, b, c, d, e) {
        var f = new uj(function() {
            Wn(a, f, c, d, function(g) {
                g = T(g);
                f.F(g)
            }, e)
        }, function() {
            f.i();
            U(a, b, c)
        }, R(a).O(), R(a).N());
        f.render(b);
        X(a, f)
    };
    P.federatedLinking = function(a, b, c, d, e) {
        var f = zm(S(a));
        if (f && f.wa) {
            var g = new vj(c, Sm(R(a), d), function() {
                On(a, g, d, c)
            }, R(a).O(), R(a).N());
            g.render(b);
            X(a, g);
            e && g.F(e)
        } else U(a, b)
    };
    P.federatedRedirect = function(a, b, c) {
        var d = new jj;
        d.render(b);
        X(a, d);
        b = Rm(R(a))[0];
        On(a, d, b, c)
    };
    P.federatedSignIn = function(a, b, c, d, e) {
        var f = new vj(c, Sm(R(a), d), function() {
            On(a, f, d, c)
        }, R(a).O(), R(a).N());
        f.render(b);
        X(a, f);
        e && f.F(e)
    };

    function xo(a, b, c, d) {
        var e = b.Cd();
        e ? V(a, b.Y(u(a.Qh, a), [c, e], function(f) {
            f = f.user.linkWithCredential(d).then(function(g) {
                return In(a, b, {
                    user: g.user,
                    credential: d,
                    operationType: g.operationType,
                    additionalUserInfo: g.additionalUserInfo
                })
            });
            V(a, f);
            return f
        }, function(f) {
            if (!f.name || "cancel" != f.name) switch (f.code) {
                case "auth/wrong-password":
                    H(b.La(), !1);
                    Pg(b.Ld(), T(f));
                    break;
                case "auth/too-many-requests":
                    b.F(T(f));
                    break;
                default:
                    vl("signInWithEmailAndPassword: " + f.message, void 0), b.F(T(f))
            }
        })) : b.La().focus()
    }
    P.passwordLinking = function(a, b, c) {
        var d = zm(S(a));
        Am(S(a));
        var e = d && d.wa;
        if (e) {
            var f = new Ij(c, function() {
                xo(a, f, c, e)
            }, function() {
                f.i();
                Q("passwordRecovery", a, b, c)
            }, R(a).O(), R(a).N());
            f.render(b);
            X(a, f)
        } else U(a, b)
    };

    function yo(a, b) {
        var c = b.oa();
        if (c) {
            var d = M(b);
            V(a, b.Y(u(a.o().sendPasswordResetEmail, a.o()), [c], function() {
                b.i();
                var e = new wj(c, function() {
                    e.i();
                    U(a, d)
                }, R(a).O(), R(a).N());
                e.render(d);
                X(a, e)
            }, function(e) {
                H(b.w(), !1);
                Pg(b.ab(), T(e))
            }))
        } else b.w().focus()
    }
    P.passwordRecovery = function(a, b, c, d, e) {
        var f = new Jj(function() {
            yo(a, f)
        }, d ? void 0 : function() {
            f.i();
            U(a, b)
        }, c, R(a).O(), R(a).N());
        f.render(b);
        X(a, f);
        e && f.F(e)
    };
    P.passwordSignIn = function(a, b, c, d) {
        var e = new Lj(function() {
            Sn(a, e)
        }, function() {
            var f = e.getEmail();
            e.i();
            Q("passwordRecovery", a, b, f)
        }, c, R(a).O(), R(a).N(), d);
        e.render(b);
        X(a, e)
    };

    function zo(a, b) {
        var c = en(R(a)),
            d = b.oa(),
            e = null;
        c && (e = b.wg());
        var f = b.Bd();
        if (d) {
            if (c)
                if (e) e = bc(e);
                else {
                    b.bc().focus();
                    return
                }
            if (f) {
                var g = firebase.auth.EmailAuthProvider.credential(d, f);
                V(a, b.Y(u(a.Rh, a), [d, f], function(h) {
                    var m = {
                        user: h.user,
                        credential: g,
                        operationType: h.operationType,
                        additionalUserInfo: h.additionalUserInfo
                    };
                    return c ? (h = h.user.updateProfile({
                        displayName: e
                    }).then(function() {
                        return In(a, b, m)
                    }), V(a, h), h) : In(a, b, m)
                }, function(h) {
                    if (!h.name || "cancel" != h.name) {
                        var m = T(h);
                        switch (h.code) {
                            case "auth/email-already-in-use":
                                return Ao(a,
                                    b, d, h);
                            case "auth/too-many-requests":
                                m = "Too many account requests are coming from your IP address. Try again in a few minutes.".toString();
                            case "auth/operation-not-allowed":
                            case "auth/weak-password":
                                H(b.za(), !1);
                                Pg(b.Kd(), m);
                                break;
                            default:
                                h = "setAccountInfo: " + Yl(h), vl(h, void 0), b.F(m)
                        }
                    }
                }))
            } else b.za().focus()
        } else b.w().focus()
    }

    function Ao(a, b, c, d) {
        function e() {
            var g = T(d);
            H(b.w(), !1);
            Pg(b.ab(), g);
            b.w().focus()
        }
        var f = a.o().fetchSignInMethodsForEmail(c).then(function(g) {
            g.length ? e() : (g = M(b), b.i(), Q("passwordRecovery", a, g, c, !1, bh().toString()))
        }, function() {
            e()
        });
        V(a, f);
        return f
    }
    P.passwordSignUp = function(a, b, c, d, e, f) {
        function g() {
            h.i();
            U(a, b)
        }
        var h = new Mj(en(R(a)), function() {
            zo(a, h)
        }, e ? void 0 : g, c, d, R(a).O(), R(a).N(), f);
        h.render(b);
        X(a, h)
    };

    function Bo(a, b, c, d) {
        function e(g) {
            b.Md().focus();
            H(b.Md(), !1);
            Pg(b.Rg(), g)
        }
        var f = b.xg();
        f ? (b.Mb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Verifying...".toString()), V(a, b.Y(u(d.confirm, d), [f], function(g) {
            b.da();
            b.Mb("firebaseui-icon-done", "Verified!".toString());
            var h = setTimeout(function() {
                b.da();
                b.i();
                var m = {
                    user: Co(a).currentUser,
                    credential: null,
                    operationType: g.operationType,
                    additionalUserInfo: g.additionalUserInfo
                };
                In(a, b, m, !0)
            }, 1E3);
            V(a, function() {
                b && b.da();
                clearTimeout(h)
            })
        }, function(g) {
            if (g.name && "cancel" == g.name) b.da();
            else {
                var h = T(g);
                switch (g.code) {
                    case "auth/credential-already-in-use":
                        b.da();
                        break;
                    case "auth/code-expired":
                        g = M(b);
                        b.da();
                        b.i();
                        Q("phoneSignInStart", a, g, c, h);
                        break;
                    case "auth/missing-verification-code":
                    case "auth/invalid-verification-code":
                        b.da();
                        e(h);
                        break;
                    default:
                        b.da(), b.F(h)
                }
            }
        }))) : e("Wrong code. Try again.".toString())
    }
    P.phoneSignInFinish = function(a, b, c, d, e, f) {
        var g = new Nj(function() {
            g.i();
            Q("phoneSignInStart", a, b, c)
        }, function() {
            Bo(a, g, c, e)
        }, function() {
            g.i();
            U(a, b)
        }, function() {
            g.i();
            Q("phoneSignInStart", a, b, c)
        }, bi(c), d, R(a).O(), R(a).N());
        g.render(b);
        X(a, g);
        f && g.F(f)
    };

    function Do(a, b, c, d) {
        try {
            var e = b.Sg(vn)
        } catch (f) {
            return
        }
        e ? tn ? (b.Mb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Verifying...".toString()), V(a, b.Y(u(a.Wh, a), [bi(e), c], function(f) {
            var g = M(b);
            b.Mb("firebaseui-icon-done", "Code sent!".toString());
            var h = setTimeout(function() {
                b.da();
                b.i();
                Q("phoneSignInFinish", a, g, e, 15, f)
            }, 1E3);
            V(a, function() {
                b && b.da();
                clearTimeout(h)
            })
        }, function(f) {
            b.da();
            if (!f.name || "cancel" != f.name) {
                grecaptcha.reset(wn);
                tn =
                    null;
                var g = f && f.message || "";
                if (f.code) switch (f.code) {
                    case "auth/too-many-requests":
                        g = "This phone number has been used too many times".toString();
                        break;
                    case "auth/invalid-phone-number":
                    case "auth/missing-phone-number":
                        b.kb().focus();
                        Pg(b.Se(), Zg().toString());
                        return;
                    default:
                        g = T(f)
                }
                b.F(g)
            }
        }))) : un ? Pg(b.Nd(), "Solve the reCAPTCHA".toString()) : !un && d && b.C().click() : (b.kb().focus(), Pg(b.Se(), Zg().toString()))
    }
    P.phoneSignInStart = function(a, b, c, d) {
        var e = Ym(R(a)) || {};
        tn = null;
        un = !(e && "invisible" === e.size);
        var f = Tn(a),
            g = cn(R(a)),
            h = f ? bn(R(a)) : null;
        g = c && c.Gc || g && g.b || null;
        c = c && c.Pa || h;
        (h = dn(R(a))) && fg(h);
        vn = h ? new ag(dn(R(a))) : gg;
        var m = new Oj(function(l) {
            Do(a, m, n, !(!l || !l.keyCode))
        }, un, f ? null : function() {
            n.clear();
            m.i();
            U(a, b)
        }, R(a).O(), R(a).N(), f, vn, g, c);
        m.render(b);
        X(a, m);
        d && m.F(d);
        e.callback = function(l) {
            m.Nd() && Og(m.Nd());
            tn = l;
            un || Do(a, m, n)
        };
        e["expired-callback"] = function() {
            tn = null
        };
        var n = new firebase.auth.RecaptchaVerifier(un ?
            m.Tg() : m.C(), e, Co(a).app);
        V(a, m.Y(u(n.render, n), [], function(l) {
            wn = l
        }, function(l) {
            l.name && "cancel" == l.name || (l = T(l), m.i(), U(a, b, void 0, l))
        }))
    };
    P.prefilledEmailSignIn = function(a, b, c) {
        var d = new jj;
        d.render(b);
        X(a, d);
        V(a, d.Y(u(a.o().fetchSignInMethodsForEmail, a.o()), [c], function(e) {
            d.i();
            var f = !(!En(a) || !co(a));
            Fn(a, b, e, c, void 0, void 0, f)
        }, function(e) {
            e = T(e);
            d.i();
            Q("signIn", a, b, c, e)
        }))
    };
    P.providerSignIn = function(a, b, c, d) {
        var e = new Qj(function(f) {
            f == firebase.auth.EmailAuthProvider.PROVIDER_ID ? (e.i(), Un(a, b, d)) : f == firebase.auth.PhoneAuthProvider.PROVIDER_ID ? (e.i(), Q("phoneSignInStart", a, b)) : "anonymous" == f ? Qn(a, e) : On(a, e, f, d);
            W(a);
            a.Od.cancel()
        }, Tm(R(a)), R(a).O(), R(a).N());
        e.render(b);
        X(a, e);
        c && e.F(c);
        Eo(a)
    };
    P.sendEmailLinkForSignIn = function(a, b, c, d) {
        var e = new kj;
        e.render(b);
        X(a, e);
        Wn(a, e, c, d, function(f) {
            e.i();
            f = T(f);
            Q("signIn", a, b, c, f)
        })
    };
    P.signIn = function(a, b, c, d) {
        var e = En(a),
            f = e && !qn(R(a)),
            g = new Uj(function() {
                var h = g,
                    m = h.oa() || "";
                m && Vn(a, h, m)
            }, f ? null : function() {
                g.i();
                U(a, b, c)
            }, c, R(a).O(), R(a).N(), e);
        g.render(b);
        X(a, g);
        d && g.F(d)
    };
    P.unsupportedProvider = function(a, b, c) {
        var d = new Wj(c, function() {
            d.i();
            Q("passwordRecovery", a, b, c)
        }, function() {
            d.i();
            U(a, b, c)
        }, R(a).O(), R(a).N());
        d.render(b);
        X(a, d)
    };

    function Fo(a, b) {
        this.He = !1;
        var c = Go(b);
        if (Ho[c]) throw Error('An AuthUI instance already exists for the key "' + c + '"');
        Ho[c] = this;
        this.va = a;
        this.lf = null;
        this.Wd = !1;
        Io(this.va);
        this.Qa = firebase.initializeApp({
            apiKey: a.app.options.apiKey,
            authDomain: a.app.options.authDomain
        }, a.app.name + "-firebaseui-temp").auth();
        Io(this.Qa);
        this.Qa.setPersistence && this.Qa.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        this.lg = b;
        this.g = new Im;
        this.K = this.qd = this.lb = this.xc = this.od = null;
        this.cb = [];
        this.we = !1;
        this.Od =
            Tk.Jd();
        this.$a = this.rc = null;
        this.Mf = this.hc = !1
    }

    function Io(a) {
        a && a.INTERNAL && a.INTERNAL.logFramework && a.INTERNAL.logFramework("FirebaseUI-web")
    }
    var Ho = {};

    function Go(a) {
        return a || "[DEFAULT]"
    }
    Fo.prototype.getRedirectResult = function() {
        W(this);
        if (!this.lb) {
            var a = this;
            this.lb = Jo(this, function(b) {
                return b && !zm(S(a)) ? C(Co(a).getRedirectResult().then(function(c) {
                    return c
                }, function(c) {
                    if (c && "auth/email-already-in-use" == c.code && c.email && c.credential) throw c;
                    return Ko(a, c)
                })) : C(a.o().getRedirectResult().then(function(c) {
                    return Nm(R(a)) && !c.user && a.$a && !a.$a.isAnonymous ? Co(a).getRedirectResult() : c
                }))
            })
        }
        return this.lb
    };

    function X(a, b) {
        W(a);
        a.K = b
    }
    var Lo = null;

    function Xn() {
        return Lo
    }
    k = Fo.prototype;
    k.o = function() {
        W(this);
        return this.Qa
    };

    function Co(a) {
        W(a);
        return a.va
    }

    function S(a) {
        W(a);
        return a.lg
    }

    function co(a) {
        W(a);
        return a.od ? a.od.emailHint : void 0
    }
    k.Ze = function() {
        W(this);
        return !!Cm(S(this)) || Mo(Pk())
    };

    function Mo(a) {
        a = new gk(a);
        return "signIn" === (a.W.V.get(O.Zf) || null) && !!a.W.V.get(O.se)
    }
    k.start = function(a, b) {
        No(this, a, b)
    };

    function No(a, b, c, d) {
        W(a);
        "undefined" !== typeof a.va.languageCode && (a.lf = a.va.languageCode);
        var e = "en".replace(/_/g, "-");
        a.va.languageCode = e;
        a.Qa.languageCode = e;
        a.Wd = !0;
        "undefined" !== typeof a.va.tenantId && (a.Qa.tenantId = a.va.tenantId);
        a.Lb(c);
        a.od = d || null;
        var f = q.document;
        a.rc ? a.rc.then(function() {
            "complete" == f.readyState ? Oo(a, b) : he(window, "load", function() {
                Oo(a, b)
            })
        }) : "complete" == f.readyState ? Oo(a, b) : he(window, "load", function() {
            Oo(a, b)
        })
    }

    function Oo(a, b) {
        var c = Ok(b, "Could not find the FirebaseUI widget element on the page.");
        c.setAttribute("lang", "en".replace(/_/g, "-"));
        if (Lo) {
            var d = Lo;
            W(d);
            zm(S(d)) && Al("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");
            Lo.reset()
        }
        Lo = a;
        a.qd = c;
        Po(a, c);
        Ul(new Vl) && Ul(new Wl) ? bo(a, b) : (b = Ok(b, "Could not find the FirebaseUI widget element on the page."), c = new Hj("The browser you are using does not support Web Storage. Please try again in a different browser.".toString()),
            c.render(b), X(a, c));
        b = a.K && "blank" == a.K.cd && jn(R(a));
        Cm(S(a)) && !b && (b = Cm(S(a)), a.he(b.mb()), sm(lm, S(a)))
    }

    function Jo(a, b) {
        if (a.hc) return b(Qo(a));
        V(a, function() {
            a.hc = !1
        });
        if (Nm(R(a))) {
            var c = new B(function(d) {
                V(a, a.va.onAuthStateChanged(function(e) {
                    a.$a = e;
                    a.hc || (a.hc = !0, d(b(Qo(a))))
                }))
            });
            V(a, c);
            return c
        }
        a.hc = !0;
        return b(null)
    }

    function Qo(a) {
        W(a);
        return Nm(R(a)) && a.$a && a.$a.isAnonymous ? a.$a : null
    }

    function V(a, b) {
        W(a);
        if (b) {
            a.cb.push(b);
            var c = function() {
                Wa(a.cb, function(d) {
                    return d == b
                })
            };
            "function" != typeof b && b.then(c, c)
        }
    }
    k.disableAutoSignIn = function() {
        W(this);
        this.we = !0
    };

    function Ro(a) {
        W(a);
        var b;
        (b = a.we) || (a = R(a), a = an(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID), b = !(!a || "select_account" !== a.prompt));
        return b
    }

    function Jn(a) {
        "undefined" !== typeof a.va.languageCode && a.Wd && (a.Wd = !1, a.va.languageCode = a.lf)
    }
    k.he = function(a) {
        this.va.tenantId = a;
        this.Qa.tenantId = a
    };
    k.mb = function() {
        return this.Qa.tenantId || null
    };
    k.reset = function() {
        W(this);
        var a = this;
        this.qd && this.qd.removeAttribute("lang");
        this.xc && this.xc.unregister();
        Jn(this);
        this.od = null;
        eo();
        sm(lm, S(this));
        W(this);
        this.Od.cancel();
        this.lb = C({
            user: null,
            credential: null
        });
        Lo == this && (Lo = null);
        this.qd = null;
        for (var b = 0; b < this.cb.length; b++)
            if ("function" == typeof this.cb[b]) this.cb[b]();
            else this.cb[b].cancel && this.cb[b].cancel();
        this.cb = [];
        Am(S(this));
        this.K && (this.K.i(), this.K = null);
        this.Hc = null;
        this.Qa && (this.rc = po(this).then(function() {
            a.rc = null
        }, function() {
            a.rc =
                null
        }))
    };

    function Po(a, b) {
        a.Hc = null;
        a.xc = new ri(b);
        a.xc.register();
        ge(a.xc, "pageEnter", function(c) {
            c = c && c.pageId;
            if (a.Hc != c) {
                var d = R(a);
                (d = nn(d).uiChanged || null) && d(a.Hc, c);
                a.Hc = c
            }
        })
    }
    k.Lb = function(a) {
        W(this);
        this.g.Lb(a);
        !this.Mf && on(R(this)) && (Al("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."), this.Mf = !0)
    };

    function R(a) {
        W(a);
        return a.g
    }
    k.signIn = function() {
        W(this);
        var a = R(this),
            b = mk(a.g, "widgetUrl");
        var c = Lm(a, b);
        R(this).g.get("popupMode") ? (a = (window.screen.availHeight - 600) / 2, b = (window.screen.availWidth - 500) / 2, c = c || "about:blank", a = {
            width: 500,
            height: 600,
            top: 0 < a ? a : 0,
            left: 0 < b ? b : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
        }, a.target = a.target || c.target || "google_popup", a.width = a.width || 690, a.height = a.height || 500, (a = mg(c, a)) && a.focus()) : ac(window.location, c)
    };

    function W(a) {
        if (a.He) throw Error("AuthUI instance is deleted!");
    }
    k.delete = function() {
        var a = this;
        W(this);
        return this.Qa.app.delete().then(function() {
            var b = Go(S(a));
            delete Ho[b];
            a.reset();
            a.He = !0
        })
    };

    function Eo(a) {
        W(a);
        try {
            a.Od.show(Vm(R(a)), Ro(a)).then(function(b) {
                return a.K ? Rn(a, a.K, b) : !1
            })
        } catch (b) {}
    }
    k.sendSignInLinkToEmail = function(a, b) {
        W(this);
        var c = this,
            d = Rk();
        if (!fn(R(this))) return ld(Error("Email link sign-in should be enabled to trigger email sending."));
        var e = hn(R(this)),
            f = new gk(e.url);
        hk(f, d);
        b && b.wa && (Gm(d, b, S(this)), kk(f, b.wa.providerId));
        ik(f, gn(R(this)));
        return Jo(this, function(g) {
            g && ((g = g.uid) ? nf(f.W, O.sd, g) : f.W.removeParameter(O.sd));
            e.url = f.toString();
            return c.o().sendSignInLinkToEmail(a, e)
        }).then(function() {
            var g = S(c),
                h = {};
            h.email = a;
            tm(pm, Jk(d, JSON.stringify(h)), g)
        }, function(g) {
            sm(qm,
                S(c));
            sm(pm, S(c));
            throw g;
        })
    };

    function ro(a, b) {
        var c = jk(new gk(b));
        if (!c) return C(null);
        b = new B(function(d, e) {
            var f = Co(a).onAuthStateChanged(function(g) {
                f();
                g && g.isAnonymous && g.uid === c ? d(g) : g && g.isAnonymous && g.uid !== c ? e(Error("anonymous-user-mismatch")) : e(Error("anonymous-user-not-found"))
            });
            V(a, f)
        });
        V(a, b);
        return b
    }

    function vo(a, b, c, d, e) {
        W(a);
        var f = e || null,
            g = firebase.auth.EmailAuthProvider.credentialWithLink(c, d);
        c = f ? a.o().signInWithEmailLink(c, d).then(function(h) {
            return h.user.linkWithCredential(f)
        }).then(function() {
            return po(a)
        }).then(function() {
            return Ko(a, {
                code: "auth/email-already-in-use"
            }, f)
        }) : a.o().fetchSignInMethodsForEmail(c).then(function(h) {
            return h.length ? Ko(a, {
                code: "auth/email-already-in-use"
            }, g) : b.linkWithCredential(g)
        });
        V(a, c);
        return c
    }
    k.signInWithEmailLink = function(a, b, c) {
        W(this);
        var d = c || null,
            e, f = this;
        a = this.o().signInWithEmailLink(a, b).then(function(g) {
            e = {
                user: g.user,
                credential: null,
                operationType: g.operationType,
                additionalUserInfo: g.additionalUserInfo
            };
            if (d) return g.user.linkWithCredential(d).then(function(h) {
                e = {
                    user: h.user,
                    credential: d,
                    operationType: e.operationType,
                    additionalUserInfo: h.additionalUserInfo
                }
            })
        }).then(function() {
            po(f)
        }).then(function() {
            return Co(f).updateCurrentUser(e.user)
        }).then(function() {
            e.user = Co(f).currentUser;
            return e
        });
        V(this, a);
        return a
    };

    function eo() {
        var a = Pk();
        if (Mo(a)) {
            a = new gk(a);
            for (var b in O) O.hasOwnProperty(b) && a.W.removeParameter(O[b]);
            b = {
                state: "signIn",
                mode: "emailLink",
                operation: "clear"
            };
            var c = q.document.title;
            q.history && q.history.replaceState && q.history.replaceState(b, c, a.toString())
        }
    }
    k.Vh = function(a, b) {
        W(this);
        var c = this;
        return this.o().signInWithEmailAndPassword(a, b).then(function(d) {
            return Jo(c, function(e) {
                return e ? po(c).then(function() {
                    return Ko(c, {
                        code: "auth/email-already-in-use"
                    }, firebase.auth.EmailAuthProvider.credential(a, b))
                }) : d
            })
        })
    };
    k.Rh = function(a, b) {
        W(this);
        var c = this;
        return Jo(this, function(d) {
            if (d) {
                var e = firebase.auth.EmailAuthProvider.credential(a, b);
                return d.linkWithCredential(e)
            }
            return c.o().createUserWithEmailAndPassword(a, b)
        })
    };
    k.Uh = function(a) {
        W(this);
        var b = this;
        return Jo(this, function(c) {
            return c ? c.linkWithCredential(a).then(function(d) {
                return d
            }, function(d) {
                if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                return Ko(b, d, a)
            }) : b.o().signInWithCredential(a)
        })
    };

    function Pn(a, b) {
        W(a);
        return Jo(a, function(c) {
            return c && !zm(S(a)) ? c.linkWithPopup(b).then(function(d) {
                return d
            }, function(d) {
                if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                return Ko(a, d)
            }) : a.o().signInWithPopup(b)
        })
    }
    k.Xh = function(a) {
        W(this);
        var b = this,
            c = this.lb;
        this.lb = null;
        return Jo(this, function(d) {
            return d && !zm(S(b)) ? d.linkWithRedirect(a) : b.o().signInWithRedirect(a)
        }).then(function() {}, function(d) {
            b.lb = c;
            throw d;
        })
    };
    k.Wh = function(a, b) {
        W(this);
        var c = this;
        return Jo(this, function(d) {
            return d ? d.linkWithPhoneNumber(a, b).then(function(e) {
                return new Dl(e, function(f) {
                    if ("auth/credential-already-in-use" == f.code) return Ko(c, f);
                    throw f;
                })
            }) : Co(c).signInWithPhoneNumber(a, b).then(function(e) {
                return new Dl(e)
            })
        })
    };
    k.Th = function() {
        W(this);
        return Co(this).signInAnonymously()
    };

    function Ln(a, b) {
        W(a);
        return Jo(a, function(c) {
            if (a.$a && !a.$a.isAnonymous && Nm(R(a)) && !a.o().currentUser) return po(a).then(function() {
                "password" == b.credential.providerId && (b.credential = null);
                return b
            });
            if (c) return po(a).then(function() {
                return c.linkWithCredential(b.credential)
            }).then(function(d) {
                b.user = d.user;
                b.credential = d.credential;
                b.operationType = d.operationType;
                b.additionalUserInfo = d.additionalUserInfo;
                return b
            }, function(d) {
                if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                return Ko(a, d, b.credential)
            });
            if (!b.user) throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');
            return po(a).then(function() {
                return Co(a).updateCurrentUser(b.user)
            }).then(function() {
                b.user = Co(a).currentUser;
                b.operationType = "signIn";
                b.credential && b.credential.providerId && "password" == b.credential.providerId && (b.credential = null);
                return b
            })
        })
    }
    k.Qh = function(a, b) {
        W(this);
        return this.o().signInWithEmailAndPassword(a, b)
    };

    function po(a) {
        W(a);
        return a.o().signOut()
    }

    function Ko(a, b, c) {
        W(a);
        if (b && b.code && ("auth/email-already-in-use" == b.code || "auth/credential-already-in-use" == b.code)) {
            var d = Om(R(a));
            return C().then(function() {
                return d(new Hm("anonymous-upgrade-merge-conflict", null, c || b.credential))
            }).then(function() {
                a.K && (a.K.i(), a.K = null);
                throw b;
            })
        }
        return ld(b)
    };

    function So(a) {
        this.g = new lk;
        this.g.define("authDomain");
        this.g.define("displayMode", "optionFirst");
        this.g.define("tenants");
        this.g.define("callbacks");
        this.g.define("tosUrl");
        this.g.define("privacyPolicyUrl");
        this.Lb(a)
    }
    So.prototype.Lb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) try {
                this.g.update(b, a[b])
            } catch (c) {
                vl('Invalid config: "' + b + '"', void 0)
            }
    };

    function To(a) {
        a = a.g.get("displayMode");
        for (var b in Uo)
            if (Uo[b] === a) return Uo[b];
        return "optionFirst"
    }
    So.prototype.O = function() {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        a && !b && Al("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof a) return a;
            if ("string" === typeof a) return function() {
                Nk(a)
            }
        }
        return null
    };
    So.prototype.N = function() {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        b && !a && Al("Terms of Service URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof b) return b;
            if ("string" === typeof b) return function() {
                Nk(b)
            }
        }
        return null
    };

    function Vo(a, b) {
        a = a.g.get("tenants");
        if (!a || !a.hasOwnProperty(b) && !a.hasOwnProperty("*")) throw Error("Invalid tenant configuration!");
    }

    function Wo(a, b, c) {
        a = a.g.get("tenants");
        if (!a) throw Error("Invalid tenant configuration!");
        var d = [];
        a = a[b] || a["*"];
        if (!a) return vl("Invalid tenant configuration: " + (b + " is not configured!"), void 0), d;
        b = a.signInOptions;
        if (!b) throw Error("Invalid tenant configuration: signInOptions are invalid!");
        b.forEach(function(e) {
            if ("string" === typeof e) d.push(e);
            else if ("string" === typeof e.provider) {
                var f = e.hd;
                f && c ? (f instanceof RegExp ? f : new RegExp("@" + f.replace(".", "\\.") + "$")).test(c) && d.push(e.provider) : d.push(e.provider)
            } else e =
                "Invalid tenant configuration: signInOption " + (JSON.stringify(e) + " is invalid!"), vl(e, void 0)
        });
        return d
    }

    function Xo(a, b, c) {
        a = Yo(a, b);
        (b = a.signInOptions) && c && (b = b.filter(function(d) {
            return "string" === typeof d ? c.includes(d) : c.includes(d.provider)
        }), a.signInOptions = b);
        return a
    }

    function Yo(a, b) {
        var c = Zo;
        var d = void 0 === d ? {} : d;
        Vo(a, b);
        a = a.g.get("tenants");
        return Sk(a[b] || a["*"], c, d)
    }
    var Zo = ["immediateFederatedRedirect", "privacyPolicyUrl", "signInFlow", "signInOptions", "tosUrl"],
        Uo = {
            ni: "optionFirst",
            li: "identifierFirst"
        };

    function $o(a, b) {
        var c = this;
        this.hb = Ok(a);
        this.U = {};
        Object.keys(b).forEach(function(d) {
            c.U[d] = new So(b[d])
        });
        this.$e = this.K = this.Fa = this.sa = this.vb = this.Va = null;
        Object.defineProperty(this, "languageCode", {
            get: function() {
                return this.$e
            },
            set: function(d) {
                this.$e = d || null
            },
            enumerable: !1
        })
    }
    k = $o.prototype;
    k.Gh = function(a, b) {
        var c = this;
        ap(this);
        var d = a.apiKey;
        return new B(function(e, f) {
            if (c.U.hasOwnProperty(d)) {
                var g = nn(c.U[d]).selectTenantUiHidden || null;
                if ("optionFirst" === To(c.U[d])) {
                    var h = [];
                    b.forEach(function(l) {
                        l = l || "_";
                        var t = c.U[d].g.get("tenants");
                        if (!t) throw Error("Invalid tenant configuration!");
                        (t = t[l] || t["*"]) ? l = {
                            tenantId: "_" !== l ? l : null,
                            displayName: t.displayName,
                            Uc: t.iconUrl,
                            Bc: t.buttonColor
                        }: (vl("Invalid tenant configuration: " + (l + " is not configured!"), void 0), l = null);
                        l && h.push(l)
                    });
                    var m =
                        function(l) {
                            l = {
                                tenantId: l,
                                providerIds: Wo(c.U[d], l || "_")
                            };
                            e(l)
                        };
                    if (1 === h.length) {
                        m(h[0].tenantId);
                        return
                    }
                    c.K = new Sj(function(l) {
                        ap(c);
                        g && g();
                        m(l)
                    }, h, c.U[d].O(), c.U[d].N())
                } else c.K = new Pj(function() {
                    var l = c.K.oa();
                    if (l) {
                        for (var t = 0; t < b.length; t++) {
                            var y = Wo(c.U[d], b[t] || "_", l);
                            if (0 !== y.length) {
                                l = {
                                    tenantId: b[t],
                                    providerIds: y,
                                    email: l
                                };
                                ap(c);
                                g && g();
                                e(l);
                                return
                            }
                        }
                        c.K.F(ch({
                            code: "no-matching-tenant-for-email"
                        }).toString())
                    }
                }, c.U[d].O(), c.U[d].N());
                c.K.render(c.hb);
                (f = nn(c.U[d]).selectTenantUiShown || null) &&
                f()
            } else {
                var n = Error("Invalid project configuration: API key is invalid!");
                n.code = "invalid-configuration";
                c.handleError(n);
                f(n)
            }
        })
    };
    k.o = function(a, b) {
        if (!this.U.hasOwnProperty(a)) throw Error("Invalid project configuration: API key is invalid!");
        var c = b || void 0;
        Vo(this.U[a], b || "_");
        try {
            this.vb = firebase.app(c).auth()
        } catch (e) {
            var d = this.U[a].g.get("authDomain");
            if (!d) throw Error("Invalid project configuration: authDomain is required!");
            a = firebase.initializeApp({
                apiKey: a,
                authDomain: d
            }, c);
            a.auth().tenantId = b;
            this.vb = a.auth()
        }
        return this.vb
    };
    k.Sh = function(a, b) {
        var c = this;
        return new B(function(d, e) {
            function f(t, y) {
                c.Va = new Fo(a);
                No(c.Va, c.hb, t, y)
            }
            var g = a.app.options.apiKey;
            c.U.hasOwnProperty(g) || e(Error("Invalid project configuration: API key is invalid!"));
            var h = Xo(c.U[g], a.tenantId || "_", b && b.providerIds);
            ap(c);
            e = {
                signInSuccessWithAuthResult: function(t) {
                    d(t);
                    return !1
                }
            };
            var m = nn(c.U[g]).signInUiShown || null,
                n = !1;
            e.uiChanged = function(t, y) {
                null === t && "callback" === y ? ((t = Ic("firebaseui-id-page-callback", c.hb)) && Og(t), c.sa = new Vj, c.sa.render(c.hb)) :
                    n || null === t && "spinner" === y || "blank" === y || (c.sa && (c.sa.i(), c.sa = null), n = !0, m && m(a.tenantId))
            };
            h.callbacks = e;
            h.credentialHelper = "none";
            var l;
            b && b.email && (l = {
                emailHint: b.email
            });
            c.Va ? c.Va.delete().then(function() {
                f(h, l)
            }) : f(h, l)
        })
    };
    k.reset = function() {
        var a = this;
        return C().then(function() {
            a.Va && a.Va.delete()
        }).then(function() {
            a.Va = null;
            ap(a)
        })
    };
    k.Mh = function() {
        var a = this;
        this.sa || this.Fa || (this.Fa = window.setTimeout(function() {
            ap(a);
            a.sa = new Vj;
            a.K = a.sa;
            a.sa.render(a.hb);
            a.Fa = null
        }, 500))
    };
    k.We = function() {
        window.clearTimeout(this.Fa);
        this.Fa = null;
        this.sa && (this.sa.i(), this.sa = null)
    };
    k.zg = function() {
        ap(this);
        this.K = new Cj;
        this.K.render(this.hb);
        return C()
    };

    function ap(a) {
        a.Va && a.Va.reset();
        a.We();
        a.K && a.K.i()
    }
    k.handleError = function(a) {
        var b = this,
            c = ch({
                code: a.code
            }).toString() || a.message;
        ap(this);
        var d;
        a.retry && Ca(a.retry) && (d = function() {
            b.reset();
            a.retry()
        });
        this.K = new Gj(c, d);
        this.K.render(this.hb)
    };
    k.uh = function(a) {
        var b = this;
        return C().then(function() {
            var c = b.vb && b.vb.app.options.apiKey;
            if (!b.U.hasOwnProperty(c)) throw Error("Invalid project configuration: API key is invalid!");
            Vo(b.U[c], a.tenantId || "_");
            if (!b.vb.currentUser || b.vb.currentUser.uid !== a.uid) throw Error("The user being processed does not match the signed in user!");
            return (c = nn(b.U[c]).beforeSignInSuccess || null) ? c(a) : a
        }).then(function(c) {
            if (c.uid !== a.uid) throw Error("User with mismatching UID returned.");
            return c
        })
    };
    w("firebaseui.auth.FirebaseUiHandler", $o);
    w("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant", $o.prototype.Gh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.getAuth", $o.prototype.o);
    w("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn", $o.prototype.Sh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.reset", $o.prototype.reset);
    w("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar", $o.prototype.Mh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar", $o.prototype.We);
    w("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut", $o.prototype.zg);
    w("firebaseui.auth.FirebaseUiHandler.prototype.handleError", $o.prototype.handleError);
    w("firebaseui.auth.FirebaseUiHandler.prototype.processUser", $o.prototype.uh);
    w("firebaseui.auth.AuthUI", Fo);
    w("firebaseui.auth.AuthUI.getInstance", function(a) {
        a = Go(a);
        return Ho[a] ? Ho[a] : null
    });
    w("firebaseui.auth.AuthUI.prototype.disableAutoSignIn", Fo.prototype.disableAutoSignIn);
    w("firebaseui.auth.AuthUI.prototype.start", Fo.prototype.start);
    w("firebaseui.auth.AuthUI.prototype.setConfig", Fo.prototype.Lb);
    w("firebaseui.auth.AuthUI.prototype.signIn", Fo.prototype.signIn);
    w("firebaseui.auth.AuthUI.prototype.reset", Fo.prototype.reset);
    w("firebaseui.auth.AuthUI.prototype.delete", Fo.prototype.delete);
    w("firebaseui.auth.AuthUI.prototype.isPendingRedirect", Fo.prototype.Ze);
    w("firebaseui.auth.AuthUIError", Hm);
    w("firebaseui.auth.AuthUIError.prototype.toJSON", Hm.prototype.toJSON);
    w("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM", "accountchooser.com");
    w("firebaseui.auth.CredentialHelper.GOOGLE_YOLO", "googleyolo");
    w("firebaseui.auth.CredentialHelper.NONE", "none");
    w("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID", "anonymous");
    B.prototype["catch"] = B.prototype.Ob;
    B.prototype["finally"] = B.prototype.Zh;
    /*

     Copyright 2015 Google Inc. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Y = {
        If: function() {},
        Jf: function() {},
        Kf: function() {},
        me: function() {},
        sf: function() {},
        register: function() {},
        Ne: function() {}
    };
    Y = function() {
        function a(l, t) {
            for (var y = 0; y < m.length; y++)
                if (m[y].className === l) return "undefined" !== typeof t && (m[y] = t), m[y];
            return !1
        }

        function b(l) {
            l = l.getAttribute("data-upgraded");
            return null === l ? [""] : l.split(",")
        }

        function c(l, t) {
            return -1 !== b(l).indexOf(t)
        }

        function d(l, t, y) {
            if ("CustomEvent" in window && "function" === typeof window.CustomEvent) return new CustomEvent(l, {
                bubbles: t,
                cancelable: y
            });
            var F = document.createEvent("Events");
            F.initEvent(l, t, y);
            return F
        }

        function e(l, t) {
            if ("undefined" === typeof l && "undefined" ===
                typeof t)
                for (l = 0; l < m.length; l++) e(m[l].className, m[l].xa);
            else {
                if ("undefined" === typeof t) {
                    var y = a(l);
                    y && (t = y.xa)
                }
                t = document.querySelectorAll("." + t);
                for (y = 0; y < t.length; y++) f(t[y], l)
            }
        }

        function f(l, t) {
            if (!("object" === typeof l && l instanceof Element)) throw Error("Invalid argument provided to upgrade MDL element.");
            var y = d("mdl-componentupgrading", !0, !0);
            l.dispatchEvent(y);
            if (!y.defaultPrevented) {
                y = b(l);
                var F = [];
                if (t) c(l, t) || F.push(a(t));
                else {
                    var sa = l.classList;
                    m.forEach(function(cf) {
                        sa.contains(cf.xa) &&
                            -1 === F.indexOf(cf) && !c(l, cf.className) && F.push(cf)
                    })
                }
                t = 0;
                for (var Z = F.length, ma; t < Z; t++) {
                    if (ma = F[t]) {
                        y.push(ma.className);
                        l.setAttribute("data-upgraded", y.join(","));
                        var Mb = new ma.yg(l);
                        Mb.mdlComponentConfigInternal_ = ma;
                        n.push(Mb);
                        for (var Yg = 0, bp = ma.Ad.length; Yg < bp; Yg++) ma.Ad[Yg](l);
                        ma.xb && (l[ma.className] = Mb)
                    } else throw Error("Unable to find a registered component for the given class.");
                    ma = d("mdl-componentupgraded", !0, !1);
                    l.dispatchEvent(ma)
                }
            }
        }

        function g(l) {
            Array.isArray(l) || (l = l instanceof Element ?
                [l] : Array.prototype.slice.call(l));
            for (var t = 0, y = l.length, F; t < y; t++) F = l[t], F instanceof HTMLElement && (f(F), 0 < F.children.length && g(F.children))
        }

        function h(l) {
            if (l) {
                n.splice(n.indexOf(l), 1);
                var t = l.f.getAttribute("data-upgraded").split(",");
                t.splice(t.indexOf(l.mdlComponentConfigInternal_.zb), 1);
                l.f.setAttribute("data-upgraded", t.join(","));
                t = d("mdl-componentdowngraded", !0, !1);
                l.f.dispatchEvent(t)
            }
        }
        var m = [],
            n = [];
        return {
            If: e,
            Jf: f,
            Kf: g,
            me: function() {
                for (var l = 0; l < m.length; l++) e(m[l].className)
            },
            sf: function(l,
                t) {
                (l = a(l)) && l.Ad.push(t)
            },
            register: function(l) {
                var t = !0;
                if ("undefined" !== typeof l.xb || "undefined" !== typeof l.widget) t = l.xb || l.widget;
                var y = {
                    yg: l.constructor || l.constructor,
                    className: l.zb || l.classAsString,
                    xa: l.xa || l.cssClass,
                    xb: t,
                    Ad: []
                };
                m.forEach(function(F) {
                    if (F.xa === y.xa) throw Error("The provided cssClass has already been registered: " + F.xa);
                    if (F.className === y.className) throw Error("The provided className has already been registered");
                });
                if (l.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_")) throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
                a(l.zb, y) || m.push(y)
            },
            Ne: function(l) {
                function t(F) {
                    n.filter(function(sa) {
                        return sa.f === F
                    }).forEach(h)
                }
                if (l instanceof Array || l instanceof NodeList)
                    for (var y = 0; y < l.length; y++) t(l[y]);
                else if (l instanceof Node) t(l);
                else throw Error("Invalid argument provided to downgrade MDL nodes.");
            }
        }
    }();
    Y.upgradeDom = Y.If;
    Y.upgradeElement = Y.Jf;
    Y.upgradeElements = Y.Kf;
    Y.upgradeAllRegistered = Y.me;
    Y.registerUpgradedCallback = Y.sf;
    Y.register = Y.register;
    Y.downgradeElements = Y.Ne;
    window.componentHandler = Y;
    window.addEventListener("load", function() {
        "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach && (document.documentElement.classList.add("mdl-js"), Y.me())
    });
    (function() {
        function a(b) {
            this.f = b;
            this.init()
        }
        window.MaterialButton = a;
        a.prototype.Ra = {};
        a.prototype.A = {
            bg: "mdl-js-ripple-effect",
            ag: "mdl-button__ripple-container",
            $f: "mdl-ripple"
        };
        a.prototype.ye = function(b) {
            b && this.f.blur()
        };
        a.prototype.disable = function() {
            this.f.disabled = !0
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function() {
            this.f.disabled = !1
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.init = function() {
            if (this.f) {
                if (this.f.classList.contains(this.A.bg)) {
                    var b = document.createElement("span");
                    b.classList.add(this.A.ag);
                    this.ce = document.createElement("span");
                    this.ce.classList.add(this.A.$f);
                    b.appendChild(this.ce);
                    this.tg = this.ye.bind(this);
                    this.ce.addEventListener("mouseup", this.tg);
                    this.f.appendChild(b)
                }
                this.ze = this.ye.bind(this);
                this.f.addEventListener("mouseup", this.ze);
                this.f.addEventListener("mouseleave", this.ze)
            }
        };
        Y.register({
            constructor: a,
            zb: "MaterialButton",
            xa: "mdl-js-button",
            xb: !0
        })
    })();
    (function() {
        function a(b) {
            this.f = b;
            this.init()
        }
        window.MaterialProgress = a;
        a.prototype.Ra = {};
        a.prototype.A = {
            Rf: "mdl-progress__indeterminate"
        };
        a.prototype.Ih = function(b) {
            this.f.classList.contains(this.A.Rf) || (this.nf.style.width = b + "%")
        };
        a.prototype.setProgress = a.prototype.Ih;
        a.prototype.Hh = function(b) {
            this.Be.style.width = b + "%";
            this.xe.style.width = 100 - b + "%"
        };
        a.prototype.setBuffer = a.prototype.Hh;
        a.prototype.init = function() {
            if (this.f) {
                var b = document.createElement("div");
                b.className = "progressbar bar bar1";
                this.f.appendChild(b);
                this.nf = b;
                b = document.createElement("div");
                b.className = "bufferbar bar bar2";
                this.f.appendChild(b);
                this.Be = b;
                b = document.createElement("div");
                b.className = "auxbar bar bar3";
                this.f.appendChild(b);
                this.xe = b;
                this.nf.style.width = "0%";
                this.Be.style.width = "100%";
                this.xe.style.width = "0%";
                this.f.classList.add("is-upgraded")
            }
        };
        Y.register({
            constructor: a,
            zb: "MaterialProgress",
            xa: "mdl-js-progress",
            xb: !0
        })
    })();
    (function() {
        function a(b) {
            this.f = b;
            this.init()
        }
        window.MaterialSpinner = a;
        a.prototype.Ra = {
            Wf: 4
        };
        a.prototype.A = {
            re: "mdl-spinner__layer",
            qe: "mdl-spinner__circle-clipper",
            Uf: "mdl-spinner__circle",
            Vf: "mdl-spinner__gap-patch",
            Xf: "mdl-spinner__left",
            Yf: "mdl-spinner__right"
        };
        a.prototype.Fe = function(b) {
            var c = document.createElement("div");
            c.classList.add(this.A.re);
            c.classList.add(this.A.re + "-" + b);
            b = document.createElement("div");
            b.classList.add(this.A.qe);
            b.classList.add(this.A.Xf);
            var d = document.createElement("div");
            d.classList.add(this.A.Vf);
            var e = document.createElement("div");
            e.classList.add(this.A.qe);
            e.classList.add(this.A.Yf);
            for (var f = [b, d, e], g = 0; g < f.length; g++) {
                var h = document.createElement("div");
                h.classList.add(this.A.Uf);
                f[g].appendChild(h)
            }
            c.appendChild(b);
            c.appendChild(d);
            c.appendChild(e);
            this.f.appendChild(c)
        };
        a.prototype.createLayer = a.prototype.Fe;
        a.prototype.stop = function() {
            this.f.classList.remove("is-active")
        };
        a.prototype.stop = a.prototype.stop;
        a.prototype.start = function() {
            this.f.classList.add("is-active")
        };
        a.prototype.start = a.prototype.start;
        a.prototype.init = function() {
            if (this.f) {
                for (var b = 1; b <= this.Ra.Wf; b++) this.Fe(b);
                this.f.classList.add("is-upgraded")
            }
        };
        Y.register({
            constructor: a,
            zb: "MaterialSpinner",
            xa: "mdl-js-spinner",
            xb: !0
        })
    })();
    (function() {
        function a(b) {
            this.f = b;
            this.kc = this.Ra.ud;
            this.init()
        }
        window.MaterialTextfield = a;
        a.prototype.Ra = {
            ud: -1,
            pe: "maxrows"
        };
        a.prototype.A = {
            mi: "mdl-textfield__label",
            Sf: "mdl-textfield__input",
            ne: "is-dirty",
            yc: "is-focused",
            oe: "is-disabled",
            zc: "is-invalid",
            Tf: "is-upgraded",
            Qf: "has-placeholder"
        };
        a.prototype.rh = function(b) {
            var c = b.target.value.split("\n").length;
            13 === b.keyCode && c >= this.kc && b.preventDefault()
        };
        a.prototype.qh = function() {
            this.f.classList.add(this.A.yc)
        };
        a.prototype.ph = function() {
            this.f.classList.remove(this.A.yc)
        };
        a.prototype.sh = function() {
            this.Pb()
        };
        a.prototype.Pb = function() {
            this.checkDisabled();
            this.checkValidity();
            this.De();
            this.Dd()
        };
        a.prototype.checkDisabled = function() {
            this.Z.disabled ? this.f.classList.add(this.A.oe) : this.f.classList.remove(this.A.oe)
        };
        a.prototype.checkDisabled = a.prototype.checkDisabled;
        a.prototype.Dd = function() {
            this.f.querySelector(":focus") ? this.f.classList.add(this.A.yc) : this.f.classList.remove(this.A.yc)
        };
        a.prototype.checkFocus = a.prototype.Dd;
        a.prototype.checkValidity = function() {
            this.Z.validity &&
                (this.Z.validity.valid ? this.f.classList.remove(this.A.zc) : this.f.classList.add(this.A.zc))
        };
        a.prototype.checkValidity = a.prototype.checkValidity;
        a.prototype.De = function() {
            this.Z.value && 0 < this.Z.value.length ? this.f.classList.add(this.A.ne) : this.f.classList.remove(this.A.ne)
        };
        a.prototype.checkDirty = a.prototype.De;
        a.prototype.disable = function() {
            this.Z.disabled = !0;
            this.Pb()
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function() {
            this.Z.disabled = !1;
            this.Pb()
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.vg = function(b) {
            this.Z.value = b || "";
            this.Pb()
        };
        a.prototype.change = a.prototype.vg;
        a.prototype.init = function() {
            if (this.f && (this.Z = this.f.querySelector("." + this.A.Sf))) {
                this.Z.hasAttribute(this.Ra.pe) && (this.kc = parseInt(this.Z.getAttribute(this.Ra.pe), 10), isNaN(this.kc) && (this.kc = this.Ra.ud));
                this.Z.hasAttribute("placeholder") && this.f.classList.add(this.A.Qf);
                this.ug = this.Pb.bind(this);
                this.qg = this.qh.bind(this);
                this.pg = this.ph.bind(this);
                this.sg = this.sh.bind(this);
                this.Z.addEventListener("input",
                    this.ug);
                this.Z.addEventListener("focus", this.qg);
                this.Z.addEventListener("blur", this.pg);
                this.Z.addEventListener("reset", this.sg);
                this.kc !== this.Ra.ud && (this.rg = this.rh.bind(this), this.Z.addEventListener("keydown", this.rg));
                var b = this.f.classList.contains(this.A.zc);
                this.Pb();
                this.f.classList.add(this.A.Tf);
                b && this.f.classList.add(this.A.zc);
                this.Z.hasAttribute("autofocus") && (this.f.focus(), this.Dd())
            }
        };
        Y.register({
            constructor: a,
            zb: "MaterialTextfield",
            xa: "mdl-js-textfield",
            xb: !0
        })
    })();
    /*

     Copyright (c) 2013 The Chromium Authors. All rights reserved.

     Redistribution and use in source and binary forms, with or without
     modification, are permitted provided that the following conditions are
     met:

        * Redistributions of source code must retain the above copyright
     notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above
     copyright notice, this list of conditions and the following disclaimer
     in the documentation and/or other materials provided with the
     distribution.
        * Neither the name of Google Inc. nor the names of its
     contributors may be used to endorse or promote products derived from
     this software without specific prior written permission.

     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
     "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
     LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
     A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
     OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
     SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
     LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
     DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
     THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
     OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    (function() {
        function a(f) {
            for (; f;) {
                if ("DIALOG" == f.nodeName.toUpperCase()) return f;
                f = f.parentElement
            }
            return null
        }

        function b(f) {
            f && f.blur && f != document.body && f.blur()
        }

        function c(f) {
            this.T = f;
            this.Xd = this.ld = !1;
            f.hasAttribute("role") || f.setAttribute("role", "dialog");
            f.show = this.show.bind(this);
            f.showModal = this.showModal.bind(this);
            f.close = this.close.bind(this);
            "returnValue" in f || (f.returnValue = "");
            this.Gb = this.Gb.bind(this);
            "MutationObserver" in window ? (new MutationObserver(this.Gb)).observe(f, {
                attributes: !0,
                attributeFilter: ["open"]
            }) : f.addEventListener("DOMAttrModified", this.Gb);
            Object.defineProperty(f, "open", {
                set: this.fe.bind(this),
                get: f.hasAttribute.bind(f, "open")
            });
            this.Wa = document.createElement("div");
            this.Wa.className = "backdrop";
            this.Ac = this.Ac.bind(this)
        }
        var d = window.CustomEvent;
        d && "object" != typeof d || (d = function(f, g) {
            g = g || {};
            var h = document.createEvent("CustomEvent");
            h.initCustomEvent(f, !!g.bubbles, !!g.cancelable, g.detail || null);
            return h
        }, d.prototype = window.Event.prototype);
        c.prototype = {get Ie() {
                return this.T
            },
            Gb: function() {
                !this.Xd || this.T.hasAttribute("open") && document.body.contains(this.T) || (this.Xd = !1, this.T.style.zIndex = "", this.ld && (this.T.style.top = "", this.ld = !1), this.Wa.removeEventListener("click", this.Ac), this.Wa.parentElement && this.Wa.parentElement.removeChild(this.Wa), e.Me.yh(this))
            },
            fe: function(f) {
                f ? this.T.hasAttribute("open") || this.T.setAttribute("open", "") : (this.T.removeAttribute("open"), this.Gb())
            },
            Ac: function(f) {
                var g = document.createEvent("MouseEvents");
                g.initMouseEvent(f.type, f.bubbles,
                    f.cancelable, window, f.detail, f.screenX, f.screenY, f.clientX, f.clientY, f.ctrlKey, f.altKey, f.shiftKey, f.metaKey, f.button, f.relatedTarget);
                this.T.dispatchEvent(g);
                f.stopPropagation()
            },
            Og: function() {
                var f = this.T.querySelector("[autofocus]:not([disabled])");
                f || (f = ["button", "input", "keygen", "select", "textarea"].map(function(g) {
                    return g + ":not([disabled])"
                }), f.push('[tabindex]:not([disabled]):not([tabindex=""])'), f = this.T.querySelector(f.join(", ")));
                b(document.activeElement);
                f && f.focus()
            },
            ei: function(f, g) {
                this.Wa.style.zIndex =
                    f;
                this.T.style.zIndex = g
            },
            show: function() {
                this.T.open || (this.fe(!0), this.Og())
            },
            showModal: function() {
                if (this.T.hasAttribute("open")) throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
                if (!document.body.contains(this.T)) throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
                if (!e.Me.wh(this)) throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
                this.show();
                this.Xd = !0;
                e.nh(this.T) ? (e.zh(this.T), this.ld = !0) : this.ld = !1;
                this.Wa.addEventListener("click", this.Ac);
                this.T.parentNode.insertBefore(this.Wa, this.T.nextSibling)
            },
            close: function(f) {
                if (!this.T.hasAttribute("open")) throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
                this.fe(!1);
                void 0 !== f && (this.T.returnValue = f);
                f = new d("close", {
                    bubbles: !1,
                    cancelable: !1
                });
                this.T.dispatchEvent(f)
            }
        };
        var e = {
            zh: function(f) {
                var g = document.body.scrollTop ||
                    document.documentElement.scrollTop;
                f.style.top = Math.max(g, g + (window.innerHeight - f.offsetHeight) / 2) + "px"
            },
            dh: function(f) {
                for (var g = 0; g < document.styleSheets.length; ++g) {
                    var h = document.styleSheets[g],
                        m = null;
                    try {
                        m = h.cssRules
                    } catch (y) {}
                    if (m)
                        for (h = 0; h < m.length; ++h) {
                            var n = m[h],
                                l = null;
                            try {
                                l = document.querySelectorAll(n.selectorText)
                            } catch (y) {}
                            var t;
                            if (t = l) a: {
                                for (t = 0; t < l.length; ++t)
                                    if (l[t] == f) {
                                        t = !0;
                                        break a
                                    }
                                t = !1
                            }
                            if (t && (l = n.style.getPropertyValue("top"), n = n.style.getPropertyValue("bottom"), l && "auto" != l || n && "auto" !=
                                    n)) return !0
                        }
                }
                return !1
            },
            nh: function(f) {
                return "absolute" != window.getComputedStyle(f).position || "auto" != f.style.top && "" != f.style.top || "auto" != f.style.bottom && "" != f.style.bottom ? !1 : !e.dh(f)
            },
            Pe: function(f) {
                f.showModal && console.warn("This browser already supports <dialog>, the polyfill may not work correctly", f);
                if ("DIALOG" != f.nodeName.toUpperCase()) throw Error("Failed to register dialog: The element is not a dialog.");
                new c(f)
            },
            xh: function(f) {
                f.showModal || e.Pe(f)
            },
            Ga: function() {
                this.ma = [];
                this.qc = document.createElement("div");
                this.qc.className = "_dialog_overlay";
                this.qc.addEventListener("click", function(f) {
                    f.stopPropagation()
                });
                this.Qc = this.Qc.bind(this);
                this.Oc = this.Oc.bind(this);
                this.Rc = this.Rc.bind(this);
                this.Nf = 1E5;
                this.gi = 100150
            }
        };
        e.Ga.prototype.Ff = function() {
            return this.ma.length ? this.ma[this.ma.length - 1].Ie : null
        };
        e.Ga.prototype.ng = function() {
            document.body.appendChild(this.qc);
            document.body.addEventListener("focus", this.Oc, !0);
            document.addEventListener("keydown", this.Qc);
            document.addEventListener("DOMNodeRemoved",
                this.Rc)
        };
        e.Ga.prototype.di = function() {
            document.body.removeChild(this.qc);
            document.body.removeEventListener("focus", this.Oc, !0);
            document.removeEventListener("keydown", this.Qc);
            document.removeEventListener("DOMNodeRemoved", this.Rc)
        };
        e.Ga.prototype.Hf = function() {
            for (var f = this.Nf, g = 0; g < this.ma.length; g++) g == this.ma.length - 1 && (this.qc.style.zIndex = f++), this.ma[g].ei(f++, f++)
        };
        e.Ga.prototype.Oc = function(f) {
            if (a(f.target) != this.Ff()) return f.preventDefault(), f.stopPropagation(), b(f.target), !1
        };
        e.Ga.prototype.Qc =
            function(f) {
                if (27 == f.keyCode) {
                    f.preventDefault();
                    f.stopPropagation();
                    f = new d("cancel", {
                        bubbles: !1,
                        cancelable: !0
                    });
                    var g = this.Ff();
                    g.dispatchEvent(f) && g.close()
                }
            };
        e.Ga.prototype.Rc = function(f) {
            if ("DIALOG" == f.target.nodeName.toUpperCase()) {
                var g = f.target;
                g.open && this.ma.some(function(h) {
                    if (h.Ie == g) return h.Gb(), !0
                })
            }
        };
        e.Ga.prototype.wh = function(f) {
            if (this.ma.length >= (this.gi - this.Nf) / 2 - 1) return !1;
            this.ma.push(f);
            1 == this.ma.length && this.ng();
            this.Hf();
            return !0
        };
        e.Ga.prototype.yh = function(f) {
            f = this.ma.indexOf(f); -
            1 != f && (this.ma.splice(f, 1), this.Hf(), 0 == this.ma.length && this.di())
        };
        e.Me = new e.Ga;
        document.addEventListener("submit", function(f) {
            var g = f.target;
            if (g && g.hasAttribute("method") && "dialog" == g.getAttribute("method").toLowerCase() && (f.preventDefault(), g = a(f.target))) {
                var h, m = ["BUTTON", "INPUT"];
                [document.activeElement, f.explicitOriginalTarget].some(function(n) {
                    if (n && n.form == f.target && -1 != m.indexOf(n.nodeName.toUpperCase())) return h = n.value, !0
                });
                g.close(h)
            }
        }, !0);
        e.forceRegisterDialog = e.Pe;
        e.registerDialog =
            e.xh;
        "function" === typeof define && "amd" in define ? define(function() {
            return e
        }) : "object" === typeof module && "object" === typeof module.exports ? module.exports = e : window.dialogPolyfill = e
    })();
}).call(this);