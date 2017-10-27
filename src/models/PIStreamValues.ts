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

export class PIStreamValues {
	public WebId?: string;
	public Name?: string;
	public Path?: string;
	public Items?: Array<Models.PITimedValue>;
	public UnitsAbbreviation?: string;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, name?: string, path?: string, items?: Array<Models.PITimedValue>, unitsAbbreviation?: string, links?: { [key: string]: string; })
	{
		if (webId!=null)
		{
			this.WebId=webId
		}
		if (name!=null)
		{
			this.Name=name
		}
		if (path!=null)
		{
			this.Path=path
		}
		if (items!=null)
		{
			this.Items=items
		}
		if (unitsAbbreviation!=null)
		{
			this.UnitsAbbreviation=unitsAbbreviation
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
