import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const HowToEarn = () => (
  <div className="relative px-[16px]">
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
          how to earn
        </Title>
        <Title variant={TitleVariant.h3}>FIXED STAKING </Title>
        <div className="mt-[24px]">
          <img src="./icons/calc.png" style={{ zIndex: "100" }}></img>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] text-left px-[12px] mt-[32px]">
        <div className="flex ">
          <div className="w-[53px]">
            <img src="./icons/1.svg" />
          </div>
          <Paragraph className="ml-[16px] my-auto">
            Choose your period{" "}
          </Paragraph>
        </div>
        <div className="flex ">
          <div className="w-[53px]">
            <img src="./icons/2.svg" />
          </div>
          <Paragraph className="ml-[16px] my-auto">
            Enter the amount you want to stake
          </Paragraph>
        </div>
        <div className="flex ">
          <div className="w-[53px]">
            <img src="./icons/3.svg" />
          </div>
          <Paragraph className="ml-[16px] my-auto">
            Enter the amount you want to stake
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
);
