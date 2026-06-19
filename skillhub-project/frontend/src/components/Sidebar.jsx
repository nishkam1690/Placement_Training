import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <h3>Categories</h3>
      <ul className="sidebar-list">
        <li>
          <Link to="/courses?category=Frontend">Frontend</Link>
        </li>
        <li>
          <Link to="/courses?category=Backend">Backend</Link>
        </li>
        <li>
          <Link to="/courses?category=Database">Database</Link>
        </li>
        <li>
          <Link to="/courses?category=Cloud">Cloud</Link>
        </li>
      </ul>
      <hr />
      <h3>Quick Menu</h3>
      <ul className="sidebar-list">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-course">Add Course</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
