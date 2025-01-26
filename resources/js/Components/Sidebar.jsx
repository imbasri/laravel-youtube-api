import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

const Sidebar = ({ children, dashboardPage = [], show = false }) => {
    const { url } = usePage();
    const [showBar, setShowBar] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            setLoading(true);
            // simulasikan loading data 2 detik
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 760) {
                setShowBar(false);
            } else {
                setShowBar(true);
            }
        };

        window.addEventListener("resize", handleResize);
        // berguna untuk menghandle ketika window di resize saja
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // ceritanya loading ketika get data / menunggu data
    return (
        <div className="flex h-full ">
            {/* sidebar */}
            <aside
                className={`w-64 bg-gray-800 text-white ${
                    showBar || show ? "block" : "hidden"
                }`}
                showBar
            >
                <div className="h-full">
                    {/* items */}
                    {dashboardPage.map((page, index) => (
                        <Link
                            key={index}
                            href={page.link}
                            className={`block p-4 text-white hover:bg-gray-700 ${
                                url === page.link ? "bg-gray-700" : ""
                            }`}
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>
            </aside>
            {/* main content */}
            <main className="w-full bg-gray-200 h-screen px-5">
                {loading && (
                    <div className="flex items-center justify-center h-full">
                        <div className="animate-bounce md:text-4xl text-lg">Loading...</div>
                    </div>
                )}
                {!loading && children}
            </main>
        </div>
    );
};

export default Sidebar;
