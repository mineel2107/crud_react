import React from "react";
import array from "./array.js";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Home = () => {
  let history = useNavigate();

  function setId(id, name, address) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Address", address);
  }

  function deleteItem(id) {
    let index = array
      .map((e) => {
        return e.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    history("/");
  }
  return (
    <div className="pt-5">
      <table className=" w-screen">
        <tr className=" w-screen grid grid-cols-4 justify-items-center my-3">
          <th>Name</th>
          <th>Address</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {array.map((e) => {
          return (
            <tr className=" w-screen grid grid-cols-4 justify-items-center mt-3">
              <td>{e.Name}</td>
              <td>{e.Address}</td>
              <td>
                <Link to={`/edit`}>
                  <button
                    onClick={() => {
                      setId(e.id, e.Name, e.Address);
                    }}
                  >
                    <AiOutlineEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteItem(e.id);
                  }}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to={`/create`}>
        <button className=" bg-blue-500 text-white p-1 rounded-md w-50 flex items-center flex-col justify-center mt-5  mx-auto text-2xl h-7">
          Create
        </button>
      </Link>
    </div>
  );
};

export default Home;
