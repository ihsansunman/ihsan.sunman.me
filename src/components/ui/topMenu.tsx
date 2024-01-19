
import Link from "next/link";
import React from "react";

const TopMenu = () => {
  return (
    <header className="fixed top-0 left-1/2 z-10 -translate-x-1/2 pt-6 print:hidden">
      <div className="rounded-full border flex gap-4 py-2 px-6 bg-zinc-800/90 text-zinc-200 text-sm font-medium shadow-lg shadow-slate-400">
        <span><Link href="/">Home </Link></span>
        <span><Link href="/cv">Resume</Link></span>
        <span><Link href="/posts">Posts</Link></span>
        <span><Link href="/projects">Projects</Link></span>
      </div>
    </header>
  );
};

export default TopMenu;
