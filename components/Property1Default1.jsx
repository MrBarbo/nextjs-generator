'use client'
import { useRouter } from 'next/navigation';
import styles from "./Property1Default1.module.css";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";

const Property1Default1 = ({
  prodPhoto,
  produName,
  productDesc,  

  onClickEv,
}) => {
  const router = useRouter();  
  if(produName===""&&productDesc===""||!produName){
    return null;
  }
  return (
    <div className={styles.property_1default1}>
      <img
        className={styles.property_1default_item}
        alt=""
        src={prodPhoto}
      />
      <div className={styles.produ_name_parent}>
        <div className={styles.produ_name}>{produName}</div>
        <div className={styles.lorem_ipsum_dolor1}>{productDesc}
        </div>
        <div
          className={styles.button_container}
          onClick={() => router.push(onClickEv)}
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            goClick= {onClickEv}
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default1;
