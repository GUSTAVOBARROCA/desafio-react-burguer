import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    width:100vw;
    background: #0A0A10;
    display:flex;
    flex-direction:column;
    align-items:center;
    

`;
export const Image = styled.img` 
    margin-top:11px;
    
    
`;
export const ContainerItens = styled.div`
     
`;

export const H1 = styled.h1`
    margin-top:25px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF
`;
export const InputLabel = styled.p`
    margin:76px 0px -1px 10px;
    border:none;
    outline:none;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #EEEEEE;
    
`;
export const Input = styled.input`
    width: 342px;
    height: 58px;
    padding-left:16px;
    background:rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    font-weight: 300;
    font-size: 22px;
    line-height: 21px;
    color: #FFFFFF

`;
export const Button = styled.button`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 355px;
    height: 68px;
    margin-top:76px;
    background: #D93856;
    border-radius:10px;
    font-weight: 900;
    font-size: 17px;    
    text-align: center;
    color: #FFFFFF;
    padding:24px 0px;

    :hover{
        cursor:pointer;
        opacity:0.9;
    }
   

`;