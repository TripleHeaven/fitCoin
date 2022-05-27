import { Title, TitleVariant } from "components/Title";

export const Referal = () => {
  return (
    <>
      <section className="mt-[64px] text-center">
        <Title variant={TitleVariant.h2}>
          Referral program: Cashback links
        </Title>
        <Title className="text-gray-300" variant={TitleVariant.h4}>
          Share your unique link on your social medias and earn more Fitcoin
        </Title>
      </section>
      <section className="mt-[64px] w-full flex justify-between items-center max-w-[1200px] flex-col md:flex-row">
        <div className="flex flex-col items-center w-full p-10 max-w-[300px]">
          <img
            className="mix-blend-multiply"
            src="./revolution/referal-1.svg"
            alt="ref-1"
          />
          <h4 className="text-center text-[16px]">
            Share your referral link with new users
          </h4>
        </div>
        <div className="flex flex-col w-full items-center p-10 max-w-[300px]">
          <img
            className="mix-blend-multiply"
            src="./revolution/referal-2.png"
            alt="ref-1"
          />
          <h4 className="text-center text-[16px]">
            New users receive 3 Fitcoin when they sign up with your link
          </h4>
        </div>
        <div className="flex flex-col p-10 w-full items-center max-w-[300px]">
          <img
            className="mix-blend-multiply"
            src="./revolution/referal-3.png"
            alt="ref-1"
          />
          <h4 className="text-center text-[16px]">
            Receive 2 Fitcoin when the new users make a purchase!
          </h4>
        </div>
      </section>
    </>
  );
};
