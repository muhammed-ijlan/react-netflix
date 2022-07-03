import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import { axiosInstance } from "../../config";

export default function Home({ type }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);


    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axiosInstance.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                setLists(res.data);
            } catch (err) {
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map(list => (
                <List list={list} />)

            )}
        </div>
    );
}
