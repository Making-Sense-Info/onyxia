/* eslint-disable no-template-curly-in-string */
import type {
    LocalizedString,
    JSONSchemaObject,
    onyxiaFriendlyNameFormFieldPath,
    onyxiaIsSharedFormFieldPath
} from "core/ports/OnyxiaApi";

export type ApiTypes = {
    "/public/ip": {
        ip: string;
    };
    "/public/configuration": {
        build: {
            version: string;
        };
        regions: {
            id: string;
            services: {
                allowedURIPattern: string;
                customValues?: Record<string, unknown>;
                expose: {
                    domain: string;
                    ingressClassName: string;
                    ingress?: boolean;
                    route?: boolean;
                    istio?: {
                        enabled: boolean;
                        gateways: string[];
                    };
                };
                defaultConfiguration?: {
                    ipprotection?: boolean;
                    networkPolicy?: boolean;
                    kafka?: {
                        URL: string;
                        topicName: string;
                    };
                    from?: unknown[];
                    tolerations?: unknown[];
                    nodeSelector?: Record<string, unknown>;
                    startupProbe:
                        | {
                              failureThreshold?: number;
                              initialDelaySeconds?: number;
                              periodSeconds?: number;
                              successThreshold?: number;
                              timeoutSeconds?: number;
                          }
                        | undefined;
                    sliders?: Record<
                        string,
                        {
                            sliderMin: number;
                            sliderMax: number;
                            sliderStep: number;
                            sliderUnit: string;
                        }
                    >;
                    resources?: {
                        cpuRequest?: `${number}${string}`;
                        cpuLimit?: `${number}${string}`;
                        memoryRequest?: `${number}${string}`;
                        memoryLimit?: `${number}${string}`;
                        disk?: `${number}${string}`;
                        gpu?: `${number}`;
                    };
                };
                monitoring?: {
                    URLPattern?: string;
                    //"https://grafana.lab.sspcloud.fr/d/kYYgRWBMz/users-services?orgId=1&refresh=5s&var-namespace=$NAMESPACE&var-instance=$INSTANCE"
                };
                initScript: string;
                k8sPublicEndpoint: {
                    oidcConfiguration?: {
                        issuerURI?: string;
                        clientID: string;
                    };
                    URL?: string;
                };
            };
            data?: {
                S3?: {
                    monitoring?: {
                        URLPattern: string;
                    };
                    oidcConfiguration?: {
                        issuerURI?: string;
                        clientID: string;
                    };
                    defaultDurationSeconds?: number;
                } & (
                    | {
                          type: "minio";
                          URL: string;
                          region?: string;
                      }
                    | {
                          type: "amazon";
                          region: string;
                          roleARN: string;
                          roleSessionName: string;
                      }
                );
            };
            vault?: {
                URL: string;
                kvEngine: string;
                role: string;
                authPath?: string;
                oidcConfiguration?: {
                    issuerURI?: string;
                    clientID: string;
                };
            };
            proxyInjection?: {
                httpProxyUrl: string;
                httpsProxyUrl: string;
                noProxy: string;
            };
            packageRepositoryInjection?: {
                cranProxyUrl: string;
                condaProxyUrl: string;
                packageManagerUrl: string;
                pypiProxyUrl: string;
            };

            certificateAuthorityInjection?: {
                cacerts: string;
                pathToCaBundle: string;
            };
        }[];
        oidcConfiguration?: {
            issuerURI: string;
            clientID: string;
        };
    };
    "/public/catalogs": {
        catalogs: {
            id: string;
            name: LocalizedString;
            location: string;
            description: LocalizedString;
            status: "PROD" | "TEST";
            catalog: {
                entries: Record<
                    string,
                    {
                        description?: string;
                        version: string;
                        type: "library" | "application";
                        icon?: string | undefined;
                        home?: string | undefined;
                    }[]
                >;
            };
            highlightedCharts?: string[];
        }[];
    };
    "/public/catalogs/${catalogId}/charts/${chartName}/versions/${chartVersion}": {
        config: JSONSchemaObject;
        sources?: string[];
        dependencies?: {
            name: string;
            repository: string;
            version: string;
        }[];
    };
    "/my-lab/services": {
        apps: {
            id: string;
            urls: string[];
            env: {
                [onyxiaIsSharedFormFieldPath]: "true" | "false";
                [onyxiaFriendlyNameFormFieldPath]: string;
                "onyxia.owner": string;
                [key: string]: string;
            };
            startedAt: number;
            tasks: {
                containers: { ready: boolean }[];
            }[];
            postInstallInstructions: string | undefined;
            chart: string;
            appVersion: string;
            revision: string;
        }[];
    };
    "/user/info": {
        email: string;
        idep: string;
        nomComplet: string;
        projects: {
            id: string;
            name: string;
            group?: string;
            bucket: string;
            namespace: string;
            vaultTopDir: string;
        }[];
    };
};
