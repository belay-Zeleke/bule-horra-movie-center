export default function TrailerModal({ trailer, onClose }) {
  if (!trailer) return null;

  return (
    <div className="modal" onClick={onClose}>
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Trailer"
        allowFullScreen
      />
    </div>
  );
}
