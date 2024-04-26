"use client";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white xl:px-32 md:px-24 px-8 flex  py-16  w-full flex-col">
      <div className="text-sm grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-16 justify-between w-full mb-4">
        <div className="">
          <span className="text-3xl font-semibold">GATO</span>
        </div>
        <div className="flex flex-col ">
          <span className="font-semibold">Visitanos</span>
          <span className="text-slate-600">Av. Brasil 2479, Jesús María</span>
        </div>
        <div className="flex flex-col ">
          <span className="font-semibold">Hablemos</span>
          <Link
            href={"tel:+51 976587365"}
            className="text-slate-600 md:text-sm text-xs"
          >
            +51 980005257
          </Link>
          <Link
            href={"tel:+51 976587365"}
            className="text-slate-600 md:text-sm text-xs"
          >
            +51 952341679
          </Link>
        </div>
        <div className="flex flex-col ">
          <span className="font-semibold">Escríbenos</span>
          <Link
            href={"mailto:info@gmail.com"}
            className="text-slate-600 md:text-sm text-xs"
          >
            info@geniusperu.com
          </Link>
          <Link
            href={"mailto:info@gmail.com"}
            className="text-slate-600 md:text-sm text-xs"
          >
            dortega@geniusperu.com
          </Link>
          <Link
            href={"mailto:info@gmail.com"}
            className="text-slate-600 md:text-sm text-xs"
          >
            mjara@geniusperu.com
          </Link>
        </div>

        <div className="flex flex-col ">
          <span className="font-semibold">Redes Sociales</span>
          <div className="flex">
            <Link href={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fd5"></stop>
                  <stop offset=".328" stopColor="#ff543f"></stop>
                  <stop offset=".348" stopColor="#fc5245"></stop>
                  <stop offset=".504" stopColor="#e64771"></stop>
                  <stop offset=".643" stopColor="#d53e91"></stop>
                  <stop offset=".761" stopColor="#cc39a4"></stop>
                  <stop offset=".841" stopColor="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stopColor="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </Link>
            <Link href={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center w-full mt-4 col-span-4">
        <span className="text-slate-600">&copy; 2024 - Gato</span>
      </div>
    </footer>
  );
}

export default Footer;
