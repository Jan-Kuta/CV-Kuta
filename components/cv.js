import PersonalInfo from './personalInfo'
import Skills from './skills'

const CV = () => {
    return (
        <div className="w3-content w3-margin-top" style={{maxWidth: "1400px"}} >

            {/* The Grid */}
            <div className="w3-row-padding">

                {/* Left Column */}
                <div class="w3-third">
                    <div className="w3-white w3-text-grey w3-card-4 ">
                        <PersonalInfo />
                        <hr />
                        <Skills />
                    </div>
                </div>

                {/* Right Column */}
                <div className="w3-twothird">
                    Work
                    Education
                    Hobbies
                </div>
            </div>
        </div>
    )
}

export default CV

