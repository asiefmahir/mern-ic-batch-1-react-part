
import InterestSection from "./InterestSection";
import PersonalInfo from "./PersonalInfo";
import SkillSection from "./SkillSection";
import SocialSection from "./SocialSection";


// {sectionOne, sectionTwo, sectionThree, sectionFour}
const BioData = (props) => {

  
  return (
    <div className='bio-data'>
        {/* {sectionOne}
        {sectionTwo}
        {sectionThree}
        {sectionFour} */}
        <PersonalInfo 
          name = {props.bioDataInfo.name}
          dateOfBirth = {props.bioDataInfo.dateOfBirth}
          address = {props.bioDataInfo.address}
        />
        <SkillSection 
            name = {props.bioDataInfo.name}
            skills = {props.bioDataInfo.skills}
        />
        <InterestSection 
          interests = {props.bioDataInfo.interests}
        />
        <SocialSection 
          socialLinks = {props.bioDataInfo.socialLinks}
        />

    </div>
  )
}

export default BioData

// App -> BioData -> Personalnfo

// function demo (anotherFunc) {
//     anotherFunc()
// }

// function demo2 (anotherFuncResult) {
//     return anotherFunc
// }

// demo2(add(10))