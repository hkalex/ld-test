// src/App.tsx

import { useState } from "react";

import { useFlags } from "launchdarkly-react-client-sdk";

function About() {

  const { testFeature } = useFlags();

  return (
    <>
      <div>In About.tsx, testFeature is { testFeature ? 'true' : 'false'}</div>
    </>
  );
}

export default About;
