import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from 'store';

const Bottom = () => {

    const dispatcher = useDispatch();

    return (
        <div>
            <h1>Bottom</h1>
            <button onClick={()=>dispatcher(increase("increase"))}>증가</button>
            <button onClick={()=>dispatcher(decrease("decrease"))}>감소</button>
        </div>
    );
};

export default Bottom;