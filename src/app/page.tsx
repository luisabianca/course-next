import { GetPhotos } from "@/actions/get-photos";
import Feed from "@/components/Feed/feed";

export default async function Home() {
  const data = await GetPhotos();

  return (
    <div>
      <section className="container mainContainer">
        <Feed photos={data}/>
      </section>
    </div>
  );
}
