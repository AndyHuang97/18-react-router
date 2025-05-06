import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  // for behaviors such as timeout
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='products'>the list of produts</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}
