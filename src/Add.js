import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./service";

function Add() {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  function addFaculty() {
    fetch(`${api}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    }).then((res) => {
      navigate("/get");
    });
    return <></>;
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, facultyname: e.target.value });
        }}
        placeholder="Enter name"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, facultyage: e.target.value });
        }}
        placeholder="Enter age"
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, image: e.target.value });
        }}
        placeholder="Enter img"
      />
      <br />
      <input
        type="button"
        value="Add"
        onClick={() => {
          addFaculty();
        }}
      />
    </>
  );
}

export default Add;
