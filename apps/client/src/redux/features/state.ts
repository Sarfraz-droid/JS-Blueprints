export const Demo = {
  nodes: [
    {
      type: "basic_EventStart",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {};\n}',
          outdated: false,
          old: "",
        },
        editable: false,
        label: "Event Start",
        renderer: null,
        output: [],
        parameters: [],
        input: [],
        start: "root__tyRI9cP3WkY2JkgRoz8f_",
        end: "root__WlgWZ8uDphhazMNRELp-m",
      },
      positionAbsolute: {
        x: -210,
        y: -15,
      },
      id: "OF3jtgdjCLo5vJOtEQPt1",
      position: {
        x: -210,
        y: -15,
      },
    },
    {
      type: "condition_equalTo",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['A'] === input['B']\n  };\n}",
          outdated: false,
          old: "",
        },
        editable: false,
        label: "Equal To",
        output: [
          {
            type: "boolean",
            value: true,
            id: "boolean__output__nwZQryH-6WknuTLSPm1ye",
            name: "out",
          },
        ],
        parameters: [],
        input: [
          {
            type: "number",
            value: 8,
            id: "number__input__-bNdr-F38nPfTMefd_1zH",
            name: "A",
          },
          {
            type: "number",
            value: 8,
            id: "number__input__RCnf2l72ACCsCheOIoNnR",
            name: "B",
          },
        ],
        start: "root__4ZJJ5j8DOcUYCjbPoLXP7",
        end: "root__4GEY-AxcjGhTwb07ManAl",
      },
      positionAbsolute: {
        x: -45,
        y: 45,
      },
      id: "cS-uLK_omqnnrsTJKNtcY",
      position: {
        x: -45,
        y: 45,
      },
    },
    {
      type: "string_Repeater",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['in']?.repeat(parameter['count'])\n  };\n}",
          outdated: false,
          old: "",
        },
        renderer: null,
        editable: false,
        label: "String Repeater",
        output: [
          {
            type: "string",
            value: "JS BlueprintsJS BlueprintsJS Blueprints",
            name: "out",
            id: "string__output__Io_FqZahsTsZkdrntuUsy",
          },
        ],
        parameters: [
          {
            id: "string__parameter__dvFVfXX58UtjoBmGpm367",
            type: "number",
            value: 3,
            name: "count",
          },
        ],
        input: [
          {
            id: "string__input__nYIAM3SCodSN7KDesJ8Gz",
            type: "string",
            value: "JS Blueprints",
            name: "in",
          },
        ],
        start: "root___uB-YaIwcRABeRyuop83G",
        end: "root__w8Qaqnn-J18zxTjhBQyAq",
      },
      positionAbsolute: {
        x: -45,
        y: -60,
      },
      id: "3gB4xD3S0pxi7SgM6tvO4",
      position: {
        x: -45,
        y: -60,
      },
    },
    {
      type: "input_String",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    \'out\' : `${parameter[\'in\']}`\n  };\n}',
          outdated: false,
          old: "",
        },
        renderer: null,
        editable: false,
        label: "String Input",
        output: [
          {
            type: "string",
            value: "JS Blueprints",
            name: "out",
            id: "string__output__o81fOJAbbpMC29MSgsTO0",
          },
        ],
        parameters: [
          {
            id: "string__input__B50iwT3W9QZJbkXbzGyTV",
            type: "string",
            value: "JS Blueprints",
            name: "in",
          },
        ],
        input: [],
        start: "root__EaiclVz4GoeUI6g2O94_Z",
        end: "root___jeQv7M1RN2WRHWZGDPb-",
      },
      positionAbsolute: {
        x: -300,
        y: -90,
      },
      id: "7TPpeYc0o2-vC0LOVBymm",
      position: {
        x: -300,
        y: -90,
      },
    },
    {
      type: "basic_Output",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {};\n}',
          outdated: false,
          old: "",
        },
        editable: false,
        label: "Heading",
        output: [],
        parameters: [],
        renderer: null,
        input: [
          {
            id: "string__input__NgeNr0nlmlCh7Rxmwn_dZ",
            type: "string",
            value: "JS BlueprintsJS BlueprintsJS Blueprints",
            name: "Input#1",
          },
          {
            type: "boolean",
            value: true,
            id: "boolean__input__1D2KjybzwJ_Dmuep48aBK",
            name: "bool result",
          },
        ],
        start: "root__JGMTcLzR9PHzdzWMdUDQe",
        end: "root__gAYy4XhEjPHaA-W6MTn5t",
      },
      positionAbsolute: {
        x: 225,
        y: 15,
      },
      id: "tlDgoN0Lmrh7x71CFZSmc",
      position: {
        x: 225,
        y: 15,
      },
    },
    {
      type: "input_Number",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    \'out\' : parameter[\'in\']\n  };\n}',
          outdated: false,
          old: "",
        },
        renderer: null,
        editable: false,
        label: "Number Input",
        output: [
          {
            type: "number",
            value: 8,
            name: "out",
            id: "number__output__brE_3j4adsM7Rw0sl6y0F",
          },
        ],
        parameters: [
          {
            id: "string__parameter__qOz5nQI9vAvzZbC74glbL",
            type: "number",
            value: 8,
            name: "in",
          },
        ],
        input: [],
        start: "root__1jyRRdqJxxWzLGzg_GjoA",
        end: "root__Tzw0sclR4IAm_iqXA3VKJ",
      },
      positionAbsolute: {
        x: -300,
        y: 60,
      },
      id: "XRe0V672exnTHfkknDVWL",
      position: {
        x: -300,
        y: 60,
      },
    },
    {
      id: "5cDQY_hYfP0WTpcViWis6",
      data: {
        error: {
          code: "",
          message: "",
        },
        function: {
          content:
            '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    \'out\' : parameter[\'in\']\n  };\n}',
          outdated: false,
          old: "",
        },
        renderer: null,
        editable: false,
        label: "Number Input",
        output: [
          {
            type: "number",
            value: 8,
            name: "out",
            id: "number__output__od-26Tv45sQHCez14etpV",
          },
        ],
        parameters: [
          {
            id: "number__parameter__ZUj9jHXqnJ_TfcL9D5ap_",
            type: "number",
            value: 8,
            name: "in",
          },
        ],
        input: [],
        start: "root__9IBgGIEBa7HUECd8Xcvpg",
        end: "root__4UaIIIdaN1_Lsn7AjksQM",
      },
      type: "input_Number",
      xPos: -285,
      yPos: 75,
      selected: false,
      isConnectable: true,
      sourcePosition: "bottom",
      targetPosition: "top",
      dragging: false,
      zIndex: 0,
      position: {
        x: -300,
        y: 135,
      },
      positionAbsolute: {
        x: -300,
        y: 135,
      },
    },
  ],
  edges: [
    {
      source: "OF3jtgdjCLo5vJOtEQPt1",
      sourceHandle: "root__tyRI9cP3WkY2JkgRoz8f_",
      target: "3gB4xD3S0pxi7SgM6tvO4",
      targetHandle: "root__w8Qaqnn-J18zxTjhBQyAq",
      id: "reactflow__edge-OF3jtgdjCLo5vJOtEQPt1root__tyRI9cP3WkY2JkgRoz8f_-3gB4xD3S0pxi7SgM6tvO4root__w8Qaqnn-J18zxTjhBQyAq",
    },
    {
      source: "7TPpeYc0o2-vC0LOVBymm",
      sourceHandle: "string__output__o81fOJAbbpMC29MSgsTO0",
      target: "3gB4xD3S0pxi7SgM6tvO4",
      targetHandle: "string__input__nYIAM3SCodSN7KDesJ8Gz",
      id: "reactflow__edge-7TPpeYc0o2-vC0LOVBymmstring__output__o81fOJAbbpMC29MSgsTO0-3gB4xD3S0pxi7SgM6tvO4string__input__nYIAM3SCodSN7KDesJ8Gz",
    },
    {
      source: "OF3jtgdjCLo5vJOtEQPt1",
      sourceHandle: "root__tyRI9cP3WkY2JkgRoz8f_",
      target: "cS-uLK_omqnnrsTJKNtcY",
      targetHandle: "root__4GEY-AxcjGhTwb07ManAl",
      id: "reactflow__edge-OF3jtgdjCLo5vJOtEQPt1root__tyRI9cP3WkY2JkgRoz8f_-cS-uLK_omqnnrsTJKNtcYroot__4GEY-AxcjGhTwb07ManAl",
    },
    {
      source: "3gB4xD3S0pxi7SgM6tvO4",
      sourceHandle: "string__output__Io_FqZahsTsZkdrntuUsy",
      target: "tlDgoN0Lmrh7x71CFZSmc",
      targetHandle: "string__input__NgeNr0nlmlCh7Rxmwn_dZ",
      id: "reactflow__edge-3gB4xD3S0pxi7SgM6tvO4string__output__Io_FqZahsTsZkdrntuUsy-tlDgoN0Lmrh7x71CFZSmcstring__input__NgeNr0nlmlCh7Rxmwn_dZ",
    },
    {
      source: "5cDQY_hYfP0WTpcViWis6",
      sourceHandle: "number__output__od-26Tv45sQHCez14etpV",
      target: "cS-uLK_omqnnrsTJKNtcY",
      targetHandle: "number__input__RCnf2l72ACCsCheOIoNnR",
      id: "reactflow__edge-5cDQY_hYfP0WTpcViWis6number__output__od-26Tv45sQHCez14etpV-cS-uLK_omqnnrsTJKNtcYnumber__input__RCnf2l72ACCsCheOIoNnR",
    },
    {
      source: "XRe0V672exnTHfkknDVWL",
      sourceHandle: "number__output__brE_3j4adsM7Rw0sl6y0F",
      target: "cS-uLK_omqnnrsTJKNtcY",
      targetHandle: "number__input__-bNdr-F38nPfTMefd_1zH",
      id: "reactflow__edge-XRe0V672exnTHfkknDVWLnumber__output__brE_3j4adsM7Rw0sl6y0F-cS-uLK_omqnnrsTJKNtcYnumber__input__-bNdr-F38nPfTMefd_1zH",
    },
    {
      source: "cS-uLK_omqnnrsTJKNtcY",
      sourceHandle: "boolean__output__nwZQryH-6WknuTLSPm1ye",
      target: "tlDgoN0Lmrh7x71CFZSmc",
      targetHandle: "boolean__input__1D2KjybzwJ_Dmuep48aBK",
      id: "reactflow__edge-cS-uLK_omqnnrsTJKNtcYboolean__output__nwZQryH-6WknuTLSPm1ye-tlDgoN0Lmrh7x71CFZSmcboolean__input__1D2KjybzwJ_Dmuep48aBK",
    },
    {
      source: "cS-uLK_omqnnrsTJKNtcY",
      sourceHandle: "root__4ZJJ5j8DOcUYCjbPoLXP7",
      target: "tlDgoN0Lmrh7x71CFZSmc",
      targetHandle: "root__gAYy4XhEjPHaA-W6MTn5t",
      id: "reactflow__edge-cS-uLK_omqnnrsTJKNtcYroot__4ZJJ5j8DOcUYCjbPoLXP7-tlDgoN0Lmrh7x71CFZSmcroot__gAYy4XhEjPHaA-W6MTn5t",
    },
  ],
  activeNode: {
    activeNode: null,
    active: false,
  },
};
