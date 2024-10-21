import Button from '../../materialComponents/Button/Button'
import '../SubComp/SubComp.css'
import SelectPlan from '../../materialComponents/SelectPlan/SelectPlan'


export default function SubComp(){
    return(
        <>
            <div class="firstContainer AlternatesFont">
                <img src="../images/Hero Shape Swirl.svg" alt="" class="swirlImg" />
                <div class="firstText">
                    <div>
                        <p class="largeText">About</p>
                        <p class="largeText orangeText">Pod of Cast</p>
                    </div>
                    <p class="miniText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
                </div>
                <img src="../images/Group 48095792.png" alt="" class="starImg" />
                <SelectPlan />
                <Button text="SUBSCRIBE" color="#000000"/>
            </div>
        </>
    )
}