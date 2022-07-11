export const initialState = {
  basket: [],
  user: null
};

export const getCartTotal = (basket) =>
  basket.reduce((total, item) => total += item.price, 0)

export const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }

    case 'REMOVE_FROM_CART':
      const index = state.basket.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.basket];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart`
        )
      }

      return {
        ...state,
        basket: newCart
      }
      
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }

}