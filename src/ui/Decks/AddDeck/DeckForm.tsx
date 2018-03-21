import * as React from 'react';
import {Deck} from '@app/types';
import {TextField, Button} from 'material-ui';

interface Props {
    onAdd: (deck: Deck) => any;
}

interface State {
    name: string;
}

export class DeckForm extends React.Component<Props, State> {

    state: State = {
        name: '',
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event: any) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <TextField name="name" onChange={this.handleChange} />
                <Button type="submit">
                    Add
                </Button>
            </form>
        );

    }
}
