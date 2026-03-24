const backgroundColors = [
  "#fff3e0",
  "#e8f5e9",
  "#e3f2fd",
  "#fce4ec",
  "#f3e5f5",
  "#e0f7fa",
];
const clubs = [
  {
    id: 1,
    color:
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    general: {
      clubName: "Liverpool",
      cityName: "Liverpool",
      dateOfFoundation: 1892,
      emblemUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    achievements: {
      countMedals: 20,
      countCups: 8,
      goalsScored: 7843,
    },
    players: [
      { id: 1, name: "Alisson" },
      { id: 2, name: "Van Dijk" },
      { id: 3, name: "Kerkez" },
      { id: 4, name: "Konate" },
      { id: 5, name: "Frimpong" },
      { id: 6, name: "Gravenberch" },
      { id: 7, name: "Mac Allicter" },
      { id: 8, name: "Szoboslai" },
      { id: 9, name: "Salah" },
      { id: 10, name: "Wirtz" },
      { id: 11, name: "Ekitike" },
    ],
  },
  {
    id: 2,
    color:
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    general: {
      clubName: "Manchester City",
      cityName: "Manchester",
      dateOfFoundation: 1880,
      emblemUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    achievements: {
      countMedals: 10,
      countCups: 7,
      goalsScored: 5200,
    },
    players: [
      { id: 1, name: "Trafford" },
      { id: 2, name: "Rúben Dias" },
      { id: 3, name: "Ake" },
      { id: 4, name: "Nunes" },
      { id: 5, name: "Bernardo Silva" },
      { id: 6, name: "Rodri" },
      { id: 7, name: "Sherki" },
      { id: 8, name: "Doku" },
      { id: 9, name: "Haaland" },
      { id: 10, name: "Foden" },
      { id: 11, name: "Semenyo" },
    ],
  },
];
export default clubs;
