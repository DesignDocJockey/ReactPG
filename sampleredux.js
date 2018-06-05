const { createStore } = require("redux");

const defaultState = { 
    courses: [
        {
            "id": 1,
            "name": "Building Apps with React",
            "topic": "ReactJS"
        },
        {
            "id": 2,
            "name": "Building Apps with Angular",
            "topic": "AngularJS"
        },
        {
            "id":3,
            "name": "Building Apps with Angular and Redux",
            "topic": "Angular and Redux"
        }
    ]
};

//create a reducer
const reducer = (state, action) =>  
{
    return state;
};
//create a Redux Store
const store = createStore(reducer, defaultState);

function addView(viewFunction) {
    viewFunction(defaultState);

    //subscribe to Redux Store
    store.subscribe( () => {
        viewFunction(store.getState());
    });
}

addView((state)=> {
    console.log(`There are ${state.courses.length} in the library`);
});

addView((state)=> {
    console.log(`The latest course is ${state.courses[state.courses.length - 1].name} in the library`);
});

defaultState.courses.push({
    "id":4,
    "name": "Egghead Redux",
    "topic": "Redux"
});

//dispatch an action from the store 
store.dispatch({
    type: 'SOME_ACTION_TYPE',
    course: {
        "id":4,
        "name": "Egghead Redux",
        "topic": "Redux"
    }
});