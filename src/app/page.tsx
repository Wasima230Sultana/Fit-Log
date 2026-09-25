import Image from "next/image";
import Banner from "./workouts/Banner";
import WorkOuts from "./workouts/page";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <WorkOuts></WorkOuts>
   </div>
  );
}
