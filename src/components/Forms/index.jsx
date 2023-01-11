import { FormsWrapper } from "./components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { SubmitButton } from "../../styles/components/SubmitButton/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const theme = createTheme({
  typography: {
    fontSize: 30,
  },
  spacing: 50,
});

const Forms = () => {
  const contactSchema = yup.object().shape({
    fullName: yup
      .string("Your name should only be a text value!")
      .required("This field is required!"),
    companyName: yup
      .string("Company name should only be a text value!")
      .required("This field is required!"),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone nuber is not valid!"
      )
      .required("This field is required!"),

    email: yup
      .string()
      .email("You email is not looking good!")
      .required("This field is required!"),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const inputs = [
    {
      id: "1",
      name: "fullName",
      type: "text",
      label: "Full Name",
      variant: "standard",
    },
    {
      id: "2",
      name: "companyName",
      type: "text",
      label: "Company Name",
      variant: "standard",
    },
    {
      id: "3",
      name: "phone",
      type: "number",
      label: "Phone Number",
      variant: "standard",
    },
    {
      id: "4",
      name: "email",
      type: "text",
      label: "E-mail",
      variant: "standard",
    },
    {
      id: "5",
      name: "message",
      type: "text",
      label: "Write Us Messages",
      variant: "standard",
      multiline: true,
      rows: "5",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input) => (
          <TextField
            key={input.id}
            {...input}
            error={Boolean(errors[input.name]?.message)}
            helperText={errors[input.name]?.message}
            {...register(input.name)}
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
