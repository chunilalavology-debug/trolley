import { gsap } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

/** Safe reveal animations (works with React Strict Mode). */
export function revealOnMount(
  selector: gsap.DOMTarget,
  vars?: gsap.TweenVars,
) {
  return gsap.fromTo(
    selector,
    { y: 32, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      ...vars,
    },
  );
}

export function revealOnScroll(
  trigger: gsap.DOMTarget,
  selector: gsap.DOMTarget,
  scrollVars?: ScrollTrigger.Vars,
  tweenVars?: gsap.TweenVars,
) {
  return gsap.fromTo(
    selector,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 82%",
        toggleActions: "play none none none",
        ...scrollVars,
      },
      ...tweenVars,
    },
  );
}
