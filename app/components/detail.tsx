"use client";

import { RevealWrapper } from "next-reveal";
import { useState } from "react";

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
    <section className="xl:px-44 md:px-28  px-8 flex  py-16  w-full bg-gray-100">
      <RevealWrapper duration={1500} origin="left">
        <div className="flex w-full gap-32">
          <div className="flex flex-col gap-4">
            <div
              role="button"
              onClick={() => setSelected(1)}
              className={`p-3 rounded-md ${
                selected === 1 && "shadow-lg text-[#0A86ED]"
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
                selected === 2 && "shadow-lg text-[#0A86ED]"
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
                selected === 3 && "shadow-lg text-[#0A86ED]"
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
                selected === 4 && "shadow-lg text-[#0A86ED]"
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
    <div className="flex  pt-16 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
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
    <div className="flex  pt-16 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className="text-[3rem]">Desarrollo web</h2>
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
    <div className="flex  pt-16 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className="text-[3rem]">Desarollo de software</h2>
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
    <div className="flex  pt-16 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out animate-normal">
      <div className="flex flex-col gap-4">
        <h2 className="text-[3rem]">Marketing</h2>
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
    </div>
  );
}
export default Detail;
