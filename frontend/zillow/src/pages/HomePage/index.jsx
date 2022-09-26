import { Container } from "@mui/material";
import ImageCarousal from "../../components/ImageCarousal";

const HomePage = (props) => {
  return (
    <Container
      sx={{ padding: "0px !important", borderRadius: "" }}
      component="main"
      maxWidth="xl">
      <ImageCarousal />
    </Container>
  );
};

export default HomePage;
