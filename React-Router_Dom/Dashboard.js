import { Routes, Route, NavLink } from "react-router-dom";

function Stats() {
  return <h3>📊 Stats Page</h3>;
}

function Settings() {
  return <h3>⚙️ Settings Page</h3>;
}

export default function Dashboard() {
  return (
    <div>
      <h2>📂 Dashboard</h2>
      <nav style={{ marginBottom: "10px" }}>
        <NavLink to="stats" style={{ marginRight: "10px" }}>Stats</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
