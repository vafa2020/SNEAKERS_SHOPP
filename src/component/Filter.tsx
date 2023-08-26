import { useState, useEffect } from "react";
import {
  useProduct,
  useProductDispatch,
} from "../context/product/ProductProvider";
import { useHelpProduct } from "../context/product/ProductHelpProvider";
const Filter: React.FC = () => {
  const setProduct = useProductDispatch();
  const helpProduct = useHelpProduct();
  const [brandData, setBrandData] = useState<Array<string>>([]);
  // const filteredBrand = helpProduct.filter((product) =>
  //   brandData.length > 0
  //     ? brandData.every((brand) => product.brand.includes(brand))
  //     : helpProduct
  // );
  useEffect(() => {
    const tempProduct = [];

    for (let brand of brandData) {
      tempProduct.push(...helpProduct.filter((a) => a.brand === brand));
    }
    setProduct(tempProduct);
    if (brandData.length === 0) {
      setProduct(helpProduct);
    }
  }, [brandData]);

  const brandHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const res = brandData.map((b) => b).includes(value);
    if (checked && !res) {
      setBrandData([...brandData, value]);
    } else if (!checked) {
      const unChecked = brandData.filter((b) => b !== value);
      setBrandData(unChecked);
    }
  };

  return (
    <div className="w-96">
      <div>
        <h2>فیلتر بر اساس برند</h2>
        <div>
          <label>Nike</label>
          <input
            type="checkbox"
            name="brand"
            value="nike"
            onChange={brandHandler}
          />
        </div>
        <div>
          <label>Puma</label>
          <input
            type="checkbox"
            name="brand"
            value="puma"
            onChange={brandHandler}
          />
        </div>
        <div>
          <label>Adidas</label>
          <input
            type="checkbox"
            name="brand"
            value="adidas"
            onChange={brandHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
