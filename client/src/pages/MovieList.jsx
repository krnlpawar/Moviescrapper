import { Eye, EyeClosed, Folder, Plus, Trash } from "lucide-react";
import React, { useState } from "react";


const MovieList = () => {
  const movies = [
    {
      title: "1. How to Train Your Dragon",
      id: "tt26743210",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGU0ZWYzZmUtZDM5Yi00NjJlLTllNTctY2NiZWVkOTIzM2JlXkEyXkFqcGc@._V1_QL75_UX140_CR0,7,140,207_.jpg",
      year: "2025",
      rating: "",
      description:
        "Follows a young Viking as he aspires to hunt dragons, and how he unexpectedly becomes a friend of a young dragon.",
    },
    {
      title: "2. Train to Busan",
      id: "tt5700672",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_QL75_UY207_CR0,0,140,207_.jpg",
      year: "2016",
      rating: "7.6",
      description:
        "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    },
    {
      title: "3. How to Train Your Dragon",
      id: "tt0892769",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      year: "2010",
      rating: "8.1",
      description:
        "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    },
    {
      title: "4. How to Train Your Dragon: The Hidden World",
      id: "tt2386490",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzdmNmY1OGUtNTAxNi00ZTllLWJjNTAtZmUyYTJlMTY0NDM1XkEyXkFqcGc@._V1_QL75_UY207_CR8,0,140,207_.jpg",
      year: "2019",
      rating: "7.4",
      description:
        "When Hiccup discovers Toothless isn't the only Night Fury, he must seek the Hidden World, a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    },
    {
      title: "5. How to Train Your Dragon 2",
      id: "tt1646971",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      year: "2014",
      rating: "7.8",
      description:
        "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    },
    {
      title: "6. Train to Busan 2",
      id: "tt8850222",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQzODQyM2UtZjQyYy00ZTQ2LWExZDItYWU2ZGEwM2NjMmIzXkEyXkFqcGc@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      year: "2020",
      rating: "5.5",
      description:
        "A zombie virus has in the last four years spread to all South Korea. Four Koreans in Hong Kong sail through the blockade to Incheon for USD20,000,000 on a truck.",
    },
    {
      title: "7. How to Train Your Dragon: Homecoming",
      id: "tt11112140",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQ4NjRjNjEtMWRlMS00NTA3LTk5NzUtNDE0NjVkOTFlYmM2XkEyXkFqcGc@._V1_QL75_UX140_CR0,2,140,207_.jpg",
      year: "2019",
      rating: "7.3",
      description:
        "Hiccup and Toothless reunite to remind both their kinds of the inseparable bond between vikings and dragons.",
    },
    {
      title:
        "8. The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible",
      id: "tt31596104",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzczOTc3NTctMGUyOS00ZDgxLTlkMWItNTRhNWY3NzcxNmJkXkEyXkFqcGc@._V1_QL75_UY207_CR3,0,140,207_.jpg",
      year: "2024",
      rating: "7.1",
      description:
        "An adventurer who served with the strongest fighters finally sets out on his own, in middle age.",
    },
    {
      title: "9. Night Train to Lisbon",
      id: "tt1654523",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDE5OTkxNzMxNl5BMl5BanBnXkFtZTgwMjQ4NjY3MDE@._V1_QL75_UY207_CR5,0,140,207_.jpg",
      year: "2013",
      rating: "6.8",
      description:
        "Swiss Professor Raimund Gregorius abandons his lectures and buttoned-down life to embark on a thrilling adventure that will take him on a journey to the very heart of himself.",
    },
    {
      title: "10. Demon Slayer: Kimetsu No Yaiba -To the Hashira Training",
      id: "tt30395619",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2NjMzhjYTItNTY4Yi00ZGJkLWIyNzUtODY3NGU2ZjgyOTRjXkEyXkFqcGc@._V1_QL75_UY207_CR1,0,140,207_.jpg",
      year: "2024",
      rating: "7.1",
      description:
        "Tanjiro undergoes rigorous training with the Stone Hashira, Himejima, in his quest to become a Hashira. Meanwhile, Muzan continues to search for Nezuko and Ubuyashiki.",
    },
    {
      title: "11. The Last Train to New York",
      id: "tt9256744",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmE0NTM2NTYtNmZhNi00Y2VjLTkwNTMtMTM0OTE2Y2M4MjFjXkEyXkFqcGc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      year: "",
      rating: "",
      description:
        "Remake of the 2016 Korean film Train to Busan about a father traveling with his daughter on a train during a zombie outbreak.",
    },
    {
      title: "12. Last Train to Christmas",
      id: "tt14061008",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGY1YzVlZDItNjdlZi00NDUxLWFlMWItZjEzN2YzY2JmYWQ2XkEyXkFqcGc@._V1_QL75_UY207_CR68,0,140,207_.jpg",
      year: "2021",
      rating: "6.0",
      description:
        "Tony Towers is a local celebrity, a successful nightclub manager and he is engaged to a younger woman, Sue. Things get a little strange when he embarks upon the 3:17 to Nottingham for a Christmas family reunion.",
    },
    {
      title: "13. Night Train to Munich",
      id: "tt0032842",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTQ4ZmRmNTUtMjI5OS00MDc3LWI3YjEtZWZhYjcyM2FmMGY0XkEyXkFqcGc@._V1_QL75_UX140_CR0,0,140,207_.jpg",
      year: "1940",
      rating: "7.2",
      description:
        "After Germany invades Czechia, the German and the British intelligence services try to capture Czech scientist Dr. Axel Bomasch (James Harcourt), inventor of a new type of armor-plating.",
    },
    {
      title: "14. How to Train an Alpha",
      id: "tt32385154",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzQ2NGQ1ZTAtYjc4Yi00MTlkLTkyZDAtNjZlMzMwMjcxMTA1XkEyXkFqcGc@._V1_QL75_UY207_CR3,0,140,207_.jpg",
      year: "2024– ",
      rating: "8.6",
      description:
        "A mistreated werewolf girl, Alexia Reed, is forced to marry the notoriously cruel Alpha Kieran Stone. Though he swore to never love her, their contract marriage soon blossoms into an epic love tale.",
    },
    {
      title: "15. Night Train to Terror",
      id: "tt0087798",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDE4YzBhMWItZjk4Yi00NzQ5LTkyZjEtMTY5YWQ5NjA5NzFlXkEyXkFqcGc@._V1_QL75_UX140_CR0,4,140,207_.jpg",
      year: "1985",
      rating: "4.2",
      description:
        '"Night Train to Terror" is a 1985 horror anthology movie where God and Satan are on a train discussing the fate of three individuals.',
    },
    {
      title: "16. Dreamworks How to Train Your Dragon Legends",
      id: "tt6963396",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWRiOTNiN2YtYWRmMi00NWMyLTgxOTAtOWU1MmM4ZGI3OWRlXkEyXkFqcGc@._V1_QL75_UY207_CR8,0,140,207_.jpg",
      year: "2010–2013",
      rating: "7.2",
      description:
        "In this set of shorts Hiccup and the gang learn about different species of dragons.Then, Gobber goes in search of the Boneknapper Dragon.",
    },
    {
      title: "17. Last Train to Fortune",
      id: "tt27592184",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGViYzViOTctODc0ZC00ODMxLTk0NmMtNTEzMjc2ZWRjMzIyXkEyXkFqcGc@._V1_QL75_UY207_CR86,0,140,207_.jpg",
      year: "",
      rating: "",
      description:
        "Follows Cecil Peachtree, a schoolteacher, and Dooley, an outlaw, as they strike a deal and develop an odd friendship along the road to Fortune after having to deal with gunfights, jailbreaks and saloon gals on the way.",
    },
    {
      title: "18. Night Train to Venice",
      id: "tt0107683",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWEyYTY2ZWUtODM1OC00MjRkLTlmOGUtZDJiYjllYjRjOGVjXkEyXkFqcGc@._V1_QL75_UY207_CR1,0,140,207_.jpg",
      year: "1993",
      rating: "2.3",
      description:
        "A young man on his way to Venice to deliver his book exposing the neo-Nazi movement is suddenly stalked by a stranger, trialed by a pack of wild dogs and nearly killed.",
    },
    {
      title: "19. Shûmatsu Torein Doko e Iku?",
      id: "tt31975747",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzU5NTg3NjctZjEyYS00ODdlLTkwM2ItNDg4MjAzNzJmYThmXkEyXkFqcGc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      year: "2024",
      rating: "7.0",
      description:
        "A group of girls hop onto an abandoned train to explore the outside world with strange anomalies.",
    },
    {
      title: "20. How to Pick Your Second Husband First",
      id: "tt5866442",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2NkZWI5OTItNDg3ZC00NGMxLWIyNTktMjZiNDMzOTliYTUxXkEyXkFqcGc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      year: "2018",
      rating: "4.7",
      description:
        "A marriage counselor's attempt to fix her own marriage by focusing on how to change her husband does not go as planned.",
    },
    {
      title: "21. Dreamworks How to Train Your Dragon Legends",
      id: "tt2542490",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQzMjE5NDQwMl5BMl5BanBnXkFtZTgwMjI2NzA2MDE@._V1_QL75_UY207_CR8,0,140,207_.jpg",
      year: "2010",
      rating: "7.5",
      description:
        "Prepare for high-flying adventures with Hiccup, Toothless and the rest of the Dragon Trainers. Meet new dragons, learn the secrets of the legendary Boneknapper and see what is in store for the holidays on the festive island of Berk.",
    },
    {
      title: "22. Night Train to Paris",
      id: "tt0058402",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTJlYWQ0ODctYjhmMy00NmRmLWFiYmMtNzEyNWQ0ZDljMDU5XkEyXkFqcGc@._V1_QL75_UX140_CR0,2,140,207_.jpg",
      year: "1964",
      rating: "5.0",
      description:
        "Former OSS officer Alan Holiday, now living in London, is visited on New Year's Eve by Catherine Carrel who says she is a close friend of Jules Lemoine who served with Holiday during the war. Lemoine urgently requests that Holiday go to Paris on a secret mission. Lemoine visits and wants Alan to deliver a reel of tape which he gives him, and keeps a fake reel himself to deceive enemy agents. Lemoine is killed and the fake tape stolen. Holiday, poses as an assistant to photographer Louis Vernay, and they take three models along to further the ruse.",
    },
    {
      title: "23. One More Train to Rob",
      id: "tt0067531",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzE0Y2QyNjgtZjBlNi00YTg3LTlhZTAtNTdjZmI1YjdlYzU2XkEyXkFqcGc@._V1_QL75_UX140_CR0,2,140,207_.jpg",
      year: "1971",
      rating: "5.7",
      description:
        "After taking the fall for a train robbery, Harker Fleet is released from prison and exacts revenge on his former partners who cheated him out of his share.",
    },
    {
      title: "24. How to Train Your Dragon: Snoggletog Log",
      id: "tt11409576",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjU5NmNiN2UtZDRmNi00NWY3LWFkYTItMDJhMzU4ZWFlZTVjXkEyXkFqcGc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      year: "2019",
      rating: "4.5",
      description:
        "Come settle by the warmth of a roaring fire in Hiccup and Astrid's home. You never know who is going to stop by for a sip of Yak Nog.",
    },
    {
      title: "25. The Night Train to Kathmandu",
      id: "tt0095733",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczMjM3NTQwMl5BMl5BanBnXkFtZTgwNzk1ODk1MDE@._V1_QL75_UX140_CR0,1,140,207_.jpg",
      year: "1988",
      rating: "6.0",
      description:
        'A young girl leaves for Nepal with her parents and brother. She is unhappy to leave her home at first, but soon isn\'t when she meets a handome young man. The story unfolds into a romantic and daring quest in search of the "Invisible City."',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Movie List</h2>
      <div className="flex flex-wrap -mx-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  const [watchlist, setWatchlist] = useState(false);
  const [watched, setWatched] = useState(false);
  const [category, setCategory] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-1/3">
      <img
        src={movie.image}
        alt="Movie Title"
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
      <p className="text-gray-600 text-sm mb-2">Year: {movie.year}</p>
      <p className="text-gray-600 text-sm mb-4">Rating: {movie.rating}</p>
      <p className="text-gray-600 text-sm">Description: {movie.description}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => setWatchlist(!watchlist)} className="p-2 rounded hover:bg-gray-100">
          {watchlist ? <Plus size={24} /> : <Plus size={24} />}
        </button>
        <button onClick={() => setWatched(!watched)} className="p-2 rounded hover:bg-gray-100">
          {watched ? <EyeClosed size={24} /> : <Eye size={24} />}
        </button>
        <button onClick={() => setWatchlist(!watchlist)} className="p-2 rounded hover:bg-gray-100">
          {watchlist ? <Trash size={24} /> : <Trash size={24} />}
        </button>
        <button onClick={() => setCategory(!category)} className="p-2 rounded hover:bg-gray-100">
          {category ? <Folder size={24} /> : <Folder size={24} />}
        </button>
      </div>
    </div>
  );
};

export default MovieList;
