'use client'

import React, {useEffect, useState} from 'react'
import { fetchData } from '../../utils/api'

const CharacterList = () => {
    const [characters, setCharacters] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const data = await fetchData()
                setCharacters(data)
            } catch (error) {
                setError('Error fetching characters')
            }
        }

        getCharacters()

    }, [])

    if (error)  {
        return <div>{error}</div>
    }

    return (
        <>
            <div>
                <h1>
                    Character List
                </h1>

                <ul>
                    {characters.map((character, index) => (
                        <li key={index} className='text-xl'>{character.char_name}</li>
                    ))}

                    {characters.map((character, index) => (
                        <li key={index} className='text-sm italic'>`The {character.char_race} {character.char_class}`</li>
                    ))}

                    {characters.map((character, index) => (
                        <li key={index}>{character.backstory}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CharacterList