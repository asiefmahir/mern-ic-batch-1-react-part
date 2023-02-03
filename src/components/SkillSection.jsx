// const props = {
//     name: 'Arif Vai',
//     skills: ['Js', "react", 'redux']
// }

const SkillSection = (props) => {
    // props
    console.log(props, 'SkillSection props');
    return (
        <div className="skill-section">
            <h2>
                Skills of : {props.name}
            </h2>
            <ul>
                {props.skills.map((skill) => (
                    <li key = {skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}


// function add (a, b) {
//     return a + b
// }

// add(10, 20)

// add(100, 200)

export default SkillSection