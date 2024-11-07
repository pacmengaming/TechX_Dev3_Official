
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();

  const breeds = Object.keys(data.message);

  return {
    props: {
      breeds,
    },
  };
}

export default function HomePage({breeds}) {
  return (
    <main>
      <div className="logo-container">
        <Image
          src="/logo.png"
          alt="Dog Adoption Logo"
          width={150}
          height={150}
        />
      </div>
      <h1>Welcome!</h1>
      <h2>Learn More About the Breeds</h2>
      <ul className="breed-list">
        {breeds.map((breed) => (
          <li key={breed}>
            <Link href={`/breed/${breed}`}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
