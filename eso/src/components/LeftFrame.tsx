import DatabaseIcon from "../icons/data.svg?react"
import DecryptIcon from "../icons/decrypt.svg?react"
import EncryptIcon from "../icons/encrypt.svg?react"

export const Items = [
    {
        icon: DatabaseIcon,
        label: "Manage Keys"
    },
    {
        icon: EncryptIcon,
        label: "Encrypt"
    },
    {
        icon: DecryptIcon,
        label: "Decrypt"
    },
]

export default function LeftFrame() {
    return (
        <section className="flex flex-wrap w-full jetbrains">
            <section className="px-3 space-y-3 flex flex-wrap mt-5 justify-center w-full">
                {
                    Items.map(item => {
                        return <div
                            key={item.label}
                            className="flex text-gray-600 cursor-pointer flex-wrap px-4 py-2.5 rounded-[8px] border border-gray-200 items-center space-x-3 w-full hover:bg-green-800 hover:text-white duration-300 transition-all"
                        >
                            <item.icon></item.icon>
                            <h1>{item.label}</h1>
                        </div>
                    })
                }
            </section>
        </section>
    )
}
