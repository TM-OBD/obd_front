import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionsContent } from "./FAQData";

const Container = styled(Box)`
  width: 100%;
  padding: 0 10% 0 10%;
`;

const AccordionsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 48px;
`;

// Accordion
const Accordion = styled(MuiAccordion)`
  background-color: ${({ theme }) => theme.palette.primary.mainBg};
  border-top: 1px solid ${({ theme }) => theme.palette.primary.borderBlue} !important;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.borderBlue} !important;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 0;
  }

  &::before {
    display: none;
  }
`;

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Компонент FAQ для Body
function FAQ() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container id="FAQ">
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 400,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Питання та відповідь
      </Typography>
      <AccordionsContainer>
        {accordionsContent.map((accordion) => (
          <Accordion
            key={accordion.id}
            expanded={expanded === accordion.expanded}
            onChange={handleChange(accordion.expanded)}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                {accordion.id}.
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  fontWeight: 700,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                {accordion.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                {accordion.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionsContainer>
    </Container>
  );
}

export default FAQ;
