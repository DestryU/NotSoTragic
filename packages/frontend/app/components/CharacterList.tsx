'use client';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';

const CharacterList = () => {
    const [characters, setCharacters] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Function to generate a random number between 1 and 5
    const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const data = await fetchData();
                setCharacters(data);
            } catch (error) {
                setError('Error fetching characters');
            }
        };

        getCharacters();
    }, []);

    if (error) {
        return <div className="text-red-600 font-bold text-center mt-4">{error}</div>;
    }

    return (
        <div className="flex flex-wrap h-full w-[40%] justify-center gap-6 p-6 bg-gradient-to-br from-[#f1e4d4] via-[#e0c1a7] to-[#f1e4d4] min-h-screen">
            {characters.map((character, index) => {
                // Randomly assigning each corner flourish
                const topLeftCorner = getRandomNumber();
                const topRightCorner = getRandomNumber();
                const bottomLeftCorner = getRandomNumber();
                const bottomRightCorner = getRandomNumber();

                return (
                    <div
                        key={index}
                        className="w-full max-w-md bg-[#f7f0e1] border-[2px] border-[#a67c47] p-6 rounded-xl shadow-xl relative overflow-hidden"
                    >
                        {/* Background and Layers */}
                        <div className="absolute inset-0 bg-[#dfc7a7] opacity-50 mix-blend-multiply pointer-events-none"></div>
                        <h2 className="text-4xl font-serif font-bold text-[#6e4c28] relative z-10 text-shadow-lg">
                            {character.char_name}
                        </h2>
                        <h3 className="text-lg italic text-[#7d5f35] mt-2 relative z-10 text-shadow-md">
                            The {character.char_race} {character.char_class}
                        </h3>
                        <p className="mt-4 text-[#4b392e] text-sm leading-relaxed relative z-10">
                            {character.backstory}
                        </p>

                        {/* Randomly assigned Corner Flourishes */}
                        {/* Top-left corner */}
                        {topLeftCorner === 1 && (
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] rounded-full flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full border-2 border-[#9d7e49] relative">
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                </div>
                            </div>
                        )}
                        {topLeftCorner === 2 && (
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9d7e49] rounded-t-full"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                </div>
                            </div>
                        )}
                        {topLeftCorner === 3 && (
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-[#9d7e49] rounded-full rotate-45 transform origin-center"></div>
                                </div>
                            </div>
                        )}
                        {topLeftCorner === 4 && (
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute top-0 left-0 w-1 h-4 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-1 h-4 bg-[#9d7e49]"></div>
                                </div>
                            </div>
                        )}

                        {/* Top-right corner */}
                        {topRightCorner === 1 && (
                            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                </div>
                            </div>
                        )}
                        {topRightCorner === 2 && (
                            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9d7e49] rounded-t-full"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                </div>
                            </div>
                        )}
                        {topRightCorner === 3 && (
                            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-[#9d7e49] rounded-full rotate-45 transform origin-center"></div>
                                </div>
                            </div>
                        )}
                        {topRightCorner === 4 && (
                            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute top-0 left-0 w-1 h-4 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-1 h-4 bg-[#9d7e49]"></div>
                                </div>
                            </div>
                        )}

                        {/* Bottom-left corner */}
                        {bottomLeftCorner === 1 && (
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] rounded-full flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-[#9d7e49] rounded-full rotate-45 transform origin-center"></div>
                                </div>
                            </div>
                        )}
                        {bottomLeftCorner === 2 && (
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                </div>
                            </div>
                        )}
                        {bottomLeftCorner === 3 && (
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9d7e49] rounded-t-full"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                </div>
                            </div>
                        )}
                        {bottomLeftCorner === 4 && (
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-[#9d7e49] rounded-full rotate-45 transform origin-center"></div>
                                </div>
                            </div>
                        )}

                        {/* Bottom-right corner */}
                        {bottomRightCorner === 1 && (
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9d7e49] transform rotate-45 origin-center"></div>
                                </div>
                            </div>
                        )}
                        {bottomRightCorner === 2 && (
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9d7e49] rounded-t-full"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#9d7e49] rounded-full"></div>
                                </div>
                            </div>
                        )}
                        {bottomRightCorner === 3 && (
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-[#9d7e49] rounded-full rotate-45 transform origin-center"></div>
                                </div>
                            </div>
                        )}
                        {bottomRightCorner === 4 && (
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#9d7e49] flex justify-center items-center">
                                <div className="w-12 h-12 bg-[#b79c6e] rounded-full relative">
                                    <div className="absolute top-0 left-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute top-0 left-0 w-1 h-4 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#9d7e49]"></div>
                                    <div className="absolute bottom-0 right-0 w-1 h-4 bg-[#9d7e49]"></div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CharacterList;
