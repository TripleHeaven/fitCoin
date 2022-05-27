import { Title, TitleVariant } from "components/Title";

export const Ways = () => {
  return (
    <>
      <section className="mt-[64px] w-full text-center relative">
        <Title variant={TitleVariant.h2}>Other ways to earn tokens</Title>
        <img className="absolute md:w-[70px] top-0 right-0" src="./revolution/dots.svg" alt="dots" />
      </section>
      <section className="mt-[64px] w-full px-[1rem] lg:px-0 flex justify-between items-center max-w-[1200px] flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center ">
          <div className="gradientNormal h-[150px] w-[150px] rounded-[50%] p-[1px]">
            <div className="w-full h-full bg-[white] rounded-[50%] flex justify-center items-center">
              <img src="./revolution/ways-4.png" alt="youtube" />
            </div>
          </div>
          <span className="mt-[10px]">Engaging in social community chat</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
          <div className="gradientNormal h-[150px] w-[150px] rounded-[50%] p-[1px]">
            <div className="w-full h-full bg-[white] rounded-[50%] flex justify-center items-center">
              <img src="./revolution/ways-1.png" alt="youtube" />
            </div>
          </div>
          <span className="mt-[10px]">Uploading videos</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
          <div className="gradientNormal h-[150px] w-[150px] rounded-[50%] p-[1px] ">
            <div className="w-full h-full bg-[white] rounded-[50%] flex justify-center items-center">
              <img src="./revolution/ways-2.png" alt="youtube" />
            </div>
          </div>
          <span className="mt-[10px]">Writing posts</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0">
          <div className="gradientNormal h-[150px] w-[150px] rounded-[50%] p-[1px]">
            <div className="w-full h-full bg-[white] rounded-[50%] flex justify-center items-center">
              <img src="./revolution/ways-3.png" alt="youtube" />
            </div>
          </div>
          <span className="mt-[10px]">
            Creating a product database and FAQs
          </span>
        </div>
      </section>
    </>
  );
};
