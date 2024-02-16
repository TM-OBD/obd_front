import * as React from "react";
import Box from "@mui/material/Box";
import FAQ from "./FAQ/FAQ";
import styled from "@emotion/styled";
import TitleBlock from "./TitleBlock";
import HowItWorks from "./HIW/HowItWorks";
import Tariffs from "./TARIFFS/Tariffs";
import ContactForm from "./ContactForm";
import ReviewBlock from "./ReviewBlock/ReviewBlock";

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
				<Tariffs />
            <ReviewBlock/>
            <ContactForm/>
            <FAQ/>
        </Container>
    );
}

export default Body;
