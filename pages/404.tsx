import { useRouter } from "next/router";

export default function Error(): JSX.Element {
  const router = useRouter(); // NextJs Router https://nextjs.org/docs/api-reference/next/router

  /**
   * TODO: Use NextJs router to grab the name in the url and assign to user_name
   * Then design a simple 404 page with some custom css to display the user_name and a message
   * outlining that it was not found
   */
  const user_name = "name";

  return <p>No user with name {user_name} found</p>;
}
