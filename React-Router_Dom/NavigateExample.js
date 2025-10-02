import { useNavigate } from "react-router-dom";

export default function NavigateExample() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>🚀 Navigate Example</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
