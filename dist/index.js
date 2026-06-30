import { clsx as e } from "clsx";
import { twMerge as t } from "tailwind-merge";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/lib/utils.ts
function i(...n) {
	return t(e(n));
}
//#endregion
//#region src/components/color-radio.tsx
function a({ children: e, className: t }) {
	return /* @__PURE__ */ n("div", {
		className: i("flex gap-2 lg:gap-3", t),
		children: e
	});
}
function o({ children: e, onClick: t, className: r }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: i("cursor-pointer flex w-max h-max p-1 items-center justify-center border transition-colors", r),
		onClick: t,
		children: e
	});
}
//#endregion
//#region src/components/counter.tsx
function s({ children: e, onAdd: t, onSubtract: a, className: o }) {
	return /* @__PURE__ */ r("div", {
		className: i("h-11 lg:h-14 col-span-12 flex items-center gap-1 border font-medium md:col-span-4", o),
		children: [
			/* @__PURE__ */ n("button", {
				className: "px-3 lg:px-5 cursor-pointer flex h-full max-w-14 items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90",
				onClick: a,
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					className: "size-4",
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"data-class": "lucide lucide-minus-icon lucide-minus",
					children: [/* @__PURE__ */ n("title", { children: "minus" }), /* @__PURE__ */ n("path", { d: "M5 12h14" })]
				})
			}),
			/* @__PURE__ */ n("span", {
				className: "grow flex items-center justify-center text-center tabular-nums",
				children: e
			}),
			/* @__PURE__ */ n("button", {
				className: "px-3 lg:px-5 cursor-pointer flex h-full max-w-14 items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90",
				onClick: t,
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					className: "size-4",
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"data-class": "lucide lucide-plus-icon lucide-plus",
					children: [
						/* @__PURE__ */ n("title", { children: "plus" }),
						/* @__PURE__ */ n("path", { d: "M5 12h14" }),
						/* @__PURE__ */ n("path", { d: "M12 5v14" })
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/pagination.tsx
function c({ currentPage: e, totalPages: t, onPageChange: a, maxPages: o = 7 }) {
	let s = (e) => {
		let t = document.querySelector("#product-browser");
		t ? t.scrollIntoView() : window.scrollTo({ top: 0 }), a(e);
	}, c = l(e, t, o);
	return /* @__PURE__ */ r("div", {
		className: "mt-20 flex items-center justify-center select-none",
		children: [
			/* @__PURE__ */ n("button", {
				title: "Previous Page",
				"aria-label": "Previous Page",
				className: "flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-foreground disabled:opacity-30 cursor-pointer hover:bg-foreground/5 disabled:cursor-not-allowed",
				disabled: e === 1,
				onClick: () => s(e - 1),
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					fill: "none",
					height: "12",
					viewBox: "0 0 6 12",
					width: "6",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ n("title", { children: "Previous" }), /* @__PURE__ */ n("path", {
						d: "M5 1L1 6L5 11",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.5"
					})]
				})
			}),
			c.map((t) => t === "ellipsis" ? /* @__PURE__ */ n("span", {
				className: "flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-muted-foreground",
				children: /* @__PURE__ */ r("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					"data-class": "lucide lucide-ellipsis-icon lucide-ellipsis",
					children: [
						/* @__PURE__ */ n("title", { children: "Ellipsis" }),
						/* @__PURE__ */ n("circle", {
							cx: "12",
							cy: "12",
							r: "0.5"
						}),
						/* @__PURE__ */ n("circle", {
							cx: "19",
							cy: "12",
							r: "0.5"
						}),
						/* @__PURE__ */ n("circle", {
							cx: "5",
							cy: "12",
							r: "0.5"
						})
					]
				})
			}, `ellipsis-${t}`) : /* @__PURE__ */ n("button", {
				className: i("flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-sm transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed", t === e ? "font-semibold bg-pagination-active-background text-pagination-active-foreground" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"),
				disabled: t === e,
				onClick: () => s(t),
				type: "button",
				"aria-label": `Page ${t}`,
				title: `Page ${t}`,
				children: t
			}, t)),
			/* @__PURE__ */ n("button", {
				title: "Next Page",
				"aria-label": "Next Page",
				className: "flex h-9 lg:h-10 w-9 lg:w-10 items-center justify-center text-foreground disabled:opacity-30 cursor-pointer hover:bg-foreground/5 disabled:cursor-not-allowed",
				disabled: e === t,
				onClick: () => s(e + 1),
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					fill: "none",
					height: "12",
					viewBox: "0 0 6 12",
					width: "6",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ n("title", { children: "Next" }), /* @__PURE__ */ n("path", {
						d: "M1 1L5 6L1 11",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: "1.5"
					})]
				})
			})
		]
	});
}
function l(e, t, n) {
	if (t <= n) return Array.from({ length: t }, (e, t) => t + 1);
	let r = [], i = Math.max(1, Math.floor((n - 4) / 2)), a = Math.max(2, e - i), o = Math.min(t - 1, e + i);
	r.push(1), a > 2 && r.push("ellipsis");
	for (let e = a; e <= o; e++) r.push(e);
	return o < t - 1 && r.push("ellipsis"), r.push(t), r;
}
//#endregion
//#region src/components/size-radio.tsx
function u({ children: e, className: t }) {
	return /* @__PURE__ */ n("div", {
		className: i("flex gap-2 lg:gap-3", t),
		children: e
	});
}
function d({ children: e, onClick: t, className: r }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: i("cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border font-medium text-sm transition-colors", r),
		onClick: t,
		children: e
	});
}
//#endregion
//#region src/components/product/product-card.tsx
function f({ className: e, title: t, imageUrl: a, isSale: o, colors: s, formattedPrice: c, formattedStrikedPrice: l }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "product-card",
		className: i("group relative flex flex-col gap-4", e),
		children: [
			/* @__PURE__ */ n(g, {
				src: a,
				alt: t
			}),
			/* @__PURE__ */ n(_, {
				title: t,
				formattedPrice: c,
				formattedStrikedPrice: l,
				isSale: o
			}),
			s && s.length > 0 && /* @__PURE__ */ n(h, { colors: s })
		]
	});
}
function p({ formattedPrice: e, formattedStrikedPrice: t }) {
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col-reverse gap-2 text-base leading-normal md:flex-row md:items-baseline",
		children: [/* @__PURE__ */ n("span", { children: e }), t && /* @__PURE__ */ n("span", {
			className: "text-foreground/50 text-sm line-through",
			children: t
		})]
	});
}
function m() {
	return /* @__PURE__ */ n("div", {
		className: "inline-flex h-5.5 w-11.25 items-center justify-center bg-sale-badge-background text-sale-badge-foreground px-2.5 py-1 font-normal text-[10px]",
		children: "SALE"
	});
}
function h({ colors: e }) {
	return /* @__PURE__ */ n("div", {
		className: "mt-1 flex gap-1.5",
		children: e.map((e) => /* @__PURE__ */ n("div", {
			className: "h-1.5 w-5 rounded-full",
			style: { backgroundColor: e }
		}, e))
	});
}
function g({ src: e, alt: t }) {
	return /* @__PURE__ */ n("div", {
		className: "aspect-270/320 w-full overflow-hidden bg-foreground/5",
		children: /* @__PURE__ */ n("img", {
			alt: t,
			className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
			height: 320,
			src: e,
			width: 270
		})
	});
}
function _({ title: e, formattedPrice: t, formattedStrikedPrice: i, isSale: a }) {
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col-reverse justify-between gap-1.5 md:flex-row",
		children: [/* @__PURE__ */ r("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ n("h3", {
				className: "line-clamp-2 font-semibold text-base leading-normal",
				children: e
			}), /* @__PURE__ */ n(p, {
				formattedPrice: t,
				formattedStrikedPrice: i
			})]
		}), a && /* @__PURE__ */ n(m, {})]
	});
}
//#endregion
export { a as ColorRadio, o as ColorRadioItem, s as Counter, c as Pagination, f as ProductCard, _ as ProductCardContent, g as ProductCardImage, p as ProductCardPrice, h as ProductColors, m as ProductSaleBadge, u as SizeRadio, d as SizeRadioItem };
