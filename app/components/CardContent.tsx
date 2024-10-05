import { CardMessage } from "@/app/interfaces";
export const FirstCard: CardMessage = {
  section_header:
    "Your customers are trying to reach you but you are not answering. Why?",
  section_title: (
    <div className="font-bold">Slow customer support is costing you sales!</div>
  ),
  section_description:
    "Did you know that slow customer support costs 70 billion dollars in lost sales every year?",
  cards: [
    {
      card_image: "/images/card/email.png",
      card_title: (
        <div>
          Your old email support system is costing you{" "}
          <span className="text-[#7048e8]">sales!</span>
        </div>
      ),
      card_description: (
        <div>
          Ditch your old email support system which slows down support,
          frustrates your customers and <b>costs you sales</b>.
        </div>
      ),
    },
    {
      card_image: "/images/card/sleeping.png",
      card_title: (
        <div>
          Do you leave your customers waiting for{" "}
          <span className="text-[#0a84ff]">answers?</span>
        </div>
      ),
      card_description: (
        <div>
          How long would it take for your customers to receive an answer to a
          simple question at 11 PM on a Saturday?
        </div>
      ),
    },
    {
      card_image: "/images/card/customer_support.png",
      card_title: (
        <div>
          Customers waiting on social media for{" "}
          <span className="text-[#38aa54]">support?</span>
        </div>
      ),
      card_description: (
        <div>
          Embrace the future of AI-driven <b>automated customer support </b> in
          modern messaging apps, available 24/7.
        </div>
      ),
    },
  ],
};

export const SecondCard: CardMessage = {
  section_header: "Discover the power of chat marketing",
  section_title: (
    <div className="font-bold">
      We offer a better way to automate sales, marketing and customer support
    </div>
  ),
  section_description:
    "Open your business to the 6+ billion global messaging app users.",
  cards: [
    {
      card_image: "/images/card/email.png",
      card_title: (
        <div>
          Supercharge your <span className="text-[#7048e8]">marketing!</span>
        </div>
      ),
      card_description: (
        <div>
          <li>Lead generation</li>
          <li>Marketing automation</li>
          <li>Ai, Logical or hybrid bots</li>
          <li>Analytics</li>
        </div>
      ),
    },
    {
      card_image: "/images/card/sleeping.png",
      card_title: (
        <div>
          Skyrocket your <span className="text-[#0a84ff]">sales!</span>
        </div>
      ),
      card_description: (
        <div>
          <li>Advanced CRM</li>
          <li>Sales automation </li>
          <li>Ai, Logical or hybrid bots</li>
          <li>Analytics</li>
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
        <div>
          <li>Website Widget</li>
          <li>Support automation </li>
          <li>Ai, Logical or hybrid bots</li>
          <li>Analytics</li>
        </div>
      ),
    },
  ],
};
