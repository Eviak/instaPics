const initialState = {
    posts: [],
}

export function postReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case 'SET_POSTS':
            newState = { ...state, posts: action.posts }
            break
        case 'REMOVE_POST':
            const lastRemovedCar = state.cars.find(car => car._id === action.carId)
            cars = state.cars.filter(car => car._id !== action.carId)
            newState = { ...state, cars, lastRemovedCar}
            break
        case 'ADD_CAR':
            newState = { ...state, cars:[...state.cars, action.car]}
            break
        case 'UPDATE_CAR':
            cars = state.cars.map(car => (car._id === action.car._id)? action.car : car)
            newState = { ...state, cars}
            break
        case 'ADD_TO_CART':
            newState = { ...state, cart:[...state.cart, action.car]}
            break
        case 'REMOVE_FROM_CART':
            cart = state.cart.filter(car => car._id !== action.carId)
            newState = { ...state, cart}
            break
        case 'CLEAR_CART':
            newState = { ...state, cart: []}
            break
        case 'UNDO_REMOVE_CAR':
            if (state.lastRemovedCar) {
                newState = { ...state, cars: [...state.cars, state.lastRemovedCar], lastRemovedCar: null}
            }
            break
        default:
    }
}