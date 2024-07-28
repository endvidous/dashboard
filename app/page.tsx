import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/dashboard">Dashboard (CLICK ME)</Link>
    </div>
  );
};

export default Homepage;
