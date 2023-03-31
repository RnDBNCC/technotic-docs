import React from "react";

const ColorBox = ({ colorCode, bgColor }) => {

    const colors = [
        ''
    ]

    function copyColor() {
        // Get the text field
        var copyText = document.getElementById("myInput");

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }

    return (
        <div onclick={copyColor} data-value={colorCode}>
            <div
                style={{
                    backgroundColor: { bgColor },
                    width: "100px",
                    height: "60px",
                    borderRadius: "12px",
                }}
            ></div>
            <div className="" style={{ marginLeft: "3px" }}>
                <div>100</div>
                <div className="color" style={{ fontSize: "12px", color: "#A3A3A3" }}>
                    {colorCode}
                </div>
            </div>
        </div>
    );
};

export default ColorBox;
