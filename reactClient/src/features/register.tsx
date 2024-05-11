import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Button, Link } from '@nextui-org/react';
import { useRegisterMutation } from '../app/services/userApi';
import { hasErrorField } from '../utils/hasErrorFields';
import { ErrorMessage } from '../components/errorMessage';

type Register = {
    email: string;
    password: string;
    name: string;
};

type Props = {
    setSelected: (value: string) => void;
};

export const Register: React.FC<Props> = ({ setSelected }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Register>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    });

    const [register, { isLoading }] = useRegisterMutation();
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: Register) => {
        try {

            setError(null);
            await register(data).unwrap();
            setSelected('login');
        } catch (err) {
            if (hasErrorField(err)) {
                setError(err.data.error);
            } else {
                setError('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
            }
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                control={control}
                required="Обязательное поле"
                label="Имя"
                name="name" />
            <Input
                control={control}
                name="email" label="Email"
                type="email"
                required="Обязательное поле" />
            <Input
                control={control}
                name="password" label="Пароль"
                type="password"
                required="Обязательное поле" />
            <ErrorMessage error={error} />

            <p className="text-center text-small">
                Уже есть аккаунт?{' '}
                <Link size="sm" className="cursor-pointer" onPress={() => setSelected('login')}>
                    Войдите
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
                    {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
                </Button>
            </div>
        </form>
    );
};
