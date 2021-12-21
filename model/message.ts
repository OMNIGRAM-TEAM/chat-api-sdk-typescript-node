/**
 * Chat API SDK
 * The SDK allows you to receive and send messages through your WhatsApp account. [Sign up now](https://app.chat-api.com/)  The Chat API is based on the WhatsApp WEB protocol and excludes the ban both when using libraries from mgp25 and the like. Despite this, your account can be banned by anti-spam system WhatsApp after several clicking the \"block\" button.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sale@chat-api.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Message {
    /**
    * unique id
    */
    'id'?: string;
    /**
    * text message for type \"chat\", or link to download the file for \"ptt\", \"image\", \"audio\", \"video\" and \"document\", or latitude and longitude for \"location\", or message \"[Call]\" for \"call_log\"
    */
    'body'?: string;
    /**
    * type of the message
    */
    'type'?: Message.TypeEnum;
    /**
    * Sender name
    */
    'senderName'?: string;
    /**
    * true - outgoing, false - incoming
    */
    'fromMe'?: boolean;
    /**
    * Author ID of the message, useful for groups
    */
    'author'?: string;
    /**
    * send time, unix timestamp
    */
    'time'?: number;
    /**
    * chat ID
    */
    'chatId'?: string;
    /**
    * sequence number of the message in the database
    */
    'messageNumber'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Message.TypeEnum"
        },
        {
            "name": "senderName",
            "baseName": "senderName",
            "type": "string"
        },
        {
            "name": "fromMe",
            "baseName": "fromMe",
            "type": "boolean"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "chatId",
            "baseName": "chatId",
            "type": "string"
        },
        {
            "name": "messageNumber",
            "baseName": "messageNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}

export namespace Message {
    export enum TypeEnum {
        Chat = <any> 'chat',
        Image = <any> 'image',
        Ptt = <any> 'ptt',
        Document = <any> 'document',
        Audio = <any> 'audio',
        Video = <any> 'video',
        Location = <any> 'location',
        CallLog = <any> 'call_log'
    }
}
