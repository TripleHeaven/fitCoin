import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";

export const Hero = () => {
  const { isDesktop } = useDesktopProvider();
  return (
    <div
      className="px-[17px] sm:px-[120px]"
      style={{
        backgroundImage: isDesktop
          ? "url(./bgs/heroDesk.png)"
          : "url('./bgs/heroMobile.png')",
        height: isDesktop ? 798 : "",
        backgroundSize: isDesktop ? "cover" : "100%",
        position: "relative",
      }}
    >
      <div className="sm:flex flex-col sm:max-w-[1100px] sm:pb-[1000px]">
        <div className="text-center mt-[64px] sm:mt-[100px] sm:text-left ">
          <Title variant={TitleVariant.h1} className=" text-gray-300">
            fitcoin
          </Title>

          <Title variant={TitleVariant.h3}>
            First e-commerce transactional token
          </Title>
        </div>

        <div className="mt-[24px] text-center">
          <Paragraph className="text-center sm:text-left sm:text-[24px]">
            Fitcoin is a token built on the basis of blockchain technology which
            opens up new possibilities and provides in purchase-to-earn
            mechanics to token holders.
          </Paragraph>
        </div>

        <div className="flex sm:block w-full mt-[48px] sm:mt-[64px]">
          <Button
            variant={ButtonVariants.gradient}
            size={isDesktop ? ButtonSizes.xl : undefined}
            className="mx-auto"
          >
            <div className="flex">
              launch app
              <img className="ml-[16px]" src="./icons/arrowRight.svg" />
            </div>
          </Button>
          <img
            className=" hidden sm:block sm:absolute sm:right-[0] sm:bottom-[20px] sm:right-[250px] sm:w-[600px]"
            src="./icons/TwoCoins.png"
          />
        </div>

        <img className="sm:hidden" src="./icons/TwoCoins.png" />
      </div>
    </div>
  );
};
