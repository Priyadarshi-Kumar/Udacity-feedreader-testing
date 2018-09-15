
$(function() {
    
    // Test suite for RSS Feeds 
    describe('RSS Feeds', function() {
        
        // Test that all feeds are defined and not empty
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Tests that all feeds are defined, not empty and have correct http or https format.

         it('all url defined and url is not empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch(/^(http|https):\/\//);
            });
         });

        // Tests that all feeds names are defined, length is not zero and have type string.

         it('All names are defined and name is not empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(typeof feed.name).toBe('string');
            });
         });

    });


    // Test suite named for Menu 

    describe('The menu', () => {

        const body = document.querySelector('body');
        let menuIcon = document.querySelector('.menu-icon-link');

        // Test that menu element is hidden by default.

         it('Menu element is hidden by default', () => {
            expect(body.className).toContain('sub-menu-hidden menu-hidden');
         });

        // This test ensures that menu changes visibility after menu icon is clicked.
        
         it('Menu visibility changes after menu icon is clicked', () => {
            menuIcon.click();   // Show menu
            expect(body.className).not.toContain('menu-hidden');

            menuIcon.click();   // Hide menu
            expect(body.className).toContain('menu-hidden');
         });

    });

    // New test suite for initial entries.

    describe('Initial Entries', () => {

        // Tests that there is atleast a single .entry element within .feed container.
        
         beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
         });
        
        it('atleast a single entry', () => {
            let feed = document.querySelector('.feed');
            let entries = document.querySelector('.entry');
            expect(('feed, entries').length).toBeGreaterThan(0);
        });

    });

    
    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {

        // Tests ensures that when new feed is loaded the content change.
        
         beforeEach((done) => {
            loadFeed(0, () => {
                let firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                    done();
                });
            })
         });

         let nextFeed = document.querySelector('.feed').innerHTML;
         it('content changed', () => {
            expect(firstFeed).not.toBe(nextFeed);
         });

    });

        
}());
