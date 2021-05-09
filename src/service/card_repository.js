import firebaseApp from './firebase';

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); // 끄고 싶을때 사용할 함수
  }

  saveCard(userId, card) {
    const ref = firebaseApp.database().ref(`${userId}/cards/${card.id}`);
    ref.set(card);
  }

  removeCard(userId, card) {
    const ref = firebaseApp.database().ref(`${userId}/cards/${card.id}`);
    ref.remove();
  }
}

export default CardRepository;
