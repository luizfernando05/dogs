import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <Footer className={styles.footer}>
        <Dogs />
        <p>Dogs. Alguns direitos reservados.</p>
    </Footer>
  )
}

export default Footer;