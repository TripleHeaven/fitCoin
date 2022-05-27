import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { useState } from "react";
import "./FitEcoSystem.css"

export const FitEcoSystem = () => {
  const [isOpenReadMore, setIsOpenReadMore] = useState(false);
  const { isDesktop } = useDesktopProvider();

  return (
    <section className="relative">
      {isDesktop && (
        <>
          <img
          className="eco__img"
            src="./icons/lines.svg"
            style={{
              position: "absolute",
            }}
          />
          <img
            className="eco__img"
            src="./icons/green_dots_fit.svg"
            style={{
              position: "absolute",
              right: "0",
              bottom: "300px",
            }}
          />
        </>
      )}
      <div className="max-w-[1100px] m-auto px-[15px] eco__content">
        <div>
          <Title
            variant={TitleVariant.h2}
            className="text-gray-300 text-center mt-[64px]"
          >
            The fit ecosystem
          </Title>

          <Collapse
            className="mt-[24px]"
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
            <div>
              <Paragraph className="text-justify">
                The Fit ecosystem offers advanced digital services that
                customers can easily explore and enjoy.
              </Paragraph>
              <br></br>
              <Paragraph className="text-justify">
                The Fit Foundation devotes resources to establishing a fair and
                open governance mechanism that takes into account the opinions
                and needs of all ecosystem participants. The membership
                mechanism, the Fitcoin Rewards System, the Staking DApp and the
                unique Tier System are all governed by this open model.
              </Paragraph>
              <br></br>
              <Paragraph className="text-justify">
                Revolution Nutrition, as a founding member of the Fit
                Foundation, will lead the ecosystem and promote Fitcoin to its
                millions of users. The unique cash back loyalty program will
                provide Revolution Nutrition users with a wide range of options
                for earning, spending and staking Fitcoin, to ultimately
                converting their earnings into real money.
              </Paragraph>
            </div>
          </Collapse>
          {!isOpenReadMore && (
            <div className="flex mt-[16px]">
              <Button
                variant={ButtonVariants.custom}
                onClick={() => setIsOpenReadMore((prev) => !prev)}
                className="mx-auto text-[24px] font-main font-[400] text-gray-200"
              >
                <div className="flex">
                  <span>Read more</span>
                  <img className="ml-[6px]" src="./icons/arrowDownRead.svg" />
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
