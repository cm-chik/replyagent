import {
  ParallaxContextsInterface,
  ParallaxContextInterface,
} from "@/app/interfaces";
import { ParallaxComponent } from "./ParallaxComponent";

const Parallax = (props: ParallaxContextsInterface) => {
  return props.ParallaxContexts!.map(
    (content: ParallaxContextInterface, index: number) => (
      <section key={index} className="relative h-[150vh]">
        <ParallaxComponent {...content} />
      </section>
    )
  );
};

export default Parallax;
