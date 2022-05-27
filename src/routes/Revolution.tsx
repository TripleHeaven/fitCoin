import { Button, ButtonSizes, ButtonVariants } from "components";
import { About } from "components/Revolution/about";
import { Digital } from "components/Revolution/digital";
import { Referal } from "components/Revolution/referal";
import { Utility } from "components/Revolution/utility";
import { Ways } from "components/Revolution/ways";
import { Wrapper } from "components/Wrapper";


export const Revolution = () => (
  <Wrapper>
    <main className="flex w-full items-center justify-center flex-col ">
      <About />
      <Digital />
      <Utility />
      <Referal />
      <Ways />
      <section className="mt-[64px] p-3 w-full flex items-center justify-center">
        <Button
          className="max-w-[733px] w-full text-[18px] md:text-[32px] flex justify-center items-center text-center mt-3"
          variant={ButtonVariants.gradientInverted}
          size={ButtonSizes.lg}
        >
          <span>Visit Our Shop &#8594;</span>
        </Button>
      </section>
    </main>
  </Wrapper>
);
