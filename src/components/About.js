import'./About.css'
import summery from "../images/summery.png"
import def from "../images/Define.jpg"
import s0 from "../images/stage0.png"
import s1 from "../images/stage1.png"
import s2 from "../images/stage2.png"
import s3 from "../images/stage3.png"
import s4 from "../images/stage4.png"
export default function About(){

    return(

        <>
        <div className='font'>
        <br></br>
        <h2>First : What the meaning of Diabetic Retinopathy ? <img src={def} className="imag1" /> </h2>
        
        <h4>Diabetic retinopathy is a complication of diabetes, caused by high blood sugar levels damaging 
        <br></br>the back of the eye (retina). It can cause blindness if left undiagnosed and untreated.However, 
        <br></br>it usually takes several years for diabetic retinopathy to reach a stage where it could threaten
        <br></br> your sight. </h4>
        
        
        <br></br> <br></br>
        
        
        <h2> What causes diabetic retinopathy ? </h2>
        
        <h4>Glucose, or blood sugar, is a main source of energy yet too much circulating in the blood can 
            <br></br> be harmful to the body.</h4>
        <h4>Typically, the pancreas releases the hormone insulin, which helps cells absorb glucose for energy.
             <br></br> In the case of diabetes, though, the body doesn’t make enough insulin or doesn’t use it properly. 
             <br></br> This causes glucose to accumulate in the blood.</h4>
        <h4>Consistent levels of high blood sugar can affect different parts of the body, including the eyes.</h4>
        <h4>Diabetic retinopathy doesn’t only weaken or damage the blood vessels in the eye. It can also cause 
            <br></br> the development of new abnormal blood vessels in the retina.</h4>
        
            <br></br> <br></br>  
        
        
        <h2>What are stages of diabetic retinopathy ? </h2>
        <h4>Diabetic retinopathy is a progressive eye disease classified by two types and four stages.</h4>
        <h4>The two types are nonproliferative and proliferative. Nonproliferative refers to early stages
            <br></br> of the disease, while proliferative is an advanced form of the disease.</h4>
            <br></br> 
            <br></br> 
            <img src={summery} className="imag" />
            <br></br> 
            <br></br> 

            <h2>Stage 0: No Disease Visible </h2>
            <h4>This means that the user's X-Ray is good. </h4>
            <img src={s0} className="center" />

            <br></br>


        <h2>Stage 1: Mild nonproliferative diabetic retinopathy  </h2>
        <h4>This is the earliest stage of diabetic retinopathy, characterized by tiny areas of swelling 
            <br></br>in the blood vessels of the retina. These areas of swelling are known as micro aneurysms. </h4>
        <h4>Small amounts of fluid can leak into the retina at the stage, triggering swelling 
            <br></br> of the macula. This is an area near the center of the retina.</h4>
        
            <img src={s1} className="center" />
            <br></br>

         <h2>Stage 2: Moderate nonproliferative diabetic retinopathy </h2>

         <h4>Increased swelling of tiny blood vessels starts to interfere with blood flow to the retina,
            <br></br> preventing proper nourishment. This causes an accumulation of blood and other fluids
           <br></br> in the macula.</h4>
           <img src={s2} className="center" />
           <br></br>
           
           <h2>Stage 3: Severe nonproliferative diabetic retinopathy </h2>

           <h4>A larger section of blood vessels in the retina become blocked, causing a significant decrease
            <br></br>in blood flow to this area. At this point, the body receives signals to start growing new blood
           <br></br> vessels in the retina.</h4>
           <img src={s3} className="center" />
           <br></br>

           <h2>Stage 4: Proliferative diabetic retinopathy </h2>

           <h4>This is an advanced stage of the disease, in which new blood vessels form in the retina.Since 
            <br></br>these blood vessels are often fragile, there’s a higher risk of fluid leakage. This triggers
           <br></br> different vision problems such as blurriness, reduced field of vision, and even blindness.</h4>
           <img src={s4} className="center" />
           <br></br>
       
           
           <h5 className='special'>For More Information Click
             <a href='https://www.healthline.com/health/diabetes/diabetic-retinopathy-stages#stages'> Here</a>
            </h5>

           

        
            </div>
        </>
        
        );


}