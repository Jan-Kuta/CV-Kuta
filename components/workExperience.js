import { useSelector } from 'react-redux'

const Work = () => {
    const work = useSelector((state) => state.work)

    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Pracovní zkušenosti
            </h2>
            {work.map(w => (
                <div className="w3-container w3-border-top" key={w.id}>
                    <h5 className="w3-opacity"><b>{w.position} / {w.webpage ? <a href={w.webpage} target="_blank">{w.company}</a> : w.company}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"/>{w.startDate} - {w.endDate  || (<span
                        className="w3-tag w3-teal w3-round">Nyní</span>)}</h6>
                    <div dangerouslySetInnerHTML={{__html: w.notes}} />
                </div>
            ))}
        </div>
    )
}

export default Work
