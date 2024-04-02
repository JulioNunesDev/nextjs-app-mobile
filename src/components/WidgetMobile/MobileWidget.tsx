import { FaBatteryEmpty } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";




export default function MobileComponent ({colo, yes, pad}:any){
return(
    <div className={`h-[30px] flex justify-between ${yes ? 'mb-4' : '' } bg-[${colo}] rounded-tl-2xl rounded-tr-2xl ${pad ? 'px-4' : ''} `}>
        <p className="pt-2">10:00</p>
        <div className="bg-white rounded-bl-lg  rounded-br-lg rounded-tl-sm rounded-tr-sm w-[210px]"></div>
        <div className="flex justify-center gap-1 pt-2">
        <FaSignal/>
        <FaWifi/>
        <FaBatteryEmpty/>
        </div>
    </div>
    )
}