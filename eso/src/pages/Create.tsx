import React from "react";

export default class CreatePage extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="px-8 py-8 w-full h-full flex-wrap flex">
                <h1 className="tracking-wider font-light uppercase text-gray-600">Create Key</h1>

                <section className="mt-8 gap-6 grid-cols-1 grid w-full h-full">
                    <div className="w-full p-5 border gap-2 rounded-[12px] min-h-[250px] bg-gray-50 flex flex-col">
                        <div className="w-full flex gap-2 flex-wrap">
                            <div className="flex-1 grid">
                                <label htmlFor="unique_id" className="text-xs">Unique ID</label>
                                <input
                                    type="text"
                                    name="unique_id"
                                    placeholder={crypto.randomUUID()}
                                    className="open-sans focus:outline-none text-sm focus:ring-2 focus:ring-green-800 px-3 py-3 bg-gray-100 rounded-lg border border-gray-300 transition-shadow"
                                />
                            </div>
                            <div className="min-w-[180px] h-full items-end flex">
                                <button className="ring-2 ring-green-800 text-sm bg-green-800 hover:bg-green-900 duration-300 transition-all rounded-[8px] text-white px-3 py-3 w-full">
                                    Randomize
                                </button>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3">
                            <div className="grid">
                                <label htmlFor="email" className="text-xs">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johndoe@example.com"
                                    className="open-sans focus:outline-none focus:ring-2 focus:ring-green-800 px-3 py-3 bg-gray-100 rounded-lg border border-gray-300 transition-shadow"
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="key_size" className="text-xs">Key Size</label>
                                <select
                                    name="key_size"
                                    className="open-sans focus:outline-none focus:ring-2 focus:ring-green-800 px-3 py-3 bg-gray-100 rounded-lg border border-gray-300 transition-shadow"
                                >
                                    <option value="1024">1024 bits</option>
                                    <option value="2048">2048 bits</option>
                                    <option value="3072">3072 bits</option>
                                    <option value="4096" selected>4096 bits</option>
                                    <option value="8192">8192 bits</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-1 gap-3">
                            <div className="grid">
                                <label htmlFor="secret_key" className="text-xs">Secret Key (Password)</label>
                                <input
                                    type="password"
                                    name="secret_key"
                                    placeholder="***********"
                                    className="open-sans focus:outline-none focus:ring-2 focus:ring-green-800 px-3 py-3 bg-gray-100 rounded-lg border border-gray-300 transition-shadow"
                                />
                            </div>
                        </div>

                        <div className="w-full grid mt-3">
                            <button className="ring-2 ring-green-800 text-sm bg-green-800 hover:bg-green-900 duration-300 transition-all rounded-[8px] text-white px-3 py-3 w-full">
                                Generate
                            </button>
                        </div>
                    </div>

                    <div className="w-full p-5 border gap-2 rounded-[12px] min-h-[250px] bg-gray-50 flex flex-col">
                        <div className="w-full grid">
                            <label htmlFor="public_key" className="text-xs">Public Key</label>
                            <textarea
                                disabled
                                rows={10}
                                name="public_key"
                                id="publicKey"
                                className="p-4 bg-gray-100 rounded-[7px] border border-gray-200">
                                {crypto.randomUUID()}
                            </textarea>
                        </div>

                        <div className="w-full grid">
                            <label htmlFor="private_key" className="text-xs">Private Key</label>
                            <textarea rows={10} disabled name="private_key" id="privateKey" className="bg-gray-100 rounded-[7px] border border-gray-200"></textarea>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
