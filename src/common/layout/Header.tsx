import { DraftingCompassIcon } from "lucide-react";
import { Outlet } from "react-router";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between h-[160px] px-16 py-12">
        <div>
          <DraftingCompassIcon className="h-15 w-15" />
        </div>
        <div className="flex items-center gap-7 text-lg">
          <div className="border-b-2 border-black">
            <a href="/about">About</a>
          </div>
          <div className="border-b-2 border-black">
            <a href="/work">Work</a>
          </div>
          <div className="border-b-2 border-black">
            <a href="/resume">Resume</a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
