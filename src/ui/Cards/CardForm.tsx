import * as React from 'react';
import {Card} from '@app/types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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

        this.props.onAdd({...this.state});
        this.setState({word: '', translation: ''});
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <TextField name="word" label="Word" value={this.state.word} onChange={this.handleChange} />
                <TextField
                    name="translation"
                    label="Translation"
                    value={this.state.translation}
                    onChange={this.handleChange}
                />
                <Button type="submit" value="Submit">
                    Create
                </Button>
            </form>
        );

    }
}
