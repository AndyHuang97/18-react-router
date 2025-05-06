import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      {/* ".." goes back to parent defined in routeDefinitions, not to "/products"
      but the parent "/". This is because "ProductsPage" and "ProductDetails" are siblings
      This behavior depends on the attribute relative, which can be:
      - "route" (default)
      - "path" */}
      <Link to=".." relative="path">Back</Link>
    </>
  );
}
