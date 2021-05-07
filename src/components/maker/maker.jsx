import styles from './maker.module.css';
import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      key: 1,
      name: 'Nabepa',
      company: 'Apple',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
    {
      key: 2,
      name: 'Nabepa',
      company: 'Google',
      theme: 'light',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
    {
      key: 3,
      name: 'Nabepa',
      company: 'LINE',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
