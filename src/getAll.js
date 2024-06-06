import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "./service";

function GetAll() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((res) => {
        setFaculty(res);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`${api}/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        setFaculty(faculty.filter((fac) => fac.id !== id));
      });
  };

  const formattedFaculty = faculty.map((fac) => (
    <div className="card col-2">
      <img src={fac.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{fac.facultyname}</h5>
        <p className="card-text">{fac.facultyage}</p>
        <Link to={`/get/${fac.id}`} className="btn btn-primary">
          Details
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(fac.id)}
        >
          Delete
        </button>
        <Link to={`/Edit/${fac.id}`} className="btn btn-warning">
          Edit
        </Link>
       
      </div>
    </div>
  ));

  return <div className="row">{formattedFaculty}</div>;
}
export default GetAll;
