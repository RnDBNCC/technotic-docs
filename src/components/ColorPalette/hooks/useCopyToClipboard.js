import { useState } from "react";

const useCopyToClipboard = () => {
    const [copiedText, setCopiedText] = useState(null);
    const DEFAULT_COPY_TOOLTIP_TEXT = "Copy to clipboard";
    const [tooltip, setTooltip] = useState(DEFAULT_COPY_TOOLTIP_TEXT);
    const [visible, setVisible] = useState(true);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            setTooltip("Copied!");
            setTimeout(() => {
                setTooltip(DEFAULT_COPY_TOOLTIP_TEXT);
                setVisible(false);
            }, 3000);
            return true;
        } catch (error) {
            setCopiedText(null);
            setTooltip("Copy failed!");
            return false;
        }
    };

    return {
        copiedText,
        tooltip,
        visible,
        copy,
    };
};

export default useCopyToClipboard;
