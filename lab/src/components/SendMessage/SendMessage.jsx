import Textbox from '../../materialComponents/TextField/TextField'
import Button from '../../materialComponents/Button/Button'
import '../SendMessage/SendMessage.css'
import { useTranslation } from 'react-i18next';

export default function SendMessage(){
    const {t} = useTranslation();
    return(
        <>
            <div className="sixthContainer AlternatesFont">
                <b className="getInTouch">{t("Get in touch")}</b>
                <p className="sendMes">{t("Send your message to us")}</p>
                <div className="formWithImg">
                <div className="formDiv">
                    <div>
                    <form action="">
                        <div className="inputGroups">
                        <div className="inputGroup">
                            <div>
                            <br/>
                            <p className="red">*</p>
                               <Textbox label={t("Full name")}/>
                            </div>
                            <div>
                            <br/>
                            <p className="red">*</p>
                                <Textbox label={t("Email")}/>
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div>
                            <br></br>
                            <p className="red">*</p>
                            <Textbox label={t("Phone")}/>
                            </div>
                            <div>
                            <br></br>
                            <p className="red">*</p>
                            <Textbox label={t("Subject")}/>
                            </div>
                        </div>
                        </div>
                        <div className="messageDiv">
                        
                        <br/>
                        <p className="red">*</p>
                        <Textbox label={t("Message")}/>
                        </div>
                    </form>
                    </div>
                    <div className="sendMessageLine">
                    <div className="req">
                        <p className="red">*</p>
                        <p>{t("required")}</p>
                    </div>
                    <Button color="#000000" text={t("SEND MESSAGE")}/>
                    <div className="viverra">
                        <p>{t("Viverra at port accumsan.")}</p>
                        <p>{t(" Orci non")}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}