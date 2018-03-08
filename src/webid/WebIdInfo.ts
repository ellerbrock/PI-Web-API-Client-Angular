/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*  <http://www.apache.org/licenses/LICENSE-2.0>
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Models from '../models/models';

import { WebIdError } from '../webid/WebIdError';
import { WebIdType } from '../webid/WebIdType';

enum WebIdStringType { OneGuid, TwoGuids, ThreeGuids }

@Injectable()
export class WebIdInfo {

        public Version : number
        public Marker : string
        public PointID:number
        public Path:string      
        public ObjectType:string
        public OwnerType:string
        public ServerID:string 
        public ObjectID:string
        public OwnerID :string
        public WebIdType: WebIdType
    
    	constructor(webId : string) {
                this.WebIdType = this.getWebIdType(webId);
                if ((this.WebIdType == WebIdType.DefaultIDOnly) || (this.WebIdType == WebIdType.LocalIDOnly))
                {
                    throw new WebIdError("This library is not compatible with DefaultIDOnly or LocalIDOnly. Use Full, PathOnly or IDOnly instead.");
                }
                this.Version = parseInt(webId.substring(1, 2));
                if (this.Version == 0)
                {
                    throw new WebIdError("This tool is compatible with Web ID 2.0 only. The second character of the Web ID must be 1.");
                }
    
                this.processType(webId);
                this.processWebId(webId);
         }       




        private getWebIdType(webId:string) : WebIdType
        {
            let webIdTypeLetter = webId.substring(0, 1);
            if (webIdTypeLetter == "F")
            {
                return WebIdType.Full;
            }
            else if (webIdTypeLetter == "I")
            {
                return WebIdType.IDOnly;
            }
            else if (webIdTypeLetter == "P")
            {
                return WebIdType.PathOnly;
            }
            else if (webIdTypeLetter == "L")
            {
                return WebIdType.LocalIDOnly;
            }
            else if (webIdTypeLetter == "D")
            {
                return WebIdType.DefaultIDOnly;
            }
            throw new WebIdError("Incorrect Web ID type (first letter).");
        }

        private processType(webId : string)
        {
            this.Marker = webId.substring(2, 4);
            if (this.Marker == "Xs")
            {
                this.ObjectType = Models.PIAnalysis.name;
            }
            else if (this.Marker == "XC")
            {
                this.ObjectType = Models.PIAnalysisCategory.name;
            }
            else if (this.Marker == "XT")
            {
                this.ObjectType = Models.PIAnalysisTemplate.name;
            }
            else if (this.Marker == "XR")
            {
                this.ObjectType = Models.PIAnalysisRule.name;
            }
            else if (this.Marker == "XP")
            {
                this.ObjectType = Models.PIAnalysisRulePlugIn.name;
            }
            else if (this.Marker == "Ab")
            {
                this.ObjectType = Models.PIAttribute.name;
            }
            else if (this.Marker == "AC")
            {
                this.ObjectType = Models.PIAttributeCategory.name;
            }
            else if (this.Marker == "AT")
            {
                this.ObjectType = Models.PIAttributeTemplate.name;
            }
            else if (this.Marker == "RD")
            {
                this.ObjectType = Models.PIAssetDatabase.name;
            }
            else if (this.Marker == "Em")
            {
                this.ObjectType = Models.PIElement.name;
            }
            else if (this.Marker == "EC")
            {
                this.ObjectType = Models.PIElementCategory.name;
            }
            else if (this.Marker == "ET")
            {
                this.ObjectType = Models.PIElementTemplate.name;
            }
            else if (this.Marker == "MS")
            {
                this.ObjectType = Models.PIEnumerationSet.name;
            }
            else if (this.Marker == "MV")
            {
                this.ObjectType = Models.PIEnumerationValue.name;
            }
            else if (this.Marker == "Fm")
            {
                this.ObjectType = Models.PIEventFrame.name;
            }
            else if (this.Marker == "TR")
            {
                this.ObjectType = Models.PITimeRule.name;
            }
            else if (this.Marker == "TP")
            {
                this.ObjectType = Models.PITimeRulePlugIn.name;
            }
            else if (this.Marker == "SI")
            {
                this.ObjectType = Models.PISecurityIdentity.name;
            }
            else if (this.Marker == "SM")
            {
                this.ObjectType = Models.PISecurityMapping.name;
            }
            else if (this.Marker == "Bl")
            {
                this.ObjectType = Models.PITable.name;
            }
            else if (this.Marker == "BC")
            {
                this.ObjectType = Models.PITableCategory.name;
            }
            else if (this.Marker == "DP")
            {
                this.ObjectType = Models.PIPoint.name;
            }
            else if (this.Marker == "DS")
            {
                this.ObjectType = Models.PIDataServer.name;
            }
            else if (this.Marker == "RS")
            {
                this.ObjectType = Models.PIAssetServer.name;
            }
            else if (this.Marker == "Ut")
            {
                this.ObjectType = Models.PIUnit.name;
            }
            else if (this.Marker == "UC")
            {
                this.ObjectType = Models.PIUnitClass.name;
            }
        }

        private processOwnerType(markerOwner : string)
        {
            if (markerOwner == "R")
            {
                this.OwnerType = Models.PIAssetServer.name;
            }
            else if (markerOwner == "D")
            {
                this.OwnerType = Models.PIDataServer.name;
            }
            else if (markerOwner == "X")
            {
                this.OwnerType = Models.PIAnalysis.name;
            }
            else if (markerOwner == "T")
            {
                this.OwnerType = Models.PIAnalysisTemplate.name;
            }
            else if (markerOwner == "E")
            {
                this.OwnerType = Models.PIElement.name;
            }
            else if (markerOwner == "F")
            {
                this.OwnerType = Models.PIEventFrame.name;
            }
        }

        private processWebId(webId : string)
        {
            if (this.ObjectType == Models.PIAnalysis.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIAnalysisCategory.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIAnalysisTemplate.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIAnalysisRule.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == Models.PIAnalysisRulePlugIn.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIAttribute.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == Models.PIAttributeCategory.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIAttributeTemplate.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
                this.OwnerType = Models.PIElementTemplate.name;
            }
            else if (this.ObjectType == Models.PIAssetDatabase.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIElement.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIElementCategory.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIElementTemplate.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIEnumerationSet.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIEnumerationValue.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == Models.PIEventFrame.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PITimeRule.name)
            {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == Models.PITimeRulePlugIn.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PISecurityIdentity.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PISecurityMapping.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PITable.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PITableCategory.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIPoint.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, true);
            }
            else if (this.ObjectType == Models.PIDataServer.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.OneGuid, false);
            }
            else if (this.ObjectType == Models.PIAssetServer.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.OneGuid, false);
            }
            else if (this.ObjectType == Models.PIUnit.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == Models.PIUnitClass.name)
            {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
        }

        private processGuidsAndPaths(webId : string, hasMarkerOwner : boolean, webIdStringType : WebIdStringType, usePIPoint : boolean)
        {
            let restWebId = webId.substring(4);

            if (hasMarkerOwner == true)
            {
                let markerOwner = restWebId.substring(0, 1);
                this.processOwnerType(markerOwner);
                restWebId = restWebId.substring(1);
            }

            if ((this.WebIdType == WebIdType.Full) || (this.WebIdType == WebIdType.IDOnly))
            {
                let encodedServerID = restWebId.substring(0, 22);
                this.ServerID = this.decodeGUID(encodedServerID);
                restWebId = restWebId.substring(22);

                if (webIdStringType == WebIdStringType.ThreeGuids)
                {
                   let encodedOwnerID = restWebId.substring(0, 22);
                   this.OwnerID = this.decodeGUID(encodedOwnerID);
                    restWebId = restWebId.substring(22);
                }
                if ((webIdStringType == WebIdStringType.ThreeGuids) ||
                    (webIdStringType == WebIdStringType.TwoGuids))
                {

                    if (usePIPoint == false)
                    {
                        let encodedObjectID = restWebId.substring(0, 22);
                        this.ObjectID = this.decodeGUID(encodedObjectID);
                        restWebId = restWebId.substring(22);
                    }
                    else
                    {
                        let encodedObjectID = restWebId.substring(0, 6);
                        this.PointID = this.decodeInt(encodedObjectID);
                        restWebId = restWebId.substring(6);
                    }
                }
            }

            if ((this.WebIdType == WebIdType.Full) || (this.WebIdType == WebIdType.PathOnly))
            {
                let encodedPath = restWebId;
                this.Path = this.decodeString(encodedPath);
            }
        }

        private base64ToBytes(base64 : string) :  Uint8Array {  
            var binary_string = atob(base64);  
            var len = binary_string.length;  
            var bytes = new Uint8Array(len);  
            for (var i = 0; i < len; i++) {  
            bytes[i] = binary_string.charCodeAt(i);  
            }  
            return bytes;  
          } 

        private decodeGUID(value:string) : string
        {
            var bytes = this.base64ToBytes(value).buffer;  
            var uncodedbytes = new Uint8Array(bytes);  
            
            var guidstr = "";  
            
            for (var i = 3; i >= 0; i--) {  
            if (uncodedbytes[i] < 17) {  
            guidstr += "0" + uncodedbytes[i].toString(16);  
            } else {  
            guidstr += uncodedbytes[i].toString(16);  
            }  
            }  
            guidstr += "-";  
            if (uncodedbytes[5] < 17) {  
            guidstr += "0" + uncodedbytes[5].toString(16);  
            } else {  
            guidstr += uncodedbytes[5].toString(16);  
            }  
            if (uncodedbytes[4] < 17) {  
            guidstr += "0" + uncodedbytes[4].toString(16);  
            } else {  
            guidstr += uncodedbytes[4].toString(16);  
            }  
            guidstr += "-";  
            if (uncodedbytes[7] < 17) {  
            guidstr += "0" + uncodedbytes[7].toString(16);  
            } else {  
            guidstr += uncodedbytes[7].toString(16);  
            }  
            if (uncodedbytes[6] < 17) {  
            guidstr += "0" + uncodedbytes[6].toString(16);  
            } else {  
            guidstr += uncodedbytes[6].toString(16);  
            }  
            guidstr += "-";  
            if (uncodedbytes[8] < 17) {  
            guidstr += "0" + uncodedbytes[8].toString(16);  
            } else {  
            guidstr += uncodedbytes[8].toString(16);  
            }  
            if (uncodedbytes[9] < 17) {  
            guidstr += "0" + uncodedbytes[9].toString(16);  
            } else {  
            guidstr += uncodedbytes[9].toString(16);  
            }  
            guidstr += "-";  
            for (i = 10; i < 16; i++) {  
            if (uncodedbytes[i] < 17) {  
            guidstr += "0" + uncodedbytes[i].toString(16);  
            } else {  
            guidstr += uncodedbytes[i].toString(16);  
            }  
            }  
            
            return guidstr;  
        }

 
        private decodeString(value : string) : string
        {
            var decodestring = value.replace('-', '+').replace('_', '/');
            var padneeded = (4 - (decodestring.length % 4)) % 4;
            for (var i = 0; i < padneeded; i++) {
                decodestring += '=';
            }
            return (atob(decodestring));
        }

        private decodeInt(value:string) : number
        {
            var array = this.base64ToBytes(value);

            var result = ((array[array.length - 4]) |
                (array[array.length - 3] << 8) |
                (array[array.length - 2] << 16) |
                (array[array.length - 1] << 24));
            return result;
        }  
        
	}


