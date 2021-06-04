import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description: "Lorem ipsum is simply dummy text of the print",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem ipsum is simply dummy text of the print. Lorem ipsum is simply dummy text of the print",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/good-times",
      awards: [
        {
          title: "Truly A masterpiece",
          description: "Lorem ipsum is simply dummy text of the print",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem ipsum is simply dummy text of the print. Lorem ipsum is simply dummy text of the print",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Truly A masterpiece",
          description: "Lorem ipsum is simply dummy text of the print",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem ipsum is simply dummy text of the print. Lorem ipsum is simply dummy text of the print",
        },
      ],
    },
  ];
};
