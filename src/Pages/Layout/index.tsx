import React from 'react';
import ProfilePage from '../../Components/Profilepage'
import Main from '../../Components/Main'
import Diferenciais from '../../Components/Diferenciais'
import api from '../../services/api'
 import { Container,Wrapper} from './style';

const Layout: React.FC = () => {
  return(
      <Container>
          <Wrapper>

       

    <Main>
        
<ProfilePage>
  

</ProfilePage>
    </Main>
  
</Wrapper>
<Diferenciais/>
      </Container>
    )
}

export default Layout;