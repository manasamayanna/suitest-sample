const getSelector = require('./selectors');
const fs = require('fs');
const yaml = require('js-yaml');
const support = require('./support');
const xpath = require('./xpath');

async function main() {

    //console.log(typeof(support));

    let fileContents = fs.readFileSync('./config.yaml', 'utf8');
    let data = yaml.safeLoad(fileContents);

    // console.log(data['username']);
    // console.log(xpath.alpha_xpath);
    // console.log(getSelector.selectors_obj)

    const alpha_lst = support.add_elems(data['username'], xpath.alpha_xpath, getSelector.selectors_obj);
    console.log(alpha_lst)
    console.log(getSelector.selector(alpha_lst[0]))

}

main();