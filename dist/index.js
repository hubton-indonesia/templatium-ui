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
function o({ children: e, value: t, onClick: r, className: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: i("cursor-pointer flex w-max h-max p-1 items-center justify-center border transition-colors", a),
		onClick: () => r(t),
		children: e
	});
}
//#endregion
//#region src/components/size-radio.tsx
function s({ children: e, className: t }) {
	return /* @__PURE__ */ n("div", {
		className: i("flex gap-2 lg:gap-3", t),
		children: e
	});
}
function c({ children: e, value: t, onClick: r, className: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: i("cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border font-medium text-sm transition-colors", a),
		onClick: () => r(t),
		children: e
	});
}
//#endregion
//#region src/components/counter.tsx
function l({ children: e, onAdd: t, onSubtract: a, className: o }) {
	return /* @__PURE__ */ r("div", {
		className: i("h-9 lg:h-14 col-span-12 grid grid-cols-3 gap-1 border font-medium md:col-span-4", o),
		children: [
			/* @__PURE__ */ n("button", {
				className: "cursor-pointer aspect-square flex h-full items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90",
				onClick: a,
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					className: "h-4 w-4",
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
				className: "cursor-pointer aspect-square flex h-full items-center justify-center transition-colors hover:scale-110 active:scale-95 lg:active:scale-80 active:opacity-90",
				onClick: t,
				type: "button",
				children: /* @__PURE__ */ r("svg", {
					className: "h-4 w-4",
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
export { a as ColorRadio, o as ColorRadioItem, l as Counter, s as SizeRadio, c as SizeRadioItem };
