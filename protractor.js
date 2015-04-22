exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
//    specs: ['thinkfulTest.js'],
//    specs: ['youtubeTest.js'],
    specs: ['meetupTest.js'],
    
    multiCapabilities: [{
        browserName: 'chrome'
    }],

    onPrepare: function() {
        // very useful!
        // https://github.com/angular/protractor/blob/f52438549f7d920da1600199feaf58059d6fd692/spec/withLoginConf.js
        // implicit and page load timeouts
//        browser.manage().timeouts().pageLoadTimeout(40000);
//        browser.manage().timeouts().implicitlyWait(25000);
        // for non-angular page
        browser.ignoreSynchronization = true;
        // sign in before all tests
    }
}