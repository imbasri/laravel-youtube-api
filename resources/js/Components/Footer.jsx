import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-gray-800 text-white text-center p-4">
                    <p>© {new Date().getFullYear()} Digital Digdaya</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
