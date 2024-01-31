import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/icon-light.png"
        width="40"
        height="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/icon-dark.png"
        width="40"
        height="40"
        alt="Logo"
        className="hidden dark:blocked "
      />
      <p className={cn("font-semibold", font.className)}>Potion</p>
    </div>
  );
};