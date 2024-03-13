import React from 'react';
import styled from '@emotion/styled';
import {useForm} from 'react-hook-form';
import {TextField, Button, Link} from '@mui/material';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bubbles from '../../images/Сontact/Bubbles.png'
import {sendContact} from "../../services/Fetches";

const ContainerBlock = styled(Container)`
    && {
        color: white;
        position: relative;
		  overflow: hidden;
        margin: 80px 0px;
        padding: 0;
    }

	 @media((min-width: 1500px)){
		max-width: 100%;
	 }

    @media (min-width: 300px) {
		&& {
            padding: 0 7% 0 7%;
        }
    }
`;

const StyledLink = styled(Link)`
`;

const SocialLinks = styled(Box)`
    display: flex;
	 flexDirection: row;
	 flex-wrap: wrap;
    width: 100%;
    margin-bottom: 20px;
`;

const StyledImg = styled.img`
	 background: url("../../images/Сontact/Bubbles.png");
	 width: 80%; 
    height: auto; 
    max-width: 858px; 
    position: absolute;
    top: 10%;
    left: 40%; 

	 @media(max-width: 650px){
		top: 30%;
	 }

	 @media(max-width: 420px){
		top: 50%;
	 }

	 @media(min-width: 1500px){
		left: 65%; 
	 }

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
            border-width: 0 0 1px 0;
        }
    }

    .MuiInputBase-input {
        color: white;
        width: 672px;
    }

	 @media(max-width: 750px){

		display: flex;

		.MuiInputBase-input{
			width: 100%;
		} 
	 }

	 @media(min-width: 1500px){
		width: 100%;

		.MuiInputBase-input {
		  &::placeholder {
            font-size: 32px; 
        }
    }
	 }
`;

const StyledButton = styled(Button)`
    background: #54AFEC;
    display: block;
	 font-size: 16px;
    width: 215px;
    height: 63px;
    padding: 14px 50px 24px 50px;
    border-radius: 15px;
    color: white;
    &:hover {
        background: #0040FF;
    }
    &:active {
        background: #001F7A;
    }
	 
	 @media(max-width: 600px){
			padding: 20px 32px;
        width: auto;
		  }

		  @media(min-width: 1500px){
			width: 500px;
			font-size: 24px;
			margin: auto; 
		  }
`;

const ContactForm = () => {
    const {register, handleSubmit, formState: {errors},setValue} = useForm();
    const onSubmit = async (data) => {
        try {
            const token = "your_token_value";
            const feedbackSourceIP = "your_ip_address";
            const {message} = await sendContact(data, token, feedbackSourceIP);
            alert(message)
            setValue('name',"")
            setValue('phone',"")
            setValue('question',"")

        } catch (error) {
            console.error('Error sending form data:', error);
            alert('Failed to send feedback');
        }
    };
    return (
        <ContainerBlock id="Contacts">
            <Typography
                fontFamily="'Unbounded', sans-serif"
                fontSize={{ xl: "76px", lg: "60px", md: "60px", sm: '48px', xs: '36px'}}
                fontWeight={400}
                lineHeight="74px"
            >
                Контакти
            </Typography>
            <SocialLinks>
                <StyledLink 
					 sx={{
						marginRight: '20px',
						padding: '10px 0 10px 0',
						fontFamily: 'Inter, serif',
						fontSize: {  xl: '32px', lg: '20px', md: '20px', sm: '20px', xs: '20px'},
						color:' #54AFEC',
						fontWeight: '400',
					 }} 
					 href="#">Instagram</StyledLink>
                <StyledLink 
					  sx={{
						marginRight: '20px',
						padding: '10px 0 10px 0',
						fontFamily: 'Inter, serif',
						fontSize: {  xl: '32px', lg: '20px', md: '20px', sm: '20px', xs: '20px'},
						color:' #54AFEC',
						fontWeight: '400',
					 }} 
					  href="#">Facebook</StyledLink>
                <StyledLink 
					  sx={{
						marginRight: '20px',
						padding: '10px 0 10px 0',
						fontFamily: 'Inter, serif',
						fontSize: {  xl: '32px', lg: '20px', md: '20px', sm: '20px', xs: '20px'},
						color:' #54AFEC',
						fontWeight: '400',
					 }} 
					  href="#">Telegram</StyledLink>
                <StyledLink 
					 sx={{
						marginRight: '20px',
						padding: '10px 0 10px 0',
						fontFamily: 'Inter, serif',
						fontSize: {  xl: '32px', lg: '20px', md: '20px', sm: '20px', xs: '20px'},
						color:' #54AFEC',
						fontWeight: '400',
					 }} 
					 href="#">Phone</StyledLink>
                <StyledLink 
					  sx={{
						marginRight: '20px',
						padding: '10px 0 10px 0',
						fontFamily: 'Inter, serif',
						fontSize: {  xl: '32px', lg: '20px', md: '20px', sm: '20px', xs: '20px'},
						color:' #54AFEC',
						fontWeight: '400',
					 }} 
					  href="#">Mail</StyledLink>
            </SocialLinks>
            <Typography
                fontFamily={"Inter, sans-serif"}
					 fontSize={{ xl: '30px', lg: '20px', md: '20px', sm: '20px', xs: '20px' }}
                fontWeight={400}
                lineHeight="24px"
                marginBottom="20px"
            >
                Якщо у вас є питання, заповніть контактну форму <br /> нижче і ми зв'яжемося з вами
            </Typography>
            <StyledImg src={Bubbles} alt=""/>
            <form style={{ marginTop: '25px'}} onSubmit={handleSubmit(onSubmit)}>
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
                            value: /^(?:\+?38)?(?:0\d{9})$/,
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
