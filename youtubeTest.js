describe('YouTube Tests', function(){
    
    describe('login page', function(){
        
        it('should open the login page', function(){
            var userEmail = 'jacortesmahmud@gmail.com';
            var userPass = 'xxx';
            
            browser.get('http://www.youtube.com');
            signin();
            
            function signin(){
                expect(element.all(by.css('.signin-container button')).count()).toBe(1);
                element(by.css('.signin-container button')).click()
                .then(function(){
                    login();
                });
            }
            
            function login(){
                expect(element.all(by.css('input[type=email]')).count()).toBe(1);
                element(by.css('input[type=email]')).sendKeys(userEmail);
                
                expect(element.all(by.css('input[type=password]')).count()).toBe(1);
                element(by.css('input[type=password]')).sendKeys(userPass);
                
                expect(element.all(by.css('input[type=submit]')).count()).toBe(1);
                element(by.css('input[type=submit]')).click()
                .then(function(){
                    inLoginPage();
                });
                
            }
            
            function inLoginPage(){
                browser.debugger();
            }
        });
    });
});