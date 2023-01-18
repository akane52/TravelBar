import  { ContainerNB, ContainerText, Text }  from './styles'
import { useEffect } from 'react';

import './style.css'

const NavbarType = ({selected}) => {
  useEffect(() => {
    selectedText({selected})
      },[])

  function selectedText(str){
    if(str.selected==='withAlchoholText'){
      const element = document.getElementsByClassName('withAlchoholText')
      element[0].classList.add('withAchoholTextSelected')
    }else if(str.selected==='noAchohol'){
      const element = document.getElementsByClassName('noAchoholText')
      element[0].classList.add('noAchoholTextSelected')
    }else{
      const element = document.getElementsByClassName('allText')
      element[0].classList.add('allTextSelected')
    }
  }

    return (
      <ContainerNB>
        <ContainerText>

          <Text className='allText'>All</Text>
          <Text className='noAchoholText' >No achohol</Text>
          <Text className='withAlchoholText'>With alcohol</Text>
        </ContainerText>
      </ContainerNB>
    )
  }
  
  export default NavbarType