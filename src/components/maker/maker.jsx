import styles from './maker.module.css';
import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: 'Nabepa',
      company: 'Apple',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
    2: {
      id: 2,
      name: 'Nabepa',
      company: 'Google',
      theme: 'light',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
    3: {
      id: 3,
      name: 'Nabepa',
      company: 'LINE',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'nabepa@gmail.com',
      message: 'Love and Peace',
      fileName: 'nabepa',
      fileURL: null,
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
