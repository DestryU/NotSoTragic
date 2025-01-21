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

            <h2 className='text-2xl text-blue-400'>Create a new character!</h2>
            
            <div className=''>


                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 divide-y-[1px] divide-black'>
                    
                    <label htmlFor="char_name" className='block w-full'>
                        Name
                        <input
                        type="text"
                        id="char_name"
                        value={charName}
                        onChange={(e) => setCharName(e.target.value)}
                        placeholder='What do they call this hero?'
                        className='block w-full'/>
                    </label>


                    <label htmlFor="char_race" className='block w-full'>
                        Race
                        <input
                        type="text"
                        id="char_race"
                        value={charRace}
                        onChange={(e) => setCharRace(e.target.value)}
                        placeholder='From where do they hail?'
                        className='block w-full'/>
                    </label>


                    <label htmlFor="char_class" className='block w-full'>
                        Class
                        <input
                        type="text"
                        id="char_class"
                        value={charClass}
                        onChange={(e) => setCharClass(e.target.value)}
                        placeholder='What is their profession?'
                        className='block w-full'/>
                    </label>
                    
                    
                    <label htmlFor="personality" className='block w-full'>
                        Personality
                        <input
                        type="text"
                        id="personality"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        placeholder='What traits describe them?'
                        className='block w-full'/>
                    </label>
                    

                    <label htmlFor="backstory" className='block w-full'>
                        Backstory
                        <input
                        type="text"
                        id="backstory"
                        value={backstory}
                        onChange={(e) => setBackstory(e.target.value)}
                        placeholder='What is their story?'
                        className='block w-full'/>
                    </label>


                    <button type='submit' className='pt-5'>Submit Character</button>

                </form>

                {error && <p>{error}</p>}
                {success && <p>{success}</p>}

            </div>
        </>
    )
}

export default CharacterForm