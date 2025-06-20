export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-4 py-2 [background:var(--main-color)] text-white rounded hover:[background:var(--main-color)]/80 transition"
      >
        Go Home
      </a>
    </div>
  );
}