import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { TextField, Button, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bubbles from "../../images/Сontact/Bubbles.png";
import { sendContact } from "../../services/Fetches";

const ContainerBlock = styled(Container)`
  && {
    color: white;
    overflow: hidden;
    position: relative;
    margin: 80px 0px;
    padding: 0;
  }

  @media (min-width: 300px) {
    && {
      padding: 0 7% 0 7%;
    }
  }
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  padding: 10px 0 10px 0;
  font-family: Inter, serif;
  font-size: 20px;
  color: #54afec;
  font-weight: 400;
`;

const SocialLinks = styled(Box)`
  display: flex;
  flex-direction: row;
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

  @media (max-width: 650px) {
    top: 30%;
  }

  @media (max-width: 420px) {
    top: 50%;
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

  @media (max-width: 750px) {
    display: flex;

    .MuiInputBase-input {
      width: 100%;
    }
  }
`;

const StyledButton = styled(Button)`
  background: #54afec;
  display: block;
  font-size: 16px;
  width: 215px;
  height: 63px;
  padding: 24px 50px 24px 50px;
  border-radius: 15px;
  color: white;
  &:hover {
    background: #0040ff;
  }
  &:active {
    background: #001f7a;
  }

  @media (max-width: 600px) {
    padding: 20px 32px;
    width: auto;
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const token = "your_token_value";
      const feedbackSourceIP = "your_ip_address";
      const { message } = await sendContact(data, token, feedbackSourceIP);
      alert(message);
      setValue("name", "");
      setValue("phone", "");
      setValue("question", "");
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("Failed to send feedback");
    }
  };
  return (
    <ContainerBlock id="Contacts">
      <Typography
        fontFamily="'Unbounded', sans-serif"
        fontSize={{ md: "60px", sm: "48px", xs: "36px" }}
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
        Якщо у вас є питання, заповніть контактну форму <br />
        нижче і ми зв'яжемося з вами
      </Typography>
      <StyledImg src={Bubbles} alt="" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          {...register("name", { required: true })}
          placeholder="Ваше ім'я"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name && "Це поле є обов'язковим"}
        />
        <StyledTextField
          {...register("phone", {
            required: "Це поле є обов'язковим",
            pattern: {
              value: /^(?:\+?38)?(?:0\d{9})$/,
              message: "Введіть дійсний номер телефону",
            },
          })}
          placeholder="Номер телефону"
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
        />
        <StyledTextField
          style={{ borderWidth: "1px 0 1px 0" }}
          {...register("question", { required: true })}
          placeholder="Напишіть питання, яке вас цікавить"
          variant="outlined"
          error={!!errors.question}
          multiline
          minRows={5}
          helperText={errors.question && "Це поле є обов'язковим"}
        />
        <StyledButton variant="contained" type="submit">
          Відправити
        </StyledButton>
      </form>
    </ContainerBlock>
  );
};

export default ContactForm;
