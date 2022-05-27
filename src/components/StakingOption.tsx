import { useDesktopProvider } from "hooks/useDesktopContext";
import { Paragraph } from "./Paragraph";

interface StakingOption {
  img: string;
  text: string;
}

export const StakingOption = ({ img, text }: StakingOption) => {
  return (
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
        className="h-[90px] sm:h-[120px]"
      ></img>
      <Paragraph className="mt-[16px] text-center sm:text-[20px]">
        {text}
      </Paragraph>
    </div>
  );
};
