import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex justify-between items-center pt-3">
      <section className="flex gap-3 items-center ">
        <Link className="flex gap-2 items-center" href="/">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Image
              src="/logo-light.svg"
              alt="Logo"
              className=" font-bold rounded-full"
              width={25}
              height={50}
              priority
            />
          </div>

          <h1 className="font-bold text-xl">SnapUI</h1>
        </Link>
        <ul className="flex gap-3">
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/docs">Components</Link>
          </li>
          <li>
            <Link href="/docs">Community</Link>
          </li>
        </ul>
      </section>

      <button className="bg-white text-black rounded-md px-4 py-1 font-normal">
        Sign Up
      </button>
    </nav>
  );
}

export default Nav;
