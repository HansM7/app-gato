"use client";

import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

const sizing = {
  title: "xl:text-3xl md:text-2xl text-2xl",
  description: "xl:text-2xl md:text-xl text-xl",
};

function Detail() {
  const [selected, setSelected] = useState<any>(1);

  const [isEnter, setIsEnter] = useState(false);

  function handleEnter() {
    setIsEnter(true);
  }

  function handleLeave() {
    setIsEnter(false);
  }

  return (
    <section className="xl:px-32 md:px-24  px-8 flex  py-16  w-full bg-white justify-center  ">
      <RevealWrapper duration={1500} origin="left ">
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-32">
          <div className="flex justify-start   md:flex-col gap-4 ">
            <div
              role="button"
              onClick={() => setSelected(1)}
              className={`p-3 rounded-md ${
                selected === 1 ? "shadow-lg text-[#0A86ED]" : "text-[#7A7678]"
              }`}
            >
              <svg
                data-testid="geist-icon"
                height="24"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 5.25136V4.2487L0.463236 4.05702L7.71324 1.05702L8 0.938354L8.28676 1.05702L15.5368 4.05702L16 4.2487V5.25136L15.5368 5.44304L8.28676 8.44304L8 8.5617L7.71324 8.44304L0.463236 5.44304L0 5.25136ZM0 8.45825V6.83491L0.536764 7.05702L8 10.1453L15.4632 7.05702L16 6.83491V8.45825L8.28676 11.6499L8 11.7686L7.71324 11.6499L0 8.45825ZM0 11.7083V10.0849L0.536764 10.307L8 13.3953L15.4632 10.307L16 10.0849V11.7083L8.28676 14.8999L8 15.0186L7.71324 14.8999L0 11.7083ZM8 6.93835L2.71154 4.75003L8 2.5617L13.2885 4.75003L8 6.93835Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div
              role="button"
              onClick={() => setSelected(2)}
              className={`p-3 rounded-md ${
                selected === 2 ? "shadow-lg text-[#0A86ED]" : "text-[#7A7678]"
              }`}
            >
              <svg
                data-testid="geist-icon"
                height="24"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 2.5H1.5V5H3V6H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H5V12.5H6V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6H14V5H14.5V2.5ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5ZM5 9V7.5H6V9H5ZM5 11.5V10H6V11.5H5ZM6.5 5V6H8V5L6.5 5ZM4 5V6H5.5V5H4ZM9 5V6H10.5V5H9ZM11.5 5V6H13V5H11.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div
              role="button"
              onClick={() => setSelected(3)}
              className={`p-3 rounded-md ${
                selected === 3 ? "shadow-lg text-[#0A86ED]" : "text-[#7A7678]"
              }`}
            >
              <svg
                data-testid="geist-icon"
                height="24"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="24"
              >
                <g clip-path="url(#clip0_53_1354omh4ri0y)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.25 0C1.00736 0 0 1.00736 0 2.25V13.75C0 14.9926 1.00736 16 2.25 16H13.75C14.9926 16 16 14.9926 16 13.75V2.25C16 1.00736 14.9926 0 13.75 0H2.25ZM1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H13.75C14.1642 1.5 14.5 1.83579 14.5 2.25V13.75C14.5 14.1642 14.1642 14.5 13.75 14.5H2.25C1.83579 14.5 1.5 14.1642 1.5 13.75V2.25ZM5.5 10V7.125C5.5 6.64175 5.89175 6.25 6.375 6.25C6.85825 6.25 7.25 6.64175 7.25 7.125V10.5V11.25H8.75V10.5V7.125V7.12497C8.75 6.64172 9.14175 6.24997 9.625 6.24997C10.1082 6.24997 10.5 6.64172 10.5 7.12497V10.5V11.25H12V10.5V7.12497C12 5.81329 10.9367 4.74997 9.625 4.74997C8.99638 4.74997 8.42481 4.99419 7.99998 5.39292C7.57516 4.99421 7.0036 4.75 6.375 4.75C6.066 4.75 5.77078 4.80901 5.5 4.91638V4.75H4V5.5V7.125V10V10.5V10.75V11.25H5.5V10.75V10.5V10Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>

            <div
              role="button"
              onClick={() => setSelected(4)}
              className={`p-3 rounded-md ${
                selected === 4 ? "shadow-lg text-[#0A86ED]" : "text-[#7A7678]"
              }`}
            >
              <svg
                data-testid="geist-icon"
                height="24"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div
              role="button"
              onClick={() => setSelected(5)}
              className={`p-3 rounded-md ${
                selected === 5 ? "shadow-lg text-[#0A86ED]" : "text-[#7A7678]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z"></path>
              </svg>
            </div>
          </div>
          {/* right */}
          {/* <div className="flex  pt-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-[3rem]">Consultaria</h2>
              <div className="pl-8 flex flex-col gap-2">
                <p className="text-[2rem] text-[#7A7678]">
                  Somos especialistas en el diseño atractivo y diferenciado de
                  empaques que incitan a la compra.
                </p>
                <div
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  role="button"
                  className={`relative rounded-3xl py-2 pr-2  w-fit text-xs h-10 font-semibold flex items-center   ${
                    isEnter && " transition-all"
                  } transition-all`}
                >
                  <div
                    className={`bg-blue-300 rounded-full w-10 h-full absolute  ${
                      isEnter && "bg-blue-500 w-full transition-all"
                    } transition-all`}
                  ></div>
                  <span
                    className={`pl-2 z-10 ${
                      isEnter ? "text-white" : "text-[#0A86ED]"
                    } `}
                  >
                    VER SERVICIO {">"}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
                alt=""
              />
            </div>
          </div> */}

          {selected === 1 && (
            <Component1
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 2 && (
            <Component2
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 3 && (
            <Component3
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
          {selected === 4 && (
            <Component4
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}

          {selected === 5 && (
            <Component5
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              isEnter={isEnter}
            />
          )}
        </div>
      </RevealWrapper>
    </section>
  );
}

function Component1({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex flex-col md:flex-row    animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`}>Branding</h2>
        <div className="md:pl-8 flex flex-col gap-2">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Nuestros servicios de Marketing Digital, están orientados en
            transformar tus redes sociales en fuentes de conversión
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-blue-300 rounded-full w-12 h-full absolute   ${
                isEnter && "bg-blue-500 w-full transition-all"
              } transition-all`}
            ></div>
            <Link
              href={"/servicios/branding"}
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0A86ED]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-md w-[800px]"
          src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function Component2({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`}>Diseño Web</h2>
        <div className="md:pl-8 flex flex-col gap-2">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Somos especialistas en el diseño atractivo y diferenciado de
            empaques que incitan a la compra.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-blue-300 rounded-full w-12 h-full absolute   ${
                isEnter && "bg-blue-500 w-full transition-all"
              } transition-all`}
            ></div>
            <Link
              href={"/servicios/diseno-web"}
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0A86ED]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-md w-[800px]"
          src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function Component3({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex flex-col md:flex-row  animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`}>Desarollo de software</h2>
        <div className="md:pl-8 flex flex-col gap-2">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Somos especialistas en el diseño atractivo y diferenciado de
            empaques que incitan a la compra.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-blue-300 rounded-full w-12 h-full absolute   ${
                isEnter && "bg-blue-500 w-full transition-all"
              } transition-all`}
            ></div>
            <Link
              href={"/servicios/desarrollo-software"}
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0A86ED]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-md w-[800px]"
          src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function Component4({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`}>Marketing</h2>
        <div className="md:pl-8 flex flex-col gap-2">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Somos especialistas en el diseño atractivo y diferenciado de
            empaques que incitan a la compra.
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-blue-300 rounded-full w-12 h-full absolute   ${
                isEnter && "bg-blue-500 w-full transition-all"
              } transition-all`}
            ></div>
            <Link
              href={"/servicios/marketing-digital"}
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0A86ED]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-md w-[800px]"
          src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function Component5({
  handleEnter,
  handleLeave,
  isEnter,
}: {
  handleEnter: any;
  handleLeave: any;
  isEnter: any;
}) {
  return (
    <div className="flex  flex-col md:flex-row   animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className={`${sizing.title}`}>Desarrollo Movil</h2>
        <div className="md:pl-8 flex flex-col gap-2">
          <p className={`${sizing.description} text-[#7A7678] font-light`}>
            Somos especialistas en desarrollo movil haciendo aplicaciones
            eficientes y escalables
          </p>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="button"
            className={`relative rounded-3xl py-3 pr-2  w-fit   font-semibold flex items-center   ${
              isEnter && " transition-all"
            } transition-all`}
          >
            <div
              className={`bg-blue-300 rounded-full w-12 h-full absolute   ${
                isEnter && "bg-blue-500 w-full transition-all"
              } transition-all`}
            ></div>
            <Link
              href={"/servicios/desarrollo-movil"}
              className={`pl-4 z-10 text-sm  ${
                isEnter ? "text-white" : "text-[#0A86ED]"
              } `}
            >
              VER SERVICIO {">"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-md w-[800px]"
          src="https://st.depositphotos.com/1594308/5155/i/450/depositphotos_51558107-stock-photo-business-partners-working-at-meeting.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Detail;
