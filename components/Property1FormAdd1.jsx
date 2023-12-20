import { useMemo } from "react";
import styles from "./Property1FormAdd1.module.css";

const Property1FormAdd1 = ({
  rectangle22, 

  onClickEv,
}) => {
  return (
    <div className={styles.property_1form_add1}>
      <img
        className={styles.property_1form_add_item}
        alt=""
        src={rectangle22}        
      />
      <div
        className={styles.group}       
        onClick={onClickEv}
      >
        <div className={styles.div1}>+</div>
        <div className={styles.add_product}>Add Product</div>
      </div>
    </div>
  );
};

export default Property1FormAdd1;
