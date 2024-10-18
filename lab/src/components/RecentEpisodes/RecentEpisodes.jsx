import '../RecentEpisodes/RecentEpisodes.css'
import Image from 'react-bootstrap/esm/Image'
import Button from '../../materialComponents/Button/Button';

export default function RecentEpisodes(){
    return(
        <div>
            <div className="scribbleDiv">
                <Image src="./images/Scribble1.png" alt="" className="scribbleImg"></Image>
            </div>
            <div className="sixthContainer" id="sixthContainer">
                <div>
                    <p className="Membership">Recent Episodes</p>
                    <p className="recentText">Available on your favorite platform</p>
                </div>
            <div className="cards1">
                <div className="card1 card135">
                <div className="subDiv">
                    <Image src="./images/cov1.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 6</p>
                    <p className="card1Name">Pandemic Becoming Endemic</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <Button color="#ffffff" text="covid-19"/>
                    <Button color="#ffffff" text="health"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <Image src="./images/cov2.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 5</p>
                    <p className="card1Name1">Tesla Autopilot Controversy</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <Button color="#ffffff" text="automation"/>
                    <Button color="#ffffff" text="tech"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <Image src="./images/cov3.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 4</p>
                    <p className="card1Name1">Women's Rights? Is it alright?</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <Button color="#ffffff" text="women’s rights"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
                <div className="card1 card135">
                <div className="subDiv">
                    <Image src="./images/cov4.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 3</p>
                    <p className="card1Name">How to Deal with Self–Confidence</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <Button color="#ffffff" text="self-esteem"/>
                    <Button color="#ffffff" text="health"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
                <div className="card1 card135">
                <div className="subDiv">
                    <Image src="./images/cov5.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 2</p>
                    <p className="card1Name">Type of Social Classes of People</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                    <Button color="#ffffff" text="social"/>
                    <Button color="#ffffff" text="wealth"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
                <div className="card1">
                <div className="subDiv">
                    <Image src="./images/cov6.png" alt="" className="cov"></Image>
                    <div className="card1TextDiv">
                    <p className="eps">Eps. 1</p>
                    <p className="card1Name1">Are you a Perplexed Mind Person?</p>
                    <hr className="HR1"></hr>
                    <p className="cardLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="hostedDiv">
                    <div>
                        
                    <Button color="#ffffff" text="mind-behaviour"/>
                    </div>
                    <div className="hosted">
                    <p>Hosted by: </p>
                    <Image src="./images/host.png" alt="" className="hostedImg"></Image>
                    </div>
                </div>
                </div>
            </div>
            
            <Button color="#000000" text="BROWSE ALL EPISODES"/>
            </div>
            <div className="scribbleDiv">
            <Image src="./images/Scribble1.png" alt="" className="scribbleImg"></Image>
            </div>
        </div>
    )
}