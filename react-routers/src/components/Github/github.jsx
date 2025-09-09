import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-800 text-white flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
      <img
        className="mx-auto block rounded-full sm:mx-0 sm:shrink-0"
        src={data.avatar_url}
        alt="Profile picture"
        width="200"
        height="200"
      />
      <div className="space-y-0.5">
        <p className="text-lg font-semibol">{data.name}</p>
        <p className="font-medium">Follower: {data.followers}</p>
      </div>
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/prerna-2020");
  return response.json();
};
