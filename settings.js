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

class Settings {

    numbers
    letters
    pattern
    existing_keys

    constructor() {
        this.numbers = '0123456789'
        this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.pattern = 'XXXXX-XXXXX-XXXXX'
        this.existing_keys = []
    }

    /**
     * Set allowed numbers
     * @param string numbers String of allowed numbers i.e. 123456
     * @return void
     **/
    set setNumbers(value) {
        this.numbers = value
    }

    /**
   * Set allowed letters
   * @param string letters String of allowed letters i.e. ABCDE
   * @return void
   **/
    set setLetters(value) {
        this.letters = value
    }

    /**
     * Set pattern format
     * @param string pattern String of allowed format i.e. XXXX-NNNN-LLLL
     * @return void
     **/
    set setPattern(value) {
        this.pattern = value
    }

    /**
     * Set existing keys to avoid duplicates
     * @param array existing_keys Array of existing keys
     * @return void
     */
    set setExistingKeys(value) {
        this.existing_keys = value
    }
}

export default Settings