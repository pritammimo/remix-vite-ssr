import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
import { Button } from "~/components/ui/button"
export default function Index() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline text-red-700">
    Hello world!
  </h1>
  <Button variant='outline'>Click me</Button>
  </div>
  );
}
