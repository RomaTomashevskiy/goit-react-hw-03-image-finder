import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import * as Scroll from 'react-scroll';
import Container from "./Container";
import Searchbar from "./SearchImages/Searchbar";
import ImagesGallery from "./SearchImages/ImagesGallery";
import Button from "./SearchImages/Button";
import Modal from "./SearchImages/Modal";
import SearchReminder from "./SearchImages/SearchReminder";

import Error from "./SearchImages/ErrorMessage/Error";
import Loading from "./SearchImages/loading/loading";


const BASE_URL = 'https://pixabay.com/api/?';
const params = new URLSearchParams({
  key: '27709698-8702f3c03ebf411985e528a26',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});



class App extends Component{
  state = {
    images: [],
    guery: '',
    tag: '',
    page: 1,
    showModal: false,
    largeImage: '',
    status: 'idle'
  };

    onSubmit = guery => {
        this.setState({ guery, page: 1, images: [] });
    };

      async componentDidUpdate(_, prevState){
        const { guery, page } = this.state;

        if (guery !== prevState.guery || page !== prevState.page) { 
           try {
        this.setState({status: 'pending'});

        const response = await fetch(BASE_URL + `q=${guery}&page=${page}&` + params);
        const valueRequest = await response.json();
        const listImages = valueRequest.hits.map(({id, tags, webformatURL,  largeImageURL } ) => ({id, tags, webformatURL, largeImageURL}));
      
          if(listImages.length === 0){
            this.setState({ status: 'rejected' });
          } else {
            this.setState((state) => ({ images: [...state.images, ...listImages], status: 'resolve' }));
             };
        } catch (error) {
          alert(error);
          }
        };      
      };

    lodarMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
        if (this.state.status === 'resolve') {
      this.scrollPage();
    }
  }
  
  onCloseModal = () => {
    this.setState({showModal : !this.state.showModal ,  largeImage: ''})
  }

  largeImageURL = () => {
    this.setState({largeImageUrl : this.state.images.largeImageURL})
  }


  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  
  }

    scrollPage = () => {
    const element = document.querySelector('#item');
    const height = element.offsetHeight;
    Scroll.animateScroll.scrollMore(height * 4, {
      smooth: 'linear',
    });
  }



    render() {
      const { images, guery, showModal, largeImage  , status} = this.state;
      

        return (
          <Container>
            <Searchbar onSubmit={this.onSubmit} guery={guery} />    

            {status === 'resolve' &&
              <div> 
           <ImagesGallery images={images} onImageClick={this.handleGalleryItem}/>
              {showModal &&
                <Modal onCloseModal={this.onCloseModal}>
              <img src={largeImage} alt="" />
              </Modal>}
              </div>}
            
            {status === 'idle' && <SearchReminder/>} 
            {status === 'resolve' && <Button lodarMore={this.lodarMore} />};
            {status === 'rejected' && <Error guery={guery} />}
            {status === 'pending' && <Loading />}
            <ToastContainer autoClose={2000} />
           </Container>
        )
    }
};



export default App;
