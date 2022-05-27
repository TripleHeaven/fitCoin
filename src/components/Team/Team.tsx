import clsx from "clsx";
import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";
import styles from "./Team.module.css";

export const TeamWrapper = () => {
  const [isOpenReadMore, setOpenReadMore] = useState(false);

  return (
    <section className={styles.wrapper}>
      {/* <img
        src="./teams/background.png"
        style={{
          position: "absolute",
          objectFit: "contain",
          objectPosition: "top center",
          margin: "auto",
          boxSizing: "border-box",
          padding: "0px",
          inset: "0px",
          minWidth: "100%",
          minHeight: "100%",
          display: "block",
        }}
        alt="background"
      /> */}

      <section className="flex flex-col items-center">
        <Title className="text-gray-300" variant={TitleVariant.h1}>
          team
        </Title>
        <Title variant={TitleVariant.h2}>about us</Title>
        <Collapse
          className="mt-[24px]"
          toHeight={"max-h-[271px]"}
          open={isOpenReadMore}
          style={
            !isOpenReadMore
              ? {
                  background: "-webkit-linear-gradient(90deg, #eee, #333)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {}
          }
        >
          <Paragraph>
            We are a team of professional and passionate people and we are
            specialized in e-commerce technologies. We have been around for more
            than 15 years and have acquired skills and knowledge to build
            architecture to support the web 3.0 movement.
            <br />
            <br /> We have been looking for a long-term monetization model that
            does not jeopardise the user experience or privacy. Our objective is
            to transform centralized platforms into sophisticated decentralised
            organisational models that will encourage the development of
            customized digital economies.
            <br />
            <br /> Our token is positioned as the first online commerce
            cryptocurrency specifically designed for digital commerce and
            delivers a new roadmap to social communications.
            <br />
            <br /> Our mission is to promote the creation of an open digital
            services ecosystem through online commerce.
            <br />
            <br /> We have been a close observer of the growing momentum of
            decentralized technologies networks and encourage the development of
            digital economies. In such an ecosystem, economic incentives, other
            than advertising, to make great products.
          </Paragraph>
        </Collapse>
        {!isOpenReadMore && (
          <div className="flex mt-[16px]">
            <Button
              variant={ButtonVariants.custom}
              onClick={() => setOpenReadMore((prev) => !prev)}
              className="mx-auto text-[24px] font-main font-[400] text-gray-200"
            >
              <div className="flex">
                <span>Read more</span>
                <img className="ml-[6px]" src="./icons/arrowDownRead.svg" />
              </div>
            </Button>
          </div>
        )}
      </section>
      <section
        className="items-center text-center w-full"
        style={{ backgroundColor: "gray" }}
      >
        <Title variant={TitleVariant.h2}>core team</Title>
        <section className="flex flex-col items-center">
          <div className="w-[340px] h-[380px] rounded-[16px] relative">
            <img
              src="./teams/maxPhoto.png"
              className={styles.personImage}
              alt="background photo max"
            />
            <div
              className={clsx(
                "absolute  w-[307px] h-[343px] rounded-[16px] left-[17px] flex flex-col",
                styles.personImageInnerWrapper
              )}
            >
              <div className={clsx("text-left mt-auto px-[8px] py-[6px]")}>
                <label className="font-[microgrammaBold] font-[18px] text-[#fff] uppercase">
                  maxime gagne
                </label>
                <p className="font-[16px] text-[#fff] whitespace-nowrap">
                  Founder and CEO, Revolution Nutrition
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
