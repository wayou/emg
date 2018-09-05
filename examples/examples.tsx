/*
 * @author: wayou
 * @date: 2018-09-04 19:12:19
 * @description: test the `Emg` component
 */

// tslint:disable:no-console

import * as React from "react";
import * as ReactDom from "react-dom";
import Emg from "../src/emg";
import "./examples.scss";

import fallbackImg from "./images/fallback_img.jpg";

const TEST_IMG_URL =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/220px-Lenna_%28test_image%29.png";

class ImageExamples extends React.Component {
  public render() {
    return (
      <div>
        <p>will fail to load</p>
        <Emg src="invalidurl" />
        <hr />
        <p>fail with a custom fallback image</p>
        <Emg src="invalidurl" fallbackImg={fallbackImg} />
        <hr />
        <p>will load success</p>
        <Emg src={this.getImgUrl()} />
        <hr />
        <p>with custom error handler (see the console)</p>
        <Emg
          src="invalidurl"
          onError={(event: Event) => {
            console.error(`load failed`, event);
          }}
        />
        <hr />
        <p>with custom success handler (see the console)</p>
        <Emg
          src={this.getImgUrl()}
          onLoad={(event: Event) => {
            console.info("load success", event);
          }}
        />
        <hr />
        <p style={{ marginBottom: "300px" }}>this won't be lazy loaded</p>
        <Emg
          isLazyLoad={false}
          src={this.getImgUrl()}
          onLoad={(event: Event) => {
            console.info("load immediately success", event);
          }}
          onError={(event: Event) => {
            console.error("lazy load error", event);
          }}
        />
        <p>while this one will lazy load</p>
        <Emg
          isLazyLoad={true}
          src={this.getImgUrl()}
          onLoad={(event: Event) => {
            console.info("lazy load success", event);
          }}
          onError={(event: Event) => {
            console.error("lazy load error", event);
          }}
        />

        <p>with inline style</p>
        <Emg src={this.getImgUrl()} style={{ height: "500px" }} />
        <hr />
        <p>with custom class name</p>
        <Emg src={this.getImgUrl()} className="custom-class" />
        <hr />
      </div>
    );
  }

  private getImgUrl(): string {
    return `${TEST_IMG_URL}?t=${Math.random()}`;
  }
}

ReactDom.render(<ImageExamples />, document.getElementById("app"));
