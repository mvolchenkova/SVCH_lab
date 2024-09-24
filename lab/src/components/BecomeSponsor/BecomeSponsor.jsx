import { Component } from 'react';
import './BecomeSponsor.css'

class BecomeSponsor extends Component{
    render(){
      const {name} = this.props;

        return(
            <div className="seventhContainer" id="seventhContainer">
      <div>
        <p className="listeners">{name}</p>
        <p className="platform">Get exclusive episodes, merch and more</p>
      </div>
      <div className="allSponsorCards">
        <div className="sponsorCards">
          <div className="spCard">
            <div>
              <p className="sponsorName">Member</p>
              <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="subDiv">
              <button className="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p className="price">$9,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div className="spDescr">
            <p>What is included:</p>
            <ul>
              <li>Exclusive Content</li>
              <li>5% Discount on Merch</li>
              <li>Join the Community</li>
              <li>Livestreaming Access</li>
              <li>Free tickets to Events</li>
            </ul>
          </div>
        </div>
        <div className="sponsorCards">
          <div className="spCard spFam">
            <div>
              <div className="mostPop">
                <p className="sponsorName">Family</p>
                <p className="mostPopular">MOST POPULAR</p>
              </div>
              <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="subDiv">
              <button className="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p className="price">$14,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div className="spDescr spFam">
            <p>What is included:</p>
            <ul>
              <li>Everything in Tier 1</li>
              <li>Free tickets to Events</li>
              <li>Limited Edition Merch</li>
              <li>Promote your Product</li>
              <li>Request Topic</li>
            </ul>
          </div>
        </div>
        <div className="sponsorCards">
          <div className="spCard">
            <div>
              <p className="sponsorName">Official</p>
              <p className="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="subDiv">
              <button className="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p className="price">$29,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div className="spDescr">
            <p>What is included:</p>
            <ul>
              <li>Everything in Tier 2</li>
              <li>Exclusive Badge on Livestreaming</li>
              <li>Become an Official Sponsor</li>
              <li>Early Access to All Episodes</li>
              <li>Free Stikers and Merch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        )
    }
}
export default BecomeSponsor;