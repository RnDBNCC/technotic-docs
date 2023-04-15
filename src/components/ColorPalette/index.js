import React from "react";
import { PALETTE, HEXCODE } from "./constants/color-api";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

import "./styles.colorpalette.css";

const ColorPalette = () => {
    const { copy, tooltip, resetTooltip } = useCopyToClipboard();

    return (
        <div className="color-palette-container">
            <div className="color-palette-inner-container">
                <div className="color-name">BLUE</div>
                <div className="colors-container">
                    {PALETTE.map((bluePalette) =>
                        bluePalette.blueColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseLeave={resetTooltip}
                                key={color}
                            >
                                <span className="tooltip-text" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: HEXCODE[color],
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
                <div className="color-name">GREEN</div>
                <div className="colors-container">
                    {PALETTE.map((greenPalette) =>
                        greenPalette.greenColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseLeave={resetTooltip}
                                key={color}
                            >
                                <span className="tooltip-text" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: HEXCODE[color + 9],
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
                <div className="color-name">RED</div>
                <div className="colors-container">
                    {PALETTE.map((redPalette) =>
                        redPalette.redColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseLeave={resetTooltip}
                                key={color}
                            >
                                <span className="tooltip-text" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: HEXCODE[color + 18],
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
                <div className="color-name">YELLOW</div>
                <div className="colors-container">
                    {PALETTE.map((yellowPalette) =>
                        yellowPalette.yellowColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseLeave={resetTooltip}
                                key={color}
                            >
                                <span className="tooltip-text" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: HEXCODE[color + 27],
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
                <div className="color-name">GREY</div>
                <div className="colors-container">
                    {PALETTE.map((greyPalette) =>
                        greyPalette.greyColor.map((hex, color) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseLeave={resetTooltip}
                                key={color}
                            >
                                <span className="tooltip-text" id="myTooltip">
                                    {tooltip}
                                </span>
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor: HEXCODE[color + 36],
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
