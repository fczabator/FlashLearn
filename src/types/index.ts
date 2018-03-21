export type Card = {
    id: string;
    word: string;
    translation: string;
};

export type Deck = {
    id: string;
    name: string;
    cards: Card[];
};

export interface IStringTMap<T> {
    [key: string]: T;
}
