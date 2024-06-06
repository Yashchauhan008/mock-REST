import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "./service";
function Edit() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${api}` + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  function editData() {
    fetch(`${api}` + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then((res) => {
      setData(res);
      navigate("/get");
    });
  }
  return (
    <>
      <input
        type="text"
        value={data.facultyname}
        onChange={(e) => {
          setData({ ...data, facultyname: e.target.value });
        }}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={data.facultyage}
        onChange={(e) => {
          setData({ ...data, facultyage: e.target.value });
        }}
        placeholder="Enter age"
      />
      <input
        type="text"
        value={data.image}
        onChange={(e) => {
          setData({ ...data, image: e.target.value });
        }}
        placeholder="Enter img"
      />
      <br />
      <button onClick={editData}>Edit</button>
    </>
  );
}

export default Edit;
