import { CarouselCardInterface } from "@/app/interfaces";
import AnimatedButton from "../AnimatedButton";

const CarouselCardContext: CarouselCardInterface = {
 carousel_title: "Integrate with virtually anything!",
       carousel_description: "Easily integrate with external applications using our APIs and Webhooks, or leverage our native integrations with Cal.com, Dify.ai, Microsoft Text to Speech, Twilio, Cloudinary, ChatGPT, Active Campaign, and a huge library of 1600+ additional options via Make.com!",
       carousel_row: (
        <div className="flex gap-[1rem]">
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          <AnimatedButton title="Learn More" icon="/images/icons/learnmore.svg" />
          </div>
      ),
};

export default CarouselCardContext;