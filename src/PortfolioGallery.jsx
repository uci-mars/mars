import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    {
        src: "https://i.imgur.com/r7nyPnE.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/5YgYGfJ.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/txCJIRX.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/OCY23jJ.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/JM12wjh.jpg",
        width: 4,
        height: 3
    },
    {
        src: "https://i.imgur.com/kn3VNx5.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/9InkUpA.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/z8XGO3v.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/4b6K4hC.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/9ga05Qb.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/hdP3tWF.jpg",
        width: 2,
        height: 1
    },
    {
        src: "https://i.imgur.com/64uYi3a.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/CvRROfj.jpg",
        width: 1,
        height: 1
    },
    {
        src: "https://i.imgur.com/TJ0Sg4h.jpg",
        width: 3,
        height: 4
    },
    {
        src: "https://i.imgur.com/6hxaKas.jpg",
        width: 4,
        height: 3
    },
    {
        src: "https://i.imgur.com/yLRdos5.jpg",
        width: 3,
        height: 4
    }
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