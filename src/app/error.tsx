"use client";
import Link from "next/link";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">LET&apos;S TRY THAT AGAIN</p>
      <h1>A small interruption.</h1>
      <p className="intro-description">
        Something prevented this page from loading. Try again, or return to the
        homepage.
      </p>
      <div className="button-row">
        <button className="button button-primary" onClick={() => reset()}>
          Try again
        </button>
        <Link className="button button-outline" href="/">
          Back to JeriFlow
        </Link>
      </div>
    </section>
  );
}
