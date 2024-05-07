import { Button } from '@nextui-org/react';
import React from 'react'

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
    <Button className='flex justify-start text-xl' icon>

    </Button>
  )
}


