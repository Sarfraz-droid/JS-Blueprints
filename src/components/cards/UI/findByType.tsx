import React from "react";
const findByType = (children: Array<JSX.Element>, component: Function) => {
  const result: Array<JSX.Element> = [];

  const type = [component.name];

  React.Children.forEach(children, (child) => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  return result[0];
};
export default findByType;
