import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { G as Github, X, M as Menu, Z as Zap, P as Play, i as TriangleAlert, C as Check, V as Vault, c as Award, f as MessageSquareCode, a as ArrowLeftRight, U as UsersRound, g as Rocket, T as Terminal$1, d as CircleCheck, A as ArrowDownLeft, b as ArrowUpRight, R as Repeat, e as MessageCircle, S as Send, h as Shield } from "../_libs/lucide-react.mjs";
function Background() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#050505]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg grid-bg-fade opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-40 animate-pulse-glow",
        style: { background: "radial-gradient(circle, #00F0FF 0%, transparent 60%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full opacity-30 animate-pulse-glow",
        style: { background: "radial-gradient(circle, #C026D3 0%, transparent 60%)", animationDelay: "1.5s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-25 animate-pulse-glow",
        style: { background: "radial-gradient(circle, #FF00AA 0%, transparent 60%)", animationDelay: "3s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" })
  ] });
}
function Logo({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyan/40 bg-gradient-to-br from-cyan/20 to-transparent glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "h-5 w-5", fill: "none", stroke: "#00F0FF", strokeWidth: "2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "6", width: "16", height: "14", rx: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 10h16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "15", r: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6V4h8v2" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold tracking-tight text-white", children: [
      "Base",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "bank" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/60 sm:inline-block", children: "on BASE" })
  ] });
}
const links = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "rounded-lg px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-white/5",
                  children: l.label
                },
                l.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#",
                    className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                      "Connect GitHub"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#",
                    className: "relative inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-black glow-cyan transition hover:scale-[1.02]",
                    style: { backgroundColor: "#00F0FF" },
                    children: [
                      "Launch App",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "rounded-lg border border-white/10 p-2 lg:hidden",
                  onClick: () => setOpen((v) => !v),
                  "aria-label": "Toggle menu",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-2xl glass-strong p-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5",
              children: l.label
            },
            l.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-4 py-3 text-sm font-semibold text-black glow-cyan",
              style: { backgroundColor: "#00F0FF" },
              children: "Launch App"
            }
          )
        ] }) })
      ] })
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${shown ? "in" : ""} ${className}`, children });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-36 pb-20 sm:pt-44 sm:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75", style: { backgroundColor: "#00F0FF" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full", style: { backgroundColor: "#00F0FF" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "v1.0 · live on Base mainnet" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem]", children: [
        "The secure ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "on-chain bank" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "on Base"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg", children: [
        "Personal vault on Base. Manage bounties, projects, and payments langsung dari GitHub issues. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: "No wallet. No seed phrase. No approve." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.03] glow-cyan-lg",
            style: { backgroundColor: "#00F0FF" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
              "Deploy Your BaseVault",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
              "Watch Demo"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 320, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustItem, { children: "Built on Base" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustItem, { children: "Secured by GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustItem, { children: "Non-custodial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustItem, { children: "Soul-bound tokens" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, className: "mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroMockup, {}) })
  ] }) });
}
function Dot() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-white/20" });
}
function TrustItem({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3 text-cyan" }),
    children
  ] });
}
function HeroMockup() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-10 top-10 -z-10 h-[80%]", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-[3rem] opacity-70 blur-3xl",
        style: { background: "conic-gradient(from 90deg at 50% 50%, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:col-span-3 rounded-2xl glass-strong border-gradient p-5 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/5 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-xs text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28C840]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3", children: "github.com/basebank/core · Issue #142" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 border border-emerald-500/30", children: "Open" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "alex.eth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-white/40 font-mono text-xs", children: "commented · 2m ago" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/80", children: "Need help fixing the swap router edge case 🚀" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mt-2 inline-block rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-cyan", children: "/bounty 250 USDC" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-cyan/20 bg-cyan/5 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-cyan/20 glow-cyan", style: { boxShadow: "0 0 20px rgba(0,240,255,0.4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "h-4 w-4", fill: "none", stroke: "#00F0FF", strokeWidth: "2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "6", width: "16", height: "14", rx: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 10h16" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "basebank-bot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 rounded bg-cyan/20 px-1.5 py-0.5 font-mono text-[10px] text-cyan", children: "BOT" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 font-mono text-xs text-white/80", children: [
                "✓ Escrowed ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "250 USDC" }),
                " from vault · tx",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-purple", children: "0xa1f3…d2c8" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "maintainer" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mt-2 inline-block rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-neon-pink", children: "/pay @alex.eth" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:col-span-2 rounded-2xl glass-strong border-gradient p-5 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-white/40 font-mono", children: "BaseVault" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400" }),
            " Active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-white/40", children: "0x7f3a…b2e1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-4xl font-bold gradient-text-cyan text-glow-cyan", children: "$48,205.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-emerald-400", children: "+ $1,204.30 (24h)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-2", children: [
          { sym: "ETH", val: "12.4" },
          { sym: "USDC", val: "18.2k" },
          { sym: "DEGEN", val: "284k" }
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/8 bg-white/5 p-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-white/40", children: t.sym }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white text-sm", children: t.val })
        ] }, t.sym)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2 border-t border-white/5 pt-4", children: [
          { c: "/pay", d: "→ alex.eth", v: "+250 USDC", col: "text-emerald-400" },
          { c: "/swap", d: "ETH → USDC", v: "1.0 ETH", col: "text-cyan" },
          { c: "/bounty", d: "issue #98", v: "−100 USDC", col: "text-neon-pink" }
        ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-white/80", children: r.c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: r.d })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono ${r.col}`, children: r.v })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function useCountUp(target, duration = 2e3) {
  const [v, setV] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.floor(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { v, ref };
}
function StatBlock({ label, target, prefix = "", suffix = "" }) {
  const { v, ref } = useCountUp(target);
  const display = v.toLocaleString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl text-glow-cyan", children: [
      prefix,
      display,
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-wider text-white/50", children: label })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 rounded-3xl glass-strong border-gradient p-8 sm:p-12 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBlock, { label: "Vaults Deployed", target: 12480 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBlock, { label: "Total Value Locked", target: 84, prefix: "$", suffix: "M+" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBlock, { label: "Transactions", target: 342e3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBlock, { label: "Active Users", target: 28400 })
  ] }) }) }) });
}
const risks = [
  "Sign blind approvals you don't understand",
  "Lose everything to one malicious dApp",
  "Manage 12-word seed phrases manually",
  "Pay gas for every single approval"
];
const safe = [
  "GitHub-native auth — no seed phrase ever",
  "Scoped permissions per repo, per command",
  "Soul-bound BaseTokens locked to your identity",
  "Gasless commands inside your vault"
];
function Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "product", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-pink/30 bg-neon-pink/5 px-3 py-1 text-xs text-neon-pink font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3" }),
        " The problem"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl", children: [
        "Stop risking everything with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-pink", style: { textShadow: "0 0 30px rgba(255,0,170,0.5)" }, children: "wallet approvals." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/60", children: 'Every "approve" is a loaded gun pointing at your portfolio. Basebank flips the model: your funds live inside a non-custodial vault that only obeys signed GitHub commands — never blind contract approvals.' })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Wallet-first world", tone: "danger", items: risks, Icon: X }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Basebank world", tone: "cyan", items: safe, Icon: Check }) })
    ] })
  ] }) });
}
function Card({
  title,
  tone,
  items,
  Icon
}) {
  const accent = tone === "cyan" ? "#00F0FF" : "#FF00AA";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-2xl glass-strong border-gradient p-7 hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider",
          style: { borderColor: `${accent}55`, color: accent },
          children: tone === "cyan" ? "Secure" : "Risky"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          style: {
            background: `${accent}1f`,
            boxShadow: `0 0 16px ${accent}66`,
            color: accent
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" })
        }
      ),
      t
    ] }, t)) })
  ] });
}
const features = [
  {
    icon: Vault,
    title: "Personal Non-custodial BaseVault",
    desc: "Deploy a smart vault you own. Funds never leave your control — Basebank can only execute commands you sign via GitHub.",
    color: "#00F0FF"
  },
  {
    icon: Github,
    title: "GitHub Native Bounties & Payments",
    desc: "Post a bounty, pay a contributor, or settle an invoice with a single comment. Your repo becomes a treasury.",
    color: "#C026D3"
  },
  {
    icon: Award,
    title: "Soul-bound BaseTokens",
    desc: "Reputation tokens locked to your identity. Untradeable, unforgeable proof of contribution — directly on Base.",
    color: "#FF00AA"
  },
  {
    icon: MessageSquareCode,
    title: "Automatic Settlement via Issue Comments",
    desc: "Type /pay, /bounty, /swap, /split, or /tip. Basebank parses, escrows, and settles on-chain — gas optimized.",
    color: "#00F0FF"
  },
  {
    icon: ArrowLeftRight,
    title: "In-Vault Token Swaps",
    desc: "Swap ETH, USDC, DEGEN and 200+ Base tokens without leaving your vault. Aggregated routing, MEV protected.",
    color: "#C026D3"
  },
  {
    icon: UsersRound,
    title: "Team Workspaces",
    desc: "Shared vaults with role-based commands. Treasurers, contributors, and reviewers — all governed by GitHub.",
    color: "#FF00AA"
  }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono", children: "◆ Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", children: [
        "A full ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "on-chain bank" }),
        " for developers"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/60", children: "Built around the workflows you already live in — issues, PRs, and code reviews." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { ...f }) }, f.title)) })
  ] }) });
}
function FeatureCard({
  icon: Icon,
  title,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative h-full rounded-2xl glass-strong p-6 hover-lift overflow-hidden",
      style: { transitionProperty: "transform,box-shadow,border-color" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60",
            style: { background: color }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "inline-flex h-11 w-11 items-center justify-center rounded-xl",
            style: {
              background: `linear-gradient(135deg, ${color}33, transparent)`,
              border: `1px solid ${color}55`,
              boxShadow: `0 0 24px ${color}40`,
              color
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-white", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/60", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-1 text-xs font-mono text-white/40 group-hover:text-white transition", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] })
      ]
    }
  );
}
const steps = [
  {
    n: "01",
    icon: Github,
    title: "Connect GitHub → Deploy BaseVault",
    desc: "Sign in with GitHub, then deploy your personal non-custodial vault contract on Base in under 30 seconds."
  },
  {
    n: "02",
    icon: Rocket,
    title: "Add a Repository",
    desc: "Install the Basebank App on the repos you own or maintain. Set commands, roles, and bounty rules per repo."
  },
  {
    n: "03",
    icon: Terminal$1,
    title: "Use Commands in GitHub Issues",
    desc: "Type /pay, /bounty, /swap, /split, /tip directly in issue or PR comments. Basebank handles the rest."
  },
  {
    n: "04",
    icon: CircleCheck,
    title: "Automatic Settlement on Base",
    desc: "Bot escrows funds, verifies the recipient, settles on-chain, and posts the tx hash back to the thread."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 text-xs text-neon-purple font-mono", children: "⚡ How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", children: [
        "From GitHub issue to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "on-chain settlement" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-6 lg:grid-cols-2", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ...s }) }, s.n)) })
  ] }) });
}
function Step({ n, icon: Icon, title, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full rounded-2xl glass-strong border-gradient p-7 hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-6xl font-bold leading-none text-white/[0.06] group-hover:text-cyan/30 transition", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10",
          style: { boxShadow: "0 0 24px rgba(0,240,255,0.3)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-cyan" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-semibold text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: desc })
  ] });
}
function TerminalDemo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono", children: "$ live commands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl", children: [
        "Type a command. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "Basebank executes on Base." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-white/60", children: "Every command in a GitHub issue is parsed by our verifier, signed by your vault key, and broadcast on Base. No wallet popups. No approve. No risk." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-md", children: ["/pay", "/bounty", "/swap", "/split", "/tip", "/vault", "/claim", "/help"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-cyan", children: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, {}) })
  ] }) }) });
}
function Terminal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -inset-6 -z-10 rounded-[2rem] opacity-50 blur-3xl",
        style: { background: "radial-gradient(circle, #00F0FF40, transparent 70%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl glass-strong border-gradient", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/5 bg-black/30 px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28C840]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-white/40", children: "issue-142.bash · basebank-cli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-cyan", children: "● connected" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/40 p-5 font-mono text-[13px] leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { user: "alex.eth", children: "/bounty 250 USDC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Line, { bot: true, children: [
          "✓ Bounty escrowed from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "vault://0x7f3a…b2e1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "↳ tx ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-purple", children: "0xa1f3…d2c8" }),
          " · gas: 12,043"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { user: "maintainer", children: "/pay @alex.eth --label fixed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Line, { bot: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "→" }),
          " Sending ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "250 USDC" }),
          " to @alex.eth",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "✓ Settled · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-pink", children: "+5 BaseTokens" }),
          " minted (soul-bound)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { user: "alex.eth", children: "/swap 100 USDC → DEGEN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Line, { bot: true, children: [
          "✓ Routed via BaseSwap · slippage 0.08%",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "↳ received ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "2,418.45 DEGEN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-white/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "›" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "_" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-4 w-2 animate-pulse bg-cyan" })
        ] })
      ] })
    ] })
  ] });
}
function Line({ user, bot, children }) {
  if (bot) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 mb-3 rounded-md border-l-2 border-cyan/60 bg-cyan/5 px-3 py-2 text-white/85", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-cyan/80 mb-1", children: "basebank-bot" }),
      children
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: user }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: " $ " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children })
  ] });
}
function Dashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 font-mono", children: "◆ Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", children: [
        "Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "command center" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/60", children: "Vaults, repos, transactions and swaps — one clean surface." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl",
          style: { background: "conic-gradient(from 0deg, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl glass-strong border-gradient", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/5 bg-black/30 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-cyan glow-cyan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-white/60", children: "basebank.io/vault/0x7f3a…b2e1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-white/60", children: "⌘K" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 p-5 lg:grid-cols-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-1", children: ["Overview", "Vaults", "Repos", "Bounties", "Swaps", "Tokens", "Settings"].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-cyan/10 text-cyan border border-cyan/30" : "text-white/60 hover:bg-white/5"}`,
              children: n
            },
            n
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 via-transparent to-neon-purple/10 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-white/40 font-mono", children: "Total Balance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-bold gradient-text-cyan text-glow-cyan", children: "$248,930.42" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-emerald-400", children: "+$8,204.13 (24h) · +3.41%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-3", children: [
                { l: "Deposit", c: "#00F0FF", I: ArrowDownLeft },
                { l: "Send", c: "#C026D3", I: ArrowUpRight },
                { l: "Swap", c: "#FF00AA", I: Repeat }
              ].map(({ l, c, I }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10",
                  style: { boxShadow: `inset 0 0 0 1px ${c}22` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4", style: { color: c } }),
                    l
                  ]
                },
                l
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-white", children: "Recent transactions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: "last 24h" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                { t: "Bounty paid", to: "alex.eth", val: "−250 USDC", tag: "/pay", col: "text-neon-pink" },
                { t: "Swap executed", to: "ETH → USDC", val: "1.0 ETH", tag: "/swap", col: "text-cyan" },
                { t: "Bounty escrowed", to: "issue #142", val: "−250 USDC", tag: "/bounty", col: "text-neon-purple" },
                { t: "Deposit received", to: "0x4f…91", val: "+5,000 USDC", tag: "tx", col: "text-emerald-400" }
              ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `rounded bg-black/40 px-1.5 py-0.5 font-mono text-[10px] ${r.col}`, children: r.tag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: r.t }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/40", children: r.to })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono text-sm ${r.col}`, children: r.val })
              ] }, i)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-white/40 font-mono", children: "Connected Repos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: ["basebank/core", "basebank/contracts", "alex/web3-tools"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-white/80", children: r }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400" })
              ] }, r)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-white/40 font-mono", children: "BaseTokens" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-end gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: "1,284" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] text-neon-pink", children: "soul-bound" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-3/4 rounded-full", style: { background: "linear-gradient(90deg, #00F0FF, #C026D3)" } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] text-white/40", children: "Tier · Builder III" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-cyan/30 bg-cyan/5 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cyan", children: "⚡ Earn 2× tokens this week" }) })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
const partners = [
  "BASE",
  "GITHUB",
  "COINBASE",
  "UNISWAP",
  "AERODROME",
  "DEGEN",
  "OPENAI",
  "FARCASTER",
  "OPTIMISM",
  "1INCH",
  "CHAINLINK",
  "PYTH"
];
function Ecosystem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "ecosystem", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-pink/30 bg-neon-pink/5 px-3 py-1 text-xs text-neon-pink font-mono", children: "◆ Ecosystem" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", children: [
        "Powered by the best of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Base & beyond" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/60", children: "Integrated with the protocols, networks and AI agents you already trust." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14 overflow-hidden rounded-2xl glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee py-6 [width:max-content]", children: [...partners, ...partners].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md border border-white/10 bg-gradient-to-br from-white/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm tracking-widest text-white/50", children: p })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
      { t: "Base L2", d: "Native vault contracts deployed on Base — gas optimized, MEV protected." },
      { t: "GitHub App", d: "Verified GitHub identity becomes your on-chain signer. No extra accounts." },
      { t: "AI Agents", d: "LLM agents parse natural-language commands and route them safely on-chain." }
    ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl glass-strong p-6 hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-cyan", children: [
        "// ",
        String(i + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold text-white", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: c.d })
    ] }) }, c.t)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] glass-strong border-gradient p-10 sm:p-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full opacity-40 blur-3xl",
        style: { background: "conic-gradient(from 0deg, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono", children: "⚡ Ready in 30 seconds" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl", children: [
        "Ready to bank on Base ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "with confidence?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-white/60", children: "Deploy your BaseVault. Connect a repo. Replace every wallet popup with one signed comment." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-black glow-cyan-lg transition hover:scale-[1.03]",
            style: { backgroundColor: "#00F0FF" },
            children: [
              "Launch Basebank Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/10",
            children: "Read the docs"
          }
        )
      ] })
    ] })
  ] }) }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-white/5 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm text-white/55", children: "The secure on-chain bank on Base. Manage bounties, projects, and payments directly from GitHub." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-2", children: [
          { I: Github, label: "GitHub" },
          { I: XIcon, label: "X" },
          { I: MessageCircle, label: "Discord" },
          { I: Send, label: "Telegram" }
        ].map(({ I, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": label,
            className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Column, { title: "Product", links: ["BaseVault", "Bounties", "Swaps", "Tokens"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Column, { title: "Resources", links: ["Docs", "GitHub", "Blog", "Brand"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-white/40", children: "© 2026 Basebank — built on Base, secured by GitHub." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Security" })
      ] })
    ] })
  ] }) });
}
function Column({ title, links: links2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: links2.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-white/55 hover:text-white", children: l }) }, l)) })
  ] });
}
function XIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2H21l-6.52 7.45L22 22h-6.93l-4.51-6.03L5.4 22H2.64l6.97-7.96L2 2h7.09l4.07 5.5L18.244 2Zm-2.43 18h1.6L7.27 4H5.55l10.264 16Z" }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Background, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalDemo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ecosystem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
