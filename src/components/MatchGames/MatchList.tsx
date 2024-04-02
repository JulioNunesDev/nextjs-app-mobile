import Image from "next/image";
import ImageRank from '@/../public/assets/Rank.png'
import ImageDuel from '@/../public/assets/Duel.png'
import ImageFunny from '@/../public/assets/funny.png'
import Link from "next/link";

export default function MatchList(){
return (
    <div className=" h-[130px] flex gap-2 my-5 overflow-hidden">
        <Link href=''>
        <div className="border border-[#646b8a] rounded-lg bg-[#243189]  w-[120px] h-[100%] flex flex-col items-center justify-center gap-2">
            <Image src={ImageRank} alt="Image Match"/>
            <h2 className="font-bold text-[#DDE3F0]">Ranqueada</h2>
        </div>
        </Link>
        <Link href=''>
        <div className="border border-[#646b8a] rounded-lg bg-[#243189]  w-[120px] h-[100%] flex flex-col items-center justify-center gap-2">
            <Image src={ImageDuel} alt="Image Match"/>
            <h2 className="font-bold text-[#DDE3F0]">Ranqueada</h2>
        </div>
        </Link>
        <Link href=''>
        <div className="border border-[#646b8a] rounded-lg bg-[#243189]  w-[120px] h-[100%] flex flex-col items-center justify-center gap-2">
            <Image src={ImageFunny} alt="Image Match"/>
            <h2 className="font-bold text-[#DDE3F0]">Ranqueada</h2>
        </div>
        </Link>
    </div>
    )
}