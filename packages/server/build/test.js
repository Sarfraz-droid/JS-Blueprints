"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test2Data = exports.test1Data = void 0;
exports.test1Data = {
    card: [
        {
            type: "EventEnd",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {...input,...parameter};\n}',
                    outdated: false,
                    old: "",
                },
                output: [],
                parameters: [],
                input: [],
                start: "root__P_jOCkSwfDBnCFQKaEtux",
                end: "root__-wc7pdahnhVlWsDS1IB34",
            },
            positionAbsolute: {
                x: 180,
                y: -30,
            },
            id: "F5dGaAiwdKJfCzyYuvv1a",
            position: {
                x: 180,
                y: -30,
            },
        },
        {
            type: "EventStart",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {...input,...parameter};\n}',
                    outdated: false,
                    old: "",
                },
                output: [],
                parameters: [],
                input: [],
                start: "root__P_jOCkSwfDBnCFQKaEtux",
                end: "root__-wc7pdahnhVlWsDS1IB34",
            },
            positionAbsolute: {
                x: -315,
                y: -15,
            },
            id: "hTIT2MekQ81TMqdQXi8K5",
            position: {
                x: -315,
                y: -15,
            },
        },
        {
            type: "input",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {...input,...parameter};\n}',
                    outdated: false,
                    old: "",
                },
                label: "Heading",
                output: [
                    {
                        type: "string",
                        value: "string",
                        name: "Output#1",
                        id: "string__output__RB9kW3tWoGYN1V_4I4grk",
                    },
                ],
                parameters: [
                    {
                        type: "string",
                        value: "string",
                        name: "Parameter#1",
                        id: "string__parameter__bjVdeu_1Ei1JdsFO22nQH",
                    },
                ],
                input: [
                    {
                        id: "string__input__N5-fjV-rAQcqUmKeJubpw",
                        type: "string",
                        value: "string",
                        name: "Input#1",
                    },
                ],
                start: "root__dzQ-Vbsp1wNPDshdqMR7W",
                end: "root__KdLX-o81t-f6d2ZJvWP7N",
            },
            positionAbsolute: {
                x: -165,
                y: -15,
            },
            id: "yQb5x3LOTbyeaoy3sAXnn",
            position: {
                x: -165,
                y: -15,
            },
        },
    ],
    edges: [
        {
            source: "hTIT2MekQ81TMqdQXi8K5",
            sourceHandle: "root__P_jOCkSwfDBnCFQKaEtux",
            target: "yQb5x3LOTbyeaoy3sAXnn",
            targetHandle: "root__KdLX-o81t-f6d2ZJvWP7N",
            id: "reactflow__edge-hTIT2MekQ81TMqdQXi8K5root__P_jOCkSwfDBnCFQKaEtux-yQb5x3LOTbyeaoy3sAXnnroot__KdLX-o81t-f6d2ZJvWP7N",
        },
        {
            source: "yQb5x3LOTbyeaoy3sAXnn",
            sourceHandle: "root__dzQ-Vbsp1wNPDshdqMR7W",
            target: "F5dGaAiwdKJfCzyYuvv1a",
            targetHandle: "root__-wc7pdahnhVlWsDS1IB34",
            id: "reactflow__edge-yQb5x3LOTbyeaoy3sAXnnroot__dzQ-Vbsp1wNPDshdqMR7W-F5dGaAiwdKJfCzyYuvv1aroot__-wc7pdahnhVlWsDS1IB34",
        },
    ],
};
exports.test2Data = {
    card: [
        {
            type: "EventStart",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {};\n}',
                    outdated: false,
                    old: "",
                },
                output: [],
                parameters: [],
                input: [],
                start: "root__YKScpBt7ppQUnWKqZ_-VM",
                end: "root___MkMjNHxZWQu2BOwyz0Pc",
            },
            positionAbsolute: {
                x: -330,
                y: -15,
            },
            id: "S-ImwJG-YvbFliP3dMZ77",
            position: {
                x: -330,
                y: -15,
            },
        },
        {
            type: "EventEnd",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {};\n}',
                    outdated: false,
                    old: "",
                },
                output: [],
                parameters: [],
                input: [],
                start: "root__6hQ5Gws0RiDqfx_esTVvE",
                end: "root__HxSQrNAEHQfBVtFsLXrAU",
            },
            positionAbsolute: {
                x: 195,
                y: -30,
            },
            id: "0j7T0_NY_XuIACQ8fgmnO",
            position: {
                x: 195,
                y: -30,
            },
        },
        {
            type: "input",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    text: `${parameter[\'param\']}__new`\n  };\n}',
                    outdated: false,
                    old: "",
                },
                label: "Input #1",
                output: [
                    {
                        type: "string",
                        value: "string",
                        name: "text",
                        id: "string__output__Q8y4k5UZbuu4L0tLoLCWC",
                    },
                ],
                parameters: [
                    {
                        type: "string",
                        value: "string",
                        name: "param",
                        id: "string__parameter__hLZ1VO4_z877hc8tH2JvU",
                    },
                ],
                input: [],
                start: "root__RgMAJtyP3iEvnpHBS3F1b",
                end: "root__g53ZLhnEJLutz07-O96-G",
            },
            positionAbsolute: {
                x: -210,
                y: 0,
            },
            id: "RP5ykU59A7htjssRerFO_",
            position: {
                x: -210,
                y: 0,
            },
        },
        {
            type: "input",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    render: `${input[\'Input#1\']}__${parameter[\'param\']}`\n  };\n}',
                    outdated: false,
                    old: "",
                },
                label: "Heading",
                output: [
                    {
                        type: "string",
                        value: "string",
                        name: "render",
                        id: "string__output__sOCeHbwE12Wlnm3tb3ftL",
                    },
                ],
                parameters: [
                    {
                        type: "string",
                        value: "string",
                        name: "param",
                        id: "string__parameter__VptFiAhgakFy-r2LjAS9u",
                    },
                ],
                input: [
                    {
                        id: "string__input__AReKZdBqTqO3G889z3ZWH",
                        type: "string",
                        value: "string",
                        name: "Input#1",
                    },
                ],
                start: "root__xpLg6R7esEPuHwfdnVTJe",
                end: "root__6w46_fcipd7q5NEkDNtOv",
            },
            positionAbsolute: {
                x: 0,
                y: -75,
            },
            id: "zAh96Ip7eAX22eFay_d7j",
            position: {
                x: 0,
                y: -75,
            },
        },
        {
            type: "Output",
            data: {
                error: {
                    code: "",
                    message: "",
                },
                function: {
                    content: '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {};\n}',
                    outdated: false,
                    old: "",
                },
                label: "Heading",
                output: [],
                parameters: [],
                input: [
                    {
                        id: "string__input__qNya2QGavNQxjYtzEOWUv",
                        type: "string",
                        value: "string",
                        name: "Input#1",
                    },
                ],
                start: "root__Lid4DB9E-EkosYaCF-tKO",
                end: "root__moFg5zGhiT5jHaIM6xPZS",
            },
            positionAbsolute: {
                x: 195,
                y: -120,
            },
            id: "wank2kfgRqXDLRUg_GLoF",
            position: {
                x: 195,
                y: -120,
            },
        },
    ],
    edges: [
        {
            source: "RP5ykU59A7htjssRerFO_",
            sourceHandle: "root__RgMAJtyP3iEvnpHBS3F1b",
            target: "zAh96Ip7eAX22eFay_d7j",
            targetHandle: "root__6w46_fcipd7q5NEkDNtOv",
            id: "reactflow__edge-RP5ykU59A7htjssRerFO_root__RgMAJtyP3iEvnpHBS3F1b-zAh96Ip7eAX22eFay_d7jroot__6w46_fcipd7q5NEkDNtOv",
        },
        {
            source: "S-ImwJG-YvbFliP3dMZ77",
            sourceHandle: "root__YKScpBt7ppQUnWKqZ_-VM",
            target: "RP5ykU59A7htjssRerFO_",
            targetHandle: "root__g53ZLhnEJLutz07-O96-G",
            id: "reactflow__edge-S-ImwJG-YvbFliP3dMZ77root__YKScpBt7ppQUnWKqZ_-VM-RP5ykU59A7htjssRerFO_root__g53ZLhnEJLutz07-O96-G",
        },
        {
            source: "zAh96Ip7eAX22eFay_d7j",
            sourceHandle: "root__xpLg6R7esEPuHwfdnVTJe",
            target: "0j7T0_NY_XuIACQ8fgmnO",
            targetHandle: "root__HxSQrNAEHQfBVtFsLXrAU",
            id: "reactflow__edge-zAh96Ip7eAX22eFay_d7jroot__xpLg6R7esEPuHwfdnVTJe-0j7T0_NY_XuIACQ8fgmnOroot__HxSQrNAEHQfBVtFsLXrAU",
        },
        {
            source: "zAh96Ip7eAX22eFay_d7j",
            sourceHandle: "root__xpLg6R7esEPuHwfdnVTJe",
            target: "wank2kfgRqXDLRUg_GLoF",
            targetHandle: "root__moFg5zGhiT5jHaIM6xPZS",
            id: "reactflow__edge-zAh96Ip7eAX22eFay_d7jroot__xpLg6R7esEPuHwfdnVTJe-wank2kfgRqXDLRUg_GLoFroot__moFg5zGhiT5jHaIM6xPZS",
        },
        {
            source: "RP5ykU59A7htjssRerFO_",
            sourceHandle: "string__output__Q8y4k5UZbuu4L0tLoLCWC",
            target: "zAh96Ip7eAX22eFay_d7j",
            targetHandle: "string__input__AReKZdBqTqO3G889z3ZWH",
            id: "reactflow__edge-RP5ykU59A7htjssRerFO_string__output__Q8y4k5UZbuu4L0tLoLCWC-zAh96Ip7eAX22eFay_d7jstring__input__AReKZdBqTqO3G889z3ZWH",
        },
        {
            source: "zAh96Ip7eAX22eFay_d7j",
            sourceHandle: "string__output__sOCeHbwE12Wlnm3tb3ftL",
            target: "wank2kfgRqXDLRUg_GLoF",
            targetHandle: "string__input__qNya2QGavNQxjYtzEOWUv",
            id: "reactflow__edge-zAh96Ip7eAX22eFay_d7jstring__output__sOCeHbwE12Wlnm3tb3ftL-wank2kfgRqXDLRUg_GLoFstring__input__qNya2QGavNQxjYtzEOWUv",
        },
    ],
};
