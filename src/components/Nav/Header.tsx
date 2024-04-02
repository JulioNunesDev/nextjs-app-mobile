import Image from "next/image";
import Link from "next/link";
import ImageProfile from '@/../public/assets/Profile.png'

export default function HeaderComponent(){
    return (
        <header className="flex  justify-between h-[60px] mt-4">
            <div className="flex  gap-4 justify-center items-center ">
                <Link href='/login'>
                <Image className=" bg-red-600 rounded-lg" width={50} height={50} src={ImageProfile} alt="Image Profile"/>
                </Link>
                <div>
                    <h2>Olá, User Name</h2>
                    <p>Seja bem-vindo!</p>
                </div>
            </div>
            <div className=" flex justify-center items-center ">
                <Link href='/agenda' className="px-5 bg-red-600 rounded-lg py-3 font-bold text-xl ">+</Link>
            </div>
        </header>
        )
}