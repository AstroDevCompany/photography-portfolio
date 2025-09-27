import { Button } from "@/components/ui/button"
import Link from "next/link";
export default async function WIP() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-black bg-white">
      <div className="text-[8vw]">WORK IN PROGRESS</div>
      <Button><Link href="/">Back home</Link></Button>
    </div>
  );
}
