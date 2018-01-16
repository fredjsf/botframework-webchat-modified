import * as React from 'react';
import { Activity } from 'botframework-directlinejs-modified';
import { FormatState, SizeState } from './Store';
import { IDoCardAction } from './Chat';
declare global  {
    interface Window {
        enableOldButtons: boolean;
        lastIndexDisableButtons: number;
        chatbotMessageContentLength: number;
    }
}
export interface HistoryProps {
    format: FormatState;
    size: SizeState;
    activities: Activity[];
    setMeasurements: (carouselMargin: number) => void;
    onClickRetry: (activity: Activity) => void;
    setFocus: () => void;
    isFromMe: (activity: Activity) => boolean;
    isSelected: (activity: Activity) => boolean;
    onClickActivity: (activity: Activity) => React.MouseEventHandler<HTMLDivElement>;
    doCardAction: IDoCardAction;
}
export declare class HistoryView extends React.Component<HistoryProps, {}> {
    private scrollMe;
    private scrollContent;
    private scrollToBottom;
    private carouselActivity;
    private largeWidth;
    constructor(props: HistoryProps);
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    private autoscroll();
    private measurableCarousel;
    private doCardAction(type, value, title, index);
    render(): any;
}
export declare const History: any;
export interface WrappedActivityProps {
    activity: Activity;
    showTimestamp: boolean;
    selected: boolean;
    fromMe: boolean;
    format: FormatState;
    onClickActivity: React.MouseEventHandler<HTMLDivElement>;
    onClickRetry: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare class WrappedActivity extends React.Component<WrappedActivityProps, {}> {
    messageDiv: HTMLDivElement;
    constructor(props: WrappedActivityProps);
    render(): any;
}
