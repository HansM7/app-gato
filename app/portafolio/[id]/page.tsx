import Detail from "./detail";

function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <div className="w-full min-h-screen">
      <Detail></Detail>
    </div>
  );
}
export default Page;
