import { UserPlus } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Pingoo</h1>
      </Link>
      <Link href="/" className="pr-1">
        <UserPlus className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Heading;
