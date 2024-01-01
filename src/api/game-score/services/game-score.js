'use strict';

/**
 * game-score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-score.game-score');
