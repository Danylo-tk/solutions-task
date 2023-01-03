import { styled, Button } from "@mui/material";

const SubmitButton = styled(Button)(({ btnheight, btnwidth }) => ({
  height: btnheight,
  width: btnwidth,
  padding: 0,
  fontSize: 18,
  fontFamily: "Ubuntu",
  textTransform: "capitalize",
  color: "black",
  backgroundColor: "#FFBC00",
  borderRadius: 12,

  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
}));

export { SubmitButton };
