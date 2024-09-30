import { ButtonLG, ButtonMD, Heading1, Paragraph } from "./components/Typography";
import hero from "./assets/hero.png";

function App() {
  return (
    <div className="grid grid-rows-[3rem_auto] lg:grid-rows-[4rem_auto">
      <nav className="z-50 h-12 lg:h-16 bg-white w-full lg:px-16 px-4 flex items-center justify-between fixed">
        <Heading1 className="mt-0">Furvana</Heading1>
        <ButtonMD variant="primary" className="mt-0">
          Shop
        </ButtonMD>
      </nav>
      <div className="row-span-1 row-start-2 h-full">
        <section
          id="hero"
          className="h-[90vh] p-4 flex flex-col gap-10 lg:flex-row lg:items-center lg:p-16"
        >
          <div>
            <Heading1 className="text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
              Silky Soft Fur in <span className="text-green-600">30 </span>Days.
            </Heading1>
            <Paragraph className="mt-4">
              Reclaim your owner's attention and the envy of your friends. Try it now
              and see the difference.
            </Paragraph>
            <ButtonLG variant="primary" className="mt-12">
              Shop Now
            </ButtonLG>
          </div>
          <div>
            <img src={hero} className="w-full aspect-auto grayscale" />
          </div>
        </section>
        <section
          id="benefits"
          className="mt-24 h-[90vh] p-4 flex flex-col items-center gap-10 lg:p-16"
        >
          <Heading1 className="text-center text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl ">
            From Furball to <span className="text-green-600 italic">Fabulous</span>
          </Heading1>
          <div className="size-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-8">
            <figure className="bg-stone-400 rounded-md w-full h-full max-w-[20rem]"></figure>
            <figure className="bg-stone-400 rounded-md w-full h-full max-w-[20rem]"></figure>
            <figure className="bg-stone-400 rounded-md w-full h-full max-w-[20rem]"></figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
