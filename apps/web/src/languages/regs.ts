// regs from react-ui 
// -The MIT License (MIT)  
// -  
// -Copyright (c) 2015 Lobos  

import { FieldType } from "./fieldtypes"

export const regs = {
   [FieldType.email]: /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
   [FieldType.url]: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
   [FieldType.number]: /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))*\s*$/,
   [FieldType.date]: /^(\d{4})-(\d{2})-(\d{2})$/,
   [FieldType.alpha]: /^[a-zA-Z. _-]+$/i,
   [FieldType.alphanum]: /^[a-zA-Z0-9-_ ]+$/i,
   [FieldType.password]: /^[\x00-\xff]+$/,
   [FieldType.integer]: /^[-+]?[0-9]*$/,
   [FieldType.tel]: /^[\d\s ().-]+$/,
   [FieldType.hex]: /^#[0-9a-f]{6}?$/i,
   [FieldType.rgb]: new RegExp('^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*\\)$'),
   [FieldType.rgba]: new RegExp('^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*((0.[1-9]*)|[01])\\s*\\)$'),
   [FieldType.hsv]: new RegExp('^hsv\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$')
} 
