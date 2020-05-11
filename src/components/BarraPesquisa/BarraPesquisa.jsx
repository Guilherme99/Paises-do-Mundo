import React from 'react';

import { Search, Barra} from './styles';

function BarraPesquisa(props) {
  return(
    <Barra>
        <Search>
            <input type="text" placeholder="Digite o nome do Pais" name="pesquisa" onChange={props.handleSearch} />
        </Search>
    </Barra>
  );
}

export default BarraPesquisa;