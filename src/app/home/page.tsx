
import MatchComponent from "@/components/MatchGames/Match";

import MatchList from "@/components/MatchGames/MatchList";
import HeaderComponent from "@/components/Nav/Header";
import MobileComponent from "@/components/WidgetMobile/MobileWidget";

import { Suspense } from "react";
import Loading from "../Loading";




export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      
    <main className="w-[375px] h-[720px] rounded-2xl bg-main px-4">
      <MobileComponent/>
     <HeaderComponent/>
     <MatchList/>
     <MatchComponent/>
     
    </main>
    </Suspense>
  );
}
