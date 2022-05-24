import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { StakingOption } from "components/StakingOption";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";

export const Staking = () => {
  return (
    <div className="px-[16px] mt-[60px]">
      <div className="px-[16]">
        <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
          Staking
        </Title>

        <div className="flex flex-col gap-[16px] mt-[32px]">
          <StakingOption
            img="./icons/stakingOpt1.png"
            text="Token holders are able to stake their Fitcoin on the Staking DApp
              website"
          />
          <StakingOption
            img="./icons/stakingOpt2.png"
            text="When the staking period ends, holders get their Fitcoin back + earn APY rewards"
          />

          <StakingOption
            img="./icons/stakingOpt3.png"
            text="Stake tokens, receive rewards and collect exclusive NFTs with staking tier-system"
          />

          <div className="mt-[32px]">
            <Button variant={ButtonVariants.gradient} className="mx-auto">
              <div className="flex">
                go to staking app
                <img className="ml-[10px]" src="./icons/arrowRight.svg" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
