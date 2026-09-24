export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    steam?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "False Hero Wiki",
  shortName: "False Hero",
  logoText: "FH",
  tagline: "Combat Guides, Boss Guides & Builds",
  description: "Explore False Hero Wiki with combat guides, boss strategies, ability builds, gameplay tips, and detailed information for this dark fantasy soulslike adventure RPG.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://falsehero-wiki.top",
  supportEmail: "support@falsehero-wiki.top",
  gameUrl: "https://store.steampowered.com/app/2538870/False_Hero/",
  heroVideoId: "Aq7PTIxoZa0",
  social: {
    discord: "https://discord.com/invite/XU6BbFKP",
    youtube: "https://www.youtube.com/@torchlight-games",
    steam: "https://steamcommunity.com/app/2538870",
  },
  locales: ["en", "ja", "de", "es"],
  defaultLocale: "en",
};
