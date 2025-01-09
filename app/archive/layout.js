export default function ArchiveLayout({ archive, latest }) {
  return (
      <div className="w-screen min-h-screen relative">
        <div className="w-9/12 mx-auto py-20">
          <h1 className="text-3xl font-semibold">Next Archive</h1>
          <section id="archive-filter">{archive}</section>
          <hr/>
          <section id="archive-latest">{latest}</section>
        </div>
      </div>
  );
}
