describe('MeetUp Tests', function(){
    
    describe('login page', function(){
        
        it('should open the login page', function(){
            var userEmail = 'jacortesmahmud@gmail.com';
            var userPass = 'xxx';
            
            browser.get('http://www.meetup.com');
            goLogin();
            
            function goLogin(){
                expect(element.all(by.css('.nav-button--white')).count()).toBe(1);
                element(by.css('.nav-button--white')).click()
                .then(function(){
                    goHome();
                });
            }
            
            function goHome(){
                expect(element.all(by.name('email')).count()).toBe(1);
                element(by.name('email')).sendKeys(userEmail);
                
                expect(element.all(by.name('password')).count()).toBe(1);
                element(by.name('password')).sendKeys(userPass);
                
                expect(element.all(by.css('input[type=submit]')).count()).toBe(1);
                element(by.css('input[type=submit]')).click()
                .then(function(){
                    validateHome();
                });
            }
            
            function validateHome(){
                expect(element(by.css('#member-home-header-event h2')).getText()).toMatch(/Hey Jorge Cortes,/);
            }
        });
    });
});