import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import axios from "axios";

export default function Home({ type }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);


    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk4NWY5YTg5ODQ0YjUzOTk5MjQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQxMDEwOSwiZXhwIjoxNjU2ODQyMTA5fQ.2qPjfs_rPxn-3eT-4xvueyf7R2sKkzXEKWDwzh3BZ3s"
                    }
                });


                setLists(res.data)
                console.log(res.data);

            } catch (err) {
                console.log(err);
            }
        };
        getRandomList();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map(list => (
                <List list={list} />)

            )}
        </div>
    );
}
