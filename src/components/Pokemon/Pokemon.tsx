import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import './Pokemon.css'

interface Props {
    pokemonName: string
}

interface Pokemon {
    id: number,
    name: string,
    sprite: string,
    abilities: string[]
}

const Pokemon = ({ pokemonName }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon>({
        id: 0,
        name: '',
        sprite: '',
        abilities: []
    })

    useEffect(() => {
        const getStats = async (pokeName: string) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            const data = await response.json()
            setPokemon ({
                id: data.id,
                name: data.forms[0].name,
                sprite: data.sprites.front_default,
                abilities: [data.abilities[0].ability.name, data.abilities[1].ability.name]
            })
        }
        getStats(pokemonName)
    }, [pokemonName])

    return (
    <>
        <Card id='pokemon_card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokemon.sprite} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                    Pokemon id: {pokemon.id}
                </Card.Text>
            </Card.Body>
            <ListGroup  className="list-group-flush">
                <ListGroup.Item className='abilities'>Ability 1: {pokemon.abilities[0]}</ListGroup.Item>
                <ListGroup.Item className='abilities'>Ability 2: {pokemon.abilities[1]}</ListGroup.Item>
            </ListGroup>
        </Card>
    </>
  )
}

export default Pokemon