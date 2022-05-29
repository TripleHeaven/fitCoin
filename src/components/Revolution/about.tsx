import { Collapse } from "components/Collapse";
import { Title, TitleVariant } from "components/Title";
import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { useState } from "react";
import clsx from "clsx";
import { Links } from "utils";

export const About = () => {
  const [isOpenReadMore, setIsOpenReadMore] = useState(false);
  return (
    <>
      <section className="mt-[64px]">
        <Title className="text-gray-300 text-center" variant={TitleVariant.h1}>
          revolution nutrition
        </Title>
      </section>
      <section className="max-w-[1300px] w-full px-[1rem] mt-[64px]">
        <div className="flex justify-center lg:justify-between items-center ">
          <div className="flex flex-col items-center justify-center max-w-[730px]  w-full">
            <Title
              className="w-full text-center lg:text-left"
              variant={TitleVariant.h3}
            >
              about
            </Title>
            <Collapse
              toHeight={"max-h-[271px]"}
              open={isOpenReadMore}
              style={
                !isOpenReadMore
                  ? {
                      background: "-webkit-linear-gradient(90deg, #eee, #333)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {}
              }
            >
              <p className="mt-[10px] text-center lg:text-left">
                Revolution Nutrition is one of the most well-known sports
                nutrition brands in the world and was awarded multiple times
                "Brand of the Year" and "Most Creative Sports Nutrition Brand"
                Prizes around US and Canada.
              </p>
              <p className="mt-[10px] text-center lg:text-left">
                It has a state-of-the-art site licence, FDA, GMP, and FOOD
                safety establishment facility.
              </p>
              <p className="mt-[10px] text-center lg:text-left">
                Revolution Nutrition is the first fully integrated ‘'manufacture
                to manufacture" B2C e-commerce app in the industry with its own
                in-house programming, graphic design, and marketing departments.
              </p>
            </Collapse>

            <div className="flex mt-[16px]">
              <Button
                variant={ButtonVariants.custom}
                onClick={() => setIsOpenReadMore((prev) => !prev)}
                className="mx-auto text-[24px] font-main font-[400] text-gray-200"
              >
                <div className="flex">
                  <span>{isOpenReadMore ? "Read less" : "Read more"}</span>
                  <img
                    className={clsx(isOpenReadMore ? "rotate-180" : "rotate-0")}
                    src="./icons/arrowDownRead.svg"
                  />
                </div>
              </Button>
            </div>
            <div className="block lg:hidden">
              <img src="./revolution/pills.png" alt="fit-pills" />
            </div>
            <Button
              className="w-full text-[18px] md:text-[32px] flex justify-center items-center text-center mt-3"
              variant={ButtonVariants.gradientInverted}
              size={ButtonSizes.lg}
              onClick={() => window.open(Links.REVOLUTION_NUTRITION)}
            >
              <span>Visit Our Shop &#8594;</span>
            </Button>
          </div>
          <div className="hidden lg:block ">
            <img src="./revolution/pills.png" alt="fit-pills" />
          </div>
        </div>
      </section>
    </>
  );
};
