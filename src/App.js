import React from 'react'
import { Container , Image, ContainerItens, H1, InputLabel, Input, Button} from './styles'
import Home from './assets/Home.svg'


// const [ order , setOrders] = useState([]);
//   const history = useHistory()
  
//   //Primeirovem o nome da variavél e depois o que vai ajudar a atualizaravariavel
//   const inputOrder = useRef()
//   const inputName = useRef()
  
  
//   async function addNewOrder() {
//      const { data:addNewOrder } = await axios.post("http://localhost:3001/users", {name:inputName.current.value, name:inputName.current.value });

//       setUsers([ ...order, newOrder ]);

//       history.push('/usuarios')
    
//   }

function App() {
  return (

    <Container>
      <Image alt='Hamburguer' src={ Home }/>
        <ContainerItens>
          <H1>Faça seu pedido!</H1>
            <InputLabel>Pedido</InputLabel>
              <Input  placeholder='1 Coca-cola, 1 X-Salada'/>
          
          
                <InputLabel>Nome do cliente</InputLabel>
                  <Input placeholder='Nome' />

                     <Button>Novo Pedido</Button>
        </ContainerItens>        

    </Container>
  ) ;
}

export default App;
