import { MessageCircleHeart, Send, UserPlus } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const HomeCard = () => {
  const miniCard = [
    {
      title: "Add New Contact",
      icon: <UserPlus className="w-10 h-10" />,
      link: "/",
    },
    {
      title: "Invite Friends",
      icon: <Send className="w-10 h-10" />,
      link: "/",
    },
  ];
  return (
    <div className="hidden md:flex gap-4 px-8 lg:px-4 xl:px-0">
      <Card className="h-[55vh] lg:h-[50vh] border-0">
        <CardContent className="flex flex-col items-center text-(--color-sidebar-primary) py-8 px-14">
          <MessageCircleHeart className="w-26 h-26" />
          <h1 className="text-2xl pt-4 pb-1 text-center">Download Pingoo for windows</h1>
          <p className="text-sm text-center">Get extra features like Open chat hand, get notification all time and more...</p>
          <Link href="/" className="border py-2 px-4 rounded-sm mt-6 hover:text-gray-600 hover:border-gray-600 transition-colors delay-75">
            Get Download
          </Link>
        </CardContent>
      </Card>
      <div className="hidden lg:flex flex-col justify-between h-[50vh]">
        {miniCard.map((item, index) => (
          <Card key={index} className="h-[24vh] min-w-35 border-0 group cursor-pointer">
            <CardContent className="flex flex-col items-center text-(--color-sidebar-primary) px-6 py-8 gap-2">
              <Link href={item.link} className="group-hover:text-gray-600 transition-colors delay-75">
                {item.icon}
              </Link>
              <p className="text-sm group-hover:text-gray-600 transition-colors delay-75">{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
