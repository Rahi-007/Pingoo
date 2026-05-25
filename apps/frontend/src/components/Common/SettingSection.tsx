"use client";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

const SettingSection = () => {
  return (
    <div className="p-4">
      <Link href="/">
        <h1 className="text-2xl">Setting</h1>
      </Link>
      <div className="py-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default SettingSection;
