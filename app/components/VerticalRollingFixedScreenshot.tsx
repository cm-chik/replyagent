import { VerticalRollingCardSection } from "@/app/interfaces";
import Transition from "@/app/animations/animation";

const VerticalRollingFixedScreenshot = (props: VerticalRollingCardSection) => {
  return props.sections.map((content, index) => (
    <section key={index} className="grid min-h-[100vh] items-center ">
      <Transition>
        <p className="">{content.title}</p>
      </Transition>
    </section>
  ));
};

export default VerticalRollingFixedScreenshot;
