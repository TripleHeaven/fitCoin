import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const RevolutionNutrition = () => (
  <div
    className="px-[12px] mt-[80px] "
    style={{
      backgroundImage: "url('./bgs/rnBackMobile.png')",
      position: "relative",
      backgroundPosition: "right -10%  bottom 50%",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="">
      <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
        Revolution nutrition
      </Title>
      <img src="./icons/rnMobile.png" className="mt-[40px]"></img>
      <div className="flex flex-col gap-[20px]">
        <div className="flex">
          <img src="./icons/Rn1.svg" />
          <Paragraph className="ml-[16px] my-auto text-[16px]">
            Fast growing sport nutrition company in North America
          </Paragraph>
        </div>
        <div className="flex">
          <img src="./icons/Rn2.svg" />
          <Paragraph className="ml-[16px] my-auto text-[16px]">
            “Brand of the Year”
          </Paragraph>
        </div>
        <div className="flex ">
          <img src="./icons/Rn3.svg" />
          <Paragraph className="ml-[16px] my-auto text-[16px]">
            “Most Creative Sport Nutrition Brand”
          </Paragraph>
        </div>
      </div>
      <div className="flex w-full mt-[48px]">
        <Button variant={ButtonVariants.gradientInverted} className="mx-auto">
          <div className="flex">
            learn more
            <img className="ml-[16px]" src="./icons/arrowRightGr.svg" />
          </div>
        </Button>
      </div>
    </div>
  </div>
);
