import { Link as LinkScroll } from 'react-scroll';

const CtaButton = ({stylingName, linkTo}) => {
    return (
        <LinkScroll className={stylingName} smooth={true} to={linkTo}>
            <button className={stylingName}>UMÓW JAZDĘ PRÓBNĄ</button>
        </LinkScroll>
    ) 
}

export default CtaButton;