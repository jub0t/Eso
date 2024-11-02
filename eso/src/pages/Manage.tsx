import ClipboardIcon from "../icons/clipboard.svg?react";
import EncryptIcon from "../icons/encrypt.svg?react";
import DecryptIcon from "../icons/decrypt.svg?react";
import SizeIcon from "../icons/size.svg?react";
import RepeatIcon from "../icons/repeat.svg?react";
import DateIcon from "../icons/date.svg?react";
import React from "react";

export default class ManagePage extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="px-8 py-8 w-full h-full flex-wrap flex">
                <h1 className="tracking-wider font-light uppercase text-gray-600">Manage Keys</h1>

                <section className="mt-8 grid lg:grid-cols-2 gap-6 w-full h-full">
                    {
                        Array.from({ length: 8 })
                            .map(_ => {
                                return <div>
                                    <Card
                                        title="Master Key"
                                        description="My personal master key that I use for normal communication."
                                        button={{
                                            label: "Manage"
                                        }}
                                    />
                                </div>
                            })
                    }
                </section>
            </section>
        );
    }
}

function Card({ title, description, button }: {
    title: string,
    description: string
    button: {
        label: string
    },
}) {
    return (
        <div className="w-full p-5 border rounded-[12px] min-h-[250px] bg-gray-50 flex flex-col">
            {/* Card Header */}
            <header className="flex-grow raleway">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-gray-700">{description}</p>
            </header>

            {/* Card Body */}
            <main className="py-4 jetbrains">
                <div className="flex px-2 justify-between items-center">
                    <div>
                        <p className="flex items-center space-x-1 text-gray-600">
                            <span>
                                <SizeIcon />
                            </span>
                            <span className="text-[12px] uppercase tracking-wide">Key Size</span>
                        </p>
                        <p className="text-gray-800">
                            <span>
                                {4 * 1024} Bits
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center space-x-1 text-gray-600">
                            <span>
                                <RepeatIcon />
                            </span>
                            <span className="text-[12px] uppercase tracking-wide">Actions</span>
                        </p>
                        <p className="text-gray-800">
                            <span>
                                {new Intl.NumberFormat("en-US").format(359141)}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center space-x-1 text-gray-600">
                            <span>
                                <DateIcon />
                            </span>
                            <span className="text-[12px] uppercase tracking-wide">Created</span>
                        </p>
                        <p className="text-gray-800">
                            <span>
                                {new Date().toLocaleDateString()}
                            </span>
                        </p>
                    </div>
                </div>
            </main>

            {/* Card Footer */}
            <footer className="gap-2 mt-1 flex flex-wrap">
                <div className="flex-1">
                    <button className="bg-green-800 hover:bg-green-900 duration-300 transition-all rounded-[8px] text-white px-3 py-2 w-full">
                        {button.label}
                    </button>
                </div>
                <div className="flex flex-wrap gap-1">
                    <button className="hover:bg-gray-300 duration-200 transition-all justify-center flex flex-wrap items-center text-gray-500 max-w-[40px] min-w-[40px] min-h-[40px] bg-gray-200 border border-gray-300 rounded-[8px]">
                        <ClipboardIcon />
                    </button>
                    <button className="hover:bg-gray-300 duration-200 transition-all justify-center flex flex-wrap items-center text-gray-500 max-w-[40px] min-w-[40px] min-h-[40px] bg-gray-200 border border-gray-300 rounded-[8px]">
                        <EncryptIcon />
                    </button>
                    <button className="hover:bg-gray-300 duration-200 transition-all justify-center flex flex-wrap items-center text-gray-500 max-w-[40px] min-w-[40px] min-h-[40px] bg-gray-200 border border-gray-300 rounded-[8px]">
                        <DecryptIcon />
                    </button>
                </div>
            </footer>
        </div>
    );
}
