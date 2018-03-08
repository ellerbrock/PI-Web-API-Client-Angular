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
import { WebIdInfo} from '../webid/WebIdInfo';
import { WebIdError} from '../webid/WebIdError';


@Injectable()
export class WebIdHelper {
		constructor() {
			
        }
        
        public getWebIdInfo(webId : string) : WebIdInfo
        {
            return new WebIdInfo(webId);
        }
		public generateWebIdByPath(path : string, type: string, ownerType: string) : string
        {
            this.validateTypeAndOwnerType(type, ownerType);
            let marker : string = this.getMarker(type);
            let ownerMarker : string = this.getOwnerMarker(ownerType);

            if (path.substring(0, 2) == "\\\\")
            {
                path = path.substring(2);
            }
            let encodedPath : string = this.encodeString(path.toUpperCase());
			return ("P1"  + marker +  ownerMarker + encodedPath);
		}
		
		private validateTypeAndOwnerType(type : string, ownerType : string)
        {
            if (type == Models.PIAttribute.name)
            {
                if ((ownerType != Models.PIElement.name) && (ownerType != Models.PIEventFrame.name))
                {
                    throw new WebIdError("PIAttribte owner type must be a PIElement or a PIEventFrame.");
                }
            }
            else if (type == Models.PIAttributeTemplate.name)
            {
                if ((ownerType != Models.PIElementTemplate.name))
                {
                    throw new WebIdError("PIElementTemplate owner type must be a PIElementTemplate.");
                }
            }
            else if ((type == Models.PIEnumerationSet.name) || (type == Models.PIEnumerationValue.name))
            {
                if ((ownerType != Models.PIDataServer.name) && (ownerType != Models.PIAssetServer.name))
                {
                    throw new WebIdError("PIEnumerationSet and  PIEnumerationValue owner type must be a PIDataServer or PIAssetServer.");
                }
            }
            else if (type == Models.PITimeRule.name)
            {
                if ((ownerType != Models.PIAnalysis.name) && (ownerType != Models.PIAnalysisTemplate.name))
                {
                    throw new WebIdError("PITimeRule owner type must be a PIAnalysis and PIAnalysisTemplate.");
                }
            }
        }

        private getOwnerMarker(ownerType: string) : string
        {
            let markerOwner = "";
            if (ownerType == null)
            {
                return markerOwner;
            }

            if (ownerType == Models.PIAssetServer.name)
            {
                markerOwner = "R";
            }
            else if (ownerType == Models.PIDataServer.name)
            {
                markerOwner = "D";
            }
            else if (ownerType == Models.PIAnalysis.name)
            {
                markerOwner = "X";
            }
            else if (ownerType == Models.PIAnalysisTemplate.name)
            {
                markerOwner = "T";
            }
            else if (ownerType == Models.PIElement.name)
            {
                markerOwner = "E";
            }
            if (ownerType == Models.PIElementTemplate.name)
            {
                markerOwner = "E";
            }
            else if (ownerType == Models.PIEventFrame.name)
            {
                markerOwner = "F";
            }
            return markerOwner;
        }

        private getMarker( type:string) : string
        {
            let marker = "";
            if (type == Models.PIAnalysis.name)
            {
                marker = "Xs";
            }
            else if (type == Models.PIAnalysisCategory.name)
            {
                marker = "XC";
            }
            else if (type == Models.PIAnalysisTemplate.name)
            {
                marker = "XT";
            }
            else if (type == Models.PIAnalysisRule.name)
            {
                marker = "XR";
            }
            else if (type == Models.PIAnalysisRulePlugIn.name)
            {
                marker = "XP";
            }
            else if (type == Models.PIAttribute.name)
            {
                marker = "Ab";
            }
            else if (type == Models.PIAttributeCategory.name)
            {
                marker = "AC";
            }
            else if (type == Models.PIAttributeTemplate.name)
            {
                marker = "AT";
            }
            else if (type == Models.PIAssetDatabase.name)
            {
                marker = "RD";
            }
            else if (type == Models.PIAssetServer.name)
            {
                marker = "RS";
            }
            else if (type == Models.PIElement.name)
            {
                marker = "Em";
            }
            else if (type == Models.PIElementCategory.name)
            {
                marker = "EC";
            }
            else if (type == Models.PIElementTemplate.name)
            {
                marker = "ET";
            }
            else if (type == Models.PIEnumerationSet.name)
            {
                marker = "MS";
            }
            else if (type == Models.PIEnumerationValue.name)
            {
                marker = "MV";
            }
            else if (type == Models.PIEventFrame.name)
            {
                marker = "Fm";
            }
            else if (type == Models.PITimeRule.name)
            {
                marker = "TR";
            }
            else if (type == Models.PITimeRulePlugIn.name)
            {
                marker = "TP";
            }
            else if (type == Models.PISecurityIdentity.name)
            {
                marker = "SI";
            }
            else if (type == Models.PISecurityMapping.name)
            {
                marker = "SM";
            }
            else if (type == Models.PITable.name)
            {
                marker = "Bl";
            }
            else if (type == Models.PITableCategory.name)
            {
                marker = "BC";
            }
            else if (type == Models.PIPoint.name)
            {
                marker = "DP";
            }
            else if (type == Models.PIDataServer.name)
            {
                marker = "DS";
            }
            else if (type == Models.PIUnit.name)
            {
                marker = "Ut";
            }
            else if (type == Models.PIUnitClass.name)
            {
                marker = "UC";
            }
            if (!marker)
            {
                throw new WebIdError("Invalid object type.");
            }
            return marker;
        }

        private encodeString(value: string) : string 
        {
            var count = 0;
            var encodedValue = btoa(value.toUpperCase());
            encodedValue = encodedValue.replace('+', '-').replace('/', '_');
            for (var i = (encodedValue.length - 1); i > 0; i--) {
                if (encodedValue[i] == "=") {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count > 0)
            {
                encodedValue = encodedValue.slice(0, -count);
            }
            return encodedValue;
        }
	}

