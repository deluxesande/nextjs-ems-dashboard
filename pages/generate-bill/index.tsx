import SideMenuLayout from "@/components/SideMenuLayout";
import { Input } from "@/components/ui/input";
import Head from "next/head";

const GenerateBill = () => {
    return (
        <SideMenuLayout page="Generate Bill" branch="Chuka">
            <Head>
                <title>EBS | Generate Bill</title>
            </Head>
            <div
                className="bg-slate-50 p-5 mt-14 rounded-xl"
                style={{ width: "calc(100vw - 440px)" }}
            >
                <h1 className="text-primary font-semibold text-md my-1">
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
                <div className="flex w-full gap-8">
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
                <button className="bg-primary text-slate-200 px-14 py-2 w-full rounded-md mt-8">
                    Calculate
                </button>
            </div>
        </SideMenuLayout>
    );
};

export default GenerateBill;
