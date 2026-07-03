

import "./ProductDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import YouMayLike from "../../components/YouMayLike/YouMayLike";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
import Footer from "../../components/Footer/Footer";
function ProductDetails() {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Breadcrumb />
      <div className="product-wrapper">
        <ProductGallery />
        <ProductInfo />
        <SupplierCard />
        </div>
        <div className="product-middle-section">
    <ProductDescription />
    <YouMayLike />
</div>

<RelatedProducts />
<DiscountBanner />
<Footer />
    </>
  );
}

export default ProductDetails;