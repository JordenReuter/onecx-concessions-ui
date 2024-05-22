/**
 * onecx-consessions internal service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RuleConfiguration } from './ruleConfiguration';


export interface TravelConcessionRule { 
    modificationCount?: number;
    creationDate?: string;
    creationUser?: string;
    modificationDate?: string;
    modificationUser?: string;
    id?: string;
    state?: string;
    type?: TravelConcessionRuleTypeEnum;
    name?: string;
    children?: Array<TravelConcessionRule>;
    configs?: Array<RuleConfiguration>;
}
export enum TravelConcessionRuleTypeEnum {
    Age = 'age',
    Contingent = 'contingent',
    PersonRelation = 'person_relation',
    PersonAttribute = 'person_attribute',
    And = 'and',
    Or = 'or',
    Not = 'not'
};


