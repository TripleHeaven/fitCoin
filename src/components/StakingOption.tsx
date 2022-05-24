import { Paragraph } from "./Paragraph";

interface StakingOption {
  img: string;
  text: string;
}

export const StakingOption = ({ img, text }: StakingOption) => (
  <div
    className="bg-[white] p-[16px] rounded-[16px] flex flex-col"
    style={{
      boxShadow: "0px 4px 16px -6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <img
      src={img}
      style={{
        objectFit: "scale-down",
      }}
      className="h-[90px]"
    ></img>
    <Paragraph className="mt-[16px] text-center">{text}</Paragraph>
  </div>
);
