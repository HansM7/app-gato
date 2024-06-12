import React from "react";

type Prop = {
  price: number;
  color: string;
  word: string;
};

const planCard = (props: Prop) => {
  const mainColor = props.color;
  return (
    <div  style={{ borderColor: mainColor }} 
      className={`border  aspect rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-full h-fit`}
    >
      <div>
        <svg
          width="120"
          height="121"
          viewBox="0 0 120 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.2064 102.688H15C10.3473 102.688 6.5625 98.9027 6.5625 94.25V15.5C6.5625 10.8473 10.3473 7.0625 15 7.0625H93.75C98.4027 7.0625 102.188 10.8473 102.188 15.5V49.2482C102.188 50.8009 100.929 52.0607 99.375 52.0607C97.8214 52.0607 96.5625 50.8009 96.5625 49.2482V15.5C96.5625 13.9491 95.3009 12.6875 93.75 12.6875H15C13.4491 12.6875 12.1875 13.9491 12.1875 15.5V94.25C12.1875 95.8009 13.4491 97.0625 15 97.0625H66.2064C67.76 97.0625 69.0189 98.3223 69.0189 99.875C69.0189 101.428 67.76 102.688 66.2064 102.688Z"
            fill={mainColor}
          />
          <path
            d="M46.875 89.5625H22.5C20.9464 89.5625 19.6875 88.3027 19.6875 86.75V23C19.6875 21.4473 20.9464 20.1875 22.5 20.1875C24.0536 20.1875 25.3125 21.4473 25.3125 23V83.9375H46.875C48.4286 83.9375 49.6875 85.1973 49.6875 86.75C49.6875 88.3027 48.4286 89.5625 46.875 89.5625Z"
            fill={mainColor}
          />
          <path
            d="M22.5 78.3125C21.7804 78.3125 21.0608 78.0378 20.5115 77.4885C19.4128 76.3899 19.4128 74.6101 20.5115 73.5115L33.6365 60.3865C34.585 59.438 36.069 59.2933 37.1851 60.0349L40.892 62.505L56.1365 47.2615C57.2351 46.1628 59.0149 46.1628 60.1135 47.2615L65.321 52.469L68.9996 47.5618C69.4894 46.9099 70.2374 46.5016 71.0504 46.4448C71.8698 46.3734 72.6617 46.6847 73.2385 47.2615L75 49.0229L84.2614 39.7615C85.3601 38.6628 87.1399 38.6628 88.2385 39.7615C89.3371 40.8601 89.3371 42.6399 88.2385 43.7385L76.9885 54.9885C75.8898 56.0872 74.1101 56.0872 73.0114 54.9885L71.5539 53.531L67.8753 58.4382C67.3855 59.0901 66.6375 59.4984 65.8246 59.5552C65.0024 59.6248 64.2123 59.3153 63.6365 58.7385L58.125 53.2271L43.2385 68.1135C42.2937 69.062 40.8078 69.2085 39.6899 68.4651L35.983 65.995L24.4885 77.4885C23.9392 78.0378 23.2196 78.3125 22.5 78.3125Z"
            fill={mainColor}
          />
          <path
            d="M38.8394 47.0676C35.8685 47.0676 33.1604 45.319 32.1011 42.717C31.5152 41.2797 32.2064 39.6372 33.6447 39.0513C35.083 38.4672 36.7255 39.1575 37.3105 40.5967C37.5137 41.0947 38.1427 41.4426 38.8394 41.4426C40.0735 41.4426 41.1164 40.6351 41.1164 39.6775V39.4541C41.1164 38.3573 38.736 37.7091 38.3762 37.6487C35.614 37.1891 30.9375 35.1218 30.9375 30.297V30.0736C30.9375 25.9977 34.4824 22.6816 38.8394 22.6816C41.8121 22.6816 44.5203 24.4321 45.5777 27.0359C46.1627 28.4751 45.4697 30.1157 44.0305 30.6998C42.5931 31.2839 40.9515 30.5918 40.3665 29.1526C40.1642 28.6545 39.5361 28.3066 38.8394 28.3066C37.6053 28.3066 36.5625 29.116 36.5625 30.0736V30.297C36.5625 31.3791 38.866 32.0218 39.3191 32.1042C42.0657 32.562 46.7413 34.6293 46.7413 39.4541V39.6775C46.7413 43.7516 43.1964 47.0676 38.8394 47.0676Z"
            fill={mainColor}
          />
          <path
            d="M38.8394 28.3064C37.2857 28.3064 36.0269 27.0466 36.0269 25.4939V23C36.0269 21.4473 37.2857 20.1875 38.8394 20.1875C40.393 20.1875 41.6519 21.4473 41.6519 23V25.4939C41.6519 27.0466 40.393 28.3064 38.8394 28.3064Z"
            fill={mainColor}
          />
          <path
            d="M38.8394 49.5641C37.2857 49.5641 36.0269 48.3043 36.0269 46.7516V44.2559C36.0269 42.7031 37.2857 41.4434 38.8394 41.4434C40.393 41.4434 41.6519 42.7031 41.6519 44.2559V46.7516C41.6519 48.3043 40.393 49.5641 38.8394 49.5641Z"
            fill={mainColor}
          />
          <path
            d="M72.2598 93.603H61.875C58.2568 93.603 55.3125 90.6587 55.3125 87.0405V74.3477C55.3125 70.7295 58.2568 67.7852 61.875 67.7852H72.2598C73.8135 67.7852 75.0723 69.0449 75.0723 70.5977V90.7905C75.0723 92.3433 73.8135 93.603 72.2598 93.603ZM61.875 73.4102C61.3577 73.4102 60.9375 73.8313 60.9375 74.3477V87.0405C60.9375 87.5569 61.3577 87.978 61.875 87.978H69.4473V73.4102H61.875Z"
            fill={mainColor}
          />
          <path
            d="M99.3749 103.699C99.0444 103.699 98.7121 103.641 98.3935 103.522L71.2783 93.4253C70.1779 93.017 69.4473 91.9659 69.4473 90.7904V70.5975C69.4473 69.422 70.1769 68.371 71.2783 67.9627L98.3935 57.8644C99.2559 57.5403 100.223 57.6612 100.98 58.1903C101.736 58.7158 102.187 59.5783 102.187 60.4993V100.887C102.187 101.808 101.736 102.67 100.98 103.196C100.502 103.529 99.9407 103.699 99.3749 103.699ZM75.0723 88.8367L96.5624 96.8384V64.5478L75.0723 72.5513V88.8367Z"
            fill={mainColor}
          />
          <path
            d="M71.531 113.937C67.044 113.937 63.3938 110.286 63.3938 105.8V90.7812C63.3938 89.2285 64.6527 87.9688 66.2063 87.9688C67.7599 87.9688 69.0188 89.2285 69.0188 90.7812V105.8C69.0188 107.186 70.1458 108.312 71.531 108.312C72.81 108.312 73.8821 107.347 74.024 106.069L75.2746 92.6929C75.4192 91.1456 76.7916 89.9921 78.337 90.155C79.8834 90.2997 81.0204 91.6693 80.8758 93.2165L79.6197 106.642C79.1555 110.822 75.6802 113.937 71.531 113.937Z"
            fill={mainColor}
          />
          <path
            d="M101.625 92.5069H99.375C97.8214 92.5069 96.5625 91.2472 96.5625 89.6944C96.5625 88.1417 97.8214 86.8819 99.375 86.8819H101.625C105.037 86.8819 107.812 84.1061 107.812 80.693C107.812 77.2817 105.037 74.5059 101.625 74.5059H99.375C97.8214 74.5059 96.5625 73.2461 96.5625 71.6934C96.5625 70.1406 97.8214 68.8809 99.375 68.8809H101.625C108.138 68.8809 113.438 74.1799 113.438 80.693C113.438 87.2079 108.138 92.5069 101.625 92.5069Z"
            fill={mainColor}
          />
        </svg>
      </div>
      <div
      style={{ color: mainColor }}
        className={`flex flex-col items-center justify-center`}
      >
        <span className="font-bold capitalize text-xl">{props.word}</span>
        <div className="flex font-black items-center">
          <span className="text-[1.8rem]">S/</span>
          <span className="text-[3rem]">{props.price}</span>
          <span className="text-[1.8rem]">.00</span>
        </div>
      </div>
    </div>
  );
};

export default planCard;
