export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div> Hello </div>
  );
}
