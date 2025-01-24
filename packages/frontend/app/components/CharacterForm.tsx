'use client'
import React, { useState } from 'react'
import { createNewCharacter } from '../../utils/api'

const CharacterForm = () => {
    const [charName, setCharName] = useState<string>('')
    const [charRace, setCharRace] = useState<string>('')
    const [charClass, setCharClass] = useState<string>('')
    const [personality, setPersonality] = useState<string>('')
    const [backstory, setBackstory] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

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
            <h2 className="text-3xl font-bold text-center text-[#6e4c28] mb-8">Create a New Character</h2>

            <div className="w-[80%] max-w-3xl mx-auto bg-[#f1e4d4] p-8 rounded-lg shadow-2xl border border-[#a67c47]">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="char_name" className="block text-xl font-semibold text-[#6e4c28]">Name</label>
                        <input
                            type="text"
                            id="char_name"
                            value={charName}
                            onChange={(e) => setCharName(e.target.value)}
                            placeholder="What do they call this hero?"
                            className="mt-2 w-full px-4 py-2 border border-[#a67c47] rounded-lg bg-[#fff7e0] text-[#6e4c28] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67c47]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="char_race" className="block text-xl font-semibold text-[#6e4c28]">Race</label>
                            <select
                                id="char_race"
                                value={charRace}
                                onChange={(e) => setCharRace(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-[#a67c47] rounded-lg bg-[#fff7e0] text-[#6e4c28] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67c47]"
                            >
                                <option value="" disabled className="text-gray-400">From where do they hail?</option>
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
                        </div>

                        <div>
                            <label htmlFor="char_class" className="block text-xl font-semibold text-[#6e4c28]">Class</label>
                            <select
                                id="char_class"
                                value={charClass}
                                onChange={(e) => setCharClass(e.target.value)}
                                className="mt-2 w-full px-4 py-2 border border-[#a67c47] rounded-lg bg-[#fff7e0] text-[#6e4c28] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67c47]"
                            >
                                <option value="" disabled className="text-gray-400">What is their profession?</option>
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
                        </div>
                    </div>

                    <div>
                        <label htmlFor="personality" className="block text-xl font-semibold text-[#6e4c28]">Personality</label>
                        <input
                            type="text"
                            id="personality"
                            value={personality}
                            onChange={(e) => setPersonality(e.target.value)}
                            placeholder="What traits describe them?"
                            className="mt-2 w-full px-4 py-2 border border-[#a67c47] rounded-lg bg-[#fff7e0] text-[#6e4c28] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67c47]"
                        />
                    </div>

                    <div>
                        <label htmlFor="backstory" className="block text-xl font-semibold text-[#6e4c28]">Backstory</label>
                        <textarea
                            id="backstory"
                            value={backstory}
                            onChange={(e) => setBackstory(e.target.value)}
                            placeholder="What is their story?"
                            className="mt-2 w-full px-4 py-2 border border-[#a67c47] rounded-lg bg-[#fff7e0] text-[#6e4c28] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a67c47]"
                            rows={5}
                        />
                    </div>

                    <button type="submit" className="w-full py-2 mt-6 bg-[#a67c47] text-white rounded-lg shadow-md hover:bg-[#9a6935] focus:outline-none focus:ring-2 focus:ring-[#6e4c28]">
                        Submit Character
                    </button>
                </form>

                {error && <p className="mt-4 text-red-600 font-semibold text-center">{error}</p>}
                {success && <p className="mt-4 text-green-600 font-semibold text-center">{success}</p>}
            </div>
        </>
    )
}

export default CharacterForm
