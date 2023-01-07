import { FormsWrapper } from "./components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { SubmitButton } from "../../styles/components/SubmitButton/components";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontSize: 30,
  },
  spacing: 50,
});

const Forms = () => {
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: "1",
      name: "name",
      label: "Full Name",
      variant: "standard",
    },
    {
      id: "2",
      name: "company",
      label: "Company Name",
      variant: "standard",
    },
    {
      id: "3",
      name: "phone",
      label: "Phone Number",
      variant: "standard",
    },
    {
      id: "4",
      name: "email",
      label: "E-mail",
      variant: "standard",
    },
    {
      id: "5",
      name: "message",
      label: "Write Us Messages",
      variant: "standard",
      multiline: true,
      rows: "5",
    },
  ];

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <FormsWrapper action="" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <TextField
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <SubmitButton
          variant="contained"
          btnheight={60}
          btnwidth={170}
          type="submit"
        >
          send message
        </SubmitButton>
      </FormsWrapper>
    </ThemeProvider>
  );
};

export default Forms;
