// LoginZee5 = //div[@class='buttonContainer ']//button[@class='noSelect buttonGradient ']//span[contains(text(),'Login')]


const selectors = {

    'LoginButton': { css: '.burgerLoginPanel' },
    'Welcome': { css: '.welcomeText' },
    'Continue': { xpath: '//div[contains(text(), "CONTINUE")]' },


    'SIGNIN': { xpath: '//div[contains(text(), "SIGN IN")]' },
    'EmailEnter': { xpath: '//div[contains(text(), "Enter email or mobile number")]' },
    'ContentContinue': { xpath: '//div[contains(text(), "Continue")]' },

    'EnterKey': { xpath: '//td[contains(text(),"Enter")]'},
    'PasswordEnter': { xpath: '//div[contains(text(), \"Enter password\")]' },
    'ABCKey': { xpath: '//td[contains(text(),"abc")]'},
    'AppLogo': { xpath: '//img[@class="AppLogo"]'},
    'MouseClick': { xpath: '//div[contains(text(),\'Continue Watching\')]'},
    'Play' : { xpath: '//div[contains(text(), "Play")]'},
    'Pause' : {xpath: '//div[@class="ListItem Paused ListItem--Focused"]'},
    'ContinuePlay' : { xpath : '//div[@class="ListItem Paused Playbutton ListItem--Focused"]'},
    'Forward' : { xpath : '//div[@class="ListItem forwardbutton"]'},
    'Rewind' : { xpath : '//div[@class="ListItem Rewindbutton"]'},
    'Focus' : { xpath : '//div[@class="PlayerUI PlayerIndia PlayerUI--Focused Hidden"]'},
    'VideoContent' : { xpath : '//div[@class="CarouselItem before after fade"][1]//div[@class="playBtnWrapper"]//div[text()="Play"]'},
    'Progress' : { xpath : '//div[@class="Progress"] '}
};


// Return either pre-defined selector or the key itself - maybe it's defined in element repo 
exports.selectors_obj = selectors;
exports.selector = selector => {
    return selectors[selector] || selector;
};


