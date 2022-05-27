import clsx from "clsx";
import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";

export const Digital = () => {
  const [isOpenReadMore, setIsOpenReadMore] = useState(false);

  return (
    <section className="mt-[64px] px-[1rem]">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse ">
        <div className="flex flex-col items-center justify-center max-w-[730px]   w-full relative pb-[64px]">
          <Title
            className="w-full text-center lg:text-left"
            variant={TitleVariant.h3}
          >
            new digital economy inside revolution nutrition
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
              Since 2007, Revolution's vision has been to create the best
              health. The business has a history of selling health food
              products, but it now aims to build the transparent and sustainable
              ecosystem, putting users first, thanks to a new cryptocurrency at
              its heart.
            </p>
            <p className="mt-[10px] text-center lg:text-left">
              Instead of selling customers' attention and data to marketers,
              Revolution will pioneer a new economic model for digital services
              that empowers them.
            </p>
            <p className="mt-[10px] text-center lg:text-left">
              We believe that by doing so, the world can make significant
              progress in dismantling the centralising forces wielded by today's
              biggest players in the technology industry.
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
            <span></span>
          </div>
          <div className="flex  absolute  right-0 bottom-0 lg:left-0 lg:right-auto ">
                <img className="max-w-[40px]" src="./icons/coin.png" alt="" />
                <img className="max-w-[40px] ml-[44px]" src="./icons/bsc.svg" alt="" />
                <img className="max-w-[40px] ml-[44px]" src="./icons/bdex.svg" alt="" />
          </div>
        </div>
        <div>
            <img className="max-w-[300px] md:max-w-none" src="./revolution/two_phones.png" alt="two_phones" />
        </div>
      </div>
    </section>
  );
};
