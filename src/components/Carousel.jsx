import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class BootstrapCarousel extends Component {

    render() {

        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div class="col-sm-12 btn btn-warning">
                        </div>
                    </div>
                </div>
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "300px" }} >
                            <img style={{ 'height': "300px" }} className="d-block w-100" src={'assets/carousel-img/img-1.jpg'} />
                            <Carousel.Caption>
                                <h3>First Demo </h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ 'height': "300px" }}>
                            <img style={{ 'height': "300px" }} className="d-block w-100" src={'assets/carousel-img/img-2.JPG'} />
                            <Carousel.Caption>
                                <h3>Second Demo</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{ 'height': "300px" }}>
                            <img style={{ 'height': "300px" }} className="d-block w-100" src={'assets/carousel-img/img3.png'} />
                            <Carousel.Caption>
                                <h3>Third Demo</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        )
    }
}

export default BootstrapCarousel;