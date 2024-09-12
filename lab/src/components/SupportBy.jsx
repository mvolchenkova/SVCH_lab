import { Component } from 'react';
import '../style/index.css'
import '../style/adaptive.css'
import spotify from '../images/spotify.png'
import googlePodcasts from '../images/googlePodcasts.png'
import youtube from '../images/youtube.png'


class SupportBy extends Component{
    render(){
        return(
            <div class="suppCont">
        <hr class="HR"></hr>
        <div class="supportedBy">
          <p class="supportedText AlternatesFont">Supported by:</p>
          <img src={spotify} alt=""/>
          <img src={googlePodcasts} alt=""/>
          <img src={youtube} alt=""/>
        </div>
        <hr class="HR"></hr>
      </div>
        )
    }
}
export default SupportBy;