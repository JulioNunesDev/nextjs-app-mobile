import Image from "next/image";

import { FaCalendar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";


export default function MatchCard({image, title, date, user, typegame, gamename}:any){
return (
    <div className="h-[110px] px-2  bg-[#182263] rounded-lg flex  items-center gap-5 border-b-2">
        <div>
            <Image width={68} height={64} src={image} alt="Image Card Match"/>
        </div>
        <div className="flex flex-col ">
            <div className="flex justify-between items-center">
            <h3 className="text-[#DDE3F0] font-bold text-xl">{title}</h3>
            <p className="text-[#ABB1CC] font-light">{typegame}</p>
            </div>
            <p className="text-[#ABB1CC] font-light">{gamename}</p>
            <div className="flex justify-between items-center gap-8 font-light text-[#e0e4f7]">
                <div className="flex items-center gap-2">
                <FaCalendar color="red"/>
                <p>{date}</p>
                </div>
                <div className="flex items-center gap-1">
                <FaRegUser  color="red" />
                <p>{user}</p>
                </div>
            </div>
        </div>
    </div>
    )
}