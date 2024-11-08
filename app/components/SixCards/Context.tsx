import { CardsInterface } from "@/app/interfaces";
export const ChannelCards: CardsInterface = {
  section_header:
    "Meet your customers in the apps they already use",
  section_title: (
    <div>Customers live, breathe, and chat on these apps daily. So, why not make their lives easier when they need to get in touch with you? <b>Reply Agent</b> is extremely easy to integrate these messaging apps into your sales, marketing, and customer support strategy. It's like rolling out a red carpet to your customers, all on the messaging platforms they already use and love."</div>
  ),
  section_description:
    "Did you know that slow customer support costs 70 billion dollars in lost sales every year?",
  cards: [
    {
      card_image: "/images/card/whatsapp.svg",
      card_title: (
        <div>
        Whatsapp
        </div>
      ),
      card_description: (
        <div>
         Integration with WhatsApp Business API (Official) and QR code.
        </div>
      ),
    },
    {
      card_image: "/images/card/instagram.svg",
      card_title: (
        <div>
        Instagram
        </div>
      ),
      card_description: (
        <div>
          Direct message, automate tasks, and customer support on Instagram.
        </div>
      ),
    },
    {
      card_image: "/images/card/messenger.svg",
      card_title: (
        <div>
          Messenger
        </div>
      ),
      card_description: (
        <div>
         Chat, automate tasks, and customer support on Messenger.
        </div>
      ),
    },
    {
      card_image: "/images/card/telegram.svg",
      card_title: (
        <div>
          Telegram
        </div>
      ),
      card_description: (
        <div>
         Chat, automate tasks, and customer support on Telegram.
        </div>
      ),
    },
    {
      card_image: "/images/card/sms.svg",
      card_title: (
        <div>
         SMS
        </div>
      ),
      card_description: (
        <div>
         Chat, automate tasks, and customer support on Messenger.
        </div>
      ),
    },
    {
      card_image: "/images/card/voice.svg",
      card_title: (
        <div>
         Voice
        </div>
      ),
      card_description: (
        <div>
         Chat, automate tasks, and customer support on Messenger.
        </div>
      ),
    },
  ],
};

export const SecondCard: CardsInterface = {
  section_header: "Discover the power of chat marketing",
  section_title: (
    <div className="font-bold">
      We offer a better way to automate{" "}
      <span className="text-[#0a84ff]">sales</span>,{" "}
      <span className="text-[#7048e8]">marketing</span> and{" "}
      <span className="text-[#38aa54]">customer support</span>
    </div>
  ),
  section_description:
    "Open your business to the 6+ billion global messaging app users.",
  cards: [
    {
      card_image: "/images/card/3d_speaker.png",
      card_title: (
        <div>
          Supercharge your <span className="text-[#7048e8]">marketing!</span>
        </div>
      ),
      card_description: (
        <div className="text-start leading-loose">
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Lead generation
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Marketing automation
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Ai, Logical or hybrid bots
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Analytics
          </li>
        </div>
      ),
    },
    {
      card_image: "/images/card/3d_rocket.png",
      card_title: (
        <div>
          Skyrocket your
          <br />
          <span className="text-[#0a84ff]">sales!</span>
        </div>
      ),
      card_description: (
        <div className="text-start leading-loose">
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Advanced CRM
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Sales automation{" "}
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Ai, Logical or hybrid bots
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Analytics
          </li>
        </div>
      ),
    },
    {
      card_image: "/images/card/customer_support.png",
      card_title: (
        <div>
          Deliver amazing customer{" "}
          <span className="text-[#38aa54]">support.</span>
        </div>
      ),
      card_description: (
        <div className="text-start leading-loose">
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Website Widget
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Support automation{" "}
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Ai, Logical or hybrid bots
          </li>
          <li
            style={{
              listStyleImage: "url('/images/card/black_check.svg')",
              listStylePosition: "inside",
            }}
          >
            Analytics
          </li>
        </div>
      ),
    },
  ],
};
