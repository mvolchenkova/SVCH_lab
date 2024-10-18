import './SupportBy.css';
import Image from 'react-bootstrap/Image';

export default function SupportBy(){
        return(
            <div className="suppCont">
              <hr className="HR"></hr>
              <div className="supportedBy">
                <p className="supportedText AlternatesFont">Supported by:</p>
                <Image src="./images/spotify.png" alt=""/>
                <Image src="./images/googlePodcasts.png" alt=""/>
                <Image src="./images/youtube.png" alt=""/>
              </div>
              <hr className="HR"></hr>
            </div>
        )
    }