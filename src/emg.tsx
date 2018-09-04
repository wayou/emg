/*
 * @author: wayou
 * @date: 2018-09-04 17:10:14
 * @description:
 * a comporehensive image component
 *
 */

import * as React from "react";
import "./img.scss";

interface IEmgProps {
  className?: string;
  src: string;
  alt?: string;
  title?: string;
  style?: React.CSSProperties;

  /**
   * show while image loading
   */
  loadingImg?: string;

  /**
   * show when failed to load the image
   */
  loadErrImg?: string;

  /**
   * instead of showing an error image, show this fallback one
   */
  fallbackImg?: string;

  /**
   * whether lazy load or not.
   * enable only when `IntersectionObserver` is supported
   */
  isLazyLoad?: boolean;

  onLoad: (event: Event) => void;
  onError: (event: Event) => void;
}

interface IEmgState {
  isLoading: boolean;
  isLoadSuccess: boolean;
}

const IMAGE_CLASS_NAMES = {
  IMAGE_CLASSNAME: "image",
  IMAGE_LOADING: "image-loading",
  IMAGE_LOAD_SUCCESS: "iamge-load-success",
  IMAGE_LOAD_ERR: "image-load-error",
};

class Emg extends React.Component<IEmgProps, IEmgState> {
  public static defaultProps: Partial<IEmgProps> = {
    className: "",
    alt: "",
    loadingImg: require("./images/img_loading.png"),
    loadErrImg: require("./images/img_load_err.png"),
    fallbackImg: "",
    isLazyLoad: true,
  };

  private imageElement?: HTMLImageElement;

  constructor(props: IEmgProps) {
    super(props);

    this.state = {
      isLoading: true,
      isLoadSuccess: false,
    };

    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
  }

  public componentDidMount() {
    const { src, isLazyLoad } = this.props;
    if (isLazyLoad) {
      this.initalLazyLoad();
    } else {
      this.loadImg(src);
    }
  }

  public render() {
    const { alt, title, style, className } = this.props;
    const { isLoading, isLoadSuccess } = this.state;
    const imgSrc = this.getImgUrl();
    const classNames = this.getClassName(className, isLoading, isLoadSuccess);
    return (
      <img
        ref={ref => {
          this.imageElement = ref as HTMLImageElement;
        }}
        className={classNames}
        src={imgSrc}
        alt={alt}
        title={title}
        style={style}
      />
    );
  }

  private getImgUrl(): string {
    const { src, loadingImg, loadErrImg, fallbackImg } = this.props;
    const { isLoading, isLoadSuccess } = this.state;

    if (isLoading) {
      return loadingImg!;
    } else {
      if (isLoadSuccess) {
        return src;
      } else {
        if (fallbackImg) {
          return fallbackImg;
        } else {
          return loadErrImg!;
        }
      }
    }
  }

  private getClassName(className: string = "", isLoading: boolean, isLoadSuccess: boolean): string {
    return [
      IMAGE_CLASS_NAMES.IMAGE_CLASSNAME,
      !!className ? className : "",
      isLoading
        ? IMAGE_CLASS_NAMES.IMAGE_LOADING
        : isLoadSuccess
          ? IMAGE_CLASS_NAMES.IMAGE_LOAD_SUCCESS
          : IMAGE_CLASS_NAMES.IMAGE_LOAD_ERR,
    ].join(" ");
  }

  private onLoad(event: Event) {
    const { onLoad } = this.props;

    this.setState({
      isLoading: false,
      isLoadSuccess: true,
    });

    if (onLoad) {
      onLoad(event);
    }
  }

  private onError(event: Event) {
    const { onError } = this.props;
    this.setState({
      isLoading: false,
      isLoadSuccess: false,
    });

    if (onError) {
      onError(event);
    }
  }

  private initalLazyLoad() {
    const imageElement = this.imageElement;
    if (!imageElement) {
      return;
    }

    // TODO: performace test with large number of images
    if ("IntersectionObserver" in window) {
      const lazyImageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLImageElement;
            this.loadImg(this.props.src);
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImageObserver.observe(imageElement);
    }
  }

  private loadImg(src: string) {
    const loader = new Image();
    loader.onload = this.onLoad;
    loader.onerror = this.onError;
    loader.src = src;
  }
}

export default Emg;
