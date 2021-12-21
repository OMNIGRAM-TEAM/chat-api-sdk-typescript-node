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
import { OutboundAction } from './outboundAction';

export class OutboundActions {
    /**
    * Total number of actions in the queue
    */
    'totalActions'?: number;
    'first100'?: Array<OutboundAction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "totalActions",
            "baseName": "totalActions",
            "type": "number"
        },
        {
            "name": "first100",
            "baseName": "first100",
            "type": "Array<OutboundAction>"
        }    ];

    static getAttributeTypeMap() {
        return OutboundActions.attributeTypeMap;
    }
}
