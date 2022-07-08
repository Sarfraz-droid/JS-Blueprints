import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newIOP } from "../../../redux/functions/newIOP";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  CardData,
  CardInterface,
  ICardIO,
  ICardIOP,
  Parameters,
} from "../../../types/Card";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import FormHandler from "../../formHandler/formHandler";
import Trash from "../../../assets/svg/Trash.svg";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardMenu = ({
  activeCard,
  type,
  id,
}: {
  activeCard: Array<ICardIO>;
  type: string;
  id: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <React.Fragment>
      {activeCard &&
        activeCard.map((item: ICardIO, index) => (
          <div className="flex flex-wrap my-2" key={index}>
            <FormHandler
              data={item}
              onChange={(oldData, newData) => {
                if (!activeCard) return console.log("no active node");
                dispatch(
                  UpdateData({
                    data: {
                      [type]: [
                        ...activeCard.filter((i) => i.id !== oldData.id),
                        newData,
                      ],
                    },
                    id: id,
                  })
                );
              }}
            />
            <button
              className="self-center h-full mx-3"
              onClick={() => {
                console.log({
                  data: {
                    [type]: [...activeCard.filter((i) => i.id !== item.id)],
                  },
                });

                dispatch(
                  UpdateData({
                    data: {
                      [type]: [...activeCard.filter((i) => i.id !== item.id)],
                    },
                    id: id,
                  })
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 self-center text-red-500 hover:text-red-700 transition-all"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      <Menu
        menuButton={
          <MenuButton className="p-2 px-3 rounded-lg bg-blue-500 text-white">
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
          </MenuButton>
        }
        transition
      >
        {Object.values(Parameters).map((item, index) => (
          <MenuItem
            onClick={() => {
              console.log("newIOP");
              dispatch(
                newIOP({
                  type: type,
                  field: item,
                })
              );
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

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
            <CardMenu
              activeCard={activeCard.data.input}
              type="input"
              id={activeCard?.id}
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Parameter</h1>
          <div className="p-3">
            <CardMenu
              activeCard={activeCard.data.parameters}
              id={activeCard?.id}
              type="parameters"
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Output</h1>
          <div className="p-3">
            <CardMenu
              activeCard={activeCard.data.output}
              id={activeCard?.id}
              type="output"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
