import { useState } from "react";

const useCopyToClipboard = () => {
    const [copiedText, setCopiedText] = useState(null);
    const DEFAULT_COPY_TOOLTIP_TEXT = "Copy to clipboard";
    const [tooltip, setTooltip] = useState(DEFAULT_COPY_TOOLTIP_TEXT);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            setTooltip("Copied!");
            return true;
        } catch (error) {
            setCopiedText(null);
            setTooltip("Copy failed!");
            return false;
        }
    };

    const resetTooltip = () => {
        // setTimeout(() => {
            setTooltip(DEFAULT_COPY_TOOLTIP_TEXT);
        // }, 3000);
    };

    return {
        copiedText,
        copy,
        tooltip,
        resetTooltip,
    };
};

export default useCopyToClipboard;
