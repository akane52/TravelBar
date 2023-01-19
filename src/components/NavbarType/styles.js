import styled from '@emotion/styled'

export const ContainerNB = styled.div`
   background-color: #EEDCFB;
`
export const ContainerText = styled.div`
   @media (max-width: 700px) {
      margin-left: 15%;
   }
   display: flex;
   align-items: flex-start; 
`
export const Text = styled.button`
   @media (max-width: 700px) {
      top: 20%;
      font-size: 15px;
      color: #black;
   }
   font-size: 25px;
   padding: 0.9% 5% 0.9% 5%;
   font-weight: bold;
   background: none;
   border: none;
   &:hover {
      color: #9747FF;
      cursor: pointer;
   }
`