import { docs } from "./routes";

const Introduction = (baseurl: string) => {
  return `

# Introduction
This a Block Based Javascript Builder built on React and Node.js.

### Get Started
[Basic Nodes](${baseurl}/basic-nodes)`;
};

export default Introduction;
