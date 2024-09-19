import HomeCard from "./home/HomeCard";
import StartGuide from "./home/StartGuide";

export default function Page() {
  console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HomeCard
        title="データ整理の自動化"
        imageUrl="/vercel.svg"
        description="日々の業務のちょっとした自動化"
      />
      <StartGuide />
    </div>
  );
}
