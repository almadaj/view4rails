import React from 'react';
import { SearchBarContainer, SearchButton, SearchInput } from './styles';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText?: string;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  buttonText,
  onSearch,
}) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder={placeholder || 'Procurar...'}
        value={value}
        onChange={onChange}
      />
      {buttonText && onSearch ? (
        <SearchButton onClick={onSearch}>{buttonText}</SearchButton>
      ) : null}
    </SearchBarContainer>
  );
};

export default SearchBar;
