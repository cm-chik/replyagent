import { ParallaxContentInterface } from "@/app/interfaces";
import { ParallaxImage, ParallaxWord } from "./ParallaxComponent";

const Parallax = (props: ParallaxContentInterface) => {
  return props.sections.map((content, index) => (
    <section key={index} className="relative h-[150vh]">
      <ParallaxImage src={content.image} />
      {/* <ParallaxWord {...content} /> */}
    </section>
  ));
};

export default Parallax;
