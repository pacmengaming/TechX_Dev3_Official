export default async function BreedPage({ params }) {
  const awaitedParams = await params;
  const { breed } = awaitedParams;
  const breedName = breed

  return (
    <main style={{ padding: '2rem' }}>
      <h1>About the {breedName}</h1>
      <p>More about {breedName}s down below!</p>
    </main>
  );
}
