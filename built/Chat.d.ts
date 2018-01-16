import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Activity, IBotConnection, User, DirectLineOptions, CardActionTypes } from 'botframework-directlinejs-modified';
import { ChatActions } from './Store';
export interface FormatOptions {
    showHeader?: boolean;
}
export declare type ActivityOrID = {
    activity?: Activity;
    id?: string;
};
export interface ChatProps {
    user: User;
    bot: User;
    botConnection?: IBotConnection;
    directLine?: DirectLineOptions;
    locale?: string;
    selectedActivity?: BehaviorSubject<ActivityOrID>;
    sendTyping?: boolean;
    formatOptions?: FormatOptions;
    resize?: 'none' | 'window' | 'detect';
}
export declare const sendMessage: (text: string, from: any, locale: string, title?: string) => ChatActions;
export declare const sendFiles: (files: FileList, from: any, locale: string) => ChatActions;
export declare class Chat extends React.Component<ChatProps, {}> {
    private store;
    private botConnection;
    private activitySubscription;
    private connectionStatusSubscription;
    private selectedActivitySubscription;
    private chatviewPanel;
    private resizeListener;
    constructor(props: ChatProps);
    private handleIncomingActivity(activity);
    private setSize();
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setFocus();
    render(): any;
}
export interface IDoCardAction {
    (type: CardActionTypes, value: string | object, title: string): void;
}
export declare const doCardAction: (botConnection: any, from: any, locale: string, sendMessage: (value: string, user: any, locale: string, title: string) => void) => IDoCardAction;
export declare const sendPostBack: (botConnection: any, text: string, value: object, from: any, locale: string) => void;
export declare const renderIfNonempty: (value: any, renderer: (value: any) => any) => any;
export declare const classList: (...args: (string | boolean)[]) => string;
export declare const konsole: {
    log: (message?: any, ...optionalParams: any[]) => void;
};
