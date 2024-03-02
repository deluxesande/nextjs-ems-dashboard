import SideMenuLayout from "@/components/SideMenuLayout";
import UsersForm from "@/components/UsersForm";
import Head from "next/head";
import { useState } from "react";

const GenerateBill = () => {
    const [addUser, setAddUser] = useState(false);

    return (
        <SideMenuLayout page="Manage Users" branch="Chuka">
            <Head>
                <title>EBS | Add User</title>
            </Head>
            {!addUser && (
                <>
                    <div className="flex justify-end items-center mt-14">
                        <button
                            className="bg-primary text-slate-200 px-14 py-2 rounded-md"
                            onClick={() => setAddUser(true)}
                        >
                            Add User
                        </button>
                    </div>
                </>
            )}
            {addUser && <UsersForm setAddUser={setAddUser} />}
        </SideMenuLayout>
    );
};

export default GenerateBill;
