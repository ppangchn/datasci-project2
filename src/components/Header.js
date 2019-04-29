import React from 'react';
import styled from 'styled-components';
import './Header.css'
const Container = styled.div`
    height: 4em;
    border-bottom: 5px solid #0070A8;
`


const Header = () => {
    return (<Container> 
      <div class="d-flex justify-content-left ml-5">
      <img src="icon.png" class="icon" ></img>
      </div>
    </Container>)
}

export default Header;