import Header from "../components/Reusables/Headers/HomeHeader/Header";
import Grid from "../components/Pages/Home/Grid/Grid";
import dummyGridData from "../dummyGridData";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Grid data={dummyGridData} />
    </div>
  );
}
