import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  TextField,
  List,
  ListItemButton,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { Close, ExpandMore } from "@mui/icons-material";

import classes from "./LandingView.module.scss";

const LandingView: React.FC = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    {
      id: "q1",
      title: "Czym jest Reactflix?",
      open: false,
      answer:
        "Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem. Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą. Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia.",
    },
    {
      id: "q2",
      title: "Ile kosztuje korzystanie z serwisu Reactflix?",
      open: false,
      answer:
        "Oglądaj materiały z serwisu Netflix na smartfonie, tablecie, telewizorze Smart TV, laptopie lub innym urządzeniu do odtwarzania — za jedną stałą opłatą miesięczną. Mamy plany w cenie od 29 zł do 60 zł miesięcznie. Bez dodatkowych kosztów i bez umów.",
    },
    {
      id: "q3",
      title: "Gdzie mogę oglądać?",
      open: false,
      answer:
        "Oglądaj, gdzie i kiedy chcesz. Zaloguj się za pomocą danych swojego konta w witrynie netflix.com na komputerze lub na innym urządzeniu z dostępem do Internetu i zainstalowaną aplikacją Netflix, takim jak telewizor Smart TV, smartfon, tablet, odtwarzacz multimedialny czy konsola do gier.",
    },
    {
      id: "q4",
      title: "Jak zrezygnować z członkostwa?",
      open: false,
      answer:
        "Netflix niczego nie narzuca. Żadnych zbędnych umów ani zobowiązań. Możesz w łatwy sposób anulować członkostwo online — wystarczą dwa kliknięcia. Nie naliczamy opłat za rezygnację, dlatego możesz rozpocząć członkostwo i zrezygnować z niego w dowolnej chwili.",
    },
    {
      id: "q5",
      title: "Jakie materiały mogę oglądać w serwisie Reactflix?",
      open: false,
      answer:
        "Serwis Netflix oferuje dostęp do obszernej biblioteki zawierającej filmy pełnometrażowe i dokumentalne, seriale, programy, anime, nagradzane Netflix Originals i nie tylko. Oglądaj do woli, kiedy tylko chcesz.",
    },
    {
      id: "q6",
      open: false,
      title: "Czy Reactflix jest odpowiedni dla dzieci?",
      answer:
        "W ramach członkostwa w serwisie Netflix otrzymujesz dostęp do specjalnej sekcji dla dzieci. Młodzi widzowie mogą oglądać tam filmy, seriale i programy przeznaczone właśnie dla nich, a rodzice mają nad wszystkim kontrolę.",
    },
  ]);

  const handleOpen = (
    question:
      | {
          id: string;
          title: string;
          answer: string;
        }
      | any
  ) => {
    const newState = questions.map((q) => {
      if (q.id === question.id) {
        return { ...q, open: !q.open };
      }

      return q;
    });

    setQuestions(newState);
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.banner}>
        <Box className={classes.backdrop}>
          <Box className={classes.header}>
            <h1>Reactflix</h1>
            <Button onClick={() => navigate("/auth")}>
              <strong>Zaloguj się</strong>
            </Button>
          </Box>
          <Box className={classes.info}>
            <Grid
              container
              rowSpacing={1}
              sx={{
                marginInline: "25vw",
              }}
            >
              <Grid item xs={12}>
                <h1>
                  Nieograniczona oferta filmów, seriali, programów i nie tylko.
                </h1>
              </Grid>
              <Grid item xs={12}>
                <h2>Oglądaj wszędzie. Anuluj w każdej chwili.</h2>
              </Grid>
              <Grid item xs={12}>
                <h3>
                  Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub
                  odnowić konto.
                </h3>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <TextField
                  id="email"
                  type="email"
                  label="Adres e-mail"
                  variant="filled"
                  sx={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "0",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    width: { xs: "auto%", sm: "auto", md: "100%" },
                    height: "100%",
                  }}
                >
                  Rozpocznij
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes.questions}>
        <h1>Często zadawane pytania</h1>
        <List
          sx={{
            width: "80%",
            bgcolor: "inherit",
            "& .MuiListItemButton-root": {
              bgcolor: "gray",
            },
            "& .MuiCollapse-wrapperInner": {
              bgcolor: "gray",
              padding: 4,
            },
          }}
          component="nav"
        >
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <ListItemButton onClick={() => handleOpen(question)}>
                  <ListItemText primary={question.title} />
                  {question.open ? <Close /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={question.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <h5>{question.answer}</h5>
                  </List>
                </Collapse>
                <Divider />
              </div>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default LandingView;
