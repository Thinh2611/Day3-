import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { name } = useParams();
  return <h3>📌 User Detail: {name}</h3>;
}
