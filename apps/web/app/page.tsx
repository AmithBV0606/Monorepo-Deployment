import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div className="flex justify-center item-center w-full h-screen bg-green-500">
      <h1>User Info</h1>
      <p className="text-2xl">Username : {user?.username}</p>
      <p className="text-2xl">Password : {user?.password}</p>
    </div>
  );
}