const getImgGiphy = async () => {
  try {
    const API_KEY = "pZF5taT2C8y5Jk6AOVAZpZhF7B0b4j17";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const response = await fetch(url);
    const { data } = await response.json();
    const gif = await data.images.original.url;

    const img = document.createElement("img");
    img.src = gif;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImgGiphy();
