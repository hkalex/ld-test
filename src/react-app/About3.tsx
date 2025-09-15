// src/App.tsx

// import { useState } from "react";

import { useFlags } from "launchdarkly-react-client-sdk";

function About3() {

  const { testFeature } = useFlags();

  return (
    <>
      <div>In About3.tsx, testFeature is { testFeature ? 'true' : 'false'}</div>
    </>
  );
}

export default About3;
