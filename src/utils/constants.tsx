import { ValueOf } from "utils";

export const Routes = {
  MAIN: "/",
  TEAM: "/team",
  TOKENOMICS: "/tokenomics",
  REVOLUTION_NUTRITION: "/revolution_nutrition",
} as const;

export type Routes = ValueOf<typeof Routes>;

export const Links = {
  REVOLUTION_NUTRITION: "https://www.revolution-nutrition.com/",
  WHITE_PAPER: "/BLANK",
  BSC_LINK: "/BLANK",
  FACEBOOK: "https://www.facebook.com/FitcoinOfficial",
  TWITTER: "https://twitter.com/FitcoinOfficial",
  INSTAGRAM: "https://www.instagram.com/fitcoin_official/",
  REDDIT: "https://www.reddit.com/user/Fitcoin_Official/",
  DISCORD: "/BLANK",
} as const;

export type Links = ValueOf<typeof Links>;
