import styles from './editor.module.css';
import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ cards, onAdd }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={onAdd} />
    </ul>
  </section>
);
export default Editor;
