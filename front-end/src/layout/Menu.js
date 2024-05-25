import { NavLink, Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="row m-1 border">
      <NavLink className="col">
        <Link>Link 1</Link>
      </NavLink>
      <NavLink className="col">
        <Link>Link 2</Link>
      </NavLink>
      <NavLink className="col">
        <Link>Link 3</Link>
      </NavLink>
    </div>
  );
}
