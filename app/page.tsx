import { Button } from "../components/button";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Button className="m-auto" href={"signin"}>
        Sign in
      </Button>
    </div>
  );
}
