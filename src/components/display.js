import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
const Display = () => {
    const [data, setData] = useState({});
    const { category, id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${category}/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, [category, id]);
    return (
        <div>
            {" "}
            {category == "people" ? (
                <>
                    <h3>Name: {data.name}</h3>
                    <h3>Height: {data.height}</h3>
                    <h3>Mass: {data.mass}</h3>
                    <h3>Birthyear: {data.birth_year}</h3>
                </>
            ) : category == "planets" ? (
                <>
                    <h3>Name: {data.name}</h3>
                    <h3>Height: {data.climate}</h3>
                    <h3>Mass: {data.terrain}</h3>
                    <h3>Population: {data.population}</h3>
                </>
            ) : category == "films" ? (
                <>
                    <h3>Name: {data.title}</h3>
                    <h3>Height: {data.director}</h3>
                    <h3>Mass: {data.producer}</h3>
                    <h3>Episode number: {data.episode_id}</h3>
                </>
            ) : (
                <>
                    <h1>THeSe ArE nOt ThE DrOiDs yOu aRe LoOkiNg FoR</h1>
                    <img
                        src="https://pbs.twimg.com/media/ERREnNaUEAIF_XN.jpg"
                        alt="obi one"
                    />
                </>
            )}
        </div>
    );
};
export default Display;
