"use client";

import Drawer from "@/app/components/drawer";
import Navigation from "@/app/components/navigation";
import { useState } from "react";
import BannerDetailPortfolio from "./banner";
import Footer from "@/app/components/footer";
import PortfolioInfoDetail from "./info";
import WhatsappContact from "@/app/components/whatsapp-contact";

function Detail() {
  const [isDrawer, setIsDrawer] = useState(false);

  function redirect() {
    window.open("https://wa.me/+51946380310", "_blank");
  }

  return (
    <div className="relative bg-white flex">
      <WhatsappContact></WhatsappContact>

      <div
        className={`fixed  ${
          isDrawer ? "w-screen" : "w-16"
        }  h-screen z-10 flex  `}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer}></Navigation>
        {isDrawer && <Drawer></Drawer>}
      </div>
      <div className="flex flex-col w-full md:pl-[80px] ">
        <BannerDetailPortfolio></BannerDetailPortfolio>
        {/* <PortfolioInfoDetail></PortfolioInfoDetail> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Detail;
