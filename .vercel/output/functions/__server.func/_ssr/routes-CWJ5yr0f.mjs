import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Calendar, a as Phone, c as Images, d as Copy, f as Clock, g as Check, h as ChevronLeft, i as Share2, l as House, m as ChevronRight, n as Users, o as Navigation, p as ChevronUp, s as MapPin, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { _ as whatsAppShareText, a as compliments, c as googleCalendarUrl, d as mantra, f as mapsDirectionsUrl, g as waMe, h as venue, i as closingLines, l as groomFamily, m as nav, n as brideFamily, o as couple, p as motto, r as calendarIcs, s as gallery, u as invitationLines, v as when } from "./router-Dv0X9coe.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWJ5yr0f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CardOpen() {
	const [phase, setPhase] = (0, import_react.useState)("cover");
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setPhase("gone");
			return;
		}
		const id = window.setTimeout(() => setPhase((p) => p === "cover" ? "open" : p), 2200);
		return () => window.clearTimeout(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase !== "open") return;
		const id = window.setTimeout(() => setPhase("leaving"), 1300);
		return () => window.clearTimeout(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "leaving") return;
		const id = window.setTimeout(() => setPhase("gone"), 560);
		return () => window.clearTimeout(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase === "gone") return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (event) => {
			if (event.key === "Escape") setPhase("gone");
			if (event.key === "Enter" || event.key === " ") setPhase((p) => p === "cover" ? "open" : p);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [phase]);
	if (phase === "gone") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `card-stage ${phase === "open" || phase === "leaving" ? "is-open" : ""} ${phase === "leaving" ? "is-leaving" : ""}`,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Wedding card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-3d",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-inside",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-sm font-medium tracking-wide text-ink-soft uppercase",
						children: motto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "name mt-4 text-ink",
						children: couple.bride
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
						children: "with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "name text-ink",
						children: couple.groom
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 font-serif text-lg font-medium text-ink",
						children: [
							when.day,
							", ",
							when.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-base text-ink-soft",
						children: when.time
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "card-cover",
				onClick: () => setPhase((p) => p === "cover" ? "open" : p),
				"aria-label": "Open the wedding card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/stand.jpg",
						alt: "",
						width: 1066,
						height: 1600,
						className: "card-cover-photo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "card-cover-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "card-cover-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-xs font-medium tracking-widest uppercase",
								children: motto
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "card-cover-names",
								children: [
									couple.bride,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "card-cover-with",
										children: "with"
									}),
									couple.groom
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-base",
								children: [
									when.day,
									", ",
									when.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "card-open-hint",
								children: "Tap to open"
							})
						]
					})
				]
			})]
		})
	});
}
function Ornament({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-center gap-3 ${className}`,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold sm:w-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rotate-45 border border-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold sm:w-14" })
		]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-center font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
		children
	});
}
var primary = "inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-center font-serif text-base font-medium text-cream transition-colors hover:bg-ink-soft sm:w-auto";
var quiet = "inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ink/25 bg-transparent px-6 text-center font-serif text-base font-medium text-ink transition-colors hover:bg-cream-deep sm:w-auto";
function PrimaryLink({ href, children, external }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: primary,
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
function QuietLink({ href, children, external }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: quiet,
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
function QuietButton({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: quiet,
		children
	});
}
function Couple() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "couple",
		className: "section bg-cream-deep",
		"aria-labelledby": "couple-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The couple" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "couple-title",
							className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
							children: [
								couple.bride,
								" & ",
								couple.groom
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 md:grid-cols-2 md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/bride.jpg",
								alt: "Portrait of Nithya in a maroon lehenga with gold jewellery",
								width: 1066,
								height: 1600,
								loading: "lazy",
								className: "frame-portrait mx-auto w-full max-w-sm object-cover object-top"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "name mt-4 text-ink",
								children: couple.bride
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif text-lg text-ink",
								children: ["Daughter of ", brideFamily.parents]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base italic text-ink-soft",
								children: brideFamily.house
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base text-ink-soft",
								children: brideFamily.address
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/groom.jpg",
								alt: "Portrait of Sreejith in a lavender kurta",
								width: 1066,
								height: 1600,
								loading: "lazy",
								className: "frame-portrait mx-auto w-full max-w-sm object-cover object-top"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "name mt-4 text-ink",
								children: couple.groom
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-lg text-ink",
								children: groomFamily.line
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base text-ink-soft",
								children: groomFamily.place
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mx-auto mt-12 max-w-md text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/stand.jpg",
						alt: "Nithya and Sreejith standing together in front of a floral wedding arch",
						width: 1066,
						height: 1600,
						loading: "lazy",
						className: "mx-auto w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 font-serif text-base italic text-ink-soft",
						children: "Nithya & Sreejith"
					})]
				})
			]
		})
	});
}
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" })
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section bg-cream-deep",
		"aria-labelledby": "contact-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: brideFamily.parents
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-serif text-lg italic text-ink",
					children: brideFamily.house
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-lg text-ink-soft",
					children: brideFamily.address
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-pretty font-serif text-base text-ink-soft",
					children: "The numbers printed on the invitation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4 text-left",
					children: brideFamily.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line bg-cream p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center font-serif text-2xl font-medium tracking-wide text-ink tabular-nums",
							children: phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${phone}`,
								className: "inline-flex min-h-12 items-center justify-center gap-2 bg-ink font-serif text-base font-medium text-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Call"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waMe(phone),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-h-12 items-center justify-center gap-2 border border-ink/25 font-serif text-base font-medium text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
							})]
						})]
					}, phone))
				})
			]
		})
	});
}
var start = new Date(when.startIso).getTime();
function remaining(now) {
	const diff = start - now;
	if (diff <= 0) return {
		done: true,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	const total = Math.floor(diff / 1e3);
	return {
		done: false,
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
var units = [
	"Days",
	"Hours",
	"Minutes",
	"Seconds"
];
function Countdown() {
	const [tick, setTick] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const update = () => setTick(remaining(Date.now()));
		update();
		const id = window.setInterval(update, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		"aria-labelledby": "countdown-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sunday, 6th December 2026" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "countdown-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: tick?.done ? "The wedding day has arrived" : "We are getting married in"
				}),
				tick?.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 inline-flex items-center justify-center gap-2 font-serif text-xl text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-5 text-rose",
						fill: "currentColor",
						"aria-hidden": "true"
					}), "The Wedding Day Has Arrived"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-4 gap-2 sm:gap-4",
					role: "timer",
					"aria-live": "polite",
					"aria-atomic": "true",
					"aria-label": tick ? `${tick.days} days, ${tick.hours} hours, ${tick.minutes} minutes, ${tick.seconds} seconds until the wedding` : "Counting down to the wedding",
					children: units.map((label, i) => {
						const value = tick ? [
							tick.days,
							tick.hours,
							tick.minutes,
							tick.seconds
						][i] : null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-line bg-cream-deep px-1 py-4 sm:py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl font-medium text-ink tabular-nums sm:text-5xl",
								children: value === null ? "–" : String(value).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-xs font-medium tracking-wide text-ink-soft uppercase sm:text-sm",
								children: label
							})]
						}, label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-serif text-base text-ink-soft",
					children: when.time
				})
			]
		})
	});
}
function saveIcs() {
	const blob = new Blob([calendarIcs()], { type: "text/calendar" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "nithya-sreejith-wedding.ics";
	a.click();
	URL.revokeObjectURL(url);
}
function shareWhatsApp() {
	const text = whatsAppShareText(window.location.href);
	window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}
var facts = [
	{
		icon: Calendar,
		label: "Date",
		title: `${when.day}`,
		lines: [when.date, when.malayalam]
	},
	{
		icon: Clock,
		label: "Time",
		title: "Between",
		lines: ["9.30 AM & 10.30 AM"]
	},
	{
		icon: MapPin,
		label: "Venue",
		title: venue.name,
		lines: [venue.place]
	}
];
function WeddingDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "wedding",
		className: "section bg-cream-deep",
		"aria-labelledby": "wedding-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The wedding" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "wedding-title",
							className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
							children: "Auspicious occasion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: facts.map((fact) => {
						const Icon = fact.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-line bg-cream px-5 py-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "mx-auto size-6 text-gold",
									strokeWidth: 1.5,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
									children: fact.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-2xl font-medium text-ink",
									children: fact.title
								}),
								fact.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg text-ink-soft",
									children: line
								}, line))
							]
						}, fact.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-8 max-w-xl text-center text-pretty font-serif text-lg text-ink",
					children: [
						"The invitation names a single ceremony. Wedding of Nithya with Sreejith, ",
						when.day,
						",",
						" ",
						when.date,
						", ",
						when.time.toLowerCase(),
						", at ",
						venue.address,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryLink, {
							href: googleCalendarUrl(),
							external: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Add to Google Calendar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietButton, {
							onClick: saveIcs,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Save calendar file"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietButton, {
							onClick: shareWhatsApp,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Share on WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietLink, {
							href: "#venue",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Get directions"]
						})
					]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "section pb-28 text-center md:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
				children: mantra
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-serif text-lg text-ink",
				children: "With love and blessings,"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "name text-ink",
				children: couple.bride
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
				children: "with"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "name text-ink",
				children: couple.groom
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-serif text-xl text-ink",
				children: [
					when.day,
					", ",
					when.date
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-base text-ink-soft",
				children: when.time
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-base italic text-ink-soft",
				children: motto
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-1 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
				children: compliments.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "font-serif text-base font-medium text-ink underline decoration-gold underline-offset-4",
					children: "Contact the family"
				})
			})
		]
	});
}
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(null);
	const open = index !== null;
	const photo = index !== null ? gallery[index] : null;
	const go = (0, import_react.useCallback)((dir) => {
		setIndex((current) => {
			if (current === null) return current;
			return (current + dir + gallery.length) % gallery.length;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "ArrowRight") go(1);
			if (event.key === "ArrowLeft") go(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, go]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section",
		"aria-labelledby": "gallery-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Photographs" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "gallery-title",
						className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
						children: "Nithya & Sreejith"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3",
				children: gallery.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: item.wide ? "col-span-2 md:col-span-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIndex(i),
						className: "block w-full overflow-hidden focus-visible:outline-2",
						"aria-label": `Open photo: ${item.alt}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.thumb,
							alt: item.alt,
							width: item.width,
							height: item.height,
							loading: "lazy",
							className: `w-full object-cover object-top ${item.wide ? "frame-wide" : "frame-portrait"}`
						})
					})
				}, item.src))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: (next) => !next && setIndex(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/88" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "fixed inset-0 z-50 flex flex-col items-center justify-center p-4 outline-none",
				"aria-describedby": void 0,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: photo?.alt ?? "Photograph"
					}),
					photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt,
						width: photo.width,
						height: photo.height,
						className: "max-h-[78vh] w-auto max-w-full object-contain"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-center font-serif text-sm text-cream",
						children: photo?.alt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-sm text-cream/80",
						children: index !== null ? `${index + 1} of ${gallery.length}` : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(-1),
						className: "absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center bg-cream text-ink sm:left-4",
						"aria-label": "Previous photo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(1),
						className: "absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center bg-cream text-ink sm:right-4",
						"aria-label": "Next photo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "absolute top-4 right-4 flex size-11 items-center justify-center bg-cream text-ink",
						"aria-label": "Close gallery",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})
				]
			})] })
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "section pt-10 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-rise mx-auto max-w-xl border border-gold/50 px-5 py-10 text-center sm:px-10 sm:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line px-4 py-8 sm:px-8 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
						children: mantra
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/card/temple.jpg",
						alt: "Kerala temple illustrated on the wedding invitation",
						width: 448,
						height: 228,
						className: "mx-auto mt-6 w-full max-w-xs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "name block",
								children: "Nithya"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "my-1 block font-serif text-sm font-medium tracking-widest uppercase",
								children: "with"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "name block",
								children: "Sreejith"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 font-serif text-xl font-medium text-ink",
						children: [
							when.day,
							", ",
							when.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-lg text-ink-soft",
						children: when.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-base italic text-ink-soft",
						children: when.malayalam
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-sm text-pretty font-serif text-lg leading-relaxed text-ink",
						children: "With immense joy, we seek your gracious presence and blessings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-base italic text-ink-soft",
						children: motto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
							href: "#wedding",
							children: "Wedding details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietLink, {
							href: "#venue",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Venue"]
						})]
					})
				]
			})
		})
	});
}
function Invitation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "invitation",
		className: "section bg-cream-deep",
		"aria-labelledby": "invitation-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The invitation" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "invitation-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: "With immense joy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
					children: mantra
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-1 font-serif text-lg text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-semibold tracking-wide",
							children: brideFamily.parents
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "italic",
							children: brideFamily.house
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: brideFamily.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pt-1 text-base text-ink-soft",
							children: ["Phone: ", brideFamily.phones.join(", ")]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-1 text-pretty font-serif text-xl leading-relaxed text-ink",
					children: invitationLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "name mt-6 text-ink",
					children: couple.bride
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
					children: "with"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "name text-ink",
					children: couple.groom
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-serif text-lg text-ink",
					children: [
						groomFamily.line,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						groomFamily.place
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-1 font-serif text-lg text-ink",
					children: closingLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-1 font-serif text-base font-medium tracking-widest text-ink-soft uppercase",
					children: compliments.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mx-auto mt-12 max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/card/invitation.jpg",
						alt: "Wedding invitation card of Nithya and Sreejith, Sunday 6th December 2026, Hitech Auditorium, Pirayiri, Palakkad",
						width: 800,
						height: 1200,
						loading: "lazy",
						className: "w-full border border-line shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 font-serif text-sm text-ink-soft",
						children: "The invitation, as printed"
					})]
				})
			]
		})
	});
}
var mobileNav = [
	{
		href: "#home",
		label: "Home",
		icon: House
	},
	{
		href: "#couple",
		label: "Couple",
		icon: Users
	},
	{
		href: "#wedding",
		label: "Day",
		icon: Heart
	},
	{
		href: "#venue",
		label: "Venue",
		icon: MapPin
	},
	{
		href: "#gallery",
		label: "Photos",
		icon: Images
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#home",
				className: "font-serif text-lg font-medium tracking-wide text-ink sm:text-xl",
				children: [
					couple.bride,
					" & ",
					couple.groom
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Sections",
				className: "hidden items-center gap-6 md:flex",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "font-serif text-base font-medium text-ink hover:text-ink-soft",
					children: item.label
				}, item.href))
			})]
		})
	});
}
function BottomNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Sections",
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 backdrop-blur-md md:hidden",
		style: { paddingBottom: "env(safe-area-inset-bottom)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: mobileNav.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					className: "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5",
						strokeWidth: 1.75,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-xs font-medium",
						children: item.label
					})]
				}) }, item.href);
			})
		})
	});
}
function ScrollTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 700);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Scroll to top",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed right-4 bottom-20 z-40 flex size-11 items-center justify-center border border-line bg-cream text-ink shadow-sm md:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
			className: "size-5",
			"aria-hidden": "true"
		})
	});
}
function Venue() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copyAddress() {
		try {
			await navigator.clipboard.writeText(venue.address);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "venue",
		className: "section",
		"aria-labelledby": "venue-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The venue" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "venue-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: venue.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-xl text-ink-soft",
					children: venue.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mapsDirectionsUrl(),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-8 block overflow-hidden border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/card/map.jpg",
						alt: "Map around Hitech Auditorium, Pirayiri, Palakkad. Opens directions in Google Maps.",
						width: 598,
						height: 619,
						loading: "lazy",
						className: "w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-serif text-sm text-ink-soft",
					children: "Map data © OpenStreetMap contributors"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-serif text-base text-ink-soft",
					children: ["As printed on the invitation: ", venue.address]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryLink, {
						href: mapsDirectionsUrl(),
						external: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Get directions"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietButton, {
						onClick: copyAddress,
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-4",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							className: "size-4",
							"aria-hidden": "true"
						}), copied ? "Address copied" : "Copy address"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 inline-flex items-center justify-center gap-2 font-serif text-base text-ink-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "size-4 text-gold",
						"aria-hidden": "true"
					}), "Opens Hitech Auditorium, Pirayiri, Palakkad in Google Maps"]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardOpen, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#invitation",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink",
			children: "Skip to invitation"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingDetails, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venue, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Couple, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {})
	] });
}
//#endregion
export { Home as component };
