import { RevealWrapper } from "next-reveal";
import React from "react";

const fundamentals = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12  xl:px-32 md:px-24 px-8 py-8 lg:py-16 justify-between">
        <RevealWrapper
          origin="left"
          duration={1500}
          className={`w-full lg:w-1/3 lg:max-w-[350px]`}
        >
          <div className="h-full w-full flex flex-col gap-4 items-center justify-between text-[#3D3D3D]">
            <div className="flex flex-col gap-4">
              <div className="w-[80px] h-auto aspect-square rounded-full shadow-md bg-[#6D28D9] flex justify-center items-center ">
                <svg
                  className="h-[40px] w-auto "
                  width="100%"
                  height="100%"
                  viewBox="0 0 40 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.00485 5.62095V0.612203C5.00485 0.280318 5.27556 0.00976562 5.61106 0.00976562H10.6158C10.9504 0.00976562 11.2215 0.280413 11.2215 0.612203C11.2215 0.949247 10.9503 1.2198 10.6158 1.2198H6.21726V5.62095C6.21726 5.95284 5.94559 6.22349 5.61106 6.22349C5.27556 6.22349 5.00485 5.95284 5.00485 5.62095ZM28.7785 0.612203C28.7785 0.280318 29.0497 0.00976562 29.3847 0.00976562H34.3889C34.7244 0.00976562 34.9951 0.280413 34.9951 0.612203V5.62095C34.9951 5.95284 34.7244 6.22349 34.3889 6.22349C34.0544 6.22349 33.7827 5.95284 33.7827 5.62095V1.2198H29.3846C29.0497 1.2198 28.7785 0.949151 28.7785 0.612203ZM11.2215 29.3884C11.2215 29.7203 10.9503 29.9909 10.6158 29.9909H5.61106C5.27556 29.9909 5.00485 29.7203 5.00485 29.3884V24.3847C5.00485 24.0477 5.27556 23.7771 5.61106 23.7771C5.94559 23.7771 6.21726 24.0477 6.21726 24.3847V28.7808H10.6158C10.9503 28.7808 11.2215 29.0514 11.2215 29.3884ZM34.9951 24.3847V29.3884C34.9951 29.7203 34.7244 29.9909 34.3889 29.9909H29.3847C29.0497 29.9909 28.7785 29.7203 28.7785 29.3884C28.7785 29.0514 29.0497 28.7808 29.3847 28.7808H33.7828V24.3847C33.7828 24.0477 34.0545 23.7771 34.389 23.7771C34.7244 23.7771 34.9951 24.0477 34.9951 24.3847ZM19.9997 13.5503C20.7994 13.5503 21.4496 14.2038 21.4496 15.0003C21.4496 15.8019 20.7994 16.4503 19.9997 16.4503C19.201 16.4503 18.5503 15.8019 18.5503 15.0003C18.5504 14.2038 19.2011 13.5503 19.9997 13.5503ZM19.9997 17.6604C21.4674 17.6604 22.662 16.4657 22.662 15.0003C22.662 13.5349 21.4674 12.3401 19.9997 12.3401C18.5325 12.3401 17.338 13.5349 17.338 15.0003C17.338 16.4657 18.5326 17.6604 19.9997 17.6604ZM23.9816 18.9828V11.0178H16.0184V18.9828H23.9816ZM26.937 13.9383C27.2715 13.9383 27.5426 13.6677 27.5426 13.3307C27.5426 12.9989 27.2714 12.7283 26.937 12.7283H25.1935V10.4154C25.1935 10.0785 24.9228 9.80783 24.5878 9.80783H22.2749V8.06672C22.2749 7.72977 22.0032 7.45912 21.6687 7.45912C21.3332 7.45912 21.0625 7.72977 21.0625 8.06672V9.80783H18.9375V8.06672C18.9375 7.72977 18.6668 7.45912 18.3313 7.45912C17.9969 7.45912 17.7251 7.72977 17.7251 8.06672V9.80783H15.4127C15.0772 9.80783 14.8065 10.0785 14.8065 10.4154V12.7283H13.0635C12.7289 12.7283 12.4573 12.9989 12.4573 13.3307C12.4573 13.6677 12.7289 13.9383 13.0635 13.9383H14.8065V16.0623H13.0635C12.7289 16.0623 12.4573 16.333 12.4573 16.6699C12.4573 17.0018 12.7289 17.2725 13.0635 17.2725H14.8065V19.5853C14.8065 19.9223 15.0772 20.1929 15.4127 20.1929H17.7251V21.9341C17.7251 22.2711 17.9968 22.5416 18.3313 22.5416C18.6668 22.5416 18.9375 22.271 18.9375 21.9341V20.1929H21.0625V21.9341C21.0625 22.2711 21.3332 22.5416 21.6687 22.5416C22.0032 22.5416 22.2749 22.271 22.2749 21.9341V20.1929H24.5878C24.9228 20.1929 25.1935 19.9223 25.1935 19.5853V17.2725H26.937C27.2715 17.2725 27.5426 17.0018 27.5426 16.6699C27.5426 16.333 27.2714 16.0623 26.937 16.0623H25.1935V13.9383H26.937ZM32.1312 20.5197C33.728 17.0216 33.7247 12.9822 32.1312 9.48101C34.4809 10.9055 36.6595 12.7589 38.5991 15.0004C36.6595 17.2417 34.4809 19.0952 32.1312 20.5197ZM30.162 21.5918C31.4387 19.6312 32.1148 17.3541 32.1148 15.0003C32.1148 12.6465 31.4387 10.3694 30.162 8.40873C26.9845 6.85659 23.547 6.04474 19.9998 6.04474C16.4531 6.04474 13.0156 6.85659 9.83812 8.40873C8.56141 10.3694 7.88526 12.6465 7.88526 15.0003C7.88526 17.3541 8.56141 19.6312 9.83812 21.5918C13.0156 23.144 16.4531 23.9558 19.9998 23.9558C23.547 23.9558 26.9845 23.144 30.162 21.5918ZM1.40091 15.0003C3.34048 12.7589 5.51913 10.9054 7.86883 9.48091C6.27526 12.9822 6.27201 17.0215 7.86883 20.5196C5.51913 19.0952 3.34058 17.2417 1.40091 15.0003ZM39.8595 14.6122C28.9677 1.57719 11.0305 1.57022 0.140537 14.6122C-0.0468458 14.8369 -0.0468458 15.1637 0.140537 15.3883C11.0293 28.429 28.9712 28.4297 39.8595 15.3883C40.0468 15.1637 40.0468 14.8369 39.8595 14.6122Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Visión
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
              <p className="w-full text-center">
              En GATO, aspiramos a liderar el marketing y software con soluciones innovadoras que inspiren confianza y admiración por nuestra excelencia y compromiso con la satisfacción del cliente.
              </p>
              <img
                className="rounded-md shadow-md w-full h-auto aspect-video lg:max-h-[250px] object-cover"
                src="https://i.pinimg.com/736x/fc/cf/b0/fccfb08b7b601c7b23e738d690ff3c69.jpg"
                alt="misión"
              />
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper
          origin="bottom"
          duration={1500}
          className={`w-full lg:w-1/3 lg:max-w-[350px]`}
        >
          <div className="h-full w-full flex flex-col gap-4 items-center justify-between text-[#3D3D3D]">
            <div className="flex flex-col gap-4">
              <div className="w-[80px] h-auto aspect-square rounded-full shadow-md bg-[#6D28D9] flex justify-center items-center ">
                <svg
                  className="h-[40px] w-auto "
                  width="100%"
                  height="100%"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.4885 20.2035L31.1367 13.4832C30.7994 12.9624 30.2276 12.6514 29.607 12.6514H10.4065C9.78686 12.6514 9.21553 12.9616 8.87811 13.4811L4.51279 20.2022C4.0667 20.8889 4.13561 21.7957 4.68037 22.4071L18.6383 38.0774C18.9838 38.4652 19.4797 38.6877 19.9991 38.6877C19.999 38.6877 19.9992 38.6877 19.9991 38.6877C20.5184 38.6877 21.0146 38.4653 21.3601 38.0775L35.3196 22.4062C35.8636 21.7955 35.933 20.8897 35.4885 20.2035ZM28.7254 14.2138L25.0656 19.8732L21.4036 14.2138H28.7254ZM23.6297 20.5304H16.3685L19.9991 14.9195L23.6297 20.5304ZM18.5947 14.2139L14.9427 19.8578L11.292 14.2139H18.5947ZM9.8474 14.8573L13.5169 20.5304H6.16279L9.8474 14.8573ZM6.49279 22.0929H14.3557L18.5132 35.5878L6.49279 22.0929ZM19.9991 35.104L15.9906 22.0929H24.0076L19.9991 35.104ZM21.485 35.5882L25.6426 22.0929H33.5062L21.485 35.5882ZM26.5015 20.5304L30.1676 14.8612L33.8387 20.5304H26.5015Z"
                    fill="white"
                  />
                  <path
                    d="M2.36977 20.5303H0.78125C0.349844 20.5303 0 20.88 0 21.3115C0 21.743 0.349844 22.0928 0.78125 22.0928H2.36977C2.80117 22.0928 3.15102 21.743 3.15102 21.3115C3.15102 20.88 2.80117 20.5303 2.36977 20.5303Z"
                    fill="white"
                  />
                  <path
                    d="M39.2189 20.5303H37.6304C37.199 20.5303 36.8491 20.88 36.8491 21.3115C36.8491 21.743 37.199 22.0928 37.6304 22.0928H39.2189C39.6503 22.0928 40.0001 21.743 40.0001 21.3115C40.0001 20.88 39.6503 20.5303 39.2189 20.5303Z"
                    fill="white"
                  />
                  <path
                    d="M34.152 7.17412C33.8468 6.86904 33.3523 6.86904 33.047 7.17412L30.452 9.7692C30.1469 10.0743 30.1469 10.569 30.452 10.874C30.6046 11.0266 30.8045 11.1029 31.0045 11.1029C31.2045 11.1029 31.4043 11.0265 31.5569 10.874L34.152 8.27897C34.457 7.97389 34.457 7.47928 34.152 7.17412Z"
                    fill="white"
                  />
                  <path
                    d="M9.58156 9.75463L6.98656 7.15947C6.68156 6.85439 6.18703 6.85439 5.88164 7.15947C5.57656 7.46455 5.57656 7.95924 5.88164 8.26432L8.47672 10.8594C8.6293 11.012 8.82922 11.0882 9.02914 11.0882C9.22906 11.0882 9.42898 11.0119 9.58156 10.8594C9.88664 10.5544 9.88664 10.0596 9.58156 9.75463Z"
                    fill="white"
                  />
                  <path
                    d="M20.02 1.31152C19.5886 1.31152 19.2388 1.66129 19.2388 2.09277V7.18402C19.2388 7.61551 19.5885 7.96527 20.02 7.96527C20.4514 7.96527 20.8013 7.61551 20.8013 7.18402V2.09277C20.8013 1.66137 20.4514 1.31152 20.02 1.31152Z"
                    fill="white"
                  />
                  <path
                    d="M20.5718 9.2748C20.4266 9.12949 20.225 9.0459 20.0195 9.0459C19.8141 9.0459 19.6125 9.12949 19.4672 9.2748C19.3219 9.42012 19.2383 9.62168 19.2383 9.82715C19.2383 10.0334 19.3218 10.2342 19.4672 10.3795C19.6125 10.5256 19.8141 10.6084 20.0195 10.6084C20.225 10.6084 20.4266 10.5256 20.5718 10.3795C20.7179 10.2342 20.8008 10.0326 20.8008 9.82715C20.8008 9.62168 20.7179 9.4202 20.5718 9.2748Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Misión
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
              <p className="text-center">
              En GATO ofrecemos soluciones de marketing y software personalizadas para impulsar el crecimiento y éxito de las empresas. Nos esforzamos por entender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas.
              </p>
              <img
                className="rounded-md shadow-md w-full h-auto aspect-video lg:max-h-[250px] object-cover"
                src="https://i.pinimg.com/736x/fc/cf/b0/fccfb08b7b601c7b23e738d690ff3c69.jpg"
                alt="misión"
              />
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper
          origin="right"
          duration={1500}
          className={`w-full lg:w-1/3 lg:max-w-[350px]`}
        >
          <div className="h-full w-full flex flex-col gap-4 items-center justify-between text-[#3D3D3D]">
            <div className="flex flex-col gap-4">
              <div className="w-[80px] h-auto aspect-square rounded-full shadow-md bg-[#6D28D9] flex justify-center items-center ">
                <svg
                  className="h-[40px] w-auto "
                  width="100%"
                  height="100%"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1828_1484)">
                    <path
                      d="M20.5671 13.9547C21.1176 13.9547 21.5635 13.5085 21.5635 12.9583C21.5635 12.4081 21.1176 11.9619 20.5671 11.9619C16.1649 11.9619 12.5962 15.5306 12.5962 19.9331C12.5962 24.3352 16.1649 27.904 20.5671 27.904C24.9695 27.904 28.5382 24.3352 28.5382 19.9331C28.5382 19.3826 28.0921 18.9367 27.5419 18.9367C26.9916 18.9367 26.5455 19.3826 26.5455 19.9331C26.5455 23.2348 23.8691 25.9115 20.5671 25.9115C17.2654 25.9115 14.5887 23.2348 14.5887 19.9331C14.5887 16.6311 17.2654 13.9547 20.5671 13.9547Z"
                      fill="white"
                    />
                    <path
                      d="M39.578 14.0152C39.405 13.4924 38.841 13.2089 38.3179 13.382C37.8071 13.551 37.5226 14.0948 37.6749 14.6109C40.6547 24.0997 35.3782 34.2074 25.8894 37.1872C16.4008 40.1669 6.29313 34.8904 3.3134 25.4016C0.333364 15.9128 5.61015 5.80506 15.0987 2.82533C18.6112 1.72243 22.3771 1.72243 25.8894 2.82533C26.4167 2.98433 26.973 2.68586 27.132 2.15852C27.2886 1.63911 27.0014 1.0901 26.4854 0.922256C15.9492 -2.3834 4.72789 3.4781 1.42223 14.0146C-1.88343 24.5508 3.97838 35.7721 14.5146 39.0777C25.051 42.3834 36.272 36.5219 39.5777 25.9854C40.8002 22.0889 40.8002 17.9117 39.578 14.0152Z"
                      fill="white"
                    />
                    <path
                      d="M22.4645 7.11804C22.4697 6.55072 22.0339 6.07648 21.4681 6.03406C21.1706 6.00873 20.8727 5.9834 20.5672 5.9834C12.8631 5.9834 6.61768 12.2288 6.61768 19.933C6.61768 27.6368 12.8631 33.8822 20.5672 33.8822C28.2711 33.8822 34.5165 27.6368 34.5165 19.933C34.5165 19.5726 34.4945 19.2124 34.4503 18.8548C34.3706 18.3079 33.8628 17.9292 33.3159 18.0088C32.7691 18.0882 32.3903 18.5963 32.4697 19.1432C32.4727 19.1639 32.4764 19.1844 32.4807 19.2051C32.5023 19.4465 32.5237 19.6858 32.5237 19.9324C32.524 26.536 27.1709 31.8891 20.5675 31.8897C13.9639 31.89 8.61078 26.5367 8.61047 19.9333C8.61017 13.3299 13.9629 7.9765 20.5666 7.97619H20.5669C20.8141 7.97619 21.0537 7.99756 21.2945 8.01892L21.4812 8.03448C22.0019 8.05676 22.4419 7.65271 22.4639 7.13208C22.4642 7.1272 22.4642 7.12262 22.4645 7.11804Z"
                      fill="white"
                    />
                    <path
                      d="M26.545 8.9735V12.5465L19.8623 19.2292C19.4665 19.6116 19.4555 20.2424 19.8379 20.6382C20.2203 21.034 20.8511 21.045 21.2469 20.6626C21.2551 20.6547 21.2633 20.6465 21.2713 20.6382L27.954 13.9555H31.527C31.7913 13.9555 32.0446 13.8505 32.2317 13.6634L38.2097 7.68505C38.5988 7.29595 38.5988 6.66516 38.2097 6.27606C38.023 6.08929 37.7697 5.98431 37.5054 5.98431H34.5162V2.99512C34.5162 2.44488 34.07 1.99872 33.5195 1.99902C33.2555 1.99902 33.0022 2.104 32.8155 2.29077L26.8371 8.26916C26.65 8.45592 26.545 8.70922 26.545 8.9735ZM28.5378 9.3861L32.5234 5.40051V6.98071C32.5234 7.53094 32.9696 7.9771 33.5198 7.9771H35.1L31.1144 11.9627H28.5378V9.3861Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1828_1484">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Valores
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
              <p className="text-center">
              En GATO, se valora la confianza y la creatividad como pilares fundamentales. Se busca mantener la integridad y la transparencia en todas las interacciones, y se fomenta un ambiente para celebrar ideas innovadoras.
              </p>
              <img
                className="rounded-md shadow-md w-full h-auto aspect-video lg:max-h-[250px] object-cover"
                src="https://i.pinimg.com/736x/10/96/18/10961839a65ced06476a13f79d29c628.jpg"
                alt="misión"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default fundamentals;