// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // Optional CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/Homepage">Homepage</Link></li>
        <li><Link href="/Profile">Profile</Link></li>
        <li><Link href="/BusinessPage">Business</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
