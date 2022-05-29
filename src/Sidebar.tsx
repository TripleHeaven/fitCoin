import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Button, ButtonVariants } from "./components";
import { Collapse } from "components/Collapse";
import { useDesktopProvider } from "hooks/useDesktopContext";
import { Title, TitleVariant } from "components/Title";
import { Paragraph, ParagraphVariant } from "components/Paragraph";
import { Link, Route } from "react-router-dom";
import { Links, Routes } from "utils";

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  const [isOpenCommunityDesk, setIsOpenCommunityDesk] = useState(false);
  const [isOpenAboutDesk, setIsOpenAboutDesk] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const refDesktop = useRef<HTMLDivElement>(null);
  const refMobileButton = useRef<HTMLImageElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const mobBile = document.getElementById("buttonMobile");

    if (isOpen && refMobileButton.current === event.target) {
      event.stopPropagation();
      setOpen(false);
      return;
    }

    if (
      ref &&
      ref.current &&
      !ref.current?.contains(event.target as any) &&
      !ref.current?.contains(refMobileButton.current)
    ) {
      setIsOpenCommunity(false);
      setIsOpenAbout(false);
      setOpen(false);
    }
  }, []);

  const handleClickOutsideDesktop = useCallback((event: MouseEvent) => {
    if (
      refDesktop &&
      refDesktop.current &&
      !refDesktop.current?.contains(event.target as any)
    ) {
      setIsOpenCommunityDesk(false);
      setIsOpenAboutDesk(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("click", handleClickOutsideDesktop, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("click", handleClickOutsideDesktop, true);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-[white]">
        <div className=" m-auto max-w-[1300px] h-[72px] px-2 flex items-center visible sm:flex">
          <Link to={Routes.MAIN}>
            <img src="./icons/fitCoin.svg" alt="fitCoin" />
          </Link>

          <div className="ml-auto  lg:hidden">
            {isOpen && (
              <div
                className="w-40 h-[50px]"
                onClick={(event) => event?.stopPropagation()}
                style={{
                  position: "absolute",
                  opacity: "0",
                  backgroundColor: "black",
                }}
              ></div>
            )}
            <img
              src="./icons/sideBar.svg"
              className="cursor-pointer"
              id={"buttonMobile"}
              ref={refMobileButton}
              onClick={(event) => {
                if (!isOpen) {
                  setOpen((prev) => !prev);
                }
              }}
            ></img>
          </div>
          <div
            ref={refDesktop}
            className="ml-auto hidden lg:flex flex gap-[44px] font-[microgrammaRegular] "
          >
            <div className="flex gap-[44px] my-auto">
              <div>
                <Link to={Routes.REVOLUTION_NUTRITION}>
                  <Title variant={TitleVariant.linkT}>revolution</Title>
                </Link>
              </div>
              <div>
                <Link to={Routes.TOKENOMICS}>
                  <Title variant={TitleVariant.linkT}>token</Title>
                </Link>
              </div>
              <div className="relative">
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    setIsOpenCommunityDesk((prev) => !prev);
                    setIsOpenAboutDesk(false);
                  }}
                >
                  <div>
                    <Title variant={TitleVariant.linkT}>community</Title>
                  </div>
                  <div className="ml-[12px] w-[20px] h-[20px]">
                    <img
                      className="my-auto"
                      src="./icons/arrowDown.svg"
                      style={{
                        transform: isOpenCommunityDesk ? "rotate(-180deg)" : "",
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "absolute flex flex-col   gap-[33px] bg-[#fff] z-[100] px-[24px]  min-w-[190px] font-[14px] pb-[24px] mt-[20px]",
                    !isOpenCommunityDesk && "hidden"
                  )}
                >
                  <a href={Links.TWITTER}>
                    <div className="flex mt-[24px]">
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        twitter
                      </Paragraph>

                      <div className="ml-auto my-auto">
                        <img src="./icons/export.svg" />
                      </div>
                    </div>
                  </a>
                  <a href={Links.FACEBOOK}>
                    <div className=" flex">
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        facebook
                      </Paragraph>
                      <div className="ml-auto my-auto">
                        <img src="./icons/export.svg" />
                      </div>
                    </div>
                  </a>
                  <a href={Links.DISCORD}>
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
                  </a>
                  <a href={Links.INSTAGRAM}>
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
                  </a>
                  <a href="mailto:info@fitcoin.xyz">
                    <div className=" flex">
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        write us
                      </Paragraph>
                      <div className="ml-auto my-auto">
                        <img src="./icons/export.svg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    setIsOpenAboutDesk((prev) => !prev);
                    setIsOpenCommunityDesk(false);
                  }}
                >
                  <div>
                    <Title variant={TitleVariant.linkT}>about</Title>
                  </div>
                  <div className="ml-[12px] w-[20px] h-[20px]">
                    <img
                      className="my-auto"
                      src="./icons/arrowDown.svg"
                      style={{
                        transform: isOpenAboutDesk ? "rotate(-180deg)" : "",
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "absolute flex flex-col   gap-[33px] bg-[#fff] z-[100] px-[24px]  min-w-[250px] font-[14px] pb-[24px] mt-[20px]",
                    !isOpenAboutDesk && "hidden"
                  )}
                >
                  <div className="flex mt-[24px]">
                    <Link to={Routes.TEAM}>
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        team
                      </Paragraph>
                    </Link>
                  </div>
                  <a href={Links.WHITE_PAPER}>
                    <div className=" flex">
                      <Paragraph variant={ParagraphVariant.linkLarge}>
                        white paper
                      </Paragraph>
                      <div className="ml-auto my-auto">
                        <img src="./icons/export.svg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <Button variant={ButtonVariants.gradient}>launch app</Button>
          </div>
          {isOpen && (
            <div
              ref={ref}
              className={clsx(
                "fixed  gap-[44px] top-[64px] p-0 right-0  flex overflow-auto z-10 flex-col animate-revealLeft flex-shring-0 h-full bg-[#fff] px-[24px] pt-[32px] lg:hidden",
                {
                  "h-auto": !isOpen,
                  "h-full": isOpen,
                }
              )}
            >
              <a className="">
                <Link to={Routes.REVOLUTION_NUTRITION}>
                  <h4>revolution</h4>
                </Link>
              </a>
              <Link to={Routes.TOKENOMICS}>
                <h4>token</h4>
              </Link>
              <div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => setIsOpenCommunity((prev) => !prev)}
                >
                  <div>
                    <h4>community</h4>
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
                    <a href={Links.TWITTER}>
                      <div className="flex mt-[24px]">
                        <h4>twitter</h4>

                        <div className="ml-auto my-auto">
                          <img src="./icons/export.svg" />
                        </div>
                      </div>
                    </a>
                    <a href={Links.FACEBOOK}>
                      <div className=" flex">
                        <h4>facebook</h4>{" "}
                        <div className="ml-auto my-auto">
                          <img src="./icons/export.svg" />
                        </div>
                      </div>
                    </a>
                    <a href={Links.DISCORD}>
                      <div className=" flex">
                        <h4>discord</h4>{" "}
                        <div className="ml-auto my-auto">
                          <img src="./icons/export.svg" />
                        </div>
                      </div>
                    </a>
                    <a href={Links.INSTAGRAM}>
                      <div className=" flex">
                        <h4>instagram</h4>
                        <div className="ml-auto my-auto">
                          <img src="./icons/export.svg" />
                        </div>
                      </div>
                    </a>
                    <a href="mailto:info@fitcoin.xyz">
                      <div className=" flex">
                        <h4>write us</h4>

                        <div className="ml-auto my-auto">
                          <img src="./icons/export.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </Collapse>
              </div>
              <div>
                <div
                  className="flex cursor-pointer"
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
                      <Link to={Routes.TEAM}>
                        <h4>team</h4>
                      </Link>
                    </div>
                    <div>
                      <a href={Links.WHITE_PAPER}>
                        <h4>white paper</h4>
                      </a>
                    </div>
                  </div>
                </Collapse>
              </div>
              <Button
                variant={ButtonVariants.gradient}
                onClick={() => window.open(Links.BSC_LINK)}
              >
                launch app
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
