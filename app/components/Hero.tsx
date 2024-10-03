import Image from "next/image";
import TryItFreeButton from "./TryItFreeButton";
export default function Hero() {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col gap-4 sm:w-[50%]">
        <p className="text-[60px] font-bold tracking-tight leading-none text-center">
          The Chatbot, Automation and CRM platform built for Agencies
        </p>
        <p>
          If you’re a professional offering Chatbots, Automation, and CRM
          services, ReplyAgent is the ultimate platform you&apos;ve been
          searching for. Elevate your business with the dream toolkit designed
          to streamline and supercharge your client solutions.
        </p>
        <div className="flex gap-4 justify-between px-4">
          <Image
            src="/images/icons/whatsapp.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons/ig.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons/messenger.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons/telegram.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons/call.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons/sms.svg"
            alt="heroImg"
            width={30}
            height={30}
          />
        </div>
        <TryItFreeButton />
      </div>
      <div className="h-[100vh]">
        <Image
          src="/images/hero/hero.svg"
          alt="heroImg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
