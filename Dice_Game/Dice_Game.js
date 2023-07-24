import {Image} from '@chakra-ui/image';
import {Box} from '@chakra-ui/react';
import {ListItem, List, Text} from '@chakra-ui/react';
import {useState} from 'react';
import {Flex} from '@chakra-ui/layout';
import {Button, Heading, Stack} from '@chakra-ui/react'
const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [numberSelected,setNumberSelected] = useState();
  const [dice,setDice] = useState(1);
  const [error,setError] = useState(null);
  const [score,setScore] = useState(0);
  const number = [1,2,3,4,5,6];
  const startGameHandler = () => {
    setStartGame(true);
  };
  console.log(numberSelected);
  const onNumberClick = (value) => {
    setNumberSelected(value);
    setError(null);
  };
  const randomNumber = () => {
    if (numberSelected) {
    const generatedNumber = Math.ceil(Math.random() * 6);
    setDice(generatedNumber);
    if (numberSelected == generatedNumber) {
      setScore(prev => prev + generatedNumber);
    }
    else {
      setScore(prev => prev - 2);
    }
    console.log(generatedNumber);
    }
    else {
      setError("Please select a number!");
    }
  };
  return (
  <>
  {startGame ? (
    <>
    <Stack justify="center" align="center" maxW="1000px" mx="auto" h="100vh"> 
    <Heading as="h1" fontSize="8.5vh" mb="3" color={error ? "red" : "black"}>
      { error ? error : "Select Number"}
      </Heading>
    <Flex pb="3">
    {number.map((value) => (
    <Flex 
    justify="center" 
    align="center" 
    fontSize="2xl" 
    h="50px" 
    w="50px" 
    color="white" 
    bg={numberSelected == value ? 'green' : 'black'}
    key={value}
    mr="4"
    borderRadius="md"
    onClick={() => onNumberClick(value)}
    >
      {value}
    </Flex> 
    ))}
    </Flex>
    <Box h="100px" w="100px" onClick={randomNumber}>
      <Image src={`/dice${dice}.png`} />
    </Box>
    <Text as="p" fontSize="xl" color="blue"><i>Click on the dice to roll</i></Text>
    <Text color={score > 0 ? "green" : "red"} fontSize="9xl"><b>{score}</b></Text>
    <Text fontSize="7xl"><b>Total Score</b></Text>
    <Button onClick={() => setScore(0)} w="20vh" color="mediumblue" bg="orange" fontSize="2xl" >Reset Score</Button><br></br>
  </Stack> 
  <Stack maxW="1000px" mx="auto"><br></br>
    <Heading as="h2"><u>Game Rules :</u></Heading><br></br>
    <List color="purple">
      <ListItem><b>1. &nbsp;Select any number.</b></ListItem>
      <ListItem><b>2. &nbsp;Click on the image of the dice to roll it.</b></ListItem>
      <ListItem><b>3. &nbsp;If the number selected is equal to the number obtained on dice, the points scored will be equal to the number on the dice.</b></ListItem>
      <ListItem><b>4. &nbsp;If the number selected is not equal to the number obtained on dice, 2 points are reduced.</b></ListItem>
    </List>
  </Stack>
  </>
  ) : (
  <Flex justify="center" align="center">
  <Image width="50%" src="/dices.png" />
  <Stack>
    <Heading fontSize="5xl" as="h1" color="maroon">
      The Dice Game
    </Heading>
    <Button 
    alignSelf="flex-end" 
    bg="black" 
    color="white" 
    _hover={{bg:"grey"}}
    onClick={startGameHandler}
    >
    Start Game
    </Button>
  </Stack>
</Flex> 
)}
</>
  );
};

export default App;
