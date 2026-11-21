import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/site-config";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="JeriFlow home">
            <Image
              src="/assets/brand/jeriflow-logo.svg"
              width={160}
              height={40}
              alt="JeriFlow"
            />
          </Link>
          <p>
            Thoughtful tools for people
            <br />
            who make things.
          </p>
          <span className="concept-label">Made with care by Jerico Studio</span>
        </div>
        <div>
          <h2>Explore JeriFlow</h2>
          {navigation.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>The studio</h2>
          <Link href="/about">About Jerico Studio</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/product#demo">Explore the workspace</Link>
        </div>
        <div className="footer-note">
          <p>
            Good work starts with
            <br />a little room to think.
          </p>
          <span>
            Independent by design.
            <br />
            Thoughtful in every detail.
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Jerico Studio</span>
        <span>A little clarity. More room to create.</span>
      </div>
    </footer>
  );
}
