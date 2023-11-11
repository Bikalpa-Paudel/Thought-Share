import CreatePostNav from "./component/CreatePostNav";
import FilterFeed from "./component/FilterFeed";

export default function Home() {
  return (
    <main className="p-5 w-[60%] flex flex-col gap-3">
      <CreatePostNav />
      <FilterFeed />
    </main>
  )
}
