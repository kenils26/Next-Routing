export default async function PhotoPage({ params }) {
    const {id} = await params;
  return (
    <div>
      <h1>Full Page Photo {id}</h1>
    </div>
  );
}
