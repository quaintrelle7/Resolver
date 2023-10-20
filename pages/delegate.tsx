import React from "react";

function delegate() {
    let num = [
        "wallet addressss",
        "wallet addressss",
        "wallet addressss",
        "wallet addressss",
    ];
    return (
        <div style={{ marginTop: "40px" }}>
            <div className="flex">
                <h1 style={{ fontSize: "40px" }}>
                    <span style={{ color: "#12eeac", marginLeft: "20px" }}>
                        Vote for the{" "}
                    </span>{" "}
                    Hacked Address
                </h1>
            </div>
            <div style={{ marginTop: "60px" }}>
                {num.map((item, index) => (
                    <div
                        className="flex"
                        style={{ width: "100%", marginTop: "30px" }}
                        key={item}
                    >
                        <span style={{ marginTop: "10px", marginRight: "20px" }}>
                            {" "}
                            {item}
                        </span>
                        <button
                            className="submit-btn"
                            onClick={() => {
                                alert("voted");
                            }}
                            key={index}
                            type="submit"
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default delegate;