import Image from "next/image";
import Items from "@/components/Items";
import Nav from "@/components/Nav";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center w-full items-center">
        <Nav />

        <Items />
        {/* Hello */}
      </div>
    </div>
  );
}
