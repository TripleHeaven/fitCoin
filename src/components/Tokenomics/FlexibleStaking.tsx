import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const FlexibleStaking = () => {
  return (
    <div className="relative px-[16px] mt-[60px]  flex">
      <div className="text-center items-center w-full mx-auto max-w-[1279px]">
        <div className="">
          <Title variant={TitleVariant.h3} className="font-[microgrammaBold]">
            flexible STAKING{" "}
          </Title>
        </div>
        <div className="flex flex-col gap-[24px] text-left px-[12px] mt-[32px]">
          <div className="flex ">
            <div className="min-w-[53px]">
              <img src="./icons/1.svg" />
            </div>
            <Paragraph className="ml-[16px] my-auto">
              Enter the amount of Fitcoin to be staked{" "}
            </Paragraph>
          </div>
          <div className="flex ">
            <div className="min-w-[53px]">
              <img src="./icons/2.svg" />
            </div>
            <Paragraph className="ml-[16px] my-auto">
              Stake for as long as you want{" "}
            </Paragraph>
          </div>
          <div className="flex ">
            <div className="min-w-[53px]">
              <img src="./icons/3.svg" />
            </div>
            <Paragraph className="ml-[16px] my-auto">
              Receive your APY{" "}
            </Paragraph>
          </div>
          <div className="flex ">
            <div className="min-w-[53px]">
              <img src="./icons/4.svg" />
            </div>
            <Paragraph className="ml-[16px] my-auto">
              Unstake at any time or choose to stake more{" "}
            </Paragraph>
          </div>
        </div>
        <div className="flex">
          <img
            src="./icons/tFlexibleStakingMobile.svg"
            className="mx-auto mt-[48px]"
          />
        </div>
        <Button variant={ButtonVariants.gradient} className="mt-[48px]">
          <div className="flex">
            go to staking app
            <img className="ml-[16px] " src="./icons/arrowRight.svg" />
          </div>
        </Button>
      </div>
    </div>
  );
};
