import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../config";
import Row from "../../components/row/Row"

const API_KEY = "47de2b9e8b2462b53975d18185ac40bf";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [rowData, setRowData] = useState([])

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
        const apiRes = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
        console.log();
        setRowData(apiRes.data.results)

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  // console.log(lists);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} setGenre={setGenre} />

      <Row data={rowData} />
      {lists.map((list) => (
        <List list={list} />
      ))}

    </div>
  );
};

export default Home;
