import * as React from 'react';
import { Attachment } from 'botframework-directlinejs-modified';
import { FormatState, SizeState } from './Store';
import { IDoCardAction } from './Chat';
export interface CarouselProps {
    format: FormatState;
    size: SizeState;
    attachments: Attachment[];
    onCardAction: IDoCardAction;
    onImageLoad: () => void;
}
export declare class Carousel extends React.PureComponent<CarouselProps, {}> {
    private root;
    private hscroll;
    constructor(props: CarouselProps);
    private updateContentWidth();
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): any;
}
export interface CarouselAttachmentProps {
    format: FormatState;
    attachments: Attachment[];
    onCardAction: IDoCardAction;
    onImageLoad: () => void;
}
