import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src={"/../public/logophtoart.png"} width={115} height={43} alt="Phto Art"></Image>
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {" "}
        {session ? (
          <>
            User Photo
            <Link href={"/crreate-project"}>Share Work </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
