exports.add_elems = function add_elems(uname, xpath, obj){

    xpath_lst = []
    for(i = 0; i < uname.length; i ++)
    {
        xpth = xpath.replace('char', uname.charAt(i));
        obj[uname.charAt(i)] = { xpath: xpth};
        xpath_lst.push(uname.charAt(i));
    }
    return xpath_lst;
    
}

//exports.loop = function