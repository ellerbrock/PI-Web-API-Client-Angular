PI Web API Client libraries for Angular 4
===

## Overview
This repository has the source code package of the PI Web API Client libraries for Angular 4.

It was created following the steps described in this blog post published on PI Square: https://pisquare.osisoft.com/community/developers-club/blog/2017/04/06/generating-pi-web-api-client-libraries-for-angularjs-using-swagger


## Requirements.

Angular 4+


## Installation

To install this library, run:

```bash
$ npm install angular-piwebapi --save
```

## Consuming your library

Update your Angular `AppModule` by adding the PIWebAPIService as a provider:

```typescript
import { PIWebAPIService } from 'angular-piwebapi';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PIWebAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Documentation

All classes and methods are described on the [DOCUMENTATION](DOCUMENTATION.md). 

 
## Examples

Please check the [sample_main.ts](/samples/sample_main.ts) from this repository. Below there are also code snippets written in Angular 4 for you to get started using this library:

### Set up the instance of the PI Web API top level object.

If you want to use basic authentication instead of Kerberos, set useKerberos to false and set the username and password as shown below:

#### Basic authentication

```typescript
    this.piWebApiHttpService.configureInstance("https://devdata.osisoft.com/piwebapi/", false, "username", "password");
``` 

#### Kerberos authentication

```typescript
    this.piWebApiHttpService.configureInstance("https://devdata.osisoft.com/piwebapi/", true);
``` 

If you want to test if it connects, just execute the code below:

```typescript
    this.piWebApiHttpService.home.get().subscribe(res => {
        console.log(res);
    }, error => {
        console.log(error.json());
    });
``` 

### Get the PI Data Archive WebId

```typescript
    this.piWebApiHttpService.dataServer.getByPath('\\\\SERVERNAME').subscribe(res => {
        console.log(res); 
    }, error => {
        console.log(error.json());
    });
```

### Create a new PI Point

```typescript
    var pointName = "SINUSOID_TEST74" + Math.trunc(100000*Math.random());
    var newPoint = new PIPoint(null, null, pointName, null, "Test PI Point for Angular PI Web API Client", "classic", "float32", null, null, null, false);    
    this.piWebApiHttpService.dataServer.createPoint(res.WebId, newPoint).subscribe(res => {
		console.log(res);
	}, error => {
		console.log(error.json());
	});       
```

### Get PI Point WebId

```typescript
    this.piWebApiHttpService.point.getByPath("\\\\MARC-PI2016\\sinusoid").subscribe(res => {
        console.log(res);
    }, error => {
        console.log(error.json());
    });
```

### Get recorded values in bulk using the StreamSet/GetRecordedAdHoc

```typescript
    var point1webId = "P0QuorgJ0MskeiLb6TmEmH5gAQAAAATUFSQy1QSTIwMTZcU0lOVVNPSUQ";
    var point2webId = "P0QuorgJ0MskeiLb6TmEmH5gAgAAAATUFSQy1QSTIwMTZcU0lOVVNPSURV";
    var point3webId = "P0QuorgJ0MskeiLb6TmEmH5g9AQAAATUFSQy1QSTIwMTZcQ0RUMTU4";


    var webIds = []
    webIds.push(point1webId);
    webIds.push(point2webId);
    webIds.push(point3webId);

    this.piWebApiHttpService.streamSet.getRecordedAdHoc(webIds, null, "*", null, true, 1000, null, "*-3d", null).subscribe(res => {
        console.log(res);
    }, error => {
        console.log(error.json());
    });            
```

### Send values in bulk using the StreamSet/UpdateValuesAdHoc

```typescript
    let streamValuesItems : PIItemsStreamValues = new PIItemsStreamValues()
    let streamValue1 : PIStreamValues = new PIStreamValues()
    let streamValue2 : PIStreamValues = new PIStreamValues()
    let streamValue3 : PIStreamValues = new PIStreamValues()

    let value1 : PITimedValue = new PITimedValue()
    let value2 : PITimedValue = new PITimedValue()
    let value3 : PITimedValue = new PITimedValue()
    let value4 : PITimedValue = new PITimedValue()
    let value5 : PITimedValue = new PITimedValue()
    let value6 : PITimedValue = new PITimedValue()

    value1.Value = 2
    value1.Timestamp = "*-1d"
    value2.Value = 3
    value2.Timestamp = "*-2d"
    value3.Value = 4
    value3.Timestamp = "*-1d"
    value4.Value = 5
    value4.Timestamp = "*-2d"
    value5.Value = 6
    value5.Timestamp = "*-1d"
    value6.Value = 7
    value6.Timestamp = "*-2d"

    streamValue1.WebId = point1webId
    streamValue2.WebId = point2webId
    streamValue3.WebId = point3webId

    var values1 = [];
    values1.push(value1)
    values1.push(value2)
    streamValue1.Items = values1

    var values2 = [];
    values2.push(value3)
    values2.push(value4)
    streamValue2.Items = values2

    var values3 = [];
    values3.push(value5)
    values3.push(value6)
    streamValue3.Items = values3

    var streamValues = []
    streamValues.push(streamValue1)
    streamValues.push(streamValue2)
    streamValues.push(streamValue3)
    this.piWebApiHttpService.streamSet.updateValuesAdHoc(streamValues, null, null).subscribe(res => {
        console.log(res);
    }, error => {
        console.log(error.json());
    });
```


### Using PI Web API Batch

```typescript
    var pirequest = {};
    pirequest["4"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/points?path=\\\\MARC-PI2016\\sinusoid",
        "Headers": {
            "Cache-Control": "no-cache"
        }
    };
    pirequest["5"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/points?path=\\\\MARC-PI2016\\cdt158",
        "Headers": {
            "Cache-Control": "no-cache"
        }
    };
    pirequest["6"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/streamsets/value?webid={0}&webid={1}",
        "Parameters": [
            "$.4.Content.WebId",
            "$.5.Content.WebId"
        ],
        "ParentIds": [
            "4",
            "5"
        ]
    };
    this.piWebApiHttpService.batch.execute(pirequest).subscribe(res => {
        console.log(res);
    }, error => {
        console.log(error.json());
    }); 
```

If you know the name of the action and controller, you probably need to make a call similar to:

PIWebAPIService.{controllerName}.{actionName}(inputs);

Please read the PI Web API programming reference to find out the names of the actions, controllers and inputs.

If you want to find out the order of the inputs, please refer to [DOCUMENTATION](DOCUMENTATION.md) and search for the method you want to use.


## Licensing
Copyright 2017 OSIsoft, LLC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
Please see the file named [LICENSE.md](LICENSE.md).