import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";

export const FitCoin = () => {
  return (
    <div
      className="px-[16px] mt-[60px]"
      style={{
        backgroundImage: "url('./bgs/bgFitCoinMobile.png')",
        backgroundSize: "100%",
        position: "relative",
      }}
    >
      <img src="./icons/coinFitMobile.svg" className="mt-[46px]" />
      <div className="mt-[32px]">
        <Title variant={TitleVariant.h2} className="text-center text-gray-300">
          fitcoin
        </Title>
        <div className="flex px-[16px] flex-col ">
          <div className="flex mt-[24px]">
            <img src="./icons/fitCoinOpt1.svg" />
            <Paragraph className="ml-[16px] my-auto">
              BEP-20 token developed by Revolution Nutrition
            </Paragraph>
          </div>
          <div className="flex mt-[24px]">
            <img src="./icons/fitCoinOpt2.svg" />
            <Paragraph className="ml-[16px] my-auto">
              Built on the BSC blockchain
            </Paragraph>
          </div>
          <div className="flex mt-[24px]">
            <img src="./icons/fitCoinOpt3.svg" />
            <Paragraph className="ml-[16px] my-auto">
              BEP-20 token developed by Revolution Nutrition
            </Paragraph>
          </div>
          <div className="flex mt-[24px]">
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
