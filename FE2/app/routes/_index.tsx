import type { MetaFunction } from "@remix-run/node"
import { Button } from "~/layouts/Button";
import img from "../../images/best_sell_5.jpg";
import Dishes from "./component/_dishes";
import Home from "./component/_home";
import About from "./component/_about";

export const meta: MetaFunction = () => {
  return [
    { title: "Online bakery" },
    { name: "description", content: "Online Bakery" },
  ];
};

export default function Index() {
  return (
    <div>
      <div id="home"><Home /></div>

      <div id="dishes"><Dishes/></div>

      <div id="about"><About /></div>
      
    </div>
  );
}