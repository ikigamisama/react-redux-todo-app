import { createStore } from 'redux';
import uuid from 'uuid/v4';

import  { reducerList } from './reducer'



const initState = {
    todos: [
        {
            id:uuid(),
            name:"Need a Job",
            complete:true
        },
        {
            id:uuid(),
            name:"Applying in different company",
            complete:false
        },
    ]
};

export const store = createStore(
    reducerList,
    initState,
    window.devToolsExtension && window.devToolsExtension()
)
