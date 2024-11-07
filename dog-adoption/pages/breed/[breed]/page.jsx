
import React from 'react';

export async function getStaticPaths() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();

  const breeds = Object.keys(data.message);

  const paths = breeds.map((breed) => ({
    params: {breed},
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const {breed} = await params;

  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await res.json();

  const images = data.message.slice(0, 5);

  return {
    props: {
      breed,
      images,
    },
  };
}

export default function BreedPage({ breed, images }) {
  return (
    <main style={{padding: '2rem'}}>
      <h1>About the {breed.charAt(0).toUpperCase() + breed.slice(1)}</h1>
      <p>More about {breed}s down below.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${breed} dog`}
            style={{ width: '200px', height: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </main>
  );
}
