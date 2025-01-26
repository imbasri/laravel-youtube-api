import CustomLayout from "@/Layouts/CustomLayout";
import React from "react";

import { dashboardPage, renderComponent } from "@/utils/dashboard";


const DashboardPages = ({ urls = "/" }) => {
    return (
        <>
            <CustomLayout dashboardPage={dashboardPage}>
                {renderComponent(urls)}
            </CustomLayout>
        </>
    );
};

export default DashboardPages;
