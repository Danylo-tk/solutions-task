import { FormsWrapper } from "./components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { SubmitButton } from "../../styles/components/SubmitButton/components";

const theme = createTheme({
  typography: {
    fontSize: 30,
  },
  spacing: 50,
});

const Forms = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormsWrapper action="">
        <TextField label="Full Name" variant="standard" />
        <TextField label="Company Name" variant="standard" />
        <TextField label="Phone number" variant="standard" />
        <TextField label="E-mail" variant="standard" />
        <TextField
          label="Write Us Messages"
          variant="standard"
          multiline
          rows={5}
        />
        <SubmitButton variant="contained" btnheight={60} btnwidth={170}>
          send message
        </SubmitButton>
      </FormsWrapper>
    </ThemeProvider>
  );
};

export default Forms;
