import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import "./HowToEarn.css"


export const HowToEarn = () => (
  <section className="relative px-[16px]">
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
        <div className="flex justify-between m-auto max-w-[1150px] how__content">
        <div className="mt-[24px]">
          <img src="./icons/profitCalculation.png" className="how__img-desc" style={{ zIndex: "100" }}></img>
          <img src="./icons/calc.png" className="how__img-mobile" style={{ zIndex: "100" }}></img>
        </div>
        <div className="flex flex-col gap-[24px] text-left justify-center px-[12px] mt-[32px]">
        <div className="flex">
          <div className="w-[53px]">
            <img src="./icons/1.svg" />
          </div>
          <Paragraph className="ml-[16px] my-auto">
            Choose your period{" "}
          </Paragraph>
        </div>
        <div className="flex">
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
    </div>
  </section>
);
