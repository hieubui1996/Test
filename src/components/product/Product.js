import "../../css/Product.css"
import { ProductList } from "../../data";
import ProductItem from "./ProductItem";
export default function Product() {
    return(
        <div className="product-list">
            {ProductList.map((item, index) => {
                return (
                    <ProductItem
                key={index}
                name={item.name}
                price={item.price || "Free"}
                image={item.image}
            />
                )
            })}
            
             {/* <ProductItem
                name="Áo Vest NAZAFU Màu Xám AV1138"
                price="676.000"
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-da-bo-1138_2_small-10928.JPG"
            />
             <ProductItem
                name="Áo Vest NAZAFU Màu Da Bò AV1139"
                price="677.000"
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-xanh-den-1138_2_small-10930.JPG"
            />
             <ProductItem
                name="Áo Vest NAZAFU Màu Xám AV1139"
                price="678.000"
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2019/08/ao-vest-nazafu-mau-da-bo-1139_2_small-10931.JPG"
            /> */}
        </div>
    );
}