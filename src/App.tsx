import "./style.css";
import styled from "styled-components";
import HotelList from "./components/HotelList";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import NavBarButton from "./components/NavBarButton";

function App() {
  return (
    <>
      <Navbar />
      <hr style={{ margin: 0 }} />
      <NavBarButton />
      <hr style={{ margin: 0 }} />
      <MainContainer>
        <HotelList />
        <Maps />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  min-width: 250px;
`;
export default App;
