import { Component } from 'react';
import '../style/index.css'
import '../style/adaptive.css'

class BecomeSponsor extends Component{
    render(){
        return(
            <div class="seventhContainer" id="seventhContainer">
      <div>
        <p class="listeners">Become our sponsor</p>
        <p class="platform">Get exclusive episodes, merch and more</p>
      </div>
      <div class="allSponsorCards">
        <div class="sponsorCards">
          <div class="spCard">
            <div>
              <p class="sponsorName">Member</p>
              <p class="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div class="subDiv">
              <button class="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p class="price">$9,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div class="spDescr">
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
        <div class="sponsorCards">
          <div class="spCard spFam">
            <div>
              <div class="mostPop">
                <p class="sponsorName">Family</p>
                <p class="mostPopular">MOST POPULAR</p>
              </div>
              <p class="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div class="subDiv">
              <button class="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p class="price">$14,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div class="spDescr spFam">
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
        <div class="sponsorCards">
          <div class="spCard">
            <div>
              <p class="sponsorName">Official</p>
              <p class="spLor">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            </div>
            <div class="subDiv">
              <button class="AlternatesFont subscribeButton2">SUBSCRIBE</button>
              <div>
                <p class="price">$29,99</p>
                <p>/month</p>
              </div>
            </div>
          </div>
          <div class="spDescr">
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