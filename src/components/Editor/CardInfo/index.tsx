import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newIOP } from "../../../redux/functions/newIOP";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { AppDispatch, RootState } from "../../../redux/store";
import { CardData, Parameters } from "../../../types/Card";
import UncontrolledDropdown from "../../cards/UI/Dropdown";
import FormHandler from "../../formHandler/formHandler";

function CardInfo() {
  const activeNode = useSelector((state: RootState) => state.activeNode);
  const activeCard = useSelector((state: RootState) => {
    const card = state.nodes.find((card) => card.id === activeNode.activeNode);

    return card;
  });
  const dispatch = useDispatch<AppDispatch>();

  const data = [
    {
      name: "id",
      value: activeCard?.id,
      editable: false,
    },
    {
      name: "type",
      value: activeCard?.type,
      editable: false,
    },
    {
      name: "label",
      value: activeCard?.data.label,
      editable: true,
    },
  ];

  console.log(activeCard);

  if (!activeCard) return null;

  console.log(Object.values(Parameters));

  return (
    <div className="p-4 w-full">
      <div className="p-5 flex flex-col gap-5 w-full">
        {data.map((item, index) => (
          <div className="flex flex-wrap">
            <span className="mx-2 px-2 py-1 font-semibold italic">
              {item.name}
            </span>
            {item.editable ? (
              <input
                className="px-2 flex-grow py-1 border-2 border-gray-300 rounded-sm"
                value={(activeCard?.data as any)[item.name]!}
                onChange={(e) => {
                  console.log(e.target.value);
                  dispatch(
                    UpdateData({
                      data: {
                        [item.name]: e.target.value,
                      },
                      id: activeCard?.id,
                    })
                  );
                }}
              />
            ) : (
              <span className="self-center opacity-70 italic">
                {activeCard?.id}
              </span>
            )}
          </div>
        ))}

        <div>
          <h1 className="font-semibold text-lg">Input</h1>
          <div className="p-3">
            {activeCard?.data.input &&
              activeCard?.data.input.map((item, value) => (
                <div className="flex flex-wrap">
                  <FormHandler
                    data={item}
                    onChange={(oldData, newData) => {
                      if (!activeCard) return console.log("no active node");
                      dispatch(
                        UpdateData({
                          data: {
                            input: [
                              ...activeCard.data.input.filter(
                                (i) => i.id !== oldData.id
                              ),
                              newData,
                            ],
                          },
                          id: activeCard?.id,
                        })
                      );
                    }}
                  />
                </div>
              ))}
            <UncontrolledDropdown>
              <UncontrolledDropdown.Button className="mt-2 flex flex-col justify-center items-center">
                <span className="p-2 px-3 rounded-lg bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </UncontrolledDropdown.Button>
              <UncontrolledDropdown.Panel>
                <div className="">
                  {Object.values(Parameters).map((item, index) => (
                    <UncontrolledDropdown.Item
                      className=" "
                      onClick={() => {
                        console.log("newIOP");
                        dispatch(
                          newIOP({
                            type: "input",
                            field: item,
                          })
                        );
                      }}
                    >
                      <div>{item}</div>
                    </UncontrolledDropdown.Item>
                  ))}
                </div>
              </UncontrolledDropdown.Panel>
            </UncontrolledDropdown>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Parameter</h1>
          <div className="p-3">
            {activeCard?.data.parameters &&
              activeCard?.data.parameters.map((item, value) => (
                <div className="flex flex-wrap">
                  <FormHandler
                    data={item}
                    onChange={(oldData, newData) => {
                      if (!activeCard) return console.log("no active node");

                      dispatch(
                        UpdateData({
                          data: {
                            parameters: [
                              ...activeCard.data.parameters.filter(
                                (i) => i.id !== oldData.id
                              ),
                              newData,
                            ],
                          },
                          id: activeCard?.id,
                        })
                      );
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Output</h1>
          <div className="p-3">
            {activeCard?.data.output &&
              activeCard?.data.output.map((item, value) => (
                <div className="flex flex-wrap">
                  <FormHandler
                    data={item}
                    onChange={(oldData, newData) => {
                      if (!activeCard) return console.log("no active node");

                      dispatch(
                        UpdateData({
                          data: {
                            output: [
                              ...activeCard.data.output.filter(
                                (i) => i.id !== oldData.id
                              ),
                              newData,
                            ],
                          },
                          id: activeCard?.id,
                        })
                      );
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
