import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { loadProductsBySearch } from '../products-slice';
import * as S from './styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loadProductsBySearch(searchTerm));
  };

  return (
    <S.SearchBar onSubmit={handleSubmit}>
      <S.Input value={searchTerm} onChange={handleChange} />
      <button type="submit">검색</button>
    </S.SearchBar>
  );
};
export default SearchBar;
