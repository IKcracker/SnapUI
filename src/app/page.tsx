import { DemoEditor, Nav } from "@/Components";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="lg:mx-20 mt-4 md:mx-5 mx-2">
      <Nav />
      <section className="mt-10">
        <h1 className="text-5xl font-bold">Let’s build components</h1>
        <p className="w-[540px] text-lg font-medium mt-2">
          Share, preview, and copy beautiful React components styled with
          Tailwind CSS and powered by community creativity.
        </p>
        <div className="flex gap-3 mt-1">
          <h2 className="font-semibold">Get started with:</h2>
          <div className="flex gap-2">
            <Link
              href="www.react.com/doc"
              className="bg-gray-800 flex text-sm gap-2 text-white rounded-md px-1 py-1 font-normal"
            >
              <Image
                src="icons8-react-js.svg"
                alt="react"
                width={20}
                height={20}
                className="text-white"
              />
              <p>React docs</p>
            </Link>
            <Link
              target="_blank"
              href="https://www.tailwindcss.com/docs"
              className="bg-gray-800 flex gap-2 text-sm text-white rounded-md px-1 py-1 font-normal"
            >
              <Image
                src="icons8-tailwind-css.svg"
                alt="tailwind"
                width={20}
                height={20}
              />
              <h1>Tailwind doc</h1>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold my-2">{`Let's start coding`}</h2>
        <DemoEditor />
      </section>
    </main>
  );
}

export default Home;
