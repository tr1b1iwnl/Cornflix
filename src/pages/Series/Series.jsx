import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import {
  selectAllNetflixOriginals,
  selectNetflixError,
} from "../../redux/slices/netflixOriginalsSlice";
import {
  selectAllTrending,
  selectTrendingError,
} from "../../redux/slices/trendingSlice";
import { fetchTvShow, selectTvShow } from "../../redux/slices/tvShowSlice";

export default function Series() {
  const dispatch = useDispatch();
  const { genres, status } = useSelector(selectTvShow);
  const trending = useSelector(selectAllTrending);
  const netflixOriginals = useSelector(selectAllNetflixOriginals);

  const trendingError = useSelector(selectTrendingError);
  const netflixError = useSelector(selectNetflixError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTvShow());
    }
  }, [status, dispatch]);

  const [firstSeries, ...otherSeries] =
    status === "success" ? genres[0].videos : genres;

  let rows = [];
  if (!trendingError && !netflixError) {
    rows.push({ title: "Trending Now", videos: trending });
    rows.push({ title: "Cornflix Originals", videos: netflixOriginals });
    genres.forEach((genre) => {
      rows.push({ title: genre.title, videos: genre.videos });
    });
  }

  return (
    <div className="Series">
      <Banner movie={firstSeries} />
      {rows &&
        rows.map((row, i) => (
          <Carousel
            key={row.title}
            title={row.title}
            movies={i === 0 ? otherSeries : row.videos}
          />
        ))}
    </div>
  );
}
