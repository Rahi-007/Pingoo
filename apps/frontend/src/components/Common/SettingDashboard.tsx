import { CloudSync, File, Folder, MonitorCog, User } from "lucide-react";
import Access from "./Access";

const SettingDashboard = () => {
  const data = [
    {
      id: 1,
      title: "System Settings",
      link: "/",
      icon: <MonitorCog className="h-10 w-10" />,
      desc: "Web Settings Management and Customize...",
    },
    {
      id: 2,
      title: "Other Settings",
      link: "/",
      icon: <File className="h-10 w-10" />,
      desc: "Create, update and management...",
    },
    {
      id: 3,
      title: "User Settings",
      link: "/",
      icon: <User className="h-10 w-10" />,
      desc: "User management Manage and user Details...",
    },
    {
      id: 4,
      title: "Theme Settings",
      link: "/",
      icon: <Folder className="h-10 w-10" />,
      desc: "Theme management Manage and Details...",
    },
  ];

  return (
    <Access>
      <div className="flex items-center text-gray-500 mb-3 gap-2">
        <CloudSync className="h-10 w-10" />
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 w-170">
        {data.map(item => (
          <div
            key={item.id}
            className="flex items-center bg-[#1d1f1f] text-gray-500 w-full gap-3 p-3 border rounded-xs cursor-pointer hover:text-gray-400 transition-colors delay-75 ease-out"
          >
            {item.icon}

            <div>
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Access>
  );
};

export default SettingDashboard;
