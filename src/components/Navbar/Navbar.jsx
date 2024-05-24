import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} flex container`}>
      <div>
        <img className={styles.logo} src="/images/logo.jfif" alt="logo" />
      </div>

      <div>
        <ul className={`${styles.navs} flex`}>
          <li>Home</li>
          <li> About</li>
          <li> contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
