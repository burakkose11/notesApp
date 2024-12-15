import { Rubik_Moonrocks } from "next/font/google";
import Link from "next/link";
import React from "react";

const rubikMoonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: ["400"],
});

const HeaderCmp = () => {
  return (
    <header className="bg-orange-500 h-16 flex items-center text-white font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`${rubikMoonrocks.className} text-3xl`}>
          Not Defteri
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/">Giriş Yap</Link>
          <Link href="/">Üye Ol</Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderCmp;
