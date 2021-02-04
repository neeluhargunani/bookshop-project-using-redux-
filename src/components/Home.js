import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Card} from 'react-bootstrap';

const Home = () => {
    
    return (
        <div>
        
      
        <Banner/>
        <div className="container">
    
            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 text-center py-3 mt-4">
            <h3> THE BOOK GUIDE ONLINE BOOK STORE</h3>
            <span class="brder"></span>
            </div>
     
            <div className="row mt-5">
                
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-4 py-3">
                <Card>
                <Link to="/educationalbook"><img src="/images/educational.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-4 py-3">
                <Card>
                <Link to="/detectivebook"><img src="/images/detectiveandmystry.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-4 py-3">
                <Card>
                <Link to="/actionbook"><img src="/images/action.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-4 py-3">
                <Card>
                <Link to="/horrorbook"><img src="/images/horror-story.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-4 py-3">
                <Card>
                <Link to="/poetrybook"><img src="/images/poetry.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
               
                <div className="col-md-6 col-xl-4 col-sm-12 col-lg-4 mt-3 py-3">
                <Card>
                <Link to="/comicbook"><img src="/images/comic.jpg" alt="" className="img-thumbnail"/></Link>
                </Card>
           
                </div>
            </div>
        </div>
        <div class="copyrights mt-5">
  <h6 className="text-white">neelam_hargunani@persistent.com <span className="ml-3 text-info">9503836763</span> </h6>
</div>
        </div>
    );
}



export default Home;
