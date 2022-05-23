import { useState } from "react";
import clsx from "clsx";
import { Button, ButtonVariants } from "./components";
import { Collapse } from "components/Collapse";

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  return (
    <>
      <div className="w-full h-[72px] flex items-center visible sm:hidden px-[16px] py-[12px]">
        <img src="./icons/fitCoin.svg" alt="fitCoin" />

        <div className="ml-auto  sm:hidden">
          <img
            src="./icons/sideBar.svg"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          ></img>
        </div>
        {isOpen && (
          <div
            className={clsx(
              "fixed  gap-[44px] top-[84px] p-0 right-0  flex overflow-auto z-10 flex-col animate-revealLeft flex-shring-0 h-full bg-[gray] px-[24px] pt-[32px]",
              {
                "h-auto": !isOpen,
                "h-full": isOpen,
              }
            )}
          >
            <a className="">
              <h4>revolution</h4>
            </a>
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
