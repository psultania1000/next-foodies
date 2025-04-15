import Link from "next/link";
import MealsPage from "./meals/[meal]/page";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link href={"./meals"}>Meals</Link>
      <Link href={"./meals/share"}>Share</Link>
      <Link href={"./community"}>Community</Link>
    </main>
  );
}
