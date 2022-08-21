import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Header from "../Header";



class Search extends Component {
    state = {
        images: '',
    };

    handleNameChange = e => {
        const { value } = e.currentTarget;
        const nomalizeString = value.toLowerCase();
        this.setState({ images: nomalizeString });
    };

    handleSubmitForm = e => {
        const { images } = this.state;
        e.preventDefault();

        if (images.trim() === '') {
            return toast.error('Enter the name of the photo!');
        };

        this.props.onSubmit(images);
        this.setState({ images: "" });
    }

    render() { 

        const { images } = this.state;

        return ( 
            <Header>
                <form className="searchForm" onSubmit={this.handleSubmitForm}>
                    <button type="submit" className="searchForm_button">
                        <span className="searchForm_button_labell">Search</span>
                    </button>

                    <input
                        className="searchForm_input"
                        type="text"
                        value={images}
                        onChange={this.handleNameChange}
                        name={this.props.guery}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </Header>
        )
    }
}


export default Search;
