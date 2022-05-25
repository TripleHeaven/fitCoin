import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { StakingOption } from "components/StakingOption";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";

export const LoyaltyProgramm = () => {
  return (
    <div className="px-[16px] mt-[60px]">
      <Title variant={TitleVariant.h2} className="text-center text-gray-300">
        loyalty programm
      </Title>
      <img src="./icons/lp.png" className="mt-[26px] mx-auto" />
      <div className="mt-[32px] flex">
        <Button variant={ButtonVariants.gradient} className="mx-auto">
          <div className="flex">
            get started
            <img className="ml-[10px]" src="./icons/arrowRight.svg" />
          </div>
        </Button>
      </div>
    </div>
  );
};
