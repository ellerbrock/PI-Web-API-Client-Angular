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

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AnalysisApi } from './api/AnalysisApi'
import { AnalysisCategoryApi } from './api/AnalysisCategoryApi'
import { AnalysisRuleApi } from './api/AnalysisRuleApi'
import { AnalysisRulePlugInApi } from './api/AnalysisRulePlugInApi'
import { AnalysisTemplateApi } from './api/AnalysisTemplateApi'
import { AssetDatabaseApi } from './api/AssetDatabaseApi'
import { AssetServerApi } from './api/AssetServerApi'
import { AttributeApi } from './api/AttributeApi'
import { AttributeCategoryApi } from './api/AttributeCategoryApi'
import { AttributeTemplateApi } from './api/AttributeTemplateApi'
import { AttributeTraitApi } from './api/AttributeTraitApi'
import { BatchApi } from './api/BatchApi'
import { CalculationApi } from './api/CalculationApi'
import { ConfigurationApi } from './api/ConfigurationApi'
import { DataServerApi } from './api/DataServerApi'
import { ElementApi } from './api/ElementApi'
import { ElementCategoryApi } from './api/ElementCategoryApi'
import { ElementTemplateApi } from './api/ElementTemplateApi'
import { EnumerationSetApi } from './api/EnumerationSetApi'
import { EnumerationValueApi } from './api/EnumerationValueApi'
import { EventFrameApi } from './api/EventFrameApi'
import { HomeApi } from './api/HomeApi'
import { PointApi } from './api/PointApi'
import { SecurityIdentityApi } from './api/SecurityIdentityApi'
import { SecurityMappingApi } from './api/SecurityMappingApi'
import { StreamApi } from './api/StreamApi'
import { StreamSetApi } from './api/StreamSetApi'
import { SystemApi } from './api/SystemApi'
import { TableApi } from './api/TableApi'
import { TableCategoryApi } from './api/TableCategoryApi'
import { TimeRuleApi } from './api/TimeRuleApi'
import { TimeRulePlugInApi } from './api/TimeRulePlugInApi'
import { UnitApi } from './api/UnitApi'
import { UnitClassApi } from './api/UnitClassApi'
import { WebIdHelper } from './webid/WebIdHelper'

@Injectable()
export class PIWebAPIService {


    public analysis: AnalysisApi;
    public analysisCategory: AnalysisCategoryApi;
    public analysisRule: AnalysisRuleApi;
    public analysisRulePlugIn: AnalysisRulePlugInApi;
    public analysisTemplate: AnalysisTemplateApi;
    public assetDatabase: AssetDatabaseApi;
    public assetServer: AssetServerApi;
    public attribute: AttributeApi;
    public attributeCategory: AttributeCategoryApi;
    public attributeTemplate: AttributeTemplateApi;
    public attributeTrait: AttributeTraitApi;
    public batch: BatchApi;
    public calculation: CalculationApi;
    public configuration: ConfigurationApi;
    public dataServer: DataServerApi
    public element: ElementApi
    public elementCategory: ElementCategoryApi;
    public elementTemplate: ElementTemplateApi;
    public enumerationSet: EnumerationSetApi
    public enumerationValue: EnumerationValueApi
    public eventFrame: EventFrameApi
    public home: HomeApi
    public point: PointApi
    public securityIdentity: SecurityIdentityApi
    public securityMapping: SecurityMappingApi
    public stream: StreamApi
    public streamSet: StreamSetApi
    public system: SystemApi
    public table: TableApi
    public tableCategory: TableCategoryApi
    public timeRule: TimeRuleApi
    public timeRulePlugIn: TimeRulePlugInApi
    public unit: UnitApi
    public unitClass: UnitClassApi
    public webIdHelper: WebIdHelper
    private basePath: string;
    private useKerberos: boolean;
    private username: string;
    private password: string;
    public defaultHeaders: Headers;

    constructor(private http: Http) {
    }

    public configureInstance(basePath: string, useKerberos: boolean, username?: string, password?: string) {
        this.basePath = basePath;
        this.useKerberos = useKerberos;
        this.defaultHeaders = new Headers();
        this.defaultHeaders.append('Content-Type', 'application/json');
        this.defaultHeaders.append('X-Requested-With', 'PIWebApiWrapper');
        if (this.useKerberos == false)
        {
            this.username = username;
            this.password = password;
            this.defaultHeaders.append('Authorization', ('Basic ' + btoa(this.username + ":" + this.password)));
        }

        this.analysis = new AnalysisApi(this.http, this.basePath, this.defaultHeaders);
        this.analysisCategory = new AnalysisCategoryApi(this.http, this.basePath, this.defaultHeaders);
        this.analysisRule = new AnalysisRuleApi(this.http, this.basePath, this.defaultHeaders);
        this.analysisRulePlugIn = new AnalysisRulePlugInApi(this.http, this.basePath, this.defaultHeaders);
        this.analysisTemplate = new AnalysisTemplateApi(this.http, this.basePath, this.defaultHeaders);
        this.assetDatabase = new AssetDatabaseApi(this.http, this.basePath, this.defaultHeaders);
        this.assetServer = new AssetServerApi(this.http, this.basePath, this.defaultHeaders);
        this.attribute = new AttributeApi(this.http, this.basePath, this.defaultHeaders);
        this.attributeCategory = new AttributeCategoryApi(this.http, this.basePath, this.defaultHeaders);
        this.attributeTemplate = new AttributeTemplateApi(this.http, this.basePath, this.defaultHeaders);
        this.attributeTrait= new AttributeTraitApi(this.http, this.basePath, this.defaultHeaders);
        this.batch = new BatchApi(this.http, this.basePath, this.defaultHeaders);
        this.calculation= new CalculationApi(this.http, this.basePath, this.defaultHeaders);
        this.configuration = new ConfigurationApi(this.http, this.basePath, this.defaultHeaders);
        this.dataServer = new DataServerApi(this.http, this.basePath, this.defaultHeaders);
        this.element = new ElementApi(this.http, this.basePath, this.defaultHeaders);
        this.elementCategory= new ElementCategoryApi(this.http, this.basePath, this.defaultHeaders);
        this.elementTemplate = new ElementTemplateApi(this.http, this.basePath, this.defaultHeaders);
        this.enumerationSet = new EnumerationSetApi(this.http, this.basePath, this.defaultHeaders);
        this.enumerationValue = new EnumerationValueApi(this.http, this.basePath, this.defaultHeaders);
        this.eventFrame = new EventFrameApi(this.http, this.basePath, this.defaultHeaders);
        this.home = new HomeApi(this.http, this.basePath, this.defaultHeaders);
        this.point = new PointApi(this.http, this.basePath, this.defaultHeaders);
        this.securityIdentity = new SecurityIdentityApi(this.http, this.basePath, this.defaultHeaders);
        this.securityMapping = new SecurityMappingApi(this.http, this.basePath, this.defaultHeaders);
        this.stream = new StreamApi(this.http, this.basePath, this.defaultHeaders);
        this.streamSet = new StreamSetApi(this.http, this.basePath, this.defaultHeaders);
        this.system = new SystemApi(this.http, this.basePath, this.defaultHeaders);
        this.table = new TableApi(this.http, this.basePath, this.defaultHeaders);
        this.tableCategory = new TableCategoryApi(this.http, this.basePath, this.defaultHeaders);
        this.timeRule = new TimeRuleApi(this.http, this.basePath, this.defaultHeaders);
        this.timeRulePlugIn = new TimeRulePlugInApi(this.http, this.basePath, this.defaultHeaders);
        this.unit = new UnitApi(this.http, this.basePath, this.defaultHeaders);
        this.unitClass = new UnitClassApi(this.http, this.basePath, this.defaultHeaders);
        this.webIdHelper = new WebIdHelper();
    }
}
