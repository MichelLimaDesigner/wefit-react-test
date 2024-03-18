import { Outlet } from "react-router-dom"
import { Main } from "./Templates.styles"

const Template: React.FC = () => {
  return (
    <Main >
      <Outlet />
    </Main>
  )
}

export default Template