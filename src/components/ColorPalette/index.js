import React, { useRef, useState } from "react";

import "./styles.colorpalette.css";

const ColorPalette = () => {
    const palette = [
        {
            blueColor: [
                { thickness: "BL100", code: "#D2E8FA" },
                { thickness: "BL200", code: "#A8CFF5" },
                { thickness: "BL300", code: "#77A9E2" },
                { thickness: "BL400", code: "#5183C5" },
                { thickness: "BL500", code: "#22539F" },
                { thickness: "BL600", code: "#184088" },
                { thickness: "BL700", code: "#112F72" },
                { thickness: "BL800", code: "#0A215C" },
                { thickness: "BL900", code: "#06164C" },
            ],
            greenColor: [
                { thickness: "GR100", code: "#E6FBE4" },
                { thickness: "GR200", code: "#CAF8CA" },
                { thickness: "GR300", code: "#A9EBAF" },
                { thickness: "GR400", code: "#8CD79A" },
                { thickness: "GR500", code: "#65BD7E" },
                { thickness: "GR600", code: "#49A26B" },
                { thickness: "GR700", code: "#32885B" },
                { thickness: "GR800", code: "#206D4C" },
                { thickness: "GR900", code: "#135A43" },
            ],
            redColor: [
                { thickness: "RD100", code: "#FDE8DA" },
                { thickness: "RD200", code: "#FCCBB6" },
                { thickness: "RD300", code: "#F7A690" },
                { thickness: "RD400", code: "#F08372" },
                { thickness: "RD500", code: "#E74E46" },
                { thickness: "RD600", code: "#C63338" },
                { thickness: "RD700", code: "#A62332" },
                { thickness: "RD800", code: "#85162C" },
                { thickness: "RD900", code: "#6E0D29" },
            ],
            yellowColor: [
                { thickness: "YL100", code: "#FEF4CB" },
                { thickness: "YL200", code: "#FDE699" },
                { thickness: "YL300", code: "#FAD365" },
                { thickness: "YL400", code: "#F5BF3F" },
                { thickness: "YL500", code: "#EFA103" },
                { thickness: "YL600", code: "#CD8302" },
                { thickness: "YL700", code: "#AC6801" },
                { thickness: "YL800", code: "#8A4F00" },
                { thickness: "YL900", code: "#723D00" },
            ],
            greyColor: [
                { thickness: "GY100", code: "#F7F7F7" },
                { thickness: "GY200", code: "#EFEFEF" },
                { thickness: "GY300", code: "#D1D1D1" },
                { thickness: "GY400", code: "#A3A3A3" },
                { thickness: "GY500", code: "#676767" },
                { thickness: "GY600", code: "#584B4C" },
                { thickness: "GY700", code: "#4A3337" },
                { thickness: "GY800", code: "#3B2027" },
                { thickness: "GY900", code: "#31131E" },
            ],
        },
    ];

    const hexCode = [
        "#D2E8FA",
        "#A8CFF5",
        "#77A9E2",
        "#5183C5",
        "#22539F",
        "#184088",
        "#112F72",
        "#0A215C",
        "#06164C",
        "#E6FBE4",
        "#CAF8CA",
        "#A9EBAF",
        "#8CD79A",
        "#65BD7E",
        "#49A26B",
        "#32885B",
        "#206D4C",
        "#135A43",
        "#FDE8DA",
        "#FCCBB6",
        "#F7A690",
        "#F08372",
        "#E74E46",
        "#C63338",
        "#A62332",
        "#85162C",
        "#6E0D29",
        "#FEF4CB",
        "#FDE699",
        "#FAD365",
        "#F5BF3F",
        "#EFA103",
        "#CD8302",
        "#AC6801",
        "#8A4F00",
        "#723D00",
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

    const divRef = useRef(Array().fill(null));
    const [tooltip, setTooltip] = useState("Copy to clipboard");

    function copyToClipboard(color) {
        const copyThickness = divRef.current[color].innerText;

        const tempElement = document.createElement("textarea");
        tempElement.value = copyThickness;
        document.body.appendChild(tempElement);

        tempElement.select();
        tempElement.setSelectionRange(0, 99999);

        document.execCommand("copy");

        document.body.removeChild(tempElement);

        setTooltip("Copied!");
    }

      const resetTooltip = () => {
          setTooltip("Copy to clipboard");
      };

    return (
        <div className="color-palette-container">
            <div className="color-palette-inner-container">
                <div>BLUE</div>
                <div className="colors-container">
                    {palette.map((bluePalette) =>
                        bluePalette.blueColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copyToClipboard(color)}
                                onMouseLeave={resetTooltip}
                            >
                                <span className="tooltiptext" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div
                                        key={color}
                                        ref={(el) =>
                                            (divRef.current[color] = el)
                                        }
                                    >
                                        {hex.thickness}
                                    </div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="color-palette-inner-container">
                <div>GREEN</div>
                <div className="colors-container">
                    {palette.map((greenPalette) =>
                        greenPalette.greenColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copyToClipboard(color + 9)}
                                onMouseLeave={resetTooltip}
                            >
                                <span className="tooltiptext" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 9],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div
                                        key={color}
                                        ref={(el) =>
                                            (divRef.current[color + 9] = el)
                                        }
                                    >
                                        {hex.thickness}
                                    </div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="color-palette-inner-container">
                <div>RED</div>
                <div className="colors-container">
                    {palette.map((redPalette) =>
                        redPalette.redColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copyToClipboard(color + 18)}
                                onMouseLeave={resetTooltip}
                            >
                                <span className="tooltiptext" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 18],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div
                                        key={color}
                                        ref={(el) =>
                                            (divRef.current[color + 18] = el)
                                        }
                                    >
                                        {hex.thickness}
                                    </div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="color-palette-inner-container">
                <div>YELLOW</div>
                <div className="colors-container">
                    {palette.map((yellowPalette) =>
                        yellowPalette.yellowColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copyToClipboard(color + 27)}
                                onMouseLeave={resetTooltip}
                            >
                                <span className="tooltiptext" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 27],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div
                                        key={color}
                                        ref={(el) =>
                                            (divRef.current[color + 27] = el)
                                        }
                                    >
                                        {hex.thickness}
                                    </div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="color-palette-inner-container">
                <div>GREY</div>
                <div className="colors-container">
                    {palette.map((greyPalette) =>
                        greyPalette.greyColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copyToClipboard(color + 36)}
                                onMouseLeave={resetTooltip}
                            >
                                <span className="tooltiptext" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 36],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div
                                        key={color}
                                        ref={(el) =>
                                            (divRef.current[color + 36] = el)
                                        }
                                    >
                                        {hex.thickness}
                                    </div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ColorPalette;
