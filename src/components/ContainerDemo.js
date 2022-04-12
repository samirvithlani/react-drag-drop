import { Container, Stack, Heading, List,Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const ContainerDemo = () => {

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
    return (
        <Container maxW="800px">
                  <Flex justify="space-between" height="90vh" align="center">
            <Stack width="300px">
                <Heading fontSize="3xl" color="blue" align="center">PLAYERS</Heading>
                <List p="4" minH = "70vh" boxShadow = "xl" borderRadius = "md" bgGradient ={
                    'linear(to-b,yellow.300,yellow.200)'
                } >
                </List>
            </Stack>
            <Stack width="300px">
                <Heading fontSize="3xl" color="blue" align="center">TEAMS</Heading>
                <List p="4" minH = "70vh" boxShadow = "xl" borderRadius = "md" bgGradient ={
                    'linear(to-b,blue.300,blue.200)'
                } >
                </List>
            </Stack>
            </Flex>

        </Container>
    )
}

