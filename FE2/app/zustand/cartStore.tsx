import { create } from "zustand";
import Products from "~/interface/Products";
import { persist } from "zustand/middleware";
import Product from "~/interface/Products";
import { Cart } from "~/interface/Cart";

interface CartState {
    cart: Cart[],
    login: (cartInit: Cart[]) => void,
    logout: () => void,
    changeQuantity: (newCart: Cart[]) => void,
    addNew: (newItem: Cart) => void,
    remove: (item: Cart) => void,
}

const cartStore = create<CartState>() (
    persist(
        (set, get) => ({
            cart: [],
            login: (cartInit) => {
                set({cart: cartInit})
            },
            logout() {
                set({ cart: []})
            },
            changeQuantity: (newCart) => {
                set({cart: newCart})
            },
            addNew: (newItem) => {
                const currentCart = get().cart;
                set({cart: [...currentCart,  newItem]});
            },
            remove: (item) => {
                const currentCart = get().cart;
                set({
                    cart: currentCart.filter((cartItem) => cartItem.item.id !== item.item.id)
                });
            }
        }),
        {
            name: "cart-storage"
        }
    )
)

export default cartStore;