import Textbox from '../../materialComponents/TextField/TextField'
import Button from '../../materialComponents/Button/Button'
import '../SendMessage/SendMessage.css'

export default function SendMessage(){
    return(
        <>
            <div className="sixthContainer AlternatesFont">
                <b className="getInTouch">Get in touch</b>
                <p className="sendMes">Send your message to us</p>
                <div className="formWithImg">
                <div className="formDiv">
                    <div>
                    <form action="">
                        <div className="inputGroups">
                        <div className="inputGroup">
                            <div>
                            <br/>
                            <p className="red">*</p>
                               <Textbox label="Full name"/>
                            </div>
                            <div>
                            <br/>
                            <p className="red">*</p>
                                <Textbox label="Email"/>
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div>
                            <br></br>
                            <p className="red">*</p>
                            <Textbox label="Phone"/>
                            </div>
                            <div>
                            <br></br>
                            <p className="red">*</p>
                            <Textbox label="Subject"/>
                            </div>
                        </div>
                        </div>
                        <div className="messageDiv">
                        
                        <br/>
                        <p className="red">*</p>
                        <Textbox label="Message"/>
                        </div>
                    </form>
                    </div>
                    <div className="sendMessageLine">
                    <div className="req">
                        <p className="red">*</p>
                        <p>required</p>
                    </div>
                    <Button color="#000000" text="SEND MESSAGE"/>
                    <div className="viverra">
                        <p>Viverra at port accumsan.</p>
                        <p> Orci non</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}