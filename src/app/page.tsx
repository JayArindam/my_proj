import { ModeToggle } from "@/components/mode-toggle";
import Nav from "@/components/nav";
import TypingEffect from "@/components/type_effect/typeeffect";
import Tos from "@/components/tos";

export default function Home() {

  const tos_text = "🔮 Welcome, adventurer, to the Temple of Scripts! Here you'll find magical scripts to optimize your programming tasks... Consult the docs now to unlock their power... 🪄"
  return (
    <>
      <Nav />
      
      <Tos />

      <div className="type-eff">
        <TypingEffect text={tos_text} speed={50}/>
      </div>
      
      <ModeToggle />
    </>
  );
}
