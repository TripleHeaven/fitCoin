import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph, ParagraphVariant } from "components/Paragraph";
import { StakingOption } from "components/StakingOption";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import React, { useState } from "react";

interface RevolutionItemProps {
  children?: React.ReactNode;
  title?: string;
}

export const RevolutionItem: React.FC<RevolutionItemProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="bg-[white] p-[16px] rounded-[16px] flex flex-col md:w-[327px]"
      style={{
        boxShadow: "0px 4px 16px -6px rgba(0, 0, 0, 0.1)",
        backgroundImage: "url('./bgs/robotBg.png')",
        backgroundSize: "100%",
        position: "relative",
      }}
    >
      <div>
        <div className="flex w-full relative">
          <h1
            className=" text-center uppercase text-[16px] mx-auto"
            style={{
              background:
                "-webkit-linear-gradient(1deg, #30CFD0 12.12% ,#330867 95.64%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              position: "absolute",

              right: "0",
            }}
          >
            <img src="./icons/arrowDown.svg" className="md:hidden"></img>
          </div>
        </div>
        <Collapse open={isOpen} className="md:max-h-[1000px]">
          <div className="flex flex-col ml-[8px] gap-[22px] mt-[32px]">
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export const RoadMap = () => {
  const [isOpenQ1, setOpenQ1] = useState(true);
  const [isOpenQ2, setOpenQ2] = useState(false);
  const [isOpenQ3, setOpenQ3] = useState(false);
  const [isOpenQ4, setOpenQ4] = useState(false);

  const { isDesktop } = useDesktopProvider();

  return (
    <section className="px-[16px] mt-[60px] relative pb-[64px] max-w-[1500px] mx-auto">
      <img
        src="./icons/xx.svg"
        style={{
          position: "absolute",
          left: "15px",
          width: "12px",
        }}
      ></img>
      <Title variant={TitleVariant.h2} className="text-center text-gray-300">
        roadmap
      </Title>

      <div className="px-auto flex flex-col  mt-[32px] md:flex-row flex-wrap gap-[24px] sm:mt-[64px] justify-center">
        <RevolutionItem title="q2 2022">
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Project announcement
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Core team generated
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Start of marketing company
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Private sale
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Multi-chain bridges development
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Development of a whitepaper
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              New NFT-pack production
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Community building
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              variant={ParagraphVariant.textLarge}
              className="text-left ml-[12px]"
            >
              Social media announcement
            </Paragraph>
          </div>
        </RevolutionItem>
        <RevolutionItem title="q3 2022">
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Listing on MEXC and PancakeSwap
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Wallet integration
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Contract audit
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Fitcoin release
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Deployment of Fitcoin staking DApp
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Community expansion and growth
            </Paragraph>
          </div>
        </RevolutionItem>

        <RevolutionItem title="q4 2022">
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              UI/UX finalization
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Mobile app development
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              NFT-pack update{" "}
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Endorsement deals and influencer marketing
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              AMA’s and airdrops
            </Paragraph>
          </div>
        </RevolutionItem>

        <RevolutionItem title="q1 2023">
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Payment gateway platform release
            </Paragraph>
          </div>
          <div className="flex">
            <img src={"./icons/qOption.svg"} />
            <Paragraph
              className="text-left ml-[12px]"
              variant={ParagraphVariant.textLarge}
            >
              Revolution nutrition ecosystem expansion
            </Paragraph>
          </div>
        </RevolutionItem>
      </div>
    </section>
  );
};
