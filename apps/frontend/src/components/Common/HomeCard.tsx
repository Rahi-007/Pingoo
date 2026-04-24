import { MessageCircleHeart } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const HomeCard = () => {
  const miniCard = [
    {
      id: 1,
      title: "Card 1",
      link: "/",
      desc: "...",
    },
    {
      id: 2,
      title: "Card 1",
      link: "/",
      desc: "...",
    },
    {
      id: 3,
      title: "Card 1",
      link: "/",
      desc: "...",
    },
  ];
  return (
    <div className="hidden md:flex gap-4">
      <Card className="h-[50vh]">
        <CardContent className="flex flex-col items-center text-(--color-sidebar-primary) py-8 px-14">
          <MessageCircleHeart className="w-26 h-26" />
          <h1 className="text-2xl pt-4 pb-1">Download Pingoo for windows</h1>
          <p className="text-sm ">Get extra features like Open chat hand, get notification all time and more...</p>
          <Link href="/" className="border py-2 px-4 rounded-sm mt-6 hover:text-gray-600 hover:border-gray-600 transition-colors delay-75">
            Get Download
          </Link>
        </CardContent>
      </Card>
      <div className="h-[50vh] hidden xl:flex flex-col justify-between">
        <Card className="h-[24vh]">
          <CardContent className="flex flex-col items-center text-(--color-sidebar-primary) p-5">
            <MessageCircleHeart className="w-26 h-26" />
          </CardContent>
        </Card>
        <Card className="h-[24vh]">
          <CardContent className="flex flex-col items-center text-(--color-sidebar-primary) p-5">
            <MessageCircleHeart className="w-26 h-26" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
