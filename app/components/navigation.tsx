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
              <span role="button" onClick={() => setIsDrawer(false)}>
                x
              </span>
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
