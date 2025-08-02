import { DraftingCompassIcon } from "lucide-react";
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <div className="flex justify-between p-14">
        <div>
          <DraftingCompassIcon className="h-15 w-15" />
        </div>
        <div className="flex items-center gap-4">
          <div className="border-b-2 border-black">
            <Link href="/about">About</Link>
          </div>
          <div className="border-b-2 border-black">
            <Link href="/work">Work</Link>
          </div>
          <div className="border-b-2 border-black">
            <Link href="/resume">Resume</Link>
          </div>
        </div>
      </div>
      <div className="grid justify-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-semibold">Hello! I&apos;am </h2>
        </div>
        <div className="flex items-center">
          <h1 className="text-6xl font-bold ml-2 text-blue-500">Irem Sahinturk.</h1>
        </div>
        <div className="flex items-center">
          <h2 className="text-4xl font-semibold">
            I&apos;m a&nbsp;
            <span className="circle-sketch-highlight">Frontend Developer.</span>
            {/* and continue */}
          </h2>
        </div>
        <div>
          <p className="text-lg text-gray-600">
            I am a <span className="underline decoration-wavy underline-offset-4">frontend developer</span> with a passion for creating beautiful and
            functional user interfaces. I love to learn new technologies and
            improve my skills.
          </p>
        </div>
      </div>
    </div>
  )
}
