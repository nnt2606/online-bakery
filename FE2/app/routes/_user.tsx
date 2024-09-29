import { Outlet } from "@remix-run/react";
import UserPanel from "./component/_userPanel";

export default function User(){
    return(
        <div>
            <div className="min-h-screen w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
                <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
                    <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
                        <UserPanel />
                    </div>
                </div>
                <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
                        <Outlet />
                </main>
            </div>
        </div>
    )
}