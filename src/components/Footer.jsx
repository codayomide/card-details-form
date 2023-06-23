const Footer = () => {
    const frontendmentorUrl = "https://www.frontendmentor.io?ref=challenge",

        githubName = "Codayomide",
        githublink = "https://github.com/codayomide";
    return ( 
        <footer className="attribution">
            Challenge by <a href={frontendmentorUrl} target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href={githublink}>{ githubName }</a>.
        </footer>
    );
}
 
export default Footer;
