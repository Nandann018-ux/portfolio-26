import BulbReveal from "@/components/BulbReveal";
import Spine from "@/components/Spine";
import Chronology from "@/components/Chronology";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Spine />
      <BulbReveal />
      <div className="pt-[100vh]">
        <Chronology />
      </div>
    </main>
  );
}
