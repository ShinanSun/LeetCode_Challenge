/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    damage.sort((a, b) => b - a);
    let armorRound = 0;
    if (damage[0] > armor) {
        armorRound = damage[0] - armor;
    }
    let res = armorRound;
    for (let i = 1; i < damage.length; i++) {
        res += damage[i];
    }
    
    return res + 1;
};