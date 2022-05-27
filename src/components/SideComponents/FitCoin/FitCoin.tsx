import clsx from "clsx";
import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { url } from "inspector";
import { useState } from "react";
import styles from "./FitCoin.module.css";
export const FitCoin = () => {
  return (
    <section
      className={clsx(
        "px-[16px] mt-[60px] fitCoin lg:px-[120px] fi sm:pb-[400px] relative",
        styles.wrapper
      )}
      // style={
      //   !isDesktop
      //     ? {
      //         backgroundImage: "url('./bgs/bgFitCoinMobile.png')",
      //         backgroundSize: "100%",
      //         position: "relative",
      //       }
      //     : {
      //         position: "relative",

      //         backgroundImage: "url(./icons/fontFitcoin.png)",
      //         backgroundSize: "100% 100%",
      //         backgroundRepeat: "no-repeat",
      //         backgroundClip: "padding-box",
      //         backgroundPosition: "right 0",
      //       }
      // }
    >
      <img
        src="./icons/fontFitcoin.png"
        className="absolute left-0 w-full hidden lg:block top-0"
      />
      <img
        src="./bgs/bgFitCoinMobile.png"
        className="absolute left-0 w-full lg:hidden  top-0"
      />
      <img
        src="./icons/coinFitMobile.svg "
        className="  pt-[100px] mx-auto md:w-[600px] relative lg:hidden"
      />
      <div className="md:mt-[25px] sm:z-[100] relative">
        <Title
          variant={TitleVariant.h1}
          className="ml text-center lg:text-left text-gray-300   lg:ml-[120px]"
        >
          fitcoin
        </Title>
        <div className="flex px-[16px] flex-col gap-[24px] mt-[82px] mx-[32px] lg:gap-[57px]">
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
    </section>
  );
};
