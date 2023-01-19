import  { ContainerNB, ContainerText, Text }  from './styles'
import './style.css'

const NavbarType = ({ view }) => {
  
  function selectedText(str){
    if(str==='withAlchoholText'){
      const element = document.getElementsByClassName('withAlchoholText')
      view('alcohol')
      element[0].classList.add('withAchoholTextSelected')
      const element1 = document.getElementsByClassName('allText')
      element1[0].classList.remove('allTextSelected')
      const element2 = document.getElementsByClassName('noAchoholText')
      element2[0].classList.remove('noAchoholTextSelected')
    }else if(str==='noAchohol'){
      const element = document.getElementsByClassName('noAchoholText')
      view('noAlcohol')
      element[0].classList.add('noAchoholTextSelected')
      const element1 = document.getElementsByClassName('allText')
      element1[0].classList.remove('allTextSelected')
      const element2 = document.getElementsByClassName('withAlchoholText')
      element2[0].classList.remove('withAchoholTextSelected')
    }else if(str==='allText'){
      const element = document.getElementsByClassName('allText')
      view('all')
      element[0].classList.add('allTextSelected')
      const element1 = document.getElementsByClassName('withAlchoholText')
      element1[0].classList.remove('withAchoholTextSelected')
      const element2 = document.getElementsByClassName('noAchoholText')
      element2[0].classList.remove('noAchoholTextSelected')

    }
  }

    return (
      <ContainerNB>
        <ContainerText>
          <Text className='allText' data-testid='navBtnAll' onClick={() => {selectedText('allText')}}>All</Text>
          <Text className='noAchoholText'  data-testid='navBtnNoAlcohol' onClick={() => {selectedText('noAchohol')}} >No achohol</Text>
          <Text className='withAlchoholText' data-testid='navBtnAlcohol' onClick={() => {selectedText('withAlchoholText')}}>With alcohol</Text>
        </ContainerText>
      </ContainerNB>
    )
  }
  
  export default NavbarType