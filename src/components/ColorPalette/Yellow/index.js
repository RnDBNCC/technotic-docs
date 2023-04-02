import React from "react";

import "../styles.colorpalette.css";

const Yellow = () => {
    const colorCode = [
        { thickness: "100", code: "#FEF4CB" },
        { thickness: "200", code: "#FDE699" },
        { thickness: "300", code: "#FAD365" },
        { thickness: "400", code: "#F5BF3F" },
        { thickness: "500", code: "#EFA103" },
        { thickness: "600", code: "#CD8302" },
        { thickness: "700", code: "#AC6801" },
        { thickness: "800", code: "#8A4F00" },
        { thickness: "900", code: "#723D00" },
    ];

    const colors = [
        "#FEF4CB",
        "#FDE699",
        "#FAD365",
        "#F5BF3F",
        "#EFA103",
        "#CD8302",
        "#AC6801",
        "#8A4F00",
        "#723D00",
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

export default Yellow;
