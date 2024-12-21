import SearchResult from "@/components/SearchResult/SearchResult";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-dark text-black dark:text-white" style={{ height: 'calc(100vh - 72px)' }}>
        <h1 className="text-4xl mb-4">Dark and Light Mode with Tailwind CSS</h1>
        <p>Toggle the theme to see the changes!</p>
      </div>
      {/* <SearchResult /> */}
     
    </div>
  );
}
