import React from "react";

import "../styles.colorpalette.css";

const Blue = () => {
    const colorCode = [
        { thickness: "100", code: "#D2E8FA" },
        { thickness: "200", code: "#A8CFF5" },
        { thickness: "300", code: "#77A9E2" },
        { thickness: "400", code: "#5183C5" },
        { thickness: "500", code: "#22539F" },
        { thickness: "600", code: "#184088" },
        { thickness: "700", code: "#112F72" },
        { thickness: "800", code: "#0A215C" },
        { thickness: "900", code: "#06164C" },
    ];

    const colors = [
        "#D2E8FA",
        "#A8CFF5",
        "#77A9E2",
        "#5183C5",
        "#22539F",
        "#184088",
        "#112F72",
        "#0A215C",
        "#06164C",
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

export default Blue;
