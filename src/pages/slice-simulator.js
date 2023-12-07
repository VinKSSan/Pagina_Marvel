import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { SliceComponentProps } from "@prismicio/react";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={SliceComponentsProps} />}
    />
  );
};

export default SliceSimulatorPage;
