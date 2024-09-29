import { create } from "zustand";
import Products from "~/interface/Products";
import { persist } from "zustand/middleware";
import Product from "~/interface/Products";

interface CartState {
    cart: Products[],
    login: (cartInit: Products[]) => void,
    logout: () => void,
    changeQuantity: (newCart: Products[]) => void,
    addNew: (newItem: Products) => void,
    remove: (item: Product) => void,
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
                    cart: currentCart.filter((cartItem) => cartItem.id !== item.id)
                });
            }
        }),
        {
            name: "cart-storage"
        }
    )
)

export default cartStore;