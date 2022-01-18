import React from 'react'
import Signin from './Signin'
import Register from './Register'
import styled from "styled-components";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Account = () => {
    return (
        <div>
            <h2>Sign In or Create An Account</h2>
            <p>With an account you can check out faster, view your online order history and access your shopping bag or saved items from any devices.</p>
            <Container>
               <Signin />
              <Register/>
            </Container>
        </div>
    )
}

export default Account
