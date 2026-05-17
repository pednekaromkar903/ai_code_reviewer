"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeGoalScore = computeGoalScore;
function computeGoalScore(uomType, target, actual, status) {
    let score = 0;
    switch (uomType) {
        case 'MIN':
            score = target > 0 ? actual / target : 0;
            break;
        case 'MAX':
            score = actual > 0 ? target / actual : 0;
            break;
        case 'TIMELINE':
            score = status === 'COMPLETED' ? 1.0 : 0.0;
            break;
        case 'ZERO':
            score = actual === 0 ? 1.0 : 0.0;
            break;
        default:
            score = 0;
    }
    return Math.min(Math.max(score, 0), 1.5);
}
