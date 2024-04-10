"use client";

import Link from "next/link";

function Navigation({
  isDrawer,
  setIsDrawer,
}: {
  isDrawer: any;
  setIsDrawer: any;
}) {
  return (
    <>
      <div className=" w-16 left-0 top-0  flex flex-col justify-between min-h-svh bg-white items-center shadow-lg border-r">
        <div className="h-96 flex flex-col justify-between items-center  mt-4">
          <Link href={""}>
            <img className="w-16" src="gato-icon.png" alt="" />
          </Link>
          <div>
            {isDrawer ? (
              <svg
                role="button"
                onClick={() => setIsDrawer(false)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 70 70"
              >
                <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
              </svg>
            ) : (
              <svg
                role="button"
                onClick={() => setIsDrawer(true)}
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  className="fill-black"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>
        </div>

        <div className="bg-[#0A86ED] flex justify-center items-center  text-center min-h-52 max-w-full overflow-hidden">
          <div className="-rotate-90   flex justify-center items-center min-w-48 ">
            <span className="w-full ">Get in touch</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
