import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg ">
        <h1 className="mb-6 text-3xl font-bold">
          Login
        </h1>

        <input
          className="mb-4 w-full rounded border p-3 focus:ring-4
focus:ring-blue-100"
          placeholder="Email"
        />

        <input
          type="password"
          className="mb-6 w-full rounded border p-3 focus:ring-4
focus:ring-blue-100"
          placeholder="Password"
        />

        <button className="w-full rounded bg-blue-600 py-3 text-white">
          Login
        </button>

        <Link
          to="/"
          className="mt-4 block text-center text-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}