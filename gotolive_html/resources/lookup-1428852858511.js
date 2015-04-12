(function(window, undefined) {
  var dictionary = {
    "fc4da03e-9636-4bed-8e85-ff50e4a43bbe": "Scr_CreaMeta3",
    "5aff211d-e948-4935-b801-a4917e8243cd": "Scr_CreaMeta2",
    "5a2a9a72-2732-4ade-b5b6-8d4c752853f2": "Scr_CreaMeta1",
    "beb81af9-6cf8-4747-918a-b93618b7148f": "Scr_MisMetas",
    "26397baf-a930-4378-a34b-30aa73f92f20": "Scr_Registro",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "scr_login",
    "508f1c19-eb32-43aa-8255-0210fb30b404": "Scr_AbonaMeta",
    "30495261-78d5-4174-90f8-f3a86dca94be": "Scr_Notificaciones",
    "97dfa277-5dca-4d75-bf4a-4266bfcc8b74": "Scr_Misaldo",
    "e114f9aa-b075-48b2-8380-63f70ff0ed47": "Scr_Menu",
    "92a8cff2-72ad-4251-accb-665a81fa46f0": "Scr_DetalleMeta",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);