"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDownToLine, ArrowUpRight, MessageCircleHeart, MonitorSmartphone, ShieldCheck, UserLock } from "lucide-react";
import Link from "next/link";

const HomeCard = () => {
  return (
    <div className="px-4 py-2">
      <Link href="/" className="h-10 flex items-center text-neutral-200">
        <MessageCircleHeart className="w-8 h-8" />
        <h1 className="text-3xl">Pingoo</h1>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <Card className="border mt-16 w-auto">
          <CardContent className="flex items-center text-neutral-400 px-8 gap-14">
            <MonitorSmartphone className="w-24 h-24" />
            <div>
              <h1 className="text-3xl pb-1">Download Pingoo for windows</h1>
              <p className="text-sm">Get extra features like Open chat hand, get notification all time and more...</p>
            </div>
            <div className="flex gap-0.5 items-center border rounded-4xl px-4 py-2 group cursor-pointer">
              <span className="hover-effect">Get Download</span>
              <ArrowDownToLine className="w-4 h-4 hover-effect" />
            </div>
          </CardContent>
        </Card>
        <Card className="border mt-4">
          <CardContent className="flex items-center text-neutral-400 px-12 gap-14">
            <div className="grid grid-cols-12 gap-17">
              <div className="col-span-8">
                <h1 className="text-3xl font-semibold mb-8">Scan for Quick Login</h1>

                <ol className="space-y-4 text-neutral-400 pl-8 mb-4">
                  <li className="flex gap-3">
                    <span className="font-semibold text-neutral-300">1.</span>
                    <span>Scan the QR code using your phone's camera.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-semibold text-neutral-300">2.</span>
                    <span>Tap the link to open the Pingoo app.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-semibold text-neutral-300">3.</span>
                    <span>Scan the QR code again to link your account.</span>
                  </li>
                </ol>
                <Link href="/login" className="text-neutral-400 border-b-2 border-b-slate-700 hover-effect hover:text-gray-300 hover:border-b-gray-400">
                  Need Help?
                </Link>
                <div className="mt-6 flex gap-2 items-center">
                  <Checkbox className="" />
                  <span>Stay login on this browser</span>
                </div>
              </div>
              <div className="col-span-4">
                <div className="w-50 h-50 border-2 border-dashed rounded-xl flex flex-col items-center justify-center mt-6 group">
                  <span className="text-sm text-neutral-500 hover-effect">QR Code is</span>
                  <span className="text-sm text-neutral-500 hover-effect">under construction</span>
                </div>
                <div className="mt-2 px-1">
                  <Link href="/login" className="text-neutral-400 border-b-2 border-b-slate-700 hover-effect hover:text-gray-300 hover:border-b-gray-400">
                    login with phone number {" >"}
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-neutral-400 text-center mt-6">
          <p>
            Don't have Pingoo account?
            <Link href="/login" className="border-b-2 border-b-slate-700 ml-1.5 inline-flex hover-effect hover:text-gray-300 hover:border-b-gray-400">
              Get started
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </p>
          
          <p className="flex gap-2 mt-4 justify-center items-center text-xs">
            <ShieldCheck className="w-4 h-4" />
            Private & encrypted. Only you and the recipient can read the messages
          </p>
        </div>
      </div>
      <p className="text-neutral-400 text-right text-xs mt-20">
        <Link href="/">Trams & Conditions...</Link>
      </p>
    </div>
  );
};

export default HomeCard;
