import "./ProductGallery.css";
import shirt from "../../assets/4pagecloth.jpg";
import recommended1 from "../../assets/4pagecloth.jpg";

function ProductGallery() {
  return (
    <div className="product-gallery">

      <div className="main-image">
        <img src={shirt} alt="shirt" />
      </div>

      <div className="thumbnail-images">

  <div className="thumb">
    <img src={recommended1} alt="thumb1" />
  </div>

  <div className="thumb">
    <img src={recommended1} alt="thumb2" />
  </div>

  <div className="thumb">
    <img src={recommended1} alt="thumb3" />
  </div>

  <div className="thumb">
    <img src={recommended1} alt="thumb4" />
  </div>

  <div className="thumb">
    <img src={recommended1} alt="thumb5" />
  </div>

  <div className="thumb">
    <img src={recommended1} alt="thumb6" />
  </div>

</div>

    </div>
  );
}

export default ProductGallery;