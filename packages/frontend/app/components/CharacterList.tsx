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
                {characters.map((character, index) => (
                    <div key={index} className='bg-gray-200 p-4 mb-4 rounded'>
                        <h2 className='text-2xl'>{character.char_name}</h2>
                        <h3 className='text-sm italic text-gray-700 mt-2'>`The {character.char_race} {character.char_class}`</h3>
                        <p className='mt-4'>{character.backstory}</p>
                    </div>
                ))}
        </>
    )
}

export default CharacterList