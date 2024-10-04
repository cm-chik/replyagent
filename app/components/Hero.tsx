import Image from "next/image";
import TryItFreeButton from "./TryItFreeButton";
export default function Hero() {
  return (
    <div className="flex justify-center items-end w-screen">
      <div className="md:grid md:grid-cols-3 justify-center items-center align-middle h-[100vh] gap-4">
        <div className="left_column | sm:col-span-1 flex flex-col gap-4 max-w-[26rem]">
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
                width={30} // Fixed width
                height={30} // Fixed height
              />
            ))}
          </div>
          <TryItFreeButton />
        </div>
        <div className=" right_column |  col-span-1 grid overflow-hidden h-full gap-y-2 ">
          <div className="  right_column_col_1 | grid grid-rows-6 relative gap-2 my-[-300px]">
            {[
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
            ].map((path, index) => (
              <div
                key={index}
                className=" wrapper | relative row-span-1 inline-block py-[300px]"
              >
                <Image
                  src={path}
                  alt={`Image ${index + 1}`}
                  className="inset-0"
                  fill
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" right_column |  sm:col-span-1 grid overflow-hidden h-full gap-y-2 ">
          <div className="  right_column_col_2 | grid grid-rows-6 relative gap-2 ">
            {[
              "/images/message/instagram chat agent.svg",
              "/images/message/messenger chat agent.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/whatsapp reich message.svg",
              "/images/message/instagram chat agent.svg",
              "/images/message/instagram chat agent.svg",
            ].map((path, index) => (
              <div
                key={index}
                className=" wrapper | relative row-span-1 h-[500px] inline-block py-[300px]"
              >
                <Image
                  src={path}
                  alt={`Image ${index + 1}`}
                  className="inset-0"
                  fill
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
