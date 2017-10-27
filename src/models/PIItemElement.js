"use strict";
/**
* Copyright 2017 OSIsoft, LLC
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
exports.__esModule = true;
var PIItemElement = (function () {
    function PIItemElement(identifier, identifierType, object, exception) {
        if (identifier != null) {
            this.Identifier = identifier;
        }
        if (identifierType != null) {
            this.IdentifierType = identifierType;
        }
        if (object != null) {
            this.Object = object;
        }
        if (exception != null) {
            this.Exception = exception;
        }
    }
    return PIItemElement;
}());
exports.PIItemElement = PIItemElement;