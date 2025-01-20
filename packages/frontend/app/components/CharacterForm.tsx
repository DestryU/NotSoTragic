'use client'
import React, {useState} from 'react'
import { createNewCharacter } from '../../utils/api'



const CharacterForm = () => {
    const [ charName, setCharName ] = useState<string>('')
    const [ charRace, setCharRace ] = useState<string>('')
    const [ charClass, setCharClass ] = useState<string>('')
    const [ personality, setPersonality ] = useState<string>('')
    const [ backstory, setBackstory ] = useState<string>('')
    const [ error, setError ] = useState<string | null>(null)
    const [ success, setSuccess ] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!charName || !charRace || !charClass || !personality || !backstory) {
            setError('Please fill out all fields')
            return
        }

        const characterData = {
            char_name: charName,
            char_race: charRace,
            char_class: charClass,
            personality,
            backstory
        }

        try {
            await createNewCharacter(characterData)
            setSuccess('Character successfully created')
            setCharName('')
            setCharRace('')
            setCharClass('')
            setPersonality('')
            setBackstory('')
        } catch (error) {
            setError('Error creating character')
        }
    }

    return (
        <>
            <div className='flex flex-col'>
                <h2>Create a new character!</h2>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    
                    <label htmlFor="char_name">Character Name</label>
                    <input
                    type="text"
                    id="char_name"
                    value={charName}
                    onChange={(e) => setCharName(e.target.value)}
                    placeholder='Enter character name'/>
                    
                    <label htmlFor="char_race">Character Race</label>
                    <input
                    type="text"
                    id="char_race"
                    value={charRace}
                    onChange={(e) => setCharRace(e.target.value)}
                    placeholder='Enter character race'/>
                    
                    <label htmlFor="char_class">Character Class</label>
                    <input
                    type="text"
                    id="char_class"
                    value={charClass}
                    onChange={(e) => setCharClass(e.target.value)}
                    placeholder='Enter character class'/>
                    
                    <label htmlFor="personality">Character Personality</label>
                    <input
                    type="text"
                    id="personality"
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    placeholder='Enter character personality'/>
                    
                    <label htmlFor="backstory">Character Backstory</label>
                    <input
                    type="text"
                    id="backstory"
                    value={backstory}
                    onChange={(e) => setBackstory(e.target.value)}
                    placeholder='Enter character backstory'/>

                    <button type='submit'>Submit Character</button>

                </form>

                {error && <p>{error}</p>}
                {success && <p>{success}</p>}

            </div>
        </>
    )
}

export default CharacterForm