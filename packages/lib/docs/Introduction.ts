import { docs } from "./routes";

const Introduction = (baseurl: string) => {
  return `

# Introduction
This a Block Based Javascript Builder built on React and Node.js.

### Get Started
[Basic Nodes](${baseurl}/docs/basic-nodes)

[Demo](${baseurl}/docs/demo)
`;
};

export default Introduction;
