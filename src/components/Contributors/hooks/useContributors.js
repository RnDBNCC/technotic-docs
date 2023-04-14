import { useCallback, useEffect, useState } from "react";
import {
    CONTRIBUTORS_API_ENDPOINT,
    GITHUB_API_URL,
} from "@site/src/constants/api";

const normalize = (rawContibutors) =>
    rawContibutors.map(({ id, avatar_url, login, html_url }) => ({
        id,
        login,
        avatarUrl: avatar_url,
        htmlUrl: html_url,
    }));

const useContributors = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContributors = useCallback(async () => {
        const contributorsResponse = await fetch(
            `${GITHUB_API_URL}${CONTRIBUTORS_API_ENDPOINT}`
        );
        return await contributorsResponse.json();
    });

    const doFetchContributors = useCallback(async () => {
        setLoading(true);
        setContributors(normalize(await fetchContributors()));
    });

    useEffect(() => {
        doFetchContributors();
    }, [setContributors]);

    return {
        contributors,
        refetch: doFetchContributors,
        loading,
    };
};

export default useContributors;