import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import * as S from './styles';
import { loadInitialProducts } from '../products-slice';
import Button from '../../../common-ui/button';

const SearchBar = () => {
  const searchedTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );
  const [searchTerm, setSearchTerm] = useState(searchedTerm);

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loadInitialProducts(searchTerm));
  };

  return (
    <S.SearchBar onSubmit={handleSubmit}>
      <S.Input value={searchTerm} onChange={handleChange} />
      <Button type="submit">검색</Button>
    </S.SearchBar>
  );
};
export default SearchBar;
