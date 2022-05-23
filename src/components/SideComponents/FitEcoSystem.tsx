import { Button, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const FitEcoSystem = () => (
  <div
    style={{
      backgroundImage: "url('./bgs/heroMobile.png')",
      backgroundSize: "100%",
      position: "relative",
    }}
  >
    <div className="text-center mt-[64px] ">
      <Title variant={TitleVariant.h1} className=" text-gray-300">
        fitcoin
      </Title>

      <Title variant={TitleVariant.h3}>
        First e-commerce transactional token
      </Title>
    </div>

    <div className="mt-[24px] text-center ">
      <Paragraph className="text-center">
        Fitcoin is a token built on the basis of blockchain technology which
        opens up new possibilities and provides in purchase-to-earn mechanics to
        token holders.
      </Paragraph>
    </div>

    <div className="flex w-full mt-[48px]">
      <Button variant={ButtonVariants.gradient} className="mx-auto">
        <div className="flex">
          launch app
          <img className="ml-[16px]" src="./icons/arrowRight.svg" />
        </div>
      </Button>
    </div>

    <img src="./icons/TwoCoins.png" />
  </div>
);
