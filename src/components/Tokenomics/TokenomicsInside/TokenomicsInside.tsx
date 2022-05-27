import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import "./TokenomicsInside.css"

export const TokenomicsInside = () => {
  return (
    <section className="relative px-[16px] mt-[80px]">
      <div className="m-auto max-w-[1150px] px-[20px]">
      <div className="text-center items-center">
        <Title className="text-gray-300 tokens__title" variant={TitleVariant.h1}>
          tokenomics{" "}
        </Title>
        <Title variant={TitleVariant.h3} className="font-[microgrammaBold]">
          tokens division
        </Title>
      </div>
      <div className="flex flex-row justify-between tokens__content gap-[24px] mt-[40px]">
        <div className="flex flex-col max-w-[460px]">
        <div
          className="w-full mb-[32px] flex flex-col items-center px-[22px] py-[24px] "
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
          className="w-full flex mb-[32px] flex-col items-center px-[22px] py-[24px] "
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 23px -6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Paragraph className="text-[#819297]">
          Initial market cap
          </Paragraph>
          <Paragraph className="font-[microgrammaBold] text-[28px] text-[#30CFD0]">
          $ 477 750
          </Paragraph>
        </div>
        <div>
          <p className="text-[#819297] text-[20px] text-left">
            The majority of Fitcoin's supply allocation acts as a monetary
            reserve to assist the Fit Foundation in carrying out its mission -
            <b> rewarding users.</b>
          </p>
        </div>
        </div>
        <img src="./icons/graphMobile.svg" className="mt-[-100px]" />
      </div>
      </div>
    </section>
  );
};
