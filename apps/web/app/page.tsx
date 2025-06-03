import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div className="flex justify-center item-center w-full h-screen bg-green-500">
      <p className="text-2xl">Name or Username : {user?.username}</p>
      <p className="text-2xl">Password : {user?.password}</p>
    </div>
  );
}