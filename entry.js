const suitest = require('suitest-js-api');
const {assert} = suitest;
const getSelector = require('./selectors');
const fs = require('fs');
const yaml = require('js-yaml');
const support = require('./support');
const xpath = require('./xpath')
async function main() {


    let fileContents = fs.readFileSync('./config.yaml', 'utf8');
    let data = yaml.safeLoad(fileContents);

    await suitest.openApp();
    await suitest.assert.location().equals('https://sonyceb.zee5.com/');
    await suitest.assert.sleep(5000);
    await suitest.element(getSelector.selector('Welcome')).exists().timeout(10000);
    await suitest.element(getSelector.selector('Continue')).click()

    await suitest.element(getSelector.selector('ContentContinue')).click();
    await suitest.element(getSelector.selector('SIGNIN')).exists().timeout(10000);
    await suitest.element(getSelector.selector('SIGNIN')).click();
    await suitest.element(getSelector.selector('EmailEnter')).click();

    const alpha_lst = support.add_elems(data['username'], xpath.alpha_xpath, getSelector.selectors_obj);

    for(i =0; i<alpha_lst.length;i++){
        await suitest.element(getSelector.selector(alpha_lst[i])).click();
    }

    await suitest.element(getSelector.selector('EnterKey')).click();
    await suitest.element(getSelector.selector('PasswordEnter')).click();
 
    const password_lst = support.add_elems(data['password'], xpath.alpha_xpath, getSelector.selectors_obj);
 
    for(i =0; i<password_lst.length;i++){
        await suitest.element(getSelector.selector(password_lst[i])).click();
    }
 
    await suitest.element(getSelector.selector('EnterKey')).click();
    //await suitest.assert.sleep(3000);
    await suitest.element(getSelector.selector('AppLogo')).exists().timeout(10000);
    await suitest.assert.sleep(9000);
    // await assert.element('VideoContent').moveTo();
    // if (await suitest.assert.element(getSelector.selector('VideoContent')).visible()) {
    //     console.log('inside if')
    //     await suitest.assert.element(getSelector.selector('VideoContent')).moveTo();
    // }
    //await suitest.element(getSelector.selector('VideoContent')).click();

    // await suitest.assert.sleep(5000);
    //await suitest.assert.element(getSelector.selector('VideoContent')).moveTo();
    //await suitest.element(getSelector.selector('VideoContent')).click();
    await suitest.element(getSelector.selector('MouseClick')).click();
    await suitest.assert.sleep(6000);
    await suitest.element(getSelector.selector('Play')).click();
    await suitest.assert.sleep(6000);
    await suitest.element(getSelector.selector('Pause')).click();
    await suitest.assert.sleep(6000);
    await suitest.element(getSelector.selector('ContinuePlay')).click();
    await suitest.assert.sleep(9000);
    await suitest.element(getSelector.selector('Progress')).moveTo();
    await suitest.assert.sleep(2000);
    //await suitest.element(getSelector.selector('Focus')).click();
    await suitest.element(getSelector.selector('Forward')).click();
    await suitest.assert.sleep(9000);
    //await suitest.element(getSelector.selector('Focus')).click();
    await suitest.element(getSelector.selector('Progress')).moveTo();
    await suitest.element(getSelector.selector('Rewind')).click();
    // await suitest.assert.video().matches([
	// 	{
	// 		name: suitest.PROP.VIDEO_URL,
	// 		val: 'https://akamaividz2.zee5.com/image/upload/f_webp,w_270,h_152/resources/0-0-261610/list/1170x658withlog_1928337852.jpg',
	// 	},
	// ]).timeout(2000);


    await suitest.closeSession();
    console.log('Success!');
}

main();