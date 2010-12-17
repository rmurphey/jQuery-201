/**
 * Search application exercise
 *
 * See mockups/search-app-exercise.png
 *
 * Step 1: What are the pieces we need to build?
 *
 * Step 2: Write the bootstrapping code for detecting which page we're on,
 * doing any app-wide setup tasks, and requiring page-specific components.
 *
 * Step 3: Create a search input widget that announces when a user initiates a
 * search. The announcement should only be made if the search term is
 * non-empty.
 * 
 * Step 4: Create two search services for searching YQL's news and web
 * services; use inheritance to share common features. Each search service
 * should be able to accept a search term. Each should provide a way to notify
 * other code when the search is complete, and provide the results.
 *
 * Step 5: Create a search results widget that receives the search results from
 * the services and displays them using a template.
 *
 * Step 6: Add a widget to the page that keeps track of the user's five most
 * recent searches (this doesn't need to persist across pageviews, but if you'd
 * like to play with local storage, you can!)
 *
 * Step 7: Turn individual search result items into stateful jQuery UI widgets;
 * each result should have the ability to "heart" or "hate" the result. 
 *
 * Step 8: Give the user the option to choose which search service(s) to use;
 * only query the requested service(s) when they submit their request.
 */
define([ /* dependencies */ ], function( /* dependencies */ ) {
  return function() {
    console.log('loaded!');
  };
});
