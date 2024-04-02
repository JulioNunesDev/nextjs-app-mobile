import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function NavBack (){
return (
    <header className=" h-[60px] bg-[#1D2766] flex items-center justify-center gap-4 ">
           <Link href='/home'>
            <FaArrowLeftLong size={20}/>
           </Link>
           
            <h2 className="font-bold text-xl  text-[#DDE3F0]">Agendar partida</h2>
        </header>
    
    )
}