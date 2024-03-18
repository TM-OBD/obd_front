import styled from "@emotion/styled";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { sendContact } from "../services/Fetches";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

const ModalFeedBack = ({ open, handleClose }) => {
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          // height: "80vh",
          border: (theme) => `1px solid ${theme.palette.primary.grey.light}`,
          borderRadius: "16px",
          backgroundColor: (theme) => theme.palette.primary.mainBg,
          padding: "24px",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            color: (theme) => theme.palette.primary.main,
            zIndex: 4,
            fontSize: {
              xl: "30px",
              lg: "20px",
              md: "18px",
              sm: "24px",
              xs: "14px",
            },
          }}
        >
          Заповніть форму зворотнього зв'язку і наш менеджер зв'яжиться з Вами
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        </StyledForm>
      </Box>
    </Modal>
  );
};

export default ModalFeedBack;
