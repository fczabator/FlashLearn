import * as firebase from 'firebase';
import {Card} from 'types';

const config = {
    apiKey: 'AIzaSyDc5L71ltjT6wP5VrRLw6nYtt5pK4jH0CEz',
    authDomain: 'flashlearn-4ad95.firebaseapp.com',
    databaseURL: 'https://flashlearn-4ad95.firebaseio.com',
    projectId: 'flashlearn-4ad95',
    storageBucket: 'flashlearn-4ad95.appspot.com',
    messagingSenderId: '907545148175',
};

firebase.initializeApp(config);

const database = firebase.database();

export const addCard = (card: Card) => {
    database.ref('cards').push().set({
        word: card.word,
        translation: card.translation,
    });
};
