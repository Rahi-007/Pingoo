"use client";
import Link from "next/link";

const SettingSection = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Setting</h1>
      </Link>
    </div>
  );
};

export default SettingSection;
