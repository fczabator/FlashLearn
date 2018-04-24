import * as React from 'react';
import {Deck} from '@app/types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
        event.preventDefault();

        this.props.onAdd({...this.state});
        this.setState({name: ''});
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <TextField name="name" onChange={this.handleChange} value={this.state.name} />
                <Button type="submit">
                    Add
                </Button>
            </form>
        );

    }
}
