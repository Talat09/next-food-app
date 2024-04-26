import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="text-xl  mb-3 bg-blue-500 p-3 text-white flex justify-center">
      <ul className="list-none flex gap-6 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/addfood">Add Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
