import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";

export const RevolutionNutrition = () => {
  const { isDesktop } = useDesktopProvider();

  return (
    <div
      className="px-[12px] mt-[80px] "
      style={
        !isDesktop
          ? {
              backgroundImage: "url('./bgs/rnBackMobile.png')",
              position: "relative",
              backgroundPosition: "right -10%  bottom 50%",
              backgroundRepeat: "no-repeat",
            }
          : { position: "relative" }
      }
    >
      <div className="">
        <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
          Revolution nutrition
        </Title>
        <img
          src="./icons/rnMobile.png"
          className="mt-[40px] mx-auto sm:hidden"
        ></img>
        {isDesktop && (
          <div className="flex w-screen relative">
            <div className=" flex mx-auto gap-[64px] mt-[64px]">
              <img
                src="./icons/linesDesk.svg"
                style={{
                  position: "absolute",
                  right: "0",
                  top: "150px",
                }}
              />
              <div
                style={{ backgroundColor: "#FFF" }}
                className="py-[35px] px-[32px] w-[340px] z-[100]"
              >
                <img src="./icons/15.svg" className="mx-auto"></img>
                <div className="text-[#819297] text-center">
                  years of expertise in the sport nutrition industry
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FFF" }}
                className="py-[35px] px-[32px] w-[340px] z-[100]"
              >
                <img src="./icons/moreOne.svg" className="mx-auto"></img>
                <div className="text-[#819297] text-center">
                  consumers in North America
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FFF" }}
                className="py-[35px] px-[32px] w-[340px] z-[100]"
              >
                <img src="./icons/2007.svg" className="mx-auto"></img>
                <div className="text-[#819297] text-center">
                  the year the company was founded
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="sm:flex">
          <div className="flex flex-col gap-[20px] sm:ml-[200px] sm:mt-[64px]">
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
          <div className="flex w-full mt-[48px] sm:my-auto">
            <Button
              variant={ButtonVariants.gradientInverted}
              size={isDesktop ? ButtonSizes.xl : undefined}
              className="mx-auto sm:ml-auto sm:mr-[250px]"
            >
              <div className="flex">
                learn more
                <img className="ml-[16px] " src="./icons/arrowRightGr.svg" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
