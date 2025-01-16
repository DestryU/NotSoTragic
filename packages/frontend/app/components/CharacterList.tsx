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
                    {characters.map((characters, index) => (
                        <li key={index}>{characters.char_name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CharacterList