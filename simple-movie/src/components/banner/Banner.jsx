import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden select-none">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies &&
          movies?.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <BannerItem movie={movie}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ movie }) {
  const { title, poster_path } = movie;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-0 w-full text-white ">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-3 border border-white rounded-md">Action</span>
          <span className="p-3 border border-white rounded-md">Adventure</span>
          <span className="p-3 border border- rounded-md">Drama</span>
        </div>
        <button className="py-3 px-6 bg-primary rounded-lg mb-3 font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
