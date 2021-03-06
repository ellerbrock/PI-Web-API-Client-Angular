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

import * as Models from './models';

export class PISystemStatus {
	public UpTimeInMinutes?: number;
	public State?: string;
	public CacheInstances?: number;
	public WebException?: Models.PIWebException;
	constructor(upTimeInMinutes?: number, state?: string, cacheInstances?: number, webException?: Models.PIWebException)
	{
		if (upTimeInMinutes!=null)
		{
			this.UpTimeInMinutes=upTimeInMinutes
		}
		if (state!=null)
		{
			this.State=state
		}
		if (cacheInstances!=null)
		{
			this.CacheInstances=cacheInstances
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
