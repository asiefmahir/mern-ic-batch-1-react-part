import "./App.css";
import BioData from "./components/BioData";
import InterestSection from "./components/InterestSection";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";
import SocialSection from "./components/SocialSection";

const persons = [
	{
		name: "Mahir Asief",
		dateOfBirth: "10-08-1997",
		address: "Farmgate, Dhaka",
		skills: ["js", "react", "redux"],
		interests: ["Watching Game", "Playing Card game4"],
		socialLinks: [
			{
				platform: "FB",
				profileLink: "#",
			},
			{
				platform: "LinkedIn",
				profileLink: "#",
			},
		],
	},

	{
		name: "Fahmida Fahmi",
		dateOfBirth: "12-12-1999",
		address: "Dhanmondi, Dhaka",
		skills: ["js", "react", "redux", "WP"],
		interests: ["Playing Card game4"],
		socialLinks: [
			{
				platform: "FB",
				profileLink: "#",
			},
			{
				platform: "LinkedIn",
				profileLink: "#",
			},
			{
				platform: "Twitter",
				profileLink: "#",
			},
		],
	},
	{
		name: "Afser Vai",
		dateOfBirth: "12-12-1999",
		address: "Dhanmondi, Dhaka",
		skills: ["js", "react", "redux", "WP"],
		interests: ["Playing Card game4"],
		socialLinks: [
			{
				platform: "FB",
				profileLink: "#",
			},
			{
				platform: "LinkedIn",
				profileLink: "#",
			},
			{
				platform: "Twitter",
				profileLink: "#",
			},
		],
	},
  {
		name: "Mark Zukc",
		dateOfBirth: "12-12-1999",
		address: "Dhanmondi, Dhaka",
		skills: ["js", "react", "redux", "WP"],
		interests: ["Playing Card game4"],
		socialLinks: [
			{
				platform: "FB",
				profileLink: "#",
			},
			{
				platform: "LinkedIn",
				profileLink: "#",
			},
			{
				platform: "Twitter",
				profileLink: "#",
			},
		],
	},

];

function App() {
	return (
		<div className="App">
			{/* {persons.map((item) => (
				<BioData
					key={item.name}
					sectionOne={
						<PersonalInfo
							name={item.name}
							dateOfBirth={item.dateOfBirth}
							address={item.address}
						/>            
					}

          sectionTwo={
            <SkillSection
                name = {item.name}
                skills = {item.skills}
            />
          }

          sectionThree={
            <InterestSection 
                interests = {item.interests}
            />
          }

          sectionFour={
            <SocialSection 
                socialLinks = {item.socialLinks}
            />
          }
				/>
			))} */}

			{persons.map(item => (
          <BioData key = {item.name} bioDataInfo = {item} />
      ))}

			{/* <SkillSection 
            name = 'Mahir Asief'
            skills = {['Js', 'React', 'Redux']}
            demo = {{a : 10}}
        />
        <hr />
         <SkillSection 
            name = 'Arif Vai'
            skills = {['Js', 'React', 'Redux', 'WP']}
         />
        <hr />
        <SkillSection 
            name = "Nazmul Vai"
            skills = {['Js', 'React', 'Redux', 'node', 'Wp']}
        /> */}
		</div>
	);
}

/**
 * TODO: 1) Personal Info
 * TODO: 2) Skill Section
 * TODO: 3) Interests Section
 * TODO: 4) Social Section
 */
// SkillSection()

/**
 * 1) Component is a function
 * 2) It should return "something"
 * 3) That "something" should be some html-ish code (jsx)
 */

export default App;
