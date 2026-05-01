"use client";
import { Link } from "lucide-react";

const ArchiveSection = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Archive</h1>
      </Link>
    </div>
  );
};

export default ArchiveSection;
