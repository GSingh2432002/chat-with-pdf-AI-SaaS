import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        Chat to <span className="text-[#0F3AAE]">PDF</span>{" "}
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-6">
            <Button asChild variant="outline" className="hidden md:flex border-[#0F3AAE] bg-[#d8ebff] hover:bg-[#51a9ff] transition duration-300 hover:text-white">
                <Link href="/dashboard/upgrade">Pricing</Link>
            </Button>

            <Button asChild variant="outline" className="border-[#0F3AAE] bg-[#d8ebff] hover:bg-[#51a9ff] transition duration-300 hover:text-white">
                <Link href={"/dashboard"}>My Documents</Link>
            </Button>

            <Button asChild variant="outline" className="border-[#0F3AAE] bg-[#d8ebff] hover:bg-[#51a9ff] transition duration-300">
                <Link href="/dashboard/upload">
                    <FilePlus2 className="text-[#0F3AAE] hover:text-[#FFFFFF]]" />
                </Link>
            </Button>

            <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
