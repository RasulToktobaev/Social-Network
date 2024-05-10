import { Input as NextInput } from '@nextui-org/react';
import React from 'react'
import { useController } from 'react-hook-form';
import { Control } from'react-hook-form';

type Props = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    control: Control<any>
    required?: string;
    endContent: JSX.Element
}

export const Input: React.FC<Props> = (
    {
        name,
        label,
        placeholder,
        type,
        control,
        required = '',
        endContent,
    }
) => {

    const {
        field,
        fieldState: { invalid },
        formState: { errors }
    } = useController({
        name,
        control,
        rules: {
            required
        }
    });
    return (
        <NextInput
            id={name}
            label={label}
            placeholder={placeholder}
            type={type}
            value={field.value}
            name={field.name}
            onChange={field.onChange}
            isInvalid={invalid}
            onBlur={field.onBlur}
            errorMessage={`${errors[name]?.message ?? ''}`}
        />
    )
}


