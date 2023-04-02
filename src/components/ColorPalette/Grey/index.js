import React from "react";

import "../styles.colorpalette.css";

const Grey = () => {
    const colorCode = [
        { thickness: "100", code: "#F7F7F7" },
        { thickness: "200", code: "#EFEFEF" },
        { thickness: "300", code: "#D1D1D1" },
        { thickness: "400", code: "#A3A3A3" },
        { thickness: "500", code: "#676767" },
        { thickness: "600", code: "#584B4C" },
        { thickness: "700", code: "#4A3337" },
        { thickness: "800", code: "#3B2027" },
        { thickness: "900", code: "#31131E" },
    ];

    const colors = [
        "#F7F7F7",
        "#EFEFEF",
        "#D1D1D1",
        "#A3A3A3",
        "#676767",
        "#584B4C",
        "#4A3337",
        "#3B2027",
        "#31131E",
    ];

    return (
        <div className="color-palette-container">
            {colorCode.map((hex, color) => (
                <div>
                    <div
                        className="color-palette"
                        style={{ backgroundColor: colors[color] }}
                        key={color}
                    ></div>
                    <div className="color-palette-desc">
                        <div>{hex.thickness}</div>
                        <div className="color-palette-hex">{hex.code}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Grey;
