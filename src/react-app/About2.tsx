// src/App.tsx

// import { useState } from "react";

import { useFlags } from "launchdarkly-react-client-sdk";

function About2() {

  const { testFeature } = useFlags();

  return (
    <>
      <div>In About2.tsx, testFeature is { testFeature ? 'true' : 'false'}</div>
    </>
  );
}

export default About2;
