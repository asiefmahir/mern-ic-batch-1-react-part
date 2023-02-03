const InterestSection = (props) => {
    return (
        <div className="interest-section">
            <h2>Interests of Me</h2>
            <ul>
                {props.interests.map(item => (
                    <li key = {item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InterestSection

// ['Book Reading', "swim,ming"]