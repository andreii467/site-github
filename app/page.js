import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Birds and Insects</h1>
      <div className="buttons">
        <Link>
          <button className="insects-button">Insects</button>
        </Link>
        <button className="birds-buttons">Birds</button>
      </div>
    </div>
  );
}
