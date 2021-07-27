import { useState,useEffect } from 'react';
import { CharacterType, fetchCharacter } from '../utils/characters';
import { CharacterInformation } from './CharacterInformation';
import  Loading  from './Loading';


const withCharacter = (Component: any) => {
  return () => {
    const [character, setCharacter] = useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;
    return <Component character={character} />;
  };
};

const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

const CharacterApplication = () => {
  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};
export default CharacterApplication;
