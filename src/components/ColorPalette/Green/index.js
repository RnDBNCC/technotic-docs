import React from "react";

import "../styles.colorpalette.css";

const Green = () => {
    const colorCode = [
        { thickness: "100", code: "#E6FBE4" },
        { thickness: "200", code: "#CAF8CA" },
        { thickness: "300", code: "#A9EBAF" },
        { thickness: "400", code: "#8CD79A" },
        { thickness: "500", code: "#65BD7E" },
        { thickness: "600", code: "#49A26B" },
        { thickness: "700", code: "#32885B" },
        { thickness: "800", code: "#206D4C" },
        { thickness: "900", code: "#135A43" },
    ];

    const colors = [
        "#E6FBE4",
        "#CAF8CA",
        "#A9EBAF",
        "#8CD79A",
        "#65BD7E",
        "#49A26B",
        "#32885B",
        "#206D4C",
        "#135A43",
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

export default Green;
