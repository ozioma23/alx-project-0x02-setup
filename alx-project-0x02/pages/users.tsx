import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

interface ApiUserType {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

interface UsersPageProps {
  users: ApiUserType[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>

        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
