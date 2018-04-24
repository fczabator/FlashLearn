export type Card = {
    id?: string;
    word: string;
    translation: string;
};

export type Deck = {
    id?: string;
    name: string;
    cardsIds?: [string];
};

export interface IStringTMap<T> {
    [key: string]: T;
}
