chrome.tabs.query({active: true,lastFocusedWindow: true}, tabs =>{
    let url = tabs[0].url;
    chrome.storage.sync.get([url], function(items){
        console.log(items[url]);
        notes=items[url]
        if(!notes){
            notes=""
        }
        document.getElementById('notes').value = notes;
    });
});

document.getElementById('savebutton').onclick = function(){
    var notes = document.getElementById('notes').value;
    chrome.tabs.query({active: true, lastFocusedWindow:true},tabs =>{
        let url = tabs[0].url;
        var jsonfile = {};
        jsonfile[url] = notes;
        console.log(jsonfile)

        chrome.storage.sync.set(jsonfile, function(){

        });
    });
}