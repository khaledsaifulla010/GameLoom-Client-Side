import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div className="mt-24 mb-24 font-5 py-10">
      <Helmet>
        <title>GameLoom || FAQ</title>
      </Helmet>
      <h1
        style={{ animationDuration: "3s" }}
        className="mt-4 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 animate__animated animate__backInLeft"
      >
        Frequently Asked Questions
      </h1>
      <div className="flex items-center justify-center mt-12">
        <div className="border border-slate-300 w-[1000px] p-6 rounded-xl shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
              <summary className="collapse-title text-2xl font-bold">
                What is GameLoom?
              </summary>
              <div className="collapse-content">
                <p className="text-lg font-medium text-justify">
                  GameLoom is a user-friendly game review application where
                  users can explore and share reviews of their favorite games.
                  It offers features like user authentication, review
                  management, and game watchlists.
                </p>
              </div>
            </details>
            {/* FAQ 2 */}
            <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
              <summary className="collapse-title text-2xl font-bold">
                How do I submit a game review?
              </summary>
              <div className="collapse-content">
                <p className="text-lg font-medium text-justify">
                  To submit a game review, log in to your account and navigate
                  to the "Add Review" page. Fill out the form with the game's
                  title, your review, rating, and other details, then submit.
                </p>
              </div>
            </details>
            {/* FAQ 3 */}
            <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
              <summary className="collapse-title text-2xl font-bold">
                Is GameLoom free to use?
              </summary>
              <div className="collapse-content">
                <p className="text-lg font-medium text-justify">
                  Yes, GameLoom is completely free to use. You can explore game
                  reviews, share your own reviews, and create watchlists without
                  any charges.
                </p>
              </div>
            </details>
            {/* FAQ 4 */}
            <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
              <summary className="collapse-title text-2xl font-bold">
                Can I edit or delete my reviews?
              </summary>
              <div className="collapse-content">
                <p className="text-lg font-medium text-justify">
                  Yes, you can edit or delete your reviews by navigating to the
                  "My Reviews" section. Simply click the "Update" or "Delete"
                  buttons next to the respective review.
                </p>
              </div>
            </details>
            {/* FAQ 5 */}
            <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
              <summary className="collapse-title text-2xl font-bold">
                How do I add a game to my watchlist?
              </summary>
              <div className="collapse-content">
                <p className="text-lg font-medium text-justify">
                  To add a game to your watchlist, visit the review details page
                  for the game and click the "Add to Watchlist" button. The game
                  will be saved in your personal watchlist.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
