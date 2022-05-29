import { Links } from "utils";

export const Footer = () => (
  <div className="bg-[#1D2124] z-[100] flex absolute bottom-0 w-full">
    <div className="flex mx-auto h-[60px] gap-[24px]">
      <div className="cursor-pointer rounded-[100px] w-[44px] my-auto opacity-[1] h-[44px]">
        <a href={Links.TWITTER}>
          <img src="./icons/socialTwitter1.svg"></img>
        </a>
      </div>

      <div className="cursor-pointer rounded-[100px] w-[44px] my-auto opacity-[1] h-[44px]">
        <a href={Links.INSTAGRAM}>
          <img src="./icons/socialInst.svg"></img>
        </a>
      </div>
      <div className="cursor-pointer rounded-[100px] w-[44px] my-auto opacity-[1] h-[44px]">
        <a href="mailto:info@fitcoin.xyz">
          <img src="./icons/socialMail.svg"></img>
        </a>
      </div>
      <div className="cursor-pointer rounded-[100px] w-[44px] my-auto opacity-[1] h-[44px]">
        <a href={Links.FACEBOOK}>
          <img src="./icons/socialFb.svg"></img>
        </a>
      </div>
      <div className="cursor-pointer rounded-[100px] w-[44px] my-auto opacity-[1] h-[44px]">
        <a href={Links.REDDIT}>
          <img src="./icons/socialRd.svg"></img>
        </a>
      </div>
    </div>
  </div>
);
