import styles from "./StateHoverTypeForm.module.css";

const StateHoverTypeForm = ({
  prop,
  addService,  
  onServicesContainer3Click,
}) => {
  if(prop===""&&addService===""||!prop){
    return null;
  } 
  return (
    <div
      className={styles.service_block_shown}
      onClick={onServicesContainer3Click}
    >
      <b className={styles.b}>
        {prop}
      </b>
      <b className={styles.add_service}>
        {addService}
      </b>
    </div>
  );
};

export default StateHoverTypeForm;
