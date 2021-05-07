import styles from './editor.module.css';
import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <CardEditForm key={card.key} card={card} />
      ))}
    </ul>
  </section>
);
export default Editor;
