import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Birds and Insects</h1>
      <div className="buttons">
        <Link href="/insects">
          <button className="insects-button">Insects</button>
        </Link>
        <Link href="/birds">
          <button className="birds-buttons">Birds</button>
        </Link>
      </div>
    </div>
  );
}
