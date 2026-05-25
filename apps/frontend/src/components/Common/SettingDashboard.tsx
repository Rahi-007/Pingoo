import { Clock3, CloudSync, Folder, MonitorCog, User } from "lucide-react";
import Access from "./Access";
import Link from "next/link";

const SettingDashboard = () => {
  const data = [
    {
      id: 1,
      title: "System Settings",
      link: "settings/system-setting",
      icon: <MonitorCog className="h-10 w-10" />,
      desc: "Web Settings Management and Customize...",
    },
    {
      id: 2,
      title: "User Settings",
      link: "/",
      icon: <User className="h-10 w-10" />,
      desc: "User management Manage and user Details...",
    },
    {
      id: 3,
      title: "Theme Settings",
      link: "/",
      icon: <Folder className="h-10 w-10" />,
      desc: "Theme management Manage and Details...",
    },
    {
      id: 4,
      title: "Other Settings",
      link: "/",
      icon: <Clock3 className="h-10 w-10" />,
      desc: "Coming soon...",
    },
  ];

  return (
    <Access className="hidden md:flex flex-col justify-center items-center gap-4 min-h-screen px-8 lg:px-4 xl:px-0">
      <div className="flex text-gray-500 gap-2">
        <CloudSync className="h-10 w-10" />
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-170">
        {data.map(item => (
          <Link
            key={item.id}
            href={item.link}
            className="flex items-center bg-[#1d1f1f] text-gray-500 w-full gap-3 p-3 border rounded-xs cursor-pointer hover:text-gray-400 transition-colors delay-75 ease-out"
          >
            {item.icon}

            <div>
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-xs">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Access>
  );
};

export default SettingDashboard;
