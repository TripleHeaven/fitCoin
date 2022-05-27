import { Title, TitleVariant } from "components/Title";

export const Utility = () => {
  return (
    <>
      <section className="mt-[64px] text-center w-full relative">
        <Title variant={TitleVariant.h2}>Token Utility</Title>
        <Title className="text-gray-300" variant={TitleVariant.h4}>
          buy on revolution, earn fitcoin and real money
        </Title>
        <img className="abolute top-0 left-[1rem]" src="./icons/xx.svg" alt="xxx" />
      </section>
      <section className="w-full max-w-[1200px] mt-[64px] px-[1rem] lg:px-0">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex flex-col max-w-[350px] ">
            <p>
              The amount of Fitcoin you earn is indicated on each product page.
            </p>
            <img className="h-[350px]" src="./revolution/mac.png" alt="mac" />
          </div>
          <div className="flex flex-col col-reverse max-w-[350px]">
            <p>
              When you collect Fitcoin, you can redeem them off your next
              purchase There is no minimum or maximum of Fitcoin you can redeem.{" "}
            </p>
            <img className="h-[350px]" src="./revolution/protein.png" alt="mac" />
          </div>
          <div className="flex flex-col max-w-[350px]">
            <p>
              You may donate your Fitcoin to other users that you choose to
              share with. Fitcoin do not expire.
            </p>
            <img className="h-[350px]" src="./revolution/people.png" alt="mac" />
          </div>
        </div>
      </section>
    </>
  );
};
