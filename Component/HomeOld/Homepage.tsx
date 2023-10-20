import React from "react";
import AddDelegates from "../Delegates/AddDelegates";
const Homepage = () => {
    return (
        <>
            <div style={{ marginBottom: "50px" }} className="flex">
                <h1 style={{ fontSize: "50px" }}>
                    Wallet
                    <span style={{ color: "#12eeac", marginLeft: "20px" }}>Resolver</span>
                </h1>
            </div>
            <AddDelegates />
        </>
    );
};

export default Homepage;
