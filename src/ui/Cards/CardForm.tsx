import * as React from 'react';
import {Card} from '@app/types';

interface Props {
    onAdd: (card: Card) => any;
}

interface State {
    word: string;
    translation: string;
}

export class CardForm extends React.Component<Props, State> {

    state: State = {
        word: '',
        translation: '',
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        this.props.onAdd({...this.state, id: 'pending'});
        this.setState({word: '', translation: ''});
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>
                    Word:
                    <input type="text" name="word" value={this.state.word} onChange={this.handleChange} />
                </label>
                <label>
                    Translation:
                    <input type="text" name="translation" value={this.state.translation} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );

    }
}
