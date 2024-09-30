import { Cart } from "./Cart";
import Products from "./Products";

export default interface OrderInfo {
    id: string;
    accId: string;
    date: string;
    address: string;
    note: string;
    total: number;
    items: Cart[];
    status: string;
}