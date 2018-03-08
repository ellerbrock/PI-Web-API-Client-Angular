# PIWebAPIService

## **configureInstance**
> configureInstance(basePath: string, useKerberos: boolean, username?: string, password?: string)

Creates an instance of the PI Web API client top level object. The parameter useKerberos = true for Kerberos authentication. For Basic Authentication, useKerberos = false with the username and password.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
**baseUrl** | **string**| PI Web API base service url. | [required]
**useKerberos** | **boolean**| Select true for Kerberos auth or false for Basic auth. | [required]
**username** | **string**| The username for basic authentication to authenticate against PI Web API. 
**password** | **string**| The password for basic authentication to authenticate against PI Web API. 

## **Properties**

Property | Controller
------------ | -------------
**Home** | [**HomeApi**](/docs/api/HomeApi.md)
**Analysis** | [**AnalysisApi**](/docs/api/AnalysisApi.md)
**AnalysisCategory** | [**AnalysisCategoryApi**](/docs/api/AnalysisCategoryApi.md)
**AnalysisRulePlugIn** | [**AnalysisRulePlugInApi**](/docs/api/AnalysisRulePlugInApi.md)
**AnalysisRule** | [**AnalysisRuleApi**](/docs/api/AnalysisRuleApi.md)
**AnalysisTemplate** | [**AnalysisTemplateApi**](/docs/api/AnalysisTemplateApi.md)
**AssetDatabase** | [**AssetDatabaseApi**](/docs/api/AssetDatabaseApi.md)
**AssetServer** | [**AssetServerApi**](/docs/api/AssetServerApi.md)
**AttributeCategory** | [**AttributeCategoryApi**](/docs/api/AttributeCategoryApi.md)
**Attribute** | [**AttributeApi**](/docs/api/AttributeApi.md)
**AttributeTemplate** | [**AttributeTemplateApi**](/docs/api/AttributeTemplateApi.md)
**AttributeTrait** | [**AttributeTraitApi**](/docs/api/AttributeTraitApi.md)
**Batch** | [**BatchApi**](/docs/api/BatchApi.md)
**Calculation** | [**CalculationApi**](/docs/api/CalculationApi.md)
**Channel** | [**ChannelApi**](/docs/api/ChannelApi.md)
**DataServer** | [**DataServerApi**](/docs/api/DataServerApi.md)
**ElementCategory** | [**ElementCategoryApi**](/docs/api/ElementCategoryApi.md)
**Element** | [**ElementApi**](/docs/api/ElementApi.md)
**ElementTemplate** | [**ElementTemplateApi**](/docs/api/ElementTemplateApi.md)
**EnumerationSet** | [**EnumerationSetApi**](/docs/api/EnumerationSetApi.md)
**EnumerationValue** | [**EnumerationValueApi**](/docs/api/EnumerationValueApi.md)
**EventFrame** | [**EventFrameApi**](/docs/api/EventFrameApi.md)
**Point** | [**PointApi**](/docs/api/PointApi.md)
**SecurityIdentity** | [**SecurityIdentityApi**](/docs/api/SecurityIdentityApi.md)
**SecurityMapping** | [**SecurityMappingApi**](/docs/api/SecurityMappingApi.md)
**Stream** | [**StreamApi**](/docs/api/StreamApi.md)
**StreamSet** | [**StreamSetApi**](/docs/api/StreamSetApi.md)
**System** | [**SystemApi**](/docs/api/SystemApi.md)
**Configuration** | [**ConfigurationApi**](/docs/api/ConfigurationApi.md)
**TableCategory** | [**TableCategoryApi**](/docs/api/TableCategoryApi.md)
**Table** | [**TableApi**](/docs/api/TableApi.md)
**TimeRulePlugIn** | [**TimeRulePlugInApi**](/docs/api/TimeRulePlugInApi.md)
**TimeRule** | [**TimeRuleApi**](/docs/api/TimeRuleApi.md)
**UnitClass** | [**UnitClassApi**](/docs/api/UnitClassApi.md)
**Unit** | [**UnitApi**](/docs/api/UnitApi.md)
**WebIdHelper** | [**WebIdHelper**](/docs/Api/WebIdHelper.md)

[[Back to Model list]](../DOCUMENTATION.md#documentation-for-models) [[Back to API list]](../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to DOCUMENTATION]](../DOCUMENTATION.md)
