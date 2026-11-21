"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site-config";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);
  function close(restore = false) {
    setOpen(false);
    if (restore) toggle.current?.focus();
  }
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.preventDefault();
          close(true);
        }
      }}
      onBlur={(e) => {
        if (open && !e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="JeriFlow home"
          onClick={() => close()}
        >
          <BrandMark />
          <span>
            JeriFlow<small>by Jerico Studio</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          ref={toggle}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => (open ? close(true) : setOpen(true))}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          ref={menu}
          className={`main-navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => close()}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/product#demo"
            className="button button-primary nav-cta"
            onClick={() => close()}
          >
            Explore the workspace
          </Link>
        </nav>
      </div>
    </header>
  );
}
