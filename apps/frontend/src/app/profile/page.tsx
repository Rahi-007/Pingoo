"use client"

import { useAppSelector } from "@/hooks/reduxHooks";
import useAsyncAction from "@/hooks/useAsyncAction"
import { getUserById } from "@/service/user.service"
import { useEffect } from "react";

const page = () => {
    const userId = useAppSelector((state) => state.auth.user?.id);
    const fnLoadProfile = useAsyncAction(getUserById);
    const data = fnLoadProfile.data?.data;

    useEffect(() => {
        fnLoadProfile.action(Number(userId));
    }, [])

    console.log(fnLoadProfile.data);

    return (
        <div>
            {data?.firstName} {data?.lastName} profile !!
        </div>
    )
}

export default page
