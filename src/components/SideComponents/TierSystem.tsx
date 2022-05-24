import { Button, ButtonVariants } from "components/Button";
import { Title, TitleVariant } from "components/Title";

export const TierSystem = () => (
  <div className="px-[12px] mt-[80px]">
    <div className="">
      <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
        tier system
      </Title>
      <Title
        className="text-center font-normal mt-[16px]"
        variant={TitleVariant.h4}
      >
        the more you stake the more you EARN
      </Title>
      <div>
        <img src="./icons/TierMobile.png" className="mt-[32px] w-full" />
        <img src="./icons/Tier2Mobile.png" className="mt-[32px] w-full" />
      </div>
      <div className="flex w-full mt-[48px]">
        <Button variant={ButtonVariants.gradientInverted} className="mx-auto">
          <div className="flex">
            participate
            <img className="ml-[16px]" src="./icons/arrowRightGr.svg" />
          </div>
        </Button>
      </div>
    </div>
  </div>
);
