import { Outlet, Link, useParams } from "react-router-dom";
function Home() {
  const { id } = useParams();
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="/get" class="nav-link">
                  faculty
                </Link>
              </li>
              <li class="nav-item"></li>
            </ul>
            <form class="d-flex">
            <Link to="/add" className="btn btn-success">
                 +
            </Link>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}
export default Home;
