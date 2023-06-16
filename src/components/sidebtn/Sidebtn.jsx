import React from "react";
import styles from "./Sidebtn.module.scss";
import { Sidebtn } from "../../assets";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SidebtnC = () => {
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    password: Yup.string(),
  });
  return (
    <>
      <div className={styles.sidebtn_container}>
        <div className={styles.sidebtn_container_content}>
          <img src={Sidebtn} alt="btn" 
          // onClick={toggleModal}
           />

          <div className={styles.sidebtn_container_content_contactbox}>
            <div
              className={styles.sidebtn_container_content_contactbox_content}
            >
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  message: "",
                }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    <Form>
                      <FormInput
                        label="Full Name"
                        name="name"
                        type="text"
                        place=""
                      />
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place=""
                      />
                      <FormInput
                        label="Message"
                        name="Messge"
                        type="text-area"
                        place=""
                      />
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <div
              className={
                styles.sidebtn_container_content_contactbox_content_btn
              }
            >
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebtnC;

//  {modal ? () : (
//             ""
//           )}
