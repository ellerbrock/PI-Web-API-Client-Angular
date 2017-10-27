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
var PIAssetServer = (function () {
    function PIAssetServer(webId, id, name, description, path, isConnected, serverVersion, extendedProperties, links) {
        if (webId != null) {
            this.WebId = webId;
        }
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (description != null) {
            this.Description = description;
        }
        if (path != null) {
            this.Path = path;
        }
        if (isConnected != null) {
            this.IsConnected = isConnected;
        }
        if (serverVersion != null) {
            this.ServerVersion = serverVersion;
        }
        if (extendedProperties != null) {
            this.ExtendedProperties = extendedProperties;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PIAssetServer;
}());
exports.PIAssetServer = PIAssetServer;
