import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// client-side এ register
if (typeof window !== "undefined") {
  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export { gsap, ScrollTrigger };