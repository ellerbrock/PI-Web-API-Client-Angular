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

import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Models from '../models/models';

@Injectable()
export class UnitClassApi {

		private basePath : string = null;
		private defaultHeaders : Headers;
		private withCredentials : boolean;


		constructor(protected http: Http, basePath: string, defaultHeaders : Headers) {
			this.basePath = basePath;
			this.defaultHeaders = defaultHeaders;
			if (this.defaultHeaders.keys().length == 1)
			{
				this.withCredentials = true;
			}
			else
			{
				this.withCredentials = false;
			}
		}

		private extendObj<T1,T2>(objA: any, objB: any) {
			for(let key in objB){
				if(objB.hasOwnProperty(key)){
					objA[key] = objB[key];
				}
			}
			return <T1&T2>objA;
		}

		public getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIUnitClass>  { 
			return this.getByPathWithHttpInfo(path, selectedFields, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getByPathWithHttpInfo(path: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (path === null || path === undefined) {
				throw new Error('Required parameter path was null or undefined when calling getByPath.');
			}

			if ((path !== undefined) && (path !== null)) {
				queryParameters.set('path', <any>path);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public get(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIUnitClass>  { 
			return this.getWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling get.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public update(webId: string, unitClassDTO: Models.PIUnitClass, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateWithHttpInfo(webId, unitClassDTO, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public updateWithHttpInfo(webId: string, unitClassDTO: Models.PIUnitClass, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling update.');
			}

			if (unitClassDTO === null || unitClassDTO === undefined) {
				throw new Error('Required parameter unitClassDTO was null or undefined when calling update.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
				headers: headers,
				body: JSON.stringify(unitClassDTO),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public delete(webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteWithHttpInfo(webId, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public deleteWithHttpInfo(webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling delete.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Delete,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getCanonicalUnit(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIUnit>  { 
			return this.getCanonicalUnitWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getCanonicalUnitWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}/canonicalunit'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getCanonicalUnit.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getUnits(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIUnit>  { 
			return this.getUnitsWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getUnitsWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}/units'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getUnits.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public createUnit(webId: string, unitDTO: Models.PIUnit, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createUnitWithHttpInfo(webId, unitDTO, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public createUnitWithHttpInfo(webId: string, unitDTO: Models.PIUnit, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/unitclasses/{webId}/units'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createUnit.');
			}

			if (unitDTO === null || unitDTO === undefined) {
				throw new Error('Required parameter unitDTO was null or undefined when calling createUnit.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(unitDTO),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
