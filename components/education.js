import { useSelector } from 'react-redux'

const Education = () => {
    const education = useSelector((state) => state.education)

    return (
        <div className="w3-container w3-border w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Studium
            </h2>
            {education.map(e => (
                <div className="w3-container w3-border-top" key={e.id}>
                    <h5 className="w3-opacity"><b>{e.schoolName} / {e.faculty}</b> ({`${e.major}${e.degree ? ` - ${e.degree}` : ''}`})</h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"/>{e.startDate} - {e.endDate  || (<span
                        className="w3-tag w3-teal w3-round">Nyní</span>)}</h6>
                    {e.thesis && <p>Závěrečná práce: {e.thesis}</p>}
                </div>
            ))}
        </div>
    )
}

export default Education
