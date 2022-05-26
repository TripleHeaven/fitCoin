import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { url } from "inspector";
import { useState } from "react";

export const FitCoin = () => {
  const { isDesktop } = useDesktopProvider();

  return (
    <div
      className="px-[16px] mt-[60px] sm:px-[120px]  sm:pb-[400px]"
      style={
        !isDesktop
          ? {
              backgroundImage: "url('./bgs/bgFitCoinMobile.png')",
              backgroundSize: "100%",
              position: "relative",
            }
          : {
              position: "relative",

              backgroundImage: "url(./icons/fontFitcoin.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundClip: "padding-box",
              backgroundPosition: "right 0",
            }
      }
    >
      {isDesktop && (
        <>
          <img
            src="./icons/xx.svg"
            style={{ position: "absolute", top: "-150px" }}
          />
        </>
      )}
      <img src="./icons/coinFitMobile.svg " className="mt-[46px] sm:hidden" />
      <div className="sm:mt-[212px] sm:z-[100] ">
        <Title
          variant={TitleVariant.h1}
          className="ml text-center sm:text-left text-gray-300 sm:ml-[120px]"
        >
          fitcoin
        </Title>
        <div className="flex px-[16px] flex-col gap-[24px] sm:gap-[57px]">
          <div className="flex mt-[24px] sm:mt-[57px]">
            <img src="./icons/fitCoinOpt1.svg" />
            <Paragraph className="ml-[16px] my-auto">
              BEP-20 token developed by Revolution Nutrition
            </Paragraph>
          </div>
          <div className="flex ">
            <img src="./icons/fitCoinOpt2.svg" />
            <Paragraph className="ml-[16px] my-auto">
              Built on the BSC blockchain
            </Paragraph>
          </div>
          <div className="flex ">
            <img src="./icons/fitCoinOpt3.svg" />
            <Paragraph className="ml-[16px] my-auto">
              BEP-20 token developed by Revolution Nutrition
            </Paragraph>
          </div>
          <div className="flex ">
            <img src="./icons/fitCoinOpt4.svg" />
            <Paragraph className="ml-[16px] my-auto">
              BEP-20 token developed by Revolution Nutrition
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};
