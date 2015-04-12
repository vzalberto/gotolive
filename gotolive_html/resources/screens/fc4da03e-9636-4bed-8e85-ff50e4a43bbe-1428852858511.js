jQuery("#simulation")
  .on("click", ".s-fc4da03e-9636-4bed-8e85-ff50e4a43bbe .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Flat-button-light")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e114f9aa-b075-48b2-8380-63f70ff0ed47"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });