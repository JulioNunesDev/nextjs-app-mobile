import MatchCard from "./MatchCard";
import ImageTest from  '@/../public/assets/red.png'
import Imagelol from  '@/../public/assets/LOL.png'
import Imagecs from  '@/../public/assets/CS.png'
import NavWidget from "../WidgetMobile/NavWidget";
export default function MatchComponent(){
return (
    <section className="" >
        <div className="flex justify-between items-center mb-6  ">
            <h2 className="font-bold text-xl text-[#DDE3F0]">Partidas agendadas</h2>
            <button className="font-light">Total 6</button>
        </div>
        <div className="flex flex-col  gap-3 ">
            <MatchCard image={Imagelol}  title="Lendários" date="Sex 18/06 às 21:00h" user="1k" typegame="Ranqueada" gamename="League of Legends"/>
            <MatchCard image={ImageTest}  title="Yeah, boy" date="Qua 23/06 às 19:00h" user="50" typegame="Diversão" gamename="Red Dead Redemption 2"/>
            <MatchCard image={Imagecs}  title="Rumo ao topo" date="Dom 20/06 às 09:00h" user="4k" typegame="1x1" gamename="Counter Strike: GO"/>
           
            <NavWidget/>
        </div>
    </section>
    )
}