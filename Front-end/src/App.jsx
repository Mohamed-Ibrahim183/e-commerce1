import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { CreatePage } from "./Pages/CreatePage";

const App = () => {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
