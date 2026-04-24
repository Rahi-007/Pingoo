import { UserPlus } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-4">
      <UserPlus className="w-8 h-8" />
      <div className="py-2">
        <UserPlus className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Sidebar;
