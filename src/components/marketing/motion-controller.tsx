"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: server-rendered content is visible by default.
 * Only start an animation after its group actually enters the viewport.
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 600px)");
    const active = new Map<Element, Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        // Never fade a group containing keyboard focus, including anchor targets.
        if (reducedMotion.matches || element.matches(":focus-within, :target")) continue;

        const dashboard = element.dataset.motion === "dashboard";
        const style = getComputedStyle(element);
        const distance = style.getPropertyValue(dashboard ? "--motion-dashboard-offset" : "--motion-reveal-offset").trim();
        const index = element.parentElement?.hasAttribute("data-motion-stagger")
          ? Array.from(element.parentElement.children).indexOf(element) : 0;
        const animation = element.animate([
          { opacity: 0, transform: `translateY(${distance})${dashboard ? " scale(0.98)" : ""}` },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ], {
          duration: dashboard ? 760 : 600,
          delay: Math.min(index, 3) * (smallScreen.matches ? 45 : 75),
          easing: style.getPropertyValue("--motion-ease").trim(),
          fill: "backwards",
        });
        active.set(element, animation);
        void animation.finished.catch(() => {}).then(() => {
          if (active.get(element) === animation) active.delete(element);
        });
      }
    }, { threshold: 0.04, rootMargin: "0px 0px -24px 0px" });

    document.querySelectorAll<HTMLElement>("[data-motion], [data-motion-stagger] > *").forEach(element => observer.observe(element));

    function cancelMotion() {
      if (!reducedMotion.matches) return;
      active.forEach(animation => animation.cancel());
      active.clear();
    }
    function revealFocused(event: FocusEvent) {
      active.forEach((animation, element) => {
        if (event.target instanceof Node && element.contains(event.target)) {
          animation.cancel();
          active.delete(element);
        }
      });
    }

    // Stop the only continuous animations when the hero is offscreen or the
    // browser tab is hidden; no per-frame JavaScript or permanent will-change.
    const art = document.querySelector<SVGElement>(".hero-art");
    let artVisible = true;
    function pauseArt() {
      art?.toggleAttribute("data-motion-paused", !artVisible || document.hidden);
    }
    const artObserver = art ? new IntersectionObserver(([entry]) => {
      artVisible = entry.isIntersecting;
      pauseArt();
    }) : null;
    if (art) artObserver?.observe(art);
    reducedMotion.addEventListener("change", cancelMotion);
    document.addEventListener("focusin", revealFocused);
    document.addEventListener("visibilitychange", pauseArt);

    return () => {
      observer.disconnect();
      artObserver?.disconnect();
      active.forEach(animation => animation.cancel());
      art?.removeAttribute("data-motion-paused");
      reducedMotion.removeEventListener("change", cancelMotion);
      document.removeEventListener("focusin", revealFocused);
      document.removeEventListener("visibilitychange", pauseArt);
    };
  }, [pathname]);

  return null;
}
