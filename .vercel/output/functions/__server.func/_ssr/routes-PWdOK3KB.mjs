import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Share2, c as MapPin, d as ChevronRight, f as ChevronLeft, l as Heart, n as VolumeX, o as Phone, r as Volume2, s as Navigation, t as X, u as ChevronUp } from "../_libs/lucide-react.mjs";
import { a as couple, c as invitationLines, d as nav, f as venue, h as when, i as compliments, l as mapsDirectionsUrl, m as whatsAppShareText, n as brideFamily, o as gallery, p as waMe, r as closingLines, s as groomFamily, u as motto } from "./router-CwWHIXM7.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-PWdOK3KB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" })
	});
}
function Florals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/decor/floral-top.png",
		alt: "",
		className: "floral floral-top"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/decor/floral-bottom.png",
		alt: "",
		className: "floral floral-bottom"
	})] });
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "section sprig bg-cream-deep",
		"aria-labelledby": "contact-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: brideFamily.parents
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-body mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/family.jpg",
						alt: "Nithya and Sreejith standing with family before a floral arch",
						width: 1600,
						height: 1067,
						loading: "lazy",
						className: "family-photo photo-frame"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-serif text-lg font-bold text-ink lg:mt-0",
						children: "Contact us on"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mx-auto mt-8 max-w-xl space-y-4 text-left",
						children: brideFamily.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-gold/40 bg-cream p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-center font-serif text-2xl font-medium tracking-wide text-ink tabular-nums",
								children: [phone.number, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 font-serif text-lg font-medium tracking-normal text-ink-soft",
									children: ["- ", phone.name]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${phone.number}`,
									className: "inline-flex min-h-12 items-center justify-center gap-2 bg-ink font-serif text-base font-medium text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Call"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waMe(phone.number),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-12 items-center justify-center gap-2 border border-ink/25 font-serif text-base font-medium text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
								})]
							})]
						}, phone.number))
					})] })]
				})
			]
		})]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section sprig bg-ink text-cream",
		"aria-labelledby": "countdown-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-sm font-medium tracking-widest text-cream/70 uppercase",
					children: [
						when.day,
						", ",
						when.date
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "countdown-title",
					className: "mt-3 font-serif text-4xl font-medium text-balance sm:text-5xl",
					children: tick?.done ? "The wedding day has arrived" : "Until the wedding"
				}),
				tick?.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 inline-flex items-center justify-center gap-2 font-serif text-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-5 text-rose",
						fill: "currentColor",
						"aria-hidden": "true"
					}), "The wedding day has arrived"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-4",
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
							className: "px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl font-medium tabular-nums sm:text-5xl",
								children: value === null ? "–" : String(value).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-xs font-medium tracking-widest text-cream/70 uppercase sm:text-sm",
								children: label
							})]
						}, label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-serif text-base text-cream/75",
					children: when.time
				})
			]
		})]
	});
}
function shareWhatsApp() {
	const text = whatsAppShareText(window.location.href);
	window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}
var facts = [{
	label: "Time",
	title: "Between 9.30 AM & 10.30 AM",
	line: ""
}, {
	label: "Venue",
	title: venue.name,
	line: venue.place
}];
function WeddingDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "wedding",
		className: "section sprig",
		"aria-labelledby": "wedding-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The wedding" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "wedding-title",
					className: "mt-3 text-center font-serif text-4xl font-medium text-balance text-ink sm:text-5xl",
					children: [
						when.day,
						", ",
						when.date
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center font-serif text-lg italic text-ink-soft",
					children: when.malayalam
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 border-t border-gold/40",
					children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-gold/40 py-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
								children: fact.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-serif text-2xl font-medium text-ink",
								children: fact.title
							}),
							fact.line ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-lg italic text-ink-soft",
								children: fact.line
							}) : null
						]
					}, fact.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietButton, {
						onClick: shareWhatsApp,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Share on WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuietLink, {
						href: "#venue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Get directions"]
					})]
				})
			]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "section sprig text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-serif text-sm text-ink-soft",
				children: [
					"Made with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "♥"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "love"
					}),
					" by rithul"
				]
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
		className: "section sprig",
		"aria-labelledby": "gallery-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Photographs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "gallery-title",
					className: "mt-2 font-serif text-4xl font-medium text-ink sm:text-5xl",
					children: "Nithya & Sreejith"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "photo-rail",
				"aria-label": "Photographs, swipe sideways",
				children: gallery.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
						className: `${item.wide ? "frame-wide" : "frame-portrait"} w-full object-cover object-[center_30%]`
					})
				}) }, item.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
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
			})
		]
	});
}
function Hero() {
	const sectionRef = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => {
			const section = sectionRef.current;
			if (!section || media.matches) {
				setProgress(1);
				return;
			}
			const sticky = section.querySelector(".reveal-sticky");
			if (!sticky) return;
			const distance = section.offsetHeight - sticky.clientHeight;
			const travelled = window.scrollY - section.offsetTop;
			const next = distance <= 0 ? 1 : Math.min(1, Math.max(0, travelled / distance));
			setProgress(next);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		media.addEventListener("change", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
			media.removeEventListener("change", update);
		};
	}, []);
	const dim = Math.min(1, progress / .7);
	const pageOpacity = progress <= .48 ? 0 : Math.min(1, (progress - .48) / .34);
	const hintOpacity = Math.max(0, 1 - progress * 3.2);
	const scale = 1.18 - dim * .18;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		ref: sectionRef,
		className: "reveal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal-sticky hero-sheet",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/stand.jpg",
					alt: "",
					width: 1066,
					height: 1600,
					className: "hero-photo",
					style: {
						filter: `brightness(${1 - dim * .38})`,
						transform: `scale(${scale})`
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-shade",
					style: { opacity: dim }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "scroll-hint",
					style: { opacity: hintOpacity },
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy reveal-page",
					style: {
						opacity: pageOpacity,
						pointerEvents: pageOpacity > .85 ? "auto" : "none"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/decor/floral-top.png",
							alt: "",
							className: "floral floral-top"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/decor/floral-bottom.png",
							alt: "",
							className: "floral floral-bottom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-cream",
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
							className: "mt-5 font-serif text-xl text-cream",
							children: [
								when.day,
								", ",
								when.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-cream/80",
							children: when.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-base italic text-cream/75",
							children: when.malayalam
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xs font-serif text-base italic text-cream/80",
							children: motto
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#wedding",
								className: "inline-flex min-h-12 items-center justify-center bg-cream px-6 font-serif text-base font-medium text-ink sm:w-auto",
								children: "Wedding details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#venue",
								className: "inline-flex min-h-12 items-center justify-center border border-cream/70 px-6 font-serif text-base font-medium text-cream sm:w-auto",
								children: "Venue"
							})]
						})
					]
				})
			]
		})
	});
}
function ZoomPhoto({ className, wrapClassName, origin = "center 18%", ...props }) {
	const ref = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const image = ref.current;
			if (!image) return;
			const rect = image.getBoundingClientRect();
			const start = window.innerHeight * .92;
			const end = window.innerHeight * .2;
			const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
			setScale(1 + progress * .14);
		};
		const onScroll = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: wrapClassName ? `zoom-frame ${wrapClassName}` : "zoom-frame",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			ref,
			...props,
			className,
			style: {
				transform: `scale(${scale})`,
				transformOrigin: origin
			}
		})
	});
}
function Invitation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "invitation",
		className: "letter",
		"aria-labelledby": "invitation-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "pair",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/close.jpg",
					alt: "Nithya leaning on Sreejith, her hand on his shoulder",
					width: 1066,
					height: 1600
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pair-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "invite-parents",
							children: brideFamily.parents
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "invite-place",
							children: [
								brideFamily.house,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: " · "
								}),
								brideFamily.address
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "invitation-title",
							className: "invite-request",
							children: invitationLines.join(" ")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "pair",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomPhoto, {
					src: "/photos/embrace.jpg",
					alt: "Nithya smiling with her arm around Sreejith",
					width: 1066,
					height: 1600,
					className: "pair-img-alt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pair-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}),
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
							className: "mt-5 font-serif text-xl leading-relaxed text-ink",
							children: [
								groomFamily.line,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								groomFamily.place
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "pair",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rings-frame",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/rings.jpg",
						alt: "Nithya and Sreejith holding their rings, her hand decorated with henna",
						width: 1066,
						height: 1600,
						className: "pair-img-rings"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pair-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Florals, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1 font-serif text-lg text-ink",
							children: closingLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-1 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase",
							children: compliments.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
						})
					]
				})]
			})
		]
	});
}
function BackgroundMusic() {
	const audioRef = (0, import_react.useRef)(null);
	const wanted = (0, import_react.useRef)(true);
	const [on, setOn] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.volume = .32;
		const mark = () => setOn(!audio.paused);
		const tryPlay = () => {
			if (!wanted.current) return;
			audio.play().then(mark).catch(() => setOn(false));
		};
		const onGesture = (event) => {
			const target = event.target;
			if (target instanceof Element && target.closest("[data-music-toggle]")) return;
			tryPlay();
			if (!audio.paused) {
				window.removeEventListener("pointerdown", onGesture);
				window.removeEventListener("keydown", onGesture);
			}
		};
		tryPlay();
		window.addEventListener("pointerdown", onGesture);
		window.addEventListener("keydown", onGesture);
		audio.addEventListener("play", mark);
		return () => {
			window.removeEventListener("pointerdown", onGesture);
			window.removeEventListener("keydown", onGesture);
			audio.removeEventListener("play", mark);
		};
	}, []);
	function toggle() {
		const audio = audioRef.current;
		if (!audio) return;
		if (on) {
			wanted.current = false;
			audio.pause();
			setOn(false);
			return;
		}
		wanted.current = true;
		audio.play().then(() => setOn(true)).catch(() => setOn(false));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
		ref: audioRef,
		src: "/audio/o-sahebaa.mp3",
		preload: "auto",
		autoPlay: true,
		loop: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-music-toggle": true,
		onClick: toggle,
		"aria-pressed": on,
		"aria-label": on ? "Turn music off" : "Turn music on",
		className: visible ? "sound-toggle is-visible" : "sound-toggle",
		tabIndex: visible ? 0 : -1,
		children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
			className: "size-3.5",
			strokeWidth: 1.5,
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
			className: "size-3.5",
			strokeWidth: 1.5,
			"aria-hidden": "true"
		})
	})] });
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-14 max-w-5xl grid-cols-1 items-center px-4 md:grid-cols-[1fr_auto_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#home",
				className: "text-center font-serif text-lg font-medium tracking-wide text-ink sm:text-xl md:col-start-2",
				children: [
					couple.bride,
					" & ",
					couple.groom
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Sections",
				className: "hidden items-center justify-end gap-6 md:col-start-3 md:flex",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "font-serif text-base font-medium text-ink hover:text-ink-soft",
					children: item.label
				}, item.href))
			})]
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
		className: "fixed right-4 bottom-6 z-40 flex size-11 items-center justify-center border border-line bg-cream text-ink shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
			className: "size-5",
			"aria-hidden": "true"
		})
	});
}
function Venue() {
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
					className: "mt-2 font-serif text-xl italic text-ink-soft",
					children: venue.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mapsDirectionsUrl(),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-8 block overflow-hidden border border-gold/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/card/map.jpg",
						alt: "Map around Hitech Auditorium, Pirayiri, Palakkad. Opens directions in Google Maps.",
						width: 598,
						height: 619,
						loading: "lazy",
						className: "w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryLink, {
						href: mapsDirectionsUrl(),
						external: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Get directions"]
					})
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "desk-spread",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingDetails, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venue, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundMusic, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {})
	] });
}
//#endregion
export { Home as component };
