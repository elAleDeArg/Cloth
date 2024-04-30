"use client";



const isAdminView = false;
const isAuthUser = false;

export default function Navbar() {
    return (
        <nav className=" bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
                <div className=" flex items-center cursor-pointer">
                    <span className="text-xl font-bold text-gray-800">
                        E cloth market
                    </span>
                </div>
                <div className="flex md:order-2 space-x-4">
                    {!isAdminView && isAuthUser ? (
                        <>
                            <button>Account</button>
                            <button>Cart</button>
                        </>
                    ) : null}
                </div>
            </div>
        </nav>
    );
}
