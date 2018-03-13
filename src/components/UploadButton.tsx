import * as React from 'react';
import { Tesseract } from 'tesseract.ts';

export class UploadButton extends React.Component {

    handleChange(selectorFiles: FileList | null) {
        console.log(selectorFiles);
        if (selectorFiles) {
            Tesseract.recognize(selectorFiles[0])
                .then((result: any) => {
                    console.log(result);
                });

        }
    }

    render() {
        return (
            <input type="file" onChange={e => this.handleChange(e.target.files)} />
        );
    }
}
