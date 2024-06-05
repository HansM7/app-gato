"use client";

const ubication = () => {
  return (
    <div className="w-full  bg-[#f1f1f1]  ">
      <div className="w-full max-w-[1920px] mx-auto py-16 xl:px-32 md:px-24  px-8 flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="w-full lg:w-2/5 flex flex-col gap-4 lg:gap-10 text-[#3D3D3D]">
          <h2 className="text-3xl text-center  font-medium uppercase">
            Ven a conocernos
          </h2>
          <p>
            Nuestras puertas están siempre abiertas para ti.
            <br /> Encuéntranos en nuestra oficina y trabajemos juntos en tu
            próximo gran proyecto.
          </p>
          <hr />
          <div className="flex gap-2 items-center ">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1109 23.4C12.5156 20.3906 18 13.0969 18 9C18 4.03125 13.9688 0 9 0C4.03125 0 0 4.03125 0 9C0 13.0969 5.48438 20.3906 7.88906 23.4C8.46562 24.1172 9.53438 24.1172 10.1109 23.4ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6Z"
                fill="#4F4F4F"
              />
            </svg>
            <span className="font-semibold text-lg">
              Av. Brasil 2475, Jesús María
            </span>
          </div>
          <div className="flex gap-4 justify-start">
            <svg
              className="h-[60px] w-auto object-contain"
              width="100%"
              height="100%"
              viewBox="0 0 91 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.9189 54.5126C70.0559 52.6367 67.8088 51.6338 65.4272 51.6338C63.0649 51.6338 60.7985 52.6182 58.8587 54.494L52.7896 60.3445C52.2902 60.0845 51.7908 59.8431 51.3107 59.6016C50.6193 59.2673 49.9663 58.9515 49.4093 58.6172C43.7242 55.1255 38.5578 50.5751 33.6026 44.6875C31.2018 41.7529 29.5885 39.2827 28.4169 36.7754C29.9918 35.3824 31.4515 33.9337 32.8728 32.5407C33.4105 32.0207 33.9483 31.4821 34.4861 30.962C38.5194 27.0617 38.5194 22.0098 34.4861 18.1095L29.2428 13.0391C28.6474 12.4633 28.0328 11.869 27.4566 11.2747C26.3042 10.1231 25.0943 8.93446 23.8459 7.82007C21.9829 6.03707 19.7549 5.08984 17.4118 5.08984C15.0686 5.08984 12.8023 6.03707 10.8817 7.82007C10.8625 7.83865 10.8625 7.83865 10.8433 7.85722L4.31318 14.2278C1.85479 16.6051 0.452736 19.5025 0.145437 22.8642C-0.315511 28.2875 1.33622 33.3394 2.60383 36.6454C5.71523 44.7618 10.3631 52.2838 17.2966 60.3445C25.7089 70.0582 35.8305 77.7289 47.3926 83.1336C51.81 85.1581 57.7063 87.554 64.2941 87.9626C64.6974 87.9811 65.1199 87.9997 65.504 87.9997C69.9407 87.9997 73.6667 86.4582 76.586 83.3936C76.6052 83.3565 76.6436 83.3379 76.6628 83.3008C77.6616 82.1307 78.8139 81.072 80.0239 79.939C80.8498 79.1776 81.6949 78.3789 82.5207 77.5431C84.4221 75.6301 85.4209 73.4013 85.4209 71.1169C85.4209 68.8138 84.4029 66.6036 82.4631 64.7463L71.9189 54.5126ZM78.7947 74.07C78.7755 74.07 78.7755 74.0885 78.7947 74.07C78.0457 74.85 77.2774 75.5558 76.4516 76.3359C75.2032 77.4874 73.9356 78.6947 72.7448 80.0505C70.805 82.0564 68.5194 83.0036 65.5233 83.0036C65.2352 83.0036 64.9279 83.0036 64.6398 82.985C58.9355 82.6321 53.6346 80.4777 49.659 78.6389C38.7883 73.5499 29.2428 66.325 21.3106 57.1685C14.7613 49.535 10.3823 42.4773 7.4822 34.8995C5.69602 30.2748 5.04301 26.6717 5.3311 23.2728C5.52317 21.0998 6.38744 19.2982 7.98156 17.7566L14.5309 11.4232C15.472 10.5689 16.4707 10.1046 17.4502 10.1046C18.6602 10.1046 19.6397 10.8103 20.2543 11.4047C20.2735 11.4232 20.2927 11.4418 20.3119 11.4604C21.4835 12.519 22.5975 13.6149 23.769 14.785C24.3644 15.3793 24.979 15.9736 25.5936 16.5865L30.8369 21.657C32.8728 23.6257 32.8728 25.4459 30.8369 27.4146C30.2799 27.9532 29.7421 28.4918 29.1852 29.0119C27.5719 30.6091 26.0354 32.095 24.3644 33.5437C24.326 33.5808 24.2876 33.5994 24.2684 33.6365C22.6167 35.2338 22.924 36.794 23.2697 37.8526C23.2889 37.9083 23.3081 37.9641 23.3273 38.0198C24.6909 41.2143 26.6115 44.2232 29.5309 47.8078L29.5501 47.8263C34.851 54.1411 40.44 59.063 46.6052 62.8333C47.3926 63.3162 48.1993 63.7062 48.9675 64.0777C49.659 64.412 50.312 64.7278 50.8689 65.0621C50.9458 65.0992 51.0226 65.1549 51.0994 65.1921C51.7524 65.5078 52.367 65.6564 53.0008 65.6564C54.5949 65.6564 55.5937 64.6906 55.9202 64.3749L62.4887 58.0229C63.1417 57.3914 64.1788 56.6299 65.3888 56.6299C66.5796 56.6299 67.5591 57.3543 68.1545 57.9858C68.1737 58.0043 68.1737 58.0043 68.1929 58.0229L78.7755 68.2566C80.7537 70.1511 80.7538 72.1012 78.7947 74.07Z"
                fill="#6D28D9"
              />
              <path
                d="M49.1787 20.933C54.2107 21.7502 58.7818 24.0532 62.4309 27.5821C66.0801 31.111 68.4425 35.5313 69.3067 40.3975C69.518 41.6233 70.6128 42.4777 71.8612 42.4777C72.0148 42.4777 72.1493 42.4591 72.3029 42.4405C73.7242 42.2176 74.6653 40.9175 74.4348 39.5431C73.3977 33.6555 70.5167 28.2879 66.1185 24.0347C61.7203 19.7814 56.1697 16.9955 50.0814 15.9926C48.6601 15.7697 47.3349 16.6798 47.0852 18.0356C46.8355 19.3914 47.7574 20.7101 49.1787 20.933Z"
                fill="#6D28D9"
              />
              <path
                d="M90.8944 38.8187C89.1851 29.1235 84.4603 20.3014 77.2004 13.2808C69.9405 6.26018 60.8175 1.69122 50.7919 0.038226C49.3899 -0.203223 48.0646 0.725427 47.815 2.08126C47.5845 3.45566 48.5256 4.7372 49.9469 4.97864C58.8969 6.44591 67.0596 10.5505 73.5512 16.8096C80.0429 23.0873 84.2683 30.9808 85.7856 39.6359C85.9968 40.8617 87.0916 41.716 88.34 41.716C88.4936 41.716 88.6281 41.6975 88.7817 41.6789C90.1838 41.4746 91.1441 40.1745 90.8944 38.8187Z"
                fill="#6D28D9"
              />
            </svg>
            <div className="flex flex-col font-semibold">
              <span className="text-2xl md:text-3xl">+51 980005257 </span>
              <span className="text-xl text-[#6D28D9]">info@gato.com</span>
            </div>
          </div>
        </div>
        <div className="w-full aspect-square lg:w-3/5 rounded-xl shadow-md lg:aspect-auto ">
          <iframe
            className="rounded-xl"
            src="https://my.atlist.com/map/c27c23af-0f59-47e0-8134-302039d25706/?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            width="100%"
            height="100%"
            loading="lazy"
            id="atlist-embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ubication;
