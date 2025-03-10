import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all your PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Response",
    description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDFs like never before using our intutive and interactive PDF viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your documents are safely backed up in the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },{
    name: "Responsive Across Devices",
    description: "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone.",
    icon: MonitorSmartphoneIcon,
  }
]
export default function Home() {
  return (
    <div></div>
  );
}
