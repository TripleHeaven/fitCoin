import clsx from "clsx";
import { Button, ButtonVariants } from "components/Button";
import { Collapse } from "components/Collapse";
import { Paragraph } from "components/Paragraph";
import { Title, TitleVariant } from "components/Title";
import { useState } from "react";
import styles from "./Team.module.css";
import { TeamMember } from "./TeamMember";

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
      <section className="relative w-full">
        <img
          src="./teams/linesSvg.svg"
          className="hidden xl:block"
          style={{ position: "absolute", top: "110px" }}
        />
        <img
          src="./icons/xx.svg"
          className="absolute sm:w-auto w-[12px] right-[0] sm:right-[100px]"
        />
        <section className="relative flex flex-col items-center max-w-[942px] mx-auto px-[24px] mt-[64px]">
          <Title className="text-gray-300" variant={TitleVariant.h1}>
            team
          </Title>
          <Title variant={TitleVariant.h2} className="mt-[16px]">
            about us
          </Title>
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
              specialized in e-commerce technologies. We have been around for
              more than 15 years and have acquired skills and knowledge to build
              architecture to support the web 3.0 movement.
              <br />
              <br /> We have been looking for a long-term monetization model
              that does not jeopardise the user experience or privacy. Our
              objective is to transform centralized platforms into sophisticated
              decentralised organisational models that will encourage the
              development of customized digital economies.
              <br />
              <br /> Our token is positioned as the first online commerce
              cryptocurrency specifically designed for digital commerce and
              delivers a new roadmap to social communications.
              <br />
              <br /> Our mission is to promote the creation of an open digital
              services ecosystem through online commerce.
              <br />
              <br /> We have been a close observer of the growing momentum of
              decentralized technologies networks and encourage the development
              of digital economies. In such an ecosystem, economic incentives,
              other than advertising, to make great products.
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
      </section>
      <img
        src="./teams/greenDots.svg"
        className="absolute sm:w-auto   right-[0px] w-[156px]    "
      />

      <section className="relative items-center text-center w-full mt-[120px]">
        <Title variant={TitleVariant.h2}>core team</Title>
        <section
          className={clsx(
            "flex flex-wrap justify-center mx-auto mt-[64px] sm:gap-[40px]",
            styles.coreTeamContainer
          )}
        >
          <img
            src="./teams/xxxGray.svg"
            className="absolute left-[0px] bottom-[1100px] w-[12px] sm:w-auto sm:left-[50px] sm:bottom-[150px]"
          />

          <TeamMember
            name="maxime gagne"
            role="Founder and CEO, Revolution Nutrition"
            picSrc="./teams/maxPhoto.png"
            fullDesc={
              <p className="text-[14px] text-[#fff] mt-[19px]">
                Maxime Gagne Founder and CEO, Revolution Nutrition Maxime is the
                Founder and CEO of Revolution Nutrition and leads the vision for
                Fitcoin. Founded in 2007, Revolution Nutrition is headquartered
                in Canada, a start-up accelerator he conceived of and first
                funded. Revolution has since become a global leader in the
                health & beauty industry with its state-of-the-art innovation
                and its unparalleled quality products.
              </p>
            }
          />
          <TeamMember
            name="Michael Enis Koka"
            role="IT Director"
            picSrc="./teams/michael.png"
            fullDesc={
              <p className="text-[14px] text-[#fff] mt-[19px]">
                Michael is a performance driven IT director that served as an
                advisor for some of the major e-commerce brands in North
                America. He graduated in computer science and has 12+ years of
                experience in e-commerce and web development. He is an early
                crypto adopter and has profound knowledge of decentralized
                applications. He has very strong skills in managing and
                coordinating information technology infrastructure.
              </p>
            }
          />
          <TeamMember
            name="Shijian Wu"
            role="Senior Software and blockchain Developer"
            picSrc="./teams/shijan.png"
            fullDesc={
              <p className="text-[14px] text-[#fff] mt-[19px]">
                Passionate web and blockchain developer with 10+ years of
                experience in the industry. Proven ability to develop innovative
                solutions on the blockchain, build decentralized applications,
                and lead teams. Seeking an opportunity to use expertise to drive
                transformation in a forward-thinking organization. Shi Jian is a
                certified blockchain developer and has great experience in
                developing decentralized blockchain applications using Ethereum.
              </p>
            }
          />

          <TeamMember
            name="Changmin Zhao"
            role="Senior Software Developer"
            picSrc="./teams/changmin.png"
            fullDesc={
              <p className="text-[14px] text-[#fff] mt-[19px]">
                Changmin is a full-stack developer with 8+ years of experience.
                With a unique combination of design and development experience,
                he builds professional, pixel-perfect interfaces in a short
                amount of time. Changmin excels at delivering smart solutions
                that enable seamless experiences. He has nearly a decade of
                full-stack development experience building scalable and
                thoroughly tested web applications.
              </p>
            }
          />

          <TeamMember
            name="Meet Amid"
            role="Software Developer"
            picSrc="./teams/meet.png"
            fullDesc={
              <p className="text-[14px] text-[#fff] mt-[19px]">
                Meet is a passionate web developer with over five years of
                experience in Software Development with a really high degree of
                autonomy, organizational skills, and strong understanding of all
                coding languages. He believes in lifelong learning, and
                technology as a tool to help solve problems.
              </p>
            }
          />
        </section>
        <img
          src="./teams/grayDots.svg"
          className="absolute right-[0px] bottom-[-100px]"
        />
      </section>
    </section>
  );
};
