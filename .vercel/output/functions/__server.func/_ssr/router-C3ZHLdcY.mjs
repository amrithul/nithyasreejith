import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C3ZHLdcY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DhcLfdQ6.css";
var TITLE = "Nithya & Sreejith — Wedding Invitation";
var DESCRIPTION = "With immense joy, Mr. Sreenivasan & Mrs. Bindu seek your gracious presence and blessings on the wedding of their daughter Nithya with Sreejith. Sunday, 6th December 2026, between 9.30 AM & 10.30 AM, at Hitech Auditorium, Pirayiri, Palakkad.";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#f6f0e6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preload",
				href: "/fonts/cormorant-400.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/great-vibes.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
/** Facts printed on the invitation. Do not add events or details that are not here. */
var couple = {
	bride: "Nithya",
	groom: "Sreejith"
};
var motto = "Two Souls One Journey";
var invitationLines = [
	"With immense joy,",
	"we seek your gracious presence and blessings",
	"on the auspicious occasion of",
	"the wedding of our daughter"
];
var closingLines = ["Your gracious presence and blessings", "will make the occasion truly special"];
var compliments = ["With best compliments", "Relatives and friends"];
var brideFamily = {
	parents: "Mr. Sreenivasan & Mrs. Bindu",
	house: "'Thiruvathira'",
	address: "West Yakkara, Palakkad - 678 001",
	phones: [{
		number: "9446290265",
		name: "Sreeni"
	}, {
		number: "9447620676",
		name: "Bindu"
	}]
};
var groomFamily = {
	line: "Son of Mrs. Shylaja & the late Mr. Sudheesh,",
	place: "Pirayiri, Palakkad"
};
var when = {
	day: "Sunday",
	date: "6th December 2026",
	malayalam: "Vrischikam 20, 1202",
	time: "Between 9.30 AM & 10.30 AM",
	/** Ceremony window begins. Asia/Kolkata, as printed. */
	startIso: "2026-12-06T09:30:00+05:30",
	endIso: "2026-12-06T10:30:00+05:30"
};
var venue = {
	name: "Hitech Auditorium",
	place: "Pirayiri, Palakkad",
	/** Printed address only — nothing added. */
	address: "Hitech Auditorium, Pirayiri, Palakkad",
	/** The hall named on the card, resolved for directions. */
	mapsQuery: "Hi Tech Auditorium, Pirayiri, Palakkad",
	/** Public listing pin for that same hall. */
	lat: 10.7700045,
	lng: 76.6181127
};
function mapsDirectionsUrl() {
	return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.mapsQuery)}`;
}
function whatsAppShareText(pageUrl) {
	return [
		"With immense joy, we seek your gracious presence and blessings on the wedding of Nithya & Sreejith.",
		"",
		"Sunday, 6th December 2026",
		"Between 9.30 AM & 10.30 AM",
		"Hitech Auditorium, Pirayiri, Palakkad",
		"",
		pageUrl
	].join("\n");
}
function waMe(phone) {
	return `https://wa.me/91${phone}`;
}
var nav = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#wedding",
		label: "Wedding"
	},
	{
		href: "#venue",
		label: "Venue"
	},
	{
		href: "#gallery",
		label: "Photos"
	}
];
var gallery = [
	{
		src: "/photos/stand.jpg",
		thumb: "/photos/stand-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith standing together in front of a floral wedding arch"
	},
	{
		src: "/photos/gaze.jpg",
		thumb: "/photos/gaze-sm.jpg",
		width: 1600,
		height: 1066,
		wide: true,
		alt: "Nithya and Sreejith seated, smiling at each other"
	},
	{
		src: "/photos/bride.jpg",
		thumb: "/photos/bride-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Portrait of Nithya in a maroon lehenga with gold jewellery"
	},
	{
		src: "/photos/groom.jpg",
		thumb: "/photos/groom-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Portrait of Sreejith in a lavender kurta"
	},
	{
		src: "/photos/close.jpg",
		thumb: "/photos/close-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Close portrait of Nithya leaning on Sreejith, her hennaed hand on his shoulder"
	},
	{
		src: "/photos/embrace.jpg",
		thumb: "/photos/embrace-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya smiling with her arm around Sreejith"
	},
	{
		src: "/photos/rings.jpg",
		thumb: "/photos/rings-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith holding their rings, her hand decorated with henna"
	},
	{
		src: "/photos/lights.jpg",
		thumb: "/photos/lights-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith standing close beside a floral arrangement and warm lights"
	},
	{
		src: "/photos/shoulder.jpg",
		thumb: "/photos/shoulder-sm.jpg",
		width: 1200,
		height: 1600,
		alt: "Nithya standing behind seated Sreejith, her hand on his shoulder"
	},
	{
		src: "/photos/sofa.jpg",
		thumb: "/photos/sofa-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith seated together on a sofa before the floral arch"
	},
	{
		src: "/photos/bubbles.jpg",
		thumb: "/photos/bubbles-sm.jpg",
		width: 1200,
		height: 1600,
		alt: "Nithya and Sreejith smiling at each other as bubbles float past"
	},
	{
		src: "/photos/arch.jpg",
		thumb: "/photos/arch-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya standing beside seated Sreejith in front of the floral arch"
	},
	{
		src: "/photos/hands.jpg",
		thumb: "/photos/hands-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith holding hands and smiling on the lawn"
	},
	{
		src: "/photos/lawn-walk.jpg",
		thumb: "/photos/lawn-walk-sm.jpg",
		width: 1066,
		height: 1600,
		alt: "Nithya and Sreejith walking together across a lawn, palm trees behind them"
	}
];
var $$splitComponentImporter = () => import("./routes-BLDjHxBD.mjs");
var eventJson = {
	"@context": "https://schema.org",
	"@type": "Event",
	name: "Wedding of Nithya and Sreejith",
	startDate: when.startIso,
	endDate: when.endIso,
	eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
	eventStatus: "https://schema.org/EventScheduled",
	location: {
		"@type": "Place",
		name: venue.name,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Pirayiri",
			addressRegion: "Palakkad",
			addressCountry: "IN"
		}
	},
	description: "Wedding of Nithya, daughter of Mr. Sreenivasan and Mrs. Bindu, with Sreejith, son of Mrs. Shylaja and the late Mr. Sudheesh. Sunday, 6th December 2026, between 9.30 AM and 10.30 AM, Hitech Auditorium, Pirayiri, Palakkad.",
	organizer: {
		"@type": "Person",
		name: "Mr. Sreenivasan & Mrs. Bindu"
	}
};
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ scripts: [{
		type: "application/ld+json",
		children: JSON.stringify(eventJson)
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { couple as a, invitationLines as c, nav as d, venue as f, when as h, compliments as i, mapsDirectionsUrl as l, whatsAppShareText as m, brideFamily as n, gallery as o, waMe as p, closingLines as r, groomFamily as s, router_exports as t, motto as u };
