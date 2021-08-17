import React from 'react';
import './Blog.css'
import blogerImg1 from '../../images/Ellipse 1.png';
import blogerImg2 from '../../images/Ellipse 2.png';
import blogerImg3 from '../../images/Ellipse 3.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const Blog = () => {
    return (
        <div id="blog" className="Blog" >
            <h4 className="commonStyleH4 text-center mt-5">OUT BLOG</h4>
            <h1 className="text-center" >From Our Blog News</h1>
            <div className="row BlogContent">
                <div className="col-md-3 firstBlog">
                        <div className="BlogerInformation">
                            <img src={blogerImg1} alt="" />
                            <div className="blogerName">
                                <h5>Dr,Caudi</h5>
                                <p className="commonStylep">23 April 2019</p>
                            </div>
                        </div>
                        <h4>2 times to brush in a day can keep you healthy</h4>
                        <p className="commonStylep">It is a long established fact that by the readable content of a lot layout.The point</p>
                    
                </div>
                <div className="col-md-3 secondBlog">
                        <div className="BlogerInformation">
                            <img src={blogerImg2} alt="" />
                            <div className="blogerName">
                                <h5>Dr,John Mitchel</h5>
                                <p className="commonStylep">23 April 2019</p>
                            </div>
                        </div>
                        <h4>The tooth cancer is taking a challenge</h4>
                        <p className="commonStylep">It is a long established fact that by the readable content of a lot layout.The point</p>
                </div>
                <div className="col-md-3 thirdBlog">
                        <div className="BlogerInformation">
                            <img src={blogerImg3} alt="" />
                            <div className="blogerName">
                                <h5>Dr,Spaindel</h5>
                                <p className="commonStylep">23 April 2019</p>
                            </div>
                        </div>
                        <h4>The tooth cancer is taking a challenge</h4>
                        <p className="commonStylep">It is a long established fact that by the readable content of a lot layout.The point</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;