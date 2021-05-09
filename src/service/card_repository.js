import { firebaseDatabase } from './firebase';

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); // for unmount
  }

  saveCard(userId, card) {
    const ref = firebaseDatabase.ref(`${userId}/cards/${card.id}`);
    ref.set(card);
  }

  removeCard(userId, card) {
    const ref = firebaseDatabase.ref(`${userId}/cards/${card.id}`);
    ref.remove();
  }
}

export default CardRepository;
