import MenuTab from "./menuTab";
import TradeList from "./tradeList";

export default function Trades(){
    return <div className="w-full">
        <MenuTab/>

        <div className="px-3! py-3! bg-white! border-[0.5px]! border-[#DDDDDD]! rounded-lg">
            <TradeList/>
        </div>
    </div>
}