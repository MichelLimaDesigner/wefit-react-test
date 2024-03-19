import { Title } from "../../home/Home.styles"
import { Purchased } from "../Cart.styles"
import purchasedImg from "../../../assets/img/purchased.png";
import Button from "../../../common/components/button/Button";
import { Link } from "react-router-dom";

const PurchaseMade = () => {
  return(
    <Purchased >
      <Title>Compra realizada com sucesso!</Title>
      <img src={purchasedImg} />

      <Link to={"/"}>
        <Button className="center margin-t-2">
          Voltar
        </Button>
      </Link>
    </Purchased>
  )
}

export default PurchaseMade