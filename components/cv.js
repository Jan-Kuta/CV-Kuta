import PersonalInfo from './personalInfo'
import Skills from './skills'
import Work from './workExperience'
import Education from './education';
import Hobbies from './hobbies';
import { useMediaQuery } from "@react-hook/media-query";

const CV = () => {
    const matches = useMediaQuery('only screen and (min-width: 600px)')

    return (
        <div className="w3-content" style={{maxWidth: "1400px"}} >

            {/* The Grid */}
            <div className="w3-row-padding" style={{display: "flex", flexFlow: matches ? "row" : "column"}}>

                {/* Left Column */}
                <div className={matches ? "w3-margin" : "w3-margin-top"} style={{flexGrow: 1}}>
                    <div className="w3-white w3-text-grey w3-card" style={{height: "100%"}}>
                        <PersonalInfo />
                        <hr />
                        <Skills />
                    </div>
                </div>

                {/* Right Column */}
                <div className="w3-margin-top" style={{flexGrow: 2}}>
                    <Work />
                    <Education />
                    <Hobbies />
                </div>
            </div>
        </div>
    )
}

export default CV

