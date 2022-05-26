import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph, ParagraphVariant } from "components/Paragraph";
import { StakingOption } from "components/StakingOption";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { useState } from "react";

export const RoadMap = () => {
  const [isOpenQ1, setOpenQ1] = useState(true);
  const [isOpenQ2, setOpenQ2] = useState(false);
  const [isOpenQ3, setOpenQ3] = useState(false);
  const [isOpenQ4, setOpenQ4] = useState(false);

  const { isDesktop } = useDesktopProvider();

  return (
    <div className="px-[16px] mt-[60px]">
      <Title variant={TitleVariant.h2} className="text-center text-gray-300">
        roadmap
      </Title>

      <div className="flex flex-col gap-[24px] mt-[32px] sm:flex-row sm:mx-[150px] sm:justify-between sm:mt-[64px]">
        <div
          onClick={() => setOpenQ1(true)}
          className="bg-[white] p-[16px] rounded-[16px] flex flex-col sm:w-[327px]"
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
                q2 2022
              </h1>
              <div
                style={{
                  position: "absolute",

                  right: "0",
                }}
              >
                {!isOpenQ1 && <img src="./icons/arrowDown.svg"></img>}
              </div>
            </div>
            <Collapse open={isOpenQ1 || isDesktop}>
              <div className="flex flex-col ml-[8px] gap-[22px] mt-[32px]">
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
              </div>
            </Collapse>
          </div>
        </div>

        <div
          onClick={() => setOpenQ2(true)}
          className="bg-[white] p-[16px] rounded-[16px] flex flex-col sm:w-[327px]"
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
                q3 2022
              </h1>
              <div
                style={{
                  position: "absolute",

                  right: "0",
                }}
              >
                {!isOpenQ2 && !isDesktop && (
                  <img src="./icons/arrowDown.svg"></img>
                )}
              </div>
            </div>
            <Collapse open={isOpenQ2 || isDesktop}>
              <div className="flex flex-col ml-[8px] gap-[22px] mt-[32px]">
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Listing on MEXC and PancakeSwap
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Wallet integration
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Contract audit
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Fitcoin release
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Deployment of Fitcoin staking DApp
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Community expansion and growth
                  </Paragraph>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <div
          onClick={() => setOpenQ3(true)}
          className="bg-[white] p-[16px] rounded-[16px] flex flex-col sm:w-[327px]"
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
                q4 2022
              </h1>
              <div
                style={{
                  position: "absolute",

                  right: "0",
                }}
              >
                {!isOpenQ3 && !isDesktop && (
                  <img src="./icons/arrowDown.svg"></img>
                )}
              </div>
            </div>
            <Collapse open={isOpenQ3 || isDesktop}>
              <div className="flex flex-col ml-[8px] gap-[22px] mt-[32px]">
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    UI/UX finalization
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Mobile app development
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    NFT-pack update{" "}
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Endorsement deals and influencer marketing
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    AMA’s and airdrops
                  </Paragraph>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <div
          onClick={() => setOpenQ4(true)}
          className="bg-[white] p-[16px] rounded-[16px] flex flex-col sm:w-[327px]"
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
                q1 2023
              </h1>
              <div
                style={{
                  position: "absolute",

                  right: "0",
                }}
              >
                {!isOpenQ4 && !isDesktop && (
                  <img src="./icons/arrowDown.svg"></img>
                )}
              </div>
            </div>
            <Collapse open={isOpenQ4 || isDesktop}>
              <div className="flex flex-col ml-[8px] gap-[22px] mt-[32px]">
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Payment gateway platform release
                  </Paragraph>
                </div>
                <div className="flex">
                  <img src={"./icons/qOption.svg"} />
                  <Paragraph className="text-left ml-[12px]">
                    Revolution nutrition ecosystem expansion
                  </Paragraph>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
