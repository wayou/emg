import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import { Button, Welcome } from "@storybook/react/demo";
import Emg from "../dist/emg.esm";
import * as lena from "./images/lena.jpg";
import * as loading from "./images/loading.gif";

const TEST_IMG_URL =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/220px-Lenna_%28test_image%29.png";

storiesOf("Emg", module)
  .add("normal render", () => <Emg src={TEST_IMG_URL} />)

  .add("with custom loading indicator", () => <Emg src={TEST_IMG_URL} loadingImg={loading} />)

  .add("image load success with `onLoad` handler", () => (
    <Emg
      src={TEST_IMG_URL}
      onLoad={event => {
        console.log(`image load success!`, event);
      }}
    />
  ))

  .add("will fail to load", () => <Emg src="invalid_img_url" />)

  .add("load fail with custom fallback image", () => (
    <Emg src="invalid_img_url" fallbackImg={lena} />
  ))

  .add("load fail with custom `onError` handler", () => {
    return (
      <Emg
        src="invalid_img_url"
        onError={event => {
          console.log(`image load failed!`, event);
        }}
      />
    );
  })

  .add("lazy load", () => {
    return (
      <div>
        <p style={{ marginBottom: "1000px" }}>scroll down to see the lazy loading in action</p>
        <Emg src={TEST_IMG_URL} />
      </div>
    );
  })

  .add("with inline style", () => {
    return (
      <div>
        <Emg src={TEST_IMG_URL} style={{border:'2px solid red'}}/>
      </div>
    );
  });
