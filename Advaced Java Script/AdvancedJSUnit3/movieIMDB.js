async function getMovieData() {
  let movie = document.querySelector(".name");
  let name = movie.value;
  console.log(name);

  let response = await fetch(
    `http://www.omdbapi.com/?apikey=bcfcf9f7&t=${name}`
  );
  let data = await response.json();
  console.log(data.Error);

  if (data.Error === "Movie not found!") {
    Movieerror();
  } else {
    // appendData(data);
    console.log(data);
    appendData(data);
  }
}

function appendData(d) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = `${d.Poster}`;
  img.style.marginTop = "5%";
  let date = document.createElement("h4");
  date.textContent = `Release Date : ${d.Released}`;
  let director = document.createElement("h3");
  director.textContent = `Director : ${d.Director}`;
  let rating = document.createElement("h4");
  if (Number(d.imdbRating) < 8.5) {
    rating.textContent = `Rating : ${d.imdbRating}`;
  } else {
    rating.innerHTML = `Rating : ${d.imdbRating}   <span><img src="https://thumbs.dreamstime.com/z/red-recommended-rubber-vector-stamp-illustration-82954443.jpg style"></span>`;
  }

  div.append(img, date, director, rating);
  let head = document.querySelector(".innercontainer");
  head.innerHTML = null;
  head.append(div);
  document.querySelector(".name").value = "";
}

function Movieerror() {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = `https://media1.tenor.com/images/4f3c495e22fac97cfc6f21c841516d8f/tenor.gif?itemid=10936641`;

  img.style.height = "300px";
  img.style.width = "100%";
  div.append(img);
  let head = document.querySelector(".innercontainer");
  head.innerHTML = null;
  head.append(div);
  document.querySelector(".name").value = "";
}
