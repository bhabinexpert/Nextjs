import Link from "next/link"
import { getUsers } from "../services/notes"

const UsersPage = async () => {
  const users = await getUsers()

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <span> ({user.username})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage