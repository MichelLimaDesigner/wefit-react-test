import { Spin, SpinContainer } from "./Loader.styles"
import loaderImg from '../../../assets/img/Loader.png';

const Loader = () => {
  return (
    <SpinContainer >
      <Spin src={loaderImg} />
    </SpinContainer>
  )
}

export default Loader