jQuery("#simulation")
  .on("click", ".s-26397baf-a930-4378-a34b-30aa73f92f20 .click", function(event, data) {
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
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
  })
  .on("focusin", ".s-26397baf-a930-4378-a34b-30aa73f92f20 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_4",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_2 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_6",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_3 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_8",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_4 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_10",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_5 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_12",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_14",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_7",
                    "value": ""
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
  })
  .on("focusout", ".s-26397baf-a930-4378-a34b-30aa73f92f20 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_4"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_2 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_6"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_3 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_4 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_10"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_5 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_12"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_6 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_7",
                    "value": "Type something"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_14"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-26397baf-a930-4378-a34b-30aa73f92f20 #s-Input_7 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
                      }
                    }
                  } ]
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