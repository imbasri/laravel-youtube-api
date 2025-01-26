import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";

const CustomLayout = ({ children, dashboardPage = [] }) => {
    const [open, setOpen] = React.useState(false);

    const handleBurger = () => {
        setOpen(!open);
    }
    return (
        <>
            <Head title="Dashboard" />
            {/* Navbar */}
            <Navbar onClick={handleBurger}/>
            {/* sidebar */}
            <Sidebar dashboardPage={dashboardPage} show={open}>
                {/* mainContent */}
                {children}
            </Sidebar>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default CustomLayout;
