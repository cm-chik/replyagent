import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="grid md:grid-cols-2  md: max-w-[120rem] md:items-start md:h-[80vh] ">
        <div className="left_column | col-span-1 flex flex-col gap-8 py-[6rem] items-center px-12">
          <span className="flex flex-col text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-none text-center ">
            The Best Platform to Build and Sell AI Agents
          </span>
          <span className="text-[1.125rem] ">
            If you&apos;re a professional offering Chatbots, Automation, and CRM
            services, ReplyAgent is the ultimate platform you&apos;ve been
            searching for. Elevate your business with the dream toolkit designed
            to streamline and supercharge your client solutions.
          </span>
          <div className="flex h-[2rem]">
            {[
              "/images/icons/whatsapp.svg",
              "/images/icons/ig.svg",
              "/images/icons/messenger.svg",
              "/images/icons/telegram.svg",
              "/images/icons/call.svg",
              "/images/icons/sms.svg",
            ].map((path, index) => (
              <div key={index} className="relative h-[100%] px-[12px] sm:px-[2rem] ">
                <Image src={path} alt={`Icon ${index + 1}`} fill />
              </div>
            ))}
            </div>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
        </div>
        <div className="right_column |  col-span-1 grid grid-cols-2 gap-[2rem] h-[80vh] overflow-hidden ">
          <div className="screenshot_column_1 | -mt-[100%] flex flex-col space-y-[2rem] ">
          {[
            "/images/message/telegram yoga message.svg",
            "/images/message/whatsapp birthday messages.svg",
            "/images/message/messenger delivery tracking.svg",
            "/images/message/telegram bike shop.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/messenger chat agent.svg",
          ].map((path, index) => (
            <div
              key={index}
              className=""
              style={{
                width: "auto",
                height: "auto",
                  }}
            >
              <img
                src={path}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
          </div>
          <div className="screenshot_column_2 | flex flex-col space-y-[2rem] overflow-hidden" >
            {[
              "/images/message/dbf_converter.svg",
              "/images/message/telegram bike shop.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/whatsapp reich message.svg",
              "/images/message/telegram pizza message.svg",
              "/images/message/instagram chat agent.svg",
            ].map((path, index) => (
              <div
                key={index}
                className="row-span-1 col-span-1"
                style={{
                  width: "auto",
                  height: "auto",
                    }}
              >
                
                <img
                  src={path}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  </div>
  );
}