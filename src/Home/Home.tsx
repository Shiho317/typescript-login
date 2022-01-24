import { Wrapper } from "./Home.style";
import { UserInfo } from '../App';

type Props = {
  user: UserInfo;
}

const Home: React.FC<Props> = ({user}) => {
  return(
    <Wrapper>
      Hello
    </Wrapper>
  )
}

export default Home