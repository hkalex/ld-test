// src/App.tsx

// import { useState } from "react";

import { useFlags } from "launchdarkly-react-client-sdk";

function About1() {

  const { testFeature } = useFlags();

  return (
    <>
      <div>In About1.tsx, testFeature is { testFeature ? 'true' : 'false'}</div>
    </>
  );
}

export default About1;
