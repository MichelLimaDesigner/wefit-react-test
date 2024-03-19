import { Outlet } from "react-router-dom"
import { Container, Main } from "./Templates.styles"
import Menu from "../menu/Menu"

const Template: React.FC = () => {
  return (
    <Main >
      <Container >
        <Menu />
        <Outlet />
      </Container>
    </Main>
  )
}

export default Template