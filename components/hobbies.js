import { useSelector } from 'react-redux'

const Hobbies = () => {
    const hobbies = useSelector((state) => state.hobbies)

    return (
        <div className="w3-container w3-border w3-white w3-margin-bottom" style={{ flexGrow: 2 }}>
            <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-futbol-o fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Koníčky
            </h2>
            <p dangerouslySetInnerHTML={{__html: hobbies}} />
        </div>
    )
}

export default Hobbies
