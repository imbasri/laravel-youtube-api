import Dashboard from "@/Pages/Dashboard/Dashboard";
import Management from "@/Pages/Dashboard/Management";
import Report from "@/Pages/Dashboard/Report";

export const renderComponent = (urls) => {
    switch (urls) {
        case "/":
            return <Dashboard />;
        case "/management":
            return <Management />;
        case "/report":
            return <Report />;
        default:
            return <Dashboard />;
    }
};

export const dashboardPage = [
    { name: "Dashboard", link: "/" },
    { name: "Report", link: "/report" },
    { name: "Management User", link: "/management" },
];
