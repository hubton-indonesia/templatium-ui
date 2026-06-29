import { clsx as e } from "clsx";
import { twMerge as t } from "tailwind-merge";
import { jsx as n } from "react/jsx-runtime";
//#region src/lib/utils.ts
function r(...n) {
	return t(e(n));
}
//#endregion
//#region src/components/color-radio.tsx
function i({ children: e, className: t }) {
	return /* @__PURE__ */ n("div", {
		className: r("flex gap-2 lg:gap-3", t),
		children: e
	});
}
function a({ children: e, value: t, onClick: i, className: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: r("cursor-pointer flex w-max h-max p-1 items-center justify-center border transition-colors", a),
		onClick: () => i(t),
		children: e
	});
}
//#endregion
//#region src/components/size-radio.tsx
function o({ children: e, className: t }) {
	return /* @__PURE__ */ n("div", {
		className: r("flex gap-2 lg:gap-3", t),
		children: e
	});
}
function s({ children: e, value: t, onClick: i, className: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: r("cursor-pointer flex h-9 lg:h-14 w-9 lg:w-14 items-center justify-center border font-medium text-sm transition-colors", a),
		onClick: () => i(t),
		children: e
	});
}
//#endregion
export { i as ColorRadio, a as ColorRadioItem, o as SizeRadio, s as SizeRadioItem };
