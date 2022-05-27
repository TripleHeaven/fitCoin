import { About } from "components/Revolution/about";
import { Digital } from "components/Revolution/digital";
import { Wrapper } from "components/Wrapper";


export const Revolution = () =>(
    <Wrapper>
        <main className="flex w-full items-center justify-center flex-col ">
            <About />
            <Digital />
        </main>
    </Wrapper>
)