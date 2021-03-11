import React from "react";
import "./Feature.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
  console.log(item);

  let generos = [];
  for (let i in item.genres) {
    generos.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="feature--verticalcolor">
        <div className="feature--horizontallcolor">
          <div className="name">{item.original_name}</div>
          <div className="info">
            <div className="points">{item.vote_average} Pontos</div>
            <div className="seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="description">{item.overview}</div>
          <div className="buttons">
            <a className="buttonAssistir" href={`/watch/${item.id}`}>
              {" "}
              ▶ Assistir
            </a>
            <a className="buttonLista" href={`/list/add/${item.id}`}>
              {" "}
              🌀 Minha Lista
            </a>
          </div>
          <div className="generos">
            <strong>Gêneros: </strong> {generos.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
