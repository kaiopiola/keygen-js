/**
 * @author Kaiopiola <github.com/kaiopiola>
 * @package keygen
 * 
 * This file is part of the keygen package.
 * 
 * (c) Kaio Piola 2023 <contact@kaiopiola.dev>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Settings from './settings.js'

class Keygen extends Settings {

    constructor() {
        super()
    }

    /**
    * Output key
    * @return string generated_key
    */
    generate() {
        let numbers = this.numbers;
        let letters = this.letters;
        let characters = numbers + letters;
        let pattern = this.pattern;

        let generated_key = ""
        for (let x = 0; x < pattern.length; x++) {
            switch (pattern[x]) {
                case 'N':
                    generated_key = generated_key + numbers[Math.floor(Math.random() * numbers.length)];
                    break
                case 'L':
                    generated_key = generated_key + letters[Math.floor(Math.random() * letters.length)];
                    break
                case 'X':
                    generated_key = generated_key + characters[Math.floor(Math.random() * characters.length)];
                    break
                default:
                    generated_key = generated_key + pattern[x]
            }
        }
        return generated_key
    }

    /**
     * Outputs an unique key that doens't conflict with the array
     * @returns string generated_key
     */
    generateUnique() {
        let existing_keys = this.existing_keys
        let generated_key = this.generate()
        let keys_list = []
        while (existing_keys.includes(generated_key)) {
            generated_key = this.generate()
            keys_list.push(generated_key)
            if (this.compareKeys(existing_keys, keys_list)) {
                console.error("No more keys available")
                throw new Error('No more keys available')
            }
        }
        return generated_key
    }

    /**
     * Compares two arrays
     * @param {[]} existing_keys 
     * @param {[]} keys_list 
     * @returns boolean
     */
    compareKeys(existing_keys, keys_list) {
        let compare1 = existing_keys.filter(x => !keys_list.includes(x))
        let compare2 = keys_list.filter(x => !existing_keys.includes(x))
        if (compare1.length == 0 && compare2 == 0) {
            return true
        } else {
            return false
        }
    }
}

export default Keygen