import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import array from "./array";

const Edit = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = array
    .map((e) => {
      return e.id;
    })
    .indexOf(id);

  const updateRecord = (e) => {
    e.preventDefault();

    if (name === "" || address === "") {
      alert("invalid input");
      return;
    }

    let cur = array[index];

    cur.Name = name;
    cur.Address = address;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAddress(localStorage.getItem("Address"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <form className="w-screen h-screen flex justify-center items-center flex-col">
        <input
          className="w-50 p-2 h-7"
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Name"
        ></input>
        <br />
        <input
          className="w-50 mb-4 p-2 h-7"
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          required
          placeholder="Address"
        ></input>
        <br />
        <button
          onClick={(e) => updateRecord(e)}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-35"
        >
          update
        </button>
        <br />
        <Link to={`/`}>
          <button className="bg-blue-500 text-white p-2 rounded-md w-35">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
