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

import * as Models from './models';

export class PIAttributeTemplate {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public Type?: string;
	public TypeQualifier?: string;
	public DefaultUnitsName?: string;
	public DefaultValue?: any;
	public DataReferencePlugIn?: string;
	public ConfigString?: string;
	public IsConfigurationItem?: boolean;
	public IsExcluded?: boolean;
	public IsHidden?: boolean;
	public IsManualDataEntry?: boolean;
	public HasChildren?: boolean;
	public CategoryNames?: Array<string>;
	public TraitName?: string;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, type?: string, typeQualifier?: string, defaultUnitsName?: string, defaultValue?: any, dataReferencePlugIn?: string, configString?: string, isConfigurationItem?: boolean, isExcluded?: boolean, isHidden?: boolean, isManualDataEntry?: boolean, hasChildren?: boolean, categoryNames?: Array<string>, traitName?: string, links?: { [key: string]: string; })
	{
		if (webId!=null)
		{
			this.WebId=webId
		}
		if (id!=null)
		{
			this.Id=id
		}
		if (name!=null)
		{
			this.Name=name
		}
		if (description!=null)
		{
			this.Description=description
		}
		if (path!=null)
		{
			this.Path=path
		}
		if (type!=null)
		{
			this.Type=type
		}
		if (typeQualifier!=null)
		{
			this.TypeQualifier=typeQualifier
		}
		if (defaultUnitsName!=null)
		{
			this.DefaultUnitsName=defaultUnitsName
		}
		if (defaultValue!=null)
		{
			this.DefaultValue=defaultValue
		}
		if (dataReferencePlugIn!=null)
		{
			this.DataReferencePlugIn=dataReferencePlugIn
		}
		if (configString!=null)
		{
			this.ConfigString=configString
		}
		if (isConfigurationItem!=null)
		{
			this.IsConfigurationItem=isConfigurationItem
		}
		if (isExcluded!=null)
		{
			this.IsExcluded=isExcluded
		}
		if (isHidden!=null)
		{
			this.IsHidden=isHidden
		}
		if (isManualDataEntry!=null)
		{
			this.IsManualDataEntry=isManualDataEntry
		}
		if (hasChildren!=null)
		{
			this.HasChildren=hasChildren
		}
		if (categoryNames!=null)
		{
			this.CategoryNames=categoryNames
		}
		if (traitName!=null)
		{
			this.TraitName=traitName
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
