
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './menu';
import eve from './img/eve.png';
import walk from './img/walk.jpg';
import aniw from './img/aniw.png';
import Footer from './Footer';
export default function Event() {
    return(
        <div >
            <Menu />
            <div className="specia">
            <h2 className="d-flex justify-content-center" style={{fontSize: "50px"}}>Events</h2>
            </div>
            <section className="my-5">
                <div className="row">
                    <div className="col-md-6">
                    <img className="img-fluid rounded" src={eve} alt="event" style={{width:"600px", height:"300px"}} />
                    </div>
                    <div className="col-md-6">
                        <h2>Environmental Exhibition and Education</h2>
                        <p>
                        The national park is often preserved and maintained to 
                        protect the natural landscape, wildlife, and biodiversity.
                        There are many events and activities that regularly take place in national
                        parks around the world to educate, create awareness and promote the environmental protection.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Natural discovery journey</h2>

                    <p>The journey to explore nature is usually trips or travel programs organized so that participants have 
                    the opportunity to explore, learn and experience the beauty, diversity and magic of nature.
                     These journeys often include activities such as:
                     <br/>
                     1. Go hiking or climbing
                     <br/>
                     2. Unique terrain exploration
                     <br/>
                     3. Observe nature and birds
                     <br/>
                     4. Camping
                     <br/>
                     5. Safari or wildlife exploration
                     </p>
                </div>
                <div className="col-md-6">
                <img className="img-fluid rounded" src={walk} alt="event"  />
                </div>
            </div>
            </section>

            <section className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src={aniw} alt="event" />
                    </div>

                    <div className="col-md-6">
                        <h2>Animals Week</h2>
                        <p>
                            Animals week is an event or program organized to honor, raise awareness and public education about 
                            the animal world. This week may include various activities and events, depending on 
                            the specific organization and purpose of the event.
                        </p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );

} 