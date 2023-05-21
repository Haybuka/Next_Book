import Banner from "@/components/banner/banner";
import Carousel from "@/components/carousel/carousel";
import Genre from "@/components/genres/genre";

export default function Home() {
  return (
    <main className="py-10">
      <Banner />
      <Genre />
      <Carousel />
    </main>
  );
}
