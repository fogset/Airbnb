/* eslint-disable @next/next/no-img-element */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
async function UserNav() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log("user");
    console.log(user);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img
                        src={
                            user?.picture ??
                            "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
                        }
                        alt="Image of the user"
                        className="rounded-full h-8 w-8 hidden lg:block"
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[200px]">
                {user ? (
                    <>
                        <DropdownMenuItem>
                            <LogoutLink className="w-full">Logout</LogoutLink>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem>
                            <RegisterLink className="w-full">
                                Register
                            </RegisterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LoginLink className="w-full">Login</LoginLink>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserNav;
