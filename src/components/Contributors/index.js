
import React, { useEffect, useState } from 'react'

const contributor = () => {

    const [users, setUsers] = useState([]);

    const CONTRIBUTORS_API_URL = "https://api.github.com/repos/RnDBNCC/technotic/contributors";
    
    const getUsers = async () => {
        const response = await fetch(CONTRIBUTORS_API_URL);
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="contributor-container">
                {
                    users.map((elem) => {
                        return (
                            <div className="card_item" key={elem.id}{...elem}>
                                <div className="card_inner">
                                    <img src={elem.avatar_url} alt="" />
                                    <div className="userName">{elem.login}</div>
                                    <div className="userUrl">{elem.url}</div>
                                    <form action={(elem.html_url)}>
                                        <button type='submit' className="viewProfile">View Profile</button>
                                    </form>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default contributor;

