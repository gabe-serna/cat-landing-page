import { ButtonLG, ButtonMD, Heading1, Paragraph } from "./components/Typography";
import hero from "./assets/hero.png";

function App() {
  return (
    <div className="grid grid-rows-[3rem_auto] lg:grid-rows-[4rem_auto">
      <nav className="fixed z-50 flex items-center justify-between w-screen h-12 px-4 bg-white lg:h-16 lg:px-16">
        <Heading1>Furvana</Heading1>
        <ButtonMD variant="primary" className="mt-0">
          Shop
        </ButtonMD>
      </nav>
      <div className="h-full row-span-1 row-start-2">
        <section
          id="hero"
          className="h-max lg:h-[90vh] p-4 flex flex-col gap-10 lg:flex-row lg:items-center lg:p-16"
        >
          <div>
            <Heading1 className="text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
              Silky Soft Fur in <span className="text-green-600">30 </span>Days.
            </Heading1>
            <Paragraph
              style={{ width: "clamp(45ch, 50%, 75ch)" }}
              className="max-w-full mt-4"
            >
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
          id="testimonials"
          className="flex flex-col items-center gap-10 p-4 mt-24 h-max lg:h-screen lg:p-16"
        >
          <Heading1 className="z-10 text-5xl text-center lg:text-6xl xl:text-6xl 2xl:text-7xl ">
            Don't Just Take Our Word For It.
          </Heading1>
          <div className="flex flex-col items-center justify-center w-full gap-20 mt-20 h-max lg:gap-8 lg:size-full lg:flex-row lg:max-h-96">
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover object-left rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F100000%2Fvelka%2Fginger-cat-profile.jpg&f=1&nofb=1&ipt=49937a265c2a0b18bcb46c1bdb0af5c485949bb9e0d07cf081880dbfdda1535b&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  My fur went from meh to marvelous in just a month. Now I’m the
                  softest, silkiest kitty on the block. My human says it’s like
                  petting a cloud!
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Bubs
                </h1>
              </div>
            </figure>
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover [object-position:30%_50%] rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnayturr.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fbengal-cat-1-1024x597.jpg&f=1&nofb=1&ipt=8713c73e817d756a2ddea7ce6a1f3939082581a2b83cc5e9ede201569ee17534&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  Meow Meow I like my fur myow. Very soft. Meow. 10/10. My owner wuvs
                  my fur and I get pets and pats all day long. Prrr. Mrrrp Mrp Meow.
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Misty
                </h1>
              </div>
            </figure>
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover [object-position:30%_50%] rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F72%2F27%2Ffa%2F7227fa925e1d425f6311e705360c6f3f.jpg&f=1&nofb=1&ipt=ac6349d1114d7d71d53d0b8b9e93f35aa02491b553c9e47035ca8ccfbb9dead3&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  I am delighted with the velvety feel of my fur, I daresay. It’s
                  smoother than ever, and I get more head scratches than any of my
                  neighbors.
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Mr. Fluffington
                </h1>
              </div>
            </figure>
          </div>
        </section>
        <section
          id="benefits"
          className="flex flex-col items-center gap-10 p-4 mt-24 h-max lg:h-screen lg:p-16"
        >
          <Heading1 className="z-10 text-5xl text-center lg:text-6xl xl:text-6xl 2xl:text-7xl ">
            From Furball to <span className="italic text-green-600">Fabulous</span>
          </Heading1>
          <div className="flex flex-col items-center justify-center w-full gap-20 mt-20 h-max lg:gap-8 lg:size-full lg:flex-row lg:max-h-96">
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover object-left rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F100000%2Fvelka%2Fginger-cat-profile.jpg&f=1&nofb=1&ipt=49937a265c2a0b18bcb46c1bdb0af5c485949bb9e0d07cf081880dbfdda1535b&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  My fur went from meh to marvelous in just a month. Now I’m the
                  softest, silkiest kitty on the block. My human says it’s like
                  petting a cloud!
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Bubs
                </h1>
              </div>
            </figure>
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover [object-position:30%_50%] rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnayturr.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fbengal-cat-1-1024x597.jpg&f=1&nofb=1&ipt=8713c73e817d756a2ddea7ce6a1f3939082581a2b83cc5e9ede201569ee17534&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  Meow Meow I like my fur myow. Very soft. Meow. 10/10. My owner wuvs
                  my fur and I get pets and pats all day long. Prrr. Mrrrp Mrp Meow.
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Misty
                </h1>
              </div>
            </figure>
            <figure className="relative border-2 shadow-lg rounded-md w-full px-8 py-6 h-full max-w-[20rem]">
              <img
                style={{ boxShadow: "0 0 0 1rem #ffffff" }}
                className={
                  "left-0 right-0 mx-auto lg:w-auto lg:h-1/3 lg:-top-[16.666%] " +
                  "w-1/4 h-auto -top-1/4 " +
                  "absolute object-cover [object-position:30%_50%] rounded-full aspect-square grayscale"
                }
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F72%2F27%2Ffa%2F7227fa925e1d425f6311e705360c6f3f.jpg&f=1&nofb=1&ipt=ac6349d1114d7d71d53d0b8b9e93f35aa02491b553c9e47035ca8ccfbb9dead3&ipo=images"
              />
              <div className="flex flex-col justify-between h-full pt-6 lg:pt-16">
                <p className="z-10 pb-4 text-sm italic font-normal leading-6 text-stone-500 2xl:text-xl xl:text-lg lg:text-base">
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                  I am delighted with the velvety feel of my fur, I daresay. It’s
                  smoother than ever, and I get more head scratches than any of my
                  neighbors.
                  <span className="text-lg leading-4 2xl:text-2xl xl:text-2xl lg:text-xl text-amber-500">
                    "
                  </span>
                </p>
                <h1 className="text-base font-bold tracking-wider text-center text-green-600 uppercase 2xl:text-2xl xl:text-xl lg:text-lg">
                  Mr. Fluffington
                </h1>
              </div>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
