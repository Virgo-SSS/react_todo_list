import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Todo({ name }) {
    return (
        <>
            <div className="flex item-center my-3 gap-2">
                <div className="flex flex-1 item-center cursor-pointer">
                    <CheckIcon className="w-7" />
                    <p className="text-slate-700 ml-4 text-[17px]">{name}</p>
                </div>
                <TrashIcon className="w-3.5 cursor-pointer" />
            </div>
        </>
    )
}