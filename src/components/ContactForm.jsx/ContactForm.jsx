import styles from "./contactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Button from "./../Button/Button";
import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({});

  let onClickFunction = ()=>{
    alert("Hii this is alert!")
  }

  let submitFunction = (e) => {
    e.preventDefault();
    setData({
      name: e.target[0].value,
      email: e.target[1].value,
      text: e.target[2].value,
    });
  };
  return (
    <div className={`container flex ${styles.container}`}>
      <div className={styles.form}>
        <div className={styles.top_btn}>
          <Button  onClick={onClickFunction} text=" via support chat" icon={<MdOutlineMessage />} />
          <Button text="via call" icon={<FaPhone />} />
        </div>
        <Button
          outline={true}
          text="via email form"
          icon={<MdOutlineMessage />}
        />

        <form onSubmit={submitFunction}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">text</label>
            <textarea rows="3" name="text" id="text"></textarea>
          </div>
          <div className={styles.submit}>
            <Button text="submit" />
          </div>

          <div>
            <table className={styles.table}>
              <tr>
                <td>name</td>
                <td> {data.name?data.name: "xyz"} </td>
              </tr>
              <tr>
                <td>email</td>
                <td> {data.email?data.email:"xyz@gmail.com"} </td>
              </tr>
              <tr>
                <td> text</td>
                <td> {data.text ?data.text:"hello world"} </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div className={styles.hero_img}>
        <img src="/images/contact.svg" alt="hero_img" />
      </div>
    </div>
  );
};

export default ContactForm;
