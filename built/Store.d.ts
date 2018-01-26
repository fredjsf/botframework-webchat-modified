import { Activity, IBotConnection, User, ConnectionStatus, Message } from 'botframework-directlinejs-modified';
import { FormatOptions, ActivityOrID } from './Chat';
import { Strings } from './Strings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Reducer } from 'redux';
declare global  {
    interface Window {
        typingBubbleTimeout: any;
    }
}
export interface ShellState {
    sendTyping: boolean;
    input: string;
}
export declare type ShellAction = {
    type: 'Update_Input';
    input: string;
} | {
    type: 'Set_Send_Typing';
    sendTyping: boolean;
} | {
    type: 'Send_Message';
    activity: Activity;
};
export declare const shell: Reducer<ShellState>;
export interface FormatState {
    locale: string;
    options: FormatOptions;
    strings: Strings;
    carouselMargin: number;
}
export declare type FormatAction = {
    type: 'Set_Format_Options';
    options: FormatOptions;
} | {
    type: 'Set_Locale';
    locale: string;
} | {
    type: 'Set_Measurements';
    carouselMargin: number;
};
export declare const format: Reducer<FormatState>;
export interface SizeState {
    height: number;
    width: number;
}
export declare type SizeAction = {
    type: 'Set_Size';
    width: number;
    height: number;
};
export declare const size: Reducer<SizeState>;
export interface UserState {
    user: User;
}
export declare type UpdateUser = {
    type: 'Update_User';
    user: User;
};
export declare const user: Reducer<UserState>;
export interface ConnectionState {
    connectionStatus: ConnectionStatus;
    botConnection: IBotConnection;
    selectedActivity: BehaviorSubject<ActivityOrID>;
    user: User;
    bot: User;
}
export declare type ConnectionAction = {
    type: 'Start_Connection';
    botConnection: IBotConnection;
    user: User;
    bot: User;
    selectedActivity: BehaviorSubject<ActivityOrID>;
} | {
    type: 'Connection_Change';
    connectionStatus: ConnectionStatus;
};
export declare const connection: Reducer<ConnectionState>;
export interface HistoryState {
    activities: Activity[];
    clientActivityBase: string;
    clientActivityCounter: number;
    selectedActivity: Activity;
}
export declare type HistoryAction = {
    type: 'Receive_Message' | 'Send_Message' | 'Show_Typing' | 'Receive_Sent_Message';
    activity: Activity;
} | {
    type: 'Send_Message_Try' | 'Send_Message_Fail' | 'Send_Message_Retry';
    clientActivityId: string;
} | {
    type: 'Send_Message_Succeed';
    clientActivityId: string;
    id: string;
} | {
    type: 'Select_Activity';
    selectedActivity: Activity;
} | {
    type: 'Take_SuggestedAction';
    message: Message;
} | {
    type: 'Clear_Typing';
    id: string;
};
export declare const history: Reducer<HistoryState>;
export declare type ChatActions = ShellAction | FormatAction | SizeAction | ConnectionAction | HistoryAction | UpdateUser;
export interface ChatState {
    shell: ShellState;
    format: FormatState;
    size: SizeState;
    connection: ConnectionState;
    history: HistoryState;
}
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import { Store } from 'redux';
export declare const createStore: () => Store<ChatState>;
export declare type ChatStore = Store<ChatState>;