import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    {
        src: "https://i.imgur.com/XjJGld9.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/hZmHopo.png",
        width: 1,
        height: 1
    },
    {
        src: "https://i.imgur.com/aV4nM3B.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/POU4jv1.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/qP4BmdC.jpg",
        width: 3,
        height: 1
    },
    {
        src: "https://i.imgur.com/h2vett9.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/fpj52yn.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/FvrLwMT.jpg",
        width: 3,
        height: 4
    },

    {
        src: "https://i.imgur.com/vn17zcx.jpg",
        width: 4,
        height: 3
    },
    {
        src: "https://i.imgur.com/y0cWmYf.png",
        width: 1,
        height: 1
    },
    {
        src: "https://i.imgur.com/3Ssh2I5.png",
        width: 1,
        height: 1
    },
    {
        src: "https://i.imgur.com/4mF5bwB.jpg",
        width: 1,
        height: 1
    },

];

class PortfolioGallery extends Component{
    constructor(props) {
        super(props);
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return(
            <div className={'photography-gallery-container'}>
                <Gallery photos={photos} onClick={this.openLightbox} />

                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        );
    }
}

export default PortfolioGallery;