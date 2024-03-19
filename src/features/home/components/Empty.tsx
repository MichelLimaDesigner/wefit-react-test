import { EmptyContainer, Title } from "../Home.styles"
import emptyImg from '../../../assets/img/empty.png';
import Button from "../../../common/components/button/Button";
import { Link } from "react-router-dom";

interface IEmpyt {
  isError: boolean
}

const Empyt:React.FC<IEmpyt> = ({isError}) => {
  const refresh = () => {
    window.location.reload()
  }

  return (
    <EmptyContainer>
      <Title>Parece que não há nada por aqui {':('}</Title>
      <img src={emptyImg} />

      {
        isError ? (
          <Button className="center margin-t-2" onClick={refresh}>
            Recarregar página
          </Button>
        ) : (
          <Link to="/">
            <Button className="center margin-t-2">
              Voltar para tela inicial
            </Button>
          </Link>
        )
      }
    </EmptyContainer>
  )
}

export default Empyt