import React from "react";
import { IconType } from "react-icons";

interface MyProps {
    Icon: IconType,
    title: string
}

const HeaderIcon: React.FC<MyProps> = ({ Icon, title }) => {
    return (
        <div className="mx-4 flex flex-col items-center cursor-pointer hover:text-white active:text-red-400 lg:mx-6">
            <Icon className="text-3xl" />
            <p className="my-2">{title}</p>
        </div>
    )
}

export default HeaderIcon