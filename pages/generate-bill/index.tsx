import GenerateBillForm from "@/components/GenerateBillForm";
import SideMenuLayout from "@/components/SideMenuLayout";
import Head from "next/head";
import { useState } from "react";

const GenerateBill = () => {
    const [addBill, setAddBill] = useState(false);

    return (
        <SideMenuLayout page="Generate Bill" branch="Chuka">
            <Head>
                <title>EBS | Generate Bill</title>
            </Head>
            {!addBill && (
                <div className="flex justify-between mt-14">
                    <h1 className="text-primary font-semibold text-xl my-1">
                        Bill
                    </h1>
                    <button
                        className="bg-primary text-slate-200 px-14 py-2 rounded-md mt-8"
                        onClick={() => setAddBill(true)}
                    >
                        Add
                    </button>
                </div>
            )}
            {addBill && <GenerateBillForm setAddBill={setAddBill} />}
        </SideMenuLayout>
    );
};

export default GenerateBill;
