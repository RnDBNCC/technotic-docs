import React from "react";

import useContributors from "./hooks/useContributors";

const Contributors = () => {
    const { contributors } = useContributors();

    return (
        <div className="contributors">
            {contributors.map(({ id, login, htmlUrl, avatarUrl }) => (
                <section className="contributor-card" key={id}>
                    <div className="contributor-card-content">
                        <img
                            className="contributor-profile-picture"
                            src={avatarUrl}
                            alt="Technotic Contributors Profile"
                        />
                        <div className="contributor-username">{login}</div>
                        <div className="contributor-user-url">{htmlUrl}</div>
                        <form action={htmlUrl}>
                            <button type="submit" className="contributors-profile-btn">
                                View Profile
                            </button>
                        </form>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Contributors;