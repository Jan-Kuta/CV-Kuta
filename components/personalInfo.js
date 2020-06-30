import { useSelector } from 'react-redux'

const PersonalInfo = () => {
    const personalInfo = useSelector((state) => state.personalInfo)
    const { firstname, lastname, image, infoList} = personalInfo
    return (
        <>
            <div className="w3-display-container">
                <img src={image} style={{width: '100%'}} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2 className="w3-text-white">{`${firstname} ${lastname}`}</h2>
                </div>
            </div>

            <div className="w3-container">
                {infoList.map(info => (
                    <p><i className={`fa fa-${info.icon} fa-fw w3-margin-right w3-large w3-text-teal`}></i>{info.href ? <a href={info.href} target="_blank">{info.title}</a> : info.title}</p>
                ))}
            </div>
        </>
    )
}

export default PersonalInfo
