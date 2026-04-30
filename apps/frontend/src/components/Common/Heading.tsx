import { UserPlus } from "lucide-react";
import Link from "next/link";
import MenuButton from "./Menu";
import { ViewType } from "./Sidebar";

interface IProps {
  value: ViewType;
}

const Heading = ({ value }: IProps) => {
  if (value === "chat") return <ChatHeading />;
  if (value === "archive") return <ArchiveHeading />;
  if (value === "settings") return <SettingsHeading />;
  if (value === "profile") return <ProfileHeading />;
};
const ChatHeading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Pingoo</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <UserPlus className="w-6 h-6" />
        </Link>
        <MenuButton />
      </div>
    </div>
  );
};
const ArchiveHeading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Archive</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <UserPlus className="w-6 h-6" />
        </Link>
        <MenuButton />
      </div>
    </div>
  );
};
const SettingsHeading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Setting</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <UserPlus className="w-6 h-6" />
        </Link>
        <MenuButton />
      </div>
    </div>
  );
};
const ProfileHeading = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Profile</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <UserPlus className="w-6 h-6" />
        </Link>
        <MenuButton />
      </div>
    </div>
  );
};

export default Heading;
