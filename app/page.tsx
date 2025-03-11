import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Response",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intutive and interactive PDF viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed up in the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-t from-[#e7e5e5] to-[#0F3AAE] ">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#0F3AAE]">
              Your AI-Powered PDF Assistant
            </h2>

            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Tranform Your PDFs into Interactive Conversation
            </p>

            <p className="mt-6 text-sm text-gray-600 leading-8">
              Introducing{" "}
              <span className="font-bold text-[#0F3AAE]">Chat with PDF.</span>
              <br />
              <br /> Upload your document, and our chatbot will answer
              questions, summarize the content, and answer all your Qs. Ideal
              for everyone,
              <span className="text-[#0F3AAE]"> Chat with PDF</span>{" "} turns static
              documents into{" "}
              <span className="font-bold">dynamic conversations</span>, enhancing
              productivity 10x fold effortlessly.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div>
          <div>
            <Image 
              alt="App screenshot"
              src="/Hero.jpg"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
