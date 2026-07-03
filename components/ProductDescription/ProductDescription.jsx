import "./ProductDescription.css";

function ProductDescription() {
  return (
    <div className="product-description">

      <div className="tabs">

        <button className="active">Description</button>
        <button>Reviews</button>
        <button>Shipping</button>
        <button>About Seller</button>

      </div>

      <div className="description-content">

        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, 
           Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </p>

        <table>

          <tbody>

            <tr>
              <td>Model</td>
              <td>#8786867</td>
            </tr>

            <tr>
              <td>Style</td>
              <td>Classic Style</td>
            </tr>

            <tr>
              <td>Certificate</td>
              <td>ISO-898921212</td>
            </tr>

            <tr>
              <td>Size</td>
              <td>34mm x 450mm</td>
            </tr>

            <tr>
              <td>Memory</td>
              <td>36GB RAM</td>
            </tr>

          </tbody>

        </table>

        <ul className="feature-list">

          <li>✔️ Some great feature</li>
          <li>✔️ Premium Quality</li>
          <li>✔️ Easy to use</li>
          <li>✔️ Long Warranty</li>

        </ul>

      </div>

    </div>
  );
}

export default ProductDescription;