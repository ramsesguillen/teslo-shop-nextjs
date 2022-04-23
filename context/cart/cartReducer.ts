import { ICartProduct } from '../../interfaces';
import { CartState } from './';
import { ShippingAddress } from './';


type CartActionType =
    | { type: '[Cart] - Load cart from cookies | storage', payload: ICartProduct[] }
    | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
    | { type: '[Cart] - change cart quantity', payload: ICartProduct }
    | { type: '[Cart] - Remove product in cart', payload: ICartProduct }
    | { type: '[Cart] - LoadAddress from Cookies', payload: ShippingAddress }
    | { type: '[Cart] - Update Address', payload: ShippingAddress }
    | {
        type: '[Cart] - Update order summary',
        payload: {
            numberOfItems: number;
            subTotal: number;
            tax: number;
            total: number;
        }
    }



export const cartReducer = ( state: CartState, actions: CartActionType ): CartState => {
    switch (actions.type) {
        case '[Cart] - Load cart from cookies | storage':
            return {
                ...state,
                isLoaded: true,
                cart: [...actions.payload],
            }

        case '[Cart] - Update products in cart':
            return {
                ...state,
                cart: [ ...actions.payload],
            }

        case '[Cart] - change cart quantity':
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product._id !== actions.payload._id ) return product;
                    if (product.size !== actions.payload.size ) return product;

                    return actions.payload;
                })
            }

        case '[Cart] - Remove product in cart':
            return {
                ...state,
                cart: state.cart.filter(product => !(product._id === actions.payload._id && product.size === actions.payload.size))
            }

        case '[Cart] - Update order summary':
            return {
                ...state,
                ...actions.payload
            }

        case '[Cart] - Update Address':
        case '[Cart] - LoadAddress from Cookies':
                return {
                    ...state,
                    shippingAddress: actions.payload
                }
        default:
            return state;
    }
}
