const SocialSection = (props) => {
    return (
        <div className="social-section">
            <h2>My Social Links:</h2>
            <ul>
                {props.socialLinks.map(item => (
                    <li key = {item.platform}>
                        {item.platform} : {item.profileLink}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SocialSection
// [
//     {
//         platform: 'Facebook',
//         profileLink: 'htts'
//     },
//     {
//         platform: 'Facebook',
//         profileLink: 'htts'
//     },
// ]