/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: https://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }
  function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }
  function F(a, b) {
    return typeof a === b;
  }
  function G(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function H(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + p.join(d + " ") + d).split(" ");
    return F(b, "string") || F(b, "undefined")
      ? H(e, b)
      : ((e = (a + " " + q.join(d + " ") + d).split(" ")), I(e, b, c));
  }
  function K() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
      return (
        u.list &&
          (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        u
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute("type", (f = a[d])),
            (e = k.type !== "text"),
            e &&
              ((k.value = l),
              (k.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      "textfield" &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e);
        return t;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = { svg: "https://www.w3.org/2000/svg" },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    z = function (b) {
      var c = a.matchMedia || a.msMatchMedia;
      if (c) return (c(b) && c(b).matches) || !1;
      var d;
      return (
        y(
          "@media " + b + " { #" + h + " { position: absolute; } }",
          function (b) {
            d =
              (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                "position"
              ] == "absolute";
          }
        ),
        d
      );
    },
    A = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
        var f = d in e;
        return (
          f ||
            (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ""),
              (f = F(e[d], "function")),
              F(e[d], "undefined") || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        );
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    B = {}.hasOwnProperty,
    C;
  !F(B, "undefined") && !F(B.call, "undefined")
    ? (C = function (a, b) {
        return B.call(a, b);
      })
    : (C = function (a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
          };
        return e;
      }),
    (s.flexbox = function () {
      return J("flexWrap");
    }),
    (s.canvas = function () {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }),
    (s.canvastext = function () {
      return (
        !!e.canvas &&
        !!F(b.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (s.webgl = function () {
      return !!a.WebGLRenderingContext;
    }),
    (s.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : y(
              [
                "@media (",
                n.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (s.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (s.postmessage = function () {
      return !!a.postMessage;
    }),
    (s.websqldatabase = function () {
      return !!a.openDatabase;
    }),
    (s.indexedDB = function () {
      return !!J("indexedDB", a);
    }),
    (s.hashchange = function () {
      return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }),
    (s.history = function () {
      return !!a.history && !!history.pushState;
    }),
    (s.draganddrop = function () {
      var a = b.createElement("div");
      return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
    }),
    (s.websockets = function () {
      return "WebSocket" in a || "MozWebSocket" in a;
    }),
    (s.rgba = function () {
      return (
        D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
      );
    }),
    (s.hsla = function () {
      return (
        D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
      );
    }),
    (s.multiplebgs = function () {
      return (
        D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
      );
    }),
    (s.backgroundsize = function () {
      return J("backgroundSize");
    }),
    (s.borderimage = function () {
      return J("borderImage");
    }),
    (s.borderradius = function () {
      return J("borderRadius");
    }),
    (s.boxshadow = function () {
      return J("boxShadow");
    }),
    (s.textshadow = function () {
      return b.createElement("div").style.textShadow === "";
    }),
    (s.opacity = function () {
      return E("opacity:.55"), /^0.55$/.test(j.opacity);
    }),
    (s.cssanimations = function () {
      return J("animationName");
    }),
    (s.csscolumns = function () {
      return J("columnCount");
    }),
    (s.cssgradients = function () {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return (
        D(
          (a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        G(j.backgroundImage, "gradient")
      );
    }),
    (s.cssreflections = function () {
      return J("boxReflect");
    }),
    (s.csstransforms = function () {
      return !!J("transform");
    }),
    (s.csstransforms3d = function () {
      var a = !!J("perspective");
      return (
        a &&
          "webkitPerspective" in g.style &&
          y(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3;
            }
          ),
        a
      );
    }),
    (s.csstransitions = function () {
      return J("transition");
    }),
    (s.fontface = function () {
      var a;
      return (
        y(
          '@font-face {font-family:"font";src:url("https://")}',
          function (c, d) {
            var e = b.getElementById("smodernizr"),
              f = e.sheet || e.styleSheet,
              g = f
                ? f.cssRules && f.cssRules[0]
                  ? f.cssRules[0].cssText
                  : f.cssText || ""
                : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
          }
        ),
        a
      );
    }),
    (s.generatedcontent = function () {
      var a;
      return (
        y(
          [
            "#",
            h,
            "{font:0/0 a}#",
            h,
            ':after{content:"',
            l,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (b) {
            a = b.offsetHeight >= 3;
          }
        ),
        a
      );
    }),
    (s.video = function () {
      var a = b.createElement("video"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.audio = function () {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.localstorage = function () {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.sessionstorage = function () {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.webworkers = function () {
      return !!a.Worker;
    }),
    (s.applicationcache = function () {
      return !!a.applicationCache;
    }),
    (s.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
      );
    }),
    (s.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
      );
    }),
    (s.smil = function () {
      return (
        !!b.createElementNS &&
        /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
      );
    }),
    (s.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
      );
    });
  for (var L in s)
    C(s, L) &&
      ((x = L.toLowerCase()), (e[x] = s[L]()), v.push((e[x] ? "" : "no-") + x));
  return (
    e.input || K(),
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    D(""),
    (i = k = null),
    (function (a, b) {
      function l(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function m() {
        var a = s.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function n(a) {
        var b = j[a[h]];
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
      }
      function o(a, c, d) {
        c || (c = b);
        if (k) return c.createElement(a);
        d || (d = n(c));
        var g;
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        );
      }
      function p(a, c) {
        a || (a = b);
        if (k) return a.createDocumentFragment();
        c = c || n(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function q(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(s, b.frag));
      }
      function r(a) {
        a || (a = b);
        var c = n(a);
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          k || q(a, c),
          a
        );
      }
      var c = "3.7.0",
        d = a.html5 || {},
        e =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (g = "hidden" in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (g = !0), (k = !0);
        }
      })();
      var s = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p,
      };
      (a.html5 = s), r(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.mq = z),
    (e.hasEvent = A),
    (e.testProp = function (a) {
      return H([a]);
    }),
    (e.testAllProps = J),
    (e.testStyles = y),
    (e.prefixed = function (a, b, c) {
      return b ? J(a, b, c) : J(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + v.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                        : (f = a && n.isPlainObject(a) ? a : {}),
                      (g[d] = n.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = e.call(arguments, 2)),
              (d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)));
              }),
              (d.guid = a.guid = a.guid || n.guid++),
              d)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (((f = d.getElementById(e[2])), f && f.parentNode)) {
          if (f.id !== e[2]) return A.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = d), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K))
      : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (J(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!I)
      if (
        ((I = n.Deferred()),
        "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", K),
          a.addEventListener("load", K);
      else {
        d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) {}
        c &&
          c.doScroll &&
          !(function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  }),
    n.ready.promise();
  var L;
  for (L in n(l)) break;
  (l.ownFirst = "0" === L),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = d.createElement("div")),
          (e = d.createElement("div")),
          (e.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(e).appendChild(b),
          "undefined" != typeof b.style.zoom &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" != typeof b && "function" != typeof b) ||
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? P(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (
          (c = d.getElementsByTagName("body")[0]),
          c && c.style
            ? ((b = d.createElement("div")),
              (e = d.createElement("div")),
              (e.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              c.appendChild(e).appendChild(b),
              "undefined" != typeof b.style.zoom &&
                ((b.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (b.appendChild(d.createElement("div")).style.width = "5px"),
                (a = 3 !== b.offsetWidth)),
              c.removeChild(e),
              a)
            : void 0
        );
      };
    })();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (da.optgroup = da.option),
    (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
    (da.th = da.td);
  function ea(a, b) {
    var c,
      d,
      e = 0,
      f =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ja(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
      o > r;
      r++
    )
      if (((g = a[r]), g || 0 === g))
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
            (m = da[j] || da._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              aa.test(g) &&
              q.push(b.createTextNode(aa.exec(g)[0])),
            !l.tbody)
          ) {
            (g =
              "table" !== j || ha.test(g)
                ? "<table>" !== m[1] || ha.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(ea(q, "input"), ia),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
        (i = ea(p.appendChild(g), "script")),
        h && fa(i),
        c)
      ) {
        f = 0;
        while ((g = i[f++])) _.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in { submit: !0, change: !0, focusin: !0 })
      (c = "on" + b),
        (l[b] = c in a) ||
          (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
    e = null;
  })();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = qa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return "undefined" == typeof n ||
                  (a && n.event.triggered === a.type)
                  ? void 0
                  : n.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(G) || [""]),
          (h = b.length);
        while (h--)
          (f = oa.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = oa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !na.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (h = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (l = n.event.special[q] || {}),
          f || !l.trigger || l.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]),
            g &&
              g.apply &&
              M(i) &&
              ((b.result = g.apply(i, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = q),
          !f &&
            !b.isDefaultPrevented() &&
            (!l._default || l._default.apply(p.pop(), c) === !1) &&
            M(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) {}
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? pa
                  : qa))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: qa,
      isPropagationStopped: qa,
      isImmediatePropagationStopped: qa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = pa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = pa),
          a &&
            !this.isSimulated &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = pa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
      (n.event.special.submit = {
        setup: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      n.nodeName(b, "input") || n.nodeName(b, "button")
                        ? n.prop(b, "form")
                        : void 0;
                  c &&
                    !n._data(c, "submit") &&
                    (n.event.add(c, "submit._submit", function (a) {
                      a._submitBubble = !0;
                    }),
                    n._data(c, "submit", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submitBubble &&
            (delete a._submitBubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a));
        },
        teardown: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.remove(this, "._submit");
        },
      }),
    l.change ||
      (n.event.special.change = {
        setup: function () {
          return ka.test(this.nodeName)
            ? (("checkbox" !== this.type && "radio" !== this.type) ||
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._justChanged && !a.isTrigger && (this._justChanged = !1),
                    n.event.simulate("change", this, a);
                })),
              !1)
            : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) &&
                  !n._data(b, "change") &&
                  (n.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      n.event.simulate("change", this.parentNode, a);
                  }),
                  n._data(b, "change", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !ka.test(this.nodeName);
        },
      }),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d) {
        return sa(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return sa(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = qa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function Da(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Da(b).text = a.text), Ea(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Z.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
      });
    if (
      o &&
      ((k = ja(b, a[0].ownerDocument, !1, a, d)),
      (e = k.firstChild),
      1 === k.childNodes.length && (k = e),
      e || d)
    ) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
        (g = k),
          m !== p &&
            ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
          (g = i[m]),
            _.test(g.type || "") &&
              !n._data(g, "globalEval") &&
              n.contains(j, g) &&
              (g.src
                ? n._evalUrl && n._evalUrl(g.src)
                : n.globalEval(
                    (g.text || g.textContent || g.innerHTML || "").replace(
                      za,
                      ""
                    )
                  ));
      k = e = null;
    }
    return a;
  }
  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
            Fa(e, d[g]);
        else Fa(a, f);
      return (
        (d = ea(f, "script")),
        d.length > 0 && fa(d, !i && ea(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.attributes,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k || "undefined" == typeof d.removeAttribute
              ? (d[i] = void 0)
              : d.removeAttribute(i),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ha,
      detach: function (a) {
        return Ia(this, a, !0);
      },
      remove: function (a) {
        return Ia(this, a);
      },
      text: function (a) {
        return Y(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(ea(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Y(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
            if (
              "string" == typeof a &&
              !wa.test(a) &&
              (l.htmlSerialize || !ua.test(a)) &&
              (l.leadingWhitespace || !aa.test(a)) &&
              !da[($.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ha(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ja,
    Ka = { HTML: "block", BODY: "block" };
  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return (
      c ||
        ((c = La(a, b)),
        ("none" !== c && c) ||
          ((Ja = (
            Ja || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = La(a, b)),
          Ja.detach()),
        (Ka[a] = c)),
      c
    );
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      (j.style.cssText = "float:left;opacity:.5"),
        (l.opacity = "0.5" === j.style.opacity),
        (l.cssFloat = !!j.style.cssFloat),
        (j.style.backgroundClip = "content-box"),
        (j.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
        (i = d.createElement("div")),
        (i.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (j.innerHTML = ""),
        i.appendChild(j),
        (l.boxSizing =
          "" === j.style.boxSizing ||
          "" === j.style.MozBoxSizing ||
          "" === j.style.WebkitBoxSizing),
        n.extend(l, {
          reliableHiddenOffsets: function () {
            return null == b && k(), f;
          },
          boxSizingReliable: function () {
            return null == b && k(), e;
          },
          pixelMarginRight: function () {
            return null == b && k(), c;
          },
          pixelPosition: function () {
            return null == b && k(), b;
          },
          reliableMarginRight: function () {
            return null == b && k(), g;
          },
          reliableMarginLeft: function () {
            return null == b && k(), h;
          },
        });
      function k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i),
          (j.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (b = e = h = !1),
          (c = g = !0),
          a.getComputedStyle &&
            ((l = a.getComputedStyle(j)),
            (b = "1%" !== (l || {}).top),
            (h = "2px" === (l || {}).marginLeft),
            (e = "4px" === (l || { width: "4px" }).width),
            (j.style.marginRight = "50%"),
            (c = "4px" === (l || { marginRight: "4px" }).marginRight),
            (k = j.appendChild(d.createElement("div"))),
            (k.style.cssText = j.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (k.style.marginRight = k.style.width = "0"),
            (j.style.width = "1px"),
            (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
            j.removeChild(k)),
          (j.style.display = "none"),
          (f = 0 === j.getClientRects().length),
          f &&
            ((j.style.display = ""),
            (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (j.childNodes[0].style.borderCollapse = "separate"),
            (k = j.getElementsByTagName("td")),
            (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (f = 0 === k[0].offsetHeight),
            f &&
              ((k[0].style.display = ""),
              (k[1].style.display = "none"),
              (f = 0 === k[0].offsetHeight))),
          m.removeChild(i);
      }
    }
  })();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
            n.contains(a.ownerDocument, a) ||
            (g = n.style(a, b)),
          c &&
            !l.pixelMarginRight() &&
            Oa.test(g) &&
            Na.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Qa.currentStyle &&
      ((Ra = function (a) {
        return a.currentStyle;
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Oa.test(g) &&
            !Ta.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Ua(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = { position: "absolute", visibility: "hidden", display: "block" },
    $a = { letterSpacing: "0", fontWeight: "400" },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (((a = _a[c] + b), a in ab)) return a;
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                W(d) &&
                (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
            : ((e = W(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function eb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + V[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }
  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Sa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Oa.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = U.exec(c)) &&
            e[1] &&
            ((c = X(a, b, e)), (f = "number")),
          null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Sa(a, b, d)),
        "normal" === f && b in $a && (f = $a[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Pa(a, Za, function () {
                  return fb(a, b, d);
                })
              : fb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return db(
            a,
            c,
            d
              ? eb(
                  a,
                  b,
                  d,
                  l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Wa.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Va, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
      return b
        ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
        : void 0;
    })),
    (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Sa(a, "marginLeft")) ||
            (n.contains(a.ownerDocument, a)
              ? a.getBoundingClientRect().left -
                Pa(
                  a,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return a.getBoundingClientRect().left;
                  }
                )
              : 0)) + "px"
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Na.test(a) || (n.cssHooks[a + b].set = db);
    }),
    n.fn.extend({
      css: function (a, b) {
        return Y(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return cb(this, !0);
      },
      hide: function () {
        return cb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              W(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = gb),
    (gb.prototype = {
      constructor: gb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = gb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : gb.propHooks._default.set(this),
          this
        );
      },
    }),
    (gb.prototype.init.prototype = gb.prototype),
    (gb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = gb.prototype.init),
    (n.fx.step = {});
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return (
      a.setTimeout(function () {
        hb = void 0;
      }),
      (hb = n.now())
    );
  }
  function mb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function nb(a, b, c) {
    for (
      var d,
        e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), jb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = nb(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = hb || lb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, nb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(qb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (qb.tweeners[c] = qb.tweeners[c] || []),
          qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function (a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(mb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (hb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(ib), (ib = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var tb,
    ub,
    vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (yb && xb) || !wb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(xb ? c : d);
      },
    }),
    (ub = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (yb && xb) || !wb.test(c)
            ? a.setAttribute((!xb && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = vb[b] || n.find.attr;
      (yb && xb) || !wb.test(b)
        ? (vb[b] = function (a, b, d) {
            var e, f;
            return (
              d ||
                ((f = vb[b]),
                (vb[b] = e),
                (e = null != c(a, b, d) ? b.toLowerCase() : null),
                (vb[b] = f)),
              e
            );
          })
        : (vb[b] = function (a, b, c) {
            return c
              ? void 0
              : a[n.camelCase("default-" + b)]
              ? b.toLowerCase()
              : null;
          });
    }),
    (yb && xb) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          return n.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : tb && tb.set(a, b, c);
        },
      }),
    xb ||
      ((tb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (vb.id =
        vb.name =
        vb.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: tb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          tb.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Cb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Cb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Cb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Gb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Vb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Wb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Xb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
        (w.success = w.done),
        (w.error = w.fail),
        (l.url = ((b || l.url || Rb) + "")
          .replace(Hb, "")
          .replace(Mb, Sb[1] + "//")),
        (l.type = c.method || c.type || l.method || l.type),
        (l.dataTypes = n
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == l.crossDomain &&
          ((d = Nb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !d ||
            (d[1] === Sb[1] &&
              d[2] === Sb[2] &&
              (d[3] || ("https:" === d[1] ? "80" : "443")) ===
                (Sb[3] || ("https:" === Sb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
        Ub(Ob, l, c, w),
        2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Lb.test(l.type)),
        (f = l.url),
        l.hasContent ||
          (l.data &&
            ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
            (l.url = Ib.test(f)
              ? f.replace(Ib, "$1_=" + Eb++)
              : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
        l.ifModified &&
          (n.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
        return w.abort();
      v = "abort";
      for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
      if ((j = Ub(Pb, l, c, w))) {
        if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
          h && a.clearTimeout(h),
          (j = void 0),
          (g = e || ""),
          (w.readyState = b > 0 ? 4 : 0),
          (k = (b >= 200 && 300 > b) || 304 === b),
          d && (v = Wb(l, w, d)),
          (v = Xb(l, v, w, k)),
          k
            ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                x && (n.lastModified[f] = x),
                (x = w.getResponseHeader("etag")),
                x && (n.etag[f] = x)),
              204 === b || "HEAD" === l.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (w.status = b),
          (w.statusText = (c || y) + ""),
          k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
          w.statusCode(r),
          (r = void 0),
          i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
          q.fireWith(m, [w, y]),
          i &&
            (o.trigger("ajaxComplete", [w, l]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  function Yb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }
  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
      : Zb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || _b.test(a)
          ? d(a, e)
          : dc(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              cc.test(this.nodeName) &&
              !bc.test(a) &&
              (this.checked || !Z.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(ac, "\r\n") };
                })
              : { name: b.name, value: c.replace(ac, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return this.isLocal
              ? ic()
              : d.documentMode > 8
              ? hc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  hc()) ||
                ic();
          }
        : hc);
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in fc) fc[a](void 0, !0);
    }),
    (l.cors = !!gc && "withCredentials" in gc),
    (gc = l.ajax = !!gc),
    gc &&
      n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;
          return {
            send: function (d, e) {
              var f,
                g = b.xhr(),
                h = ++ec;
              if (
                (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (f in b.xhrFields) g[f] = b.xhrFields[f];
              b.mimeType &&
                g.overrideMimeType &&
                g.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  d["X-Requested-With"] ||
                  (d["X-Requested-With"] = "XMLHttpRequest");
              for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
              g.send((b.hasContent && b.data) || null),
                (c = function (a, d) {
                  var f, i, j;
                  if (c && (d || 4 === g.readyState))
                    if (
                      (delete fc[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                    )
                      4 !== g.readyState && g.abort();
                    else {
                      (j = {}),
                        (f = g.status),
                        "string" == typeof g.responseText &&
                          (j.text = g.responseText);
                      try {
                        i = g.statusText;
                      } catch (k) {
                        i = "";
                      }
                      f || !b.isLocal || b.crossDomain
                        ? 1223 === f && (f = 204)
                        : (f = j.text ? 200 : 404);
                    }
                  j && e(f, i, j, g.getAllResponseHeaders());
                }),
                b.async
                  ? 4 === g.readyState
                    ? a.setTimeout(c)
                    : (g.onreadystatechange = fc[h] = c)
                  : c();
            },
            abort: function () {
              c && c(void 0, !0);
            },
          };
        }
      });
  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || f(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (kc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              kc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(kc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ja([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var lc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function mc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? ("undefined" != typeof e.getBoundingClientRect &&
                  (d = e.getBoundingClientRect()),
                (c = mc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Qa;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return Y(
            this,
            function (a, d, e) {
              var f = mc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? n(f).scrollLeft() : e,
                        c ? e : n(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        {
          padding: "inner" + a,
          content: b,
          "": "outer" + a,
        },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return Y(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var nc = a.jQuery,
    oc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, h) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(o).filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = r),
            (i = o[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (h = h && h.hasOwnProperty("default") ? h.default : h);
  var r,
    n,
    o,
    a,
    c,
    u,
    f,
    d,
    g,
    _,
    m,
    p,
    v,
    y,
    E,
    C,
    T,
    b,
    S,
    I,
    A,
    D,
    w,
    N,
    O,
    k,
    P,
    j,
    H,
    L,
    R,
    x,
    W,
    U,
    q,
    F,
    K,
    M,
    Q,
    B,
    V,
    Y,
    z,
    J,
    Z,
    G,
    $,
    X,
    tt,
    et,
    nt,
    it,
    rt,
    ot,
    st,
    at,
    lt,
    ct,
    ht,
    ut,
    ft,
    dt,
    gt,
    _t,
    mt,
    pt,
    vt,
    yt,
    Et,
    Ct,
    Tt,
    bt,
    St,
    It,
    At,
    Dt,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    jt,
    Ht,
    Lt,
    Rt,
    xt,
    Wt,
    Ut,
    qt,
    Ft,
    Kt,
    Mt,
    Qt,
    Bt,
    Vt,
    Yt,
    zt,
    Jt,
    Zt,
    Gt,
    $t,
    Xt,
    te,
    ee,
    ne,
    ie,
    re,
    oe,
    se,
    ae,
    le,
    ce,
    he,
    ue,
    fe,
    de,
    ge,
    _e,
    me,
    pe,
    ve,
    ye,
    Ee,
    Ce,
    Te,
    be,
    Se,
    Ie,
    Ae,
    De,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    je,
    He,
    Le,
    Re,
    xe,
    We,
    Ue,
    qe,
    Fe,
    Ke,
    Me,
    Qe,
    Be,
    Ve,
    Ye,
    ze,
    Je,
    Ze,
    Ge,
    $e,
    Xe,
    tn,
    en,
    nn,
    rn,
    on,
    sn,
    an,
    ln,
    cn,
    hn,
    un,
    fn,
    dn,
    gn,
    _n,
    mn,
    pn,
    vn,
    yn,
    En,
    Cn,
    Tn,
    bn,
    Sn,
    In,
    An,
    Dn,
    wn,
    Nn,
    On,
    kn,
    Pn,
    jn,
    Hn,
    Ln,
    Rn,
    xn,
    Wn,
    Un,
    qn,
    Fn = (function (i) {
      var e = "transitionend";
      function t(t) {
        var e = this,
          n = !1;
        return (
          i(this).one(l.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return document.querySelector(e) ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                o = e[i],
                s =
                  o && l.isElement(o)
                    ? "element"
                    : ((a = o),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(s))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var a;
        },
      };
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
            if (i(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        }),
        l
      );
    })(e),
    Kn =
      ((n = "alert"),
      (a = "." + (o = "bs.alert")),
      (c = (r = e).fn[n]),
      (u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api",
      }),
      (f = "alert"),
      (d = "fade"),
      (g = "show"),
      (_ = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            r.removeData(this._element, o), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = Fn.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              n || (n = r(t).closest("." + f)[0]),
              n
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((r(e).removeClass(g), r(e).hasClass(d))) {
              var t = Fn.getTransitionDurationFromElement(e);
              r(e)
                .one(Fn.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = r(this),
                e = t.data(o);
              e || ((e = new i(this)), t.data(o, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        _._handleDismiss(new _())
      ),
      (r.fn[n] = _._jQueryInterface),
      (r.fn[n].Constructor = _),
      (r.fn[n].noConflict = function () {
        return (r.fn[n] = c), _._jQueryInterface;
      }),
      _),
    Mn =
      ((p = "button"),
      (y = "." + (v = "bs.button")),
      (E = ".data-api"),
      (C = (m = e).fn[p]),
      (T = "active"),
      (b = "btn"),
      (I = '[data-toggle^="button"]'),
      (A = '[data-toggle="buttons"]'),
      (D = "input"),
      (w = ".active"),
      (N = ".btn"),
      (O = {
        CLICK_DATA_API: "click" + y + E,
        FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E,
      }),
      (k = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = m(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(D);
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && this._element.classList.contains(T)) t = !1;
                  else {
                    var r = n.querySelector(w);
                    r && m(r).removeClass(T);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !this._element.classList.contains(T)),
                    m(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
              t && m(this._element).toggleClass(T);
          }),
          (t.dispose = function () {
            m.removeData(this._element, v), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = m(this).data(v);
              t || ((t = new n(this)), m(this).data(v, t)),
                "toggle" === e && t[e]();
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          n
        );
      })()),
      m(document)
        .on(O.CLICK_DATA_API, I, function (t) {
          t.preventDefault();
          var e = t.target;
          m(e).hasClass(b) || (e = m(e).closest(N)),
            k._jQueryInterface.call(m(e), "toggle");
        })
        .on(O.FOCUS_BLUR_DATA_API, I, function (t) {
          var e = m(t.target).closest(N)[0];
          m(e).toggleClass(S, /^focus(in)?$/.test(t.type));
        }),
      (m.fn[p] = k._jQueryInterface),
      (m.fn[p].Constructor = k),
      (m.fn[p].noConflict = function () {
        return (m.fn[p] = C), k._jQueryInterface;
      }),
      k),
    Qn =
      ((j = "carousel"),
      (L = "." + (H = "bs.carousel")),
      (R = ".data-api"),
      (x = (P = e).fn[j]),
      (W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
      }),
      (U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
      }),
      (q = "next"),
      (F = "prev"),
      (K = "left"),
      (M = "right"),
      (Q = {
        SLIDE: "slide" + L,
        SLID: "slid" + L,
        KEYDOWN: "keydown" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
        TOUCHEND: "touchend" + L,
        LOAD_DATA_API: "load" + L + R,
        CLICK_DATA_API: "click" + L + R,
      }),
      (B = "carousel"),
      (V = "active"),
      (Y = "slide"),
      (z = "carousel-item-right"),
      (J = "carousel-item-left"),
      (Z = "carousel-item-next"),
      (G = "carousel-item-prev"),
      ($ = ".active"),
      (X = ".active.carousel-item"),
      (tt = ".carousel-item"),
      (et = ".carousel-item-next, .carousel-item-prev"),
      (nt = ".carousel-indicators"),
      (it = "[data-slide], [data-slide-to]"),
      (rt = '[data-ride="carousel"]'),
      (ot = (function () {
        function o(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = P(t)[0]),
            (this._indicatorsElement = this._element.querySelector(nt)),
            this._addEventListeners();
        }
        var t = o.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(q);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              P(this._element).is(":visible") &&
              "hidden" !== P(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(F);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(et) &&
                (Fn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? q : F;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            P(this._element).off(L),
              P.removeData(this._element, H),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = l({}, W, t)), Fn.typeCheckConfig(j, t, U), t;
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                (P(this._element)
                  .on(Q.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
                "ontouchstart" in document.documentElement &&
                  P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval));
                  }));
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(t.parentNode.querySelectorAll(tt))
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === q,
              i = t === F,
              r = this._getItemIndex(e),
              o = this._items.length - 1;
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
              return e;
            var s = (r + (t === F ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(X)),
              r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return P(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = [].slice.call(
                this._indicatorsElement.querySelectorAll($)
              );
              P(e).removeClass(V);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && P(n).addClass(V);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              r,
              o = this,
              s = this._element.querySelector(X),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              c = this._getItemIndex(l),
              h = Boolean(this._interval);
            if (
              (t === q
                ? ((n = J), (i = Z), (r = K))
                : ((n = z), (i = G), (r = M)),
              l && P(l).hasClass(V))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                h && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = P.Event(Q.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: c,
              });
              if (P(this._element).hasClass(Y)) {
                P(l).addClass(i),
                  Fn.reflow(l),
                  P(s).addClass(n),
                  P(l).addClass(n);
                var f = Fn.getTransitionDurationFromElement(s);
                P(s)
                  .one(Fn.TRANSITION_END, function () {
                    P(l)
                      .removeClass(n + " " + i)
                      .addClass(V),
                      P(s).removeClass(V + " " + i + " " + n),
                      (o._isSliding = !1),
                      setTimeout(function () {
                        return P(o._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(f);
              } else
                P(s).removeClass(V),
                  P(l).addClass(V),
                  (this._isSliding = !1),
                  P(this._element).trigger(u);
              h && this.cycle();
            }
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var t = P(this).data(H),
                e = l({}, W, P(this).data());
              "object" == typeof i && (e = l({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new o(this, e)), P(this).data(H, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && (t.pause(), t.cycle());
            });
          }),
          (o._dataApiClickHandler = function (t) {
            var e = Fn.getSelectorFromElement(this);
            if (e) {
              var n = P(e)[0];
              if (n && P(n).hasClass(B)) {
                var i = l({}, P(n).data(), P(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                  o._jQueryInterface.call(P(n), i),
                  r && P(n).data(H).to(r),
                  t.preventDefault();
              }
            }
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return W;
              },
            },
          ]),
          o
        );
      })()),
      P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
      P(window).on(Q.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(rt)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = P(t[e]);
          ot._jQueryInterface.call(i, i.data());
        }
      }),
      (P.fn[j] = ot._jQueryInterface),
      (P.fn[j].Constructor = ot),
      (P.fn[j].noConflict = function () {
        return (P.fn[j] = x), ot._jQueryInterface;
      }),
      ot),
    Bn =
      ((at = "collapse"),
      (ct = "." + (lt = "bs.collapse")),
      (ht = (st = e).fn[at]),
      (ut = { toggle: !0, parent: "" }),
      (ft = { toggle: "boolean", parent: "(string|element)" }),
      (dt = {
        SHOW: "show" + ct,
        SHOWN: "shown" + ct,
        HIDE: "hide" + ct,
        HIDDEN: "hidden" + ct,
        CLICK_DATA_API: "click" + ct + ".data-api",
      }),
      (gt = "show"),
      (_t = "collapse"),
      (mt = "collapsing"),
      (pt = "collapsed"),
      (vt = "width"),
      (yt = "height"),
      (Et = ".show, .collapsing"),
      (Ct = '[data-toggle="collapse"]'),
      (Tt = (function () {
        function a(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = st.makeArray(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(Ct)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              s = Fn.getSelectorFromElement(o),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            st(this._element).hasClass(gt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !st(this._element).hasClass(gt) &&
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll(Et))
                    .filter(function (t) {
                      return t.getAttribute("data-parent") === n._config.parent;
                    })).length &&
                (t = null),
              !(
                t &&
                (e = st(t).not(this._selector).data(lt)) &&
                e._isTransitioning
              ))
            ) {
              var i = st.Event(dt.SHOW);
              if ((st(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(st(t).not(this._selector), "hide"),
                  e || st(t).data(lt, null));
                var r = this._getDimension();
                st(this._element).removeClass(_t).addClass(mt),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    st(this._triggerArray)
                      .removeClass(pt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  s = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    st(n._element).removeClass(mt).addClass(_t).addClass(gt),
                      (n._element.style[r] = ""),
                      n.setTransitioning(!1),
                      st(n._element).trigger(dt.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[r] = this._element[o] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && st(this._element).hasClass(gt)) {
              var e = st.Event(dt.HIDE);
              if ((st(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  Fn.reflow(this._element),
                  st(this._element)
                    .addClass(mt)
                    .removeClass(_t)
                    .removeClass(gt);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var r = 0; r < i; r++) {
                    var o = this._triggerArray[r],
                      s = Fn.getSelectorFromElement(o);
                    if (null !== s)
                      st([].slice.call(document.querySelectorAll(s))).hasClass(
                        gt
                      ) || st(o).addClass(pt).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var a = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      st(t._element)
                        .removeClass(mt)
                        .addClass(_t)
                        .trigger(dt.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            st.removeData(this._element, lt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = l({}, ut, t)).toggle = Boolean(t.toggle)),
              Fn.typeCheckConfig(at, t, ft),
              t
            );
          }),
          (t._getDimension = function () {
            return st(this._element).hasClass(vt) ? vt : yt;
          }),
          (t._getParent = function () {
            var n = this,
              t = null;
            Fn.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(t.querySelectorAll(e));
            return (
              st(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var n = st(t).hasClass(gt);
              e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n);
            }
          }),
          (a._getTargetFromElement = function (t) {
            var e = Fn.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = st(this),
                e = t.data(lt),
                n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(lt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ut;
              },
            },
          ]),
          a
        );
      })()),
      st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = st(this),
          e = Fn.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(e));
        st(i).each(function () {
          var t = st(this),
            e = t.data(lt) ? "toggle" : n.data();
          Tt._jQueryInterface.call(t, e);
        });
      }),
      (st.fn[at] = Tt._jQueryInterface),
      (st.fn[at].Constructor = Tt),
      (st.fn[at].noConflict = function () {
        return (st.fn[at] = ht), Tt._jQueryInterface;
      }),
      Tt),
    Vn =
      ((St = "dropdown"),
      (At = "." + (It = "bs.dropdown")),
      (Dt = ".data-api"),
      (wt = (bt = e).fn[St]),
      (Nt = new RegExp("38|40|27")),
      (Ot = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + Dt,
        KEYDOWN_DATA_API: "keydown" + At + Dt,
        KEYUP_DATA_API: "keyup" + At + Dt,
      }),
      (kt = "disabled"),
      (Pt = "show"),
      (jt = "dropup"),
      (Ht = "dropright"),
      (Lt = "dropleft"),
      (Rt = "dropdown-menu-right"),
      (xt = "position-static"),
      (Wt = '[data-toggle="dropdown"]'),
      (Ut = ".dropdown form"),
      (qt = ".dropdown-menu"),
      (Ft = ".navbar-nav"),
      (Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Mt = "top-start"),
      (Qt = "top-end"),
      (Bt = "bottom-start"),
      (Vt = "bottom-end"),
      (Yt = "right-start"),
      (zt = "left-start"),
      (Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (Gt = (function () {
        function c(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = c.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
              var t = c._getParentFromElement(this._element),
                e = bt(this._menu).hasClass(Pt);
              if ((c._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = bt.Event(Ot.SHOW, n);
                if ((bt(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof h)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = t)
                      : Fn.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        bt(t).addClass(xt),
                      (this._popper = new h(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === bt(t).closest(Ft).length &&
                    bt(document.body).children().on("mouseover", null, bt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    bt(this._menu).toggleClass(Pt),
                    bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function () {
            bt.removeData(this._element, It),
              bt(this._element).off(At),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            bt(this._element).on(Ot.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                this.constructor.Default,
                bt(this._element).data(),
                t
              )),
              Fn.typeCheckConfig(St, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = c._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(qt));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = bt(this._element.parentNode),
              e = Bt;
            return (
              t.hasClass(jt)
                ? ((e = Mt), bt(this._menu).hasClass(Rt) && (e = Qt))
                : t.hasClass(Ht)
                ? (e = Yt)
                : t.hasClass(Lt)
                ? (e = zt)
                : bt(this._menu).hasClass(Rt) && (e = Vt),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < bt(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (c._jQueryInterface = function (e) {
            return this.each(function () {
              var t = bt(this).data(It);
              if (
                (t ||
                  ((t = new c(this, "object" == typeof e ? e : null)),
                  bt(this).data(It, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (c._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Wt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var r = c._getParentFromElement(e[n]),
                  o = bt(e[n]).data(It),
                  s = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (s.clickEvent = t), o)) {
                  var a = o._menu;
                  if (
                    bt(r).hasClass(Pt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      bt.contains(r, t.target)
                    )
                  ) {
                    var l = bt.Event(Ot.HIDE, s);
                    bt(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          bt(document.body)
                            .children()
                            .off("mouseover", null, bt.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        bt(a).removeClass(Pt),
                        bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (t) {
            var e,
              n = Fn.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (c._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        bt(t.target).closest(qt).length))
                  )
                : Nt.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !bt(this).hasClass(kt))
            ) {
              var e = c._getParentFromElement(this),
                n = bt(e).hasClass(Pt);
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = [].slice.call(e.querySelectorAll(Kt));
                if (0 !== i.length) {
                  var r = i.indexOf(t.target);
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === t.which) {
                  var o = e.querySelector(Wt);
                  bt(o).trigger("focus");
                }
                bt(this).trigger("click");
              }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Jt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Zt;
              },
            },
          ]),
          c
        );
      })()),
      bt(document)
        .on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler)
        .on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler)
        .on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus)
        .on(Ot.CLICK_DATA_API, Wt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Gt._jQueryInterface.call(bt(this), "toggle");
        })
        .on(Ot.CLICK_DATA_API, Ut, function (t) {
          t.stopPropagation();
        }),
      (bt.fn[St] = Gt._jQueryInterface),
      (bt.fn[St].Constructor = Gt),
      (bt.fn[St].noConflict = function () {
        return (bt.fn[St] = wt), Gt._jQueryInterface;
      }),
      Gt),
    Yn =
      ((Xt = "modal"),
      (ee = "." + (te = "bs.modal")),
      (ne = ($t = e).fn[Xt]),
      (ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (re = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (oe = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api",
      }),
      (se = "modal-scrollbar-measure"),
      (ae = "modal-backdrop"),
      (le = "modal-open"),
      (ce = "fade"),
      (he = "show"),
      (ue = ".modal-dialog"),
      (fe = '[data-toggle="modal"]'),
      (de = '[data-dismiss="modal"]'),
      (ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (_e = ".sticky-top"),
      (me = (function () {
        function r(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(ue)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = r.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
              var n = $t.Event(oe.SHOW, { relatedTarget: t });
              $t(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  $t(document.body).addClass(le),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
                    return e.hide(t);
                  }),
                  $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
                    $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
                      $t(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = $t.Event(oe.HIDE);
              if (
                ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = $t(this._element).hasClass(ce);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(document).off(oe.FOCUSIN),
                  $t(this._element).removeClass(he),
                  $t(this._element).off(oe.CLICK_DISMISS),
                  $t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = Fn.getTransitionDurationFromElement(this._element);
                  $t(this._element)
                    .one(Fn.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            $t.removeData(this._element, te),
              $t(window, document, this._element, this._backdrop).off(ee),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = l({}, ie, t)), Fn.typeCheckConfig(Xt, t, re), t;
          }),
          (t._showElement = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && Fn.reflow(this._element),
              $t(this._element).addClass(he),
              this._config.focus && this._enforceFocus();
            var i = $t.Event(oe.SHOWN, { relatedTarget: t }),
              r = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  $t(e._element).trigger(i);
              };
            if (n) {
              var o = Fn.getTransitionDurationFromElement(this._element);
              $t(this._dialog)
                .one(Fn.TRANSITION_END, r)
                .emulateTransitionEnd(o);
            } else r();
          }),
          (t._enforceFocus = function () {
            var e = this;
            $t(document)
              .off(oe.FOCUSIN)
              .on(oe.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === $t(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? $t(window).on(oe.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : $t(window).off(oe.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                $t(document.body).removeClass(le),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  $t(t._element).trigger(oe.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              ($t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ae),
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(oe.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && Fn.reflow(this._backdrop),
                $t(this._backdrop).addClass(he),
                !t)
              )
                return;
              if (!n) return void t();
              var i = Fn.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop)
                .one(Fn.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(he);
              var r = function () {
                e._removeBackdrop(), t && t();
              };
              if ($t(this._element).hasClass(ce)) {
                var o = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop)
                  .one(Fn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(document.querySelectorAll(ge)),
                e = [].slice.call(document.querySelectorAll(_e));
              $t(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = $t(e).css("padding-right");
                $t(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                $t(e).each(function (t, e) {
                  var n = e.style.marginRight,
                    i = $t(e).css("margin-right");
                  $t(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = $t(document.body).css("padding-right");
              $t(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(ge));
            $t(t).each(function (t, e) {
              var n = $t(e).data("padding-right");
              $t(e).removeData("padding-right"),
                (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            $t(e).each(function (t, e) {
              var n = $t(e).data("margin-right");
              "undefined" != typeof n &&
                $t(e).css("margin-right", n).removeData("margin-right");
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = se), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = $t(this).data(te),
                e = l(
                  {},
                  ie,
                  $t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new r(this, e)), $t(this).data(te, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ie;
              },
            },
          ]),
          r
        );
      })()),
      $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
        var e,
          n = this,
          i = Fn.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = $t(e).data(te)
          ? "toggle"
          : l({}, $t(e).data(), $t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var o = $t(e).one(oe.SHOW, function (t) {
          t.isDefaultPrevented() ||
            o.one(oe.HIDDEN, function () {
              $t(n).is(":visible") && n.focus();
            });
        });
        me._jQueryInterface.call($t(e), r, this);
      }),
      ($t.fn[Xt] = me._jQueryInterface),
      ($t.fn[Xt].Constructor = me),
      ($t.fn[Xt].noConflict = function () {
        return ($t.fn[Xt] = ne), me._jQueryInterface;
      }),
      me),
    zn =
      ((ve = "tooltip"),
      (Ee = "." + (ye = "bs.tooltip")),
      (Ce = (pe = e).fn[ve]),
      (Te = "bs-tooltip"),
      (be = new RegExp("(^|\\s)" + Te + "\\S+", "g")),
      (Ae = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Ie = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Se = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (we = "out"),
      (Ne = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: (De = "show") + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee,
      }),
      (Oe = "fade"),
      (ke = "show"),
      (Pe = ".tooltip-inner"),
      (je = ".arrow"),
      (He = "hover"),
      (Le = "focus"),
      (Re = "click"),
      (xe = "manual"),
      (We = (function () {
        function i(t, e) {
          if ("undefined" == typeof h)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = pe(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  pe(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (pe(this.getTipElement()).hasClass(ke))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              pe.removeData(this.element, this.constructor.DATA_KEY),
              pe(this.element).off(this.constructor.EVENT_KEY),
              pe(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && pe(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === pe(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = pe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              pe(this.element).trigger(t);
              var n = pe.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = Fn.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && pe(i).addClass(Oe);
              var o =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(o);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : pe(document).find(this.config.container);
              pe(i).data(this.constructor.DATA_KEY, this),
                pe.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || pe(i).appendTo(a),
                pe(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new h(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: je },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t);
                  },
                })),
                pe(i).addClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().on("mouseover", null, pe.noop);
              var l = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  pe(e.element).trigger(e.constructor.Event.SHOWN),
                  t === we && e._leave(null, e);
              };
              if (pe(this.tip).hasClass(Oe)) {
                var c = Fn.getTransitionDurationFromElement(this.tip);
                pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c);
              } else l();
            }
          }),
          (t.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = pe.Event(this.constructor.Event.HIDE),
              r = function () {
                e._hoverState !== De &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  pe(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((pe(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (pe(n).removeClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().off("mouseover", null, pe.noop),
                (this._activeTrigger[Re] = !1),
                (this._activeTrigger[Le] = !1),
                (this._activeTrigger[He] = !1),
                pe(this.tip).hasClass(Oe))
              ) {
                var o = Fn.getTransitionDurationFromElement(n);
                pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
              } else r();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            pe(this.getTipElement()).addClass(Te + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || pe(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()),
              pe(t).removeClass(Oe + " " + ke);
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? pe(e).parent().is(t) || t.empty().append(e)
                : t.text(pe(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (t._getAttachment = function (t) {
            return Ie[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                pe(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== xe) {
                var e =
                    t === He
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === He
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                pe(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
              pe(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
              pe(e.getTipElement()).hasClass(ke) || e._hoverState === De
                ? (e._hoverState = De)
                : (clearTimeout(e._timeout),
                  (e._hoverState = De),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === De && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = we),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === we && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = l(
                  {},
                  this.constructor.Default,
                  pe(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = pe(this.getTipElement()),
              e = t.attr("class").match(be);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (pe(t).removeClass(Oe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = pe(this).data(ye),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), pe(this).data(ye, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ae;
              },
            },
            {
              key: "NAME",
              get: function () {
                return ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ye;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ne;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ee;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Se;
              },
            },
          ]),
          i
        );
      })()),
      (pe.fn[ve] = We._jQueryInterface),
      (pe.fn[ve].Constructor = We),
      (pe.fn[ve].noConflict = function () {
        return (pe.fn[ve] = Ce), We._jQueryInterface;
      }),
      We),
    Jn =
      ((qe = "popover"),
      (Ke = "." + (Fe = "bs.popover")),
      (Me = (Ue = e).fn[qe]),
      (Qe = "bs-popover"),
      (Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g")),
      (Ve = l({}, zn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Ye = l({}, zn.DefaultType, { content: "(string|element|function)" })),
      (ze = "fade"),
      (Ze = ".popover-header"),
      (Ge = ".popover-body"),
      ($e = {
        HIDE: "hide" + Ke,
        HIDDEN: "hidden" + Ke,
        SHOW: (Je = "show") + Ke,
        SHOWN: "shown" + Ke,
        INSERTED: "inserted" + Ke,
        CLICK: "click" + Ke,
        FOCUSIN: "focusin" + Ke,
        FOCUSOUT: "focusout" + Ke,
        MOUSEENTER: "mouseenter" + Ke,
        MOUSELEAVE: "mouseleave" + Ke,
      }),
      (Xe = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (t) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || Ue(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var t = Ue(this.getTipElement());
            this.setElementContent(t.find(Ze), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Ge), e),
              t.removeClass(ze + " " + Je);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var t = Ue(this.getTipElement()),
              e = t.attr("class").match(Be);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = Ue(this).data(Fe),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Ue(this).data(Fe, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ve;
              },
            },
            {
              key: "NAME",
              get: function () {
                return qe;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Fe;
              },
            },
            {
              key: "Event",
              get: function () {
                return $e;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ke;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ye;
              },
            },
          ]),
          i
        );
      })(zn)),
      (Ue.fn[qe] = Xe._jQueryInterface),
      (Ue.fn[qe].Constructor = Xe),
      (Ue.fn[qe].noConflict = function () {
        return (Ue.fn[qe] = Me), Xe._jQueryInterface;
      }),
      Xe),
    Zn =
      ((en = "scrollspy"),
      (rn = "." + (nn = "bs.scrollspy")),
      (on = (tn = e).fn[en]),
      (sn = { offset: 10, method: "auto", target: "" }),
      (an = { offset: "number", method: "string", target: "(string|element)" }),
      (ln = {
        ACTIVATE: "activate" + rn,
        SCROLL: "scroll" + rn,
        LOAD_DATA_API: "load" + rn + ".data-api",
      }),
      (cn = "dropdown-item"),
      (hn = "active"),
      (un = '[data-spy="scroll"]'),
      (fn = ".active"),
      (dn = ".nav, .list-group"),
      (gn = ".nav-link"),
      (_n = ".nav-item"),
      (mn = ".list-group-item"),
      (pn = ".dropdown"),
      (vn = ".dropdown-item"),
      (yn = ".dropdown-toggle"),
      (En = "offset"),
      (Cn = "position"),
      (Tn = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              gn +
              "," +
              this._config.target +
              " " +
              mn +
              "," +
              this._config.target +
              " " +
              vn),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            tn(this._scrollElement).on(ln.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? En : Cn,
              r = "auto" === this._config.method ? t : this._config.method,
              o = r === Cn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = Fn.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [tn(e)[r]().top + o, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            tn.removeData(this._element, nn),
              tn(this._scrollElement).off(rn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target
            ) {
              var e = tn(t.target).attr("id");
              e || ((e = Fn.getUID(en)), tn(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return Fn.typeCheckConfig(en, t, an), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  ("undefined" == typeof this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",");
            t = t.map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            });
            var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(cn)
              ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn))
              : (n.addClass(hn),
                n
                  .parents(dn)
                  .prev(gn + ", " + mn)
                  .addClass(hn),
                n.parents(dn).prev(_n).children(gn).addClass(hn)),
              tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (t._clear = function () {
            var t = [].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(fn).removeClass(hn);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = tn(this).data(nn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  tn(this).data(nn, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return sn;
              },
            },
          ]),
          n
        );
      })()),
      tn(window).on(ln.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(un)), e = t.length;
          e--;

        ) {
          var n = tn(t[e]);
          Tn._jQueryInterface.call(n, n.data());
        }
      }),
      (tn.fn[en] = Tn._jQueryInterface),
      (tn.fn[en].Constructor = Tn),
      (tn.fn[en].noConflict = function () {
        return (tn.fn[en] = on), Tn._jQueryInterface;
      }),
      Tn),
    Gn =
      ((In = "." + (Sn = "bs.tab")),
      (An = (bn = e).fn.tab),
      (Dn = {
        HIDE: "hide" + In,
        HIDDEN: "hidden" + In,
        SHOW: "show" + In,
        SHOWN: "shown" + In,
        CLICK_DATA_API: "click" + In + ".data-api",
      }),
      (wn = "dropdown-menu"),
      (Nn = "active"),
      (On = "disabled"),
      (kn = "fade"),
      (Pn = "show"),
      (jn = ".dropdown"),
      (Hn = ".nav, .list-group"),
      (Ln = ".active"),
      (Rn = "> li > .active"),
      (xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (Wn = ".dropdown-toggle"),
      (Un = "> .dropdown-menu .active"),
      (qn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  bn(this._element).hasClass(Nn)) ||
                bn(this._element).hasClass(On)
              )
            ) {
              var t,
                i,
                e = bn(this._element).closest(Hn)[0],
                r = Fn.getSelectorFromElement(this._element);
              if (e) {
                var o = "UL" === e.nodeName ? Rn : Ln;
                i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1];
              }
              var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }),
                a = bn.Event(Dn.SHOW, { relatedTarget: i });
              if (
                (i && bn(i).trigger(s),
                bn(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (t = document.querySelector(r)),
                  this._activate(this._element, e);
                var l = function () {
                  var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }),
                    e = bn.Event(Dn.SHOWN, { relatedTarget: i });
                  bn(i).trigger(t), bn(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            bn.removeData(this._element, Sn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              r = (
                "UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln)
              )[0],
              o = n && r && bn(r).hasClass(kn),
              s = function () {
                return i._transitionComplete(t, r, n);
              };
            if (r && o) {
              var a = Fn.getTransitionDurationFromElement(r);
              bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              bn(e).removeClass(Pn + " " + Nn);
              var i = bn(e.parentNode).find(Un)[0];
              i && bn(i).removeClass(Nn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (bn(t).addClass(Nn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Fn.reflow(t),
              bn(t).addClass(Pn),
              t.parentNode && bn(t.parentNode).hasClass(wn))
            ) {
              var r = bn(t).closest(jn)[0];
              if (r) {
                var o = [].slice.call(r.querySelectorAll(Wn));
                bn(o).addClass(Nn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = bn(this),
                e = t.data(Sn);
              if (
                (e || ((e = new i(this)), t.data(Sn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
        t.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
      }),
      (bn.fn.tab = qn._jQueryInterface),
      (bn.fn.tab.Constructor = qn),
      (bn.fn.tab.noConflict = function () {
        return (bn.fn.tab = An), qn._jQueryInterface;
      }),
      qn);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = Fn),
    (t.Alert = Kn),
    (t.Button = Mn),
    (t.Carousel = Qn),
    (t.Collapse = Bn),
    (t.Dropdown = Vn),
    (t.Modal = Yn),
    (t.Popover = Jn),
    (t.Scrollspy = Zn),
    (t.Tab = Gn),
    (t.Tooltip = zn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 */ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
      return window.document.body;
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) &&
        "static" === t(o, "position")
        ? r(o)
        : o
      : window.document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType)
      return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var f = a.commonAncestorContainer;
    if ((e !== f && t !== f) || i.contains(n)) return p(f) ? f : r(f);
    var l = s(e);
    return l.host ? d(l.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var n = window.document.documentElement,
        r = window.document.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, "top"),
      n = a(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += i * r),
      (e.bottom += i * r),
      (e.left += n * r),
      (e.right += n * r),
      e
    );
  }
  function l(e, t) {
    var o = "x" === t ? "Left" : "Top",
      i = "Left" == o ? "Right" : "Bottom";
    return (
      +e["border" + o + "Width"].split("px")[0] +
      +e["border" + i + "Width"].split("px")[0]
    );
  }
  function m(e, t, o, i) {
    return _(
      t["offset" + e],
      o["client" + e],
      o["offset" + e],
      ie()
        ? o["offset" + e] +
            i["margin" + ("Height" === e ? "Top" : "Left")] +
            i["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function h() {
    var e = window.document.body,
      t = window.document.documentElement,
      o = ie() && window.getComputedStyle(t);
    return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
  }
  function c(e) {
    return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function g(e) {
    var o = {};
    if (ie())
      try {
        o = e.getBoundingClientRect();
        var i = a(e, "top"),
          n = a(e, "left");
        (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
      } catch (e) {}
    else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      p = "HTML" === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      f = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (f || m) {
      var g = t(e);
      (f -= l(g, "x")), (m -= l(g, "y")), (r.width -= f), (r.height -= m);
    }
    return c(r);
  }
  function u(e, o) {
    var i = ie(),
      r = "HTML" === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      l = +a.borderTopWidth.split("px")[0],
      m = +a.borderLeftWidth.split("px")[0],
      h = c({
        top: p.top - s.top - l,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height,
      });
    if (((h.marginTop = 0), (h.marginLeft = 0), !i && r)) {
      var u = +a.marginTop.split("px")[0],
        b = +a.marginLeft.split("px")[0];
      (h.top -= l - u),
        (h.bottom -= l - u),
        (h.left -= m - b),
        (h.right -= m - b),
        (h.marginTop = u),
        (h.marginLeft = b);
    }
    return (
      (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (h = f(h, o)), h
    );
  }
  function b(e) {
    var t = window.document.documentElement,
      o = u(e, t),
      i = _(t.clientWidth, window.innerWidth || 0),
      n = _(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, "left"),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n,
      };
    return c(s);
  }
  function y(e) {
    var i = e.nodeName;
    return "BODY" === i || "HTML" === i
      ? !1
      : "fixed" === t(e, "position") || y(o(e));
  }
  function w(e, t, i, r) {
    var p = { top: 0, left: 0 },
      s = d(e, t);
    if ("viewport" === r) p = b(s);
    else {
      var a;
      "scrollParent" === r
        ? ((a = n(o(e))),
          "BODY" === a.nodeName && (a = window.document.documentElement))
        : "window" === r
        ? (a = window.document.documentElement)
        : (a = r);
      var f = u(a, s);
      if ("HTML" === a.nodeName && !y(s)) {
        var l = h(),
          m = l.height,
          c = l.width;
        (p.top += f.top - f.marginTop),
          (p.bottom = m + f.top),
          (p.left += f.left - f.marginLeft),
          (p.right = c + f.left);
      } else p = f;
    }
    return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
  }
  function v(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function E(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = w(o, i, r, n),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return se({ key: e }, s[e], { area: v(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      f = 0 < a.length ? a[0].key : d[0].key,
      l = e.split("-")[1];
    return f + (l ? "-" + l : "");
  }
  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function O(e) {
    var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
    return n;
  }
  function L(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split("-")[0];
    var i = O(e),
      n = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (n[p] = t[p] + t[d] / 2 - i[d] / 2),
      (n[s] = o === s ? t[s] - i[a] : t[L(s)]),
      n
    );
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, "name", i));
    return (
      n.forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var i = t.function || t.fn;
        t.enabled &&
          e(i) &&
          ((o.offsets.popper = c(o.offsets.popper)),
          (o.offsets.reference = c(o.offsets.reference)),
          (o = i(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = x(this.state, this.popper, this.reference)),
        (e.placement = E(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = "absolute"),
        (e = N(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function B(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length - 1;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof window.document.body.style[r]) return r;
    }
    return null;
  }
  function D() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.left = ""),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style[B("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function H(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? window : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || H(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function P(e, t, o, i) {
    (o.updateBound = i),
      window.addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      H(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function A() {
    this.state.eventsEnabled ||
      (this.state = P(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function M(e, t) {
    return (
      window.removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function I() {
    this.state.eventsEnabled &&
      (window.cancelAnimationFrame(this.scheduleUpdate),
      (this.state = M(this.reference, this.state)));
  }
  function R(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        R(t[o]) &&
        (i = "px"),
        (e.style[o] = t[o] + i);
    });
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n =
        !!i &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < i.order;
        });
    if (!n) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return n;
  }
  function j(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ae.indexOf(e),
      i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i;
  }
  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = i;
      }
      var d = c(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? _(document.documentElement.clientHeight, window.innerHeight || 0)
            : _(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function G(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        T(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, i) {
        var n = (1 === i ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return q(e, n, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, i) {
          R(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
        });
      }),
      n
    );
  }
  for (
    var z = Math.min,
      V = Math.floor,
      _ = Math.max,
      X = ["native code", "[object MutationObserverConstructor]"],
      Q = function (e) {
        return X.some(function (t) {
          return -1 < (e || "").toString().indexOf(t);
        });
      },
      J = "undefined" != typeof window,
      Z = ["Edge", "Trident", "Firefox"],
      $ = 0,
      ee = 0;
    ee < Z.length;
    ee += 1
  )
    if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break;
    }
  var i,
    te = J && Q(window.MutationObserver),
    oe = te
      ? function (e) {
          var t = !1,
            o = 0,
            i = document.createElement("span"),
            n = new MutationObserver(function () {
              e(), (t = !1);
            });
          return (
            n.observe(i, { attributes: !0 }),
            function () {
              t || ((t = !0), i.setAttribute("x-index", o), ++o);
            }
          );
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, $));
          };
        },
    ie = function () {
      return (
        void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i
      );
    },
    ne = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    re = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    })(),
    pe = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    se =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var i in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
    de = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    ae = de.slice(3),
    fe = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    le = (function () {
      function t(o, i) {
        var n = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ne(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = oe(this.update.bind(this))),
          (this.options = se({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o.jquery ? o[0] : o),
          (this.popper = i.jquery ? i[0] : i),
          (this.options.modifiers = {}),
          Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              n.options.modifiers[e] = se(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return se({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        re(t, [
          {
            key: "update",
            value: function () {
              return k.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return D.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return A.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return I.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (le.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (le.placements = de),
    (le.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                f = {
                  start: pe({}, d, r[d]),
                  end: pe({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = se({}, p, f[i]);
            }
            return e;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (e, t) {
            var o,
              i = t.offset,
              n = e.placement,
              r = e.offsets,
              p = r.popper,
              s = r.reference,
              d = n.split("-")[0];
            return (
              (o = R(+i) ? [+i, 0] : G(i, p, s, d)),
              "left" === d
                ? ((p.top += o[0]), (p.left -= o[1]))
                : "right" === d
                ? ((p.top += o[0]), (p.left += o[1]))
                : "top" === d
                ? ((p.left += o[0]), (p.top -= o[1]))
                : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
              (e.popper = p),
              e
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || r(e.instance.popper);
            e.instance.reference === o && (o = r(o));
            var i = w(e.instance.popper, e.instance.reference, t.padding, o);
            t.boundaries = i;
            var n = t.priority,
              p = e.offsets.popper,
              s = {
                primary: function (e) {
                  var o = p[e];
                  return (
                    p[e] < i[e] &&
                      !t.escapeWithReference &&
                      (o = _(p[e], i[e])),
                    pe({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = p[o];
                  return (
                    p[e] > i[e] &&
                      !t.escapeWithReference &&
                      (n = z(
                        p[o],
                        i[e] - ("right" === e ? p.width : p.height)
                      )),
                    pe({}, o, n)
                  );
                },
              };
            return (
              n.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                p = se({}, p, s[t](e));
              }),
              (e.offsets.popper = p),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split("-")[0],
              r = V,
              p = -1 !== ["top", "bottom"].indexOf(n),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
              o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, t) {
            if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var o = t.element;
            if ("string" == typeof o) {
              if (((o = e.instance.popper.querySelector(o)), !o)) return e;
            } else if (!e.instance.popper.contains(o))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var i = e.placement.split("-")[0],
              n = e.offsets,
              r = n.popper,
              p = n.reference,
              s = -1 !== ["left", "right"].indexOf(i),
              d = s ? "height" : "width",
              a = s ? "top" : "left",
              f = s ? "left" : "top",
              l = s ? "bottom" : "right",
              m = O(o)[d];
            p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)),
              p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
            var h = p[a] + p[d] / 2 - m / 2,
              g = h - c(e.offsets.popper)[a];
            return (
              (g = _(z(r[d] - m, g), 0)),
              (e.arrowElement = o),
              (e.offsets.arrow = {}),
              (e.offsets.arrow[a] = Math.round(g)),
              (e.offsets.arrow[f] = ""),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (W(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = w(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement
              ),
              i = e.placement.split("-")[0],
              n = L(i),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case fe.FLIP:
                p = [i, n];
                break;
              case fe.CLOCKWISE:
                p = K(i);
                break;
              case fe.COUNTERCLOCKWISE:
                p = K(i, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (i !== s || p.length === d + 1) return e;
                (i = e.placement.split("-")[0]), (n = L(i));
                var a = e.offsets.popper,
                  f = e.offsets.reference,
                  l = V,
                  m =
                    ("left" === i && l(a.right) > l(f.left)) ||
                    ("right" === i && l(a.left) < l(f.right)) ||
                    ("top" === i && l(a.bottom) > l(f.top)) ||
                    ("bottom" === i && l(a.top) < l(f.bottom)),
                  h = l(a.left) < l(o.left),
                  c = l(a.right) > l(o.right),
                  g = l(a.top) < l(o.top),
                  u = l(a.bottom) > l(o.bottom),
                  b =
                    ("left" === i && h) ||
                    ("right" === i && c) ||
                    ("top" === i && g) ||
                    ("bottom" === i && u),
                  y = -1 !== ["top", "bottom"].indexOf(i),
                  w =
                    !!t.flipVariations &&
                    ((y && "start" === r && h) ||
                      (y && "end" === r && c) ||
                      (!y && "start" === r && g) ||
                      (!y && "end" === r && u));
                (m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (i = p[d + 1]),
                  w && (r = j(r)),
                  (e.placement = i + (r ? "-" + r : "")),
                  (e.offsets.popper = se(
                    {},
                    e.offsets.popper,
                    S(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = N(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (n[p ? "left" : "top"] =
                r[t] - (s ? n[p ? "width" : "height"] : 0)),
              (e.placement = L(t)),
              (e.offsets.popper = c(n)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== p &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              f = r(e.instance.popper),
              l = g(f),
              m = { position: n.position },
              h = {
                left: V(n.left),
                top: V(n.top),
                bottom: V(n.bottom),
                right: V(n.right),
              },
              c = "bottom" === o ? "top" : "bottom",
              u = "right" === i ? "left" : "right",
              b = B("transform");
            if (
              ((d = "bottom" == c ? -l.height + h.bottom : h.top),
              (s = "right" == u ? -l.width + h.right : h.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[c] = 0),
                (m[u] = 0),
                (m.willChange = "transform");
            else {
              var y = "bottom" == c ? -1 : 1,
                w = "right" == u ? -1 : 1;
              (m[c] = d * y), (m[u] = s * w), (m.willChange = c + ", " + u);
            }
            var v = { "x-placement": e.placement };
            return (
              (e.attributes = se({}, v, e.attributes)),
              (e.styles = se({}, m, e.styles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              U(e.instance.popper, e.styles),
              Y(e.instance.popper, e.attributes),
              e.offsets.arrow && U(e.arrowElement, e.offsets.arrow),
              e
            );
          },
          onLoad: function (e, t, o, i, n) {
            var r = x(n, t, e),
              p = E(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              U(t, { position: "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    le
  );
});

/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"),
        "left" === u && (w = "left:" + m + ";right:auto;"),
        x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul").hide(),
              h
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              "</a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass("meanclose").html(s);
                  }
                );
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            a > o,
            W(),
            o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), o >= a ? E === !1 && b() : W())
              : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.PerfectScrollbar = e());
})(this, function () {
  "use strict";
  function t(t) {
    return getComputedStyle(t);
  }
  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), (t.style[i] = r);
    }
    return t;
  }
  function i(t) {
    var e = document.createElement("div");
    return (e.className = t), e;
  }
  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }
  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }
  function n(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return r(t, e);
    });
  }
  function o(t, e) {
    var i = t.element.classList,
      r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
  }
  function s(t, e) {
    Y[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }
  function a(t, e) {
    o(t, e), s(t, e);
  }
  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }
  function h(t, e, i, r, l) {
    var n = i[0],
      o = i[1],
      s = i[2],
      h = i[3],
      u = i[4],
      d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    (t.reach[h] = null),
      f[s] < 1 && (t.reach[h] = "start"),
      f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
      e &&
        (f.dispatchEvent(c("ps-scroll-" + h)),
        e < 0
          ? f.dispatchEvent(c("ps-scroll-" + u))
          : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)),
        r && a(t, h)),
      t.reach[h] &&
        (e || l) &&
        f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }
  function u(t) {
    return parseInt(t, 10) || 0;
  }
  function d(t) {
    return (
      r(t, "input,[contenteditable]") ||
      r(t, "select,[contenteditable]") ||
      r(t, "textarea,[contenteditable]") ||
      r(t, "button,[contenteditable]")
    );
  }
  function f(e) {
    var i = t(e);
    return (
      u(i.width) +
      u(i.paddingLeft) +
      u(i.paddingRight) +
      u(i.borderLeftWidth) +
      u(i.borderRightWidth)
    );
  }
  function p(t, e) {
    return (
      t.settings.minScrollbarLength &&
        (e = Math.max(e, t.settings.minScrollbarLength)),
      t.settings.maxScrollbarLength &&
        (e = Math.min(e, t.settings.maxScrollbarLength)),
      e
    );
  }
  function b(t, i) {
    var r = { width: i.railXWidth },
      l = Math.floor(t.scrollTop);
    i.isRtl
      ? (r.left =
          i.negativeScrollAdjustment +
          t.scrollLeft +
          i.containerWidth -
          i.contentWidth)
      : (r.left = t.scrollLeft),
      i.isScrollbarXUsingBottom
        ? (r.bottom = i.scrollbarXBottom - l)
        : (r.top = i.scrollbarXTop + l),
      e(i.scrollbarXRail, r);
    var n = { top: l, height: i.railYHeight };
    i.isScrollbarYUsingRight
      ? i.isRtl
        ? (n.right =
            i.contentWidth -
            (i.negativeScrollAdjustment + t.scrollLeft) -
            i.scrollbarYRight -
            i.scrollbarYOuterWidth)
        : (n.right = i.scrollbarYRight - t.scrollLeft)
      : i.isRtl
      ? (n.left =
          i.negativeScrollAdjustment +
          t.scrollLeft +
          2 * i.containerWidth -
          i.contentWidth -
          i.scrollbarYLeft -
          i.scrollbarYOuterWidth)
      : (n.left = i.scrollbarYLeft + t.scrollLeft),
      e(i.scrollbarYRail, n),
      e(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth,
      }),
      e(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth,
      });
  }
  function g(t, e) {
    function i(e) {
      (b[d] = g + Y * (e[a] - v)),
        o(t, f),
        R(t),
        e.stopPropagation(),
        e.preventDefault();
    }
    function r() {
      s(t, f),
        t[p].classList.remove(m.state.clicking),
        t.event.unbind(t.ownerDocument, "mousemove", i);
    }
    var l = e[0],
      n = e[1],
      a = e[2],
      c = e[3],
      h = e[4],
      u = e[5],
      d = e[6],
      f = e[7],
      p = e[8],
      b = t.element,
      g = null,
      v = null,
      Y = null;
    t.event.bind(t[h], "mousedown", function (e) {
      (g = b[d]),
        (v = e[a]),
        (Y = (t[n] - t[l]) / (t[c] - t[u])),
        t.event.bind(t.ownerDocument, "mousemove", i),
        t.event.once(t.ownerDocument, "mouseup", r),
        t[p].classList.add(m.state.clicking),
        e.stopPropagation(),
        e.preventDefault();
    });
  }
  var v =
      "undefined" != typeof Element &&
      (Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector),
    m = {
      main: "ps",
      element: {
        thumb: function (t) {
          return "ps__thumb-" + t;
        },
        rail: function (t) {
          return "ps__rail-" + t;
        },
        consuming: "ps__child--consume",
      },
      state: {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function (t) {
          return "ps--active-" + t;
        },
        scrolling: function (t) {
          return "ps--scrolling-" + t;
        },
      },
    },
    Y = { x: null, y: null },
    X = function (t) {
      (this.element = t), (this.handlers = {});
    },
    w = { isEmpty: { configurable: !0 } };
  (X.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []),
      this.handlers[t].push(e),
      this.element.addEventListener(t, e, !1);
  }),
    (X.prototype.unbind = function (t, e) {
      var i = this;
      this.handlers[t] = this.handlers[t].filter(function (r) {
        return (
          !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1)
        );
      });
    }),
    (X.prototype.unbindAll = function () {
      var t = this;
      for (var e in t.handlers) t.unbind(e);
    }),
    (w.isEmpty.get = function () {
      var t = this;
      return Object.keys(this.handlers).every(function (e) {
        return 0 === t.handlers[e].length;
      });
    }),
    Object.defineProperties(X.prototype, w);
  var y = function () {
    this.eventElements = [];
  };
  (y.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || ((e = new X(t)), this.eventElements.push(e)), e;
  }),
    (y.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }),
    (y.prototype.unbind = function (t, e, i) {
      var r = this.eventElement(t);
      r.unbind(e, i),
        r.isEmpty &&
          this.eventElements.splice(this.eventElements.indexOf(r), 1);
    }),
    (y.prototype.unbindAll = function () {
      this.eventElements.forEach(function (t) {
        return t.unbindAll();
      }),
        (this.eventElements = []);
    }),
    (y.prototype.once = function (t, e, i) {
      var r = this.eventElement(t),
        l = function (t) {
          r.unbind(e, l), i(t);
        };
      r.bind(e, l);
    });
  var W = function (t, e, i, r, l) {
      void 0 === r && (r = !0), void 0 === l && (l = !1);
      var n;
      if ("top" === e)
        n = [
          "contentHeight",
          "containerHeight",
          "scrollTop",
          "y",
          "up",
          "down",
        ];
      else {
        if ("left" !== e) throw new Error("A proper axis should be provided");
        n = [
          "contentWidth",
          "containerWidth",
          "scrollLeft",
          "x",
          "left",
          "right",
        ];
      }
      h(t, i, n, r, l);
    },
    L = {
      isWebKit:
        "undefined" != typeof document &&
        "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        "undefined" != typeof window &&
        ("ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer:
        "undefined" != typeof navigator && navigator.msMaxTouchPoints,
      isChrome:
        "undefined" != typeof navigator &&
        /Chrome/i.test(navigator && navigator.userAgent),
    },
    R = function (t) {
      var e = t.element,
        i = Math.floor(e.scrollTop);
      (t.containerWidth = e.clientWidth),
        (t.containerHeight = e.clientHeight),
        (t.contentWidth = e.scrollWidth),
        (t.contentHeight = e.scrollHeight),
        e.contains(t.scrollbarXRail) ||
          (n(e, m.element.rail("x")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarXRail)),
        e.contains(t.scrollbarYRail) ||
          (n(e, m.element.rail("y")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX &&
        t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
          ? ((t.scrollbarXActive = !0),
            (t.railXWidth = t.containerWidth - t.railXMarginWidth),
            (t.railXRatio = t.containerWidth / t.railXWidth),
            (t.scrollbarXWidth = p(
              t,
              u((t.railXWidth * t.containerWidth) / t.contentWidth)
            )),
            (t.scrollbarXLeft = u(
              ((t.negativeScrollAdjustment + e.scrollLeft) *
                (t.railXWidth - t.scrollbarXWidth)) /
                (t.contentWidth - t.containerWidth)
            )))
          : (t.scrollbarXActive = !1),
        !t.settings.suppressScrollY &&
        t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
          ? ((t.scrollbarYActive = !0),
            (t.railYHeight = t.containerHeight - t.railYMarginHeight),
            (t.railYRatio = t.containerHeight / t.railYHeight),
            (t.scrollbarYHeight = p(
              t,
              u((t.railYHeight * t.containerHeight) / t.contentHeight)
            )),
            (t.scrollbarYTop = u(
              (i * (t.railYHeight - t.scrollbarYHeight)) /
                (t.contentHeight - t.containerHeight)
            )))
          : (t.scrollbarYActive = !1),
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
          (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
          (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        b(e, t),
        t.scrollbarXActive
          ? e.classList.add(m.state.active("x"))
          : (e.classList.remove(m.state.active("x")),
            (t.scrollbarXWidth = 0),
            (t.scrollbarXLeft = 0),
            (e.scrollLeft = 0)),
        t.scrollbarYActive
          ? e.classList.add(m.state.active("y"))
          : (e.classList.remove(m.state.active("y")),
            (t.scrollbarYHeight = 0),
            (t.scrollbarYTop = 0),
            (e.scrollTop = 0));
    },
    T = {
      "click-rail": function (t) {
        t.event.bind(t.scrollbarY, "mousedown", function (t) {
          return t.stopPropagation();
        }),
          t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
            var i =
              e.pageY -
                window.pageYOffset -
                t.scrollbarYRail.getBoundingClientRect().top >
              t.scrollbarYTop
                ? 1
                : -1;
            (t.element.scrollTop += i * t.containerHeight),
              R(t),
              e.stopPropagation();
          }),
          t.event.bind(t.scrollbarX, "mousedown", function (t) {
            return t.stopPropagation();
          }),
          t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
            var i =
              e.pageX -
                window.pageXOffset -
                t.scrollbarXRail.getBoundingClientRect().left >
              t.scrollbarXLeft
                ? 1
                : -1;
            (t.element.scrollLeft += i * t.containerWidth),
              R(t),
              e.stopPropagation();
          });
      },
      "drag-thumb": function (t) {
        g(t, [
          "containerWidth",
          "contentWidth",
          "pageX",
          "railXWidth",
          "scrollbarX",
          "scrollbarXWidth",
          "scrollLeft",
          "x",
          "scrollbarXRail",
        ]),
          g(t, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail",
          ]);
      },
      keyboard: function (t) {
        function e(e, r) {
          var l = Math.floor(i.scrollTop);
          if (0 === e) {
            if (!t.scrollbarYActive) return !1;
            if (
              (0 === l && r > 0) ||
              (l >= t.contentHeight - t.containerHeight && r < 0)
            )
              return !t.settings.wheelPropagation;
          }
          var n = i.scrollLeft;
          if (0 === r) {
            if (!t.scrollbarXActive) return !1;
            if (
              (0 === n && e < 0) ||
              (n >= t.contentWidth - t.containerWidth && e > 0)
            )
              return !t.settings.wheelPropagation;
          }
          return !0;
        }
        var i = t.element,
          l = function () {
            return r(i, ":hover");
          },
          n = function () {
            return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
          };
        t.event.bind(t.ownerDocument, "keydown", function (r) {
          if (
            !(
              (r.isDefaultPrevented && r.isDefaultPrevented()) ||
              r.defaultPrevented
            ) &&
            (l() || n())
          ) {
            var o = document.activeElement
              ? document.activeElement
              : t.ownerDocument.activeElement;
            if (o) {
              if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
              else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
              if (d(o)) return;
            }
            var s = 0,
              a = 0;
            switch (r.which) {
              case 37:
                s = r.metaKey
                  ? -t.contentWidth
                  : r.altKey
                  ? -t.containerWidth
                  : -30;
                break;
              case 38:
                a = r.metaKey
                  ? t.contentHeight
                  : r.altKey
                  ? t.containerHeight
                  : 30;
                break;
              case 39:
                s = r.metaKey
                  ? t.contentWidth
                  : r.altKey
                  ? t.containerWidth
                  : 30;
                break;
              case 40:
                a = r.metaKey
                  ? -t.contentHeight
                  : r.altKey
                  ? -t.containerHeight
                  : -30;
                break;
              case 32:
                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                break;
              case 33:
                a = t.containerHeight;
                break;
              case 34:
                a = -t.containerHeight;
                break;
              case 36:
                a = t.contentHeight;
                break;
              case 35:
                a = -t.contentHeight;
                break;
              default:
                return;
            }
            (t.settings.suppressScrollX && 0 !== s) ||
              (t.settings.suppressScrollY && 0 !== a) ||
              ((i.scrollTop -= a),
              (i.scrollLeft += s),
              R(t),
              e(s, a) && r.preventDefault());
          }
        });
      },
      wheel: function (e) {
        function i(t, i) {
          var r = Math.floor(o.scrollTop),
            l = 0 === o.scrollTop,
            n = r + o.offsetHeight === o.scrollHeight,
            s = 0 === o.scrollLeft,
            a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
          return (
            !(Math.abs(i) > Math.abs(t) ? l || n : s || a) ||
            !e.settings.wheelPropagation
          );
        }
        function r(t) {
          var e = t.deltaX,
            i = -1 * t.deltaY;
          return (
            (void 0 !== e && void 0 !== i) ||
              ((e = (-1 * t.wheelDeltaX) / 6), (i = t.wheelDeltaY / 6)),
            t.deltaMode && 1 === t.deltaMode && ((e *= 10), (i *= 10)),
            e !== e && i !== i && ((e = 0), (i = t.wheelDelta)),
            t.shiftKey ? [-i, -e] : [e, i]
          );
        }
        function l(e, i, r) {
          if (!L.isWebKit && o.querySelector("select:focus")) return !0;
          if (!o.contains(e)) return !1;
          for (var l = e; l && l !== o; ) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if (
              [n.overflow, n.overflowX, n.overflowY]
                .join("")
                .match(/(scroll|auto)/)
            ) {
              var s = l.scrollHeight - l.clientHeight;
              if (
                s > 0 &&
                !((0 === l.scrollTop && r > 0) || (l.scrollTop === s && r < 0))
              )
                return !0;
              var a = l.scrollWidth - l.clientWidth;
              if (
                a > 0 &&
                !(
                  (0 === l.scrollLeft && i < 0) ||
                  (l.scrollLeft === a && i > 0)
                )
              )
                return !0;
            }
            l = l.parentNode;
          }
          return !1;
        }
        function n(t) {
          var n = r(t),
            s = n[0],
            a = n[1];
          if (!l(t.target, s, a)) {
            var c = !1;
            e.settings.useBothWheelAxes
              ? e.scrollbarYActive && !e.scrollbarXActive
                ? (a
                    ? (o.scrollTop -= a * e.settings.wheelSpeed)
                    : (o.scrollTop += s * e.settings.wheelSpeed),
                  (c = !0))
                : e.scrollbarXActive &&
                  !e.scrollbarYActive &&
                  (s
                    ? (o.scrollLeft += s * e.settings.wheelSpeed)
                    : (o.scrollLeft -= a * e.settings.wheelSpeed),
                  (c = !0))
              : ((o.scrollTop -= a * e.settings.wheelSpeed),
                (o.scrollLeft += s * e.settings.wheelSpeed)),
              R(e),
              (c = c || i(s, a)) &&
                !t.ctrlKey &&
                (t.stopPropagation(), t.preventDefault());
          }
        }
        var o = e.element;
        void 0 !== window.onwheel
          ? e.event.bind(o, "wheel", n)
          : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
      },
      touch: function (e) {
        function i(t, i) {
          var r = Math.floor(h.scrollTop),
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);
          if (o > n) {
            if (
              (i < 0 && r === e.contentHeight - e.containerHeight) ||
              (i > 0 && 0 === r)
            )
              return 0 === window.scrollY && i > 0 && L.isChrome;
          } else if (
            n > o &&
            ((t < 0 && l === e.contentWidth - e.containerWidth) ||
              (t > 0 && 0 === l))
          )
            return !0;
          return !0;
        }
        function r(t, i) {
          (h.scrollTop -= i), (h.scrollLeft -= t), R(e);
        }
        function l(t) {
          return t.targetTouches ? t.targetTouches[0] : t;
        }
        function n(t) {
          return !(
            (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
            ((!t.targetTouches || 1 !== t.targetTouches.length) &&
              (!t.pointerType ||
                "mouse" === t.pointerType ||
                t.pointerType === t.MSPOINTER_TYPE_MOUSE))
          );
        }
        function o(t) {
          if (n(t)) {
            var e = l(t);
            (u.pageX = e.pageX),
              (u.pageY = e.pageY),
              (d = new Date().getTime()),
              null !== p && clearInterval(p);
          }
        }
        function s(e, i, r) {
          if (!h.contains(e)) return !1;
          for (var l = e; l && l !== h; ) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if (
              [n.overflow, n.overflowX, n.overflowY]
                .join("")
                .match(/(scroll|auto)/)
            ) {
              var o = l.scrollHeight - l.clientHeight;
              if (
                o > 0 &&
                !((0 === l.scrollTop && r > 0) || (l.scrollTop === o && r < 0))
              )
                return !0;
              var s = l.scrollLeft - l.clientWidth;
              if (
                s > 0 &&
                !(
                  (0 === l.scrollLeft && i < 0) ||
                  (l.scrollLeft === s && i > 0)
                )
              )
                return !0;
            }
            l = l.parentNode;
          }
          return !1;
        }
        function a(t) {
          if (n(t)) {
            var e = l(t),
              o = { pageX: e.pageX, pageY: e.pageY },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
            if (s(t.target, a, c)) return;
            r(a, c), (u = o);
            var h = new Date().getTime(),
              p = h - d;
            p > 0 && ((f.x = a / p), (f.y = c / p), (d = h)),
              i(a, c) && t.preventDefault();
          }
        }
        function c() {
          e.settings.swipeEasing &&
            (clearInterval(p),
            (p = setInterval(function () {
              e.isInitialized
                ? clearInterval(p)
                : f.x || f.y
                ? Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01
                  ? clearInterval(p)
                  : (r(30 * f.x, 30 * f.y), (f.x *= 0.8), (f.y *= 0.8))
                : clearInterval(p);
            }, 10)));
        }
        if (L.supportsTouch || L.supportsIePointer) {
          var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
          L.supportsTouch
            ? (e.event.bind(h, "touchstart", o),
              e.event.bind(h, "touchmove", a),
              e.event.bind(h, "touchend", c))
            : L.supportsIePointer &&
              (window.PointerEvent
                ? (e.event.bind(h, "pointerdown", o),
                  e.event.bind(h, "pointermove", a),
                  e.event.bind(h, "pointerup", c))
                : window.MSPointerEvent &&
                  (e.event.bind(h, "MSPointerDown", o),
                  e.event.bind(h, "MSPointerMove", a),
                  e.event.bind(h, "MSPointerUp", c)));
        }
      },
    },
    H = function (r, l) {
      var n = this;
      if (
        (void 0 === l && (l = {}),
        "string" == typeof r && (r = document.querySelector(r)),
        !r || !r.nodeName)
      )
        throw new Error(
          "no element is specified to initialize PerfectScrollbar"
        );
      (this.element = r),
        r.classList.add(m.main),
        (this.settings = {
          handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1e3,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipeEasing: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !0,
          wheelSpeed: 1,
        });
      for (var o in l) n.settings[o] = l[o];
      (this.containerWidth = null),
        (this.containerHeight = null),
        (this.contentWidth = null),
        (this.contentHeight = null);
      var s = function () {
          return r.classList.add(m.state.focus);
        },
        a = function () {
          return r.classList.remove(m.state.focus);
        };
      (this.isRtl = "rtl" === t(r).direction),
        (this.isNegativeScroll = (function () {
          var t = r.scrollLeft,
            e = null;
          return (
            (r.scrollLeft = -1), (e = r.scrollLeft < 0), (r.scrollLeft = t), e
          );
        })()),
        (this.negativeScrollAdjustment = this.isNegativeScroll
          ? r.scrollWidth - r.clientWidth
          : 0),
        (this.event = new y()),
        (this.ownerDocument = r.ownerDocument || document),
        (this.scrollbarXRail = i(m.element.rail("x"))),
        r.appendChild(this.scrollbarXRail),
        (this.scrollbarX = i(m.element.thumb("x"))),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", s),
        this.event.bind(this.scrollbarX, "blur", a),
        (this.scrollbarXActive = null),
        (this.scrollbarXWidth = null),
        (this.scrollbarXLeft = null);
      var c = t(this.scrollbarXRail);
      (this.scrollbarXBottom = parseInt(c.bottom, 10)),
        isNaN(this.scrollbarXBottom)
          ? ((this.isScrollbarXUsingBottom = !1),
            (this.scrollbarXTop = u(c.top)))
          : (this.isScrollbarXUsingBottom = !0),
        (this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth)),
        e(this.scrollbarXRail, { display: "block" }),
        (this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight)),
        e(this.scrollbarXRail, { display: "" }),
        (this.railXWidth = null),
        (this.railXRatio = null),
        (this.scrollbarYRail = i(m.element.rail("y"))),
        r.appendChild(this.scrollbarYRail),
        (this.scrollbarY = i(m.element.thumb("y"))),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", s),
        this.event.bind(this.scrollbarY, "blur", a),
        (this.scrollbarYActive = null),
        (this.scrollbarYHeight = null),
        (this.scrollbarYTop = null);
      var h = t(this.scrollbarYRail);
      (this.scrollbarYRight = parseInt(h.right, 10)),
        isNaN(this.scrollbarYRight)
          ? ((this.isScrollbarYUsingRight = !1),
            (this.scrollbarYLeft = u(h.left)))
          : (this.isScrollbarYUsingRight = !0),
        (this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null),
        (this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth)),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom)),
        e(this.scrollbarYRail, { display: "" }),
        (this.railYHeight = null),
        (this.railYRatio = null),
        (this.reach = {
          x:
            r.scrollLeft <= 0
              ? "start"
              : r.scrollLeft >= this.contentWidth - this.containerWidth
              ? "end"
              : null,
          y:
            r.scrollTop <= 0
              ? "start"
              : r.scrollTop >= this.contentHeight - this.containerHeight
              ? "end"
              : null,
        }),
        (this.isAlive = !0),
        this.settings.handlers.forEach(function (t) {
          return T[t](n);
        }),
        (this.lastScrollTop = Math.floor(r.scrollTop)),
        (this.lastScrollLeft = r.scrollLeft),
        this.event.bind(this.element, "scroll", function (t) {
          return n.onScroll(t);
        }),
        R(this);
    };
  return (
    (H.prototype.update = function () {
      this.isAlive &&
        ((this.negativeScrollAdjustment = this.isNegativeScroll
          ? this.element.scrollWidth - this.element.clientWidth
          : 0),
        e(this.scrollbarXRail, { display: "block" }),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railXMarginWidth =
          u(t(this.scrollbarXRail).marginLeft) +
          u(t(this.scrollbarXRail).marginRight)),
        (this.railYMarginHeight =
          u(t(this.scrollbarYRail).marginTop) +
          u(t(this.scrollbarYRail).marginBottom)),
        e(this.scrollbarXRail, { display: "none" }),
        e(this.scrollbarYRail, { display: "none" }),
        R(this),
        W(this, "top", 0, !1, !0),
        W(this, "left", 0, !1, !0),
        e(this.scrollbarXRail, { display: "" }),
        e(this.scrollbarYRail, { display: "" }));
    }),
    (H.prototype.onScroll = function (t) {
      this.isAlive &&
        (R(this),
        W(this, "top", this.element.scrollTop - this.lastScrollTop),
        W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        (this.lastScrollTop = Math.floor(this.element.scrollTop)),
        (this.lastScrollLeft = this.element.scrollLeft));
    }),
    (H.prototype.destroy = function () {
      this.isAlive &&
        (this.event.unbindAll(),
        l(this.scrollbarX),
        l(this.scrollbarY),
        l(this.scrollbarXRail),
        l(this.scrollbarYRail),
        this.removePsClasses(),
        (this.element = null),
        (this.scrollbarX = null),
        (this.scrollbarY = null),
        (this.scrollbarXRail = null),
        (this.scrollbarYRail = null),
        (this.isAlive = !1));
    }),
    (H.prototype.removePsClasses = function () {
      this.element.className = this.element.className
        .split(" ")
        .filter(function (t) {
          return !t.match(/^ps([-_].+|)$/);
        })
        .join(" ");
    }),
    H
  );
});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: https://kenwheeler.github.io
    Docs: https://kenwheeler.github.io/slick
    Repo: https://github.com/kenwheeler/slick
  Issues: https://github.com/kenwheeler/slick/issues

 */
(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        "object" == typeof o &&
        o.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({ "aria-describedby": n });
              }
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        e.options.accessibility === !0 &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                r.$slider.trigger("lazyLoaded", [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find(".slick-slide").slice(s, n)),
        "anticipated" === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(r.options.slidesToShow * -1)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr("tabindex", 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          (r = document.createElement("img")),
          (r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          "boolean" == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : "undefined" != typeof arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick("getSlick")),
                l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? "right"
            : "left"
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || "undefined" == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          "undefined" != typeof t)
        )
          return t;
      return o;
    });
});

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
(function ($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (selector, options) {
      $(selector).ajaxChimp(options);
    },
  };
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend(
        { url: form.attr("action"), language: "en" },
        options
      );
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;
        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }
          if (
            settings.language !== "en" &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ];
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp);
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          },
        });
        var submitMsg = "Submitting...";
        if (
          settings.language !== "en" &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]["submit"]
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }
        label.html(submitMsg).show(2e3);
        return false;
      });
    });
    return this;
  };
})(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (https://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish"))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});

/*!
	Zoom 1.7.21
	license: MIT
	https://www.jacklmoore.com/zoom
*/
(function (o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (o.zoom = function (t, n, e, i) {
    var u,
      c,
      a,
      r,
      m,
      l,
      s,
      f = o(t),
      h = f.css("position"),
      d = o(n);
    return (
      (t.style.position = /(absolute|fixed)/.test(h) ? h : "relative"),
      (t.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      o(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * i,
          height: e.height * i,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(t),
      {
        init: function () {
          (c = f.outerWidth()),
            (u = f.outerHeight()),
            n === t
              ? ((r = c), (a = u))
              : ((r = d.outerWidth()), (a = d.outerHeight())),
            (m = (e.width - c) / r),
            (l = (e.height - u) / a),
            (s = d.offset());
        },
        move: function (o) {
          var t = o.pageX - s.left,
            n = o.pageY - s.top;
          (n = Math.max(Math.min(n, a), 0)),
            (t = Math.max(Math.min(t, r), 0)),
            (e.style.left = t * -m + "px"),
            (e.style.top = n * -l + "px");
        },
      }
    );
  }),
    (o.fn.zoom = function (n) {
      return this.each(function () {
        var e = o.extend({}, t, n || {}),
          i = (e.target && o(e.target)[0]) || this,
          u = this,
          c = o(u),
          a = document.createElement("img"),
          r = o(a),
          m = "mousemove.zoom",
          l = !1,
          s = !1;
        if (!e.url) {
          var f = u.querySelector("img");
          if (
            (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src),
            !e.url)
          )
            return;
        }
        c.one(
          "zoom.destroy",
          function (o, t) {
            c.off(".zoom"),
              (i.style.position = o),
              (i.style.overflow = t),
              (a.onload = null),
              r.remove();
          }.bind(this, i.style.position, i.style.overflow)
        ),
          (a.onload = function () {
            function t(t) {
              f.init(),
                f.move(t),
                r
                  .stop()
                  .fadeTo(
                    o.support.opacity ? e.duration : 0,
                    1,
                    o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1
                  );
            }
            function n() {
              r.stop().fadeTo(
                e.duration,
                0,
                o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1
              );
            }
            var f = o.zoom(i, u, a, e.magnify);
            "grab" === e.on
              ? c.on("mousedown.zoom", function (e) {
                  1 === e.which &&
                    (o(document).one("mouseup.zoom", function () {
                      n(), o(document).off(m, f.move);
                    }),
                    t(e),
                    o(document).on(m, f.move),
                    e.preventDefault());
                })
              : "click" === e.on
              ? c.on("click.zoom", function (e) {
                  return l
                    ? void 0
                    : ((l = !0),
                      t(e),
                      o(document).on(m, f.move),
                      o(document).one("click.zoom", function () {
                        n(), (l = !1), o(document).off(m, f.move);
                      }),
                      !1);
                })
              : "toggle" === e.on
              ? c.on("click.zoom", function (o) {
                  l ? n() : t(o), (l = !l);
                })
              : "mouseover" === e.on &&
                (f.init(),
                c
                  .on("mouseenter.zoom", t)
                  .on("mouseleave.zoom", n)
                  .on(m, f.move)),
              e.touch &&
                c
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      s
                        ? ((s = !1), n())
                        : ((s = !0),
                          t(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      f.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), s && ((s = !1), n());
                  }),
              o.isFunction(e.callback) && e.callback.call(a);
          }),
          a.setAttribute("role", "presentation"),
          (a.alt = ""),
          (a.src = e.url);
      });
    }),
    (o.fn.zoom.defaults = t);
})(window.jQuery);

/*  jQuery Nice Select - v1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hern??n Sartorio 
*/
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.StickySidebar = e());
})(this, function () {
  "use strict";
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function t(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var i = e(function (t, e) {
    (function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l,
        n,
        e = (function () {
          function n(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
          };
        })(),
        i =
          ((l = ".stickySidebar"),
          (n = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            resizeSensor: !0,
            minWidth: !1,
          }),
          (function () {
            function c(t) {
              var e = this,
                i =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, c),
                (this.options = c.extend(n, i)),
                (this.sidebar =
                  "string" == typeof t ? document.querySelector(t) : t),
                void 0 === this.sidebar)
              )
                throw new Error("There is no specific sidebar element.");
              (this.sidebarInner = !1),
                (this.container = this.sidebar.parentElement),
                (this.affixedType = "STATIC"),
                (this.direction = "down"),
                (this.support = { transform: !1, transform3d: !1 }),
                (this._initialized = !1),
                (this._reStyle = !1),
                (this._breakpoint = !1),
                (this.dimensions = {
                  translateY: 0,
                  maxTranslateY: 0,
                  topSpacing: 0,
                  lastTopSpacing: 0,
                  bottomSpacing: 0,
                  lastBottomSpacing: 0,
                  sidebarHeight: 0,
                  sidebarWidth: 0,
                  containerTop: 0,
                  containerHeight: 0,
                  viewportHeight: 0,
                  viewportTop: 0,
                  lastViewportTop: 0,
                }),
                ["handleEvent"].forEach(function (t) {
                  e[t] = e[t].bind(e);
                }),
                this.initialize();
            }
            return (
              e(
                c,
                [
                  {
                    key: "initialize",
                    value: function () {
                      var i = this;
                      if (
                        (this._setSupportFeatures(),
                        this.options.innerWrapperSelector &&
                          ((this.sidebarInner = this.sidebar.querySelector(
                            this.options.innerWrapperSelector
                          )),
                          null === this.sidebarInner &&
                            (this.sidebarInner = !1)),
                        !this.sidebarInner)
                      ) {
                        var t = document.createElement("div");
                        for (
                          t.setAttribute("class", "inner-wrapper-sticky"),
                            this.sidebar.appendChild(t);
                          this.sidebar.firstChild != t;

                        )
                          t.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(
                          ".inner-wrapper-sticky"
                        );
                      }
                      if (this.options.containerSelector) {
                        var e = document.querySelectorAll(
                          this.options.containerSelector
                        );
                        if (
                          ((e = Array.prototype.slice.call(e)).forEach(
                            function (t, e) {
                              t.contains(i.sidebar) && (i.container = t);
                            }
                          ),
                          !e.length)
                        )
                          throw new Error(
                            "The container does not contains on the sidebar."
                          );
                      }
                      "function" != typeof this.options.topSpacing &&
                        (this.options.topSpacing =
                          parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing &&
                          (this.options.bottomSpacing =
                            parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        (this._initialized = !0);
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function () {
                      window.addEventListener("resize", this, {
                        passive: !0,
                        capture: !1,
                      }),
                        window.addEventListener("scroll", this, {
                          passive: !0,
                          capture: !1,
                        }),
                        this.sidebar.addEventListener("update" + l, this),
                        this.options.resizeSensor &&
                          "undefined" != typeof ResizeSensor &&
                          (new ResizeSensor(
                            this.sidebarInner,
                            this.handleEvent
                          ),
                          new ResizeSensor(this.container, this.handleEvent));
                    },
                  },
                  {
                    key: "handleEvent",
                    value: function (t) {
                      this.updateSticky(t);
                    },
                  },
                  {
                    key: "calcDimensions",
                    value: function () {
                      if (!this._breakpoint) {
                        var t = this.dimensions;
                        (t.containerTop = c.offsetRelative(this.container).top),
                          (t.containerHeight = this.container.clientHeight),
                          (t.containerBottom =
                            t.containerTop + t.containerHeight),
                          (t.sidebarHeight = this.sidebarInner.offsetHeight),
                          (t.sidebarWidth = this.sidebarInner.offsetWidth),
                          (t.viewportHeight = window.innerHeight),
                          (t.maxTranslateY =
                            t.containerHeight - t.sidebarHeight),
                          this._calcDimensionsWithScroll();
                      }
                    },
                  },
                  {
                    key: "_calcDimensionsWithScroll",
                    value: function () {
                      var t = this.dimensions;
                      (t.sidebarLeft = c.offsetRelative(this.sidebar).left),
                        (t.viewportTop =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop),
                        (t.viewportBottom = t.viewportTop + t.viewportHeight),
                        (t.viewportLeft =
                          document.documentElement.scrollLeft ||
                          document.body.scrollLeft),
                        (t.topSpacing = this.options.topSpacing),
                        (t.bottomSpacing = this.options.bottomSpacing),
                        "function" == typeof t.topSpacing &&
                          (t.topSpacing =
                            parseInt(t.topSpacing(this.sidebar)) || 0),
                        "function" == typeof t.bottomSpacing &&
                          (t.bottomSpacing =
                            parseInt(t.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType
                          ? t.topSpacing < t.lastTopSpacing &&
                            ((t.translateY += t.lastTopSpacing - t.topSpacing),
                            (this._reStyle = !0))
                          : "VIEWPORT-BOTTOM" === this.affixedType &&
                            t.bottomSpacing < t.lastBottomSpacing &&
                            ((t.translateY +=
                              t.lastBottomSpacing - t.bottomSpacing),
                            (this._reStyle = !0)),
                        (t.lastTopSpacing = t.topSpacing),
                        (t.lastBottomSpacing = t.bottomSpacing);
                    },
                  },
                  {
                    key: "isSidebarFitsViewport",
                    value: function () {
                      var t = this.dimensions,
                        e =
                          "down" === this.scrollDirection
                            ? t.lastBottomSpacing
                            : t.lastTopSpacing;
                      return (
                        this.dimensions.sidebarHeight + e <
                        this.dimensions.viewportHeight
                      );
                    },
                  },
                  {
                    key: "observeScrollDir",
                    value: function () {
                      var t = this.dimensions;
                      if (t.lastViewportTop !== t.viewportTop) {
                        var e = "down" === this.direction ? Math.min : Math.max;
                        t.viewportTop === e(t.viewportTop, t.lastViewportTop) &&
                          (this.direction =
                            "down" === this.direction ? "up" : "down");
                      }
                    },
                  },
                  {
                    key: "getAffixType",
                    value: function () {
                      this._calcDimensionsWithScroll();
                      var t = this.dimensions,
                        e = t.viewportTop + t.topSpacing,
                        i = this.affixedType;
                      return (
                        e <= t.containerTop ||
                        t.containerHeight <= t.sidebarHeight
                          ? ((t.translateY = 0), (i = "STATIC"))
                          : (i =
                              "up" === this.direction
                                ? this._getAffixTypeScrollingUp()
                                : this._getAffixTypeScrollingDown()),
                        (t.translateY = Math.max(0, t.translateY)),
                        (t.translateY = Math.min(
                          t.containerHeight,
                          t.translateY
                        )),
                        (t.translateY = Math.round(t.translateY)),
                        (t.lastViewportTop = t.viewportTop),
                        i
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingDown",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        this.isSidebarFitsViewport()
                          ? t.sidebarHeight + i >= t.containerBottom
                            ? ((t.translateY = t.containerBottom - e),
                              (o = "CONTAINER-BOTTOM"))
                            : i >= t.containerTop &&
                              ((t.translateY = i - t.containerTop),
                              (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : e + t.translateY <= n
                          ? ((t.translateY = n - e), (o = "VIEWPORT-BOTTOM"))
                          : t.containerTop + t.translateY <= i &&
                            0 !== t.translateY &&
                            t.maxTranslateY !== t.translateY &&
                            (o = "VIEWPORT-UNBOTTOM"),
                        o
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingUp",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        i <= t.translateY + t.containerTop
                          ? ((t.translateY = i - t.containerTop),
                            (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : this.isSidebarFitsViewport() ||
                            (t.containerTop <= i &&
                              0 !== t.translateY &&
                              t.maxTranslateY !== t.translateY &&
                              (o = "VIEWPORT-UNBOTTOM")),
                        o
                      );
                    },
                  },
                  {
                    key: "_getStyle",
                    value: function (t) {
                      if (void 0 !== t) {
                        var e = { inner: {}, outer: {} },
                          i = this.dimensions;
                        switch (t) {
                          case "VIEWPORT-TOP":
                            e.inner = {
                              position: "fixed",
                              top: i.topSpacing,
                              left: i.sidebarLeft - i.viewportLeft,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "VIEWPORT-BOTTOM":
                            e.inner = {
                              position: "fixed",
                              top: "auto",
                              left: i.sidebarLeft,
                              bottom: i.bottomSpacing,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "CONTAINER-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                            var n = this._getTranslate(0, i.translateY + "px");
                            e.inner = n
                              ? { transform: n }
                              : {
                                  position: "absolute",
                                  top: i.translateY,
                                  width: i.sidebarWidth,
                                };
                        }
                        switch (t) {
                          case "VIEWPORT-TOP":
                          case "VIEWPORT-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                          case "CONTAINER-BOTTOM":
                            e.outer = {
                              height: i.sidebarHeight,
                              position: "relative",
                            };
                        }
                        return (
                          (e.outer = c.extend(
                            { height: "", position: "" },
                            e.outer
                          )),
                          (e.inner = c.extend(
                            {
                              position: "relative",
                              top: "",
                              left: "",
                              bottom: "",
                              width: "",
                              transform: "",
                            },
                            e.inner
                          )),
                          e
                        );
                      }
                    },
                  },
                  {
                    key: "stickyPosition",
                    value: function (t) {
                      if (!this._breakpoint) {
                        (t = this._reStyle || t || !1),
                          this.options.topSpacing,
                          this.options.bottomSpacing;
                        var e = this.getAffixType(),
                          i = this._getStyle(e);
                        if ((this.affixedType != e || t) && e) {
                          var n =
                            "affix." +
                            e.toLowerCase().replace("viewport-", "") +
                            l;
                          for (var o in (c.eventTrigger(this.sidebar, n),
                          "STATIC" === e
                            ? c.removeClass(
                                this.sidebar,
                                this.options.stickyClass
                              )
                            : c.addClass(
                                this.sidebar,
                                this.options.stickyClass
                              ),
                          i.outer)) {
                            var s = "number" == typeof i.outer[o] ? "px" : "";
                            this.sidebar.style[o] = i.outer[o] + s;
                          }
                          for (var r in i.inner) {
                            var a = "number" == typeof i.inner[r] ? "px" : "";
                            this.sidebarInner.style[r] = i.inner[r] + a;
                          }
                          var p =
                            "affixed." +
                            e.toLowerCase().replace("viewport-", "") +
                            l;
                          c.eventTrigger(this.sidebar, p);
                        } else
                          this._initialized &&
                            (this.sidebarInner.style.left = i.inner.left);
                        this.affixedType = e;
                      }
                    },
                  },
                  {
                    key: "_widthBreakpoint",
                    value: function () {
                      window.innerWidth <= this.options.minWidth
                        ? ((this._breakpoint = !0),
                          (this.affixedType = "STATIC"),
                          this.sidebar.removeAttribute("style"),
                          c.removeClass(this.sidebar, this.options.stickyClass),
                          this.sidebarInner.removeAttribute("style"))
                        : (this._breakpoint = !1);
                    },
                  },
                  {
                    key: "updateSticky",
                    value: function () {
                      var t,
                        e = this,
                        i =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                      this._running ||
                        ((this._running = !0),
                        (t = i.type),
                        requestAnimationFrame(function () {
                          switch (t) {
                            case "scroll":
                              e._calcDimensionsWithScroll(),
                                e.observeScrollDir(),
                                e.stickyPosition();
                              break;
                            case "resize":
                            default:
                              e._widthBreakpoint(),
                                e.calcDimensions(),
                                e.stickyPosition(!0);
                          }
                          e._running = !1;
                        }));
                    },
                  },
                  {
                    key: "_setSupportFeatures",
                    value: function () {
                      var t = this.support;
                      (t.transform = c.supportTransform()),
                        (t.transform3d = c.supportTransform(!0));
                    },
                  },
                  {
                    key: "_getTranslate",
                    value: function () {
                      var t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        i =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                      return this.support.transform3d
                        ? "translate3d(" + t + ", " + e + ", " + i + ")"
                        : !!this.support.translate &&
                            "translate(" + t + ", " + e + ")";
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      window.removeEventListener("resize", this, {
                        capture: !1,
                      }),
                        window.removeEventListener("scroll", this, {
                          capture: !1,
                        }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        (this.sidebar.style.minHeight = ""),
                        this.sidebar.removeEventListener("update" + l, this);
                      var t = { inner: {}, outer: {} };
                      for (var e in ((t.inner = {
                        position: "",
                        top: "",
                        left: "",
                        bottom: "",
                        width: "",
                        transform: "",
                      }),
                      (t.outer = { height: "", position: "" }),
                      t.outer))
                        this.sidebar.style[e] = t.outer[e];
                      for (var i in t.inner)
                        this.sidebarInner.style[i] = t.inner[i];
                      this.options.resizeSensor &&
                        "undefined" != typeof ResizeSensor &&
                        (ResizeSensor.detach(
                          this.sidebarInner,
                          this.handleEvent
                        ),
                        ResizeSensor.detach(this.container, this.handleEvent));
                    },
                  },
                ],
                [
                  {
                    key: "supportTransform",
                    value: function (t) {
                      var i = !1,
                        e = t ? "perspective" : "transform",
                        n = e.charAt(0).toUpperCase() + e.slice(1),
                        o = document.createElement("support").style;
                      return (
                        (
                          e +
                          " " +
                          ["Webkit", "Moz", "O", "ms"].join(n + " ") +
                          n
                        )
                          .split(" ")
                          .forEach(function (t, e) {
                            if (void 0 !== o[t]) return (i = t), !1;
                          }),
                        i
                      );
                    },
                  },
                  {
                    key: "eventTrigger",
                    value: function (t, e, i) {
                      try {
                        var n = new CustomEvent(e, { detail: i });
                      } catch (t) {
                        (n =
                          document.createEvent("CustomEvent")).initCustomEvent(
                          e,
                          !0,
                          !0,
                          i
                        );
                      }
                      t.dispatchEvent(n);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t, e) {
                      var i = {};
                      for (var n in t)
                        void 0 !== e[n] ? (i[n] = e[n]) : (i[n] = t[n]);
                      return i;
                    },
                  },
                  {
                    key: "offsetRelative",
                    value: function (t) {
                      var e = { left: 0, top: 0 };
                      do {
                        var i = t.offsetTop,
                          n = t.offsetLeft;
                        isNaN(i) || (e.top += i),
                          isNaN(n) || (e.left += n),
                          (t =
                            "BODY" === t.tagName
                              ? t.parentElement
                              : t.offsetParent);
                      } while (t);
                      return e;
                    },
                  },
                  {
                    key: "addClass",
                    value: function (t, e) {
                      c.hasClass(t, e) ||
                        (t.classList
                          ? t.classList.add(e)
                          : (t.className += " " + e));
                    },
                  },
                  {
                    key: "removeClass",
                    value: function (t, e) {
                      c.hasClass(t, e) &&
                        (t.classList
                          ? t.classList.remove(e)
                          : (t.className = t.className.replace(
                              new RegExp(
                                "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                                "gi"
                              ),
                              " "
                            )));
                    },
                  },
                  {
                    key: "hasClass",
                    value: function (t, e) {
                      return t.classList
                        ? t.classList.contains(e)
                        : new RegExp("(^| )" + e + "( |$)", "gi").test(
                            t.className
                          );
                    },
                  },
                  {
                    key: "defaults",
                    get: function () {
                      return n;
                    },
                  },
                ]
              ),
              c
            );
          })());
      (t.default = i), (window.StickySidebar = i);
    })(e);
  });
  return (
    t(i),
    t(
      e(function (t, e) {
        (function (t) {
          var e,
            s = (e = t) && e.__esModule ? e : { default: e };
          !(function () {
            if ("undefined" != typeof window) {
              var n = window.$ || window.jQuery || window.Zepto,
                o = "stickySidebar";
              if (n) {
                (n.fn.stickySidebar = function (i) {
                  return this.each(function () {
                    var t = n(this),
                      e = n(this).data(o);
                    if (
                      (e ||
                        ((e = new s.default(this, "object" == typeof i && i)),
                        t.data(o, e)),
                      "string" == typeof i)
                    ) {
                      if (
                        void 0 === e[i] &&
                        -1 === ["destroy", "updateSticky"].indexOf(i)
                      )
                        throw new Error('No method named "' + i + '"');
                      e[i]();
                    }
                  });
                }),
                  (n.fn.stickySidebar.Constructor = s.default);
                var t = n.fn.stickySidebar;
                n.fn.stickySidebar.noConflict = function () {
                  return (n.fn.stickySidebar = t), this;
                };
              }
            }
          })();
        })(i);
      })
    )
  );
});

/*! jQuery UI - v1.11.4 - 2015-12-02
 * https://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
      a,
      o,
      r = t.nodeName.toLowerCase();
    return "area" === r
      ? ((n = t.parentNode),
        (a = n.name),
        t.href && a && "map" === n.nodeName.toLowerCase()
          ? ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o))
          : !1)
      : (/^(input|select|textarea|button|object)$/.test(r)
          ? !t.disabled
          : "a" === r
          ? t.href || s
          : s) && i(t);
  }
  function i(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === e.css(this, "visibility");
        }).length
    );
  }
  (e.ui = e.ui || {}),
    e.extend(e.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    e.fn.extend({
      scrollParent: function (t) {
        var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents()
            .filter(function () {
              var t = e(this);
              return s && "static" === t.css("position")
                ? !1
                : n.test(
                    t.css("overflow") +
                      t.css("overflow-y") +
                      t.css("overflow-x")
                  );
            })
            .eq(0);
        return "fixed" !== i && a.length
          ? a
          : e(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      },
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (i) {
              return !!e.data(i, t);
            };
          })
        : function (t, i, s) {
            return !!e.data(t, s[3]);
          },
      focusable: function (i) {
        return t(i, !isNaN(e.attr(i, "tabindex")));
      },
      tabbable: function (i) {
        var s = e.attr(i, "tabindex"),
          n = isNaN(s);
        return (n || s >= 0) && t(i, !n);
      },
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
          return (
            e.each(n, function () {
              (i -= parseFloat(e.css(t, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          a = i.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn["inner" + i] = function (t) {
          return void 0 === t
            ? o["inner" + i].call(this)
            : this.each(function () {
                e(this).css(a, s(this, t) + "px");
              });
        }),
          (e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t
              ? o["outer" + i].call(this, t)
              : this.each(function () {
                  e(this).css(a, s(this, t, !0, n) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (e.fn.removeData = (function (t) {
        return function (i) {
          return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    e.fn.extend({
      focus: (function (t) {
        return function (i, s) {
          return "number" == typeof i
            ? this.each(function () {
                var t = this;
                setTimeout(function () {
                  e(t).focus(), s && s.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      disableSelection: (function () {
        var e =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length)
          for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
            if (
              ((i = n.css("position")),
              ("absolute" === i || "relative" === i || "fixed" === i) &&
                ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            n = n.parent();
          }
        return 0;
      },
    }),
    (e.ui.plugin = {
      add: function (t, i, s) {
        var n,
          a = e.ui[t].prototype;
        for (n in s)
          (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
      },
      call: function (e, t, i, s) {
        var n,
          a = e.plugins[t];
        if (
          a &&
          (s ||
            (e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType))
        )
          for (n = 0; a.length > n; n++)
            e.options[a[n][0]] && a[n][1].apply(e.element, i);
      },
    });
  var s = 0,
    n = Array.prototype.slice;
  (e.cleanData = (function (t) {
    return function (i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)
        try {
          (s = e._data(n, "events")),
            s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      t(i);
    };
  })(e.cleanData)),
    (e.widget = function (t, i, s) {
      var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];
      return (
        (t = t.split(".")[1]),
        (n = l + "-" + t),
        s || ((s = i), (i = e.Widget)),
        (e.expr[":"][n.toLowerCase()] = function (t) {
          return !!e.data(t, n);
        }),
        (e[l] = e[l] || {}),
        (a = e[l][t]),
        (o = e[l][t] =
          function (e, t) {
            return this._createWidget
              ? (arguments.length && this._createWidget(e, t), void 0)
              : new o(e, t);
          }),
        e.extend(o, a, {
          version: s.version,
          _proto: e.extend({}, s),
          _childConstructors: [],
        }),
        (r = new i()),
        (r.options = e.widget.extend({}, r.options)),
        e.each(s, function (t, s) {
          return e.isFunction(s)
            ? ((h[t] = (function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments);
                  },
                  n = function (e) {
                    return i.prototype[t].apply(this, e);
                  };
                return function () {
                  var t,
                    i = this._super,
                    a = this._superApply;
                  return (
                    (this._super = e),
                    (this._superApply = n),
                    (t = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = a),
                    t
                  );
                };
              })()),
              void 0)
            : ((h[t] = s), void 0);
        }),
        (o.prototype = e.widget.extend(
          r,
          { widgetEventPrefix: a ? r.widgetEventPrefix || t : t },
          h,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: n }
        )),
        a
          ? (e.each(a._childConstructors, function (t, i) {
              var s = i.prototype;
              e.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete a._childConstructors)
          : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
      );
    }),
    (e.widget.extend = function (t) {
      for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
        for (i in a[o])
          (s = a[o][i]),
            a[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (t[i] = e.isPlainObject(s)
                ? e.isPlainObject(t[i])
                  ? e.widget.extend({}, t[i], s)
                  : e.widget.extend({}, s)
                : s);
      return t;
    }),
    (e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;
      e.fn[t] = function (a) {
        var o = "string" == typeof a,
          r = n.call(arguments, 1),
          h = this;
        return (
          o
            ? this.each(function () {
                var i,
                  n = e.data(this, s);
                return "instance" === a
                  ? ((h = n), !1)
                  : n
                  ? e.isFunction(n[a]) && "_" !== a.charAt(0)
                    ? ((i = n[a].apply(n, r)),
                      i !== n && void 0 !== i
                        ? ((h = i && i.jquery ? h.pushStack(i.get()) : i), !1)
                        : void 0)
                    : e.error(
                        "no such method '" +
                          a +
                          "' for " +
                          t +
                          " widget instance"
                      )
                  : e.error(
                      "cannot call methods on " +
                        t +
                        " prior to initialization; " +
                        "attempted to call method '" +
                        a +
                        "'"
                    );
              })
            : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))),
              this.each(function () {
                var t = e.data(this, s);
                t
                  ? (t.option(a || {}), t._init && t._init())
                  : e.data(this, s, new i(a, this));
              })),
          h
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, i) {
        (i = e(i || this.defaultElement || this)[0]),
          (this.element = e(i)),
          (this.uuid = s++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          i !== this &&
            (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === i && this.destroy();
              },
            }),
            (this.document = e(i.style ? i.ownerDocument : i.document || i)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetFullName + "-disabled " + "ui-state-disabled"
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, i) {
        var s,
          n,
          a,
          o = t;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
            for (
              n = o[t] = e.widget.extend({}, this.options[t]), a = 0;
              s.length - 1 > a;
              a++
            )
              (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
            if (((t = s.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = i;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          "disabled" === e &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
            t &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (t, i, s) {
        var n,
          a = this;
        "boolean" != typeof t && ((s = i), (i = t), (t = !1)),
          s
            ? ((i = n = e(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          e.each(s, function (s, o) {
            function r() {
              return t ||
                (a.options.disabled !== !0 &&
                  !e(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof o ? a[o] : o).apply(a, arguments)
                : void 0;
            }
            "string" != typeof o &&
              (r.guid = o.guid = o.guid || r.guid || e.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + a.eventNamespace,
              u = h[2];
            u ? n.delegate(u, l, r) : i.bind(l, r);
          });
      },
      _off: function (t, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.unbind(i).undelegate(i),
          (this.bindings = e(this.bindings.not(t).get())),
          (this.focusable = e(this.focusable.not(t).get())),
          (this.hoverable = e(this.hoverable.not(t).get()));
      },
      _delay: function (e, t) {
        function i() {
          return ("string" == typeof e ? s[e] : e).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, i, s) {
        var n,
          a,
          o = this.options[t];
        if (
          ((s = s || {}),
          (i = e.Event(i)),
          (i.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (i.target = this.element[0]),
          (a = i.originalEvent))
        )
          for (n in a) n in i || (i[n] = a[n]);
        return (
          this.element.trigger(i, s),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
      e.Widget.prototype["_" + t] = function (s, n, a) {
        "string" == typeof n && (n = { effect: n });
        var o,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : t;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (o = !e.isEmptyObject(n)),
          (n.complete = a),
          n.delay && s.delay(n.delay),
          o && e.effects && e.effects.effect[r]
            ? s[t](n)
            : r !== t && s[r]
            ? s[r](n.duration, n.easing, a)
            : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i();
              });
      };
    }),
    e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1;
  }),
    e.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + ".preventClickEvent")
              ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!a) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(t),
            (this._mouseDownEvent = t);
          var i = this,
            s = 1 === t.which,
            n =
              "string" == typeof this.options.cancel && t.target.nodeName
                ? e(t.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(t)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = this._mouseStart(t) !== !1),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 ===
                    e.data(t.target, this.widgetName + ".preventClickEvent") &&
                    e.removeData(
                      t.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (a = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            e.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (t) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          (a = !1),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    e.widget("ui.slider", e.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget" +
              " ui-widget-content" +
              " ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          i,
          s = this.options,
          n = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          a =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            t = n.length;
          i > t;
          t++
        )
          o.push(a);
        (this.handles = n.add(e(o.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            e(this).data("ui-slider-handle-index", t);
          });
      },
      _createRange: function () {
        var t = this.options,
          i = "";
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = e("<div></div>").appendTo(this.element)),
                (i = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              i +
                ("min" === t.range || "max" === t.range
                  ? " ui-slider-range-" + t.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          d = this.options;
        return d.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: t.pageX, y: t.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var i = Math.abs(s - u.values(t));
              (n > i ||
                (n === i &&
                  (t === u._lastChangedValue || u.values(t) === d.min))) &&
                ((n = i), (a = e(this)), (o = t));
            }),
            (r = this._start(t, o)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = o),
                a.addClass("ui-state-active").focus(),
                (h = a.offset()),
                (l = !e(t.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: t.pageX - h.left - a.width() / 2,
                      top:
                        t.pageY -
                        h.top -
                        a.height() / 2 -
                        (parseInt(a.css("borderTopWidth"), 10) || 0) -
                        (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(a.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (e) {
        var t, i, s, n, a;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / t),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (a = this._valueMin() + s * n),
          this._trimAlignValue(a)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function (e, t, i) {
        var s, n, a;
        this.options.values && this.options.values.length
          ? ((s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && i > s) || (1 === t && s > i)) &&
              (i = s),
            i !== this.values(t) &&
              ((n = this.values()),
              (n[t] = i),
              (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n,
              })),
              (s = this.values(t ? 0 : 1)),
              a !== !1 && this.values(t, i)))
          : i !== this.value() &&
            ((a = this._trigger("slide", e, {
              handle: this.handles[t],
              value: i,
            })),
            a !== !1 && this.value(i));
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i);
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger("change", e, i);
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (t, i) {
        var s, n, a;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, t),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], a = 0;
          s.length > a;
          a += 1
        )
          (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var s,
          n = 0;
        switch (
          ("range" === t &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          e.isArray(this.options.values) && (n = this.options.values.length),
          "disabled" === t &&
            this.element.toggleClass("ui-state-disabled", !!i),
          this._super(t, i),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              n > s;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function (e) {
        var t, i, s;
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (e) {
        if (this._valueMin() >= e) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
        return (
          2 * Math.abs(i) >= t && (s += i > 0 ? t : -t),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
        (e = s + t), (this.max = parseFloat(e.toFixed(this._precision())));
      },
      _precision: function () {
        var e = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (e = Math.max(e, this._precisionOf(this.options.min))),
          e
        );
      },
      _precisionOf: function (e) {
        var t = "" + e,
          i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshValue: function () {
        var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((h.values(s) - h._valueMin()) /
                  (h._valueMax() - h._valueMin()))),
                (u["horizontal" === h.orientation ? "left" : "bottom"] =
                  i + "%"),
                e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                h.options.range === !0 &&
                  ("horizontal" === h.orientation
                    ? (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { width: i - t + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { height: i - t + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (t = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (a = this._valueMax()),
            (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
            (u["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  e(t.target).addClass("ui-state-active"),
                  (i = this._start(t, o)),
                  i === !1))
              )
                return;
          }
          switch (
            ((a = this.options.step),
            (s = n =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            t.keyCode)
          ) {
            case e.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case e.ui.keyCode.END:
              n = this._valueMax();
              break;
            case e.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + a);
              break;
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - a);
          }
          this._slide(t, o, n);
        },
        keyup: function (t) {
          var i = e(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, i),
            this._change(t, i),
            e(t.target).removeClass("ui-state-active"));
        },
      },
    });
});

/**
 * Tippy JS
 * version 3.1.3
 *
 */

(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.tippy = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var r = e.ownerDocument.defaultView,
      a = r.getComputedStyle(e, null);
    return t ? a[t] : a;
  }
  function r(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function a(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var p = t(e),
      o = p.overflow,
      i = p.overflowX,
      n = p.overflowY;
    return /(auto|scroll|overlay)/.test(o + n + i) ? e : a(r(e));
  }
  function p(e) {
    return 11 === e ? ve : 10 === e ? ke : ve || ke;
  }
  function o(e) {
    if (!e) return document.documentElement;
    for (
      var r = p(10) ? document.body : null, a = e.offsetParent || null;
      a === r && e.nextElementSibling;

    )
      a = (e = e.nextElementSibling).offsetParent;
    var i = a && a.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(a.nodeName) &&
        "static" === t(a, "position")
        ? o(a)
        : a
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function n(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function l(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      a = r ? e : t,
      p = r ? t : e,
      i = document.createRange();
    i.setStart(a, 0), i.setEnd(p, 0);
    var d = i.commonAncestorContainer;
    if ((e !== d && t !== d) || a.contains(p)) return n(d) ? d : o(d);
    var m = s(e);
    return m.host ? l(m.host, t) : l(e, s(t).host);
  }
  function d(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      r = "top" === t ? "scrollTop" : "scrollLeft",
      a = e.nodeName;
    if ("BODY" === a || "HTML" === a) {
      var p = e.ownerDocument.documentElement,
        o = e.ownerDocument.scrollingElement || p;
      return o[r];
    }
    return e[r];
  }
  function m(e, t) {
    var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
      a = d(t, "top"),
      p = d(t, "left"),
      o = r ? -1 : 1;
    return (
      (e.top += a * o),
      (e.bottom += a * o),
      (e.left += p * o),
      (e.right += p * o),
      e
    );
  }
  function c(e, t) {
    var r = "x" === t ? "Left" : "Top",
      a = "Left" === r ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + r + "Width"], 10) +
      parseFloat(e["border" + a + "Width"], 10)
    );
  }
  function f(e, t, r, a) {
    return re(
      t["offset" + e],
      t["scroll" + e],
      r["client" + e],
      r["offset" + e],
      r["scroll" + e],
      p(10)
        ? parseInt(r["offset" + e]) +
            parseInt(a["margin" + ("Height" === e ? "Top" : "Left")]) +
            parseInt(a["margin" + ("Height" === e ? "Bottom" : "Right")])
        : 0
    );
  }
  function h(e) {
    var t = e.body,
      r = e.documentElement,
      a = p(10) && getComputedStyle(r);
    return { height: f("Height", t, r, a), width: f("Width", t, r, a) };
  }
  function b(e) {
    return Le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
    var r = {};
    try {
      if (p(10)) {
        r = e.getBoundingClientRect();
        var a = d(e, "top"),
          o = d(e, "left");
        (r.top += a), (r.left += o), (r.bottom += a), (r.right += o);
      } else r = e.getBoundingClientRect();
    } catch (t) {}
    var i = {
        left: r.left,
        top: r.top,
        width: r.right - r.left,
        height: r.bottom - r.top,
      },
      n = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
      s = n.width || e.clientWidth || i.right - i.left,
      l = n.height || e.clientHeight || i.bottom - i.top,
      m = e.offsetWidth - s,
      f = e.offsetHeight - l;
    if (m || f) {
      var y = t(e);
      (m -= c(y, "x")), (f -= c(y, "y")), (i.width -= m), (i.height -= f);
    }
    return b(i);
  }
  function y(e, r) {
    var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
      i = p(10),
      n = "HTML" === r.nodeName,
      s = u(e),
      l = u(r),
      d = a(e),
      c = t(r),
      f = parseFloat(c.borderTopWidth, 10),
      h = parseFloat(c.borderLeftWidth, 10);
    o && n && ((l.top = re(l.top, 0)), (l.left = re(l.left, 0)));
    var y = b({
      top: s.top - l.top - f,
      left: s.left - l.left - h,
      width: s.width,
      height: s.height,
    });
    if (((y.marginTop = 0), (y.marginLeft = 0), !i && n)) {
      var g = parseFloat(c.marginTop, 10),
        w = parseFloat(c.marginLeft, 10);
      (y.top -= f - g),
        (y.bottom -= f - g),
        (y.left -= h - w),
        (y.right -= h - w),
        (y.marginTop = g),
        (y.marginLeft = w);
    }
    return (
      (i && !o ? r.contains(d) : r === d && "BODY" !== d.nodeName) &&
        (y = m(y, r)),
      y
    );
  }
  function g(e) {
    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
      r = e.ownerDocument.documentElement,
      a = y(e, r),
      p = re(r.clientWidth, window.innerWidth || 0),
      o = re(r.clientHeight, window.innerHeight || 0),
      i = t ? 0 : d(r),
      n = t ? 0 : d(r, "left"),
      s = {
        top: i - a.top + a.marginTop,
        left: n - a.left + a.marginLeft,
        width: p,
        height: o,
      };
    return b(s);
  }
  function w(e) {
    var a = e.nodeName;
    return (
      "BODY" !== a && "HTML" !== a && ("fixed" === t(e, "position") || w(r(e)))
    );
  }
  function x(e) {
    if (!e || !e.parentElement || p()) return document.documentElement;
    for (var r = e.parentElement; r && "none" === t(r, "transform"); )
      r = r.parentElement;
    return r || document.documentElement;
  }
  function v(e, t, p, o) {
    var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
      n = { top: 0, left: 0 },
      s = i ? x(e) : l(e, t);
    if ("viewport" === o) n = g(s, i);
    else {
      var d;
      "scrollParent" === o
        ? ((d = a(r(t))),
          "BODY" === d.nodeName && (d = e.ownerDocument.documentElement))
        : "window" === o
        ? (d = e.ownerDocument.documentElement)
        : (d = o);
      var m = y(d, s, i);
      if ("HTML" === d.nodeName && !w(s)) {
        var c = h(e.ownerDocument),
          f = c.height,
          b = c.width;
        (n.top += m.top - m.marginTop),
          (n.bottom = f + m.top),
          (n.left += m.left - m.marginLeft),
          (n.right = b + m.left);
      } else n = m;
    }
    p = p || 0;
    var u = "number" == typeof p;
    return (
      (n.left += u ? p : p.left || 0),
      (n.top += u ? p : p.top || 0),
      (n.right -= u ? p : p.right || 0),
      (n.bottom -= u ? p : p.bottom || 0),
      n
    );
  }
  function k(e) {
    var t = e.width,
      r = e.height;
    return t * r;
  }
  function E(e, t, r, a, p) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var i = v(r, a, o, p),
      n = {
        top: { width: i.width, height: t.top - i.top },
        right: { width: i.right - t.right, height: i.height },
        bottom: { width: i.width, height: i.bottom - t.bottom },
        left: { width: t.left - i.left, height: i.height },
      },
      s = Object.keys(n)
        .map(function (e) {
          return Le({ key: e }, n[e], { area: k(n[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      l = s.filter(function (e) {
        var t = e.width,
          a = e.height;
        return t >= r.clientWidth && a >= r.clientHeight;
      }),
      d = 0 < l.length ? l[0].key : s[0].key,
      m = e.split("-")[1];
    return d + (m ? "-" + m : "");
  }
  function O(e, t, r) {
    var a =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      p = a ? x(t) : l(t, r);
    return y(r, p, a);
  }
  function C(e) {
    var t = e.ownerDocument.defaultView,
      r = t.getComputedStyle(e),
      a = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
      p = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
      o = { width: e.offsetWidth + p, height: e.offsetHeight + a };
    return o;
  }
  function L(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function T(e, t, r) {
    r = r.split("-")[0];
    var a = C(e),
      p = { width: a.width, height: a.height },
      o = -1 !== ["right", "left"].indexOf(r),
      i = o ? "top" : "left",
      n = o ? "left" : "top",
      s = o ? "height" : "width",
      l = o ? "width" : "height";
    return (
      (p[i] = t[i] + t[s] / 2 - a[s] / 2),
      (p[n] = r === n ? t[n] - a[l] : t[L(n)]),
      p
    );
  }
  function A(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function P(e, t, r) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === r;
      });
    var a = A(e, function (e) {
      return e[t] === r;
    });
    return e.indexOf(a);
  }
  function S(t, r, a) {
    var p = void 0 === a ? t : t.slice(0, P(t, "name", a));
    return (
      p.forEach(function (t) {
        t["function"] &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var a = t["function"] || t.fn;
        t.enabled &&
          e(a) &&
          ((r.offsets.popper = b(r.offsets.popper)),
          (r.offsets.reference = b(r.offsets.reference)),
          (r = a(r, t)));
      }),
      r
    );
  }
  function Y() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = O(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (e.placement = E(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = T(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (e = S(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function D(e, t) {
    return e.some(function (e) {
      var r = e.name,
        a = e.enabled;
      return a && r === t;
    });
  }
  function X(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        r = e.charAt(0).toUpperCase() + e.slice(1),
        a = 0;
      a < t.length;
      a++
    ) {
      var p = t[a],
        o = p ? "" + p + r : e;
      if ("undefined" != typeof document.body.style[o]) return o;
    }
    return null;
  }
  function I() {
    return (
      (this.state.isDestroyed = !0),
      D(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[X("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function N(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function H(e, t, r, p) {
    var o = "BODY" === e.nodeName,
      i = o ? e.ownerDocument.defaultView : e;
    i.addEventListener(t, r, { passive: !0 }),
      o || H(a(i.parentNode), t, r, p),
      p.push(i);
  }
  function R(e, t, r, p) {
    (r.updateBound = p),
      N(e).addEventListener("resize", r.updateBound, { passive: !0 });
    var o = a(e);
    return (
      H(o, "scroll", r.updateBound, r.scrollParents),
      (r.scrollElement = o),
      (r.eventsEnabled = !0),
      r
    );
  }
  function B() {
    this.state.eventsEnabled ||
      (this.state = R(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function M(e, t) {
    return (
      N(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function W() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = M(this.reference, this.state)));
  }
  function z(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function _(e, t) {
    Object.keys(t).forEach(function (r) {
      var a = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(r) &&
        z(t[r]) &&
        (a = "px"),
        (e.style[r] = t[r] + a);
    });
  }
  function U(e, t) {
    Object.keys(t).forEach(function (r) {
      var a = t[r];
      !1 === a ? e.removeAttribute(r) : e.setAttribute(r, t[r]);
    });
  }
  function F(e, t, r) {
    var a = A(e, function (e) {
        var r = e.name;
        return r === t;
      }),
      p =
        !!a &&
        e.some(function (e) {
          return e.name === r && e.enabled && e.order < a.order;
        });
    if (!p) {
      var o = "`" + t + "`";
      console.warn(
        "`" +
          r +
          "`" +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }
    return p;
  }
  function V(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function q(e) {
    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
      r = Ae.indexOf(e),
      a = Ae.slice(r + 1).concat(Ae.slice(0, r));
    return t ? a.reverse() : a;
  }
  function j(e, t, r, a) {
    var p = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      o = +p[1],
      i = p[2];
    if (!o) return e;
    if (0 === i.indexOf("%")) {
      var n;
      switch (i) {
        case "%p":
          n = r;
          break;
        case "%":
        case "%r":
        default:
          n = a;
      }
      var s = b(n);
      return (s[t] / 100) * o;
    }
    if ("vh" === i || "vw" === i) {
      var l;
      return (
        (l =
          "vh" === i
            ? re(document.documentElement.clientHeight, window.innerHeight || 0)
            : re(document.documentElement.clientWidth, window.innerWidth || 0)),
        (l / 100) * o
      );
    }
    return o;
  }
  function K(e, t, r, a) {
    var p = [0, 0],
      o = -1 !== ["right", "left"].indexOf(a),
      i = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      n = i.indexOf(
        A(i, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    i[n] &&
      -1 === i[n].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var s = /\s*,\s*|\s+/,
      l =
        -1 === n
          ? [i]
          : [
              i.slice(0, n).concat([i[n].split(s)[0]]),
              [i[n].split(s)[1]].concat(i.slice(n + 1)),
            ];
    return (
      (l = l.map(function (e, a) {
        var p = (1 === a ? !o : o) ? "height" : "width",
          i = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (i = !0), e)
              : i
              ? ((e[e.length - 1] += t), (i = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return j(e, p, t, r);
          });
      })),
      l.forEach(function (e, t) {
        e.forEach(function (r, a) {
          z(r) && (p[t] += r * ("-" === e[a - 1] ? -1 : 1));
        });
      }),
      p
    );
  }
  function G(e, t) {
    var r = t.offset,
      a = e.placement,
      p = e.offsets,
      o = p.popper,
      i = p.reference,
      n = a.split("-")[0],
      s = void 0;
    return (
      (s = z(+r) ? [+r, 0] : K(r, o, i, n)),
      "left" === n
        ? ((o.top += s[0]), (o.left -= s[1]))
        : "right" === n
        ? ((o.top += s[0]), (o.left += s[1]))
        : "top" === n
        ? ((o.left += s[0]), (o.top -= s[1]))
        : "bottom" === n && ((o.left += s[0]), (o.top += s[1])),
      (e.popper = o),
      e
    );
  }
  function Q(e) {
    document.addEventListener("click", Lt, e),
      document.addEventListener("touchstart", Et, { passive: !0 }),
      window.addEventListener("blur", Tt),
      window.addEventListener("resize", At),
      !be &&
        (navigator.maxTouchPoints || navigator.msMaxTouchPoints) &&
        document.addEventListener("pointerdown", Et);
  }
  function Z(e, t) {
    function r() {
      ht(function () {
        z = !1;
      });
    }
    function a() {
      (X = new MutationObserver(function () {
        q.popperInstance.update();
      })),
        X.observe(F, { childList: !0, subtree: !0 });
    }
    function p(e) {
      var t = (N = e),
        r = t.clientX,
        a = t.clientY;
      if (q.popperInstance) {
        var p = ut(q.popper),
          o = q.popperChildren.arrow ? 20 : 5,
          i = "top" === p || "bottom" === p,
          n = "left" === p || "right" === p,
          s = i ? re(o, r) : r,
          l = n ? re(o, a) : a;
        i && s > o && (s = J(r, window.innerWidth - o)),
          n && l > o && (l = J(a, window.innerHeight - o));
        var d = q.reference.getBoundingClientRect(),
          m = q.props.followCursor,
          c = "horizontal" === m,
          f = "vertical" === m;
        (q.popperInstance.reference = {
          getBoundingClientRect: function () {
            return {
              width: 0,
              height: 0,
              top: c ? d.top : l,
              bottom: c ? d.bottom : l,
              left: f ? d.left : s,
              right: f ? d.right : s,
            };
          },
          clientWidth: 0,
          clientHeight: 0,
        }),
          q.popperInstance.scheduleUpdate();
      }
    }
    function o(e) {
      var t = rt(e.target, q.props.target);
      t &&
        !t._tippy &&
        (Z(t, oe({}, q.props, { target: "", showOnInit: !0 })), i(e));
    }
    function i(e) {
      if ((T(), !q.state.isVisible)) {
        if (q.props.target) return o(e);
        if (((B = !0), q.props.wait)) return q.props.wait(q, e);
        w() && document.addEventListener("mousemove", p);
        var t = Ue(q.props.delay, 0, ie.delay);
        t
          ? (H = setTimeout(function () {
              P();
            }, t))
          : P();
      }
    }
    function n() {
      if ((T(), !q.state.isVisible)) return s();
      B = !1;
      var e = Ue(q.props.delay, 1, ie.delay);
      e
        ? (R = setTimeout(function () {
            q.state.isVisible && S();
          }, e))
        : S();
    }
    function s() {
      document.removeEventListener("mousemove", p), (N = null);
    }
    function l() {
      document.body.removeEventListener("mouseleave", n),
        document.removeEventListener("mousemove", _);
    }
    function d(e) {
      !q.state.isEnabled ||
        y(e) ||
        (!q.state.isVisible && (I = e),
        "click" === e.type && !1 !== q.props.hideOnClick && q.state.isVisible
          ? n()
          : i(e));
    }
    function m(e) {
      var t = at(e.target, function (e) {
          return e._tippy;
        }),
        r = rt(e.target, Ye.POPPER) === q.popper,
        a = t === q.reference;
      r ||
        a ||
        (bt(ut(q.popper), q.popper.getBoundingClientRect(), e, q.props) &&
          (l(), n()));
    }
    function c(e) {
      return y(e)
        ? void 0
        : q.props.interactive
        ? (document.body.addEventListener("mouseleave", n),
          void document.addEventListener("mousemove", _))
        : void n();
    }
    function f(e) {
      if (e.target === q.reference) {
        if (q.props.interactive) {
          if (!e.relatedTarget) return;
          if (rt(e.relatedTarget, Ye.POPPER)) return;
        }
        n();
      }
    }
    function h(e) {
      rt(e.target, q.props.target) && i(e);
    }
    function b(e) {
      rt(e.target, q.props.target) && n();
    }
    function y(e) {
      var t = -1 < e.type.indexOf("touch"),
        r = be && kt && q.props.touchHold && !t,
        a = kt && !q.props.touchHold && t;
      return r || a;
    }
    function u() {
      var e = q.popperChildren.tooltip,
        t = q.props.popperOptions,
        r = Ye["round" === q.props.arrowType ? "ROUND_ARROW" : "ARROW"],
        p = e.querySelector(r),
        o = oe({ placement: q.props.placement }, t || {}, {
          modifiers: oe({}, t ? t.modifiers : {}, {
            arrow: oe(
              { element: r },
              t && t.modifiers ? t.modifiers.arrow : {}
            ),
            flip: oe(
              {
                enabled: q.props.flip,
                padding: q.props.distance + 5,
                behavior: q.props.flipBehavior,
              },
              t && t.modifiers ? t.modifiers.flip : {}
            ),
            offset: oe(
              { offset: q.props.offset },
              t && t.modifiers ? t.modifiers.offset : {}
            ),
          }),
          onCreate: function () {
            (e.style[ut(q.popper)] = yt(q.props.distance, ie.distance)),
              p && q.props.arrowTransform && mt(p, q.props.arrowTransform);
          },
          onUpdate: function () {
            var t = e.style;
            (t.top = ""),
              (t.bottom = ""),
              (t.left = ""),
              (t.right = ""),
              (t[ut(q.popper)] = yt(q.props.distance, ie.distance)),
              p && q.props.arrowTransform && mt(p, q.props.arrowTransform);
          },
        });
      return X || a(), new Se(q.reference, q.popper, o);
    }
    function g(e) {
      q.popperInstance
        ? !w() &&
          (q.popperInstance.scheduleUpdate(),
          q.props.livePlacement && q.popperInstance.enableEventListeners())
        : ((q.popperInstance = u()),
          (!q.props.livePlacement || w()) &&
            q.popperInstance.disableEventListeners()),
        (q.popperInstance.reference = q.reference);
      var t = q.popperChildren.arrow;
      if (w()) {
        t && (t.style.margin = "0");
        var r = Ue(q.props.delay, 0, ie.delay);
        I.type && p(r && N ? N : I);
      } else t && (t.style.margin = "");
      ft(q.popperInstance, e),
        q.props.appendTo.contains(q.popper) ||
          (q.props.appendTo.appendChild(q.popper),
          q.props.onMount(q),
          (q.state.isMounted = !0));
    }
    function w() {
      return q.props.followCursor && !kt && "focus" !== I.type;
    }
    function x() {
      He([q.popper], fe ? 0 : q.props.updateDuration);
      (function e() {
        q.popperInstance && q.popperInstance.scheduleUpdate(),
          q.state.isMounted ? requestAnimationFrame(e) : He([q.popper], 0);
      })();
    }
    function v(e, t) {
      E(e, function () {
        !q.state.isVisible && q.props.appendTo.contains(q.popper) && t();
      });
    }
    function k(e, t) {
      E(e, t);
    }
    function E(e, t) {
      if (0 === e) return t();
      var r = q.popperChildren.tooltip,
        a = function a(p) {
          p.target === r && (wt(r, "remove", a), t());
        };
      wt(r, "remove", M), wt(r, "add", a), (M = a);
    }
    function O(e, t, r) {
      q.reference.addEventListener(e, t), r.push({ eventType: e, handler: t });
    }
    function C() {
      W = q.props.trigger
        .trim()
        .split(" ")
        .reduce(function (e, t) {
          return "manual" === t
            ? e
            : (q.props.target
                ? "mouseenter" === t
                  ? (O("mouseover", h, e), O("mouseout", b, e))
                  : "focus" === t
                  ? (O("focusin", h, e), O("focusout", b, e))
                  : "click" === t
                  ? O(t, h, e)
                  : void 0
                : (O(t, d, e),
                  q.props.touchHold &&
                    (O("touchstart", d, e), O("touchend", c, e)),
                  "mouseenter" === t
                    ? O("mouseleave", c, e)
                    : "focus" === t
                    ? O(fe ? "focusout" : "blur", f, e)
                    : void 0),
              e);
        }, []);
    }
    function L() {
      W.forEach(function (e) {
        var t = e.eventType,
          r = e.handler;
        q.reference.removeEventListener(t, r);
      });
    }
    function T() {
      clearTimeout(H), clearTimeout(R);
    }
    function A() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      vt(e, ie);
      var t = q.props,
        r = gt(q.reference, oe({}, q.props, e, { performance: !0 }));
      (r.performance = e.hasOwnProperty("performance")
        ? e.performance
        : t.performance),
        (q.props = r),
        (e.hasOwnProperty("trigger") || e.hasOwnProperty("touchHold")) &&
          (L(), C()),
        e.hasOwnProperty("interactiveDebounce") &&
          (l(), (_ = xt(m, e.interactiveDebounce))),
        Ze(q.popper, t, r),
        (q.popperChildren = Re(q.popper)),
        q.popperInstance &&
          se.some(function (t) {
            return e.hasOwnProperty(t);
          }) &&
          (q.popperInstance.destroy(),
          (q.popperInstance = u()),
          !q.state.isVisible && q.popperInstance.disableEventListeners(),
          q.props.followCursor && N && p(N));
    }
    function P() {
      var e =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : Ue(q.props.duration, 0, ie.duration[0]);
      return q.state.isDestroyed || !q.state.isEnabled || (kt && !q.props.touch)
        ? void 0
        : q.reference.isVirtual ||
          document.documentElement.contains(q.reference)
        ? q.reference.hasAttribute("disabled")
          ? void 0
          : z
          ? void (z = !1)
          : void (
              !1 === q.props.onShow(q) ||
              ((q.popper.style.visibility = "visible"),
              (q.state.isVisible = !0),
              He(
                [q.popper, q.popperChildren.tooltip, q.popperChildren.backdrop],
                0
              ),
              g(function () {
                q.state.isVisible &&
                  (!w() && q.popperInstance.update(),
                  He(
                    [
                      q.popperChildren.tooltip,
                      q.popperChildren.backdrop,
                      q.popperChildren.content,
                    ],
                    e
                  ),
                  q.popperChildren.backdrop &&
                    (q.popperChildren.content.style.transitionDelay =
                      ee(e / 6) + "ms"),
                  q.props.interactive &&
                    q.reference.classList.add("tippy-active"),
                  q.props.sticky && x(),
                  ct(
                    [
                      q.popperChildren.tooltip,
                      q.popperChildren.backdrop,
                      q.popperChildren.content,
                    ],
                    "visible"
                  ),
                  k(e, function () {
                    0 === q.props.updateDuration &&
                      q.popperChildren.tooltip.classList.add(
                        "tippy-notransition"
                      ),
                      q.props.interactive &&
                        -1 < ["focus", "click"].indexOf(I.type) &&
                        pt(q.popper),
                      q.reference.setAttribute("aria-describedby", q.popper.id),
                      q.props.onShown(q),
                      (q.state.isShown = !0);
                  }));
              }))
            )
        : Y();
    }
    function S() {
      var e =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : Ue(q.props.duration, 1, ie.duration[1]);
      q.state.isDestroyed ||
        !q.state.isEnabled ||
        !1 === q.props.onHide(q) ||
        (0 === q.props.updateDuration &&
          q.popperChildren.tooltip.classList.remove("tippy-notransition"),
        q.props.interactive && q.reference.classList.remove("tippy-active"),
        (q.popper.style.visibility = "hidden"),
        (q.state.isVisible = !1),
        (q.state.isShown = !1),
        He(
          [
            q.popperChildren.tooltip,
            q.popperChildren.backdrop,
            q.popperChildren.content,
          ],
          e
        ),
        ct(
          [
            q.popperChildren.tooltip,
            q.popperChildren.backdrop,
            q.popperChildren.content,
          ],
          "hidden"
        ),
        q.props.interactive &&
          !z &&
          -1 < ["focus", "click"].indexOf(I.type) &&
          ("focus" === I.type && (z = !0), pt(q.reference)),
        v(e, function () {
          B || s(),
            q.reference.removeAttribute("aria-describedby"),
            q.popperInstance.disableEventListeners(),
            q.props.appendTo.removeChild(q.popper),
            (q.state.isMounted = !1),
            q.props.onHidden(q);
        }));
    }
    function Y(e) {
      q.state.isDestroyed ||
        (q.state.isVisible && S(0),
        L(),
        q.reference.removeEventListener("click", r),
        delete q.reference._tippy,
        q.props.target &&
          e &&
          Xe(q.reference.querySelectorAll(q.props.target)).forEach(function (
            e
          ) {
            return e._tippy && e._tippy.destroy();
          }),
        q.popperInstance && q.popperInstance.destroy(),
        X && X.disconnect(),
        (q.state.isDestroyed = !0));
    }
    var D = gt(e, t);
    if (!D.multiple && e._tippy) return null;
    var X = null,
      I = {},
      N = null,
      H = 0,
      R = 0,
      B = !1,
      M = function () {},
      W = [],
      z = !1,
      _ = 0 < D.interactiveDebounce ? xt(m, D.interactiveDebounce) : m,
      U = Pt++,
      F = Qe(U, D);
    F.addEventListener("mouseenter", function (e) {
      q.props.interactive &&
        q.state.isVisible &&
        "mouseenter" === I.type &&
        i(e);
    }),
      F.addEventListener("mouseleave", function (e) {
        q.props.interactive &&
          "mouseenter" === I.type &&
          0 === q.props.interactiveDebounce &&
          bt(ut(F), F.getBoundingClientRect(), e, q.props) &&
          n();
      });
    var V = Re(F),
      q = {
        id: U,
        reference: e,
        popper: F,
        popperChildren: V,
        popperInstance: null,
        props: D,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        clearDelayTimeouts: T,
        set: A,
        setContent: function (e) {
          A({ content: e });
        },
        show: P,
        hide: S,
        enable: function () {
          q.state.isEnabled = !0;
        },
        disable: function () {
          q.state.isEnabled = !1;
        },
        destroy: Y,
      };
    return (
      C(),
      e.addEventListener("click", r),
      D.lazy ||
        ((q.popperInstance = u()), q.popperInstance.disableEventListeners()),
      D.showOnInit && i(),
      !D.a11y || D.target || Ne(e) || e.setAttribute("tabindex", "0"),
      (e._tippy = q),
      (F._tippy = q),
      q
    );
  }
  function $(e, t, r) {
    vt(t, ie), St || (Q(Yt), (St = !0));
    var a = oe({}, ie, t);
    Be(e) && et(e);
    var p = ze(e),
      o = p[0],
      i = (r && o ? [o] : p).reduce(function (e, t) {
        var r = t && Z(t, a);
        return r && e.push(r), e;
      }, []);
    return {
      targets: e,
      props: a,
      instances: i,
      destroyAll: function () {
        this.instances.forEach(function (e) {
          e.destroy();
        }),
          (this.instances = []);
      },
    };
  }
  for (
    var J = Math.min,
      ee = Math.round,
      te = Math.floor,
      re = Math.max,
      ae =
        '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}',
      pe = "3.1.3",
      oe =
        Object.assign ||
        function (e) {
          for (var t, r = 1; r < arguments.length; r++)
            for (var a in ((t = arguments[r]), t))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        },
      ie = {
        a11y: !0,
        allowHTML: !0,
        animateFill: !0,
        animation: "shift-away",
        appendTo: function () {
          return document.body;
        },
        arrow: !1,
        arrowTransform: "",
        arrowType: "sharp",
        content: "",
        delay: [0, 20],
        distance: 10,
        duration: [325, 275],
        flip: !0,
        flipBehavior: "flip",
        followCursor: !1,
        hideOnClick: !0,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        livePlacement: !0,
        multiple: !1,
        offset: 0,
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        performance: !1,
        placement: "top",
        popperOptions: {},
        shouldPopperHideOnBlur: function () {
          return !0;
        },
        showOnInit: !1,
        size: "regular",
        sticky: !1,
        target: "",
        theme: "dark",
        touch: !0,
        touchHold: !1,
        trigger: "mouseenter focus",
        updateDuration: 200,
        wait: null,
        zIndex: 9999,
      },
      ne = function (e) {
        ie = oe({}, ie, e);
      },
      se = [
        "arrowType",
        "distance",
        "flip",
        "flipBehavior",
        "offset",
        "placement",
        "popperOptions",
      ],
      le = "undefined" != typeof window,
      de = le ? navigator : {},
      me = le ? window : {},
      ce = ("MutationObserver" in me),
      fe = /MSIE |Trident\//.test(de.userAgent),
      he = /iPhone|iPad|iPod/.test(de.platform) && !me.MSStream,
      be = ("ontouchstart" in me),
      ye = "undefined" != typeof window && "undefined" != typeof document,
      ue = ["Edge", "Trident", "Firefox"],
      ge = 0,
      we = 0;
    we < ue.length;
    we += 1
  )
    if (ye && 0 <= navigator.userAgent.indexOf(ue[we])) {
      ge = 1;
      break;
    }
  var i = ye && window.Promise,
    xe = i
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, ge));
          };
        },
    ve = ye && !!(window.MSInputMethodContext && document.documentMode),
    ke = ye && /MSIE 10/.test(navigator.userAgent),
    Ee = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    Oe = (function () {
      function e(e, t) {
        for (var r, a = 0; a < t.length; a++)
          (r = t[a]),
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
      }
      return function (t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
      };
    })(),
    Ce = function (e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    },
    Le =
      Object.assign ||
      function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var a in ((t = arguments[r]), t))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      },
    Te = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Ae = Te.slice(3),
    Pe = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    Se = (function () {
      function t(r, a) {
        var p = this,
          o =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        Ee(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(p.update);
          }),
          (this.update = xe(this.update.bind(this))),
          (this.options = Le({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = r && r.jquery ? r[0] : r),
          (this.popper = a && a.jquery ? a[0] : a),
          (this.options.modifiers = {}),
          Object.keys(Le({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              p.options.modifiers[e] = Le(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return Le({ name: e }, p.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(p.reference, p.popper, p.options, t, p.state);
          }),
          this.update();
        var i = this.options.eventsEnabled;
        i && this.enableEventListeners(), (this.state.eventsEnabled = i);
      }
      return (
        Oe(t, [
          {
            key: "update",
            value: function () {
              return Y.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return I.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return B.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return W.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Se.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (Se.placements = Te),
    (Se.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              r = t.split("-")[0],
              a = t.split("-")[1];
            if (a) {
              var p = e.offsets,
                o = p.reference,
                i = p.popper,
                n = -1 !== ["bottom", "top"].indexOf(r),
                s = n ? "left" : "top",
                l = n ? "width" : "height",
                d = {
                  start: Ce({}, s, o[s]),
                  end: Ce({}, s, o[s] + o[l] - i[l]),
                };
              e.offsets.popper = Le({}, i, d[a]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: G, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var r = t.boundariesElement || o(e.instance.popper);
            e.instance.reference === r && (r = o(r));
            var a = X("transform"),
              p = e.instance.popper.style,
              i = p.top,
              n = p.left,
              s = p[a];
            (p.top = ""), (p.left = ""), (p[a] = "");
            var l = v(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              r,
              e.positionFixed
            );
            (p.top = i), (p.left = n), (p[a] = s), (t.boundaries = l);
            var d = t.priority,
              m = e.offsets.popper,
              c = {
                primary: function (e) {
                  var r = m[e];
                  return (
                    m[e] < l[e] &&
                      !t.escapeWithReference &&
                      (r = re(m[e], l[e])),
                    Ce({}, e, r)
                  );
                },
                secondary: function (e) {
                  var r = "right" === e ? "left" : "top",
                    a = m[r];
                  return (
                    m[e] > l[e] &&
                      !t.escapeWithReference &&
                      (a = J(
                        m[r],
                        l[e] - ("right" === e ? m.width : m.height)
                      )),
                    Ce({}, r, a)
                  );
                },
              };
            return (
              d.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                m = Le({}, m, c[t](e));
              }),
              (e.offsets.popper = m),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              r = t.popper,
              a = t.reference,
              p = e.placement.split("-")[0],
              o = te,
              i = -1 !== ["top", "bottom"].indexOf(p),
              n = i ? "right" : "bottom",
              s = i ? "left" : "top",
              l = i ? "width" : "height";
            return (
              r[n] < o(a[s]) && (e.offsets.popper[s] = o(a[s]) - r[l]),
              r[s] > o(a[n]) && (e.offsets.popper[s] = o(a[n])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, r) {
            var a;
            if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var p = r.element;
            if ("string" == typeof p) {
              if (((p = e.instance.popper.querySelector(p)), !p)) return e;
            } else if (!e.instance.popper.contains(p))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var o = e.placement.split("-")[0],
              i = e.offsets,
              n = i.popper,
              s = i.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              d = l ? "height" : "width",
              m = l ? "Top" : "Left",
              c = m.toLowerCase(),
              f = l ? "left" : "top",
              h = l ? "bottom" : "right",
              y = C(p)[d];
            s[h] - y < n[c] && (e.offsets.popper[c] -= n[c] - (s[h] - y)),
              s[c] + y > n[h] && (e.offsets.popper[c] += s[c] + y - n[h]),
              (e.offsets.popper = b(e.offsets.popper));
            var u = s[c] + s[d] / 2 - y / 2,
              g = t(e.instance.popper),
              w = parseFloat(g["margin" + m], 10),
              x = parseFloat(g["border" + m + "Width"], 10),
              v = u - e.offsets.popper[c] - w - x;
            return (
              (v = re(J(n[d] - y, v), 0)),
              (e.arrowElement = p),
              (e.offsets.arrow = ((a = {}), Ce(a, c, ee(v)), Ce(a, f, ""), a)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (D(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var r = v(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed
              ),
              a = e.placement.split("-")[0],
              p = L(a),
              o = e.placement.split("-")[1] || "",
              i = [];
            switch (t.behavior) {
              case Pe.FLIP:
                i = [a, p];
                break;
              case Pe.CLOCKWISE:
                i = q(a);
                break;
              case Pe.COUNTERCLOCKWISE:
                i = q(a, !0);
                break;
              default:
                i = t.behavior;
            }
            return (
              i.forEach(function (n, s) {
                if (a !== n || i.length === s + 1) return e;
                (a = e.placement.split("-")[0]), (p = L(a));
                var l = e.offsets.popper,
                  d = e.offsets.reference,
                  m = te,
                  c =
                    ("left" === a && m(l.right) > m(d.left)) ||
                    ("right" === a && m(l.left) < m(d.right)) ||
                    ("top" === a && m(l.bottom) > m(d.top)) ||
                    ("bottom" === a && m(l.top) < m(d.bottom)),
                  f = m(l.left) < m(r.left),
                  h = m(l.right) > m(r.right),
                  b = m(l.top) < m(r.top),
                  y = m(l.bottom) > m(r.bottom),
                  u =
                    ("left" === a && f) ||
                    ("right" === a && h) ||
                    ("top" === a && b) ||
                    ("bottom" === a && y),
                  g = -1 !== ["top", "bottom"].indexOf(a),
                  w =
                    !!t.flipVariations &&
                    ((g && "start" === o && f) ||
                      (g && "end" === o && h) ||
                      (!g && "start" === o && b) ||
                      (!g && "end" === o && y));
                (c || u || w) &&
                  ((e.flipped = !0),
                  (c || u) && (a = i[s + 1]),
                  w && (o = V(o)),
                  (e.placement = a + (o ? "-" + o : "")),
                  (e.offsets.popper = Le(
                    {},
                    e.offsets.popper,
                    T(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = S(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              r = t.split("-")[0],
              a = e.offsets,
              p = a.popper,
              o = a.reference,
              i = -1 !== ["left", "right"].indexOf(r),
              n = -1 === ["top", "left"].indexOf(r);
            return (
              (p[i ? "left" : "top"] =
                o[r] - (n ? p[i ? "width" : "height"] : 0)),
              (e.placement = L(t)),
              (e.offsets.popper = b(p)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              r = A(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < r.top ||
              t.left > r.right ||
              t.top > r.bottom ||
              t.right < r.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var r = t.x,
              a = t.y,
              p = e.offsets.popper,
              i = A(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== i &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var n = void 0 === i ? t.gpuAcceleration : i,
              s = o(e.instance.popper),
              l = u(s),
              d = { position: p.position },
              m = {
                left: te(p.left),
                top: ee(p.top),
                bottom: ee(p.bottom),
                right: te(p.right),
              },
              c = "bottom" === r ? "top" : "bottom",
              f = "right" === a ? "left" : "right",
              h = X("transform"),
              b = void 0,
              y = void 0;
            if (
              ((y =
                "bottom" == c
                  ? "HTML" === s.nodeName
                    ? -s.clientHeight + m.bottom
                    : -l.height + m.bottom
                  : m.top),
              (b =
                "right" == f
                  ? "HTML" === s.nodeName
                    ? -s.clientWidth + m.right
                    : -l.width + m.right
                  : m.left),
              n && h)
            )
              (d[h] = "translate3d(" + b + "px, " + y + "px, 0)"),
                (d[c] = 0),
                (d[f] = 0),
                (d.willChange = "transform");
            else {
              var g = "bottom" == c ? -1 : 1,
                w = "right" == f ? -1 : 1;
              (d[c] = y * g), (d[f] = b * w), (d.willChange = c + ", " + f);
            }
            var x = { "x-placement": e.placement };
            return (
              (e.attributes = Le({}, x, e.attributes)),
              (e.styles = Le({}, d, e.styles)),
              (e.arrowStyles = Le({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              _(e.instance.popper, e.styles),
              U(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                _(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, r, a, p) {
            var o = O(p, t, e, r.positionFixed),
              i = E(
                r.placement,
                o,
                t,
                e,
                r.modifiers.flip.boundariesElement,
                r.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", i),
              _(t, { position: r.positionFixed ? "fixed" : "absolute" }),
              r
            );
          },
          gpuAcceleration: void 0,
        },
      },
    });
  var Ye = {
      POPPER: ".tippy-popper",
      TOOLTIP: ".tippy-tooltip",
      CONTENT: ".tippy-content",
      BACKDROP: ".tippy-backdrop",
      ARROW: ".tippy-arrow",
      ROUND_ARROW: ".tippy-roundarrow",
    },
    De = { x: !0 },
    Xe = function (e) {
      return [].slice.call(e);
    },
    Ie = function (e, t) {
      t.content instanceof Element
        ? (We(e, ""), e.appendChild(t.content))
        : (e[t.allowHTML ? "innerHTML" : "textContent"] = t.content);
    },
    Ne = function (e) {
      return (
        !(e instanceof Element) ||
        (tt.call(
          e,
          "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]"
        ) &&
          !e.hasAttribute("disabled"))
      );
    },
    He = function (e, t) {
      e.filter(Boolean).forEach(function (e) {
        e.style.transitionDuration = t + "ms";
      });
    },
    Re = function (e) {
      var t = function (t) {
        return e.querySelector(t);
      };
      return {
        tooltip: t(Ye.TOOLTIP),
        backdrop: t(Ye.BACKDROP),
        content: t(Ye.CONTENT),
        arrow: t(Ye.ARROW) || t(Ye.ROUND_ARROW),
      };
    },
    Be = function (e) {
      return "[object Object]" === {}.toString.call(e);
    },
    Me = function () {
      return document.createElement("div");
    },
    We = function (e, t) {
      e[De.x && "innerHTML"] =
        t instanceof Element ? t[De.x && "innerHTML"] : t;
    },
    ze = function (e) {
      if (e instanceof Element || Be(e)) return [e];
      if (e instanceof NodeList) return Xe(e);
      if (Array.isArray(e)) return e;
      try {
        return Xe(document.querySelectorAll(e));
      } catch (t) {
        return [];
      }
    },
    _e = function (e) {
      return !isNaN(e) && !isNaN(parseFloat(e));
    },
    Ue = function (e, t, r) {
      if (Array.isArray(e)) {
        var a = e[t];
        return null == a ? r : a;
      }
      return e;
    },
    Fe = function (e) {
      var t = Me();
      return (
        "round" === e
          ? ((t.className = "tippy-roundarrow"),
            We(
              t,
              '<svg viewBox="0 0 24 8" xmlns="https://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>'
            ))
          : (t.className = "tippy-arrow"),
        t
      );
    },
    Ve = function () {
      var e = Me();
      return (
        (e.className = "tippy-backdrop"),
        e.setAttribute("data-state", "hidden"),
        e
      );
    },
    qe = function (e, t) {
      e.setAttribute("tabindex", "-1"), t.setAttribute("data-interactive", "");
    },
    je = function (e, t) {
      e.removeAttribute("tabindex"), t.removeAttribute("data-interactive");
    },
    Ke = function (e) {
      e.setAttribute("data-inertia", "");
    },
    Ge = function (e) {
      e.removeAttribute("data-inertia");
    },
    Qe = function (e, t) {
      var r = Me();
      (r.className = "tippy-popper"),
        r.setAttribute("role", "tooltip"),
        (r.id = "tippy-" + e),
        (r.style.zIndex = t.zIndex);
      var a = Me();
      (a.className = "tippy-tooltip"),
        a.setAttribute("data-size", t.size),
        a.setAttribute("data-animation", t.animation),
        a.setAttribute("data-state", "hidden"),
        t.theme.split(" ").forEach(function (e) {
          a.classList.add(e + "-theme");
        });
      var p = Me();
      return (
        (p.className = "tippy-content"),
        p.setAttribute("data-state", "hidden"),
        t.interactive && qe(r, a),
        t.arrow && a.appendChild(Fe(t.arrowType)),
        t.animateFill &&
          (a.appendChild(Ve()), a.setAttribute("data-animatefill", "")),
        t.inertia && a.setAttribute("data-inertia", ""),
        Ie(p, t),
        a.appendChild(p),
        r.appendChild(a),
        r.addEventListener("focusout", function (t) {
          t.relatedTarget &&
            r._tippy &&
            !at(t.relatedTarget, function (e) {
              return e === r;
            }) &&
            t.relatedTarget !== r._tippy.reference &&
            r._tippy.props.shouldPopperHideOnBlur(t) &&
            r._tippy.hide();
        }),
        r
      );
    },
    Ze = function (e, t, r) {
      var a = Re(e),
        p = a.tooltip,
        o = a.content,
        i = a.backdrop,
        n = a.arrow;
      (e.style.zIndex = r.zIndex),
        p.setAttribute("data-size", r.size),
        p.setAttribute("data-animation", r.animation),
        t.content !== r.content && Ie(o, r),
        !t.animateFill && r.animateFill
          ? (p.appendChild(Ve()), p.setAttribute("data-animatefill", ""))
          : t.animateFill &&
            !r.animateFill &&
            (p.removeChild(i), p.removeAttribute("data-animatefill")),
        !t.arrow && r.arrow
          ? p.appendChild(Fe(r.arrowType))
          : t.arrow && !r.arrow && p.removeChild(n),
        t.arrow &&
          r.arrow &&
          t.arrowType !== r.arrowType &&
          p.replaceChild(Fe(r.arrowType), n),
        !t.interactive && r.interactive
          ? qe(e, p)
          : t.interactive && !r.interactive && je(e, p),
        !t.inertia && r.inertia ? Ke(p) : t.inertia && !r.inertia && Ge(p),
        t.theme !== r.theme &&
          (t.theme.split(" ").forEach(function (e) {
            p.classList.remove(e + "-theme");
          }),
          r.theme.split(" ").forEach(function (e) {
            p.classList.add(e + "-theme");
          }));
    },
    $e = function (e) {
      Xe(document.querySelectorAll(Ye.POPPER)).forEach(function (t) {
        var r = t._tippy;
        r && !0 === r.props.hideOnClick && (!e || t !== e.popper) && r.hide();
      });
    },
    Je = function (e) {
      return Object.keys(ie).reduce(function (t, r) {
        var a = (e.getAttribute("data-tippy-" + r) || "").trim();
        return a
          ? ((t[r] =
              "content" === r
                ? a
                : "true" === a ||
                  ("false" !== a &&
                    (_e(a)
                      ? +a
                      : "[" === a[0] || "{" === a[0]
                      ? JSON.parse(a)
                      : a))),
            t)
          : t;
      }, {});
    },
    et = function (e) {
      var t = {
        isVirtual: !0,
        attributes: e.attributes || {},
        setAttribute: function (t, r) {
          e.attributes[t] = r;
        },
        getAttribute: function (t) {
          return e.attributes[t];
        },
        removeAttribute: function (t) {
          delete e.attributes[t];
        },
        hasAttribute: function (t) {
          return t in e.attributes;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        classList: {
          classNames: {},
          add: function (t) {
            e.classList.classNames[t] = !0;
          },
          remove: function (t) {
            delete e.classList.classNames[t];
          },
          contains: function (t) {
            return t in e.classList.classNames;
          },
        },
      };
      for (var r in t) e[r] = t[r];
      return e;
    },
    tt = (function () {
      if (le) {
        var t = Element.prototype;
        return (
          t.matches ||
          t.matchesSelector ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector
        );
      }
    })(),
    rt = function (e, t) {
      return (
        Element.prototype.closest ||
        function (e) {
          for (var t = this; t; ) {
            if (tt.call(t, e)) return t;
            t = t.parentElement;
          }
        }
      ).call(e, t);
    },
    at = function (e, t) {
      for (; e; ) {
        if (t(e)) return e;
        e = e.parentElement;
      }
    },
    pt = function (e) {
      var t = window.scrollX || window.pageXOffset,
        r = window.scrollY || window.pageYOffset;
      e.focus(), scroll(t, r);
    },
    ot = function (e) {
      void e.offsetHeight;
    },
    it = function (e, t) {
      return (t ? e : { X: "Y", Y: "X" }[e]) || "";
    },
    nt = function (e, t, r, p) {
      var o = t[0],
        i = t[1];
      if (!o && !i) return "";
      var n = {
        scale: (function () {
          return i ? (r ? o + ", " + i : i + ", " + o) : "" + o;
        })(),
        translate: (function () {
          return i
            ? r
              ? p
                ? o + "px, " + -i + "px"
                : o + "px, " + i + "px"
              : p
              ? -i + "px, " + o + "px"
              : i + "px, " + o + "px"
            : p
            ? -o + "px"
            : o + "px";
        })(),
      };
      return n[e];
    },
    st = function (e, t) {
      var r = e.match(new RegExp(t + "([XY])"));
      return r ? r[1] : "";
    },
    lt = function (e, t) {
      var r = e.match(t);
      return r ? r[1].split(",").map(parseFloat) : [];
    },
    dt = {
      translate: /translateX?Y?\(([^)]+)\)/,
      scale: /scaleX?Y?\(([^)]+)\)/,
    },
    mt = function (e, t) {
      var r = ut(rt(e, Ye.POPPER)),
        a = "top" === r || "bottom" === r,
        p = "right" === r || "bottom" === r,
        o = {
          translate: { axis: st(t, "translate"), numbers: lt(t, dt.translate) },
          scale: { axis: st(t, "scale"), numbers: lt(t, dt.scale) },
        },
        i = t
          .replace(
            dt.translate,
            "translate" +
              it(o.translate.axis, a) +
              "(" +
              nt("translate", o.translate.numbers, a, p) +
              ")"
          )
          .replace(
            dt.scale,
            "scale" +
              it(o.scale.axis, a) +
              "(" +
              nt("scale", o.scale.numbers, a, p) +
              ")"
          );
      e.style[
        "undefined" == typeof document.body.style.transform
          ? "webkitTransform"
          : "transform"
      ] = i;
    },
    ct = function (e, t) {
      e.filter(Boolean).forEach(function (e) {
        e.setAttribute("data-state", t);
      });
    },
    ft = function (e, t) {
      var r = e.popper,
        a = e.options,
        p = a.onCreate,
        o = a.onUpdate;
      a.onCreate = a.onUpdate = function () {
        ot(r), t(), o(), (a.onCreate = p), (a.onUpdate = o);
      };
    },
    ht = function (e) {
      setTimeout(e, 1);
    },
    bt = function (e, t, r, a) {
      if (!e) return !0;
      var p = r.clientX,
        o = r.clientY,
        i = a.interactiveBorder,
        n = a.distance,
        s = t.top - o > ("top" === e ? i + n : i),
        l = o - t.bottom > ("bottom" === e ? i + n : i),
        d = t.left - p > ("left" === e ? i + n : i),
        m = p - t.right > ("right" === e ? i + n : i);
      return s || l || d || m;
    },
    yt = function (e, t) {
      return -(e - t) + "px";
    },
    ut = function (e) {
      var t = e.getAttribute("x-placement");
      return t ? t.split("-")[0] : "";
    },
    gt = function (e, t) {
      var r = oe({}, t, t.performance ? {} : Je(e));
      return (
        r.arrow && (r.animateFill = !1),
        "function" == typeof r.appendTo && (r.appendTo = t.appendTo(e)),
        "function" == typeof r.content && (r.content = t.content(e)),
        r
      );
    },
    wt = function (e, t, r) {
      e[t + "EventListener"]("transitionend", r);
    },
    xt = function (e, t) {
      var r;
      return function () {
        var a = this,
          p = arguments;
        clearTimeout(r),
          (r = setTimeout(function () {
            return e.apply(a, p);
          }, t));
      };
    },
    vt = function (e, t) {
      for (var r in e || {})
        if (!(r in t))
          throw Error("[tippy]: `" + r + "` is not a valid option");
    },
    kt = !1,
    Et = function () {
      kt ||
        ((kt = !0),
        he && document.body.classList.add("tippy-iOS"),
        window.performance && document.addEventListener("mousemove", Ct));
    },
    Ot = 0,
    Ct = function e() {
      var t = performance.now();
      20 > t - Ot &&
        ((kt = !1),
        document.removeEventListener("mousemove", e),
        !he && document.body.classList.remove("tippy-iOS")),
        (Ot = t);
    },
    Lt = function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return $e();
      var r = rt(t, Ye.POPPER);
      if (!(r && r._tippy && r._tippy.props.interactive)) {
        var a = at(t, function (e) {
          return e._tippy && e._tippy.reference === e;
        });
        if (a) {
          var p = a._tippy,
            o = -1 < p.props.trigger.indexOf("click");
          if (kt || o) return $e(p);
          if (!0 !== p.props.hideOnClick || o) return;
          p.clearDelayTimeouts();
        }
        $e();
      }
    },
    Tt = function () {
      var e = document,
        t = e.activeElement;
      t && t.blur && t._tippy && t.blur();
    },
    At = function () {
      Xe(document.querySelectorAll(Ye.POPPER)).forEach(function (e) {
        var t = e._tippy;
        t.props.livePlacement || t.popperInstance.scheduleUpdate();
      });
    },
    Pt = 1,
    St = !1,
    Yt = !1;
  ($.version = pe),
    ($.defaults = ie),
    ($.one = function (e, t) {
      return $(e, t, !0).instances[0];
    }),
    ($.setDefaults = function (e) {
      ne(e), ($.defaults = ie);
    }),
    ($.disableAnimations = function () {
      $.setDefaults({ duration: 0, updateDuration: 0, animateFill: !1 });
    }),
    ($.hideAllPoppers = $e),
    ($.useCapture = function () {
      Yt = !0;
    });
  return (
    le &&
      setTimeout(function () {
        Xe(document.querySelectorAll("[data-tippy]")).forEach(function (e) {
          var t = e.getAttribute("data-tippy");
          t && $(e, { content: t });
        });
      }),
    (function (e) {
      if (ce) {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.textContent = e),
          document.head.insertBefore(t, document.head.firstChild);
      }
    })(ae),
    $
  );
});
//# sourceMappingURL=tippy.all.min.js.map

(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".compare-modal-close").on("click", function () {
      $("#moda-compare").fadeOut();

      return false;
    });

    /*currency*/
    function convert_currency(value) {
      var newCurrency = Currency.currentCurrency;
      var oldCurrency = shopCurrency;
      if (isNaN(value)) {
        value = 0.0;
      }

      var cents = 0.0;
      var oldFormat = Currency.moneyFormats["USD"][Currency.format] || "";
      var newFormat = Currency.moneyFormats[newCurrency][Currency.format] || "";
      if (oldFormat.indexOf("amount_no_decimals") !== -1) {
        cents = Currency.convert(
          parseInt(value, 10) * 100,
          oldCurrency,
          newCurrency
        );
      } else if (
        oldCurrency === "JOD" ||
        oldCurrency == "KWD" ||
        oldCurrency == "BHD"
      ) {
        cents = Currency.convert(
          parseInt(value, 10) / 10,
          oldCurrency,
          newCurrency
        );
      } else {
        cents = Currency.convert(parseInt(value, 10), oldCurrency, newCurrency);
      }
      var my_data = Currency.formatMoney(cents, newFormat);
      return my_data;
    }
    /* end currency */

    /* Compare Product*/
    var storage = $.localStorage;
    var compare = {};
    var total_compare = 100;
    if (storage.isSet("compare")) {
      compare = storage.get("compare");
    } else {
      storage.set("compare", {});
    }
    function compare_to_table(data) {
      if (Object.keys(data).length <= 0) {
        return "";
      }
      var html = "";
      var i = 0;

      var end_check = Object.keys(data).length - 1;
      var width_tr = end_check > 0 ? 90 / Object.keys(data).length : 90;
      var data_html = "";
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true;
        }
        data_html =
          data_html +
          '<th class=" ' +
          el.handle +
          '"><button type="button" class="close remove-compare center-block" aria-label="Close" data-handle="' +
          el.handle +
          '"><i class="ion-android-close"></i></button></th>';
        //Start title
        if (i == 0) {
          html = html + "<tr>";
          html =
            html + '<th width="15%" class="product-name" > Product name </th>';
        }
        html =
          html +
          '<td width="' +
          width_tr +
          '%"  class="' +
          el.handle +
          '"> ' +
          el.title +
          "  </td>";
        if (i >= end_check) {
          html = html + "</tr>";
        }
        // End Title
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true;
        }
        if (i == 0) {
          html = html + "<tr>";
          html =
            html + '<th width="15%" class="product-name" > Product image </th>';
        }
        // start product image
        html =
          html +
          '<td width="' +
          width_tr +
          '%" class="item-row ' +
          el.handle +
          '" id="product-' +
          el.variants[0].id +
          '"> <img src="' +
          el.featured_image +
          '"  width="150"/> ' +
          '<div class="product-price"> ';
        if (is_sale) {
          html =
            html +
            "<strong>On Sale</strong>" +
            '<span class="price-sale"><span class="money" data-currency-' +
            Currency.currentCurrency +
            '="' +
            convert_currency(el.price, "11") +
            '">' +
            convert_currency(el.price, "11") +
            "</span></span>";
        } else {
          html =
            html +
            '<span class="price-sale"><span class="money" data-currency-' +
            Currency.currentCurrency +
            '="' +
            convert_currency(el.price, "11") +
            '">' +
            convert_currency(el.price, "11") +
            "</span></span>";
        }
        if (convert_currency(el.compare_at_price, "nosymbol") > 0) {
          html =
            html +
            '<span class="visually-hidden">Regular price</span> <s>' +
            convert_currency(el.compare_at_price, "11") +
            "</s>";
        }
        html = html + "</div>";
        //convert_currency(el.price,'3');

        html =
          html +
          '<a href="javascript:void(0);" onclick="location.href=\'/products/' +
          el.handle +
          "'\">view Product</a>";

        html = html + " </td>";

        if (i >= end_check) {
          html = html + "</tr>";
        }
        // End product image
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true;
        }
        if (i == 0) {
          html = html + "<tr>";
          html =
            html +
            '<th width="15%" class="product-name" > Product description </th>';
        }
        html =
          html +
          '<td width="' +
          width_tr +
          '%" class="' +
          el.handle +
          ' "> <p class="description-compare"> ' +
          el.description
            .replace(/(<([^>]+)>)/gi, "")
            .split(" ")
            .splice(0, 40)
            .join(" ") +
          "..." +
          " </p> </td>";
        if (i >= end_check) {
          html = html + "<tr>";
        }
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true;
        }
        if (i == 0) {
          html = html + "<tr>";
          html =
            html + '<th width="15%" class="product-name" > AVAILABILITY </th>';
        }

        var avai_stock = el.available
          ? "Available In stock"
          : "Unavailable In stock";
        html =
          html +
          '<td   width="' +
          width_tr +
          '%" class="available-stock ' +
          el.handle +
          '"> <p> ' +
          avai_stock +
          " </p> </td>";
        if (i >= end_check) {
          html = html + "<tr>";
        }
      }
      $(".th-compare").html("<td>Action</td>" + data_html);
      $("#table-compare").html(html);
    }
    function modal_compare() {
      if (!$.isEmptyObject(compare)) {
        // $(".error-compare").hide(20);
        var list_id = "";
        var json_compare = [];
        var check_end = 0;
        var compare_size = Object.keys(compare).length - 1;
        $.each(compare, function (index, el) {
          var json_url = "/products/" + el + ".js";
          if ($.trim(el) != "") {
            jQuery.getJSON(json_url, function (product) {
              json_compare[check_end] = product;
              if (check_end >= compare_size) {
                compare_to_table(json_compare);
              }
              check_end += 1;
            });
          }
        });
        $("#moda-compare").fadeIn();
      }
    }
    $(document).on("click", ".compare", function (event) {
      event.preventDefault();
      $(".loading-modal").fadeIn();
      /* Act on the event */
      var $this = $(this);
      var pid = $(this).data("pid");

      compare = storage.get("compare");

      if ($.isEmptyObject(compare)) {
        compare = {};
      }
      var check_compare = true;
      if (Object.keys(compare).length >= total_compare) {
        swal(
          {
            title: "info",
            text: "Product Added over 8 product !. Do you want to compare 8 added product ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4cae4c",
            confirmButtonText: "Yes,I want view it!",
            timer: 3000,
            cancelButtonText: "Continue",
            closeOnConfirm: true,
          },
          function () {
            modal_compare(compare);
          }
        );
      } else {
        for (var i = 1; i <= 8; i++) {
          if (compare["p" + i] == "" || compare["p" + i] == undefined) {
            compare["p" + i] = pid;
            break;
          } else if (compare["p" + i] == pid) {
            $this.addClass("added");
            check_compare = false;
            modal_compare(compare);

            break;
          }
        }
        if (check_compare) {
          storage.set("compare", compare);
          modal_compare(compare);
          $this.addClass("add-success");
          $("[data-pid='" + pid + "']")
            .addClass("added")
            .html('<i class="icon-sliders"></i>');
        }
      }
      $(".loading-modal").hide(500);
    });

    $(document).on("click", ".remove-compare", function (event) {
      event.preventDefault();
      /* Act on the event */

      var id = $(this).data("handle");
      $("." + id)
        .fadeOut(600)
        .remove();
      $("[data-pid='" + id + "']")
        .removeClass("added add-success")
        .html('<i class="icon-sliders"></i>');
      $.each(compare, function (index, el) {
        if (el == id) {
          compare[index] = "";
          delete compare[index];
        }
      });
      storage.set("compare", compare);
    });

    /** End compare */

    if (!$.isEmptyObject(compare)) {
      $(".error-compare").hide(20);
      var list_id = "";
      var json_compare = [];
      var check_end = 0;
      var compare_size = Object.keys(compare).length - 1;
      $.each(compare, function (index, el) {
        $("[data-pid='" + el + "']")
          .addClass("added")
          .html('<i class="icon-sliders"></i>');
        var json_url = "/products/" + el + ".js";
        if ($.trim(el) != "") {
          jQuery.getJSON(json_url, function (product) {
            json_compare[check_end] = product;
            if (check_end >= compare_size) {
              compare_to_table(json_compare);
            }
            check_end += 1;
          });
        }
      });
    } else {
      $(".error-compare").fadeIn();
    }
  });
})(jQuery);

/*
 * jQuery Storage API Plugin
 *
 * Copyright (c) 2013 Julien Maurel
 *
 * Licensed under the MIT license:
 * https://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 * https://github.com/julien-maurel/jQuery-Storage-API
 *
 * Version: 1.9.4
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("object" == typeof exports ? require("jquery") : jQuery);
})(function (e) {
  function t() {
    var t,
      r,
      i,
      o = this._type,
      n = arguments.length,
      s = window[o],
      a = arguments,
      f = a[0];
    if (1 > n) throw new Error("Minimum 1 argument must be given");
    if (e.isArray(f)) {
      r = {};
      for (var l in f) {
        t = f[l];
        try {
          r[t] = JSON.parse(s.getItem(t));
        } catch (c) {
          r[t] = s.getItem(t);
        }
      }
      return r;
    }
    if (1 != n) {
      try {
        r = JSON.parse(s.getItem(f));
      } catch (c) {
        throw new ReferenceError(f + " is not defined in this storage");
      }
      for (var l = 1; n - 1 > l; l++)
        if (((r = r[a[l]]), void 0 === r))
          throw new ReferenceError(
            [].slice.call(a, 1, l + 1).join(".") +
              " is not defined in this storage"
          );
      if (e.isArray(a[l])) {
        (i = r), (r = {});
        for (var u in a[l]) r[a[l][u]] = i[a[l][u]];
        return r;
      }
      return r[a[l]];
    }
    try {
      return JSON.parse(s.getItem(f));
    } catch (c) {
      return s.getItem(f);
    }
  }
  function r() {
    var t,
      r,
      i,
      o = this._type,
      n = arguments.length,
      s = window[o],
      a = arguments,
      f = a[0],
      l = a[1],
      c = isNaN(l) ? {} : [];
    if (1 > n || (!e.isPlainObject(f) && 2 > n))
      throw new Error(
        "Minimum 2 arguments must be given or first parameter must be an object"
      );
    if (e.isPlainObject(f)) {
      for (var u in f)
        (t = f[u]),
          e.isPlainObject(t) || this.alwaysUseJson
            ? s.setItem(u, JSON.stringify(t))
            : s.setItem(u, t);
      return f;
    }
    if (2 == n)
      return (
        "object" == typeof l || this.alwaysUseJson
          ? s.setItem(f, JSON.stringify(l))
          : s.setItem(f, l),
        l
      );
    try {
      (i = s.getItem(f)), null != i && (c = JSON.parse(i));
    } catch (h) {}
    i = c;
    for (var u = 1; n - 2 > u; u++)
      (t = a[u]),
        (r = isNaN(a[u + 1]) ? "object" : "array"),
        (!i[t] ||
          ("object" == r && !e.isPlainObject(i[t])) ||
          ("array" == r && !e.isArray(i[t]))) &&
          ("array" == r ? (i[t] = []) : (i[t] = {})),
        (i = i[t]);
    return (i[a[u]] = a[u + 1]), s.setItem(f, JSON.stringify(c)), c;
  }
  function i() {
    var t,
      r,
      i = this._type,
      o = arguments.length,
      n = window[i],
      s = arguments,
      a = s[0];
    if (1 > o) throw new Error("Minimum 1 argument must be given");
    if (e.isArray(a)) {
      for (var f in a) n.removeItem(a[f]);
      return !0;
    }
    if (1 == o) return n.removeItem(a), !0;
    try {
      t = r = JSON.parse(n.getItem(a));
    } catch (l) {
      throw new ReferenceError(a + " is not defined in this storage");
    }
    for (var f = 1; o - 1 > f; f++)
      if (((r = r[s[f]]), void 0 === r))
        throw new ReferenceError(
          [].slice.call(s, 1, f).join(".") + " is not defined in this storage"
        );
    if (e.isArray(s[f])) for (var c in s[f]) delete r[s[f][c]];
    else delete r[s[f]];
    return n.setItem(a, JSON.stringify(t)), !0;
  }
  function o(t) {
    var r = a.call(this);
    for (var o in r) i.call(this, r[o]);
    if (t) for (var o in e.namespaceStorages) f(o);
  }
  function n() {
    var r = arguments.length,
      i = arguments,
      o = i[0];
    if (0 == r) return 0 == a.call(this).length;
    if (e.isArray(o)) {
      for (var s = 0; s < o.length; s++) if (!n.call(this, o[s])) return !1;
      return !0;
    }
    try {
      var f = t.apply(this, arguments);
      e.isArray(i[r - 1]) || (f = { totest: f });
      for (var s in f)
        if (
          !(
            (e.isPlainObject(f[s]) && e.isEmptyObject(f[s])) ||
            (e.isArray(f[s]) && !f[s].length)
          ) &&
          f[s]
        )
          return !1;
      return !0;
    } catch (l) {
      return !0;
    }
  }
  function s() {
    var r = arguments.length,
      i = arguments,
      o = i[0];
    if (1 > r) throw new Error("Minimum 1 argument must be given");
    if (e.isArray(o)) {
      for (var n = 0; n < o.length; n++) if (!s.call(this, o[n])) return !1;
      return !0;
    }
    try {
      var a = t.apply(this, arguments);
      e.isArray(i[r - 1]) || (a = { totest: a });
      for (var n in a) if (void 0 === a[n] || null === a[n]) return !1;
      return !0;
    } catch (f) {
      return !1;
    }
  }
  function a() {
    var e = this._type,
      r = arguments.length,
      i = window[e],
      o = arguments,
      n = [],
      s = {};
    if (((s = r > 0 ? t.apply(this, o) : i), s && s._cookie))
      for (var a in Cookies.get()) "" != a && n.push(a.replace(s._prefix, ""));
    else for (var f in s) s.hasOwnProperty(f) && n.push(f);
    return n;
  }
  function f(t) {
    if (!t || "string" != typeof t)
      throw new Error("First parameter must be a string");
    h
      ? (window.localStorage.getItem(t) || window.localStorage.setItem(t, "{}"),
        window.sessionStorage.getItem(t) ||
          window.sessionStorage.setItem(t, "{}"))
      : (window.localCookieStorage.getItem(t) ||
          window.localCookieStorage.setItem(t, "{}"),
        window.sessionCookieStorage.getItem(t) ||
          window.sessionCookieStorage.setItem(t, "{}"));
    var r = {
      localStorage: e.extend({}, e.localStorage, { _ns: t }),
      sessionStorage: e.extend({}, e.sessionStorage, { _ns: t }),
    };
    return (
      "undefined" != typeof Cookies &&
        (window.cookieStorage.getItem(t) ||
          window.cookieStorage.setItem(t, "{}"),
        (r.cookieStorage = e.extend({}, e.cookieStorage, { _ns: t }))),
      (e.namespaceStorages[t] = r),
      r
    );
  }
  function l(e) {
    var t = "jsapi";
    try {
      return window[e]
        ? (window[e].setItem(t, t), window[e].removeItem(t), !0)
        : !1;
    } catch (r) {
      return !1;
    }
  }
  var c = "ls_",
    u = "ss_",
    h = l("localStorage"),
    g = {
      _type: "",
      _ns: "",
      _callMethod: function (e, t) {
        var r = [],
          t = Array.prototype.slice.call(t),
          i = t[0];
        return (
          this._ns && r.push(this._ns),
          "string" == typeof i &&
            -1 !== i.indexOf(".") &&
            (t.shift(), [].unshift.apply(t, i.split("."))),
          [].push.apply(r, t),
          e.apply(this, r)
        );
      },
      alwaysUseJson: !1,
      get: function () {
        return this._callMethod(t, arguments);
      },
      set: function () {
        var t = arguments.length,
          i = arguments,
          o = i[0];
        if (1 > t || (!e.isPlainObject(o) && 2 > t))
          throw new Error(
            "Minimum 2 arguments must be given or first parameter must be an object"
          );
        if (e.isPlainObject(o) && this._ns) {
          for (var n in o) this._callMethod(r, [n, o[n]]);
          return o;
        }
        var s = this._callMethod(r, i);
        return this._ns ? s[o.split(".")[0]] : s;
      },
      remove: function () {
        if (arguments.length < 1)
          throw new Error("Minimum 1 argument must be given");
        return this._callMethod(i, arguments);
      },
      removeAll: function (e) {
        return this._ns
          ? (this._callMethod(r, [{}]), !0)
          : this._callMethod(o, [e]);
      },
      isEmpty: function () {
        return this._callMethod(n, arguments);
      },
      isSet: function () {
        if (arguments.length < 1)
          throw new Error("Minimum 1 argument must be given");
        return this._callMethod(s, arguments);
      },
      keys: function () {
        return this._callMethod(a, arguments);
      },
    };
  if ("undefined" != typeof Cookies) {
    window.name || (window.name = Math.floor(1e8 * Math.random()));
    var m = {
      _cookie: !0,
      _prefix: "",
      _expires: null,
      _path: null,
      _domain: null,
      setItem: function (e, t) {
        Cookies.set(this._prefix + e, t, {
          expires: this._expires,
          path: this._path,
          domain: this._domain,
        });
      },
      getItem: function (e) {
        return Cookies.get(this._prefix + e);
      },
      removeItem: function (e) {
        return Cookies.remove(this._prefix + e, { path: this._path });
      },
      clear: function () {
        for (var e in Cookies.get())
          "" != e &&
            ((!this._prefix && -1 === e.indexOf(c) && -1 === e.indexOf(u)) ||
              (this._prefix && 0 === e.indexOf(this._prefix))) &&
            Cookies.remove(e);
      },
      setExpires: function (e) {
        return (this._expires = e), this;
      },
      setPath: function (e) {
        return (this._path = e), this;
      },
      setDomain: function (e) {
        return (this._domain = e), this;
      },
      setConf: function (e) {
        return (
          e.path && (this._path = e.path),
          e.domain && (this._domain = e.domain),
          e.expires && (this._expires = e.expires),
          this
        );
      },
      setDefaultConf: function () {
        this._path = this._domain = this._expires = null;
      },
    };
    h ||
      ((window.localCookieStorage = e.extend({}, m, {
        _prefix: c,
        _expires: 3650,
      })),
      (window.sessionCookieStorage = e.extend({}, m, {
        _prefix: u + window.name + "_",
      }))),
      (window.cookieStorage = e.extend({}, m)),
      (e.cookieStorage = e.extend({}, g, {
        _type: "cookieStorage",
        setExpires: function (e) {
          return window.cookieStorage.setExpires(e), this;
        },
        setPath: function (e) {
          return window.cookieStorage.setPath(e), this;
        },
        setDomain: function (e) {
          return window.cookieStorage.setDomain(e), this;
        },
        setConf: function (e) {
          return window.cookieStorage.setConf(e), this;
        },
        setDefaultConf: function () {
          return window.cookieStorage.setDefaultConf(), this;
        },
      }));
  }
  (e.initNamespaceStorage = function (e) {
    return f(e);
  }),
    h
      ? ((e.localStorage = e.extend({}, g, { _type: "localStorage" })),
        (e.sessionStorage = e.extend({}, g, { _type: "sessionStorage" })))
      : ((e.localStorage = e.extend({}, g, { _type: "localCookieStorage" })),
        (e.sessionStorage = e.extend({}, g, {
          _type: "sessionCookieStorage",
        }))),
    (e.namespaceStorages = {}),
    (e.removeAllStorages = function (t) {
      e.localStorage.removeAll(t),
        e.sessionStorage.removeAll(t),
        e.cookieStorage && e.cookieStorage.removeAll(t),
        t || (e.namespaceStorages = {});
    }),
    (e.alwaysUseJsonInStorage = function (t) {
      (g.alwaysUseJson = t),
        (e.localStorage.alwaysUseJson = t),
        (e.sessionStorage.alwaysUseJson = t),
        e.cookieStorage && (e.cookieStorage.alwaysUseJson = t);
    });
});
