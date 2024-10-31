import Button from '../../materialComponents/Button/Button'
import { useTranslation } from 'react-i18next';

export default function DownloadApp(){
    const {t} = useTranslation();
    return(
        <>
            <div className="seventhContainer AlternatesFont">
                <img src="../images/phone1.png" alt="" className="phone1" />
                <p className="beta">BETA</p>
                <p className="available">{t("Available now Pod of Cast App")}</p>
                <p className="justLaunched">{t("We just launched our podcast app!")}</p>
                    <Button className="AlternatesFont browseButton" text={t("DOWNLOAD NOW")} color="#000000" />
                <p className="contentAv">{t("Content also available on:")}</p>
                <div className="logos">
                <img src="../images/google podcast.png" alt="" />
                <img src="../images/spotify1.png" alt="" />
                <img src="../images/youtube1.png" alt="" />
                </div>
            </div>
        </>
    )
}