import React from 'react';
import './Testimonial.css'
import clientImg1 from '../../images/Ellipse 1.png'
import clientImg2 from '../../images/Ellipse 2.png'
import clientImg3 from '../../images/Ellipse 3.png'

const Testimonial = () => {
    return (
        <div className="Testimonial">
            <h4 className="mt-5 pt-5 text-center mb-4 commonStyleH4">TESTIMONIAL</h4>
            <h1 className="mb-5 text-center pb-4">What's Our Patients Says</h1>
            <div className="row TestimonialBlog">
                <div className="col-md-3 firstTestimonial">
                    <p className="mb-5 pb-3 commonStylep">It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using 'Content here,content</p>
                    <div className="clientInformation">
                        <img src={clientImg1} alt=""/>
                        <div className="name">
                            <h4 className="commonStyleH4">Winson Herry</h4>
                            <h6>California</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 secondTestimonial">
                    <p className="mb-5 pb-3 commonStylep">It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using 'Content here,content</p>
                    <div className="clientInformation">
                        <img src={clientImg2} alt=""/>
                        <div className="name">
                            <h4 className="commonStyleH4">Winson Herry</h4>
                            <h6>California</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 thirdTestimonial">
                    <p className="mb-5 pb-3 commonStylep">It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using 'Content here,content</p>
                    <div className="clientInformation">
                        <img src={clientImg3} alt=""/>
                        <div className="name">
                            <h4 className="commonStyleH4">Winson Herry</h4>
                            <h6>California</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;