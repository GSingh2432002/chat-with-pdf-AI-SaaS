'use client';

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/dashboard/upload");
    };
  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-[#b9ddff] drop-shadow-md text-[#51a9ff] hover:bg-[#51a9ff] transition duration-300 hover:text-white [&_svg]:!h-14 [&_svg]:!w-14">
      <PlusCircleIcon className="h-20 w-20 flex-shrink-0"/>
      <p>Add a document</p>
    </Button>
  );
}

export default PlaceholderDocument;
