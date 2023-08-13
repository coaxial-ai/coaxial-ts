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
import { IntegrateOktaRequest } from '../models';
// @ts-ignore
import { IntegrateOktaResponse } from '../models';
// @ts-ignore
import { ListAuthIntegrationsResponse } from '../models';
// @ts-ignore
import { ListUsersResponse } from '../models';
// @ts-ignore
import { RemoveUserRequest } from '../models';
// @ts-ignore
import { RemoveUserResponse } from '../models';
/**
 * AuthIntegrationApi - axios parameter creator
 * @export
 */
export const AuthIntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Remove specified User
         * @param {RemoveUserRequest} removeUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (removeUserRequest: RemoveUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'removeUserRequest' is not null or undefined
            assertParamExists('deleteUser', 'removeUserRequest', removeUserRequest)
            const localVarPath = `/users/delete`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(removeUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Integrate Okta
         * @param {IntegrateOktaRequest} integrateOktaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrateOkta: async (integrateOktaRequest: IntegrateOktaRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'integrateOktaRequest' is not null or undefined
            assertParamExists('integrateOkta', 'integrateOktaRequest', integrateOktaRequest)
            const localVarPath = `/auth_integration/okta/init`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(integrateOktaRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List auth integrations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAuthIntegrations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth_integration/list`;
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
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/list`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthIntegrationApi - functional programming interface
 * @export
 */
export const AuthIntegrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthIntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Remove specified User
         * @param {RemoveUserRequest} removeUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(removeUserRequest: RemoveUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RemoveUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(removeUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Integrate Okta
         * @param {IntegrateOktaRequest} integrateOktaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrateOkta(integrateOktaRequest: IntegrateOktaRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IntegrateOktaResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.integrateOkta(integrateOktaRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List auth integrations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAuthIntegrations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListAuthIntegrationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAuthIntegrations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListUsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthIntegrationApi - factory interface
 * @export
 */
export const AuthIntegrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthIntegrationApiFp(configuration)
    return {
        /**
         * 
         * @summary Remove specified User
         * @param {RemoveUserRequest} removeUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(removeUserRequest: RemoveUserRequest, options?: any): AxiosPromise<RemoveUserResponse> {
            return localVarFp.deleteUser(removeUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Integrate Okta
         * @param {IntegrateOktaRequest} integrateOktaRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrateOkta(integrateOktaRequest: IntegrateOktaRequest, options?: any): AxiosPromise<IntegrateOktaResponse> {
            return localVarFp.integrateOkta(integrateOktaRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List auth integrations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAuthIntegrations(options?: any): AxiosPromise<ListAuthIntegrationsResponse> {
            return localVarFp.listAuthIntegrations(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUsers(options?: any): AxiosPromise<ListUsersResponse> {
            return localVarFp.listUsers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthIntegrationApi - object-oriented interface
 * @export
 * @class AuthIntegrationApi
 * @extends {BaseAPI}
 */
export class AuthIntegrationApi extends BaseAPI {
    /**
     * 
     * @summary Remove specified User
     * @param {RemoveUserRequest} removeUserRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthIntegrationApi
     */
    public deleteUser(removeUserRequest: RemoveUserRequest, options?: AxiosRequestConfig) {
        return AuthIntegrationApiFp(this.configuration).deleteUser(removeUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Integrate Okta
     * @param {IntegrateOktaRequest} integrateOktaRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthIntegrationApi
     */
    public integrateOkta(integrateOktaRequest: IntegrateOktaRequest, options?: AxiosRequestConfig) {
        return AuthIntegrationApiFp(this.configuration).integrateOkta(integrateOktaRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List auth integrations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthIntegrationApi
     */
    public listAuthIntegrations(options?: AxiosRequestConfig) {
        return AuthIntegrationApiFp(this.configuration).listAuthIntegrations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthIntegrationApi
     */
    public listUsers(options?: AxiosRequestConfig) {
        return AuthIntegrationApiFp(this.configuration).listUsers(options).then((request) => request(this.axios, this.basePath));
    }
}

