import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
  return (
    <div className="bg-black text-white  space-y-[2rem]">
    <div className="flex flex-col items-center justify-center">
        <span className="text-[3rem] font-bold">Get Started for FREE</span> <br/>
        No credit card required <br/>
        <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
    </div>
    <div className="grid grid-cols-6 justify-center">
      <div><Image src="/images/logo/logo_dark.png" alt="" height={0} width={48}/></div>
        <div>
          <b>Channels</b>
        </div>
      <div>
          <b>Features</b></div>
      <div>
          <b>Resources</b></div>
      <div>
          <b>Help & Support</b></div>
      <div>
          <b>Legal</b></div>
      </div>
    <div className="flex justify-between">
      <div>© 2023 Connecta Group Corporation.</div>
        <div className="flex gap-2">
          <Image src="/images/icons/facebook.svg" alt="" height={0} width={30} />
          <Image src="/images/icons/twitter.svg" alt="" height={0} width={30}/>
          <Image src="/images/icons/ig.svg" alt="" height={0} width={30}/>
          <Image src="/images/icons/linkedin.svg" alt="" height={0} width={30}/>
          <Image src="/images/icons/youtube.png" alt="" height={0} width={30} />
          </div>
          
  </div>
  
  
  </div>
  ); 
};

export default Footer;
