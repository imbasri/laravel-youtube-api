import React, { useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Youtube Channel",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Views",
            data: [100, 200, 300, 400, 500, 600, 700],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Likes",
            data: [700, 600, 500, 400, 300, 200, 100],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            label: "Subscribes",
            data: [50, 100, 150, 200, 250, 300, 350],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
    ],
};

export default function ChartDummy() {
    const [mobileCart, setMobileCart] = React.useState({ width: 600, height: 250 });
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 760) {
                setMobileCart({
                    width: window.innerWidth,
                    height: window.innerHeight / 2,
                })
            } else {
                setMobileCart({
                    width: window.innerWidth,
                    height: window.innerHeight - 100,
                })
            }
        };

        window.addEventListener("resize", handleResize);
        // berguna untuk menghandle ketika window di resize saja
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className=" flex flex-1 items-center flex-col justify-center container mx-auto h-screen md:w-[90%] mt-5">
            <h2 className="text-center text-lg md:text-4xl mb-5">Youtube My Channel 2025</h2>
           <div className="h-full w-full mx-auto md:h-[90%]">
           <Bar
                data={data}
                options={{ ...options, resizeDelay: 200 , aspectRatio: window.innerWidth <= 480 ? 1 : 2}}
                width={mobileCart.width}
                height={mobileCart.height}
            />
           </div>
        </div>
    );
}
