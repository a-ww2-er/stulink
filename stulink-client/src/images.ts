//use this function to get images
//images(width,height, open a diffrent image, image id )(set diffrent image to false if youre using image id)
// if you want a random image then dont use image id and give different image a number in ascending order

export const images = (
  width: number,
  height?: number,
  diffentimage?: number | boolean,
  imageid?: number
) =>
  `https://picsum.photos/${imageid ? `id/${imageid}` : ""}/${width}/${height}${
    diffentimage ? `?random=${diffentimage}` : ""
  }`;
// console.log(images(300, 200, 1));
