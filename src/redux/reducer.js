const initialState = {
    menu: false
}

const SLIDE_MENU = 'SLIDE_MENU'

export function slideMenu(menu){
    return{
        type: SLIDE_MENU,
        payload: {menu}
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SLIDE_MENU:
            return Object.assign({}, state, {menu: !action.payload.menu})
        default:
            return state
    }
}