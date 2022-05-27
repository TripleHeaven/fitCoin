import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const Fitc = () => {
  return (
    <div className="relative px-[16px] mt-[44px] ">
      <img
        src="./icons/xx.svg"
        style={{
          position: "absolute",
          right: "0",
          top: "15px",
        }}
      ></img>
      <div className="text-center items-center max-w-[1000px] px-[20px] m-auto">
        <div className="px-[20px]">
          <Title className="text-gray-300 px-[16px]" variant={TitleVariant.h1}>
            fitc token
          </Title>
          <Title variant={TitleVariant.h2}>a New digital currency </Title>
        </div>
        <div className="mt-[24px] text-center">
          <Paragraph className="text-center sm:text-left sm:text-[24px]">
            Fitcoin, an open source cryptographic token developed by Revolution
            Nutrition, is imagined as a general-purpose cryptocurrency for use
            in everyday digital services as a Reward Engine. It is the basis of
            interoperability with other digital resources and serves as the unit
            of account for all economic transactions within the Fit Ecosystem.
          </Paragraph>
        </div>

        <Button variant={ButtonVariants.gradientInverted} className="mt-[48px]">
          <div className="flex">
            white paper
            <img className="ml-[16px] " src="./icons/arrowRightGr.svg" />
          </div>
        </Button>
        <img
          src="./tokenomics/fitcLabel.svg"
          className="w-screen left-0 hidden sm:block mt-[128px]"
          style={{
            position: "absolute",
          }}
        ></img>
        <img
          src="./tokenomics/fitcLabelM.svg"
          className="w-screen left-0 sm:hidden mt-[32px]"
          style={{
            position: "absolute",
          }}
        ></img>
        <div className="flex w-[256px] sm:w-auto mt-[32px]">
          <img src="./tokenomics/coins.png" className="relative "></img>
        </div>
      </div>
    </div>
  );
};
