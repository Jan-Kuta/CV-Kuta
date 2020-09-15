import { useSelector } from 'react-redux'

const Skills = () => {
    const skills = useSelector((state) => state.skills)
    const isEnglish = useSelector((state) => state.isEnglish)

    return (
        <div className="w3-container w3-padding-16">
            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>{isEnglish ? 'Skills' : 'Dovednosti'}</b></p>
            {skills.map(skill => (
                <div key={skill.id}>
                    <p>{skill.title}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal"
                             style={{width: `${skill.level}%`}}>{skill.level}%
                        </div>
                    </div>
                </ div>
            ))
            }
        </div>
    )
}

export default Skills
