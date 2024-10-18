import Button from '../../materialComponents/Button/Button'

export default function DownloadApp(){
    return(
        <>
            <div className="seventhContainer AlternatesFont">
                <img src="../images/phone1.png" alt="" className="phone1" />
                <p className="beta">BETA</p>
                <p className="available">Available now Pod of Cast App</p>
                <p className="justLaunched">We just launched our podcast app!</p>
                <Button className="AlternatesFont browseButton" text="DOWNLOAD NOW" color="#000000" />
                <p className="contentAv">Content also available on:</p>
                <div className="logos">
                <img src="../images/google podcast.png" alt="" />
                <img src="../images/spotify1.png" alt="" />
                <img src="../images/youtube1.png" alt="" />
                </div>
            </div>
        </>
    )
}