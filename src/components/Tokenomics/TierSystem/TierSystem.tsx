import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import "./TierSystem.css";

export const TierSystem = () => {
  return (
    <section className="relative px-[16px] mt-[80px]">
      {/* <img
          src="./icons/sixDots.svg"
          style={{
            position: "absolute",
            right: "",
            top: "200px",
            zIndex: "0",
          }}
        /> */}
      <div className="max-w-[900px] m-auto">
        <div className="text-center items-center">
          <div className="">
            <Title className="text-gray-300" variant={TitleVariant.h1}>
              tier system
            </Title>
            <Paragraph className="text-center text-[#819297]">
              A unique tier system which enables users to recieve as many
              rewards as possible and earn real money
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] mt-[32px] px-[20px]">
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
        <div className="mt-[42px] flex justify-center">
          <img
            className="w-full tierSystem__imgDesk"
            src="./icons/tierDesktop.png"
            style={{
              marginLeft: "",
              marginRight: "",

              paddingTop: "60px",
            }}
          />
          <img
            src="./icons/TierMobile.png"
            className="mt-[32px] max-w-[350px] w-full tierSystem__imgMobile"
          />
        </div>
        <div className="flex">
          <Button
            variant={ButtonVariants.gradient}
            className="mt-[48px] mx-auto"
          >
            <div className="flex">
              go to staking app
              <img className="ml-[16px] " src="./icons/arrowRight.svg" />
            </div>
          </Button>
        </div>
        <div className="relative"></div>
      </div>
    </section>
  );
};
