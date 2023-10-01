import GlobalStyle from './styles/global';
import {Container} from './styles';
import { Upload } from './upload';

export const App = ()  => {

  return (
    <Container>
      <div>
        <Upload/>
      </div>
      <GlobalStyle/>
    </Container>
  )
}