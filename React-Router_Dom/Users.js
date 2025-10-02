import { NavLink } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h2>👥 Users</h2>
      <ul>
        <li><NavLink to="/users/alice">Alice</NavLink></li>
        <li><NavLink to="/users/bob">Bob</NavLink></li>
      </ul>
    </div>
  );
}
