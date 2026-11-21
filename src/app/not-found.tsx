import { PageIntro } from "@/components/marketing/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
export default function NotFound() {
  return (
    <PageIntro
      eyebrow="A SMALL DETOUR"
      title="This page isn't in the workspace."
      description="The link may have changed, or the page may not exist. Let's get you back to the idea."
    >
      <ButtonLink href="/">Back to JeriFlow</ButtonLink>
      <ButtonLink href="/product" variant="outline">
        Explore the product
      </ButtonLink>
    </PageIntro>
  );
}
