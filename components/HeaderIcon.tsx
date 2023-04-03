import React from "react";
import { IconType } from "react-icons";

interface MyProps {
    Icon: IconType,
    title: string
}

const HeaderIcon: React.FC<MyProps> = ({ Icon, title }) => {
    return (
        <div>
            <Icon className="text-3xl" />
            <p>{title}</p>
        </div>
    )
}

export default HeaderIcon