import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";

const GenerateBillForm: React.FC<{
    setAddBill: Dispatch<SetStateAction<boolean>>;
}> = ({ setAddBill }) => {
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAddBill(false);
    };

    return (
        <div className="bg-slate-50 p-5 mt-14 rounded-xl w-full">
            <h1 className="text-primary font-semibold text-xl my-1">
                Calculate Bill
            </h1>
            <div className="mt-4">
                <label htmlFor="uid" className="text-md">
                    UID
                </label>
                <Input
                    id="uid"
                    type="text"
                    className="rounded-md w-full mt-2"
                />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8">
                <div className="mt-4 flex-1">
                    <label htmlFor="uid" className="text-md">
                        Date
                    </label>
                    <Input
                        id="uid"
                        type="date"
                        className="rounded-md w-full mt-2"
                    />
                </div>
                <div className="mt-4 flex-1">
                    <label htmlFor="uid" className="text-md">
                        Due Date
                    </label>
                    <Input
                        id="uid"
                        type="date"
                        className="rounded-md w-full mt-2"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="uid" className="text-md">
                    Units
                </label>
                <Input
                    id="uid"
                    type="text"
                    className="rounded-md w-full mt-2"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="uid" className="text-md">
                    Bill Due
                </label>
                <Input
                    id="uid"
                    type="text"
                    className="rounded-md w-full mt-2"
                />
            </div>
            <button
                type="submit"
                className="bg-primary text-slate-200 px-14 py-2 w-full rounded-md mt-8"
                onClick={handleSubmit}
            >
                Add
            </button>
        </div>
    );
};

export default GenerateBillForm;
