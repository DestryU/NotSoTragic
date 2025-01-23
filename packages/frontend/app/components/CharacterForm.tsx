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
            
            <div className='w-[80%]'>


                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 divide-y-[1px] divide-black'>
                    
                    <label htmlFor="char_name" className='block w-full'>
                    <h4 className='text-xl font-semibold'>Name</h4>
                        <input
                        type="text"
                        id="char_name"
                        value={charName}
                        onChange={(e) => setCharName(e.target.value)}
                        placeholder='What do they call this hero?'
                        className='block w-full'/>
                    </label>

                    <div className='grid grid-cols-2 gap-3'>
                        <label htmlFor="char_race" className='block w-full'>
                            <h4 className='text-xl font-semibold'>Race</h4>
                           
                            <select
                            id="char_race"
                            value={charRace}
                            onChange={(e) => setCharRace(e.target.value)}
                            className='block w-full'>
                                <option value="" disabled className='text-gray-400'>From where do they hail?</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Elf">Elf</option>
                                <option value="Halfling">Halfling</option>
                                <option value="Human">Human</option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="Gnome">Gnome</option>
                                <option value="Half-Elf">Half-Elf</option>
                                <option value="Half-Orc">Half-Orc</option>
                                <option value="Tiefling">Tiefling</option>
                            </select>
                        </label>

                        <label htmlFor="char_class" className='block w-full'>
                        <h4 className='text-xl font-semibold'>Class</h4>
                            <select
                            id="char_class"
                            value={charClass}
                            onChange={(e) => setCharClass(e.target.value)}
                            className='block w-full'>
                                <option value="" disabled className='text-gray-400'>What is their profession?</option>
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                            </select>
                        </label>
                    </div>

                    <label htmlFor="personality" className='block w-full'>
                        <h4 className='text-xl font-semibold'>Personality</h4>
                        <input
                        type="text"
                        id="personality"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        placeholder='What traits describe them?'
                        className='block w-full'/>
                    </label>

                    <label htmlFor="backstory" className='block w-full'>
                        <h4 className='text-xl font-semibold'>Backstory</h4>
                        <textarea
                        id="backstory"
                        value={backstory}
                        onChange={(e) => setBackstory(e.target.value)}
                        placeholder='What is their story?'
                        className='block w-full'
                        rows={5} />
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