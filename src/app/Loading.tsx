'use client'
import Image from "next/image";
import ImageLogo from '@/../public/assets/logo.png'

export default function Loading(){
return <div>
<Image src={ImageLogo} alt="Image Loading"  className="animate-pulse"/>
</div>
}