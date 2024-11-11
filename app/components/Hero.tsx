import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="grid max-md:grid-rows-4 md:grid-cols-4 grid-flow-row align-middle h-[100vh] space-x-[6rem] px-12">
        <div className="left_column | row-span-6 col-span-2 flex flex-col gap-8 align-middle justify-self-center p-[6rem]">
          <p className="text-[5rem] font-bold tracking-tight leading-none text-center ">
            The Best Platform to Build and Sell AI Agents
          </p>
          <p className="text-[1.125rem]">
            If you&apos;re a professional offering Chatbots, Automation, and CRM
            services, ReplyAgent is the ultimate platform you&apos;ve been
            searching for. Elevate your business with the dream toolkit designed
            to streamline and supercharge your client solutions.
          </p>
          <div className="relative flex justify-between space-x-12 w-[100%] h-[150px] max-h-[48px] px-2">
            {[
              "/images/icons/whatsapp.svg",
              "/images/icons/ig.svg",
              "/images/icons/messenger.svg",
              "/images/icons/telegram.svg",
              "/images/icons/call.svg",
              "/images/icons/sms.svg",
            ].map((path, index) => (
              <div key={index} className="relative w-[35px] h-[100%] ">
                <Image src={path} alt={`Icon ${index + 1}`} fill />
              </div>
            ))}
            </div>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
        </div>
        <div className="row-span-6 col-span-1 grid-rows-subgrid space-y-[5px] overflow-hidden  h-[100vh]">
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
              className="mt-[-50%] row-span-1 col-span-1"
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
        <div className="row-span-6 col-span-1 grid-rows-subgrid space-y-[5px] overflow-hidden">
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
    </>
  );
}