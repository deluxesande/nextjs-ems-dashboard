import SideMenuLayout from "@/components/SideMenuLayout";
import { UserTable } from "@/components/UserTable";
import UsersForm from "@/components/UsersForm";
import Head from "next/head";
import { useState } from "react";

const GenerateBill = () => {
    const [addUser, setAddUser] = useState(false);

    return (
        <SideMenuLayout page="Manage Users" branch="Chuka">
            <Head>
                <title>EBS | Manage Users</title>
            </Head>
            {!addUser && (
                <>
                    <div className="flex justify-between items-center mt-14">
                        <h1 className="text-primary font-semibold text-xl my-1">
                            User Details
                        </h1>
                        <button
                            className="bg-primary text-slate-200 px-14 py-2 rounded-md"
                            onClick={() => setAddUser(true)}
                        >
                            Add User
                        </button>
                    </div>
                    <UserTable />
                </>
            )}
            {addUser && <UsersForm setAddUser={setAddUser} />}
        </SideMenuLayout>
    );
};

export default GenerateBill;
