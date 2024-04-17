import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Bubbles from "../../images/Сontact/Bubbles.png";
import { sendContact } from "../../services/Fetches";

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
    <Container //main container for contact block
      sx={{
        color: "white",
        position: "relative",
        overflow: "hidden",
        margin: "80px 0px",
        padding: {
          xl: "0 7% 0 7%",
          lg: "0 7% 0 7%",
          md: "0 7% 0 7%",
          sm: "0 7% 0 7%",
          xs: "0 7% 0 7%",
        },
        maxWidth: {
          xl: "100%",
        },
      }}
      id="Contacts"
    >
      <Typography
        sx={{
          fontFamily: "Unbounded, sans-serif",
          fontSize: {
            xl: "64px",
            lg: "48px",
            md: "48px",
            sm: "48px",
            xs: "32px",
          },
          fontWeight: "400",
          lineHeight: "74px",
        }}
      >
        Контакти
      </Typography>
      <Box //container for socials links
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Link
          sx={{
            marginRight: "20px",
            padding: "10px 0 10px 0",
            fontFamily: "Inter, serif",
            fontSize: {
              xl: "32px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            color: " #54AFEC",
            fontWeight: "400",
          }}
          href="#"
        >
          Instagram
        </Link>
        <Link
          sx={{
            marginRight: "20px",
            padding: "10px 0 10px 0",
            fontFamily: "Inter, serif",
            fontSize: {
              xl: "32px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            color: " #54AFEC",
            fontWeight: "400",
          }}
          href="#"
        >
          Facebook
        </Link>
        <Link
          sx={{
            marginRight: "20px",
            padding: "10px 0 10px 0",
            fontFamily: "Inter, serif",
            fontSize: {
              xl: "32px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            color: " #54AFEC",
            fontWeight: "400",
          }}
          href="#"
        >
          Telegram
        </Link>
        <Link
          sx={{
            marginRight: "20px",
            padding: "10px 0 10px 0",
            fontFamily: "Inter, serif",
            fontSize: {
              xl: "32px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            color: " #54AFEC",
            fontWeight: "400",
          }}
          href="#"
        >
          Phone
        </Link>
        <Link
          sx={{
            marginRight: "20px",
            padding: "10px 0 10px 0",
            fontFamily: "Inter, serif",
            fontSize: {
              xl: "32px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            color: " #54AFEC",
            fontWeight: "400",
            zIndex: 2,
          }}
          href="#"
        >
          Mail
        </Link>
      </Box>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: {
            xl: "30px",
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },
          fontWeight: "400",
          lineHeight: "24px",
          marginBottom: "20px",
        }}
      >
        Якщо у вас є питання, заповніть контактну форму <br /> нижче і ми
        зв'яжемося з вами
      </Typography>
      <Box //container for backgroud image
        sx={{
          backgroundImage: `url(${Bubbles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "80%",
          height: {
            xl: "100%",
            lg: "100%",
            md: "100%",
            sm: "60%",
            xs: "60%",
          },
          maxWidth: "858px",
          position: "absolute",
          top: {
            xl: "10%",
            lg: "10%",
            md: "10%",
            sm: "30%",
            xs: "50%",
          },
          left: {
            xl: "65%",
            lg: "40%",
            md: "40%",
            sm: "40%",
            xs: "40%",
          },
        }}
        alt=""
      />
      <form style={{ marginTop: "25px" }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name", { required: true })}
          placeholder="Ваше ім'я"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name && "Це поле є обов'язковим"}
          sx={{
            display: {
              xl: "flex",
              lg: "block",
              md: "block",
              sm: "flex",
              xs: "flex",
            },
            marginBottom: "25px",
            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "white",
              borderWidth: "0 0 1px 0",
              borderRadius: "0",
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "white",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "0 0 1px 0",
            },
            "& .MuiInputBase-input": {
              color: "white",
              width: {
                xl: "100%",
                lg: "672px",
                md: "672px",
                sm: "100%",
                xs: "100%",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: {
                xl: "32px",
              },
            },
          }}
        />
        <TextField
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
          sx={{
            display: {
              xl: "flex",
              lg: "block",
              md: "block",
              sm: "flex",
              xs: "flex",
            },
            marginBottom: "25px",
            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "white",
              borderWidth: "0 0 1px 0",
              borderRadius: "0",
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "white",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "0 0 1px 0",
            },
            "& .MuiInputBase-input": {
              color: "white",
              width: {
                xl: "100%",
                lg: "672px",
                md: "672px",
                sm: "100%",
                xs: "100%",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: {
                xl: "32px",
              },
            },
          }}
        />
        <TextField
          style={{ borderWidth: "1px 0 1px 0" }}
          {...register("question", { required: true })}
          placeholder="Напишіть питання, яке вас цікавить"
          variant="outlined"
          error={!!errors.question}
          multiline
          minRows={5}
          helperText={errors.question && "Це поле є обов'язковим"}
          sx={{
            display: {
              xl: "flex",
              lg: "block",
              md: "block",
              sm: "flex",
              xs: "flex",
            },
            marginBottom: "25px",
            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "white",
              borderWidth: "0 0 1px 0",
              borderRadius: "0",
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "white",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "0 0 1px 0",
            },
            "& .MuiInputBase-input": {
              color: "white",
              width: {
                xl: "100%",
                lg: "672px",
                md: "672px",
                sm: "100%",
                xs: "100%",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: {
                xl: "32px",
              },
            },
          }}
        />
        <Button
          sx={{
            background: "#54AFEC",
            display: "block",
            fontFamily: "Inter, sans-serif",
            margin: {
              xl: "auto",
            },
            fontSize: {
              xl: "24px",
              lg: "16px",
              md: "16px",
              sm: "16px",
              xs: "16px",
            },
            width: {
              xl: "500px",
              lg: "215px",
              md: "215px",
              sm: "auto",
              xs: "auto",
            },
            height: "63px",
            padding: {
              xl: "14px 50px 24px 50px",
              lg: "14px 50px 24px 50px",
              md: "14px 50px 24px 50px",
              sm: "20px 32px",
              xs: "20px 32px",
            },
            borderRadius: "15px",
            color: "white",
            "&:hover": {
              background: "#0040FF",
            },
            "&:active": {
              background: "#001F7A",
            },
          }}
          variant="contained"
          type="submit"
        >
          Відправити
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
