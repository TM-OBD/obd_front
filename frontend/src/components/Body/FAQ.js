import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = styled(Box)`
  width: 100%;
`;

const AccordionsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 48px;
`;

const Accordion = styled(MuiAccordion)`
  background-color: ${({ theme }) => theme.palette.primary.mainBg};
  border-top: 1px solid ${({ theme }) => theme.palette.primary.borderBlue} !important;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.borderBlue} !important;
  &:not(:last-child) {
    border-bottom: 0;
  }
  &::before {
    display: "none";
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

  const accordionsContent = [
    {
      id: 1,
      expanded: "panel1",
      title: "Чи можу я встановити iSyb Auto самостійно?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
    {
      id: 2,
      expanded: "panel2",
      title: "Які марки автомобілів підтримуються iSyb Auto",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
    {
      id: 3,
      expanded: "panel3",
      title: "Як часто отримуються оновлення додатку?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
    {
      id: 4,
      expanded: "panel4",
      title: "Чи можу я отримати підтримку в разі проблем з використанням?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
    {
      id: 5,
      expanded: "panel5",
      title: "Чи забезпечує iSyb Auto захист моєї конфіденційності?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
    {
      id: 6,
      expanded: "panel6",
      title:
        "Чи можу я використовувати iSyb Auto для відстеження кількох автомобілів?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.`,
    },
  ];
  return (
    <Container>
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
