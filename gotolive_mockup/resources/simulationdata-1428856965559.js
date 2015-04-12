function initData() {
  jimData.variables["pago"] = "0";
  jimData.variables["plazo"] = "0";
  jimData.variables["periodos"] = "0";
  jimData.variables["i"] = ".04";
  jimData.variables["monto"] = "0";
  jimData.datamasters["Amigos"] = [
    {
      "id": 1,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "Amigos",
      "userdata": {
        "Nombre": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}