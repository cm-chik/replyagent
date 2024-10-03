import Image from "next/image";
import TryItFreeButton from "./TryItFreeButton";
export default function Hero() {
  return (
    <div className="flex max-sm:flex-wrap justify-center items-center align-middle  h-screen w-screen space-x-[12rem]">
      <div className="flex flex-col gap-4 max-w-[26rem]">
        <p className="text-[44px] font-bold tracking-tight leading-none text-center">
          The Chatbot, Automation and CRM platform built for Agencies
        </p>
        <p>
          If you&apos;re a professional offering Chatbots, Automation, and CRM
          services, ReplyAgent is the ultimate platform you&apos;ve been
          searching for. Elevate your business with the dream toolkit designed
          to streamline and supercharge your client solutions.
        </p>
        <div className="flex gap-4 justify-between px-4 pb-4">
          {[
            "/images/icons/whatsapp.svg",
            "/images/icons/ig.svg",
            "/images/icons/messenger.svg",
            "/images/icons/telegram.svg",
            "/images/icons/call.svg",
            "/images/icons/sms.svg",
          ].map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`Icon ${index + 1}`}
              width={30}
              height={30}
            />
          ))}
        </div>
        <TryItFreeButton />
      </div>
      <div className="flex relative md:h-full max-w-[50%] space-x-[12rem]">
        <div className="flex gap-4 flex-col ">
          {[
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
          ].map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`Image ${index + 1}`}
              width={180}
              height={100}
            />
          ))}
        </div>
        <div className="flex gap-4 flex-col ">
          {[
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/instagram chat agent.svg",
          ].map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`Image ${index + 1}`}
              width={180}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
