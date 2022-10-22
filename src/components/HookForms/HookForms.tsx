import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './HookForms.module.scss'

const HookForms = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset, // сброс всей формы
    } = useForm({
        mode: 'onBlur', // когда валидацию проводим
    })

    const onSubmit = (data: any) => {
        console.log(data)
        reset()
    }

    return (
        <>
            <h2>React Hook Forms</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label htmlFor=''>
                    NAME
                    <br />
                    <input
                        type='text'
                        {...register('name', {
                            required: 'Оказия, поле NAME обязательно',
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 символа NAME',
                            },
                        })}
                    />
                    <br />
                    <span className={styles.error}>{errors?.name?.message}</span>
                </label>

                <label htmlFor=''>
                    SURNAME
                    <br />
                    <input
                        type='text'
                        {...register('surname', {
                            required: 'Оказия, поле SURNAME обязательно',
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 символа SURNAME',
                            },
                        })}
                    />
                    <br />
                    <span className={styles.error}>{errors?.surname?.message}</span>
                </label>

                <label htmlFor=''>
                    EMAIL
                    <br />
                    <input
                        type='email'
                        {...register('email', {
                            required: 'Оказия, поле email обязательно',
                        })}
                    />
                    <br />
                    <span className={styles.error}>{errors?.surname?.message}</span>
                </label>

                <input type='submit' value='Отправить' disabled={!isValid} />
            </form>
        </>
    )
}

export default HookForms
