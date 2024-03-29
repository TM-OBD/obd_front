import * as React from "react";
import Box from "@mui/material/Box";
import FAQ from "./FAQ/FAQ";
import styled from "@emotion/styled";
import TitleBlock from "./TitleBlock";
import HowItWorks from "./HIW/HowItWorks";
import Tariffs from "./Tarifs/Tariffs";
import AboutUs from "./AboutUs/AboutUs";
import ContactForm from "./ContactForm";
import ReviewBlock from "./ReviewBlock/ReviewBlock";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

// Компонент боди приложения
function Body() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <TitleBlock
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <HowItWorks
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Tariffs open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <AboutUs />
      <ReviewBlock />
      <ContactForm />
      <FAQ />
    </Container>
  );
}

export default Body;
