export function reducer(state = {}, action) {
    if (action.type === "GET_FRIENDS") {
        state = {
            ...state,
            friendsList: action.payload,
        };
        console.log("state in get friends(reducer): ", state);
    }

    if (action.type === "ACCEPT_FRIEND") {
        console.log("state in accept friends(reducer): ", state);
        state = {
            ...state,
            friendsList: state.friendsList.map((elem) => {
                if (elem.id === action.profileId) {
                    return {
                        ...elem,
                        accepted: true,
                    };
                } else {
                    return elem;
                }
            }),
        };
    }

    if (action.type === "UNFRIEND") {
        console.log("state in unfriend(reducer): ", state);
        state = {
            ...state,
            friendsList: state.friendsList.filter(
                (elem) => elem.id !== action.profileId
            ),
        };
    }

    if (action.type === "GET_MSGS") {
        state = { ...state, messages: action.payload };
        console.log("state in GET_MSGS(reducer): ", state);
    }

    if (action.type === "POST_MSG") {
        state = { ...state, message: action.payload };
        console.log("state in POST_MSG(reducer): ", state);
    }

    return state;
}

/*
friends -> dispatch -> actions -> server -> reducer -> friends
*/

//non ho capito molto bene la parte ACCEPT_FRIEND e UNFRIEND (cosa fanno veramente map e filter?)
// friendlist é l'array finale che andremo ad utilizzare in friends component
// ...state va semplicemente usato sempre, perché non puo essere modificato in reducer
// map e filter servono clonarlo e tirare fuori i risultati che ci servono in friends

// GET_LIST or RECEIVE_FRIENDS_WANNABES - clones the global state and adds to it a property called friendsWannabes whose value is the array of friends and wannabes
//questo in pt9 non l'ho capito // forse si invece, é quello che sto giá facendo
