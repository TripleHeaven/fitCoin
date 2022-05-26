import { useState } from "react";
import clsx from "clsx";
import { Button, ButtonVariants } from "./components";
import { Collapse } from "components/Collapse";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { Title, TitleVariant } from "components/Title";
import { Paragraph, ParagraphVariant } from "components/Paragraph";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { isDesktop } = useDesktopProvider();

  const [isOpen, setOpen] = useState(false);

  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  return (
    <>
      <div className="w-full h-[72px] flex items-center visible sm:flex px-[16px] py-[12px] sm:px-[64px] sm:bg-[white]">
        <Link to="/">
          <img src="./icons/fitCoin.svg" alt="fitCoin" />
        </Link>

        <div className="ml-auto  sm:hidden">
          <img
            src="./icons/sideBar.svg"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          ></img>
        </div>
        {isDesktop && (
          <div className="ml-auto flex gap-[44px] font-[microgrammaRegular] ">
            <div className="flex gap-[44px] my-auto">
              <div>
                <a>
                  <Title variant={TitleVariant.linkT}>revolution</Title>
                </a>
              </div>
              <div>
                <Link to="/tokenomics">
                  <Title variant={TitleVariant.linkT}>token</Title>
                </Link>
              </div>
              <div className="relative">
                <div
                  className="flex"
                  onClick={() => setIsOpenCommunity((prev) => !prev)}
                >
                  <div>
                    <Title variant={TitleVariant.linkT}>community</Title>
                  </div>
                  <div className="ml-[12px] w-[20px] h-[20px]">
                    <img
                      className="my-auto"
                      src="./icons/arrowDown.svg"
                      style={{
                        transform: isOpenCommunity ? "rotate(-180deg)" : "",
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "absolute flex flex-col   gap-[33px] bg-[#fff] z-[100] px-[24px]  min-w-[190px] font-[14px] pb-[24px] mt-[20px]",
                    !isOpenCommunity && "hidden"
                  )}
                >
                  <div className="flex mt-[24px]">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        twitter
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                  <div className=" flex">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        facebook
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                  <div className=" flex">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        discord
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                  <div className=" flex">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        instagram
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                  <div className=" flex">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        write us
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className="flex"
                  onClick={() => setIsOpenAbout((prev) => !prev)}
                >
                  <div>
                    <Title variant={TitleVariant.linkT}>about</Title>
                  </div>
                  <div className="ml-[12px] w-[20px] h-[20px]">
                    <img
                      className="my-auto"
                      src="./icons/arrowDown.svg"
                      style={{
                        transform: isOpenAbout ? "rotate(-180deg)" : "",
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "absolute flex flex-col   gap-[33px] bg-[#fff] z-[100] px-[24px]  min-w-[250px] font-[14px] pb-[24px] mt-[20px]",
                    !isOpenAbout && "hidden"
                  )}
                >
                  <div className="flex mt-[24px]">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        team
                      </Paragraph>
                    </a>
                  </div>
                  <div className=" flex">
                    <a>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        white paper
                      </Paragraph>
                    </a>
                    <div className="ml-auto my-auto">
                      <img src="./icons/export.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button variant={ButtonVariants.gradient}>launch app</Button>
          </div>
        )}
        {isOpen && (
          <div
            className={clsx(
              "fixed  gap-[44px] top-[84px] p-0 right-0  flex overflow-auto z-10 flex-col animate-revealLeft flex-shring-0 h-full bg-[#fff] px-[24px] pt-[32px]",
              {
                "h-auto": !isOpen,
                "h-full": isOpen,
              }
            )}
          >
            <a className="">
              <h4>revolution</h4>
            </a>
            <Link to="/tokenomics">
              <h4>token</h4>
            </Link>
            <a>
              <h4>community</h4>
            </a>
            <div>
              <div
                className="flex"
                onClick={() => setIsOpenCommunity((prev) => !prev)}
              >
                <div>
                  <h4>token</h4>
                </div>
                <div className="ml-auto">
                  <img
                    src="./icons/arrowDown.svg"
                    style={{
                      transform: isOpenCommunity ? "rotate(-180deg)" : "",
                    }}
                  ></img>
                </div>
              </div>
              <Collapse open={isOpenCommunity}>
                <div className="flex flex-col ml-[8px] gap-[33px]">
                  <div className="mt-[33px]">
                    <a>
                      <h4>test</h4>
                    </a>
                  </div>
                  <div>
                    <a>
                      <h4>test</h4>
                    </a>
                  </div>
                </div>
              </Collapse>
            </div>
            <div>
              <div
                className="flex"
                onClick={() => setIsOpenAbout((prev) => !prev)}
              >
                <div>
                  <h4>about</h4>
                </div>
                <div className="ml-auto">
                  <img
                    src="./icons/arrowDown.svg"
                    style={{
                      transform: isOpenAbout ? "rotate(-180deg)" : "",
                    }}
                  ></img>
                </div>
              </div>
              <Collapse open={isOpenAbout}>
                <div className="flex flex-col ml-[8px] gap-[33px]">
                  <div className="mt-[33px]">
                    <a>
                      <h4>team</h4>
                    </a>
                  </div>
                  <div>
                    <a>
                      <h4>white paper</h4>
                    </a>
                  </div>
                </div>
              </Collapse>
            </div>
            <Button variant={ButtonVariants.gradient}>launch app</Button>
          </div>
        )}
      </div>
    </>
  );
};
