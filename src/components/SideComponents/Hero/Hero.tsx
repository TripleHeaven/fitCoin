import clsx from "clsx";
import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={clsx("px-[17px] sm:px-[120px]", styles.wrapper)}>
      <div className="sm:flex flex-col m-auto max-w-[1300px] ">
        <div className="text-center mt-[64px] sm:mt-[100px] lg:text-left ">
          <Title variant={TitleVariant.h1} className=" text-gray-300">
            fitcoin
          </Title>

          <Title variant={TitleVariant.h3}>
            First e-commerce transactional token
          </Title>
        </div>

        <div className="mt-[24px]">
          <Paragraph className="text-center lg:text-left sm:text-[24px]">
            Fitcoin is a token built on the basis of blockchain technology which
            opens up new possibilities and provides in purchase-to-earn
            mechanics to token holders.
          </Paragraph>
        </div>

        <div className="flex flex-col sm:block w-full items-center   mt-[48px] sm:mt-[64px]">
          <div className="flex w-full lg:block lg:w-auto">
            <Button variant={ButtonVariants.gradient} className="mx-auto">
              <div className="flex">
                launch app
                <img className="ml-[16px]" src="./icons/arrowRight.svg" />
              </div>
            </Button>
          </div>
          <img
            className="ml-auto lg:w-[600px] ml-auto mr-auto  md:w-[400px] lg:mr-[-50px] lg:mt-[-100px]"
            src="./icons/TwoCoins.png"
          />
        </div>
      </div>
    </section>
  );
};
