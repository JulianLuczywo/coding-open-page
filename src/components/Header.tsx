import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto mt-10 pb-4 px-4 border-b border-[#222725]">
      <div className="flex items-center justify-between gap-8">
        <Link href="/">
          <h1 className="text-2xl font-bold">Coding Diary</h1>
          <p className="text-sm">By Julian Luczywo</p>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="uppercase tracking-wide hover:font-semibold hover:text-[#222725] transition-all"
        >
          Stats
        </Link>
        <Link
          href="/diary"
          className="uppercase tracking-wide hover:font-semibold hover:text-[#222725] transition-all"
        >
          Diary
        </Link>
        <Link
          href="/projects"
          className="uppercase tracking-wide hover:font-semibold hover:text-[#222725] transition-all"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="uppercase tracking-wide hover:font-semibold hover:text-[#222725] transition-all"
        >
          👋
        </Link>
      </div>
    </div>
  );
}
