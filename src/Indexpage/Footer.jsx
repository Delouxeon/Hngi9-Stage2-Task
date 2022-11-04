import I4G from '../assets/I4G.svg'
import ZuriIntern from '../assets/ZuriIntern.svg'


const Footer = () => {

return(
  <footer>
    <img className='zuri-internship' src={ZuriIntern} />
    <p className='footer-text'>HNG Internship 9 Frontend Task</p>
    <img className='I4G' src={I4G} />
  </footer>
)

} 

export default Footer