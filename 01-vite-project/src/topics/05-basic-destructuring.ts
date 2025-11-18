interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "The lopp",
  details: {
    author: "lipm bisquit",
    year: 2005,
  },
};

const { song, songDuration: duration } = audioPlayer; //destructuracion, se supone que song es un atributo que exite en el objeto

const { author } = audioPlayer.details;

// console.log(audioPlayer.song)
// console.log(song)
// console.log(song, duration)
// console.log(song, author)

const bdz: string[] = ["goku", "vegeta", "elotro"];
console.log("p[personaje 3 ", bdz[2] || "not found");



export {};
