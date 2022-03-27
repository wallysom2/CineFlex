import styled from 'styled-components';

function HeaderPage () {
  return (
    <Container>
    <header>
      <h1>CINEFLEX</h1>
    </header>
    </Container>
  )
}

export default HeaderPage;

const Container = styled.div`
	width: 100vw;
	height: 67px;
	background-color:  #C3CFD9;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
  }
	
`;
