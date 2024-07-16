var $g = Object.defineProperty;
var Fg = (e, t, n) => t in e ? $g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tn = (e, t, n) => (Fg(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as _e from "https://esm.sh/d3@7";
function pe() {
}
function rs(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Xu(e) {
  return e();
}
function hl() {
  return /* @__PURE__ */ Object.create(null);
}
function Qt(e) {
  e.forEach(Xu);
}
function ju(e) {
  return typeof e == "function";
}
function Et(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Pg(e) {
  return Object.keys(e).length === 0;
}
function of(e, t, n, r) {
  if (e) {
    const i = Zu(e, t, n, r);
    return e[0](i);
  }
}
function Zu(e, t, n, r) {
  return e[1] && r ? rs(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function af(e, t, n, r) {
  if (e[2] && r) {
    const i = e[2](r(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], a = Math.max(t.dirty.length, i.length);
      for (let s = 0; s < a; s += 1)
        o[s] = t.dirty[s] | i[s];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function sf(e, t, n, r, i, o) {
  if (i) {
    const a = Zu(t, n, r, o);
    e.p(a, i);
  }
}
function ff(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function xe(e) {
  return e ?? "";
}
function re(e, t) {
  e.appendChild(t);
}
function ee(e, t, n) {
  e.insertBefore(t, n || null);
}
function J(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Fn(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function Q(e) {
  return document.createElement(e);
}
function Bg(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function je(e) {
  return document.createTextNode(e);
}
function ye() {
  return je(" ");
}
function br() {
  return je("");
}
function Nt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function K(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ug(e) {
  return Array.from(e.childNodes);
}
function Vt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Gr(e, t) {
  e.value = t ?? "";
}
function Hg(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function ml(e, t, n) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function zg(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function qg(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
class Ho {
  constructor(t = !1) {
    /**
     * @private
     * @default false
     */
    tn(this, "is_svg", !1);
    /** parent for creating node */
    tn(this, "e");
    /** html tag nodes */
    tn(this, "n");
    /** target */
    tn(this, "t");
    /** anchor */
    tn(this, "a");
    this.is_svg = t, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(t) {
    this.h(t);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(t, n, r = null) {
    this.e || (this.is_svg ? this.e = Bg(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = Q(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
    ), this.c(t)), this.i(r);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      ee(this.t, this.n[n], t);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(J);
  }
}
function gl(e, t) {
  return new e(t);
}
let Xr;
function Hr(e) {
  Xr = e;
}
function Ku() {
  if (!Xr)
    throw new Error("Function called outside component initialization");
  return Xr;
}
function lf(e) {
  Ku().$$.on_mount.push(e);
}
function Qu() {
  const e = Ku();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const o = qg(
        /** @type {string} */
        t,
        n,
        { cancelable: r }
      );
      return i.slice().forEach((a) => {
        a.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const jn = [], ir = [];
let Jn = [];
const pl = [], Wg = /* @__PURE__ */ Promise.resolve();
let is = !1;
function Yg() {
  is || (is = !0, Wg.then(Ju));
}
function oo(e) {
  Jn.push(e);
}
const _a = /* @__PURE__ */ new Set();
let Yn = 0;
function Ju() {
  if (Yn !== 0)
    return;
  const e = Xr;
  do {
    try {
      for (; Yn < jn.length; ) {
        const t = jn[Yn];
        Yn++, Hr(t), Vg(t.$$);
      }
    } catch (t) {
      throw jn.length = 0, Yn = 0, t;
    }
    for (Hr(null), jn.length = 0, Yn = 0; ir.length; )
      ir.pop()();
    for (let t = 0; t < Jn.length; t += 1) {
      const n = Jn[t];
      _a.has(n) || (_a.add(n), n());
    }
    Jn.length = 0;
  } while (jn.length);
  for (; pl.length; )
    pl.pop()();
  is = !1, _a.clear(), Hr(e);
}
function Vg(e) {
  if (e.fragment !== null) {
    e.update(), Qt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(oo);
  }
}
function Gg(e) {
  const t = [], n = [];
  Jn.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), Jn = t;
}
const Qi = /* @__PURE__ */ new Set();
let vn;
function Pe() {
  vn = {
    r: 0,
    c: [],
    p: vn
    // parent group
  };
}
function Be() {
  vn.r || Qt(vn.c), vn = vn.p;
}
function te(e, t) {
  e && e.i && (Qi.delete(e), e.i(t));
}
function ie(e, t, n, r) {
  if (e && e.o) {
    if (Qi.has(e))
      return;
    Qi.add(e), vn.c.push(() => {
      Qi.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function Ye(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function bl(e, t) {
  const n = {}, r = {}, i = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const a = e[o], s = t[o];
    if (s) {
      for (const f in a)
        f in s || (r[f] = 1);
      for (const f in s)
        i[f] || (n[f] = s[f], i[f] = 1);
      e[o] = s;
    } else
      for (const f in a)
        i[f] = 1;
  }
  for (const a in r)
    a in n || (n[a] = void 0);
  return n;
}
function yl(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function mt(e) {
  e && e.c();
}
function st(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), oo(() => {
    const o = e.$$.on_mount.map(Xu).filter(ju);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Qt(o), e.$$.on_mount = [];
  }), i.forEach(oo);
}
function ft(e, t) {
  const n = e.$$;
  n.fragment !== null && (Gg(n.after_update), Qt(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xg(e, t) {
  e.$$.dirty[0] === -1 && (jn.push(e), Yg(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function cn(e, t, n, r, i, o, a = null, s = [-1]) {
  const f = Xr;
  Hr(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: pe,
    not_equal: i,
    bound: hl(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: hl(),
    dirty: s,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  a && a(l.root);
  let c = !1;
  if (l.ctx = n ? n(e, t.props || {}, (u, d, ...h) => {
    const m = h.length ? h[0] : d;
    return l.ctx && i(l.ctx[u], l.ctx[u] = m) && (!l.skip_bound && l.bound[u] && l.bound[u](m), c && Xg(e, u)), d;
  }) : [], l.update(), c = !0, Qt(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = Ug(t.target);
      l.fragment && l.fragment.l(u), u.forEach(J);
    } else
      l.fragment && l.fragment.c();
    t.intro && te(e.$$.fragment), st(e, t.target, t.anchor), Ju();
  }
  Hr(f);
}
class un {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ft(this, 1), this.$destroy = pe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ju(n))
      return pe;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Pg(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const jg = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(jg);
function Zg(e) {
  let t;
  return {
    c() {
      t = Q("div"), t.innerHTML = "";
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t);
    }
  };
}
let wl = 200, Kg = 150, Qg = 60, Jg = 300, ep = 60;
function tp(e, t, n) {
  let { data: r } = t, { div: i } = t, { numConcepts: o } = t, { numSlices: a } = t, { sliceCol: s } = t, { normBy: f } = t, l;
  const c = Qu();
  lf(() => {
    u(r);
  });
  function u(q) {
    if (q != null && o > 0) {
      let g = JSON.parse(q);
      const M = wl + Qg * a, _ = Jg + ep * o, S = "#82C1FB";
      l = new d(i).size([M, _]).options({
        highlightScope: "matrix",
        showSlider: !1,
        preserveRowOrder: !0,
        preserveColumnOrder: !0,
        sortOnAxisClick: !1
      }).font({ family: "system-ui", size: 10 }).columns({
        row: "concept",
        column: "id",
        value: "value",
        detail: "example"
      }).colors({
        above: S,
        below: S,
        row: "#eee"
      }).data(g), l.render();
    }
  }
  class d {
    constructor(g = document.createElement("DIV")) {
      this._container = g, this._options = new h(), this.partitions = new D(this), this._dataset = null, this._fieldNames = new w(), this.chartData = null, this.measures = new R(this._getMeasureSvg()), this.scales = new L(), this.renderer = new F(this);
    }
    get fieldNames() {
      return this._fieldNames;
    }
    size(g) {
      return arguments.length ? (this.measures.width = g[0], this.measures.height = g[1], this) : [this.measures.width, this.measures.height];
    }
    colors(g) {
      return arguments.length ? (this.renderer.colors.row = g.row, this.renderer.colors.above = g.above, this.renderer.colors.below = g.below, this.renderer.colors.label = g.label, this) : this.renderer.colors;
    }
    margin(g) {
      return arguments.length ? (this.measures.margin.left = g.left, this.measures.margin.right = g.right, this.measures.margin.top = g.top, this.measures.margin.bottom = g.bottom, this) : this.measures.margin;
    }
    options(g) {
      return arguments.length ? (this._options = Object.assign(this._options, g), this) : this._options;
    }
    columns(g) {
      return arguments.length ? (this._fieldNames.column = g.column, this._fieldNames.row = g.row, this._fieldNames.value = g.value, this._fieldNames.detail = g.detail, this) : this._fieldNames;
    }
    font(g) {
      return arguments.length ? (this.measures.font.family(g.family), this.measures.font.size(g.size), this) : this.measures.font;
    }
    data(g) {
      return arguments.length ? (this._dataset = g, this) : this._dataset;
    }
    events(g) {
      return arguments.length ? (this.renderer.rows.onclick = g.onclick, this.renderer.rows.onhover = g.onhover, this.renderer.rows.oncancel = g.oncancel, this) : {
        onclick: this.renderer.onclick,
        onhover: this.renderer.onhover,
        oncancel: this.renderer.oncancel
      };
    }
    render() {
      const g = this._options;
      return this.chartData = new m(this._dataset, this._fieldNames), this.chartData.numberIsPercentage = g.numberIsPercentage, this.chartData.preserveColumnOrder = g.preserveColumnOrder, this.chartData.preserveRowOrder = g.preserveRowOrder, this.chartData.numOfTopBottom = g.numberOfTopBottom, this.chartData.process(), this.measures.initialize(this.chartData, g.showSlider), this.scales.initialize(this), this.partitions.initialize(), this._container.appendChild(this.partitions.chartArea), this.renderer.rows.highlight = U[g.highlightScope], this.renderer.rows.showTooltip = g.showTooltip, this.renderer.rows.showAnnotation = g.showAnnotation, this.renderer.rows.sortOnAxisClick = g.sortOnAxisClick, this.renderer.columns.sortOnAxisClick = g.sortOnAxisClick, this.renderer.render(), g.showSlider && new Y(this, g.sliderCaption).render(), this.partitions.adjustScrollableBlocks(), this;
    }
    _getMeasureSvg() {
      const g = _e.select(this._container).append("svg").attr("width", 0).attr("height", 0).style("position", "absolute").style("visibility", "hidden");
      return g.append("text"), g;
    }
  }
  class h {
    constructor() {
      this.numberIsPercentage = !1, this.preserveRowOrder = !1, this.preserveColumnOrder = !1, this.showSlider = !0, this.sliderCaption = "Value", this.highlightScope = "matrix", this.numberOfTopBottom = 5, this.showTooltip = !0, this.showAnnotation = !0, this.sortOnAxisClick = !0;
    }
  }
  class m {
    constructor(g, M) {
      this._dataset = g, this._fieldNames = M, this.numberIsPercentage = !1, this.preserveColumnOrder = !1, this.preserveRowOrder = !1, this.columns = null, this.rows = null, this.level = 0, this.defaultLevel = 0, this.average = 0, this.min = 0, this.max = 0, this.numOfTopBottom = 5;
    }
    resetColumns(g) {
      this.columns.forEach((M) => {
        M !== g && (M.order = v.none);
      });
    }
    resetRows(g) {
      this.rows.forEach((M) => {
        M !== g && (M.order = v.none);
      });
    }
    process() {
      const g = this._fieldNames, M = _e.group(this._dataset, (E) => E[g.row]);
      this.columns = [...new Set(this._dataset.map((E) => E[g.column]))].map((E, H) => new p(E, H)), this.preserveColumnOrder || (this.columns.sort((E, H) => E.name.localeCompare(H.name)), this.columns.forEach((E, H) => E.position = H));
      const _ = [...M.keys()];
      this.preserveRowOrder || _.sort((E, H) => E.localeCompare(H)), this.rows = _.map((E, H) => {
        const P = M.get(E), W = this.columns.map((X) => {
          const I = P.find((G) => G[g.column] === X.name);
          return new b(E, X.name, I ? +I[g.value] : null, I[g.detail]);
        });
        return new y(E, H, W);
      });
      const S = this.rows.flatMap((E) => E.cells).filter((E) => E.value).sort((E, H) => E.value - H.value);
      S[0].flag |= x.min, S[S.length - 1].flag |= x.max, S.slice(0, this.numOfTopBottom).forEach((E) => E.flag |= x.bottomGroup), S.slice(-this.numOfTopBottom).forEach((E) => E.flag |= x.topGroup);
      const A = S.reduce((E, H) => E + H.value, 0);
      this.level = this.defaultLevel = this.average = A / S.length, this.min = S[0].value, this.max = S[S.length - 1].value;
    }
  }
  class p {
    constructor(g, M) {
      this.name = g, this.position = M, this.order = v.none;
    }
  }
  class y {
    constructor(g, M, _) {
      this.name = g, this.position = M, this.order = v.none, this.cells = _;
    }
    markBounds() {
      const g = [...this.cells].filter((M) => M.value).sort((M, _) => M.value - _.value);
      g[0].flag |= x.rowMin, g[g.length - 1].flag |= x.rowMax;
    }
  }
  class b {
    constructor(g, M, _, S) {
      this.row = g, this.column = M, this.value = _, this.detail = S, this.flag = x.unspecified;
    }
  }
  class w {
    constructor(g, M, _, S) {
      this.column = g, this.row = M, this.value = _, this.detail = S;
    }
  }
  class v {
    static get none() {
      return 0;
    }
    static get ascending() {
      return 1;
    }
    static get descending() {
      return 2;
    }
  }
  class x {
    static get unspecified() {
      return 0;
    }
    static get min() {
      return 1;
    }
    static get max() {
      return 2;
    }
    static get rowMin() {
      return 4;
    }
    static get rowMax() {
      return 8;
    }
    static get bottomGroup() {
      return 16;
    }
    static get topGroup() {
      return 32;
    }
  }
  class C {
    constructor(g, M, _, S, A) {
      this._svg = g, this._font = M, this._charBox = null, this._box = this._initBox(_, S, A), this.left = 0, this.top = 0, this.getBBox = null, this.calcTextWidth = null, this.calcPosition = null;
    }
    get box() {
      return this._box;
    }
    get offset() {
      return 10;
    }
    show(g, M, _, S) {
      this._charBox || (this._charBox = this.getBBox("M"));
      const A = this, E = 1.4, H = this._calcWidth(M);
      this._box.style("visibility", "visible").select("rect").attr("width", H + 10).attr("height", `${M.length * E + 0.5}em`), P("backtext", "white", 3), P("foretext"), this.move(g, _, S);
      function P(W, z, X) {
        A._box.selectAll("." + W).data(M).join(
          (I) => {
            I.append("text").attr("class", W).attr("dy", (G, Z) => `${E * Z + 1}em`).attr("stroke", z).attr("stroke-width", X).text((G) => G);
          },
          (I) => I.text((G) => G),
          (I) => I.remove()
        );
      }
    }
    // wrap(text, wrapWidth, yAxisAdjustment = 0) {
    //   text.each(function() {
    //     var text = d3.select(this),
    //         words = text.text().split(/\s+/).reverse(),
    //         word,
    //         line = [],
    //         lineNumber = 0,
    //         lineHeight = 1.1, // ems
    //         y = text.attr("y"),
    //         dy = parseFloat(text.attr("dy")) - yAxisAdjustment,
    //         tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", `${dy}em`);
    //     while (word = words.pop()) {
    //       line.push(word);
    //       tspan.text(line.join(" "));
    //       if (tspan.node().getComputedTextLength() > wrapWidth) {
    //         line.pop();
    //         tspan.text(line.join(" "));
    //         line = [word];
    //         tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
    //       }
    //     }
    //   });
    //   return 0;
    // }
    move(g, M, _) {
      if (this._box) {
        const S = M && _ ? new DOMPoint(M, _) : this._convertCoordinate(g, this._svg), A = this._box.node().getBBox(), { left: E, top: H } = this.calcPosition(S, A);
        this.left = E + this.offset, this.top = H + this.offset, this._box.attr("transform", `translate(${this.left},${this.top})`);
      }
    }
    hide() {
      this._box && this._box.style("visibility", "hidden");
    }
    _initBox(g, M, _) {
      const S = this._svg.append("g").attr("fill", "black").call((A) => {
        A.append("rect").attr("opacity", M).attr("stroke", _).attr("stroke-width", 0.5).attr("rx", 4).attr("ry", 4).attr("x", -5).attr("y", -5).attr("fill", g);
      });
      return this._font.applyTo(S), S;
    }
    _calcWidth(g) {
      let M = 0;
      return g.forEach((_) => {
        const S = this.calcTextWidth(_);
        S > M && (M = S);
      }), M;
    }
    _convertCoordinate(g, M) {
      const _ = this._svg.node().createSVGPoint();
      return _.x = g.clientX, _.y = g.clientY, _.matrixTransform(M.node().getScreenCTM().inverse());
    }
  }
  class k extends C {
    constructor(g, M, _, S, A) {
      super(g, M, _, S, A), this._pointer = null;
    }
    show(g, M, _, S, A, E) {
      super.show(g, M, _, S);
      const H = this.box.node().getBBox();
      this.move(g, _ + A - this.offset, S + A - this.offset);
      const P = this.offset / 2;
      let W = this.left, z = this.top, X = W - P, I = z - P, G = X + 30, Z = I + H.height;
      W < _ && (X = _ - A - P, G = X - 30, W = _ - A - H.width), z < S && (I = S - A - P, Z = I - H.height, z = S - A - H.height), this.box.attr("transform", `translate(${W},${z})`), this._removePointer(), this._pointer = this._svg.append("path").attr("fill", "none").attr("stroke", E).attr("stroke-width", 2).attr("d", `M ${_} ${S} L ${X} ${I} L ${X} ${Z} L ${G} ${Z}`);
    }
    hide() {
      super.hide(), this._removePointer();
    }
    _removePointer() {
      this._pointer && (this._pointer.remove(), this._pointer = null);
    }
  }
  class R {
    constructor(g) {
      this._svg = g, this.font = new T(), this.padding = 10, this.margin = { left: 0, right: 0, top: 0, bottom: 0 }, this.width = 0, this.height = 0, this.sliderHeight = 20, this.columnHeight = 0, this.rowWidth = 0, this._minRadius = 25, this.bubbleRadius = 0, this.bubbleDiameter = 0;
    }
    initialize(g, M) {
      this._calculateLabels(g), this._calculateBubbleRadius(g, M);
    }
    _calculateLabels(g) {
      this.columnHeight = Kg, this.rowWidth = wl;
    }
    // if (chartData.columns.length > 0) {
    // }
    // if (chartData.rows.length > 0) {
    //     this.rowWidth = this.margin.left + max(chartData.rows.map(r => r.name + "MM"), this.font.clone().weight("bold"));
    // }
    _calculateBubbleRadius(g, M) {
      const _ = this.width - this.rowWidth, S = this.height - this.columnHeight - this.padding * 2 - (M ? this.sliderHeight : 0), A = g.rows.length, E = g.columns.length, H = (S / A - this.padding) / 2, P = _ / E / 2;
      if (H < P)
        this.bubbleRadius = H;
      else {
        const W = A * P;
        this.bubbleRadius = P > S ? P - (W - S) / A / 2 : P;
      }
      this.bubbleRadius < this._minRadius && (this.bubbleRadius = this._minRadius), this.bubbleDiameter = this.bubbleRadius * 2;
    }
    getBBox(g, M, _) {
      const S = _ ?? this.font, A = this._svg.select("text");
      return A ? (S.applyTo(A), A.text(g), M && A.attr("transform", `rotate(${M})`), A.node().getBBox()) : null;
    }
    calculateStringWidth(g, M, _) {
      const S = this.getBBox(g, M, _);
      return S ? Math.sqrt(S.width * S.width + S.height * S.height) : g.length * this.font.size;
    }
    trim(g) {
      return g.length > 100 ? `${g.substr(0, 10)}...` : g;
    }
  }
  class T {
    constructor(g = "", M = "10pt", _ = "normal", S = "normal") {
      this._family = g, this._size = M, this._style = _, this._weight = S;
    }
    family(g) {
      return arguments.length ? (this._family = g, this) : this._family;
    }
    size(g) {
      return arguments.length ? (this._size = g, this) : this._size;
    }
    style(g) {
      return arguments.length ? (this._style = g, this) : this._style;
    }
    weight(g) {
      return arguments.length ? (this._weight = g, this) : this._weight;
    }
    applyTo(g) {
      g = g instanceof HTMLElement ? _e.select(g) : g, g.style("font-family", this._family).style("font-size", isNaN(+this._size) ? this._size : `${this._size}pt`).style("font-style", this._style).style("font-weight", this._weight);
    }
    clone() {
      return new T(this._family, this._size, this._style, this._weight);
    }
  }
  class D {
    constructor(g) {
      this._chart = g, this.chartArea = this._createDiv(), this.mainBlock = this._createDiv(), this.slider = this._createDiv(), this.columnBlock = this._createDiv(), this.placeHolder = this._createDiv(), this.columns = this._createDiv(), this.matrixBlock = this._createDiv(), this.rows = this._createDiv(), this.matrix = this._createDiv();
    }
    initialize() {
      this._initStyles(), this._initLayout(), this._adjustSize();
    }
    adjustScrollableBlocks() {
      const g = this.matrix.offsetHeight - this.matrix.clientHeight, M = this.matrix.offsetWidth - this.matrix.clientWidth;
      g && (this.rows.style.height = `${this.rows.clientHeight - g}px`), M && (this.columns.style.width = `${this.columns.clientWidth - M}px`);
    }
    changeFont(g) {
      this.chartArea.style.font = g.shorthand;
    }
    _adjustSize() {
      const g = this._chart.measures;
      this.chartArea.style.height = `${g.height}px`, this._chart.options().showSlider && (this.slider.style.height = `${g.sliderHeight}px`), this.columns.style.height = `${g.columnHeight}px`, this.columns.style.width = `${g.width - g.rowWidth - g.margin.left}px`, this.placeHolder.style.width = `${g.rowWidth + g.margin.left}px`, this.placeHolder.style.height = `${g.columnHeight}px`, this.rows.style.width = `${g.rowWidth + g.margin.left}px`, this.matrix.style.width = `${g.width + g.margin.right + g.rowWidth}px`;
    }
    _createDiv() {
      return document.createElement("div");
    }
    _initStyles() {
      const g = this._chart.measures, M = g.width + g.margin.left + g.margin.right;
      let _ = this.chartArea.style;
      _.display = "flex", _.flexDirection = "column", _.cursor = "default", _.userSelect = "none", g.font.applyTo(this.chartArea), _ = this.mainBlock.style, _.display = "flex", _.flexDirection = "column", _.flexGrow = 1, _.height = "1px", _ = this.columnBlock.style, _.textAlign = "left", _.display = "flex", _.flexDirection = "row", _.flexShrink = 0, _.width = "1px", _ = this.placeHolder.style, _.flexShrink = 0, _.backgroundColor = "white", _ = this.columns.style, _.paddingTop = "5px", _.paddingBottom = "5px", _.overflow = "hidden", _.flexShrink = 0, _.width = `${M}px`, _ = this.matrixBlock.style, _.display = "flex", _.flexDirection = "row", _.flexGrow = 0, _.width = "1px", _.overflowY = "auto", _.textAlign = "left", _.width = `${M}px`, _ = this.rows.style, _.overflow = "hidden", _.flexShrink = 0, _ = this.matrix.style, _.overflowX = "auto", this.matrix.onscroll = (S) => {
        this.columns.scrollLeft = this.matrix.scrollLeft, this.rows.scrollTop = this.matrix.scrollTop;
      };
    }
    _initLayout() {
      this.chartArea.appendChild(this.mainBlock), this.mainBlock.appendChild(this.slider), this.mainBlock.appendChild(this.columnBlock), this.mainBlock.appendChild(this.matrixBlock), this.columnBlock.appendChild(this.placeHolder), this.columnBlock.appendChild(this.columns), this.matrixBlock.appendChild(this.rows), this.matrixBlock.appendChild(this.matrix);
    }
  }
  class F {
    constructor(g) {
      this.chart = g, this.colors = {
        row: "#caf0f8",
        above: "#ffd166",
        below: "#118ab2",
        label: "#3c3c43"
      }, this.matrix = { svg: null, g: null, og: null, ig: null }, this.columns = new B(this), this.rows = new V(this), this._uuid = `uu${Date.now()}${Math.floor(Math.random() * 1e4)}`;
    }
    render() {
      this._initMatrix(), this._renderGradients(), this.columns.render(), this.rows.render();
    }
    _createSvg(g, M, _) {
      return _e.select(g).append("svg").attr("width", M + 100).attr("height", _);
    }
    _transform(g, M) {
      return `translate(${g},${M})`;
    }
    _initMatrix() {
      const g = this.chart, M = this.matrix;
      M.svg = this._createSvg(g.partitions.matrix, g.scales.maxX, g.scales.maxY), M.g = M.svg.append("g"), M.og = M.g.append("g"), M.ig = M.svg.append("g").attr("transform", this._transform(0, g.measures.padding / 2));
    }
    uid(g) {
      return `${this._uuid}_${g}`;
    }
    _renderGradients() {
      const g = this.chart, M = (_) => {
        this.matrix.g.append("linearGradient").attr("id", this.uid(_ ? "descending" : "ascending")).attr("x1", 0).attr("x2", g.measures.rowWidth + g.chartData.columns.length * g.measures.bubbleDiameter).attr("y1", "100%").attr("y2", "100%").attr("gradientUnits", "userSpaceOnUse").call((S) => {
          S.append("stop").attr("stop-color", this.colors.row).attr("stop-opacity", _ ? 1 : 0).attr("offset", 0), S.append("stop").attr("stop-color", this.colors.row).attr("stop-opacity", _ ? 0 : 1).attr("offset", 1);
        });
      };
      M(!1), M(!0);
    }
  }
  class N {
    constructor(g) {
      this._mainRenderer = g, this.duration = 500;
    }
    get chart() {
      return this._mainRenderer.chart;
    }
    get matrix() {
      return this._mainRenderer.matrix;
    }
    get colors() {
      return this._mainRenderer.colors;
    }
    get rows() {
      return this._mainRenderer.rows;
    }
    get columns() {
      return this._mainRenderer.columns;
    }
    uid(g) {
      return this._mainRenderer.uid(g);
    }
    url(g) {
      return `url(#${g})`;
    }
  }
  class B extends N {
    constructor(g) {
      super(g), this.text = null, this._arrow = null, this.labels = null, this.axis = null, this._focused = null, this.sortOnAxisClick = !0;
    }
    render() {
      const g = this.chart, S = _e.select(g.partitions.columns).append("svg").attr("width", g.scales.maxX + g.measures.rowWidth + 0).attr("height", g.measures.columnHeight + 0).append("g");
      S.append("text").text(s).attr("y", 10).attr("x", 10).attr("font-weight", "bold").attr("font-size", 12), this.labels = this._renderGroups(S, `translate(0,${g.measures.columnHeight})`, "start", (E) => {
        this.text = E.append("text").attr("y", 0).attr("dy", "-0.25em").attr("transform", "rotate(-45)").attr("fill", this.colors.label).text(this._trim.bind(this)).on("click", this._click.bind(this)).on("pointerenter", this._handlePointerEnter.bind(this)).on("pointerleave", this._handlePointerLeave.bind(this));
      });
      const A = "#a7a7a7";
      this.axis = this._renderGroups(this.matrix.og, void 0, "middle", (E) => {
        E.append("line").attr("y1", 0).attr("y2", g.scales.maxY).attr("stroke-width", 1).attr("stroke", A);
      });
    }
    _renderGroups(g, M, _, S) {
      const A = this.chart, E = g.append("g");
      return M && E.attr("transform", M), E.selectAll("g").data(A.chartData.columns).join("g").attr("text-anchor", _).attr("transform", (H, P) => `translate(${A.scales.x(P) + A.measures.bubbleRadius},0)`).call(S);
    }
    _trim(g) {
      return this.chart.measures.trim("" + g.name);
    }
    _click(g, M) {
      this._sort(M), this._arrow && this._arrow.attr("d", (_) => {
        if (M.order !== v.none && M.name === _.name) {
          const S = this.chart.measures.getBBox(this._trim(_)), A = S.height / 2 + 1, E = S.width, H = 5;
          return M.order === v.descending ? `M 0 ${A} L ${E} ${A} L ${E} ${A + H} L 0 ${A}` : `M 0 ${A} L 0 ${A + H} L ${E} ${A} L 0 ${A}`;
        }
      }), this._focused !== M ? (this.columns.axis.select("line").attr("stroke-width", (_) => _.name === M.name ? 2 : 1), this.columns.text.attr("font-weight", (_) => _.name === M.name ? "bold" : ""), this._focused = M, c("message", {
        selection_type: "col",
        col: "" + M.name,
        row: null,
        sortOrder: M.order
      }), this.rows._rowFocused != null && (this.rows._bubbleRects.attr("stroke-width", 0), this.rows._labelRects.attr("stroke-width", 0), this.rows._rowFocused = null)) : (this.columns.axis.select("line").attr("stroke-width", 1), this.columns.text.attr("font-weight", ""), this._focused = null, c("message", {
        selection_type: "col",
        col: null,
        row: null,
        sortOrder: M.order
      }));
    }
    _sort(g) {
      if (this.sortOnAxisClick) {
        let P = function(W) {
          W.transition().duration((z, X) => X * H).attr("transform", (z) => {
            let X = 0;
            for (let I = 0; I < E.length; I++)
              if (E[I].row === z) {
                z.position = X = I;
                break;
              }
            return `translate(0,${M.chart.scales.y(X)})`;
          });
        };
        const M = this, _ = this.chart.chartData, S = _.columns, A = S.indexOf(g), E = _.rows.map((W) => ({ row: W, column: W.cells[A] }));
        _.resetColumns(g), g.order === v.none ? g.order = v.descending : g.order === v.descending ? g.order = v.ascending : g.order = v.none, g.order === v.ascending ? E.sort((W, z) => W.column.value - z.column.value) : g.order === v.descending && E.sort((W, z) => z.column.value - W.column.value);
        const H = this.duration / _.rows.length;
        P(this.rows.axis), P(this.rows.labels), this.rows.relocateAnnotation();
      }
    }
    _handlePointerEnter(g, M) {
      this.onhover && this.onhover(g, M), this.axis.select("line").attr("stroke-width", (_) => _.name === M.name || this._focused != null && _.name === this._focused.name ? 2 : 1), this.text.attr("font-weight", (_) => _.name === M.name || this._focused != null && _.name === this._focused.name ? "bold" : "");
    }
    _handlePointerLeave(g, M) {
      this._focused == null ? (this.oncancel && this.oncancel(g, M), this.axis.select("line").attr("stroke-width", 1), this.text.attr("font-weight", "")) : (this.axis.select("line").attr("stroke-width", (_) => _.name === this._focused.name ? 2 : 1), this.text.attr("font-weight", (_) => _.name === this._focused.name ? "bold" : ""));
    }
  }
  class V extends N {
    constructor(g) {
      super(g), this._tooltip = null, this._annotation = null, this.labels = null, this.axis = null, this.highlight = U.matrix, this.showTooltip = !0, this.showAnnotation = !0, this.sortOnAxisClick = !0, this._labelRects = null, this._bubbleRects = null, this._bubbles = null, this._focused = null, this._rowFocused = null, this.onhover = null, this.oncancel = null, this.onclick = null;
    }
    get bubbles() {
      return this._bubbles;
    }
    render() {
      this._initInfoLayer();
      const g = this.chart, M = _e.select(g.partitions.rows).append("svg").attr("width", g.measures.rowWidth).attr("height", g.scales.maxY).append("g").attr("transform", `translate(0,${g.measures.padding / 2})`);
      this.labels = this._renderGroups(M, (S) => {
        this._labelRects = this._renderRect(S, 1, g.measures.rowWidth + 10).on("click", this._click.bind(this)), S.append("text").attr("font-weight", "bold").attr("y", g.measures.bubbleRadius).attr("dx", "1em").attr("dy", "0.25em").attr("fill", this.colors.label).text((A) => A.name).on("click", this._click.bind(this));
      });
      const _ = g.chartData.columns.length * g.measures.bubbleDiameter;
      this.axis = this._renderGroups(this.matrix.ig.append("g"), (S) => {
        this._bubbleRects = this._renderRect(S, -11, _ + 10), this._bubbles = S.append("g").selectAll("g").data((A) => A.cells).join("g").attr("transform", (A, E) => `translate(${g.scales.x(E) + g.measures.bubbleRadius},0)`).call((A) => {
          A.append("circle").attr("class", "bubble").attr("fill", (E) => E.value >= g.chartData.average ? this.colors.above : this.colors.below).attr("opacity", 0.5).attr("stroke-width", 2).attr("cy", g.measures.bubbleRadius).attr("r", 0);
        }).on("click", this._handleClick.bind(this)).on("pointerenter", this._handlePointerEnter.bind(this)).on("pointermove", this._handlePointerMove.bind(this)).on("pointerleave", this._handlePointerLeave.bind(this)), this._bubbles.selectAll("circle").transition().ease(_e.easeBounce).duration(500).attr("r", (A) => A.value ? g.scales.r(A.value) : 0);
      });
    }
    // this.highlightBubbles(); // Remove highlighting
    relocateAnnotation(g = !0) {
      if (this._focused) {
        const M = () => this._showAnnotation(null, this._focused);
        this._annotation.hide(), g ? setTimeout(M, this.duration) : M();
      }
    }
    _handleClick(g, M) {
      this.chart, this.onclick && this.onclick(g, M);
    }
    _showAnnotation(g, M) {
      const _ = this.chart, S = this._annotation, A = (E, H) => {
        const P = E.find((W) => W.name === H);
        return P ? P.position : 0;
      };
      if (this.showAnnotation) {
        const E = _.scales.x(A(_.chartData.columns, M.column)), H = _.scales.y(A(_.chartData.rows, M.row)), P = _.scales.r(M.value), W = M.value >= _.chartData.level ? this.colors.above : this.colors.below;
        this._focused = M, S.hide(), S.show(null, this._getTooltipContent(M), E + _.measures.bubbleRadius, H + _.measures.bubbleRadius + _.measures.padding / 2, P, _e.color(W).darker(1));
      }
    }
    _handlePointerEnter(g, M) {
      const _ = this.chart;
      this.onhover && this.onhover(g, M), this.columns.axis.select("line").attr("stroke-width", (S) => S.name === M.column ? 2 : 1), this._focused == null && (this.showTooltip && this._tooltip.show(g, this._getTooltipContent(M)), this.onhover && this.onhover(g, M), this._bubbles.filter((S) => S === M).call((S) => {
        S.insert("circle", "circle").attr("class", "shadow").attr("cy", _.measures.bubbleRadius).attr("r", (A) => A.value ? _.scales.r(A.value) : 0).attr("fill", (A) => {
          const E = A.value >= _.chartData.level ? this.colors.above : this.colors.below;
          return _e.color(E).darker(1);
        }).attr("opacity", 0.5);
      }));
    }
    _handlePointerMove(g) {
      this.showTooltip && this._tooltip.move(g);
    }
    _handlePointerLeave(g, M) {
      this.showTooltip && this._tooltip.hide(), this._focused == null && (this.oncancel && this.oncancel(g, M), this.columns.axis.select("line").attr("stroke-width", 1), this._bubbles.filter((_) => _ === M).call((_) => {
        _.select(".bubble").attr("transform", ""), _.select(".shadow").remove();
      }));
    }
    highlightBubbles(g) {
      const M = this.chart.measures.bubbleRadius, _ = (P) => this.highlight === U.byRow && ((P.flag & x.rowMin) === x.rowMin || (P.flag & x.rowMax) === x.rowMax), S = (P) => this.highlight === U.matrix && ((P.flag & x.min) === x.min || (P.flag & x.max) === x.max), A = (P) => this.highlight === U.top && (P.flag & x.topGroup) === x.topGroup, E = (P) => this.highlight === U.bottom && (P.flag & x.bottomGroup) === x.bottomGroup, H = this._bubbles.filter((P) => P.value && (_(P) || S(P) || A(P) || E(P)));
      H.select("circle").attr("stroke", (P) => {
        const W = P.value >= this.chart.chartData.level ? this.colors.above : this.colors.below;
        return _e.color(W).darker(0.75);
      }), g || H.append("text").attr("text-anchor", "middle").attr("y", (P) => {
        const W = this.chart.scales.r(P.value);
        return this.chart.measures.calculateStringWidth(this._formatValue(P.value)) + 5 > W * 2 ? M + W + 12 : M;
      }).attr("dy", "0.3em").attr("fill", this.colors.label).attr("font-weight", "bold").text((P) => this._formatValue(P.value));
    }
    _formatValue(g, M = !0) {
      const _ = this.chart.chartData.numberIsPercentage ? ".1%" : M ? ".2s" : ",.2f";
      return _e.format(_)(g);
    }
    _initInfoLayer() {
      const g = this, M = this.chart.measures.font;
      if (this.showAnnotation) {
        const S = M.clone().family("system-ui").size("11px").weight("bold");
        this._annotation = new k(this.matrix.svg, S, "none"), _(this._annotation, S);
      }
      this.showTooltip && (this._tooltip = new C(this.matrix.svg, M, "white", 0.7, "#aaa"), _(this._tooltip, M));
      function _(S, A) {
        S.getBBox = (E) => g.chart.measures.getBBox(E, void 0, A), S.calcTextWidth = (E) => g.chart.measures.calculateStringWidth(E, void 0, A), S.calcPosition = (E, H) => g._calcTooltipPosition(E, H);
      }
    }
    _getTooltipContent(g) {
      if (this.chart.fieldNames, f === "")
        return [`${g.value} docs`];
      if (f === "concept")
        return [`${_e.format(".1%")(g.value)} of concept`];
      if (f === "slice")
        return [`${_e.format(".1%")(g.value)} of slice`];
    }
    _calcTooltipPosition(g, M) {
      const _ = this.matrix.svg.node().getBoundingClientRect(), S = g.x + _.left, A = g.y + _.top, E = 5, H = S + M.width + E > _.right ? g.x - M.width - E : g.x + E, P = A + M.height + E > _.bottom ? g.y - M.height - E : g.y + E;
      return { left: H, top: P };
    }
    _renderGroups(g, M) {
      const _ = this.chart;
      return g.selectAll("g").data(_.chartData.rows).join("g").attr("transform", (S, A) => `translate(0,${_.scales.y(A)})`).call(M).on("click", this._rowClick.bind(this)).on("pointerenter", (S, A) => {
        this._bubbleRects.attr("fill", (E) => E.name === A.name ? _e.color(this.colors.row).darker(0.3) : this.colors.row), this._labelRects.attr("fill", (E) => E.name === A.name ? _e.color(this.colors.row).darker(0.3) : this.colors.row);
      }).on(
        "pointerleave",
        // this._labelRects.attr("stroke-width", row => row.name === d.name ? 2 : 0);
        (S, A) => {
          this._bubbleRects.attr("fill", this.colors.row), this._labelRects.attr("fill", this.colors.row);
        }
      );
    }
    _rowClick(g, M) {
      this._rowFocused !== M ? (this._bubbleRects.attr("stroke-width", (_) => _.name === M.name ? 2 : 0), this._labelRects.attr("stroke-width", (_) => _.name === M.name ? 2 : 0), this._bubbleRects.attr("fill", (_) => _.name === M.name ? _e.color(this.colors.row).darker(0.3) : this.colors.row), this._labelRects.attr("fill", (_) => _.name === M.name ? _e.color(this.colors.row).darker(0.3) : this.colors.row), this._rowFocused = M, c("message", {
        selection_type: "row",
        row: "" + M.name,
        col: null,
        sortOrder: M.order
      }), this.columns._focused != null && (this.columns.axis.select("line").attr("stroke-width", 1), this.columns.text.attr("font-weight", ""), this.columns._focused = null)) : (this._bubbleRects.attr("stroke-width", 0), this._labelRects.attr("stroke-width", 0), this._bubbleRects.attr("fill", this.colors.row), this._labelRects.attr("fill", this.colors.row), this._rowFocused = null, c("message", {
        selection_type: "row",
        row: null,
        col: null,
        sortOrder: M.order
      }));
    }
    _renderRect(g, M, _) {
      const S = this.chart;
      return g.append("rect").attr("width", _).attr("height", S.measures.bubbleDiameter).attr("x", M).attr("rx", 10).attr("opacity", 0.5).attr("fill", this.colors.row).attr("stroke", _e.color(this.colors.row).darker(1)).attr("stroke-width", 0);
    }
    _click(g, M) {
      this._sort(M), this._labelRects.attr("fill", (_) => _.order === v.ascending ? "white" : this.colors.row), this._bubbleRects.attr("fill", (_) => {
        if (_.order === v.none)
          return this.colors.row;
        {
          const S = this.uid(_.order === v.ascending ? "ascending" : "descending");
          return _ === M ? this.url(S) : this.colors.row;
        }
      });
    }
    _sort(g) {
      if (this.sortOnAxisClick) {
        let P = function(W) {
          W.transition().duration((z, X) => X * A).attr("transform", (z) => {
            let X = 0;
            for (let I = 0; I < S.length; I++)
              if (S[I].column === z.name) {
                z.position = X = I, M.push(I);
                break;
              }
            return `translate(${E(X) + H},0)`;
          });
        };
        const M = [], _ = this.chart.chartData, S = g.cells.map((W) => W);
        _.resetRows(g), g.order === v.none ? g.order = v.descending : g.order === v.descending ? g.order = v.ascending : g.order = v.none, g.order === v.ascending ? S.sort((W, z) => W.value - z.value) : g.order === v.descending && S.sort((W, z) => z.value - W.value);
        const A = this.duration / _.columns.length, E = this.chart.scales.x, H = this.chart.measures.bubbleRadius;
        P(this.columns.axis), P(this.columns.labels), this.relocateAnnotation(), this._bubbles.transition().duration((W, z) => z * A).attr("transform", (W, z) => `translate(${E(M[z]) + H},0)`);
      }
    }
  }
  class U {
    static get matrix() {
      return 0;
    }
    static get byRow() {
      return 1;
    }
    static get top() {
      return 2;
    }
    static get bottom() {
      return 3;
    }
  }
  class L {
    constructor() {
      this.x = null, this.y = null, this.r = null, this._maxX = 0, this._maxY = 0;
    }
    get maxX() {
      return this._maxX;
    }
    get maxY() {
      return this._maxY;
    }
    initialize(g) {
      const M = g.measures, _ = g.chartData;
      this.x = (S) => S * M.bubbleDiameter, this.y = (S) => S * (M.bubbleDiameter + M.padding), this.r = _e.scaleLinear().domain([_.min, _.max]).range([M.bubbleRadius * 0.2, M.bubbleRadius - 1.5]), this._maxX = this.x(_.columns.length), this._maxY = this.y(_.rows.length);
    }
  }
  class Y {
    constructor(g, M) {
      this._chart = g, this._caption = M, this._g = null, this._label = null, this._below = null, this._above = null, this._width = 0, this._min = 0, this._max = 0, this._defaultValue = 0;
    }
    get level() {
      return this._chart.chartData.level;
    }
    set level(g) {
      this._chart.chartData.level = g;
    }
    get defaultLevel() {
      return this._chart.chartData.defaultLevel;
    }
    get isPercent() {
      return this._chart.chartData.numberIsPercentage;
    }
    get height() {
      return this._chart.measures.sliderHeight;
    }
    get rowRenderer() {
      return this._chart.renderer.rows;
    }
    render() {
      const g = this._chart.measures;
      this._initialize(), this._g = _e.select(this._chart.partitions.slider).append("svg").attr("width", g.width).attr("height", this.height).append("g"), this._renderLabel(), this._renderColorRects(), this._renderSlider();
    }
    _initialize() {
      const g = this._chart.measures, M = this._chart.chartData;
      this._defaultValue = this.isPercent ? this.defaultLevel * 100 : this._roundUp(this.defaultLevel, 1), this._width = (g.width - g.rowWidth) / 2;
      let _ = M.min, S = M.max;
      this.isPercent && (_ = _ * 100, S = S * 100 + 1, _ = _ > 0 ? _ - 1 : _), this._min = _, this._max = S;
    }
    _renderLabel() {
      this._label = this._g.append("text").attr("x", this._width + 12).attr("y", 10).attr("dy", "0.5em").attr("fill", "black"), this._updateLabel(this._defaultValue);
    }
    _renderColorRects() {
      const { a: g, b: M } = this._getSafeBound(), _ = (this._defaultValue - g) / (M - g) * this._width;
      this._below = this._g.append("rect").attr("y", 2).attr("rx", 5).attr("width", _).attr("height", this.height - 2).attr("opacity", 0.5).attr("fill", this._chart.renderer.colors.below), this._above = this._g.append("rect").attr("x", _).attr("y", 2).attr("rx", 5).attr("width", this._width - _).attr("height", this.height - 2).attr("opacity", 0.5).attr("fill", this._chart.renderer.colors.above);
    }
    _renderSlider() {
      const { a: g, b: M } = this._getSafeBound(), _ = this._g.append("foreignObject").attr("width", this._width + 2).attr("height", this.height);
      this._slider = _.append("xhtml:input").attr("type", "range").attr("min", g).attr("max", M).style("width", `${this._width - 5}px`).style("height", `${this._height}px`).on("click", (S) => S.stopPropagation()).on("dblclick", (S) => {
        this._slider.node().value = this._defaultValue, this._change(), S.stopPropagation();
      }).on("input", () => this._change()), this._slider.node().value = this._defaultValue;
    }
    _change() {
      const { a: g, b: M } = this._getSafeBound(), _ = +this._slider.node().value, S = _ < g ? g : _ > M ? M : _, A = (S - g) / (M - g) * this._width;
      this._below.attr("width", A), this._above.attr("x", A).attr("width", this._width - A), this._updateLabel(_), this.level = this.isPercent ? _ / 100 : _;
      const E = this._chart.renderer.colors;
      this.rowRenderer.bubbles.selectAll("circle").transition().duration(1e3).ease(_e.easeBounce).attr("fill", (H) => H.value >= this.level ? E.above : E.below).attr("opacity", 0.5), this.rowRenderer.relocateAnnotation(!1);
    }
    _getSafeBound() {
      const g = this.isPercent ? this._min : this._roundDown(this._min, 2), M = this.isPercent ? this._max : this._roundUp(this._max, 2);
      return { a: g, b: M };
    }
    _roundUp(g, M) {
      const _ = g < 0 ? -1 : 1, S = Math.ceil(Math.abs(g)).toString(), A = Math.pow(10, S.length - M);
      return Math.ceil(+S / A) * A * _;
    }
    _roundDown(g, M) {
      const _ = g < 0 ? -1 : 1, S = g < 0 ? 1 : 0, A = Math.floor(Math.abs(g)).toString(), E = Math.pow(10, A.length - M);
      return (Math.floor(+A / E) + S) * E * _;
    }
    _updateLabel(g) {
      const M = g.toFixed(0), _ = this.isPercent ? `${M}%` : _e.format(",.2r")(M);
      this._label.text(`${this._caption} = ${_}`);
    }
  }
  return e.$$set = (q) => {
    "data" in q && n(0, r = q.data), "div" in q && n(1, i = q.div), "numConcepts" in q && n(2, o = q.numConcepts), "numSlices" in q && n(3, a = q.numSlices), "sliceCol" in q && n(4, s = q.sliceCol), "normBy" in q && n(5, f = q.normBy);
  }, [r, i, o, a, s, f];
}
class np extends un {
  constructor(t) {
    super(), cn(this, t, tp, Zg, Et, {
      data: 0,
      div: 1,
      numConcepts: 2,
      numSlices: 3,
      sliceCol: 4,
      normBy: 5
    });
  }
}
function _l(e, t, n) {
  const r = e.slice();
  return r[56] = t[n], r[58] = n, r;
}
const rp = (e) => ({ row: e[0] & /*c_rows*/
8 }), vl = (e) => ({ row: (
  /*row*/
  e[56]
), n: (
  /*n*/
  e[58]
) });
function xl(e, t, n) {
  const r = e.slice();
  return r[59] = t[n], r[61] = n, r;
}
const ip = (e) => ({ row: e[0] & /*c_rows*/
8 }), Ml = (e) => ({ row: (
  /*row*/
  e[56]
), n: (
  /*n*/
  e[58]
) });
function Sl(e, t, n) {
  const r = e.slice();
  return r[59] = t[n], r;
}
const op = (e) => ({
  sortOrder: e[0] & /*sortOrder*/
  2,
  sortBy: e[0] & /*sortBy*/
  1
}), kl = (e) => ({
  sortOrder: (
    /*sortOrder*/
    e[1]
  ),
  sortBy: (
    /*sortBy*/
    e[0]
  )
});
function Tl(e, t, n) {
  const r = e.slice();
  return r[59] = t[n], r[64] = t, r[65] = n, r;
}
function Cl(e, t, n) {
  const r = e.slice();
  return r[66] = t[n], r;
}
function ap(e) {
  let t, n, r = Ye(
    /*columns*/
    e[4]
  ), i = [];
  for (let a = 0; a < r.length; a += 1)
    i[a] = El(Tl(e, r, a));
  let o = (
    /*showExpandIcon*/
    e[11] && Nl()
  );
  return {
    c() {
      t = Q("tr");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      n = ye(), o && o.c(), K(t, "class", "svelte-dsaf7t");
    },
    m(a, s) {
      ee(a, t, s);
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(t, null);
      re(t, n), o && o.m(t, null);
    },
    p(a, s) {
      if (s[0] & /*asStringArray, columns, classNameInput, filterSelections, classNameSelect, filterValues*/
      75595796) {
        r = Ye(
          /*columns*/
          a[4]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const l = Tl(a, r, f);
          i[f] ? i[f].p(l, s) : (i[f] = El(l), i[f].c(), i[f].m(t, n));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
      /*showExpandIcon*/
      a[11] ? o || (o = Nl(), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && J(t), Fn(i, a), o && o.d();
    }
  };
}
function sp(e) {
  let t, n, r = (
    /*col*/
    (e[59].filterPlaceholder || "") + ""
  ), i, o, a, s, f = Ye(
    /*filterValues*/
    e[23][
      /*col*/
      e[59].key
    ]
  ), l = [];
  for (let u = 0; u < f.length; u += 1)
    l[u] = Al(Cl(e, f, u));
  function c() {
    e[44].call(
      t,
      /*col*/
      e[59]
    );
  }
  return {
    c() {
      t = Q("select"), n = Q("option"), i = je(r);
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      n.__value = void 0, Gr(n, n.__value), K(t, "class", o = xe(
        /*asStringArray*/
        e[26](
          /*classNameSelect*/
          e[15]
        )
      ) + " svelte-dsaf7t"), /*filterSelections*/
      e[2][
        /*col*/
        e[59].key
      ] === void 0 && oo(c);
    },
    m(u, d) {
      ee(u, t, d), re(t, n), re(n, i);
      for (let h = 0; h < l.length; h += 1)
        l[h] && l[h].m(t, null);
      ml(
        t,
        /*filterSelections*/
        e[2][
          /*col*/
          e[59].key
        ],
        !0
      ), a || (s = Nt(t, "change", c), a = !0);
    },
    p(u, d) {
      if (e = u, d[0] & /*columns*/
      16 && r !== (r = /*col*/
      (e[59].filterPlaceholder || "") + "") && Vt(i, r), d[0] & /*filterValues, columns*/
      8388624) {
        f = Ye(
          /*filterValues*/
          e[23][
            /*col*/
            e[59].key
          ]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const m = Cl(e, f, h);
          l[h] ? l[h].p(m, d) : (l[h] = Al(m), l[h].c(), l[h].m(t, null));
        }
        for (; h < l.length; h += 1)
          l[h].d(1);
        l.length = f.length;
      }
      d[0] & /*classNameSelect*/
      32768 && o !== (o = xe(
        /*asStringArray*/
        e[26](
          /*classNameSelect*/
          e[15]
        )
      ) + " svelte-dsaf7t") && K(t, "class", o), d[0] & /*filterSelections, columns, filterValues*/
      8388628 && ml(
        t,
        /*filterSelections*/
        e[2][
          /*col*/
          e[59].key
        ]
      );
    },
    d(u) {
      u && J(t), Fn(l, u), a = !1, s();
    }
  };
}
function fp(e) {
  let t, n, r, i, o;
  function a() {
    e[43].call(
      t,
      /*col*/
      e[59]
    );
  }
  return {
    c() {
      t = Q("input"), K(t, "class", n = xe(
        /*asStringArray*/
        e[26](
          /*classNameInput*/
          e[16]
        )
      ) + " svelte-dsaf7t"), K(t, "placeholder", r = /*col*/
      e[59].filterPlaceholder);
    },
    m(s, f) {
      ee(s, t, f), Gr(
        t,
        /*filterSelections*/
        e[2][
          /*col*/
          e[59].key
        ]
      ), i || (o = Nt(t, "input", a), i = !0);
    },
    p(s, f) {
      e = s, f[0] & /*classNameInput*/
      65536 && n !== (n = xe(
        /*asStringArray*/
        e[26](
          /*classNameInput*/
          e[16]
        )
      ) + " svelte-dsaf7t") && K(t, "class", n), f[0] & /*columns, filterValues*/
      8388624 && r !== (r = /*col*/
      e[59].filterPlaceholder) && K(t, "placeholder", r), f[0] & /*filterSelections, columns, filterValues*/
      8388628 && t.value !== /*filterSelections*/
      e[2][
        /*col*/
        e[59].key
      ] && Gr(
        t,
        /*filterSelections*/
        e[2][
          /*col*/
          e[59].key
        ]
      );
    },
    d(s) {
      s && J(t), i = !1, o();
    }
  };
}
function Al(e) {
  let t, n = (
    /*option*/
    e[66].name + ""
  ), r, i;
  return {
    c() {
      t = Q("option"), r = je(n), t.__value = i = /*option*/
      e[66].value, Gr(t, t.__value);
    },
    m(o, a) {
      ee(o, t, a), re(t, r);
    },
    p(o, a) {
      a[0] & /*filterValues, columns*/
      8388624 && n !== (n = /*option*/
      o[66].name + "") && Vt(r, n), a[0] & /*filterValues, columns*/
      8388624 && i !== (i = /*option*/
      o[66].value) && (t.__value = i, Gr(t, t.__value));
    },
    d(o) {
      o && J(t);
    }
  };
}
function El(e) {
  let t, n;
  function r(a, s) {
    if (!/*col*/
    a[59].hideFilterHeader && /*col*/
    a[59].searchValue !== void 0)
      return fp;
    if (!/*col*/
    a[59].hideFilterHeader && /*filterValues*/
    a[23][
      /*col*/
      a[59].key
    ] !== void 0)
      return sp;
  }
  let i = r(e), o = i && i(e);
  return {
    c() {
      t = Q("th"), o && o.c(), K(t, "class", n = xe(
        /*asStringArray*/
        e[26]([
          /*col*/
          e[59].headerFilterClass
        ])
      ) + " svelte-dsaf7t");
    },
    m(a, s) {
      ee(a, t, s), o && o.m(t, null);
    },
    p(a, s) {
      i === (i = r(a)) && o ? o.p(a, s) : (o && o.d(1), o = i && i(a), o && (o.c(), o.m(t, null))), s[0] & /*columns, filterValues*/
      8388624 && n !== (n = xe(
        /*asStringArray*/
        a[26]([
          /*col*/
          a[59].headerFilterClass
        ])
      ) + " svelte-dsaf7t") && K(t, "class", n);
    },
    d(a) {
      a && J(t), o && o.d();
    }
  };
}
function Nl(e) {
  let t;
  return {
    c() {
      t = Q("th");
    },
    m(n, r) {
      ee(n, t, r);
    },
    d(n) {
      n && J(t);
    }
  };
}
function lp(e) {
  let t, n;
  return {
    c() {
      t = new Ho(!1), n = br(), t.a = n;
    },
    m(r, i) {
      t.m(
        /*iconSortable*/
        e[8],
        r,
        i
      ), ee(r, n, i);
    },
    p(r, i) {
      i[0] & /*iconSortable*/
      256 && t.p(
        /*iconSortable*/
        r[8]
      );
    },
    d(r) {
      r && (J(n), t.d());
    }
  };
}
function cp(e) {
  let t, n = (
    /*sortOrder*/
    (e[1] === 1 ? (
      /*iconAsc*/
      e[6]
    ) : (
      /*iconDesc*/
      e[7]
    )) + ""
  ), r;
  return {
    c() {
      t = new Ho(!1), r = br(), t.a = r;
    },
    m(i, o) {
      t.m(n, i, o), ee(i, r, o);
    },
    p(i, o) {
      o[0] & /*sortOrder, iconAsc, iconDesc*/
      194 && n !== (n = /*sortOrder*/
      (i[1] === 1 ? (
        /*iconAsc*/
        i[6]
      ) : (
        /*iconDesc*/
        i[7]
      )) + "") && t.p(n);
    },
    d(i) {
      i && (J(r), t.d());
    }
  };
}
function Rl(e) {
  let t, n = (
    /*col*/
    e[59].title + ""
  ), r, i, o, a, s;
  function f(h, m) {
    if (
      /*sortBy*/
      h[0] === /*col*/
      h[59].key
    )
      return cp;
    if (
      /*col*/
      h[59].sortable
    )
      return lp;
  }
  let l = f(e), c = l && l(e);
  function u(...h) {
    return (
      /*click_handler*/
      e[45](
        /*col*/
        e[59],
        ...h
      )
    );
  }
  function d(...h) {
    return (
      /*keypress_handler*/
      e[46](
        /*col*/
        e[59],
        ...h
      )
    );
  }
  return {
    c() {
      t = Q("th"), r = je(n), i = ye(), c && c.c(), K(t, "class", o = xe(
        /*asStringArray*/
        e[26]([
          /*col*/
          e[59].sortable ? "isSortable" : "",
          /*col*/
          e[59].headerClass
        ])
      ) + " svelte-dsaf7t"), K(t, "tabindex", "0");
    },
    m(h, m) {
      ee(h, t, m), re(t, r), re(t, i), c && c.m(t, null), a || (s = [
        Nt(t, "click", u),
        Nt(t, "keypress", d)
      ], a = !0);
    },
    p(h, m) {
      e = h, m[0] & /*columns*/
      16 && n !== (n = /*col*/
      e[59].title + "") && Vt(r, n), l === (l = f(e)) && c ? c.p(e, m) : (c && c.d(1), c = l && l(e), c && (c.c(), c.m(t, null))), m[0] & /*columns, filterValues*/
      8388624 && o !== (o = xe(
        /*asStringArray*/
        e[26]([
          /*col*/
          e[59].sortable ? "isSortable" : "",
          /*col*/
          e[59].headerClass
        ])
      ) + " svelte-dsaf7t") && K(t, "class", o);
    },
    d(h) {
      h && J(t), c && c.d(), a = !1, Qt(s);
    }
  };
}
function Ll(e) {
  let t;
  return {
    c() {
      t = Q("th");
    },
    m(n, r) {
      ee(n, t, r);
    },
    d(n) {
      n && J(t);
    }
  };
}
function up(e) {
  let t, n, r = Ye(
    /*columns*/
    e[4]
  ), i = [];
  for (let a = 0; a < r.length; a += 1)
    i[a] = Rl(Sl(e, r, a));
  let o = (
    /*showExpandIcon*/
    e[11] && Ll()
  );
  return {
    c() {
      t = Q("tr");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      n = ye(), o && o.c();
    },
    m(a, s) {
      ee(a, t, s);
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(t, null);
      re(t, n), o && o.m(t, null);
    },
    p(a, s) {
      if (s[0] & /*asStringArray, columns, handleClickCol, sortOrder, iconAsc, iconDesc, sortBy, iconSortable*/
      201327059) {
        r = Ye(
          /*columns*/
          a[4]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const l = Sl(a, r, f);
          i[f] ? i[f].p(l, s) : (i[f] = Rl(l), i[f].c(), i[f].m(t, n));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
      /*showExpandIcon*/
      a[11] ? o || (o = Ll(), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && J(t), Fn(i, a), o && o.d();
    }
  };
}
function dp(e) {
  let t = (
    /*col*/
    (e[59].renderValue ? (
      /*col*/
      e[59].renderValue(
        /*row*/
        e[56],
        /*n*/
        e[58],
        /*colIndex*/
        e[61]
      )
    ) : (
      /*col*/
      e[59].value(
        /*row*/
        e[56],
        /*n*/
        e[58],
        /*colIndex*/
        e[61]
      )
    )) + ""
  ), n;
  return {
    c() {
      n = je(t);
    },
    m(r, i) {
      ee(r, n, i);
    },
    p(r, i) {
      i[0] & /*columns, c_rows*/
      24 && t !== (t = /*col*/
      (r[59].renderValue ? (
        /*col*/
        r[59].renderValue(
          /*row*/
          r[56],
          /*n*/
          r[58],
          /*colIndex*/
          r[61]
        )
      ) : (
        /*col*/
        r[59].value(
          /*row*/
          r[56],
          /*n*/
          r[58],
          /*colIndex*/
          r[61]
        )
      )) + "") && Vt(n, t);
    },
    i: pe,
    o: pe,
    d(r) {
      r && J(n);
    }
  };
}
function hp(e) {
  let t, n = (
    /*col*/
    (e[59].renderValue ? (
      /*col*/
      e[59].renderValue(
        /*row*/
        e[56],
        /*n*/
        e[58],
        /*colIndex*/
        e[61]
      )
    ) : (
      /*col*/
      e[59].value(
        /*row*/
        e[56],
        /*n*/
        e[58],
        /*colIndex*/
        e[61]
      )
    )) + ""
  ), r;
  return {
    c() {
      t = new Ho(!1), r = br(), t.a = r;
    },
    m(i, o) {
      t.m(n, i, o), ee(i, r, o);
    },
    p(i, o) {
      o[0] & /*columns, c_rows*/
      24 && n !== (n = /*col*/
      (i[59].renderValue ? (
        /*col*/
        i[59].renderValue(
          /*row*/
          i[56],
          /*n*/
          i[58],
          /*colIndex*/
          i[61]
        )
      ) : (
        /*col*/
        i[59].value(
          /*row*/
          i[56],
          /*n*/
          i[58],
          /*colIndex*/
          i[61]
        )
      )) + "") && t.p(n);
    },
    i: pe,
    o: pe,
    d(i) {
      i && (J(r), t.d());
    }
  };
}
function mp(e) {
  let t, n, r;
  const i = [
    /*col*/
    e[59].renderComponent.props || {},
    { row: (
      /*row*/
      e[56]
    ) },
    { col: (
      /*col*/
      e[59]
    ) }
  ];
  var o = (
    /*col*/
    e[59].renderComponent.component || /*col*/
    e[59].renderComponent
  );
  function a(s, f) {
    let l = {};
    for (let c = 0; c < i.length; c += 1)
      l = rs(l, i[c]);
    return f !== void 0 && f[0] & /*columns, c_rows*/
    24 && (l = rs(l, bl(i, [
      f[0] & /*columns*/
      16 && yl(
        /*col*/
        s[59].renderComponent.props || {}
      ),
      f[0] & /*c_rows*/
      8 && { row: (
        /*row*/
        s[56]
      ) },
      f[0] & /*columns*/
      16 && { col: (
        /*col*/
        s[59]
      ) }
    ]))), { props: l };
  }
  return o && (t = gl(o, a(e))), {
    c() {
      t && mt(t.$$.fragment), n = br();
    },
    m(s, f) {
      t && st(t, s, f), ee(s, n, f), r = !0;
    },
    p(s, f) {
      if (f[0] & /*columns*/
      16 && o !== (o = /*col*/
      s[59].renderComponent.component || /*col*/
      s[59].renderComponent)) {
        if (t) {
          Pe();
          const l = t;
          ie(l.$$.fragment, 1, 0, () => {
            ft(l, 1);
          }), Be();
        }
        o ? (t = gl(o, a(s, f)), mt(t.$$.fragment), te(t.$$.fragment, 1), st(t, n.parentNode, n)) : t = null;
      } else if (o) {
        const l = f[0] & /*columns, c_rows*/
        24 ? bl(i, [
          f[0] & /*columns*/
          16 && yl(
            /*col*/
            s[59].renderComponent.props || {}
          ),
          f[0] & /*c_rows*/
          8 && { row: (
            /*row*/
            s[56]
          ) },
          f[0] & /*columns*/
          16 && { col: (
            /*col*/
            s[59]
          ) }
        ]) : {};
        t.$set(l);
      }
    },
    i(s) {
      r || (t && te(t.$$.fragment, s), r = !0);
    },
    o(s) {
      t && ie(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && J(n), t && ft(t, s);
    }
  };
}
function Dl(e) {
  let t, n, r, i, o, a, s;
  const f = [mp, hp, dp], l = [];
  function c(h, m) {
    return (
      /*col*/
      h[59].renderComponent ? 0 : (
        /*col*/
        h[59].parseHTML ? 1 : 2
      )
    );
  }
  n = c(e), r = l[n] = f[n](e);
  function u(...h) {
    return (
      /*click_handler_1*/
      e[47](
        /*row*/
        e[56],
        /*col*/
        e[59],
        ...h
      )
    );
  }
  function d(...h) {
    return (
      /*keypress_handler_1*/
      e[48](
        /*row*/
        e[56],
        /*col*/
        e[59],
        ...h
      )
    );
  }
  return {
    c() {
      t = Q("td"), r.c(), K(t, "class", i = xe(
        /*asStringArray*/
        e[26]([
          typeof /*col*/
          e[59].class == "string" ? (
            /*col*/
            e[59].class
          ) : null,
          typeof /*col*/
          e[59].class == "function" ? (
            /*col*/
            e[59].class(
              /*row*/
              e[56],
              /*n*/
              e[58],
              /*colIndex*/
              e[61]
            )
          ) : null,
          /*classNameCell*/
          e[18]
        ])
      ) + " svelte-dsaf7t");
    },
    m(h, m) {
      ee(h, t, m), l[n].m(t, null), o = !0, a || (s = [
        Nt(t, "click", u),
        Nt(t, "keypress", d)
      ], a = !0);
    },
    p(h, m) {
      e = h;
      let p = n;
      n = c(e), n === p ? l[n].p(e, m) : (Pe(), ie(l[p], 1, 1, () => {
        l[p] = null;
      }), Be(), r = l[n], r ? r.p(e, m) : (r = l[n] = f[n](e), r.c()), te(r, 1), r.m(t, null)), (!o || m[0] & /*columns, c_rows, classNameCell, filterValues*/
      8650776 && i !== (i = xe(
        /*asStringArray*/
        e[26]([
          typeof /*col*/
          e[59].class == "string" ? (
            /*col*/
            e[59].class
          ) : null,
          typeof /*col*/
          e[59].class == "function" ? (
            /*col*/
            e[59].class(
              /*row*/
              e[56],
              /*n*/
              e[58],
              /*colIndex*/
              e[61]
            )
          ) : null,
          /*classNameCell*/
          e[18]
        ])
      ) + " svelte-dsaf7t")) && K(t, "class", i);
    },
    i(h) {
      o || (te(r), o = !0);
    },
    o(h) {
      ie(r), o = !1;
    },
    d(h) {
      h && J(t), l[n].d(), a = !1, Qt(s);
    }
  };
}
function Il(e) {
  let t, n, r = (
    /*row*/
    (e[56].$expanded ? (
      /*iconExpand*/
      e[9]
    ) : (
      /*iconExpanded*/
      e[10]
    )) + ""
  ), i, o, a;
  function s(...l) {
    return (
      /*click_handler_2*/
      e[49](
        /*row*/
        e[56],
        ...l
      )
    );
  }
  function f(...l) {
    return (
      /*keypress_handler_2*/
      e[50](
        /*row*/
        e[56],
        ...l
      )
    );
  }
  return {
    c() {
      t = Q("td"), n = Q("span"), K(n, "class", "isClickable svelte-dsaf7t"), K(n, "tabindex", "0"), K(n, "role", "button"), K(t, "class", i = xe(
        /*asStringArray*/
        e[26](
          /*classNameCellExpand*/
          e[22]
        )
      ) + " svelte-dsaf7t");
    },
    m(l, c) {
      ee(l, t, c), re(t, n), n.innerHTML = r, o || (a = [
        Nt(n, "click", s),
        Nt(n, "keypress", f)
      ], o = !0);
    },
    p(l, c) {
      e = l, c[0] & /*c_rows, iconExpand, iconExpanded*/
      1544 && r !== (r = /*row*/
      (e[56].$expanded ? (
        /*iconExpand*/
        e[9]
      ) : (
        /*iconExpanded*/
        e[10]
      )) + "") && (n.innerHTML = r), c[0] & /*classNameCellExpand*/
      4194304 && i !== (i = xe(
        /*asStringArray*/
        e[26](
          /*classNameCellExpand*/
          e[22]
        )
      ) + " svelte-dsaf7t") && K(t, "class", i);
    },
    d(l) {
      l && J(t), o = !1, Qt(a);
    }
  };
}
function Ol(e) {
  let t, n, r, i;
  const o = (
    /*#slots*/
    e[42].expanded
  ), a = of(
    o,
    e,
    /*$$scope*/
    e[41],
    vl
  );
  return {
    c() {
      t = Q("tr"), n = Q("td"), a && a.c(), K(
        n,
        "colspan",
        /*colspan*/
        e[24]
      ), K(t, "class", r = xe(
        /*asStringArray*/
        e[26](
          /*classNameExpandedContent*/
          e[21]
        )
      ) + " svelte-dsaf7t");
    },
    m(s, f) {
      ee(s, t, f), re(t, n), a && a.m(n, null), i = !0;
    },
    p(s, f) {
      a && a.p && (!i || f[0] & /*c_rows*/
      8 | f[1] & /*$$scope*/
      1024) && sf(
        a,
        o,
        s,
        /*$$scope*/
        s[41],
        i ? af(
          o,
          /*$$scope*/
          s[41],
          f,
          rp
        ) : ff(
          /*$$scope*/
          s[41]
        ),
        vl
      ), (!i || f[0] & /*colspan*/
      16777216) && K(
        n,
        "colspan",
        /*colspan*/
        s[24]
      ), (!i || f[0] & /*classNameExpandedContent*/
      2097152 && r !== (r = xe(
        /*asStringArray*/
        s[26](
          /*classNameExpandedContent*/
          s[21]
        )
      ) + " svelte-dsaf7t")) && K(t, "class", r);
    },
    i(s) {
      i || (te(a, s), i = !0);
    },
    o(s) {
      ie(a, s), i = !1;
    },
    d(s) {
      s && J(t), a && a.d(s);
    }
  };
}
function gp(e) {
  let t, n, r, i, o, a, s, f, l, c = Ye(
    /*columns*/
    e[4]
  ), u = [];
  for (let b = 0; b < c.length; b += 1)
    u[b] = Dl(xl(e, c, b));
  const d = (b) => ie(u[b], 1, 1, () => {
    u[b] = null;
  });
  let h = (
    /*showExpandIcon*/
    e[11] && Il(e)
  );
  function m(...b) {
    return (
      /*click_handler_3*/
      e[51](
        /*row*/
        e[56],
        ...b
      )
    );
  }
  function p(...b) {
    return (
      /*keypress_handler_3*/
      e[52](
        /*row*/
        e[56],
        ...b
      )
    );
  }
  let y = (
    /*row*/
    e[56].$expanded && Ol(e)
  );
  return {
    c() {
      t = Q("tr");
      for (let b = 0; b < u.length; b += 1)
        u[b].c();
      n = ye(), h && h.c(), o = ye(), y && y.c(), a = ye(), K(t, "class", r = xe(
        /*asStringArray*/
        e[26]([
          typeof /*classNameRow*/
          e[17] == "string" ? (
            /*classNameRow*/
            e[17]
          ) : null,
          typeof /*classNameRow*/
          e[17] == "function" ? (
            /*classNameRow*/
            e[17](
              /*row*/
              e[56],
              /*n*/
              e[58]
            )
          ) : null,
          /*row*/
          e[56].$expanded && /*classNameRowExpanded*/
          e[20],
          /*row*/
          e[56].$selected && /*classNameRowSelected*/
          e[19]
        ])
      ) + " svelte-dsaf7t"), K(t, "tabindex", i = /*selectOnClick*/
      e[5] ? "0" : null);
    },
    m(b, w) {
      ee(b, t, w);
      for (let v = 0; v < u.length; v += 1)
        u[v] && u[v].m(t, null);
      re(t, n), h && h.m(t, null), ee(b, o, w), y && y.m(b, w), ee(b, a, w), s = !0, f || (l = [
        Nt(t, "click", m),
        Nt(t, "keypress", p)
      ], f = !0);
    },
    p(b, w) {
      if (e = b, w[0] & /*asStringArray, columns, c_rows, classNameCell, handleClickCell*/
      1141112856) {
        c = Ye(
          /*columns*/
          e[4]
        );
        let v;
        for (v = 0; v < c.length; v += 1) {
          const x = xl(e, c, v);
          u[v] ? (u[v].p(x, w), te(u[v], 1)) : (u[v] = Dl(x), u[v].c(), te(u[v], 1), u[v].m(t, n));
        }
        for (Pe(), v = c.length; v < u.length; v += 1)
          d(v);
        Be();
      }
      /*showExpandIcon*/
      e[11] ? h ? h.p(e, w) : (h = Il(e), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!s || w[0] & /*classNameRow, c_rows, classNameRowExpanded, classNameRowSelected*/
      1703944 && r !== (r = xe(
        /*asStringArray*/
        e[26]([
          typeof /*classNameRow*/
          e[17] == "string" ? (
            /*classNameRow*/
            e[17]
          ) : null,
          typeof /*classNameRow*/
          e[17] == "function" ? (
            /*classNameRow*/
            e[17](
              /*row*/
              e[56],
              /*n*/
              e[58]
            )
          ) : null,
          /*row*/
          e[56].$expanded && /*classNameRowExpanded*/
          e[20],
          /*row*/
          e[56].$selected && /*classNameRowSelected*/
          e[19]
        ])
      ) + " svelte-dsaf7t")) && K(t, "class", r), (!s || w[0] & /*selectOnClick*/
      32 && i !== (i = /*selectOnClick*/
      e[5] ? "0" : null)) && K(t, "tabindex", i), /*row*/
      e[56].$expanded ? y ? (y.p(e, w), w[0] & /*c_rows*/
      8 && te(y, 1)) : (y = Ol(e), y.c(), te(y, 1), y.m(a.parentNode, a)) : y && (Pe(), ie(y, 1, 1, () => {
        y = null;
      }), Be());
    },
    i(b) {
      if (!s) {
        for (let w = 0; w < c.length; w += 1)
          te(u[w]);
        te(y), s = !0;
      }
    },
    o(b) {
      u = u.filter(Boolean);
      for (let w = 0; w < u.length; w += 1)
        ie(u[w]);
      ie(y), s = !1;
    },
    d(b) {
      b && (J(t), J(o), J(a)), Fn(u, b), h && h.d(), y && y.d(b), f = !1, Qt(l);
    }
  };
}
function $l(e) {
  let t;
  const n = (
    /*#slots*/
    e[42].row
  ), r = of(
    n,
    e,
    /*$$scope*/
    e[41],
    Ml
  ), i = r || gp(e);
  return {
    c() {
      i && i.c();
    },
    m(o, a) {
      i && i.m(o, a), t = !0;
    },
    p(o, a) {
      r ? r.p && (!t || a[0] & /*c_rows*/
      8 | a[1] & /*$$scope*/
      1024) && sf(
        r,
        n,
        o,
        /*$$scope*/
        o[41],
        t ? af(
          n,
          /*$$scope*/
          o[41],
          a,
          ip
        ) : ff(
          /*$$scope*/
          o[41]
        ),
        Ml
      ) : i && i.p && (!t || a[0] & /*classNameExpandedContent, colspan, c_rows, classNameRow, classNameRowExpanded, classNameRowSelected, selectOnClick, classNameCellExpand, iconExpand, iconExpanded, showExpandIcon, columns, classNameCell*/
      25038392 | a[1] & /*$$scope*/
      1024) && i.p(o, t ? a : [-1, -1, -1]);
    },
    i(o) {
      t || (te(i, o), t = !0);
    },
    o(o) {
      ie(i, o), t = !1;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function pp(e) {
  let t, n, r, i, o, a, s, f, l, c = (
    /*showFilterHeader*/
    e[25] && ap(e)
  );
  const u = (
    /*#slots*/
    e[42].header
  ), d = of(
    u,
    e,
    /*$$scope*/
    e[41],
    kl
  ), h = d || up(e);
  let m = Ye(
    /*c_rows*/
    e[3]
  ), p = [];
  for (let b = 0; b < m.length; b += 1)
    p[b] = $l(_l(e, m, b));
  const y = (b) => ie(p[b], 1, 1, () => {
    p[b] = null;
  });
  return {
    c() {
      t = Q("table"), n = Q("thead"), c && c.c(), r = ye(), h && h.c(), o = ye(), a = Q("tbody");
      for (let b = 0; b < p.length; b += 1)
        p[b].c();
      K(n, "class", i = xe(
        /*asStringArray*/
        e[26](
          /*classNameThead*/
          e[13]
        )
      ) + " svelte-dsaf7t"), K(a, "class", s = xe(
        /*asStringArray*/
        e[26](
          /*classNameTbody*/
          e[14]
        )
      ) + " svelte-dsaf7t"), K(t, "class", f = xe(
        /*asStringArray*/
        e[26](
          /*classNameTable*/
          e[12]
        )
      ) + " svelte-dsaf7t");
    },
    m(b, w) {
      ee(b, t, w), re(t, n), c && c.m(n, null), re(n, r), h && h.m(n, null), re(t, o), re(t, a);
      for (let v = 0; v < p.length; v += 1)
        p[v] && p[v].m(a, null);
      l = !0;
    },
    p(b, w) {
      if (
        /*showFilterHeader*/
        b[25] && c.p(b, w), d ? d.p && (!l || w[0] & /*sortOrder, sortBy*/
        3 | w[1] & /*$$scope*/
        1024) && sf(
          d,
          u,
          b,
          /*$$scope*/
          b[41],
          l ? af(
            u,
            /*$$scope*/
            b[41],
            w,
            op
          ) : ff(
            /*$$scope*/
            b[41]
          ),
          kl
        ) : h && h.p && (!l || w[0] & /*showExpandIcon, columns, sortOrder, iconAsc, iconDesc, sortBy, iconSortable*/
        2515) && h.p(b, l ? w : [-1, -1, -1]), (!l || w[0] & /*classNameThead*/
        8192 && i !== (i = xe(
          /*asStringArray*/
          b[26](
            /*classNameThead*/
            b[13]
          )
        ) + " svelte-dsaf7t")) && K(n, "class", i), w[0] & /*asStringArray, classNameExpandedContent, colspan, c_rows, classNameRow, classNameRowExpanded, classNameRowSelected, selectOnClick, handleClickRow, classNameCellExpand, handleClickExpand, iconExpand, iconExpanded, showExpandIcon, columns, classNameCell, handleClickCell*/
        1971195448 | w[1] & /*$$scope*/
        1024
      ) {
        m = Ye(
          /*c_rows*/
          b[3]
        );
        let v;
        for (v = 0; v < m.length; v += 1) {
          const x = _l(b, m, v);
          p[v] ? (p[v].p(x, w), te(p[v], 1)) : (p[v] = $l(x), p[v].c(), te(p[v], 1), p[v].m(a, null));
        }
        for (Pe(), v = m.length; v < p.length; v += 1)
          y(v);
        Be();
      }
      (!l || w[0] & /*classNameTbody*/
      16384 && s !== (s = xe(
        /*asStringArray*/
        b[26](
          /*classNameTbody*/
          b[14]
        )
      ) + " svelte-dsaf7t")) && K(a, "class", s), (!l || w[0] & /*classNameTable*/
      4096 && f !== (f = xe(
        /*asStringArray*/
        b[26](
          /*classNameTable*/
          b[12]
        )
      ) + " svelte-dsaf7t")) && K(t, "class", f);
    },
    i(b) {
      if (!l) {
        te(h, b);
        for (let w = 0; w < m.length; w += 1)
          te(p[w]);
        l = !0;
      }
    },
    o(b) {
      ie(h, b), p = p.filter(Boolean);
      for (let w = 0; w < p.length; w += 1)
        ie(p[w]);
      l = !1;
    },
    d(b) {
      b && J(t), c && c.d(), h && h.d(b), Fn(p, b);
    }
  };
}
function bp(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t, { columns: a } = t, { rows: s } = t, { c_rows: f = void 0 } = t, { sortOrders: l = [1, -1] } = t, { sortBy: c = "" } = t, { sortOrder: u = (l == null ? void 0 : l[0]) || 1 } = t, { filterSelections: d = {} } = t, { expanded: h = [] } = t, { selected: m = [] } = t, { expandRowKey: p = null } = t, { rowKey: y = p } = t, { expandSingle: b = !1 } = t, { selectSingle: w = !1 } = t, { selectOnClick: v = !1 } = t, { iconAsc: x = "▲" } = t, { iconDesc: C = "▼" } = t, { iconSortable: k = "" } = t, { iconExpand: R = "▼" } = t, { iconExpanded: T = "▲" } = t, { showExpandIcon: D = !1 } = t, { classNameTable: F = "" } = t, { classNameThead: N = "" } = t, { classNameTbody: B = "" } = t, { classNameSelect: V = "" } = t, { classNameInput: U = "" } = t, { classNameRow: L = null } = t, { classNameCell: Y = "" } = t, { classNameRowSelected: q = null } = t, { classNameRowExpanded: g = null } = t, { classNameExpandedContent: M = "" } = t, { classNameCellExpand: _ = "" } = t;
  const S = Qu();
  let A = () => "";
  if (!Array.isArray(h))
    throw "'expanded' needs to be an array";
  if (!Array.isArray(m))
    throw "'selection' needs to be an array";
  p !== null && console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"), q && !y && console.error("'rowKey' is needed to use 'classNameRowSelected'");
  let E = a.some((O) => !O.hideFilterHeader && (O.filterOptions !== void 0 || O.searchValue !== void 0)), H = {}, P;
  const W = (O) => [].concat(O).filter((j) => j !== null && typeof j == "string" && j !== "").join(" "), z = () => {
    n(23, H = {}), a.forEach((O) => {
      typeof O.filterOptions == "function" ? n(23, H[O.key] = O.filterOptions(s), H) : Array.isArray(O.filterOptions) && n(23, H[O.key] = O.filterOptions.map((j) => ({ name: j, value: j })), H);
    });
  }, X = (O) => O === c ? l[(l.findIndex((j) => j === u) + 1) % l.length] : l[0], I = (O, j) => {
    j.sortable && (n(1, u = X(j.key)), n(0, c = u ? j.key : void 0)), S("clickCol", { event: O, col: j, key: j.key });
  }, G = (O, j) => {
    v && (w ? m.includes(j[y]) ? n(32, m = []) : n(32, m = [j[y]]) : m.includes(j[y]) ? n(32, m = m.filter((De) => De != j[y])) : n(32, m = [...m, j[y]].sort())), S("clickRow", { event: O, row: j });
  }, Z = (O, j) => {
    j.$expanded = !j.$expanded;
    const De = j[y];
    b && j.$expanded ? n(31, h = [De]) : b ? n(31, h = []) : j.$expanded ? n(31, h = [...h, De]) : n(31, h = h.filter((ul) => ul != De)), S("clickExpand", { event: O, row: j });
  }, $ = (O, j, De) => {
    S("clickCell", { event: O, row: j, key: De });
  };
  function ue(O) {
    d[O.key] = this.value, n(2, d), n(23, H), n(4, a);
  }
  function ne(O) {
    d[O.key] = zg(this), n(2, d), n(23, H), n(4, a);
  }
  const me = (O, j) => I(j, O), he = (O, j) => j.key === "Enter" && I(j, O), we = (O, j, De) => $(De, O, j.key), xt = (O, j, De) => De.key === "Enter" && $(De, O, j.key), yn = (O, j) => Z(j, O), Dg = (O, j) => j.key === "Enter" && Z(j, O), Ig = (O, j) => G(j, O), Og = (O, j) => j.key === "Enter" && G(j, O);
  return e.$$set = (O) => {
    "columns" in O && n(4, a = O.columns), "rows" in O && n(33, s = O.rows), "c_rows" in O && n(3, f = O.c_rows), "sortOrders" in O && n(34, l = O.sortOrders), "sortBy" in O && n(0, c = O.sortBy), "sortOrder" in O && n(1, u = O.sortOrder), "filterSelections" in O && n(2, d = O.filterSelections), "expanded" in O && n(31, h = O.expanded), "selected" in O && n(32, m = O.selected), "expandRowKey" in O && n(35, p = O.expandRowKey), "rowKey" in O && n(36, y = O.rowKey), "expandSingle" in O && n(37, b = O.expandSingle), "selectSingle" in O && n(38, w = O.selectSingle), "selectOnClick" in O && n(5, v = O.selectOnClick), "iconAsc" in O && n(6, x = O.iconAsc), "iconDesc" in O && n(7, C = O.iconDesc), "iconSortable" in O && n(8, k = O.iconSortable), "iconExpand" in O && n(9, R = O.iconExpand), "iconExpanded" in O && n(10, T = O.iconExpanded), "showExpandIcon" in O && n(11, D = O.showExpandIcon), "classNameTable" in O && n(12, F = O.classNameTable), "classNameThead" in O && n(13, N = O.classNameThead), "classNameTbody" in O && n(14, B = O.classNameTbody), "classNameSelect" in O && n(15, V = O.classNameSelect), "classNameInput" in O && n(16, U = O.classNameInput), "classNameRow" in O && n(17, L = O.classNameRow), "classNameCell" in O && n(18, Y = O.classNameCell), "classNameRowSelected" in O && n(19, q = O.classNameRowSelected), "classNameRowExpanded" in O && n(20, g = O.classNameRowExpanded), "classNameExpandedContent" in O && n(21, M = O.classNameExpandedContent), "classNameCellExpand" in O && n(22, _ = O.classNameCellExpand), "$$scope" in O && n(41, o = O.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*columns*/
    16 && (n(40, P = {}), a.forEach((O) => {
      n(40, P[O.key] = O, P);
    })), e.$$.dirty[0] & /*showExpandIcon, columns*/
    2064 && n(24, r = (D ? 1 : 0) + a.length), e.$$.dirty[0] & /*sortBy*/
    1 | e.$$.dirty[1] & /*columnByKey*/
    512) {
      let O = P[c];
      O !== void 0 && O.sortable === !0 && typeof O.value == "function" && n(39, A = (j) => O.value(j));
    }
    e.$$.dirty[0] & /*filterSelections, sortBy, sortOrder*/
    7 | e.$$.dirty[1] & /*rows, columnByKey, sortFunction, rowKey, expanded, selected*/
    807 && n(3, f = s.filter((O) => Object.keys(d).every((j) => {
      var dl;
      let De = null;
      if (P[j] === void 0)
        return !0;
      if (!((dl = P[j]) != null && dl.searchValue))
        De = !1;
      else {
        if (d[j] === "")
          return !0;
        P[j].searchValue.length === 1 ? De = (P[j].searchValue(O) + "").toLocaleLowerCase().indexOf((d[j] + "").toLocaleLowerCase()) >= 0 : P[j].searchValue.length === 2 && (De = !!P[j].searchValue(O, d[j] + ""));
      }
      return De || d[j] === void 0 || // default to value() if filterValue() not provided in col
      d[j] === (typeof P[j].filterValue == "function" ? P[j].filterValue(O) : P[j].value(O));
    })).map((O) => Object.assign({}, O, {
      // internal row property for sort order
      $sortOn: A(O),
      // internal row property for expanded rows
      $expanded: y !== null && h.indexOf(O[y]) >= 0,
      $selected: y !== null && m.indexOf(O[y]) >= 0
    })).sort((O, j) => {
      if (c) {
        if (O.$sortOn > j.$sortOn)
          return u;
        if (O.$sortOn < j.$sortOn)
          return -u;
      } else
        return 0;
      return 0;
    })), e.$$.dirty[0] & /*columns*/
    16 | e.$$.dirty[1] & /*rows*/
    4 && E && a && s && z();
  }, [
    c,
    u,
    d,
    f,
    a,
    v,
    x,
    C,
    k,
    R,
    T,
    D,
    F,
    N,
    B,
    V,
    U,
    L,
    Y,
    q,
    g,
    M,
    _,
    H,
    r,
    E,
    W,
    I,
    G,
    Z,
    $,
    h,
    m,
    s,
    l,
    p,
    y,
    b,
    w,
    A,
    P,
    o,
    i,
    ue,
    ne,
    me,
    he,
    we,
    xt,
    yn,
    Dg,
    Ig,
    Og
  ];
}
class cf extends un {
  constructor(t) {
    super(), cn(
      this,
      t,
      bp,
      pp,
      Et,
      {
        columns: 4,
        rows: 33,
        c_rows: 3,
        sortOrders: 34,
        sortBy: 0,
        sortOrder: 1,
        filterSelections: 2,
        expanded: 31,
        selected: 32,
        expandRowKey: 35,
        rowKey: 36,
        expandSingle: 37,
        selectSingle: 38,
        selectOnClick: 5,
        iconAsc: 6,
        iconDesc: 7,
        iconSortable: 8,
        iconExpand: 9,
        iconExpanded: 10,
        showExpandIcon: 11,
        classNameTable: 12,
        classNameThead: 13,
        classNameTbody: 14,
        classNameSelect: 15,
        classNameInput: 16,
        classNameRow: 17,
        classNameCell: 18,
        classNameRowSelected: 19,
        classNameRowExpanded: 20,
        classNameExpandedContent: 21,
        classNameCellExpand: 22
      },
      null,
      [-1, -1, -1]
    );
  }
}
function We(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function li(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zo(e) {
  let t, n, r;
  e.length !== 2 ? (t = We, n = (s, f) => We(e(s), f), r = (s, f) => e(s) - f) : (t = e === We || e === li ? e : yp, n = e, r = e);
  function i(s, f, l = 0, c = s.length) {
    if (l < c) {
      if (t(f, f) !== 0)
        return c;
      do {
        const u = l + c >>> 1;
        n(s[u], f) < 0 ? l = u + 1 : c = u;
      } while (l < c);
    }
    return l;
  }
  function o(s, f, l = 0, c = s.length) {
    if (l < c) {
      if (t(f, f) !== 0)
        return c;
      do {
        const u = l + c >>> 1;
        n(s[u], f) <= 0 ? l = u + 1 : c = u;
      } while (l < c);
    }
    return l;
  }
  function a(s, f, l = 0, c = s.length) {
    const u = i(s, f, l, c - 1);
    return u > l && r(s[u - 1], f) > -r(s[u], f) ? u - 1 : u;
  }
  return { left: i, center: a, right: o };
}
function yp() {
  return 0;
}
function ed(e) {
  return e === null ? NaN : +e;
}
function* wp(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let r of e)
      (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
const _p = zo(We), uf = _p.right;
zo(ed).center;
function vp(e) {
  return e.length | 0;
}
function xp(e) {
  return !(e > 0);
}
function Mp(e) {
  return typeof e != "object" || "length" in e ? e : Array.from(e);
}
function Sp(e) {
  return (t) => e(...t);
}
function kp(...e) {
  const t = typeof e[e.length - 1] == "function" && Sp(e.pop());
  e = e.map(Mp);
  const n = e.map(vp), r = e.length - 1, i = new Array(r + 1).fill(0), o = [];
  if (r < 0 || n.some(xp))
    return o;
  for (; ; ) {
    o.push(i.map((s, f) => e[f][s]));
    let a = r;
    for (; ++i[a] === n[a]; ) {
      if (a === 0)
        return t ? o.map(t) : o;
      i[a--] = 0;
    }
  }
}
function Tp(e, t) {
  var n = 0, r = 0;
  return Float64Array.from(e, t === void 0 ? (i) => n += +i || 0 : (i) => n += +t(i, r++, e) || 0);
}
function td(e, t) {
  let n = 0, r, i = 0, o = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (r = a - i, i += r / ++n, o += r * (a - i));
  else {
    let a = -1;
    for (let s of e)
      (s = t(s, ++a, e)) != null && (s = +s) >= s && (r = s - i, i += r / ++n, o += r * (s - i));
  }
  if (n > 1)
    return o / (n - 1);
}
function Cp(e, t) {
  const n = td(e, t);
  return n && Math.sqrt(n);
}
function an(e, t) {
  let n, r;
  if (t === void 0)
    for (const i of e)
      i != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of e)
      (o = t(o, ++i, e)) != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  }
  return [n, r];
}
class Cn {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const n = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = n[i], a = t + o, s = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
      s && (n[r++] = s), t = a;
    }
    return n[r] = t, this._n = r + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let n = this._n, r, i, o, a = 0;
    if (n > 0) {
      for (a = t[--n]; n > 0 && (r = a, i = t[--n], a = r + i, o = i - (a - r), !o); )
        ;
      n > 0 && (o < 0 && t[n - 1] < 0 || o > 0 && t[n - 1] > 0) && (i = o * 2, r = a + i, i == r - a && (a = r));
    }
    return a;
  }
}
class An extends Map {
  constructor(t, n = id) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [r, i] of t)
        this.set(r, i);
  }
  get(t) {
    return super.get(os(this, t));
  }
  has(t) {
    return super.has(os(this, t));
  }
  set(t, n) {
    return super.set(nd(this, t), n);
  }
  delete(t) {
    return super.delete(rd(this, t));
  }
}
class qo extends Set {
  constructor(t, n = id) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const r of t)
        this.add(r);
  }
  has(t) {
    return super.has(os(this, t));
  }
  add(t) {
    return super.add(nd(this, t));
  }
  delete(t) {
    return super.delete(rd(this, t));
  }
}
function os({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function nd({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function rd({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function id(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function as(e) {
  return e;
}
function df(e, ...t) {
  return hf(e, as, as, t);
}
function er(e, t, ...n) {
  return hf(e, as, t, n);
}
function Ap(e, t, ...n) {
  return hf(e, Array.from, t, n);
}
function hf(e, t, n, r) {
  return function i(o, a) {
    if (a >= r.length)
      return n(o);
    const s = new An(), f = r[a++];
    let l = -1;
    for (const c of o) {
      const u = f(c, ++l, o), d = s.get(u);
      d ? d.push(c) : s.set(u, [c]);
    }
    for (const [c, u] of s)
      s.set(c, i(u, a));
    return t(s);
  }(e, 0);
}
function Ep(e, t) {
  return Array.from(t, (n) => e[n]);
}
function ao(e, ...t) {
  if (typeof e[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  e = Array.from(e);
  let [n] = t;
  if (n && n.length !== 2 || t.length > 1) {
    const r = Uint32Array.from(e, (i, o) => o);
    return t.length > 1 ? (t = t.map((i) => e.map(i)), r.sort((i, o) => {
      for (const a of t) {
        const s = so(a[i], a[o]);
        if (s)
          return s;
      }
    })) : (n = e.map(n), r.sort((i, o) => so(n[i], n[o]))), Ep(e, r);
  }
  return e.sort(od(n));
}
function od(e = We) {
  if (e === We)
    return so;
  if (typeof e != "function")
    throw new TypeError("compare is not a function");
  return (t, n) => {
    const r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function so(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
function mf(e, t, n) {
  return (t.length !== 2 ? ao(er(e, t, n), ([r, i], [o, a]) => We(i, a) || We(r, o)) : ao(df(e, n), ([r, i], [o, a]) => t(i, a) || We(r, o))).map(([r]) => r);
}
const Np = Math.sqrt(50), Rp = Math.sqrt(10), Lp = Math.sqrt(2);
function fo(e, t, n) {
  const r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Np ? 10 : o >= Rp ? 5 : o >= Lp ? 2 : 1;
  let s, f, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(e * l), f = Math.round(t * l), s / l < e && ++s, f / l > t && --f, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(e / l), f = Math.round(t / l), s * l < e && ++s, f * l > t && --f), f < s && 0.5 <= n && n < 2 ? fo(e, t, n * 2) : [s, f, l];
}
function lo(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const r = t < e, [i, o, a] = r ? fo(t, e, n) : fo(e, t, n);
  if (!(o >= i))
    return [];
  const s = o - i + 1, f = new Array(s);
  if (r)
    if (a < 0)
      for (let l = 0; l < s; ++l)
        f[l] = (o - l) / -a;
    else
      for (let l = 0; l < s; ++l)
        f[l] = (o - l) * a;
  else if (a < 0)
    for (let l = 0; l < s; ++l)
      f[l] = (i + l) / -a;
  else
    for (let l = 0; l < s; ++l)
      f[l] = (i + l) * a;
  return f;
}
function ss(e, t, n) {
  return t = +t, e = +e, n = +n, fo(e, t, n)[2];
}
function fs(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, i = r ? ss(t, e, n) : ss(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function gt(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Dp(e, t) {
  let n, r = -1, i = -1;
  if (t === void 0)
    for (const o of e)
      ++i, o != null && (n < o || n === void 0 && o >= o) && (n = o, r = i);
  else
    for (let o of e)
      (o = t(o, ++i, e)) != null && (n < o || n === void 0 && o >= o) && (n = o, r = i);
  return r;
}
function Gt(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Ip(e, t) {
  let n, r = -1, i = -1;
  if (t === void 0)
    for (const o of e)
      ++i, o != null && (n > o || n === void 0 && o >= o) && (n = o, r = i);
  else
    for (let o of e)
      (o = t(o, ++i, e)) != null && (n > o || n === void 0 && o >= o) && (n = o, r = i);
  return r;
}
function ad(e, t, n = 0, r = 1 / 0, i) {
  if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r))
    return e;
  for (i = i === void 0 ? so : od(i); r > n; ) {
    if (r - n > 600) {
      const f = r - n + 1, l = t - n + 1, c = Math.log(f), u = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * u * (f - u) / f) * (l - f / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - l * u / f + d)), m = Math.min(r, Math.floor(t + (f - l) * u / f + d));
      ad(e, t, h, m, i);
    }
    const o = e[t];
    let a = n, s = r;
    for (kr(e, n, t), i(e[r], o) > 0 && kr(e, n, r); a < s; ) {
      for (kr(e, a, s), ++a, --s; i(e[a], o) < 0; )
        ++a;
      for (; i(e[s], o) > 0; )
        --s;
    }
    i(e[n], o) === 0 ? kr(e, n, s) : (++s, kr(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
  }
  return e;
}
function kr(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function sd(e, t = We) {
  let n, r = !1;
  if (t.length === 1) {
    let i;
    for (const o of e) {
      const a = t(o);
      (r ? We(a, i) > 0 : We(a, a) === 0) && (n = o, i = a, r = !0);
    }
  } else
    for (const i of e)
      (r ? t(i, n) > 0 : t(i, i) === 0) && (n = i, r = !0);
  return n;
}
function co(e, t, n) {
  if (e = Float64Array.from(wp(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2)
      return Gt(e);
    if (t >= 1)
      return gt(e);
    var r, i = (r - 1) * t, o = Math.floor(i), a = gt(ad(e, o).subarray(0, o + 1)), s = Gt(e.subarray(o + 1));
    return a + (s - a) * (i - o);
  }
}
function Op(e, t, n = ed) {
  if (!(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2)
      return +n(e[0], 0, e);
    if (t >= 1)
      return +n(e[r - 1], r - 1, e);
    var r, i = (r - 1) * t, o = Math.floor(i), a = +n(e[o], o, e), s = +n(e[o + 1], o + 1, e);
    return a + (s - a) * (i - o);
  }
}
function $p(e, t) {
  let n = 0, r = 0;
  if (t === void 0)
    for (let i of e)
      i != null && (i = +i) >= i && (++n, r += i);
  else {
    let i = -1;
    for (let o of e)
      (o = t(o, ++i, e)) != null && (o = +o) >= o && (++n, r += o);
  }
  if (n)
    return r / n;
}
function ls(e, t) {
  return co(e, 0.5, t);
}
function* Fp(e) {
  for (const t of e)
    yield* t;
}
function fd(e) {
  return Array.from(Fp(e));
}
function Pp(e, t) {
  const n = new An();
  if (t === void 0)
    for (let o of e)
      o != null && o >= o && n.set(o, (n.get(o) || 0) + 1);
  else {
    let o = -1;
    for (let a of e)
      (a = t(a, ++o, e)) != null && a >= a && n.set(a, (n.get(a) || 0) + 1);
  }
  let r, i = 0;
  for (const [o, a] of n)
    a > i && (i = a, r = o);
  return r;
}
function Bp(e, t = Up) {
  const n = [];
  let r, i = !1;
  for (const o of e)
    i && n.push(t(r, o)), r = o, i = !0;
  return n;
}
function Up(e, t) {
  return [e, t];
}
function cs(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = e + r * n;
  return o;
}
function sn(e, t) {
  let n = 0;
  if (t === void 0)
    for (let r of e)
      (r = +r) && (n += r);
  else {
    let r = -1;
    for (let i of e)
      (i = +t(i, ++r, e)) && (n += i);
  }
  return n;
}
function uo(e) {
  if (typeof e[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  return Array.from(e).reverse();
}
function Hp(e) {
  return e;
}
var va = 1, xa = 2, us = 3, Di = 4, Fl = 1e-6;
function zp(e) {
  return "translate(" + e + ",0)";
}
function qp(e) {
  return "translate(0," + e + ")";
}
function Wp(e) {
  return (t) => +e(t);
}
function Yp(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function Vp() {
  return !this.__axis;
}
function Gp(e, t) {
  var n = [], r = null, i = null, o = 6, a = 6, s = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = e === va || e === Di ? -1 : 1, c = e === Di || e === xa ? "x" : "y", u = e === va || e === us ? zp : qp;
  function d(h) {
    var m = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), p = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Hp), y = Math.max(o, 0) + s, b = t.range(), w = +b[0] + f, v = +b[b.length - 1] + f, x = (t.bandwidth ? Yp : Wp)(t.copy(), f), C = h.selection ? h.selection() : h, k = C.selectAll(".domain").data([null]), R = C.selectAll(".tick").data(m, t).order(), T = R.exit(), D = R.enter().append("g").attr("class", "tick"), F = R.select("line"), N = R.select("text");
    k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), R = R.merge(D), F = F.merge(D.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), N = N.merge(D.append("text").attr("fill", "currentColor").attr(c, l * y).attr("dy", e === va ? "0em" : e === us ? "0.71em" : "0.32em")), h !== C && (k = k.transition(h), R = R.transition(h), F = F.transition(h), N = N.transition(h), T = T.transition(h).attr("opacity", Fl).attr("transform", function(B) {
      return isFinite(B = x(B)) ? u(B + f) : this.getAttribute("transform");
    }), D.attr("opacity", Fl).attr("transform", function(B) {
      var V = this.parentNode.__axis;
      return u((V && isFinite(V = V(B)) ? V : x(B)) + f);
    })), T.remove(), k.attr("d", e === Di || e === xa ? a ? "M" + l * a + "," + w + "H" + f + "V" + v + "H" + l * a : "M" + f + "," + w + "V" + v : a ? "M" + w + "," + l * a + "V" + f + "H" + v + "V" + l * a : "M" + w + "," + f + "H" + v), R.attr("opacity", 1).attr("transform", function(B) {
      return u(x(B) + f);
    }), F.attr(c + "2", l * o), N.attr(c, l * y).text(p), C.filter(Vp).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === xa ? "start" : e === Di ? "end" : "middle"), C.each(function() {
      this.__axis = x;
    });
  }
  return d.scale = function(h) {
    return arguments.length ? (t = h, d) : t;
  }, d.ticks = function() {
    return n = Array.from(arguments), d;
  }, d.tickArguments = function(h) {
    return arguments.length ? (n = h == null ? [] : Array.from(h), d) : n.slice();
  }, d.tickValues = function(h) {
    return arguments.length ? (r = h == null ? null : Array.from(h), d) : r && r.slice();
  }, d.tickFormat = function(h) {
    return arguments.length ? (i = h, d) : i;
  }, d.tickSize = function(h) {
    return arguments.length ? (o = a = +h, d) : o;
  }, d.tickSizeInner = function(h) {
    return arguments.length ? (o = +h, d) : o;
  }, d.tickSizeOuter = function(h) {
    return arguments.length ? (a = +h, d) : a;
  }, d.tickPadding = function(h) {
    return arguments.length ? (s = +h, d) : s;
  }, d.offset = function(h) {
    return arguments.length ? (f = +h, d) : f;
  }, d;
}
function Xp(e) {
  return Gp(us, e);
}
var jp = { value: () => {
} };
function ld() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ji(n);
}
function Ji(e) {
  this._ = e;
}
function Zp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ji.prototype = ld.prototype = {
  constructor: Ji,
  on: function(e, t) {
    var n = this._, r = Zp(e + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (e = r[o]).type) && (i = Kp(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (i = (e = r[o]).type)
        n[i] = Pl(n[i], e.name, t);
      else if (t == null)
        for (i in n)
          n[i] = Pl(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Ji(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(t, n);
  }
};
function Kp(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Pl(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = jp, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ds = "http://www.w3.org/1999/xhtml";
const or = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wo(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), or.hasOwnProperty(t) ? { space: or[t], local: e } : e;
}
function Qp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ds && t.documentElement.namespaceURI === ds ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Jp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Yo(e) {
  var t = Wo(e);
  return (t.local ? Jp : Qp)(t);
}
function eb() {
}
function gf(e) {
  return e == null ? eb : function() {
    return this.querySelector(e);
  };
}
function tb(e) {
  typeof e != "function" && (e = gf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = new Array(a), f, l, c = 0; c < a; ++c)
      (f = o[c]) && (l = e.call(f, f.__data__, c, o)) && ("__data__" in f && (l.__data__ = f.__data__), s[c] = l);
  return new Ze(r, this._parents);
}
function nb(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function rb() {
  return [];
}
function cd(e) {
  return e == null ? rb : function() {
    return this.querySelectorAll(e);
  };
}
function ib(e) {
  return function() {
    return nb(e.apply(this, arguments));
  };
}
function ob(e) {
  typeof e == "function" ? e = ib(e) : e = cd(e);
  for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, f, l = 0; l < s; ++l)
      (f = a[l]) && (r.push(e.call(f, f.__data__, l, a)), i.push(f));
  return new Ze(r, i);
}
function ud(e) {
  return function() {
    return this.matches(e);
  };
}
function dd(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ab = Array.prototype.find;
function sb(e) {
  return function() {
    return ab.call(this.children, e);
  };
}
function fb() {
  return this.firstElementChild;
}
function lb(e) {
  return this.select(e == null ? fb : sb(typeof e == "function" ? e : dd(e)));
}
var cb = Array.prototype.filter;
function ub() {
  return Array.from(this.children);
}
function db(e) {
  return function() {
    return cb.call(this.children, e);
  };
}
function hb(e) {
  return this.selectAll(e == null ? ub : db(typeof e == "function" ? e : dd(e)));
}
function mb(e) {
  typeof e != "function" && (e = ud(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = [], f, l = 0; l < a; ++l)
      (f = o[l]) && e.call(f, f.__data__, l, o) && s.push(f);
  return new Ze(r, this._parents);
}
function hd(e) {
  return new Array(e.length);
}
function gb() {
  return new Ze(this._enter || this._groups.map(hd), this._parents);
}
function ho(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ho.prototype = {
  constructor: ho,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function pb(e) {
  return function() {
    return e;
  };
}
function bb(e, t, n, r, i, o) {
  for (var a = 0, s, f = t.length, l = o.length; a < l; ++a)
    (s = t[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new ho(e, o[a]);
  for (; a < f; ++a)
    (s = t[a]) && (i[a] = s);
}
function yb(e, t, n, r, i, o, a) {
  var s, f, l = /* @__PURE__ */ new Map(), c = t.length, u = o.length, d = new Array(c), h;
  for (s = 0; s < c; ++s)
    (f = t[s]) && (d[s] = h = a.call(f, f.__data__, s, t) + "", l.has(h) ? i[s] = f : l.set(h, f));
  for (s = 0; s < u; ++s)
    h = a.call(e, o[s], s, o) + "", (f = l.get(h)) ? (r[s] = f, f.__data__ = o[s], l.delete(h)) : n[s] = new ho(e, o[s]);
  for (s = 0; s < c; ++s)
    (f = t[s]) && l.get(d[s]) === f && (i[s] = f);
}
function wb(e) {
  return e.__data__;
}
function _b(e, t) {
  if (!arguments.length)
    return Array.from(this, wb);
  var n = t ? yb : bb, r = this._parents, i = this._groups;
  typeof e != "function" && (e = pb(e));
  for (var o = i.length, a = new Array(o), s = new Array(o), f = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], u = i[l], d = u.length, h = vb(e.call(c, c && c.__data__, l, r)), m = h.length, p = s[l] = new Array(m), y = a[l] = new Array(m), b = f[l] = new Array(d);
    n(c, u, p, y, b, h, t);
    for (var w = 0, v = 0, x, C; w < m; ++w)
      if (x = p[w]) {
        for (w >= v && (v = w + 1); !(C = y[v]) && ++v < m; )
          ;
        x._next = C || null;
      }
  }
  return a = new Ze(a, r), a._enter = s, a._exit = f, a;
}
function vb(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function xb() {
  return new Ze(this._exit || this._groups.map(hd), this._parents);
}
function Mb(e, t, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Sb(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), f = 0; f < a; ++f)
    for (var l = n[f], c = r[f], u = l.length, d = s[f] = new Array(u), h, m = 0; m < u; ++m)
      (h = l[m] || c[m]) && (d[m] = h);
  for (; f < i; ++f)
    s[f] = n[f];
  return new Ze(s, this._parents);
}
function kb() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Tb(e) {
  e || (e = Cb);
  function t(u, d) {
    return u && d ? e(u.__data__, d.__data__) : !u - !d;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, f = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (f[c] = l);
    f.sort(t);
  }
  return new Ze(i, this._parents).order();
}
function Cb(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ab() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Eb() {
  return Array.from(this);
}
function Nb() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Rb() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Lb() {
  return !this.node();
}
function Db(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && e.call(s, s.__data__, o, i);
  return this;
}
function Ib(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ob(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $b(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Fb(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Pb(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Bb(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ub(e, t) {
  var n = Wo(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ob : Ib : typeof t == "function" ? n.local ? Bb : Pb : n.local ? Fb : $b)(n, t));
}
function md(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Hb(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function zb(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function qb(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Wb(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Hb : typeof t == "function" ? qb : zb)(e, t, n ?? "")) : ar(this.node(), e);
}
function ar(e, t) {
  return e.style.getPropertyValue(t) || md(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Yb(e) {
  return function() {
    delete this[e];
  };
}
function Vb(e, t) {
  return function() {
    this[e] = t;
  };
}
function Gb(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Xb(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Yb : typeof t == "function" ? Gb : Vb)(e, t)) : this.node()[e];
}
function gd(e) {
  return e.trim().split(/^|\s+/);
}
function pf(e) {
  return e.classList || new pd(e);
}
function pd(e) {
  this._node = e, this._names = gd(e.getAttribute("class") || "");
}
pd.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function bd(e, t) {
  for (var n = pf(e), r = -1, i = t.length; ++r < i; )
    n.add(t[r]);
}
function yd(e, t) {
  for (var n = pf(e), r = -1, i = t.length; ++r < i; )
    n.remove(t[r]);
}
function jb(e) {
  return function() {
    bd(this, e);
  };
}
function Zb(e) {
  return function() {
    yd(this, e);
  };
}
function Kb(e, t) {
  return function() {
    (t.apply(this, arguments) ? bd : yd)(this, e);
  };
}
function Qb(e, t) {
  var n = gd(e + "");
  if (arguments.length < 2) {
    for (var r = pf(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Kb : t ? jb : Zb)(n, t));
}
function Jb() {
  this.textContent = "";
}
function e2(e) {
  return function() {
    this.textContent = e;
  };
}
function t2(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function n2(e) {
  return arguments.length ? this.each(e == null ? Jb : (typeof e == "function" ? t2 : e2)(e)) : this.node().textContent;
}
function r2() {
  this.innerHTML = "";
}
function i2(e) {
  return function() {
    this.innerHTML = e;
  };
}
function o2(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function a2(e) {
  return arguments.length ? this.each(e == null ? r2 : (typeof e == "function" ? o2 : i2)(e)) : this.node().innerHTML;
}
function s2() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function f2() {
  return this.each(s2);
}
function l2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function c2() {
  return this.each(l2);
}
function u2(e) {
  var t = typeof e == "function" ? e : Yo(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function d2() {
  return null;
}
function h2(e, t) {
  var n = typeof e == "function" ? e : Yo(e), r = t == null ? d2 : typeof t == "function" ? t : gf(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function m2() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function g2() {
  return this.each(m2);
}
function p2() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function b2() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function y2(e) {
  return this.select(e ? b2 : p2);
}
function w2(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function _2(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function v2(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function x2(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
        o = t[n], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function M2(e, t, n) {
  return function() {
    var r = this.__on, i, o = _2(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, n), i = { type: e.type, name: e.name, value: t, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function S2(e, t, n) {
  var r = v2(e + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var f = 0, l = s.length, c; f < l; ++f)
        for (i = 0, c = s[f]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? M2 : x2, i = 0; i < o; ++i)
    this.each(s(r[i], t, n));
  return this;
}
function wd(e, t, n) {
  var r = md(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function k2(e, t) {
  return function() {
    return wd(this, e, t);
  };
}
function T2(e, t) {
  return function() {
    return wd(this, e, t.apply(this, arguments));
  };
}
function C2(e, t) {
  return this.each((typeof t == "function" ? T2 : k2)(e, t));
}
function* A2() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var _d = [null];
function Ze(e, t) {
  this._groups = e, this._parents = t;
}
function ci() {
  return new Ze([[document.documentElement]], _d);
}
function E2() {
  return this;
}
Ze.prototype = ci.prototype = {
  constructor: Ze,
  select: tb,
  selectAll: ob,
  selectChild: lb,
  selectChildren: hb,
  filter: mb,
  data: _b,
  enter: gb,
  exit: xb,
  join: Mb,
  merge: Sb,
  selection: E2,
  order: kb,
  sort: Tb,
  call: Ab,
  nodes: Eb,
  node: Nb,
  size: Rb,
  empty: Lb,
  each: Db,
  attr: Ub,
  style: Wb,
  property: Xb,
  classed: Qb,
  text: n2,
  html: a2,
  raise: f2,
  lower: c2,
  append: u2,
  insert: h2,
  remove: g2,
  clone: y2,
  datum: w2,
  on: S2,
  dispatch: C2,
  [Symbol.iterator]: A2
};
function zr(e) {
  return typeof e == "string" ? new Ze([[document.querySelector(e)]], [document.documentElement]) : new Ze([[e]], _d);
}
function N2(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function R2(e, t) {
  if (e = N2(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
function yr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ui(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function dn() {
}
var En = 0.7, sr = 1 / En, tr = "\\s*([+-]?\\d+)\\s*", jr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", L2 = /^#([0-9a-f]{3,8})$/, D2 = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), I2 = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), O2 = new RegExp(`^rgba\\(${tr},${tr},${tr},${jr}\\)$`), $2 = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${jr}\\)$`), F2 = new RegExp(`^hsl\\(${jr},${Ct},${Ct}\\)$`), P2 = new RegExp(`^hsla\\(${jr},${Ct},${Ct},${jr}\\)$`), Bl = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
yr(dn, Nn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ul,
  // Deprecated! Use color.formatHex.
  formatHex: Ul,
  formatHex8: B2,
  formatHsl: U2,
  formatRgb: Hl,
  toString: Hl
});
function Ul() {
  return this.rgb().formatHex();
}
function B2() {
  return this.rgb().formatHex8();
}
function U2() {
  return vd(this).formatHsl();
}
function Hl() {
  return this.rgb().formatRgb();
}
function Nn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = L2.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? zl(t) : n === 3 ? new Ne(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ii(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ii(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = D2.exec(e)) ? new Ne(t[1], t[2], t[3], 1) : (t = I2.exec(e)) ? new Ne(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = O2.exec(e)) ? Ii(t[1], t[2], t[3], t[4]) : (t = $2.exec(e)) ? Ii(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = F2.exec(e)) ? Yl(t[1], t[2] / 100, t[3] / 100, 1) : (t = P2.exec(e)) ? Yl(t[1], t[2] / 100, t[3] / 100, t[4]) : Bl.hasOwnProperty(e) ? zl(Bl[e]) : e === "transparent" ? new Ne(NaN, NaN, NaN, 0) : null;
}
function zl(e) {
  return new Ne(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ii(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ne(e, t, n, r);
}
function bf(e) {
  return e instanceof dn || (e = Nn(e)), e ? (e = e.rgb(), new Ne(e.r, e.g, e.b, e.opacity)) : new Ne();
}
function fn(e, t, n, r) {
  return arguments.length === 1 ? bf(e) : new Ne(e, t, n, r ?? 1);
}
function Ne(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
yr(Ne, fn, ui(dn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new Ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? En : Math.pow(En, e), new Ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ne(Mn(this.r), Mn(this.g), Mn(this.b), mo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ql,
  // Deprecated! Use color.formatHex.
  formatHex: ql,
  formatHex8: H2,
  formatRgb: Wl,
  toString: Wl
}));
function ql() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}`;
}
function H2() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}${xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wl() {
  const e = mo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function mo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xn(e) {
  return e = Mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Yl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dt(e, t, n, r);
}
function vd(e) {
  if (e instanceof dt)
    return new dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof dn || (e = Nn(e)), !e)
    return new dt();
  if (e instanceof dt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), o = Math.max(t, n, r), a = NaN, s = o - i, f = (o + i) / 2;
  return s ? (t === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= f < 0.5 ? o + i : 2 - o - i, a *= 60) : s = f > 0 && f < 1 ? 0 : a, new dt(a, s, f, e.opacity);
}
function hs(e, t, n, r) {
  return arguments.length === 1 ? vd(e) : new dt(e, t, n, r ?? 1);
}
function dt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
yr(dt, hs, ui(dn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? En : Math.pow(En, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Ne(
      Ma(e >= 240 ? e - 240 : e + 120, i, r),
      Ma(e, i, r),
      Ma(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new dt(Vl(this.h), Oi(this.s), Oi(this.l), mo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = mo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Vl(this.h)}, ${Oi(this.s) * 100}%, ${Oi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Vl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Oi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ma(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xd = Math.PI / 180, Md = 180 / Math.PI, go = 18, Sd = 0.96422, kd = 1, Td = 0.82521, Cd = 4 / 29, nr = 6 / 29, Ad = 3 * nr * nr, z2 = nr * nr * nr;
function Ed(e) {
  if (e instanceof At)
    return new At(e.l, e.a, e.b, e.opacity);
  if (e instanceof qt)
    return Nd(e);
  e instanceof Ne || (e = bf(e));
  var t = Ca(e.r), n = Ca(e.g), r = Ca(e.b), i = Sa((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / kd), o, a;
  return t === n && n === r ? o = a = i : (o = Sa((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / Sd), a = Sa((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / Td)), new At(116 * i - 16, 500 * (o - i), 200 * (i - a), e.opacity);
}
function ms(e, t, n, r) {
  return arguments.length === 1 ? Ed(e) : new At(e, t, n, r ?? 1);
}
function At(e, t, n, r) {
  this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
yr(At, ms, ui(dn, {
  brighter(e) {
    return new At(this.l + go * (e ?? 1), this.a, this.b, this.opacity);
  },
  darker(e) {
    return new At(this.l - go * (e ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
    return t = Sd * ka(t), e = kd * ka(e), n = Td * ka(n), new Ne(
      Ta(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
      Ta(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
      Ta(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
      this.opacity
    );
  }
}));
function Sa(e) {
  return e > z2 ? Math.pow(e, 1 / 3) : e / Ad + Cd;
}
function ka(e) {
  return e > nr ? e * e * e : Ad * (e - Cd);
}
function Ta(e) {
  return 255 * (e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
}
function Ca(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function q2(e) {
  if (e instanceof qt)
    return new qt(e.h, e.c, e.l, e.opacity);
  if (e instanceof At || (e = Ed(e)), e.a === 0 && e.b === 0)
    return new qt(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * Md;
  return new qt(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function gs(e, t, n, r) {
  return arguments.length === 1 ? q2(e) : new qt(e, t, n, r ?? 1);
}
function qt(e, t, n, r) {
  this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Nd(e) {
  if (isNaN(e.h))
    return new At(e.l, 0, 0, e.opacity);
  var t = e.h * xd;
  return new At(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
yr(qt, gs, ui(dn, {
  brighter(e) {
    return new qt(this.h, this.c, this.l + go * (e ?? 1), this.opacity);
  },
  darker(e) {
    return new qt(this.h, this.c, this.l - go * (e ?? 1), this.opacity);
  },
  rgb() {
    return Nd(this).rgb();
  }
}));
var Rd = -0.14861, yf = 1.78277, wf = -0.29227, Vo = -0.90649, Zr = 1.97294, Gl = Zr * Vo, Xl = Zr * yf, jl = yf * wf - Vo * Rd;
function W2(e) {
  if (e instanceof Sn)
    return new Sn(e.h, e.s, e.l, e.opacity);
  e instanceof Ne || (e = bf(e));
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (jl * r + Gl * t - Xl * n) / (jl + Gl - Xl), o = r - i, a = (Zr * (n - i) - wf * o) / Vo, s = Math.sqrt(a * a + o * o) / (Zr * i * (1 - i)), f = s ? Math.atan2(a, o) * Md - 120 : NaN;
  return new Sn(f < 0 ? f + 360 : f, s, i, e.opacity);
}
function Rt(e, t, n, r) {
  return arguments.length === 1 ? W2(e) : new Sn(e, t, n, r ?? 1);
}
function Sn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
yr(Sn, Rt, ui(dn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new Sn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? En : Math.pow(En, e), new Sn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * xd, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
    return new Ne(
      255 * (t + n * (Rd * r + yf * i)),
      255 * (t + n * (wf * r + Vo * i)),
      255 * (t + n * (Zr * r)),
      this.opacity
    );
  }
}));
function Y2(e, t, n, r, i) {
  var o = e * e, a = o * e;
  return ((1 - 3 * e + 3 * o - a) * t + (4 - 6 * o + 3 * a) * n + (1 + 3 * e + 3 * o - 3 * a) * r + a * i) / 6;
}
function V2(e) {
  var t = e.length - 1;
  return function(n) {
    var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], o = e[r + 1], a = r > 0 ? e[r - 1] : 2 * i - o, s = r < t - 1 ? e[r + 2] : 2 * o - i;
    return Y2((n - r / t) * t, a, i, o, s);
  };
}
const Go = (e) => () => e;
function Ld(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function G2(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function _f(e, t) {
  var n = t - e;
  return n ? Ld(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Go(isNaN(e) ? t : e);
}
function X2(e) {
  return (e = +e) == 1 ? Fe : function(t, n) {
    return n - t ? G2(t, n, e) : Go(isNaN(t) ? n : t);
  };
}
function Fe(e, t) {
  var n = t - e;
  return n ? Ld(e, n) : Go(isNaN(e) ? t : e);
}
const Rn = function e(t) {
  var n = X2(t);
  function r(i, o) {
    var a = n((i = fn(i)).r, (o = fn(o)).r), s = n(i.g, o.g), f = n(i.b, o.b), l = Fe(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = f(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function j2(e) {
  return function(t) {
    var n = t.length, r = new Array(n), i = new Array(n), o = new Array(n), a, s;
    for (a = 0; a < n; ++a)
      s = fn(t[a]), r[a] = s.r || 0, i[a] = s.g || 0, o[a] = s.b || 0;
    return r = e(r), i = e(i), o = e(o), s.opacity = 1, function(f) {
      return s.r = r(f), s.g = i(f), s.b = o(f), s + "";
    };
  };
}
var Z2 = j2(V2);
function K2(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i)
      r[i] = e[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function Q2(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function J2(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a)
    i[a] = di(e[a], t[a]);
  for (; a < n; ++a)
    o[a] = t[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function ey(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function $e(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ty(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = di(e[i], t[i]) : r[i] = t[i];
  return function(o) {
    for (i in n)
      r[i] = n[i](o);
    return r;
  };
}
var ps = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Aa = new RegExp(ps.source, "g");
function ny(e) {
  return function() {
    return e;
  };
}
function ry(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Dd(e, t) {
  var n = ps.lastIndex = Aa.lastIndex = 0, r, i, o, a = -1, s = [], f = [];
  for (e = e + "", t = t + ""; (r = ps.exec(e)) && (i = Aa.exec(t)); )
    (o = i.index) > n && (o = t.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, f.push({ i: a, x: $e(r, i) })), n = Aa.lastIndex;
  return n < t.length && (o = t.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? f[0] ? ry(f[0].x) : ny(t) : (t = f.length, function(l) {
    for (var c = 0, u; c < t; ++c)
      s[(u = f[c]).i] = u.x(l);
    return s.join("");
  });
}
function di(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Go(t) : (n === "number" ? $e : n === "string" ? (r = Nn(t)) ? (t = r, Rn) : Dd : t instanceof Nn ? Rn : t instanceof Date ? ey : Q2(t) ? K2 : Array.isArray(t) ? J2 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ty : $e)(e, t);
}
function vf(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var Zl = 180 / Math.PI, bs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Id(e, t, n, r, i, o) {
  var a, s, f;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (f = e * n + t * r) && (n -= e * f, r -= t * f), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, f /= s), e * r < t * n && (e = -e, t = -t, f = -f, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, e) * Zl,
    skewX: Math.atan(f) * Zl,
    scaleX: a,
    scaleY: s
  };
}
var $i;
function iy(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? bs : Id(t.a, t.b, t.c, t.d, t.e, t.f);
}
function oy(e) {
  return e == null || ($i || ($i = document.createElementNS("http://www.w3.org/2000/svg", "g")), $i.setAttribute("transform", e), !(e = $i.transform.baseVal.consolidate())) ? bs : (e = e.matrix, Id(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Od(e, t, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, u, d, h, m) {
    if (l !== u || c !== d) {
      var p = h.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: $e(l, u) }, { i: p - 2, x: $e(c, d) });
    } else
      (u || d) && h.push("translate(" + u + t + d + n);
  }
  function a(l, c, u, d) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), d.push({ i: u.push(i(u) + "rotate(", null, r) - 2, x: $e(l, c) })) : c && u.push(i(u) + "rotate(" + c + r);
  }
  function s(l, c, u, d) {
    l !== c ? d.push({ i: u.push(i(u) + "skewX(", null, r) - 2, x: $e(l, c) }) : c && u.push(i(u) + "skewX(" + c + r);
  }
  function f(l, c, u, d, h, m) {
    if (l !== u || c !== d) {
      var p = h.push(i(h) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: $e(l, u) }, { i: p - 2, x: $e(c, d) });
    } else
      (u !== 1 || d !== 1) && h.push(i(h) + "scale(" + u + "," + d + ")");
  }
  return function(l, c) {
    var u = [], d = [];
    return l = e(l), c = e(c), o(l.translateX, l.translateY, c.translateX, c.translateY, u, d), a(l.rotate, c.rotate, u, d), s(l.skewX, c.skewX, u, d), f(l.scaleX, l.scaleY, c.scaleX, c.scaleY, u, d), l = c = null, function(h) {
      for (var m = -1, p = d.length, y; ++m < p; )
        u[(y = d[m]).i] = y.x(h);
      return u.join("");
    };
  };
}
var ay = Od(iy, "px, ", "px)", "deg)"), sy = Od(oy, ", ", ")", ")");
function fy(e) {
  return function(t, n) {
    var r = e((t = hs(t)).h, (n = hs(n)).h), i = Fe(t.s, n.s), o = Fe(t.l, n.l), a = Fe(t.opacity, n.opacity);
    return function(s) {
      return t.h = r(s), t.s = i(s), t.l = o(s), t.opacity = a(s), t + "";
    };
  };
}
const ly = fy(_f);
function cy(e, t) {
  var n = Fe((e = ms(e)).l, (t = ms(t)).l), r = Fe(e.a, t.a), i = Fe(e.b, t.b), o = Fe(e.opacity, t.opacity);
  return function(a) {
    return e.l = n(a), e.a = r(a), e.b = i(a), e.opacity = o(a), e + "";
  };
}
function uy(e) {
  return function(t, n) {
    var r = e((t = gs(t)).h, (n = gs(n)).h), i = Fe(t.c, n.c), o = Fe(t.l, n.l), a = Fe(t.opacity, n.opacity);
    return function(s) {
      return t.h = r(s), t.c = i(s), t.l = o(s), t.opacity = a(s), t + "";
    };
  };
}
const dy = uy(_f);
function $d(e) {
  return function t(n) {
    n = +n;
    function r(i, o) {
      var a = e((i = Rt(i)).h, (o = Rt(o)).h), s = Fe(i.s, o.s), f = Fe(i.l, o.l), l = Fe(i.opacity, o.opacity);
      return function(c) {
        return i.h = a(c), i.s = s(c), i.l = f(Math.pow(c, n)), i.opacity = l(c), i + "";
      };
    }
    return r.gamma = t, r;
  }(1);
}
$d(_f);
var xf = $d(Fe);
function Xo(e, t) {
  t === void 0 && (t = e, e = di);
  for (var n = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); n < r; )
    o[n] = e(i, i = t[++n]);
  return function(a) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(a *= r)));
    return o[s](a - s);
  };
}
function pt(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r)
    n[r] = e(r / (t - 1));
  return n;
}
var fr = 0, Lr = 0, Tr = 0, Fd = 1e3, po, Dr, bo = 0, Ln = 0, jo = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Pd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Mf() {
  return Ln || (Pd(hy), Ln = Kr.now() + jo);
}
function hy() {
  Ln = 0;
}
function yo() {
  this._call = this._time = this._next = null;
}
yo.prototype = Bd.prototype = {
  constructor: yo,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Mf() : +n) + (t == null ? 0 : +t), !this._next && Dr !== this && (Dr ? Dr._next = this : po = this, Dr = this), this._call = e, this._time = n, ys();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ys());
  }
};
function Bd(e, t, n) {
  var r = new yo();
  return r.restart(e, t, n), r;
}
function my() {
  Mf(), ++fr;
  for (var e = po, t; e; )
    (t = Ln - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --fr;
}
function Kl() {
  Ln = (bo = Kr.now()) + jo, fr = Lr = 0;
  try {
    my();
  } finally {
    fr = 0, py(), Ln = 0;
  }
}
function gy() {
  var e = Kr.now(), t = e - bo;
  t > Fd && (jo -= t, bo = e);
}
function py() {
  for (var e, t = po, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : po = n);
  Dr = e, ys(r);
}
function ys(e) {
  if (!fr) {
    Lr && (Lr = clearTimeout(Lr));
    var t = e - Ln;
    t > 24 ? (e < 1 / 0 && (Lr = setTimeout(Kl, e - Kr.now() - jo)), Tr && (Tr = clearInterval(Tr))) : (Tr || (bo = Kr.now(), Tr = setInterval(gy, Fd)), fr = 1, Pd(Kl));
  }
}
function Ql(e, t, n) {
  var r = new yo();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var by = ld("start", "end", "cancel", "interrupt"), yy = [], Ud = 0, Jl = 1, ws = 2, eo = 3, ec = 4, _s = 5, to = 6;
function Zo(e, t, n, r, i, o) {
  var a = e.__transition;
  if (!a)
    e.__transition = {};
  else if (n in a)
    return;
  wy(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: by,
    tween: yy,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ud
  });
}
function Sf(e, t) {
  var n = _t(e, t);
  if (n.state > Ud)
    throw new Error("too late; already scheduled");
  return n;
}
function Dt(e, t) {
  var n = _t(e, t);
  if (n.state > eo)
    throw new Error("too late; already running");
  return n;
}
function _t(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function wy(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = Bd(o, 0, n.time);
  function o(l) {
    n.state = Jl, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, u, d, h;
    if (n.state !== Jl)
      return f();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === eo)
          return Ql(a);
        h.state === ec ? (h.state = to, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = to, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (Ql(function() {
      n.state === eo && (n.state = ec, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = ws, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ws) {
      for (n.state = eo, i = new Array(d = n.tween.length), c = 0, u = -1; c < d; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = h);
      i.length = u + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(f), n.state = _s, 1), u = -1, d = i.length; ++u < d; )
      i[u].call(e, c);
    n.state === _s && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = to, n.timer.stop(), delete r[t];
    for (var l in r)
      return;
    delete e.__transition;
  }
}
function _y(e, t) {
  var n = e.__transition, r, i, o = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > ws && r.state < _s, r.state = to, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    o && delete e.__transition;
  }
}
function vy(e) {
  return this.each(function() {
    _y(this, e);
  });
}
function xy(e, t) {
  var n, r;
  return function() {
    var i = Dt(this, e), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function My(e, t, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var o = Dt(this, e), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: t, value: n }, f = 0, l = i.length; f < l; ++f)
        if (i[f].name === t) {
          i[f] = s;
          break;
        }
      f === l && i.push(s);
    }
    o.tween = i;
  };
}
function Sy(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = _t(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? xy : My)(n, e, t));
}
function kf(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Dt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return _t(i, r).value[t];
  };
}
function Hd(e, t) {
  var n;
  return (typeof t == "number" ? $e : t instanceof Nn ? Rn : (n = Nn(t)) ? (t = n, Rn) : Dd)(e, t);
}
function ky(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ty(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cy(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function Ay(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function Ey(e, t, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), f;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), f = s + "", a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, s)));
  };
}
function Ny(e, t, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), f;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), f = s + "", a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, s)));
  };
}
function Ry(e, t) {
  var n = Wo(e), r = n === "transform" ? sy : Hd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ny : Ey)(n, r, kf(this, "attr." + e, t)) : t == null ? (n.local ? Ty : ky)(n) : (n.local ? Ay : Cy)(n, r, t));
}
function Ly(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Dy(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Iy(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && Dy(e, o)), n;
  }
  return i._value = t, i;
}
function Oy(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && Ly(e, o)), n;
  }
  return i._value = t, i;
}
function $y(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Wo(e);
  return this.tween(n, (r.local ? Iy : Oy)(r, t));
}
function Fy(e, t) {
  return function() {
    Sf(this, e).delay = +t.apply(this, arguments);
  };
}
function Py(e, t) {
  return t = +t, function() {
    Sf(this, e).delay = t;
  };
}
function By(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Fy : Py)(t, e)) : _t(this.node(), t).delay;
}
function Uy(e, t) {
  return function() {
    Dt(this, e).duration = +t.apply(this, arguments);
  };
}
function Hy(e, t) {
  return t = +t, function() {
    Dt(this, e).duration = t;
  };
}
function zy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Uy : Hy)(t, e)) : _t(this.node(), t).duration;
}
function qy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Dt(this, e).ease = t;
  };
}
function Wy(e) {
  var t = this._id;
  return arguments.length ? this.each(qy(t, e)) : _t(this.node(), t).ease;
}
function Yy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Dt(this, e).ease = n;
  };
}
function Vy(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Yy(this._id, e));
}
function Gy(e) {
  typeof e != "function" && (e = ud(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = [], f, l = 0; l < a; ++l)
      (f = o[l]) && e.call(f, f.__data__, l, o) && s.push(f);
  return new Xt(r, this._parents, this._name, this._id);
}
function Xy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var f = t[s], l = n[s], c = f.length, u = a[s] = new Array(c), d, h = 0; h < c; ++h)
      (d = f[h] || l[h]) && (u[h] = d);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Xt(a, this._parents, this._name, this._id);
}
function jy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Zy(e, t, n) {
  var r, i, o = jy(t) ? Sf : Dt;
  return function() {
    var a = o(this, e), s = a.on;
    s !== r && (i = (r = s).copy()).on(t, n), a.on = i;
  };
}
function Ky(e, t) {
  var n = this._id;
  return arguments.length < 2 ? _t(this.node(), n).on.on(e) : this.each(Zy(n, e, t));
}
function Qy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function Jy() {
  return this.on("end.remove", Qy(this._id));
}
function ew(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = gf(e));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], f = s.length, l = o[a] = new Array(f), c, u, d = 0; d < f; ++d)
      (c = s[d]) && (u = e.call(c, c.__data__, d, s)) && ("__data__" in c && (u.__data__ = c.__data__), l[d] = u, Zo(l[d], t, n, d, l, _t(c, n)));
  return new Xt(o, this._parents, t, n);
}
function tw(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = cd(e));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var f = r[s], l = f.length, c, u = 0; u < l; ++u)
      if (c = f[u]) {
        for (var d = e.call(c, c.__data__, u, f), h, m = _t(c, n), p = 0, y = d.length; p < y; ++p)
          (h = d[p]) && Zo(h, t, n, p, d, m);
        o.push(d), a.push(c);
      }
  return new Xt(o, a, t, n);
}
var nw = ci.prototype.constructor;
function rw() {
  return new nw(this._groups, this._parents);
}
function iw(e, t) {
  var n, r, i;
  return function() {
    var o = ar(this, e), a = (this.style.removeProperty(e), ar(this, e));
    return o === a ? null : o === n && a === r ? i : i = t(n = o, r = a);
  };
}
function zd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ow(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = ar(this, e);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function aw(e, t, n) {
  var r, i, o;
  return function() {
    var a = ar(this, e), s = n(this), f = s + "";
    return s == null && (f = s = (this.style.removeProperty(e), ar(this, e))), a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, s));
  };
}
function sw(e, t) {
  var n, r, i, o = "style." + t, a = "end." + o, s;
  return function() {
    var f = Dt(this, e), l = f.on, c = f.value[o] == null ? s || (s = zd(t)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), f.on = r;
  };
}
function fw(e, t, n) {
  var r = (e += "") == "transform" ? ay : Hd;
  return t == null ? this.styleTween(e, iw(e, r)).on("end.style." + e, zd(e)) : typeof t == "function" ? this.styleTween(e, aw(e, r, kf(this, "style." + e, t))).each(sw(this._id, e)) : this.styleTween(e, ow(e, r, t), n).on("end.style." + e, null);
}
function lw(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function cw(e, t, n) {
  var r, i;
  function o() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && lw(e, a, n)), r;
  }
  return o._value = t, o;
}
function uw(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, cw(e, t, n ?? ""));
}
function dw(e) {
  return function() {
    this.textContent = e;
  };
}
function hw(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function mw(e) {
  return this.tween("text", typeof e == "function" ? hw(kf(this, "text", e)) : dw(e == null ? "" : e + ""));
}
function gw(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function pw(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && gw(i)), t;
  }
  return r._value = e, r;
}
function bw(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, pw(e));
}
function yw() {
  for (var e = this._name, t = this._id, n = qd(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, f, l = 0; l < s; ++l)
      if (f = a[l]) {
        var c = _t(f, t);
        Zo(f, e, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Xt(r, this._parents, e, n);
}
function ww() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, f = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = Dt(this, r), c = l.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(f)), l.on = t;
    }), i === 0 && o();
  });
}
var _w = 0;
function Xt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function qd() {
  return ++_w;
}
var $t = ci.prototype;
Xt.prototype = {
  constructor: Xt,
  select: ew,
  selectAll: tw,
  selectChild: $t.selectChild,
  selectChildren: $t.selectChildren,
  filter: Gy,
  merge: Xy,
  selection: rw,
  transition: yw,
  call: $t.call,
  nodes: $t.nodes,
  node: $t.node,
  size: $t.size,
  empty: $t.empty,
  each: $t.each,
  on: Ky,
  attr: Ry,
  attrTween: $y,
  style: fw,
  styleTween: uw,
  text: mw,
  textTween: bw,
  remove: Jy,
  tween: Sy,
  delay: By,
  duration: zy,
  ease: Wy,
  easeVarying: Vy,
  end: ww,
  [Symbol.iterator]: $t[Symbol.iterator]
};
function vw(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xw = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vw
};
function Mw(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Sw(e) {
  var t, n;
  e instanceof Xt ? (t = e._id, e = e._name) : (t = qd(), (n = xw).time = Mf(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, f, l = 0; l < s; ++l)
      (f = a[l]) && Zo(f, e, t, l, a, n || Mw(f, t));
  return new Xt(r, this._parents, e, t);
}
ci.prototype.interrupt = vy;
ci.prototype.transition = Sw;
const vs = Math.PI, xs = 2 * vs, wn = 1e-6, kw = xs - wn;
function Wd(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Tw(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return Wd;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Cw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Wd : Tw(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(t, n, r, i, o, a) {
    this._append`C${+t},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, n, r, i, o) {
    if (t = +t, n = +n, r = +r, i = +i, o = +o, o < 0)
      throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, f = r - t, l = i - n, c = a - t, u = s - n, d = c * c + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (d > wn)
      if (!(Math.abs(u * f - l * c) > wn) || !o)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let h = r - a, m = i - s, p = f * f + l * l, y = h * h + m * m, b = Math.sqrt(p), w = Math.sqrt(d), v = o * Math.tan((vs - Math.acos((p + d - y) / (2 * b * w))) / 2), x = v / w, C = v / b;
        Math.abs(x - 1) > wn && this._append`L${t + x * c},${n + x * u}`, this._append`A${o},${o},0,0,${+(u * h > c * m)},${this._x1 = t + C * f},${this._y1 = n + C * l}`;
      }
  }
  arc(t, n, r, i, o, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0)
      throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), f = r * Math.sin(i), l = t + s, c = n + f, u = 1 ^ a, d = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > wn || Math.abs(this._y1 - c) > wn) && this._append`L${l},${c}`, r && (d < 0 && (d = d % xs + xs), d > kw ? this._append`A${r},${r},0,1,${u},${t - s},${n - f}A${r},${r},0,1,${u},${this._x1 = l},${this._y1 = c}` : d > wn && this._append`A${r},${r},0,${+(d >= vs)},${u},${this._x1 = t + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Ms(e = 3) {
  return new Cw(+e);
}
function Aw(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function wo(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function lr(e) {
  return e = wo(Math.abs(e)), e ? e[1] : NaN;
}
function Ew(e, t) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = e[0], f = 0; i > 0 && s > 0 && (f + s + 1 > r && (s = Math.max(1, r - f)), o.push(n.substring(i -= s, i + s)), !((f += s + 1) > r)); )
      s = e[a = (a + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Nw(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Rw = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Qr(e) {
  if (!(t = Rw.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Tf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Qr.prototype = Tf.prototype;
function Tf(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Tf.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Lw(e) {
  e:
    for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
      switch (e[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+e[n])
            break e;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Yd;
function Dw(e, t) {
  var n = wo(e, t);
  if (!n)
    return e + "";
  var r = n[0], i = n[1], o = i - (Yd = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + wo(e, Math.max(0, t + o - 1))[0];
}
function tc(e, t) {
  var n = wo(e, t);
  if (!n)
    return e + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const nc = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Aw,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => tc(e * 100, t),
  r: tc,
  s: Dw,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function rc(e) {
  return e;
}
var ic = Array.prototype.map, oc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Iw(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? rc : Ew(ic.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? rc : Nw(ic.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(u) {
    u = Qr(u);
    var d = u.fill, h = u.align, m = u.sign, p = u.symbol, y = u.zero, b = u.width, w = u.comma, v = u.precision, x = u.trim, C = u.type;
    C === "n" ? (w = !0, C = "g") : nc[C] || (v === void 0 && (v = 12), x = !0, C = "g"), (y || d === "0" && h === "=") && (y = !0, d = "0", h = "=");
    var k = p === "$" ? n : p === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", R = p === "$" ? r : /[%p]/.test(C) ? a : "", T = nc[C], D = /[defgprs%]/.test(C);
    v = v === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    function F(N) {
      var B = k, V = R, U, L, Y;
      if (C === "c")
        V = T(N) + V, N = "";
      else {
        N = +N;
        var q = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? f : T(Math.abs(N), v), x && (N = Lw(N)), q && +N == 0 && m !== "+" && (q = !1), B = (q ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + B, V = (C === "s" ? oc[8 + Yd / 3] : "") + V + (q && m === "(" ? ")" : ""), D) {
          for (U = -1, L = N.length; ++U < L; )
            if (Y = N.charCodeAt(U), 48 > Y || Y > 57) {
              V = (Y === 46 ? i + N.slice(U + 1) : N.slice(U)) + V, N = N.slice(0, U);
              break;
            }
        }
      }
      w && !y && (N = t(N, 1 / 0));
      var g = B.length + N.length + V.length, M = g < b ? new Array(b - g + 1).join(d) : "";
      switch (w && y && (N = t(M + N, M.length ? b - V.length : 1 / 0), M = ""), h) {
        case "<":
          N = B + N + V + M;
          break;
        case "=":
          N = B + M + N + V;
          break;
        case "^":
          N = M.slice(0, g = M.length >> 1) + B + N + V + M.slice(g);
          break;
        default:
          N = M + B + N + V;
          break;
      }
      return o(N);
    }
    return F.toString = function() {
      return u + "";
    }, F;
  }
  function c(u, d) {
    var h = l((u = Qr(u), u.type = "f", u)), m = Math.max(-8, Math.min(8, Math.floor(lr(d) / 3))) * 3, p = Math.pow(10, -m), y = oc[8 + m / 3];
    return function(b) {
      return h(p * b) + y;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var Fi, wr, Vd;
Ow({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ow(e) {
  return Fi = Iw(e), wr = Fi.format, Vd = Fi.formatPrefix, Fi;
}
function $w(e) {
  return Math.max(0, -lr(Math.abs(e)));
}
function Fw(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(lr(t) / 3))) * 3 - lr(Math.abs(e)));
}
function Pw(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, lr(t) - lr(e)) + 1;
}
var se = 1e-6, Gd = 1e-12, le = Math.PI, Se = le / 2, ac = le / 4, Ke = le * 2, Ue = 180 / le, ve = le / 180, ge = Math.abs, _r = Math.atan, jt = Math.atan2, fe = Math.cos, Xd = Math.exp, _o = Math.log, Ea = Math.pow, oe = Math.sin, nt = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, Ve = Math.sqrt, Cf = Math.tan;
function jd(e) {
  return e > 1 ? 0 : e < -1 ? le : Math.acos(e);
}
function lt(e) {
  return e > 1 ? Se : e < -1 ? -Se : Math.asin(e);
}
function rt() {
}
function vo(e, t) {
  e && fc.hasOwnProperty(e.type) && fc[e.type](e, t);
}
var sc = {
  Feature: function(e, t) {
    vo(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, r = -1, i = n.length; ++r < i; )
      vo(n[r].geometry, t);
  }
}, fc = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
      e = n[r], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    Ss(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
      Ss(n[r], t, 0);
  },
  Polygon: function(e, t) {
    lc(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, r = -1, i = n.length; ++r < i; )
      lc(n[r], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, r = -1, i = n.length; ++r < i; )
      vo(n[r], t);
  }
};
function Ss(e, t, n) {
  var r = -1, i = e.length - n, o;
  for (t.lineStart(); ++r < i; )
    o = e[r], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function lc(e, t) {
  var n = -1, r = e.length;
  for (t.polygonStart(); ++n < r; )
    Ss(e[n], t, 1);
  t.polygonEnd();
}
function _n(e, t) {
  e && sc.hasOwnProperty(e.type) ? sc[e.type](e, t) : vo(e, t);
}
function ks(e) {
  return [jt(e[1], e[0]), lt(e[2])];
}
function cr(e) {
  var t = e[0], n = e[1], r = fe(n);
  return [r * fe(t), r * oe(t), oe(n)];
}
function Pi(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function xo(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Na(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Bi(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Ts(e) {
  var t = Ve(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function Cs(e, t) {
  function n(r, i) {
    return r = e(r, i), t(r[0], r[1]);
  }
  return e.invert && t.invert && (n.invert = function(r, i) {
    return r = t.invert(r, i), r && e.invert(r[0], r[1]);
  }), n;
}
function As(e, t) {
  return ge(e) > le && (e -= Math.round(e / Ke) * Ke), [e, t];
}
As.invert = As;
function Zd(e, t, n) {
  return (e %= Ke) ? t || n ? Cs(uc(e), dc(t, n)) : uc(e) : t || n ? dc(t, n) : As;
}
function cc(e) {
  return function(t, n) {
    return t += e, ge(t) > le && (t -= Math.round(t / Ke) * Ke), [t, n];
  };
}
function uc(e) {
  var t = cc(e);
  return t.invert = cc(-e), t;
}
function dc(e, t) {
  var n = fe(e), r = oe(e), i = fe(t), o = oe(t);
  function a(s, f) {
    var l = fe(f), c = fe(s) * l, u = oe(s) * l, d = oe(f), h = d * n + c * r;
    return [
      jt(u * i - h * o, c * n - d * r),
      lt(h * i + u * o)
    ];
  }
  return a.invert = function(s, f) {
    var l = fe(f), c = fe(s) * l, u = oe(s) * l, d = oe(f), h = d * i - u * o;
    return [
      jt(u * i + d * o, c * n + h * r),
      lt(h * n - c * r)
    ];
  }, a;
}
function Bw(e) {
  e = Zd(e[0] * ve, e[1] * ve, e.length > 2 ? e[2] * ve : 0);
  function t(n) {
    return n = e(n[0] * ve, n[1] * ve), n[0] *= Ue, n[1] *= Ue, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * ve, n[1] * ve), n[0] *= Ue, n[1] *= Ue, n;
  }, t;
}
function Uw(e, t, n, r, i, o) {
  if (n) {
    var a = fe(t), s = oe(t), f = r * n;
    i == null ? (i = t + r * Ke, o = t - f / 2) : (i = hc(a, i), o = hc(a, o), (r > 0 ? i < o : i > o) && (i += r * Ke));
    for (var l, c = i; r > 0 ? c > o : c < o; c -= f)
      l = ks([a, -s * fe(c), -s * oe(c)]), e.point(l[0], l[1]);
  }
}
function hc(e, t) {
  t = cr(t), t[0] -= e, Ts(t);
  var n = jd(-t[1]);
  return ((-t[2] < 0 ? -n : n) + Ke - se) % Ke;
}
function Kd() {
  var e = [], t;
  return {
    point: function(n, r, i) {
      t.push([n, r, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: rt,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function no(e, t) {
  return ge(e[0] - t[0]) < se && ge(e[1] - t[1]) < se;
}
function Ui(e, t, n, r) {
  this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function Qd(e, t, n, r, i) {
  var o = [], a = [], s, f;
  if (e.forEach(function(m) {
    if (!((p = m.length - 1) <= 0)) {
      var p, y = m[0], b = m[p], w;
      if (no(y, b)) {
        if (!y[2] && !b[2]) {
          for (i.lineStart(), s = 0; s < p; ++s)
            i.point((y = m[s])[0], y[1]);
          i.lineEnd();
          return;
        }
        b[0] += 2 * se;
      }
      o.push(w = new Ui(y, m, null, !0)), a.push(w.o = new Ui(y, null, w, !1)), o.push(w = new Ui(b, m, null, !1)), a.push(w.o = new Ui(b, null, w, !0));
    }
  }), !!o.length) {
    for (a.sort(t), mc(o), mc(a), s = 0, f = a.length; s < f; ++s)
      a[s].e = n = !n;
    for (var l = o[0], c, u; ; ) {
      for (var d = l, h = !0; d.v; )
        if ((d = d.n) === l)
          return;
      c = d.z, i.lineStart();
      do {
        if (d.v = d.o.v = !0, d.e) {
          if (h)
            for (s = 0, f = c.length; s < f; ++s)
              i.point((u = c[s])[0], u[1]);
          else
            r(d.x, d.n.x, 1, i);
          d = d.n;
        } else {
          if (h)
            for (c = d.p.z, s = c.length - 1; s >= 0; --s)
              i.point((u = c[s])[0], u[1]);
          else
            r(d.x, d.p.x, -1, i);
          d = d.p;
        }
        d = d.o, c = d.z, h = !h;
      } while (!d.v);
      i.lineEnd();
    }
  }
}
function mc(e) {
  if (t = e.length) {
    for (var t, n = 0, r = e[0], i; ++n < t; )
      r.n = i = e[n], i.p = r, r = i;
    r.n = i = e[0], i.p = r;
  }
}
function Ra(e) {
  return ge(e[0]) <= le ? e[0] : nt(e[0]) * ((ge(e[0]) + le) % Ke - le);
}
function Hw(e, t) {
  var n = Ra(t), r = t[1], i = oe(r), o = [oe(n), -fe(n), 0], a = 0, s = 0, f = new Cn();
  i === 1 ? r = Se + se : i === -1 && (r = -Se - se);
  for (var l = 0, c = e.length; l < c; ++l)
    if (d = (u = e[l]).length)
      for (var u, d, h = u[d - 1], m = Ra(h), p = h[1] / 2 + ac, y = oe(p), b = fe(p), w = 0; w < d; ++w, m = x, y = k, b = R, h = v) {
        var v = u[w], x = Ra(v), C = v[1] / 2 + ac, k = oe(C), R = fe(C), T = x - m, D = T >= 0 ? 1 : -1, F = D * T, N = F > le, B = y * k;
        if (f.add(jt(B * D * oe(F), b * R + B * fe(F))), a += N ? T + D * Ke : T, N ^ m >= n ^ x >= n) {
          var V = xo(cr(h), cr(v));
          Ts(V);
          var U = xo(o, V);
          Ts(U);
          var L = (N ^ T >= 0 ? -1 : 1) * lt(U[2]);
          (r > L || r === L && (V[0] || V[1])) && (s += N ^ T >= 0 ? 1 : -1);
        }
      }
  return (a < -se || a < se && f < -Gd) ^ s & 1;
}
function Jd(e, t, n, r) {
  return function(i) {
    var o = t(i), a = Kd(), s = t(a), f = !1, l, c, u, d = {
      point: h,
      lineStart: p,
      lineEnd: y,
      polygonStart: function() {
        d.point = b, d.lineStart = w, d.lineEnd = v, c = [], l = [];
      },
      polygonEnd: function() {
        d.point = h, d.lineStart = p, d.lineEnd = y, c = fd(c);
        var x = Hw(l, r);
        c.length ? (f || (i.polygonStart(), f = !0), Qd(c, qw, x, n, i)) : x && (f || (i.polygonStart(), f = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), f && (i.polygonEnd(), f = !1), c = l = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function h(x, C) {
      e(x, C) && i.point(x, C);
    }
    function m(x, C) {
      o.point(x, C);
    }
    function p() {
      d.point = m, o.lineStart();
    }
    function y() {
      d.point = h, o.lineEnd();
    }
    function b(x, C) {
      u.push([x, C]), s.point(x, C);
    }
    function w() {
      s.lineStart(), u = [];
    }
    function v() {
      b(u[0][0], u[0][1]), s.lineEnd();
      var x = s.clean(), C = a.result(), k, R = C.length, T, D, F;
      if (u.pop(), l.push(u), u = null, !!R) {
        if (x & 1) {
          if (D = C[0], (T = D.length - 1) > 0) {
            for (f || (i.polygonStart(), f = !0), i.lineStart(), k = 0; k < T; ++k)
              i.point((F = D[k])[0], F[1]);
            i.lineEnd();
          }
          return;
        }
        R > 1 && x & 2 && C.push(C.pop().concat(C.shift())), c.push(C.filter(zw));
      }
    }
    return d;
  };
}
function zw(e) {
  return e.length > 1;
}
function qw(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - Se - se : Se - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Se - se : Se - t[1]);
}
const gc = Jd(
  function() {
    return !0;
  },
  Ww,
  Vw,
  [-le, -Se]
);
function Ww(e) {
  var t = NaN, n = NaN, r = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(o, a) {
      var s = o > 0 ? le : -le, f = ge(o - t);
      ge(f - le) < se ? (e.point(t, n = (n + a) / 2 > 0 ? Se : -Se), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), e.point(o, n), i = 0) : r !== s && f >= le && (ge(t - r) < se && (t -= r * se), ge(o - s) < se && (o -= s * se), n = Yw(t, n, o, a), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), i = 0), e.point(t = o, n = a), r = s;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Yw(e, t, n, r) {
  var i, o, a = oe(e - n);
  return ge(a) > se ? _r((oe(t) * (o = fe(r)) * oe(n) - oe(r) * (i = fe(t)) * oe(e)) / (i * o * a)) : (t + r) / 2;
}
function Vw(e, t, n, r) {
  var i;
  if (e == null)
    i = n * Se, r.point(-le, i), r.point(0, i), r.point(le, i), r.point(le, 0), r.point(le, -i), r.point(0, -i), r.point(-le, -i), r.point(-le, 0), r.point(-le, i);
  else if (ge(e[0] - t[0]) > se) {
    var o = e[0] < t[0] ? le : -le;
    i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(t[0], t[1]);
}
function Gw(e) {
  var t = fe(e), n = 2 * ve, r = t > 0, i = ge(t) > se;
  function o(c, u, d, h) {
    Uw(h, e, n, d, c, u);
  }
  function a(c, u) {
    return fe(c) * fe(u) > t;
  }
  function s(c) {
    var u, d, h, m, p;
    return {
      lineStart: function() {
        m = h = !1, p = 1;
      },
      point: function(y, b) {
        var w = [y, b], v, x = a(y, b), C = r ? x ? 0 : l(y, b) : x ? l(y + (y < 0 ? le : -le), b) : 0;
        if (!u && (m = h = x) && c.lineStart(), x !== h && (v = f(u, w), (!v || no(u, v) || no(w, v)) && (w[2] = 1)), x !== h)
          p = 0, x ? (c.lineStart(), v = f(w, u), c.point(v[0], v[1])) : (v = f(u, w), c.point(v[0], v[1], 2), c.lineEnd()), u = v;
        else if (i && u && r ^ x) {
          var k;
          !(C & d) && (k = f(w, u, !0)) && (p = 0, r ? (c.lineStart(), c.point(k[0][0], k[0][1]), c.point(k[1][0], k[1][1]), c.lineEnd()) : (c.point(k[1][0], k[1][1]), c.lineEnd(), c.lineStart(), c.point(k[0][0], k[0][1], 3)));
        }
        x && (!u || !no(u, w)) && c.point(w[0], w[1]), u = w, h = x, d = C;
      },
      lineEnd: function() {
        h && c.lineEnd(), u = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return p | (m && h) << 1;
      }
    };
  }
  function f(c, u, d) {
    var h = cr(c), m = cr(u), p = [1, 0, 0], y = xo(h, m), b = Pi(y, y), w = y[0], v = b - w * w;
    if (!v)
      return !d && c;
    var x = t * b / v, C = -t * w / v, k = xo(p, y), R = Bi(p, x), T = Bi(y, C);
    Na(R, T);
    var D = k, F = Pi(R, D), N = Pi(D, D), B = F * F - N * (Pi(R, R) - 1);
    if (!(B < 0)) {
      var V = Ve(B), U = Bi(D, (-F - V) / N);
      if (Na(U, R), U = ks(U), !d)
        return U;
      var L = c[0], Y = u[0], q = c[1], g = u[1], M;
      Y < L && (M = L, L = Y, Y = M);
      var _ = Y - L, S = ge(_ - le) < se, A = S || _ < se;
      if (!S && g < q && (M = q, q = g, g = M), A ? S ? q + g > 0 ^ U[1] < (ge(U[0] - L) < se ? q : g) : q <= U[1] && U[1] <= g : _ > le ^ (L <= U[0] && U[0] <= Y)) {
        var E = Bi(D, (-F + V) / N);
        return Na(E, R), [U, ks(E)];
      }
    }
  }
  function l(c, u) {
    var d = r ? e : le - e, h = 0;
    return c < -d ? h |= 1 : c > d && (h |= 2), u < -d ? h |= 4 : u > d && (h |= 8), h;
  }
  return Jd(a, s, o, r ? [0, -e] : [-le, e - le]);
}
function Xw(e, t, n, r, i, o) {
  var a = e[0], s = e[1], f = t[0], l = t[1], c = 0, u = 1, d = f - a, h = l - s, m;
  if (m = n - a, !(!d && m > 0)) {
    if (m /= d, d < 0) {
      if (m < c)
        return;
      m < u && (u = m);
    } else if (d > 0) {
      if (m > u)
        return;
      m > c && (c = m);
    }
    if (m = i - a, !(!d && m < 0)) {
      if (m /= d, d < 0) {
        if (m > u)
          return;
        m > c && (c = m);
      } else if (d > 0) {
        if (m < c)
          return;
        m < u && (u = m);
      }
      if (m = r - s, !(!h && m > 0)) {
        if (m /= h, h < 0) {
          if (m < c)
            return;
          m < u && (u = m);
        } else if (h > 0) {
          if (m > u)
            return;
          m > c && (c = m);
        }
        if (m = o - s, !(!h && m < 0)) {
          if (m /= h, h < 0) {
            if (m > u)
              return;
            m > c && (c = m);
          } else if (h > 0) {
            if (m < c)
              return;
            m < u && (u = m);
          }
          return c > 0 && (e[0] = a + c * d, e[1] = s + c * h), u < 1 && (t[0] = a + u * d, t[1] = s + u * h), !0;
        }
      }
    }
  }
}
var Ir = 1e9, Hi = -Ir;
function eh(e, t, n, r) {
  function i(l, c) {
    return e <= l && l <= n && t <= c && c <= r;
  }
  function o(l, c, u, d) {
    var h = 0, m = 0;
    if (l == null || (h = a(l, u)) !== (m = a(c, u)) || f(l, c) < 0 ^ u > 0)
      do
        d.point(h === 0 || h === 3 ? e : n, h > 1 ? r : t);
      while ((h = (h + u + 4) % 4) !== m);
    else
      d.point(c[0], c[1]);
  }
  function a(l, c) {
    return ge(l[0] - e) < se ? c > 0 ? 0 : 3 : ge(l[0] - n) < se ? c > 0 ? 2 : 1 : ge(l[1] - t) < se ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function s(l, c) {
    return f(l.x, c.x);
  }
  function f(l, c) {
    var u = a(l, 1), d = a(c, 1);
    return u !== d ? u - d : u === 0 ? c[1] - l[1] : u === 1 ? l[0] - c[0] : u === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, u = Kd(), d, h, m, p, y, b, w, v, x, C, k, R = {
      point: T,
      lineStart: B,
      lineEnd: V,
      polygonStart: F,
      polygonEnd: N
    };
    function T(L, Y) {
      i(L, Y) && c.point(L, Y);
    }
    function D() {
      for (var L = 0, Y = 0, q = h.length; Y < q; ++Y)
        for (var g = h[Y], M = 1, _ = g.length, S = g[0], A, E, H = S[0], P = S[1]; M < _; ++M)
          A = H, E = P, S = g[M], H = S[0], P = S[1], E <= r ? P > r && (H - A) * (r - E) > (P - E) * (e - A) && ++L : P <= r && (H - A) * (r - E) < (P - E) * (e - A) && --L;
      return L;
    }
    function F() {
      c = u, d = [], h = [], k = !0;
    }
    function N() {
      var L = D(), Y = k && L, q = (d = fd(d)).length;
      (Y || q) && (l.polygonStart(), Y && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), q && Qd(d, s, L, o, l), l.polygonEnd()), c = l, d = h = m = null;
    }
    function B() {
      R.point = U, h && h.push(m = []), C = !0, x = !1, w = v = NaN;
    }
    function V() {
      d && (U(p, y), b && x && u.rejoin(), d.push(u.result())), R.point = T, x && c.lineEnd();
    }
    function U(L, Y) {
      var q = i(L, Y);
      if (h && m.push([L, Y]), C)
        p = L, y = Y, b = q, C = !1, q && (c.lineStart(), c.point(L, Y));
      else if (q && x)
        c.point(L, Y);
      else {
        var g = [w = Math.max(Hi, Math.min(Ir, w)), v = Math.max(Hi, Math.min(Ir, v))], M = [L = Math.max(Hi, Math.min(Ir, L)), Y = Math.max(Hi, Math.min(Ir, Y))];
        Xw(g, M, e, t, n, r) ? (x || (c.lineStart(), c.point(g[0], g[1])), c.point(M[0], M[1]), q || c.lineEnd(), k = !1) : q && (c.lineStart(), c.point(L, Y), k = !1);
      }
      w = L, v = Y, x = q;
    }
    return R;
  };
}
const Es = (e) => e;
var La = new Cn(), Ns = new Cn(), th, nh, Rs, Ls, zt = {
  point: rt,
  lineStart: rt,
  lineEnd: rt,
  polygonStart: function() {
    zt.lineStart = jw, zt.lineEnd = Kw;
  },
  polygonEnd: function() {
    zt.lineStart = zt.lineEnd = zt.point = rt, La.add(ge(Ns)), Ns = new Cn();
  },
  result: function() {
    var e = La / 2;
    return La = new Cn(), e;
  }
};
function jw() {
  zt.point = Zw;
}
function Zw(e, t) {
  zt.point = rh, th = Rs = e, nh = Ls = t;
}
function rh(e, t) {
  Ns.add(Ls * e - Rs * t), Rs = e, Ls = t;
}
function Kw() {
  rh(th, nh);
}
var ur = 1 / 0, Mo = ur, Jr = -ur, So = Jr, ko = {
  point: Qw,
  lineStart: rt,
  lineEnd: rt,
  polygonStart: rt,
  polygonEnd: rt,
  result: function() {
    var e = [[ur, Mo], [Jr, So]];
    return Jr = So = -(Mo = ur = 1 / 0), e;
  }
};
function Qw(e, t) {
  e < ur && (ur = e), e > Jr && (Jr = e), t < Mo && (Mo = t), t > So && (So = t);
}
var Ds = 0, Is = 0, Or = 0, To = 0, Co = 0, Kn = 0, Os = 0, $s = 0, $r = 0, ih, oh, St, kt, tt = {
  point: Dn,
  lineStart: pc,
  lineEnd: bc,
  polygonStart: function() {
    tt.lineStart = t6, tt.lineEnd = n6;
  },
  polygonEnd: function() {
    tt.point = Dn, tt.lineStart = pc, tt.lineEnd = bc;
  },
  result: function() {
    var e = $r ? [Os / $r, $s / $r] : Kn ? [To / Kn, Co / Kn] : Or ? [Ds / Or, Is / Or] : [NaN, NaN];
    return Ds = Is = Or = To = Co = Kn = Os = $s = $r = 0, e;
  }
};
function Dn(e, t) {
  Ds += e, Is += t, ++Or;
}
function pc() {
  tt.point = Jw;
}
function Jw(e, t) {
  tt.point = e6, Dn(St = e, kt = t);
}
function e6(e, t) {
  var n = e - St, r = t - kt, i = Ve(n * n + r * r);
  To += i * (St + e) / 2, Co += i * (kt + t) / 2, Kn += i, Dn(St = e, kt = t);
}
function bc() {
  tt.point = Dn;
}
function t6() {
  tt.point = r6;
}
function n6() {
  ah(ih, oh);
}
function r6(e, t) {
  tt.point = ah, Dn(ih = St = e, oh = kt = t);
}
function ah(e, t) {
  var n = e - St, r = t - kt, i = Ve(n * n + r * r);
  To += i * (St + e) / 2, Co += i * (kt + t) / 2, Kn += i, i = kt * e - St * t, Os += i * (St + e), $s += i * (kt + t), $r += i * 3, Dn(St = e, kt = t);
}
function sh(e) {
  this._context = e;
}
sh.prototype = {
  _radius: 4.5,
  pointRadius: function(e) {
    return this._radius = e, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(e, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(e, t);
        break;
      }
      default: {
        this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, Ke);
        break;
      }
    }
  },
  result: rt
};
var Fs = new Cn(), Da, fh, lh, Fr, Pr, ei = {
  point: rt,
  lineStart: function() {
    ei.point = i6;
  },
  lineEnd: function() {
    Da && ch(fh, lh), ei.point = rt;
  },
  polygonStart: function() {
    Da = !0;
  },
  polygonEnd: function() {
    Da = null;
  },
  result: function() {
    var e = +Fs;
    return Fs = new Cn(), e;
  }
};
function i6(e, t) {
  ei.point = ch, fh = Fr = e, lh = Pr = t;
}
function ch(e, t) {
  Fr -= e, Pr -= t, Fs.add(Ve(Fr * Fr + Pr * Pr)), Fr = e, Pr = t;
}
let yc, Ao, wc, _c;
class vc {
  constructor(t) {
    this._append = t == null ? uh : o6(t), this._radius = 4.5, this._ = "";
  }
  pointRadius(t) {
    return this._radius = +t, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(t, n) {
    switch (this._point) {
      case 0: {
        this._append`M${t},${n}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${t},${n}`;
        break;
      }
      default: {
        if (this._append`M${t},${n}`, this._radius !== wc || this._append !== Ao) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, wc = r, Ao = this._append, _c = this._, this._ = i;
        }
        this._ += _c;
        break;
      }
    }
  }
  result() {
    const t = this._;
    return this._ = "", t.length ? t : null;
  }
}
function uh(e) {
  let t = 1;
  this._ += e[0];
  for (const n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function o6(e) {
  const t = Math.floor(e);
  if (!(t >= 0))
    throw new RangeError(`invalid digits: ${e}`);
  if (t > 15)
    return uh;
  if (t !== yc) {
    const n = 10 ** t;
    yc = t, Ao = function(i) {
      let o = 1;
      this._ += i[0];
      for (const a = i.length; o < a; ++o)
        this._ += Math.round(arguments[o] * n) / n + i[o];
    };
  }
  return Ao;
}
function dh(e, t) {
  let n = 3, r = 4.5, i, o;
  function a(s) {
    return s && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), _n(s, i(o))), o.result();
  }
  return a.area = function(s) {
    return _n(s, i(zt)), zt.result();
  }, a.measure = function(s) {
    return _n(s, i(ei)), ei.result();
  }, a.bounds = function(s) {
    return _n(s, i(ko)), ko.result();
  }, a.centroid = function(s) {
    return _n(s, i(tt)), tt.result();
  }, a.projection = function(s) {
    return arguments.length ? (i = s == null ? (e = null, Es) : (e = s).stream, a) : e;
  }, a.context = function(s) {
    return arguments.length ? (o = s == null ? (t = null, new vc(n)) : new sh(t = s), typeof r != "function" && o.pointRadius(r), a) : t;
  }, a.pointRadius = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : (o.pointRadius(+s), +s), a) : r;
  }, a.digits = function(s) {
    if (!arguments.length)
      return n;
    if (s == null)
      n = null;
    else {
      const f = Math.floor(s);
      if (!(f >= 0))
        throw new RangeError(`invalid digits: ${s}`);
      n = f;
    }
    return t === null && (o = new vc(n)), a;
  }, a.projection(e).digits(n).context(t);
}
function Ps(e) {
  return {
    stream: Ko(e)
  };
}
function Ko(e) {
  return function(t) {
    var n = new Bs();
    for (var r in e)
      n[r] = e[r];
    return n.stream = t, n;
  };
}
function Bs() {
}
Bs.prototype = {
  constructor: Bs,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Af(e, t, n) {
  var r = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), _n(n, e.stream(ko)), t(ko.result()), r != null && e.clipExtent(r), e;
}
function Ef(e, t, n) {
  return Af(e, function(r) {
    var i = t[1][0] - t[0][0], o = t[1][1] - t[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), s = +t[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, f = +t[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    e.scale(150 * a).translate([s, f]);
  }, n);
}
function hh(e, t, n) {
  return Ef(e, [[0, 0], t], n);
}
function mh(e, t, n) {
  return Af(e, function(r) {
    var i = +t, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, s = -o * r[0][1];
    e.scale(150 * o).translate([a, s]);
  }, n);
}
function gh(e, t, n) {
  return Af(e, function(r) {
    var i = +t, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], s = (i - o * (r[1][1] + r[0][1])) / 2;
    e.scale(150 * o).translate([a, s]);
  }, n);
}
var xc = 16, a6 = fe(30 * ve);
function Mc(e, t) {
  return +t ? f6(e, t) : s6(e);
}
function s6(e) {
  return Ko({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function f6(e, t) {
  function n(r, i, o, a, s, f, l, c, u, d, h, m, p, y) {
    var b = l - r, w = c - i, v = b * b + w * w;
    if (v > 4 * t && p--) {
      var x = a + d, C = s + h, k = f + m, R = Ve(x * x + C * C + k * k), T = lt(k /= R), D = ge(ge(k) - 1) < se || ge(o - u) < se ? (o + u) / 2 : jt(C, x), F = e(D, T), N = F[0], B = F[1], V = N - r, U = B - i, L = w * V - b * U;
      (L * L / v > t || ge((b * V + w * U) / v - 0.5) > 0.3 || a * d + s * h + f * m < a6) && (n(r, i, o, a, s, f, N, B, D, x /= R, C /= R, k, p, y), y.point(N, B), n(N, B, D, x, C, k, l, c, u, d, h, m, p, y));
    }
  }
  return function(r) {
    var i, o, a, s, f, l, c, u, d, h, m, p, y = {
      point: b,
      lineStart: w,
      lineEnd: x,
      polygonStart: function() {
        r.polygonStart(), y.lineStart = C;
      },
      polygonEnd: function() {
        r.polygonEnd(), y.lineStart = w;
      }
    };
    function b(T, D) {
      T = e(T, D), r.point(T[0], T[1]);
    }
    function w() {
      u = NaN, y.point = v, r.lineStart();
    }
    function v(T, D) {
      var F = cr([T, D]), N = e(T, D);
      n(u, d, c, h, m, p, u = N[0], d = N[1], c = T, h = F[0], m = F[1], p = F[2], xc, r), r.point(u, d);
    }
    function x() {
      y.point = b, r.lineEnd();
    }
    function C() {
      w(), y.point = k, y.lineEnd = R;
    }
    function k(T, D) {
      v(i = T, D), o = u, a = d, s = h, f = m, l = p, y.point = v;
    }
    function R() {
      n(u, d, c, h, m, p, o, a, i, s, f, l, xc, r), y.lineEnd = x, x();
    }
    return y;
  };
}
var l6 = Ko({
  point: function(e, t) {
    this.stream.point(e * ve, t * ve);
  }
});
function c6(e) {
  return Ko({
    point: function(t, n) {
      var r = e(t, n);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function u6(e, t, n, r, i) {
  function o(a, s) {
    return a *= r, s *= i, [t + e * a, n - e * s];
  }
  return o.invert = function(a, s) {
    return [(a - t) / e * r, (n - s) / e * i];
  }, o;
}
function Sc(e, t, n, r, i, o) {
  if (!o)
    return u6(e, t, n, r, i);
  var a = fe(o), s = oe(o), f = a * e, l = s * e, c = a / e, u = s / e, d = (s * n - a * t) / e, h = (s * t + a * n) / e;
  function m(p, y) {
    return p *= r, y *= i, [f * p - l * y + t, n - l * p - f * y];
  }
  return m.invert = function(p, y) {
    return [r * (c * p - u * y + d), i * (h - u * p - c * y)];
  }, m;
}
function hn(e) {
  return ph(function() {
    return e;
  })();
}
function ph(e) {
  var t, n = 150, r = 480, i = 250, o = 0, a = 0, s = 0, f = 0, l = 0, c, u = 0, d = 1, h = 1, m = null, p = gc, y = null, b, w, v, x = Es, C = 0.5, k, R, T, D, F;
  function N(L) {
    return T(L[0] * ve, L[1] * ve);
  }
  function B(L) {
    return L = T.invert(L[0], L[1]), L && [L[0] * Ue, L[1] * Ue];
  }
  N.stream = function(L) {
    return D && F === L ? D : D = l6(c6(c)(p(k(x(F = L)))));
  }, N.preclip = function(L) {
    return arguments.length ? (p = L, m = void 0, U()) : p;
  }, N.postclip = function(L) {
    return arguments.length ? (x = L, y = b = w = v = null, U()) : x;
  }, N.clipAngle = function(L) {
    return arguments.length ? (p = +L ? Gw(m = L * ve) : (m = null, gc), U()) : m * Ue;
  }, N.clipExtent = function(L) {
    return arguments.length ? (x = L == null ? (y = b = w = v = null, Es) : eh(y = +L[0][0], b = +L[0][1], w = +L[1][0], v = +L[1][1]), U()) : y == null ? null : [[y, b], [w, v]];
  }, N.scale = function(L) {
    return arguments.length ? (n = +L, V()) : n;
  }, N.translate = function(L) {
    return arguments.length ? (r = +L[0], i = +L[1], V()) : [r, i];
  }, N.center = function(L) {
    return arguments.length ? (o = L[0] % 360 * ve, a = L[1] % 360 * ve, V()) : [o * Ue, a * Ue];
  }, N.rotate = function(L) {
    return arguments.length ? (s = L[0] % 360 * ve, f = L[1] % 360 * ve, l = L.length > 2 ? L[2] % 360 * ve : 0, V()) : [s * Ue, f * Ue, l * Ue];
  }, N.angle = function(L) {
    return arguments.length ? (u = L % 360 * ve, V()) : u * Ue;
  }, N.reflectX = function(L) {
    return arguments.length ? (d = L ? -1 : 1, V()) : d < 0;
  }, N.reflectY = function(L) {
    return arguments.length ? (h = L ? -1 : 1, V()) : h < 0;
  }, N.precision = function(L) {
    return arguments.length ? (k = Mc(R, C = L * L), U()) : Ve(C);
  }, N.fitExtent = function(L, Y) {
    return Ef(N, L, Y);
  }, N.fitSize = function(L, Y) {
    return hh(N, L, Y);
  }, N.fitWidth = function(L, Y) {
    return mh(N, L, Y);
  }, N.fitHeight = function(L, Y) {
    return gh(N, L, Y);
  };
  function V() {
    var L = Sc(n, 0, 0, d, h, u).apply(null, t(o, a)), Y = Sc(n, r - L[0], i - L[1], d, h, u);
    return c = Zd(s, f, l), R = Cs(t, Y), T = Cs(c, R), k = Mc(R, C), U();
  }
  function U() {
    return D = F = null, N;
  }
  return function() {
    return t = e.apply(this, arguments), N.invert = t.invert && B, V();
  };
}
function Nf(e) {
  var t = 0, n = le / 3, r = ph(e), i = r(t, n);
  return i.parallels = function(o) {
    return arguments.length ? r(t = o[0] * ve, n = o[1] * ve) : [t * Ue, n * Ue];
  }, i;
}
function d6(e) {
  var t = fe(e);
  function n(r, i) {
    return [r * t, oe(i) / t];
  }
  return n.invert = function(r, i) {
    return [r / t, lt(i * t)];
  }, n;
}
function h6(e, t) {
  var n = oe(e), r = (n + oe(t)) / 2;
  if (ge(r) < se)
    return d6(e);
  var i = 1 + n * (2 * r - n), o = Ve(i) / r;
  function a(s, f) {
    var l = Ve(i - 2 * r * oe(f)) / r;
    return [l * oe(s *= r), o - l * fe(s)];
  }
  return a.invert = function(s, f) {
    var l = o - f, c = jt(s, ge(l)) * nt(l);
    return l * r < 0 && (c -= le * nt(s) * nt(l)), [c / r, lt((i - (s * s + l * l) * r * r) / (2 * r))];
  }, a;
}
function Eo() {
  return Nf(h6).scale(155.424).center([0, 33.6442]);
}
function bh() {
  return Eo().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function m6(e) {
  var t = e.length;
  return {
    point: function(n, r) {
      for (var i = -1; ++i < t; )
        e[i].point(n, r);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function g6() {
  var e, t, n = bh(), r, i = Eo().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, a = Eo().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, f, l = { point: function(d, h) {
    f = [d, h];
  } };
  function c(d) {
    var h = d[0], m = d[1];
    return f = null, r.point(h, m), f || (o.point(h, m), f) || (s.point(h, m), f);
  }
  c.invert = function(d) {
    var h = n.scale(), m = n.translate(), p = (d[0] - m[0]) / h, y = (d[1] - m[1]) / h;
    return (y >= 0.12 && y < 0.234 && p >= -0.425 && p < -0.214 ? i : y >= 0.166 && y < 0.234 && p >= -0.214 && p < -0.115 ? a : n).invert(d);
  }, c.stream = function(d) {
    return e && t === d ? e : e = m6([n.stream(t = d), i.stream(d), a.stream(d)]);
  }, c.precision = function(d) {
    return arguments.length ? (n.precision(d), i.precision(d), a.precision(d), u()) : n.precision();
  }, c.scale = function(d) {
    return arguments.length ? (n.scale(d), i.scale(d * 0.35), a.scale(d), c.translate(n.translate())) : n.scale();
  }, c.translate = function(d) {
    if (!arguments.length)
      return n.translate();
    var h = n.scale(), m = +d[0], p = +d[1];
    return r = n.translate(d).clipExtent([[m - 0.455 * h, p - 0.238 * h], [m + 0.455 * h, p + 0.238 * h]]).stream(l), o = i.translate([m - 0.307 * h, p + 0.201 * h]).clipExtent([[m - 0.425 * h + se, p + 0.12 * h + se], [m - 0.214 * h - se, p + 0.234 * h - se]]).stream(l), s = a.translate([m - 0.205 * h, p + 0.212 * h]).clipExtent([[m - 0.214 * h + se, p + 0.166 * h + se], [m - 0.115 * h - se, p + 0.234 * h - se]]).stream(l), u();
  }, c.fitExtent = function(d, h) {
    return Ef(c, d, h);
  }, c.fitSize = function(d, h) {
    return hh(c, d, h);
  }, c.fitWidth = function(d, h) {
    return mh(c, d, h);
  }, c.fitHeight = function(d, h) {
    return gh(c, d, h);
  };
  function u() {
    return e = t = null, c;
  }
  return c.scale(1070);
}
function yh(e) {
  return function(t, n) {
    var r = fe(t), i = fe(n), o = e(r * i);
    return o === 1 / 0 ? [2, 0] : [
      o * i * oe(t),
      o * oe(n)
    ];
  };
}
function hi(e) {
  return function(t, n) {
    var r = Ve(t * t + n * n), i = e(r), o = oe(i), a = fe(i);
    return [
      jt(t * o, r * a),
      lt(r && n * o / r)
    ];
  };
}
var wh = yh(function(e) {
  return Ve(2 / (1 + e));
});
wh.invert = hi(function(e) {
  return 2 * lt(e / 2);
});
function p6() {
  return hn(wh).scale(124.75).clipAngle(180 - 1e-3);
}
var _h = yh(function(e) {
  return (e = jd(e)) && e / oe(e);
});
_h.invert = hi(function(e) {
  return e;
});
function b6() {
  return hn(_h).scale(79.4188).clipAngle(180 - 1e-3);
}
function Qo(e, t) {
  return [e, _o(Cf((Se + t) / 2))];
}
Qo.invert = function(e, t) {
  return [e, 2 * _r(Xd(t)) - Se];
};
function y6() {
  return vh(Qo).scale(961 / Ke);
}
function vh(e) {
  var t = hn(e), n = t.center, r = t.scale, i = t.translate, o = t.clipExtent, a = null, s, f, l;
  t.scale = function(u) {
    return arguments.length ? (r(u), c()) : r();
  }, t.translate = function(u) {
    return arguments.length ? (i(u), c()) : i();
  }, t.center = function(u) {
    return arguments.length ? (n(u), c()) : n();
  }, t.clipExtent = function(u) {
    return arguments.length ? (u == null ? a = s = f = l = null : (a = +u[0][0], s = +u[0][1], f = +u[1][0], l = +u[1][1]), c()) : a == null ? null : [[a, s], [f, l]];
  };
  function c() {
    var u = le * r(), d = t(Bw(t.rotate()).invert([0, 0]));
    return o(a == null ? [[d[0] - u, d[1] - u], [d[0] + u, d[1] + u]] : e === Qo ? [[Math.max(d[0] - u, a), s], [Math.min(d[0] + u, f), l]] : [[a, Math.max(d[1] - u, s)], [f, Math.min(d[1] + u, l)]]);
  }
  return c();
}
function zi(e) {
  return Cf((Se + e) / 2);
}
function w6(e, t) {
  var n = fe(e), r = e === t ? oe(e) : _o(n / fe(t)) / _o(zi(t) / zi(e)), i = n * Ea(zi(e), r) / r;
  if (!r)
    return Qo;
  function o(a, s) {
    i > 0 ? s < -Se + se && (s = -Se + se) : s > Se - se && (s = Se - se);
    var f = i / Ea(zi(s), r);
    return [f * oe(r * a), i - f * fe(r * a)];
  }
  return o.invert = function(a, s) {
    var f = i - s, l = nt(r) * Ve(a * a + f * f), c = jt(a, ge(f)) * nt(f);
    return f * r < 0 && (c -= le * nt(a) * nt(f)), [c / r, 2 * _r(Ea(i / l, 1 / r)) - Se];
  }, o;
}
function _6() {
  return Nf(w6).scale(109.5).parallels([30, 30]);
}
function No(e, t) {
  return [e, t];
}
No.invert = No;
function v6() {
  return hn(No).scale(152.63);
}
function x6(e, t) {
  var n = fe(e), r = e === t ? oe(e) : (n - fe(t)) / (t - e), i = n / r + e;
  if (ge(r) < se)
    return No;
  function o(a, s) {
    var f = i - s, l = r * a;
    return [f * oe(l), i - f * fe(l)];
  }
  return o.invert = function(a, s) {
    var f = i - s, l = jt(a, ge(f)) * nt(f);
    return f * r < 0 && (l -= le * nt(a) * nt(f)), [l / r, i - nt(r) * Ve(a * a + f * f)];
  }, o;
}
function M6() {
  return Nf(x6).scale(131.154).center([0, 13.9389]);
}
var qr = 1.340264, Wr = -0.081106, Yr = 893e-6, Vr = 3796e-6, Ro = Ve(3) / 2, S6 = 12;
function xh(e, t) {
  var n = lt(Ro * oe(t)), r = n * n, i = r * r * r;
  return [
    e * fe(n) / (Ro * (qr + 3 * Wr * r + i * (7 * Yr + 9 * Vr * r))),
    n * (qr + Wr * r + i * (Yr + Vr * r))
  ];
}
xh.invert = function(e, t) {
  for (var n = t, r = n * n, i = r * r * r, o = 0, a, s, f; o < S6 && (s = n * (qr + Wr * r + i * (Yr + Vr * r)) - t, f = qr + 3 * Wr * r + i * (7 * Yr + 9 * Vr * r), n -= a = s / f, r = n * n, i = r * r * r, !(ge(a) < Gd)); ++o)
    ;
  return [
    Ro * e * (qr + 3 * Wr * r + i * (7 * Yr + 9 * Vr * r)) / fe(n),
    lt(oe(n) / Ro)
  ];
};
function k6() {
  return hn(xh).scale(177.158);
}
function Mh(e, t) {
  var n = fe(t), r = fe(e) * n;
  return [n * oe(e) / r, oe(t) / r];
}
Mh.invert = hi(_r);
function T6() {
  return hn(Mh).scale(144.049).clipAngle(60);
}
function Sh(e, t) {
  return [fe(t) * oe(e), oe(t)];
}
Sh.invert = hi(lt);
function C6() {
  return hn(Sh).scale(249.5).clipAngle(90 + se);
}
function kh(e, t) {
  var n = fe(t), r = 1 + fe(e) * n;
  return [n * oe(e) / r, oe(t) / r];
}
kh.invert = hi(function(e) {
  return 2 * _r(e);
});
function A6() {
  return hn(kh).scale(250).clipAngle(142);
}
function Th(e, t) {
  return [_o(Cf((Se + t) / 2)), -e];
}
Th.invert = function(e, t) {
  return [-t, 2 * _r(Xd(e)) - Se];
};
function E6() {
  var e = vh(Th), t = e.center, n = e.rotate;
  return e.center = function(r) {
    return arguments.length ? t([-r[1], r[0]]) : (r = t(), [r[1], -r[0]]);
  }, e.rotate = function(r) {
    return arguments.length ? n([r[0], r[1], r.length > 2 ? r[2] + 90 : 90]) : (r = n(), [r[0], r[1], r[2] - 90]);
  }, n([0, 0, 90]).scale(159.155);
}
function It(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Jo(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Us = Symbol("implicit");
function Rf() {
  var e = new An(), t = [], n = [], r = Us;
  function i(o) {
    let a = e.get(o);
    if (a === void 0) {
      if (r !== Us)
        return r;
      e.set(o, a = t.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new An();
    for (const a of o)
      e.has(a) || e.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Rf(t, n).unknown(r);
  }, It.apply(i, arguments), i;
}
function ea() {
  var e = Rf().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, o, a, s = !1, f = 0, l = 0, c = 0.5;
  delete e.unknown;
  function u() {
    var d = t().length, h = i < r, m = h ? i : r, p = h ? r : i;
    o = (p - m) / Math.max(1, d - f + l * 2), s && (o = Math.floor(o)), m += (p - m - o * (d - f)) * c, a = o * (1 - f), s && (m = Math.round(m), a = Math.round(a));
    var y = cs(d).map(function(b) {
      return m + o * b;
    });
    return n(h ? y.reverse() : y);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), u()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([r, i] = d, r = +r, i = +i, u()) : [r, i];
  }, e.rangeRound = function(d) {
    return [r, i] = d, r = +r, i = +i, s = !0, u();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return o;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, u()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (f = Math.min(1, l = +d), u()) : f;
  }, e.paddingInner = function(d) {
    return arguments.length ? (f = Math.min(1, d), u()) : f;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (l = +d, u()) : l;
  }, e.align = function(d) {
    return arguments.length ? (c = Math.max(0, Math.min(1, d)), u()) : c;
  }, e.copy = function() {
    return ea(t(), [r, i]).round(s).paddingInner(f).paddingOuter(l).align(c);
  }, It.apply(u(), arguments);
}
function Ch(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Ch(t());
  }, e;
}
function N6() {
  return Ch(ea.apply(null, arguments).paddingInner(1));
}
function R6(e) {
  return function() {
    return e;
  };
}
function Hs(e) {
  return +e;
}
var kc = [0, 1];
function ot(e) {
  return e;
}
function zs(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : R6(isNaN(t) ? NaN : 0.5);
}
function L6(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function D6(e, t, n) {
  var r = e[0], i = e[1], o = t[0], a = t[1];
  return i < r ? (r = zs(i, r), o = n(a, o)) : (r = zs(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function I6(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < r; )
    i[a] = zs(e[a], e[a + 1]), o[a] = n(t[a], t[a + 1]);
  return function(s) {
    var f = uf(e, s, 1, r) - 1;
    return o[f](i[f](s));
  };
}
function mi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ta() {
  var e = kc, t = kc, n = di, r, i, o, a = ot, s, f, l;
  function c() {
    var d = Math.min(e.length, t.length);
    return a !== ot && (a = L6(e[0], e[d - 1])), s = d > 2 ? I6 : D6, f = l = null, u;
  }
  function u(d) {
    return d == null || isNaN(d = +d) ? o : (f || (f = s(e.map(r), t, n)))(r(a(d)));
  }
  return u.invert = function(d) {
    return a(i((l || (l = s(t, e.map(r), $e)))(d)));
  }, u.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Hs), c()) : e.slice();
  }, u.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, u.rangeRound = function(d) {
    return t = Array.from(d), n = vf, c();
  }, u.clamp = function(d) {
    return arguments.length ? (a = d ? !0 : ot, c()) : a !== ot;
  }, u.interpolate = function(d) {
    return arguments.length ? (n = d, c()) : n;
  }, u.unknown = function(d) {
    return arguments.length ? (o = d, u) : o;
  }, function(d, h) {
    return r = d, i = h, c();
  };
}
function Ah() {
  return ta()(ot, ot);
}
function O6(e, t, n, r) {
  var i = fs(e, t, n), o;
  switch (r = Qr(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(o = Fw(i, a)) && (r.precision = o), Vd(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Pw(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = $w(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return wr(r);
}
function gi(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return lo(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var i = t();
    return O6(i[0], i[i.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), i = 0, o = r.length - 1, a = r[i], s = r[o], f, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = ss(a, s, n), l === f)
        return r[i] = a, r[o] = s, t(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      f = l;
    }
    return e;
  }, e;
}
function Lf() {
  var e = Ah();
  return e.copy = function() {
    return mi(e, Lf());
  }, It.apply(e, arguments), gi(e);
}
function Eh(e) {
  var t;
  function n(r) {
    return r == null || isNaN(r = +r) ? t : r;
  }
  return n.invert = n, n.domain = n.range = function(r) {
    return arguments.length ? (e = Array.from(r, Hs), n) : e.slice();
  }, n.unknown = function(r) {
    return arguments.length ? (t = r, n) : t;
  }, n.copy = function() {
    return Eh(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Hs) : [0, 1], gi(n);
}
function Nh(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, i = e[n], o = e[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), e[n] = t.floor(i), e[r] = t.ceil(o), e;
}
function Tc(e) {
  return Math.log(e);
}
function Cc(e) {
  return Math.exp(e);
}
function $6(e) {
  return -Math.log(-e);
}
function F6(e) {
  return -Math.exp(-e);
}
function P6(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function B6(e) {
  return e === 10 ? P6 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function U6(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ac(e) {
  return (t, n) => -e(-t, n);
}
function Rh(e) {
  const t = e(Tc, Cc), n = t.domain;
  let r = 10, i, o;
  function a() {
    return i = U6(r), o = B6(r), n()[0] < 0 ? (i = Ac(i), o = Ac(o), e($6, F6)) : e(Tc, Cc), t;
  }
  return t.base = function(s) {
    return arguments.length ? (r = +s, a()) : r;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), a()) : n();
  }, t.ticks = (s) => {
    const f = n();
    let l = f[0], c = f[f.length - 1];
    const u = c < l;
    u && ([l, c] = [c, l]);
    let d = i(l), h = i(c), m, p;
    const y = s == null ? 10 : +s;
    let b = [];
    if (!(r % 1) && h - d < y) {
      if (d = Math.floor(d), h = Math.ceil(h), l > 0) {
        for (; d <= h; ++d)
          for (m = 1; m < r; ++m)
            if (p = d < 0 ? m / o(-d) : m * o(d), !(p < l)) {
              if (p > c)
                break;
              b.push(p);
            }
      } else
        for (; d <= h; ++d)
          for (m = r - 1; m >= 1; --m)
            if (p = d > 0 ? m / o(-d) : m * o(d), !(p < l)) {
              if (p > c)
                break;
              b.push(p);
            }
      b.length * 2 < y && (b = lo(l, c, y));
    } else
      b = lo(d, h, Math.min(h - d, y)).map(o);
    return u ? b.reverse() : b;
  }, t.tickFormat = (s, f) => {
    if (s == null && (s = 10), f == null && (f = r === 10 ? "s" : ","), typeof f != "function" && (!(r % 1) && (f = Qr(f)).precision == null && (f.trim = !0), f = wr(f)), s === 1 / 0)
      return f;
    const l = Math.max(1, r * s / t.ticks().length);
    return (c) => {
      let u = c / o(Math.round(i(c)));
      return u * r < r - 0.5 && (u *= r), u <= l ? f(c) : "";
    };
  }, t.nice = () => n(Nh(n(), {
    floor: (s) => o(Math.floor(i(s))),
    ceil: (s) => o(Math.ceil(i(s)))
  })), t;
}
function Lh() {
  const e = Rh(ta()).domain([1, 10]);
  return e.copy = () => mi(e, Lh()).base(e.base()), It.apply(e, arguments), e;
}
function Ec(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Nc(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Dh(e) {
  var t = 1, n = e(Ec(t), Nc(t));
  return n.constant = function(r) {
    return arguments.length ? e(Ec(t = +r), Nc(t)) : t;
  }, gi(n);
}
function Ih() {
  var e = Dh(ta());
  return e.copy = function() {
    return mi(e, Ih()).constant(e.constant());
  }, It.apply(e, arguments);
}
function Rc(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function H6(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function z6(e) {
  return e < 0 ? -e * e : e * e;
}
function Oh(e) {
  var t = e(ot, ot), n = 1;
  function r() {
    return n === 1 ? e(ot, ot) : n === 0.5 ? e(H6, z6) : e(Rc(n), Rc(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, r()) : n;
  }, gi(t);
}
function $h() {
  var e = Oh(ta());
  return e.copy = function() {
    return mi(e, $h()).exponent(e.exponent());
  }, It.apply(e, arguments), e;
}
function Fh() {
  var e = [], t = [], n = [], r;
  function i() {
    var a = 0, s = Math.max(1, t.length);
    for (n = new Array(s - 1); ++a < s; )
      n[a - 1] = Op(e, a / s);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? r : t[uf(n, a)];
  }
  return o.invertExtent = function(a) {
    var s = t.indexOf(a);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? n[s - 1] : e[0],
      s < n.length ? n[s] : e[e.length - 1]
    ];
  }, o.domain = function(a) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let s of a)
      s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(We), i();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (r = a, o) : r;
  }, o.quantiles = function() {
    return n.slice();
  }, o.copy = function() {
    return Fh().domain(e).range(t).unknown(r);
  }, It.apply(o, arguments);
}
function Ph() {
  var e = [0.5], t = [0, 1], n, r = 1;
  function i(o) {
    return o != null && o <= o ? t[uf(e, o, 0, r)] : n;
  }
  return i.domain = function(o) {
    return arguments.length ? (e = Array.from(o), r = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), r = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(o) {
    var a = t.indexOf(o);
    return [e[a - 1], e[a]];
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return Ph().domain(e).range(t).unknown(n);
  }, It.apply(i, arguments);
}
const Ia = /* @__PURE__ */ new Date(), Oa = /* @__PURE__ */ new Date();
function Te(e, t, n, r) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), i.round = (o) => {
    const a = i(o), s = i.ceil(o);
    return o - a < s - o ? a : s;
  }, i.offset = (o, a) => (t(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, s) => {
    const f = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < a) || !(s > 0))
      return f;
    let l;
    do
      f.push(l = /* @__PURE__ */ new Date(+o)), t(o, s), e(o);
    while (l < o && o < a);
    return f;
  }, i.filter = (o) => Te((a) => {
    if (a >= a)
      for (; e(a), !o(a); )
        a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0)
        for (; ++s <= 0; )
          for (; t(a, -1), !o(a); )
            ;
      else
        for (; --s >= 0; )
          for (; t(a, 1), !o(a); )
            ;
  }), n && (i.count = (o, a) => (Ia.setTime(+o), Oa.setTime(+a), e(Ia), e(Oa), Math.floor(n(Ia, Oa))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const Lo = Te(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Lo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Te((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Lo);
Lo.range;
const Wt = 1e3, at = Wt * 60, Yt = at * 60, Zt = Yt * 24, Df = Zt * 7, Lc = Zt * 30, $a = Zt * 365, ht = Te((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Wt);
}, (e, t) => (t - e) / Wt, (e) => e.getUTCSeconds());
ht.range;
const pi = Te((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Wt);
}, (e, t) => {
  e.setTime(+e + t * at);
}, (e, t) => (t - e) / at, (e) => e.getMinutes());
pi.range;
const bi = Te((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * at);
}, (e, t) => (t - e) / at, (e) => e.getUTCMinutes());
bi.range;
const yi = Te((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Wt - e.getMinutes() * at);
}, (e, t) => {
  e.setTime(+e + t * Yt);
}, (e, t) => (t - e) / Yt, (e) => e.getHours());
yi.range;
const wi = Te((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Yt);
}, (e, t) => (t - e) / Yt, (e) => e.getUTCHours());
wi.range;
const Pn = Te(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * at) / Zt,
  (e) => e.getDate() - 1
);
Pn.range;
const na = Te((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCDate() - 1);
na.range;
const ra = Te((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Zt, (e) => Math.floor(e / Zt));
ra.range;
function Bn(e) {
  return Te((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * at) / Df);
}
const dr = Bn(0), ti = Bn(1), Bh = Bn(2), Uh = Bn(3), In = Bn(4), Hh = Bn(5), zh = Bn(6);
dr.range;
ti.range;
Bh.range;
Uh.range;
In.range;
Hh.range;
zh.range;
function Un(e) {
  return Te((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Df);
}
const hr = Un(0), ni = Un(1), qh = Un(2), Wh = Un(3), On = Un(4), Yh = Un(5), Vh = Un(6);
hr.range;
ni.range;
qh.range;
Wh.range;
On.range;
Yh.range;
Vh.range;
const _i = Te((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
_i.range;
const vi = Te((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vi.range;
const bt = Te((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
bt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Te((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
bt.range;
const yt = Te((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
yt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Te((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
yt.range;
function Gh(e, t, n, r, i, o) {
  const a = [
    [ht, 1, Wt],
    [ht, 5, 5 * Wt],
    [ht, 15, 15 * Wt],
    [ht, 30, 30 * Wt],
    [o, 1, at],
    [o, 5, 5 * at],
    [o, 15, 15 * at],
    [o, 30, 30 * at],
    [i, 1, Yt],
    [i, 3, 3 * Yt],
    [i, 6, 6 * Yt],
    [i, 12, 12 * Yt],
    [r, 1, Zt],
    [r, 2, 2 * Zt],
    [n, 1, Df],
    [t, 1, Lc],
    [t, 3, 3 * Lc],
    [e, 1, $a]
  ];
  function s(l, c, u) {
    const d = c < l;
    d && ([l, c] = [c, l]);
    const h = u && typeof u.range == "function" ? u : f(l, c, u), m = h ? h.range(l, +c + 1) : [];
    return d ? m.reverse() : m;
  }
  function f(l, c, u) {
    const d = Math.abs(c - l) / u, h = zo(([, , y]) => y).right(a, d);
    if (h === a.length)
      return e.every(fs(l / $a, c / $a, u));
    if (h === 0)
      return Lo.every(Math.max(fs(l, c, u), 1));
    const [m, p] = a[d / a[h - 1][2] < a[h][2] / d ? h - 1 : h];
    return m.every(p);
  }
  return [s, f];
}
const [q6, W6] = Gh(yt, vi, hr, ra, wi, bi), [Y6, V6] = Gh(bt, _i, dr, Pn, yi, pi);
function Fa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Pa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Cr(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function G6(e) {
  var t = e.dateTime, n = e.date, r = e.time, i = e.periods, o = e.days, a = e.shortDays, s = e.months, f = e.shortMonths, l = Ar(i), c = Er(i), u = Ar(o), d = Er(o), h = Ar(a), m = Er(a), p = Ar(s), y = Er(s), b = Ar(f), w = Er(f), v = {
    a: q,
    A: g,
    b: M,
    B: _,
    c: null,
    d: Pc,
    e: Pc,
    f: p5,
    g: T5,
    G: A5,
    H: h5,
    I: m5,
    j: g5,
    L: Xh,
    m: b5,
    M: y5,
    p: S,
    q: A,
    Q: Hc,
    s: zc,
    S: w5,
    u: _5,
    U: v5,
    V: x5,
    w: M5,
    W: S5,
    x: null,
    X: null,
    y: k5,
    Y: C5,
    Z: E5,
    "%": Uc
  }, x = {
    a: E,
    A: H,
    b: P,
    B: W,
    c: null,
    d: Bc,
    e: Bc,
    f: D5,
    g: q5,
    G: Y5,
    H: N5,
    I: R5,
    j: L5,
    L: Zh,
    m: I5,
    M: O5,
    p: z,
    q: X,
    Q: Hc,
    s: zc,
    S: $5,
    u: F5,
    U: P5,
    V: B5,
    w: U5,
    W: H5,
    x: null,
    X: null,
    y: z5,
    Y: W5,
    Z: V5,
    "%": Uc
  }, C = {
    a: F,
    A: N,
    b: B,
    B: V,
    c: U,
    d: $c,
    e: $c,
    f: l5,
    g: Oc,
    G: Ic,
    H: Fc,
    I: Fc,
    j: o5,
    L: f5,
    m: i5,
    M: a5,
    p: D,
    q: r5,
    Q: u5,
    s: d5,
    S: s5,
    u: Q6,
    U: J6,
    V: e5,
    w: K6,
    W: t5,
    x: L,
    X: Y,
    y: Oc,
    Y: Ic,
    Z: n5,
    "%": c5
  };
  v.x = k(n, v), v.X = k(r, v), v.c = k(t, v), x.x = k(n, x), x.X = k(r, x), x.c = k(t, x);
  function k(I, G) {
    return function(Z) {
      var $ = [], ue = -1, ne = 0, me = I.length, he, we, xt;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++ue < me; )
        I.charCodeAt(ue) === 37 && ($.push(I.slice(ne, ue)), (we = Dc[he = I.charAt(++ue)]) != null ? he = I.charAt(++ue) : we = he === "e" ? " " : "0", (xt = G[he]) && (he = xt(Z, we)), $.push(he), ne = ue + 1);
      return $.push(I.slice(ne, ue)), $.join("");
    };
  }
  function R(I, G) {
    return function(Z) {
      var $ = Cr(1900, void 0, 1), ue = T($, I, Z += "", 0), ne, me;
      if (ue != Z.length)
        return null;
      if ("Q" in $)
        return new Date($.Q);
      if ("s" in $)
        return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (G && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53)
          return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (ne = Pa(Cr($.y, 0, 1)), me = ne.getUTCDay(), ne = me > 4 || me === 0 ? ni.ceil(ne) : ni(ne), ne = na.offset(ne, ($.V - 1) * 7), $.y = ne.getUTCFullYear(), $.m = ne.getUTCMonth(), $.d = ne.getUTCDate() + ($.w + 6) % 7) : (ne = Fa(Cr($.y, 0, 1)), me = ne.getDay(), ne = me > 4 || me === 0 ? ti.ceil(ne) : ti(ne), ne = Pn.offset(ne, ($.V - 1) * 7), $.y = ne.getFullYear(), $.m = ne.getMonth(), $.d = ne.getDate() + ($.w + 6) % 7);
      } else
        ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), me = "Z" in $ ? Pa(Cr($.y, 0, 1)).getUTCDay() : Fa(Cr($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (me + 5) % 7 : $.w + $.U * 7 - (me + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, Pa($)) : Fa($);
    };
  }
  function T(I, G, Z, $) {
    for (var ue = 0, ne = G.length, me = Z.length, he, we; ue < ne; ) {
      if ($ >= me)
        return -1;
      if (he = G.charCodeAt(ue++), he === 37) {
        if (he = G.charAt(ue++), we = C[he in Dc ? G.charAt(ue++) : he], !we || ($ = we(I, Z, $)) < 0)
          return -1;
      } else if (he != Z.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function D(I, G, Z) {
    var $ = l.exec(G.slice(Z));
    return $ ? (I.p = c.get($[0].toLowerCase()), Z + $[0].length) : -1;
  }
  function F(I, G, Z) {
    var $ = h.exec(G.slice(Z));
    return $ ? (I.w = m.get($[0].toLowerCase()), Z + $[0].length) : -1;
  }
  function N(I, G, Z) {
    var $ = u.exec(G.slice(Z));
    return $ ? (I.w = d.get($[0].toLowerCase()), Z + $[0].length) : -1;
  }
  function B(I, G, Z) {
    var $ = b.exec(G.slice(Z));
    return $ ? (I.m = w.get($[0].toLowerCase()), Z + $[0].length) : -1;
  }
  function V(I, G, Z) {
    var $ = p.exec(G.slice(Z));
    return $ ? (I.m = y.get($[0].toLowerCase()), Z + $[0].length) : -1;
  }
  function U(I, G, Z) {
    return T(I, t, G, Z);
  }
  function L(I, G, Z) {
    return T(I, n, G, Z);
  }
  function Y(I, G, Z) {
    return T(I, r, G, Z);
  }
  function q(I) {
    return a[I.getDay()];
  }
  function g(I) {
    return o[I.getDay()];
  }
  function M(I) {
    return f[I.getMonth()];
  }
  function _(I) {
    return s[I.getMonth()];
  }
  function S(I) {
    return i[+(I.getHours() >= 12)];
  }
  function A(I) {
    return 1 + ~~(I.getMonth() / 3);
  }
  function E(I) {
    return a[I.getUTCDay()];
  }
  function H(I) {
    return o[I.getUTCDay()];
  }
  function P(I) {
    return f[I.getUTCMonth()];
  }
  function W(I) {
    return s[I.getUTCMonth()];
  }
  function z(I) {
    return i[+(I.getUTCHours() >= 12)];
  }
  function X(I) {
    return 1 + ~~(I.getUTCMonth() / 3);
  }
  return {
    format: function(I) {
      var G = k(I += "", v);
      return G.toString = function() {
        return I;
      }, G;
    },
    parse: function(I) {
      var G = R(I += "", !1);
      return G.toString = function() {
        return I;
      }, G;
    },
    utcFormat: function(I) {
      var G = k(I += "", x);
      return G.toString = function() {
        return I;
      }, G;
    },
    utcParse: function(I) {
      var G = R(I += "", !0);
      return G.toString = function() {
        return I;
      }, G;
    }
  };
}
var Dc = { "-": "", _: " ", 0: "0" }, Le = /^\s*\d+/, X6 = /^%/, j6 = /[\\^$*+?|[\]().{}]/g;
function de(e, t, n) {
  var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function Z6(e) {
  return e.replace(j6, "\\$&");
}
function Ar(e) {
  return new RegExp("^(?:" + e.map(Z6).join("|") + ")", "i");
}
function Er(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function K6(e, t, n) {
  var r = Le.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Q6(e, t, n) {
  var r = Le.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function J6(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function e5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function t5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Ic(e, t, n) {
  var r = Le.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Oc(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function n5(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function r5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function i5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function $c(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function o5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Fc(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function a5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function s5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function f5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function l5(e, t, n) {
  var r = Le.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function c5(e, t, n) {
  var r = X6.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function u5(e, t, n) {
  var r = Le.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function d5(e, t, n) {
  var r = Le.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Pc(e, t) {
  return de(e.getDate(), t, 2);
}
function h5(e, t) {
  return de(e.getHours(), t, 2);
}
function m5(e, t) {
  return de(e.getHours() % 12 || 12, t, 2);
}
function g5(e, t) {
  return de(1 + Pn.count(bt(e), e), t, 3);
}
function Xh(e, t) {
  return de(e.getMilliseconds(), t, 3);
}
function p5(e, t) {
  return Xh(e, t) + "000";
}
function b5(e, t) {
  return de(e.getMonth() + 1, t, 2);
}
function y5(e, t) {
  return de(e.getMinutes(), t, 2);
}
function w5(e, t) {
  return de(e.getSeconds(), t, 2);
}
function _5(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function v5(e, t) {
  return de(dr.count(bt(e) - 1, e), t, 2);
}
function jh(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? In(e) : In.ceil(e);
}
function x5(e, t) {
  return e = jh(e), de(In.count(bt(e), e) + (bt(e).getDay() === 4), t, 2);
}
function M5(e) {
  return e.getDay();
}
function S5(e, t) {
  return de(ti.count(bt(e) - 1, e), t, 2);
}
function k5(e, t) {
  return de(e.getFullYear() % 100, t, 2);
}
function T5(e, t) {
  return e = jh(e), de(e.getFullYear() % 100, t, 2);
}
function C5(e, t) {
  return de(e.getFullYear() % 1e4, t, 4);
}
function A5(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? In(e) : In.ceil(e), de(e.getFullYear() % 1e4, t, 4);
}
function E5(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + de(t / 60 | 0, "0", 2) + de(t % 60, "0", 2);
}
function Bc(e, t) {
  return de(e.getUTCDate(), t, 2);
}
function N5(e, t) {
  return de(e.getUTCHours(), t, 2);
}
function R5(e, t) {
  return de(e.getUTCHours() % 12 || 12, t, 2);
}
function L5(e, t) {
  return de(1 + na.count(yt(e), e), t, 3);
}
function Zh(e, t) {
  return de(e.getUTCMilliseconds(), t, 3);
}
function D5(e, t) {
  return Zh(e, t) + "000";
}
function I5(e, t) {
  return de(e.getUTCMonth() + 1, t, 2);
}
function O5(e, t) {
  return de(e.getUTCMinutes(), t, 2);
}
function $5(e, t) {
  return de(e.getUTCSeconds(), t, 2);
}
function F5(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function P5(e, t) {
  return de(hr.count(yt(e) - 1, e), t, 2);
}
function Kh(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? On(e) : On.ceil(e);
}
function B5(e, t) {
  return e = Kh(e), de(On.count(yt(e), e) + (yt(e).getUTCDay() === 4), t, 2);
}
function U5(e) {
  return e.getUTCDay();
}
function H5(e, t) {
  return de(ni.count(yt(e) - 1, e), t, 2);
}
function z5(e, t) {
  return de(e.getUTCFullYear() % 100, t, 2);
}
function q5(e, t) {
  return e = Kh(e), de(e.getUTCFullYear() % 100, t, 2);
}
function W5(e, t) {
  return de(e.getUTCFullYear() % 1e4, t, 4);
}
function Y5(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? On(e) : On.ceil(e), de(e.getUTCFullYear() % 1e4, t, 4);
}
function V5() {
  return "+0000";
}
function Uc() {
  return "%";
}
function Hc(e) {
  return +e;
}
function zc(e) {
  return Math.floor(+e / 1e3);
}
var Vn, If, xi;
G5({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function G5(e) {
  return Vn = G6(e), If = Vn.format, Vn.parse, xi = Vn.utcFormat, Vn.utcParse, Vn;
}
function X5(e) {
  return new Date(e);
}
function j5(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Of(e, t, n, r, i, o, a, s, f, l) {
  var c = Ah(), u = c.invert, d = c.domain, h = l(".%L"), m = l(":%S"), p = l("%I:%M"), y = l("%I %p"), b = l("%a %d"), w = l("%b %d"), v = l("%B"), x = l("%Y");
  function C(k) {
    return (f(k) < k ? h : s(k) < k ? m : a(k) < k ? p : o(k) < k ? y : r(k) < k ? i(k) < k ? b : w : n(k) < k ? v : x)(k);
  }
  return c.invert = function(k) {
    return new Date(u(k));
  }, c.domain = function(k) {
    return arguments.length ? d(Array.from(k, j5)) : d().map(X5);
  }, c.ticks = function(k) {
    var R = d();
    return e(R[0], R[R.length - 1], k ?? 10);
  }, c.tickFormat = function(k, R) {
    return R == null ? C : l(R);
  }, c.nice = function(k) {
    var R = d();
    return (!k || typeof k.range != "function") && (k = t(R[0], R[R.length - 1], k ?? 10)), k ? d(Nh(R, k)) : c;
  }, c.copy = function() {
    return mi(c, Of(e, t, n, r, i, o, a, s, f, l));
  }, c;
}
function Z5() {
  return It.apply(Of(Y6, V6, bt, _i, dr, Pn, yi, pi, ht, If).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function K5() {
  return It.apply(Of(q6, W6, yt, vi, hr, na, wi, bi, ht, xi).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ia(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function oa() {
  var e = 0, t = 0.5, n = 1, r = 1, i, o, a, s, f, l = ot, c, u = !1, d;
  function h(p) {
    return isNaN(p = +p) ? d : (p = 0.5 + ((p = +c(p)) - o) * (r * p < r * o ? s : f), l(u ? Math.max(0, Math.min(1, p)) : p));
  }
  h.domain = function(p) {
    return arguments.length ? ([e, t, n] = p, i = c(e = +e), o = c(t = +t), a = c(n = +n), s = i === o ? 0 : 0.5 / (o - i), f = o === a ? 0 : 0.5 / (a - o), r = o < i ? -1 : 1, h) : [e, t, n];
  }, h.clamp = function(p) {
    return arguments.length ? (u = !!p, h) : u;
  }, h.interpolator = function(p) {
    return arguments.length ? (l = p, h) : l;
  };
  function m(p) {
    return function(y) {
      var b, w, v;
      return arguments.length ? ([b, w, v] = y, l = Xo(p, [b, w, v]), h) : [l(0), l(0.5), l(1)];
    };
  }
  return h.range = m(di), h.rangeRound = m(vf), h.unknown = function(p) {
    return arguments.length ? (d = p, h) : d;
  }, function(p) {
    return c = p, i = p(e), o = p(t), a = p(n), s = i === o ? 0 : 0.5 / (o - i), f = o === a ? 0 : 0.5 / (a - o), r = o < i ? -1 : 1, h;
  };
}
function Qh() {
  var e = gi(oa()(ot));
  return e.copy = function() {
    return ia(e, Qh());
  }, Jo.apply(e, arguments);
}
function Jh() {
  var e = Rh(oa()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ia(e, Jh()).base(e.base());
  }, Jo.apply(e, arguments);
}
function e0() {
  var e = Dh(oa());
  return e.copy = function() {
    return ia(e, e0()).constant(e.constant());
  }, Jo.apply(e, arguments);
}
function t0() {
  var e = Oh(oa());
  return e.copy = function() {
    return ia(e, t0()).exponent(e.exponent());
  }, Jo.apply(e, arguments);
}
function ae(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; )
    n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const Q5 = ae("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), J5 = ae("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), e_ = ae("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), t_ = ae("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), n_ = ae("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), r_ = ae("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), i_ = ae("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), o_ = ae("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), a_ = ae("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), s_ = ae("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), f_ = ae("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), be = (e) => Z2(e[e.length - 1]);
var n0 = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(ae);
const r0 = be(n0);
var i0 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(ae);
const o0 = be(i0);
var a0 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(ae);
const s0 = be(a0);
var f0 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(ae);
const l0 = be(f0);
var qs = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(ae);
const Do = be(qs);
var c0 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(ae);
const u0 = be(c0);
var Ws = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(ae);
const Io = be(Ws);
var d0 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(ae);
const h0 = be(d0);
var m0 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(ae);
const g0 = be(m0);
var p0 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(ae);
const b0 = be(p0);
var y0 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(ae);
const w0 = be(y0);
var _0 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(ae);
const v0 = be(_0);
var x0 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(ae);
const M0 = be(x0);
var S0 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(ae);
const k0 = be(S0);
var T0 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(ae);
const C0 = be(T0);
var A0 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(ae);
const E0 = be(A0);
var N0 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(ae);
const R0 = be(N0);
var L0 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(ae);
const D0 = be(L0);
var I0 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(ae);
const O0 = be(I0);
var $0 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(ae);
const F0 = be($0);
var P0 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(ae);
const B0 = be(P0);
var U0 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(ae);
const H0 = be(U0);
var z0 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(ae);
const q0 = be(z0);
var W0 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(ae);
const Y0 = be(W0);
var V0 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(ae);
const G0 = be(V0);
var X0 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(ae);
const j0 = be(X0);
var Z0 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(ae);
const K0 = be(Z0);
function Q0(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
const J0 = xf(Rt(300, 0.5, 0), Rt(-240, 0.5, 1));
var em = xf(Rt(-100, 0.75, 0.35), Rt(80, 1.5, 0.8)), tm = xf(Rt(260, 0.75, 0.35), Rt(80, 1.5, 0.8)), qi = Rt();
function nm(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var t = Math.abs(e - 0.5);
  return qi.h = 360 * e - 100, qi.s = 1.5 - 1.5 * t, qi.l = 0.8 - 0.9 * t, qi + "";
}
var Wi = fn(), l_ = Math.PI / 3, c_ = Math.PI * 2 / 3;
function rm(e) {
  var t;
  return e = (0.5 - e) * Math.PI, Wi.r = 255 * (t = Math.sin(e)) * t, Wi.g = 255 * (t = Math.sin(e + l_)) * t, Wi.b = 255 * (t = Math.sin(e + c_)) * t, Wi + "";
}
function im(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
function aa(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const om = aa(ae("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var am = aa(ae("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), sm = aa(ae("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), fm = aa(ae("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
const lm = Math.cos, $f = Math.min, Oo = Math.sin, Ce = Math.sqrt, $o = Math.PI, sa = 2 * $o, u_ = Ce(3), cm = {
  draw(e, t) {
    const n = Ce(t + $f(t / 28, 0.75)) * 0.59436, r = n / 2, i = r * u_;
    e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-i, -r), e.lineTo(i, r), e.moveTo(-i, r), e.lineTo(i, -r);
  }
}, Ff = {
  draw(e, t) {
    const n = Ce(t / $o);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, sa);
  }
}, um = {
  draw(e, t) {
    const n = Ce(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, dm = Ce(1 / 3), d_ = dm * 2, hm = {
  draw(e, t) {
    const n = Ce(t / d_), r = n * dm;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, mm = {
  draw(e, t) {
    const n = Ce(t) * 0.62625;
    e.moveTo(0, -n), e.lineTo(n, 0), e.lineTo(0, n), e.lineTo(-n, 0), e.closePath();
  }
}, gm = {
  draw(e, t) {
    const n = Ce(t - $f(t / 7, 2)) * 0.87559;
    e.moveTo(-n, 0), e.lineTo(n, 0), e.moveTo(0, n), e.lineTo(0, -n);
  }
}, pm = {
  draw(e, t) {
    const n = Ce(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, bm = {
  draw(e, t) {
    const n = Ce(t) * 0.4431;
    e.moveTo(n, n), e.lineTo(n, -n), e.lineTo(-n, -n), e.lineTo(-n, n), e.closePath();
  }
}, h_ = 0.8908130915292852, ym = Oo($o / 10) / Oo(7 * $o / 10), m_ = Oo(sa / 10) * ym, g_ = -lm(sa / 10) * ym, wm = {
  draw(e, t) {
    const n = Ce(t * h_), r = m_ * n, i = g_ * n;
    e.moveTo(0, -n), e.lineTo(r, i);
    for (let o = 1; o < 5; ++o) {
      const a = sa * o / 5, s = lm(a), f = Oo(a);
      e.lineTo(f * n, -s * n), e.lineTo(s * r - f * i, f * r + s * i);
    }
    e.closePath();
  }
}, Ba = Ce(3), _m = {
  draw(e, t) {
    const n = -Ce(t / (Ba * 3));
    e.moveTo(0, n * 2), e.lineTo(-Ba * n, -n), e.lineTo(Ba * n, -n), e.closePath();
  }
}, p_ = Ce(3), vm = {
  draw(e, t) {
    const n = Ce(t) * 0.6824, r = n / 2, i = n * p_ / 2;
    e.moveTo(0, -n), e.lineTo(i, r), e.lineTo(-i, r), e.closePath();
  }
}, Je = -0.5, et = Ce(3) / 2, Ys = 1 / Ce(12), b_ = (Ys / 2 + 1) * 3, xm = {
  draw(e, t) {
    const n = Ce(t / b_), r = n / 2, i = n * Ys, o = r, a = n * Ys + n, s = -o, f = a;
    e.moveTo(r, i), e.lineTo(o, a), e.lineTo(s, f), e.lineTo(Je * r - et * i, et * r + Je * i), e.lineTo(Je * o - et * a, et * o + Je * a), e.lineTo(Je * s - et * f, et * s + Je * f), e.lineTo(Je * r + et * i, Je * i - et * r), e.lineTo(Je * o + et * a, Je * a - et * o), e.lineTo(Je * s + et * f, Je * f - et * s), e.closePath();
  }
}, Mm = {
  draw(e, t) {
    const n = Ce(t - $f(t / 6, 1.7)) * 0.6189;
    e.moveTo(-n, -n), e.lineTo(n, n), e.moveTo(-n, n), e.lineTo(n, -n);
  }
}, y_ = [
  Ff,
  um,
  hm,
  pm,
  wm,
  _m,
  xm
], w_ = [
  Ff,
  gm,
  Mm,
  vm,
  cm,
  bm,
  mm
];
function Br(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Br.prototype = {
  constructor: Br,
  scale: function(e) {
    return e === 1 ? this : new Br(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Br(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Br.prototype;
function $n(e) {
  return e != null && !Number.isNaN(e);
}
function wt(e, t) {
  return +$n(t) - +$n(e) || We(e, t);
}
function Fo(e, t) {
  return +$n(t) - +$n(e) || li(e, t);
}
function Sm(e) {
  return e != null && `${e}` != "";
}
function km(e) {
  return isFinite(e) ? e : NaN;
}
function Pf(e) {
  return e > 0 && isFinite(e) ? e : NaN;
}
function Tm(e) {
  return e < 0 && isFinite(e) ? e : NaN;
}
function __(e, t) {
  if (e instanceof Date || (e = /* @__PURE__ */ new Date(+e)), isNaN(e))
    return typeof t == "function" ? t(e) : t;
  const n = e.getUTCHours(), r = e.getUTCMinutes(), i = e.getUTCSeconds(), o = e.getUTCMilliseconds();
  return `${v_(e.getUTCFullYear())}-${Ht(e.getUTCMonth() + 1, 2)}-${Ht(e.getUTCDate(), 2)}${n || r || i || o ? `T${Ht(n, 2)}:${Ht(r, 2)}${i || o ? `:${Ht(i, 2)}${o ? `.${Ht(o, 3)}` : ""}` : ""}Z` : ""}`;
}
function v_(e) {
  return e < 0 ? `-${Ht(-e, 6)}` : e > 9999 ? `+${Ht(e, 6)}` : Ht(e, 4);
}
function Ht(e, t) {
  return `${e}`.padStart(t, "0");
}
const x_ = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function Cm(e, t) {
  return x_.test(e += "") ? new Date(e) : typeof t == "function" ? t(e) : t;
}
function mr(e) {
  if (e == null)
    return;
  const t = e[0], n = e[e.length - 1];
  return li(t, n);
}
const Qn = 1e3, rn = Qn * 60, on = rn * 60, Lt = on * 24, Mt = Lt * 7, kn = Lt * 30, nn = Lt * 365, Ua = [
  ["millisecond", 1],
  ["2 milliseconds", 2],
  ["5 milliseconds", 5],
  ["10 milliseconds", 10],
  ["20 milliseconds", 20],
  ["50 milliseconds", 50],
  ["100 milliseconds", 100],
  ["200 milliseconds", 200],
  ["500 milliseconds", 500],
  ["second", Qn],
  ["5 seconds", 5 * Qn],
  ["15 seconds", 15 * Qn],
  ["30 seconds", 30 * Qn],
  ["minute", rn],
  ["5 minutes", 5 * rn],
  ["15 minutes", 15 * rn],
  ["30 minutes", 30 * rn],
  ["hour", on],
  ["3 hours", 3 * on],
  ["6 hours", 6 * on],
  ["12 hours", 12 * on],
  ["day", Lt],
  ["2 days", 2 * Lt],
  ["week", Mt],
  ["2 weeks", 2 * Mt],
  // https://github.com/d3/d3-time/issues/46
  ["month", kn],
  ["3 months", 3 * kn],
  ["6 months", 6 * kn],
  // https://github.com/d3/d3-time/issues/46
  ["year", nn],
  ["2 years", 2 * nn],
  ["5 years", 5 * nn],
  ["10 years", 10 * nn],
  ["20 years", 20 * nn],
  ["50 years", 50 * nn],
  ["100 years", 100 * nn]
  // TODO generalize to longer time scales
], Bf = /* @__PURE__ */ new Map([
  ["second", Qn],
  ["minute", rn],
  ["hour", on],
  ["day", Lt],
  ["monday", Mt],
  ["tuesday", Mt],
  ["wednesday", Mt],
  ["thursday", Mt],
  ["friday", Mt],
  ["saturday", Mt],
  ["sunday", Mt],
  ["week", Mt],
  ["month", kn],
  ["year", nn]
]), Am = /* @__PURE__ */ new Map([
  ["second", ht],
  ["minute", pi],
  ["hour", yi],
  ["day", Pn],
  // https://github.com/d3/d3-time/issues/62
  ["monday", ti],
  ["tuesday", Bh],
  ["wednesday", Uh],
  ["thursday", In],
  ["friday", Hh],
  ["saturday", zh],
  ["sunday", dr],
  ["week", dr],
  ["month", _i],
  ["year", bt]
]), Uf = /* @__PURE__ */ new Map([
  ["second", ht],
  ["minute", bi],
  ["hour", wi],
  ["day", ra],
  ["monday", ni],
  ["tuesday", qh],
  ["wednesday", Wh],
  ["thursday", On],
  ["friday", Yh],
  ["saturday", Vh],
  ["sunday", hr],
  ["week", hr],
  ["month", vi],
  ["year", yt]
]), Mi = Symbol("intervalDuration"), fa = Symbol("intervalType");
for (const [e, t] of Am)
  t[Mi] = Bf.get(e), t[fa] = "time";
for (const [e, t] of Uf)
  t[Mi] = Bf.get(e), t[fa] = "utc";
const Ur = [
  ["year", yt, "utc"],
  ["month", vi, "utc"],
  ["day", ra, "utc", 6 * kn],
  ["hour", wi, "utc", 3 * Lt],
  ["minute", bi, "utc", 6 * on],
  ["second", ht, "utc", 30 * rn]
], ro = [
  ["year", bt, "time"],
  ["month", _i, "time"],
  ["day", Pn, "time", 6 * kn],
  ["hour", yi, "time", 3 * Lt],
  ["minute", pi, "time", 6 * on],
  ["second", ht, "time", 30 * rn]
], M_ = [
  Ur[0],
  ro[0],
  Ur[1],
  ro[1],
  Ur[2],
  ro[2],
  // Below day, local time typically has an hourly offset from UTC and hence the
  // two are aligned and indistinguishable; therefore, we only consider UTC, and
  // we don’t consider these if the domain only has a single value.
  ...Ur.slice(3)
];
function Em(e) {
  let t = `${e}`.toLowerCase();
  t.endsWith("s") && (t = t.slice(0, -1));
  let n = 1;
  const r = /^(?:(\d+)\s+)/.exec(t);
  switch (r && (t = t.slice(r[0].length), n = +r[1]), t) {
    case "quarter":
      t = "month", n *= 3;
      break;
    case "half":
      t = "month", n *= 6;
      break;
  }
  let i = Uf.get(t);
  if (!i)
    throw new Error(`unknown interval: ${e}`);
  if (n > 1 && !i.every)
    throw new Error(`non-periodic interval: ${t}`);
  return [t, n];
}
function Nm(e) {
  return Lm(Em(e), "time");
}
function Rm(e) {
  return Lm(Em(e), "utc");
}
function Lm([e, t], n) {
  let r = (n === "time" ? Am : Uf).get(e);
  return t > 1 && (r = r.every(t), r[Mi] = Bf.get(e) * t, r[fa] = n), r;
}
function qc(e, t) {
  if (!(t > 1))
    return;
  const n = e[Mi];
  if (!Ua.some(([, i]) => i === n) || n % Lt === 0 && Lt < n && n < kn)
    return;
  const [r] = Ua[zo(([, i]) => Math.log(i)).center(Ua, Math.log(n * t))];
  return (e[fa] === "time" ? Nm : Rm)(r);
}
function Wc(e, t, n) {
  const r = t === "time" ? If : xi;
  if (n == null)
    return r(
      e === "year" ? "%Y" : e === "month" ? "%Y-%m" : e === "day" ? "%Y-%m-%d" : e === "hour" || e === "minute" ? "%Y-%m-%dT%H:%M" : e === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L"
    );
  const i = S_(n);
  switch (e) {
    case "millisecond":
      return Gn(r(".%L"), r(":%M:%S"), i);
    case "second":
      return Gn(r(":%S"), r("%-I:%M"), i);
    case "minute":
      return Gn(r("%-I:%M"), r("%p"), i);
    case "hour":
      return Gn(r("%-I %p"), r("%b %-d"), i);
    case "day":
      return Gn(r("%-d"), r("%b"), i);
    case "month":
      return Gn(r("%b"), r("%Y"), i);
    case "year":
      return r("%Y");
  }
  throw new Error("unable to format time ticks");
}
function S_(e) {
  return e === "left" || e === "right" ? (t, n) => `
${t}
${n}` : e === "top" ? (t, n) => `${n}
${t}` : (t, n) => `${t}
${n}`;
}
function k_(e) {
  return e === "time" ? ro : e === "utc" ? Ur : M_;
}
function T_(e, t, n) {
  const r = gt(Bp(t, (i, o) => Math.abs(o - i)));
  if (r < 1e3)
    return Wc("millisecond", "utc", n);
  for (const [i, o, a, s] of k_(e)) {
    if (r > s || i === "hour" && !r)
      break;
    if (t.every((f) => o.floor(f) >= f))
      return Wc(i, a, n);
  }
}
function Gn(e, t, n) {
  return (r, i, o) => {
    const a = e(r, i), s = t(r, i), f = i - mr(o);
    return i !== f && o[f] !== void 0 && s === t(o[f], f) ? a : n(a, s);
  };
}
const ri = Object.getPrototypeOf(Uint8Array), C_ = Object.prototype.toString, Dm = Symbol("reindex");
function Ee(e, t, n) {
  const r = typeof t;
  return r === "string" ? Yc(e, Im(t), n) : r === "function" ? Yc(e, t, n) : r === "number" || t instanceof Date || r === "boolean" ? Re(e, Si(t), n) : typeof (t == null ? void 0 : t.transform) == "function" ? Vc(t.transform(e), n) : A_(Vc(t, n), e == null ? void 0 : e[Dm]);
}
function A_(e, t) {
  return t ? Wf(e, t) : e;
}
function Yc(e, t, n) {
  return Re(e, (n == null ? void 0 : n.prototype) instanceof ri ? E_(t) : t, n);
}
function Vc(e, t) {
  return t === void 0 ? Qe(e) : e instanceof t ? e : t.prototype instanceof ri && !(e instanceof ri) ? t.from(e, zf) : t.from(e);
}
function E_(e) {
  return (t, n) => zf(e(t, n));
}
const io = [null], Im = (e) => (t) => t[e], Hf = { transform: Jt }, Oe = { transform: (e) => e }, N_ = () => 1, R_ = () => !0, He = (e) => e == null ? e : `${e}`, Me = (e) => e == null ? e : +e, Om = (e) => e ? e[0] : void 0, Vs = (e) => e ? e[1] : void 0, Si = (e) => () => e;
function L_(e) {
  const t = +`${e}`.slice(1) / 100;
  return (n, r) => co(n, t, r);
}
function Gc(e) {
  return e instanceof ri ? e : Re(e, zf, Float64Array);
}
function zf(e) {
  return e == null ? NaN : Number(e);
}
function D_(e) {
  return Re(e, I_);
}
function I_(e) {
  return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? Cm(e) : e == null || isNaN(e = +e) ? void 0 : new Date(e);
}
function Kt(e, t) {
  return e === void 0 && (e = t), e === null ? [void 0, "none"] : ca(e) ? [void 0, e] : [e, void 0];
}
function Ge(e, t) {
  return e === void 0 && (e = t), e === null || typeof e == "number" ? [void 0, e] : [e, void 0];
}
function $m(e, t, n) {
  if (e != null)
    return vt(e, t, n);
}
function vt(e, t, n) {
  const r = `${e}`.toLowerCase();
  if (!n.includes(r))
    throw new Error(`invalid ${t}: ${e}`);
  return r;
}
function Qe(e) {
  return e == null || e instanceof Array || e instanceof ri ? e : Array.from(e);
}
function Re(e, t, n = Array) {
  return e == null ? e : e instanceof n ? e.map(t) : n.from(e, t);
}
function ii(e, t = Array) {
  return e instanceof t ? e.slice() : t.from(e);
}
function Fm({ x: e, x1: t, x2: n }) {
  return e !== void 0 || t !== void 0 || n !== void 0;
}
function Pm({ y: e, y1: t, y2: n }) {
  return e !== void 0 || t !== void 0 || n !== void 0;
}
function Bm(e) {
  return Fm(e) || Pm(e) || e.interval !== void 0;
}
function mn(e) {
  return (e == null ? void 0 : e.toString) === C_;
}
function Gs(e) {
  return mn(e) && (e.type !== void 0 || e.domain !== void 0);
}
function qf(e) {
  return mn(e) && typeof e.transform != "function";
}
function oi(e) {
  return qf(e) && e.value === void 0 && e.channel === void 0;
}
function Um(e, t, n, r = Oe) {
  return t === void 0 && n === void 0 ? (t = 0, n = e === void 0 ? r : e) : t === void 0 ? t = e === void 0 ? 0 : e : n === void 0 && (n = e === void 0 ? 0 : e), [t, n];
}
function Hm(e, t) {
  return e === void 0 && t === void 0 ? [Om, Vs] : [e, t];
}
function O_({ z: e, fill: t, stroke: n } = {}) {
  return e === void 0 && ([e] = Kt(t)), e === void 0 && ([e] = Kt(n)), e;
}
function Jt(e) {
  const t = e.length, n = new Uint32Array(t);
  for (let r = 0; r < t; ++r)
    n[r] = r;
  return n;
}
function Wf(e, t) {
  return Re(t, (n) => e[n], e.constructor);
}
function $_(e, t, n) {
  return e.subarray ? e.subarray(t, n) : e.slice(t, n);
}
function Yi(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function F_(e, t) {
  if (t[e] !== void 0)
    return t[e];
  switch (e) {
    case "x1":
    case "x2":
      e = "x";
      break;
    case "y1":
    case "y2":
      e = "y";
      break;
  }
  return t[e];
}
function Po(e) {
  let t;
  return [
    {
      transform: () => t,
      label: vr(e)
    },
    (n) => t = n
  ];
}
function Zn(e) {
  return e == null ? [e] : Po(e);
}
function vr(e, t) {
  return typeof e == "string" ? e : e && e.label !== void 0 ? e.label : t;
}
function zm(e, t) {
  return {
    transform(n) {
      const r = e.transform(n), i = t.transform(n);
      return ct(r) || ct(i) ? Re(r, (o, a) => new Date((+r[a] + +i[a]) / 2)) : Re(r, (o, a) => (+r[a] + +i[a]) / 2, Float64Array);
    },
    label: e.label
  };
}
function Xs(e, t) {
  const n = qm(t == null ? void 0 : t.interval, t == null ? void 0 : t.type);
  return n ? Re(e, n) : e;
}
function qm(e, t) {
  const n = Yf(e, t);
  return n && ((r) => $n(r) ? n.floor(r) : r);
}
function Yf(e, t) {
  if (e != null) {
    if (typeof e == "number") {
      0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
      const n = Math.abs(e);
      return e < 0 ? {
        floor: (r) => Math.floor(r * n) / n,
        offset: (r) => (r * n + 1) / n,
        // note: no optional step for simplicity
        range: (r, i) => cs(Math.ceil(r * n), i * n).map((o) => o / n)
      } : {
        floor: (r) => Math.floor(r / n) * n,
        offset: (r) => r + n,
        // note: no optional step for simplicity
        range: (r, i) => cs(Math.ceil(r / n), i / n).map((o) => o * n)
      };
    }
    if (typeof e == "string")
      return (t === "time" ? Nm : Rm)(e);
    if (typeof e.floor != "function")
      throw new Error("invalid interval; missing floor method");
    if (typeof e.offset != "function")
      throw new Error("invalid interval; missing offset method");
    return e;
  }
}
function ki(e, t) {
  if (e = Yf(e, t), e && typeof e.range != "function")
    throw new Error("invalid interval: missing range method");
  return e;
}
function P_(e, t) {
  if (e = ki(e, t), e && typeof e.ceil != "function")
    throw new Error("invalid interval: missing ceil method");
  return e;
}
function B_(e) {
  return typeof (e == null ? void 0 : e.range) == "function";
}
function la(e) {
  return e === void 0 || qf(e) ? e : { value: e };
}
function U_(e) {
  return e == null ? null : {
    transform: (t) => Ee(t, e, Float64Array),
    label: vr(e)
  };
}
function Hn(e) {
  return e && typeof e[Symbol.iterator] == "function";
}
function Wm(e) {
  for (const t of e)
    if (t != null)
      return typeof t != "object" || t instanceof Date;
}
function Xc(e) {
  for (const t of e) {
    if (t == null)
      continue;
    const n = typeof t;
    return n === "string" || n === "boolean";
  }
}
function ct(e) {
  for (const t of e)
    if (t != null)
      return t instanceof Date;
}
function H_(e) {
  for (const t of e)
    if (t != null)
      return typeof t == "string" && isNaN(t) && Cm(t);
}
function z_(e) {
  for (const t of e)
    if (t != null) {
      if (typeof t != "string")
        return !1;
      if (t.trim())
        return !isNaN(t);
    }
}
function q_(e) {
  for (const t of e)
    if (t != null)
      return typeof t == "number";
}
function Ha(e, t) {
  let n;
  for (const r of e)
    if (r != null) {
      if (!t(r))
        return !1;
      n = !0;
    }
  return n;
}
const W_ = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function ca(e) {
  return typeof e != "string" ? !1 : (e = e.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e) || // hex rgb, rgba, rrggbb, rrggbbaa
  /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e) || // <funciri>, CSS variable, color, etc.
  W_.has(e));
}
function Y_(e) {
  return typeof e == "number" && (0 <= e && e <= 1 || isNaN(e));
}
function qe(e) {
  return e == null || ai(e);
}
function ai(e) {
  return /^\s*none\s*$/i.test(e);
}
function V_(e) {
  return /^\s*round\s*$/i.test(e);
}
function js(e, t) {
  return $m(e, t, [
    "middle",
    "top-left",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left"
  ]);
}
function Vf(e = "middle") {
  return js(e, "frameAnchor");
}
function G_(e = {}, ...t) {
  let n = e;
  for (const r of t)
    for (const i in r)
      if (n[i] === void 0) {
        const o = r[i];
        n === e ? n = { ...n, [i]: o } : n[i] = o;
      }
  return n;
}
function X_(e) {
  console.warn("named iterables are deprecated; please use an object instead");
  const t = /* @__PURE__ */ new Set();
  return Object.fromEntries(
    Array.from(e, (n) => {
      const { name: r } = n;
      if (r == null)
        throw new Error("missing name");
      const i = `${r}`;
      if (i === "__proto__")
        throw new Error(`illegal name: ${i}`);
      if (t.has(i))
        throw new Error(`duplicate name: ${i}`);
      return t.add(i), [r, n];
    })
  );
}
function Ym(e) {
  return Hn(e) ? X_(e) : e;
}
function Vm(e) {
  return e === !0 ? e = "frame" : e === !1 ? e = null : e != null && (e = vt(e, "clip", ["frame", "sphere"])), e;
}
const Tt = Symbol("position"), en = Symbol("color"), Ti = Symbol("radius"), Ci = Symbol("length"), Ai = Symbol("opacity"), ua = Symbol("symbol"), Gm = Symbol("projection"), ke = /* @__PURE__ */ new Map([
  ["x", Tt],
  ["y", Tt],
  ["fx", Tt],
  ["fy", Tt],
  ["r", Ti],
  ["color", en],
  ["opacity", Ai],
  ["symbol", ua],
  ["length", Ci],
  ["projection", Gm]
]);
function j_(e) {
  return e === Tt || e === Gm;
}
function Z_(e) {
  return e === Tt || e === Ti || e === Ci || e === Ai;
}
const K_ = Math.sqrt(3), Q_ = 2 / K_, J_ = {
  draw(e, t) {
    const n = Math.sqrt(t / Math.PI), r = n * Q_, i = r / 2;
    e.moveTo(0, r), e.lineTo(n, i), e.lineTo(n, -i), e.lineTo(0, -r), e.lineTo(-n, -i), e.lineTo(-n, i), e.closePath();
  }
}, Xm = /* @__PURE__ */ new Map([
  ["asterisk", cm],
  ["circle", Ff],
  ["cross", um],
  ["diamond", hm],
  ["diamond2", mm],
  ["hexagon", J_],
  ["plus", gm],
  ["square", pm],
  ["square2", bm],
  ["star", wm],
  ["times", Mm],
  ["triangle", _m],
  ["triangle2", vm],
  ["wye", xm]
]);
function jm(e) {
  return e && typeof e.draw == "function";
}
function e8(e) {
  return jm(e) ? !0 : typeof e != "string" ? !1 : Xm.has(e.toLowerCase());
}
function Gf(e) {
  if (e == null || jm(e))
    return e;
  const t = Xm.get(`${e}`.toLowerCase());
  if (t)
    return t;
  throw new Error(`invalid symbol: ${e}`);
}
function Xf({ filter: e, sort: t, reverse: n, transform: r, initializer: i, ...o } = {}, a) {
  if (r === void 0 && (e != null && (r = Zm(e)), t != null && !oi(t) && (r = za(r, Qm(t))), n && (r = za(r, Km))), a != null && i != null)
    throw new Error("transforms cannot be applied after initializers");
  return {
    ...o,
    ...(t === null || oi(t)) && { sort: t },
    transform: za(r, a)
  };
}
function Bo({ filter: e, sort: t, reverse: n, initializer: r, ...i } = {}, o) {
  return r === void 0 && (e != null && (r = Zm(e)), t != null && !oi(t) && (r = qa(r, Qm(t))), n && (r = qa(r, Km))), {
    ...i,
    ...(t === null || oi(t)) && { sort: t },
    initializer: qa(r, o)
  };
}
function za(e, t) {
  return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i) {
    return { data: n, facets: r } = e.call(this, n, r, i), t.call(this, Qe(n), r, i);
  };
}
function qa(e, t) {
  return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i, ...o) {
    let a, s, f, l, c, u;
    return { data: s = n, facets: f = r, channels: a } = e.call(this, n, r, i, ...o), { data: c = s, facets: u = f, channels: l } = t.call(this, s, f, { ...i, ...a }, ...o), { data: c, facets: u, channels: { ...a, ...l } };
  };
}
function Zm(e) {
  return (t, n) => {
    const r = Ee(t, e);
    return { data: t, facets: n.map((i) => i.filter((o) => r[o])) };
  };
}
function Km(e, t) {
  return { data: e, facets: t.map((n) => n.slice().reverse()) };
}
function Qm(e) {
  return (typeof e == "function" && e.length !== 1 ? t8 : n8)(e);
}
function t8(e) {
  return (t, n) => {
    const r = (i, o) => e(t[i], t[o]);
    return { data: t, facets: n.map((i) => i.slice().sort(r)) };
  };
}
function n8(e) {
  let t, n;
  ({ channel: t, value: e, order: n } = { ...la(e) });
  const r = t == null ? void 0 : t.startsWith("-");
  if (r && (t = t.slice(1)), n === void 0 && (n = r ? Fo : wt), typeof n != "function")
    switch (`${n}`.toLowerCase()) {
      case "ascending":
        n = wt;
        break;
      case "descending":
        n = Fo;
        break;
      default:
        throw new Error(`invalid order: ${n}`);
    }
  return (i, o, a) => {
    let s;
    if (t === void 0)
      s = Ee(i, e);
    else {
      if (a === void 0)
        throw new Error("channel sort requires an initializer");
      if (s = a[t], !s)
        return {};
      s = s.value;
    }
    const f = (l, c) => n(s[l], s[c]);
    return { data: i, facets: o.map((l) => l.slice().sort(f)) };
  };
}
function r8(e = { y: "count" }, t = {}) {
  const { x: n = Oe } = t;
  if (n == null)
    throw new Error("missing channel: x");
  return Jm(n, null, e, t);
}
function i8(e = { x: "count" }, t = {}) {
  const { y: n = Oe } = t;
  if (n == null)
    throw new Error("missing channel: y");
  return Jm(null, n, e, t);
}
function Jm(e, t, {
  data: n = o1,
  filter: r,
  sort: i,
  reverse: o,
  ...a
  // output channel definitions
} = {}, s = {}) {
  a = f8(a, s), n = i1(n, Oe), i = i == null ? void 0 : n1("sort", i, s), r = r == null ? void 0 : r1("filter", r, s);
  const [f, l] = Zn(e), [c, u] = Zn(t), {
    z: d,
    fill: h,
    stroke: m,
    x1: p,
    x2: y,
    // consumed if x is an output
    y1: b,
    y2: w,
    // consumed if y is an output
    ...v
  } = s, [x, C] = Zn(d), [k] = Kt(h), [R] = Kt(m), [T, D] = Zn(k), [F, N] = Zn(R);
  return {
    ..."z" in s && { z: x || d },
    ..."fill" in s && { fill: T || h },
    ..."stroke" in s && { stroke: F || m },
    ...Xf(v, (B, V, U) => {
      const L = Xs(Ee(B, e), U == null ? void 0 : U.x), Y = Xs(Ee(B, t), U == null ? void 0 : U.y), q = Ee(B, d), g = Ee(B, k), M = Ee(B, R), _ = c8(a, { z: q, fill: g, stroke: M }), S = [], A = [], E = L && l([]), H = Y && u([]), P = q && C([]), W = g && D([]), z = M && N([]);
      let X = 0;
      for (const I of a)
        I.initialize(B);
      i && i.initialize(B), r && r.initialize(B);
      for (const I of V) {
        const G = [];
        for (const Z of a)
          Z.scope("facet", I);
        i && i.scope("facet", I), r && r.scope("facet", I);
        for (const [Z, $] of Wa(I, _))
          for (const [ue, ne] of Wa($, Y))
            for (const [me, he] of Wa(ne, L)) {
              const we = { data: B };
              if (L && (we.x = me), Y && (we.y = ue), _ && (we.z = Z), !(r && !r.reduce(he, we))) {
                G.push(X++), A.push(n.reduceIndex(he, B, we)), L && E.push(me), Y && H.push(ue), q && P.push(_ === q ? Z : q[he[0]]), g && W.push(_ === g ? Z : g[he[0]]), M && z.push(_ === M ? Z : M[he[0]]);
                for (const xt of a)
                  xt.reduce(he, we);
                i && i.reduce(he, we);
              }
            }
        S.push(G);
      }
      return u8(S, i, o), { data: A, facets: S };
    }),
    ...!jc(a, "x") && (f ? { x: f } : { x1: p, x2: y }),
    ...!jc(a, "y") && (c ? { y: c } : { y1: b, y2: w }),
    ...Object.fromEntries(a.map(({ name: B, output: V }) => [B, V]))
  };
}
function jc(e, ...t) {
  for (const { name: n } of e)
    if (t.includes(n))
      return !0;
  return !1;
}
function o8(e, t, n = e1) {
  const r = Object.entries(e);
  return t.title != null && e.title === void 0 && r.push(["title", m8]), t.href != null && e.href === void 0 && r.push(["href", a1]), r.filter(([, i]) => i !== void 0).map(([i, o]) => o === null ? a8(i) : n(i, o, t));
}
function e1(e, t, n, r = t1) {
  let i;
  mn(t) && "reduce" in t && (i = t.scale, t = t.reduce);
  const o = r(e, t, n), [a, s] = Po(o.label);
  let f;
  return {
    name: e,
    output: i === void 0 ? a : { value: a, scale: i },
    initialize(l) {
      o.initialize(l), f = s([]);
    },
    scope(l, c) {
      o.scope(l, c);
    },
    reduce(l, c) {
      f.push(o.reduce(l, c));
    }
  };
}
function a8(e) {
  return { name: e, initialize() {
  }, scope() {
  }, reduce() {
  } };
}
function t1(e, t, n, r = jf) {
  const i = F_(e, n), o = r(t, i);
  let a, s;
  return {
    label: vr(o === Zs ? null : i, o.label),
    initialize(f) {
      a = i === void 0 ? f : Ee(f, i), o.scope === "data" && (s = o.reduceIndex(Jt(f), a));
    },
    scope(f, l) {
      o.scope === f && (s = o.reduceIndex(l, a));
    },
    reduce(f, l) {
      return o.scope == null ? o.reduceIndex(f, a, l) : o.reduceIndex(f, a, s, l);
    }
  };
}
function Wa(e, t) {
  return t ? df(e, (n) => t[n]) : [[, e]];
}
function jf(e, t, n = s8) {
  if (e == null)
    return n(e);
  if (typeof e.reduceIndex == "function")
    return e;
  if (typeof e.reduce == "function" && mn(e))
    return d8(e);
  if (typeof e == "function")
    return h8(e);
  if (/^p\d{2}$/i.test(e))
    return Ut(L_(e));
  switch (`${e}`.toLowerCase()) {
    case "first":
      return a1;
    case "last":
      return g8;
    case "identity":
      return o1;
    case "count":
      return Zs;
    case "distinct":
      return p8;
    case "sum":
      return t == null ? Zs : b8;
    case "proportion":
      return Kc(t, "data");
    case "proportion-facet":
      return Kc(t, "facet");
    case "deviation":
      return Ut(Cp);
    case "min":
      return Ut(Gt);
    case "min-index":
      return Ut(Ip);
    case "max":
      return Ut(gt);
    case "max-index":
      return Ut(Dp);
    case "mean":
      return Zc($p);
    case "median":
      return Zc(ls);
    case "variance":
      return Ut(td);
    case "mode":
      return Ut(Pp);
  }
  return n(e);
}
function s8(e) {
  throw new Error(`invalid reduce: ${e}`);
}
function f8(e, t) {
  return o8(e, t, n1);
}
function n1(e, t, n) {
  return e1(e, t, n, r1);
}
function r1(e, t, n) {
  return t1(e, t, n, i1);
}
function i1(e, t) {
  return jf(e, t, l8);
}
function l8(e) {
  switch (`${e}`.toLowerCase()) {
    case "x":
      return y8;
    case "y":
      return w8;
    case "z":
      return _8;
  }
  throw new Error(`invalid group reduce: ${e}`);
}
function c8(e, t) {
  for (const n in t) {
    const r = t[n];
    if (r !== void 0 && !e.some((i) => i.name === n))
      return r;
  }
}
function u8(e, t, n) {
  if (t) {
    const r = t.output.transform(), i = (o, a) => wt(r[o], r[a]);
    e.forEach((o) => o.sort(i));
  }
  n && e.forEach((r) => r.reverse());
}
function d8(e) {
  return console.warn("deprecated reduce interface; implement reduceIndex instead."), { ...e, reduceIndex: e.reduce.bind(e) };
}
function h8(e) {
  return {
    reduceIndex(t, n, r) {
      return e(Wf(n, t), r);
    }
  };
}
function Ut(e) {
  return {
    reduceIndex(t, n) {
      return e(t, (r) => n[r]);
    }
  };
}
function Zc(e) {
  return {
    reduceIndex(t, n) {
      const r = e(t, (i) => n[i]);
      return ct(n) ? new Date(r) : r;
    }
  };
}
const o1 = {
  reduceIndex(e, t) {
    return Wf(t, e);
  }
}, a1 = {
  reduceIndex(e, t) {
    return t[e[0]];
  }
}, m8 = {
  reduceIndex(e, t) {
    const r = ao(
      er(
        e,
        (o) => o.length,
        (o) => t[o]
      ),
      Vs
    ), i = r.slice(-5).reverse();
    if (i.length < r.length) {
      const o = r.slice(0, -4);
      i[4] = [`… ${o.length.toLocaleString("en-US")} more`, sn(o, Vs)];
    }
    return i.map(([o, a]) => `${o} (${a.toLocaleString("en-US")})`).join(`
`);
  }
}, g8 = {
  reduceIndex(e, t) {
    return t[e[e.length - 1]];
  }
}, Zs = {
  label: "Frequency",
  reduceIndex(e) {
    return e.length;
  }
}, p8 = {
  label: "Distinct",
  reduceIndex(e, t) {
    const n = new qo();
    for (const r of e)
      n.add(t[r]);
    return n.size;
  }
}, b8 = Ut(sn);
function Kc(e, t) {
  return e == null ? { scope: t, label: "Frequency", reduceIndex: (n, r, i = 1) => n.length / i } : { scope: t, reduceIndex: (n, r, i = 1) => sn(n, (o) => r[o]) / i };
}
const y8 = {
  reduceIndex(e, t, { x: n }) {
    return n;
  }
}, w8 = {
  reduceIndex(e, t, { y: n }) {
    return n;
  }
}, _8 = {
  reduceIndex(e, t, { z: n }) {
    return n;
  }
};
function si(e, { scale: t, type: n, value: r, filter: i, hint: o, label: a = vr(r) }, s) {
  return o === void 0 && typeof (r == null ? void 0 : r.transform) == "function" && (o = r.hint), s1(s, {
    scale: t,
    type: n,
    value: Ee(e, r),
    label: a,
    filter: i,
    hint: o
  });
}
function v8(e, t) {
  return Object.fromEntries(
    Object.entries(e).map(([n, r]) => [n, si(t, r, n)])
  );
}
function x8(e, t) {
  const n = Object.fromEntries(
    Object.entries(e).map(([r, { scale: i, value: o }]) => {
      const a = i == null ? null : t[i];
      return [r, a == null ? o : Re(o, a)];
    })
  );
  return n.channels = e, n;
}
function s1(e, t) {
  const { scale: n, value: r } = t;
  if (n === !0 || n === "auto")
    switch (e) {
      case "fill":
      case "stroke":
      case "color":
        t.scale = n !== !0 && Ha(r, ca) ? null : "color";
        break;
      case "fillOpacity":
      case "strokeOpacity":
      case "opacity":
        t.scale = n !== !0 && Ha(r, Y_) ? null : "opacity";
        break;
      case "symbol":
        n !== !0 && Ha(r, e8) ? (t.scale = null, t.value = Re(r, Gf)) : t.scale = "symbol";
        break;
      default:
        t.scale = ke.has(e) ? e : null;
        break;
    }
  else if (n === !1)
    t.scale = null;
  else if (n != null && !ke.has(n))
    throw new Error(`unknown scale: ${n}`);
  return t;
}
function M8(e, t, n, r, i) {
  const { order: o, reverse: a, reduce: s = !0, limit: f } = i;
  for (const l in i) {
    if (!ke.has(l))
      continue;
    let { value: c, order: u = o, reverse: d = a, reduce: h = s, limit: m = f } = la(i[l]);
    const p = c == null ? void 0 : c.startsWith("-");
    if (p && (c = c.slice(1)), u = u === void 0 ? p !== (c === "width" || c === "height") ? l1 : f1 : T8(u), h == null || h === !1)
      continue;
    const y = l === "fx" || l === "fy" ? k8(t, r[l]) : S8(n, l);
    if (!y)
      throw new Error(`missing channel for scale: ${l}`);
    const b = y.value, [w = 0, v = 1 / 0] = Hn(m) ? m : m < 0 ? [m] : [0, m];
    if (c == null)
      y.domain = () => {
        let x = Array.from(new qo(b));
        return d && (x = x.reverse()), (w !== 0 || v !== 1 / 0) && (x = x.slice(w, v)), x;
      };
    else {
      const x = c === "data" ? e : c === "height" ? Qc(n, "y1", "y2") : c === "width" ? Qc(n, "x1", "x2") : Ks(n, c, c === "y" ? "y2" : c === "x" ? "x2" : void 0), C = jf(h === !0 ? "max" : h, x);
      y.domain = () => {
        let k = Ap(
          Jt(b),
          (R) => C.reduceIndex(R, x),
          (R) => b[R]
        );
        return u && k.sort(u), d && k.reverse(), (w !== 0 || v !== 1 / 0) && (k = k.slice(w, v)), k.map(Om);
      };
    }
  }
}
function S8(e, t) {
  for (const n in e) {
    const r = e[n];
    if (r.scale === t)
      return r;
  }
}
function k8(e, t) {
  const n = e.original;
  if (n === e)
    return t;
  const r = t.value, i = t.value = [];
  for (let o = 0; o < n.length; ++o) {
    const a = r[n[o][0]];
    for (const s of e[o])
      i[s] = a;
  }
  return t;
}
function Qc(e, t, n) {
  const r = Ks(e, t), i = Ks(e, n);
  return Re(i, (o, a) => Math.abs(o - r[a]), Float64Array);
}
function Ks(e, t, n) {
  let r = e[t];
  if (!r && n !== void 0 && (r = e[n]), r)
    return r.value;
  throw new Error(`missing channel: ${t}`);
}
function T8(e) {
  if (e == null || typeof e == "function")
    return e;
  switch (`${e}`.toLowerCase()) {
    case "ascending":
      return f1;
    case "descending":
      return l1;
  }
  throw new Error(`invalid order: ${e}`);
}
function f1([e, t], [n, r]) {
  return wt(t, r) || wt(e, n);
}
function l1([e, t], [n, r]) {
  return Fo(t, r) || wt(e, n);
}
function Jc(e, t) {
  let n = e[t];
  if (n) {
    for (; n.source; )
      n = n.source;
    return n.source === null ? null : n;
  }
}
function Zf(e = {}) {
  const { document: t = typeof window < "u" ? window.document : void 0, clip: n } = e;
  return { document: t, clip: Vm(n) };
}
function ze(e, { document: t }) {
  return zr(Yo(e).call(t.documentElement));
}
let Qs = 0, Js;
function C8() {
  const e = Qs;
  return Qs = 0, Js = void 0, e;
}
function Tn(e) {
  e !== Js && (Js = e, console.warn(e), ++Qs);
}
const c1 = Math.PI, Ft = 2 * c1, eu = 0.618;
function A8({
  projection: e,
  inset: t = 0,
  insetTop: n = t,
  insetRight: r = t,
  insetBottom: i = t,
  insetLeft: o = t
} = {}, a) {
  if (e == null)
    return;
  if (typeof e.stream == "function")
    return e;
  let s, f, l = "frame";
  if (mn(e)) {
    let C;
    if ({
      type: e,
      domain: f,
      inset: C,
      insetTop: n = C !== void 0 ? C : n,
      insetRight: r = C !== void 0 ? C : r,
      insetBottom: i = C !== void 0 ? C : i,
      insetLeft: o = C !== void 0 ? C : o,
      clip: l = l,
      ...s
    } = e, e == null)
      return;
  }
  typeof e != "function" && ({ type: e } = u1(e));
  const { width: c, height: u, marginLeft: d, marginRight: h, marginTop: m, marginBottom: p } = a, y = c - d - h - o - r, b = u - m - p - n - i;
  if (e = e == null ? void 0 : e({ width: y, height: b, clip: l, ...s }), e == null)
    return;
  l = E8(l, d, m, c - h, u - p);
  let w = d + o, v = m + n, x;
  if (f != null) {
    const [[C, k], [R, T]] = dh(e).bounds(f), D = Math.min(y / (R - C), b / (T - k));
    D > 0 ? (w -= (D * (C + R) - y) / 2, v -= (D * (k + T) - b) / 2, x = Ps({
      point(F, N) {
        this.stream.point(F * D + w, N * D + v);
      }
    })) : Tn("Warning: the projection could not be fit to the specified domain; using the default scale.");
  }
  return x ?? (x = w === 0 && v === 0 ? d1() : Ps({
    point(C, k) {
      this.stream.point(C + w, k + v);
    }
  })), { stream: (C) => e.stream(x.stream(l(C))) };
}
function u1(e) {
  switch (`${e}`.toLowerCase()) {
    case "albers-usa":
      return ut(g6, 0.7463, 0.4673);
    case "albers":
      return Vi(bh, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return ut(p6, 4, 4);
    case "azimuthal-equidistant":
      return ut(b6, Ft, Ft);
    case "conic-conformal":
      return Vi(_6, Ft, Ft);
    case "conic-equal-area":
      return Vi(Eo, 6.1702, 2.9781);
    case "conic-equidistant":
      return Vi(M6, 7.312, 3.6282);
    case "equal-earth":
      return ut(k6, 5.4133, 2.6347);
    case "equirectangular":
      return ut(v6, Ft, c1);
    case "gnomonic":
      return ut(T6, 3.4641, 3.4641);
    case "identity":
      return { type: d1 };
    case "reflect-y":
      return { type: N8 };
    case "mercator":
      return ut(y6, Ft, Ft);
    case "orthographic":
      return ut(C6, 2, 2);
    case "stereographic":
      return ut(A6, 2, 2);
    case "transverse-mercator":
      return ut(E6, Ft, Ft);
    default:
      throw new Error(`unknown projection type: ${e}`);
  }
}
function E8(e, t, n, r, i) {
  if (e === !1 || e == null || typeof e == "number")
    return (o) => o;
  switch (e === !0 && (e = "frame"), `${e}`.toLowerCase()) {
    case "frame":
      return eh(t, n, r, i);
    default:
      throw new Error(`unknown projection clip type: ${e}`);
  }
}
function ut(e, t, n) {
  return {
    type: ({ width: r, height: i, rotate: o, precision: a = 0.15, clip: s }) => {
      var l, c, u;
      const f = e();
      return a != null && ((l = f.precision) == null || l.call(f, a)), o != null && ((c = f.rotate) == null || c.call(f, o)), typeof s == "number" && ((u = f.clipAngle) == null || u.call(f, s)), f.scale(Math.min(r / t, i / n)), f.translate([r / 2, i / 2]), f;
    },
    aspectRatio: n / t
  };
}
function Vi(e, t, n) {
  const { type: r, aspectRatio: i } = ut(e, t, n);
  return {
    type: (o) => {
      const { parallels: a, domain: s, width: f, height: l } = o, c = r(o);
      return a != null && (c.parallels(a), s === void 0 && c.fitSize([f, l], { type: "Sphere" })), c;
    },
    aspectRatio: i
  };
}
const d1 = Si({ stream: (e) => e }), N8 = Si(
  Ps({
    point(e, t) {
      this.stream.point(e, -t);
    }
  })
);
function R8(e, t, n, r) {
  const i = n[e], o = n[t], a = i.length, s = n[e] = new Float64Array(a).fill(NaN), f = n[t] = new Float64Array(a).fill(NaN);
  let l;
  const c = r.stream({
    point(u, d) {
      s[l] = u, f[l] = d;
    }
  });
  for (l = 0; l < a; ++l)
    c.point(i[l], o[l]);
}
function L8({ projection: e } = {}) {
  return e == null ? !1 : typeof e.stream == "function" ? !0 : (mn(e) && (e = e.type), e != null);
}
function D8(e) {
  if (typeof (e == null ? void 0 : e.stream) == "function")
    return eu;
  if (mn(e) && (e = e.type), e != null) {
    if (typeof e != "function") {
      const { aspectRatio: t } = u1(e);
      if (t)
        return t;
    }
    return eu;
  }
}
function I8(e) {
  const t = [], n = [], r = { scale: "x", value: t }, i = { scale: "y", value: n }, o = {
    point(a, s) {
      t.push(a), n.push(s);
    },
    lineStart() {
    },
    lineEnd() {
    },
    polygonStart() {
    },
    polygonEnd() {
    },
    sphere() {
    }
  };
  for (const a of e.value)
    _n(a, o);
  return [r, i];
}
const h1 = /* @__PURE__ */ new Map([
  ["accent", J5],
  ["category10", Q5],
  ["dark2", e_],
  ["observable10", t_],
  ["paired", n_],
  ["pastel1", r_],
  ["pastel2", i_],
  ["set1", o_],
  ["set2", a_],
  ["set3", s_],
  ["tableau10", f_]
]);
function O8(e) {
  return e != null && h1.has(`${e}`.toLowerCase());
}
const tu = new Map([
  ...h1,
  // diverging
  ["brbg", Pt(n0, r0)],
  ["prgn", Pt(i0, o0)],
  ["piyg", Pt(a0, s0)],
  ["puor", Pt(f0, l0)],
  ["rdbu", Pt(qs, Do)],
  ["rdgy", Pt(c0, u0)],
  ["rdylbu", Pt(Ws, Io)],
  ["rdylgn", Pt(d0, h0)],
  ["spectral", Pt(m0, g0)],
  // reversed diverging (for temperature data)
  ["burd", nu(qs, Do)],
  ["buylrd", nu(Ws, Io)],
  // sequential (single-hue)
  ["blues", Ae(U0, H0)],
  ["greens", Ae(z0, q0)],
  ["greys", Ae(W0, Y0)],
  ["oranges", Ae(Z0, K0)],
  ["purples", Ae(V0, G0)],
  ["reds", Ae(X0, j0)],
  // sequential (multi-hue)
  ["turbo", Bt(im)],
  ["viridis", Bt(om)],
  ["magma", Bt(am)],
  ["inferno", Bt(sm)],
  ["plasma", Bt(fm)],
  ["cividis", Bt(Q0)],
  ["cubehelix", Bt(J0)],
  ["warm", Bt(em)],
  ["cool", Bt(tm)],
  ["bugn", Ae(p0, b0)],
  ["bupu", Ae(y0, w0)],
  ["gnbu", Ae(_0, v0)],
  ["orrd", Ae(x0, M0)],
  ["pubu", Ae(T0, C0)],
  ["pubugn", Ae(S0, k0)],
  ["purd", Ae(A0, E0)],
  ["rdpu", Ae(N0, R0)],
  ["ylgn", Ae(I0, O0)],
  ["ylgnbu", Ae(L0, D0)],
  ["ylorbr", Ae($0, F0)],
  ["ylorrd", Ae(P0, B0)],
  // cyclical
  ["rainbow", ru(nm)],
  ["sinebow", ru(rm)]
]);
function Ae(e, t) {
  return ({ length: n }) => n === 1 ? [e[3][1]] : n === 2 ? [e[3][1], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 9 ? pt(t, n) : e[n]);
}
function Pt(e, t) {
  return ({ length: n }) => n === 2 ? [e[3][0], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 11 ? pt(t, n) : e[n]);
}
function nu(e, t) {
  return ({ length: n }) => n === 2 ? [e[3][2], e[3][0]] : (n = Math.max(3, Math.floor(n)), n > 11 ? pt((r) => t(1 - r), n) : e[n].slice().reverse());
}
function Bt(e) {
  return ({ length: t }) => pt(e, Math.max(2, Math.floor(t)));
}
function ru(e) {
  return ({ length: t }) => pt(e, Math.floor(t) + 1).slice(0, -1);
}
function m1(e) {
  const t = `${e}`.toLowerCase();
  if (!tu.has(t))
    throw new Error(`unknown ordinal scheme: ${t}`);
  return tu.get(t);
}
function da(e, t) {
  const n = m1(e), r = typeof n == "function" ? n({ length: t }) : n;
  return r.length !== t ? r.slice(0, t) : r;
}
function $8(e, t = "greys") {
  const n = /* @__PURE__ */ new Set(), [r, i] = da(t, 2);
  for (const o of e)
    if (o != null)
      if (o === !0)
        n.add(i);
      else if (o === !1)
        n.add(r);
      else
        return;
  return [...n];
}
const iu = /* @__PURE__ */ new Map([
  // diverging
  ["brbg", r0],
  ["prgn", o0],
  ["piyg", s0],
  ["puor", l0],
  ["rdbu", Do],
  ["rdgy", u0],
  ["rdylbu", Io],
  ["rdylgn", h0],
  ["spectral", g0],
  // reversed diverging (for temperature data)
  ["burd", (e) => Do(1 - e)],
  ["buylrd", (e) => Io(1 - e)],
  // sequential (single-hue)
  ["blues", H0],
  ["greens", q0],
  ["greys", Y0],
  ["purples", G0],
  ["reds", j0],
  ["oranges", K0],
  // sequential (multi-hue)
  ["turbo", im],
  ["viridis", om],
  ["magma", am],
  ["inferno", sm],
  ["plasma", fm],
  ["cividis", Q0],
  ["cubehelix", J0],
  ["warm", em],
  ["cool", tm],
  ["bugn", b0],
  ["bupu", w0],
  ["gnbu", v0],
  ["orrd", M0],
  ["pubugn", k0],
  ["pubu", C0],
  ["purd", E0],
  ["rdpu", R0],
  ["ylgnbu", D0],
  ["ylgn", O0],
  ["ylorbr", F0],
  ["ylorrd", B0],
  // cyclical
  ["rainbow", nm],
  ["sinebow", rm]
]);
function Kf(e) {
  const t = `${e}`.toLowerCase();
  if (!iu.has(t))
    throw new Error(`unknown quantitative scheme: ${t}`);
  return iu.get(t);
}
const F8 = /* @__PURE__ */ new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd"
]);
function P8(e) {
  return e != null && F8.has(`${e}`.toLowerCase());
}
const g1 = (e) => (t) => e(1 - t), Ya = [0, 1], ou = /* @__PURE__ */ new Map([
  // numbers
  ["number", $e],
  // color spaces
  ["rgb", Rn],
  ["hsl", ly],
  ["hcl", dy],
  ["lab", cy]
]);
function p1(e) {
  const t = `${e}`.toLowerCase();
  if (!ou.has(t))
    throw new Error(`unknown interpolator: ${t}`);
  return ou.get(t);
}
function Ei(e, t, n, {
  type: r,
  nice: i,
  clamp: o,
  zero: a,
  domain: s = y1(e, n),
  unknown: f,
  round: l,
  scheme: c,
  interval: u,
  range: d = ke.get(e) === Ti ? j8(n, s) : ke.get(e) === Ci ? Z8(n, s) : ke.get(e) === Ai ? Ya : void 0,
  interpolate: h = ke.get(e) === en ? c == null && d !== void 0 ? Rn : Kf(c !== void 0 ? c : r === "cyclical" ? "rainbow" : "turbo") : l ? vf : $e,
  reverse: m
}) {
  if (u = ki(u, r), (r === "cyclical" || r === "sequential") && (r = "linear"), typeof h != "function" && (h = p1(h)), m = !!m, d !== void 0) {
    const p = (s = Qe(s)).length, y = (d = Qe(d)).length;
    if (p !== y) {
      if (h.length === 1)
        throw new Error("invalid piecewise interpolator");
      h = Xo(h, d), d = void 0;
    }
  }
  if (h.length === 1 ? (m && (h = g1(h), m = !1), d === void 0 && (d = Float64Array.from(s, (p, y) => y / (s.length - 1)), d.length === 2 && (d = Ya)), t.interpolate((d === Ya ? Si : Jf)(h))) : t.interpolate(h), a) {
    const [p, y] = an(s);
    (p > 0 || y < 0) && (s = ii(s), mr(s) !== Math.sign(p) ? s[s.length - 1] = 0 : s[0] = 0);
  }
  return m && (s = uo(s)), t.domain(s).unknown(f), i && (t.nice(B8(i, r)), s = t.domain()), d !== void 0 && t.range(d), o && t.clamp(o), { type: r, domain: s, range: d, scale: t, interpolate: h, interval: u };
}
function B8(e, t) {
  return e === !0 ? void 0 : typeof e == "number" ? e : P_(e, t);
}
function U8(e, t, n) {
  return Ei(e, Lf(), t, n);
}
function H8(e, t, n) {
  return b1(e, t, { ...n, exponent: 0.5 });
}
function b1(e, t, { exponent: n = 1, ...r }) {
  return Ei(e, $h().exponent(n), t, { ...r, type: "pow" });
}
function z8(e, t, { base: n = 10, domain: r = K8(t), ...i }) {
  return Ei(e, Lh().base(n), t, { ...i, domain: r });
}
function q8(e, t, { constant: n = 1, ...r }) {
  return Ei(e, Ih().constant(n), t, r);
}
function W8(e, t, {
  range: n,
  quantiles: r = n === void 0 ? 5 : (n = [...n]).length,
  // deprecated; use n instead
  n: i = r,
  scheme: o = "rdylbu",
  domain: a = Q8(t),
  unknown: s,
  interpolate: f,
  reverse: l
}) {
  return n === void 0 && (n = f !== void 0 ? pt(f, i) : ke.get(e) === en ? da(o, i) : void 0), a.length > 0 && (a = Fh(a, n === void 0 ? { length: i } : n).quantiles()), Qf(e, t, { domain: a, range: n, reverse: l, unknown: s });
}
function Y8(e, t, {
  range: n,
  n: r = n === void 0 ? 5 : (n = [...n]).length,
  scheme: i = "rdylbu",
  domain: o = y1(e, t),
  unknown: a,
  interpolate: s,
  reverse: f
}) {
  const [l, c] = an(o);
  let u;
  return n === void 0 ? (u = lo(l, c, r), u[0] <= l && u.splice(0, 1), u[u.length - 1] >= c && u.pop(), r = u.length + 1, n = s !== void 0 ? pt(s, r) : ke.get(e) === en ? da(i, r) : void 0) : (u = pt($e(l, c), r + 1).slice(1, -1), l instanceof Date && (u = u.map((d) => new Date(d)))), mr(Qe(o)) < 0 && u.reverse(), Qf(e, t, { domain: u, range: n, reverse: f, unknown: a });
}
function Qf(e, t, {
  domain: n = [0],
  // explicit thresholds in ascending order
  unknown: r,
  scheme: i = "rdylbu",
  interpolate: o,
  range: a = o !== void 0 ? pt(o, n.length + 1) : ke.get(e) === en ? da(i, n.length + 1) : void 0,
  reverse: s
}) {
  n = Qe(n);
  const f = mr(n);
  if (!isNaN(f) && !V8(n, f))
    throw new Error(`the ${e} scale has a non-monotonic domain`);
  return s && (a = uo(a)), {
    type: "threshold",
    scale: Ph(f < 0 ? uo(n) : n, a === void 0 ? [] : a).unknown(r),
    domain: n,
    range: a
  };
}
function V8(e, t) {
  for (let n = 1, r = e.length, i = e[0]; n < r; ++n) {
    const o = li(i, i = e[n]);
    if (o !== 0 && o !== t)
      return !1;
  }
  return !0;
}
function G8(e) {
  return { type: "identity", scale: Z_(ke.get(e)) ? Eh() : (t) => t };
}
function fi(e, t = km) {
  return e.length ? [
    Gt(e, ({ value: n }) => n === void 0 ? n : Gt(n, t)),
    gt(e, ({ value: n }) => n === void 0 ? n : gt(n, t))
  ] : [0, 1];
}
function y1(e, t) {
  const n = ke.get(e);
  return (n === Ti || n === Ai || n === Ci ? X8 : fi)(t);
}
function X8(e) {
  return [0, e.length ? gt(e, ({ value: t }) => t === void 0 ? t : gt(t, km)) : 1];
}
function j8(e, t) {
  const n = e.find(({ radius: a }) => a !== void 0);
  if (n !== void 0)
    return [0, n.radius];
  const r = co(e, 0.5, ({ value: a }) => a === void 0 ? NaN : co(a, 0.25, Pf)), i = t.map((a) => 3 * Math.sqrt(a / r)), o = 30 / gt(i);
  return o < 1 ? i.map((a) => a * o) : i;
}
function Z8(e, t) {
  const n = ls(e, ({ value: o }) => o === void 0 ? NaN : ls(o, Math.abs)), r = t.map((o) => 12 * o / n), i = 60 / gt(r);
  return i < 1 ? r.map((o) => o * i) : r;
}
function K8(e) {
  for (const { value: t } of e)
    if (t !== void 0)
      for (let n of t) {
        if (n > 0)
          return fi(e, Pf);
        if (n < 0)
          return fi(e, Tm);
      }
  return [1, 10];
}
function Q8(e) {
  const t = [];
  for (const { value: n } of e)
    if (n !== void 0)
      for (const r of n)
        t.push(r);
  return t;
}
function Jf(e) {
  return (t, n) => (r) => e(t + r * (n - t));
}
function ha(e, t, n, r, {
  type: i,
  nice: o,
  clamp: a,
  domain: s = fi(r),
  unknown: f,
  pivot: l = 0,
  scheme: c,
  range: u,
  symmetric: d = !0,
  interpolate: h = ke.get(e) === en ? c == null && u !== void 0 ? Rn : Kf(c !== void 0 ? c : "rdbu") : $e,
  reverse: m
}) {
  l = +l, s = Qe(s);
  let [p, y] = s;
  if (s.length > 2 && Tn(`Warning: the diverging ${e} scale domain contains extra elements.`), li(p, y) < 0 && ([p, y] = [y, p], m = !m), p = Math.min(p, l), y = Math.max(y, l), typeof h != "function" && (h = p1(h)), u !== void 0 && (h = h.length === 1 ? Jf(h)(...u) : Xo(h, u)), m && (h = g1(h)), d) {
    const b = n.apply(l), w = b - n.apply(p), v = n.apply(y) - b;
    w < v ? p = n.invert(b - v) : w > v && (y = n.invert(b + w));
  }
  return t.domain([p, l, y]).unknown(f).interpolator(h), a && t.clamp(a), o && t.nice(o), { type: i, domain: [p, y], pivot: l, interpolate: h, scale: t };
}
function J8(e, t, n) {
  return ha(e, Qh(), r3, t, n);
}
function e3(e, t, n) {
  return w1(e, t, { ...n, exponent: 0.5 });
}
function w1(e, t, { exponent: n = 1, ...r }) {
  return ha(e, t0().exponent(n = +n), a3(n), t, {
    ...r,
    type: "diverging-pow"
  });
}
function t3(e, t, { base: n = 10, pivot: r = 1, domain: i = fi(t, r < 0 ? Tm : Pf), ...o }) {
  return ha(e, Jh().base(n = +n), i3, t, {
    domain: i,
    pivot: r,
    ...o
  });
}
function n3(e, t, { constant: n = 1, ...r }) {
  return ha(
    e,
    e0().constant(n = +n),
    s3(n),
    t,
    r
  );
}
const r3 = {
  apply(e) {
    return e;
  },
  invert(e) {
    return e;
  }
}, i3 = {
  apply: Math.log,
  invert: Math.exp
}, o3 = {
  apply(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e));
  },
  invert(e) {
    return Math.sign(e) * (e * e);
  }
};
function a3(e) {
  return e === 0.5 ? o3 : {
    apply(t) {
      return Math.sign(t) * Math.pow(Math.abs(t), e);
    },
    invert(t) {
      return Math.sign(t) * Math.pow(Math.abs(t), 1 / e);
    }
  };
}
function s3(e) {
  return {
    apply(t) {
      return Math.sign(t) * Math.log1p(Math.abs(t / e));
    },
    invert(t) {
      return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    }
  };
}
function _1(e, t, n, r) {
  return Ei(e, t, n, r);
}
function f3(e, t, n) {
  return _1(e, Z5(), t, n);
}
function l3(e, t, n) {
  return _1(e, K5(), t, n);
}
const Ni = Symbol("ordinal");
function v1(e, t, n, { type: r, interval: i, domain: o, range: a, reverse: s, hint: f }) {
  return i = ki(i, r), o === void 0 && (o = M1(n, i, e)), (r === "categorical" || r === Ni) && (r = "ordinal"), s && (o = uo(o)), o = t.domain(o).domain(), a !== void 0 && (typeof a == "function" && (a = a(o)), t.range(a)), { type: r, domain: o, range: a, scale: t, hint: f, interval: i };
}
function c3(e, t, { type: n, interval: r, domain: i, range: o, scheme: a, unknown: s, ...f }) {
  r = ki(r, n), i === void 0 && (i = M1(t, r, e));
  let l;
  if (ke.get(e) === ua)
    l = h3(t), o = o === void 0 ? m3(l) : Re(o, Gf);
  else if (ke.get(e) === en && (o === void 0 && (n === "ordinal" || n === Ni) && (o = $8(i, a), o !== void 0 && (a = void 0)), a === void 0 && o === void 0 && (a = n === "ordinal" ? "turbo" : "observable10"), a !== void 0))
    if (o !== void 0) {
      const c = Kf(a), u = o[0], d = o[1] - o[0];
      o = ({ length: h }) => pt((m) => c(u + d * m), h);
    } else
      o = m1(a);
  if (s === Us)
    throw new Error(`implicit unknown on ${e} scale is not supported`);
  return v1(e, Rf().unknown(s), t, { ...f, type: n, domain: i, range: o, hint: l });
}
function u3(e, t, { align: n = 0.5, padding: r = 0.5, ...i }) {
  return x1(N6().align(n).padding(r), t, i, e);
}
function d3(e, t, {
  align: n = 0.5,
  padding: r = 0.1,
  paddingInner: i = r,
  paddingOuter: o = e === "fx" || e === "fy" ? 0 : r,
  ...a
}) {
  return x1(
    ea().align(n).paddingInner(i).paddingOuter(o),
    t,
    a,
    e
  );
}
function x1(e, t, n, r) {
  let { round: i } = n;
  return i !== void 0 && e.round(i = !!i), e = v1(r, e, t, n), e.round = i, e;
}
function M1(e, t, n) {
  const r = new qo();
  for (const { value: i, domain: o } of e) {
    if (o !== void 0)
      return o();
    if (i !== void 0)
      for (const a of i)
        r.add(a);
  }
  if (t !== void 0) {
    const [i, o] = an(r).map(t.floor, t);
    return t.range(i, t.offset(o));
  }
  if (r.size > 1e4 && ke.get(n) === Tt)
    throw new Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);
  return ao(r, wt);
}
function au(e, t) {
  let n;
  for (const { hint: r } of e) {
    const i = r == null ? void 0 : r[t];
    if (i !== void 0) {
      if (n === void 0)
        n = i;
      else if (n !== i)
        return;
    }
  }
  return n;
}
function h3(e) {
  return {
    fill: au(e, "fill"),
    stroke: au(e, "stroke")
  };
}
function m3(e) {
  return qe(e.fill) ? w_ : y_;
}
function ef(e, {
  label: t,
  inset: n = 0,
  insetTop: r = n,
  insetRight: i = n,
  insetBottom: o = n,
  insetLeft: a = n,
  round: s,
  nice: f,
  clamp: l,
  zero: c,
  align: u,
  padding: d,
  projection: h,
  facet: { label: m = t } = {},
  ...p
} = {}) {
  const y = {};
  for (const [b, w] of e) {
    const v = p[b], x = w3(b, w, {
      round: ke.get(b) === Tt ? s : void 0,
      // only for position
      nice: f,
      clamp: l,
      zero: c,
      align: u,
      padding: d,
      projection: h,
      ...v
    });
    if (x) {
      let {
        label: C = b === "fx" || b === "fy" ? m : t,
        percent: k,
        transform: R,
        inset: T,
        insetTop: D = T !== void 0 ? T : b === "y" ? r : 0,
        // not fy
        insetRight: F = T !== void 0 ? T : b === "x" ? i : 0,
        // not fx
        insetBottom: N = T !== void 0 ? T : b === "y" ? o : 0,
        // not fy
        insetLeft: B = T !== void 0 ? T : b === "x" ? a : 0
        // not fx
      } = v || {};
      if (R == null)
        R = void 0;
      else if (typeof R != "function")
        throw new Error("invalid scale transform; not a function");
      x.percent = !!k, x.label = C === void 0 ? p3(w, x) : C, x.transform = R, b === "x" || b === "fx" ? (x.insetLeft = +B, x.insetRight = +F) : (b === "y" || b === "fy") && (x.insetTop = +D, x.insetBottom = +N), y[b] = x;
    }
  }
  return y;
}
function su(e) {
  const t = {}, n = { scales: t };
  for (const [r, i] of Object.entries(e)) {
    const { scale: o, type: a, interval: s, label: f } = i;
    t[r] = S3(i), n[r] = o, o.type = a, s != null && (o.interval = s), f != null && (o.label = f);
  }
  return n;
}
function g3(e, t) {
  const { x: n, y: r, fx: i, fy: o } = e, a = i || o ? el(t) : t;
  i && fu(i, a), o && lu(o, a);
  const s = i || o ? S1(e, t) : t;
  n && fu(n, s), r && lu(r, s);
}
function p3(e = [], t) {
  let n;
  for (const { label: r } of e)
    if (r !== void 0) {
      if (n === void 0)
        n = r;
      else if (n !== r)
        return;
    }
  if (n !== void 0)
    return !zn(t) && t.percent && (n = `${n} (%)`), { inferred: !0, toString: () => n };
}
function b3(e) {
  return Math.sign(mr(e.domain())) * Math.sign(mr(e.range()));
}
function el(e) {
  const {
    marginTop: t,
    marginRight: n,
    marginBottom: r,
    marginLeft: i,
    width: o,
    height: a,
    facet: {
      marginTop: s,
      marginRight: f,
      marginBottom: l,
      marginLeft: c
    }
  } = e;
  return {
    marginTop: Math.max(t, s),
    marginRight: Math.max(n, f),
    marginBottom: Math.max(r, l),
    marginLeft: Math.max(i, c),
    width: o,
    height: a
  };
}
function S1({ fx: e, fy: t }, n) {
  const { marginTop: r, marginRight: i, marginBottom: o, marginLeft: a, width: s, height: f } = el(n);
  return {
    marginTop: r,
    marginRight: i,
    marginBottom: o,
    marginLeft: a,
    width: e ? e.scale.bandwidth() + a + i : s,
    height: t ? t.scale.bandwidth() + r + o : f,
    facet: { width: s, height: f }
  };
}
function fu(e, t) {
  if (e.range === void 0) {
    const { insetLeft: n, insetRight: r } = e, { width: i, marginLeft: o = 0, marginRight: a = 0 } = t, s = o + n, f = i - a - r;
    e.range = [s, Math.max(s, f)], zn(e) || (e.range = T1(e)), e.scale.range(e.range);
  }
  k1(e);
}
function lu(e, t) {
  if (e.range === void 0) {
    const { insetTop: n, insetBottom: r } = e, { height: i, marginTop: o = 0, marginBottom: a = 0 } = t, s = o + n, f = i - a - r;
    e.range = [Math.max(s, f), s], zn(e) ? e.range.reverse() : e.range = T1(e), e.scale.range(e.range);
  }
  k1(e);
}
function k1(e) {
  e.round === void 0 && v3(e) && y3(e) <= 30 && e.scale.round(!0);
}
function y3({ scale: e }) {
  const t = e.domain().length, [n, r] = e.range(), i = e.paddingInner ? e.paddingInner() : 1, o = e.paddingOuter ? e.paddingOuter() : e.padding(), a = t - i, s = Math.abs(r - n) / Math.max(1, a + o * 2);
  return (s - Math.floor(s)) * a;
}
function T1(e) {
  const t = e.scale.domain().length + C1(e);
  if (!(t > 2))
    return e.range;
  const [n, r] = e.range;
  return Array.from({ length: t }, (i, o) => n + o / (t - 1) * (r - n));
}
function w3(e, t = [], n = {}) {
  const r = _3(e, t, n);
  if (n.type === void 0 && n.domain === void 0 && n.range === void 0 && n.interval == null && e !== "fx" && e !== "fy" && zn({ type: r })) {
    const i = t.map(({ value: o }) => o).filter((o) => o !== void 0);
    i.some(ct) ? Tn(
      `Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${Xn(
        r
      )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${Xn(
        r
      )}".`
    ) : i.some(H_) ? Tn(
      `Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${Xn(
        r
      )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${Xn(
        r
      )}".`
    ) : i.some(z_) && Tn(
      `Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${Xn(
        r
      )}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${Xn(
        r
      )}".`
    );
  }
  switch (n.type = r, r) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      n = Gi(t, n, Gc);
      break;
    case "identity":
      switch (ke.get(e)) {
        case Tt:
          n = Gi(t, n, Gc);
          break;
        case ua:
          n = Gi(t, n, x3);
          break;
      }
      break;
    case "utc":
    case "time":
      n = Gi(t, n, D_);
      break;
  }
  switch (r) {
    case "diverging":
      return J8(e, t, n);
    case "diverging-sqrt":
      return e3(e, t, n);
    case "diverging-pow":
      return w1(e, t, n);
    case "diverging-log":
      return t3(e, t, n);
    case "diverging-symlog":
      return n3(e, t, n);
    case "categorical":
    case "ordinal":
    case Ni:
      return c3(e, t, n);
    case "cyclical":
    case "sequential":
    case "linear":
      return U8(e, t, n);
    case "sqrt":
      return H8(e, t, n);
    case "threshold":
      return Qf(e, t, n);
    case "quantile":
      return W8(e, t, n);
    case "quantize":
      return Y8(e, t, n);
    case "pow":
      return b1(e, t, n);
    case "log":
      return z8(e, t, n);
    case "symlog":
      return q8(e, t, n);
    case "utc":
      return l3(e, t, n);
    case "time":
      return f3(e, t, n);
    case "point":
      return u3(e, t, n);
    case "band":
      return d3(e, t, n);
    case "identity":
      return G8(e);
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${r}`);
  }
}
function Xn(e) {
  return typeof e == "symbol" ? e.description : e;
}
function cu(e) {
  return typeof e == "string" ? `${e}`.toLowerCase() : e;
}
const uu = { toString: () => "projection" };
function _3(e, t, { type: n, domain: r, range: i, scheme: o, pivot: a, projection: s }) {
  if (n = cu(n), e === "fx" || e === "fy")
    return "band";
  (e === "x" || e === "y") && s != null && (n = uu);
  for (const l of t) {
    const c = cu(l.type);
    if (c !== void 0) {
      if (n === void 0)
        n = c;
      else if (n !== c)
        throw new Error(`scale incompatible with channel: ${n} !== ${c}`);
    }
  }
  if (n === uu)
    return;
  if (n !== void 0)
    return n;
  if (r === void 0 && !t.some(({ value: l }) => l !== void 0))
    return;
  const f = ke.get(e);
  if (f === Ti)
    return "sqrt";
  if (f === Ai || f === Ci)
    return "linear";
  if (f === ua)
    return "ordinal";
  if ((r || i || []).length > 2)
    return Va(f);
  if (r !== void 0) {
    if (Xc(r))
      return Va(f);
    if (ct(r))
      return "utc";
  } else {
    const l = t.map(({ value: c }) => c).filter((c) => c !== void 0);
    if (l.some(Xc))
      return Va(f);
    if (l.some(ct))
      return "utc";
  }
  if (f === en) {
    if (a != null || P8(o))
      return "diverging";
    if (O8(o))
      return "categorical";
  }
  return "linear";
}
function Va(e) {
  switch (e) {
    case Tt:
      return "point";
    case en:
      return Ni;
    default:
      return "ordinal";
  }
}
function zn({ type: e }) {
  return e === "ordinal" || e === "point" || e === "band" || e === Ni;
}
function C1({ type: e }) {
  return e === "threshold";
}
function v3({ type: e }) {
  return e === "point" || e === "band";
}
function ln(e) {
  if (e === void 0)
    return !0;
  const t = e.domain(), n = e(t[0]);
  for (let r = 1, i = t.length; r < i; ++r)
    if (e(t[r]) - n)
      return !1;
  return !0;
}
function Gi(e, { domain: t, ...n }, r) {
  var i;
  for (const o of e)
    o.value !== void 0 && (t === void 0 && (t = (i = o.value) == null ? void 0 : i.domain), o.value = r(o.value));
  return {
    domain: t === void 0 ? t : r(t),
    ...n
  };
}
function x3(e) {
  return Re(e, Gf);
}
function M3(e) {
  return (t) => {
    if (!ke.has(t = `${t}`))
      throw new Error(`unknown scale: ${t}`);
    return e[t];
  };
}
function S3({ scale: e, type: t, domain: n, range: r, interpolate: i, interval: o, transform: a, percent: s, pivot: f }) {
  if (t === "identity")
    return { type: "identity", apply: (c) => c, invert: (c) => c };
  const l = e.unknown ? e.unknown() : void 0;
  return {
    type: t,
    domain: ii(n),
    // defensive copy
    ...r !== void 0 && { range: ii(r) },
    // defensive copy
    ...a !== void 0 && { transform: a },
    ...s && { percent: s },
    // only exposed if truthy
    ...l !== void 0 && { unknown: l },
    ...o !== void 0 && { interval: o },
    // quantitative
    ...i !== void 0 && { interpolate: i },
    ...e.clamp && { clamp: e.clamp() },
    // diverging (always asymmetric; we never want to apply the symmetric transform twice)
    ...f !== void 0 && { pivot: f, symmetric: !1 },
    // log, diverging-log
    ...e.base && { base: e.base() },
    // pow, diverging-pow
    ...e.exponent && { exponent: e.exponent() },
    // symlog, diverging-symlog
    ...e.constant && { constant: e.constant() },
    // band, point
    ...e.align && { align: e.align(), round: e.round() },
    ...e.padding && (e.paddingInner ? { paddingInner: e.paddingInner(), paddingOuter: e.paddingOuter() } : { padding: e.padding() }),
    ...e.bandwidth && { bandwidth: e.bandwidth(), step: e.step() },
    // utilities
    apply: (c) => e(c),
    ...e.invert && { invert: (c) => e.invert(c) }
  };
}
function k3(e) {
  let t, n;
  return (...r) => (((n == null ? void 0 : n.length) !== r.length || n.some((i, o) => i !== r[o])) && (n = r, t = e(...r)), t);
}
const T3 = k3((e) => new Intl.NumberFormat(e));
function C3(e = "en-US") {
  const t = T3(e);
  return (n) => n != null && !isNaN(n) ? t.format(n) : void 0;
}
function A3(e) {
  return __(e, "Invalid Date");
}
function E3(e = "en-US") {
  const t = C3(e);
  return (n) => (n instanceof Date ? A3 : typeof n == "number" ? t : He)(n);
}
const gr = E3(), Xe = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : 0.5;
let N3 = 0;
function du() {
  return `plot-clip-${++N3}`;
}
function R3(e, {
  title: t,
  href: n,
  ariaLabel: r,
  ariaDescription: i,
  ariaHidden: o,
  target: a,
  fill: s,
  fillOpacity: f,
  stroke: l,
  strokeWidth: c,
  strokeOpacity: u,
  strokeLinejoin: d,
  strokeLinecap: h,
  strokeMiterlimit: m,
  strokeDasharray: p,
  strokeDashoffset: y,
  opacity: b,
  mixBlendMode: w,
  imageFilter: v,
  paintOrder: x,
  pointerEvents: C,
  shapeRendering: k,
  channels: R
}, {
  ariaLabel: T,
  fill: D = "currentColor",
  fillOpacity: F,
  stroke: N = "none",
  strokeOpacity: B,
  strokeWidth: V,
  strokeLinecap: U,
  strokeLinejoin: L,
  strokeMiterlimit: Y,
  paintOrder: q
}) {
  D === null && (s = null, f = null), N === null && (l = null, u = null), qe(D) ? !qe(N) && (!qe(s) || R != null && R.fill) && (N = "none") : qe(N) && (!qe(l) || R != null && R.stroke) && (D = "none");
  const [g, M] = Kt(s, D), [_, S] = Ge(f, F), [A, E] = Kt(l, N), [H, P] = Ge(u, B), [W, z] = Ge(b);
  ai(E) || (c === void 0 && (c = V), h === void 0 && (h = U), d === void 0 && (d = L), m === void 0 && !V_(d) && (m = Y), !ai(M) && x === void 0 && (x = q));
  const [X, I] = Ge(c);
  return D !== null && (e.fill = Ie(M, "currentColor"), e.fillOpacity = Nr(S, 1)), N !== null && (e.stroke = Ie(E, "none"), e.strokeWidth = Nr(I, 1), e.strokeOpacity = Nr(P, 1), e.strokeLinejoin = Ie(d, "miter"), e.strokeLinecap = Ie(h, "butt"), e.strokeMiterlimit = Nr(m, 4), e.strokeDasharray = Ie(p, "none"), e.strokeDashoffset = Ie(y, "0")), e.target = He(a), e.ariaLabel = He(T), e.ariaDescription = He(i), e.ariaHidden = He(o), e.opacity = Nr(z, 1), e.mixBlendMode = Ie(w, "normal"), e.imageFilter = Ie(v, "none"), e.paintOrder = Ie(x, "normal"), e.pointerEvents = Ie(C, "auto"), e.shapeRendering = Ie(k, "auto"), {
    title: { value: t, optional: !0, filter: null },
    href: { value: n, optional: !0, filter: null },
    ariaLabel: { value: r, optional: !0, filter: null },
    fill: { value: g, scale: "auto", optional: !0 },
    fillOpacity: { value: _, scale: "auto", optional: !0 },
    stroke: { value: A, scale: "auto", optional: !0 },
    strokeOpacity: { value: H, scale: "auto", optional: !0 },
    strokeWidth: { value: X, optional: !0 },
    opacity: { value: W, scale: "auto", optional: !0 }
  };
}
function L3(e, t) {
  t && e.filter((n) => Sm(t[n])).append("title").call(D3, t);
}
function D3(e, t) {
  t && e.text((n) => gr(t[n]));
}
function xr(e, { target: t, tip: n }, {
  ariaLabel: r,
  title: i,
  fill: o,
  fillOpacity: a,
  stroke: s,
  strokeOpacity: f,
  strokeWidth: l,
  opacity: c,
  href: u
}) {
  r && ce(e, "aria-label", (d) => r[d]), o && ce(e, "fill", (d) => o[d]), a && ce(e, "fill-opacity", (d) => a[d]), s && ce(e, "stroke", (d) => s[d]), f && ce(e, "stroke-opacity", (d) => f[d]), l && ce(e, "stroke-width", (d) => l[d]), c && ce(e, "opacity", (d) => c[d]), u && O3(e, (d) => u[d], t), n || L3(e, i);
}
function I3(e, t, n, r) {
  let i;
  const { clip: o = r.clip } = t;
  switch (o) {
    case "frame": {
      const { width: a, height: s, marginLeft: f, marginRight: l, marginTop: c, marginBottom: u } = n, d = du();
      i = `url(#${d})`, e = ze("svg:g", r).call(
        (h) => h.append("svg:clipPath").attr("id", d).append("rect").attr("x", f).attr("y", c).attr("width", a - l - f).attr("height", s - c - u)
      ).each(function() {
        this.appendChild(e.node()), e.node = () => this;
      });
      break;
    }
    case "sphere": {
      const { projection: a } = r;
      if (!a)
        throw new Error('the "sphere" clip option requires a projection');
      const s = du();
      i = `url(#${s})`, e.append("clipPath").attr("id", s).append("path").attr("d", dh(a)({ type: "Sphere" }));
      break;
    }
  }
  ce(e, "aria-label", t.ariaLabel), ce(e, "aria-description", t.ariaDescription), ce(e, "aria-hidden", t.ariaHidden), ce(e, "clip-path", i);
}
function qn(e, t, n, r) {
  I3(e, t, n, r), ce(e, "fill", t.fill), ce(e, "fill-opacity", t.fillOpacity), ce(e, "stroke", t.stroke), ce(e, "stroke-width", t.strokeWidth), ce(e, "stroke-opacity", t.strokeOpacity), ce(e, "stroke-linejoin", t.strokeLinejoin), ce(e, "stroke-linecap", t.strokeLinecap), ce(e, "stroke-miterlimit", t.strokeMiterlimit), ce(e, "stroke-dasharray", t.strokeDasharray), ce(e, "stroke-dashoffset", t.strokeDashoffset), ce(e, "shape-rendering", t.shapeRendering), ce(e, "filter", t.imageFilter), ce(e, "paint-order", t.paintOrder);
  const { pointerEvents: i = r.pointerSticky === !1 ? "none" : void 0 } = t;
  ce(e, "pointer-events", i);
}
function Wn(e, t) {
  $3(e, "mix-blend-mode", t.mixBlendMode), ce(e, "opacity", t.opacity);
}
function O3(e, t, n) {
  e.each(function(r) {
    const i = t(r);
    if (i != null) {
      const o = this.ownerDocument.createElementNS(or.svg, "a");
      o.setAttribute("fill", "inherit"), o.setAttributeNS(or.xlink, "href", i), n != null && o.setAttribute("target", n), this.parentNode.insertBefore(o, this).appendChild(this);
    }
  });
}
function ce(e, t, n) {
  n != null && e.attr(t, n);
}
function $3(e, t, n) {
  n != null && e.style(t, n);
}
function gn(e, t, { x: n, y: r }, i = Xe, o = Xe) {
  i += t.dx, o += t.dy, n != null && n.bandwidth && (i += n.bandwidth() / 2), r != null && r.bandwidth && (o += r.bandwidth() / 2), (i || o) && e.attr("transform", `translate(${i},${o})`);
}
function Ie(e, t) {
  if ((e = He(e)) !== t)
    return e;
}
function Nr(e, t) {
  if ((e = Me(e)) !== t)
    return e;
}
const F3 = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function tl(e) {
  if (e === void 0)
    return "plot-d6a7b5";
  if (e = `${e}`, !F3.test(e))
    throw new Error(`invalid class name: ${e}`);
  return e;
}
function nl(e, t) {
  if (typeof t == "string")
    e.property("style", t);
  else if (t != null)
    for (const n of e)
      Object.assign(n.style, t);
}
function ma({ frameAnchor: e }, { width: t, height: n, marginTop: r, marginRight: i, marginBottom: o, marginLeft: a }) {
  return [
    /left$/.test(e) ? a : /right$/.test(e) ? t - i : (a + t - i) / 2,
    /^top/.test(e) ? r : /^bottom/.test(e) ? n - o : (r + n - o) / 2
  ];
}
function P3(e, t, n = {}) {
  let r = 0.5 - Xe, i = 0.5 + Xe, o = 0.5 + Xe, a = 0.5 - Xe;
  for (const { marginTop: p, marginRight: y, marginBottom: b, marginLeft: w } of t)
    p > r && (r = p), y > i && (i = y), b > o && (o = b), w > a && (a = w);
  let {
    margin: s,
    marginTop: f = s !== void 0 ? s : r,
    marginRight: l = s !== void 0 ? s : i,
    marginBottom: c = s !== void 0 ? s : o,
    marginLeft: u = s !== void 0 ? s : a
  } = n;
  f = +f, l = +l, c = +c, u = +u;
  let {
    width: d = 640,
    height: h = B3(e, n, {
      width: d,
      marginTopDefault: r,
      marginRightDefault: i,
      marginBottomDefault: o,
      marginLeftDefault: a
    }) + Math.max(0, f - r + c - o)
  } = n;
  d = +d, h = +h;
  const m = {
    width: d,
    height: h,
    marginTop: f,
    marginRight: l,
    marginBottom: c,
    marginLeft: u
  };
  if (e.fx || e.fy) {
    let {
      margin: p,
      marginTop: y = p !== void 0 ? p : f,
      marginRight: b = p !== void 0 ? p : l,
      marginBottom: w = p !== void 0 ? p : c,
      marginLeft: v = p !== void 0 ? p : u
    } = n.facet ?? {};
    y = +y, b = +b, w = +w, v = +v, m.facet = {
      marginTop: y,
      marginRight: b,
      marginBottom: w,
      marginLeft: v
    };
  }
  return m;
}
function B3({ x: e, y: t, fy: n, fx: r }, { projection: i, aspectRatio: o }, { width: a, marginTopDefault: s, marginRightDefault: f, marginBottomDefault: l, marginLeftDefault: c }) {
  const u = n ? n.scale.domain().length : 1, d = D8(i);
  if (d) {
    const m = r ? r.scale.domain().length : 1, p = (1.1 * u - 0.1) / (1.1 * m - 0.1) * d, y = Math.max(0.1, Math.min(10, p));
    return Math.round((a - c - f) * y + s + l);
  }
  const h = t ? zn(t) ? t.scale.domain().length : Math.max(7, 17 / u) : 1;
  if (o != null) {
    if (o = +o, !(isFinite(o) && o > 0))
      throw new Error(`invalid aspectRatio: ${o}`);
    const m = hu("y", t) / (hu("x", e) * o), p = r ? r.scale.bandwidth() : 1, y = n ? n.scale.bandwidth() : 1, b = p * (a - c - f) - e.insetLeft - e.insetRight;
    return (m * b + t.insetTop + t.insetBottom) / y + s + l;
  }
  return !!(t || n) * Math.max(1, Math.min(60, h * u)) * 20 + !!r * 30 + 60;
}
function hu(e, t) {
  if (!t)
    throw new Error(`aspectRatio requires ${e} scale`);
  const { type: n, domain: r } = t;
  let i;
  switch (n) {
    case "linear":
    case "utc":
    case "time":
      i = Number;
      break;
    case "pow": {
      const s = t.scale.exponent();
      i = (f) => Math.pow(f, s);
      break;
    }
    case "log":
      i = Math.log;
      break;
    case "point":
    case "band":
      return r.length;
    default:
      throw new Error(`unsupported ${e} scale for aspectRatio: ${n}`);
  }
  const [o, a] = an(r);
  return Math.abs(i(a) - i(o));
}
function U3(e, t) {
  const { fx: n, fy: r } = ef(e, t), i = n == null ? void 0 : n.scale.domain(), o = r == null ? void 0 : r.scale.domain();
  return i && o ? kp(i, o).map(([a, s], f) => ({ x: a, y: s, i: f })) : i ? i.map((a, s) => ({ x: a, i: s })) : o ? o.map((a, s) => ({ y: a, i: s })) : void 0;
}
function H3(e, { x: t, y: n }) {
  return t && (t = tf(t)), n && (n = tf(n)), e.filter(
    t && n ? (r) => t.has(r.x) && n.has(r.y) : t ? (r) => t.has(r.x) : (r) => n.has(r.y)
  ).sort(
    t && n ? (r, i) => t.get(r.x) - t.get(i.x) || n.get(r.y) - n.get(i.y) : t ? (r, i) => t.get(r.x) - t.get(i.x) : (r, i) => n.get(r.y) - n.get(i.y)
  );
}
function rl(e, { fx: t, fy: n }) {
  const r = Jt(e), i = t == null ? void 0 : t.value, o = n == null ? void 0 : n.value;
  return t && n ? er(
    r,
    (a) => (a.fx = i[a[0]], a.fy = o[a[0]], a),
    (a) => i[a],
    (a) => o[a]
  ) : t ? er(
    r,
    (a) => (a.fx = i[a[0]], a),
    (a) => i[a]
  ) : er(
    r,
    (a) => (a.fy = o[a[0]], a),
    (a) => o[a]
  );
}
function z3(e, t, { marginTop: n, marginLeft: r }) {
  return e && t ? ({ x: i, y: o }) => `translate(${e(i) - r},${t(o) - n})` : e ? ({ x: i }) => `translate(${e(i) - r},0)` : ({ y: i }) => `translate(0,${t(i) - n})`;
}
function q3(e) {
  const t = [], n = new Uint32Array(sn(e, (r) => r.length));
  for (const r of e) {
    let i = 0;
    for (const o of e)
      r !== o && (n.set(o, i), i += o.length);
    t.push(n.slice(0, i));
  }
  return t;
}
const W3 = /* @__PURE__ */ new Map([
  ["top", Ga],
  ["right", Za],
  ["bottom", Xa],
  ["left", ja],
  ["top-left", Xi(Ga, ja)],
  ["top-right", Xi(Ga, Za)],
  ["bottom-left", Xi(Xa, ja)],
  ["bottom-right", Xi(Xa, Za)],
  ["top-empty", G3],
  ["right-empty", Z3],
  ["bottom-empty", X3],
  ["left-empty", j3],
  ["empty", K3]
]);
function Y3(e) {
  if (e == null)
    return null;
  const t = W3.get(`${e}`.toLowerCase());
  if (t)
    return t;
  throw new Error(`invalid facet anchor: ${e}`);
}
const mu = /* @__PURE__ */ new WeakMap();
function tf(e) {
  let t = mu.get(e);
  return t || mu.set(e, t = new An(Re(e, (n, r) => [n, r]))), t;
}
function pn(e, t) {
  return tf(e).get(t);
}
function V3(e, t, n) {
  return t = Yi(t), n = Yi(n), e.find((r) => Object.is(Yi(r.x), t) && Object.is(Yi(r.y), n));
}
function ga(e, t, n) {
  var r;
  return (r = V3(e, t, n)) == null ? void 0 : r.empty;
}
function Ga(e, { y: t }, { y: n }) {
  return t ? pn(t, n) === 0 : !0;
}
function Xa(e, { y: t }, { y: n }) {
  return t ? pn(t, n) === t.length - 1 : !0;
}
function ja(e, { x: t }, { x: n }) {
  return t ? pn(t, n) === 0 : !0;
}
function Za(e, { x: t }, { x: n }) {
  return t ? pn(t, n) === t.length - 1 : !0;
}
function G3(e, { y: t }, { x: n, y: r, empty: i }) {
  if (i)
    return !1;
  if (!t)
    return;
  const o = pn(t, r);
  if (o > 0)
    return ga(e, n, t[o - 1]);
}
function X3(e, { y: t }, { x: n, y: r, empty: i }) {
  if (i)
    return !1;
  if (!t)
    return;
  const o = pn(t, r);
  if (o < t.length - 1)
    return ga(e, n, t[o + 1]);
}
function j3(e, { x: t }, { x: n, y: r, empty: i }) {
  if (i)
    return !1;
  if (!t)
    return;
  const o = pn(t, n);
  if (o > 0)
    return ga(e, t[o - 1], r);
}
function Z3(e, { x: t }, { x: n, y: r, empty: i }) {
  if (i)
    return !1;
  if (!t)
    return;
  const o = pn(t, n);
  if (o < t.length - 1)
    return ga(e, t[o + 1], r);
}
function K3(e, t, { empty: n }) {
  return n;
}
function Xi(e, t) {
  return function() {
    return e.apply(null, arguments) && t.apply(null, arguments);
  };
}
function Ka(e, { channels: { fx: t, fy: n }, groups: r }) {
  return t && n ? e.map(({ x: i, y: o }) => {
    var a;
    return ((a = r.get(i)) == null ? void 0 : a.get(o)) ?? [];
  }) : t ? e.map(({ x: i }) => r.get(i) ?? []) : e.map(({ y: i }) => r.get(i) ?? []);
}
class Ot {
  constructor(t, n = {}, r = {}, i) {
    const {
      facet: o = "auto",
      facetAnchor: a,
      fx: s,
      fy: f,
      sort: l,
      dx: c = 0,
      dy: u = 0,
      margin: d = 0,
      marginTop: h = d,
      marginRight: m = d,
      marginBottom: p = d,
      marginLeft: y = d,
      clip: b = i == null ? void 0 : i.clip,
      channels: w,
      tip: v,
      render: x
    } = r;
    if (this.data = t, this.sort = oi(l) ? l : null, this.initializer = Bo(r).initializer, this.transform = this.initializer ? r.transform : Xf(r).transform, o === null || o === !1 ? this.facet = null : (this.facet = vt(o === !0 ? "include" : o, "facet", ["auto", "include", "exclude", "super"]), this.fx = t === io && typeof s == "string" ? [s] : s, this.fy = t === io && typeof f == "string" ? [f] : f), this.facetAnchor = Y3(a), n = Ym(n), w !== void 0 && (n = { ...Q3(w), ...n }), i !== void 0 && (n = { ...R3(this, r, i), ...n }), this.channels = Object.fromEntries(
      Object.entries(n).map(([C, k]) => {
        if (qf(k.value)) {
          const { value: R, label: T = k.label, scale: D = k.scale } = k.value;
          k = { ...k, label: T, scale: D, value: R };
        }
        if (t === io && typeof k.value == "string") {
          const { value: R } = k;
          k = { ...k, value: [R] };
        }
        return [C, k];
      }).filter(([C, { value: k, optional: R }]) => {
        if (k != null)
          return !0;
        if (R)
          return !1;
        throw new Error(`missing channel value: ${C}`);
      })
    ), this.dx = +c, this.dy = +u, this.marginTop = +h, this.marginRight = +m, this.marginBottom = +p, this.marginLeft = +y, this.clip = Vm(b), this.tip = J3(v), this.facet === "super") {
      if (s || f)
        throw new Error("super-faceting cannot use fx or fy");
      for (const C in this.channels) {
        const { scale: k } = n[C];
        if (!(k !== "x" && k !== "y"))
          throw new Error("super-faceting cannot use x or y");
      }
    }
    x != null && (this.render = E1(x, this.render));
  }
  initialize(t, n, r) {
    let i = Qe(this.data);
    t === void 0 && i != null && (t = [Jt(i)]);
    const o = t;
    this.transform != null && ({ facets: t, data: i } = this.transform(i, t, r), i = Qe(i)), t !== void 0 && (t.original = o);
    const a = v8(this.channels, i);
    return this.sort != null && M8(i, t, a, n, this.sort), { data: i, facets: t, channels: a };
  }
  filter(t, n, r) {
    for (const i in n) {
      const { filter: o = $n } = n[i];
      if (o !== null) {
        const a = r[i];
        t = t.filter((s) => o(a[s]));
      }
    }
    return t;
  }
  // If there is a projection, and there are paired x and y channels associated
  // with the x and y scale respectively (and not already in screen coordinates
  // as with an initializer), then apply the projection, replacing the x and y
  // values. Note that the x and y scales themselves don’t exist if there is a
  // projection, but whether the channels are associated with scales still
  // determines whether the projection should apply; think of the projection as
  // a combination xy-scale.
  project(t, n, r) {
    for (const i in t)
      if (t[i].scale === "x" && /^x|x$/.test(i)) {
        const o = i.replace(/^x|x$/, "y");
        o in t && t[o].scale === "y" && R8(i, o, n, r.projection);
      }
  }
  scale(t, n, r) {
    const i = x8(t, n);
    return r.projection && this.project(t, i, r), i;
  }
}
function A1(...e) {
  return e.plot = Ot.prototype.plot, e;
}
function E1(e, t) {
  if (e == null)
    return t === null ? void 0 : t;
  if (t == null)
    return e === null ? void 0 : e;
  if (typeof e != "function")
    throw new TypeError(`invalid render transform: ${e}`);
  if (typeof t != "function")
    throw new TypeError(`invalid render transform: ${t}`);
  return function(n, r, i, o, a, s) {
    return e.call(this, n, r, i, o, a, (f, l, c, u, d) => t.call(this, f, l, c, u, d, s));
  };
}
function Q3(e) {
  return Object.fromEntries(
    Object.entries(Ym(e)).map(([t, n]) => (n = typeof n == "string" ? { value: n, label: t } : la(n), n.filter === void 0 && n.scale == null && (n = { ...n, filter: null }), [t, n]))
  );
}
function J3(e) {
  return e === !0 ? "xy" : e === !1 || e == null ? null : typeof e == "string" ? vt(e, "tip", ["x", "y", "xy"]) : e;
}
function pa(e, t) {
  return (e == null ? void 0 : e.tip) === !0 ? { ...e, tip: t } : mn(e == null ? void 0 : e.tip) && e.tip.pointer === void 0 ? { ...e, tip: { ...e.tip, pointer: t } } : e;
}
const gu = /* @__PURE__ */ new WeakMap();
function il(e, t, { x: n, y: r, px: i, py: o, maxRadius: a = 40, channels: s, render: f, ...l } = {}) {
  return a = +a, i != null && (n ?? (n = null), s = { ...s, px: { value: i, scale: "x" } }), o != null && (r ?? (r = null), s = { ...s, py: { value: o, scale: "y" } }), {
    x: n,
    y: r,
    channels: s,
    ...l,
    // Unlike other composed transforms, the render transform must be the
    // outermost render function because it will re-render dynamically in
    // response to pointer events.
    render: E1(function(c, u, d, h, m, p) {
      m = { ...m, pointerSticky: !1 };
      const y = m.ownerSVGElement, { data: b } = m.getMarkState(this);
      let w = gu.get(y);
      w || gu.set(y, w = { sticky: !1, roots: [], renders: [] });
      let v = w.renders.push(E) - 1;
      const { x, y: C, fx: k, fy: R } = u;
      let T = k ? k(c.fx) - h.marginLeft : 0, D = R ? R(c.fy) - h.marginTop : 0;
      x != null && x.bandwidth && (T += x.bandwidth() / 2), C != null && C.bandwidth && (D += C.bandwidth() / 2);
      const F = c.fi != null;
      let N;
      if (F) {
        let z = w.facetStates;
        z || (w.facetStates = z = /* @__PURE__ */ new Map()), N = z.get(this), N || z.set(this, N = /* @__PURE__ */ new Map());
      }
      const [B, V] = ma(this, h), { px: U, py: L } = d, Y = U ? (z) => U[z] : N1(d, B), q = L ? (z) => L[z] : R1(d, V);
      let g, M, _, S;
      function A(z, X) {
        if (F)
          if (S && (S = cancelAnimationFrame(S)), z == null)
            N.delete(c.fi);
          else {
            N.set(c.fi, X), S = requestAnimationFrame(() => {
              S = null;
              for (const [I, G] of N)
                if (G < X || G === X && I < c.fi) {
                  z = null;
                  break;
                }
              E(z);
            });
            return;
          }
        E(z);
      }
      function E(z) {
        if (g === z && _ === w.sticky)
          return;
        g = z, _ = m.pointerSticky = w.sticky;
        const X = g == null ? [] : [g];
        F && (X.fx = c.fx, X.fy = c.fy, X.fi = c.fi);
        const I = p(X, u, d, h, m);
        if (M) {
          if (F) {
            const G = M.parentNode, Z = M.getAttribute("transform"), $ = I.getAttribute("transform");
            Z ? I.setAttribute("transform", Z) : I.removeAttribute("transform"), $ ? G.setAttribute("transform", $) : G.removeAttribute("transform"), I.removeAttribute("aria-label"), I.removeAttribute("aria-description"), I.removeAttribute("aria-hidden");
          }
          M.replaceWith(I);
        }
        return w.roots[v] = M = I, g == null && (N == null ? void 0 : N.size) > 1 || m.dispatchValue(g == null ? null : b[g]), I;
      }
      function H(z) {
        if (w.sticky || z.pointerType === "mouse" && z.buttons === 1)
          return;
        let [X, I] = R2(z);
        X -= T, I -= D;
        const G = X < h.marginLeft || X > h.width - h.marginRight ? 1 : e, Z = I < h.marginTop || I > h.height - h.marginBottom ? 1 : t;
        let $ = null, ue = a * a;
        for (const ne of c) {
          const me = G * (Y(ne) - X), he = Z * (q(ne) - I), we = me * me + he * he;
          we <= ue && ($ = ne, ue = we);
        }
        if ($ != null && (e !== 1 || t !== 1)) {
          const ne = Y($) - X, me = q($) - I;
          ue = ne * ne + me * me;
        }
        A($, ue);
      }
      function P(z) {
        z.pointerType === "mouse" && g != null && (w.sticky && w.roots.some((X) => X == null ? void 0 : X.contains(z.target)) || (w.sticky ? (w.sticky = !1, w.renders.forEach((X) => X(null))) : (w.sticky = !0, E(g)), z.stopImmediatePropagation()));
      }
      function W(z) {
        z.pointerType === "mouse" && (w.sticky || A(null));
      }
      return y.addEventListener("pointerenter", H), y.addEventListener("pointermove", H), y.addEventListener("pointerdown", P), y.addEventListener("pointerleave", W), E(null);
    }, f)
  };
}
function ev(e) {
  return il(1, 1, e);
}
function tv(e) {
  return il(1, 0.01, e);
}
function pu(e) {
  return il(0.01, 1, e);
}
function N1({ x1: e, x2: t, x: n = e }, r) {
  return e && t ? (i) => (e[i] + t[i]) / 2 : n ? (i) => n[i] : () => r;
}
function R1({ y1: e, y2: t, y: n = e }, r) {
  return e && t ? (i) => (e[i] + t[i]) / 2 : n ? (i) => n[i] : () => r;
}
function L1(e) {
  return zn(e) && e.interval === void 0 ? void 0 : "tabular-nums";
}
function nv(e, t) {
  let {
    label: n = e.label,
    tickSize: r = 6,
    width: i = 240,
    height: o = 44 + r,
    marginTop: a = 18,
    marginRight: s = 0,
    marginBottom: f = 16 + r,
    marginLeft: l = 0,
    style: c,
    ticks: u = (i - l - s) / 64,
    tickFormat: d,
    fontVariant: h = L1(e),
    round: m = !0,
    opacity: p,
    className: y
  } = t;
  const b = Zf(t);
  y = tl(y), p = Ge(p)[1], d === null && (d = () => null);
  const w = ze("svg", b).attr("class", `${y}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", i).attr("height", o).attr("viewBox", `0 0 ${i} ${o}`).call(
    (B) => (
      // Warning: if you edit this, change defaultClassName.
      B.append("style").text(
        `:where(.${y}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${y}-ramp text) {
  white-space: pre;
}`
      )
    )
  ).call(nl, c);
  let v = (B) => B.selectAll(".tick line").attr("y1", a + f - o), x;
  const C = m ? (B, V) => B.rangeRound(V) : (B, V) => B.range(V), { type: k, domain: R, range: T, interpolate: D, scale: F, pivot: N } = e;
  if (D) {
    const B = T === void 0 ? D : Xo(D.length === 1 ? Jf(D) : D, T);
    x = C(
      F.copy(),
      pt(
        $e(l, i - s),
        Math.min(R.length + (N !== void 0), T === void 0 ? 1 / 0 : T.length)
      )
    );
    const V = 256, U = b.document.createElement("canvas");
    U.width = V, U.height = 1;
    const L = U.getContext("2d");
    for (let Y = 0, q = V - 1; Y < V; ++Y)
      L.fillStyle = B(Y / q), L.fillRect(Y, 0, 1, 1);
    w.append("image").attr("opacity", p).attr("x", l).attr("y", a).attr("width", i - l - s).attr("height", o - a - f).attr("preserveAspectRatio", "none").attr("xlink:href", U.toDataURL());
  } else if (k === "threshold") {
    const B = R, V = d === void 0 ? (U) => U : typeof d == "string" ? wr(d) : d;
    x = C(Lf().domain([-1, T.length - 1]), [l, i - s]), w.append("g").attr("fill-opacity", p).selectAll().data(T).enter().append("rect").attr("x", (U, L) => x(L - 1)).attr("y", a).attr("width", (U, L) => x(L) - x(L - 1)).attr("height", o - a - f).attr("fill", (U) => U), u = Re(B, (U, L) => L), d = (U) => V(B[U], U);
  } else
    x = C(ea().domain(R), [l, i - s]), w.append("g").attr("fill-opacity", p).selectAll().data(R).enter().append("rect").attr("x", x).attr("y", a).attr("width", Math.max(0, x.bandwidth() - 1)).attr("height", o - a - f).attr("fill", F), v = () => {
    };
  return w.append("g").attr("transform", `translate(0,${o - f})`).call(
    Xp(x).ticks(Array.isArray(u) ? null : u, typeof d == "string" ? d : void 0).tickFormat(typeof d == "function" ? d : void 0).tickSize(r).tickValues(Array.isArray(u) ? u : null)
  ).attr("font-size", null).attr("font-family", null).attr("font-variant", Ie(h, "normal")).call(v).call((B) => B.select(".domain").remove()), n !== void 0 && w.append("text").attr("x", l).attr("y", a - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(n), w.node();
}
const D1 = Math.PI / 180;
function I1(e, { marker: t, markerStart: n = t, markerMid: r = t, markerEnd: i = t } = {}) {
  e.markerStart = Qa(n), e.markerMid = Qa(r), e.markerEnd = Qa(i);
}
function Qa(e) {
  if (e == null || e === !1)
    return null;
  if (e === !0)
    return yu;
  if (typeof e == "function")
    return e;
  switch (`${e}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return bu("auto");
    case "arrow-reverse":
      return bu("auto-start-reverse");
    case "dot":
      return rv;
    case "circle":
    case "circle-fill":
      return yu;
    case "circle-stroke":
      return iv;
    case "tick":
      return Ja("auto");
    case "tick-x":
      return Ja(90);
    case "tick-y":
      return Ja(0);
  }
  throw new Error(`invalid marker: ${e}`);
}
function bu(e) {
  return (t, n) => ze("svg:marker", n).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", e).attr("fill", "none").attr("stroke", t).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((r) => r.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function rv(e, t) {
  return ze("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "none").call((n) => n.append("circle").attr("r", 2.5)).node();
}
function yu(e, t) {
  return ze("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((n) => n.append("circle").attr("r", 3)).node();
}
function iv(e, t) {
  return ze("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", e).attr("stroke-width", 1.5).call((n) => n.append("circle").attr("r", 3)).node();
}
function Ja(e) {
  return (t, n) => ze("svg:marker", n).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", e).attr("stroke", t).call((r) => r.append("path").attr("d", "M0,-3v6")).node();
}
let ov = 0;
function O1(e, t, { stroke: n }, r) {
  return av(e, t, n && ((i) => n[i]), r);
}
function av(e, { markerStart: t, markerMid: n, markerEnd: r, stroke: i }, o = () => i, a) {
  const s = /* @__PURE__ */ new Map();
  function f(l) {
    return function(c) {
      const u = o(c);
      let d = s.get(l);
      d || s.set(l, d = /* @__PURE__ */ new Map());
      let h = d.get(u);
      if (!h) {
        const m = this.parentNode.insertBefore(l(u, a), this), p = `plot-marker-${++ov}`;
        m.setAttribute("id", p), d.set(u, h = `url(#${p})`);
      }
      return h;
    };
  }
  t && e.attr("marker-start", f(t)), n && e.attr("marker-mid", f(n)), r && e.attr("marker-end", f(r));
}
function $1({ inset: e, insetLeft: t, insetRight: n, ...r } = {}) {
  return [t, n] = P1(e, t, n), { inset: e, insetLeft: t, insetRight: n, ...r };
}
function F1({ inset: e, insetTop: t, insetBottom: n, ...r } = {}) {
  return [t, n] = P1(e, t, n), { inset: e, insetTop: t, insetBottom: n, ...r };
}
function P1(e, t, n) {
  return e === void 0 && t === void 0 && n === void 0 ? Xe ? [1, 0] : [0.5, 0.5] : [t, n];
}
function B1(e, { interval: t }) {
  return e = { ...la(e) }, e.interval = Yf(e.interval === void 0 ? t : e.interval), e;
}
function U1(e, t, n, r) {
  const { [e]: i, [`${e}1`]: o, [`${e}2`]: a } = n, { value: s, interval: f } = B1(i, n);
  if (s == null || f == null && !r)
    return n;
  const l = vr(i);
  if (f == null) {
    let h;
    const m = { transform: (p) => h || (h = Ee(p, s)), label: l };
    return {
      ...n,
      [e]: void 0,
      [`${e}1`]: o === void 0 ? m : o,
      [`${e}2`]: a === void 0 && !(o === a && r) ? m : a
    };
  }
  let c, u;
  function d(h) {
    return u !== void 0 && h === c ? u : u = Re(Ee(c = h, s), (m) => f.floor(m));
  }
  return t({
    ...n,
    [e]: void 0,
    [`${e}1`]: o === void 0 ? { transform: d, label: l } : o,
    [`${e}2`]: a === void 0 ? { transform: (h) => d(h).map((m) => f.offset(m)), label: l } : a
  });
}
function H1(e, t, n) {
  const { [e]: r } = n, { value: i, interval: o } = B1(r, n);
  return i == null || o == null ? n : t({
    ...n,
    [e]: {
      label: vr(r),
      transform: (a) => {
        const s = Re(Ee(a, i), (l) => o.floor(l)), f = s.map((l) => o.offset(l));
        return s.map(
          ct(s) ? (l, c) => l == null || isNaN(l = +l) || (c = f[c], c == null) || isNaN(c = +c) ? void 0 : new Date((l + c) / 2) : (l, c) => l == null || (c = f[c], c == null) ? NaN : (+l + +c) / 2
        );
      }
    }
  });
}
function z1(e = {}) {
  return U1("x", $1, e);
}
function q1(e = {}) {
  return U1("y", F1, e);
}
function sv(e = {}) {
  return H1("x", $1, e);
}
function fv(e = {}) {
  return H1("y", F1, e);
}
const W1 = {
  ariaLabel: "rule",
  fill: null,
  stroke: "currentColor"
};
class lv extends Ot {
  constructor(t, n = {}) {
    const { x: r, y1: i, y2: o, inset: a = 0, insetTop: s = a, insetBottom: f = a } = n;
    super(
      t,
      {
        x: { value: r, scale: "x", optional: !0 },
        y1: { value: i, scale: "y", optional: !0 },
        y2: { value: o, scale: "y", optional: !0 }
      },
      pa(n, "x"),
      W1
    ), this.insetTop = Me(s), this.insetBottom = Me(f), I1(this, n);
  }
  render(t, n, r, i, o) {
    const { x: a, y: s } = n, { x: f, y1: l, y2: c } = r, { width: u, height: d, marginTop: h, marginRight: m, marginLeft: p, marginBottom: y } = i, { insetTop: b, insetBottom: w } = this;
    return ze("svg:g", o).call(qn, this, i, o).call(gn, this, { x: f && a }, Xe, 0).call(
      (v) => v.selectAll().data(t).enter().append("line").call(Wn, this).attr("x1", f ? (x) => f[x] : (p + u - m) / 2).attr("x2", f ? (x) => f[x] : (p + u - m) / 2).attr("y1", l && !ln(s) ? (x) => l[x] + b : h + b).attr(
        "y2",
        c && !ln(s) ? s.bandwidth ? (x) => c[x] + s.bandwidth() - w : (x) => c[x] - w : d - y - w
      ).call(xr, this, r).call(O1, this, r, o)
    ).node();
  }
}
class cv extends Ot {
  constructor(t, n = {}) {
    const { x1: r, x2: i, y: o, inset: a = 0, insetRight: s = a, insetLeft: f = a } = n;
    super(
      t,
      {
        y: { value: o, scale: "y", optional: !0 },
        x1: { value: r, scale: "x", optional: !0 },
        x2: { value: i, scale: "x", optional: !0 }
      },
      pa(n, "y"),
      W1
    ), this.insetRight = Me(s), this.insetLeft = Me(f), I1(this, n);
  }
  render(t, n, r, i, o) {
    const { x: a, y: s } = n, { y: f, x1: l, x2: c } = r, { width: u, height: d, marginTop: h, marginRight: m, marginLeft: p, marginBottom: y } = i, { insetLeft: b, insetRight: w } = this;
    return ze("svg:g", o).call(qn, this, i, o).call(gn, this, { y: f && s }, 0, Xe).call(
      (v) => v.selectAll().data(t).enter().append("line").call(Wn, this).attr("x1", l && !ln(a) ? (x) => l[x] + b : p + b).attr(
        "x2",
        c && !ln(a) ? a.bandwidth ? (x) => c[x] + a.bandwidth() - w : (x) => c[x] - w : u - m - w
      ).attr("y1", f ? (x) => f[x] : (h + d - y) / 2).attr("y2", f ? (x) => f[x] : (h + d - y) / 2).call(xr, this, r).call(O1, this, r, o)
    ).node();
  }
}
function uv(e, t) {
  let { x: n = Oe, y: r, y1: i, y2: o, ...a } = q1(t);
  return [i, o] = Y1(r, i, o), new lv(e, { ...a, x: n, y1: i, y2: o });
}
function dv(e, t) {
  let { y: n = Oe, x: r, x1: i, x2: o, ...a } = z1(t);
  return [i, o] = Y1(r, i, o), new cv(e, { ...a, y: n, x1: i, x2: o });
}
function Y1(e, t, n) {
  if (e == null) {
    if (t === void 0) {
      if (n !== void 0)
        return [0, n];
    } else if (n === void 0)
      return [0, t];
  } else {
    if (t === void 0)
      return n === void 0 ? [0, e] : [e, n];
    if (n === void 0)
      return [e, t];
  }
  return [t, n];
}
function V1(e, ...t) {
  let n = t.length;
  for (let r = 0, i = !0; r < n; ++r)
    typeof t[r] != "function" && (i && (e = e.slice(), i = !1), e.splice(r, 2, e[r] + t[r] + e[r + 1]), t.splice(r, 1), --r, --n);
  return (r) => {
    let i = e[0];
    for (let o = 0; o < n; ++o)
      i += t[o](r) + e[o + 1];
    return i;
  };
}
const hv = {
  ariaLabel: "text",
  strokeLinejoin: "round",
  strokeWidth: 3,
  paintOrder: "stroke"
}, G1 = "­";
class ol extends Ot {
  constructor(t, n = {}) {
    const {
      x: r,
      y: i,
      text: o = Hn(t) && Wm(t) ? Oe : Hf,
      frameAnchor: a,
      textAnchor: s = /right$/i.test(a) ? "end" : /left$/i.test(a) ? "start" : "middle",
      lineAnchor: f = /^top/i.test(a) ? "top" : /^bottom/i.test(a) ? "bottom" : "middle",
      lineHeight: l = 1,
      lineWidth: c = 1 / 0,
      textOverflow: u,
      monospace: d,
      fontFamily: h = d ? "ui-monospace, monospace" : void 0,
      fontSize: m,
      fontStyle: p,
      fontVariant: y,
      fontWeight: b,
      rotate: w
    } = n, [v, x] = Ge(w, 0), [C, k] = wv(m);
    if (super(
      t,
      {
        x: { value: r, scale: "x", optional: !0 },
        y: { value: i, scale: "y", optional: !0 },
        fontSize: { value: C, optional: !0 },
        rotate: { value: U_(v), optional: !0 },
        text: { value: o, filter: Sm, optional: !0 }
      },
      n,
      hv
    ), this.rotate = x, this.textAnchor = Ie(s, "middle"), this.lineAnchor = vt(f, "lineAnchor", ["top", "middle", "bottom"]), this.lineHeight = +l, this.lineWidth = +c, this.textOverflow = X1(u), this.monospace = !!d, this.fontFamily = He(h), this.fontSize = k, this.fontStyle = He(p), this.fontVariant = He(y), this.fontWeight = He(b), this.frameAnchor = Vf(a), !(this.lineWidth >= 0))
      throw new Error(`invalid lineWidth: ${c}`);
    this.splitLines = K1(this), this.clipLine = Q1(this);
  }
  render(t, n, r, i, o) {
    const { x: a, y: s } = n, { x: f, y: l, rotate: c, text: u, title: d, fontSize: h } = r, { rotate: m } = this, [p, y] = ma(this, i);
    return ze("svg:g", o).call(qn, this, i, o).call(Z1, this, u, i).call(gn, this, { x: f && a, y: l && s }).call(
      (b) => b.selectAll().data(t).enter().append("text").call(Wn, this).call(mv, this, u, d).attr(
        "transform",
        V1`translate(${f ? (w) => f[w] : p},${l ? (w) => l[w] : y})${c ? (w) => ` rotate(${c[w]})` : m ? ` rotate(${m})` : ""}`
      ).call(ce, "font-size", h && ((w) => h[w])).call(xr, this, r)
    ).node();
  }
}
function X1(e) {
  return e == null ? null : vt(e, "textOverflow", [
    "clip",
    // shorthand for clip-end
    "ellipsis",
    // … ellipsis-end
    "clip-start",
    "clip-end",
    "ellipsis-start",
    "ellipsis-middle",
    "ellipsis-end"
  ]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function mv(e, t, n, r) {
  if (!n)
    return;
  const { lineAnchor: i, lineHeight: o, textOverflow: a, splitLines: s, clipLine: f } = t;
  e.each(function(l) {
    const c = s(gr(n[l]) ?? "").map(f), u = c.length, d = i === "top" ? 0.71 : i === "bottom" ? 1 - u : (164 - u * 100) / 200;
    if (u > 1) {
      let h = 0;
      for (let m = 0; m < u; ++m) {
        if (++h, !c[m])
          continue;
        const p = this.ownerDocument.createElementNS(or.svg, "tspan");
        p.setAttribute("x", 0), m === h - 1 ? p.setAttribute("y", `${(d + m) * o}em`) : p.setAttribute("dy", `${h * o}em`), p.textContent = c[m], this.appendChild(p), h = 0;
      }
    } else
      d && this.setAttribute("y", `${d * o}em`), this.textContent = c[0];
    if (a && !r && c[0] !== n[l]) {
      const h = this.ownerDocument.createElementNS(or.svg, "title");
      h.textContent = n[l], this.appendChild(h);
    }
  });
}
function j1(e, { x: t, y: n, ...r } = {}) {
  return r.frameAnchor === void 0 && ([t, n] = Hm(t, n)), new ol(e, { ...r, x: t, y: n });
}
function gv(e, { x: t = Oe, ...n } = {}) {
  return new ol(e, fv({ ...n, x: t }));
}
function pv(e, { y: t = Oe, ...n } = {}) {
  return new ol(e, sv({ ...n, y: t }));
}
function Z1(e, t, n) {
  ce(e, "text-anchor", t.textAnchor), ce(e, "font-family", t.fontFamily), ce(e, "font-size", t.fontSize), ce(e, "font-style", t.fontStyle), ce(e, "font-variant", t.fontVariant === void 0 ? bv(n) : t.fontVariant), ce(e, "font-weight", t.fontWeight);
}
function bv(e) {
  return e && (q_(e) || ct(e)) ? "tabular-nums" : void 0;
}
const yv = /* @__PURE__ */ new Set([
  // global keywords
  "inherit",
  "initial",
  "revert",
  "unset",
  // absolute keywords
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
  // relative keywords
  "larger",
  "smaller"
]);
function wv(e) {
  return e == null || typeof e == "number" ? [void 0, e] : typeof e != "string" ? [e, void 0] : (e = e.trim().toLowerCase(), yv.has(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(e) ? [void 0, e] : [e, void 0]);
}
function _v(e, t, n) {
  const r = [];
  let i, o = 0;
  for (const [a, s, f] of vv(e)) {
    if (i === void 0 && (i = a), o > i && n(e, i, s) > t && (r.push(e.slice(i, o) + (e[o - 1] === G1 ? "-" : "")), i = a), f) {
      r.push(e.slice(i, s)), i = void 0;
      continue;
    }
    o = s;
  }
  return r;
}
function* vv(e) {
  let t = 0, n = 0;
  const r = e.length;
  for (; n < r; ) {
    let i = 1;
    switch (e[n]) {
      case G1:
      case "-":
        ++n, yield [t, n, !1], t = n;
        break;
      case " ":
        for (yield [t, n, !1]; e[++n] === " "; )
          ;
        t = n;
        break;
      case "\r":
        e[n + 1] === `
` && ++i;
      case `
`:
        yield [t, n, !0], n += i, t = n;
        break;
      default:
        ++n;
        break;
    }
  }
  yield [t, n, !0];
}
const wu = {
  a: 56,
  b: 63,
  c: 57,
  d: 63,
  e: 58,
  f: 37,
  g: 62,
  h: 60,
  i: 26,
  j: 26,
  k: 55,
  l: 26,
  m: 88,
  n: 60,
  o: 60,
  p: 62,
  q: 62,
  r: 39,
  s: 54,
  t: 38,
  u: 60,
  v: 55,
  w: 79,
  x: 54,
  y: 55,
  z: 55,
  A: 69,
  B: 67,
  C: 73,
  D: 74,
  E: 61,
  F: 58,
  G: 76,
  H: 75,
  I: 28,
  J: 55,
  K: 67,
  L: 58,
  M: 89,
  N: 75,
  O: 78,
  P: 65,
  Q: 78,
  R: 67,
  S: 65,
  T: 65,
  U: 75,
  V: 69,
  W: 98,
  X: 69,
  Y: 67,
  Z: 67,
  0: 64,
  1: 48,
  2: 62,
  3: 64,
  4: 66,
  5: 63,
  6: 65,
  7: 58,
  8: 65,
  9: 65,
  " ": 29,
  "!": 32,
  '"': 49,
  "'": 31,
  "(": 39,
  ")": 39,
  ",": 31,
  "-": 48,
  ".": 31,
  "/": 32,
  ":": 31,
  ";": 31,
  "?": 52,
  "‘": 31,
  "’": 31,
  "“": 47,
  "”": 47,
  "…": 82
};
function al(e, t = 0, n = e.length) {
  let r = 0;
  for (let i = t; i < n; i = Mr(e, i))
    r += wu[e[i]] ?? (eg(e, i) ? 120 : wu.e);
  return r;
}
function sl(e, t = 0, n = e.length) {
  let r = 0;
  for (let i = t; i < n; i = Mr(e, i))
    r += eg(e, i) ? 126 : 63;
  return r;
}
function K1({ monospace: e, lineWidth: t, textOverflow: n }) {
  if (n != null || t == 1 / 0)
    return (o) => o.split(/\r\n?|\n/g);
  const r = e ? sl : al, i = t * 100;
  return (o) => _v(o, i, r);
}
function Q1({ monospace: e, lineWidth: t, textOverflow: n }) {
  if (n == null || t == 1 / 0)
    return (o) => o;
  const r = e ? sl : al, i = t * 100;
  switch (n) {
    case "clip-start":
      return (o) => vu(o, i, r, "");
    case "clip-end":
      return (o) => _u(o, i, r, "");
    case "ellipsis-start":
      return (o) => vu(o, i, r, rr);
    case "ellipsis-middle":
      return (o) => xv(o, i, r, rr);
    case "ellipsis-end":
      return (o) => _u(o, i, r, rr);
  }
}
const rr = "…";
function pr(e, t, n, r) {
  const i = [];
  let o = 0;
  for (let a = 0, s = 0, f = e.length; a < f; a = s) {
    s = Mr(e, a);
    const l = n(e, a, s);
    if (o + l > t) {
      for (o += r; o > t && a > 0; )
        s = a, a = i.pop(), o -= n(e, a, s);
      return [a, t - o];
    }
    o += l, i.push(a);
  }
  return [-1, 0];
}
function _u(e, t, n, r) {
  e = e.trim();
  const i = n(r), [o] = pr(e, t, n, i);
  return o < 0 ? e : e.slice(0, o).trimEnd() + r;
}
function xv(e, t, n, r) {
  e = e.trim();
  const i = n(e);
  if (i <= t)
    return e;
  const o = n(r) / 2, [a, s] = pr(e, t / 2, n, o), [f] = pr(e, i - t / 2 - s + o, n, -o);
  return f < 0 ? r : e.slice(0, a).trimEnd() + r + e.slice(Mr(e, f)).trimStart();
}
function vu(e, t, n, r) {
  e = e.trim();
  const i = n(e);
  if (i <= t)
    return e;
  const o = n(r), [a] = pr(e, i - t + o, n, -o);
  return a < 0 ? r : r + e.slice(Mr(e, a)).trimStart();
}
const nf = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, xu = new RegExp("\\p{Extended_Pictographic}", "uy");
function Mr(e, t) {
  return t += Mv(e, t) ? 2 : 1, kv(e, t) && (t = nf.lastIndex), Sv(e, t) ? Mr(e, t + 1) : t;
}
function J1(e, t) {
  return e.charCodeAt(t) < 128;
}
function Mv(e, t) {
  const n = e.charCodeAt(t);
  if (n >= 55296 && n < 56320) {
    const r = e.charCodeAt(t + 1);
    return r >= 56320 && r < 57344;
  }
  return !1;
}
function Sv(e, t) {
  return e.charCodeAt(t) === 8205;
}
function kv(e, t) {
  return J1(e, t) ? !1 : (nf.lastIndex = t, nf.test(e));
}
function eg(e, t) {
  return J1(e, t) ? !1 : (xu.lastIndex = t, xu.test(e));
}
const Tv = {
  ariaLabel: "vector",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinejoin: "round",
  strokeLinecap: "round"
}, tg = 3.5, Cv = tg * 5, ng = {
  draw(e, t, n) {
    const r = t * n / Cv;
    e.moveTo(0, 0), e.lineTo(0, -t), e.moveTo(-r, r - t), e.lineTo(0, -t), e.lineTo(r, r - t);
  }
}, Av = {
  draw(e, t, n) {
    e.moveTo(-n, 0), e.lineTo(0, -t), e.lineTo(n, 0);
  }
}, Ev = /* @__PURE__ */ new Map([
  ["arrow", ng],
  ["spike", Av]
]);
function Nv(e) {
  return e && typeof e.draw == "function";
}
function Rv(e) {
  if (Nv(e))
    return e;
  const t = Ev.get(`${e}`.toLowerCase());
  if (t)
    return t;
  throw new Error(`invalid shape: ${e}`);
}
class rg extends Ot {
  constructor(t, n = {}) {
    const { x: r, y: i, r: o = tg, length: a, rotate: s, shape: f = ng, anchor: l = "middle", frameAnchor: c } = n, [u, d] = Ge(a, 12), [h, m] = Ge(s, 0);
    super(
      t,
      {
        x: { value: r, scale: "x", optional: !0 },
        y: { value: i, scale: "y", optional: !0 },
        length: { value: u, scale: "length", optional: !0 },
        rotate: { value: h, optional: !0 }
      },
      n,
      Tv
    ), this.r = +o, this.length = d, this.rotate = m, this.shape = Rv(f), this.anchor = vt(l, "anchor", ["start", "middle", "end"]), this.frameAnchor = Vf(c);
  }
  render(t, n, r, i, o) {
    const { x: a, y: s } = n, { x: f, y: l, length: c, rotate: u } = r, { length: d, rotate: h, anchor: m, shape: p, r: y } = this, [b, w] = ma(this, i);
    return ze("svg:g", o).call(qn, this, i, o).call(gn, this, { x: f && a, y: l && s }).call(
      (v) => v.selectAll().data(t).enter().append("path").call(Wn, this).attr(
        "transform",
        V1`translate(${f ? (x) => f[x] : b},${l ? (x) => l[x] : w})${u ? (x) => ` rotate(${u[x]})` : h ? ` rotate(${h})` : ""}${m === "start" ? "" : m === "end" ? c ? (x) => ` translate(0,${c[x]})` : ` translate(0,${d})` : c ? (x) => ` translate(0,${c[x] / 2})` : ` translate(0,${d / 2})`}`
      ).attr(
        "d",
        c ? (x) => {
          const C = Ms();
          return p.draw(C, c[x], y), C;
        } : (() => {
          const x = Ms();
          return p.draw(x, d, y), x;
        })()
      ).call(xr, this, r)
    ).node();
  }
}
function Lv(e, t = {}) {
  const { x: n = Oe, ...r } = t;
  return new rg(e, { ...r, x: n });
}
function Dv(e, t = {}) {
  const { y: n = Oe, ...r } = t;
  return new rg(e, { ...r, y: n });
}
function bn(e, t) {
  return arguments.length < 2 && !Hn(e) && (t = e, e = null), t === void 0 && (t = {}), [e, t];
}
function ba({ anchor: e } = {}, t) {
  return e === void 0 ? t[0] : vt(e, "anchor", t);
}
function ig(e) {
  return ba(e, ["left", "right"]);
}
function og(e) {
  return ba(e, ["right", "left"]);
}
function ag(e) {
  return ba(e, ["bottom", "top"]);
}
function sg(e) {
  return ba(e, ["top", "bottom"]);
}
function Ri() {
  const [e, t] = bn(...arguments);
  return fg("y", ig(t), e, t);
}
function Iv() {
  const [e, t] = bn(...arguments);
  return fg("fy", og(t), e, t);
}
function Li() {
  const [e, t] = bn(...arguments);
  return lg("x", ag(t), e, t);
}
function Ov() {
  const [e, t] = bn(...arguments);
  return lg("fx", sg(t), e, t);
}
function fg(e, t, n, {
  color: r = "currentColor",
  opacity: i = 1,
  stroke: o = r,
  strokeOpacity: a = i,
  strokeWidth: s = 1,
  fill: f = r,
  fillOpacity: l = i,
  textAnchor: c,
  textStroke: u,
  textStrokeOpacity: d,
  textStrokeWidth: h,
  tickSize: m = e === "y" ? 6 : 0,
  tickPadding: p,
  tickRotate: y,
  x: b,
  margin: w,
  marginTop: v = w === void 0 ? 20 : w,
  marginRight: x = w === void 0 ? t === "right" ? 40 : 0 : w,
  marginBottom: C = w === void 0 ? 20 : w,
  marginLeft: k = w === void 0 ? t === "left" ? 40 : 0 : w,
  label: R,
  labelAnchor: T,
  labelArrow: D,
  labelOffset: F,
  ...N
}) {
  return m = Me(m), p = Me(p), y = Me(y), T !== void 0 && (T = vt(T, "labelAnchor", ["center", "top", "bottom"])), D = yg(D), A1(
    m && !qe(o) ? $v(e, t, n, {
      stroke: o,
      strokeOpacity: a,
      strokeWidth: s,
      tickSize: m,
      tickPadding: p,
      tickRotate: y,
      x: b,
      ...N
    }) : null,
    qe(f) ? null : Pv(e, t, n, {
      fill: f,
      fillOpacity: l,
      stroke: u,
      strokeOpacity: d,
      strokeWidth: h,
      textAnchor: c,
      tickSize: m,
      tickPadding: p,
      tickRotate: y,
      x: b,
      marginTop: v,
      marginRight: x,
      marginBottom: C,
      marginLeft: k,
      ...N
    }),
    !qe(f) && R !== null ? j1(
      [],
      mg({ fill: f, fillOpacity: l, ...N }, function(B, V, U, L, Y) {
        const q = L[e], { marginTop: g, marginRight: M, marginBottom: _, marginLeft: S } = e === "y" && Y.inset || Y, A = T ?? (q.bandwidth ? "center" : "top"), E = F ?? (t === "right" ? M : S) - 3;
        return A === "center" ? (this.textAnchor = void 0, this.lineAnchor = t === "right" ? "bottom" : "top", this.frameAnchor = t, this.rotate = -90) : (this.textAnchor = t === "right" ? "end" : "start", this.lineAnchor = A, this.frameAnchor = `${A}-${t}`, this.rotate = 0), this.dy = A === "top" ? 3 - g : A === "bottom" ? _ - 3 : 0, this.dx = t === "right" ? E : -E, this.ariaLabel = `${e}-axis label`, {
          facets: [[0]],
          channels: { text: { value: [bg(e, q, { anchor: t, label: R, labelAnchor: A, labelArrow: D })] } }
        };
      })
    ) : null
  );
}
function lg(e, t, n, {
  color: r = "currentColor",
  opacity: i = 1,
  stroke: o = r,
  strokeOpacity: a = i,
  strokeWidth: s = 1,
  fill: f = r,
  fillOpacity: l = i,
  textAnchor: c,
  textStroke: u,
  textStrokeOpacity: d,
  textStrokeWidth: h,
  tickSize: m = e === "x" ? 6 : 0,
  tickPadding: p,
  tickRotate: y,
  y: b,
  margin: w,
  marginTop: v = w === void 0 ? t === "top" ? 30 : 0 : w,
  marginRight: x = w === void 0 ? 20 : w,
  marginBottom: C = w === void 0 ? t === "bottom" ? 30 : 0 : w,
  marginLeft: k = w === void 0 ? 20 : w,
  label: R,
  labelAnchor: T,
  labelArrow: D,
  labelOffset: F,
  ...N
}) {
  return m = Me(m), p = Me(p), y = Me(y), T !== void 0 && (T = vt(T, "labelAnchor", ["center", "left", "right"])), D = yg(D), A1(
    m && !qe(o) ? Fv(e, t, n, {
      stroke: o,
      strokeOpacity: a,
      strokeWidth: s,
      tickSize: m,
      tickPadding: p,
      tickRotate: y,
      y: b,
      ...N
    }) : null,
    qe(f) ? null : Bv(e, t, n, {
      fill: f,
      fillOpacity: l,
      stroke: u,
      strokeOpacity: d,
      strokeWidth: h,
      textAnchor: c,
      tickSize: m,
      tickPadding: p,
      tickRotate: y,
      y: b,
      marginTop: v,
      marginRight: x,
      marginBottom: C,
      marginLeft: k,
      ...N
    }),
    !qe(f) && R !== null ? j1(
      [],
      mg({ fill: f, fillOpacity: l, ...N }, function(B, V, U, L, Y) {
        const q = L[e], { marginTop: g, marginRight: M, marginBottom: _, marginLeft: S } = e === "x" && Y.inset || Y, A = T ?? (q.bandwidth ? "center" : "right"), E = F ?? (t === "top" ? g : _) - 3;
        return A === "center" ? (this.frameAnchor = t, this.textAnchor = void 0) : (this.frameAnchor = `${t}-${A}`, this.textAnchor = A === "right" ? "end" : "start"), this.lineAnchor = t, this.dy = t === "top" ? -E : E, this.dx = A === "right" ? M - 3 : A === "left" ? 3 - S : 0, this.ariaLabel = `${e}-axis label`, {
          facets: [[0]],
          channels: { text: { value: [bg(e, q, { anchor: t, label: R, labelAnchor: A, labelArrow: D })] } }
        };
      })
    ) : null
  );
}
function $v(e, t, n, {
  strokeWidth: r = 1,
  strokeLinecap: i = null,
  strokeLinejoin: o = null,
  facetAnchor: a = t + (e === "y" ? "-empty" : ""),
  frameAnchor: s = t,
  tickSize: f,
  inset: l = 0,
  insetLeft: c = l,
  insetRight: u = l,
  dx: d = 0,
  y: h = e === "y" ? void 0 : null,
  ...m
}) {
  return Sr(
    Dv,
    e,
    n,
    {
      ariaLabel: `${e}-axis tick`,
      ariaHidden: !0
    },
    {
      strokeWidth: r,
      strokeLinecap: i,
      strokeLinejoin: o,
      facetAnchor: a,
      frameAnchor: s,
      y: h,
      ...m,
      dx: t === "left" ? +d - Xe + +c : +d + Xe - u,
      anchor: "start",
      length: f,
      shape: t === "left" ? Yv : Vv
    }
  );
}
function Fv(e, t, n, {
  strokeWidth: r = 1,
  strokeLinecap: i = null,
  strokeLinejoin: o = null,
  facetAnchor: a = t + (e === "x" ? "-empty" : ""),
  frameAnchor: s = t,
  tickSize: f,
  inset: l = 0,
  insetTop: c = l,
  insetBottom: u = l,
  dy: d = 0,
  x: h = e === "x" ? void 0 : null,
  ...m
}) {
  return Sr(
    Lv,
    e,
    n,
    {
      ariaLabel: `${e}-axis tick`,
      ariaHidden: !0
    },
    {
      strokeWidth: r,
      strokeLinejoin: o,
      strokeLinecap: i,
      facetAnchor: a,
      frameAnchor: s,
      x: h,
      ...m,
      dy: t === "bottom" ? +d - Xe - u : +d + Xe + +c,
      anchor: "start",
      length: f,
      shape: t === "bottom" ? qv : Wv
    }
  );
}
function Pv(e, t, n, {
  facetAnchor: r = t + (e === "y" ? "-empty" : ""),
  frameAnchor: i = t,
  tickSize: o,
  tickRotate: a = 0,
  tickPadding: s = Math.max(3, 9 - o) + (Math.abs(a) > 60 ? 4 * Math.cos(a * D1) : 0),
  text: f,
  textAnchor: l = Math.abs(a) > 60 ? "middle" : t === "left" ? "end" : "start",
  lineAnchor: c = a > 60 ? "top" : a < -60 ? "bottom" : "middle",
  fontVariant: u,
  inset: d = 0,
  insetLeft: h = d,
  insetRight: m = d,
  dx: p = 0,
  y = e === "y" ? void 0 : null,
  ...b
}) {
  return Sr(
    pv,
    e,
    n,
    { ariaLabel: `${e}-axis tick label` },
    {
      facetAnchor: r,
      frameAnchor: i,
      text: f,
      textAnchor: l,
      lineAnchor: c,
      fontVariant: u,
      rotate: a,
      y,
      ...b,
      dx: t === "left" ? +p - o - s + +h : +p + +o + +s - m
    },
    function(w, v, x, C, k) {
      u === void 0 && (this.fontVariant = pg(w)), f === void 0 && (k.text = gg(w, v, x, C, t));
    }
  );
}
function Bv(e, t, n, {
  facetAnchor: r = t + (e === "x" ? "-empty" : ""),
  frameAnchor: i = t,
  tickSize: o,
  tickRotate: a = 0,
  tickPadding: s = Math.max(3, 9 - o) + (Math.abs(a) >= 10 ? 4 * Math.cos(a * D1) : 0),
  text: f,
  textAnchor: l = Math.abs(a) >= 10 ? a < 0 ^ t === "bottom" ? "start" : "end" : "middle",
  lineAnchor: c = Math.abs(a) >= 10 ? "middle" : t === "bottom" ? "top" : "bottom",
  fontVariant: u,
  inset: d = 0,
  insetTop: h = d,
  insetBottom: m = d,
  dy: p = 0,
  x: y = e === "x" ? void 0 : null,
  ...b
}) {
  return Sr(
    gv,
    e,
    n,
    { ariaLabel: `${e}-axis tick label` },
    {
      facetAnchor: r,
      frameAnchor: i,
      text: f === void 0 ? null : f,
      textAnchor: l,
      lineAnchor: c,
      fontVariant: u,
      rotate: a,
      x: y,
      ...b,
      dy: t === "bottom" ? +p + +o + +s - m : +p - o - s + +h
    },
    function(w, v, x, C, k) {
      u === void 0 && (this.fontVariant = pg(w)), f === void 0 && (k.text = gg(w, v, x, C, t));
    }
  );
}
function fl() {
  const [e, t] = bn(...arguments);
  return ug("y", ig(t), e, t);
}
function Uv() {
  const [e, t] = bn(...arguments);
  return ug("fy", og(t), e, t);
}
function cg() {
  const [e, t] = bn(...arguments);
  return dg("x", ag(t), e, t);
}
function Hv() {
  const [e, t] = bn(...arguments);
  return dg("fx", sg(t), e, t);
}
function ug(e, t, n, {
  y: r = e === "y" ? void 0 : null,
  x: i = null,
  x1: o = t === "left" ? i : null,
  x2: a = t === "right" ? i : null,
  ...s
}) {
  return Sr(dv, e, n, { ariaLabel: `${e}-grid`, ariaHidden: !0 }, { y: r, x1: o, x2: a, ...hg(s) });
}
function dg(e, t, n, {
  x: r = e === "x" ? void 0 : null,
  y: i = null,
  y1: o = t === "top" ? i : null,
  y2: a = t === "bottom" ? i : null,
  ...s
}) {
  return Sr(uv, e, n, { ariaLabel: `${e}-grid`, ariaHidden: !0 }, { x: r, y1: o, y2: a, ...hg(s) });
}
function hg({
  color: e = "currentColor",
  opacity: t = 0.1,
  stroke: n = e,
  strokeOpacity: r = t,
  strokeWidth: i = 1,
  ...o
}) {
  return { stroke: n, strokeOpacity: r, strokeWidth: i, ...o };
}
function mg({
  fill: e,
  fillOpacity: t,
  fontFamily: n,
  fontSize: r,
  fontStyle: i,
  fontVariant: o,
  fontWeight: a,
  monospace: s,
  pointerEvents: f,
  shapeRendering: l,
  clip: c = !1
}, u) {
  return [, e] = Kt(e), [, t] = Ge(t), {
    facet: "super",
    x: null,
    y: null,
    fill: e,
    fillOpacity: t,
    fontFamily: n,
    fontSize: r,
    fontStyle: i,
    fontVariant: o,
    fontWeight: a,
    monospace: s,
    pointerEvents: f,
    shapeRendering: l,
    clip: c,
    initializer: u
  };
}
function Sr(e, t, n, r, i, o) {
  let a;
  function s(c, u, d, h, m, p) {
    const y = c == null && (t === "fx" || t === "fy"), { [t]: b } = h;
    if (!b)
      throw new Error(`missing scale: ${t}`);
    const w = b.domain();
    let { interval: v, ticks: x, tickFormat: C, tickSpacing: k = t === "x" ? 80 : 35 } = i;
    if (typeof x == "string" && wg(b) && (v = x, x = void 0), x === void 0 && (x = ki(v, b.type) ?? zv(b, k)), c == null) {
      if (Hn(x))
        c = Qe(x);
      else if (B_(x))
        c = es(x, ...an(w));
      else if (b.interval) {
        let T = b.interval;
        if (b.ticks) {
          const [D, F] = an(w), N = (F - D) / T[Mi];
          T = qc(T, N / x) ?? T, c = es(T, D, F);
        } else {
          c = w;
          const D = c.length;
          T = qc(T, D / x) ?? T, T !== b.interval && (c = es(T, ...an(c)));
        }
        if (T === b.interval) {
          const D = Math.round(c.length / x);
          D > 1 && (c = c.filter((F, N) => N % D === 0));
        }
      } else
        b.ticks ? c = b.ticks(x) : c = w;
      if (!b.ticks && c.length && c !== w) {
        const T = new qo(w);
        c = c.filter((D) => T.has(D)), c.length || Tn(`Warning: the ${t}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
      }
      t === "y" || t === "x" ? u = [Jt(c)] : a[t] = { scale: t, value: Oe };
    }
    o == null || o.call(this, b, c, x, C, a);
    const R = Object.fromEntries(
      Object.entries(a).map(([T, D]) => [T, { ...D, value: Ee(c, D.value) }])
    );
    return y && (u = p.filterFacets(c, R)), { data: c, facets: u, channels: R };
  }
  const f = Bo(i).initializer, l = e(n, Bo({ ...i, initializer: s }, f));
  return n == null ? (a = l.channels, l.channels = {}) : a = {}, r !== void 0 && Object.assign(l, r), l.clip === void 0 && (l.clip = !1), l;
}
function zv(e, t) {
  const [n, r] = an(e.range());
  return (r - n) / t;
}
function gg(e, t, n, r, i) {
  return { value: ll(e, t, n, r, i) };
}
function ll(e, t, n, r, i) {
  return typeof r == "function" ? r : r === void 0 && t && ct(t) ? T_(e.type, t, i) ?? gr : e.tickFormat ? e.tickFormat(typeof n == "number" ? n : null, r) : r === void 0 ? gr : typeof r == "string" ? (ct(e.domain()) ? xi : wr)(r) : Si(r);
}
function es(e, t, n) {
  return e.range(t, e.offset(e.floor(n)));
}
const qv = {
  draw(e, t) {
    e.moveTo(0, 0), e.lineTo(0, t);
  }
}, Wv = {
  draw(e, t) {
    e.moveTo(0, 0), e.lineTo(0, -t);
  }
}, Yv = {
  draw(e, t) {
    e.moveTo(0, 0), e.lineTo(-t, 0);
  }
}, Vv = {
  draw(e, t) {
    e.moveTo(0, 0), e.lineTo(t, 0);
  }
};
function pg(e) {
  return e.bandwidth && !e.interval ? void 0 : "tabular-nums";
}
function bg(e, t, { anchor: n, label: r = t.label, labelAnchor: i, labelArrow: o } = {}) {
  if (!(r == null || r.inferred && wg(t) && /^(date|time|year)$/i.test(r))) {
    if (r = String(r), o === "auto" && (o = (!t.bandwidth || t.interval) && !/[↑↓→←]/.test(r)), !o)
      return r;
    if (o === !0) {
      const a = b3(t);
      a && (o = /x$/.test(e) || i === "center" ? /x$/.test(e) === a < 0 ? "left" : "right" : a < 0 ? "up" : "down");
    }
    switch (o) {
      case "left":
        return `← ${r}`;
      case "right":
        return `${r} →`;
      case "up":
        return n === "right" ? `${r} ↑` : `↑ ${r}`;
      case "down":
        return n === "right" ? `${r} ↓` : `↓ ${r}`;
    }
    return r;
  }
}
function yg(e = "auto") {
  return qe(e) ? !1 : typeof e == "boolean" ? e : vt(e, "labelArrow", ["auto", "up", "right", "down", "left"]);
}
function wg(e) {
  return ct(e.domain());
}
function Mu(e, t) {
  if (t == null)
    return t;
  const n = e(t);
  if (!n)
    throw new Error(`scale not found: ${t}`);
  return n;
}
function Gv(e, { opacity: t, ...n } = {}) {
  if (!zn(e) && !C1(e))
    throw new Error(`swatches legend requires ordinal or threshold color scale (not ${e.type})`);
  return _g(
    e,
    n,
    (r, i, o, a) => r.append("svg").attr("width", o).attr("height", a).attr("fill", i.scale).attr("fill-opacity", Ge(t)[1]).append("rect").attr("width", "100%").attr("height", "100%")
  );
}
function Xv(e, {
  fill: t = ((l) => (l = e.hint) == null ? void 0 : l.fill)() !== void 0 ? e.hint.fill : "none",
  fillOpacity: n = 1,
  stroke: r = ((c) => (c = e.hint) == null ? void 0 : c.stroke)() !== void 0 ? e.hint.stroke : qe(t) ? "currentColor" : "none",
  strokeOpacity: i = 1,
  strokeWidth: o = 1.5,
  r: a = 4.5,
  ...s
} = {}, f) {
  const [u, d] = Kt(t), [h, m] = Kt(r), p = Mu(f, u), y = Mu(f, h), b = a * a * Math.PI;
  return n = Ge(n)[1], i = Ge(i)[1], o = Ge(o)[1], _g(
    e,
    s,
    (w, v, x, C) => w.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", x).attr("height", C).attr("fill", u === "color" ? (k) => p.scale(k) : d).attr("fill-opacity", n).attr("stroke", h === "color" ? (k) => y.scale(k) : m).attr("stroke-opacity", i).attr("stroke-width", o).append("path").attr("d", (k) => {
      const R = Ms();
      return e.scale(k).draw(R, b), R;
    })
  );
}
function _g(e, t = {}, n) {
  let {
    columns: r,
    tickFormat: i,
    fontVariant: o = L1(e),
    // TODO label,
    swatchSize: a = 15,
    swatchWidth: s = a,
    swatchHeight: f = a,
    marginLeft: l = 0,
    className: c,
    style: u,
    width: d
  } = t;
  const h = Zf(t);
  c = tl(c), i = ll(e.scale, e.domain, void 0, i);
  const m = ze("div", h).attr(
    "class",
    `${c}-swatches ${c}-swatches-${r != null ? "columns" : "wrap"}`
  );
  let p;
  return r != null ? (p = `:where(.${c}-swatches-columns .${c}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${c}-swatches-columns .${c}-swatch::before) {
  flex-shrink: 0;
}
:where(.${c}-swatches-columns .${c}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, m.style("columns", r).selectAll().data(e.domain).enter().append("div").attr("class", `${c}-swatch`).call(n, e, s, f).call(
    (y) => y.append("div").attr("class", `${c}-swatch-label`).attr("title", i).text(i)
  )) : (p = `:where(.${c}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${c}-swatches-wrap .${c}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`, m.selectAll().data(e.domain).enter().append("span").attr("class", `${c}-swatch`).call(n, e, s, f).append(function() {
    return this.ownerDocument.createTextNode(i.apply(this, arguments));
  })), m.call(
    (y) => y.insert("style", "*").text(
      `:where(.${c}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${c}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${p}`
    )
  ).style("margin-left", l ? `${+l}px` : null).style("width", d === void 0 ? null : `${+d}px`).style("font-variant", Ie(o, "normal")).call(nl, u).node();
}
const rf = /* @__PURE__ */ new Map([
  ["symbol", Xv],
  ["color", xg],
  ["opacity", Zv]
]);
function jv(e, t, n = {}) {
  return (r, i) => {
    if (!rf.has(r))
      throw new Error(`unknown legend type: ${r}`);
    if (r in e)
      return rf.get(r)(e[r], vg(t, n[r], i), (o) => e[o]);
  };
}
function vg({ className: e, ...t }, { label: n, ticks: r, tickFormat: i } = {}, o) {
  return G_(o, { className: e, ...t }, { label: n, ticks: r, tickFormat: i });
}
function xg(e, { legend: t = !0, ...n }) {
  if (t === !0 && (t = e.type === "ordinal" ? "swatches" : "ramp"), e.domain !== void 0)
    switch (`${t}`.toLowerCase()) {
      case "swatches":
        return Gv(e, n);
      case "ramp":
        return nv(e, n);
      default:
        throw new Error(`unknown legend type: ${t}`);
    }
}
function Zv({ type: e, interpolate: t, ...n }, { legend: r = !0, color: i = fn(0, 0, 0), ...o }) {
  if (!t)
    throw new Error(`${e} opacity scales are not supported`);
  if (r === !0 && (r = "ramp"), `${r}`.toLowerCase() !== "ramp")
    throw new Error(`${r} opacity legends are not supported`);
  return xg({ type: e, ...n, interpolate: Kv(i) }, { legend: r, ...o });
}
function Kv(e) {
  const { r: t, g: n, b: r } = fn(e) || fn(0, 0, 0);
  return (i) => `rgba(${t},${n},${r},${i})`;
}
function Qv(e, t, n) {
  const r = [];
  for (const [i, o] of rf) {
    const a = n[i];
    if (a != null && a.legend && i in e) {
      const s = o(e[i], vg(t, e[i], a), (f) => e[f]);
      s != null && r.push(s);
    }
  }
  return r;
}
const Jv = {
  ariaLabel: "frame",
  fill: "none",
  stroke: "currentColor",
  clip: !1
}, e4 = {
  ariaLabel: "frame",
  fill: null,
  stroke: "currentColor",
  strokeLinecap: "square",
  clip: !1
};
class t4 extends Ot {
  constructor(t = {}) {
    const {
      anchor: n = null,
      inset: r = 0,
      insetTop: i = r,
      insetRight: o = r,
      insetBottom: a = r,
      insetLeft: s = r,
      rx: f,
      ry: l
    } = t;
    super(io, void 0, t, n == null ? Jv : e4), this.anchor = $m(n, "anchor", ["top", "right", "bottom", "left"]), this.insetTop = Me(i), this.insetRight = Me(o), this.insetBottom = Me(a), this.insetLeft = Me(s), this.rx = Me(f), this.ry = Me(l);
  }
  render(t, n, r, i, o) {
    const { marginTop: a, marginRight: s, marginBottom: f, marginLeft: l, width: c, height: u } = i, { anchor: d, insetTop: h, insetRight: m, insetBottom: p, insetLeft: y, rx: b, ry: w } = this, v = l + y, x = c - s - m, C = a + h, k = u - f - p;
    return ze(d ? "svg:line" : "svg:rect", o).datum(0).call(qn, this, i, o).call(Wn, this).call(xr, this, r).call(gn, this, {}).call(
      d === "left" ? (R) => R.attr("x1", v).attr("x2", v).attr("y1", C).attr("y2", k) : d === "right" ? (R) => R.attr("x1", x).attr("x2", x).attr("y1", C).attr("y2", k) : d === "top" ? (R) => R.attr("x1", v).attr("x2", x).attr("y1", C).attr("y2", C) : d === "bottom" ? (R) => R.attr("x1", v).attr("x2", x).attr("y1", k).attr("y2", k) : (R) => R.attr("x", v).attr("y", C).attr("width", x - v).attr("height", k - C).attr("rx", b).attr("ry", w)
    ).node();
  }
}
function n4(e) {
  return new t4(e);
}
const ts = {
  ariaLabel: "tip",
  fill: "var(--plot-background)",
  stroke: "currentColor"
}, r4 = /* @__PURE__ */ new Set(["geometry", "href", "src", "ariaLabel", "scales"]);
class i4 extends Ot {
  constructor(t, n = {}) {
    n.tip && (n = { ...n, tip: !1 }), n.title === void 0 && Hn(t) && Wm(t) && (n = { ...n, title: Oe });
    const {
      x: r,
      y: i,
      x1: o,
      x2: a,
      y1: s,
      y2: f,
      anchor: l,
      preferredAnchor: c = "bottom",
      monospace: u,
      fontFamily: d = u ? "ui-monospace, monospace" : void 0,
      fontSize: h,
      fontStyle: m,
      fontVariant: p,
      fontWeight: y,
      lineHeight: b = 1,
      lineWidth: w = 20,
      frameAnchor: v,
      format: x,
      textAnchor: C = "start",
      textOverflow: k,
      textPadding: R = 8,
      title: T,
      pointerSize: D = 12,
      pathFilter: F = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))"
    } = n;
    super(
      t,
      {
        x: { value: o != null && a != null ? null : r, scale: "x", optional: !0 },
        // ignore midpoint
        y: { value: s != null && f != null ? null : i, scale: "y", optional: !0 },
        // ignore midpoint
        x1: { value: o, scale: "x", optional: a == null },
        y1: { value: s, scale: "y", optional: f == null },
        x2: { value: a, scale: "x", optional: o == null },
        y2: { value: f, scale: "y", optional: s == null },
        title: { value: T, optional: !0 }
        // filter: defined
      },
      n,
      ts
    ), this.anchor = js(l, "anchor"), this.preferredAnchor = js(c, "preferredAnchor"), this.frameAnchor = Vf(v), this.textAnchor = Ie(C, "middle"), this.textPadding = +R, this.pointerSize = +D, this.pathFilter = He(F), this.lineHeight = +b, this.lineWidth = +w, this.textOverflow = X1(k), this.monospace = !!u, this.fontFamily = He(d), this.fontSize = Me(h), this.fontStyle = He(m), this.fontVariant = He(p), this.fontWeight = He(y);
    for (const N in ts)
      N in this.channels && (this[N] = ts[N]);
    this.splitLines = K1(this), this.clipLine = Q1(this), this.format = { ...x };
  }
  render(t, n, r, i, o) {
    const a = this, { x: s, y: f, fx: l, fy: c } = n, { ownerSVGElement: u, document: d } = o, { anchor: h, monospace: m, lineHeight: p, lineWidth: y } = this, { textPadding: b, pointerSize: w, pathFilter: v } = this, { marginTop: x, marginLeft: C } = i, { x1: k, y1: R, x2: T, y2: D, x: F = k ?? T, y: N = R ?? D } = r, B = l ? l(t.fx) - C : 0, V = c ? c(t.fy) - x : 0, [U, L] = ma(this, i), Y = N1(r, U), q = R1(r, L), g = m ? sl : al, M = g(rr);
    let _, S;
    "title" in r ? (_ = r.channels, S = c4) : (_ = l4.call(this, r, n), S = u4);
    const A = ze("svg:g", o).call(qn, this, i, o).call(Z1, this).call(gn, this, { x: F && s, y: N && f }).call(
      (P) => P.selectAll().data(t).enter().append("g").attr("transform", (W) => `translate(${Math.round(Y(W))},${Math.round(q(W))})`).call(Wn, this).call((W) => W.append("path").attr("filter", v)).call(
        (W) => W.append("text").each(function(z) {
          const X = zr(this);
          this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
          const I = S.call(a, z, t, _, n, r);
          if (typeof I == "string")
            for (const G of a.splitLines(I))
              E(X, { value: a.clipLine(G) });
          else {
            const G = /* @__PURE__ */ new Set();
            for (const Z of I) {
              const { label: $ = "" } = Z;
              $ && G.has($) || (G.add($), E(X, Z));
            }
          }
        })
      )
    );
    function E(P, { label: W, value: z, color: X, opacity: I }) {
      W ?? (W = ""), z ?? (z = "");
      const G = X != null || I != null;
      let Z, $ = y * 100;
      const [ue] = pr(W, $, g, M);
      if (ue >= 0)
        W = W.slice(0, ue).trimEnd() + rr, Z = z.trim(), z = "";
      else {
        (W || !z && !G) && (z = " " + z);
        const [me] = pr(z, $ - g(W), g, M);
        me >= 0 && (Z = z.trim(), z = z.slice(0, me).trimEnd() + rr);
      }
      const ne = P.append("tspan").attr("x", 0).attr("dy", `${p}em`).text("​");
      W && ne.append("tspan").attr("font-weight", "bold").text(W), z && ne.append(() => d.createTextNode(z)), G && ne.append("tspan").text(" ■").attr("fill", X).attr("fill-opacity", I).style("user-select", "none"), Z && ne.append("title").text(Z);
    }
    function H() {
      const { width: P, height: W } = i.facet ?? i;
      A.selectChildren().each(function(z) {
        let { x: X, width: I, height: G } = this.getBBox();
        I = Math.round(I), G = Math.round(G);
        let Z = h;
        if (Z === void 0) {
          const ne = Y(z) + B, me = q(z) + V, he = ne + I + w + b * 2 < P, we = ne - I - w - b * 2 > 0, xt = me + G + w + b * 2 < W, yn = me - G - w - b * 2 > 0;
          Z = he && we ? xt && yn ? a.preferredAnchor : yn ? "bottom" : "top" : xt && yn ? he ? "left" : "right" : (he || we) && (xt || yn) ? `${yn ? "bottom" : "top"}-${he ? "left" : "right"}` : a.preferredAnchor;
        }
        const $ = this.firstChild, ue = this.lastChild;
        if ($.setAttribute("d", f4(Z, w, b, I, G)), X)
          for (const ne of ue.childNodes)
            ne.setAttribute("x", -X);
        ue.setAttribute("y", `${+a4(Z, ue.childNodes.length, p).toFixed(6)}em`), ue.setAttribute("transform", `translate(${s4(Z, w, b, I, G)})`);
      }), A.attr("visibility", null);
    }
    return t.length && (A.attr("visibility", "hidden"), u.isConnected ? Promise.resolve().then(H) : typeof requestAnimationFrame < "u" && requestAnimationFrame(H)), A.node();
  }
}
function o4(e, { x: t, y: n, ...r } = {}) {
  return r.frameAnchor === void 0 && ([t, n] = Hm(t, n)), new i4(e, { ...r, x: t, y: n });
}
function a4(e, t, n) {
  return /^top(?:-|$)/.test(e) ? 0.94 - n : -0.29 - t * n;
}
function s4(e, t, n, r, i) {
  switch (e) {
    case "middle":
      return [-r / 2, i / 2];
    case "top-left":
      return [n, t + n];
    case "top":
      return [-r / 2, t / 2 + n];
    case "top-right":
      return [-r - n, t + n];
    case "right":
      return [-t / 2 - r - n, i / 2];
    case "bottom-left":
      return [n, -t - n];
    case "bottom":
      return [-r / 2, -t / 2 - n];
    case "bottom-right":
      return [-r - n, -t - n];
    case "left":
      return [n + t / 2, i / 2];
  }
}
function f4(e, t, n, r, i) {
  const o = r + n * 2, a = i + n * 2;
  switch (e) {
    case "middle":
      return `M${-o / 2},${-a / 2}h${o}v${a}h${-o}z`;
    case "top-left":
      return `M0,0l${t},${t}h${o - t}v${a}h${-o}z`;
    case "top":
      return `M0,0l${t / 2},${t / 2}h${(o - t) / 2}v${a}h${-o}v${-a}h${(o - t) / 2}z`;
    case "top-right":
      return `M0,0l${-t},${t}h${t - o}v${a}h${o}z`;
    case "right":
      return `M0,0l${-t / 2},${-t / 2}v${t / 2 - a / 2}h${-o}v${a}h${o}v${t / 2 - a / 2}z`;
    case "bottom-left":
      return `M0,0l${t},${-t}h${o - t}v${-a}h${-o}z`;
    case "bottom":
      return `M0,0l${t / 2},${-t / 2}h${(o - t) / 2}v${-a}h${-o}v${a}h${(o - t) / 2}z`;
    case "bottom-right":
      return `M0,0l${-t},${-t}h${t - o}v${-a}h${o}z`;
    case "left":
      return `M0,0l${t / 2},${-t / 2}v${t / 2 - a / 2}h${o}v${a}h${-o}v${t / 2 - a / 2}z`;
  }
}
function l4({ channels: e }, t) {
  var i, o;
  const n = {};
  let r = this.format;
  r = Su(r, e, "x"), r = Su(r, e, "y"), this.format = r;
  for (const a in r) {
    const s = r[a];
    if (!(s === null || s === !1))
      if (a === "fx" || a === "fy")
        n[a] = !0;
      else {
        const f = Jc(e, a);
        f && (n[a] = f);
      }
  }
  for (const a in e) {
    if (a in n || a in r || r4.has(a))
      continue;
    const s = Jc(e, a);
    s && (n[a] = s);
  }
  this.facet && (t.fx && !("fx" in r) && (n.fx = !0), t.fy && !("fy" in r) && (n.fy = !0));
  for (const a in n) {
    const s = this.format[a];
    if (typeof s == "string") {
      const f = ((i = n[a]) == null ? void 0 : i.value) ?? ((o = t[a]) == null ? void 0 : o.domain()) ?? [];
      this.format[a] = (ct(f) ? xi : wr)(s);
    } else if (s === void 0 || s === !0) {
      const f = t[a];
      this.format[a] = f != null && f.bandwidth ? ll(f, f.domain()) : gr;
    }
  }
  return n;
}
function Su(e, t, n) {
  if (!(n in e))
    return e;
  const r = `${n}1`, i = `${n}2`;
  if ((r in e || !(r in t)) && (i in e || !(i in t)))
    return e;
  const o = Object.entries(e), a = e[n];
  return o.splice(o.findIndex(([s]) => s === n) + 1, 0, [r, a], [i, a]), Object.fromEntries(o);
}
function c4(e, t, { title: n }) {
  return gr(n.value[e], e);
}
function* u4(e, t, n, r, i) {
  for (const o in n) {
    if (o === "fx" || o === "fy") {
      yield {
        label: Uo(r, n, o),
        value: this.format[o](t[o], e)
      };
      continue;
    }
    if (o === "x1" && "x2" in n || o === "y1" && "y2" in n)
      continue;
    const a = n[o];
    if (o === "x2" && "x1" in n)
      yield {
        label: Tu(r, n, "x"),
        value: ku(this.format.x2, n.x1, a, e)
      };
    else if (o === "y2" && "y1" in n)
      yield {
        label: Tu(r, n, "y"),
        value: ku(this.format.y2, n.y1, a, e)
      };
    else {
      const s = a.value[e], f = a.scale;
      if (!$n(s) && f == null)
        continue;
      yield {
        label: Uo(r, n, o),
        value: this.format[o](s, e),
        color: f === "color" ? i[o][e] : null,
        opacity: f === "opacity" ? i[o][e] : null
      };
    }
  }
}
function ku(e, t, n, r) {
  var i;
  return (i = n.hint) != null && i.length ? `${e(n.value[r] - t.value[r], r)}` : `${e(t.value[r], r)}–${e(n.value[r], r)}`;
}
function Tu(e, t, n) {
  const r = Uo(e, t, `${n}1`, n), i = Uo(e, t, `${n}2`, n);
  return r === i ? r : `${r}–${i}`;
}
function Uo(e, t, n, r = n) {
  const i = t[n], o = e[(i == null ? void 0 : i.scale) ?? n];
  return String((o == null ? void 0 : o.label) ?? (i == null ? void 0 : i.label) ?? r);
}
function ya(e = {}) {
  var M;
  const { facet: t, style: n, title: r, subtitle: i, caption: o, ariaLabel: a, ariaDescription: s } = e, f = tl(e.className), l = e.marks === void 0 ? [] : Au(e.marks);
  l.push(...w4(l));
  const c = b4(t, e), u = /* @__PURE__ */ new Map();
  for (const _ of l) {
    const S = Eu(_, c, e);
    S && u.set(_, S);
  }
  const d = /* @__PURE__ */ new Map();
  c && Rr(d, [c], e), Rr(d, u, e);
  const h = Au(_4(l, d, e));
  for (const _ of h) {
    const S = Eu(_, c, e);
    S && u.set(_, S);
  }
  l.unshift(...h);
  let m = U3(d, e);
  if (m !== void 0) {
    const _ = c ? Ka(m, c) : void 0;
    for (const A of l) {
      if (A.facet === null || A.facet === "super")
        continue;
      const E = u.get(A);
      E !== void 0 && (E.facetsIndex = A.fx != null || A.fy != null ? Ka(m, E) : _);
    }
    const S = /* @__PURE__ */ new Set();
    for (const { facetsIndex: A } of u.values())
      A == null || A.forEach((E, H) => {
        (E == null ? void 0 : E.length) > 0 && S.add(H);
      });
    m.forEach(
      0 < S.size && S.size < m.length ? (A, E) => A.empty = !S.has(E) : (A) => A.empty = !1
    );
    for (const A of l)
      if (A.facet === "exclude") {
        const E = u.get(A);
        E !== void 0 && (E.facetsIndex = q3(E.facetsIndex));
      }
  }
  for (const _ of ke.keys())
    Gs(e[_]) && _ !== "fx" && _ !== "fy" && d.set(_, []);
  const p = /* @__PURE__ */ new Map();
  for (const _ of l) {
    if (p.has(_))
      throw new Error("duplicate mark; each mark must be unique");
    const { facetsIndex: S, channels: A } = u.get(_) ?? {}, { data: E, facets: H, channels: P } = _.initialize(S, A, e);
    cl(P, e), p.set(_, { data: E, facets: H, channels: P });
  }
  const y = ef(Rr(d, p, e), e), b = P3(y, l, e);
  g3(y, b);
  const w = su(y), { fx: v, fy: x } = w, C = v || x ? S1(y, b) : b, k = v || x ? C4(w, b) : b, R = Zf(e), T = R.document, D = Yo("svg").call(T.documentElement);
  let F = D;
  R.ownerSVGElement = D, R.className = f, R.projection = A8(e, C), R.filterFacets = (_, S) => Ka(m, { channels: S, groups: rl(_, S) }), R.getMarkState = (_) => {
    const S = p.get(_), A = u.get(_);
    return { ...S, channels: { ...S.channels, ...A == null ? void 0 : A.channels } };
  }, R.dispatchValue = (_) => {
    F.value !== _ && (F.value = _, F.dispatchEvent(new Event("input", { bubbles: !0 })));
  };
  const N = /* @__PURE__ */ new Set();
  for (const [_, S] of p)
    if (_.initializer != null) {
      const A = _.facet === "super" ? k : C, E = _.initializer(S.data, S.facets, S.channels, w, A, R);
      if (E.data !== void 0 && (S.data = E.data), E.facets !== void 0 && (S.facets = E.facets), E.channels !== void 0) {
        const { fx: H, fy: P, ...W } = E.channels;
        p4(W), Object.assign(S.channels, W);
        for (const z of Object.values(W)) {
          const { scale: X } = z;
          X != null && !j_(ke.get(X)) && (Mg(z, e), N.add(X));
        }
        (H != null || P != null) && u.set(_, !0);
      }
    }
  if (N.size) {
    const _ = /* @__PURE__ */ new Map();
    Rr(_, p, e, (H) => N.has(H)), Rr(d, p, e, (H) => N.has(H));
    const S = T4(ef(_, e), y), { scales: A, ...E } = su(S);
    Object.assign(y, S), Object.assign(w, E), Object.assign(w.scales, A);
  }
  let B, V;
  m !== void 0 && (B = { x: v == null ? void 0 : v.domain(), y: x == null ? void 0 : x.domain() }, m = H3(m, B), V = z3(v, x, b));
  for (const [_, S] of p)
    S.values = _.scale(S.channels, w, R);
  const { width: U, height: L } = b;
  zr(D).attr("class", f).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", U).attr("height", L).attr("viewBox", `0 0 ${U} ${L}`).attr("aria-label", a).attr("aria-description", s).call(
    (_) => (
      // Warning: if you edit this, change defaultClassName.
      _.append("style").text(
        `:where(.${f}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${f} text),
:where(.${f} tspan) {
  white-space: pre;
}`
      )
    )
  ).call(nl, n);
  for (const _ of l) {
    const { channels: S, values: A, facets: E } = p.get(_);
    if (m === void 0 || _.facet === "super") {
      let H = null;
      if (E && (H = E[0], H = _.filter(H, S, A), H.length === 0))
        continue;
      const P = _.render(H, w, A, k, R);
      if (P == null)
        continue;
      D.appendChild(P);
    } else {
      let H;
      for (const P of m) {
        if (!(((M = _.facetAnchor) == null ? void 0 : M.call(_, m, B, P)) ?? !P.empty))
          continue;
        let W = null;
        if (E) {
          const X = u.has(_);
          if (W = E[X ? P.i : 0], W = _.filter(W, S, A), W.length === 0)
            continue;
          !X && W === E[0] && (W = $_(W)), W.fx = P.x, W.fy = P.y, W.fi = P.i;
        }
        const z = _.render(W, w, A, C, R);
        if (z != null) {
          (H ?? (H = zr(D).append("g"))).append(() => z).datum(P);
          for (const X of ["aria-label", "aria-description", "aria-hidden", "transform"])
            z.hasAttribute(X) && (H.attr(X, z.getAttribute(X)), z.removeAttribute(X));
        }
      }
      H == null || H.selectChildren().attr("transform", V);
    }
  }
  const Y = Qv(y, R, e), { figure: q = r != null || i != null || o != null || Y.length > 0 } = e;
  q && (F = T.createElement("figure"), F.className = `${f}-figure`, F.style.maxWidth = "initial", r != null && F.append(Cu(T, r, "h2")), i != null && F.append(Cu(T, i, "h3")), F.append(...Y, D), o != null && F.append(d4(T, o))), F.scale = M3(w.scales), F.legend = jv(y, R, e);
  const g = C8();
  return g > 0 && zr(D).append("text").attr("x", U).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("⚠️").append("title").text(`${g.toLocaleString("en-US")} warning${g === 1 ? "" : "s"}. Please check the console.`), F;
}
function Cu(e, t, n) {
  if (t.ownerDocument)
    return t;
  const r = e.createElement(n);
  return r.append(t), r;
}
function d4(e, t) {
  const n = e.createElement("figcaption");
  return n.append(t), n;
}
function h4({ marks: e = [], ...t } = {}) {
  return ya({ ...t, marks: [...e, this] });
}
Ot.prototype.plot = h4;
function Au(e) {
  return e.flat(1 / 0).filter((t) => t != null).map(m4);
}
function m4(e) {
  return typeof e.render == "function" ? e : new g4(e);
}
class g4 extends Ot {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("invalid mark; missing render function");
    super(), this.render = t;
  }
  render() {
  }
}
function cl(e, t) {
  for (const n in e)
    Mg(e[n], t);
  return e;
}
function Mg(e, t) {
  const { scale: n, transform: r = !0 } = e;
  if (n == null || !r)
    return;
  const {
    type: i,
    percent: o,
    interval: a,
    transform: s = o ? (f) => f * 100 : qm(a, i)
  } = t[n] ?? {};
  s != null && (e.value = Re(e.value, s), e.transform = !1);
}
function p4(e) {
  for (const t in e)
    s1(t, e[t]);
}
function Rr(e, t, n, r = R_) {
  var i, o;
  for (const { channels: a } of t.values())
    for (const s in a) {
      const f = a[s], { scale: l } = f;
      if (l != null && r(l))
        if (l === "projection") {
          if (!L8(n)) {
            const c = ((i = n.x) == null ? void 0 : i.domain) === void 0, u = ((o = n.y) == null ? void 0 : o.domain) === void 0;
            if (c || u) {
              const [d, h] = I8(f);
              c && ns(e, "x", d), u && ns(e, "y", h);
            }
          }
        } else
          ns(e, l, f);
    }
  return e;
}
function ns(e, t, n) {
  const r = e.get(t);
  r !== void 0 ? r.push(n) : e.set(t, [n]);
}
function b4(e, t) {
  if (e == null)
    return;
  const { x: n, y: r } = e;
  if (n == null && r == null)
    return;
  const i = Qe(e.data);
  if (i == null)
    throw new Error("missing facet data");
  const o = {};
  n != null && (o.fx = si(i, { value: n, scale: "fx" })), r != null && (o.fy = si(i, { value: r, scale: "fy" })), cl(o, t);
  const a = rl(i, o);
  return { channels: o, groups: a, data: e.data };
}
function Eu(e, t, n) {
  var f;
  if (e.facet === null || e.facet === "super")
    return;
  const { fx: r, fy: i } = e;
  if (r != null || i != null) {
    const l = Qe(e.data ?? r ?? i);
    if (l === void 0)
      throw new Error(`missing facet data in ${e.ariaLabel}`);
    if (l === null)
      return;
    const c = {};
    return r != null && (c.fx = si(l, { value: r, scale: "fx" })), i != null && (c.fy = si(l, { value: i, scale: "fy" })), cl(c, n), { channels: c, groups: rl(l, c) };
  }
  if (t === void 0)
    return;
  const { channels: o, groups: a, data: s } = t;
  if (e.facet !== "auto" || e.data === s)
    return { channels: o, groups: a };
  s.length > 0 && (a.size > 1 || a.size === 1 && o.fx && o.fy && [...a][0][1].size > 1) && ((f = Qe(e.data)) == null ? void 0 : f.length) === s.length && Tn(
    `Warning: the ${e.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`
  );
}
function y4(e, t = {}) {
  return Bo({ ...t, x: null, y: null }, (n, r, i, o, a, s) => s.getMarkState(e));
}
function w4(e) {
  const t = [];
  for (const n of e) {
    let r = n.tip;
    if (r) {
      r === !0 ? r = {} : typeof r == "string" && (r = { pointer: r });
      let { pointer: i, preferredAnchor: o } = r;
      i = /^x$/i.test(i) ? tv : /^y$/i.test(i) ? pu : ev, r = i(y4(n, r)), r.title = null, o === void 0 && (r.preferredAnchor = i === pu ? "left" : "bottom");
      const a = o4(n.data, r);
      a.facet = n.facet, a.facetAnchor = n.facetAnchor, t.push(a);
    }
  }
  return t;
}
function _4(e, t, n) {
  let {
    projection: r,
    x: i = {},
    y: o = {},
    fx: a = {},
    fy: s = {},
    axis: f,
    grid: l,
    facet: c = {},
    facet: { axis: u = f, grid: d } = c,
    x: { axis: h = f, grid: m = h === null ? null : l } = i,
    y: { axis: p = f, grid: y = p === null ? null : l } = o,
    fx: { axis: b = u, grid: w = b === null ? null : d } = a,
    fy: { axis: v = u, grid: x = v === null ? null : d } = s
  } = n;
  (r || !Gs(i) && !Nu("x", e)) && (h = m = null), (r || !Gs(o) && !Nu("y", e)) && (p = y = null), t.has("fx") || (b = w = null), t.has("fy") || (v = x = null), h === void 0 && (h = !Ki(e, "x")), p === void 0 && (p = !Ki(e, "y")), b === void 0 && (b = !Ki(e, "fx")), v === void 0 && (v = !Ki(e, "fy")), h === !0 && (h = "bottom"), p === !0 && (p = "left"), b === !0 && (b = h === "top" || h === null ? "bottom" : "top"), v === !0 && (v = p === "right" || p === null ? "left" : "right");
  const C = [];
  return Zi(C, x, Uv, s), ji(C, v, Iv, "right", "left", c, s), Zi(C, w, Hv, a), ji(C, b, Ov, "top", "bottom", c, a), Zi(C, y, fl, o), ji(C, p, Ri, "left", "right", n, o), Zi(C, m, cg, i), ji(C, h, Li, "bottom", "top", n, i), C;
}
function ji(e, t, n, r, i, o, a) {
  if (!t)
    return;
  const s = v4(t);
  a = x4(s ? r : t, o, a);
  const { line: f } = a;
  (n === Ri || n === Li) && f && !ai(f) && e.push(n4(M4(a))), e.push(n(a)), s && e.push(n({ ...a, anchor: i, label: null }));
}
function Zi(e, t, n, r) {
  !t || ai(t) || e.push(n(S4(t, r)));
}
function v4(e) {
  return /^\s*both\s*$/i.test(e);
}
function x4(e, t, {
  line: n = t.line,
  ticks: r,
  tickSize: i,
  tickSpacing: o,
  tickPadding: a,
  tickFormat: s,
  tickRotate: f,
  fontVariant: l,
  ariaLabel: c,
  ariaDescription: u,
  label: d = t.label,
  labelAnchor: h,
  labelArrow: m = t.labelArrow,
  labelOffset: p
}) {
  return {
    anchor: e,
    line: n,
    ticks: r,
    tickSize: i,
    tickSpacing: o,
    tickPadding: a,
    tickFormat: s,
    tickRotate: f,
    fontVariant: l,
    ariaLabel: c,
    ariaDescription: u,
    label: d,
    labelAnchor: h,
    labelArrow: m,
    labelOffset: p
  };
}
function M4(e) {
  const { anchor: t, line: n } = e;
  return { anchor: t, facetAnchor: t + "-empty", stroke: n === !0 ? void 0 : n };
}
function S4(e, {
  stroke: t = ca(e) ? e : void 0,
  ticks: n = k4(e) ? e : void 0,
  tickSpacing: r,
  ariaLabel: i,
  ariaDescription: o
}) {
  return {
    stroke: t,
    ticks: n,
    tickSpacing: r,
    ariaLabel: i,
    ariaDescription: o
  };
}
function k4(e) {
  switch (typeof e) {
    case "number":
      return !0;
    case "string":
      return !ca(e);
  }
  return Hn(e) || typeof (e == null ? void 0 : e.range) == "function";
}
function Ki(e, t) {
  const n = `${t}-axis `;
  return e.some((r) => {
    var i;
    return (i = r.ariaLabel) == null ? void 0 : i.startsWith(n);
  });
}
function Nu(e, t) {
  for (const n of t)
    for (const r in n.channels) {
      const { scale: i } = n.channels[r];
      if (i === e || i === "projection")
        return !0;
    }
  return !1;
}
function T4(e, t) {
  for (const n in e) {
    const r = e[n], i = t[n];
    r.label === void 0 && i && (r.label = i.label);
  }
  return e;
}
function C4({ fx: e, fy: t }, n) {
  const { marginTop: r, marginRight: i, marginBottom: o, marginLeft: a, width: s, height: f } = el(n), l = e && Ru(e), c = t && Ru(t);
  return {
    marginTop: t ? c[0] : r,
    marginRight: e ? s - l[1] : i,
    marginBottom: t ? f - c[1] : o,
    marginLeft: e ? l[0] : a,
    // Some marks, namely the x- and y-axis labels, want to know what the
    // desired (rather than actual) margins are for positioning.
    inset: {
      marginTop: n.marginTop,
      marginRight: n.marginRight,
      marginBottom: n.marginBottom,
      marginLeft: n.marginLeft
    },
    width: s,
    height: f
  };
}
function Ru(e) {
  const t = e.domain();
  let n = e(t[0]), r = e(t[t.length - 1]);
  return r < n && ([n, r] = [r, n]), [n, r + e.bandwidth()];
}
function A4(e = {}) {
  return Fm(e) ? e : { ...e, x: Oe };
}
function E4(e = {}) {
  return Pm(e) ? e : { ...e, y: Oe };
}
function N4(e, t) {
  if (t.length === 1)
    return { data: e, facets: t };
  const n = e.length, r = new Uint8Array(n);
  let i = 0;
  for (const s of t)
    for (const f of s)
      r[f] && ++i, r[f] = 1;
  if (i === 0)
    return { data: e, facets: t };
  e = ii(e);
  const o = e[Dm] = new Uint32Array(n + i);
  t = t.map((s) => ii(s, Uint32Array));
  let a = n;
  r.fill(0);
  for (const s of t)
    for (let f = 0, l = s.length; f < l; ++f) {
      const c = s[f];
      r[c] ? (s[f] = a, e[a] = e[c], o[a] = c, ++a) : o[c] = c, r[c] = 1;
    }
  return { data: e, facets: t };
}
function R4(e = {}, t = {}) {
  arguments.length === 1 && ([e, t] = Sg(e));
  const { y1: n, y: r = n, x: i, ...o } = t, [a, s, f, l] = kg(r, i, "y", "x", e, o);
  return { ...a, y1: n, y: s, x1: f, x2: l, x: zm(f, l) };
}
function L4(e = {}, t = {}) {
  arguments.length === 1 && ([e, t] = Sg(e));
  const { x1: n, x: r = n, y: i, ...o } = t, [a, s, f, l] = kg(r, i, "x", "y", e, o);
  return { ...a, x1: n, x: s, y1: f, y2: l, y: zm(f, l) };
}
function D4({ x: e, x1: t, x2: n, ...r } = {}) {
  return r = pa(r, "y"), t === void 0 && n === void 0 ? R4({ x: e, ...r }) : ([t, n] = Um(e, t, n), { ...r, x1: t, x2: n });
}
function I4({ y: e, y1: t, y2: n, ...r } = {}) {
  return r = pa(r, "x"), t === void 0 && n === void 0 ? L4({ y: e, ...r }) : ([t, n] = Um(e, t, n), { ...r, y1: t, y2: n });
}
function Sg(e) {
  const { offset: t, order: n, reverse: r, ...i } = e;
  return [{ offset: t, order: n, reverse: r }, i];
}
const O4 = { length: !0 };
function kg(e, t = N_, n, r, { offset: i, order: o, reverse: a }, s) {
  if (t === null)
    throw new Error(`stack requires ${r}`);
  const f = O_(s), [l, c] = Zn(e), [u, d] = Po(t), [h, m] = Po(t);
  return u.hint = h.hint = O4, i = $4(i), o = B4(o, i, r), [
    Xf(s, (p, y, b) => {
      ({ data: p, facets: y } = N4(p, y));
      const w = e == null ? void 0 : c(Xs(Ee(p, e), b == null ? void 0 : b[n])), v = Ee(p, t, Float64Array), x = Ee(p, f), C = o && o(p, w, v, x), k = p.length, R = d(new Float64Array(k)), T = m(new Float64Array(k)), D = [];
      for (const F of y) {
        const N = w ? Array.from(df(F, (B) => w[B]).values()) : [F];
        if (C)
          for (const B of N)
            B.sort(C);
        for (const B of N) {
          let V = 0, U = 0;
          a && B.reverse();
          for (const L of B) {
            const Y = v[L];
            Y < 0 ? V = T[L] = (R[L] = V) + Y : Y > 0 ? U = T[L] = (R[L] = U) + Y : T[L] = R[L] = U;
          }
        }
        D.push(N);
      }
      return i && i(D, R, T, x), { data: p, facets: y };
    }),
    l,
    u,
    h
  ];
}
function $4(e) {
  if (e != null) {
    if (typeof e == "function")
      return e;
    switch (`${e}`.toLowerCase()) {
      case "expand":
      case "normalize":
        return F4;
      case "center":
      case "silhouette":
        return P4;
      case "wiggle":
        return Cg;
    }
    throw new Error(`unknown offset: ${e}`);
  }
}
function Tg(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    const o = t[i];
    o < n && (n = o), o > r && (r = o);
  }
  return [n, r];
}
function F4(e, t, n) {
  for (const r of e)
    for (const i of r) {
      const [o, a] = Tg(i, n);
      for (const s of i) {
        const f = 1 / (a - o || 1);
        t[s] = f * (t[s] - o), n[s] = f * (n[s] - o);
      }
    }
}
function P4(e, t, n) {
  for (const r of e) {
    for (const i of r) {
      const [o, a] = Tg(i, n);
      for (const s of i) {
        const f = (a + o) / 2;
        t[s] -= f, n[s] -= f;
      }
    }
    Ag(r, t, n);
  }
  Eg(e, t, n);
}
function Cg(e, t, n, r) {
  for (const i of e) {
    const o = new An();
    let a = 0;
    for (const s of i) {
      let f = -1;
      const l = s.map((h) => Math.abs(n[h] - t[h])), c = s.map((h) => {
        f = r ? r[h] : ++f;
        const m = n[h] - t[h], p = o.has(f) ? m - o.get(f) : 0;
        return o.set(f, m), p;
      }), u = [0, ...Tp(c)];
      for (const h of s)
        t[h] += a, n[h] += a;
      const d = sn(l);
      d && (a -= sn(l, (h, m) => (c[m] / 2 + u[m]) * h) / d);
    }
    Ag(i, t, n);
  }
  Eg(e, t, n);
}
function Ag(e, t, n) {
  const r = Gt(e, (i) => Gt(i, (o) => t[o]));
  for (const i of e)
    for (const o of i)
      t[o] -= r, n[o] -= r;
}
function Eg(e, t, n) {
  const r = e.length;
  if (r === 1)
    return;
  const i = e.map((s) => s.flat()), o = i.map((s) => (Gt(s, (f) => t[f]) + gt(s, (f) => n[f])) / 2), a = Gt(o);
  for (let s = 0; s < r; s++) {
    const f = a - o[s];
    for (const l of i[s])
      t[l] += f, n[l] += f;
  }
}
function B4(e, t, n) {
  if (e === void 0 && t === Cg)
    return Lu(wt);
  if (e != null) {
    if (typeof e == "string") {
      const r = e.startsWith("-"), i = r ? Fo : wt;
      switch ((r ? e.slice(1) : e).toLowerCase()) {
        case "value":
        case n:
          return U4(i);
        case "z":
          return H4(i);
        case "sum":
          return z4(i);
        case "appearance":
          return q4(i);
        case "inside-out":
          return Lu(i);
      }
      return Du(Im(e));
    }
    if (typeof e == "function")
      return (e.length === 1 ? Du : W4)(e);
    if (Array.isArray(e))
      return Y4(e);
    throw new Error(`invalid order: ${e}`);
  }
}
function U4(e) {
  return (t, n, r) => (i, o) => e(r[i], r[o]);
}
function H4(e) {
  return (t, n, r, i) => (o, a) => e(i[o], i[a]);
}
function z4(e) {
  return wa(
    e,
    (t, n, r, i) => mf(
      Jt(t),
      (o) => sn(o, (a) => r[a]),
      (o) => i[o]
    )
  );
}
function q4(e) {
  return wa(
    e,
    (t, n, r, i) => mf(
      Jt(t),
      (o) => n[sd(o, (a) => r[a])],
      (o) => i[o]
    )
  );
}
function Lu(e) {
  return wa(e, (t, n, r, i) => {
    const o = Jt(t), a = mf(
      o,
      (u) => n[sd(u, (d) => r[d])],
      (u) => i[u]
    ), s = er(
      o,
      (u) => sn(u, (d) => r[d]),
      (u) => i[u]
    ), f = [], l = [];
    let c = 0;
    for (const u of a)
      c < 0 ? (c += s.get(u), f.push(u)) : (c -= s.get(u), l.push(u));
    return l.reverse().concat(f);
  });
}
function Du(e) {
  return (t) => {
    const n = Ee(t, e);
    return (r, i) => wt(n[r], n[i]);
  };
}
function W4(e) {
  return (t) => (n, r) => e(t[n], t[r]);
}
function Y4(e) {
  return wa(wt, () => e);
}
function wa(e, t) {
  return (n, r, i, o) => {
    if (!o)
      throw new Error("missing channel: z");
    const a = new An(t(n, r, i, o).map((s, f) => [s, f]));
    return (s, f) => e(a.get(o[s]), a.get(o[f]));
  };
}
class Ng extends Ot {
  constructor(t, n, r = {}, i) {
    super(t, n, r, i);
    const { inset: o = 0, insetTop: a = o, insetRight: s = o, insetBottom: f = o, insetLeft: l = o, rx: c, ry: u } = r;
    this.insetTop = Me(a), this.insetRight = Me(s), this.insetBottom = Me(f), this.insetLeft = Me(l), this.rx = Ie(c, "auto"), this.ry = Ie(u, "auto");
  }
  render(t, n, r, i, o) {
    const { rx: a, ry: s } = this;
    return ze("svg:g", o).call(qn, this, i, o).call(this._transform, this, n).call(
      (f) => f.selectAll().data(t).enter().append("rect").call(Wn, this).attr("x", this._x(n, r, i)).attr("width", this._width(n, r, i)).attr("y", this._y(n, r, i)).attr("height", this._height(n, r, i)).call(ce, "rx", a).call(ce, "ry", s).call(xr, this, r)
    ).node();
  }
  _x(t, { x: n }, { marginLeft: r }) {
    const { insetLeft: i } = this;
    return n ? (o) => n[o] + i : r + i;
  }
  _y(t, { y: n }, { marginTop: r }) {
    const { insetTop: i } = this;
    return n ? (o) => n[o] + i : r + i;
  }
  _width({ x: t }, { x: n }, { marginRight: r, marginLeft: i, width: o }) {
    const { insetLeft: a, insetRight: s } = this, f = n && t ? t.bandwidth() : o - r - i;
    return Math.max(0, f - a - s);
  }
  _height({ y: t }, { y: n }, { marginTop: r, marginBottom: i, height: o }) {
    const { insetTop: a, insetBottom: s } = this, f = n && t ? t.bandwidth() : o - r - i;
    return Math.max(0, f - a - s);
  }
}
const Rg = {
  ariaLabel: "bar"
};
class V4 extends Ng {
  constructor(t, n = {}) {
    const { x1: r, x2: i, y: o } = n;
    super(
      t,
      {
        x1: { value: r, scale: "x" },
        x2: { value: i, scale: "x" },
        y: { value: o, scale: "y", type: "band", optional: !0 }
      },
      n,
      Rg
    );
  }
  _transform(t, n, { x: r }) {
    t.call(gn, n, { x: r }, 0, 0);
  }
  _x({ x: t }, { x1: n, x2: r }, { marginLeft: i }) {
    const { insetLeft: o } = this;
    return ln(t) ? i + o : (a) => Math.min(n[a], r[a]) + o;
  }
  _width({ x: t }, { x1: n, x2: r }, { marginRight: i, marginLeft: o, width: a }) {
    const { insetLeft: s, insetRight: f } = this;
    return ln(t) ? a - i - o - s - f : (l) => Math.max(0, Math.abs(r[l] - n[l]) - s - f);
  }
}
class G4 extends Ng {
  constructor(t, n = {}) {
    const { x: r, y1: i, y2: o } = n;
    super(
      t,
      {
        y1: { value: i, scale: "y" },
        y2: { value: o, scale: "y" },
        x: { value: r, scale: "x", type: "band", optional: !0 }
      },
      n,
      Rg
    );
  }
  _transform(t, n, { y: r }) {
    t.call(gn, n, { y: r }, 0, 0);
  }
  _y({ y: t }, { y1: n, y2: r }, { marginTop: i }) {
    const { insetTop: o } = this;
    return ln(t) ? i + o : (a) => Math.min(n[a], r[a]) + o;
  }
  _height({ y: t }, { y1: n, y2: r }, { marginTop: i, marginBottom: o, height: a }) {
    const { insetTop: s, insetBottom: f } = this;
    return ln(t) ? a - i - o - s - f : (l) => Math.max(0, Math.abs(r[l] - n[l]) - s - f);
  }
}
function X4(e, t = {}) {
  return Bm(t) || (t = { ...t, y: Hf, x2: Oe }), new V4(e, D4(z1(A4(t))));
}
function Lg(e, t = {}) {
  return Bm(t) || (t = { ...t, x: Hf, y2: Oe }), new G4(e, I4(q1(E4(t))));
}
function j4(e) {
  let t;
  return {
    c() {
      t = Q("div");
    },
    m(n, r) {
      ee(n, t, r), e[5](t);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t), e[5](null);
    }
  };
}
function Z4(e, t, n) {
  let { rows: r = [] } = t, { filterItems: i } = t, { sliceCol: o } = t, { domain: a } = t, s;
  function f(u, d) {
    u = u.filter((m) => {
      let p = !0;
      for (let [y, b] of Object.entries(d))
        m[y] != b && (p = !1);
      return p;
    }), l(u);
  }
  function l(u) {
    if (u.length > 0) {
      let d = ya({
        x: { domain: a },
        marks: [
          fl(),
          Lg(u, r8({ y: "count" }, { x: "id", fill: "#c1e0fd", tip: !0 })),
          Li({
            label: o,
            lineWidth: 8,
            tickRotate: -45,
            textAnchor: "end"
          }),
          Ri({ label: "Number of documents" })
        ],
        marginBottom: 100,
        width: 300,
        height: 200
      });
      s.replaceChildren(d);
    }
  }
  function c(u) {
    ir[u ? "unshift" : "push"](() => {
      s = u, n(0, s);
    });
  }
  return e.$$set = (u) => {
    "rows" in u && n(1, r = u.rows), "filterItems" in u && n(2, i = u.filterItems), "sliceCol" in u && n(3, o = u.sliceCol), "domain" in u && n(4, a = u.domain);
  }, e.$$.update = () => {
    e.$$.dirty & /*rows, filterItems*/
    6 && f(r, i);
  }, [s, r, i, o, a, c];
}
class K4 extends un {
  constructor(t) {
    super(), cn(this, t, Z4, j4, Et, {
      rows: 1,
      filterItems: 2,
      sliceCol: 3,
      domain: 4
    });
  }
}
function Iu(e, t, n) {
  const r = e.slice();
  return r[16] = t[n][0], r[17] = t[n][1], r;
}
function Ou(e) {
  let t, n;
  return {
    c() {
      t = Q("h2"), n = je(
        /*selectedTitle*/
        e[1]
      );
    },
    m(r, i) {
      ee(r, t, i), re(t, n);
    },
    p(r, i) {
      i & /*selectedTitle*/
      2 && Vt(
        n,
        /*selectedTitle*/
        r[1]
      );
    },
    d(r) {
      r && J(t);
    }
  };
}
function $u(e) {
  let t, n, r, i, o, a, s, f, l = Ye(Object.entries(
    /*selectedMetadata*/
    e[2]
  )), c = [];
  for (let u = 0; u < l.length; u += 1)
    c[u] = Fu(Iu(e, l, u));
  return s = new K4({
    props: {
      rows: (
        /*rowsMatch*/
        e[6]
      ),
      filterItems: (
        /*filterItems*/
        e[0]
      ),
      sliceCol: (
        /*sliceCol*/
        e[3]
      ),
      domain: (
        /*domain*/
        e[8]
      )
    }
  }), {
    c() {
      t = Q("h3"), t.textContent = "CONCEPT DETAILS", n = ye(), r = Q("div"), i = Q("div");
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      o = ye(), a = Q("div"), mt(s.$$.fragment), K(t, "class", "card-title"), K(i, "class", "overview-card-left"), K(a, "class", "overview-card-right"), K(r, "class", "overview-card");
    },
    m(u, d) {
      ee(u, t, d), ee(u, n, d), ee(u, r, d), re(r, i);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(i, null);
      re(r, o), re(r, a), st(s, a, null), f = !0;
    },
    p(u, d) {
      if (d & /*Object, selectedMetadata*/
      4) {
        l = Ye(Object.entries(
          /*selectedMetadata*/
          u[2]
        ));
        let m;
        for (m = 0; m < l.length; m += 1) {
          const p = Iu(u, l, m);
          c[m] ? c[m].p(p, d) : (c[m] = Fu(p), c[m].c(), c[m].m(i, null));
        }
        for (; m < c.length; m += 1)
          c[m].d(1);
        c.length = l.length;
      }
      const h = {};
      d & /*rowsMatch*/
      64 && (h.rows = /*rowsMatch*/
      u[6]), d & /*filterItems*/
      1 && (h.filterItems = /*filterItems*/
      u[0]), d & /*sliceCol*/
      8 && (h.sliceCol = /*sliceCol*/
      u[3]), d & /*domain*/
      256 && (h.domain = /*domain*/
      u[8]), s.$set(h);
    },
    i(u) {
      f || (te(s.$$.fragment, u), f = !0);
    },
    o(u) {
      ie(s.$$.fragment, u), f = !1;
    },
    d(u) {
      u && (J(t), J(n), J(r)), Fn(c, u), ft(s);
    }
  };
}
function Fu(e) {
  let t, n, r = (
    /*key*/
    e[16] + ""
  ), i, o, a, s = (
    /*value*/
    e[17] + ""
  );
  return {
    c() {
      t = Q("p"), n = Q("b"), i = je(r), o = je(": "), a = new Ho(!1), a.a = null;
    },
    m(f, l) {
      ee(f, t, l), re(t, n), re(n, i), re(t, o), a.m(s, t);
    },
    p(f, l) {
      l & /*selectedMetadata*/
      4 && r !== (r = /*key*/
      f[16] + "") && Vt(i, r), l & /*selectedMetadata*/
      4 && s !== (s = /*value*/
      f[17] + "") && a.p(s);
    },
    d(f) {
      f && J(t);
    }
  };
}
function Pu(e) {
  let t, n;
  return t = new cf({
    props: {
      columns: (
        /*columns*/
        e[9]
      ),
      rows: (
        /*rowsMatchAll*/
        e[4]
      ),
      filterSelections: (
        /*filterItems*/
        e[0]
      )
    }
  }), {
    c() {
      mt(t.$$.fragment);
    },
    m(r, i) {
      st(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*rowsMatchAll*/
      16 && (o.rows = /*rowsMatchAll*/
      r[4]), i & /*filterItems*/
      1 && (o.filterSelections = /*filterItems*/
      r[0]), t.$set(o);
    },
    i(r) {
      n || (te(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ft(t, r);
    }
  };
}
function Bu(e) {
  let t, n;
  return t = new cf({
    props: {
      columns: (
        /*columns*/
        e[9]
      ),
      rows: (
        /*rowsNonMatchAll*/
        e[5]
      ),
      filterSelections: (
        /*filterItems*/
        e[0]
      ),
      sortBy: J4,
      sortOrder: (
        /*sortOrder*/
        e[10]
      )
    }
  }), {
    c() {
      mt(t.$$.fragment);
    },
    m(r, i) {
      st(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*rowsNonMatchAll*/
      32 && (o.rows = /*rowsNonMatchAll*/
      r[5]), i & /*filterItems*/
      1 && (o.filterSelections = /*filterItems*/
      r[0]), t.$set(o);
    },
    i(r) {
      n || (te(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ft(t, r);
    }
  };
}
function Q4(e) {
  let t, n, r, i, o, a, s, f, l, c, u, d, h = (
    /*selectedTitle*/
    e[1] && Ou(e)
  ), m = (
    /*selectedMetadata*/
    e[2] && $u(e)
  ), p = (
    /*remount*/
    e[7] && Pu(e)
  ), y = (
    /*remount*/
    e[7] && Bu(e)
  );
  return {
    c() {
      t = Q("div"), h && h.c(), n = ye(), r = Q("div"), m && m.c(), i = ye(), o = Q("h3"), o.textContent = "POTENTIAL CONCEPT MATCHES", a = ye(), s = Q("div"), p && p.c(), f = ye(), l = Q("h3"), l.textContent = "CONCEPT NON-MATCHES", c = ye(), u = Q("div"), y && y.c(), K(o, "class", "card-title"), K(s, "class", "highlight-card"), K(l, "class", "card-title"), Hg(l, "margin-top", "20px"), K(u, "class", "highlight-card"), K(r, "class", "row");
    },
    m(b, w) {
      ee(b, t, w), h && h.m(t, null), re(t, n), re(t, r), m && m.m(r, null), re(r, i), re(r, o), re(r, a), re(r, s), p && p.m(s, null), re(r, f), re(r, l), re(r, c), re(r, u), y && y.m(u, null), d = !0;
    },
    p(b, [w]) {
      /*selectedTitle*/
      b[1] ? h ? h.p(b, w) : (h = Ou(b), h.c(), h.m(t, n)) : h && (h.d(1), h = null), /*selectedMetadata*/
      b[2] ? m ? (m.p(b, w), w & /*selectedMetadata*/
      4 && te(m, 1)) : (m = $u(b), m.c(), te(m, 1), m.m(r, i)) : m && (Pe(), ie(m, 1, 1, () => {
        m = null;
      }), Be()), /*remount*/
      b[7] ? p ? (p.p(b, w), w & /*remount*/
      128 && te(p, 1)) : (p = Pu(b), p.c(), te(p, 1), p.m(s, null)) : p && (Pe(), ie(p, 1, 1, () => {
        p = null;
      }), Be()), /*remount*/
      b[7] ? y ? (y.p(b, w), w & /*remount*/
      128 && te(y, 1)) : (y = Bu(b), y.c(), te(y, 1), y.m(u, null)) : y && (Pe(), ie(y, 1, 1, () => {
        y = null;
      }), Be());
    },
    i(b) {
      d || (te(m), te(p), te(y), d = !0);
    },
    o(b) {
      ie(m), ie(p), ie(y), d = !1;
    },
    d(b) {
      b && J(t), h && h.d(), m && m.d(), p && p.d(), y && y.d();
    }
  };
}
let J4 = "concept score";
function e7(e, t, n) {
  let { data: r } = t, { el: i } = t, { filterItems: o } = t, { selectedTitle: a } = t, { selectedMetadata: s } = t, { sliceCol: f } = t, l = [], c = [], u = [], d = [], h = [], m = !0, p = ["concept_score_orig"], y = -1, b = [];
  lf(() => {
    w(r);
  });
  function w(v) {
    if (v != null) {
      let C = document.createElement("div");
      l = JSON.parse(v);
      for (var x = 0; x < Object.keys(l[0]).length; x++) {
        const T = Object.keys(l[0])[x];
        p.includes(T) || c.push({
          key: T,
          title: T,
          value: (D) => D[T],
          sortable: !0,
          parseHTML: !0
        });
      }
      n(7, m = !1), setTimeout(() => n(7, m = !0), 0), i.appendChild(C), n(4, u = l.filter((T) => T.concept_score_orig == 1 && T.id == "All")), n(5, d = l.filter((T) => T.concept_score_orig < 1 && T.id == "All")), n(6, h = l.filter((T) => T.concept_score_orig == 1));
      let R = l.map((T) => T.id);
      n(8, b = [...new Set(R)]);
    }
  }
  return e.$$set = (v) => {
    "data" in v && n(11, r = v.data), "el" in v && n(12, i = v.el), "filterItems" in v && n(0, o = v.filterItems), "selectedTitle" in v && n(1, a = v.selectedTitle), "selectedMetadata" in v && n(2, s = v.selectedMetadata), "sliceCol" in v && n(3, f = v.sliceCol);
  }, [
    o,
    a,
    s,
    f,
    u,
    d,
    h,
    m,
    b,
    c,
    y,
    r,
    i
  ];
}
class t7 extends un {
  constructor(t) {
    super(), cn(this, t, e7, Q4, Et, {
      data: 11,
      el: 12,
      filterItems: 0,
      selectedTitle: 1,
      selectedMetadata: 2,
      sliceCol: 3
    });
  }
}
function n7(e) {
  let t;
  return {
    c() {
      t = Q("div");
    },
    m(n, r) {
      ee(n, t, r), e[4](t);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t), e[4](null);
    }
  };
}
function r7(e, t, n) {
  let { rows: r = [] } = t, { filterItems: i } = t, { domain: o } = t, a;
  function s(c, u) {
    c = c.filter((h) => {
      let m = !0;
      for (let [p, y] of Object.entries(u))
        h[p] != y && (m = !1);
      return h.concept_score_orig < 1 && (m = !1), m;
    }), f(c);
  }
  function f(c) {
    if (c.length > 0) {
      let u = ya({
        y: { domain: o },
        color: {
          field: "concept",
          type: "categorical",
          scheme: "pastel2"
        },
        marks: [
          cg(),
          X4(c, i8({ x: "count" }, {
            y: "concept",
            // fill: '#c1e0fd', 
            fill: "concept",
            tip: !0
          })),
          Ri({ label: "Concept", lineWidth: 12 }),
          Li({ label: "Number of documents" })
        ],
        marginLeft: 150,
        width: 400,
        height: 250
      });
      a.replaceChildren(u);
    }
  }
  function l(c) {
    ir[c ? "unshift" : "push"](() => {
      a = c, n(0, a);
    });
  }
  return e.$$set = (c) => {
    "rows" in c && n(1, r = c.rows), "filterItems" in c && n(2, i = c.filterItems), "domain" in c && n(3, o = c.domain);
  }, e.$$.update = () => {
    e.$$.dirty & /*rows, filterItems*/
    6 && s(r, i);
  }, [a, r, i, o, l];
}
class i7 extends un {
  constructor(t) {
    super(), cn(this, t, r7, n7, Et, { rows: 1, filterItems: 2, domain: 3 });
  }
}
function Uu(e, t, n) {
  const r = e.slice();
  return r[14] = t[n][0], r[15] = t[n][1], r;
}
function Hu(e) {
  let t, n;
  return {
    c() {
      t = Q("h2"), n = je(
        /*selectedTitle*/
        e[3]
      );
    },
    m(r, i) {
      ee(r, t, i), re(t, n);
    },
    p(r, i) {
      i & /*selectedTitle*/
      8 && Vt(
        n,
        /*selectedTitle*/
        r[3]
      );
    },
    d(r) {
      r && J(t);
    }
  };
}
function zu(e) {
  let t, n, r, i, o, a, s, f, l = Ye(Object.entries(
    /*selectedMetadata*/
    e[4]
  )), c = [];
  for (let u = 0; u < l.length; u += 1)
    c[u] = qu(Uu(e, l, u));
  return s = new i7({
    props: {
      rows: (
        /*rowsLong*/
        e[6]
      ),
      filterItems: (
        /*filterItems*/
        e[0]
      ),
      domain: (
        /*domain*/
        e[8]
      )
    }
  }), {
    c() {
      t = Q("h3"), t.textContent = "SLICE DETAILS", n = ye(), r = Q("div"), i = Q("div");
      for (let u = 0; u < c.length; u += 1)
        c[u].c();
      o = ye(), a = Q("div"), mt(s.$$.fragment), K(t, "class", "card-title"), K(i, "class", "overview-card-left-40 svelte-1vfaenj"), K(a, "class", "overview-card-right-60 svelte-1vfaenj"), K(r, "class", "overview-card");
    },
    m(u, d) {
      ee(u, t, d), ee(u, n, d), ee(u, r, d), re(r, i);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(i, null);
      re(r, o), re(r, a), st(s, a, null), f = !0;
    },
    p(u, d) {
      if (d & /*Object, selectedMetadata*/
      16) {
        l = Ye(Object.entries(
          /*selectedMetadata*/
          u[4]
        ));
        let m;
        for (m = 0; m < l.length; m += 1) {
          const p = Uu(u, l, m);
          c[m] ? c[m].p(p, d) : (c[m] = qu(p), c[m].c(), c[m].m(i, null));
        }
        for (; m < c.length; m += 1)
          c[m].d(1);
        c.length = l.length;
      }
      const h = {};
      d & /*rowsLong*/
      64 && (h.rows = /*rowsLong*/
      u[6]), d & /*filterItems*/
      1 && (h.filterItems = /*filterItems*/
      u[0]), d & /*domain*/
      256 && (h.domain = /*domain*/
      u[8]), s.$set(h);
    },
    i(u) {
      f || (te(s.$$.fragment, u), f = !0);
    },
    o(u) {
      ie(s.$$.fragment, u), f = !1;
    },
    d(u) {
      u && (J(t), J(n), J(r)), Fn(c, u), ft(s);
    }
  };
}
function qu(e) {
  let t, n, r = (
    /*key*/
    e[14] + ""
  ), i, o, a = (
    /*value*/
    e[15] + ""
  ), s;
  return {
    c() {
      t = Q("p"), n = Q("b"), i = je(r), o = je(": "), s = je(a);
    },
    m(f, l) {
      ee(f, t, l), re(t, n), re(n, i), re(t, o), re(t, s);
    },
    p(f, l) {
      l & /*selectedMetadata*/
      16 && r !== (r = /*key*/
      f[14] + "") && Vt(i, r), l & /*selectedMetadata*/
      16 && a !== (a = /*value*/
      f[15] + "") && Vt(s, a);
    },
    d(f) {
      f && J(t);
    }
  };
}
function Wu(e) {
  let t, n;
  return t = new cf({
    props: {
      columns: (
        /*columns*/
        e[9]
      ),
      rows: (
        /*rows*/
        e[5]
      ),
      sortBy: (
        /*sortBy*/
        e[1]
      ),
      sortOrder: (
        /*sortOrder*/
        e[2]
      ),
      filterSelections: (
        /*filterItems*/
        e[0]
      )
    }
  }), {
    c() {
      mt(t.$$.fragment);
    },
    m(r, i) {
      st(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*rows*/
      32 && (o.rows = /*rows*/
      r[5]), i & /*sortBy*/
      2 && (o.sortBy = /*sortBy*/
      r[1]), i & /*sortOrder*/
      4 && (o.sortOrder = /*sortOrder*/
      r[2]), i & /*filterItems*/
      1 && (o.filterSelections = /*filterItems*/
      r[0]), t.$set(o);
    },
    i(r) {
      n || (te(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ft(t, r);
    }
  };
}
function o7(e) {
  let t, n, r, i, o, a, s, f, l = (
    /*selectedTitle*/
    e[3] && Hu(e)
  ), c = (
    /*selectedMetadata*/
    e[4] && zu(e)
  ), u = (
    /*remount*/
    e[7] && Wu(e)
  );
  return {
    c() {
      t = Q("div"), l && l.c(), n = ye(), r = Q("div"), c && c.c(), i = ye(), o = Q("h3"), o.textContent = "SLICE EXAMPLES", a = ye(), s = Q("div"), u && u.c(), K(o, "class", "card-title"), K(s, "class", "highlight-card"), K(r, "class", "row");
    },
    m(d, h) {
      ee(d, t, h), l && l.m(t, null), re(t, n), re(t, r), c && c.m(r, null), re(r, i), re(r, o), re(r, a), re(r, s), u && u.m(s, null), f = !0;
    },
    p(d, [h]) {
      /*selectedTitle*/
      d[3] ? l ? l.p(d, h) : (l = Hu(d), l.c(), l.m(t, n)) : l && (l.d(1), l = null), /*selectedMetadata*/
      d[4] ? c ? (c.p(d, h), h & /*selectedMetadata*/
      16 && te(c, 1)) : (c = zu(d), c.c(), te(c, 1), c.m(r, i)) : c && (Pe(), ie(c, 1, 1, () => {
        c = null;
      }), Be()), /*remount*/
      d[7] ? u ? (u.p(d, h), h & /*remount*/
      128 && te(u, 1)) : (u = Wu(d), u.c(), te(u, 1), u.m(s, null)) : u && (Pe(), ie(u, 1, 1, () => {
        u = null;
      }), Be());
    },
    i(d) {
      f || (te(c), te(u), f = !0);
    },
    o(d) {
      ie(c), ie(u), f = !1;
    },
    d(d) {
      d && J(t), l && l.d(), c && c.d(), u && u.d();
    }
  };
}
function a7(e, t, n) {
  let { data: r } = t, { dataLong: i } = t, { el: o } = t, { filterItems: a } = t, { sortBy: s } = t, { sortOrder: f } = t, { selectedTitle: l } = t, { selectedMetadata: c } = t, u = [], d = [], h = [], m = !0, p = [];
  lf(() => {
    y(r, i);
  });
  function y(b, w) {
    if (b != null && w != null) {
      let x = document.createElement("div"), C = JSON.parse(b);
      n(5, u = C);
      let k = JSON.parse(w);
      n(6, h = k);
      for (var v = 0; v < Object.keys(u[0]).length; v++) {
        const T = Object.keys(u[0])[v];
        d.push({
          key: T,
          title: T,
          value: (D) => D[T],
          sortable: !0,
          parseHTML: !0
        });
      }
      n(7, m = !1), setTimeout(() => n(7, m = !0), 0), o.appendChild(x);
      let R = h.map((T) => T.concept);
      n(8, p = [...new Set(R)]);
    }
  }
  return e.$$set = (b) => {
    "data" in b && n(10, r = b.data), "dataLong" in b && n(11, i = b.dataLong), "el" in b && n(12, o = b.el), "filterItems" in b && n(0, a = b.filterItems), "sortBy" in b && n(1, s = b.sortBy), "sortOrder" in b && n(2, f = b.sortOrder), "selectedTitle" in b && n(3, l = b.selectedTitle), "selectedMetadata" in b && n(4, c = b.selectedMetadata);
  }, [
    a,
    s,
    f,
    l,
    c,
    u,
    h,
    m,
    p,
    d,
    r,
    i,
    o
  ];
}
class s7 extends un {
  constructor(t) {
    super(), cn(this, t, a7, o7, Et, {
      data: 10,
      dataLong: 11,
      el: 12,
      filterItems: 0,
      sortBy: 1,
      sortOrder: 2,
      selectedTitle: 3,
      selectedMetadata: 4
    });
  }
}
function f7(e) {
  let t;
  return {
    c() {
      t = Q("div");
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t);
    }
  };
}
function l7(e) {
  let t = [];
  return e = JSON.parse(e), e.forEach((n) => {
    n.id == "All" && t.push({ name: n.concept, n: n.n });
  }), t;
}
function c7(e, t, n) {
  let { data: r } = t, { div: i } = t;
  r = l7(r);
  let a = 100 * r.length;
  const s = ya({
    marks: [
      fl(),
      Lg(r, {
        x: "name",
        y: "n",
        fill: "#A1D1FC",
        tip: !0,
        sort: { x: "y", reverse: !0, limit: 20 }
      }),
      Li({ label: "", lineWidth: 4 }),
      Ri({ label: "Number of documents" })
    ],
    // percent: true,
    marginBottom: 50,
    width: a,
    height: 200
  });
  return i.replaceChildren(s), e.$$set = (f) => {
    "data" in f && n(0, r = f.data), "div" in f && n(1, i = f.div);
  }, [r, i];
}
class u7 extends un {
  constructor(t) {
    super(), cn(this, t, c7, f7, Et, { data: 0, div: 1 });
  }
}
function Yu(e) {
  let t, n, r, i, o, a = (
    /*histDiv*/
    e[14]
  ), s, f, l, c, u, d, h, m = (
    /*matrixDiv*/
    e[15]
  ), p, y, b, w, v = Vu(e), x = Gu(e);
  const C = [b7, p7], k = [];
  function R(T, D) {
    return (
      /*selectedMatrixElem*/
      T[8] == "cell" || /*selectedMatrixElem*/
      T[8] == "concept" ? 0 : (
        /*selectedMatrixElem*/
        T[8] == "group" ? 1 : -1
      )
    );
  }
  return ~(y = R(e)) && (b = k[y] = C[y](e)), {
    c() {
      t = Q("h2"), t.textContent = "CONCEPT OVERVIEW", n = ye(), r = Q("p"), r.innerHTML = "An overview of concepts in your dataset. <i>Outliers</i> are documents that did not match any of the concepts.", i = ye(), o = Q("div"), v.c(), s = ye(), f = Q("h2"), f.textContent = "CONCEPT MATRIX", l = ye(), c = Q("div"), c.innerHTML = "<p>A view of <b>concepts</b> (rows) and <b>slices</b> (columns). <b>Click on a concept or slice name</b> to view details. <br/>The <b>size</b> of the circles indicates the <b>number of documents</b> in a given concept and slice.</p> <ul><li><b>Concepts</b> (rows): LLooM-generated concept matches</li> <li><b>Slices</b> (columns): User-specified data groupings</li> <ul><li>The default <i>All</i> slice includes all documents.</li> <li>Provide your own <code>slice_col</code> for custom slices based on a string or numeric column in your dataset.</li></ul></ul>", u = ye(), d = Q("div"), h = Q("div"), x.c(), p = ye(), b && b.c(), K(t, "class", "card-title"), K(o, "id", "histDiv"), K(o, "class", "overview-hist"), K(f, "class", "card-title"), K(h, "id", "matrixDiv"), K(h, "class", "matrix"), K(d, "id", "matrixWidget"), K(d, "class", "matrix-widget");
    },
    m(T, D) {
      ee(T, t, D), ee(T, n, D), ee(T, r, D), ee(T, i, D), ee(T, o, D), v.m(o, null), e[18](o), ee(T, s, D), ee(T, f, D), ee(T, l, D), ee(T, c, D), ee(T, u, D), ee(T, d, D), re(d, h), x.m(h, null), e[19](h), re(d, p), ~y && k[y].m(d, null), w = !0;
    },
    p(T, D) {
      D & /*histDiv*/
      16384 && Et(a, a = /*histDiv*/
      T[14]) ? (Pe(), ie(v, 1, 1, pe), Be(), v = Vu(T), v.c(), te(v, 1), v.m(o, null)) : v.p(T, D), D & /*matrixDiv*/
      32768 && Et(m, m = /*matrixDiv*/
      T[15]) ? (Pe(), ie(x, 1, 1, pe), Be(), x = Gu(T), x.c(), te(x, 1), x.m(h, null)) : x.p(T, D);
      let F = y;
      y = R(T), y === F ? ~y && k[y].p(T, D) : (b && (Pe(), ie(k[F], 1, 1, () => {
        k[F] = null;
      }), Be()), ~y ? (b = k[y], b ? b.p(T, D) : (b = k[y] = C[y](T), b.c()), te(b, 1), b.m(d, null)) : b = null);
    },
    i(T) {
      w || (te(v), te(x), te(b), w = !0);
    },
    o(T) {
      ie(v), ie(x), ie(b), w = !1;
    },
    d(T) {
      T && (J(t), J(n), J(r), J(i), J(o), J(s), J(f), J(l), J(c), J(u), J(d)), v.d(T), e[18](null), x.d(T), e[19](null), ~y && k[y].d();
    }
  };
}
function d7(e) {
  let t, n;
  return t = new u7({
    props: {
      data: (
        /*data*/
        e[1]
      ),
      div: (
        /*histDiv*/
        e[14]
      )
    }
  }), {
    c() {
      mt(t.$$.fragment);
    },
    m(r, i) {
      st(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*data*/
      2 && (o.data = /*data*/
      r[1]), i & /*histDiv*/
      16384 && (o.div = /*histDiv*/
      r[14]), t.$set(o);
    },
    i(r) {
      n || (te(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ft(t, r);
    }
  };
}
function h7(e) {
  let t;
  return {
    c() {
      t = Q("p"), t.textContent = "Loading...";
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t);
    }
  };
}
function Vu(e) {
  let t, n, r, i;
  const o = [h7, d7], a = [];
  function s(f, l) {
    return (
      /*histDiv*/
      f[14] == null ? 0 : 1
    );
  }
  return t = s(e), n = a[t] = o[t](e), {
    c() {
      n.c(), r = br();
    },
    m(f, l) {
      a[t].m(f, l), ee(f, r, l), i = !0;
    },
    p(f, l) {
      let c = t;
      t = s(f), t === c ? a[t].p(f, l) : (Pe(), ie(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[t], n ? n.p(f, l) : (n = a[t] = o[t](f), n.c()), te(n, 1), n.m(r.parentNode, r));
    },
    i(f) {
      i || (te(n), i = !0);
    },
    o(f) {
      ie(n), i = !1;
    },
    d(f) {
      f && J(r), a[t].d(f);
    }
  };
}
function m7(e) {
  let t, n;
  return t = new np({
    props: {
      data: (
        /*data*/
        e[1]
      ),
      div: (
        /*matrixDiv*/
        e[15]
      ),
      numConcepts: (
        /*numConcepts*/
        e[6]
      ),
      numSlices: (
        /*numSlices*/
        e[7]
      ),
      sliceCol: (
        /*sliceCol*/
        e[4]
      ),
      normBy: (
        /*normBy*/
        e[5]
      )
    }
  }), t.$on(
    "message",
    /*handleMatrixEvent*/
    e[16]
  ), {
    c() {
      mt(t.$$.fragment);
    },
    m(r, i) {
      st(t, r, i), n = !0;
    },
    p(r, i) {
      const o = {};
      i & /*data*/
      2 && (o.data = /*data*/
      r[1]), i & /*matrixDiv*/
      32768 && (o.div = /*matrixDiv*/
      r[15]), i & /*numConcepts*/
      64 && (o.numConcepts = /*numConcepts*/
      r[6]), i & /*numSlices*/
      128 && (o.numSlices = /*numSlices*/
      r[7]), i & /*sliceCol*/
      16 && (o.sliceCol = /*sliceCol*/
      r[4]), i & /*normBy*/
      32 && (o.normBy = /*normBy*/
      r[5]), t.$set(o);
    },
    i(r) {
      n || (te(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ft(t, r);
    }
  };
}
function g7(e) {
  let t;
  return {
    c() {
      t = Q("p"), t.textContent = "Loading...";
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && J(t);
    }
  };
}
function Gu(e) {
  let t, n, r, i;
  const o = [g7, m7], a = [];
  function s(f, l) {
    return (
      /*matrixDiv*/
      f[15] == null ? 0 : 1
    );
  }
  return t = s(e), n = a[t] = o[t](e), {
    c() {
      n.c(), r = br();
    },
    m(f, l) {
      a[t].m(f, l), ee(f, r, l), i = !0;
    },
    p(f, l) {
      let c = t;
      t = s(f), t === c ? a[t].p(f, l) : (Pe(), ie(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[t], n ? n.p(f, l) : (n = a[t] = o[t](f), n.c()), te(n, 1), n.m(r.parentNode, r));
    },
    i(f) {
      i || (te(n), i = !0);
    },
    o(f) {
      ie(n), i = !1;
    },
    d(f) {
      f && J(r), a[t].d(f);
    }
  };
}
function p7(e) {
  let t, n, r;
  return n = new s7({
    props: {
      data: (
        /*dataItemsWide*/
        e[3]
      ),
      dataLong: (
        /*dataItems*/
        e[2]
      ),
      el: (
        /*el*/
        e[0]
      ),
      filterItems: (
        /*filterItems*/
        e[9]
      ),
      sortBy: (
        /*sortBy*/
        e[10]
      ),
      sortOrder: (
        /*sortOrder*/
        e[11]
      ),
      selectedTitle: (
        /*selectedTitle*/
        e[12]
      ),
      selectedMetadata: (
        /*selectedMetadata*/
        e[13]
      )
    }
  }), {
    c() {
      t = Q("div"), mt(n.$$.fragment), K(t, "id", "tableDiv"), K(t, "class", "tables");
    },
    m(i, o) {
      ee(i, t, o), st(n, t, null), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*dataItemsWide*/
      8 && (a.data = /*dataItemsWide*/
      i[3]), o & /*dataItems*/
      4 && (a.dataLong = /*dataItems*/
      i[2]), o & /*el*/
      1 && (a.el = /*el*/
      i[0]), o & /*filterItems*/
      512 && (a.filterItems = /*filterItems*/
      i[9]), o & /*sortBy*/
      1024 && (a.sortBy = /*sortBy*/
      i[10]), o & /*sortOrder*/
      2048 && (a.sortOrder = /*sortOrder*/
      i[11]), o & /*selectedTitle*/
      4096 && (a.selectedTitle = /*selectedTitle*/
      i[12]), o & /*selectedMetadata*/
      8192 && (a.selectedMetadata = /*selectedMetadata*/
      i[13]), n.$set(a);
    },
    i(i) {
      r || (te(n.$$.fragment, i), r = !0);
    },
    o(i) {
      ie(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && J(t), ft(n);
    }
  };
}
function b7(e) {
  let t, n, r;
  return n = new t7({
    props: {
      data: (
        /*dataItems*/
        e[2]
      ),
      el: (
        /*el*/
        e[0]
      ),
      filterItems: (
        /*filterItems*/
        e[9]
      ),
      selectedTitle: (
        /*selectedTitle*/
        e[12]
      ),
      selectedMetadata: (
        /*selectedMetadata*/
        e[13]
      ),
      sliceCol: (
        /*sliceCol*/
        e[4]
      )
    }
  }), {
    c() {
      t = Q("div"), mt(n.$$.fragment), K(t, "id", "tableDiv"), K(t, "class", "tables");
    },
    m(i, o) {
      ee(i, t, o), st(n, t, null), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*dataItems*/
      4 && (a.data = /*dataItems*/
      i[2]), o & /*el*/
      1 && (a.el = /*el*/
      i[0]), o & /*filterItems*/
      512 && (a.filterItems = /*filterItems*/
      i[9]), o & /*selectedTitle*/
      4096 && (a.selectedTitle = /*selectedTitle*/
      i[12]), o & /*selectedMetadata*/
      8192 && (a.selectedMetadata = /*selectedMetadata*/
      i[13]), o & /*sliceCol*/
      16 && (a.sliceCol = /*sliceCol*/
      i[4]), n.$set(a);
    },
    i(i) {
      r || (te(n.$$.fragment, i), r = !0);
    },
    o(i) {
      ie(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && J(t), ft(n);
    }
  };
}
function y7(e) {
  let t, n, r = (
    /*numConcepts*/
    e[6] > 0 && Yu(e)
  );
  return {
    c() {
      t = Q("div"), r && r.c();
    },
    m(i, o) {
      ee(i, t, o), r && r.m(t, null), n = !0;
    },
    p(i, [o]) {
      /*numConcepts*/
      i[6] > 0 ? r ? (r.p(i, o), o & /*numConcepts*/
      64 && te(r, 1)) : (r = Yu(i), r.c(), te(r, 1), r.m(t, null)) : r && (Pe(), ie(r, 1, 1, () => {
        r = null;
      }), Be());
    },
    i(i) {
      n || (te(r), n = !0);
    },
    o(i) {
      ie(r), n = !1;
    },
    d(i) {
      i && J(t), r && r.d();
    }
  };
}
function w7(e, t, n) {
  let { model: r } = t, { el: i } = t, o, a, s, f, l, c, u, d, h, m, p, y, b, w, v;
  o = r.get("data"), a = r.get("data_items"), s = r.get("data_items_wide"), f = r.get("metadata"), l = JSON.parse(f), c = r.get("slice_col"), u = r.get("norm_by"), d = Object.keys(l.concepts).length, h = Object.keys(l.items).length;
  let x, C;
  function k() {
    n(8, m = null), n(9, p = {}), n(12, w = null), n(13, v = null);
  }
  function R(F) {
    let N = F.detail.col, B = F.detail.row, V = F.detail.selection_type;
    if (V == "cell") {
      if (N == null)
        k();
      else {
        n(8, m = "cell"), n(9, p = { id: N, concept: B }), n(12, w = "Slice: " + N + ", Concept: " + B);
        let U = l.items[N], L = l.concepts[B];
        n(13, v = Object.assign(U, L));
      }
      n(10, y = null), n(11, b = 0);
    } else if (V == "col") {
      let U = F.detail.sortOrder;
      N == null ? k() : (n(8, m = "group"), n(9, p = { id: N }), c.length > 0 ? n(12, w = "Slice: " + c + ": " + N) : n(12, w = "Slice: " + N), n(13, v = l.items[N]), n(10, y = "concept_score"), U == 0 ? n(11, b = 0) : U == 1 ? n(11, b = 1) : U == 2 && n(11, b = -1));
    } else if (V == "row") {
      let U = F.detail.sortOrder;
      B == null ? (k(), n(11, b = 0)) : (n(8, m = "concept"), n(9, p = { concept: B }), n(12, w = "Concept: " + B), n(13, v = l.concepts[B]), n(10, y = "concept_score"), U == 0 ? n(11, b = 0) : U == 1 ? n(11, b = 1) : U == 2 && n(11, b = -1));
    }
  }
  function T(F) {
    ir[F ? "unshift" : "push"](() => {
      x = F, n(14, x);
    });
  }
  function D(F) {
    ir[F ? "unshift" : "push"](() => {
      C = F, n(15, C);
    });
  }
  return e.$$set = (F) => {
    "model" in F && n(17, r = F.model), "el" in F && n(0, i = F.el);
  }, [
    i,
    o,
    a,
    s,
    c,
    u,
    d,
    h,
    m,
    p,
    y,
    b,
    w,
    v,
    x,
    C,
    R,
    r,
    T,
    D
  ];
}
class _7 extends un {
  constructor(t) {
    super(), cn(this, t, w7, y7, Et, { model: 17, el: 0 });
  }
}
function x7({ model: e, el: t }) {
  let n = new _7({ target: t, props: { model: e, el: t } });
  return () => n.$destroy();
}
export {
  x7 as render
};
