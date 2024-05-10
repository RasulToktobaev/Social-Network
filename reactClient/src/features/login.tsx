import React from 'react'
import { useForm } from 'react-hook-form';

type Login = {
    email: string;
    password: string;
}

type Props = {
    setSelected:(value: string) => void;
}

export const Login: React.FC<Props> = () => {

    const {
        handleSubmit,
        control,
        formState: {
            errors
        }
    } = useForm<Login>({
        mode:'onChange',
        reValidateMode:'onBlur',
        defaultValues:{
            email:'',
            password:''
        }
    });
  return (
    <div>Login</div>
  )
}
