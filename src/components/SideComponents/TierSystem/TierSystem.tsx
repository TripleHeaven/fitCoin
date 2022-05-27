import { Button, ButtonSizes, ButtonVariants } from "components/Button";
import { Title, TitleVariant } from "components/Title";
import { useDesktopProvider } from "hooks/useDesktopContext";

export const TierSystem = () => {
  const { isDesktop } = useDesktopProvider();

  return (
    <div className="px-[12px] sm:px-[140px] mt-[80px]">
      <div className="max-w-[1100px] m-auto">
        <Title className="text-center text-gray-300" variant={TitleVariant.h2}>
          tier system
        </Title>
        <Title
          className="text-center font-normal mt-[16px]"
          variant={TitleVariant.h4}
        >
          the more you stake the more you EARN
        </Title>
        <div>
          {!isDesktop ? (
            <>
              <img src="./icons/TierMobile.png" className="mt-[32px] w-full" />
              <img src="./icons/Tier2Mobile.png" className="mt-[32px] w-full" />
            </>
          ) : (
            <div className="flex justify-center">
              <img
                className="w-full"
                src="./icons/tierDesktop.png"
                style={{
                  marginLeft: "",
                  marginRight: "",

                  paddingTop: "60px",
                }}
              />
            </div>
          )}
        </div>
        <div className="flex w-full mt-[48px] sm:flex-wrap sm:justify-center sm:px-[auto]]">
          {isDesktop && (
            <img
              src="./icons/tier2Desktop.png"
              style={{
                paddingTop: "60px",
                width: "600px",
                height: "auto",
              }}
            />
          )}

          <Button
            variant={ButtonVariants.gradientInverted}
            size={isDesktop ? ButtonSizes.xl : undefined}
            className="mx-auto sm:my-auto  sm:mt-[50px]"
          >
            <div className="flex">
              participate
              <img className="ml-[16px]" src="./icons/arrowRightGr.svg" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
