import { useSelector } from 'react-redux'

const PersonalInfo = () => {
    const personalInfo = useSelector((state) => state.personalInfo)
    const { firstname, lastname, image, role, email, phone, address} = personalInfo
    return (
        <>
            <div className="w3-display-container">
                <img src={image} style={{width: '100%'}} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2 className="w3-text-white">{`${firstname} ${lastname}`}</h2>
                </div>
            </div>

            <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{role}</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{address}</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{email}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{phone}</p>
            </div>
        </>
    )
}

export default PersonalInfo
