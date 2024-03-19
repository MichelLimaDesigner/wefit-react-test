import { EmptyContainer, Title } from "../Home.styles"
import emptyImg from '../../../assets/img/empty.png';
import Button from "../../../common/components/button/Button";

const Empyt = () => {
  return (
    <EmptyContainer>
      <Title>Parece que não há nada por aqui {':('}</Title>
      <img src={emptyImg} />
      <Button >
        Recarregar página
      </Button>
    </EmptyContainer>
  )
}

export default Empyt