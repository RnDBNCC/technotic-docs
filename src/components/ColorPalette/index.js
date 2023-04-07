import React from "react";

import "./styles.colorpalette.css";

const ColorPalette = () => {
    const palette = [
        {
            blueColor: [
                { thickness: "100", code: "#D2E8FA" },
                { thickness: "200", code: "#A8CFF5" },
                { thickness: "300", code: "#77A9E2" },
                { thickness: "400", code: "#5183C5" },
                { thickness: "500", code: "#22539F" },
                { thickness: "600", code: "#184088" },
                { thickness: "700", code: "#112F72" },
                { thickness: "800", code: "#0A215C" },
                { thickness: "900", code: "#06164C" },
            ],
            greenColor: [
                { thickness: "100", code: "#E6FBE4" },
                { thickness: "200", code: "#CAF8CA" },
                { thickness: "300", code: "#A9EBAF" },
                { thickness: "400", code: "#8CD79A" },
                { thickness: "500", code: "#65BD7E" },
                { thickness: "600", code: "#49A26B" },
                { thickness: "700", code: "#32885B" },
                { thickness: "800", code: "#206D4C" },
                { thickness: "900", code: "#135A43" },
            ],
            redColor: [
                { thickness: "100", code: "#FDE8DA" },
                { thickness: "200", code: "#FCCBB6" },
                { thickness: "300", code: "#F7A690" },
                { thickness: "400", code: "#F08372" },
                { thickness: "500", code: "#E74E46" },
                { thickness: "600", code: "#C63338" },
                { thickness: "700", code: "#A62332" },
                { thickness: "800", code: "#85162C" },
                { thickness: "900", code: "#6E0D29" },
            ],
            yellowColor: [
                { thickness: "100", code: "#FEF4CB" },
                { thickness: "200", code: "#FDE699" },
                { thickness: "300", code: "#FAD365" },
                { thickness: "400", code: "#F5BF3F" },
                { thickness: "500", code: "#EFA103" },
                { thickness: "600", code: "#CD8302" },
                { thickness: "700", code: "#AC6801" },
                { thickness: "800", code: "#8A4F00" },
                { thickness: "900", code: "#723D00" },
            ],
            greyColor: [
                { thickness: "100", code: "#F7F7F7" },
                { thickness: "200", code: "#EFEFEF" },
                { thickness: "300", code: "#D1D1D1" },
                { thickness: "400", code: "#A3A3A3" },
                { thickness: "500", code: "#676767" },
                { thickness: "600", code: "#584B4C" },
                { thickness: "700", code: "#4A3337" },
                { thickness: "800", code: "#3B2027" },
                { thickness: "900", code: "#31131E" },
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

    return (
        <div className="color-palette-container">
            <div className="color-palette-inner-container">
                <div>BLUE</div>
                <div className="colors-container">
                    {palette.map((bluePalette) =>
                        bluePalette.blueColor.map((hex, color) => (
                            <div>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
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
                            <div>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 9],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
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
                            <div>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 18],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
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
                            <div>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 27],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
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
                            <div>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: hexCode[color + 36],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
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
