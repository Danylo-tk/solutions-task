import { styled, Button } from "@mui/material";

const PrimaryButton = styled(Button)(({ btnheight, btnwidth }) => ({
  height: btnheight,
  width: btnwidth,
  padding: 0,
  fontSize: 18,
  fontFamily: "Ubuntu",
  textTransform: "capitalize",
  color: "black",
  backgroundColor: "white",
  borderRadius: 12,

  "@media (max-width: 850px)": {
    height: btnheight - 10,
    width: btnwidth - 20,
    fontSize: 14,
  },
  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
}));

export { PrimaryButton };
