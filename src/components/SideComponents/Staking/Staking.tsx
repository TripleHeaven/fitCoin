import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { StakingOption } from "components/StakingOption";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { useState } from "react";
import "./Staking.css"

export const Staking = () => {
  const { isDesktop } = useDesktopProvider();

  return (
    <section className="px-[16px] mt-[60px]">
      <div className="px-[16] m-auto max-w-[1100px]">
        <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
          Staking
        </Title>

          <div className="staking__content">
          <div className="max-w-[340px] staking__content-item">
          <StakingOption
            img="./icons/stakingOpt1.png"
            text="Token holders are able to stake their Fitcoin on the Staking DApp
              website"
          />
          </div>
          <div className="max-w-[340px] staking__content-item">
          <StakingOption
            img="./icons/stakingOpt2.png"
            text="When the staking period ends, holders get their Fitcoin back + earn APY rewards"
          />
         </div>
          <div className="max-w-[340px] staking__content-item">
          <StakingOption
            img="./icons/stakingOpt3.png"
            text="Stake tokens, receive rewards and collect exclusive NFTs with staking tier-system"
          />
          </div>
        </div>
        <div className="mt-[32px] flex justify-center sm:flex sm:mt-[64px]">
          <Button
            variant={ButtonVariants.gradient}
            size={isDesktop ? ButtonSizes.xl : undefined}
            className="m-auto"
          >
            <div className="flex">
              go to staking app
              <img className="ml-[10px]" src="./icons/arrowRight.svg" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
