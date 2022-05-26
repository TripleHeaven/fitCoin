import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";

export const TokenomicsInside = () => {
  return (
    <div className="relative px-[16px] mt-[80px]">
      <div className="text-center items-center">
        <Title className="text-gray-300" variant={TitleVariant.h1}>
          tokenomics{" "}
        </Title>
        <Title variant={TitleVariant.h3} className="font-[microgrammaBold]">
          tokens division
        </Title>
      </div>
      <div className="flex flex-col gap-[24px] mt-[40px]">
        <div
          className="w-full flex flex-col items-center px-[22px] py-[24px] "
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 23px -6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Paragraph className="text-[#819297]">
            Total supply of fitcoin
          </Paragraph>
          <Paragraph className="font-[microgrammaBold] text-[28px] text-[#30CFD0]">
            350 000 000
          </Paragraph>
        </div>
        <div
          className="w-full flex flex-col items-center px-[22px] py-[24px] "
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 23px -6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Paragraph className="text-[#819297]">
            Total supply of fitcoin
          </Paragraph>
          <Paragraph className="font-[microgrammaBold] text-[28px] text-[#30CFD0]">
            350 000 000
          </Paragraph>
        </div>
        <img src="./icons/graphMobile.svg" className="" />
        <div>
          <Paragraph className="text-center text-[#819297] text-[16px]">
            The majority of Fitcoin's supply allocation acts as a monetary
            reserve to assist the Fit Foundation in carrying out its mission -
            <b>rewarding users.</b>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
