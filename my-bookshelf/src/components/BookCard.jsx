function BookCard({ title, author, rating, comment }) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
                {title}
            </h2>

            <p className="mb-3 text-gray-600">
                著者：{author}
            </p>

            <p className="mb-4 text-lg">
                <span className="text-yellow-400">
                    {"★".repeat(rating)}
                </span>
                <span className="text-gray-300">
                    {"☆".repeat(5 - rating)}
                </span>
            </p>

            <p className="rounded-lg bg-gray-100 p-4 text-gray-700">
                {comment}
            </p>
        </div>
    );
}

export default BookCard;