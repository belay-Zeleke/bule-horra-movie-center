// export default function MovieCard({ movie, onClick }) {
//   return (
//     <div className="movie-card" onClick={onClick}>
//       <h3>{movie.title}</h3>
//       <span>View Trailer</span>
//     </div>
//   );
// }


export default function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <span>Watch trailer</span>
    </div>
  );
}
