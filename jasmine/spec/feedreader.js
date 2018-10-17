/* Tests are placed within the $() function
 * to ensure they don't run until the DOM is ready
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable 
         * has been defined and that it is not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensures that the allFeeds object has a URL defined
         * and that the URL is not empty
         */
        it('url is defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* Ensures that the allFeeds object has a name defined
         * and that the name is not empty
         */
        it('name is defined', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function () {
        const body = document.querySelector('body');
            
        /* Ensures the menu element is hidden by default */
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon is clicked */
        it('toggles on/off when menu icon is clicked', function () {
            const menu = document.querySelector('.menu-icon-link');
            
            // Toggles on
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            // Toggles off
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Ensures when the loadFeed is called and completes its work,
         * there is at least a single .entry element within the .feed container
         */
        it('completes work', function() {
            const feedEntries = document.querySelectorAll('.feed .entry');
            expect(feedEntries.length > 0).toBe(true);
        });
    });

    describe('New Feed Selection', function () {
        const feed = document.querySelector('.feed');
        let oldFeed,
            newFeed;
        
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = feed.innerHTML;

                loadFeed(1, function() {
                    newFeed = feed.innerHTML;
                    done();
                });
            });
        });

        /* Ensures that when a new feed is loaded
         * by the loadFeed function, the content actually changes
         */
        it('content changes', function () {
            // Compare output of loadFeed(0)
            // against output of loadFeed(1)
            expect(oldFeed).not.toBe(newFeed);
        });
    });  
}());
