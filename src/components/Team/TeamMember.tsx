import styles from "./Team.module.css";
import clsx from "clsx";
import React, { useState } from "react";
import { Paragraph } from "components/Paragraph";

interface TeamMemberProps {
  name: string;
  role: string;
  fullDesc?: React.ReactNode;
  picSrc: string;
}

export const TeamMember = ({
  name,
  role,
  fullDesc,
  picSrc,
}: TeamMemberProps) => {
  const [isInfoOpen, setInfoOpen] = useState(false);
  return (
    <div
      className="w-[340px] h-[380px] rounded-[16px] relative"
      onMouseEnter={() => setInfoOpen(true)}
      onMouseLeave={() => setInfoOpen(false)}
    >
      <img src={picSrc} className={styles.personImage} alt={`photo ${name}`} />
      <div
        className={clsx(
          "absolute  w-[307px] h-[345px] rounded-[16px] left-[17px] flex flex-col",
          styles.personImageInnerWrapper
        )}
      >
        <div
          className={clsx(
            "text-left absolute bottom-[0] rounded-[16px] px-[8px] py-[6px]",
            isInfoOpen && "opacity-[0]",
            styles.personImageInnerWrapper
          )}
        >
          <label className="font-[microgrammaBold] font-[18px] text-[#fff] uppercase">
            {name}
          </label>
          <p className="font-[14px] text-[#fff]">{role}</p>
        </div>
        <div
          className={clsx(
            "text-left  bottom-[0] w-full h-full rounded-[16px] px-[16px] py-[16px] opacity-[0]",
            isInfoOpen ? "opacity-[100]" : "opacity-[0]",
            styles.personImageDesc,
            !isInfoOpen && styles.personImageDescHover
          )}
        >
          <div className="">
            <label className="font-[microgrammaBold] font-[18px] text-[#fff] uppercase">
              {name}
            </label>
            <p className="font-[14px] text-[#fff] ">{role}</p>
            {fullDesc}
          </div>
        </div>
      </div>
    </div>
  );
};
