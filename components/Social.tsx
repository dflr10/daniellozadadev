import {FaGithub, FaLinkedin, FaReddit} from 'react-icons/fa';
import Link from 'next/link';

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaLinkedin />, path: ''},
    {icon: <FaReddit />, path: ''},
  ];

  interface SocialProps {
    containerStyles: string;
    iconStyles: string;
  }


  const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}</Link>
        })}
      </div>
    )
  }
  
  export default Social