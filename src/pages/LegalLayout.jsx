import { Link } from "react-router-dom";

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-green-100">
            Morning Heaven Tea
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {children}

          <div className="mt-12 pt-6 border-t text-center">
            <Link
              to="/"
              className="text-green-700 font-semibold hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
