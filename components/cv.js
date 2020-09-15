import React from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import PersonalInfo from './personalInfo'
import Skills from './skills'
import Work from './workExperience'
import Education from './education'
import Hobbies from './hobbies'
import useSize  from '@react-hook/size'
import LanguageButton from './languageButton'
// const ToPdfButton = dynamic(() => import('./toPdfButton'), {ssr: false})

const CV = () => {
    const loading = useSelector((state) => state.loading)
    const target = React.useRef(null)
    const [width] = useSize(target)
    const matches = width < 800

    return (
        <>
            {process.browser && (
                <div className="w3-top w3-margin">
                    {/*<ToPdfButton />*/}
                    <LanguageButton />
                </div>
            )}

            {loading && 'LOADING...'}
            {!loading && (
                <div id="myCV" className="w3-content" style={{maxWidth: "1400px"}} ref={target}>
                    {/* The Grid */}
                    <div className="w3-row-padding" style={{display: "flex", flexFlow: matches? "column" : "row"}}>

                        {/* Left Column */}
                        <div className={matches ? "w3-margin-top" : "w3-margin"} style={{flexGrow: 1}}>
                            <div className="w3-white w3-text-grey w3-border" style={{height: "100%"}}>
                                <PersonalInfo />
                                <hr />
                                <Skills />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w3-margin-top" style={{flexGrow: 2, display: "flex", flexFlow: "column"}}>
                            <Work />
                            <Education />
                            <Hobbies />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CV

