import { Link } from 'react-router-dom';
import React from 'react'
import { Button2 } from '../button';


type Props = {
    children : React.ReactNode;
    icon:JSX.Element;
    href:string;
}

 export const NavButton: React.FC<Props> = ({
    children,
    icon,
    href
 }) => {
  return (
    <Button2 className='flex justify-start text-xl' icon={icon}>
        <Link to={href}>
            {children}
        </Link>
    </Button2>
  )
}


