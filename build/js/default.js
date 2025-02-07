/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 5));
})([
  function (t, e, n) {
    'use strict';
    var i = {},
      r = {},
      o = [],
      a = window.Webflow || [],
      s = window.jQuery,
      u = s(window),
      c = s(document),
      l = s.isFunction,
      d = (i._ = n(8)),
      f = (i.tram = n(4) && s.tram),
      h = !1,
      p = !1;
    function v(t) {
      i.env() &&
        (l(t.design) && u.on('__wf_design', t.design),
        l(t.preview) && u.on('__wf_preview', t.preview)),
        l(t.destroy) && u.on('__wf_destroy', t.destroy),
        t.ready &&
          l(t.ready) &&
          (function (t) {
            if (h) return void t.ready();
            if (d.contains(o, t.ready)) return;
            o.push(t.ready);
          })(t);
    }
    function m(t) {
      l(t.design) && u.off('__wf_design', t.design),
        l(t.preview) && u.off('__wf_preview', t.preview),
        l(t.destroy) && u.off('__wf_destroy', t.destroy),
        t.ready &&
          l(t.ready) &&
          (function (t) {
            o = d.filter(o, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    (f.config.hideBackface = !1),
      (f.config.keepInherited = !0),
      (i.define = function (t, e, n) {
        r[t] && m(r[t]);
        var i = (r[t] = e(s, d, n) || {});
        return v(i), i;
      }),
      (i.require = function (t) {
        return r[t];
      }),
      (i.push = function (t) {
        h ? l(t) && t() : a.push(t);
      }),
      (i.env = function (t) {
        var e = window.__wf_design,
          n = void 0 !== e;
        return t
          ? 'design' === t
            ? n && e
            : 'preview' === t
            ? n && !e
            : 'slug' === t
            ? n && window.__wf_slug
            : 'editor' === t
            ? window.WebflowEditor
            : 'test' === t
            ? window.__wf_test
            : 'frame' === t
            ? window !== window.top
            : void 0
          : n;
      });
    var g,
      w = navigator.userAgent.toLowerCase(),
      b = (i.env.touch =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      y = (i.env.chrome =
        /chrome/.test(w) &&
        /Google/.test(navigator.vendor) &&
        parseInt(w.match(/chrome\/(\d+)\./)[1], 10)),
      x = (i.env.ios = /(ipod|iphone|ipad)/.test(w));
    (i.env.safari = /safari/.test(w) && !y && !x),
      b &&
        c.on('touchstart mousedown', function (t) {
          g = t.target;
        }),
      (i.validClick = b
        ? function (t) {
            return t === g || s.contains(t, g);
          }
        : function () {
            return !0;
          });
    var k,
      _ = 'resize.webflow orientationchange.webflow load.webflow';
    function E(t, e) {
      var n = [],
        i = {};
      return (
        (i.up = d.throttle(function (t) {
          d.each(n, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, i.up),
        (i.on = function (t) {
          'function' == typeof t && (d.contains(n, t) || n.push(t));
        }),
        (i.off = function (t) {
          n = arguments.length
            ? d.filter(n, function (e) {
                return e !== t;
              })
            : [];
        }),
        i
      );
    }
    function O(t) {
      l(t) && t();
    }
    function R() {
      k && (k.reject(), u.off('load', k.resolve)),
        (k = new s.Deferred()),
        u.on('load', k.resolve);
    }
    (i.resize = E(u, _)),
      (i.scroll = E(
        u,
        'scroll.webflow resize.webflow orientationchange.webflow load.webflow'
      )),
      (i.redraw = E()),
      (i.location = function (t) {
        window.location = t;
      }),
      i.env() && (i.location = function () {}),
      (i.ready = function () {
        (h = !0),
          p ? ((p = !1), d.each(r, v)) : d.each(o, O),
          d.each(a, O),
          i.resize.up();
      }),
      (i.load = function (t) {
        k.then(t);
      }),
      (i.destroy = function (t) {
        (t = t || {}),
          (p = !0),
          u.triggerHandler('__wf_destroy'),
          null != t.domready && (h = t.domready),
          d.each(r, m),
          i.resize.off(),
          i.scroll.off(),
          i.redraw.off(),
          (o = []),
          (a = []),
          'pending' === k.state() && R();
      }),
      s(i.ready),
      R(),
      (t.exports = window.Webflow = i);
  },
  function (t, e, n) {
    'use strict';
    var i = n(13);
    function r(t, e) {
      var n = document.createEvent('CustomEvent');
      n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
    }
    var o = window.jQuery,
      a = {},
      s = {
        reset: function (t, e) {
          i.triggers.reset(t, e);
        },
        intro: function (t, e) {
          i.triggers.intro(t, e), r(e, 'COMPONENT_ACTIVE');
        },
        outro: function (t, e) {
          i.triggers.outro(t, e), r(e, 'COMPONENT_INACTIVE');
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      o.extend(a.triggers, s),
      (t.exports = a);
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function i(e) {
      return (
        'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
          ? (t.exports = i = function (t) {
              return n(t);
            })
          : (t.exports = i = function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : n(t);
            }),
        i(e)
      );
    }
    t.exports = i;
  },
  function (t, e, n) {
    'use strict';
    var i = n(2)(n(3));
    window.tram = (function (t) {
      function e(t, e) {
        return new M.Bare().init(t, e);
      }
      function n(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
      }
      function r(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function o(t, e, n) {
        return (
          '#' + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
        );
      }
      function a() {}
      function s(t, e, n) {
        c('Units do not match [' + t + ']: ' + e + ', ' + n);
      }
      function u(t, e, n) {
        if ((void 0 !== e && (n = e), void 0 === t)) return n;
        var i = n;
        return (
          K.test(t) || !Q.test(t)
            ? (i = parseInt(t, 10))
            : Q.test(t) && (i = 1e3 * parseFloat(t)),
          0 > i && (i = 0),
          i == i ? i : n
        );
      }
      function c(t) {
        G.debug && window && window.console.warn(t);
      }
      var l = (function (t, e, n) {
          function r(t) {
            return 'object' == (0, i.default)(t);
          }
          function o(t) {
            return 'function' == typeof t;
          }
          function a() {}
          return function i(s, u) {
            function c() {
              var t = new l();
              return o(t.init) && t.init.apply(t, arguments), t;
            }
            function l() {}
            u === n && ((u = s), (s = Object)), (c.Bare = l);
            var d,
              f = (a[t] = s[t]),
              h = (l[t] = c[t] = new a());
            return (
              (h.constructor = c),
              (c.mixin = function (e) {
                return (l[t] = c[t] = i(c, e)[t]), c;
              }),
              (c.open = function (t) {
                if (
                  ((d = {}),
                  o(t) ? (d = t.call(c, h, f, c, s)) : r(t) && (d = t),
                  r(d))
                )
                  for (var n in d) e.call(d, n) && (h[n] = d[n]);
                return o(h.init) || (h.init = s), c;
              }),
              c.open(u)
            );
          };
        })('prototype', {}.hasOwnProperty),
        d = {
          ease: [
            'ease',
            function (t, e, n, i) {
              var r = (t /= i) * t,
                o = r * t;
              return (
                e +
                n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + 0.25 * t)
              );
            },
          ],
          'ease-in': [
            'ease-in',
            function (t, e, n, i) {
              var r = (t /= i) * t,
                o = r * t;
              return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r);
            },
          ],
          'ease-out': [
            'ease-out',
            function (t, e, n, i) {
              var r = (t /= i) * t,
                o = r * t;
              return (
                e +
                n * (0.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
              );
            },
          ],
          'ease-in-out': [
            'ease-in-out',
            function (t, e, n, i) {
              var r = (t /= i) * t,
                o = r * t;
              return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r);
            },
          ],
          linear: [
            'linear',
            function (t, e, n, i) {
              return (n * t) / i + e;
            },
          ],
          'ease-in-quad': [
            'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            function (t, e, n, i) {
              return n * (t /= i) * t + e;
            },
          ],
          'ease-out-quad': [
            'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            function (t, e, n, i) {
              return -n * (t /= i) * (t - 2) + e;
            },
          ],
          'ease-in-out-quad': [
            'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            function (t, e, n, i) {
              return (t /= i / 2) < 1
                ? (n / 2) * t * t + e
                : (-n / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          'ease-in-cubic': [
            'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            function (t, e, n, i) {
              return n * (t /= i) * t * t + e;
            },
          ],
          'ease-out-cubic': [
            'cubic-bezier(0.215, 0.610, 0.355, 1)',
            function (t, e, n, i) {
              return n * ((t = t / i - 1) * t * t + 1) + e;
            },
          ],
          'ease-in-out-cubic': [
            'cubic-bezier(0.645, 0.045, 0.355, 1)',
            function (t, e, n, i) {
              return (t /= i / 2) < 1
                ? (n / 2) * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          'ease-in-quart': [
            'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            function (t, e, n, i) {
              return n * (t /= i) * t * t * t + e;
            },
          ],
          'ease-out-quart': [
            'cubic-bezier(0.165, 0.840, 0.440, 1)',
            function (t, e, n, i) {
              return -n * ((t = t / i - 1) * t * t * t - 1) + e;
            },
          ],
          'ease-in-out-quart': [
            'cubic-bezier(0.770, 0, 0.175, 1)',
            function (t, e, n, i) {
              return (t /= i / 2) < 1
                ? (n / 2) * t * t * t * t + e
                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          'ease-in-quint': [
            'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            function (t, e, n, i) {
              return n * (t /= i) * t * t * t * t + e;
            },
          ],
          'ease-out-quint': [
            'cubic-bezier(0.230, 1, 0.320, 1)',
            function (t, e, n, i) {
              return n * ((t = t / i - 1) * t * t * t * t + 1) + e;
            },
          ],
          'ease-in-out-quint': [
            'cubic-bezier(0.860, 0, 0.070, 1)',
            function (t, e, n, i) {
              return (t /= i / 2) < 1
                ? (n / 2) * t * t * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          'ease-in-sine': [
            'cubic-bezier(0.470, 0, 0.745, 0.715)',
            function (t, e, n, i) {
              return -n * Math.cos((t / i) * (Math.PI / 2)) + n + e;
            },
          ],
          'ease-out-sine': [
            'cubic-bezier(0.390, 0.575, 0.565, 1)',
            function (t, e, n, i) {
              return n * Math.sin((t / i) * (Math.PI / 2)) + e;
            },
          ],
          'ease-in-out-sine': [
            'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
            function (t, e, n, i) {
              return (-n / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
            },
          ],
          'ease-in-expo': [
            'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            function (t, e, n, i) {
              return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e;
            },
          ],
          'ease-out-expo': [
            'cubic-bezier(0.190, 1, 0.220, 1)',
            function (t, e, n, i) {
              return t === i ? e + n : n * (1 - Math.pow(2, (-10 * t) / i)) + e;
            },
          ],
          'ease-in-out-expo': [
            'cubic-bezier(1, 0, 0, 1)',
            function (t, e, n, i) {
              return 0 === t
                ? e
                : t === i
                ? e + n
                : (t /= i / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          'ease-in-circ': [
            'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            function (t, e, n, i) {
              return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
            },
          ],
          'ease-out-circ': [
            'cubic-bezier(0.075, 0.820, 0.165, 1)',
            function (t, e, n, i) {
              return n * Math.sqrt(1 - (t = t / i - 1) * t) + e;
            },
          ],
          'ease-in-out-circ': [
            'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            function (t, e, n, i) {
              return (t /= i / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          'ease-in-back': [
            'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            function (t, e, n, i, r) {
              return (
                void 0 === r && (r = 1.70158),
                n * (t /= i) * t * ((r + 1) * t - r) + e
              );
            },
          ],
          'ease-out-back': [
            'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            function (t, e, n, i, r) {
              return (
                void 0 === r && (r = 1.70158),
                n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
              );
            },
          ],
          'ease-in-out-back': [
            'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            function (t, e, n, i, r) {
              return (
                void 0 === r && (r = 1.70158),
                (t /= i / 2) < 1
                  ? (n / 2) * t * t * ((1 + (r *= 1.525)) * t - r) + e
                  : (n / 2) *
                      ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) +
                    e
              );
            },
          ],
        },
        f = {
          'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
          'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
          'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
        },
        h = document,
        p = window,
        v = 'bkwld-tram',
        m = /[\-\.0-9]/g,
        g = /[A-Z]/,
        w = 'number',
        b = /^(rgb|#)/,
        y = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        k = /(deg|rad|turn)$/,
        _ = 'unitless',
        E = /(all|none) 0s ease 0s/,
        O = /^(width|height)$/,
        R = ' ',
        A = h.createElement('a'),
        T = ['Webkit', 'Moz', 'O', 'ms'],
        C = ['-webkit-', '-moz-', '-o-', '-ms-'],
        I = function (t) {
          if (t in A.style) return { dom: t, css: t };
          var e,
            n,
            i = '',
            r = t.split('-');
          for (e = 0; e < r.length; e++)
            i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
          for (e = 0; e < T.length; e++)
            if ((n = T[e] + i) in A.style) return { dom: n, css: C[e] + t };
        },
        W = (e.support = {
          bind: Function.prototype.bind,
          transform: I('transform'),
          transition: I('transition'),
          backface: I('backface-visibility'),
          timing: I('transition-timing-function'),
        });
      if (W.transition) {
        var S = W.timing.dom;
        if (((A.style[S] = d['ease-in-back'][0]), !A.style[S]))
          for (var D in f) d[D][0] = f[D];
      }
      var L = (e.frame = (function () {
          var t =
            p.requestAnimationFrame ||
            p.webkitRequestAnimationFrame ||
            p.mozRequestAnimationFrame ||
            p.oRequestAnimationFrame ||
            p.msRequestAnimationFrame;
          return t && W.bind
            ? t.bind(p)
            : function (t) {
                p.setTimeout(t, 16);
              };
        })()),
        P = (e.now = (function () {
          var t = p.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && W.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        z = l(function (e) {
          function r(t, e) {
            var n = (function (t) {
                for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
                  var r = t[e];
                  r && i.push(r);
                }
                return i;
              })(('' + t).split(R)),
              i = n[0];
            e = e || {};
            var r = V[i];
            if (!r) return c('Unsupported property: ' + i);
            if (!e.weak || !this.props[i]) {
              var o = r[0],
                a = this.props[i];
              return (
                a || (a = this.props[i] = new o.Bare()),
                a.init(this.$el, n, r, e),
                a
              );
            }
          }
          function o(t, e, n) {
            if (t) {
              var o = (0, i.default)(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                'number' == o && e)
              )
                return (
                  (this.timer = new $({
                    duration: t,
                    context: this,
                    complete: a,
                  })),
                  void (this.active = !0)
                );
              if ('string' == o && e) {
                switch (t) {
                  case 'hide':
                    l.call(this);
                    break;
                  case 'stop':
                    s.call(this);
                    break;
                  case 'redraw':
                    d.call(this);
                    break;
                  default:
                    r.call(this, t, n && n[1]);
                }
                return a.call(this);
              }
              if ('function' == o) return void t.call(this, this);
              if ('object' == o) {
                var c = 0;
                h.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > c && (c = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    'wait' in t && (c = u(t.wait, 0));
                  }
                ),
                  f.call(this),
                  c > 0 &&
                    ((this.timer = new $({ duration: c, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = a));
                var p = this,
                  v = !1,
                  m = {};
                L(function () {
                  h.call(p, t, function (t) {
                    t.active && ((v = !0), (m[t.name] = t.nextStyle));
                  }),
                    v && p.$el.css(m);
                });
              }
            }
          }
          function a() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              o.call(this, t.options, !0, t.args);
            }
          }
          function s(t) {
            var e;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              'string' == typeof t
                ? ((e = {})[t] = 1)
                : (e =
                    'object' == (0, i.default)(t) && null != t
                      ? t
                      : this.props),
              h.call(this, e, p),
              f.call(this);
          }
          function l() {
            s.call(this), (this.el.style.display = 'none');
          }
          function d() {
            this.el.offsetHeight;
          }
          function f() {
            var t,
              e,
              n = [];
            for (t in (this.upstream && n.push(this.upstream), this.props))
              (e = this.props[t]).active && n.push(e.string);
            (n = n.join(',')),
              this.style !== n &&
                ((this.style = n), (this.el.style[W.transition.dom] = n));
          }
          function h(t, e, i) {
            var o,
              a,
              s,
              u,
              c = e !== p,
              l = {};
            for (o in t)
              (s = t[o]),
                o in Y
                  ? (l.transform || (l.transform = {}), (l.transform[o] = s))
                  : (g.test(o) && (o = n(o)),
                    o in V ? (l[o] = s) : (u || (u = {}), (u[o] = s)));
            for (o in l) {
              if (((s = l[o]), !(a = this.props[o]))) {
                if (!c) continue;
                a = r.call(this, o);
              }
              e.call(this, a, s);
            }
            i && u && i.call(this, u);
          }
          function p(t) {
            t.stop();
          }
          function m(t, e) {
            t.set(e);
          }
          function w(t) {
            this.$el.css(t);
          }
          function b(t, n) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var n,
                      i = this.children.length;
                    for (n = 0; i > n; n++) t.apply(this.children[n], e);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ''),
              (this.active = !1),
              G.keepInherited && !G.fallback)
            ) {
              var n = X(this.el, 'transition');
              n && !E.test(n) && (this.upstream = n);
            }
            W.backface &&
              G.hideBackface &&
              B(this.el, W.backface.css, 'hidden');
          }),
            b('add', r),
            b('start', o),
            b('wait', function (t) {
              (t = u(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new $({
                      duration: t,
                      context: this,
                      complete: a,
                    })),
                    (this.active = !0));
            }),
            b('then', function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = a))
                : c(
                    'No active transition timer. Use start() or wait() before then().'
                  );
            }),
            b('next', a),
            b('stop', s),
            b('set', function (t) {
              s.call(this, t), h.call(this, t, m, w);
            }),
            b('show', function (t) {
              'string' != typeof t && (t = 'block'),
                (this.el.style.display = t);
            }),
            b('hide', l),
            b('redraw', d),
            b('destroy', function () {
              s.call(this),
                t.removeData(this.el, v),
                (this.$el = this.el = null);
            });
        }),
        M = l(z, function (e) {
          function n(e, n) {
            var i = t.data(e, v) || t.data(e, v, new z.Bare());
            return i.el || i.init(e), n ? i.start(n) : i;
          }
          e.init = function (e, i) {
            var r = t(e);
            if (!r.length) return this;
            if (1 === r.length) return n(r[0], i);
            var o = [];
            return (
              r.each(function (t, e) {
                o.push(n(e, i));
              }),
              (this.children = o),
              this
            );
          };
        }),
        N = l(function (t) {
          function e() {
            var t = this.get();
            this.update('auto');
            var e = this.get();
            return this.update(t), e;
          }
          function n(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? o(e[1], e[2], e[3]) : t).replace(
              /#(\w)(\w)(\w)$/,
              '#$1$1$2$2$3$3'
            );
          }
          var r = 500,
            a = 'ease',
            s = 0;
          (t.init = function (t, e, n, i) {
            (this.$el = t), (this.el = t[0]);
            var o = e[0];
            n[2] && (o = n[2]),
              Z[o] && (o = Z[o]),
              (this.name = o),
              (this.type = n[1]),
              (this.duration = u(e[1], this.duration, r)),
              (this.ease = (function (t, e, n) {
                return void 0 !== e && (n = e), t in d ? t : n;
              })(e[2], this.ease, a)),
              (this.delay = u(e[3], this.delay, s)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = O.test(this.name)),
              (this.unit = i.unit || this.unit || G.defaultUnit),
              (this.angle = i.angle || this.angle || G.defaultAngle),
              G.fallback || i.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    R +
                    this.duration +
                    'ms' +
                    ('ease' != this.ease ? R + d[this.ease][0] : '') +
                    (this.delay ? R + this.delay + 'ms' : '')));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  'auto' == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == n && (n = this.convert(this.get(), this.type)),
                  'auto' == t && (t = e.call(this))),
                (this.tween = new q({
                  from: n,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (t.get = function () {
              return X(this.el, this.name);
            }),
            (t.update = function (t) {
              B(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                B(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ('auto' == t && this.auto) return t;
              var r,
                o = 'number' == typeof t,
                a = 'string' == typeof t;
              switch (e) {
                case w:
                  if (o) return t;
                  if (a && '' === t.replace(m, '')) return +t;
                  r = 'number(unitless)';
                  break;
                case b:
                  if (a) {
                    if ('' === t && this.original) return this.original;
                    if (e.test(t))
                      return '#' == t.charAt(0) && 7 == t.length ? t : n(t);
                  }
                  r = 'hex or rgb string';
                  break;
                case y:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  r = 'number(px) or string(unit)';
                  break;
                case x:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  r = 'number(px) or string(unit or %)';
                  break;
                case k:
                  if (o) return t + this.angle;
                  if (a && e.test(t)) return t;
                  r = 'number(deg) or string(angle)';
                  break;
                case _:
                  if (o) return t;
                  if (a && x.test(t)) return t;
                  r = 'number(unitless) or string(unit or %)';
              }
              return (
                (function (t, e) {
                  c(
                    'Type warning: Expected: [' +
                      t +
                      '] Got: [' +
                      (0, i.default)(e) +
                      '] ' +
                      e
                  );
                })(r, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        F = l(N, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), b));
          };
        }),
        j = l(N, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        H = l(N, function (t, e) {
          function n(t, e) {
            var n, i, r, o, a;
            for (n in t)
              (r = (o = Y[n])[0]),
                (i = o[1] || n),
                (a = this.convert(t[n], r)),
                e.call(this, i, a, r);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Y.perspective &&
                  G.perspective &&
                  ((this.current.perspective = G.perspective),
                  B(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              n.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                B(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new U({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                i = {};
              for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(i));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new U({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              B(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                n = '';
              for (e in t) n += e + '(' + t[e] + ') ';
              return n;
            }),
            (t.values = function (t) {
              var e,
                i = {};
              return (
                n.call(this, t, function (t, n, r) {
                  (i[t] = n),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf('scale') && (e = 1),
                      (this.current[t] = this.convert(e, r)));
                }),
                i
              );
            });
        }),
        q = l(function (e) {
          function n() {
            var t,
              e,
              i,
              r = u.length;
            if (r) for (L(n), e = P(), t = r; t--; ) (i = u[t]) && i.render(e);
          }
          var i = { ease: d.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || i.ease;
            d[e] && (e = d[e][1]),
              'function' != typeof e && (e = i.ease),
              (this.ease = e),
              (this.update = t.update || a),
              (this.complete = t.complete || a),
              (this.context = t.context || this),
              (this.name = t.name);
            var n = t.from,
              r = t.to;
            void 0 === n && (n = i.from),
              void 0 === r && (r = i.to),
              (this.unit = t.unit || ''),
              'number' == typeof n && 'number' == typeof r
                ? ((this.begin = n), (this.change = r - n))
                : this.format(r, n),
              (this.value = this.begin + this.unit),
              (this.start = P()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = P()),
                (this.active = !0),
                (t = this),
                1 === u.push(t) && L(n));
            }),
            (e.stop = function () {
              var e, n, i;
              this.active &&
                ((this.active = !1),
                (e = this),
                (i = t.inArray(e, u)) >= 0 &&
                  ((n = u.slice(i + 1)),
                  (u.length = i),
                  n.length && (u = u.concat(n))));
            }),
            (e.render = function (t) {
              var e,
                n = t - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var i = this.ease(n, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, n) {
                        return o(
                          t[0] + n * (e[0] - t[0]),
                          t[1] + n * (e[1] - t[1]),
                          t[2] + n * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, i)
                    : (function (t) {
                        return Math.round(t * c) / c;
                      })(this.begin + i * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ''), '#' == (t += '').charAt(0)))
                return (
                  (this.startRGB = r(e)),
                  (this.endRGB = r(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = e.replace(m, '');
                n !== t.replace(m, '') && s('tween', e, t), (this.unit = n);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var u = [],
            c = 1e3;
        }),
        $ = l(q, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || a),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        U = l(q, function (t, e) {
          (t.init = function (t) {
            var e, n;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              (n = t.values[e]),
                this.current[e] !== n &&
                  this.tweens.push(
                    new q({
                      name: e,
                      from: this.current[e],
                      to: n,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                n,
                i = !1;
              for (e = this.tweens.length; e--; )
                (n = this.tweens[e]).context &&
                  (n.render(t), (this.current[n.name] = n.value), (i = !0));
              return i
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        G = (e.config = {
          debug: !1,
          defaultUnit: 'px',
          defaultAngle: 'deg',
          keepInherited: !1,
          hideBackface: !1,
          perspective: '',
          fallback: !W.transition,
          agentTests: [],
        });
      (e.fallback = function (t) {
        if (!W.transition) return (G.fallback = !0);
        G.agentTests.push('(' + t + ')');
        var e = new RegExp(G.agentTests.join('|'), 'i');
        G.fallback = e.test(navigator.userAgent);
      }),
        e.fallback('6.0.[2-5] Safari'),
        (e.tween = function (t) {
          return new q(t);
        }),
        (e.delay = function (t, e, n) {
          return new $({ complete: e, duration: t, context: n });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var B = t.style,
        X = t.css,
        Z = { transform: W.transform && W.transform.css },
        V = {
          color: [F, b],
          background: [F, b, 'background-color'],
          'outline-color': [F, b],
          'border-color': [F, b],
          'border-top-color': [F, b],
          'border-right-color': [F, b],
          'border-bottom-color': [F, b],
          'border-left-color': [F, b],
          'border-width': [N, y],
          'border-top-width': [N, y],
          'border-right-width': [N, y],
          'border-bottom-width': [N, y],
          'border-left-width': [N, y],
          'border-spacing': [N, y],
          'letter-spacing': [N, y],
          margin: [N, y],
          'margin-top': [N, y],
          'margin-right': [N, y],
          'margin-bottom': [N, y],
          'margin-left': [N, y],
          padding: [N, y],
          'padding-top': [N, y],
          'padding-right': [N, y],
          'padding-bottom': [N, y],
          'padding-left': [N, y],
          'outline-width': [N, y],
          opacity: [N, w],
          top: [N, x],
          right: [N, x],
          bottom: [N, x],
          left: [N, x],
          'font-size': [N, x],
          'text-indent': [N, x],
          'word-spacing': [N, x],
          width: [N, x],
          'min-width': [N, x],
          'max-width': [N, x],
          height: [N, x],
          'min-height': [N, x],
          'max-height': [N, x],
          'line-height': [N, _],
          'scroll-top': [j, w, 'scrollTop'],
          'scroll-left': [j, w, 'scrollLeft'],
        },
        Y = {};
      W.transform &&
        ((V.transform = [H]),
        (Y = {
          x: [x, 'translateX'],
          y: [x, 'translateY'],
          rotate: [k],
          rotateX: [k],
          rotateY: [k],
          scale: [w],
          scaleX: [w],
          scaleY: [w],
          skew: [k],
          skewX: [k],
          skewY: [k],
        })),
        W.transform &&
          W.backface &&
          ((Y.z = [x, 'translateZ']),
          (Y.rotateZ = [k]),
          (Y.scaleZ = [w]),
          (Y.perspective = [y]));
      var K = /ms/,
        Q = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, n) {
    n(6), n(7), n(9), n(10), n(11), n(12), n(14), (t.exports = n(15));
  },
  function (t, e, n) {
    'use strict';
    var i = n(2)(n(3));
    !(function () {
      if ('undefined' != typeof window) {
        var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;
        if (!('objectFit' in document.documentElement.style != !1) || e) {
          var n = function (t) {
              var e = t.parentNode;
              !(function (t) {
                var e = window.getComputedStyle(t, null),
                  n = e.getPropertyValue('position'),
                  i = e.getPropertyValue('overflow'),
                  r = e.getPropertyValue('display');
                (n && 'static' !== n) || (t.style.position = 'relative'),
                  'hidden' !== i && (t.style.overflow = 'hidden'),
                  (r && 'inline' !== r) || (t.style.display = 'block'),
                  0 === t.clientHeight && (t.style.height = '100%'),
                  -1 === t.className.indexOf('object-fit-polyfill') &&
                    (t.className += ' object-fit-polyfill');
              })(e),
                (function (t) {
                  var e = window.getComputedStyle(t, null),
                    n = {
                      'max-width': 'none',
                      'max-height': 'none',
                      'min-width': '0px',
                      'min-height': '0px',
                      top: 'auto',
                      right: 'auto',
                      bottom: 'auto',
                      left: 'auto',
                      'margin-top': '0px',
                      'margin-right': '0px',
                      'margin-bottom': '0px',
                      'margin-left': '0px',
                    };
                  for (var i in n)
                    e.getPropertyValue(i) !== n[i] && (t.style[i] = n[i]);
                })(t),
                (t.style.position = 'absolute'),
                (t.style.height = '100%'),
                (t.style.width = 'auto'),
                t.clientWidth > e.clientWidth
                  ? ((t.style.top = '0'),
                    (t.style.marginTop = '0'),
                    (t.style.left = '50%'),
                    (t.style.marginLeft = t.clientWidth / -2 + 'px'))
                  : ((t.style.width = '100%'),
                    (t.style.height = 'auto'),
                    (t.style.left = '0'),
                    (t.style.marginLeft = '0'),
                    (t.style.top = '50%'),
                    (t.style.marginTop = t.clientHeight / -2 + 'px'));
            },
            r = function (t) {
              if (void 0 === t || t instanceof Event)
                t = document.querySelectorAll('[data-object-fit]');
              else if (t && t.nodeName) t = [t];
              else {
                if (
                  'object' !== (0, i.default)(t) ||
                  !t.length ||
                  !t[0].nodeName
                )
                  return !1;
                t = t;
              }
              for (var r = 0; r < t.length; r++)
                if (t[r].nodeName) {
                  var o = t[r].nodeName.toLowerCase();
                  if ('img' === o) {
                    if (e) continue;
                    t[r].complete
                      ? n(t[r])
                      : t[r].addEventListener('load', function () {
                          n(this);
                        });
                  } else
                    'video' === o
                      ? t[r].readyState > 0
                        ? n(t[r])
                        : t[r].addEventListener('loadedmetadata', function () {
                            n(this);
                          })
                      : n(t[r]);
                }
              return !0;
            };
          'loading' === document.readyState
            ? document.addEventListener('DOMContentLoaded', r)
            : r(),
            window.addEventListener('resize', r),
            (window.objectFitPolyfill = r);
        } else
          window.objectFitPolyfill = function () {
            return !1;
          };
      }
    })();
  },
  function (t, e, n) {
    'use strict';
    var i = n(0);
    i.define(
      'brand',
      (t.exports = function (t) {
        var e,
          n = {},
          r = document,
          o = t('html'),
          a = t('body'),
          s = '.w-webflow-badge',
          u = window.location,
          c = /PhantomJS/i.test(navigator.userAgent),
          l =
            'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
        function d() {
          var n =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            Boolean(r.webkitFullscreenElement);
          t(e).attr('style', n ? 'display: none !important;' : '');
        }
        function f() {
          var t = a.children(s),
            n = t.length && t.get(0) === e,
            r = i.env('editor');
          n ? r && t.remove() : (t.length && t.remove(), r || a.append(e));
        }
        return (
          (n.ready = function () {
            var n,
              i,
              a,
              s = o.attr('data-wf-status'),
              h = o.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(h) && u.hostname !== h && (s = !0),
              s &&
                !c &&
                ((e =
                  e ||
                  ((n = t('<a class="w-webflow-badge"></a>').attr(
                    'href',
                    'https://webflow.com?utm_campaign=brandjs'
                  )),
                  (i = t('<img>')
                    .attr(
                      'src',
                      'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg'
                    )
                    .attr('alt', '')
                    .css({ marginRight: '8px', width: '16px' })),
                  (a = t('<img>')
                    .attr(
                      'src',
                      'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg'
                    )
                    .attr('alt', 'Made in Webflow')),
                  n.append(i, a),
                  n[0])),
                f(),
                setTimeout(f, 500),
                t(r).off(l, d).on(l, d));
          }),
          n
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var i = window.$,
      r = n(4) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: '1.6.0-Webflow' },
        e = {},
        n = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        s = (n.concat, i.toString, i.hasOwnProperty),
        u = n.forEach,
        c = n.map,
        l = (n.reduce, n.reduceRight, n.filter),
        d = (n.every, n.some),
        f = n.indexOf,
        h = (n.lastIndexOf, Array.isArray, Object.keys),
        p =
          (o.bind,
          (t.each = t.forEach = function (n, i, r) {
            if (null == n) return n;
            if (u && n.forEach === u) n.forEach(i, r);
            else if (n.length === +n.length) {
              for (var o = 0, a = n.length; o < a; o++)
                if (i.call(r, n[o], o, n) === e) return;
            } else {
              var s = t.keys(n);
              for (o = 0, a = s.length; o < a; o++)
                if (i.call(r, n[s[o]], s[o], n) === e) return;
            }
            return n;
          }));
      (t.map = t.collect = function (t, e, n) {
        var i = [];
        return null == t
          ? i
          : c && t.map === c
          ? t.map(e, n)
          : (p(t, function (t, r, o) {
              i.push(e.call(n, t, r, o));
            }),
            i);
      }),
        (t.find = t.detect = function (t, e, n) {
          var i;
          return (
            v(t, function (t, r, o) {
              if (e.call(n, t, r, o)) return (i = t), !0;
            }),
            i
          );
        }),
        (t.filter = t.select = function (t, e, n) {
          var i = [];
          return null == t
            ? i
            : l && t.filter === l
            ? t.filter(e, n)
            : (p(t, function (t, r, o) {
                e.call(n, t, r, o) && i.push(t);
              }),
              i);
        });
      var v = (t.some = t.any = function (n, i, r) {
        i || (i = t.identity);
        var o = !1;
        return null == n
          ? o
          : d && n.some === d
          ? n.some(i, r)
          : (p(n, function (t, n, a) {
              if (o || (o = i.call(r, t, n, a))) return e;
            }),
            !!o);
      });
      (t.contains = t.include = function (t, e) {
        return (
          null != t &&
          (f && t.indexOf === f
            ? -1 != t.indexOf(e)
            : v(t, function (t) {
                return t === e;
              }))
        );
      }),
        (t.delay = function (t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, n, i;
          return function () {
            e ||
              ((e = !0),
              (n = arguments),
              (i = this),
              r.frame(function () {
                (e = !1), t.apply(i, n);
              }));
          };
        }),
        (t.debounce = function (e, n, i) {
          var r,
            o,
            a,
            s,
            u,
            c = function c() {
              var l = t.now() - s;
              l < n
                ? (r = setTimeout(c, n - l))
                : ((r = null), i || ((u = e.apply(a, o)), (a = o = null)));
            };
          return function () {
            (a = this), (o = arguments), (s = t.now());
            var l = i && !r;
            return (
              r || (r = setTimeout(c, n)),
              l && ((u = e.apply(a, o)), (a = o = null)),
              u
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, i = arguments.length; n < i; n++) {
            var r = arguments[n];
            for (var o in r) void 0 === e[o] && (e[o] = r[o]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (h) return h(e);
          var n = [];
          for (var i in e) t.has(e, i) && n.push(i);
          return n;
        }),
        (t.has = function (t, e) {
          return s.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var m = /(.)^/,
        g = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029',
        },
        w = /\\|'|\r|\n|\u2028|\u2029/g,
        b = function (t) {
          return '\\' + g[t];
        };
      return (
        (t.template = function (e, n, i) {
          !n && i && (n = i), (n = t.defaults({}, n, t.templateSettings));
          var r = RegExp(
              [
                (n.escape || m).source,
                (n.interpolate || m).source,
                (n.evaluate || m).source,
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            a = "__p+='";
          e.replace(r, function (t, n, i, r, s) {
            return (
              (a += e.slice(o, s).replace(w, b)),
              (o = s + t.length),
              n
                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : r && (a += "';\n" + r + "\n__p+='"),
              t
            );
          }),
            (a += "';\n"),
            n.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
            (a =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              a +
              'return __p;\n');
          try {
            var s = new Function(n.variable || 'obj', '_', a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var u = function (e) {
              return s.call(this, e, t);
            },
            c = n.variable || 'obj';
          return (u.source = 'function(' + c + '){\n' + a + '}'), u;
        }),
        t
      );
    })();
  },
  function (t, e, n) {
    'use strict';
    var i = n(0);
    i.define(
      'links',
      (t.exports = function (t, e) {
        var n,
          r,
          o,
          a = {},
          s = t(window),
          u = i.env(),
          c = window.location,
          l = document.createElement('a'),
          d = 'w--current',
          f = /index\.(html|php)$/,
          h = /\/$/;
        function p(e) {
          var i =
            (n && e.getAttribute('href-disabled')) || e.getAttribute('href');
          if (((l.href = i), !(i.indexOf(':') >= 0))) {
            var a = t(e);
            if (
              l.hash.length > 1 &&
              l.host + l.pathname === c.host + c.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
              var s = t(l.hash);
              s.length && r.push({ link: a, sec: s, active: !1 });
            } else if ('#' !== i && '' !== i) {
              var u = l.href === c.href || i === o || (f.test(i) && h.test(o));
              m(a, d, u);
            }
          }
        }
        function v() {
          var t = s.scrollTop(),
            n = s.height();
          e.each(r, function (e) {
            var i = e.link,
              r = e.sec,
              o = r.offset().top,
              a = r.outerHeight(),
              s = 0.5 * n,
              u = r.is(':visible') && o + a - s >= t && o + s <= t + n;
            e.active !== u && ((e.active = u), m(i, d, u));
          });
        }
        function m(t, e, n) {
          var i = t.hasClass(e);
          (n && i) || ((n || i) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (a.ready = a.design = a.preview = function () {
            (n = u && i.env('design')),
              (o = i.env('slug') || c.pathname || ''),
              i.scroll.off(v),
              (r = []);
            for (var t = document.links, e = 0; e < t.length; ++e) p(t[e]);
            r.length && (i.scroll.on(v), v());
          }),
          a
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(0);
    i.define(
      'scroll',
      (t.exports = function (t) {
        var e,
          n = {
            WF_CHANGE: 'change.wf-change',
            WF_CLICK_EMPTY: 'click.wf-empty-link',
            WF_CLICK_SCROLL: 'click.wf-scroll',
          },
          r = t(document),
          o = window,
          a = o.location,
          s = (function () {
            try {
              return Boolean(o.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : o.history,
          u = /^[a-zA-Z0-9][\w:.-]*$/,
          c = 'a[href="#"]',
          l = 'a[href*="#"]:not(.w-tab-link):not(' + c + ')';
        function d(n) {
          if (
            !(
              i.env('design') ||
              (window.$.mobile && t(n.currentTarget).hasClass('ui-link'))
            )
          ) {
            var r = this.href.split('#'),
              c = r[0] === e ? r[1] : null;
            c &&
              (function (e, n) {
                if (!u.test(e)) return;
                var r = t('#' + e);
                if (!r.length) return;
                n && (n.preventDefault(), n.stopPropagation());
                if (
                  a.hash !== e &&
                  s &&
                  s.pushState &&
                  (!i.env.chrome || 'file:' !== a.protocol)
                ) {
                  var c = s.state && s.state.hash;
                  c !== e && s.pushState({ hash: e }, '', '#' + e);
                }
                var l = i.env('editor') ? '.w-editor-body' : 'body',
                  d = t(
                    'header, ' +
                      l +
                      ' > .header, ' +
                      l +
                      ' > .w-nav:not([data-no-scroll])'
                  ),
                  f = 'fixed' === d.css('position') ? d.outerHeight() : 0;
                o.setTimeout(
                  function () {
                    !(function (e, n) {
                      var i = t(o).scrollTop(),
                        r = e.offset().top - n;
                      if ('mid' === e.data('scroll')) {
                        var a = t(o).height() - n,
                          s = e.outerHeight();
                        s < a && (r -= Math.round((a - s) / 2));
                      }
                      var u = 1;
                      t('body')
                        .add(e)
                        .each(function () {
                          var e = parseFloat(
                            t(this).attr('data-scroll-time'),
                            10
                          );
                          !isNaN(e) && (0 === e || e > 0) && (u = e);
                        }),
                        Date.now ||
                          (Date.now = function () {
                            return new Date().getTime();
                          });
                      var c = Date.now(),
                        l =
                          o.requestAnimationFrame ||
                          o.mozRequestAnimationFrame ||
                          o.webkitRequestAnimationFrame ||
                          function (t) {
                            o.setTimeout(t, 15);
                          },
                        d =
                          (472.143 * Math.log(Math.abs(i - r) + 125) - 2e3) * u;
                      !(function t() {
                        var e = Date.now() - c;
                        o.scroll(
                          0,
                          (function (t, e, n, i) {
                            if (n > i) return e;
                            return (
                              t +
                              (e - t) *
                                ((r = n / i),
                                r < 0.5
                                  ? 4 * r * r * r
                                  : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1)
                            );
                            var r;
                          })(i, r, e, d)
                        ),
                          e <= d && l(t);
                      })();
                    })(r, f);
                  },
                  n ? 0 : 300
                );
              })(c, n);
          }
        }
        function f(t) {
          var e = n.WF_CLICK_SCROLL;
          t.target.matches ? r.off(e) : r.on(e, l, d);
        }
        return {
          ready: function () {
            var i = n.WF_CHANGE,
              o = n.WF_CLICK_EMPTY,
              s = n.WF_CLICK_SCROLL;
            e = a.href.split('#')[0];
            var u = window.matchMedia('(prefers-reduced-motion: reduce)');
            u.matches || r.on(s, l, d),
              t(u).on(i, f),
              r.on(o, c, function (t) {
                t.preventDefault();
              });
          },
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(0).define(
      'touch',
      (t.exports = function (t) {
        var e = {},
          n = window.getSelection;
        function i(e) {
          var i,
            r,
            o = !1,
            a = !1,
            s = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function u(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((o = !0),
              e ? ((a = !0), (i = e[0].clientX)) : (i = t.clientX),
              (r = i));
          }
          function c(e) {
            if (o) {
              if (a && 'mousemove' === e.type)
                return e.preventDefault(), void e.stopPropagation();
              var i = e.touches,
                u = i ? i[0].clientX : e.clientX,
                c = u - r;
              (r = u),
                Math.abs(c) > s &&
                  n &&
                  '' === String(n()) &&
                  (!(function (e, n, i) {
                    var r = t.Event(e, { originalEvent: n });
                    t(n.target).trigger(r, i);
                  })('swipe', e, { direction: c > 0 ? 'right' : 'left' }),
                  d());
            }
          }
          function l(t) {
            if (o)
              return (
                (o = !1),
                a && 'mouseup' === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                  : void 0
              );
          }
          function d() {
            o = !1;
          }
          e.addEventListener('touchstart', u, !1),
            e.addEventListener('touchmove', c, !1),
            e.addEventListener('touchend', l, !1),
            e.addEventListener('touchcancel', d, !1),
            e.addEventListener('mousedown', u, !1),
            e.addEventListener('mousemove', c, !1),
            e.addEventListener('mouseup', l, !1),
            e.addEventListener('mouseout', d, !1),
            (this.destroy = function () {
              e.removeEventListener('touchstart', u, !1),
                e.removeEventListener('touchmove', c, !1),
                e.removeEventListener('touchend', l, !1),
                e.removeEventListener('touchcancel', d, !1),
                e.removeEventListener('mousedown', u, !1),
                e.removeEventListener('mousemove', c, !1),
                e.removeEventListener('mouseup', l, !1),
                e.removeEventListener('mouseout', d, !1),
                (e = null);
            });
        }
        return (
          (t.event.special.tap = { bindType: 'click', delegateType: 'click' }),
          (e.init = function (e) {
            return (e = 'string' == typeof e ? t(e).get(0) : e)
              ? new i(e)
              : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(0),
      r = n(1),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      a = !0,
      s = /^#[a-zA-Z0-9\-_]+$/;
    i.define(
      'dropdown',
      (t.exports = function (t, e) {
        var n,
          u,
          c = e.debounce,
          l = {},
          d = i.env(),
          f = !1,
          h = i.env.touch,
          p = '.w-dropdown',
          v = 'w--open',
          m = r.triggers,
          g = 900,
          w = 'focusout' + p,
          b = 'keydown' + p,
          y = 'mouseenter' + p,
          x = 'mousemove' + p,
          k = 'mouseleave' + p,
          _ = (h ? 'click' : 'mouseup') + p,
          E = 'w-close' + p,
          O = 'setting' + p,
          R = t(document);
        function A() {
          (n = d && i.env('design')), (u = R.find(p)).each(T);
        }
        function T(e, r) {
          var u = t(r),
            l = t.data(r, p);
          l ||
            (l = t.data(r, p, {
              open: !1,
              el: u,
              config: {},
              selectedIdx: -1,
            })),
            (l.toggle = l.el.children('.w-dropdown-toggle')),
            (l.list = l.el.children('.w-dropdown-list')),
            (l.links = l.list.find('a:not(.w-dropdown .w-dropdown a)')),
            (l.complete = (function (t) {
              return function () {
                t.list.removeClass(v),
                  t.toggle.removeClass(v),
                  t.manageZ && t.el.css('z-index', '');
              };
            })(l)),
            (l.mouseLeave = (function (t) {
              return function () {
                (t.hovering = !1), t.links.is(':focus') || S(t);
              };
            })(l)),
            (l.mouseUpOutside = (function (e) {
              e.mouseUpOutside && R.off(_, e.mouseUpOutside);
              return c(function (n) {
                if (e.open) {
                  var r = t(n.target);
                  if (!r.closest('.w-dropdown-toggle').length) {
                    var o = -1 === t.inArray(e.el[0], r.parents(p)),
                      a = i.env('editor');
                    if (o) {
                      if (a) {
                        var s =
                            1 === r.parents().length &&
                            1 === r.parents('svg').length,
                          u = r.parents('.w-editor-bem-EditorHoverControls')
                            .length;
                        if (s || u) return;
                      }
                      S(e);
                    }
                  }
                }
              });
            })(l)),
            (l.mouseMoveOutside = (function (e) {
              return c(function (n) {
                if (e.open) {
                  var i = t(n.target),
                    r = -1 === t.inArray(e.el[0], i.parents(p));
                  if (r) {
                    var o = i.parents('.w-editor-bem-EditorHoverControls')
                        .length,
                      a = i.parents('.w-editor-bem-RTToolbar').length,
                      s = t('.w-editor-bem-EditorOverlay'),
                      u =
                        s.find('.w-editor-edit-outline').length ||
                        s.find('.w-editor-bem-RTToolbar').length;
                    if (o || a || u) return;
                    (e.hovering = !1), S(e);
                  }
                }
              });
            })(l)),
            C(l);
          var h = l.toggle.attr('id'),
            m = l.list.attr('id');
          h || (h = 'w-dropdown-toggle-' + e),
            m || (m = 'w-dropdown-list-' + e),
            l.toggle.attr('id', h),
            l.toggle.attr('aria-controls', m),
            l.toggle.attr('aria-haspopup', 'menu'),
            l.toggle.attr('aria-expanded', 'false'),
            'BUTTON' !== l.toggle.prop('tagName') &&
              (l.toggle.attr('role', 'button'),
              l.toggle.attr('tabindex') || l.toggle.attr('tabindex', '0')),
            l.list.attr('id', m),
            l.list.attr('aria-labelledby', h),
            l.links.each(function (t, e) {
              e.hasAttribute('tabindex') || e.setAttribute('tabindex', '0'),
                s.test(e.hash) && e.addEventListener('click', S.bind(null, l));
            }),
            l.el.off(p),
            l.toggle.off(p),
            l.nav && l.nav.off(p);
          var g = I(l, a);
          n &&
            l.el.on(
              O,
              (function (t) {
                return function (e, n) {
                  (n = n || {}),
                    C(t),
                    !0 === n.open && W(t),
                    !1 === n.open && S(t, { immediate: !0 });
                };
              })(l)
            ),
            n ||
              (d && ((l.hovering = !1), S(l)),
              l.config.hover &&
                l.toggle.on(
                  y,
                  (function (t) {
                    return function () {
                      (t.hovering = !0), W(t);
                    };
                  })(l)
                ),
              l.el.on(E, g),
              l.el.on(
                b,
                (function (t) {
                  return function (e) {
                    if (!n && !f && t.open)
                      switch (
                        ((t.selectedIdx = t.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case o.HOME:
                          if (!t.open) return;
                          return (t.selectedIdx = 0), D(t), e.preventDefault();
                        case o.END:
                          if (!t.open) return;
                          return (
                            (t.selectedIdx = t.links.length - 1),
                            D(t),
                            e.preventDefault()
                          );
                        case o.ESCAPE:
                          return S(t), t.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                          return (
                            (t.selectedIdx = Math.min(
                              t.links.length - 1,
                              t.selectedIdx + 1
                            )),
                            D(t),
                            e.preventDefault()
                          );
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                          return (
                            (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                            D(t),
                            e.preventDefault()
                          );
                      }
                  };
                })(l)
              ),
              l.el.on(
                w,
                (function (t) {
                  return c(function (e) {
                    var n = e.relatedTarget,
                      i = e.target,
                      r = t.el[0],
                      o = r.contains(n) || r.contains(i);
                    return o || S(t), e.stopPropagation();
                  });
                })(l)
              ),
              l.toggle.on(_, g),
              l.toggle.on(
                b,
                (function (t) {
                  var e = I(t, a);
                  return function (i) {
                    if (!n && !f) {
                      if (!t.open)
                        switch (i.keyCode) {
                          case o.ARROW_UP:
                          case o.ARROW_DOWN:
                            return i.stopPropagation();
                        }
                      switch (i.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return e(), i.stopPropagation(), i.preventDefault();
                      }
                    }
                  };
                })(l)
              ),
              (l.nav = l.el.closest('.w-nav')),
              l.nav.on(E, g));
        }
        function C(t) {
          var e = Number(t.el.css('z-index'));
          (t.manageZ = e === g || e === g + 1),
            (t.config = {
              hover:
                (!0 === t.el.attr('data-hover') ||
                  '1' === t.el.attr('data-hover')) &&
                !h,
              delay: Number(t.el.attr('data-delay')) || 0,
            });
        }
        function I(t, e) {
          return c(function (n) {
            if (t.open || (n && 'w-close' === n.type))
              return S(t, { forceClose: e });
            W(t);
          });
        }
        function W(e) {
          if (!e.open) {
            !(function (e) {
              var n = e.el[0];
              u.each(function (e, i) {
                var r = t(i);
                r.is(n) || r.has(n).length || r.triggerHandler(E);
              });
            })(e),
              (e.open = !0),
              e.list.addClass(v),
              e.toggle.addClass(v),
              e.toggle.attr('aria-expanded', 'true'),
              m.intro(0, e.el[0]),
              i.redraw.up(),
              e.manageZ && e.el.css('z-index', g + 1);
            var r = i.env('editor');
            n || R.on(_, e.mouseUpOutside),
              e.hovering && !r && e.el.on(k, e.mouseLeave),
              e.hovering && r && R.on(x, e.mouseMoveOutside),
              window.clearTimeout(e.delayId);
          }
        }
        function S(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.immediate,
            i = e.forceClose;
          if (t.open && (!t.config.hover || !t.hovering || i)) {
            t.toggle.attr('aria-expanded', 'false'), (t.open = !1);
            var r = t.config;
            if (
              (m.outro(0, t.el[0]),
              R.off(_, t.mouseUpOutside),
              R.off(x, t.mouseMoveOutside),
              t.el.off(k, t.mouseLeave),
              window.clearTimeout(t.delayId),
              !r.delay || n)
            )
              return t.complete();
            t.delayId = window.setTimeout(t.complete, r.delay);
          }
        }
        function D(t) {
          t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
        }
        return (
          (l.ready = A),
          (l.design = function () {
            f &&
              R.find(p).each(function (e, n) {
                t(n).triggerHandler(E);
              }),
              (f = !1),
              A();
          }),
          (l.preview = function () {
            (f = !0), A();
          }),
          l
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var i = window.jQuery,
      r = {},
      o = [],
      a = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), i(e).triggerHandler(r.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), i(e).triggerHandler(r.types.OUTRO));
        },
      };
    (r.triggers = {}),
      (r.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      (r.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
          var n = o[e];
          n[0](0, n[1]);
        }
        (o = []), i.extend(r.triggers, a);
      }),
      (r.async = function () {
        for (var t in a) {
          var e = a[t];
          a.hasOwnProperty(t) &&
            (r.triggers[t] = function (t, n) {
              o.push([e, n]);
            });
        }
      }),
      r.async(),
      (t.exports = r);
  },
  function (t, e, n) {
    'use strict';
    var i = n(0),
      r = n(1),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    i.define(
      'navbar',
      (t.exports = function (t, e) {
        var n,
          a,
          s,
          u,
          c = {},
          l = t.tram,
          d = t(window),
          f = t(document),
          h = e.debounce,
          p = i.env(),
          v = '<div class="w-nav-overlay" data-wf-ignore />',
          m = '.w-nav',
          g = 'w--open',
          w = 'w--nav-dropdown-open',
          b = 'w--nav-dropdown-toggle-open',
          y = 'w--nav-dropdown-list-open',
          x = 'w--nav-link-open',
          k = r.triggers,
          _ = t();
        function E() {
          i.resize.off(O);
        }
        function O() {
          a.each(P);
        }
        function R(n, i) {
          var r = t(i),
            a = t.data(i, m);
          a ||
            (a = t.data(i, m, {
              open: !1,
              el: r,
              config: {},
              selectedIdx: -1,
            })),
            (a.menu = r.find('.w-nav-menu')),
            (a.links = a.menu.find('.w-nav-link')),
            (a.dropdowns = a.menu.find('.w-dropdown')),
            (a.dropdownToggle = a.menu.find('.w-dropdown-toggle')),
            (a.dropdownList = a.menu.find('.w-dropdown-list')),
            (a.button = r.find('.w-nav-button')),
            (a.container = r.find('.w-container')),
            (a.overlayContainerId = 'w-nav-overlay-' + n),
            (a.outside = (function (e) {
              e.outside && f.off('click' + m, e.outside);
              return function (n) {
                var i = t(n.target);
                (u && i.closest('.w-editor-bem-EditorOverlay').length) ||
                  L(e, i);
              };
            })(a));
          var c = r.find('.w-nav-brand');
          c &&
            '/' === c.attr('href') &&
            null == c.attr('aria-label') &&
            c.attr('aria-label', 'home'),
            a.button.attr('style', '-webkit-user-select: text;'),
            null == a.button.attr('aria-label') &&
              a.button.attr('aria-label', 'menu'),
            a.button.attr('role', 'button'),
            a.button.attr('tabindex', '0'),
            a.button.attr('aria-controls', a.overlayContainerId),
            a.button.attr('aria-haspopup', 'menu'),
            a.button.attr('aria-expanded', 'false'),
            a.el.off(m),
            a.button.off(m),
            a.menu.off(m),
            C(a),
            s
              ? (T(a),
                a.el.on(
                  'setting' + m,
                  (function (t) {
                    return function (n, i) {
                      i = i || {};
                      var r = d.width();
                      C(t),
                        !0 === i.open && F(t, !0),
                        !1 === i.open && H(t, !0),
                        t.open &&
                          e.defer(function () {
                            r !== d.width() && W(t);
                          });
                    };
                  })(a)
                ))
              : (!(function (e) {
                  if (e.overlay) return;
                  (e.overlay = t(v).appendTo(e.el)),
                    e.overlay.attr('id', e.overlayContainerId),
                    (e.parent = e.menu.parent()),
                    H(e, !0);
                })(a),
                a.button.on('click' + m, S(a)),
                a.menu.on('click' + m, 'a', D(a)),
                a.button.on(
                  'keydown' + m,
                  (function (t) {
                    return function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            S(t)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return H(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          return t.open
                            ? (e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              I(t),
                              e.preventDefault(),
                              e.stopPropagation())
                            : (e.preventDefault(), e.stopPropagation());
                      }
                    };
                  })(a)
                ),
                a.el.on(
                  'keydown' + m,
                  (function (t) {
                    return function (e) {
                      if (t.open)
                        switch (
                          ((t.selectedIdx = t.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              I(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              H(t),
                              t.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                              I(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (t.selectedIdx = Math.min(
                                t.links.length - 1,
                                t.selectedIdx + 1
                              )),
                              I(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    };
                  })(a)
                )),
            P(n, i);
        }
        function A(e, n) {
          var i = t.data(n, m);
          i && (T(i), t.removeData(n, m));
        }
        function T(t) {
          t.overlay && (H(t, !0), t.overlay.remove(), (t.overlay = null));
        }
        function C(t) {
          var n = {},
            i = t.config || {},
            r = (n.animation = t.el.attr('data-animation') || 'default');
          (n.animOver = /^over/.test(r)),
            (n.animDirect = /left$/.test(r) ? -1 : 1),
            i.animation !== r && t.open && e.defer(W, t),
            (n.easing = t.el.attr('data-easing') || 'ease'),
            (n.easing2 = t.el.attr('data-easing2') || 'ease');
          var o = t.el.attr('data-duration');
          (n.duration = null != o ? Number(o) : 400),
            (n.docHeight = t.el.attr('data-doc-height')),
            (t.config = n);
        }
        function I(t) {
          if (t.links[t.selectedIdx]) {
            var e = t.links[t.selectedIdx];
            e.focus(), D(e);
          }
        }
        function W(t) {
          t.open && (H(t, !0), F(t, !0));
        }
        function S(t) {
          return h(function () {
            t.open ? H(t) : F(t);
          });
        }
        function D(e) {
          return function (n) {
            var r = t(this).attr('href');
            i.validClick(n.currentTarget)
              ? r && 0 === r.indexOf('#') && e.open && H(e)
              : n.preventDefault();
          };
        }
        (c.ready = c.design = c.preview = function () {
          if (
            ((s = p && i.env('design')),
            (u = i.env('editor')),
            (n = t(document.body)),
            !(a = f.find(m)).length)
          )
            return;
          a.each(R), E(), i.resize.on(O);
        }),
          (c.destroy = function () {
            (_ = t()), E(), a && a.length && a.each(A);
          });
        var L = h(function (t, e) {
          if (t.open) {
            var n = e.closest('.w-nav-menu');
            t.menu.is(n) || H(t);
          }
        });
        function P(e, n) {
          var i = t.data(n, m),
            r = (i.collapsed = 'none' !== i.button.css('display'));
          if ((!i.open || r || s || H(i, !0), i.container.length)) {
            var o = (function (e) {
              var n = e.container.css(z);
              'none' === n && (n = '');
              return function (e, i) {
                (i = t(i)).css(z, ''), 'none' === i.css(z) && i.css(z, n);
              };
            })(i);
            i.links.each(o), i.dropdowns.each(o);
          }
          i.open && j(i);
        }
        var z = 'max-width';
        function M(t, e) {
          e.setAttribute('data-nav-menu-open', '');
        }
        function N(t, e) {
          e.removeAttribute('data-nav-menu-open');
        }
        function F(t, e) {
          if (!t.open) {
            (t.open = !0),
              t.menu.each(M),
              t.links.addClass(x),
              t.dropdowns.addClass(w),
              t.dropdownToggle.addClass(b),
              t.dropdownList.addClass(y),
              t.button.addClass(g);
            var n = t.config;
            ('none' !== n.animation && l.support.transform) || (e = !0);
            var r = j(t),
              o = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              u = t.el.height(),
              c = t.el[0];
            if (
              (P(0, c),
              k.intro(0, c),
              i.redraw.up(),
              s || f.on('click' + m, t.outside),
              e)
            )
              p();
            else {
              var d = 'transform ' + n.duration + 'ms ' + n.easing;
              if (
                (t.overlay &&
                  ((_ = t.menu.prev()), t.overlay.show().append(t.menu)),
                n.animOver)
              )
                return (
                  l(t.menu)
                    .add(d)
                    .set({ x: n.animDirect * a, height: r })
                    .start({ x: 0 })
                    .then(p),
                  void (t.overlay && t.overlay.width(a))
                );
              var h = u + o;
              l(t.menu).add(d).set({ y: -h }).start({ y: 0 }).then(p);
            }
          }
          function p() {
            t.button.attr('aria-expanded', 'true');
          }
        }
        function j(t) {
          var e = t.config,
            i = e.docHeight ? f.height() : n.height();
          return (
            e.animOver
              ? t.menu.height(i)
              : 'fixed' !== t.el.css('position') && (i -= t.el.outerHeight(!0)),
            t.overlay && t.overlay.height(i),
            i
          );
        }
        function H(t, e) {
          if (t.open) {
            (t.open = !1), t.button.removeClass(g);
            var n = t.config;
            if (
              (('none' === n.animation ||
                !l.support.transform ||
                n.duration <= 0) &&
                (e = !0),
              k.outro(0, t.el[0]),
              f.off('click' + m, t.outside),
              e)
            )
              return l(t.menu).stop(), void u();
            var i = 'transform ' + n.duration + 'ms ' + n.easing2,
              r = t.menu.outerHeight(!0),
              o = t.menu.outerWidth(!0),
              a = t.el.height();
            if (n.animOver)
              l(t.menu)
                .add(i)
                .start({ x: o * n.animDirect })
                .then(u);
            else {
              var s = a + r;
              l(t.menu).add(i).start({ y: -s }).then(u);
            }
          }
          function u() {
            t.menu.height(''),
              l(t.menu).set({ x: 0, y: 0 }),
              t.menu.each(N),
              t.links.removeClass(x),
              t.dropdowns.removeClass(w),
              t.dropdownToggle.removeClass(b),
              t.dropdownList.removeClass(y),
              t.overlay &&
                t.overlay.children().length &&
                (_.length ? t.menu.insertAfter(_) : t.menu.prependTo(t.parent),
                t.overlay.attr('style', '').hide()),
              t.el.triggerHandler('w-close'),
              t.button.attr('aria-expanded', 'false');
          }
        }
        return c;
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(0),
      r = n(1),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      a =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    i.define(
      'slider',
      (t.exports = function (t, e) {
        var n,
          s,
          u,
          c,
          l = {},
          d = t.tram,
          f = t(document),
          h = i.env(),
          p = '.w-slider',
          v = '<div class="w-slider-dot" data-wf-ignore />',
          m =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          g = r.triggers;
        function w() {
          (n = f.find(p)).length &&
            (n.each(x),
            (c = null),
            u || (b(), i.resize.on(y), i.redraw.on(l.redraw)));
        }
        function b() {
          i.resize.off(y), i.redraw.off(l.redraw);
        }
        function y() {
          n.filter(':visible').each(D);
        }
        function x(e, n) {
          var i = t(n),
            r = t.data(n, p);
          r ||
            (r = t.data(n, p, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: i,
              config: {},
            })),
            (r.mask = i.children('.w-slider-mask')),
            (r.left = i.children('.w-slider-arrow-left')),
            (r.right = i.children('.w-slider-arrow-right')),
            (r.nav = i.children('.w-slider-nav')),
            (r.slides = r.mask.children('.w-slide')),
            r.slides.each(g.reset),
            c && (r.maskWidth = 0),
            void 0 === i.attr('role') && i.attr('role', 'region'),
            void 0 === i.attr('aria-label') && i.attr('aria-label', 'carousel');
          var o = r.mask.attr('id');
          if (
            (o || ((o = 'w-slider-mask-' + e), r.mask.attr('id', o)),
            (r.ariaLiveLabel = t(m).appendTo(r.mask)),
            r.left.attr('role', 'button'),
            r.left.attr('tabindex', '0'),
            r.left.attr('aria-controls', o),
            void 0 === r.left.attr('aria-label') &&
              r.left.attr('aria-label', 'previous slide'),
            r.right.attr('role', 'button'),
            r.right.attr('tabindex', '0'),
            r.right.attr('aria-controls', o),
            void 0 === r.right.attr('aria-label') &&
              r.right.attr('aria-label', 'next slide'),
            !d.support.transform)
          )
            return r.left.hide(), r.right.hide(), r.nav.hide(), void (u = !0);
          r.el.off(p),
            r.left.off(p),
            r.right.off(p),
            r.nav.off(p),
            k(r),
            s
              ? (r.el.on('setting' + p, I(r)), C(r), (r.hasTimer = !1))
              : (r.el.on('swipe' + p, I(r)),
                r.left.on('click' + p, R(r)),
                r.right.on('click' + p, A(r)),
                r.left.on('keydown' + p, O(r, R)),
                r.right.on('keydown' + p, O(r, A)),
                r.nav.on('keydown' + p, '> div', I(r)),
                r.config.autoplay &&
                  !r.hasTimer &&
                  ((r.hasTimer = !0), (r.timerCount = 1), T(r)),
                r.el.on('mouseenter' + p, E(r, !0, 'mouse')),
                r.el.on('focusin' + p, E(r, !0, 'keyboard')),
                r.el.on('mouseleave' + p, E(r, !1, 'mouse')),
                r.el.on('focusout' + p, E(r, !1, 'keyboard'))),
            r.nav.on('click' + p, '> div', I(r)),
            h ||
              r.mask
                .contents()
                .filter(function () {
                  return 3 === this.nodeType;
                })
                .remove();
          var a = i.filter(':hidden');
          a.show();
          var l = i.parents(':hidden');
          l.show(), D(e, n), a.css('display', ''), l.css('display', '');
        }
        function k(t) {
          var e = { crossOver: 0 };
          (e.animation = t.el.attr('data-animation') || 'slide'),
            'outin' === e.animation &&
              ((e.animation = 'cross'), (e.crossOver = 0.5)),
            (e.easing = t.el.attr('data-easing') || 'ease');
          var n = t.el.attr('data-duration');
          if (
            ((e.duration = null != n ? parseInt(n, 10) : 500),
            _(t.el.attr('data-infinite')) && (e.infinite = !0),
            _(t.el.attr('data-disable-swipe')) && (e.disableSwipe = !0),
            _(t.el.attr('data-hide-arrows'))
              ? (e.hideArrows = !0)
              : t.config.hideArrows && (t.left.show(), t.right.show()),
            _(t.el.attr('data-autoplay')))
          ) {
            (e.autoplay = !0),
              (e.delay = parseInt(t.el.attr('data-delay'), 10) || 2e3),
              (e.timerMax = parseInt(t.el.attr('data-autoplay-limit'), 10));
            var i = 'mousedown' + p + ' touchstart' + p;
            s ||
              t.el.off(i).one(i, function () {
                C(t);
              });
          }
          var r = t.right.width();
          (e.edge = r ? r + 40 : 100), (t.config = e);
        }
        function _(t) {
          return '1' === t || 'true' === t;
        }
        function E(e, n, i) {
          return function (r) {
            if (n) e.hasFocus[i] = n;
            else {
              if (t.contains(e.el.get(0), r.relatedTarget)) return;
              if (
                ((e.hasFocus[i] = n),
                (e.hasFocus.mouse && 'keyboard' === i) ||
                  (e.hasFocus.keyboard && 'mouse' === i))
              )
                return;
            }
            n
              ? (e.ariaLiveLabel.attr('aria-live', 'polite'),
                e.hasTimer && C(e))
              : (e.ariaLiveLabel.attr('aria-live', 'off'), e.hasTimer && T(e));
          };
        }
        function O(t, e) {
          return function (n) {
            switch (n.keyCode) {
              case o.SPACE:
              case o.ENTER:
                return e(t)(), n.preventDefault(), n.stopPropagation();
            }
          };
        }
        function R(t) {
          return function () {
            S(t, { index: t.index - 1, vector: -1 });
          };
        }
        function A(t) {
          return function () {
            S(t, { index: t.index + 1, vector: 1 });
          };
        }
        function T(t) {
          C(t);
          var e = t.config,
            n = e.timerMax;
          (n && t.timerCount++ > n) ||
            (t.timerId = window.setTimeout(function () {
              null == t.timerId || s || (A(t)(), T(t));
            }, e.delay));
        }
        function C(t) {
          window.clearTimeout(t.timerId), (t.timerId = null);
        }
        function I(n) {
          return function (r, a) {
            a = a || {};
            var u = n.config;
            if (s && 'setting' === r.type) {
              if ('prev' === a.select) return R(n)();
              if ('next' === a.select) return A(n)();
              if ((k(n), L(n), null == a.select)) return;
              !(function (n, i) {
                var r = null;
                i === n.slides.length && (w(), L(n)),
                  e.each(n.anchors, function (e, n) {
                    t(e.els).each(function (e, o) {
                      t(o).index() === i && (r = n);
                    });
                  }),
                  null != r && S(n, { index: r, immediate: !0 });
              })(n, a.select);
            } else {
              if ('swipe' === r.type) {
                if (u.disableSwipe) return;
                if (i.env('editor')) return;
                return 'left' === a.direction
                  ? A(n)()
                  : 'right' === a.direction
                  ? R(n)()
                  : void 0;
              }
              if (n.nav.has(r.target).length) {
                var c = t(r.target).index();
                if (
                  ('click' === r.type && S(n, { index: c }),
                  'keydown' === r.type)
                )
                  switch (r.keyCode) {
                    case o.ENTER:
                    case o.SPACE:
                      S(n, { index: c }), r.preventDefault();
                      break;
                    case o.ARROW_LEFT:
                    case o.ARROW_UP:
                      W(n.nav, Math.max(c - 1, 0)), r.preventDefault();
                      break;
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                      W(n.nav, Math.min(c + 1, n.pages)), r.preventDefault();
                      break;
                    case o.HOME:
                      W(n.nav, 0), r.preventDefault();
                      break;
                    case o.END:
                      W(n.nav, n.pages), r.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            }
          };
        }
        function W(t, e) {
          var n = t.children().eq(e).focus();
          t.children().not(n);
        }
        function S(e, n) {
          n = n || {};
          var i = e.config,
            r = e.anchors;
          e.previous = e.index;
          var o = n.index,
            u = {};
          o < 0
            ? ((o = r.length - 1),
              i.infinite &&
                ((u.x = -e.endX), (u.from = 0), (u.to = r[0].width)))
            : o >= r.length &&
              ((o = 0),
              i.infinite &&
                ((u.x = r[r.length - 1].width),
                (u.from = -r[r.length - 1].x),
                (u.to = u.from - u.x))),
            (e.index = o);
          var l = e.nav
            .children()
            .eq(o)
            .addClass('w-active')
            .attr('aria-selected', 'true')
            .attr('tabindex', '0');
          e.nav
            .children()
            .not(l)
            .removeClass('w-active')
            .attr('aria-selected', 'false')
            .attr('tabindex', '-1'),
            i.hideArrows &&
              (e.index === r.length - 1 ? e.right.hide() : e.right.show(),
              0 === e.index ? e.left.hide() : e.left.show());
          var f = e.offsetX || 0,
            h = (e.offsetX = -r[e.index].x),
            p = { x: h, opacity: 1, visibility: '' },
            v = t(r[e.index].els),
            m = t(r[e.previous] && r[e.previous].els),
            w = e.slides.not(v),
            b = i.animation,
            y = i.easing,
            x = Math.round(i.duration),
            k = n.vector || (e.index > e.previous ? 1 : -1),
            _ = 'opacity ' + x + 'ms ' + y,
            E = 'transform ' + x + 'ms ' + y;
          if (
            (v.find(a).removeAttr('tabindex'),
            v.removeAttr('aria-hidden'),
            v.find('*').removeAttr('aria-hidden'),
            w.find(a).attr('tabindex', '-1'),
            w.attr('aria-hidden', 'true'),
            w.find('*').attr('aria-hidden', 'true'),
            s || (v.each(g.intro), w.each(g.outro)),
            n.immediate && !c)
          )
            return d(v).set(p), void A();
          if (e.index !== e.previous) {
            if (
              (e.ariaLiveLabel.text(
                'Slide '.concat(o + 1, ' of ').concat(r.length, '.')
              ),
              'cross' === b)
            ) {
              var O = Math.round(x - x * i.crossOver),
                R = Math.round(x - O);
              return (
                (_ = 'opacity ' + O + 'ms ' + y),
                d(m).set({ visibility: '' }).add(_).start({ opacity: 0 }),
                void d(v)
                  .set({ visibility: '', x: h, opacity: 0, zIndex: e.depth++ })
                  .add(_)
                  .wait(R)
                  .then({ opacity: 1 })
                  .then(A)
              );
            }
            if ('fade' === b)
              return (
                d(m).set({ visibility: '' }).stop(),
                void d(v)
                  .set({ visibility: '', x: h, opacity: 0, zIndex: e.depth++ })
                  .add(_)
                  .start({ opacity: 1 })
                  .then(A)
              );
            if ('over' === b)
              return (
                (p = { x: e.endX }),
                d(m).set({ visibility: '' }).stop(),
                void d(v)
                  .set({
                    visibility: '',
                    zIndex: e.depth++,
                    x: h + r[e.index].width * k,
                  })
                  .add(E)
                  .start({ x: h })
                  .then(A)
              );
            i.infinite && u.x
              ? (d(e.slides.not(m))
                  .set({ visibility: '', x: u.x })
                  .add(E)
                  .start({ x: h }),
                d(m)
                  .set({ visibility: '', x: u.from })
                  .add(E)
                  .start({ x: u.to }),
                (e.shifted = m))
              : (i.infinite &&
                  e.shifted &&
                  (d(e.shifted).set({ visibility: '', x: f }),
                  (e.shifted = null)),
                d(e.slides).set({ visibility: '' }).add(E).start({ x: h }));
          }
          function A() {
            (v = t(r[e.index].els)),
              (w = e.slides.not(v)),
              'slide' !== b && (p.visibility = 'hidden'),
              d(w).set(p);
          }
        }
        function D(e, n) {
          var i = t.data(n, p);
          if (i)
            return (function (t) {
              var e = t.mask.width();
              if (t.maskWidth !== e) return (t.maskWidth = e), !0;
              return !1;
            })(i)
              ? L(i)
              : void (
                  s &&
                  (function (e) {
                    var n = 0;
                    if (
                      (e.slides.each(function (e, i) {
                        n += t(i).outerWidth(!0);
                      }),
                      e.slidesWidth !== n)
                    )
                      return (e.slidesWidth = n), !0;
                    return !1;
                  })(i) &&
                  L(i)
                );
        }
        function L(e) {
          var n = 1,
            i = 0,
            r = 0,
            o = 0,
            a = e.maskWidth,
            u = a - e.config.edge;
          u < 0 && (u = 0),
            (e.anchors = [{ els: [], x: 0, width: 0 }]),
            e.slides.each(function (s, c) {
              r - i > u &&
                (n++,
                (i += a),
                (e.anchors[n - 1] = { els: [], x: r, width: 0 })),
                (o = t(c).outerWidth(!0)),
                (r += o),
                (e.anchors[n - 1].width += o),
                e.anchors[n - 1].els.push(c);
              var l = s + 1 + ' of ' + e.slides.length;
              t(c).attr('aria-label', l), t(c).attr('role', 'group');
            }),
            (e.endX = r),
            s && (e.pages = null),
            e.nav.length &&
              e.pages !== n &&
              ((e.pages = n),
              (function (e) {
                var n,
                  i = [],
                  r = e.el.attr('data-nav-spacing');
                r && (r = parseFloat(r) + 'px');
                for (var o = 0, a = e.pages; o < a; o++)
                  (n = t(v))
                    .attr('aria-label', 'Show slide ' + (o + 1) + ' of ' + a)
                    .attr('aria-selected', 'false')
                    .attr('role', 'button')
                    .attr('tabindex', '-1'),
                    e.nav.hasClass('w-num') && n.text(o + 1),
                    null != r && n.css({ 'margin-left': r, 'margin-right': r }),
                    i.push(n);
                e.nav.empty().append(i);
              })(e));
          var c = e.index;
          c >= n && (c = n - 1), S(e, { immediate: !0, index: c });
        }
        return (
          (l.ready = function () {
            (s = i.env('design')), w();
          }),
          (l.design = function () {
            (s = !0), w();
          }),
          (l.preview = function () {
            (s = !1), w();
          }),
          (l.redraw = function () {
            (c = !0), w();
          }),
          (l.destroy = b),
          l
        );
      })
    );
  },
]);
