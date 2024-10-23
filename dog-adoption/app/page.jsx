import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {}
      <div className="logo-container">
        <Image
          src="/logo.png" 
          alt="Dog Adoption Logo"
          width={150}           
          height={150}        
        />
      </div>
      {}
      <h1>Welcome!</h1>
      <h2>Learn More About the Breeds</h2>
      {}
      <ul className="breed-list">
        <li>
          <Link href="/breed/Labradoodle">Labradoodle</Link>
        </li>
        <li>
          <Link href="/breed/Goldendoodle">Goldendoodle</Link>
        </li>
        <li>
          <Link href="/breed/Poodle">Poodle</Link>
        </li>
      </ul>
    </main>
  );
}

