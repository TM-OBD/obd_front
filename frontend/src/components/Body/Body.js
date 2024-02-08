import * as React from "react";
import Box from "@mui/material/Box";
import FAQ from "./Fag/FAQ";
import styled from "@emotion/styled";
import TitleBlock from "./TitleBlock";
import HowItWorks from "./HowItWorks";
import ContactForm from "./ContactForm";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

// Компонент боди приложения
function Body() {
  return (
    <Container>
      <TitleBlock />
      <HowItWorks />
      <ContactForm></ContactForm>
      <FAQ></FAQ>
    </Container>
  );
}

export default Body;
