'use strict';

/**
 * user-demography service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-demography.user-demography');
