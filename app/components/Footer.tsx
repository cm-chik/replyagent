import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1d1d1f] text-white py-12  w-screen">
    <div className="flex flex-col text-center items-center justify-center gap-y-[3rem] py-[1rem]">
        <div><span className="text-[3rem] font-bold">Get Started for FREE</span> <br/>
          No credit card required <br />
        </div>
        <div>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
        </div>
        <div className="max-md:flex md:hidden w-[50%] self-center">
          <Image src="/images/logo/logo_dark.png" alt="" height={0} width={450} />
        </div>
    </div>
    <div className="grid sm:grid-cols-3 md:grid-cols-6 justify-center gap-[2rem] p-12 max-w-[120rem]">
        <div className="max-md:hidden">
          <Image src="/images/logo/logo_dark.png" alt="" height={0} width={148}  className=""/>
        </div>
        <div className="flex flex-col gap-y-2">
          <b>Channels</b>
          <span><Link href="/">Channels</Link></span>
          <span><Link href="/">Instagram </Link></span>
          <span><Link href="/">WhatsApp </Link></span>
          <span><Link href="/">Messenger </Link></span>
          <span><Link href="/">Telegram </Link></span>
          <span><Link href="/">Calling </Link></span>
          <span><Link href="/">SMS </Link></span>
        </div>
      <div className="flex flex-col gap-y-2">
          <b>Features</b>
          <span><Link href="/">CRM </Link></span>
          <span><Link href="/">White Label </Link></span>
        <span><Link href="/">Smart Flows </Link></span>
        </div>
      <div className="flex flex-col gap-y-2">
          <b>Resources</b>
                  <span><Link href="/">About Us </Link></span>
          <span><Link href="/">Join our Affiliate Program</Link></span>
        <span><Link href="/">Roadmap </Link></span>
                  <span><Link href="/">Blog </Link></span>
      </div>
      <div className="flex flex-col gap-y-2">
          <b>Help & Support</b>
                          <span><Link href="/">Developer API Docs </Link></span>
          <span><Link href="/">Knowledge Base</Link></span>
        <span><Link href="/">Contact Us </Link></span>
          <span><Link href="/">Branding Guide </Link></span>
          </div>
      <div className="flex flex-col gap-y-2">
          <b>Legal</b>
        <span><Link href="/">Privacy Policy </Link></span>
          <span><Link href="/">Terms of Use</Link></span>
        <span><Link href="/">Data Processing Agreement</Link></span>
        <span><Link href="/">Cookies Settings </Link></span>
        <span><Link href="/">Acceptable Use Policy</Link></span>
        <span><Link href="/">Request your Data</Link></span>
        <span><Link href="/">Privacy Preferences</Link></span>
      </div>
      </div>
    <div className="md:flex justify-between p-12 items-center">
      <div>© 2023 Connecta Group Corporation.</div>
        <div className="flex ">
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
