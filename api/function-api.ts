/* tslint:disable */
/* eslint-disable */
/**
 * The Coaxial API
 * The Coaxial REST API. Please see https://docs.coaxial.ai for more details.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: team@coaxial.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { IntegrateFunctionRequest } from '../models';
// @ts-ignore
import { IntegrateFunctionResponse } from '../models';
// @ts-ignore
import { ListFunctionsResponse } from '../models';
// @ts-ignore
import { RemoveFunctionRequest } from '../models';
// @ts-ignore
import { RemoveFunctionResponse } from '../models';
/**
 * FunctionApi - axios parameter creator
 * @export
 */
export const FunctionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Integrate model functions
         * @param {IntegrateFunctionRequest} integrateFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrateFunction: async (integrateFunctionRequest: IntegrateFunctionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'integrateFunctionRequest' is not null or undefined
            assertParamExists('integrateFunction', 'integrateFunctionRequest', integrateFunctionRequest)
            const localVarPath = `/functions/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(integrateFunctionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List model functions
         * @param {any} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFunctions: async (userId?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/functions/list/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Remove model functions
         * @param {RemoveFunctionRequest} removeFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFunction: async (removeFunctionRequest: RemoveFunctionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'removeFunctionRequest' is not null or undefined
            assertParamExists('removeFunction', 'removeFunctionRequest', removeFunctionRequest)
            const localVarPath = `/functions/remove`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(removeFunctionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FunctionApi - functional programming interface
 * @export
 */
export const FunctionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FunctionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Integrate model functions
         * @param {IntegrateFunctionRequest} integrateFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrateFunction(integrateFunctionRequest: IntegrateFunctionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntegrateFunctionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.integrateFunction(integrateFunctionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List model functions
         * @param {any} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFunctions(userId?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListFunctionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFunctions(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove model functions
         * @param {RemoveFunctionRequest} removeFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFunction(removeFunctionRequest: RemoveFunctionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RemoveFunctionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFunction(removeFunctionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FunctionApi - factory interface
 * @export
 */
export const FunctionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FunctionApiFp(configuration)
    return {
        /**
         * 
         * @summary Integrate model functions
         * @param {IntegrateFunctionRequest} integrateFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrateFunction(integrateFunctionRequest: IntegrateFunctionRequest, options?: any): AxiosPromise<IntegrateFunctionResponse> {
            return localVarFp.integrateFunction(integrateFunctionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List model functions
         * @param {any} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFunctions(userId?: any, options?: any): AxiosPromise<ListFunctionsResponse> {
            return localVarFp.listFunctions(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove model functions
         * @param {RemoveFunctionRequest} removeFunctionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFunction(removeFunctionRequest: RemoveFunctionRequest, options?: any): AxiosPromise<RemoveFunctionResponse> {
            return localVarFp.removeFunction(removeFunctionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FunctionApi - object-oriented interface
 * @export
 * @class FunctionApi
 * @extends {BaseAPI}
 */
export class FunctionApi extends BaseAPI {
    /**
     * 
     * @summary Integrate model functions
     * @param {IntegrateFunctionRequest} integrateFunctionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionApi
     */
    public integrateFunction(integrateFunctionRequest: IntegrateFunctionRequest, options?: AxiosRequestConfig) {
        return FunctionApiFp(this.configuration).integrateFunction(integrateFunctionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List model functions
     * @param {any} [userId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionApi
     */
    public listFunctions(userId?: any, options?: AxiosRequestConfig) {
        return FunctionApiFp(this.configuration).listFunctions(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove model functions
     * @param {RemoveFunctionRequest} removeFunctionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionApi
     */
    public removeFunction(removeFunctionRequest: RemoveFunctionRequest, options?: AxiosRequestConfig) {
        return FunctionApiFp(this.configuration).removeFunction(removeFunctionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

