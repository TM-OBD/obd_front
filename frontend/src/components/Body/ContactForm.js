import React from 'react';
import styled from '@emotion/styled';
import {useForm} from 'react-hook-form';
import {TextField, Button, Link} from '@mui/material';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bubbles from '../../images/Сontact/Bubbles.png'

const ContainerBlock = styled(Container)`
    color: white;
    position: relative;
    padding: 20px;
`;

const StyledLink = styled(Link)`
    margin-right: 20px;
    padding: 10px 0 10px 0;
    font-family: Inter, serif;
    font-size: 20px;
    color: #54AFEC;
    font-weight: 400;
`;

const SocialLinks = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin-bottom: 20px;
`;

const StyledImg = styled.img`
    background: url("../../images/Сontact/Bubbles.png");
    background-size: cover;
    position: absolute;
    top: 85px;
    left: 470px;
`;

const StyledTextField = styled(TextField)`
    margin-bottom: 25px;

    .MuiOutlinedInput-root {
        fieldset {
            border-color: white;
            border-width: 0 0 1px 0;
            border-radius: 0;
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

const ContactForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <ContainerBlock>
            <Typography
                fontFamily="'Unbounded', sans-serif"
                fontSize="60px"
                fontWeight={400}
                lineHeight="74px"
            >
                Контакти
            </Typography>
            <SocialLinks>
                <StyledLink href="#">Instagram</StyledLink>
                <StyledLink href="#">Facebook</StyledLink>
                <StyledLink href="#">Telegram</StyledLink>
                <StyledLink href="#">Phone</StyledLink>
                <StyledLink href="#">Mail</StyledLink>
            </SocialLinks>
            <Typography
                fontFamily={"Inter, sans-serif"}
                fontSize="20px"
                fontWeight={400}
                lineHeight="24px"
                marginBottom="20px"
            >
                Якщо у вас є питання, заповніть контактну форму<br/>нижче і ми зв'яжемося з вами
            </Typography>
            <StyledImg src={Bubbles} alt="" />
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
                        required: 'Це поле є обов\'язковим',
                        pattern: {
                            value: /^\+?(3(?:8(?:0\d{9})?|[1-7]\d{8}))$/,
                            message: 'Введіть дійсний номер телефону'
                        }
                    })}
                    placeholder="Номер телефону"
                    variant="outlined"
                    error={!!errors.phone}
                    helperText={errors.phone && errors.phone.message}
                />
                <StyledTextField
                    style={{borderWidth: '1px 0 1px 0'}}
                    {...register('question', {required: true})}
                    placeholder="Напишіть питання, яке вас цікавить"
                    variant="outlined"
                    error={!!errors.question}
                    multiline
                    minRows={5}
                    helperText={errors.question && "Це поле є обов'язковим"}
                />
                <StyledButton variant="contained" type="submit">Відправити</StyledButton>
            </form>
        </ContainerBlock>
    );
}

export default ContactForm;
