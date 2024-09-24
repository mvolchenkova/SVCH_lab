import { Component } from 'react';
import './SupportBy.css';
import spotify from '../../images/spotify.png';
import googlePodcasts from '../../images/googlePodcasts.png';
import youtube from '../../images/youtube.png';


class SupportBy extends Component{
    render(){
        return(
            <div className="suppCont">
        <hr className="HR"></hr>
        <div className="supportedBy">
          <p className="supportedText AlternatesFont">Supported by:</p>
          <img src={spotify} alt=""/>
          <img src={googlePodcasts} alt=""/>
          <img src={youtube} alt=""/>
        </div>
        <hr className="HR"></hr>
      </div>
        )
    }
}
export default SupportBy;