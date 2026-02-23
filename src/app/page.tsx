import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <Button variant={"default"}>Click Me</Button>
      <Button variant={"destructive"}>Click Me</Button>
      <Button variant={"ghost"}>Click Me</Button>
      <Button variant={"link"}>Click Me</Button>
      <Button variant={"muted"}>Click Me</Button>
      <Button variant={"teritary"}>Click Me</Button>
      <Button variant={"secondary"}>Click Me</Button>
    </div>
  );
};

export default Home;
