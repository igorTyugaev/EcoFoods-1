import React, {Component} from 'react';
import Header from '../Header'
import axios from 'axios';

export default class ImagePicker extends Component {

    state = {
        selectedFile: null,
    }

    handleBack = () => {
        window.history.back();
    };

    fileChangedHandler = (event) => {
        const fileImage = event.target.files[0];
        let reader = new FileReader();
        let base64String;

        reader.onload = (function (theFile) {
            return function (e) {
                let binaryData = e.target.result;
                base64String = window.btoa(binaryData);
                document.getElementById('base64').value = base64String;
            };
        })(fileImage);
        reader.readAsBinaryString(fileImage);

        this.setState({
            selectedFile: base64String
        })
    }

    uploadHandler = () => {
        const formData = new FormData()
        formData.append(
            this.state.selectedFile.name
        )

        axios.post('my-domain.com/file-upload', formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        })
    }

    render() {
        return (
            <>
                <Header button={this.handleBack} title="ImagePicker"></Header>


                <p>" "</p>
                <p>" "</p>
                <button id='img-picker' className="my-products-add-page__add-button" onClick={this.uploadHandler}>
                    Загрузить
                </button>

                <textarea id="base64" rows="5"></textarea>
            </>
        );
    }

}
