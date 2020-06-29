import { useSelector } from 'react-redux'

const CV = () => {
    const cv = useSelector((state) => state)

    return <p>{JSON.stringify(cv)}</p>
}

export default CV

