import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import {TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

const Container = styled.div`
  color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
    margin-right: 20px;
    padding: 10px 0 10px 0;
    gap: 10px;
    font-family: Inter,serif;
    font-size: 20px;
    color: #54AFEC;
    font-weight: 400;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
    margin-bottom: 25px;
    .MuiOutlinedInput-root {
        fieldset {
            border-color: white;
        }

        &:hover fieldset {
            border-color: white;
        }

        &.Mui-focused fieldset {
            border-color: white;
        }
    }

    .MuiInputBase-input {
        color: white;
        width: 672px;
    }
`;

const StyledButton = styled(Button)`
    background: #54AFEC;
    display: block;
    width: 215px;
    height: 63px;
    padding: 24px 50px 24px 50px;
    border-radius: 15px;
    color: white;
`;

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <Typography style={{
                fontFamily: 'Unbounded',
                fontSize: '60px',
                fontWeight: 400,
                lineHeight: '74px',
                letterSpacing: 0
            }}>Контакти</Typography>
            <SocialLinks>
                <StyledLink to="/">Instagram</StyledLink>
                <StyledLink to="/">Facebook</StyledLink>
                <StyledLink to="/">Telegram</StyledLink>
                <StyledLink to="/">Phone</StyledLink>
                <StyledLink to="/">Mail</StyledLink>
            </SocialLinks>
            <Typography style={{
                fontFamily: 'Inter,serif',
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '24px',
                marginBottom: '20px'
            }}>Якщо у вас є питання, заповніть контактну форму<br/> нижче і ми зв'яжемося з вами</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledTextField
                    {...register('name', {required: true})}
                    placeholder="Ваше ім'я"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name && "Це поле є обов'язковим"}
                />
                <StyledTextField
                    {...register('phone', {
                        required: true,
                        pattern: {
                            value: /^\+?3?8?(0\d{9})$/,
                            message: 'Введіть дійсний номер телефону'
                        }
                    })}
                    placeholder="Номер телефону"
                    variant="outlined"
                    error={!!errors.phone}
                    helperText={errors.phone && errors.phone.message}
                />
                <StyledTextField
                    {...register('question', {required: true})}
                    placeholder="Напишіть питання, яке вас цікавить"
                    variant="outlined"
                    error={!!errors.question}
                    helperText={errors.question && "Це поле є обов'язковим"}
                />
                <StyledButton variant="contained" type="submit">Відправити</StyledButton>
            </form>
        </Container>
    );
}

export default Form;
