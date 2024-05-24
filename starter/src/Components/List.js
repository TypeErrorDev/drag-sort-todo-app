import React from 'react';
import styled from "styled-components";
import {useSortable} from "@dnd-kit/sortable";

const check = <i className="fa-solid fa-circle-check"></i>

function List({name, completed, id, removeTodo}) {
    return (
        <ListStyled>
            <li onDoubleClick={() => removeTodo(id)}>
                <p>{name}</p>
            </li>
            <div className="complete-btn">
                {check}
            </div>

        </ListStyled>
    );
}

const ListStyled = styled.div`

`

export default List;