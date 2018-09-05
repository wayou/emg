import * as React from "react";
import "./emg.scss";
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
declare class Emg extends React.Component<IEmgProps, IEmgState> {
    static defaultProps: Partial<IEmgProps>;
    private imageElement?;
    constructor(props: IEmgProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private getImgUrl;
    private getClassName;
    private onLoad;
    private onError;
    private initalLazyLoad;
    private loadImg;
}
export default Emg;
