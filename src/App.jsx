import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./List/Tmdb";
import MovieRow from "./components/Movie/MovieRow";
import Feature from "./components/Feature/PageFeature";
import Header from "./components/Header/PageIndex";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blacktop, setBlacktop] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomCho = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomCho];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(choseInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlacktop(true);
      } else {
        setBlacktop(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blacktop} />

      {featureData && <Feature item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <span>Dados retirados do site Themoviedb.org</span>
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://i.pinimg.com/originals/34/cc/62/34cc62d1df1c8328f56ae7a7acf2e83a.gif"
            alt="carregando"
          />
        </div>
      )}
    </div>
  );
};
