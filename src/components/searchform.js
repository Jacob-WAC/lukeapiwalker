import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SearchForm() {
    const [categories, setCatogories] = useState([]);
    const [formInfo, setFormInfo] = useState({
        category: "",
        id: "",
    });
    const history = useHistory();
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/")
            .then((res) => {
                console.log("res looks like-->", res);
                setCatogories(Object.keys(res.data));
            })
            .catch((err) => console.log(err))
            .finally(() =>
                setFormInfo({ ...formInfo, category: categories[0] })
            );
    }, []);

    const changeHandler = (e) => {
        console.log(e.target.value);
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
        console.log(categories[0]);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${formInfo.category}/${formInfo.id}`);
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="d-flex " action="">
                <div className="">
                    <select
                        onChange={changeHandler}
                        className="form-select"
                        name="category"
                        id=""
                    >
                        {categories.map((cat, i) => {
                            return (
                                <option key={i} value={cat}>
                                    {cat}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <input
                        onChange={changeHandler}
                        className="form-control"
                        type="number"
                        name="id"
                        id="form-control"
                    />
                </div>
                <div className="">
                    <input
                        className="btn btn-success"
                        type="submit"
                        value="Search"
                    />
                </div>
            </form>
        </div>
    );
}
export default SearchForm;
