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
export const Text = styled.p`
   @media (max-width: 700px) {
      top: 20%;
      font-size: 15px;
   }
   font-family: 'Inter';
   font-style: normal;
   font-size: 25px;
   padding: 0.05% 5% 0.05% 5%;
   font-weight: bold;
   &:hover {
      color: #9747FF;
   }
`