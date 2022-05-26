import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const FitcSpecialFeatures = () => {
  return (
    <div className="relative px-[16px]">
      <div className="text-center items-center">
        <div className="px-[12px]">
          <Title className="text-gray-300" variant={TitleVariant.h1}>
            Fitcoin special features
          </Title>
        </div>
        <div className="flex flex-col gap-[23px] px-[13px] mt-[32px] text-left">
          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt1.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                pure cryptocurrency
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>

          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt2.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                limited supply which helps preserve FITC value{" "}
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>

          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt3.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                fractionally divisible
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>

          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt4.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                non-inflationary in the long run so its value can’t be stealed
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>

          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt5.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                fungible and transferable{" "}
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>

          <div>
            <div className="flex ">
              <img src="./icons/fcmOpt6.svg" />
              <Paragraph className="ml-[16px] my-auto text-[18px]">
                Can be traded on centralized (CEX) and Decentralized (DEX)
                cryptocurrency exchanges{" "}
              </Paragraph>
            </div>
            <img src="./icons/lineOpt.svg" className="mt-[12px]"></img>
          </div>
        </div>
        <div className="text-center px-[12px] mt-[12px] pb-[24px]">
          <Paragraph>Token contract address</Paragraph>
          <div
            className="pt-[12px] px-[12px]"
            style={{ overflowWrap: "break-word" }}
          >
            <a href={"test"}>0x90E3C7e03EEab5a8D440fA6d0f8d232FFfc9C225</a>
          </div>
        </div>
        <img
          src="./icons/xxx.svg"
          style={{ position: "absolute", bottom: "0" }}
        ></img>
      </div>
    </div>
  );
};
