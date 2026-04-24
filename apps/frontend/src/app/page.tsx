import Heading from "@/components/Common/Heading";
import HomeCard from "@/components/Common/HomeCard";
import Sidebar from "@/components/Common/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="hidden sm:block sm:w-22 md:w-25 lg:w-26 xl:w-26 xxl:w-50 sm:h-screen bg-[#1d1f1f]">
        <Sidebar />
      </div>
      <div className="w-full sm:w-150 md:w-160 lg:w-170 xl:w-177 xxl:w-7xl border-x min-h-screen">
        <Heading />
        {/* search bar  */}
        {/* short cut */}
        {/* archived chats */}
        {/* all inbox */}
      </div>
      <div className="hidden sm:flex justify-center items-center w-full min-h-screen">
        <HomeCard />
      </div>
    </div>
  );
}
