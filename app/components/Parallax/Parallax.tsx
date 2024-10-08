import { ParallaxContentInterface } from "@/app/interfaces";
import { ParallaxImage, ParallaxWord } from "./ParallaxComponent";

const Parallax = (props: ParallaxContentInterface) => {
  return props.sections.map((content, index) => (
    <section key={index} className="grid min-h-[100vh] items-center ">
      {ParallaxImage(content.image)}
      {ParallaxWord(content.title, content.header, content.description)}
    </section>
  ));
};

export default Parallax;
