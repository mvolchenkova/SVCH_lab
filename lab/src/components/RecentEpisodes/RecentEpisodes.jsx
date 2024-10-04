import scribble1 from '../../images/Scribble1.png'
import cov1 from '../../images/cov1.png'
import host from '../../images/host.png'
import cov2 from '../../images/cov2.png'
import cov5 from '../../images/cov5.png'
import cov3 from '../../images/cov3.png'
import cov4 from '../../images/cov4.png'
import cov6 from '../../images/cov6.png'
import '../RecentEpisodes/RecentEpisodes.css'

export default function RecentEpisodes(){
    return(
        <div>
            <div className="scribbleDiv">
                <img src={scribble1} alt="" className="scribbleImg"></img>
            </div>
            <div className="sixthContainer" id="sixthContainer">
                <div>
                    <p className="Membership">Recent Episodes</p>
                    <p className="recentText">Available on your favorite platform</p>
                </div>
            <div className="cards1">
                <div className="card1 card135">
                <div className="subDiv">
                    <img src={cov1} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 6</p>
                    <p className="card1Name">Pandemic Becoming Endemic</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">covid-19</button>
                    <button className="AlternatesFont">health</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <img src={cov2} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 5</p>
                    <p className="card1Name1">Tesla Autopilot Controversy</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">automation</button>
                    <button className="AlternatesFont">tech</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <img src={cov3} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 4</p>
                    <p className="card1Name1">Women's Rights? Is it alright?</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">women’s rights</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
                <div className="card1 card135">
                <div className="subDiv">
                    <img src={cov4} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 3</p>
                    <p className="card1Name">How to Deal with Self–Confidence</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">self-esteem</button>
                    <button className="AlternatesFont">health</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
                <div className="card1 card135">
                <div className="subDiv">
                    <img src={cov5} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 2</p>
                    <p className="card1Name">Type of Social Classes of People</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">social className</button>
                    <button className="AlternatesFont">wealth</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <img src={cov6} alt="" className="cov"></img>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 1</p>
                    <p className="card1Name1">Are you a Perplexed Mind Person?</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <button className="AlternatesFont">mind-behaviour</button>
                    <button className="AlternatesFont">health</button>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <img src={host} alt="" className="hostedImg"></img>
                    </div>
                </div>
                </div>
            </div>
            <button className="browseButton AlternatesFont">BROWSE ALL EPISODES</button>
            </div>
            <div className="scribbleDiv">
            <img src={scribble1} alt="" className="scribbleImg"></img>
            </div>
        </div>
    )
}