export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export const siteConfig: SiteConfig = {
  name: 'Gamehub',
  description: 'Live streaming platform',
  url: `${process.env.NEXT_PUBLIC_APP_URL}`,
};
