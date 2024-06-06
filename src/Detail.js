import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "./service";

function Details() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${api}${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!faculty) {
    return <div>No faculty data found</div>;
  }

  return (
    <div className="card col-3">
      <img src={faculty.image} className="card-img-top" alt={faculty.facultyname} />
      <div className="card-body">
        <h5 className="card-title">{faculty.facultyname}</h5>
        <p className="card-text">Age: {faculty.facultyage}</p>
        <Link to="/get" className="btn btn-success">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Details;
