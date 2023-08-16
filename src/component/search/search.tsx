import { CustomSearch } from "../../shared/style/shared.style";
import { SearchProps } from './model/search.model';

function Search(props: SearchProps) {
    const { placeholder, name, value, handleChange } = props;
    return(
        <CustomSearch name={name} placeholder={placeholder} onChange={handleChange} value={value} />
    )
}

export default Search;
