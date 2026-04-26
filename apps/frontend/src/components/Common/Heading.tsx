import { EllipsisVertical, UserPlus } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Pingoo</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="">
          <UserPlus className="w-6 h-6" />
        </Link>
        <Link href="/" className="">
          <EllipsisVertical className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
