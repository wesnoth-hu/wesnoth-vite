type SiteConfig = {
  name: string;
  url: string;
  email: {
    contact: string;
    moderation: string;
    privacy: string;
  };
  github: string;
  license: string;
  hosting: string;
  firebaseRegion: string;
  effectiveDate: string;
  version: string;
};

export const SITE_CONFIG: SiteConfig = {
  name: "Magyar Wesnoth Közösségi Portál",
  url: "https://wesnoth.hu",
  email: {
    contact: "wesnoth.hu@gmail.com",
    moderation: "wesnoth.hu@gmail.com",
    privacy: "wesnoth.hu@gmail.com",
  },
  github: "https://codeberg.org/Hungarian_Wesnoth/wesnoth-vite",
  license: "MIT",
  hosting: "Firebase Hosting",
  firebaseRegion: "europe-west1",
  effectiveDate: "2027-01-01",
  version: "1.0",
};
