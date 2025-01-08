import React from 'react';
import { SearchBarContainer, SearchButton, SearchInput } from './styles';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
}) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder={placeholder || 'Procurar alunos...'}
        value={value}
        onChange={onChange}
      />
      <SearchButton onClick={onSearch}>Procurar</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
