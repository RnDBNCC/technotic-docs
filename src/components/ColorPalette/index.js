import React from "react";
import { PALETTES, HEXCODES } from "./constants/colors";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

import "./styles.colorpalette.css";

const ColorPalette = () => {
    const { copy, tooltip, visible, tooltipVisibility } = useCopyToClipboard();

    return (
        <div className="color-palette-container">
            {PALETTES.map((PALETTE) => (
                <div
                    className="color-palette-inner-container"
                    key={PALETTE.NAME}
                >
                    <div className="color-name">{PALETTE.NAME}</div>
                    <div className="colors-container">
                        {PALETTE.COLORS.map((hex, index) => (
                            <div
                                className="palette-pointer"
                                onClick={() => copy(hex.thickness)}
                                onMouseOver={tooltipVisibility}
                                key={index}
                            >
                                {visible && (
                                    <span
                                        className="tooltip-text"
                                        id="myTooltip"
                                    >
                                        {tooltip}
                                    </span>
                                )}
                                <div
                                    className="color-palette"
                                    style={{
                                        backgroundColor:
                                            HEXCODES[index + PALETTE.OFFSET],
                                    }}
                                ></div>
                                <div className="color-palette-desc">
                                    <div>{hex.thickness}</div>
                                    <div className="color-palette-hex">
                                        {hex.code}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ColorPalette;
