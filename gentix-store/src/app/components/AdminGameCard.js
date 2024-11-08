// app/admin/components/AdminGameCard.js
export default function AdminGameCard({ game }) {
    return (
      <div className="card">
        <img src={game.image} alt={`${game.title} cover`} className="image" />
        <div className="content">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className="tags">
            {game.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  