import { Title } from "../../home/Home.styles"
import { Purchased } from "../Cart.styles"
import purchasedImg from "../../../assets/img/purchased.png";
import Button from "../../../common/components/button/Button";

const PurchaseMade = () => {
  return(
    <Purchased >
      <Title>Compra realizada com sucesso!</Title>
      <img src={purchasedImg} />
      <Button >
        Voltar
      </Button>
    </Purchased>
  )
}

export default PurchaseMade