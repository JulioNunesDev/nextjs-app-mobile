import MatchList from "@/components/MatchGames/MatchList";
import NavBack from "@/components/Nav/NavBack";
import MobileComponent from "@/components/WidgetMobile/MobileWidget";
import NavWidget from "@/components/WidgetMobile/NavWidget";
import { IoIosArrowForward } from "react-icons/io";



export default   function agenda(){
return (
    <div className="w-[375px] h-[720px] bg-main rounded-2xl  relative ">
    <MobileComponent colo='#1D2766' yes={false} pad={true}/>
    <NavBack/>
    <div className="px-4 flex flex-col gap-4">
    <MatchList/>
    <div className="border-[#646b8a] rounded-lg h-[60px] border flex justify-center items-center">
        <button className="font-bold flex items-center gap-4 text-xl">Selecione um servidor <IoIosArrowForward size={20}/> </button>
    </div>

    <div className="flex items-center justify-around ">
        <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-[#DDE3F0] font-bold">Dia e mês</label>
            <input  className="border border-[#646b8a] p-3 bg-[#243189] rounded-lg font-light text-[#ABB1CC]" type="date" placeholder="dd/mm" />
        </div >
        <div className="flex flex-col gap-2">
           <label htmlFor="date" className="text-[#DDE3F0] font-bold">Horário</label>
            <input className="p-3 border border-[#646b8a] bg-[#243189] rounded-lg font-light text-[#ABB1CC]" type="date" placeholder="hh:mm" />
        </div>
    </div>
    <div className="flex flex-col gap-4 items-center">
    <label htmlFor="date" className="text-[#DDE3F0] font-bold">Descrição</label>
        <textarea name="" id=""  className="bg-[#243189] w-[340px] h-[100px] rounded-md border border-[#646b8a] "></textarea>
        <button className="rounded-lg w-[50%] py-4 mb-2 bg-red-600">Agendar</button>

    </div>
    </div>
         <NavWidget/>

  </div>
    )
}