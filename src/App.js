import logo from './logo.svg';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Stack, ListItem, List, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Player } from './components/Player';
import { useDrop } from 'react-dnd';


function App() {

  const [players, setplayers] = useState([
    {
      name: "player1"
    },
    {
      name: "player2"
    },
    {
      name: "player3"
    },
    {
      name: "player4"
    },
  ])
  const [teams, setteams] = useState([])

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: 'player',
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: 'team',
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    //status
    console.log("todo",item)
    setplayers(prev=>prev.filter((_,i)=>i!==item.index))
    setteams(prev=>[...prev,item])
  }

  const removePLayerFromTeam = (item) => {
    //status
    console.log("in progress",item)
    setteams(prev=>prev.filter((_,i)=>i!==item.index))
    setplayers(prev=>[...prev,item])
  }

  return (
    <Container maxW="800px">
      <Flex justify="space-between" height="90vh" align="center">
        <Stack width="300px">
          <Heading fontSize="3xl" color="blue" align="center">PLAYERS</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderEndRadius="md" ref={removeFromTeamRef} bgGradient={
            isPlayerOver ? 'linear(to-b,yellow.300,yellow.200)' : 'linear(to-b,yellow.100,yellow.200)'
          }>
            {
              players.map((player, index) => {
                return <Player key={index} index={index} player={player} item={player} type="player" index={index} onDropPlayer={movePlayerToTeam} />
              })
            }
          </List>
        </Stack>
        <Stack width="300px">
          <Heading fontSize="3xl" color="yellow" align="center">PLAYERS</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderEndRadius="md" ref={addToTeamRef}
            bgGradient={isOver ? 'linear(to-b,blue.300,blue.200)' : 'linear(to-b,blue.100,blue.200)'}>
          
          {
              teams.map((player, index) => {
                return <Player key={index} index={index} player={player} item={player} type="team" index={index} onDropPlayer={removePLayerFromTeam} />
              })
            }

          </List>
        </Stack>
      </Flex>

    </Container>


  );
}

export default App;
