/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isEven = require( '@stdlib/math-base-assert-is-even' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {PositiveInteger} [options.period] - number of iterations before a square wave repeats
* @param {number} [options.min] - minimum amplitude
* @param {number} [options.max] - maximum amplitude
* @param {integer} [options.offset] - phase offset (in units of iterations)
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'iter': 100
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( '0tZ2V,FD', options ) );
	}
	if ( hasOwnProp( options, 'period' ) ) {
		opts.period = options.period;
		if ( !isPositiveInteger( options.period ) || !isEven( options.period ) ) { // eslint-disable-line max-len
			return new TypeError( format( '0tZ8Q,JL', 'period', options.period ) );
		}
	}
	if ( hasOwnProp( options, 'min' ) ) {
		opts.min = options.min;
		if ( !isNumber( options.min ) || isnan( options.min ) ) {
			return new TypeError( format( '0tZ8P,GU', 'min', options.min ) );
		}
	}
	if ( hasOwnProp( options, 'max' ) ) {
		opts.max = options.max;
		if ( !isNumber( options.max ) || isnan( options.max ) ) {
			return new TypeError( format( '0tZ8P,GU', 'max', options.max ) );
		}
	}
	if ( hasOwnProp( options, 'offset' ) ) {
		opts.offset = options.offset;
		if ( !isInteger( options.offset ) ) {
			return new TypeError( format( '0tZ8M,JG', 'offset', options.offset ) );
		}
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( options.iter ) ) {
			return new TypeError( format( '0tZ2t,G9', 'iter', options.iter ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;