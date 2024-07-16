var pe = Object.defineProperty;
var me = (e, t, n) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => (me(e, typeof t != "symbol" ? t + "" : t, n), n);
function j() {
}
function re(e) {
  return e();
}
function Z() {
  return /* @__PURE__ */ Object.create(null);
}
function A(e) {
  e.forEach(re);
}
function ue(e) {
  return typeof e == "function";
}
function ge(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function be(e) {
  return Object.keys(e).length === 0;
}
function s(e, t) {
  e.appendChild(t);
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function C(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ae(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function a(e) {
  return document.createElement(e);
}
function m(e) {
  return document.createTextNode(e);
}
function $() {
  return m(" ");
}
function ve() {
  return m("");
}
function ee(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function r(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function $e(e) {
  return Array.from(e.childNodes);
}
function U(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
let F;
function N(e) {
  F = e;
}
const E = [], te = [];
let q = [];
const ne = [], ke = /* @__PURE__ */ Promise.resolve();
let z = !1;
function we() {
  z || (z = !0, ke.then(de));
}
function D(e) {
  q.push(e);
}
const H = /* @__PURE__ */ new Set();
let y = 0;
function de() {
  if (y !== 0)
    return;
  const e = F;
  do {
    try {
      for (; y < E.length; ) {
        const t = E[y];
        y++, N(t), ye(t.$$);
      }
    } catch (t) {
      throw E.length = 0, y = 0, t;
    }
    for (N(null), E.length = 0, y = 0; te.length; )
      te.pop()();
    for (let t = 0; t < q.length; t += 1) {
      const n = q[t];
      H.has(n) || (H.add(n), n());
    }
    q.length = 0;
  } while (E.length);
  for (; ne.length; )
    ne.pop()();
  z = !1, H.clear(), N(e);
}
function ye(e) {
  if (e.fragment !== null) {
    e.update(), A(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(D);
  }
}
function Ee(e) {
  const t = [], n = [];
  q.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), q = t;
}
const qe = /* @__PURE__ */ new Set();
function Ce(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function M(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Oe(e, t, n) {
  const { fragment: l, after_update: c } = e.$$;
  l && l.m(t, n), D(() => {
    const o = e.$$.on_mount.map(re).filter(ue);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : A(o), e.$$.on_mount = [];
  }), c.forEach(D);
}
function Se(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ee(n.after_update), A(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ne(e, t) {
  e.$$.dirty[0] === -1 && (E.push(e), we(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function je(e, t, n, l, c, o, i = null, u = [-1]) {
  const h = F;
  N(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: j,
    not_equal: c,
    bound: Z(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: Z(),
    dirty: u,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  i && i(f.root);
  let g = !1;
  if (f.ctx = n ? n(e, t.props || {}, (_, O, ...b) => {
    const k = b.length ? b[0] : O;
    return f.ctx && c(f.ctx[_], f.ctx[_] = k) && (!f.skip_bound && f.bound[_] && f.bound[_](k), g && Ne(e, _)), O;
  }) : [], f.update(), g = !0, A(f.before_update), f.fragment = l ? l(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const _ = $e(t.target);
      f.fragment && f.fragment.l(_), _.forEach(C);
    } else
      f.fragment && f.fragment.c();
    t.intro && Ce(e.$$.fragment), Oe(e, t.target, t.anchor), de();
  }
  N(h);
}
class Ae {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    V(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    V(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Se(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ue(n))
      return j;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const c = l.indexOf(n);
      c !== -1 && l.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !be(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Le = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Le);
function le(e, t, n) {
  const l = e.slice();
  return l[6] = t[n][0], l[7] = t[n][1], l[8] = t, l[9] = n, l;
}
function ce(e, t, n) {
  const l = e.slice();
  return l[10] = t[n], l;
}
function ie(e) {
  let t, n = M(Object.entries(
    /*concepts*/
    e[0]
  )), l = [];
  for (let c = 0; c < n.length; c += 1)
    l[c] = se(le(e, n, c));
  return {
    c() {
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      t = ve();
    },
    m(c, o) {
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(c, o);
      L(c, t, o);
    },
    p(c, o) {
      if (o & /*Object, concepts, handleCheck*/
      3) {
        n = M(Object.entries(
          /*concepts*/
          c[0]
        ));
        let i;
        for (i = 0; i < n.length; i += 1) {
          const u = le(c, n, i);
          l[i] ? l[i].p(u, o) : (l[i] = se(u), l[i].c(), l[i].m(t.parentNode, t));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    d(c) {
      c && C(t), ae(l, c);
    }
  };
}
function oe(e) {
  let t, n = M(
    /*c*/
    e[7].examples
  ), l = [];
  for (let c = 0; c < n.length; c += 1)
    l[c] = fe(ce(e, n, c));
  return {
    c() {
      t = a("ul");
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      r(t, "class", "svelte-bi08qo");
    },
    m(c, o) {
      L(c, t, o);
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(t, null);
    },
    p(c, o) {
      if (o & /*Object, concepts*/
      1) {
        n = M(
          /*c*/
          c[7].examples
        );
        let i;
        for (i = 0; i < n.length; i += 1) {
          const u = ce(c, n, i);
          l[i] ? l[i].p(u, o) : (l[i] = fe(u), l[i].c(), l[i].m(t, null));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    d(c) {
      c && C(t), ae(l, c);
    }
  };
}
function fe(e) {
  let t, n, l = (
    /*example*/
    e[10] + ""
  ), c, o;
  return {
    c() {
      t = a("li"), n = m('"'), c = m(l), o = m('"'), r(t, "class", "examples");
    },
    m(i, u) {
      L(i, t, u), s(t, n), s(t, c), s(t, o);
    },
    p(i, u) {
      u & /*concepts*/
      1 && l !== (l = /*example*/
      i[10] + "") && U(c, l);
    },
    d(i) {
      i && C(t);
    }
  };
}
function se(e) {
  let t, n, l, c, o, i, u, h, f, g = (
    /*i*/
    e[9] + 1 + ""
  ), _, O, b = (
    /*c*/
    e[7].name + ""
  ), k, x, G, w, I, K, J, B = (
    /*c*/
    e[7].prompt + ""
  ), P, Q, v, R, W, X, T, Y;
  function he() {
    e[3].call(
      c,
      /*each_value*/
      e[8],
      /*i*/
      e[9]
    );
  }
  function _e() {
    return (
      /*change_handler*/
      e[4](
        /*c_id*/
        e[6]
      )
    );
  }
  let d = (
    /*c*/
    e[7].examples && oe(e)
  );
  return {
    c() {
      t = a("div"), n = a("div"), l = a("div"), c = a("input"), u = $(), h = a("label"), f = a("b"), _ = m(g), O = m(": "), k = m(b), G = $(), w = a("div"), I = a("p"), I.innerHTML = "<b>Inclusion Criteria</b>", K = $(), J = a("p"), P = m(B), Q = $(), v = a("div"), R = a("b"), R.textContent = "Representative Examples", W = $(), d && d.c(), X = $(), r(c, "type", "checkbox"), r(c, "id", o = /*c_id*/
      e[6]), r(c, "name", i = /*c*/
      e[7].name), r(c, "class", "svelte-bi08qo"), r(h, "for", x = /*c_id*/
      e[6]), r(h, "class", "concept-name svelte-bi08qo"), r(l, "class", "left svelte-bi08qo"), r(I, "class", "svelte-bi08qo"), r(J, "class", "svelte-bi08qo"), r(w, "class", "mid svelte-bi08qo"), r(v, "class", "right svelte-bi08qo"), r(n, "class", "concept-detail svelte-bi08qo"), r(t, "class", "concept-card");
    },
    m(S, p) {
      L(S, t, p), s(t, n), s(n, l), s(l, c), c.checked = /*c*/
      e[7].active, s(l, u), s(l, h), s(h, f), s(f, _), s(f, O), s(f, k), s(n, G), s(n, w), s(w, I), s(w, K), s(w, J), s(J, P), s(n, Q), s(n, v), s(v, R), s(v, W), d && d.m(v, null), s(t, X), T || (Y = [
        ee(c, "change", he),
        ee(c, "change", _e)
      ], T = !0);
    },
    p(S, p) {
      e = S, p & /*concepts*/
      1 && o !== (o = /*c_id*/
      e[6]) && r(c, "id", o), p & /*concepts*/
      1 && i !== (i = /*c*/
      e[7].name) && r(c, "name", i), p & /*Object, concepts*/
      1 && (c.checked = /*c*/
      e[7].active), p & /*concepts*/
      1 && b !== (b = /*c*/
      e[7].name + "") && U(k, b), p & /*concepts*/
      1 && x !== (x = /*c_id*/
      e[6]) && r(h, "for", x), p & /*concepts*/
      1 && B !== (B = /*c*/
      e[7].prompt + "") && U(P, B), /*c*/
      e[7].examples ? d ? d.p(e, p) : (d = oe(e), d.c(), d.m(v, null)) : d && (d.d(1), d = null);
    },
    d(S) {
      S && C(t), d && d.d(), T = !1, A(Y);
    }
  };
}
function xe(e) {
  let t, n, l, c = (
    /*concepts*/
    e[0] && ie(e)
  );
  return {
    c() {
      t = a("div"), n = a("p"), n.textContent = "Select concepts to score", l = $(), c && c.c(), r(n, "class", "header svelte-bi08qo");
    },
    m(o, i) {
      L(o, t, i), s(t, n), s(t, l), c && c.m(t, null);
    },
    p(o, [i]) {
      /*concepts*/
      o[0] ? c ? c.p(o, i) : (c = ie(o), c.c(), c.m(t, null)) : c && (c.d(1), c = null);
    },
    i: j,
    o: j,
    d(o) {
      o && C(t), c && c.d();
    }
  };
}
function Ie(e, t, n) {
  let { model: l } = t, c, o = l.get("data");
  o && (c = JSON.parse(o));
  function i(f) {
    f = f.c_id;
    let g = JSON.stringify(c);
    l.set("data", g), l.save_changes();
  }
  function u(f, g) {
    f[g][1].active = this.checked, n(0, c);
  }
  const h = (f) => i({ c_id: f });
  return e.$$set = (f) => {
    "model" in f && n(2, l = f.model);
  }, [c, i, l, u, h];
}
class Je extends Ae {
  constructor(t) {
    super(), je(this, t, Ie, xe, ge, { model: 2 });
  }
}
function Me({ model: e, el: t }) {
  let n = new Je({ target: t, props: { model: e } });
  return () => n.$destroy();
}
export {
  Me as render
};
