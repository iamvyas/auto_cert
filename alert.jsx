
#include json2.js;

//how to read json file how to read excel file using js

(function main() {
    var lessons = loadJson("result.json");
    alert("load");
    for(var i =0;i< lessons.length; i++)
    {
        var lesson=lessons[i];
        processlesson(lesson);
    }

})();

function processlesson(lesson){
    var doc = activeDocument.layerSets.getByName('type'); //accessing the group by name
    
    var titleLayer = doc.layers.getByName('name'); //accessing the layer in the group by name
    titleLayer.textItem.contents=lesson.Name;
    savejpeg(lesson.Name);
}

//to save stuffs as jpeg


function savejpeg(name)
{
    var doc = activeDocument;
    var file = new File(doc.path + '/' + name + '.jpeg')

    var opts = new JPEGSaveOptions();
    opts.quality=10;

    doc.saveAs(file,opts,true);
}

function loadJson(relPath) //relPath should be there
{
    //var script=new File(result.json);
    var jsonFile = new File(relPath);

    jsonFile.open('r');
    var str = jsonFile.read();
    jsonFile.close();
    //var x = JSON.parse('[{"Name":"harshi"},{"Name":"adi"}]');
    var x = JSON.parse('[{"Name":"PRASANTH P "},{"Name":"HARIKISHORE"},{"Name":"VAISHNAVI J"},{"Name":"UMA"},{"Name":"ABHAY KRISHNA"},{"Name":"RAMKUMAR N G"},{"Name":"HARI PRASAD P "},{"Name":"KAMALISHREE A"},{"Name":"VAISHNAVI S"},{"Name":"VISHNU PRIYA MADHANAGOPAL"},{"Name":"RITUNJAY M"},{"Name":"LIVEESH "},{"Name":"MANJUSHREE M"},{"Name":"SOWMIYA SHANMUGAMURTHY"},{"Name":"HEMAM BUJA VALLI M"},{"Name":"ADITHYAN M"},{"Name":"RISHI KUMAR K R"},{"Name":"SANJAY KUMAR "},{"Name":"SINTHANA R"},{"Name":"NIRANJANI K P"},{"Name":"DEEPA SREE K R "},{"Name":"NANDHAKUMAR"},{"Name":"KUMARAN TR"},{"Name":"SNEHA B"},{"Name":"GOKUL.P "},{"Name":"KIRTHANA"},{"Name":"SANJAEY SS"}]');
    //alert(x);
    return x;
}




