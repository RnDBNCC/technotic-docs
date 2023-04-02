import React from "react";

import "../styles.colorpalette.css";

const Red = () => {
    const colorCode = [
        { thickness: "100", code: "#FDE8DA" },
        { thickness: "200", code: "#FCCBB6" },
        { thickness: "300", code: "#F7A690" },
        { thickness: "400", code: "#F08372" },
        { thickness: "500", code: "#E74E46" },
        { thickness: "600", code: "#C63338" },
        { thickness: "700", code: "#A62332" },
        { thickness: "800", code: "#85162C" },
        { thickness: "900", code: "#6E0D29" },
    ];

    const colors = [
        "#FDE8DA",
        "#FCCBB6",
        "#F7A690",
        "#F08372",
        "#E74E46",
        "#C63338",
        "#A62332",
        "#85162C",
        "#6E0D29",
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

export default Red;
