import { CarouselParallaxContextsInterface } from "@/app/interfaces";
import AnimatedButton from "../AnimatedButton";

export const CarouselParallaxContexts: CarouselParallaxContextsInterface = {
  CarouselParallaxContext: [
    {
      title: "Live Chat",
      header: "Live Chat",
      description: (
        <div className="flex flex-col gap-[1rem]">
          <div>
          An Inbox for Live Chatting is included with every account right out of the box. Find the sweet spot between letting chatbots do their thing and keeping that human touch alive by automating the chat distribution between your departments or agents. 😄 
          </div>
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          </div>
      ),
      image: "/images/screenshot/00_livechat.png",
      section_icon:"/images/carouselparallax/livechat.png",
    },
    {
      title: "CRM",
      header: "Sales Pipelines",
      description: (
        <div className="flex flex-col gap-[1rem]">
          <div>
          Pipelines and Customer Relationship Management is included with every account right out of the box. This means you can effortlessly handle your sales, contacts, and customer support hassle-free! 🚀
          </div>
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
        </div>
      ),
      image: "/images/screenshot/01_sales_pipeline.png",
      section_icon:"/images/carouselparallax/CRM.png",
    },
    {
      title: "Automation",
      header: "Smart Flow builder",
      description: (
        <div>
        Build personalized, automated chats, responses, actions, and even add some fancy conditional logic – all in a snap. It's like a magic wand for saving time, boosting customer happiness, and ramping up those sales. 🚀📱😄
        </div>
      ),
      image: "/images/screenshot/02_automation.png",
      section_icon:"/images/carouselparallax/cycle.png",
    },
    {
      title: "White Label",
      header: "Double White Label!",
      description: (
        <div>
       The only platform with exclusive Double White Label! Choose to customize your agency’s branding across all Workspaces or tailor each account independently with its own logo, colors, and domain. You have complete control to create a fully personalized experience!
        </div>
      ),
      image: "/images/screenshot/03_whitelabel.png",
      section_icon:"/images/carouselparallax/checkmark.png",
    },
  ],
};
