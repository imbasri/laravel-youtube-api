import React from "react";
import { usePage } from "@inertiajs/react";
import DashboardPages from "./Dashboard/Index";

const App = () => {
    const { url } = usePage();
    return (
        <>
            <DashboardPages urls={url} />
        </>
    );
};

export default App;
