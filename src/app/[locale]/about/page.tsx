import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>False Hero Wiki is an independent fan-built guide hub dedicated to False Hero, the dark fantasy soulslike action RPG developed by Torchlight Games and published by Ytopia.</p>
      <p>Our mission is to provide players with in-depth combat guides, boss walkthroughs, ability stealing combo strategies, weapon builds, and the latest game updates to help conquer every challenge.</p>
      <p>All trademarks and game assets belong to their respective owners. This site is created by fans, for fans.</p>
      <p>For inquiries, suggestions, or corrections, feel free to contact us at <a href={`mailto:${siteConfig.supportEmail}`} className="text-[hsl(var(--nav-theme))] hover:underline">{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
