import React from 'react';
import CharacterList from '../components/CharacterList';

const ViewCharactersPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[40%] h-full">
                <CharacterList/>
            </div>
        </div>
    );
};

export default ViewCharactersPage;
