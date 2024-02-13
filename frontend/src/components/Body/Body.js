import * as React from "react";
import Box from "@mui/material/Box";
import FAQ from "./Faq/FAQ";
import styled from "@emotion/styled";
import TitleBlock from "./TitleBlock";
import HowItWorks from "./HIW/HowItWorks";
import ContactForm from "./ContactForm";
import ReviewBlock from "./ReviewBlock";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
`;

// Компонент боди приложения
function Body() {
    return (
        <Container>
            <TitleBlock/>
            <HowItWorks/>
            <ReviewBlock/>
            <ContactForm/>
            <FAQ/>
        </Container>
    );
}

export default Body;
