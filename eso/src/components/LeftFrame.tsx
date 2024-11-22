import DatabaseIcon from "../icons/data.svg?react";
import DecryptIcon from "../icons/decrypt.svg?react";
import EncryptIcon from "../icons/encrypt.svg?react";
import CreateIcon from "../icons/create.svg?react";
import RepeatIcon from "../icons/repeat.svg?react"
import React from "react";

const Items = [
    {
        path: "/",
        icon: DatabaseIcon,
        label: "Manage Keys"
    },
    {
        path: "/#/encrypt",
        icon: EncryptIcon,
        label: "Encrypt"
    },
    {
        path: "/#/decrypt",
        icon: DecryptIcon,
        label: "Decrypt"
    },
    {
        path: "/#/create",
        icon: CreateIcon,
        label: "Create New"
    },
    {
        path: "/#/trash",
        icon: RepeatIcon,
        label: "Trash"
    },
];

export default class LeftFrame extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="flex flex-wrap w-full jetbrains">
                <section className="lg:px-5 px-3 space-y-3 flex flex-wrap mt-8 justify-center w-full">
                    {
                        Items.map(item => (
                            <a href={item.path} key={item.label} className="w-full">
                                <div
                                    className="flex lg:justify-start justify-center text-gray-600 cursor-pointer flex-wrap px-4 py-2.5 rounded-[8px] border border-gray-200 items-center space-x-3 hover:bg-green-800 hover:text-white duration-300 transition-all"
                                >
                                    <item.icon />
                                    <h1 className="lg:block hidden">{item.label}</h1>
                                </div>
                            </a>
                        ))
                    }
                </section>
            </section>
        );
    }
}
