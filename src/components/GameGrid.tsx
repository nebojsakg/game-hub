import React from 'react';
import {Text} from "@chakra-ui/react";
import {Simulate} from "react-dom/test-utils";
import useGames from "../hooks/useGames";


const GameGrid = () => {
    const {games, error} = useGames();

    return (
        <>
            <Text>{error}</Text>
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;