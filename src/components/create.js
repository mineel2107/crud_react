import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import array from "./array";

const Create = () => {
  let history = useNavigate();

  let [name, setName] = useState("");
  let [address, setAddress] = useState("");

  const createRecord = (e) => {
    e.preventDefault();

    const ids = v4();
    let uid = ids.slice(0, 8);

    if (name === "" || address === "") {
      alert("invalid input");
      return;
    }

    let a = name,
      b = address;
    array.push({ id: uid, Name: a, Address: b });

    history("/");
  };
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
          onClick={(e) => createRecord(e)}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-35"
        >
          Submit
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

export default Create;
