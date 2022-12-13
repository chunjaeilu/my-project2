/* index.js */

// express 모듈 추가
const express = require("express");
const app = express();

const pokemons = [
  {
    name: "이상해씨",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png",
  },
  {
    name: "파이리",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
  },
  {
    name: "꼬부기",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png",
  },
];

// pokemon 요청
app.get("/pokemon/:id", (req, res) => {
  console.log(req.params);
  res.send(
    `<img src="${pokemons[req.params.id - 1].url}" alt="${
      req.params.id
    }" /> <h2>${pokemons[req.params.id - 1].name}</h2>`
  );
});

// get 요청
app.get("/", (req, res) => {
  // __dirname : 경로 지정하는 시스템변수, 프로젝트 폴더를 루트경로로 찾아준다
  res.sendFile(__dirname + "/index.html"); // 서버측 응답용 URL
  // http://localhost:3000/ : 사용자가 입력하는 요청용 URL
});

// about 페이지
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about.html");
});

// 404
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/pages/404.html");
// });

// 서버 오픈
app.listen(3000, function () {
  console.log("서버가 열림");
});
