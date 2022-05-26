import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const TierSystem = () => {
  return (
    <div className="relative px-[16px] mt-[80px]">
      {/* <img
          src="./icons/sixDots.svg"
          style={{
            position: "absolute",
            right: "",
            top: "200px",
            zIndex: "0",
          }}
        /> */}
      <div className="text-center items-center">
        <div className="">
          <Title className="text-gray-300" variant={TitleVariant.h1}>
            tier system
          </Title>
          <Paragraph className="text-center text-[#819297]">
            A unique tier system which enables users to recieve as many rewards
            as possible and earn real money
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] mt-[32px]">
        <div className="relative">
          <img
            style={{ position: "absolute", left: "-18px", top: "-40px" }}
            src="./icons/tierLinesMobile.svg"
          ></img>
          <Paragraph>
            Stake FITC. The tier you have depends on the amount of Fitcoins
            staked.
            <br />
            The more you stake, the higher tier you get.
          </Paragraph>
        </div>
        <div className="relative">
          <img
            style={{ position: "absolute", left: "-18px", top: "-40px" }}
            src="./icons/tierLinesMobile.svg"
          ></img>
          <Paragraph>
            Move up the tiers, get more discounts on Revolution Nutrition and
            claim your special NFTs.
          </Paragraph>
        </div>
        <div className="relative">
          <img
            style={{ position: "absolute", left: "-18px", top: "-40px" }}
            src="./icons/tierLinesMobile.svg"
          ></img>
          <Paragraph>Get new updated NFTs every month</Paragraph>
        </div>
      </div>
      <div className="mt-[42px]">
        <img src="./icons/tTierSysMobile.svg" className="mx-auto"></img>
      </div>
      <div className="flex">
        <Button variant={ButtonVariants.gradient} className="mt-[48px] mx-auto">
          <div className="flex">
            go to staking app
            <img className="ml-[16px] " src="./icons/arrowRight.svg" />
          </div>
        </Button>
      </div>
      <div className="relative">
        <img
          src="./icons/rowGreyDots.svg"
          style={{
            position: "absolute",
            right: "-20px",
            top: "15px",
          }}
        ></img>
      </div>
    </div>
  );
};
