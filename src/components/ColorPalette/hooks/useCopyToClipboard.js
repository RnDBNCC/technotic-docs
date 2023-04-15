import { useState } from "react";

const useCopyToClipboard = () => {
    const [copiedText, setCopiedText] = useState(null);
    const [tooltip, setTooltip] = useState("Copy to clipboard");

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            setTooltip("Copied!");
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setCopiedText(null);
            return false;
        }
    };

    const resetTooltip = () => {
        setTooltip("Copy to clipboard");
    };

    return {
        copiedText,
        copy,
        tooltip,
        resetTooltip,
    };
};

export default useCopyToClipboard;
